// 12. Final Test
var FinalTest = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": 29021,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>You are responsible for a web application that consists of an Elastic Load Balancer (ELB) in front of an Auto Scaling group of EC2 instances. Before deploying a new version of the application, a new AMI was created and the Auto Scaling Group was updated with a new launch configuration that refers to this new AMI. During the deployment, you received complaints from users that the website was responding with errors. All instances passed the ELB health checks. What should you do in order to avoid errors for future deployments? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answers - C &amp; D</strong></p>\n\n<p>In this scenario, the ELB health check was passed which implies that the instances were successfully deployed using the new AMIs by the launch configuration and Auto Scaling group. The deployment was successful, but as the users started using the application, they started receiving the error. So, it implies that the errors are related to the application itself, not the setup.&nbsp;This is a description of deployment involving a configuration with Elastic Load Balancing (ELB) health checks and an Auto Scaling group.&nbsp; An interesting way to approach this question is by relying on advanced settings in the services in place. Instance health is determined by the EC2 status checks or the aggregate of health checks when multiple ELB target groups report their statuses.&nbsp; An advanced way to customize tests as much as possible is by forwarding the request to Lambda functions registered as targets. Again, only ALBs support the lambda target type. It is also important to note that Amazon recommends using launch templates instead of launch configurations.</p>\n\n<p><strong>Option A is incorrect</strong> because setting the short period of health checks will not be useful in this scenario.</p>\n\n<p><strong>Option B is incorrect</strong> because although it is possible to monitor an instance for recovery with CloudWatch, a launch configuration cannot be changed once created. Plus, assuming recovery, instance recovery via CloudWatch alarm actions only work for system status checks while this question is about instance status checks depending on ELB reporting.&nbsp;</p>\n\n<p><strong>Option C is CORRECT</strong> because the current health check might be just checking whether the application/website is reachable i.e. it may not be currently checking if the application is fully functioning &mdash;with &quot;fully&quot; meaning based on the criteria to test via a Lambda function e.g. HTTP/S listeners, URL paths, headers. If the health check is configured to test the application with these conditions, it will stop deploying the instances with the faulty application.</p>\n\n<p><strong>Option D is CORRECT </strong>because doubling the Auto Scaling size will give some lead time for instances to become healthy before the old instances get terminated. This simulates a Blue/Green deployment.</p>\n\n<p><strong>Option E is incorrect</strong> because increasing the unhealthy threshold will not help this scenario since it does not prevent unhealthy instances from being deployed.</p>\n\n<p><strong>References:</strong></p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/change-launch-config.html\">change-launch-config</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-elb-healthcheck.html\">elb-healthcheck</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/lambda-functions.html\">load-balancer-lambda-function</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html\">ec2-instance-recover</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html\">viewing-metrics-with-cloudwatch</a></li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 85079,
          "question_id": 29021,
          "answers": [
            {
              "question_id": "29021",
              "choice": "<p>Add an Elastic Load Balancing health check to the Auto Scaling group. Set a short period for the health checks to operate as soon as possible to prevent premature registration of the instance to the load balancer.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "29021",
              "choice": "<p>Enable EC2 instance CloudWatch alerts to change the launch configuration AMI to the previous one. Gradually terminate instances that are using the new AMI.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "29021",
              "choice": "<p>Set the Elastic Load Balancing health check that fully tests application health and returns an error if the tests fail.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "29021",
              "choice": "<p>Create a new launch configuration that refers to the new AMI, and associate it with the Auto Scaling group. Double the size of the Auto Scaling group, wait for the new instances to become healthy, and reduce back to the original size. If new instances do not become healthy, associate the previous launch configuration.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "29021",
              "choice": "<p>Increase the Elastic Load Balancing Unhealthy Threshold to a higher value to prevent an unhealthy instance from going into service behind the load balancer.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 29054,
      "topic_id": 363,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>Which of the following are correct statements with policy evaluation logic in AWS Identity and Access Management?</p>\r\n\r\n<p>Choose 2 answers from the below options.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer - C and E</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because explicit deny always overrides an explicit allow.</li>\r\n\t<li>Option B is incorrect because all requests are denied by default.</li>\r\n\t<li>Option C is CORRECT because an explicit allow overrides the default deny.</li>\r\n\t<li>Option D is incorrect because explicit deny cannot be overridden by an explicit allow.</li>\r\n\t<li>Option E is CORRECT because all requests are denied by default.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The below diagram shows the evaluation logic of IAM policies. And as per the evaluation logic, it is clear that the above scenario leads to a default deny.</p>\r\n\r\n<p>&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_oe4pzj.png\" style=\"height:600px; width:479px\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on the IAM policy evaluation logic, please refer to the link-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 19171,
          "question_id": 29054,
          "answers": [
            {
              "choice": "<p>An explicit deny does not override an explicit allow.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>By default, all requests are allowed.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>An explicit allow overrides default deny.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>An explicit allow overrides an explicit deny.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>By default, all requests are denied.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for Organizational Complexity"
    },
    {
      "question_id": 28986,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>An online gaming server, which you have recently increased its IOPS performance&nbsp;by creating a RAID 0 configuration, has now started to have bottleneck problems due to your instance bandwidth. Which of the following would be the best solution for this to increase throughput?</p>\r\n\r\n<p>Choose the correct answer from the below options.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer - A</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because SR-IOV helps achieve higher network throughput, lower CPU utilization, and lower network latency which can translate into supporting more VMs per host, delivering increased network bandwidth utilization on the host, and providing greater performance predictability to the instances.</li>\r\n\t<li>Option B is incorrect because having all the instances in the same AZ does not necessarily increase the throughput.</li>\r\n\t<li>Option C is incorrect because the RAID 1 configuration which has data mirroring, provides redundancy of data for high availability.&nbsp;It does not increase the throughput.</li>\r\n\t<li>Option D is incorrect because this option will help in achieving high availability, not increased throughput.</li>\r\n</ul>\r\n\r\n<p><strong>More information on SR-IOV:</strong></p>\r\n\r\n<p>Enhanced networking uses single root I/O virtualization (SR-IOV) to provide high-performance networking capabilities on supported instance types. SR-IOV is a method of device virtualization that provides higher I/O performance and lower CPU utilization when compared to traditional virtualized network interfaces. Enhanced networking provides higher bandwidth, higher packet per second (PPS) performance, and consistently lower inter-instance latency.&nbsp;</p>\r\n\r\n<p>Reference Link:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enhanced-networking.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enhanced-networking.html</a></li>\r\n</ul>\r\n\r\n<p><strong>Note:</strong></p>\r\n\r\n<p>This is a very challenging question.<br />\r\nThe answers are very&nbsp;similar. But there is still a&nbsp;very clear answer. Let me dive deeply&nbsp;into each option.<br />\r\n------------------------<br />\r\nA. Single Root I/O Virtualization (SR-IOV) on all the instances</p>\r\n\r\n<ol>\r\n\t<li>Here, we are accessing NIC directly and exempting the virtualization layer. It increases the speed by emulating the vNIC and &quot;Visualizing the network adapter on the physical host&quot;.</li>\r\n</ol>\r\n\r\n<p>B. Move all your EC2 instances to the same availability Zone</p>\r\n\r\n<ol>\r\n\t<li>This is not the correct option as it will lose high availability. It also does not solve the&nbsp;bottleneck&nbsp;problems.</li>\r\n</ol>\r\n\r\n<p>C. Use a RAID 1 configuration instead of RAID 0</p>\r\n\r\n<ol>\r\n\t<li>This is not the correct option because there is no I/O performance enhancement.</li>\r\n</ol>\r\n\r\n<p>D. Use instance store backed instances and strip the attached ephemeral storage and use DRBD Asynchronous Replication.</p>\r\n\r\n<ol>\r\n\t<li>DRBD produces two mirror copies of data. When the primary failed, the standby has whatever data the primary has just before the crash. When the standby starts up, the RDBMS goes through the normal recovery and boot up. It&#39;s the same as the primary crashed and being started up again.</li>\r\n\t<li>It asks for &quot;DRBD Asynchronous Replication&quot;. Here, you should know the following points.\r\n\t<ul>\r\n\t\t<li>\r\n\t\t<p>Asynchronous: in case of forced failover: Data loss</p>\r\n\r\n\t\t<ul>\r\n\t\t\t<li>\r\n\t\t\t<p>in our case, even we compromise all other factors like doubling the billing, we can not ensure data.&nbsp;&nbsp;</p>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p>Semi-synchronous:&nbsp;No write is lost in case of forced failover</p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p>Synchronous: No loss of data in all cases</p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Here you should know 2 factors. You need to create a backup of each instance.&nbsp;You need to double the number&nbsp;of instances and&nbsp;the size of volumes.\r\n\t<ul>\r\n\t\t<li>Double billing:&nbsp;It&nbsp;will have primary and secondary EC2s. If the primary fails, the traffic will automatically be diverted to the secondary. Each EC2 primary and secondary will have its own EBS.</li>\r\n\t</ul>\r\n\t</li>\r\n</ol>\r\n\r\n<p>------------------------&nbsp;<br />\r\nKeep in mind our challenge:</p>\r\n\r\n<ul>\r\n\t<li>&quot;Started to have bottleneck&nbsp;problem due to instance bandwidth.&quot;</li>\r\n\t<li>The question is not asking you to change the RAID 0 configuration.</li>\r\n</ul>\r\n\r\n<p><br />\r\nIn brief, to answer this question:&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>If we go for option D: Even we are ready to pay double-billing, our data is not safe. Also, it is asking to change the RAID 0, which created a problem for us, and the question starts after RAID 0. Option D is fully wrong.</li>\r\n\t<li>if we go for option A: This helps us increase I/O by taking leverage of &quot;Visualizing the network adapter on the physical host.&quot;</li>\r\n</ul>\r\n\r\n<p>Hence answer A is correct.&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 19103,
          "question_id": 28986,
          "answers": [
            {
              "choice": "<p>Use Single Root I/O Virtualization (SR-IOV) on all the instances.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Move all your EC2 instances to the same availability zone.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a RAID 1 configuration instead of RAID 0.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use instance store backed instances and stripe the attached ephemeral storage devices and use DRBD Asynchronous Replication.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 29022,
      "topic_id": 363,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You have deployed a web application targeting a global audience across multiple AWS Regions under the domain name example.com. You decide to use Route53 Latency-Based Routing to serve web requests to the users from the region closest to them. To provide business continuity in the event of server downtime,&nbsp;you configure weighted record sets associated with two web servers in separate Availability Zones per region.</p>\r\n\r\n<p>During a DR test, you notice that when you disable all web servers in one of the regions, Route53 does not automatically direct all users to the other region. What could be happening? (Choose 2 answers)</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer - B &amp; E</p>\r\n\r\n<p>Option A is incorrect because you can set up weighted record sets as the failover or secondary recordset.</p>\r\n\r\n<p>Option B is CORRECT because if the HTTP health check is not set with the weighted resource record sets of the disabled web servers, Route 53 will consider them healthy and continue to forward the traffic. Once the health check is enabled, the DNS queries will get a response indicating that the web servers are disabled, and then the requests would get routed to the other region.</p>\r\n\r\n<p>Option C is incorrect because even if the weight is lower for the region with disabled web servers, Route 53 will continue forwarding the users&#39; requests closest to that region because it will evaluate the latency record set first.</p>\r\n\r\n<p>Option D is incorrect because, even if one of the servers fails, the other server will still work, and the region should get the traffic.</p>\r\n\r\n<p>Option E is CORRECT because if the &ldquo;Evaluate Target Health&rdquo; is not set to &ldquo;Yes&rdquo; for the region containing the disabled web servers, Route 53 will consider the health of the recordset as healthy and continue to route the traffic to it.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on How Amazon Route 53 chooses records when Health Checking is configured, please visit the link below:</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-how-route-53-chooses-records.html\" target=\"_blank\">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-how-route-53-chooses-records.html</a><br />\r\n<a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html#dns-failover-complex-configs-eth-no\" target=\"_blank\">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html#dns-failover-complex-configs-eth-no</a></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 19139,
          "question_id": 29022,
          "answers": [
            {
              "choice": "<p>Latency resource record sets cannot be used in combination with weighted resource record sets.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>You did not set up an HTTP health check to one or more of the weighted resource record sets associated with the disabled web servers.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>The value of the weight associated with the latency alias resource record set in the region with the disabled servers is higher than the weight for the other region.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>One of the two working web servers in the other region did not pass its HTTP health check.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>You did not set &ldquo;Evaluate Target Health&rdquo; to &ldquo;Yes&rdquo; on the latency alias resource record set associated with example.com in the region where you disabled the servers.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for Organizational Complexity"
    },
    {
      "question_id": 28982,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>Which of the below mentioned ways can be used to provide additional layers of protection to all your EC2 resources?</p>\r\n\r\n<p>Choose the correct answer from the below options.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer - D</strong></p>\r\n\r\n<p>Tagging allows you to understand which resources belong&nbsp;to the test, development, and production environment if done properly. Tags enable you to categorize your AWS resources differently, such as&nbsp;by purpose, owner, or environment. This is useful when you have many resources of the same type &mdash; you can quickly identify a specific resource based on the tags you&#39;ve assigned to it. Each tag consists of a key and an optional value, both of which you define.</p>\r\n\r\n<p>If you have tagging, you can then also allow permissions based on the tags.</p>\r\n\r\n<p>You can also use IP Address conditions in IAM policies for denying access to AWS resources.</p>\r\n\r\n<p>{</p>\r\n\r\n<p>&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,</p>\r\n\r\n<p>&nbsp; &quot;Statement&quot;: {</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Deny&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &quot;Action&quot;: &quot;*&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &quot;Resource&quot;: &quot;*&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &quot;Condition&quot;: {&quot;NotIpAddress&quot;: {&quot;aws:SourceIp&quot;: [</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;192.0.2.0/24&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;203.0.113.0/24&quot;</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; ]}}</p>\r\n\r\n<p>&nbsp; }</p>\r\n\r\n<p>}</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Options A, B, and C all provide an additional layer of protection to the EC2 instances. Hence, D is the best answer.</li>\r\n</ul>\r\n\r\n<p>For more information on tagging, please see the below link</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 19099,
          "question_id": 28982,
          "answers": [
            {
              "choice": "<p>To control AWS API calls to EC2 instances, add policies that have a deny and/or allow permissions on tagged resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure that the proper tagging strategies have been implemented to identify all of your EC2 resources.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add an IP address condition to policies that specify that the requests to EC2 instances&nbsp;should come from a specific IP address or CIDR block range.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>All actions listed here would provide additional layers of protection.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28983,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>A company has developed a sensor intended to be placed inside people&#39;s watches, monitoring the number of steps taken every day. There is an expectation of thousands of sensors reporting every minute and hopes to scale to millions by the end of the year. A requirement for the project is that it needs to accept the data, run it through ETL to store in the warehouse, and archive it on Amazon Glacier, with room for a real-time dashboard for the sensor data to be added at a later date. What is the best method for architecting this application given the requirements?</p>\r\n\r\n<p>Choose the correct answer from the below options.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because S3 is not ideal for handling huge amounts of real-time requests.</li>\r\n\t<li>Option B is incorrect because Amazon Cognito is not suitable for handling real-time data.</li>\r\n\t<li>Option C is incorrect because DynamoDB is not suitable for data ingestion and handling.</li>\r\n\t<li>Option D is CORRECT because the requirement is real-time data ingestion and analytics. The best option is to use Kinesis for storing real-time incoming data. The data can then be moved to S3 and then analyzed using EMR and Redshift. Data can then be moved to Glacier for archival.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information about the use of Amazon Kinesis:</strong></p>\r\n\r\n<p>Amazon Kinesis is a platform for streaming data on AWS, making it easy to load and analyze streaming data, and also providing the ability for you to build custom streaming data applications for specialized needs.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Use Amazon Kinesis Streams to collect and process large streams of data records in real-time.</li>\r\n\t<li>Use Amazon Kinesis Firehose to deliver real-time streaming data to destinations such as Amazon S3 and Amazon Redshift.</li>\r\n\t<li>Use Amazon Kinesis Analytics to process and analyze streaming data with standard SQL.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information about the use of Amazon Cognito:</strong></p>\r\n\r\n<p>Amazon Cognito lets you easily add user sign-up and sign-in and manage permissions for your mobile and web apps. You can create your own user directory within Amazon Cognito, or you can authenticate users through social identity providers such as Facebook, Twitter, or Amazon; with SAML identity solutions; or by using your own identity system. In addition, Amazon Cognito enables you to save data locally on users&#39; devices, allowing your applications to work even when the devices are offline. You can then synchronize data across users&#39; devices so that their app experience remains consistent regardless of the device they use.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 19100,
          "question_id": 28983,
          "answers": [
            {
              "choice": "<p>Write the sensor data to Amazon S3 with a lifecycle policy for Glacier, create an EMR cluster that uses the bucket data, and run&nbsp;it through ETL. It then outputs that data into the Redshift data warehouse.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Cognito to accept the data when the user pairs the sensor to the phone.&nbsp;Then have Cognito send the data to Dynamodb. Use Data Pipeline to create a job that takes the DynamoDB table and sends it to an EMR cluster for ETL, then outputs to Redshift and S3 while&nbsp;using S3 lifecycle policies to archive on Glacier.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Write the sensor data directly to a scalable DynamoDB; create a data pipeline that starts an EMR cluster using data from DynamoDB and sends the data to S3 and Redshift.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Write the sensor data directly to Amazon Kinesis, output the data into Amazon S3, and create a lifecycle policy for Glacier archiving. Also, have a parallel processing application that runs the data through EMR and sends it to a Redshift data warehouse.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 29048,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": null,
      "question_text": "<p>A user has created a VPC with public and private subnets using the VPC wizard. In this scenario, which&nbsp;component is NOT created by the VPC wizard?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer &ndash; A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is correct</strong> because only one main route table will be created. It is associated with the private subnet.&nbsp;A custom route table is associated with the public subnet.</li>\r\n</ul>\r\n\r\n<p>Below is the general diagram of what is created when you have a private and public subnet used when using the VPC wizard.</p>\r\n\r\n<ul>\r\n\t<li>2 subnets &ndash; one private and one public</li>\r\n\t<li>One&nbsp;NAT Gateway to route traffic from the public to private subnet</li>\r\n\t<li>One internet gateway is attached to the VPC.&nbsp;&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_qtrrll.png\" style=\"height:700px; width:700px\" /></li>\r\n\t<li><strong>Options B, C and D are incorrect</strong>&nbsp;because the VPC Wizard creates them by default.</li>\r\n</ul>\r\n\r\n<p>For more information on VPC and subnets, please visit the URL:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario2.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario2.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 59042,
          "question_id": 29048,
          "answers": [
            {
              "question_id": "29048",
              "choice": "<p>VPC will create two main route tables associated with the public subnet and private subnet.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "29048",
              "choice": "<p>VPC will create a&nbsp;private subnet with a size x.x.x.x/24 IPv4 CIDR block.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "29048",
              "choice": "<p>VPC will create an&nbsp;Internet gateway.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "29048",
              "choice": "<p>VPC will create a&nbsp;NAT Gateway in the public&nbsp;subnet.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 29049,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>Which of the following types of servers would this CloudFormation template be most appropriate for? Choose a correct answer from the below options.</p>\r\n\r\n<p>{</p>\r\n\r\n<p>&nbsp; &quot;AWSTemplateFormatVersion&quot; : &quot;2010-09-09&quot;,</p>\r\n\r\n<p>&nbsp; &quot;Description&quot; : &quot;My CloudFormation Template&quot;,</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp; &quot;Resources&quot; : {</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp; &quot;MyInstance&quot; : {</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Type&quot; : &quot;AWS::EC2::Instance&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Properties&quot; : {</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;InstanceType&quot; : &quot;t2.micro&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;ImageId&quot; : &quot;ami-030f4133&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &quot;NetworkInterfaces&quot; : [{</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;AssociatePublicIpAddress&quot; : &quot;true&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;DeviceIndex&quot; : &quot;0&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;DeleteOnTermination&quot; : &quot;true&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;SubnetId&quot; : &quot;subnet-0c2c0855&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;GroupSet&quot; : [&quot;sg-53a4e434&quot;]</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; }</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp; ]</p>\r\n\r\n<p>&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>\r\n\r\n<p>&nbsp; }</p>\r\n\r\n<p>&nbsp;}</p>\r\n\r\n<p>}</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer &ndash; D</strong></p>\r\n\r\n<p>The bastion host needs a minimum configuration and a public IP address. The above CloudFormation template best fits this.</p>\r\n\r\n<p>For more information on CloudFormation, please visit the below link-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 19166,
          "question_id": 29049,
          "answers": [
            {
              "choice": "<p>Domain Controller</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Log collection server</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Database server</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Bastion host</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 45463,
      "topic_id": 363,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>Your company has developed a complex numerical calculation system used by some scientific and medical organizations in your country. The whole application is using the Hadoop engine with an&nbsp;HBase database. Because of the complex nature of the business, the overall setup runs in a private data center spread into two facilities for redundancy. The application needs high I/O bandwidth for the workload. Although they are not running the workloads with full capacity at the moment, there are some new developments in the business, and they are extending their services to a few other organizations in a different country. Due to compliance reasons, they plan to host their application in the cloud instead of setting up data center facilities in the new country. They want the same setup to&nbsp;be migrated over the cloud and still achieve the low latency, high I/O, and redundant cluster setup. Please select a valid option that can help replicate the setup on AWS.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Options A and B are INCORRECT</strong> because RAID 0 is used for the disk splitting, and RAID 1 is used for the disk level mirroring. Because the instances might be placed on different hardware, the high-speed I/O may not be achieved as per the requirement.</li>\r\n\t<li><strong>Option C is CORRECT</strong> because the I3 instance supports the high-speed networking capability, and the Partition Placement Group can span across the multiple availability zones to achieve the required redundancy.</li>\r\n\t<li><strong>Option D is INCORRECT</strong> because the Cluster Placement Groups cannot span multiple availability zones or underlying hardware.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35470,
          "question_id": 45463,
          "answers": [
            {
              "choice": "<p>Use the I3 instances with Enhanced Networking enabled and RAID 0 configuration to achieve the disk mirroring.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the I3 instances with Enhanced Networking enabled and RAID 1 configuration to achieve the disk mirroring.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the I3 instances with Enhanced Networking enabled and use the Placement Group with Partitioned option to spread the clusters across multiple availability zones.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the I3 instances with Enhanced Networking enabled and use the Cluster Placement Group with an option to spread the clusters across multiple availability zones.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for Organizational Complexity"
    },
    {
      "question_id": 45462,
      "topic_id": 366,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company runs a high-end and a long-running analytics pipeline on your on-premises data centers. The solution uses clusters of high configuration machines that are connected via a high throughput, low latency fiber network. Due to the periodic hardware and networking issues, the setup uses a replica of clusters for redundancy and failover purposes. The setup is now due for a major hardware upgrade and requires a considerable budget increase as well. The management has decided to evaluate if AWS can be used and check whether it is possible to replicate the same setup with low latency. Select two valid options to include in your suggestion.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: B and E</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is INCORREC</strong>T because&nbsp;using the On-demand instances might not be a cost-efficient option&nbsp;for running a long-running application.</li>\r\n\t<li><strong>Option B is CORRECT</strong> because this option achieves the low latency network necessary for tightly-coupled node-to-node communication between the virtual machines in the same Availability Zone.</li>\r\n\t<li><strong>Option C is INCORRECT</strong> because as such Partitioned Groups do span over Availability Zones, which will defeat the requirement of the application of low latency communication.</li>\r\n\t<li><strong>Option D is INCORRECT </strong>because the spot instances may not be ideal for long-running applications within the partition groups.</li>\r\n\t<li><strong>Option E is CORRECT</strong> because using the RI would be the best option to get some upfront discount for a long-running application.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35469,
          "question_id": 45462,
          "answers": [
            {
              "choice": "<p>Use the On-demand&nbsp;instances to minimize the cost.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Cluster Placement Groups</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Placement Groups spread across two availability zones.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Spot instances to minimize the cost.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Reserved instances to minimize the cost.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Cost Control"
    },
    {
      "question_id": 28980,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>There is a requirement to create EMR jobs that sift through all web server logs and error logs to pull statistics on clickstream and errors based on client IP address. The web application uses HTTPS and is behind a Classic Load Balancer. How can the application be configured based on the above requirements?</p>\r\n\r\n<p>Choose the correct answer from the below options.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer &ndash; C</strong></p>\r\n\r\n<p>Option A is incorrect because the X-Forwarded-Proto header is used to&nbsp;determine the protocol used between the client and the load balancer. And&nbsp;X-Forwarded-Port&nbsp;header is used to&nbsp;identify the destination port that the client used to connect to the load balancer.</p>\r\n\r\n<p>Option B is incorrect because it does not specify how error logs would be configured and analyzed. ELB access logs do not tell the errors in the application layer.</p>\r\n\r\n<p>Option C is CORRECT because the web server can get the client IP address from the x-forwarded-for header for HTTP/HTTPS traffic.&nbsp;</p>\r\n\r\n<p>Option D is incorrect because it does not specify how access logs would be configured and analyzed. ELB error logs do not contain the required information.</p>\r\n\r\n<p>For more information on HTTP Headers and Classic ELB, please refer to the links below:</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/x-forwarded-headers.html\" target=\"_blank\">https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/x-forwarded-headers.html</a></p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 51122,
          "question_id": 28980,
          "answers": [
            {
              "question_id": "28980",
              "choice": "<p>Modify the application code to get the client IP from the X-Forwarded-Proto header or the X-Forwarded-Port header.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28980",
              "choice": "<p>Configure ELB access logs. Then create a Data Pipeline job that imports the logs from an S3 bucket into EMR for analyzing and output the EMR data into a new S3 bucket.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28980",
              "choice": "<p>Modify the application code to get the client IP from the x-forwarded-for header.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "28980",
              "choice": "<p>Configure ELB error logs and create a Data Pipeline job that imports the logs from an S3 bucket into EMR for analyzing and outputs the EMR data into a new S3 bucket.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 29032,
      "topic_id": 365,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>You are designing the network infrastructure for an application server in Amazon VPC. Users will access all the application instances from the Internet as well as from an on-premises network. The on-premises network is connected to your VPC over an AWS Direct Connect link. You want to simplify the AWS routes from your on-premises network to your VPC to reduce the number of routes in the table.&nbsp;You do not foresee any additional external routing requirements in the future. How would you design routing to meet the above requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer - B</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A&nbsp;is incorrect because we would have conflicts when using the default route.</li>\r\n\t<li>Option B is CORRECT because whenever any traffic from BGP peers (e.g. DX as an attachment) reaches a VPG destined to an unknown network, it will simply get dropped because the VPG does not know what to do with it. Another way to simplify these cases is with a Transit Gateway architecture, but in this context a solution should resemble a similar default route advertisement. The important thing afterwards is to propagate specific routes others than the default one to avoid conflicts.</li>\r\n\t<li>Option C is incorrect because we cannot propagate two default routes. Instead, a single default route should be used.</li>\r\n\t<li>Option D is incorrect because the subnet where the instances are placed can have a single routing table associated with them.</li>\r\n</ul>\r\n\r\n<p>More information on Route Tables and Directconnect:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html\">https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/directconnect/latest/UserGuide/dc-ug.pdf\">https://docs.aws.amazon.com/directconnect/latest/UserGuide/dc-ug.pdf</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 95804,
          "question_id": 29032,
          "answers": [
            {
              "question_id": "29032",
              "choice": "<p>Configure a single routing table with a default route via the Virtual Private Gateway. Propagate a default route via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "29032",
              "choice": "<p>Configure a single routing table with a default route via the Virtual Private Gateway. Propagate specific routes for the on-premises networks via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "29032",
              "choice": "<p>Configure a single routing table with two default routes: one to the Internet via a Virtual Private Gateway the other to the on-premises network via the VPN gateway. Use this routing table across all subnets in your VPC.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "29032",
              "choice": "<p>Configure two routing tables: one that has a default route via the Virtual Private Gateway and another that has a default route via the VPN gateway. Associate both routing tables with each VPC subnet.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Migration Planning"
    },
    {
      "question_id": 44777,
      "topic_id": 366,
      "course_id": 0,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You work for an AWS consulting company and are required to provide cost control for a customer&rsquo;s AWS resources. This customer has owned various applications which have used over 100 DynamoDB tables. For the below cases, which ones should you consider using On-Demand capacity for DynamoDB? Select 3.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;A, B, E</strong></p>\r\n\r\n<p>Amazon DynamoDB On-Demand has no capacity planning and a pay-per-request pricing model. You only pay for what you use, making it easy to balance costs and performance.</p>\r\n\r\n<ul>\r\n\t<li>Option&nbsp;A is&nbsp;CORRECT:&nbsp;Because DynamoDB on-demand is useful if the application traffic is difficult to predict and control.</li>\r\n\t<li>Option&nbsp;B is&nbsp;CORRECT:&nbsp;Same reason as Option A.</li>\r\n\t<li>Option&nbsp;C is&nbsp;incorrect:&nbsp;Because if the traffic is stable, it is better to use Provisioned capacity.</li>\r\n\t<li>Option&nbsp;D is&nbsp;incorrect:&nbsp;Because as the traffic is predictable, a Provisioned capacity with Auto Scaling can be considered.</li>\r\n\t<li>Option&nbsp;E is&nbsp;CORRECT:&nbsp;Because DynamoDB on-demand is using a pay per request model and fits into this pricing model of the serverless stacks.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34788,
          "question_id": 44777,
          "answers": [
            {
              "choice": "<p>New applications whose DynamoDB database workload is very complex to forecast.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>An application has large spikes sometimes however with very short duration.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>A long term monitor program that has stable read/write traffic for a DynamoDB table.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The read/write throughput for a DynamoDB database is quite steady in weekdays and getting a 20% increase in weekends.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>An application with serverless stacks with pay-per-use pricing model.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Cost Control"
    },
    {
      "question_id": 29047,
      "topic_id": 364,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>A user is planning to set up the Multi-AZ feature of RDS. Which of the below mentioned conditions won&rsquo;t take advantage of the Multi-AZ feature?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer &ndash; C</strong></p>\r\n\r\n<p>Amazon RDS handles failovers automatically so you can resume database operations as quickly as possible without administrative intervention. The primary DB instance switches over automatically to the standby replica if any of the following conditions occur.</p>\r\n\r\n<ul>\r\n\t<li>An Availability Zone outage</li>\r\n\t<li>The primary DB instance fails</li>\r\n\t<li>The DB instance&#39;s server type is changed</li>\r\n\t<li>The operating system of the DB instance is undergoing software patching</li>\r\n\t<li>A manual failover of the DB instance was initiated using&nbsp;Reboot with failover</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Hence, options A, B, and D are incorrect. Option C is CORRECT because if there is a region-wide failure, the Multi-AZ feature may not work.</p>\r\n\r\n<p>For more information on multiAZ RDS, please visit the link:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/rds/details/multi-az/\" target=\"_blank\">https://aws.amazon.com/rds/details/multi-az/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 19164,
          "question_id": 29047,
          "answers": [
            {
              "choice": "<p>Availability zone outage</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>A manual failover of the DB instance using Reboot with failover option</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Region outage</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>When the user changes the DB instance&rsquo;s server type</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 45458,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>You are maintaining over a dozen EC2 Ubuntu instances. The application installed in the instances had an&nbsp;issue last week, and the development team already knew the root cause. To prevent the issue from happening again, some debug logs have been added to the application. Your manager asked you to use AWS Systems Manager to send the logs to an S3 bucket every 2:00 AM for all the EC2 instances. Which AWS Systems Manager service should you use to meet this requirement? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;C and D</strong></p>\n\n<p>State Manager and Maintenance Windows, both capabilities of AWS Systems Manager, can perform some similar types of updates on your managed instances.&nbsp;</p>\n\n<p>A maintenance window&nbsp;takes one or more actions on AWS resources within a given time window. You can define a single maintenance window with start and end times. You can specify multiple tasks to run within this maintenance window.</p>\n\n<p>For this case, the State Manager should be used. The &ldquo;AWS-RunPowerShellScript&rdquo; document can be created, and its target is all the EC2 instances.</p>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/09/ckeditor_9.png\" style=\"height:304px; width:1000px\" />AWS Systems Manager State Manager is a service that automates the process of keeping the Amazon EC2 or hybrid infrastructure in the state that you desire.</p>\n\n<ul>\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect:</strong>&nbsp;Because Session Manager is a service to provide secure and auditable instance management, which is not a tool to execute a script or command.</li>\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect:</strong>&nbsp;Because Distributor packages the software to install on AWS Systems Manager managed instances. It is not designed to run a script or command as a schedule.</li>\n\t<li><strong>Option&nbsp;C is&nbsp;CORRECT</strong>:&nbsp;Because in State Manager, the user can design an association that contains a proper document to accomplish this mission.</li>\n\t<li><strong>Option D is CORRECT</strong>: because Maintenance Windows can be used&nbsp;if your high priority operations include patching your managed instances, running multiple types of tasks on your instances during an update period, or controlling when update operations can be run on your instances.</li>\n</ul>\n\n<p><strong>References:</strong></p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-vs-maintenance-windows.html\">https://docs.aws.amazon.com/systems-manager/latest/userguide/state-manager-vs-maintenance-windows.html</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-runPowerShellScript\">https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-runPowerShellScript</a></li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 84716,
          "question_id": 45458,
          "answers": [
            {
              "question_id": "45458",
              "choice": "<p>Use the Session manager to send&nbsp;the required logs to the S3 bucket every 2:00 AM.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "45458",
              "choice": "<p>Use Systems Manager Distributor to transfer the logs every 2:00 AM on all the AWS Systems Manager managed instances.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "45458",
              "choice": "<p>Use State Manager to run a shell script every 2:00 AM for all the EC2 instances.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "45458",
              "choice": "<p>Create a schedule in AWS Systems Manager Maintenance Windows to move the logs to the S3 bucket every 2:00 AM.</p>",
              "feedback": "",
              "correct": true
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 45456,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": null,
      "question_text": "<p>You have deployed a Windows Server instance (x86_64) in AWS EC2. After the instance has run for a week, you realized that you needed to run a script in PowerShell. You were logged in the AWS EC2 console and started using Systems Manager to run a command. You chose the command as &quot;AWS-RunPowerShellScript&quot;. However, your instance cannot be selected as the target. How should you troubleshoot the issue so that the command can run in the current Windows instance successfully? (Select TWO.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;C, E</p>\r\n\r\n<p>AWS Systems Manager Run Command is a service to run a command for Windows or Linux instance:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/09/ckeditor_7_54_25.png\" style=\"height:381px; width:1000px\" /></p>\r\n\r\n<p>However, if the instance cannot be seen as the target for the command to run, some items must be checked according to <a href=\"https://docs.aws.amazon.com/systems-manager/latest/userguide/troubleshooting-remote-commands.html?icmpid=docs_ec2_console\" target=\"_blank\">https://docs.aws.amazon.com/systems-manager/latest/userguide/troubleshooting-remote-commands.html?icmpid=docs_ec2_console</a>.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect</strong>:&nbsp;Because &ldquo;AWS-RunPowerShellScript&rdquo; is correct while &ldquo;AWS-RunShellScript&rdquo; is for Linux instance.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect:</strong>&nbsp;Because the Windows instance is supported. Check <a href=\"https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-prereqs.html\" target=\"_blank\">https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-prereqs.html</a> for the supported Operating Systems.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;CORRECT:</strong>&nbsp;Because only Amazon EC2 Windows Amazon Machine Images (AMIs) and certain Linux AMIs are pre-configured with the SSM Agent. You need to check if the SSM Agent is properly installed.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;incorrect:&nbsp;</strong>Because system patches do not impact the SSM connection.</li>\r\n\t<li><strong>Option&nbsp;E is&nbsp;CORRECT:</strong>&nbsp;Because a proper IAM instance role is required; otherwise, EC2 cannot communicate with SSM API.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 35463,
          "question_id": 45456,
          "answers": [
            {
              "choice": "<p>Change the command &ldquo;AWS-RunPowerShellScript&rdquo; to &ldquo;AWS-RunShellScript&rdquo;.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Systems Manager Run Command only works for Linux instances&nbsp;so that the Windows instance is unavailable.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Check if the latest version of SSM (AWS Systems Manager) Agent is installed on the Windows instance.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Check if the Windows instance has the latest system patches installed.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Verify that the instance has configured with the IAM role that enables it to communicate with the Systems Manager API.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 45461,
      "topic_id": 366,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": 0,
      "question_text": "<p>Your company has built a Therapist Finder service. Since the launch last year, over 150K therapists have registered from around the country, and the service is growing rapidly. The management has decided to add a new, much-needed feature to showcase Verified Therapists&nbsp;based on a complex search context and other parameters on their website. Thus,&nbsp;when users search for related therapists, the service can show verified therapists. Their current database is in DynamoDB. The management is ready to do some reengineering if the solution can be cost-effective as well.&nbsp;</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer: A</strong></p>\n\n<ul>\n\t<li><strong>Option A is CORRECT</strong> because moving the data to Amazon OpenSearch will give better search options without breaking the Read Capacity of the DynamoDB.&nbsp;Use the OpenSearch queries to boost the search result efficiently.</li>\n\t<li><strong>Option B&nbsp;is INCORRECT</strong> because moving the data to RDS will not solve the issue and will need significant engineering effort as well.</li>\n\t<li><strong>Option C&nbsp;is INCORRECT</strong> because ElastiCache is to cache the data and not run the complex search queries.</li>\n\t<li><strong>Option D&nbsp;is INCORRECT </strong>because DAX is not a service to help to search content and does not help to implement the feature.&nbsp;</li>\n</ul>\n\n<p>DAX and ElastiCache are used for different purposes than Amazon&nbsp;OpenSearch services.</p>\n\n<p>DAX is better than ElastiCache but cannot be compared to Amazon OpenSearch Service.</p>\n\n<p><strong>Reference:</strong></p>\n\n<ul>\n\t<li><a href=\"https://aws.amazon.com/blogs/compute/indexing-amazon-dynamodb-content-with-amazon-elasticsearch-service-using-aws-lambda/\">https://aws.amazon.com/blogs/compute/indexing-amazon-dynamodb-content-with-amazon-elasticsearch-service-using-aws-lambda/</a></li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 67292,
          "question_id": 45461,
          "answers": [
            {
              "question_id": "45461",
              "choice": "<p>Stream the DynamoDB data to Amazon OpenSearch using AWS Lambda and use it for the search.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "45461",
              "choice": "<p>Migrate the DynamoDB data to the AWS RDS database and use it for the search.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "45461",
              "choice": "<p>Use the AWS ElastiCache in front of the DynamoDB for the search queries</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "45461",
              "choice": "<p>Use the DynamoDB Accelerator for faster response times&nbsp;and save the read capacity.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Cost Control"
    },
    {
      "question_id": 45403,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": null,
      "question_text": "<p>A traditional IT company is actively migrating its existing on-premises servers to AWS and making big progress. Recently, to meet the internal regulatory requirements, backup policies and strategies are needed for its various AWS services. The company plans to use the AWS Backup service as the central place to manage and automate backups. Which AWS services can be managed by AWS Backup? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; A and C</strong></p>\r\n\r\n<p><strong>Options A and C are correct</strong> because Amazon DynamoDB and AWS Storage Gateway (Volume Gateway)&nbsp;are supported by AWS Backup.</p>\r\n\r\n<p><strong>Options B and D are incorrect </strong>because&nbsp;AWS CodeBuild and Amazon CloudFront are not supported by AWS Backup.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/CSAP-IV-24.PNG\" style=\"height:448px; width:350px\" /></p>\r\n\r\n<p><strong>Reference:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html\">https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 93065,
          "question_id": 45403,
          "answers": [
            {
              "question_id": "45403",
              "choice": "<p>Amazon DynamoDB</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "45403",
              "choice": "<p>AWS CodeBuild&nbsp;</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "45403",
              "choice": "<p>AWS Storage Gateway (Volume Gateway)</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "45403",
              "choice": "<p>Amazon CloudFront</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28998,
      "topic_id": 366,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An organization has added 3 of its AWS accounts to consolidated billing. One of the AWS accounts has purchased a Reserved Instance (RI) of a small instance size in the US-East-1a zone. All other AWS accounts are running instances of a small size in the same zone. What will happen in this case for the RI pricing?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; C</p>\r\n\r\n<p>Option A is incorrect because the price benefit of the reserved instances is applicable to all the accounts that are part of the consolidated billing group, not just the payer account (or the account that has reserved the instance) - for the total number of instances reserved.&nbsp;</p>\r\n\r\n<p>Option B is incorrect because, since only a single instance is reserved, any one instance across all the accounts will receive the reserved instance price benefit.</p>\r\n\r\n<p>Option C is CORRECT because the reserved price benefit will be applied to a single EC2 instance across all the accounts.&nbsp;</p>\r\n\r\n<p>Option D is incorrect because the total number of accounts&nbsp;that will receive the cost-benefit will be the same as the total number of reserved instances (in this case, it&#39;s one).</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on Consolidated Billing:</strong></p>\r\n\r\n<p>As per the AWS documentation for billing purposes, AWS treats all the accounts on the consolidated bill as if they were one account. Some services, such as Amazon EC2 and Amazon S3, have volume pricing tiers across certain usage dimensions that give you lower prices when you use the service more. With consolidated billing, AWS combines the usage from all accounts to determine which volume pricing tiers to apply, giving you a lower overall price whenever possible.</p>\r\n\r\n<p>For more information on Consolidated billing, please visit the URL:</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html\" target=\"_blank\">http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 19115,
          "question_id": 28998,
          "answers": [
            {
              "choice": "<p>Only the account that has purchased the RI will get the advantage of RI pricing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>One instance of a small size and running in the US-East-1a zone of each AWS account will benefit RI pricing.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Any single instance from any of&nbsp;the three accounts can benefit AWS RI pricing if they are running in the same zone and are of the same size, but only one instance at a time since only 1 RI was purchased.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>All of the accounts will be able to benefit from the RI at the same time.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Cost Control"
    },
    {
      "question_id": 28995,
      "topic_id": 366,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A customer needs corporate IT governance and cost oversight of all AWS resources consumed by its divisions. The divisions want to maintain administrative control of the discrete AWS resources they consume and keep those resources separate from the resources of other divisions. How would you achieve this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answers - A&nbsp;</strong></p>\n\n<p>We need to satisfy 2 requirements here.<br />\n1. To provide either autonomy or control of divisions while maintaining IT Governance.<br />\n2. To evaluate the overall cost.<br />\n<br />\nAWS Organizations enables you to consolidate multiple AWS accounts into an organization that you create and manage centrally. AWS Organizations also includes account management and consolidated billing capabilities.</p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html\" target=\"_blank\">https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html</a></li>\n</ul>\n\n<p>Options B, C, and D&nbsp;do not satisfy the requirements of the scenario mentioned in the question.</p>\n\n<p>For more details, please check below AWS Docs.</p>\n\n<ul>\n\t<li><a href=\"https://aws.amazon.com/blogs/aws/aws-organizations-policy-based-management-for-multiple-aws-accounts/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/aws-organizations-policy-based-management-for-multiple-aws-accounts/</a></li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 19112,
          "question_id": 28995,
          "answers": [
            {
              "choice": "<p>Use AWS Organizations to manage AWS accounts, group the accounts into organizational units (OUs), and use the consolidated billing feature to consolidate billing and payment.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create separate VPC&#39;s for each division within the AWS account.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Write all child AWS CloudTrail and Cloudwatch logs to each child account&#39;s&nbsp;Amazon S3 IA.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Write all child AWS CloudTrail and Amazon CloudWatch logs to each child account&#39;s Amazon S3 &#39;Log&#39; bucket.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Cost Control"
    },
    {
      "question_id": 44773,
      "topic_id": 364,
      "course_id": 0,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You work for an e-commerce retailer as an AWS Solutions Architect. Your company is looking to improve customer loyalty programs by partnering with other third parties to offer a more comprehensive selection of customer rewards. You plan to use Amazon Managed Blockchain to implement a blockchain network that allows your company and third parties to share and validate rewards information quickly and transparently. How do you add members to this blockchain?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer &ndash; A</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>By using Amazon Managed Blockchain, it is very convenient to manage members. New members can be added to your own account without sending an invitation to yourself, or you can create a network invitation for a member in a different AWS account. Refer to <a href=\"https://docs.aws.amazon.com/managed-blockchain/latest/managementguide/get-started-joint-channel.html\" target=\"_blank\">https://docs.aws.amazon.com/managed-blockchain/latest/managementguide/get-started-joint-channel.html</a> on how to &ldquo;Invite Another AWS Account to be a Member and Create a Joint Channel&rdquo;.</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT: Because for members in other AWS accounts, you need to send out an invitation.</li>\r\n\t<li>Option B is incorrect: Because you can invite members from other AWS accounts.</li>\r\n\t<li>Option C is incorrect: Because there is already an initial account while the blockchain is set up.</li>\r\n\t<li>Option D is incorrect: Because there is already an initial account while the blockchain is set up. Also, an invitation is required for members in other AWS accounts.</li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 34784,
          "question_id": 44773,
          "answers": [
            {
              "choice": "<p>When Amazon Managed Blockchain is set up, there is an initial member in the AWS account. Then new members can be added to this AWS account by sending an invitation&nbsp;or a network invitation can be created for a member in a different AWS account.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>While Amazon Managed Blockchain is configured, there is an initial member in the AWS account. Then new members can be added to this AWS account without having to send an invitation. You cannot add new members from other AWS accounts.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>When Amazon Managed Blockchain is created, there would be no member in the AWS account. Then new members can be added to this AWS account or other accounts by sending out an invitation.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>When Amazon Managed Blockchain is first&nbsp;created, there would be no member in the AWS account. Then new members can be added to this AWS account. For other accounts, they can join this net blockchain network by using the network ID.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for New Solutions"
    },
    {
      "question_id": 28991,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You have launched an EC2 instance with four (4) 500 GB EBS Provisioned IOPS volumes attached. The EC2 instance is EBS-Optimized and supports 500 Mbps throughput between EC2 and EBS. The EBS volumes are configured as a single RAID 0 device, and each Provisioned IOPS volume is provisioned with 4,000 IOPS (4,000 16KB reads or writes) for a total of 16,000 random IOPS on the instance. The EC2 instance initially delivers the expected 16,000 IOPS random read and write performance. Sometime later, in order to increase the total random I/O performance of the instance, you add an additional two 500 GB EBS Provisioned IOPS volumes to the RAID. Each volume is provisioned to 4,000 lOPs like the original four for a total of 24,000 IOPS on the EC2 instance. Monitoring shows that the EC2 instance CPU utilization increased from 50% to 70%. But the total random IOPS measured at the instance level did not increase at all. What is the problem and a valid solution?</p>\r\n\r\n<p>&nbsp;</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer - B</p>\r\n\r\n<p>Option A is incorrect because increasing the volume size may not be sufficient; you will not get the higher IOPS unless the volumes are attached to EBS-optimized instance types with larger throughput (e.g., 8xlarge or higher).</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option B is CORRECT because EC2 Instance types have a limit on max throughput and require 8xlarge or higher instance types to provide 24000 or more IOPS.</p>\r\n\r\n<p>Option C is incorrect because this option will not increase the IOPS.</p>\r\n\r\n<p>Option D is incorrect because the reasoning given for the issue (RAID 0 only scaling for 4 volumes) is not true.</p>\r\n\r\n<p>Option E is incorrect because it already has a sufficient number of volumes with 4,000 PIOPS attached. So, changing the root volume to a 4,000 PIOPS will not be useful.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on the topic from AWS documentation:</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Launching an instance that is EBS-optimized provides you with a dedicated connection between your EC2 instance and your EBS volume. However, it is still possible to provision EBS volumes that exceed the available bandwidth for certain instance types, especially when multiple volumes are striped in a RAID configuration. Be sure to choose an EBS-optimized instance that provides more dedicated EBS throughput than your application needs; otherwise, the Amazon EBS to Amazon EC2 connection will become a performance bottleneck.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on IOPS, please visit the link below.</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-ec2-config.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-ec2-config.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><em>&quot;In order to get the most performance out of your EBS volumes, you should attach them to an instance with enough bandwidth to support your volumes, such as an EBS-optimized instance or an instance with 10 Gigabit network connectivity. This is especially important when you stripe multiple volumes together in a RAID configuration.&quot;</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 19108,
          "question_id": 28991,
          "answers": [
            {
              "choice": "<p>Larger storage volumes support higher Provisioned IOPS rates, increasing the provisioned volume storage of each of the 6 EBS volumes to 1TB.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The EBS-Optimized throughput limits the total IOPS that can be utilized.&nbsp;Therefore consider choosing&nbsp;a larger&nbsp;EBS&ndash;optimized instance that provides more dedicated Amazon EBS throughput.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Small block sizes cause performance degradation, limiting the I/O throughput.&nbsp;Hence, configure the instance device driver and file system to use 64KB blocks to increase throughput.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>RAID 0 only scales linearly to about 4 devices. Use RAID 0 with 4 EBS Provisioned IOPS volumes but increase each Provisioned IOPS EBS volume to 6,000 IOPS.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The standard EBS instance root volume limits the total IOPS rate.&nbsp;Hence, it can change the instant root volume to be a 500GB 4,000 Provisioned IOPS volume.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
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
      "question_id": 45077,
      "topic_id": 365,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": null,
      "question_text": "<p>A media company is working on migrating its various on-premises products and services to the AWS platform. In one of the web services, MongoDB was used to store user subscription information. The AWS cloud engineer has migrated this NoSQL database to DynamoDB in AWS. The cloud engineer is using Java AWS SDK to implement this. In the&nbsp;log system, there is a large number of&nbsp; ProvisionedThroughputExceededException occurring for this DynamoDB table.<br />\nHow should the cloud engineer troubleshoot the issue and lower down the number of exceptions? (Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Correct Answer - B, D</strong></p>\n\n<p>DynamoDB can return various exceptions with different error messages and codes. The reference is in <a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html\" target=\"_blank\">https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html</a>.</p>\n\n<ul>\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect</strong>:&nbsp;Because the AWS SDKs for DynamoDB automatically retry requests that receive this exception. The request to DynamoDB is eventually successful unless the retry queue is too large to finish.</li>\n\t<li><strong>Option&nbsp;B is&nbsp;CORRECT:</strong>&nbsp;Because the CloudWatch metrics can tell the difference between provisioned capacity and consumed capacity.&nbsp;It helps understand the proper value of the provisioned capacity.</li>\n</ul>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/03/11/ckeditor_5_18_34.png\" style=\"height:358px; width:622px\" /></p>\n\n<ul>\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect</strong>:&nbsp;Because there are no ProvisionedThroughputExceededException metrics in the CloudWatch console.</li>\n\t<li><strong>Option&nbsp;D is&nbsp;CORRECT:</strong>&nbsp;Because the straightforward way is to increase the provisioned capacity and monitor if it can help resolve the problem.</li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 85640,
          "question_id": 45077,
          "answers": [
            {
              "question_id": "45077",
              "choice": "<p>In Java AWS SDK, implement a retry mechanism to retry the request when the exception ProvisionedThroughputExceededException happens.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "45077",
              "choice": "<p>Open the Amazon CloudWatch console and view performance metrics for provisioned throughput vs. consumed throughput.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "45077",
              "choice": "<p>In the CloudWatch console and view the ProvisionedThroughputExceededException metrics to understand when it happens.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "45077",
              "choice": "<p>Increase the provisioned read, write capacity, and monitor the log system.</p>",
              "feedback": "",
              "correct": true
            }
          ]
        }
      ],
      "topic_name": "Migration Planning"
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
      "question_id": 28374,
      "topic_id": 365,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are given the task of moving a legacy application from a virtual machine running inside your datacenter to an Amazon VPC. Unfortunately, this app requires access to several on-premises services, and no one who configured the app still works for your company. Even worse, there&rsquo;s no documentation for it. Which of the following options can help you to move the application from on-premises to VPC?</p>\r\n\r\n<p>Choose 4&nbsp;options below.</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer: A, D, E and F</strong></p>\r\n\r\n<p>The scenario requires you to connect your on-premise server/instance with Amazon VPC. When such scenarios are presented, always think about Direct Connect, VPN, and VM Import and Export as they help either connect the instances from a different location or import them from one location to another.</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because Direct Connect sets up a dedicated connection between on-premises data-center and Amazon VPC and provides you with the ability to connect your on-premise servers with the instances in your VPC.</li>\r\n\t<li>Option B is incorrect as you normally create a VPN connection based on a customer gateway and a virtual private gateway (VPG) in AWS.&nbsp;</li>\r\n\t<li>Option C is incorrect as EIPs are not needed as the instances in the VPC can communicate with on-premise servers via their private IP address.</li>\r\n\t<li>Option D is CORRECT because there should not be a conflict between the IP address of on-premise servers and the instances in VPC for them to communicate.</li>\r\n\t<li>Option E is CORRECT because we need to configure Route-53 resolver&nbsp;to forward queries via Direct Connect to the On-Prem DNS server. Route 53 alone will not be able to move the application from on-premises to VPC.</li>\r\n\t<li>Option F is CORRECT because the VM Import Export service helps you import the virtual machine images from the data center to the AWS platform as EC2 instances&nbsp;and export them back to your on-premises environment. This offering allows you to leverage your existing investments in the virtual machines that you have built to meet your IT security, configuration management, and compliance requirements by bringing those virtual machines into Amazon EC2 as ready-to-use instances.&nbsp;Once the VM import is done.&nbsp;Then the application running inside the VPC can reach out to on-premises services.</li>\r\n</ul>\r\n\r\n<p><strong>Note:</strong><br />\r\n<br />\r\nVMWare import can help us moving machines from on-premise to ec2 instances inside VPC.<br />\r\n<br />\r\nRecently there is an announcement from AWS regarding Route53 Support for resolving on-premise dependency:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/about-aws/whats-new/2018/11/amazon-route-53-announces-resolver-with-support-for-dns-resolution-over-direct-connect-and-vpn/\" target=\"_blank\">https://aws.amazon.com/about-aws/whats-new/2018/11/amazon-route-53-announces-resolver-with-support-for-dns-resolution-over-direct-connect-and-vpn/</a></li>\r\n</ul>\r\n\r\n<p><br />\r\nAs you know, the latest features/announcements take around 6 months to get reflected in the actual exam.</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18491,
          "question_id": 28374,
          "answers": [
            {
              "choice": "<p>An AWS Direct Connect link between the VPC and the datacenter network.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>An Internet Gateway to allow a VPN connection.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>An Elastic IP address on the VPC instance.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>An IP address space that does not conflict with the one on-premises.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Route-53 resolver and make entries in Amazon Route 53 that allow the Instances to resolve its dependencies&rsquo; IP addresses.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>A VM Import of the current virtual machine.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Migration Planning"
    },
    {
      "question_id": 28392,
      "topic_id": 365,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Your company has recently extended its on-premises data center into a VPC on AWS to add burst computing capacity as needed. The data center has already used an identity provider (IDP).&nbsp;Members of your Network Operations Center need to be able to go to the AWS Management Console and administer Amazon EC2 instances as necessary. You don&rsquo;t want to create new IAM users for each member and make those users sign in again to the AWS Management Console. Which option below will meet the needs of your NOC members?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; C</p>\n\n<p>This scenario has two requirements: (a) temporary access to AWS resources be given to certain users or applications (NOC members in this case), and (b) you are not supposed to create new IAM users for the NOC members to log into AWS console.&nbsp;</p>\n\n<p>This scenario is handled by a concept named &quot;Federated Access&quot;. Read this for more information on federated access:&nbsp;<a href=\"https://aws.amazon.com/identity/federation/\" target=\"_blank\">https://aws.amazon.com/identity/federation/</a> .</p>\n\n<p>Read this article for more information on how to establish federated access to the AWS resources.</p>\n\n<p><a href=\"https://aws.amazon.com/blogs/security/how-to-establish-federated-access-to-your-aws-resources-by-using-active-directory-user-attributes/\" target=\"_blank\">https://aws.amazon.com/blogs/security/how-to-establish-federated-access-to-your-aws-resources-by-using-active-directory-user-attributes/</a></p>\n\n<p>&nbsp;</p>\n\n<p>Option A is incorrect because OAuth 2.0 is not applicable in this scenario as we are not using Web Identity Federation. It is used with public identity providers such as Facebook, Google, etc.</p>\n\n<p>Option B is incorrect because the key point here is that you need to give access to AWS Management Console to only the members of your Network Operations Center using on-premises SSO to avoid signing in again. The users should not be using Facebook or Google IDs to login.</p>\n\n<p>Option C is CORRECT because (a) it gives federated access to the NOC members to AWS resources by using SAML 2.0 identity provider, and (b) it uses on-premises single sign on (SSO) endpoint to authenticate users and gives them access tokens before providing the federated access.</p>\n\n<p>Option D is incorrect because, even though it uses SAML 2.0 identity provider, we need to grant SSO access to the AWS management console and retrieving temporary security credentials is irrelevant here.</p>\n\n<p>See this diagram that explains the Federated Access using SAML 2.0.&nbsp;</p>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_ncagbh.png\" style=\"height:423px; width:700px\" /></p>\n\n<p>&nbsp;</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18509,
          "question_id": 28392,
          "answers": [
            {
              "choice": "<p>Use OAuth 2.0 to retrieve temporary AWS security credentials to enable your members to sign in to the AWS Management Console.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Web Identity Federation to retrieve AWS temporary security credentials to enable your members to sign in to the AWS Management Console.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use your on-premises SAML 2.0-compliant identity provider (IDP) to grant the members federated access to the AWS Management Console via the AWS single sign-on (SSO) endpoint.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use your on-premises SAML 2.0-compliant identity provider (IDP) to retrieve temporary security credentials to enable members to sign in to the AWS Management Console.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Migration Planning"
    },
    {
      "question_id": 28394,
      "topic_id": 365,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are designing a connectivity solution between on-premises infrastructure and Amazon VPC. Your servers on-premises will be communicating with your VPC instances. You will be establishing IPSec tunnels over the internet. You will be using Virtual Private&nbsp;Gateways and terminating the IPsec tunnels on AWS-supported customer gateways.</p>\r\n\r\n<p>You need to use IPSec tunnels for your connectivity between your on-premises environment and your VPC instances.</p>\r\n\r\n<p>Which of the following statements are correct concerning IPSec ( choose 4 )?</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer &ndash; C, D, E and F</strong></p>\r\n\r\n<p>IPSec is designed to provide authentication, integrity, and confidentiality of the data that is being transmitted. IPSec operates at the network layer of the OSI model. Hence, it only protects the data that is in transit over the internet. For the full security of the data transmission, it is essential that both the sender and receiver need to be IPSec-aware.</p>\r\n\r\n<p>See the diagram of this scenario:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_grbwxj.png\" style=\"height:560px; width:660px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because (a) IPSec operates at the network layer of the OSI model. Hence, it only protects the data that is in transit ( encryption of data in transit ONLY) over the internet, and (b) both the source and the destination (client and server) may not be IPSec aware.</li>\r\n\t<li>Option B is incorrect because the identity authentication of the origin of the data has to be done at the application layer, not the network layer.</li>\r\n\t<li>Option C is CORRECT because the data that is transiting via the IPSec tunnel is encrypted.</li>\r\n\t<li>Option D is CORRECT because IPSec protects the data in transit over the internet (fundamental responsibility of IPSec tunnel).</li>\r\n\t<li>Option E is CORRECT because, in this scenario, it is a pre-requisite to have the Peer identity authentication between VP&nbsp;gateway and customer gateway for implementing an IPsec VPN tunnel. The IPSec tunnel is established between the VP&nbsp;Gateway (VPG) and Customer Gateway (CGW) whose identity gets authenticated during the IPSec tunnel setup.&nbsp;</li>\r\n</ul>\r\n\r\n<p><br />\r\n<strong>Since it is a pre-requisite even for establishing this connection we cannot term that as an objective that we have achieved via IPSec implementation.</strong><br />\r\n&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Option F is CORRECT because - as mentioned earlier - the integrity of the data that is transiting via the IPSec tunnel is always preserved (fundamental responsibility of IPSec tunnel).</li>\r\n</ul>\r\n\r\n<p>For more information on IPSec tunnel, please refer to</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://techgenix.com/securing_data_in_transit_with_ipsec/\" target=\"_blank\">http://techgenix.com/securing_data_in_transit_with_ipsec/</a></li>\r\n</ul>\r\n\r\n<p>The below link provides an article on the general working of an IPSec tunnel which outlines the advantages of an IPSec tunnel which includes:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://www.firewall.cx/networking-topics/protocols/870-ipsec-modes.html\" target=\"_blank\">http://www.firewall.cx/networking-topics/protocols/870-ipsec-modes.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18511,
          "question_id": 28394,
          "answers": [
            {
              "choice": "<p>&nbsp;</p>\r\n\r\n<p>End-to-end protection of data.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>End-to-end Identity authentication.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Data encryption across the Internet.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Protection of data in transit over the Internet.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Peer identity authentication between Virtual Private&nbsp;Gateway and customer gateway is achieved as it is imperative for its implementation.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Data integrity protection across the Internet.</p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Migration Planning"
    },
    {
      "question_id": 28418,
      "topic_id": 367,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": null,
      "question_text": "<p>You are running a successful multitier web application on AWS. Your marketing department has asked you to add a reporting tier to the application. The reporting tier will aggregate and publish status reports every 30 minutes from user-generated information that is being stored in your web application&rsquo;s database. You are currently running a Multi-AZ RDS MySQL instance for the database tier. You also have implemented ElastiCache as a database caching layer between the application tier and database tier. Select the answer that will allow you to successfully implement the reporting tier with as little impact as possible to your database.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer &ndash; C</strong></p>\n\n<p>In question is asking you to design a reporting layer with the least impact on the database. If the reporting queries are fired on the database instance, the database instance&#39;s performance would surely get impacted. Since querying for the report would be a read-heavy operation, the best solution is to create the read replicas of the database instance and query on them rather than on the database instance. This way, the existing database instance will have the least impact.</p>\n\n<p><strong>Option A is incorrect</strong> because sending the logs to S3 would add to the overhead on the database instance.</p>\n\n<p><strong>Option B is incorrect</strong> because you cannot access the standby instance.</p>\n\n<p><strong>Option C is CORRECT </strong>because it uses the Read Replicas of the database for the querying of reports.</p>\n\n<p><strong>Option D is incorrect</strong> because the querying on ElastiCache may not always give you the latest and entire data, as the cache may not always be up-to-date.</p>\n\n<p>For more information on Read Replica&rsquo;s, please visit the below URL-</p>\n\n<ul>\n\t<li><a href=\"https://aws.amazon.com/rds/details/read-replicas/\" target=\"_blank\">https://aws.amazon.com/rds/details/read-replicas/</a></li>\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Strategies.html\">https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Strategies.html</a></li>\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 69899,
          "question_id": 28418,
          "answers": [
            {
              "question_id": "28418",
              "choice": "<p>Continually send transaction logs from your master database to an S3 bucket and generate the reports from the S3 bucket using S3 byte-range requests.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28418",
              "choice": "<p>Generate the reports by querying the synchronously replicated standby RDS MySQL instance maintained through Multi-AZ.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28418",
              "choice": "<p>Launch an RDS Read Replica connected to your Multi AZ master database and generate reports by querying the Read Replica.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "28418",
              "choice": "<p>Generate the reports by querying the ElasliCache database caching tier.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Continuous Improvement for Existing Solutions"
    },
    {
      "question_id": 28375,
      "topic_id": 363,
      "course_id": 168,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>You are migrating a legacy client-server application to AWS. The application responds to a specific DNS domain (e.g., www.example.com) and has a 2-tier architecture, with multiple application servers and a database server. Remote clients use TCP to connect to the application servers. The application servers need to know the clients&#39; IP address to function properly and are currently taking that information from the TCP socket. A decision is made to use a multi-AZ RDS MySQL instance for the database. During the migration, you can change the application code. But you have to file a change request.</p>\r\n\r\n<p>Which of the following options would help&nbsp;to maximize scalability and high-availability for the architecture on AWS?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Answer &ndash; A</p>\r\n\r\n<p><br />\r\nAWS ELB has support for Proxy Protocol. It simply depends on a humanly readable header with the client&#39;s connection information to the TCP data sent to your server.&nbsp;As per the AWS documentation, the Proxy Protocol header helps you identify the IP address of a client when you have a load balancer that uses TCP for back-end connections. Because load balancers intercept traffic between clients and your instances, the access logs from your instance contain the load balancer&#39;s IP address instead of the originating client. You can parse the first line of the request to retrieve your client&#39;s IP address and the port number.</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because it implements the proxy protocol and uses ELB with a TCP listener. A change request is needed to support the proxy protocol in the application. With the proxy protocol in ELB, the backend servers can get the IP addresses of the clients.</li>\r\n\t<li>Option B is incorrect because, although implementing cross-zone load balancing provides high availability, it states to use TCP forwarding, which does not support X-Forwarded-For.</li>\r\n\t<li>Option C is incorrect because Route53 latency-based routing does not give the IP address of the clients.</li>\r\n\t<li>Option D is incorrect because the Route53 Alias record does not give the IP address of the clients.</li>\r\n</ul>\r\n\r\n<p>For more information on ELB enabling support for TCP, please refer to the links given below.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/aws/elastic-load-balancing-adds-support-for-proxy-protocol/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/elastic-load-balancing-adds-support-for-proxy-protocol/</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html\" target=\"_blank\">https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 18492,
          "question_id": 28375,
          "answers": [
            {
              "choice": "<p>File a change request to implement Proxy Protocol Support in the application. Use&nbsp;an ELB with a TCP Listener and Proxy Protocol enabled to distribute the load on two application servers in different AZs.</p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>File a change request to Implement Cross-Zone support in the application. Use an ELB with a TCP Listener and Cross-Zone Load Balancing enabled to distribute the load on two application servers in different AZs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>File a change request to implement Latency Based Routing support in the application. Use Route 53 with Latency Based Routing enabled to distribute the load on two application servers in different AZs.</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>File a change request to implement Alias Resource Support in the application.&nbsp;Use a Route 53 Alias Resource Record to distribute the load on two application servers in different AZs.</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Design for Organizational Complexity"
    },
    {
      "question_id": 28384,
      "topic_id": 366,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": null,
      "question_text": "<p>You are the new IT architect in a company that operates a mobile sleep tracking application. When activated at night, the mobile app sends&nbsp;collected data points of 1 KB every 5 minutes to your middleware. The middleware layer takes care of authenticating the user and writing the data points into an Amazon DynamoDB table. Every morning, you scan the table to extract and aggregate last night&rsquo;s data on a per-user basis and store the results in Amazon S3. Users are notified via Amazon SMS mobile push notifications that new data is available, parsed, and visualized by the mobile app. The old data is not required by the end-users. Currently, you have around 100k users. You have been tasked to optimize the architecture of the middleware system to lower the cost. What would you recommend?<br />\r\n(Select TWO)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "2",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer &ndash; A and C</strong></p>\r\n\r\n<p><strong>Option A is CORRECT</strong> because (a) The data stored would be old/obsolete anyways and need not be stored; hence, lowering the cost, and (b) Storing the data in DynamoDB is expensive. Hence, you can set an expiry date so that the data gets deleted automatically.</p>\r\n\r\n<p><strong>Option B is incorrect</strong> because&nbsp;(a) Storing the data in DynamoDB is more expensive than S3, and (b) giving the app access to DynamoDB to read the data is an operational overhead.</p>\r\n\r\n<p><strong>Option C is CORRECT</strong> because (a) it uses SQS which reduces the provisioned output cutting down on the costs, and (b) acts as a buffer that absorbs sudden higher load, eliminating going over the provisioned capacity.</p>\r\n\r\n<p><strong>Option D is incorrect</strong> because the data is only read once before it is stored to S3. The cache would only be useful if you read things multiple times. Also, in this scenario optimizing &quot;write&quot; operations is most desired, not &quot;read&quot; ones.</p>\r\n\r\n<p><strong>Option E is incorrect </strong>because (a) Amazon Redshift cluster is primarily used for OLAP transactions, not OLTP; hence, not suitable for this scenario, and (b) moving the storage to Redshift cluster means deploying a large number of EC2 instances that are continuously running, which is not a cost-effective solution.</p>\r\n\r\n<p>For complete guidelines on working with DynamoDB, please visit the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GuidelinesForTables.html\" target=\"_blank\">http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GuidelinesForTables.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/howitworks-ttl.html\">https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/howitworks-ttl.html</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 80228,
          "question_id": 28384,
          "answers": [
            {
              "question_id": "28384",
              "choice": "<p>Store the data in the DynamoDB table with a Time to Live (TTL) and the data will be deleted automatically.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "28384",
              "choice": "<p>Have the mobile app access Amazon DynamoDB directly instead of JSON files stored on Amazon S3.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28384",
              "choice": "<p>Introduce an Amazon SQS queue to buffer writes to the Amazon DynamoDB table and reduce provisioned write throughput.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "28384",
              "choice": "<p>Introduce Amazon Elasticache to cache reads from the Amazon DynamoDB table and reduce provisioned read throughput.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28384",
              "choice": "<p>Write data directly into an Amazon Redshift cluster replacing both Amazon DynamoDB and Amazon S3.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Cost Control"
    },
    {
      "question_id": 28410,
      "topic_id": 363,
      "course_id": 168,
      "case_study_id": 0,
      "lab_id": null,
      "question_text": "<p>You are running a news website in the EU-west-1 region that updates every 15 minutes. The website has a worldwide audience. It uses an Auto Scaling group behind an Elastic Load Balancer and an Amazon RDS database. Static content resides on Amazon S3 and is distributed through Amazon CloudFront. Your Auto Scaling group is set to trigger a scale-up event at 60% CPU utilization.&nbsp;You use an Amazon RDS extra large DB instance with 10,000 Provisioned IOPS. Its CPU utilization is around 80%. Freeable memory is in the 2 GB range. Web analytics reports show that the average load time of your web pages is around 1.5 to 2 seconds, but your SEO consultant wants to bring down the average load time to under 0.5 seconds. Which of the following option&nbsp;would NOT&nbsp;help&nbsp;to improve page load times (performance) for your users?&nbsp;</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p><strong>Answer &ndash; A</strong></p>\r\n\r\n<p>In this scenario, there are three major points of consideration.</p>\r\n\r\n<p>(1) news website updates every 15 minutes,</p>\r\n\r\n<p>(2) current average load time is high, and</p>\r\n\r\n<p>(3) the performance of the website should be improved (i.e., read performance needs improvement).</p>\r\n\r\n<p>When the questions ask for performance improvement&nbsp;solutions for read-heavy applications, always see if any of the options contain caching solutions such as ElastiCache, CloudFront, or Read Replicas.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A (why option A is correct)</strong>: Lowering scale up trigger of ASG <strong>will not help</strong> to improve the page load time of users</li>\r\n\t<li><strong>Option B is INCORRECT</strong>&nbsp;because using an&nbsp;ElastiCache for storing sessions as well as for frequent DB queries would reduce&nbsp;the load on the database. This would help to increase the read performance. Since the question is asking for a <strong>NOT</strong> recommended option, this option is INCORRECT.</li>\r\n\t<li><strong>Option C is incorrect</strong> because it uses CloudFront, a network of globally distributed &quot;edge-locations&quot; that caches the content and improves user experience.</li>\r\n\t<li><strong>Option D is incorrect</strong> because scaling up the RDS read replicas will help improve read performance.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/networking-and-content-delivery/dynamic-whole-site-delivery-with-amazon-cloudfront/\" target=\"_blank\">https://aws.amazon.com/blogs/networking-and-content-delivery/dynamic-whole-site-delivery-with-amazon-cloudfront/</a></li>\r\n</ul>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 84717,
          "question_id": 28410,
          "answers": [
            {
              "question_id": "28410",
              "choice": "<p>Lower the scale-up trigger of your Auto Scaling group to 30%, so it scales more aggressively.</p>",
              "feedback": "",
              "correct": true
            },
            {
              "question_id": "28410",
              "choice": "<p>Add an Amazon ElastiCache caching layer to your application for storing sessions and frequent DB queries.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28410",
              "choice": "<p>Configure Amazon CloudFront dynamic content support to enable caching of re-usable content from your site.</p>",
              "feedback": "",
              "correct": false
            },
            {
              "question_id": "28410",
              "choice": "<p>Configure read replicas for RDS Database Instance.</p>",
              "feedback": "",
              "correct": false
            }
          ]
        }
      ],
      "topic_name": "Design for Organizational Complexity"
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
    }
  ]
}