// 6. Practice Test IV
var PracticeTest4 = {
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": 28975,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>As a solution architect professional, you have been requested to launch 20 Large EC2 instances which will all be used to process huge amounts of data. There is also a requirement that these instances need to transfer data back and forth among each other and need a low-latency network performance. Which of the following would be the most efficient setup to achieve this?</p>\r\n\r\n<p>Choose the correct option from the below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; C</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because being in the same region would not mean that the data transfer between the instances would be faster. In fact, the instances would experience network latency.</li>\r\n\t<li>Option B is incorrect because just being in the same AZ is not sufficient.&nbsp;They should be added to a Placement Group to benefit from the low network latency.</li>\r\n\t<li>Option C is CORRECT because Placement Group enables applications to get the low-latency network performance necessary for tightly-coupled node-to-node communication typical of many high-performance computing applications.&nbsp;</li>\r\n\t<li>Option D is incorrect because despite being of the largest size, the EC2 instances would still experience network latency if they are not part of a Placement Group.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on Placement Groups:</strong></p>\r\n\r\n<p>A&nbsp;<em>placement group</em>&nbsp;is a logical grouping of instances within a single Availability Zone. Placement groups are recommended for applications that benefit from low network latency, high network throughput, or both. To provide the lowest latency, and the highest packet-per-second network performance for your placement group, choose an instance type that supports enhanced networking.</p>\r\n\r\n<p>For more information on Placement Groups, please visit the URL</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19092,
            "question_id": 28975,
            "answers": [
              {
                "choice": "<p>Ensure that all the instances are placed in the same region.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure that all instances are placed in the same Availability Zone.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use a cluster Placement Group and ensure that all instances are launched in it.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use the largest EC2 instances currently available on AWS and make sure they are spread across multiple Availability Zones.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 45395,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are an AWS solutions architect in an IT company. Your company has a big data product that analyzes data from various sources like transactions, web servers, surveys, and social media. You need to design a new solution in AWS that can extract data from the source in S3 and transform the data to match the target schema automatically. Moreover, the transformed data can be analyzed using standard SQL. Which combination of solutions would meet these requirements in the best way? (Select TWO.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;C, E</strong></p>\r\n\r\n<p>AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy for customers to prepare and load their data for analytics.</p>\r\n\r\n<p>AWS Athena is out-of-the-box integrated with AWS Glue Data Catalog, allowing you to create a metadata repository across various services.</p>\r\n\r\n<p>AWS Glue and AWS Athena, when used together, can meet the requirements for this case.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/04/ckeditor_2.png\" style=\"height:366px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect:&nbsp;</strong>&nbsp;Although the ECS cluster may work, it is not fully managed by AWS. By AWS Glue, you can create and run an ETL job with a few clicks in the AWS Management Console.</li>\r\n\t<li><strong>Option B is incorrect</strong>:&nbsp;Similar reason as Option A. AWS Glue should be considered as the first choice when an extract, transform, and load (ETL) service is required in AWS.</li>\r\n\t<li><strong>Option C is correct</strong>&nbsp;because AWS Glue generates Scala or PySpark (the Python API for Apache Spark) scripts with AWS Glue extensions. You can use and modify these scripts to perform various ETL operations. You can extract, clean, and transform raw data, and then store the result in a different repository, where it can be queried and analyzed.</li>\r\n\t<li><strong>Option D is incorrect:</strong>&nbsp;Because AWS QuickSight is a service to deliver insights rather than perform SQL queries.</li>\r\n\t<li><strong>Option E is&nbsp;CORRECT</strong>:&nbsp;Because AWS Athena can directly query the data in AWS Glue Data Catalog with SQL commands. No additional step is needed.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35402,
            "question_id": 45395,
            "answers": [
              {
                "choice": "<p>Set up an AWS ECS cluster to manage the extract, transform, and load (ETL) service to prepare and load the data in S3 for analytics.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure an AWS EMR cluster to transform the data to a target format for downstream. Execute the EMR tasks on a schedule.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an AWS Glue ETL to run on schedule to scan the data in S3 and populate the Glue data catalog accordingly.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure AWS QuickSight to analyze the data using standard SQL commands.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Athena to query the data using standard SQL.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 45396,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A big SaaS provider migrated&nbsp;one of its on-premises products to AWS since many customers (over 300) already have their own Virtual Private Clouds (VPCs) in AWS. Due to certain product features, one key requirement is that all traffic between the service provider and customers should be private without being exposed to the internet. The company&rsquo;s operation team already configured a VPC. What is the best solution that can be recommended here?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;C</strong></p>\r\n\r\n<p>One major requirement for this question is that traffic data should not be exposed to the public Internet. Private connectivity can be provided by AWS PrivateLink between the SaaS VPC and customers&rsquo; VPCs from other AWS accounts.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong>:&nbsp;Because the virtual private gateway is for VPN connection which does not work between AWS VPCs.</li>\r\n\t<li><strong>Option B is incorrect:</strong>&nbsp;This may work, but&nbsp;it is not as good as option C. VPC peering is a relatively old solution to connect two VPCs privately. However, it also has several limitations. For example, the maximum limit is 125 peering connections per VPC, and VPC peering requires non-overlapping IP addresses.</li>\r\n\t<li><strong>Option C is&nbsp;CORRECT:&nbsp;</strong>Because by using AWS PrivateLink, it is very easy to connect services across different accounts and VPCs through the Amazon private network.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/04/ckeditor_3.png\" style=\"height:615px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option D is incorrect:</strong>&nbsp;Because NAT Gateway is used to route traffic from private subnets to the internet, which cannot be used between VPCs.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35403,
            "question_id": 45396,
            "answers": [
              {
                "choice": "<p>Set up a virtual private gateway in this VPC. To communicate with customer VPCs, set up a private VPN connection. Therefore, a highly available and private link is created between customers and the service provider.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a VPC peering between this VPC and each customer&rsquo;s VPC so that all connections are secure and private.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure an AWS endpoint service (PrivateLink) in the VPC. Other AWS customer accounts can create a connection from their VPC to the endpoint service using an interface VPC endpoint.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a NAT Gateway in the VPC. Modify the main route table to allow traffic to other VPCs only through this gateway to ensure that the traffic is not public.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
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
        "question_id": 28987,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are designing multi-region architecture, and you want to send users to a geographic location based on latency-based routing, which seems simple enough.&nbsp;However, you also want to use weighted-based routing among resources within that region. Which of the below setups would best accomplish this?</p>\r\n\r\n<p>Choose the correct answer from the below options.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; B</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because you need to define the recordset to be pointed to (in this case, weighted) before creating the top level recordset (in this case, latency).</li>\r\n\t<li>Option B is CORRECT because you need to create the weighted policies first because you will use those record sets as the alias pointing to in the latency record sets.</li>\r\n\t<li>Option C is incorrect because you can create the nested recordsets to accomplish this.</li>\r\n\t<li>Option D is incorrect because the use of IPv6 is not mandatory in this configuration (and it does not mention any latency based routing - which is one of the requirements).</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Please refer to the below documentation from AWS for an example where you can define complex routing.</p>\r\n\r\n<p>&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_gjozvy.png\" style=\"height:453px; width:705px\" /></p>\r\n\r\n<p>Please find the below link for complex-based routing.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html\" target=\"_blank\">http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19104,
            "question_id": 28987,
            "answers": [
              {
                "choice": "<p>You will need to use complex routing (nested recordsets) and ensure that you define the latency based records first.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You will need to use complex routing (nested recordsets) and ensure that you define the weighted resource record sets first.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>This cannot be done. You can&#39;t use different routing records together.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You will need to use AAAA - IPv6 addresses when you define your weighted based record sets.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28988,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An Amazon EMR&nbsp;cluster with four nodes is running 24/7/365 and expects potentially to add one extra&nbsp;node for several days only&nbsp;during the entire year that can be terminated. Which architecture would have the lowest possible cost for the cluster requirement?</p>\r\n\r\n<p>Choose the correct answer from the below options.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer - C</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is INCORRECT because purchasing On-demand instances would involve more cost than purchasing a spot instance.</li>\r\n\t<li>Option B is incorrect because reserving the 5th node is unnecessary.&nbsp;</li>\r\n\t<li>Option C is CORRECT because (a) the application requires 4 nodes throughout the year and reserved instances would save the cost and (b) since the extra node needs only to run for several days in a year and it can be terminated, purchasing a spot instance can provide a lowest cost option in addition to purchasing RI.</li>\r\n\t<li>Option D is incorrect because reserving only 2 instances would not be sufficient.</li>\r\n</ul>\r\n\r\n<p>Please find the below link for Reserved Instances.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/ec2/pricing/reserved-instances/\" target=\"_blank\">https://aws.amazon.com/ec2/pricing/reserved-instances/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19105,
            "question_id": 28988,
            "answers": [
              {
                "choice": "<p>Purchase 4 reserved nodes and rely on on-demand instances for the fifth node, if required.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Purchase 5 reserved nodes to cover all possible usage during the year.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Purchase 4 reserved nodes and launch a spot instance&nbsp;for the extra node if required.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Purchase 2 reserved nodes and utilize 3 on-demand nodes only for peak usage times.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 28989,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A company has placed a set of on-premises resources with an AWS Direct Connect provider. After establishing connections to a local AWS region in the US, the company needs to establish a low latency dedicated connection to an S3 public endpoint over the Direct Connect dedicated low latency connection. What steps need to be taken to accomplish configuring a direct connection to a public S3 endpoint?</p>\r\n\r\n<p>Choose the correct answer from the options given below.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; A</strong></p>\r\n\r\n<p>AWS Direct Connect enables you to directly interface your on-premises network with a device at an AWS Direct Connect location. You need to configure a Public Virtual Interface AND configure on-premises routing to utilize the direct connect for AWS public-facing services. Each virtual interface needs a VLAN ID, interface IP address, ASN, and BGP key. See the image below.</p>\r\n\r\n<p>&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_cywckr.png\" style=\"height:382px; width:700px\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because, as mentioned above, it creates a public virtual interface to connect to the S3 endpoint.</li>\r\n\t<li>Option B is incorrect because to connect to the S3 endpoint&nbsp;a public virtual interface needs to be created, not VPN.</li>\r\n\t<li>Option C is incorrect because to connect to the S3 endpoint&nbsp;a&nbsp;<strong>public&nbsp;</strong>virtual interface needs to be created,&nbsp;<strong>not</strong>&nbsp;<strong>private</strong>.</li>\r\n\t<li>Option D is incorrect because this setup will not help to connect to the S3 endpoint.</li>\r\n</ul>\r\n\r\n<p>For more information on virtual interfaces, please visit the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/directconnect/latest/UserGuide/WorkingWithVirtualInterfaces.html\" target=\"_blank\">http://docs.aws.amazon.com/directconnect/latest/UserGuide/WorkingWithVirtualInterfaces.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19106,
            "question_id": 28989,
            "answers": [
              {
                "choice": "<p>Configure a Public Virtual Interface AND configure on-premise routing to utilize the direct connect for AWS S3.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Establish a VPN connection from the VPC to the public S3 endpoint.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a private virtual interface to connect to the public S3 endpoint via the Direct Connect connection.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Add a BGP route as part of the on-premises router.&nbsp;This will route S3 related traffic to the public S3 endpoint to the dedicated AWS region.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 45397,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A fintech startup company is developing a product on the AWS platform. To speed up the development, the company plans to use a SaaS provided by AWS Marketplace. The SaaS provider already configured an AWS PrivateLink. In the company&rsquo;s VPC, which configuration is required to utilize this private connection so that traffic flows to the service provider over private AWS networking rather than over the Internet?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;A</strong></p>\r\n\r\n<p>To use AWS PrivateLink, an interface VPC endpoint for a service in the VPC is required.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/04/ckeditor_4.png\" style=\"height:691px; width:1000px\" /></p>\r\n\r\n<p>Details can be checked in AWS document <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html#what-is-privatelink\" target=\"_blank\">https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html#what-is-privatelink</a>.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is&nbsp;CORRECT:</strong>&nbsp;Because interface VPC endpoint is essential to establish a secure connection to the private link.</li>\r\n\t<li><strong>Option B is incorrect:</strong>&nbsp;Because a site to site VPN connection is used for the VPN connection between AWS and on-premise data center which is not suitable for this case.</li>\r\n\t<li><strong>Option C is incorrect:</strong>&nbsp;Because it should be an interface VPC endpoint rather than a gateway VPC endpoint. Secondly, the IP address in the elastic network interface should be private instead of elastic.</li>\r\n\t<li><strong>Option D is incorrect:</strong>&nbsp;Because an AWS Direct Connect connection is for the private connection between an on-premise server and AWS VPC. However, this question asks for the solution to communicate between the SaaS and AWS VPC.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35404,
            "question_id": 45397,
            "answers": [
              {
                "choice": "<p>In the VPC, configure an interface VPC endpoint for the SaaS which creates an elastic network interface in the subnet with a private IP address.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a site-to-site VPN connection in customer VPC for the SaaS to use the AWS private link connection.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In the VPC, set up a gateway VPC endpoint for the SaaS which creates an elastic network interface in the subnet with an elastic IP address.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In the VPC, create an AWS Direct Connect connection for the SaaS to securely connect with the AWS PrivateLink.</p>",
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
        "question_id": 45398,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are recently hired as an AWS architect in a startup company. The company just developed an online photo-sharing product. After the product was deployed for some time, you have found that the instances in the Auto Scaling group have reached the maximum value from time to time due to the high CPU rate and traffic.</p>\r\n\r\n<p>The network team has identified three IP addresses that sent many malicious requests during the time. You plan to configure a WAF Access Control List (ACL) with a rule to filter these three IP addresses. Which component or service are you able to associate the new WAF ACL with? (Select TWO.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;A, D</strong></p>\r\n\r\n<p>For AWS WAF, an ACL can be configured to control the HTTP and HTTPS requests that are forwarded to an Amazon API Gateway API, Amazon CloudFront, or an Application Load Balancer.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is&nbsp;CORRECT:</strong>&nbsp;Because CloudFront distribution is a global resource that WAF ACL can be associated with.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/04/ckeditor_5.1.png\" style=\"height:508px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect:&nbsp;</strong>Because the Auto Scaling&nbsp;group is not a valid resource that ACL can be linked with.</li>\r\n\t<li><strong>Option C is incorrect:</strong>&nbsp;Same as Option B.</li>\r\n\t<li><strong>Option D is&nbsp;CORRECT</strong>:&nbsp;Because the application load balancer in a region can be selected for the ACL as below.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/04/ckeditor_5.2.png\" style=\"height:634px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;E is incorrect:&nbsp;</strong>Because the network load balancer is not supported. For the regions where the application load balancer is supported for AWS WAF ACL, please check the AWS document in</li>\r\n</ul>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/general/latest/gr/rande.html#waf_region\" target=\"_blank\">https://docs.aws.amazon.com/general/latest/gr/rande.html#waf_region</a>.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35405,
            "question_id": 45398,
            "answers": [
              {
                "choice": "<p>The global CloudFront distribution that the product is using.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The Auto Scaling group that the product has used.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>All EC2 instances created for the product. Add each instance ID to associate with the ACL.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The application load balancer for the product.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The network load balancer for the product, however, only in US East (N. Virginia) region.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 45399,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>You work in a financial company as an AWS architect. The security team has informed you that the company&rsquo;s AWS web product has recently been attacked by SQL injection. Several attackers tried to insert certain malicious SQL code into web requests to extract data from the MySQL database. The database is deployed in several EC2 instances under an application load balancer. Although the attack was unsuccessful, you are expected to provide a better solution to protect the product. Which action should you perform?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;B</strong></p>\r\n\r\n<p>There are several firewall services that AWS has provided, including AWS WAF, AWS Shield, and AWS Firewall Manager. The differences among them can be found in <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html\" target=\"_blank\">https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html</a>.</p>\r\n\r\n<p>In this case, AWS WAF should be used as it can help to prevent SQL injection attacks.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong>:&nbsp;AWS Firewall Manager is a tool to simplify the AWS WAF and AWS Shield Advanced administration. However, an ACL is still needed in AWS WAF. Option B is more accurate.</li>\r\n\t<li><strong>Option B is CORRECT:</strong>&nbsp;Because AWS WAF can protect against SQL injection attacks for an application load balancer.</li>\r\n\t<li><strong>Option C is incorrect:&nbsp;</strong>Because AWS Shield Advanced provides expanded DDoS attack protection rather than SQL injection attack protection.</li>\r\n\t<li><strong>Option D is incorrect:&nbsp;</strong>Because after a WAF Access Control List (ACL) is created, the application load balancer should be associated instead of all EC2 instances.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35406,
            "question_id": 45399,
            "answers": [
              {
                "choice": "<p>Configure a rule in AWS Firewall Manager to block all malicious SQL injection requests for the EC2 instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a WAF Access Control List (ACL) with a rule to block the malicious SQL injection requests. Associate the application load balancer with this&nbsp;new ACL.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Shield Advanced service to block the malicious SQL injection requests that go to the application load balancer.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a WAF Access Control List (ACL) with a rule to allow all requests except the malicious SQL injection requests. Associate each EC2 instance with the new ACL.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 28994,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Which of the following must be done while generating a pre-signed URL in S3 to ensure that the user who is given the pre-signed URL has the permission to upload the object?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer - C</p>\r\n\r\n<p>Option A is INCORRECT&nbsp;because&nbsp;this is not a required step. With a pre-signed URL, the user itself does not need to have the write permission to S3.</p>\r\n\r\n<p>Option B&nbsp;is INCORRECT because this is not a required step. With a pre-signed URL, the user itself does not need to have the read permission to S3.</p>\r\n\r\n<p>Option C is CORRECT because to upload an object to S3 successfully, the pre-signed URL must be created by someone who has permission to perform the operation that the pre-signed URL is based upon.</p>\r\n\r\n<p>Option D is INCORRECT because CloudFront distribution is not needed in this scenario.</p>\r\n\r\n<p>For more information on pre-signed URL&rsquo;s, please visit the below URL</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19111,
            "question_id": 28994,
            "answers": [
              {
                "choice": "<p>Ensure the user has write permission to S3.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure the user has read permission to S3.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Ensure that the person who has created the pre-signed URL has the permission to upload the object to the appropriate S3 bucket.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create a CloudFront distribution.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
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
        "question_id": 45400,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A startup company just hired you as an AWS solutions architect. Your manager has assigned you a task to lower down AWS resources&#39; costs due to a limited budget. In the meantime, the service should not be impacted when the cost reduction activities are performed. For example, idle load balancers can be safely deleted to save costs without service impact. Which way can quickly help you to identify ways to optimize the cost?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;D</strong></p>\r\n\r\n<p>There are various tools that are billing or cost-related. However, the quickest way to identify the possibilities to optimize costs is to use the&nbsp;Trusted Advisor Cost Optimization dashboard.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/04/ckeditor_7.png\" style=\"height:504px; width:482px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong>:&nbsp;Because Cost Explorer does not directly tell which services can be adjusted to save cost.</li>\r\n\t<li><strong>Option B is incorrect:&nbsp;</strong>Although AWS Cost and Usage Reports can provide the cost report in a detailed way, you still need to dig into the resources to differentiate which ones can help save cost.</li>\r\n\t<li><strong>Option C is incorrect</strong>:&nbsp;This can help if a few resources are used. However, more analysis is required to understand how to optimize the spend if compared with Option D.</li>\r\n\t<li><strong>Option D is CORRECT:</strong>&nbsp;Because the Cost Optimization dashboard quickly checks several cost-related items, including Low Utilization Amazon EC2 Instances, Underutilized Amazon EBS Volumes, Idle Load Balancers, Unassociated Elastic IP Addresses, etc.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35407,
            "question_id": 45400,
            "answers": [
              {
                "choice": "<p>Launch Cost Explorer which can graph, visualize, and analyze the spend and then identify the services to be optimized.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure AWS Cost and Usage Reports and then analyze the AWS costs as well as the specific product offerings and usage amounts underlying those costs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Check the Billing details which list all AWS service charges. Identify and optimize the services that have an unreasonable cost.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Search for the recommended actions in the Trusted Advisor Cost Optimization dashboard.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 28997,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A user has set up Auto Scaling with ELB on the EC2 instances. The user wants to configure that whenever the CPU utilization is below 10%, Auto Scaling should remove one instance. How can the user configure this?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p>Option A is incorrect because for the user to get the notification, they have to configure CloudWatch which triggers a notification to Auto Scaling Group to terminate the instance. Updating the desired capacity will not work in this case.</p>\r\n\r\n<p>Option B is incorrect because scheduled scaling is used to scale your application in response to predictable load changes, not upon any notification.</p>\r\n\r\n<p>Option C is incorrect because the notification should be sent to Auto Scaling Group, not the launch configuration.</p>\r\n\r\n<p>Option D is CORRECT because the notification is sent to Auto Scaling Group, removing an instance from the running instances.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on Auto Scaling, Scheduled Actions:</strong></p>\r\n\r\n<p>Auto Scaling helps you maintain application availability and allows you to scale your Amazon EC2 capacity up or down automatically according to conditions you define. You can use Auto Scaling to help ensure that you are running your desired number of Amazon EC2 instances. Auto Scaling can also automatically increase the number of Amazon EC2 instances during demand spikes to maintain performance and decrease capacity during lulls to reduce costs.</p>\r\n\r\n<p>For more information on AutoScaling, please visit the link&nbsp;&ndash;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/autoscaling/\" target=\"_blank\">https://aws.amazon.com/autoscaling/</a><br />\r\n<a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html\" target=\"_blank\">https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19114,
            "question_id": 28997,
            "answers": [
              {
                "choice": "<p>The user can get an email using SNS when the CPU utilization is less than 10%. The user can use the desired capacity of Auto Scaling to remove the instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use CloudWatch to monitor the data and Auto Scaling to remove the instances using scheduled actions.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a CloudWatch alarm in the execute&nbsp;policy that notifies the Auto Scaling Launch configuration when the CPU utilization is less than 10%, and configure the Auto Scaling policy to remove the instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a CloudWatch alarm in the execute&nbsp;policy that notifies the Auto Scaling group when the CPU Utilization is less than 10%, and configure the Auto Scaling policy to remove the instance.</p>",
                "correct": true,
                "feedback": ""
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
        "question_id": 28999,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A user has configured an SSL(secure TCP) listener at a&nbsp;Classic Load Balancer for&nbsp;the back-end instances. Which of the below mentioned statements helps the user understand ELB traffic handling with respect to the SSL listener?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is invalid because if the front-end connection uses TCP or SSL, your back-end connections can use either TCP or SSL. If the front-end connection uses HTTP or HTTPS, then your back-end connections can use either HTTP or HTTPS.</p>\r\n\r\n<p>Option B is invalid because when you use TCP/SSL for both front-end and back-end connections, your load balancer forwards the request to the back-end instances without modifying the headers.</p>\r\n\r\n<p>Option C is invalid because with this configuration you do not receive cookies for session stickiness. But, when you use HTTP/HTTPS, you can enable sticky sessions on your load balancer.</p>\r\n\r\n<p>Option D is CORRECT because with SSL configuration&nbsp;the load balancer will forward the request to the back-end instances without modifying the headers.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on ELB, please visit the link:</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html\" target=\"_blank\">http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19116,
            "question_id": 28999,
            "answers": [
              {
                "choice": "<p>It is not possible to have the SSL listener both at ELB and back-end instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>ELB will modify headers to add requestor details.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>ELB will intercept the request to add the cookie details if sticky session is enabled.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>ELB will not modify the headers.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 45401,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>In a large company, you work as an AWS administrator. For a Windows SQL server instance, there is already a daily task to regularly transfer the database backup files to an S3 bucket (DB_Backup_1) in AWS account 111111111111. One data scientist asks you if it is possible to copy the latest backup file to another S3 bucket (DB_Backup_2) in his AWS account 222222222222. You plan to use AWS S3 CLI to do this. Which combinations of methods can accomplish this mission? (Select TWO.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;A, C</strong></p>\r\n\r\n<p>Two items are required to enable the copy from an S3 bucket in the source account to another S3 bucket in the target account.</p>\r\n\r\n<p>1, In the source AWS account, there is a bucket policy to allow the target account to ListBucket and GetObject.</p>\r\n\r\n<p>2, In the target AWS account, there is an IAM policy for the IAM user (or group) to allow the user to copy the file from the source bucket (in source AWS account) to the target bucket (in target AWS account).</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is&nbsp;CORRECT</strong>:&nbsp;One example of this bucket policy is as below.</li>\r\n</ul>\r\n\r\n<p>{</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &quot;Statement&quot;: [</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Sid&quot;: &quot;DelegateS3Access&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Effect&quot;: &quot;Allow&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Principal&quot;: {&quot;AWS&quot;: &quot;222222222222&quot;},</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Action&quot;: [&quot;s3:ListBucket&quot;,&quot;s3:GetObject&quot;],</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Resource&quot;: [</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:s3:::sourcebucket/*&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;arn:aws:s3:::sourcebucket&quot;</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; ]</p>\r\n\r\n<p>}</p>\r\n\r\n<p>Some more details can be found in <a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/copy-s3-objects-account/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/copy-s3-objects-account/</a>.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option B is incorrect</strong>:&nbsp;Because it should be a bucket policy rather than an ACL policy. Besides, s3:GetObject is needed instead of s3:PutObject.</li>\r\n\t<li><strong>Option C is&nbsp;CORRECT:&nbsp;</strong>Because this allows the data scientist user to copy files (GetObject&nbsp;) from the source bucket and put files (PutObject) in the target bucket.</li>\r\n\t<li><strong>Option D is incorrect:</strong>&nbsp;Because there is no need in the target account to put a bucket policy.</li>\r\n\t<li><strong>Option E is incorrect:&nbsp;</strong>Because in the target account, no Access Control List (ACL) policy is required. Instead, an IAM policy should exist to allow the file copy.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35408,
            "question_id": 45401,
            "answers": [
              {
                "choice": "<p>In account 111111111111, attach a bucket policy to DB_Backup_1 that allows the destination account 222222222222 to do the actions of &quot;s3:ListBucket&quot; and &quot;s3:GetObject&quot;.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>In account 111111111111, attach an Access Control List (ACL) policy to DB_Backup_1 that allows the destination account 222222222222 to do the actions of &quot;s3:ListBucket&quot; and &quot;s3:PutObject&quot;.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In account 222222222222, attach an IAM policy to the IAM user or group that allows the data scientist user to copy objects from source bucket DB_Backup_1 to bucket DB_Backup_2.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>In account 222222222222, attach a bucket policy to DB_Backup_2 that allows the destination account 222222222222 to do the actions of &quot;s3:ListBucket&quot; and &quot;s3:PutObject&quot;.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>In account 222222222222, attach an Access Control List (ACL) policy to DB_Backup_2 that allows the source account 111111111111 to do the actions of &quot;s3:ListBucket&quot;, &quot;s3:GetObject&quot; and &quot;s3:ListObject&quot;.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 29001,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>An organization has created one IAM user and applied the below mentioned policy to the user. What entitlements do the IAM users avail with this policy?</p>\r\n\r\n<p>{</p>\r\n\r\n<p>&nbsp; &nbsp; &quot;Version&quot;: &quot;2012-10-17&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &quot;Statement&quot;: [</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; {</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Sid&quot;: &quot;VisualEditor0&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Effect&quot;: &quot;Allow&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Action&quot;: [</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;ec2:Describe*&quot;</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ],</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Resource&quot;: &quot;*&quot;</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; },</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; {</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Sid&quot;: &quot;VisualEditor0&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Effect&quot;: &quot;Allow&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Action&quot;: [</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;autoscaling:Describe*&quot;</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ],</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Resource&quot;: &quot;*&quot;</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; },</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; {</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Sid&quot;: &quot;VisualEditor0&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Effect&quot;: &quot;Allow&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Action&quot;: [</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;cloudwatch:ListMetrics&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;cloudwatch:Describe*&quot;,</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;cloudwatch:GetMetricStatistics&quot;</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ],</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &quot;Resource&quot;: &quot;*&quot;</p>\r\n\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp; }</p>\r\n\r\n<p>&nbsp; &nbsp; ]</p>\r\n\r\n<p>}</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p>AWS Identity and Access Management is a web service that allows organizations to manage users and user permissions for various AWS services. If an organization wants to set up read-only access to EC2 for a particular user, they should mention the action in the IAM policy which entitles the user for Describe rights for EC2, CloudWatch, Auto Scaling, and ELB. The user will have read-only access for EC2, CloudWatch, and Auto Scaling in the policy shown below. Since ELB is not mentioned as a part of the list, the user will not have access to ELB.</p>\r\n\r\n<p>The above policy will allow the user to view EC2 instances&nbsp;(look at Auto Scaling&nbsp;and CloudWatch).</p>\r\n\r\n<p>Options A, B and C are incorrect because the policy does not include ELB permissions.</p>\r\n\r\n<p>For more information on IAM policy, please visit the URL:</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19118,
            "question_id": 29001,
            "answers": [
              {
                "choice": "<p>The policy will allow the user to perform all read-only activities on the EC2 services including EC2 instances, Auto Scaling groups and ELBs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The policy will allow the user to list all the EC2 resources including EC2 instances, Auto Scaling groups and ELBs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The policy will allow the user to perform all read and write activities on the EC2 services including EC2 instances, Auto Scaling groups and ELBs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The policy will allow the user to perform the read-only activities on the EC2 instances and Auto Scaling groups.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 45402,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A company is creating a new recipe blog sharing application in AWS. The static content has been put into an S3 bucket. In the meantime, a database is needed to store the data for various blog posts. The application retrieves data from the database and dynamically renders a recipe blog page.</p>\r\n\r\n<p>The web application has a requirement to serve users globally. Also, the company prefers a serverless solution if possible. Which combinations of services should be used together so that the application does NOT need origin infrastructure and administrative effort required for automatic scaling, backups, or database redundancy? (Select THREE.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash;&nbsp;B, D, E</strong></p>\r\n\r\n<p>The main requirement for this question is that no extra efforts are needed for origin infrastructure, automatic scaling, backups, and database redundancy. Proper AWS services should be chosen to align with this rule. Hence, options having EC2 with ELB and Auto Scaling can be safely eliminated.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect:&nbsp;</strong>Because ELB and Auto Scaling do&nbsp;not help to route traffic to users globally.</li>\r\n\t<li><strong>Option B is&nbsp;CORRECT</strong>:&nbsp;Because CloudFront has over 100 Edge Locations and is a proper CDN to deliver content to end-users with lower latency globally.</li>\r\n\t<li><strong>Option C is incorrect:&nbsp;</strong>Same reason as Option A as EC2 is eliminated.</li>\r\n\t<li><strong>Option D is&nbsp;CORRECT</strong>:&nbsp;Because Lambda@Edge can work together with CloudFront to build dynamic web applications that automatically scale up and down. There is also no need to build up servers to hold the application code.</li>\r\n\t<li><strong>Option E is&nbsp;CORRECT:</strong>&nbsp;Because DynamoDB database is a fully managed and high-performance database. DynamoDB automatically scales tables to adjust for capacity and maintain performance.</li>\r\n\t<li><strong>Option F is incorrect:</strong>&nbsp;RDS needs Read Replica and Multi-AZ to be scalable, which brings extra efforts. There is also no need to use a relational database for this case. Option E (DynamoDB) is better and is a pure serverless solution together with other valid options.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35409,
            "question_id": 45402,
            "answers": [
              {
                "choice": "<p>Configure an elastic load balancer and Auto Scaling group to balance the traffic dynamically.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure an AWS CloudFront to serve end users from various Edge Locations.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Auto Scaling configuration for EC2 instances to automatically scale up and down according to the load.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Run the application code in Lambda@Edge to retrieve data from the database, and the response is also cached and served by CloudFront.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Use DynamoDB to store data for blog posts that the application is using.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>For the dynamic data including blog posts for customers, configure an RDS instance as the database.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 29003,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>An organization has configured Auto Scaling with ELB. There is a memory issue in the application which is causing CPU utilization to go above 90%. The higher CPU usage triggers an event for Auto Scaling as per the scaling policy. If the user wants to find the root cause inside the application without triggering a scaling activity, how can he achieve this?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>In this scenario, the user wants to investigate the problem during the Auto Scaling process without triggering the scaling activity. For this, the user can leverage the suspend and resume option available on Auto Scaling.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is incorrect because the scaling process needs not to be stopped. It can be suspended so that it can be resumed.</p>\r\n\r\n<p>Option B is incorrect because scaling can be momentarily suspended until the investigation is completed.</p>\r\n\r\n<p>Option C is incorrect because the Auto Scaling group is totally unnecessary in this scenario.</p>\r\n\r\n<p>Option D is CORRECT because you can suspend and then resume one or more of the scaling processes for your Auto Scaling group, if you want to investigate a configuration problem or other issue with your web application and then make changes to your application without triggering the scaling processes.</p>\r\n\r\n<p>For more information on suspending AutoScaling processes, please visit the link</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html\" target=\"_blank\">http://docs.aws.amazon.com/autoscaling/latest/userguide/as-suspend-resume-processes.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19120,
            "question_id": 29003,
            "answers": [
              {
                "choice": "<p>Stop the scaling process until research is completed.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>It is not possible to find the root cause from that instance without triggering scaling.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Delete the Auto Scaling group until research is completed.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Suspend the scaling process until research is completed.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28977,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A company has 2 accounts- one is a development account, and the other is a production account. There are 20 people on the development account who now need various access levels provided to them on the production account. 10 of them need read-only access to all resources on the production account, 5 of them need read/write access to EC2 resources, and the remaining 5 only need read-only access to S3 buckets. Which of the following options would be the best way for both practical and security-wise to accomplish this task?</p>\r\n\r\n<p>Choose the correct answer from the below options.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer - A</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because it creates 3 roles according to the need in the production account and adds the permissions to each of the IAM Users in the development account to assume those roles accordingly in the production account.</li>\r\n\t<li>Option B is incorrect because you should be creating IAM Roles in the production account, and the development users should assume those roles. This option is suggesting creating 3 separate users in the production account which is incorrect.</li>\r\n\t<li>Option C is incorrect because encryption keys are unnecessary and will not work in this scenario.</li>\r\n\t<li>Option D is incorrect because the creation of the IAM user accounts in the production account is unnecessary. You should be creating IAM Roles instead.</li>\r\n</ul>\r\n\r\n<p>For more information on &quot;Delegating Access Across AWS Accounts Using IAM Role&quot; - please refer to the below link</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html\" target=\"_blank\">https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19094,
            "question_id": 28977,
            "answers": [
              {
                "choice": "<p>Create 3 roles in the production account with a different policy for each of the access levels needed. Add permissions to each IAM User in the development account to assume a role on the production account based on the type of access needed.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create 3 new users on the production account with the various levels of permissions needed. Give each of the 20 users the login for whichever one of the 3 users they need depending on the level of access required.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create encryption keys for each of the resources that need access and provide those keys to each user depending on the access required.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Copy the 20 users IAM accounts from the development account to the production account. Then change the access levels for each user on the production account.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
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
        "question_id": 45450,
        "topic_id": 363,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your company has configured an AWS organization with a master account and several organization units (OU) for its various R&amp;D departments. There is an S3 bucket owned by AWS account A that needs to be accessed by one IAM user that belongs to another AWS account B. Account B is outside the organization. The S3 bucket policy already granted access to this account B user. In account B, the user has the IAM permissions to read the bucket. However, AWS account A has a Service Control Policy (SCP) attached to allow the bucket access only from account A users. Is the IAM user in account B able to read the files in the bucket successfully?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer&nbsp;&ndash;&nbsp;D</strong></p>\r\n\r\n<p>When the Service Control Policy (SCP) is configured, only those IAM users that are within the organization are affected. In other words, SCP does not affect users or roles if they are outside the organization. For various SCP effects on permissions, refer to <a href=\"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html\" target=\"_blank\">https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html</a>.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect</strong>:&nbsp;Because SCP does not affect the user in account B since it does not belong to the Organization.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect:&nbsp;</strong>Because S3 cross-accounts access is possible as long as enough IAM permissions are granted.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect:&nbsp;</strong>Because there is no need to allocate a new OU for account B.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;CORRECT:</strong>&nbsp;Because the user in account B can read the files in the bucket as SCP policy does not influence it. About the details on how to copy S3 objects from another AWS account, check the AWS tutorial in</li>\r\n</ul>\r\n\r\n<p><a href=\"https://aws.amazon.com/premiumsupport/knowledge-center/copy-s3-objects-account/\" target=\"_blank\">https://aws.amazon.com/premiumsupport/knowledge-center/copy-s3-objects-account/</a>.</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35457,
            "question_id": 45450,
            "answers": [
              {
                "choice": "<p>No, because the SCP policy takes priority and disallows the bucket access from the user in account B.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>No, because S3 cross-accounts access can only be allowed for AWS IAM users within an AWS Organization.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>No, the AWS organization should add a new OU for account B and then configure an SCP in the new OU to allow&nbsp;access to the S3 bucket.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Yes.&nbsp;Since SCP doesn&#39;t apply to those outside users, the user in account B has the permission to access the files in the bucket.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 45451,
        "topic_id": 363,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>An IT company has owned several AWS accounts that belong to an AWS Organization. The root account and all children accounts have configured Service Control Policies (SCPs) to help manage the organization. Recently, an IAM user in a child account needs the permissions to enable its Amazon VPC Flow Logs. Under which configurations can the user operate the VPC Flow Logs successfully? (Select TWO.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;B, D</strong></p>\r\n\r\n<p>An SCP policy can limit the permissions for all entities in its member accounts, which means the root account policy affects all the children&#39;s accounts. And the child account has only those permissions permitted by every parent above it.</p>\r\n\r\n<p>In this case, to have the permissions to enable VPC Flow Logs, the root account SCP, the child account SCP,&nbsp;and IAM policy should all allow the action.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect:</strong>&nbsp;Because the child account SCP blocks the action.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;CORRECT:</strong>&nbsp;Because all parties allow the action according to the above.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect:</strong>&nbsp;Because users or roles must be granted permissions using IAM permission policies even if SCP policies allow the actions.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;CORRECT</strong>:&nbsp;Because the FullAWSAccess policy is a default one that allows everything including VPC Flow Logs.</li>\r\n\t<li><strong>Option&nbsp;E is&nbsp;incorrect</strong>:&nbsp;Because the action is blocked by the root account SCP even if the child SCP allows it.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35458,
            "question_id": 45451,
            "answers": [
              {
                "choice": "<p>The SCP for the root account permits enabling VPC Flow Logs. The SCP for the child account does NOT permit enabling VPC Flow Logs. The user has the IAM permission policy to enable VPC Flow Logs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The SCPs for both root account and the child account permit enabling VPC Flow Logs. The user has the IAM permission policy to enable VPC Flow Logs.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The SCP for the root account permits all actions with default FullAWSAccess policy. The user does NOT have the IAM permission policy to enable VPC Flow Logs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The SCP for the root account permits all actions with default FullAWSAccess policy. The child account permits enabling VPC Flow Logs. The user has the IAM permission policy to enable VPC Flow Logs.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The SCP for the root account does NOT permit enabling VPC Flow Logs. The SCP for the child account permits enabling VPC Flow Logs. The user does NOT have&nbsp;the IAM permission policy to enable VPC Flow Logs.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for Organizational Complexity"
      },
      {
        "question_id": 29007,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>An organization (Account ID 123412341234). has attached the below-mentioned IAM policy to a user. What does this policy statement entitle the user to perform?</p>\r\n\r\n<p>{</p>\r\n\r\n<p>&nbsp;&nbsp; &ldquo;Version&rdquo;: &ldquo;2012-10-17&rdquo;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &ldquo;Statement&rdquo;: [{</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &ldquo;Sid&rdquo;: &ldquo;AllowUsersAllActionsForCredentials&rdquo;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &ldquo;Effect&rdquo;: &ldquo;Allow&rdquo;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &ldquo;Action&rdquo;: [</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &ldquo;iam:*LoginProfile&rdquo;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &ldquo;iam:*AccessKey*&rdquo;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &ldquo;iam:*SigningCertificate*&rdquo;</p>\r\n\r\n<p>],</p>\r\n\r\n<p>&nbsp;&nbsp; &ldquo;Resource&rdquo;: [&ldquo;arn:aws:iam::123412341234:user/${aws:username}&rdquo;]</p>\r\n\r\n<p>&nbsp;} ]</p>\r\n\r\n<p>}</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; D</p>\r\n\r\n<p>First, to give a user a certain set of policies, you need to mention the following line. The aws:username will apply to the AWS logged in user.</p>\r\n\r\n<p>Resource&quot;: &quot;arn:aws:iam::<em>account-id-without-hyphens</em>:user/${aws:username}</p>\r\n\r\n<p>Next, the policies will give the permissions to modify the IAM user&rsquo;s password, sign in certificates, and access keys.&nbsp;</p>\r\n\r\n<p>&ldquo;iam:*LoginProfile&rdquo;,</p>\r\n\r\n<p>&ldquo;iam:*AccessKey*&rdquo;,</p>\r\n\r\n<p>&ldquo;iam:*SigningCertificate*&rdquo;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>For information on IAM security policies, please visit the link:\r\n\t<ul>\r\n\t\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html\" target=\"_blank\">http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19124,
            "question_id": 29007,
            "answers": [
              {
                "choice": "<p>The policy allows the IAM user to modify all IAM user&rsquo;s credentials using the console, SDK, CLI, or APIs.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The policy will give an invalid resource error.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The policy allows the IAM user to modify all credentials using only the console.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The policy allows the user to modify the IAM user&rsquo;s password,&nbsp;signing certificates&nbsp;and access keys only.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 45452,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are working on a proof of concept serverless project and presenting it to the shareholders in a week. This project needs an API gateway, a Lambda function, and a DynamoDB table to store user data. To save time, you plan to use AWS Serverless Application Model (AWS SAM) as it provides templates to deploy all required resources quickly. You have found that SAM templates are very similar to CloudFormation templates. However, which resource types are specially introduced by the SAM template? (Select TWO.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;B, D</strong></p>\r\n\r\n<p>AWS SAM is an extension of AWS CloudFormation. A SAM serverless application is defined in a CloudFormation template and deployed as a CloudFormation stack. The AWS SAM template can be regarded as a CloudFormation template. However, it has its own special resources. Check <a href=\"https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessapplication\" target=\"_blank\">https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessapplication</a> for details.</p>\r\n\r\n<p>Note: to include objects defined by AWS SAM, the template must include a Transform section in the document with a value of AWS::Serverless-2016-10-31.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect:&nbsp;</strong>Because AWS::DynamoDB::Table is not SAM special and belongs to the CloudFormation resource type.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;CORRECT:</strong>&nbsp;Because AWS::Serverless::Api is designed for API gateway resource in the SAM framework.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect</strong>:&nbsp;Similar to Option A.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;CORRECT</strong>:&nbsp;Because AWS::Serverless::Function is the SAM resource that creates a Lambda function, IAM execution role, and event source mappings.</li>\r\n\t<li><strong>Option&nbsp;E is&nbsp;incorrect:</strong>&nbsp;Because AWS::ApiGateway::RestApi also belongs to the CloudFormation resource type. Refer to <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html</a>.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35459,
            "question_id": 45452,
            "answers": [
              {
                "choice": "<p>AWS::DynamoDB::Table</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS::Serverless::Api</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>AWS::Lambda::Api</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS::Serverless::Function</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>AWS::ApiGateway::RestApi</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 45453,
        "topic_id": 366,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are a software engineer and creating a serverless application in AWS to process photos. When each image is uploaded to an S3 bucket, a Lambda function is invoked.&nbsp;This Lambda function then calls Amazon Rekognition to detect text in the image. The returned results are saved in a DynamoDB table. You have used a template provided by AWS Serverless Application Model (AWS SAM) to build and deploy the whole application. For the above mentioned AWS services, which one do you still need to pay even if the service is not used?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;E</strong></p>\r\n\r\n<p>AWS has provided a variety of services that customers only pay for the amount that they use (Pay-as-you-go model), which means that customers are not charged if services are unused. The document <a href=\"https://aws.amazon.com/pricing/?nc2=h_ql_pr\" target=\"_blank\">https://aws.amazon.com/pricing/?nc2=h_ql_pr</a> is an introduction of AWS pricing features.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect</strong>:&nbsp;Because the Lambda function created by SAM has used a Pay-as-you-go model, and there is no charge if it is not used.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect:</strong>&nbsp;Because SAM Template is an extension to the CloudFormation template. No charge for the SAM service.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect:&nbsp;</strong>Because users pay only for the API calls received and the amount of data transferred out for API Gateway.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;incorrect</strong>:&nbsp;Because AWS Rekognition Image Analysis is charged based on the number of images analyzed.</li>\r\n\t<li><strong>Option&nbsp;E is&nbsp;CORRECT:</strong>&nbsp;Because all the above options do not have an upfront or monthly fee, and customers are not charged if the services are not used.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35460,
            "question_id": 45453,
            "answers": [
              {
                "choice": "<p>Lambda function</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>SAM Template</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>API Gateway</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Rekognition Image Analysis</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>None of the above</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 45454,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You have owned a two-tier LAMP stack in a local data center. The stack has a frontend of Apache and PHP and a backend database running on MySQL. The whole system is hosted on a virtualized platform, and you need to migrate the system to AWS in two weeks. You plan to use AWS provided migration services to migrate MySQL database to RDS Aurora and on-premise virtual machines (managed by VMware vSphere) to EC2. Which AWS services should be used? (Select TWO.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;A, D</strong></p>\r\n\r\n<p>This case aims to find out the proper AWS tools to help with the migrations for its two tiers application and database.</p>\r\n\r\n<p>For the database, AWS Database Migration Service should be chosen to easily replicate the database to an RDS instance of Amazon Aurora which is a MySQL compliant database. Check <a href=\"https://docs.aws.amazon.com/dms/latest/sbs/CHAP_MySQL2Aurora.html\" target=\"_blank\">https://docs.aws.amazon.com/dms/latest/sbs/CHAP_MySQL2Aurora.html</a> on how to migrate a MySQL-compatible database to Amazon Aurora MySQL.</p>\r\n\r\n<p>For the application, AWS Server Migration Service should be used because it is designed to automate the migration of on-premises VMware vSphere or Microsoft Hyper-V/SCVMM virtual machines to the AWS Cloud. The service can replicate the VM to an AMI for deployment on Amazon EC2.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;CORRECT:</strong>&nbsp;Because it is used to migrate the database to RDS Aurora.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect:</strong>&nbsp;The service can be used to discover the existing servers, plan migrations, and track the status. However, the migration tools of Database Migration Service and Server Migration Service are still needed. AWS Migration Hub is not necessary for this case.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect:</strong>&nbsp;Because AWS Snowball is a service to copy a large amount&nbsp;of data rather than migrate applications or databases.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;CORRECT:</strong>&nbsp;Because AWS Server Migration Service is the correct AWS service to migrate applications.</li>\r\n\t<li><strong>Option&nbsp;E is&nbsp;incorrect:</strong>&nbsp;AWS Application Discovery Service can collect data in local data centers, including system specification, performance, dependencies, and other useful information. It is not mentioned or required for this case.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35461,
            "question_id": 45454,
            "answers": [
              {
                "choice": "<p>AWS Database Migration Service</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>AWS Migration Hub</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS Snowball</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>AWS Server Migration Service</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>AWS Application Discovery Service</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 44774,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A small trading business consults you to implement a blockchain across its supply chain network, providing greater transparency, real-time recording,&nbsp;and tracking of goods. Each supplier or distributor can be a member of the blockchain network. The customers are looking to manage their own blockchain network and need an easy way to set up and get started. They prefer to deploy the blockchain framework of Hyperledger Fabric as containers on an Amazon Elastic Container Service (ECS) cluster, or directly on an EC2 instance running Docker. What way should you recommend?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; D</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>There are several Amazon Blockchain services as in <a href=\"https://aws.amazon.com/blockchain/\" target=\"_blank\">https://aws.amazon.com/blockchain/</a>:</p>\r\n\r\n<ul>\r\n\t<li>&nbsp;Amazon QLDB - a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log &lrm;owned by a central trusted authority.</li>\r\n\t<li>&nbsp;Amazon Managed Blockchain - a fully managed service that makes it easy to create and manage scalable blockchain networks using popular open-source frameworks Hyperledger Fabric and Ethereum.</li>\r\n\t<li>&nbsp;AWS Blockchain Templates - a fast and easy way to create and deploy secure blockchain networks using popular open-source frameworks. AWS Blockchain Templates deploys the blockchain framework you choose as containers on an Amazon Elastic Container Service (ECS) cluster or directly on an EC2 instance running Docker. It is essentially a CloudFormation template where users can still fully manage the instances:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq4-7.jpg\" style=\"height:176px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect: Because Amazon Quantum Ledger Database is a ledger database that is not used to deploy the Blockchain network.</li>\r\n\t<li>Option B is incorrect: Because Amazon Managed Blockchain does not allow you to manage your ECS or EC2 instances. Also, QLDB is not used to manage the Blockchain network fully.</li>\r\n\t<li>Option C is incorrect: Same reason as Option B.</li>\r\n\t<li>Option D is CORRECT: Because AWS Blockchain Templates allows you to create and deploy a Hyperledger Fabric network fast and easily in ECS cluster or EC2 instances.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34785,
            "question_id": 44774,
            "answers": [
              {
                "choice": "<p>Use Amazon Quantum Ledger Database (QLDB) to deploy the AWS BlockChain network in ECS and EC2 depending on specific requirements.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon Managed Blockchain to deploy the network. Replicate an immutable copy of the blockchain network activity into Amazon Quantum Ledger Database (QLDB), where customers can fully manage the blockchain network.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon Managed Blockchain to deploy the framework. By using Amazon Managed Blockchain, customers can access ECS or EC2 instances and deploy decentralized applications.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use AWS Blockchain Templates to deploy the blockchain Hyperledger Fabric framework on an Amazon Elastic Container Service (ECS) cluster or directly on an EC2 instance.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 29012,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Which of the following are best practices that need to be followed when updating Opswork stack instances with the latest security patches?</p>\r\n\r\n<p>Choose 2 correct options from the below.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p>Answers: A and B</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The best practices for updating your OpsWork stacks instances with the latest security patches.</p>\r\n\r\n<ul>\r\n\t<li>Create and start new instances to replace your current online instances. Then delete the current instances.&nbsp;The new instances will have the latest set of security patches installed during setup.</li>\r\n\t<li>On Linux-based instances in Chef 11.10 or older stacks, run the Update Dependencies stack command, installing the current set of security patches and other updates on the specified instances.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on OpsWork Linux security updates best practices, please visit the link &ndash;</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity-updates.html\" target=\"_blank\">https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity-updates.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19129,
            "question_id": 29012,
            "answers": [
              {
                "choice": "<p>Create and start new instances to replace your current online instances.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>run the Update Dependencies stack command for Linux based instances.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Delete the entire stack and create a new one.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Cloudformation to deploy the security patches.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 29013,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>While managing your instances in the current OpsWorks stack, you suddenly started getting the following error.</p>\r\n\r\n<p>ws::CharlieInstanceService::Errors::UnrecognizedClientException - The security token included in the request is invalid.</p>\r\n\r\n<p>Which of the below 2 checks can be done to rectify this error?</p>\r\n\r\n<p>&nbsp;</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer: A and B.</p>\r\n\r\n<p>This can occur if a resource outside AWS OpsWorks on which the instance depends was edited or deleted. The following are examples of resource changes that can break communications with an instance.</p>\r\n\r\n<ul>\r\n\t<li>An IAM user or role associated with the instance has been deleted accidentally, outside of AWS OpsWorks Stacks. This causes a communication failure between the AWS OpsWorks agent that is installed on the instance and the AWS OpsWorks Stacks service. The IAM user that is associated with an instance is required throughout the life of the instance.</li>\r\n\t<li>Editing volume or storage configurations while an instance is offline can make an instance unmanageable.</li>\r\n\t<li>Adding EC2 instances to an ELB&nbsp;manually. AWS OpsWorks reconfigures an assigned Elastic Load Balancing load balancer when an instance enters or leaves the online state. AWS OpsWorks only considers instances it knows about to be valid members.&nbsp;Instances that are added outside of AWS OpsWorks, or by some other process, are removed. Every other instance is removed.</li>\r\n</ul>\r\n\r\n<p>For more information on troubleshooting OpsWorks, please visit the link:</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/opsworks/latest/userguide/common-issues-troubleshoot.html\" target=\"_blank\">http://docs.aws.amazon.com/opsworks/latest/userguide/common-issues-troubleshoot.html</a></p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19130,
            "question_id": 29013,
            "answers": [
              {
                "choice": "<p>Check the IAM role which was attached to the instance.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Check if the EC2 instances were manually added to the ELB.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Check if the stack is configured properly.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Check if the OpsWorks client is configured properly.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 45455,
        "topic_id": 366,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>The company you are working for has an on-premises blog web application, which is built on VMware vSphere virtual machines. As an AWS solutions architect, you need to evaluate the proper methods to migrate the application to AWS. After the initial analysis, you have suggested using AWS Server Migration Service (SMS) to migrate. During this migration process, which AWS services will NOT bring extra costs? (Select TWO.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer &ndash;&nbsp;A, D</strong></p>\r\n\r\n<p>AWS SMS is a free service to use for the server migration which means that there is no additional fee. However, the storage resources used during the migration process, such as Amazon EBS snapshots and Amazon S3, can generate standard fees. Refer to <a href=\"https://docs.aws.amazon.com/server-migration-service/latest/userguide/server-migration.html\" target=\"_blank\">https://docs.aws.amazon.com/server-migration-service/latest/userguide/server-migration.html</a> for the introductions to AWS SMS.</p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is&nbsp;CORRECT:</strong>&nbsp;Because the Server Migration Connector is a pre-configured FreeBSD virtual machine available for deployment in the VMware environment.</li>\r\n\t<li><strong>Option B is&nbsp;incorrect:&nbsp;</strong>Because during the migration, there is a step to convert the VMDK to an Amazon Elastic Block Store (Amazon EBS) snapshot, which generates cost.</li>\r\n\t<li><strong>Option C is incorrect:</strong>&nbsp;Because the S3 usage is charged when VMDK files are uploaded to Amazon S3.</li>\r\n\t<li><strong>Option D is&nbsp;CORRECT:</strong>&nbsp;Because the replication job or task itself is free to use.</li>\r\n\t<li><strong>Option E is incorrect</strong>:&nbsp;Because EC2 instances are charged at a standard rate.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35462,
            "question_id": 45455,
            "answers": [
              {
                "choice": "<p>The Server Migration Connector downloaded from AWS.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Amazon EBS snapshots generated during the migration.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Amazon S3 which is used to store the uploaded VMDK.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The replication job that is created in Server Migration Service.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The EC2 instances that run based on the new AMI.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
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
        "question_id": 45457,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You are an AWS administrator. Recently, you started to use various AWS services in AWS Systems Manager to maintain over 20 EC2 and on-premises instances. In the past month, the AWS bill has increased by about 10% than before. The company&rsquo;s accountant asked you the potential cause of this. For the AWS Systems Manager services, which ones may bring additional charges? (Select 3.)</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;A, D, and&nbsp;E</strong></p>\r\n\r\n<p>For the services provided by AWS Systems Manager, most of them are free without extra cost. However, there are still some priced features when used. For the details, please refer to <a href=\"https://aws.amazon.com/systems-manager/pricing/\" target=\"_blank\">https://aws.amazon.com/systems-manager/pricing/</a> on AWS Systems Manager Pricing.</p>\r\n\r\n<p><strong>Option&nbsp;A is&nbsp;CORRECT</strong>:&nbsp;Because for on-premises Instance Management, the advanced instances are priced on a pay-as-you-go basis:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/09/ckeditor_8.png\" style=\"height:419px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect</strong>:&nbsp;Because Run Command is free. Check the above link.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect</strong>:&nbsp;Because Patch Manager automates the process of patching managed instances, which is a free service.</li>\r\n\t<li>Option D is CORRECT: Parameter Store is a secure place to store parameters or secrets. When you create advanced parameters, you are charged based on the number of advanced parameters stored each month and per API interaction.</li>\r\n\t<li>Please refer the following link\r\n\t<ul>\r\n\t\t<li><a href=\"https://aws.amazon.com/systems-manager/pricing/\" target=\"_blank\">https://aws.amazon.com/systems-manager/pricing/</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;E is&nbsp;CORRECT</strong>:&nbsp;The Automation pricing is as below.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/09/ckeditor_8.1.png\" style=\"height:488px; width:800px\" /></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35464,
            "question_id": 45457,
            "answers": [
              {
                "choice": "<p>On-Premises Instance Management</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Run Command in Systems Manager</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Patch Manager</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Advanced Parameter Store</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Systems Manager Automation</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
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
        "question_id": 45459,
        "topic_id": 364,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You were just hired by an IT company as an AWS solutions architect. Your company has several Windows EC2 instances for multiple projects. You found that these EC2 instances did not have a plan to install system patches. You start using Patch Manager in AWS Systems Manager to configure when and how the patches should be installed. When patching activity is being configured, which method is NOT a valid one for instances to be selected?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct&nbsp;Answer&nbsp;&ndash;&nbsp;D</strong></p>\r\n\r\n<p>AWS Systems Manager Patch Manager is a native AWS solution to automate patching. The below diagram explains how it works.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/09/ckeditor_10.1.png\" style=\"height:384px; width:914px\" /></p>\r\n\r\n<p>Step 2 is optional, and there are several methods for the instances to be chosen as the target.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/04/09/ckeditor_10.2.png\" style=\"height:431px; width:1000px\" /></p>\r\n\r\n<ul>\r\n\t<li><strong>Option&nbsp;A is&nbsp;incorrect </strong>because one or several tag key/value pairs can be used to select instances.</li>\r\n\t<li><strong>Option&nbsp;B is&nbsp;incorrect </strong>because a patch group is a tag with the key as &ldquo;Patch Group&rdquo;, which is also a supported method to organize patching activities.</li>\r\n\t<li><strong>Option&nbsp;C is&nbsp;incorrect </strong>because selecting instances manually is supported.</li>\r\n\t<li><strong>Option&nbsp;D is&nbsp;CORRECT </strong>because security group identities/names are not used to choose instances for patching activities in Patch Manager.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35466,
            "question_id": 45459,
            "answers": [
              {
                "choice": "<p>Specify one or more instance tag key/value pairs to identify the instances you want to patch.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use one or more patch groups to identify the instances you want to patch. Patch groups require the use of the tag key &ldquo;Patch Group&rdquo;.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Manually select the required instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Select the required EC2 instances based on security group identities/names.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 44775,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Your team has owned a web application which is an online ticket booking system. You are trying to use another m4.xlarge EC2 instance as a backup. You want to stop the instance to save some cost unless it needs to bring up. However, it takes a long time for the bootstrap process to bring the system up, which is unacceptable. The company&rsquo;s cloud architect has suggested hibernating the instance so that it can start up very quickly. To hibernate the instance, which below prerequisites are needed?</p>\r\n\r\n<p>Select 3 options.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; B, C, E</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>Refer to the below for the hibernating process:</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq4-7.1.jpg\" style=\"height:211px; width:750px\" /></p>\r\n\r\n<p>It is a process of transferring data inside and outside RAM to Amazon EBS root volume. However, some prerequisites have to be met. Refer to <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html</a> for the details.</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect: Because only Windows and Linux are supported for EC2 hibernation. Please read the description given under &#39;Important&#39; in the page under the below link\r\n\t<ul>\r\n\t\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html</a></li>\r\n\t\t<li><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/Hibernate.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/Hibernate.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Option B is CORRECT: Because instance store volume will lose data when stopped and is not supported for EC2 hibernation.</li>\r\n\t<li>Option C is CORRECT: Because when the instance is in an Auto Scaling group, and you try to hibernate it, the Amazon EC2 Auto Scaling service marks the stopped instance as unhealthy and may terminate it and launch a replacement instance.</li>\r\n\t<li>Option D is incorrect: Because in order to use hibernation, the root volume must be encrypted to ensure the protection of sensitive content that is in memory at the time of hibernation.</li>\r\n\t<li>Option E is CORRECT: If the root volume is not enough to store the data from RAM, the following message may appear: <em>hibinit-agent: Insufficient disk space. Cannot create setup for hibernation. Please allocate a larger root device.</em></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34786,
            "question_id": 44775,
            "answers": [
              {
                "choice": "<p>The AMI of Mac OS EC2 instances must support hibernation.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The instance root volume must be an Amazon EBS volume, not an instance store volume.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The instance cannot be in an Auto Scaling group or used by Amazon ECS.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>The root volume must not be encrypted; otherwise, it will cause an issue&nbsp;to transfer data from RAM.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The root volume must be large enough so that the RAM contents can be stored.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 29019,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>What are some of the common types of content that are supported by a web distribution via CloudFront?</p>\r\n\r\n<p>Choose 3 options from the below.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A, B, and C</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>You can use web distributions to serve the following content over HTTP or HTTPS.</p>\r\n\r\n<ul>\r\n\t<li>Static and dynamic download content, for example, .html, .css, .php, and image files, using HTTP or HTTPS.</li>\r\n\t<li>Multimedia content on-demand using progressive download and Apple HTTP Live Streaming (HLS).&nbsp;</li>\r\n\t<li>A live event, such as a meeting, conference, or concert, in real-time. For live streaming, you create the distribution automatically by using an AWS CloudFormation Stack.</li>\r\n</ul>\r\n\r\n<p>Hence, options A, B, and C are CORRECT.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on CloudFront distribution, please refer to the below URL:</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19136,
            "question_id": 29019,
            "answers": [
              {
                "choice": "<p>Static content</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Live events</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Multimedia content</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Peer to peer networking</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 29020,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A client is using CloudFront with a source that normally serves dynamic content. There is a requirement that as soon the content is changed in the source, it is delivered to the client. Which of the following configuration can be made to fulfill this requirement?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer - C</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>In CloudFront, to enforce content delivery to the user as soon as it gets changed by the origin, the time to live (TTL) should be set to 0.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Option A is incorrect because invalidate is used to remove the content from CloudFront edge locations cache before it expires. The next time a viewer requests the object, CloudFront fetches the content from the origin; whereas, setting TTL to 0 enforces CloudFront to deliver the latest content as soon as the origin updates it.</p>\r\n\r\n<p>Option B is incorrect because setting TTL to 10 will keep the content in the cache for some time even though the origin updates it.</p>\r\n\r\n<p>Option C is CORRECT because setting TTL to 0 will enforce content delivery to the user as soon as it gets changed by the origin.</p>\r\n\r\n<p>Option D is incorrect as CloudFront surely serves dynamic content.</p>\r\n\r\n<p>Option E is incorrect as you do not have to contact the AWS support center for this scenario.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on TTL in CloudFront:</strong></p>\r\n\r\n<p>You can control how long your objects stay in a CloudFront cache before CloudFront forwards another request to your origin. Reducing the duration allows you to serve dynamic content. The low TTL is also given in the AWS documentation.</p>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_6bpwts.png\" style=\"height:299px; width:936px\" />For more information on CloudFront dynamic content, please refer to the below URL:</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19137,
            "question_id": 29020,
            "answers": [
              {
                "choice": "<p>Use the fast invalidate feature provided in CloudFront.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set TTL to 10 seconds.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set TTL to 0 seconds.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Dynamic content cannot be served from the CloudFront.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You have to contact the AWS support center to enable this feature.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
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
        "question_id": 44776,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Using an Amazon Linux AMI, you have created an m5.large EC2 instance for one of your research programs. Due to a limited budget, you prefer to put the instance into a stopped state when it is not used. Another requirement is that when you start the instance, the instance does not need to reboot, and you can continue from where it left off. You want to hibernate the EC2 instance to make this happen. Which description is correct to implement this hibernation option?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; C</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>For the hibernation feature, one limitation is that you cannot enable hibernation on an existing instance (running or stopped). For details, please refer to <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html</a>.</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect: Because instance store-backed instances cannot be hibernated.</li>\r\n\t<li>Option B is incorrect: Because a new instance has to be launched to enable hibernation function as below.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq4-8.jpg\" style=\"height:230px; width:750px\" /></p>\r\n\r\n<ul>\r\n\t<li>Option C is CORRECT: This is the suggested way in <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html</a>.</li>\r\n\t<li>Option D is incorrect: Same reason as Option B. One more thing is that the CLI command is something like &ldquo;aws ec2 stop-instances --instance-ids i-1234567890abcdef0 --hibernate&rdquo;. Also, AWS Console is supported for the hibernation option.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34787,
            "question_id": 44776,
            "answers": [
              {
                "choice": "<p>You cannot enable hibernation on an existing instance. You have to relaunch a new instance from an instance store volume to support the hibernation option.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You can use the AWS console to select the existing instance and choose Actions -&gt;&nbsp;Instance State -&gt;&nbsp;Stop - Hibernate.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>You cannot enable hibernation on an existing instance. You have to launch a new instance with an HVM AMI. Enable the hibernation feature on the Configure Instance Details page.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>You can only use AWS CLI to enable the hibernation option via &ldquo;aws ec2 hibernate-instances --instance-ids i-1234567890abcdef0&rdquo;. AWS Console is not supported for the hibernation option.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28979,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>An organization needs a plan to store a large number of files.</p>\r\n\r\n<p>Below are the key requirements of this plan.</p>\r\n\r\n<ul>\r\n\t<li>The files should be highly available. Once stored successfully, the files should not be lost.</li>\r\n\t<li>Recovery time can be long.</li>\r\n\t<li>Cost-effective.</li>\r\n</ul>\r\n\r\n<p>Which of the following options would be the best one for this organization, given the concerns that they have outlined to you above?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer - C</p>\r\n\r\n<p>Option A is incorrect because it can help maintain data, but is not low on cost and is a high-cost option since you need to maintain a Multi-AZ environment. Hence we need to count this option out.</p>\r\n\r\n<p>Option B is incorrect because it does not talk about data loss avoidance and is more of network avoidance.</p>\r\n\r\n<p>Option C is CORRECT because S3 provides a durable, highly available, low-cost, and more secure storage solution.</p>\r\n\r\n<p>Option D is incorrect because it talks about AMIs, but not about the underlying data on EBS storage which will need to be backed up.</p>\r\n\r\n<p><strong>More information about Amazon S3:</strong></p>\r\n\r\n<p>Amazon S3 is storage for the Internet. It&rsquo;s a simple storage service that offers software developers a highly scalable, reliable, and low-latency data storage infrastructure at very low costs.</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19096,
            "question_id": 28979,
            "answers": [
              {
                "choice": "<p>Ensure that you have RDS set up as an asynchronous Multi-AZ deployment, which automatically provisions and maintains an asynchronous &ldquo;standby&rdquo; replica in a different Availability Zone.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set up a number of smaller instances in a different region, which all have Auto Scaling and Elastic Load Balancing enabled. If there is a network outage, these instances will auto scale up. As long as spot instances are used and the instances are small, this should remain a cost-effective solution.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>S3 should be considered due to the low cost of S3 storage. Enable cross-region replication for the S3 buckets.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Set up pre-configured servers using Amazon Machine Images. Use an Elastic IP and Route 53 to quickly switch over to your new infrastructure if there are any problems when you run your health checks.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 45460,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>Your company has landed a contract to build a search engine of public legal documents. The dataset is around 150TB in size and is available at the customer&rsquo;s data center in various formats. Part of the dataset is stored in tapes, and the other is stored in disks. Some of the dataset is very old, dated to nearly 15 years back, and stored in the compressed format to save on the disk space. The management has assigned you the task to come up with a flexible and cost-efficient design to ingest the data and make it available for the front-end application to search through efficiently. Which two sequential steps should you choose to accomplish this final task?</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A and B</strong></p>\n\n<ul>\n\t<li><strong>Option A is CORRECT </strong>because Snowball Edge Storage Optimized devices can be used to transfer a large amount of data to AWS Data Centres for one-time transfer or periodic transfer.</li>\n\t<li><strong>Option B is CORRECT</strong> because AWS Batch will allow you to run custom code to decompress the data and finally save the output to OpenSearch via the Kinesis Firehose.</li>\n\t<li><strong>Option C is INCORRECT</strong> because it will use the standard internet line available to the company and take up a huge amount of time to migrate the data.</li>\n\t<li><strong>Option D is INCORRECT</strong> because RDS might not be the right database for this data size and the requirement to search through it.</li>\n\t<li><strong>Option E is INCORRECT</strong> because the Direct Connect setup will not be cost-effective for a one-time transfer.</li>\n</ul>\n\n<p><strong>Reference:&nbsp;</strong></p>\n\n<ul>\n\t<li><a href=\"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/integrations.html\">https://docs.aws.amazon.com/opensearch-service/latest/developerguide/integrations.html</a></li>\n\t<li><a href=\"https://aws.amazon.com/blogs/compute/orchestrating-an-application-process-with-aws-batch-using-aws-cloudformation/\">https://aws.amazon.com/blogs/compute/orchestrating-an-application-process-with-aws-batch-using-aws-cloudformation/</a></li>\n\t<li><a href=\"https://aws.amazon.com/blogs/developer/orchestrating-an-application-process-with-aws-batch-using-aws-cdk/\">https://aws.amazon.com/blogs/developer/orchestrating-an-application-process-with-aws-batch-using-aws-cdk/</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 67293,
            "question_id": 45460,
            "answers": [
              {
                "question_id": "45460",
                "choice": "<p>Set up the Snowball Edge Storage Optimized devices to migrate the data to S3.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "45460",
                "choice": "<p>Configure the AWS Batch to process the data from S3, send it to Kinesis Firehose, and save it to Amazon&nbsp;OpenSearch Service.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "45460",
                "choice": "<p>Set up a VPN connection and transfer the data to AWS S3 over the weekend.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "45460",
                "choice": "<p>Load the data to EFS and create Auto Scaling EC2 instances to read through the data and save it into the AWS RDS for querying.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "45460",
                "choice": "<p>Set up&nbsp;a Direct Connect connection to transfer the data from on-premise servers to the S3.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
      },
      {
        "question_id": 29025,
        "topic_id": 365,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A company has set up a Direct Connect connection between its on-premises location and its AWS VPC. It wants to set up redundancy in case the Direct Connect connection fails. What can the company do in this regard?</p>\r\n\r\n<p>Choose 2 options from the below.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; A and B</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Options A and B are CORRECT because with A&nbsp;you can have a redundant Direct Connect setup as a backup if the main Direct Connect connection fails (even though it is an expensive solution, it will work).&nbsp;With B, VPN is an alternate way for the connection between AWS and on-premises infrastructure (even though the connectivity is&nbsp;slow, it will work).</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on Direct Connect:</strong></p>\r\n\r\n<p>If you have established a second AWS Direct Connect connection, traffic will failover to the second link automatically. We recommend enabling Bidirectional Forwarding Detection (BFD) when configuring your connections to ensure fast detection and failover. If you have configured a backup IPsec VPN connection instead, all VPC traffic will failover to the VPN connection automatically. Traffic to/from public resources such as Amazon S3 will be routed over the Internet. If you do not have a backup AWS Direct Connect link or an IPSec VPN link, then Amazon VPC traffic will be dropped in the event of a failure. Traffic to/from public resources will be routed over the Internet.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on Direct Connect FAQ&rsquo;s, please visit the below URL</p>\r\n\r\n<p><a href=\"https://aws.amazon.com/directconnect/faqs/\" target=\"_blank\">https://aws.amazon.com/directconnect/faqs/</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19142,
            "question_id": 29025,
            "answers": [
              {
                "choice": "<p>Set up another Direct Connect connection.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Set up an IPSec VPN Connection.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Set up S3 connection.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set up a connection via EC2 instances.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 29026,
        "topic_id": 366,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your company stores millions of sensitive transactions across thousands of 100-GB files that must be encrypted in-transit and at-rest. Analysts concurrently depend on subsets of files, which can consume up to 35 TB of space, to generate simulations that can be used to steer business decisions. You are required to design an AWS solution that can cost-effectively accommodate the long-term storage and in-flight subsets of data. Which one would you choose?&nbsp;</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer - D</p>\r\n\r\n<p>The main considerations of this scenario are: (1) the solution must be cost-effective, (2) provide long-term storage, and (3) encrypt in-transit as well as at-rest data.</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because (a) server-side encryption does not apply to in-transit data, and (b) ephemeral volumes are not encrypted at rest.</li>\r\n\t<li>Option B is incorrect.&nbsp;Yes, Amazon S3 supports server-side encryption, but 35TB in memory not possible because the largest instances have only 25 TB of capacity.&nbsp;Due to this, we have to mark this option wrong.</li>\r\n\t<li>Option C is incorrect because the ephemeral drive is not long term storage.</li>\r\n\t<li>Option D is CORRECT because (a) EMR File system supports both in-transit and at-rest data encryption, and (b) S3&nbsp;provides the long term storage.</li>\r\n\t<li>Option E is incorrect because this is not a cost-effective solution.</li>\r\n</ul>\r\n\r\n<p>For more information on EMR, please visit the link below:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/blogs/aws/new-at-rest-and-in-transit-encryption-for-amazon-emr/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/new-at-rest-and-in-transit-encryption-for-amazon-emr/</a></li>\r\n\t<li><a href=\"https://d0.awsstatic.com/whitepapers/aws-amazon-emr-best-practices.pdf\" target=\"_blank\">https://d0.awsstatic.com/whitepapers/aws-amazon-emr-best-practices.pdf</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-data-encryption-options.html\">https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-data-encryption-options.html</a>&nbsp;( refer section &quot;Encryption at Rest for EMRFS Data in Amazon S3&quot; )</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19143,
            "question_id": 29026,
            "answers": [
              {
                "choice": "<p>Use Amazon Simple Storage Service (S3) with server-side encryption, and run simulations on subsets in ephemeral drives on Amazon EC2.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Amazon S3 with server-side encryption, and run simulations on subsets in-memory on Amazon EC2.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use HDFS on Amazon EMR, and run simulations on subsets in ephemeral drives on Amazon EC2.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use HDFS on Amazon Elastic MapReduce File System (EMRFS) in conjunction with AWS S3.&nbsp;</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Store the full data set in encrypted Amazon Elastic Block Store (EBS) volumes and regularly capture snapshots that can be cloned to EC2 workstations.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Cost Control"
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
        "question_id": 29028,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>As an IT administrator, you have been requested to manage the CloudFormation stacks for a set of developers in your company. A set of web and database developers will be working on the application. How would you design the CloudFormation stacks in the best way possible?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Answer &ndash; C</p>\r\n\r\n<p>Option A is incorrect because CloudFormation is best for creating and maintaining all the infrastructure resources in the cloud environment.</p>\r\n\r\n<p>Option B is incorrect because when your stack grows in scale and broadens in scope, managing a single stack can be cumbersome and time-consuming. Also, coordinating and communicating updates can become difficult.</p>\r\n\r\n<p>Option C is CORRECT because (a) having multiple (or sub) stacks is easier to maintain, (b) there is a clear separation of ownership and concerns, (c) better chances of you staying within the limit for &#39;Template body size&#39; which happens to be 460,800 bytes, and (d) you can reuse common template patterns. See the &quot;More information...&quot; section for more details.</p>\r\n\r\n<p>Option D is incorrect because you can provision and maintain the infrastructure if the CloudFormation templates are created correctly.</p>\r\n\r\n<p><strong>More information on CloudFormation Best Practices:</strong></p>\r\n\r\n<p>The following use case scenario is given in the AWS documentation to support the answer:</p>\r\n\r\n<p>For example, imagine a team of developers and engineers who own a website that is hosted on autoscaling instances behind a load balancer. Because the website has its own lifecycle and is maintained by the website team, you can create a stack for the website and its resources. Now imagine that the website also uses back-end databases, where the databases are in a separate stack that is owned and maintained by database administrators. Whenever the website team or database team needs to update their resources, they can do so without affecting each other&#39;s stack. If all resources were in a single stack, coordinating and communicating updates can be difficult.</p>\r\n\r\n<p>For more information on Cloudformation best practices, please visit the below URL</p>\r\n\r\n<p><a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html</a></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19145,
            "question_id": 29028,
            "answers": [
              {
                "choice": "<p>CloudFormation is not the right fit. Use OpsWork instead.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create one stack for the web and database developers.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create separate CloudFormation stacks for the web and database developers.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Define separate EC2 instances since defining CloudFormation can get cumbersome.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
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
        "question_id": 29030,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A customer is hosting the company website on a cluster of web servers behind a public-facing Elastic Load Balancer. The customer also uses Amazon Route 53 to manage their public DNS. How should the customer configure the DNS zone apex record to point to the ELB?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; D</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because it suggests creating a&nbsp;record pointing to the IP address of the ELB; but, ELBs don&#39;t have predefined IP addresses.</li>\r\n\t<li>Options B and C are incorrect because you should preferably create an ALIAS record rather than a CNAME record. See the &quot;More information...&quot; section for more details.</li>\r\n\t<li>Option D is CORRECT - To route domain traffic to an Elastic&nbsp;Load Balancer, use Amazon Route 53 to create an alias record that points to your load balancer. An alias record is a Route 53 extension to DNS. It&#39;s similar to a CNAME record, but you can create an alias record for the root domain and subdomains.</li>\r\n</ul>\r\n\r\n<p>Please refer to page 386 in the below link:</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route53-dg.pdf\" target=\"_blank\">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route53-dg.pdf</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>More information on ALIAS Record:</strong></p>\r\n\r\n<p>Alias resource record sets are virtual records that work like CNAME records. But they differ from CNAME records in that they are not visible to resolvers. Resolvers only see the A record and the resulting IP address of the target record. Unlike CNAME records, alias resource record sets are available to configure a zone apex (also known as a root domain or naked domain) in a dynamic environment.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on the zone apex, please refer to the link below.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/setting-up-route53-zoneapex-elb.html\">http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/setting-up-route53-zoneapex-elb.html</a></li>\r\n</ul>\r\n\r\n<p>For more information on choosing between ALIAS and Non-ALIAS records, please refer to the link below.</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html?console_help=true\" target=\"_blank\">https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html?console_help=true</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19147,
            "question_id": 29030,
            "answers": [
              {
                "choice": "<p>Create an A record pointing to the IP address of the Load Balancer.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a CNAME record pointing to the Load Balancer DNS name.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create a CNAME record aliased to the Load Balancer DNS name.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an alias record that points to your Load Balancer.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 29031,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>By default, when an EBS volume is attached to a Windows instance, it may show up as any drive letter on the instance. Which of the following services can be used to change the settings of the drive letters of the EBS volumes as per your specifications?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; C</strong></p>\r\n\r\n<ul>\r\n\t<li>Option C is correct because the EC2Config service (EC2Config.exe) is an application that enables users to make changes to windows VMs, such as changing the drive letters for any attached Amazon EBS volumes. EC2Config starts when the instance boots and performs tasks during startup and each time you stop or start the instance.</li>\r\n</ul>\r\n\r\n<p>Please refer to the below link.<br />\r\n<a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html\" target=\"_blank\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html</a></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because there is no such service as EBSConfig service.</li>\r\n\t<li>Option B is incorrect because there is no such service as AMIConfig service.</li>\r\n\t<li>Option D is incorrect because there is no such service as EC2-AMIConfig service.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 63399,
            "question_id": 29031,
            "answers": [
              {
                "question_id": "29031",
                "choice": "<p>EBSConfig Service</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "29031",
                "choice": "<p>AMIConfig Service</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "29031",
                "choice": "<p>EC2Config</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "29031",
                "choice": "<p>EC2-AMIConfig Service</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
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
        "question_id": 29033,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Which of the following can be done by Auto Scaling?</p>\r\n\r\n<p>Choose 2 answers from the options given below.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer - A and B</strong></p>\r\n\r\n<ul>\r\n\t<li>Options A and B are CORRECT because Auto Scaling can launch or terminate instances based on CPU utilization.</li>\r\n\t<li>Options C and D are incorrect because Auto Scaling cannot increase or decrease the instance size based on CPU utilization. It will launch the instances based on the launch configuration.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>As per the AWS documentation, below is what can be done with Auto Scaling. You can only scale horizontally and not vertically.</p>\r\n\r\n<ul>\r\n\t<li>Scale-out Amazon EC2 instances seamlessly and automatically when demand increases.</li>\r\n\t<li>Shed unneeded Amazon EC2 instances automatically and save money when demand subsides.</li>\r\n\t<li>Scale dynamically based on your&nbsp;Amazon CloudWatch&nbsp;metrics or predictably according to a schedule that you define.</li>\r\n\t<li>Replace unhealthy or unreachable instances to maintain the higher availability of your applications.</li>\r\n\t<li>Receive notifications via&nbsp;Amazon Simple Notification Service&nbsp;(Amazon SNS) to be alerted when you use Amazon CloudWatch alarms to initiate Auto Scaling actions or when Auto Scaling completes an action.</li>\r\n\t<li>Run On-Demand or Spot Instances, including those inside your&nbsp;virtual private cloud (VPC) or&nbsp;high-performance computing&nbsp;(HPC) clusters.</li>\r\n\t<li>If you&rsquo;re signed up for the Amazon EC2 service, you&rsquo;re already registered to use Auto Scaling and can begin using the feature via the API or command-line interface.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>For more information on Auto Scaling, please visit the link\r\n\t<ul>\r\n\t\t<li><a href=\"https://aws.amazon.com/autoscaling/\" target=\"_blank\">https://aws.amazon.com/autoscaling/</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19150,
            "question_id": 29033,
            "answers": [
              {
                "choice": "<p>Launch EC2 instances when CPU utilization is above the threshold.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Terminate EC2 instances when CPU utilization is below the threshold.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Increase the instance size when utilization is above the&nbsp;threshold.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Decrease the instance size when utilization is below the&nbsp;threshold.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
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
        "question_id": 29034,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Which of the following benefits does adding Multi-AZ deployment in RDS provide?</p>\r\n\r\n<p>Choose 2 answers from the options given below.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer - A and D</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because in Multi-AZ deployment, if an availability zone (AZ) goes down, the automatic failover occurs. The DB instance CNAME gets pointed to the synchronously updated secondary instance in another AZ.</li>\r\n\t<li>Option B is incorrect because Multi-AZ deployment does not affect the latency of the application&#39;s DB access.</li>\r\n\t<li>Option C is incorrect because DB access time does not get affected by Multi-AZ deployment.</li>\r\n\t<li>Option D is CORRECT because, during the maintenance tasks, the DB instance CNAME can point to the second instance in another AZ to carry out the DB tasks.&nbsp;</li>\r\n</ul>\r\n\r\n<p>Some of the advantages of Multi-AZ rds deployments are given below.</p>\r\n\r\n<ul>\r\n\t<li>If an Availability Zone failure or DB Instance failure occurs, your availability impact is limited to the time automatic failover takes to complete.</li>\r\n\t<li>The availability benefits of Multi-AZ deployments also extend to planned maintenance and backups. In the case of system upgrades like OS patching or DB Instance scaling, these operations are applied first on the standby, before the automatic failover. As a result, your availability impact is, again, only the time required for automatic failover to complete.</li>\r\n\t<li>If a storage volume on your primary fails in a Multi-AZ deployment, Amazon RDS automatically initiates a failover to the up-to-date standby.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on Multi-AZ rds deployments, please visit the link</p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://aws.amazon.com/rds/details/multi-az/\" target=\"_blank\">https://aws.amazon.com/rds/details/multi-az/</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19151,
            "question_id": 29034,
            "answers": [
              {
                "choice": "<p>Multi-AZ deployed database can tolerate an Availability Zone failure.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Decrease latencies if app servers accessing the database are in multiple Availability zones.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Make database access times faster for all app servers.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Make database more available during maintenance tasks.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 29035,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>What of the following is true about the features Lambda@Edge in AWS?<br />\r\nChoose an answer from the options given below:</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is incorrect</strong> as it is not used for Edge-based programming.</li>\r\n\t<li><strong>Option B is incorrect </strong>because edge locations are part of the CloudFront setup, not S3.</li>\r\n\t<li><strong>Option C is CORRECT </strong>because Lambda@Edge allows you to run Lambda functions at the AWS edge locations in response to CloudFront events. Without Lambda@Edge, customized processing requires requests to be forwarded back to compute resources at the centralized servers. This slows down the user experience.</li>\r\n\t<li><strong>Option D is incorrect</strong> because Lambda@Edge supports Node.js and Python, which is a server-side JavaScript framework.</li>\r\n</ul>\r\n\r\n<p>For more information on Lambda@Edge, please visit the link:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/what-is-lambda-at-edge.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/what-is-lambda-at-edge.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 84551,
            "question_id": 29035,
            "answers": [
              {
                "question_id": "29035",
                "choice": "<p>It is used specifically for the Edge-based programing language.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "29035",
                "choice": "<p>It is used for running Lambda functions at edge locations defined by S3.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "29035",
                "choice": "<p>It is used for running Lambda functions at edge locations used by CloudFront.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "29035",
                "choice": "<p>It can support any type of programming language.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 44778,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A SAAS provider has an online training service that is deployed in AWS. For each subscriber, there is a new DynamoDB table created for it. The company needs the deployment in AWS to be simple. It is known that the read throughput is much more than the write throughput. During the day, the read traffic is very unbalanced and spiky among various DynamoDB tables. What kind of capacity should the DynamoDB tables be configured?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer &ndash; C</strong></p>\r\n\r\n<p><strong>Explanation:</strong></p>\r\n\r\n<p>DynamoDB on-demand is normally used if the application traffic is difficult to predict and control, the workload has large spikes of short duration, or if the average table utilization is well below the peak. Refer to <a href=\"https://aws.amazon.com/blogs/aws/amazon-dynamodb-on-demand-no-capacity-planning-and-pay-per-request-pricing/\" target=\"_blank\">https://aws.amazon.com/blogs/aws/amazon-dynamodb-on-demand-no-capacity-planning-and-pay-per-request-pricing/</a> for its use cases.</p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect: Because as the traffic is very different from each other, it is improper to use a provisioned capacity.</li>\r\n\t<li>Option B is incorrect: Although this may work, it is not as simple as On-Demand capacity. This SAAS provider needs the deployment to be simple.</li>\r\n\t<li>Option C is CORRECT: Because by setting up On-Demand capacity, the service provider does not need to be worried about the traffic fluctuation.</li>\r\n\t<li>Option D is incorrect: Because you cannot configure On-Demand for read and Provisioned for write. You have to use one for both read and write. Refer to below:</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/02/22/ckeditor_awsq4-10.jpg\" style=\"height:267px; width:750px\" /></p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 34789,
            "question_id": 44778,
            "answers": [
              {
                "choice": "<p>Depending on which type of subscriber it has, configure a provisioned capacity accordingly.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Configure a median provisioned capacity for all tables. Enable Auto Scaling when target utilization is over 80%.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Set up On-Demand capacity for individual DynamoDB tables.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure an On-Demand capacity for read, and configure a provisioned capacity for write using a reasonable value.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 44779,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": 0,
        "lab_id": null,
        "question_text": "<p>Your company recently launched a mobile application that allows users to take pictures of what they are eating daily, share with others, and get feedback to maintain a healthy diet routine. These pictures are stored in S3 and served via the CloudFront. The CEO of the company thinks the storage is not well optimized by looking at the bill. He has asked to generate the access log reports and shift the images to different storage if they are not frequently used. It is not very clear which images will be accessed frequently, but as per the past data analysis, the usage becomes low after the initial 3-4 weeks. Please select the best option to optimize the cost and also maintain accessibility.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: D</strong></p>\n\n<ul>\n\t<li><strong>Option A is INCORRECT</strong> because CloudFront is used to deliver the images to end-users to reduce the latency lag. Edge Locations work as caching servers, and it saves the images based on the frequency of use. However, CloudFront still loads the content from the origin S3 Bucket.</li>\n\t<li><strong>Option B is INCORRECT </strong>because migrating the images to Glacier will make it almost inaccessible after 3 weeks. Glacier retrieval time is between 3-5 hours, and per the requirement, the application still needs to maintain accessibility.</li>\n\t<li><strong>Option C is INCORRECT</strong> because the CloudFront already geo-distributes the load and putting an elastic load balancer in front of it is not viable.</li>\n\t<li><strong>Option D is CORRECT</strong> because S3 Intelligent Tier automatically shifts content between the Standard and Infrequent Access tier based on the usage pattern. If the content is not used for 30 consecutive days, it will automatically be moved to the Infrequent Access tier. Upon use, it will be transferred back to the Standard tier without any additional cost.</li>\n\t<li><strong>Option E is INCORRECT</strong> because serving images from EBS is not very scalable as compared to S3 storage. There is no lifecycle event for EBS volumes.</li>\n</ul>\n\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/csa-pro-4-60.PNG\" style=\"height:590px; width:760px\" /></p>\n\n<p><strong>References:</strong></p>\n\n<ul>\n\t<li><a href=\"https://aws.amazon.com/s3/storage-classes/\" target=\"_blank\">https://aws.amazon.com/s3/storage-classes/</a></li>\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 86763,
            "question_id": 44779,
            "answers": [
              {
                "question_id": "44779",
                "choice": "<p>Use CloudFront Edge Locations and enable access logs.&nbsp;It will automatically optimize the storage cache based on the access pattern.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "44779",
                "choice": "<p>Apply Lifecycle event to migrate from S3 Standard to Glacier after 3 weeks.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "44779",
                "choice": "<p>Create an elastic load balancer, point to the CloudFront distribution, and enable the Access Logs. Use Kinesis to process the logs and shift the images to S3 Infrequent Access based on low usage.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "44779",
                "choice": "<p>Store the images with S3 Intelligent Tier. It will automatically select the best storage class depending on the access pattern.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "44779",
                "choice": "<p>Store the images on EC2 EBS and serve it from there. EBS is highly optimized and cheap compared to S3. Put a lifecycle event to shift the unused images to S3 after 30 days.</p>\n\n<p>&nbsp;</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
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
        "question_id": 44780,
        "topic_id": 367,
        "course_id": 0,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>Your company recently got a contract to help optimize an IoT based application. The application consists of thousands of on-field monitoring devices that send the bulk of data daily via Kinesis. Once the data is processed, the snapshot is saved into S3 for later processing. There is a deep learning application that runs once a day and consumes these snapshots of data from S3 and generates the forecast reports for the management. The snapshots of data in S3 are&nbsp;only used once a month. The original team optimizes the overall process well and has selected different storage options for different kinds of data. An expansion plan put forward by the management will increase the devices by 100 folds and thus has suggested pinpointing the areas which can be optimized for such heavy load.<br />\r\nPlease select the cost-effective option to support the scalability and maintain the durability of the data.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: C</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is INCORRECT</strong> because the Redshift is used for data warehousing. Maintaining a cluster for such a large load will be way more costly compared to managing the snapshots to S3.</li>\r\n\t<li><strong>Option B is INCORRECT </strong>because&nbsp;the standard object storage is comparatively costly (when compared to S3-IA once in a month) to store the snapshots.&nbsp;</li>\r\n\t<li><strong>Option C is CORRECT </strong>because the infrequent storage would be comparatively cheaper (when compared to the S3-Standard) to store the snapshots, and it will be billed for a minimum of 30 days. Then, we can move the snapshots to the Glacier immediately after the processing to save the unnecessary billing days.</li>\r\n\t<li><strong>Option D is INCORRECT</strong> because while saving directly to the Glacier is highly cost-effective, it is mostly used for long-term archival. Even with Bulk Retrieval, it would take a few hours to retrieve those snapshots and not effectively use the resources.</li>\r\n\t<li><strong>Option E is INCORRECT</strong> because maintaining such a large amount of data on EFS will be an additional overhead in itself. Simultaneously, EFS is scalable and durable, but not cost-effective compared to the S3 Standard storage class. Plus, the migration has to be done to move the snapshots from the S3 to the EFS to the Glacier after the processing.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 84455,
            "question_id": 44780,
            "answers": [
              {
                "question_id": "44780",
                "choice": "<p>Shift the snapshots from S3 to the Redshift cluster. This will help to scale based on the additional load and take periodic backups of Redshift to Glacier.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "44780",
                "choice": "<p>Use the S3 standard option to store snapshots. After the processing is complete, change the storage class to Glacier after a month.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "44780",
                "choice": "<p>Use the S3 Infrequent Access storage class to save the snapshots. Use a lifecycle rule to migrate the snapshots to Glacier</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "44780",
                "choice": "<p>Save the snapshots with the Glacier class and use the low-cost bulk retrieval option to fetch required snapshots for the deep learning program.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "44780",
                "choice": "<p>Migrate the snapshots to EFS attached to the machine where the deep learning program is running. Once the program completes the processing, migrate the snapshots to the Glacier.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 29040,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>What are the steps that get carried out by OpsWork when you attach a load balancer to a layer in OpsWork?</p>\r\n\r\n<p>Choose 3 options from the below.</p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "2",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer&ndash; B, C, and D</strong></p>\r\n\r\n<p>For the exam, remember that, after you attach a load balancer to a layer, AWS OpsWorks Stacks does the following.</p>\r\n\r\n<ul>\r\n\t<li>Deregisters any currently registered instances.&nbsp;</li>\r\n\t<li>Automatically registers the layer&#39;s instances when they come online and deregisters instances when they leave the online state, including load-based and time-based instances.</li>\r\n\t<li>Automatically activates and deactivates the instances&#39; Availability Zones.</li>\r\n\t<li>Hence, options B, C, and D are CORRECT.</li>\r\n\t<li>For more information on working with Opswork layer ELB&rsquo;s, please refer to the below link\r\n\t<ul>\r\n\t\t<li><a href=\"http://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html\" target=\"_blank\">http://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n\t<li>Please refer to page 218 on the below link<br />\r\n\t<a href=\"https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-ug.pdf\" target=\"_blank\">https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-ug.pdf</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19157,
            "question_id": 29040,
            "answers": [
              {
                "choice": "<p>Terminates the EC2 Instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>De-registers any currently registered instances.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Automatically registers the layer&#39;s instances when they come online and de-registers instances when they go offline, including load-based and time-based instances.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Automatically starts routing requests to registered instances in their Availability Zones.</p>",
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
        "question_id": 45464,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An IT company is managing a list of its customers&#39; domain names. The company wants to optimize its processes so that the domain names and their DNS records can be managed somewhere centralized in AWS. Which option do you recommend?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>\r\n\r\n<ul>\r\n\t<li>Option B is CORRECT because the Route53 is a scalable and highly available Domain Name System service within AWS. Existing domain names can be transferred to Route53.</li>\r\n\t<li>Options A, C, D, E are incorrect because they cannot be used to manage domain names in AWS.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35471,
            "question_id": 45464,
            "answers": [
              {
                "choice": "<p>Use S3 Bucket folders.</p>",
                "correct": false,
                "feedback": "<p>Transfer existing domains to AWS route53.</p>"
              },
              {
                "choice": "<p>Transfer existing domains to AWS route53.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Configure an SQS queue.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use&nbsp;VPC Peering.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use the ALB.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
      },
      {
        "question_id": 29043,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A user has created a VPC with CIDR 20.0.0.0/24. The user has created a public subnet with CIDR 20.0.0.0/25 and a private subnet with CIDR 20.0.0.128/25. The user has launched one instance each in the private and public subnet. Which of the below mentioned options cannot be the correct IP address (private IP) assigned to an instance in the public or private subnet?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; A</strong></p>\r\n\r\n<p>In Amazon VPC, the first four IP addresses and the last IP address in each subnet CIDR block are not available for the user to assign to an instance. <em>For example:</em>&nbsp;In this VPC, the following five IP addresses are reserved for a subnet with CIDR block 20.0.0.0/25:</p>\r\n\r\n<ul>\r\n\t<li>20.0.0.0: Network address.</li>\r\n\t<li>20.0.0.1: Reserved by AWS for the VPC router.</li>\r\n\t<li>20.0.0.2: Reserved by AWS. The IP address of the DNS server is always the base of the VPC network range plus two; however, we also reserve the base of each subnet range plus two. 20.0.0.3: Reserved by AWS for future use.</li>\r\n\t<li>20.0.0.3:&nbsp;&nbsp;Reserved by AWS for future use.</li>\r\n\t<li>20.0.0.255: Network broadcast address. We do not support broadcast in a VPC. Therefore we reserve this address.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on IP Reservation, please visit the link</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19160,
            "question_id": 29043,
            "answers": [
              {
                "choice": "<p>20.0.0.255</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>20.0.0.132</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>20.0.0.122</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>20.0.0.55</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 28981,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>You&#39;ve been working on a CloudFront whole site CDN. After configuring the whole site CDN with a custom CNAME and supported HTTPS custom domain (i.e., https://domain.com), you open domain.com and receive&nbsp;the HTTP 502 status code&nbsp;(Bad Gateway).&nbsp;</p>\r\n\r\n<p>What might be the most likely cause of this error and how would you fix it?</p>\r\n\r\n<p>Choose the correct answer from the below options.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; A</strong></p>\r\n\r\n<ul>\r\n\t<li>Options B, C, and D are INCORRECT because these options do not result in the 502 status code (Bad Gateway).</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2021/03/09/ckeditor_50162.png\" style=\"height:562px; width:871px\" /></p>\r\n\r\n<p>For more information on CloudFront CDN, please see the below links</p>\r\n\r\n<p><a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/http-502-bad-gateway.html\">https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/http-502-bad-gateway.html</a></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AmazonCloudFront_DevGuide.pdf\" target=\"_blank\">https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AmazonCloudFront_DevGuide.pdf</a></li>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/http-502-bad-gateway.html#ssl-certificate-expired\" target=\"_blank\">https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/http-502-bad-gateway.html#ssl-certificate-expired</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19098,
            "question_id": 28981,
            "answers": [
              {
                "choice": "<p>The SSL/TLS certificate on the Origin has&nbsp;expired or missing a third-party signer. To resolve this purchase, add a new SSL certificate.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>HTTPS isn&#39;t configured on the CloudFront distribution, but it&nbsp;is configured on the CloudFront origin.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The user does not have enough permissions to login to the website.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The validation Lambda has failed to validate the request.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 29044,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A user is using a small MySQL RDS DB. The user is experiencing high latency due to the Multi-AZ feature. Which of the below mentioned options may NOT help the user in this situation?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; D</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is INCORRECT since scheduling automatic back-ups in non-working hours will&nbsp;help reduce the high latency that the user is experiencing. The question is asking for a NOT option. Therefore this option is incorrect.</li>\r\n\t<li>Option B is INCORRECT because using a larger or a higher instance size will reduce the latency due to the multi-AZ feature.</li>\r\n\t<li>Option C is INCORRECT&nbsp;because using the provisioned IOPS, the users would get high throughput from the DB instance. The question is asking for a NOT option. Therefore this option is incorrect.</li>\r\n\t<li>Option D is CORRECT because taking a snapshot from a standby replica would not help to reduce the latency.</li>\r\n</ul>\r\n\r\n<p>###########################</p>\r\n\r\n<h2>Amazon RDS Basic Operational Guidelines</h2>\r\n\r\n<p>The following are basic operational guidelines that everyone should follow when working with Amazon RDS. Note that the Amazon RDS Service Level Agreement requires that you follow these guidelines.</p>\r\n\r\n<ul>\r\n\t<li>\r\n\t<p>Monitor your memory, CPU, and storage usage. Amazon CloudWatch can be set up to notify you when usage patterns change or when you approach your deployment capacity so that you can maintain system performance and availability.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Scale up your DB instance when you are approaching storage capacity limits. You should have some buffer in storage and memory to accommodate unforeseen increases in demand from your applications.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>Enable automatic backups and set the backup window to occur during the daily low in write IOPS.</p>\r\n\t</li>\r\n\t<li>\r\n\t<p>If your database workload requires more I/O than you have provisioned, recovery after a failover or database failure will be slow. To increase the I/O capacity of a DB instance, do any or all of the following:</p>\r\n\r\n\t<ul>\r\n\t\t<li>\r\n\t\t<p>Migrate to a DB instance class with High I/O capacity.</p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p>Convert from standard storage to either General Purpose or Provisioned IOPS storage, depending on how much of an increase you need. For information on available storage types, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#Concepts.Storage\" target=\"_blank\">Amazon RDS Storage Types</a>.</p>\r\n\r\n\t\t<p>If you convert to Provisioned IOPS storage, make sure you also use a DB instance class that is optimized for Provisioned IOPS. For information on Provisioned IOPS, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS\" target=\"_blank\">Provisioned IOPS SSD Storage</a>.</p>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t<p>If you are already using Provisioned IOPS storage, provision additional throughput capacity.</p>\r\n\t\t</li>\r\n\t</ul>\r\n\t</li>\r\n</ul>\r\n\r\n<p>###########################</p>\r\n\r\n<ul>\r\n\t<li>For more information on Multi-AZ RDS, please visit the link:\r\n\t<ul>\r\n\t\t<li><a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_BestPractices.html\" target=\"_blank\">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_BestPractices.html</a></li>\r\n\t</ul>\r\n\t</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19161,
            "question_id": 29044,
            "answers": [
              {
                "choice": "<p>Schedule the automated backup in non-working hours.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use a large or higher size instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Provisioned IOPS storage.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Take a snapshot from standby Replica.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 29045,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A user has created a public subnet with VPC and launched an EC2 instance within it. The user is trying to delete the subnet. What will happen in this scenario?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; B</strong></p>\r\n\r\n<ul>\r\n\t<li>In AWS, when you try to delete a subnet with instances, it will not be allowed. The below error message will be shown when u try to delete a subnet with instances. Hence, option B is the CORRECT answer.</li>\r\n</ul>\r\n\r\n<p><img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2020/01/31/ckeditor_delete_subnet1.png\" style=\"height:493px; width:700px\" /></p>\r\n\r\n<p>&nbsp;For more information on VPC and subnets, please visit the link</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19162,
            "question_id": 29045,
            "answers": [
              {
                "choice": "<p>It will delete the subnet and make the EC2 instance as a part of the default subnet.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>It will not allow the user to delete the subnet until the instances are terminated.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>It will delete the subnet as well as terminate the instances.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>The subnet can never be deleted independently, but the user has to delete the VPC first.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 29046,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A user has created a VPC with a private and a public subnet using the VPC wizard and has also launched a NAT instance. The user is trying to delete the VPC. What will happen in this scenario?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; D</strong></p>\r\n\r\n<ul>\r\n\t<li>Since the user has launched a NAT instance, you will get the below error message when you try to delete the VPC. Hence Option D is correct.</li>\r\n</ul>\r\n\r\n<p>&nbsp;<img alt=\"\" src=\"https://s3.amazonaws.com/media.whizlabs.com/learn/2019/01/22/questions_hyccua.png\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on VPC and subnets, please visit the link</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html\" target=\"_blank\">http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19163,
            "question_id": 29046,
            "answers": [
              {
                "choice": "<p>It will not allow to delete the VPC as it has subnets with route tables.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>It will not allow to delete the VPC since it has a running route instance.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>It will terminate the VPC along with all the instances launched by the wizard.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>It will not allow to delete the VPC since it has a running NAT instance.</p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
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
        "question_id": 58126,
        "topic_id": 367,
        "course_id": null,
        "case_study_id": 0,
        "lab_id": 0,
        "question_text": "<p>You are developing a Lambda function by packaging the Python code and dependencies in a container image which is stored in an AWS ECR repository. There is a requirement to add extensions to the Lambda function for the integration with governance tools. You have already prepared the extension code as my-extension.zip. What is the correct way to add the extensions to the Lambda function?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct​ ​Answer​:​ B</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option​ ​A is ​incorrect </strong>because the Lambda function is managed with a Docker container image. Users should not directly edit the Lambda function code through the Lambda console.</li>\r\n\t<li><strong>Option​ B is​ CORRECT</strong> because the extensions files should be packaged into the /opt directory in the container image to use extensions in container images of Lambda functions. After the my-extension.zip file is put in the /opt folder, Lambda functions will use the Extensions API to manage the extension lifecycle.</li>\r\n\t<li><strong>Option​ ​C ​is​ ​incorrect</strong> because update-function-code updates a Lambda function&rsquo;s code, and update-function-configuration modifies Lambda settings. Either of them cannot add extensions to Docker images.</li>\r\n\t<li><strong>Option​ ​D ​is​ ​incorrect</strong> because extensions can be added to the container image of the Lambda function.</li>\r\n</ul>\r\n\r\n<p><strong>References:</strong></p>\r\n\r\n<ul>\r\n\t<li><a href=\"https://docs.aws.amazon.com/lambda/latest/dg/images-create.html\">https://docs.aws.amazon.com/lambda/latest/dg/images-create.html</a>&nbsp;</li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/lambda/latest/dg/using-extensions.html\">https://docs.aws.amazon.com/lambda/latest/dg/using-extensions.html</a></li>\r\n\t<li><a href=\"https://docs.aws.amazon.com/cli/latest/reference/lambda/update-function-configuration.html\">https://docs.aws.amazon.com/cli/latest/reference/lambda/update-function-configuration.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 59185,
            "question_id": 58126,
            "answers": [
              {
                "question_id": "58126",
                "choice": "<p>In the Lambda console, edit the Lambda function code and add the my-extension.zip file to the /opt/extensions/ folder to install the governance tools.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "58126",
                "choice": "<p>In the Dockerfile, add the my-extension.zip file to the /opt folder. Rebuild the Docker image and deploy the Docker container image to the Lambda function.</p>",
                "feedback": "",
                "correct": true
              },
              {
                "question_id": "58126",
                "choice": "<p>Use AWS Lambda CLI update-function-code or update-function-configuration command to upload the my-extension.zip file, unzip it and install the extensions.</p>",
                "feedback": "",
                "correct": false
              },
              {
                "question_id": "58126",
                "choice": "<p>Lambda extensions cannot be added to a container image. Instead, the Lambda function should use Lambda layers and the extension zip file should be added as a layer.</p>",
                "feedback": "",
                "correct": false
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
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
        "question_id": 29050,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>A recent increase of&nbsp;users of an application hosted on an EC2 instance has caused the instance&rsquo;s OS to run out of CPU resources and crash. The crash caused several users&rsquo; unsaved data to be lost, and your supervisor wants to know how this problem can be avoided in the future. Which of the following would you NOT recommend?</p>\r\n\r\n<p>Choose the correct answer from the below options.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; B</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is incorrect because this option would ensure that the user&#39;s unsaved data gets preserved just in case the instance crashes.</li>\r\n\t<li>Option B is CORRECT because taking frequent snapshots of the EBS volume during business hours may cause data loss (losing the data that is not yet written to the volume backed up via snapshot). AWS is strongly recommended to either detach the volume or freeze all writes before taking the snapshot to prevent data loss. Hence, this option&nbsp;is certainly not recommended.</li>\r\n\t<li>Option C is incorrect because using a larger instance type can mitigate the problem of the instance running out of CPU.</li>\r\n\t<li>Option D is incorrect because Auto Scaling will ensure that that at least one (or minimum number of) instance(s) would be running to ensure that the application is always up and running.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on EBS snapshots, please refer to the below URLs-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html</a></li>\r\n\t<li><a href=\"https://forums.aws.amazon.com/thread.jspa?threadID=92160\" target=\"_blank\">https://forums.aws.amazon.com/thread.jspa?threadID=92160</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19167,
            "question_id": 29050,
            "answers": [
              {
                "choice": "<p>Redesign the application so that users&rsquo; unsaved data is periodically written to disk.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Take frequent snapshots of the EBS volume during business hours to ensure users&rsquo; data is backed up.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Snapshot the EBS volume and re-deploy the application server as a larger instance type.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Use Auto Scaling to deploy additional application server instances when the load is high.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 29051,
        "topic_id": 367,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Why will the following CloudFormation template fail to deploy a stack?</p>\r\n\r\n<p>Choose the correct answer from the below options.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>{</p>\r\n\r\n<p>&nbsp; &quot;AWSTemplateFormatVersion&quot; : &quot;2010-09-09&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp; &quot;Parameters&quot; : {</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;VPCId&quot; : {</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Type&quot;: &quot;String&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Description&quot; : &quot;Enter current VPC Id&quot;</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp; },</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; &quot;SubnetId : {</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Type&quot;: &quot;String&quot;,</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Description&quot; : &quot;Enter a subnet Id&quot;</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp; }</p>\r\n\r\n<p>},</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&quot;Outputs&quot; : {</p>\r\n\r\n<p>&nbsp;&nbsp; &quot;InstanceId&quot; : {</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Value&quot; : { &quot;Ref&quot; : &quot;MyInstance&quot; },</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;Description&quot; : &quot;Instance Id&quot;</p>\r\n\r\n<p>&nbsp; &nbsp;&nbsp; }</p>\r\n\r\n<p>&nbsp;&nbsp; }</p>\r\n\r\n<p>}</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; C</strong></p>\r\n\r\n<ul>\r\n\t<li>Option C is CORRECT because the Resources section is mandatory for the CloudFormation template to work, and it is missing in this template.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on CloudFormation templates, please refer to the below URL-</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html\" target=\"_blank\">http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19168,
            "question_id": 29051,
            "answers": [
              {
                "choice": "<p>CloudFormation templates do not use a &ldquo;Parameters&rdquo; section.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>A &ldquo;Conditions&rdquo; section is mandatory but is not included.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>A &ldquo;Resources&rdquo; section is mandatory but is not included.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>A template description is mandatory but is not included.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Continuous Improvement for Existing Solutions"
      },
      {
        "question_id": 45465,
        "topic_id": 365,
        "course_id": 0,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Your company is running a business analytics service that uses RDS with MySQL as the main database. The database is configured with Multi-AZ. Most recently, the load on the database has increased rapidly with&nbsp;the launch of new features. By looking at the logs, most of the load is generated by the read-only queries. Because of the heavy read loads, the operations team has decided to put a set of read-replicas in place. The new application features are launched via a cluster of containers into the virtual machines, where all the containers are having access to the same set of configurations. How can you pair the read replicas together to make sure the application running in the containers can access them properly?</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Correct Answer: A</strong></p>\r\n\r\n<ul>\r\n\t<li><strong>Option A is CORRECT</strong> because, in Route 53, you can create individual record sets for each DNS endpoint associated with your read replicas and give them the same weight. Then the read requests are distributed across multiple read replicas.</li>\r\n\t<li><strong>Option B is INCORRECT</strong> because the ELB cannot point to multiple replicas.</li>\r\n\t<li><strong>Option C is INCORRECT</strong> because this is not a workable solution. Elastic IP is an external resource, and routing the Elastic IP to read replica set is impossible.</li>\r\n\t<li><strong>Option D is INCORRECT</strong> because it is possible to route internal Route53 multivalve answer records to a set of IPs.</li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 35472,
            "question_id": 45465,
            "answers": [
              {
                "choice": "<p>Create Amazon Route 53 weighted record sets to distribute requests across the read replicas.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>Create an ELB and point to all the read replicas. Use the URL of the ELB to access the read replicas from the application.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Create an Elastic IP and create a route table entry to point the IP to the read replicas. Use the IP to access the read replicas from the application.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Read replica cluster is not supported in AWS. Use an external utility to create a DNS record and use the record to access the read replicas from the application.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Migration Planning"
      },
      {
        "question_id": 29053,
        "topic_id": 364,
        "course_id": 168,
        "case_study_id": null,
        "lab_id": null,
        "question_text": "<p>Which of the following is an example of a good Amazon DynamoDB hash key schema for provisioned throughput efficiency?</p>\r\n\r\n<p>Choose an answer from the below options.</p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p><strong>Answer &ndash; A</strong></p>\r\n\r\n<ul>\r\n\t<li>Option A is CORRECT because DynamoDB stores and retrieves each item based on the primary key (hash key) value which must be unique. Every student would surely have a Student ID. Hence, the data would be partitioned for each ID, which will make the data retrieval efficient.</li>\r\n\t<li>Option B is incorrect because the data should spread evenly across all partitions for the best throughput. With only two colleges, there would be only two partitions. This will not be as efficient as making Student ID the hash key.&nbsp;</li>\r\n\t<li>Option C is incorrect because partitioning on the Class ID will not be as efficient as doing so on the Student ID.</li>\r\n\t<li>Option D is incorrect because there are only two possible options: in-state and out-of-state. This will not be as efficient as making Student ID the hash key.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>For more information on DynamoDB tables, please visit the URL:</p>\r\n\r\n<ul>\r\n\t<li><a href=\"http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html\" target=\"_blank\">http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html</a></li>\r\n</ul>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 19170,
            "question_id": 29053,
            "answers": [
              {
                "choice": "<p>Student ID where every student has a unique ID.</p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>College ID where there are two colleges in the university.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Class ID where every student is in one of the four classes.</p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>Tuition Plan where the vast majority of students are in state and the rest are out of state.</p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Design for New Solutions"
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
      }
    ]
  }