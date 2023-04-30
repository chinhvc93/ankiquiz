var ExamTopic_900_1027 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#900",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has implemented a new security requirement. According to the new requirement, the company must scan all traffic from corporate AWS instances in the company's VPC for violations of the company's security policies. As a result of these scans, the company can block access to and from specific IP addresses.<br>To meet the new requirement, the company deploys a set of Amazon EC2 instances in private subnets to serve as transparent proxies. The company installs approved proxy server software on these EC2 instances. The company modifies the route tables on all subnets to use the corresponding EC2 instances with proxy software as the default route. The company also creates security groups that are compliant with the security policies and assigns these security groups to the EC2 instances.<br>Despite these configurations, the traffic of the EC2 instances in their private subnets is not being properly forwarded to the internet.<br>What should a solutions architect do to resolve this issue?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#900",
          "answers": [
            {
              "choice": "<p>A. Disable source/destination checks on the EC2 instances that run the proxy software.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a rule to the security group that is assigned to the proxy EC2 instances to allow all traffic between instances that have this security group. Assign this security group to all EC2 instances in the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the VPC's DHCP options set. Set the DNS server options to point to the addresses of the proxy EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Assign one additional elastic network interface to each proxy EC2 instance. Ensure that one of these network interfaces has a route to the private subnets. Ensure that the other network interface has a route to the internet.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 664673,
          "date": "Fri 09 Sep 2022 16:16",
          "username": "Ni_yotJohnPi",
          "content": "This means that the instance must be the source or destination of any traffic it sends or receives. However, a NAT instance must be able to send and receive traffic when the source or destination is not itself. Therefore, you must disable source/destination checks on the NAT instancehttps://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html#EIP_Disable_SrcDestCheck",
          "upvote_count": "81"
        },
        {
          "id": 685227,
          "date": "Mon 03 Oct 2022 07:38",
          "username": "JohnPi",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html#EIP_Disable_SrcDestCheck",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#901",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a web application in the AWS Cloud. The application consists of dynamic content that is created on a set of Amazon EC2 instances. The<br>EC2 instances run in an Auto Scaling group that is configured as a target group for an Application Load Balancer (ALB).<br>The company is using an Amazon CloudFront distribution to distribute the application globally. The CloudFront distribution uses the ALB as an origin. The company uses Amazon Route 53 for DNS and has created an A record of www.example.com for the CloudFront distribution.<br>A solutions architect must configure the application so that itis highly available and fault tolerant.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#901",
          "answers": [
            {
              "choice": "<p>A. Provision a full, secondary application deployment in a different AWS Region. Update the Route 53 A record to be a failover record. Add both of the CloudFront distributions as values. Create Route 53 health checks.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision an ALB, an Auto Scaling group, and EC2 instances in a different AWS Region. Update the CloudFront distribution, and create a second origin for the new ALB.  Create an origin group for the two origins. Configure one origin as primary and one origin as secondary.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision an Auto Scaling group and EC2 instances in a different AWS Region. Create a second target for the new Auto Scaling group in the ALB.  Set up the failover routing algorithm on the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision a full, secondary application deployment in a different AWS Region. Create a second CloudFront distribution, and add the new application setup as an origin. Create an AWS Global Accelerator accelerator. Add both of the CloudFront distributions as endpoints.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 676416,
          "date": "Thu 22 Sep 2022 19:11",
          "username": "gnandam",
          "content": "B- https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html<br>You can set up CloudFront with origin failover for scenarios that require high availability. To get started, you create an origin group with two origins: a primary and a secondary. If the primary origin is unavailable, or returns specific HTTP response status codes that indicate a failure, CloudFront automatically switches to the secondary origin.",
          "upvote_count": "6"
        },
        {
          "id": 714932,
          "date": "Thu 10 Nov 2022 06:19",
          "username": "janvandermerwer",
          "content": "B - Most likely answer.<br>A- Seems to be missing context \\\"add both of the distributions as values\\\" - The brief does not mention more than one distribution.<br>C - Likely \\\"technically\\\" work, however if there is an issue with the ALB in the primary region, this would take the environment down.<br>D - Seems a bit overkill, probably won't need to create a second cloudfront dist.",
          "upvote_count": "1"
        },
        {
          "id": 682016,
          "date": "Wed 28 Sep 2022 20:09",
          "username": "akash_it",
          "content": "B is correct",
          "upvote_count": "3"
        },
        {
          "id": 671375,
          "date": "Sat 17 Sep 2022 11:05",
          "username": "Ni_yot",
          "content": "B i agree",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#902",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is collecting a large amount of data from a fleet of IoT devices. Data is stored as Optimized Row Columnar (ORC) files in the Hadoop Distributed File<br>System (HDFS) on a persistent Amazon EMR cluster. The company's data analytics team queries the data by using SQL in Apache Presto deployed on the same<br>EMR cluster. Queries scan large amounts of data, always run for less than 15 minutes, and run only between 5 PM and 10 PM.<br>The company is concerned about the high cost associated with the current solution. A solutions architect must propose the most cost-effective solution that will allow SQL data queries.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#902",
          "answers": [
            {
              "choice": "<p>A. Store data in Amazon S3. Use Amazon Redshift Spectrum to query data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store data in Amazon S3. Use the AWS Glue Data Catalog and Amazon Athena to query data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store data in EMR File System (EMRFS). Use Presto in Amazon EMR to query data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store data in Amazon Redshift. Use Amazon Redshift to query data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 662345,
          "date": "Wed 07 Sep 2022 12:34",
          "username": "ArreRaja",
          "content": "It is B.  You need Redshift cluster to run Redshift spectrum which is expensive. Cost per query is same in Redshift spectrum vs Athena though Athena is not for complex or parallel queries with large data set",
          "upvote_count": "5"
        },
        {
          "id": 715056,
          "date": "Thu 10 Nov 2022 09:40",
          "username": "janvandermerwer",
          "content": "Process of elimination -> Athena is usually cheaper than redshift for smaller jobs.<br><br>EMR File system sounds expensive",
          "upvote_count": "1"
        },
        {
          "id": 686516,
          "date": "Wed 05 Oct 2022 04:00",
          "username": "athenaguo",
          "content": "https://aws.amazon.com/cn/premiumsupport/knowledge-center/configure-emr-s3-hadoop-storage/",
          "upvote_count": "1"
        },
        {
          "id": 685256,
          "date": "Mon 03 Oct 2022 08:13",
          "username": "JohnPi",
          "content": "Athena uses Presto",
          "upvote_count": "1"
        },
        {
          "id": 661275,
          "date": "Tue 06 Sep 2022 15:32",
          "username": "cale",
          "content": "It is B",
          "upvote_count": "2"
        },
        {
          "id": 659288,
          "date": "Sun 04 Sep 2022 14:53",
          "username": "azureaspirant",
          "content": "Redshift Spectrum is for scanning large amount of data",
          "upvote_count": "1"
        },
        {
          "id": 657428,
          "date": "Fri 02 Sep 2022 14:42",
          "username": "Rocketeer",
          "content": "Should be B",
          "upvote_count": "2"
        },
        {
          "id": 654801,
          "date": "Wed 31 Aug 2022 07:49",
          "username": "Johannes1509",
          "content": "The answer should be #B.  Athena is less expensive as Redshift Spectrum (https://stackoverflow.com/questions/50250114/athena-vs-redshift-spectrum)",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#903",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a data processing system that will use Amazon EC2 instances. Data that needs to be processed will wait in an Amazon Simple<br>Queue Service (Amazon SQS) queue. At least two data processing instances must run at all times.<br>Which combination of actions will meet these requirements MOST cost-effectively? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#903",
          "answers": [
            {
              "choice": "<p>A. Create a Spot Fleet with a target scaling policy that targets the acceptable backlog per instance. Request two On-Demand Instances for minimum capacity. Use Spot Instances for additional capacity.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Purchase two Reserved Instances for the target platform and instance type in the target AWS Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create On-Demand Capacity Reservations for two instances for the target platform and instance type in the target AWS Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Auto Scaling group that uses Spot Instance requests. Configure the scaling policy to scale with the size of the SQS queue. Set the minimum value to 2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Provision two Dedicated Hosts. Configure AWS Batch to use Spot Instances to supply additional capacity.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 674112,
          "date": "Tue 20 Sep 2022 13:59",
          "username": "pinhead900",
          "content": "BD is right, <br>2 instances must run always so get RIs for that + spot fleet to compensate increased traffic",
          "upvote_count": "8"
        },
        {
          "id": 717529,
          "date": "Sun 13 Nov 2022 22:26",
          "username": "LrdKanien",
          "content": "The key word is \\\"combination of actions\\\" and \\\"cost effectively\\\". RIs for the 2 you must have and spot for the rest.",
          "upvote_count": "1"
        },
        {
          "id": 715638,
          "date": "Fri 11 Nov 2022 01:27",
          "username": "mrgreatness",
          "content": "BD 100%",
          "upvote_count": "1"
        },
        {
          "id": 714319,
          "date": "Wed 09 Nov 2022 06:40",
          "username": "Byrney",
          "content": "AB because D is all spot which doesn't ensure there are always 2 instances are running.Also you need to actually have 2 on-demand instances running for the reserved instance discountin B to kick in - purchasing reserved instances alone doesn't result in anything running.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html<br>Reserved Instances are not physical instances, but rather a billing discount applied to the use of On-Demand Instances in your account.",
          "upvote_count": "2"
        },
        {
          "id": 707032,
          "date": "Sat 29 Oct 2022 08:42",
          "username": "sindra",
          "content": "D is not correct because the instance must be available anytime.. so A B is the preferable",
          "upvote_count": "1"
        },
        {
          "id": 705104,
          "date": "Thu 27 Oct 2022 03:13",
          "username": "ToanVN1988",
          "content": "My choice is A&B",
          "upvote_count": "1"
        },
        {
          "id": 703229,
          "date": "Mon 24 Oct 2022 19:22",
          "username": "redipa",
          "content": "Both A and D will allow you to have 2 on-demand instances running full time (covered by the RIs bought in 'B') and scale with spot instances. The difference between the answers is the Spot fleet says it scales from the instance backlog while the ASG is scaling from the SQS queue.<br><br>It's better to scale from the SQS queue, so I would choose B & D. ",
          "upvote_count": "2"
        },
        {
          "id": 702926,
          "date": "Mon 24 Oct 2022 12:43",
          "username": "fdoxxx",
          "content": "A, B - this is the question about allocation strategy - more can be found here: https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html",
          "upvote_count": "1"
        },
        {
          "id": 700854,
          "date": "Fri 21 Oct 2022 14:27",
          "username": "fredwu66",
          "content": "the question is asking \\\"combination of actions\\\", so BD. ",
          "upvote_count": "3"
        },
        {
          "id": 697579,
          "date": "Mon 17 Oct 2022 19:06",
          "username": "wassb",
          "content": "Great explanation caveman712. The combination of action is : <br>A- You request 2 on demand instances + additional capacity with Spot<br>B- You take RI for the 2 on demand instances.",
          "upvote_count": "2"
        },
        {
          "id": 690578,
          "date": "Mon 10 Oct 2022 01:07",
          "username": "caveman712joancarles",
          "content": "A - OK. 2 instances must run at all times. Using spot can cause interruption. Can create custom metrics for Queue backlog per instance: https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html#scale-sqs-queue-cli<br>B - OK. RI is only applicable for on-demand instances - Reserved Instances are not physical instances, but rather a billing discount applied to the use of On-Demand Instances in your account. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html<br><br>Why not B & D? - Option D doesn’t meet requirement of2 instances must run at all times due to spot interruption. Also RI will be useless since there is no on-demand instances.It's a combination of actions. With option B, you are covering the basis of two instances running all the time, option D with the spot ASG it's for saving.",
          "upvote_count": "41"
        },
        {
          "id": 696794,
          "date": "Mon 17 Oct 2022 05:59",
          "username": "joancarles",
          "content": "It's a combination of actions. With option B, you are covering the basis of two instances running all the time, option D with the spot ASG it's for saving.",
          "upvote_count": "1"
        },
        {
          "id": 688715,
          "date": "Fri 07 Oct 2022 16:47",
          "username": "dcdcdc3",
          "content": "for B and D<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html",
          "upvote_count": "1"
        },
        {
          "id": 682030,
          "date": "Wed 28 Sep 2022 20:30",
          "username": "akash_it",
          "content": "BD is correct",
          "upvote_count": "2"
        },
        {
          "id": 662750,
          "date": "Wed 07 Sep 2022 19:31",
          "username": "AwsBRFanCloudxie",
          "content": "\\\"At least two data processing instances must run at all times.\\\" So D does not make sense to meReserved two instances will always run anyway",
          "upvote_count": "41"
        },
        {
          "id": 671405,
          "date": "Sat 17 Sep 2022 11:57",
          "username": "Cloudxie",
          "content": "Reserved two instances will always run anyway",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#904",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company loaded millions of historical stock trades into an Amazon DynamoDB table. The table uses on-demand capacity mode. Once each day at midnight, a few million new records are loaded into the table. Application read activity against the table happens in bursts throughout the day, and a limited set of keys are repeatedly looked up. The company needs to reduce costs associated with DynamoDB. <br>Which strategy should a solutions architect recommend to meet this requirement?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#904",
          "answers": [
            {
              "choice": "<p>A. Deploy an Amazon ElastiCache cluster in front of the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy DynamoDB Accelerator (DAX). Configure DynamoDB auto scaling. Purchase Savings Plans in Cost Explorer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use provisioned capacity mode. Purchase Savings Plans in Cost Explorer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy DynamoDB Accelerator (DAX). Use provisioned capacity mode. Configure DynamoDB auto scaling.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 662755,
          "date": "Wed 07 Sep 2022 19:37",
          "username": "AwsBRFan",
          "content": "not able to find out dynamo on savings plans description<br><br>https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html",
          "upvote_count": "7"
        },
        {
          "id": 674465,
          "date": "Tue 20 Sep 2022 21:27",
          "username": "redipa",
          "content": "DAX + provisioned capacity + auto scaling<br>--savings plans are for EC2 and do not contribute to DynamoDB<br><br>Provisioned mode is a good option if any of the following are true:<br>You have predictable application traffic.<br>You run applications whose traffic is consistent or ramps gradually.<br>You can forecast capacity requirements to control costs.<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.ProvisionedThroughput.Manual",
          "upvote_count": "5"
        },
        {
          "id": 708580,
          "date": "Mon 31 Oct 2022 17:53",
          "username": "alxjandroleiva",
          "content": "DAX better than Elastic",
          "upvote_count": "1"
        },
        {
          "id": 674115,
          "date": "Tue 20 Sep 2022 14:02",
          "username": "pinhead900",
          "content": "there is no savings plans for dynamodb nor rds. must be D. ",
          "upvote_count": "5"
        },
        {
          "id": 673574,
          "date": "Mon 19 Sep 2022 21:04",
          "username": "astalavista1",
          "content": "C - Wouldn't solve the \\\"and a limited set of keys are repeatedly looked up\\\" which DAX will help with.",
          "upvote_count": "1"
        },
        {
          "id": 673573,
          "date": "Mon 19 Sep 2022 21:02",
          "username": "astalavista1pixepe",
          "content": "A-Incorrect can't use ElastiCache in DynamodDB. <br>B- Correct as DAX equivalent to Elasticache for DynamoDB and read is in burstB is INCORRECT since Saving Plans does NOT support DynamoDB<br><br>The way to save cost on DynamoDB is Reserve Capacity.",
          "upvote_count": "11"
        },
        {
          "id": 673772,
          "date": "Tue 20 Sep 2022 05:52",
          "username": "pixepe",
          "content": "B is INCORRECT since Saving Plans does NOT support DynamoDB<br><br>The way to save cost on DynamoDB is Reserve Capacity.",
          "upvote_count": "1"
        },
        {
          "id": 665254,
          "date": "Sat 10 Sep 2022 10:57",
          "username": "Biden",
          "content": "Less Dynamo DB requests = Less provisioned throughput capacity =Cost Savings, hence A",
          "upvote_count": "1"
        },
        {
          "id": 664732,
          "date": "Fri 09 Sep 2022 17:26",
          "username": "Ni_yotNi_yot",
          "content": "A for me on this one.if you use elasticache in front of the dynamodb then frequently accessed data will benefit from caching.Changingto D - https://aws.amazon.com/dynamodb/dax/",
          "upvote_count": "11"
        },
        {
          "id": 709420,
          "date": "Tue 01 Nov 2022 21:08",
          "username": "Ni_yot",
          "content": "Changingto D - https://aws.amazon.com/dynamodb/dax/",
          "upvote_count": "1"
        },
        {
          "id": 660568,
          "date": "Mon 05 Sep 2022 23:54",
          "username": "SGES",
          "content": "B - in my opinion",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#905",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to send data from its on-premises systems to Amazon S3 buckets. The company created the S3 buckets in three different accounts. The company must send the data privately without the data traveling across the internet. The company has no existing dedicated connectivity to AWS.<br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#905",
          "answers": [
            {
              "choice": "<p>A. Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Set up an AWS Direct Connect connection with a private VIF between the on-premises environment and the private VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Set up an AWS Direct Connect connection with a public VIF between the on-premises environment and the private VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon S3 interface endpoint in the networking account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon S3 gateway endpoint in the networking account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Peer VPCs from the accounts that host the S3 buckets with the VPC in the network account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 671562,
          "date": "Sat 17 Sep 2022 15:36",
          "username": "Ni_yotByrney",
          "content": "Ans is A C. S3 supports both gateway and interface endpoints.The main difference is that interface endpoint allows access from on-premises while gateway endpoint does not. <br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html#types-of-vpc-endpoints-for-s3AC:https://aws.amazon.com/blogs/aws/aws-privatelink-for-amazon-s3-now-available/",
          "upvote_count": "122"
        },
        {
          "id": 714327,
          "date": "Wed 09 Nov 2022 06:53",
          "username": "Byrney",
          "content": "AC:https://aws.amazon.com/blogs/aws/aws-privatelink-for-amazon-s3-now-available/",
          "upvote_count": "2"
        },
        {
          "id": 674471,
          "date": "Tue 20 Sep 2022 21:39",
          "username": "redipaskywalker",
          "content": "Answer: Private VIF + Interface endpoint <br><br>https://aws.amazon.com/premiumsupport/knowledge-center/s3-bucket-access-direct-connect/<br><br>Use a private IP address over Direct Connect (with an interface VPC endpoint)<br>To access Amazon S3 using a private IP address over Direct Connect, perform the following steps:<br>...<br>3.Create a private virtual interface for your connection.<br>...<br>5.Create an interface VPC endpoint for Amazon S3 in a VPC that is associated with the virtual private gateway. The VGW must connect to a Direct Connect private virtual interface. This interface VPC endpoint resolves to a private IP address even if you enable a VPC endpoint for S3.AC <br><br>Rule out B because it didn't mentioned creating an interface VPC endpoint for Amazon S3 which is needed for Using a private IP address over Direct Connect (with an interface VPC endpoint)..Thus A seems a logical choice instead of B. ",
          "upvote_count": "81"
        },
        {
          "id": 689778,
          "date": "Sun 09 Oct 2022 02:23",
          "username": "skywalker",
          "content": "AC <br><br>Rule out B because it didn't mentioned creating an interface VPC endpoint for Amazon S3 which is needed for Using a private IP address over Direct Connect (with an interface VPC endpoint)..Thus A seems a logical choice instead of B. ",
          "upvote_count": "1"
        },
        {
          "id": 717534,
          "date": "Sun 13 Nov 2022 22:32",
          "username": "LrdKanien",
          "content": "A and C.  You can't route from on prem to the gateway VPC endpoint.",
          "upvote_count": "1"
        },
        {
          "id": 715962,
          "date": "Fri 11 Nov 2022 11:43",
          "username": "alnadan",
          "content": "AC<br>Here is the link: https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/",
          "upvote_count": "1"
        },
        {
          "id": 715961,
          "date": "Fri 11 Nov 2022 11:42",
          "username": "alnadan",
          "content": "A & C<br>https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/",
          "upvote_count": "1"
        },
        {
          "id": 700005,
          "date": "Thu 20 Oct 2022 16:10",
          "username": "Blair77",
          "content": "A&C:<br>https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/",
          "upvote_count": "2"
        },
        {
          "id": 697399,
          "date": "Mon 17 Oct 2022 14:33",
          "username": "RocketeerRocketeer",
          "content": "BD<br>Need public VIF + Gateway endpoint for S3changed to AC",
          "upvote_count": "21"
        },
        {
          "id": 708697,
          "date": "Mon 31 Oct 2022 20:47",
          "username": "Rocketeer",
          "content": "changed to AC",
          "upvote_count": "1"
        },
        {
          "id": 685263,
          "date": "Mon 03 Oct 2022 08:26",
          "username": "JohnPiJohnPi",
          "content": "public VIF + interface endpointAC Private VIF + Interface endpoint",
          "upvote_count": "21"
        },
        {
          "id": 693248,
          "date": "Wed 12 Oct 2022 18:20",
          "username": "JohnPi",
          "content": "AC Private VIF + Interface endpoint",
          "upvote_count": "1"
        },
        {
          "id": 671399,
          "date": "Sat 17 Sep 2022 11:38",
          "username": "Cloudxie",
          "content": "In scenarios where you must access S3 buckets securely from on-premises or from across Regions, we recommend using an interface endpoint. If you chose a gateway endpoint, install a fleet of proxies in the VPC to address transitive routing.",
          "upvote_count": "2"
        },
        {
          "id": 665258,
          "date": "Sat 10 Sep 2022 11:04",
          "username": "Biden",
          "content": "As an architect consider future needs too. GW EPs is supported for resources in a specific VPC to which the EP is associated, which complicates future design. Hence A,C !!",
          "upvote_count": "2"
        },
        {
          "id": 663571,
          "date": "Thu 08 Sep 2022 13:49",
          "username": "pixepe",
          "content": "My Answer is A,C<br><br>We all have consensus on A. <br><br>Between D & E,<br>D (S3 Gateway Endpoint) is Regional, and doesn't support in cross-VPC. Here question doesn't state anything on region on cross-account. So have doubt on D that it will NOT work.<br><br>And C(S3 Interfcae endpoint) can work on multi-region, cross-account etc.<br><br>REf - https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/",
          "upvote_count": "4"
        },
        {
          "id": 662757,
          "date": "Wed 07 Sep 2022 19:40",
          "username": "AwsBRFan",
          "content": "S3 - Gateway interface - https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
          "upvote_count": "1"
        },
        {
          "id": 660715,
          "date": "Tue 06 Sep 2022 04:23",
          "username": "SGEScale",
          "content": "A & C to me are preferableI think so too - it's A & C",
          "upvote_count": "21"
        },
        {
          "id": 661751,
          "date": "Wed 07 Sep 2022 01:57",
          "username": "cale",
          "content": "I think so too - it's A & C",
          "upvote_count": "1"
        },
        {
          "id": 655123,
          "date": "Wed 31 Aug 2022 15:35",
          "username": "Cloudyheema",
          "content": "D & E make sense",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#906",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use a hybrid cloud architecture between an on-premises data center and AWS. The company already has deployed a multi-account structure in AWS Organizations while following the AWS Well-Architected Framework.<br>Due to strict security requirements, connectivity between the data center and AWS must be encrypted in transit. Only a single entry point into AWS is permitted from the data center. The data center must be able to access all the AWS accounts.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#906",
          "answers": [
            {
              "choice": "<p>A. Connect the AWS accounts with AWS Transit Gateway. Establish an AWS Site-to-Site VPN connection with the data center, and attach the connection to the transit gateway. Route traffic from the data center to all AWS accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Connect the AWS accounts with VPC peering. Establish an AWS Site-to-Site VPN connection with the data center. Route traffic from the data center to all AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Connect the AWS accounts with VPC peering. Establish an AWS Direct Connect connection to the closest AWS Region. Route traffic from the data center to all AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Connect the AWS accounts with AWS Transit Gateway. Establish an AWS Direct Connect connection to the closest AWS Region, and attach the connection to the transit gateway. Route traffic from the data center to all AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 662761,
          "date": "Wed 07 Sep 2022 19:45",
          "username": "AwsBRFan",
          "content": "A. <br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/encryption-in-transit.html",
          "upvote_count": "6"
        },
        {
          "id": 706281,
          "date": "Fri 28 Oct 2022 10:39",
          "username": "zdlt",
          "content": "Selected Answer: A<br>Because of transit encryption, site to site vpn (using IPSec)should be created instead of direct connect, mentioned in D",
          "upvote_count": "1"
        },
        {
          "id": 705111,
          "date": "Thu 27 Oct 2022 03:27",
          "username": "ToanVN1988",
          "content": "A or D but need to encrypt in transit . Directconnect not correct. Answer is A",
          "upvote_count": "2"
        },
        {
          "id": 659910,
          "date": "Mon 05 Sep 2022 10:18",
          "username": "rajvee",
          "content": "A.  <br><br>1. For the transit to be encrypted, Site to Site VPN is required i.e. IPSec. <br>2. For the single point of entry from DC, only Transit GW will work. Because VPC Peering does not allow traffic to transit i.e. https://docs.aws.amazon.com/vpc/latest/peering/invalid-peering-configurations.html",
          "upvote_count": "1"
        },
        {
          "id": 659358,
          "date": "Sun 04 Sep 2022 17:32",
          "username": "pixepe",
          "content": "Answer - A. <br>Requirement - \\\"connectivity between the data center and AWS must be encrypted in transit\\\" means it's VPN.<br><br>VPN: \\\"VPN connections use IPsec to establish encrypted network connectivity between your intranet and an Amazon VPC over the public internet.\\\"<br><br>Direct connect: By DEFAULT traffic is unencrypted. Of course, we can encrypt by additional step, but it's NOT mentioned in answer-D.  <br>Hence, correct answer is A. ",
          "upvote_count": "2"
        },
        {
          "id": 658762,
          "date": "Sat 03 Sep 2022 21:03",
          "username": "Rocketeer",
          "content": "VPN goes through internet and hence need encryption. DX is direct connection from on-prem to AWS. Using https provided the needed encryption. My answer is D",
          "upvote_count": "1"
        },
        {
          "id": 657055,
          "date": "Fri 02 Sep 2022 08:23",
          "username": "RVD",
          "content": "Encryption in transit is possible by ipsec not DX",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#907",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect works for a government agency that has strict disaster recovery requirements. All Amazon Elastic Block Store (Amazon EBS) snapshots are required to be saved in at least two additional AWS Regions. The agency also is required to maintain the lowest possible operational overhead.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#907",
          "answers": [
            {
              "choice": "<p>A. Configure a policy in Amazon Data Lifecycle Manager (Amazon DLM) to run once daily to copy the EBS snapshots to the additional Regions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon EventBridge (Amazon CloudWatch Events) to schedule an AWS Lambda function to copy the EBS snapshots to the additional Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up AWS Backup to create the EBS snapshots. Configure Amazon S3 cross-Region replication to copy the EBS snapshots to the additional Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Schedule Amazon EC2 Image Builder to run once daily to create an AMI and copy the AMI to the additional Regions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 663542,
          "date": "Thu 08 Sep 2022 13:22",
          "username": "pixepe",
          "content": "Answer is A. <br><br>Amazon DLM features:<br>Automated snapshot and AMI creation:<br>Create a policy that automates the creation, retention, and deletion of EBS snapshots and EBS-backed AMIs.<br><br>Fast snapshot restore integration:<br>Automate the creation of snapshots that are enabled for fast snapshot restore. Fast snapshot restore enables you to restore volumes that are fully initialized at creation and instantly deliver all of their provisioned performance.<br><br>Built-in cross-Region copy:<br>Automatically copy snapshots that are created by a lifecycle policy to up to three AWS Regions.<br><br>Automated cross-account snapshot copy:<br>Use cross-account sharing in conjunction with a cross-account copy event policy to automatically share and copy snapshots created by a policy across accounts.",
          "upvote_count": "6"
        },
        {
          "id": 684541,
          "date": "Sun 02 Oct 2022 02:52",
          "username": "sb333sb333",
          "content": "I would choose C over A.  AWS Backup has MUCH less overhead in both configuration and monitoring of backup jobs for EBS snapshots (and is the newer of the two services).Just re-read answer C and although I think AWS Backup (can do EBS backups) itself has less operational overhead than DLM, you do not have access to the S3 buckets to be able to configure cross-region replication - you would configure that cross-region replication within AWS Backup itself. So answer C is not technically feasible. It has to be A. ",
          "upvote_count": "13"
        },
        {
          "id": 695548,
          "date": "Sat 15 Oct 2022 19:09",
          "username": "sb333",
          "content": "Just re-read answer C and although I think AWS Backup (can do EBS backups) itself has less operational overhead than DLM, you do not have access to the S3 buckets to be able to configure cross-region replication - you would configure that cross-region replication within AWS Backup itself. So answer C is not technically feasible. It has to be A. ",
          "upvote_count": "3"
        },
        {
          "id": 673582,
          "date": "Mon 19 Sep 2022 21:21",
          "username": "astalavista1",
          "content": "A - DLM provides low overhead.",
          "upvote_count": "3"
        },
        {
          "id": 671570,
          "date": "Sat 17 Sep 2022 15:46",
          "username": "Ni_yot",
          "content": "Correct Ans A",
          "upvote_count": "3"
        },
        {
          "id": 662762,
          "date": "Wed 07 Sep 2022 19:47",
          "username": "AwsBRFan",
          "content": "A - DLM for EBS backups",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#908",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company has a small ecommerce web application that uses an Amazon RDS for PostgreSQL DB instance. The DB instance is deployed with the Multi-AZ option turned on.<br>Application usage recently increased exponentially, and users experienced frequent HTTP 503 errors. Users reported the errors, and the company's reputation suffered. The company could not identify a definitive root cause.<br>The company wants to improve its operational readiness and receive alerts before users notice an incident. The company also wants to collect enough information to determine the root cause of any future incident.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#908",
          "answers": [
            {
              "choice": "<p>A. Turn on Enhanced Monitoring for the DB instance. Modify the corresponding parameter group to turn on query logging for all the slow queries. Create Amazon CloudWatch alarms. Set the alarms to appropriate thresholds that are based on performance metrics in CloudWatch.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on Enhanced Monitoring and Performance Insights for the DB instance. Create Amazon CloudWatch alarms. Set the alarms to appropriate thresholds that are based on performance metrics in CloudWatch.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on log exports to Amazon CloudWatch for the PostgreSQL logs on the DB instance. Analyze the logs by using Amazon Elasticsearch Service (Amazon ES) and Kibana. Create a dashboard in Kibana. Configure alerts that are based on the metrics that are collected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on Performance Insights for the DB instance. Modify the corresponding parameter group to turn on query logging for all the slow queries. Create Amazon CloudWatch alarms. Set the alarms to appropriate thresholds that are based on performance metrics in CloudWatch.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 661772,
          "date": "Wed 07 Sep 2022 02:13",
          "username": "calecale",
          "content": "I think it is B because the cause of the issue is not known (i.e. it might not be slow queries) and RDS has SQL statistics in Performance Insight to investigate re: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/sql-statistics.htmlAdditional reference to support: (1) https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.Cloudwatch.html and (2) https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights_Counters.html.",
          "upvote_count": "121"
        },
        {
          "id": 661773,
          "date": "Wed 07 Sep 2022 02:18",
          "username": "cale",
          "content": "Additional reference to support: (1) https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.Cloudwatch.html and (2) https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights_Counters.html.",
          "upvote_count": "1"
        },
        {
          "id": 716076,
          "date": "Fri 11 Nov 2022 14:28",
          "username": "mrgreatness",
          "content": "B for me: https://aws.amazon.com/blogs/database/monitor-amazon-rds-for-postgresql-and-amazon-aurora-for-postgresql-database-log-errors-and-set-up-notifications-using-amazon-cloudwatch/",
          "upvote_count": "2"
        },
        {
          "id": 711188,
          "date": "Fri 04 Nov 2022 14:48",
          "username": "28hangcan",
          "content": "A is the correct Answer",
          "upvote_count": "1"
        },
        {
          "id": 707713,
          "date": "Sun 30 Oct 2022 09:55",
          "username": "aqiaoaqiao",
          "content": "Why A is wrong?Got it, Enhanced log is for collecting and analyzingOS level metrics, such as CPU,memory, which can't get SQL running information",
          "upvote_count": "11"
        },
        {
          "id": 707721,
          "date": "Sun 30 Oct 2022 10:06",
          "username": "aqiao",
          "content": "Got it, Enhanced log is for collecting and analyzingOS level metrics, such as CPU,memory, which can't get SQL running information",
          "upvote_count": "1"
        },
        {
          "id": 705126,
          "date": "Thu 27 Oct 2022 03:37",
          "username": "ToanVN1988",
          "content": "Need to combine monitor and logging analytics. D is correct",
          "upvote_count": "1"
        },
        {
          "id": 704666,
          "date": "Wed 26 Oct 2022 14:22",
          "username": "Blair77",
          "content": "-\\\"The company also wants to collect enough information to determine the root cause of any future incident.\\\" Enhanced Monitoring plus Performance Insights will provide that... Go with BBB<br>https://www.youtube.com/watch?v=iTDt4ZhD25U",
          "upvote_count": "1"
        },
        {
          "id": 696802,
          "date": "Mon 17 Oct 2022 06:20",
          "username": "joancarles",
          "content": "I think it's B because the way to determine the root problem is to enable multiple mechanisms. Enhanced Monitoring, Performance Insights and metrics in CloudWatch:<br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-aurora-postgresql-performance-issues/?nc1=h_ls",
          "upvote_count": "1"
        },
        {
          "id": 696186,
          "date": "Sun 16 Oct 2022 12:46",
          "username": "psou7",
          "content": "i would go with D",
          "upvote_count": "1"
        },
        {
          "id": 689781,
          "date": "Sun 09 Oct 2022 02:28",
          "username": "skywalker",
          "content": "B is my choice.",
          "upvote_count": "1"
        },
        {
          "id": 684533,
          "date": "Sun 02 Oct 2022 02:34",
          "username": "sb333JohnPi",
          "content": "The answer is B - to enable both Enhanced Monitoring and Performance Insights. Enhanced Monitoring produces CloudWatch metrics, which can be the basis for CloudWatch alarms. Performance Insights is a great tool for troubleshooting, but it is a dashboard that does not allow data to be exported (to CloudWatch or otherwise).<br><br>The answer cannot be D, because neither Performance Insights nor query logging (stored locally on DB server) can be enabled for CloudWatch alarms.Performance Insights automatically publishes metrics to Amazon CloudWatch",
          "upvote_count": "31"
        },
        {
          "id": 685271,
          "date": "Mon 03 Oct 2022 08:39",
          "username": "JohnPi",
          "content": "Performance Insights automatically publishes metrics to Amazon CloudWatch",
          "upvote_count": "1"
        },
        {
          "id": 673329,
          "date": "Mon 19 Sep 2022 15:21",
          "username": "kapara",
          "content": "D.  Performance Insights will publish fewer metrics and will be less complex to set alarm policy too. since this question seems to blame the DB performance as the source for the issue, the Performance Insights metrics should be the metrics we need.",
          "upvote_count": "3"
        },
        {
          "id": 666104,
          "date": "Sun 11 Sep 2022 14:07",
          "username": "Sathish1412",
          "content": "Option D",
          "upvote_count": "1"
        },
        {
          "id": 665773,
          "date": "Sun 11 Sep 2022 04:19",
          "username": "Guoxian",
          "content": "I would vote for D since it could be both. D covers both Postgres DB performance and slow query.",
          "upvote_count": "1"
        },
        {
          "id": 662779,
          "date": "Wed 07 Sep 2022 20:01",
          "username": "AwsBRFan",
          "content": "Yeap really in doubt about A and D. <br>1- Yes, performance insight support RDS PostgresSQL:<br>https://aws.amazon.com/rds/performance-insights/<br>2- Performance insight will help on RCA",
          "upvote_count": "3"
        },
        {
          "id": 662374,
          "date": "Wed 07 Sep 2022 13:01",
          "username": "ArreRajaArreRajaBiden",
          "content": "cannot be D as Performance insight is not supported for RDS PostgresSQL. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.Enabling.htmlmy bad. Perf insight is supported for RDS PostgresPerf Insights supported for Postgre; https://aws.amazon.com/rds/performance-insights/. Hence D",
          "upvote_count": "111"
        },
        {
          "id": 669092,
          "date": "Wed 14 Sep 2022 16:06",
          "username": "ArreRaja",
          "content": "my bad. Perf insight is supported for RDS Postgres",
          "upvote_count": "1"
        },
        {
          "id": 665261,
          "date": "Sat 10 Sep 2022 11:14",
          "username": "Biden",
          "content": "Perf Insights supported for Postgre; https://aws.amazon.com/rds/performance-insights/. Hence D",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#909",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to set up a REST API application on AWS. The application team wants to set up a new identity store on AWS. The IT team does not want to maintain any infrastructure or servers for this deployment.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#909",
          "answers": [
            {
              "choice": "<p>A. Deploy the application as AWS Lambda functions. Set up Amazon API Gateway REST API endpoints for the application. Create a Lambda function, and configure a Lambda authorizer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the application in AWS AppSync, and configure AWS Lambda resolvers. Set up an Amazon Cognito user pool, and configure AWS AppSync to use the user pool for authorization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the application as AWS Lambda functions. Set up Amazon API Gateway REST API endpoints for the application. Set up an Amazon Cognito user pool, and configure an Amazon Cognito authorizer.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the application in Amazon Elastic Kubernetes Service (Amazon EKS) clusters. Set up an Application Load Balancer for the EKS pods. Set up an Amazon Cognito user pool and service pod for authentication.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 660747,
          "date": "Tue 06 Sep 2022 05:14",
          "username": "SGES",
          "content": "C - agreed to be better option",
          "upvote_count": "6"
        },
        {
          "id": 705131,
          "date": "Thu 27 Oct 2022 03:42",
          "username": "ToanVN1988",
          "content": "C is best choice",
          "upvote_count": "1"
        },
        {
          "id": 696189,
          "date": "Sun 16 Oct 2022 12:50",
          "username": "psou7",
          "content": "I would go with C",
          "upvote_count": "1"
        },
        {
          "id": 664754,
          "date": "Fri 09 Sep 2022 17:45",
          "username": "Ni_yot",
          "content": "C - lamda and conigto for authentication",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#910",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS Single Sign-On (AWS SSO) to centrally manage permissions and access to multiple AWS accounts in AWS Organizations. A solutions architect needs to provide users with granular access to AWS accounts based on different job functions.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#910",
          "answers": [
            {
              "choice": "<p>A. Create an IAM group for each job function. In AWS SSO for the management account, create a permission set for each job function. Add users to the appropriate groups. Assign roles to the corresponding groups in all AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a group in AWS SSO for each job function. In AWS SSO for the management account, create a permission set for each job function. Add users to the appropriate groups. Assign groups to AWS accounts with corresponding permission sets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM role for each job function in all AWS accounts. Create a group in the management account for each job function. In AWS SSO for the management account, create a permission set for each job function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role for each job function in the management account. In AWS SSO for the management account, create a permission set for each IAM role.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 666560,
          "date": "Mon 12 Sep 2022 05:27",
          "username": "pixepe",
          "content": "Answer seems to be B<br><br>Snippet: \\\"You can also add the users that you create in AWS SSO to groups you create in AWS SSO. In addition, you can create permissions sets that define permitted actions on an AWS resource, and assign them to your users and groups. For example, you can grant the DevOps group permissions to your production AWS accounts. When you add users to the DevOps group, they get access to your production AWS accounts automatically.\\\"<br><br>REf - https://aws.amazon.com/blogs/security/how-to-create-and-manage-users-within-aws-sso/<br><br>PS - New service is - AWS IAM Identity Center (Successor to AWS Single Sign-On)",
          "upvote_count": "7"
        },
        {
          "id": 714878,
          "date": "Thu 10 Nov 2022 03:34",
          "username": "janvandermerwer",
          "content": "B - This is how we setup new AWS client environments.",
          "upvote_count": "1"
        },
        {
          "id": 682050,
          "date": "Wed 28 Sep 2022 21:04",
          "username": "akash_it",
          "content": "B is correct",
          "upvote_count": "4"
        },
        {
          "id": 679488,
          "date": "Mon 26 Sep 2022 08:59",
          "username": "saidmaziz",
          "content": "it's should be B",
          "upvote_count": "1"
        },
        {
          "id": 671370,
          "date": "Sat 17 Sep 2022 11:00",
          "username": "Cloudxie",
          "content": "B, and use that single permission set to grant access to a list of target AWS accounts within your AWS Organization<br>IAM Identity Center assigns access to a user or group in one or more AWS accounts with permission sets. When you assign a permission set, IAM Identity Center creates corresponding IAM Identity Center-controlled IAM roles in each account, and attaches the policies specified in the permission set to those roles.",
          "upvote_count": "4"
        },
        {
          "id": 660756,
          "date": "Tue 06 Sep 2022 05:22",
          "username": "SGES",
          "content": "D -create role and policy permission in management account for granular control",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#911",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has hundreds of AWS accounts. The company recently implemented a centralized internal process for purchasing new Reserved Instances and modifying existing Reserved Instances. This process requires all business units that want to purchase or modify Reserved Instances to submit requests to a dedicated team for procurement. Previously, business units directly purchased or modified Reserved Instances in their own respective AWS accounts autonomously.<br>A solutions architect needs to enforce the new process in the most secure way possible.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#911",
          "answers": [
            {
              "choice": "<p>A. Ensure that all AWS accounts are part of an organization in AWS Organizations with all features enabled.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Config to report on the attachment of an IAM policy that denies access to the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In each AWS account, create an IAM policy that denies the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an SCP that denies the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action. Attach the SCP to each OU of the organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Ensure that all AWS accounts are part of an organization in AWS Organizations that uses the consolidated billing feature.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 671576,
          "date": "Sat 17 Sep 2022 15:55",
          "username": "Ni_yot",
          "content": "Agree A and D",
          "upvote_count": "11"
        },
        {
          "id": 715085,
          "date": "Thu 10 Nov 2022 10:20",
          "username": "janvandermerwer",
          "content": "B and C will be very painful to administer \\\"hundreds of accounts\\\"<br>E - Options in E are covered under A \\\"all features enabled\\\"<br><br>Leaving A and D as the remaining options.<br>- By deploying an SCP, this will ensure new accounts also have policies applied automatically.",
          "upvote_count": "1"
        },
        {
          "id": 714757,
          "date": "Wed 09 Nov 2022 18:11",
          "username": "superuser784",
          "content": "A and D, for those asking why not D: consolidated billing features DOES NOT include SCP, and All Features (which is the default option) Includes consolidated Billing Features and SCP.",
          "upvote_count": "2"
        },
        {
          "id": 708042,
          "date": "Sun 30 Oct 2022 21:52",
          "username": "Tokyo344",
          "content": "A&D<br><br>\\\"enabling all features makes it possible to use SCPs, be sure that your account administrators understand the effects of attaching SCPs to the organization, organizational units, or accounts. SCPs can restrict what users and even administrators can do in affected accounts.\\\"<br><br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html",
          "upvote_count": "1"
        },
        {
          "id": 686717,
          "date": "Wed 05 Oct 2022 10:36",
          "username": "firstabed",
          "content": "AD correct",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#912",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its primary API on AWS by using an Amazon API Gateway API and AWS Lambda functions that contain the logic for the API methods. The company's internal applications use the API for core functionality and business logic. The company's customers use the API to access data from their accounts.<br>Several customers also have access to a legacy API that is running on a single standalone Amazon EC2 instance.<br>The company wants to increase the security for these APIs to better prevent denial of service (DoS) attacks, check for vulnerabilities, and guard against common exploits.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#912",
          "answers": [
            {
              "choice": "<p>A. Use AWS WAF to protect both APIs. Configure Amazon Inspector to analyze the legacy API. Configure Amazon GuardDuty to monitor for malicious attempts to access the APIs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS WAF to protect the API Gateway API. Configure Amazon Inspector to analyze both APIs. Configure Amazon GuardDuty to block malicious attempts to access the APIs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS WAF to protect the API Gateway API. Configure Amazon Inspector to analyze the legacy API. Configure Amazon GuardDuty to monitor for malicious attempts to access the APIs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS WAF to protect the API Gateway API. Configure Amazon Inspector to protect the legacy API. Configure Amazon GuardDuty to block malicious attempts to access the APIs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 663026,
          "date": "Thu 08 Sep 2022 03:23",
          "username": "AwsBRFan",
          "content": "Agree C - Single EC2 instance, so legacy API does not apply WAF (WAF for ALB, API gateway, cloudfront)",
          "upvote_count": "7"
        },
        {
          "id": 662439,
          "date": "Wed 07 Sep 2022 14:01",
          "username": "ArreRaja",
          "content": "Guardduty only monitors and provides a JSON to other services (lamda, Eventbridge, etc) that will do the blocking",
          "upvote_count": "1"
        },
        {
          "id": 661287,
          "date": "Tue 06 Sep 2022 15:46",
          "username": "SGES",
          "content": "Agreed with C",
          "upvote_count": "1"
        },
        {
          "id": 658780,
          "date": "Sat 03 Sep 2022 21:36",
          "username": "RocketeerRocketeer",
          "content": "Why not BChanging my answer to C as Amazon inspector only looks at EC2 and ECRs.",
          "upvote_count": "11"
        },
        {
          "id": 658781,
          "date": "Sat 03 Sep 2022 21:38",
          "username": "Rocketeer",
          "content": "Changing my answer to C as Amazon inspector only looks at EC2 and ECRs.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#913",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its applications to the AWS Cloud. Each application will reside in its own AWS account after the migration. The applications will be hosted on Amazon EC2 Linux instances that need to be accessed through the shell for administration. The company's administrators want to use the AWS CLI from their laptops to interact with AWS and the EC2 instances.<br>The company is concerned that SSH access keys might be lost or become public. The company wants to avoid using long-term keys.<br>Which combination of steps should a solutions architect recommend to meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ABC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#913",
          "answers": [
            {
              "choice": "<p>A. Create subaccounts and cross-account roles for each of the applications. Create users. Assign cross-account roles to the users. Provide users with their initial credentials. B Configure AWS Single Sign-On. Create users. Assign the users the permission sets for the application accounts that they need to access. Provide users with their initial credentials.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Systems Manager Session Manager to obtain shell access to the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an organization in AWS Organizations with all features enabled to manage the accounts. Create subaccounts to host each of the applications.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Lambda function to rotate user access keys every 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an AWS Lambda function to rotate SSH keys for the EC2 instances every 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 714991,
          "date": "Thu 10 Nov 2022 08:04",
          "username": "janvandermerwer",
          "content": "Avoid using SSH - Functionality can be replaced by Sessions manager.<br>This rules out E<br>D would be a pain to implement for end users (Need to provide new keys to users every 30days)",
          "upvote_count": "1"
        },
        {
          "id": 712662,
          "date": "Sun 06 Nov 2022 22:38",
          "username": "Rocketeer",
          "content": "ABC<br>* A.  Create subaccounts and cross-account roles for each of the applications. Create users. Assign cross-account roles to the users. Provide users with their initial credentials. \t\t<br>* B.  Use AWS Systems Manager Session Manager to obtain shell access to the EC2 instances.<br>* C.  Create an organization in AWS Organizations with all features enabled to manage the accounts. Create subaccounts to host each of the applications.",
          "upvote_count": "2"
        },
        {
          "id": 712606,
          "date": "Sun 06 Nov 2022 20:41",
          "username": "Jonfernz",
          "content": "There's a formatting mistake in Option A, which actually has two different answers. I would go with the SSO approach. Together with AWS Org and Session Manager.",
          "upvote_count": "1"
        },
        {
          "id": 702182,
          "date": "Sun 23 Oct 2022 14:59",
          "username": "fdoxxx",
          "content": "A.  Create subaccounts and cross-account roles for each of the applications. Create users. Assign cross-account roles to the users. Provide users with their initial credentials.(we will have temp role credentials) B.  Configure AWS Single Sign-On. Create users. Assign the users the permission sets for the application accounts that they need to access. Provide users with their initial credentials.(we authorize to switch roles to applications sub accounts and D.  Create an organization in AWS Organizations with all features enabled to manage the accounts. Create subaccounts to host each of the applications. - to make AWS SSO /AWS IAM Identity Center possible.",
          "upvote_count": "1"
        },
        {
          "id": 684493,
          "date": "Sat 01 Oct 2022 23:38",
          "username": "sb333vijay1319",
          "content": "The answers aren't formatted right. There are two B answers.the answer must be A, B(Included in A), B. ",
          "upvote_count": "31"
        },
        {
          "id": 699372,
          "date": "Wed 19 Oct 2022 23:41",
          "username": "vijay1319",
          "content": "the answer must be A, B(Included in A), B. ",
          "upvote_count": "1"
        },
        {
          "id": 681652,
          "date": "Wed 28 Sep 2022 13:41",
          "username": "ufomysisfdoxxx",
          "content": "B Configure AWS Single Sign-On. Create users. Assign the users the permission sets for the application accounts that they need to access. Provide users with their initial credentials.<br>B.  Use AWS Systems Manager Session Manager to obtain shell access to the EC2 instances.<br>D.  Create an AWS Lambda function to rotate user access keys every 30 days.To configure AWS SSO which is now AWS IAM Identity Center you need to have AWS Organizations (all features enabled) - to use SSM Session Manager you need to have client installed and agent deployed. IAM user keys are still permanent for 30 days - there is better option:A.  Create subaccounts and cross-account roles for each of the applications. Create users. Assign cross-account roles to the users. Provide users with their initial credentials.(we will have temp role credentials) B.  Configure AWS Single Sign-On. Create users. Assign the users the permission sets for the application accounts that they need to access. Provide users with their initial credentials.(we authorize to switch roles to applications sub accounts and D.  Create an organization in AWS Organizations with all features enabled to manage the accounts. Create subaccounts to host each of the applications. - to make AWS SSO /AWS IAM Identity Center possible.",
          "upvote_count": "32"
        },
        {
          "id": 702179,
          "date": "Sun 23 Oct 2022 14:57",
          "username": "fdoxxx",
          "content": "To configure AWS SSO which is now AWS IAM Identity Center you need to have AWS Organizations (all features enabled) - to use SSM Session Manager you need to have client installed and agent deployed. IAM user keys are still permanent for 30 days - there is better option:A.  Create subaccounts and cross-account roles for each of the applications. Create users. Assign cross-account roles to the users. Provide users with their initial credentials.(we will have temp role credentials) B.  Configure AWS Single Sign-On. Create users. Assign the users the permission sets for the application accounts that they need to access. Provide users with their initial credentials.(we authorize to switch roles to applications sub accounts and D.  Create an organization in AWS Organizations with all features enabled to manage the accounts. Create subaccounts to host each of the applications. - to make AWS SSO /AWS IAM Identity Center possible.",
          "upvote_count": "2"
        },
        {
          "id": 676074,
          "date": "Thu 22 Sep 2022 13:56",
          "username": "gnandam",
          "content": "https://aws.amazon.com/blogs/aws/new-session-manager/",
          "upvote_count": "1"
        },
        {
          "id": 671960,
          "date": "Sun 18 Sep 2022 05:31",
          "username": "exam_asz",
          "content": "ABC is correct",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#914",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect has created a single VPC on AWS. The VPC has one internet gateway and one NAT gateway. The VPC extends across three Availability<br>Zones. Each Availability Zone includes one public subnet and one private subnet. The three private subnets contain Amazon EC2 instances that must be able to connect to the internet.<br>Which solution will increase the network resiliency of this architecture?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#914",
          "answers": [
            {
              "choice": "<p>A. Add two NAT gateways so that each Availability Zone has a NAT gateway. Configure a route table for each private subnet to send traffic to the NAT gateway in the subnet's Availability Zone.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add two NAT gateways so that each Availability Zone has a NAT gateway. Configure a route table for each public subnet to send traffic to the NAT gateway in the subnet's Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add two internet gateways so that each Availability Zone has an internet gateway. Configure a route table for each private subnet to send traffic to the internet gateway in the subnet's Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add two internet gateways so that each Availability Zone has an internet gateway. Configure a route table for each public subnet to send traffic to the internet gateway in the subnet's Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 715055,
          "date": "Thu 10 Nov 2022 09:38",
          "username": "janvandermerwer",
          "content": "A - \\\"Most correct\\\" - You could even add backup Routes to the alternate AZs NAT gateways for increased resiliency.<br>B - Public subnets do not require a route to NAT gateway (meant to be the other way around)<br>C - not necessary - 1 IGW per VPC<br>D - not necessary - 1 IGW per VPC",
          "upvote_count": "1"
        },
        {
          "id": 687093,
          "date": "Wed 05 Oct 2022 19:39",
          "username": "Ell89",
          "content": "A - no brainer.",
          "upvote_count": "2"
        },
        {
          "id": 676082,
          "date": "Thu 22 Sep 2022 14:02",
          "username": "gnandam",
          "content": "A<br>B- No need NAT GW for Public Subnet <br>C,D -Only one IGW per VPC",
          "upvote_count": "2"
        },
        {
          "id": 671578,
          "date": "Sat 17 Sep 2022 15:58",
          "username": "Ni_yot",
          "content": "Correct Ans A - A NAT GW in each AZ will meet the network availability requirement",
          "upvote_count": "1"
        },
        {
          "id": 671511,
          "date": "Sat 17 Sep 2022 14:38",
          "username": "JoMainAWS",
          "content": "poorly written question imho",
          "upvote_count": "2"
        },
        {
          "id": 661294,
          "date": "Tue 06 Sep 2022 15:58",
          "username": "SGES",
          "content": "A - Sure with using NAT Gateway to provide internet connect ion to EC2 hosted on private subnet.",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#915",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application in the AWS Cloud. The company's security team must approve the creation of all new IAM users. When a new IAM user is created, all access for the user must be removed automatically. The security team must then receive a notification to approve the user. The company has a multi-<br>Region AWS CloudTrail trail in the AWS account.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#915",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule. Define a pattern with the detail-type value set to AWS API Call via CloudTrail and an eventName of CreateUser.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure CloudTrail to send a notification for the CreateUser event to an Amazon Simple Notification Service (Amazon SNS) topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Invoke a container that runs in Amazon Elastic Container Service (Amazon ECS) with AWS Fargate technology to remove access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Invoke an AWS Step Functions state machine to remove access.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use Amazon Simple Notification Service (Amazon SNS) to notify the security team.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use Amazon Pinpoint to notify the security team.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 715053,
          "date": "Thu 10 Nov 2022 09:35",
          "username": "janvandermerwer",
          "content": "A - Res - Scan cloudtrail for API call<br>B - No - Doesn't tie in with other solutions very well<br>C - No - seems pricy when lambda or step function could do the same thing<br>D -Yes - I guess? - <br>E - Yes - notify the team as per requirement<br>F - No - marketing solution, not really suitable for this scenario.",
          "upvote_count": "1"
        },
        {
          "id": 687097,
          "date": "Wed 05 Oct 2022 19:41",
          "username": "Ell89",
          "content": "A D and E",
          "upvote_count": "1"
        },
        {
          "id": 664102,
          "date": "Fri 09 Sep 2022 02:48",
          "username": "pixepe",
          "content": "Answer - A, D and E<br><br>B is INCORRET because SNS notification is NOT at event level, it is at log file level and one log file can have multiple events.<br><br>From AWS, \\\"CloudTrail stores multiple events in a log file. When you enable this option, Amazon SNS notifications are sent for every log file delivery to your S3 bucket, not for every event.\\\" -> B is NOT correct",
          "upvote_count": "2"
        },
        {
          "id": 663034,
          "date": "Thu 08 Sep 2022 03:43",
          "username": "AwsBRFan",
          "content": "Yeah maybe ADE - https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/send-a-notification-when-an-iam-user-is-created.html",
          "upvote_count": "2"
        },
        {
          "id": 663028,
          "date": "Thu 08 Sep 2022 03:35",
          "username": "AwsBRFan",
          "content": "Maybe BDE - https://docs.aws.amazon.com/awscloudtrail/latest/userguide/configure-sns-notifications-for-cloudtrail.html",
          "upvote_count": "1"
        },
        {
          "id": 661813,
          "date": "Wed 07 Sep 2022 03:24",
          "username": "cale",
          "content": "I also think it's A, D, E.  Step Functions invoked by EventBridge.",
          "upvote_count": "1"
        },
        {
          "id": 661316,
          "date": "Tue 06 Sep 2022 16:21",
          "username": "SGES",
          "content": "ADE - My opinion",
          "upvote_count": "1"
        },
        {
          "id": 658789,
          "date": "Sat 03 Sep 2022 21:55",
          "username": "Rocketeer",
          "content": "Why not ADE",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#916",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building dozens of new workloads by using a variety of AWS services. Each workload will belong to a separate business unit. The company needs to minimize costs as each business unit experiments with ways to innovate. The company also needs to maximize scalability for its security team so that the security team can identify and respond to threats as quickly as possible for all the workloads.<br>Which combination of actions should a solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#916",
          "answers": [
            {
              "choice": "<p>A. Set up a multi-account environment by using AWS Organizations. Organize accounts into the following OUs: Security, Infrastructure, Workloads, and Exception.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up a multi-account environment by using AWS Organizations. Organize accounts into the following SCPs: Security, Infrastructure, Workloads, and Exception.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure AWS Trusted Advisor to invoke an AWS Lambda function to move an AWS account that reaches a predefined budget threshold into the Exception OU. Apply an SCP at the root of the organization with a condition that matches the Exception OU to limit usage to core services, including Amazon EC2, Amazon S3, and Amazon RDS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Budgets alerts to invoke an AWS Lambda function to move an AWS account that reaches a predefined budget threshold into the Exception OU. Apply an SCP to the Exception OU to limit usage to core services, including Amazon EC2, Amazon S3, and Amazon RDS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Turn on Amazon GuardDuty in each account. Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the security team to the topic so that the security team can receive alerts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create a delegated administrator account for Amazon GuardDuty in the organization in AWS Organizations. Create an Amazon Simple Notification Service (Amazon SNS) topic in this account. Subscribe the security team to the topic so that the security team can receive alerts.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 663895,
          "date": "Thu 08 Sep 2022 20:14",
          "username": "AwsBRFanBiden",
          "content": "Not sure but considering F: https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_organizations.htmlYes...An account needs to be dedicated as Delegated Admin for Guard Duty, hence ADF",
          "upvote_count": "73"
        },
        {
          "id": 665280,
          "date": "Sat 10 Sep 2022 11:47",
          "username": "Biden",
          "content": "Yes...An account needs to be dedicated as Delegated Admin for Guard Duty, hence ADF",
          "upvote_count": "3"
        },
        {
          "id": 716084,
          "date": "Fri 11 Nov 2022 14:38",
          "username": "mrgreatness",
          "content": "AD F .. delegated admin can enable GD on the memeber accounts. What we expect the admin to do, go to all accounts an enable GD or just use a delegated admin, makes more sense to me",
          "upvote_count": "1"
        },
        {
          "id": 702208,
          "date": "Sun 23 Oct 2022 15:34",
          "username": "fdoxxx",
          "content": "Regarding D - \\\"Apply an SCP to the Exception OU to limit usage to core services, including Amazon EC2, Amazon S3, and Amazon RDS.\\\" - will eliminate the danger to exceed budget - one can easily make a huge bill on EC2s or RDS only. I don't like the idea of automatization of account movement between OU's - there is not enough info what criteria would be applied here",
          "upvote_count": "1"
        },
        {
          "id": 693548,
          "date": "Thu 13 Oct 2022 05:10",
          "username": "JohnPi",
          "content": "A<br>D https://aws.amazon.com/blogs/mt/smart-budgeting-using-lambda-and-service-catalog/<br>F https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_organizations.html",
          "upvote_count": "1"
        },
        {
          "id": 688836,
          "date": "Fri 07 Oct 2022 19:08",
          "username": "dcdcdc3",
          "content": "ADF<br>D: https://aws.amazon.com/blogs/mt/manage-cost-overruns-part-1/",
          "upvote_count": "1"
        },
        {
          "id": 676121,
          "date": "Thu 22 Sep 2022 14:36",
          "username": "gnandam",
          "content": "A<br>B- SCP is a policy cannot group accounts<br>C- Trusted Adviser can only do assessment and recommendations<br>D <br>E - Guard Duty need delegated admin account<br>F",
          "upvote_count": "4"
        },
        {
          "id": 661816,
          "date": "Wed 07 Sep 2022 03:33",
          "username": "cale",
          "content": "In my opinion, the SCP should be applied to the Exception OU only so D instead of C. ",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#917",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its development and production workloads to a new organization in AWS Organizations. The company has created a separate member account for development and a separate member account for production. Consolidated billing is inked to the management account. In the management account, a solutions architect needs to create an IAM user that can stop or terminate resources in both member accounts.<br>Which solution will meet this requirement?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#917",
          "answers": [
            {
              "choice": "<p>A. Create an IAM user and a cross-account role in the management account. Configure the cross-account role with least privilege access to the member accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM user in each member account. In the management account, create a cross-account role that has least privilege access. Grant the IAM users access to the cross-account role by using a trust policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM user in the management account. In the member accounts, create an IAM group that has least privilege access. Add the IAM user from the management account to each IAM group in the member accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM user in the management account. In the member accounts, create cross-account roles that have least privilege access. Grant the IAM user access to the role by using a trust policy.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 673903,
          "date": "Tue 20 Sep 2022 09:34",
          "username": "pixepe",
          "content": "Answer is D. <br>The member account should create a role which a IAM user from master account will use by AssumeRole API of AWS.<br><br>Also, following note may help.<br>Actually, by default 'OrganizationAccountAccessRole' role (role has admin access) should be created in member accounts that joins by invite (for new account). However, for existing account who wants to join such role needs to be created manually (as it will not be automatically created).<br>Reference: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html",
          "upvote_count": "10"
        },
        {
          "id": 685296,
          "date": "Mon 03 Oct 2022 09:45",
          "username": "JohnPi",
          "content": "D.  Create an IAM user in the management account. In the member accounts, create cross-account roles that have least privilege access. Grant the IAM user access to the role by using a trust policy.",
          "upvote_count": "5"
        },
        {
          "id": 716089,
          "date": "Fri 11 Nov 2022 14:43",
          "username": "mrgreatness",
          "content": "easy 100% D",
          "upvote_count": "1"
        },
        {
          "id": 716086,
          "date": "Fri 11 Nov 2022 14:40",
          "username": "mrgreatnessmrgreatness",
          "content": "if it mentioned the company uses multiple regions then Delegated admin would not be ideal but assuming its all same region DA works for me so final answer ADFignore for wring question",
          "upvote_count": "11"
        },
        {
          "id": 716087,
          "date": "Fri 11 Nov 2022 14:40",
          "username": "mrgreatness",
          "content": "ignore for wring question",
          "upvote_count": "1"
        },
        {
          "id": 714947,
          "date": "Thu 10 Nov 2022 06:46",
          "username": "janvandermerwer",
          "content": "D - seems to be the best option<br>Management account<br>Iam user = allowed to assume into role1<br>Dev Account<br>Role1 = Accept access from management account<br>Allow assume rights from IAMxxx<br>Prod Account <br>Role1 = Accept access from management account<br>Allow assume rights from IAMxxx",
          "upvote_count": "1"
        },
        {
          "id": 676329,
          "date": "Thu 22 Sep 2022 17:52",
          "username": "gnandam",
          "content": "Answer is A - https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html",
          "upvote_count": "1"
        },
        {
          "id": 673348,
          "date": "Mon 19 Sep 2022 15:46",
          "username": "kaparasb333",
          "content": "Why not A?Because you need to create the IAM role (cross-account role) in the member accounts with the resources you are granting access to. The correct answer to this one is D. ",
          "upvote_count": "11"
        },
        {
          "id": 684483,
          "date": "Sat 01 Oct 2022 23:14",
          "username": "sb333",
          "content": "Because you need to create the IAM role (cross-account role) in the member accounts with the resources you are granting access to. The correct answer to this one is D. ",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#918",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online magazine will launch its latest edition this month. This edition will be the first to be distributed globally. The magazine's dynamic website currently uses an Application Load Balancer in front of the web tier, a fleet of Amazon EC2 instances for web and application servers, and Amazon Aurora MySQL. Portions of the website include static content and almost all traffic is read-only.<br>The magazine is expecting a significant spike in internet traffic when the new edition is launched. Optimal performance is a top priority for the week following the launch.<br>Which combination of steps should a solutions architect take to reduce system response times for a global audience? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: DE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#918",
          "answers": [
            {
              "choice": "<p>A. Use logical cross-Region replication to replicate the Aurora MySQL database to a secondary Region. Replace the web servers with Amazon S3. Deploy S3 buckets in cross-Region replication mode.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Ensure the web and application tiers are each in Auto Scaling groups. Introduce an AWS Direct Connect connection. Deploy the web and application tiers in Regions across the world.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database from Amazon Aurora to Amazon RDS for MySQL. Ensure all three of the application tiers ג€\" web, application, and database ג€\" are in private subnets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Aurora global database for physical cross-Region replication. Use Amazon S3 with cross-Region replication for static content and resources. Deploy the web and application tiers in Regions across the world.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Introduce Amazon Route 53 with latency-based routing and Amazon CloudFront distributions. Ensure the web and application tiers are each in Auto Scaling groups.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 661831,
          "date": "Wed 07 Sep 2022 03:54",
          "username": "caleBiden",
          "content": "I also choose D, E. Clue is Aurora Global DB, hence D,E",
          "upvote_count": "82"
        },
        {
          "id": 665293,
          "date": "Sat 10 Sep 2022 12:02",
          "username": "Biden",
          "content": "Clue is Aurora Global DB, hence D,E",
          "upvote_count": "2"
        },
        {
          "id": 656680,
          "date": "Thu 01 Sep 2022 23:18",
          "username": "badimpact",
          "content": "i'll go with D,E",
          "upvote_count": "5"
        },
        {
          "id": 710043,
          "date": "Wed 02 Nov 2022 21:12",
          "username": "Ni_yot",
          "content": "D and E for sure",
          "upvote_count": "1"
        },
        {
          "id": 702252,
          "date": "Sun 23 Oct 2022 16:24",
          "username": "fdoxxx",
          "content": "I will go for D & E",
          "upvote_count": "1"
        },
        {
          "id": 672838,
          "date": "Mon 19 Sep 2022 03:17",
          "username": "Malluchan",
          "content": "Aurora Global DB is a must & Latency Based routing & Cloud front",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#919",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has introduced a new policy that allows employees to work remotely from their homes if they connect by using a VPN. The company is hosting internal applications with VPCs in multiple AWS accounts. Currently, the applications are accessible from the company's on-premises office network through an AWS Site- to-Site VPN connection. The VPC in the company's main AWS account has peering connections established with VPCs in other AWS accounts.<br>A solutions architect must design a scalable AWS Client VPN solution for employees to use while they work from home.<br>What is the MOST cost-effective solution that meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#919",
          "answers": [
            {
              "choice": "<p>A. Create a Client VPN endpoint in each AWS account. Configure required routing that allows access to internal applications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Client VPN endpoint in the main AWS account. Configure required routing that allows access to internal applications.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Client VPN endpoint in the main AWS account. Provision a transit gateway that is connected to each AWS account. Configure required routing that allows access to internal applications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a Client VPN endpoint in the main AWS account. Establish connectivity between the Client VPN endpoint and the AWS Site-to-Site VPN.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 674170,
          "date": "Tue 20 Sep 2022 14:51",
          "username": "pinhead900pek77sb333sb333",
          "content": "but Edge to edge routing through a VPN connection doesnt work on aws: https://docs.aws.amazon.com/vpc/latest/peering/invalid-peering-configurations.html<br>TGW would be a must in this caeIf VPC A has a VPN connection to a corporate network, resources in VPC B can't use the VPN connection to communicate with the corporate network.<br><br>this question mentioned: from the company's on-premises office network through an AWS Site- to-Site VPN connection.<br><br>I think fromon-premisesto VPC B is ok... accordinghttps://docs.aws.amazon.com/vpn/latest/clientvpn-admin/scenario-peered.htmlThe use cases of that link do not apply to Client VPN, which is an endpoint \\\"inside\\\" a VPC.  The answer is B. https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/scenario-peered.html",
          "upvote_count": "5112"
        },
        {
          "id": 688667,
          "date": "Fri 07 Oct 2022 15:54",
          "username": "pek77",
          "content": "If VPC A has a VPN connection to a corporate network, resources in VPC B can't use the VPN connection to communicate with the corporate network.<br><br>this question mentioned: from the company's on-premises office network through an AWS Site- to-Site VPN connection.<br><br>I think fromon-premisesto VPC B is ok... accordinghttps://docs.aws.amazon.com/vpn/latest/clientvpn-admin/scenario-peered.html",
          "upvote_count": "1"
        },
        {
          "id": 684397,
          "date": "Sat 01 Oct 2022 19:43",
          "username": "sb333sb333",
          "content": "The use cases of that link do not apply to Client VPN, which is an endpoint \\\"inside\\\" a VPC.  The answer is B. https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/scenario-peered.html",
          "upvote_count": "12"
        },
        {
          "id": 684402,
          "date": "Sat 01 Oct 2022 19:49",
          "username": "sb333",
          "content": "https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/scenario-peered.html",
          "upvote_count": "2"
        },
        {
          "id": 690583,
          "date": "Mon 10 Oct 2022 01:37",
          "username": "caveman712",
          "content": "https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/scenario-peered.html",
          "upvote_count": "3"
        },
        {
          "id": 663900,
          "date": "Thu 08 Sep 2022 20:22",
          "username": "AwsBRFan",
          "content": "I agree also since \\\"peering connections established\\\"",
          "upvote_count": "2"
        },
        {
          "id": 661835,
          "date": "Wed 07 Sep 2022 03:56",
          "username": "cale",
          "content": "I agree it's B.  Option C is redundant and not cost-effective.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#920",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's solutions architect is designing a disaster recovery (DR) solution for an application that runs on AWS. The application uses PostgreSQL 11.7 as its database. The company has an RPO of 30 seconds. The solutions architect must design a DR solution with the primary database in the us-east-1 Region and the failover database in the us-west-2 Region.<br>What should the solutions architect do to meet these requirements with minimum application change?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#920",
          "answers": [
            {
              "choice": "<p>A. Migrate the database to Amazon RDS for PostgreSQL in us-east-1. Set up a read replica in us-west-2. Set the managed RPO for the RDS database to 30 seconds.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the database to Amazon RDS for PostgreSQL in us-east-1. Set up a standby replica in an Availability Zone in us-west-2. Set the managed RPO for the RDS database to 30 seconds.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database to an Amazon Aurora PostgreSQL global database with the primary Region as us-east-1 and the secondary Region as us-west-2. Set the managed RPO for the Aurora database to 30 seconds.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to Amazon DynamoDB in us-east-1. Set up global tables with replica tables that are created in us-west-2.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 684377,
          "date": "Sat 01 Oct 2022 19:23",
          "username": "sb333wassb",
          "content": "C<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#:~:text=recovery%20point%20objective-,Setting%20the%20recovery%20point%20objective,-The%20rds.global_db_rpoThanks for the link. Indeed, there is a parameter \\\"rds.global_db_rpo\\\" which can be fixed in Aurora PostgreSQL DB. ",
          "upvote_count": "31"
        },
        {
          "id": 697677,
          "date": "Mon 17 Oct 2022 22:21",
          "username": "wassb",
          "content": "Thanks for the link. Indeed, there is a parameter \\\"rds.global_db_rpo\\\" which can be fixed in Aurora PostgreSQL DB. ",
          "upvote_count": "1"
        },
        {
          "id": 682166,
          "date": "Thu 29 Sep 2022 00:32",
          "username": "vbloise",
          "content": "Here's a description of managed RPO: https://aws.amazon.com/about-aws/whats-new/2020/06/amazon-aurora-postgresql-global-database-supports-managed-recovery-point-objective-RPO/",
          "upvote_count": "1"
        },
        {
          "id": 663904,
          "date": "Thu 08 Sep 2022 20:25",
          "username": "AwsBRFan",
          "content": "C to me \\\"Set the managed RPO for the RDS database to 30 seconds. \\\" this sentence not possible on my opinion",
          "upvote_count": "2"
        },
        {
          "id": 661840,
          "date": "Wed 07 Sep 2022 04:03",
          "username": "cale",
          "content": "I think it is C too. Here is reference: https://aws.amazon.com/about-aws/whats-new/2020/06/amazon-aurora-supports-postgresql-versions-117-1012-and-9617-and-adds-global-database-for-postgresql-117/.",
          "upvote_count": "2"
        },
        {
          "id": 659906,
          "date": "Mon 05 Sep 2022 10:13",
          "username": "SGES",
          "content": "https://aws.amazon.com/blogs/database/managed-planned-failovers-with-amazon-aurora-global-database/",
          "upvote_count": "3"
        },
        {
          "id": 659905,
          "date": "Mon 05 Sep 2022 10:07",
          "username": "SGES",
          "content": "C<br>Managed planned failover. To relocate your primary database cluster to one of the secondary Regions in your Aurora global database, see Managed planned failovers with Amazon Aurora Global Database. With this feature, RPO is 0 (no data loss) and it synchronizes secondary DB clusters with the primary before making any other changes. RTO for this automated process is typically less than that of the manual failover.",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#921",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that designs multiplayer online games wants to expand its user base outside of Europe. The company transfers a significant amount of UDP traffic to keep all the live and interactive sessions of the games. The company has plans for rapid expansion and wants to build its architecture to provide an optimized online experience to its users.<br>Which architecture will meet these requirements with the LOWEST latency for users?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#921",
          "answers": [
            {
              "choice": "<p>A. Set up a Multi-AZ environment in a single AWS Region. Use Amazon CloudFront to cache user sessions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up environments in multiple AWS Regions. Create an accelerator in AWS Global Accelerator, and add endpoints from different Regions to it.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up environments in multiple AWS Regions. Use Amazon Route 53, and select latency-based routing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up a Multi-AZ environment in a single AWS Region. Use AWS Lambda@Edge to update sessions closer to the users.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 666858,
          "date": "Mon 12 Sep 2022 13:21",
          "username": "pixepe",
          "content": "UDP traffic => B <br><br>Q: How is AWS Global Accelerator different from Amazon CloudFront?<br><br>A: AWS Global Accelerator and Amazon CloudFront are separate services that use the AWS global network and its edge locations around the world. CloudFront improves performance for both cacheable content (such as images and videos) and dynamic content (such as API acceleration and dynamic site delivery). Global Accelerator improves performance for a wide range of applications over TCP or UDP by proxying packets at the edge to applications running in one or more AWS Regions. Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover. Both services integrate with AWS Shield for DDoS protection.",
          "upvote_count": "5"
        },
        {
          "id": 714987,
          "date": "Thu 10 Nov 2022 07:58",
          "username": "janvandermerwer",
          "content": "Global accelerator appears to be a better case for non-http specific cases such as gaming over UDP.",
          "upvote_count": "1"
        },
        {
          "id": 687106,
          "date": "Wed 05 Oct 2022 19:50",
          "username": "Ell89",
          "content": "B<br>UDP Traffic = global accelerator",
          "upvote_count": "1"
        },
        {
          "id": 659930,
          "date": "Mon 05 Sep 2022 10:36",
          "username": "SGES",
          "content": "B<br>https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-benefits-of-migrating.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#922",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using a lift-and-shift strategy to migrate applications from several on-premises Windows servers to AWS. The Windows servers will be hosted on<br>Amazon EC2 instances in the us-east-1 Region.<br>The company's security policy allows the installation of migration tools on servers. The migration data must be encrypted in transit and encrypted at rest. The applications are business critical. The company needs to minimize the cutover window and minimize the downtime that results from the migration. The company wants to use Amazon CloudWatch and AWS CloudTrail for monitoring.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#922",
          "answers": [
            {
              "choice": "<p>A. Use AWS Application Migration Service (CloudEndure Migration) to migrate the Windows servers to AWS. Create a Replication Settings template. Install the AWS Replication Agent on the source servers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS DataSync to migrate the Windows servers to AWS. Install the DataSync agent on the source servers. Configure a blueprint for the target servers. Begin the replication process.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Server Migration Service (AWS SMS) to migrate the Windows servers to AWS. Install the SMS Connector on the source servers. Replicate the source servers to AWS. Convert the replicated volumes to AMIs to launch EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Migration Hub to migrate the Windows servers to AWS. Create a project in Migration Hub. Track the progress of server migration by using the built- in dashboard.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 702263,
          "date": "Sun 23 Oct 2022 16:45",
          "username": "fdoxxx",
          "content": "Phisical servers = CloudEndure Migration",
          "upvote_count": "2"
        },
        {
          "id": 697684,
          "date": "Mon 17 Oct 2022 22:33",
          "username": "wassb",
          "content": "From the FAQ : <br>Q: What are the main differences between AWS Application Migration Service and AWS Server Migration Service?<br>Application Migration Service (MGN) utilizes continuous, block-level replication and enables short cutover windows measured in minutes. Server Migration Service (SMS) utilizes incremental, snapshot-based replication and enables cutover windows measured in hours.<br>Application Migration Service is the primary service recommended to migrate your applications to AWS",
          "upvote_count": "4"
        },
        {
          "id": 689795,
          "date": "Sun 09 Oct 2022 02:57",
          "username": "skywalker",
          "content": "A - WS Application Migration Service (CloudEndure Migration)is for physical and virtual host migration and no DB is involve.",
          "upvote_count": "2"
        },
        {
          "id": 663918,
          "date": "Thu 08 Sep 2022 20:37",
          "username": "AwsBRFan",
          "content": "A makes sense: https://aws.amazon.com/application-migration-service/?nc1=h_ls<br>Datasync does not migrate..",
          "upvote_count": "4"
        },
        {
          "id": 662693,
          "date": "Wed 07 Sep 2022 18:24",
          "username": "ArreRaja",
          "content": "A.  https://aws.amazon.com/blogs/mt/accelerating-large-scale-migrations-to-aws-with-cloudendure-migration-factory/<br>B.  Does not Migrate<br>C.  SMS connector is used in a virtualized environment<br>D.  Does not do actual migration. provides blue print, dashborard etc",
          "upvote_count": "3"
        },
        {
          "id": 662469,
          "date": "Wed 07 Sep 2022 14:36",
          "username": "cale",
          "content": "I think it's A. ",
          "upvote_count": "1"
        },
        {
          "id": 658812,
          "date": "Sat 03 Sep 2022 23:43",
          "username": "RocketeerSGES",
          "content": "I think it is A.  https://aws.amazon.com/application-migration-service/A - I agreed on using AWS Application Migration service for this very case scenario migration. It offers low downtime and cutover adapting replication process during migration",
          "upvote_count": "21"
        },
        {
          "id": 659963,
          "date": "Mon 05 Sep 2022 11:04",
          "username": "SGES",
          "content": "A - I agreed on using AWS Application Migration service for this very case scenario migration. It offers low downtime and cutover adapting replication process during migration",
          "upvote_count": "1"
        },
        {
          "id": 655952,
          "date": "Thu 01 Sep 2022 09:50",
          "username": "gnic",
          "content": "I think is B.  Question ask about data migration.<br>MigrationHub is just to plan, not to take action.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#923",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has set up a multi-account AWS environment by using AWS Control Tower. Each AWS account that AWS Control Tower creates has its own VPC. <br>The company is developing an application that will integrate with many microservices. The company has designated a specific account to host the application. The company will deploy the microservices on Amazon EC2 instances and will implement the microservices across multiple AWS accounts.<br>The microservices require a high degree of interconnectivity. The company needs a solution that will give the application the ability to communicate privately with the microservices. The solution also must minimize cost and operational overhead.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#923",
          "answers": [
            {
              "choice": "<p>A. Use AWS VPN CloudHub to connect the application VPC to all the other VPCs. Use a virtual private gateway to provide traffic flow between all the VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create VPC peering connections between the application VPC and all the other VPCs. Update the security groups and route tables to allow traffic flow between all the VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a transit gateway in the application account. Attach the application VPC and all the other VPCs to the transit gateway. Create a transit gateway route table to direct traffic between the VPCs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Share the application VPC with the other AWS accounts by using AWS Resource Access Manager (AWS RAM). Deploy the microservices in the shared VPC. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 664486,
          "date": "Fri 09 Sep 2022 13:57",
          "username": "RocketeerRocketeerRocketeer",
          "content": "I think D - https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.htmlChanging to B.  VPC peering is cheaper than transit gateway.Could not edit my response. If we see from cost perspective, option D is still the cheapest. Hence I am leaning back to D. ",
          "upvote_count": "611"
        },
        {
          "id": 712715,
          "date": "Mon 07 Nov 2022 01:48",
          "username": "RocketeerRocketeer",
          "content": "Changing to B.  VPC peering is cheaper than transit gateway.Could not edit my response. If we see from cost perspective, option D is still the cheapest. Hence I am leaning back to D. ",
          "upvote_count": "11"
        },
        {
          "id": 712733,
          "date": "Mon 07 Nov 2022 02:13",
          "username": "Rocketeer",
          "content": "Could not edit my response. If we see from cost perspective, option D is still the cheapest. Hence I am leaning back to D. ",
          "upvote_count": "1"
        },
        {
          "id": 663924,
          "date": "Thu 08 Sep 2022 20:47",
          "username": "AwsBRFan",
          "content": "Maybe C - \\\"company will deploy the microservices on Amazon EC2 instances and will implement the microservices across ***multiple*** AWS accounts\\\"",
          "upvote_count": "5"
        },
        {
          "id": 734107,
          "date": "Sat 03 Dec 2022 00:12",
          "username": "SureNot",
          "content": "The microservices require a high degree of interconnectivity<br>C - fits well<br>B - VPC Peering is not transitive <br>D - you can't share VPC, only subnets",
          "upvote_count": "1"
        },
        {
          "id": 727080,
          "date": "Fri 25 Nov 2022 22:09",
          "username": "SureNot",
          "content": "Why not B???<br>The cheap and simple option",
          "upvote_count": "1"
        },
        {
          "id": 717391,
          "date": "Sun 13 Nov 2022 16:12",
          "username": "Koloseum198020",
          "content": "https://aws.amazon.com/blogs/architecture/using-vpc-sharing-for-a-cost-effective-multi-account-microservice-architecture/",
          "upvote_count": "1"
        },
        {
          "id": 716227,
          "date": "Fri 11 Nov 2022 18:05",
          "username": "alnadan",
          "content": "D<br>Please read this: https://aws.amazon.com/blogs/architecture/using-vpc-sharing-for-a-cost-effective-multi-account-microservice-architecture/",
          "upvote_count": "1"
        },
        {
          "id": 716097,
          "date": "Fri 11 Nov 2022 14:51",
          "username": "mrgreatness",
          "content": "I'm going D because there is an AWS blog about this and alot of exam questions are formed from blogs written by SA.  D works and is cheaper option. So will go for D",
          "upvote_count": "1"
        },
        {
          "id": 714055,
          "date": "Tue 08 Nov 2022 20:05",
          "username": "AjayPrajapati",
          "content": "C make sense because ton of account just need to connect to one App VPC.  here the App VCP can become transit VPC",
          "upvote_count": "1"
        },
        {
          "id": 710067,
          "date": "Wed 02 Nov 2022 21:51",
          "username": "Ni_yot",
          "content": "Am going for D on this one. the thing is that C and D are options that can be used but in order to achieve minimal overhead and efficiency D fits best",
          "upvote_count": "1"
        },
        {
          "id": 708069,
          "date": "Sun 30 Oct 2022 23:22",
          "username": "Tokyo344",
          "content": "I think C, because the question says each AWS account will have its own VPC. <br><br>It looks like the basis of this questions is pulled from this link: https://aws.amazon.com/blogs/architecture/using-vpc-sharing-for-a-cost-effective-multi-account-microservice-architecture/<br><br>It seems like both C and D are viable solutions, depending on the use case. <br><br>Transit Gateway is used when = For higher number of VPC interconnections, we recommend AWS Transit Gateway for better manageability of connections and routing through a centralized resource. However, based on the amount of traffic this can introduce significant costs to your architecture.<br><br>RAM=You can deploy the entire application, including the individual microservices, into a single shared VPC.  This is while still allowing individual microservice teams control over their AWS resources deployed in that VPC. ",
          "upvote_count": "1"
        },
        {
          "id": 705280,
          "date": "Thu 27 Oct 2022 08:14",
          "username": "ToanVN1988",
          "content": "D because of more cost effective than C",
          "upvote_count": "1"
        },
        {
          "id": 697696,
          "date": "Mon 17 Oct 2022 23:04",
          "username": "wassb",
          "content": "You cannot share a VPC but subnets of the VPC.  i will go for C",
          "upvote_count": "4"
        },
        {
          "id": 693344,
          "date": "Wed 12 Oct 2022 21:26",
          "username": "gnandam",
          "content": "D - You can share your VPCs to leverage the implicit routing within a VPC for applications that require a high degree of interconnectivity and are within the same trust boundaries.",
          "upvote_count": "1"
        },
        {
          "id": 688663,
          "date": "Fri 07 Oct 2022 15:35",
          "username": "pek77",
          "content": "C!!<br><br>https://aws.amazon.com/cn/blogs/networking-and-content-delivery/vpc-sharing-a-new-approach-to-multiple-accounts-and-vpc-management/<br><br>One thing that remains a constant, VPCs are always per account. It means that networks have to be partitioned and each new account had to have its own VPC in every Region. Having a segregated network means that customers now need a way to connect from one VPC to another. To do this, we built VPC Peering. It does the job when you have a few VPCs, but some of our customers have hundreds and even thousands of VPCs. Also, connectivity back to your own data center, for hybrid environments, increases in complexity with each new VPC.  We recently introduced AWS Transit Gateway to solve this.",
          "upvote_count": "2"
        },
        {
          "id": 686709,
          "date": "Wed 05 Oct 2022 10:21",
          "username": "firstabed",
          "content": "D<br>https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html",
          "upvote_count": "3"
        },
        {
          "id": 685312,
          "date": "Mon 03 Oct 2022 10:11",
          "username": "JohnPiJohnPi",
          "content": "You must enable resource sharing from the management account for your organization.B) Peering can be an option - but we do not know how many VPC are involved. Peering is ok for a small number<br>C) Transitive can be an option but it will cost some money<br>D) Sharing can be an option for applications that require a high degree of interconnectivity and are within the same trust boundaries<br>The problem is too vague. I will choose D)<br>https://aws.amazon.com/blogs/architecture/using-vpc-sharing-for-a-cost-effective-multi-account-microservice-architecture/",
          "upvote_count": "42"
        },
        {
          "id": 693612,
          "date": "Thu 13 Oct 2022 06:43",
          "username": "JohnPi",
          "content": "B) Peering can be an option - but we do not know how many VPC are involved. Peering is ok for a small number<br>C) Transitive can be an option but it will cost some money<br>D) Sharing can be an option for applications that require a high degree of interconnectivity and are within the same trust boundaries<br>The problem is too vague. I will choose D)<br>https://aws.amazon.com/blogs/architecture/using-vpc-sharing-for-a-cost-effective-multi-account-microservice-architecture/",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#924",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an image-processing service in the AWS Cloud. Users upload images to an Amazon S3 bucket for processing. When an image is uploaded to the S3 bucket, several microservices that are based on AWS Lambda functions need to perform different processing tasks on the image. Each task's processing must start immediately after an image is uploaded.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#924",
          "answers": [
            {
              "choice": "<p>A. Configure each microservice to create an S3 event notification with its Lambda function as the destination.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS CloudTrail event logging for Amazon S3. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with an event pattern that matches PutObject API calls through CloudTrail. Register each microservice's Lambda function as a target for the rule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with an event pattern for PutObject events in S3 event notifications. Configure each microservice to register an Amazon Simple Queue Service (Amazon SQS) queue as a target for the rule. Invoke the microservice's Lambda function from the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an S3 event notification with an Amazon Simple Notification Service (Amazon SNS) topic as the destination. Create an SNS subscription for each microservice's Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 693616,
          "date": "Thu 13 Oct 2022 06:48",
          "username": "JohnPi",
          "content": "D.  publish-subscriber",
          "upvote_count": "1"
        },
        {
          "id": 682153,
          "date": "Thu 29 Sep 2022 00:05",
          "username": "vbloise",
          "content": "It's D because all the lambdas need to start \\\"immediately after an image is uploaded\\\" Which means they all have to start in parallel. This is a classic SNS fan-out pattern.",
          "upvote_count": "4"
        },
        {
          "id": 675425,
          "date": "Wed 21 Sep 2022 20:25",
          "username": "astalavista1",
          "content": "D - Fan out <br>C - If multiple Lambda needs to pick up and SQS is used, the first lambda that picks up will remove the message from the queue preventing other Lambdas from picking up the message.",
          "upvote_count": "2"
        },
        {
          "id": 673361,
          "date": "Mon 19 Sep 2022 16:02",
          "username": "kapara",
          "content": "D - Fanout to multiply lambda.",
          "upvote_count": "4"
        },
        {
          "id": 665821,
          "date": "Sun 11 Sep 2022 07:02",
          "username": "ElFaramawi",
          "content": "I would go for D.  SNS is using publisher/subscriber model which match the requirement of this question. We need to have multiple lambda functions act as subscribers to the PutObject action and each does its own functionality.",
          "upvote_count": "2"
        },
        {
          "id": 663930,
          "date": "Thu 08 Sep 2022 20:53",
          "username": "AwsBRFan",
          "content": "\\\"several microservices that are based on AWS Lambda functions\\\" sounds to me that SQS will help orchestrate it",
          "upvote_count": "3"
        },
        {
          "id": 663427,
          "date": "Thu 08 Sep 2022 11:28",
          "username": "li_qiyang",
          "content": "C<br>Why do we need SNS in D,Is there anyone need to be informed when object put in?",
          "upvote_count": "2"
        },
        {
          "id": 660009,
          "date": "Mon 05 Sep 2022 11:51",
          "username": "SGES",
          "content": "D<br>Keyword for going for option D - Each task's processing must start immediately after an image is uploaded",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#925",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses multiple AWS accounts in a single AWS Region. A solutions architect is designing a solution to consolidate logs generated by Elastic Load<br>Balancers (ELBs) in the AppDev, AppTest, and AppProd accounts. The logs should be stored in an existing Amazon S3 bucket named s3-elb-logs in the central<br>AWS account. The central account is used for log consolidation only and does not have ELBs deployed. ELB logs must be encrypted at rest.<br>Which combination of steps should the solutions architect take to build the solution? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#925",
          "answers": [
            {
              "choice": "<p>A. Update the S3 bucket policy for the s3-elb-logs bucket to allow the s3:PutBucketLogging action for the central AWS account ID. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the S3 bucket policy for the s3-elb-logs bucket to allow the s3:PutObject and s3:DeleteObject actions for the AppDev, AppTest, and AppProd account IDs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the S3 bucket policy for the s3-elb-logs bucket to allow the s3:PutObject action for the AppDev, AppTest, and AppProd account IDs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable access logging for the ELBs. Set the S3 location to the s3-elb-logs bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable Amazon S3 default encryption using server-side encryption with S3 managed encryption keys (SSE-S3) for the s3-elb-logs S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 655959,
          "date": "Thu 01 Sep 2022 10:00",
          "username": "gnic",
          "content": "CE<br>E is for encryption",
          "upvote_count": "6"
        },
        {
          "id": 714838,
          "date": "Thu 10 Nov 2022 02:13",
          "username": "sjpd10sjpd10",
          "content": "CE<br><br>The bucket is already owned by 'central' account, so the perms are for the three teams only (Option B)<br><br>Opt E is the only choice for encryption and works just fine.Sorry, typo. I meant Option C.  The 'Delete' option in OptionB is not required.",
          "upvote_count": "11"
        },
        {
          "id": 714840,
          "date": "Thu 10 Nov 2022 02:14",
          "username": "sjpd10",
          "content": "Sorry, typo. I meant Option C.  The 'Delete' option in OptionB is not required.",
          "upvote_count": "1"
        },
        {
          "id": 702278,
          "date": "Sun 23 Oct 2022 17:14",
          "username": "fdoxxx",
          "content": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html",
          "upvote_count": "1"
        },
        {
          "id": 699965,
          "date": "Thu 20 Oct 2022 15:19",
          "username": "Blair77",
          "content": "C & E right",
          "upvote_count": "1"
        },
        {
          "id": 698690,
          "date": "Wed 19 Oct 2022 07:34",
          "username": "sodasu",
          "content": "C&E right",
          "upvote_count": "1"
        },
        {
          "id": 691775,
          "date": "Tue 11 Oct 2022 07:36",
          "username": "skywalker",
          "content": "CE <br>Ticky as there is no Organization involve and thus D is out...",
          "upvote_count": "1"
        },
        {
          "id": 663935,
          "date": "Thu 08 Sep 2022 20:59",
          "username": "AwsBRFanBidenfdoxxxfdoxxx",
          "content": "C and E<br>(Choose 2 options) looks like examtopics did a mistake with this oneD is also needed in addition to C & E.  just assume D is already enabled hence C,EBiden is right! We would rather assume that (C) is already done: \\\"The central account is used for log consolidation only and does not have ELBs deployed. ELB logs must be encrypted at rest.\\\" But for sure we need to fulfill D to have ELBs logs collected. I will go for D, EAccess logs is an optional feature of Elastic Load Balancing that is disabled by default. After you enable access logs for your load balancer, Elastic Load Balancing captures - https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html<br>the logs and stores them in the Amazon S3 bucket that you specify as compressed files. You can disable access logs at any time.",
          "upvote_count": "3411"
        },
        {
          "id": 665318,
          "date": "Sat 10 Sep 2022 12:32",
          "username": "Bidenfdoxxxfdoxxx",
          "content": "D is also needed in addition to C & E.  just assume D is already enabled hence C,EBiden is right! We would rather assume that (C) is already done: \\\"The central account is used for log consolidation only and does not have ELBs deployed. ELB logs must be encrypted at rest.\\\" But for sure we need to fulfill D to have ELBs logs collected. I will go for D, EAccess logs is an optional feature of Elastic Load Balancing that is disabled by default. After you enable access logs for your load balancer, Elastic Load Balancing captures - https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html<br>the logs and stores them in the Amazon S3 bucket that you specify as compressed files. You can disable access logs at any time.",
          "upvote_count": "411"
        },
        {
          "id": 702270,
          "date": "Sun 23 Oct 2022 17:04",
          "username": "fdoxxx",
          "content": "Biden is right! We would rather assume that (C) is already done: \\\"The central account is used for log consolidation only and does not have ELBs deployed. ELB logs must be encrypted at rest.\\\" But for sure we need to fulfill D to have ELBs logs collected. I will go for D, E",
          "upvote_count": "1"
        },
        {
          "id": 702277,
          "date": "Sun 23 Oct 2022 17:13",
          "username": "fdoxxx",
          "content": "Access logs is an optional feature of Elastic Load Balancing that is disabled by default. After you enable access logs for your load balancer, Elastic Load Balancing captures - https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html<br>the logs and stores them in the Amazon S3 bucket that you specify as compressed files. You can disable access logs at any time.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#926",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A medical company is running a REST API on a set of Amazon EC2 instances. The EC2 instances run in an Auto Scaling group behind an Application Load<br>Balancer (ALB). The ALB runs in three public subnets, and the EC2 instances run in three private subnets. The company has deployed an Amazon CloudFront distribution that has the ALB as the only origin.<br>Which solution should a solutions architect recommend to enhance the origin security?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#926",
          "answers": [
            {
              "choice": "<p>A. Store a random string in AWS Secrets Manager. Create an AWS Lambda function for automatic secret rotation. Configure CloudFront to inject the random string as a custom HTTP header for the origin request. Create an AWS WAF web ACL rule with a string match rule for the custom header. Associate the web ACL with the ALB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS WAF web ACL rule with an IP match condition of the CloudFront service IP address ranges. Associate the web ACL with the ALB.  Move the ALB into the three private subnets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store a random string in AWS Systems Manager Parameter Store. Configure Parameter Store automatic rotation for the string. Configure CloudFront to inject the random string as a custom HTTP header for the origin request. Inspect the value of the custom HTTP header, and block access in the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS Shield Advanced. Create a security group policy to allow connections from CloudFront service IP address ranges. Add the policy to AWS Shield Advanced, and attach the policy to the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 664301,
          "date": "Fri 09 Sep 2022 08:29",
          "username": "pixepe",
          "content": "Answer is A. <br><br>Competition is btn A & C. <br><br>C is INCORRECT - Since auto rotation is (natively) NOT supported in Parameter store. <br>From AWS, \\\"However, Parameter Store doesn't provide automatic rotation services for stored secrets. Instead, Parameter Store enables you to store your secret in Secrets Manager, and then reference the secret as a Parameter Store parameter.\\\"",
          "upvote_count": "8"
        },
        {
          "id": 714064,
          "date": "Tue 08 Nov 2022 20:17",
          "username": "AjayPrajapati",
          "content": "A is correct<br>B - not correct since it is asking ALB to move to private subnet without any way to communicate from cloud front to ALB<br>Parameter store can not rotate",
          "upvote_count": "1"
        },
        {
          "id": 708378,
          "date": "Mon 31 Oct 2022 12:36",
          "username": "alxjandroleivaByrney",
          "content": "Create an AWS Lambda function for automatic secret rotation?<br>This is a joke.<br>B, https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/LocationsOfEdgeServers.htmlNo joke:https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html#rotate-secrets_how<br><br>Using B would allow any Cloudfront distribution to access the API, not just the customers.",
          "upvote_count": "11"
        },
        {
          "id": 714414,
          "date": "Wed 09 Nov 2022 10:08",
          "username": "Byrney",
          "content": "No joke:https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html#rotate-secrets_how<br><br>Using B would allow any Cloudfront distribution to access the API, not just the customers.",
          "upvote_count": "1"
        },
        {
          "id": 701397,
          "date": "Sat 22 Oct 2022 09:41",
          "username": "tomosabc1tomosabc1",
          "content": "I don't really understand why B is wrong when it can achieve the same effect as option A, that is, preventing ALB from being accessing directly(meaning users have to access ALB via CloudFront.)<br><br>Why is B wrong?<br>Is it because that the IP address ranges for CloudFront service is dynamic, and that CloudFront prefix list should be used instead?\\\"The CloudFront managed prefix list contains the IP address ranges of all of CloudFront's globally distributed origin-facing servers. If your origin is hosted on AWS and protected by an Amazon VPC security group, you can use the CloudFront managed prefix list to allow inbound traffic to your origin only from CloudFront's origin-facing servers, preventing any non-CloudFront traffic from reaching your origin. CloudFront maintains the managed prefix list so it's always up to date with the IP addresses of all of CloudFront's global origin-facing servers. With the CloudFront managed prefix list, you don't need to read or maintain a list of IP address ranges yourself.<br>\\\"<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/LocationsOfEdgeServers.html",
          "upvote_count": "13"
        },
        {
          "id": 701398,
          "date": "Sat 22 Oct 2022 09:44",
          "username": "tomosabc1",
          "content": "\\\"The CloudFront managed prefix list contains the IP address ranges of all of CloudFront's globally distributed origin-facing servers. If your origin is hosted on AWS and protected by an Amazon VPC security group, you can use the CloudFront managed prefix list to allow inbound traffic to your origin only from CloudFront's origin-facing servers, preventing any non-CloudFront traffic from reaching your origin. CloudFront maintains the managed prefix list so it's always up to date with the IP addresses of all of CloudFront's global origin-facing servers. With the CloudFront managed prefix list, you don't need to read or maintain a list of IP address ranges yourself.<br>\\\"<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/LocationsOfEdgeServers.html",
          "upvote_count": "3"
        },
        {
          "id": 686776,
          "date": "Wed 05 Oct 2022 12:36",
          "username": "JayF88",
          "content": "A definitely",
          "upvote_count": "1"
        },
        {
          "id": 664141,
          "date": "Fri 09 Sep 2022 04:04",
          "username": "AwsBRFan",
          "content": "I agree A = https://aws.amazon.com/blogs/security/how-to-enhance-amazon-cloudfront-origin-security-with-aws-waf-and-aws-secrets-manager/",
          "upvote_count": "4"
        },
        {
          "id": 662713,
          "date": "Wed 07 Sep 2022 18:45",
          "username": "ArreRaja",
          "content": "A.  https://aws.amazon.com/blogs/security/how-to-enhance-amazon-cloudfront-origin-security-with-aws-waf-and-aws-secrets-manager/",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#927",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has automated the nightly retraining of its machine learning models by using AWS Step Functions. The workflow consists of multiple steps that use<br>AWS Lambda. Each step can fail for various reasons, and any failure causes a failure of the overall workflow.<br>A review reveals that the retraining has failed multiple nights in a row without the company noticing the failure. A solutions architect needs to improve the workflow so that notifications are sent for all types of failures in the retraining process.<br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ABC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#927",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Simple Notification Service (Amazon SNS) topic with a subscription of type \"Email\" that targets the team's mailing list.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a task named \"Email\" that forwards the input arguments to the SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add a Catch field to all Task, Map, and Parallel states that have a statement of \"ErrorEquals\": [ \"States.ALL\" ] and \"Next\": \"Email\".<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a new email address to Amazon Simple Email Service (Amazon SES). Verify the email address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a task named \"Email\" that forwards the input arguments to the SES email address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Add a Catch field to all Task, Map, and Parallel states that have a statement of \"ErrorEquals\": [ \"States.Runtime\" ] and \"Next\": \"Email\".<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 715067,
          "date": "Thu 10 Nov 2022 10:00",
          "username": "janvandermerwer",
          "content": "Process of elimination <br><br>D - No -SES doesn't seem a good fit for this use case<br>E - No - Same as above<br>F - No - May miss failures",
          "upvote_count": "1"
        },
        {
          "id": 693642,
          "date": "Thu 13 Oct 2022 08:00",
          "username": "JohnPi",
          "content": "https://aws.amazon.com/blogs/developer/handling-errors-retries-and-adding-alerting-to-step-function-state-machine-executions/",
          "upvote_count": "1"
        },
        {
          "id": 682439,
          "date": "Thu 29 Sep 2022 09:27",
          "username": "akash_it",
          "content": "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html",
          "upvote_count": "2"
        },
        {
          "id": 665325,
          "date": "Sat 10 Sep 2022 12:39",
          "username": "Biden",
          "content": "https://dashbird.io/blog/aws-step-functions-error-handling/",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#928",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed its database on an Amazon RDS for MySQL DB instance in the us-east-1 Region. The company needs to make its data available to customers in Europe. The customers in Europe must have access to the same data as customers in the United States (US) and will not tolerate high application latency or stale data. The customers in Europe and the customers in the US need to write to the database. Both groups of customers need to see updates from the other group in real time.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#928",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon Aurora MySQL replica of the RDS for MySQL DB instance. Pause application writes to the RDS DB instance. Promote the Aurora Replica to a standalone DB cluster. Reconfigure the application to use the Aurora database and resume writes. Add eu-west-1 as a secondary Region to the 06 cluster. Enable write forwarding on the DB cluster. Deploy the application in eu-west-1. Configure the application to use the Aurora MySQL endpoint in eu- west-1.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a cross-Region replica in eu-west-1 for the RDS for MySQL DB instance. Configure the replica to replicate write queries back to the primary DB instance. Deploy the application in eu-west-1. Configure the application to use the RDS for MySQL endpoint in eu-west-1.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Copy the most recent snapshot from the RDS for MySQL DB instance to eu-west-1. Create a new RDS for MySQL DB instance in eu-west-1 from the snapshot. Configure MySQL logical replication from us-east-1 to eu-west-1. Enable write forwarding on the DB cluster. Deploy the application in eu-west-1. Configure the application to use the RDS for MySQL endpoint in eu-west-1.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Convert the RDS for MySQL DB instance to an Amazon Aurora MySQL DB cluster. Add eu-west-1 as a secondary Region to the DB cluster. Enable write forwarding on the DB cluster. Deploy the application in eu-west-1. Configure the application to use the Aurora MySQL endpoint in eu-west-1.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 715082,
          "date": "Thu 10 Nov 2022 10:17",
          "username": "janvandermerwer",
          "content": "D seems to be wrong - To \\\"convert\\\"the RDS instance to Aurora, you'll need to restore from a snapshot - OR, deploy a read replica as per question A. https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.RDSMySQL.html",
          "upvote_count": "1"
        },
        {
          "id": 714844,
          "date": "Thu 10 Nov 2022 02:31",
          "username": "sjpd10",
          "content": "Only 'A' will work",
          "upvote_count": "1"
        },
        {
          "id": 708083,
          "date": "Mon 31 Oct 2022 00:05",
          "username": "Tokyo344",
          "content": "I think A<br><br>https://aws.amazon.com/blogs/database/best-practices-for-migrating-rds-for-mysql-databases-to-amazon-aurora/",
          "upvote_count": "1"
        },
        {
          "id": 702290,
          "date": "Sun 23 Oct 2022 17:39",
          "username": "fdoxxxToanVN1988",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.RDSMySQL.Replica.htmlAmazon Aurora MySQL replica of the RDS for MySQL DB instance. How to do that?",
          "upvote_count": "21"
        },
        {
          "id": 705297,
          "date": "Thu 27 Oct 2022 08:37",
          "username": "ToanVN1988",
          "content": "Amazon Aurora MySQL replica of the RDS for MySQL DB instance. How to do that?",
          "upvote_count": "1"
        },
        {
          "id": 702283,
          "date": "Sun 23 Oct 2022 17:27",
          "username": "kharakbeer",
          "content": "Very good answer",
          "upvote_count": "1"
        },
        {
          "id": 689816,
          "date": "Sun 09 Oct 2022 03:25",
          "username": "skywalker",
          "content": "I am confuse if answer is A. . coz ..<br><br>Create an Amazon Aurora MySQL replica of the RDS for MySQL DB instance(At this stage, Aurora should be empty since no migration yet) . Pause application writes to the RDS DB instance. Promote the Aurora Replica to a standalone DB cluster. Reconfigure the application to use the Aurora database and resume writes. ......What happen to the existing data in RDS? No need to migrate?? <br>Cannot beB and C. ... <br><br>D.  wise.. you can convert RDSD to mySQLDB direcly.. but here it didn't mentioned direct conversion..if they mentioned migrate RDS to AuroraDB. .. then the whole statement would be wrong.<br><br>Again.. badlly worded option here.",
          "upvote_count": "1"
        },
        {
          "id": 688810,
          "date": "Fri 07 Oct 2022 18:29",
          "username": "Malluchan",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.RDSMySQL.Replica.html",
          "upvote_count": "3"
        },
        {
          "id": 685328,
          "date": "Mon 03 Oct 2022 10:55",
          "username": "JohnPiJohnPiBilal_M",
          "content": "A<br>You cannot convert RDS to Aurora, you need to create an Aurora Replica first and promote to a standalone DB clusterhttps://aws.amazon.com/getting-started/hands-on/migrate-rdsmysql-to-auroramysql/you should not sit the exam, if that is what you think",
          "upvote_count": "212"
        },
        {
          "id": 702306,
          "date": "Sun 23 Oct 2022 18:08",
          "username": "JohnPi",
          "content": "https://aws.amazon.com/getting-started/hands-on/migrate-rdsmysql-to-auroramysql/",
          "upvote_count": "1"
        },
        {
          "id": 697447,
          "date": "Mon 17 Oct 2022 15:54",
          "username": "Bilal_M",
          "content": "you should not sit the exam, if that is what you think",
          "upvote_count": "2"
        },
        {
          "id": 681305,
          "date": "Wed 28 Sep 2022 01:48",
          "username": "vbloise",
          "content": "It's D: <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-write-forwarding.html",
          "upvote_count": "4"
        },
        {
          "id": 669689,
          "date": "Thu 15 Sep 2022 10:42",
          "username": "Cloudxie",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.RDSMySQL.Replica.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#929",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company operates quick-service restaurants. The restaurants follow a predictable model with high sales traffic for 4 hours daily. Sales traffic is lower outside of those peak hours.<br>The point of sale and management platform is deployed in the AWS Cloud and has a backend that is based on Amazon DynamoDB.  The database table uses provisioned throughput mode with 100,000 RCUs and 80,000 WCUs to match known peak resource consumption.<br>The company wants to reduce its DynamoDB cost and minimize the operational overhead for the IT staff.<br>Which solution meets these requirements MOST cost-effectively?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#929",
          "answers": [
            {
              "choice": "<p>A. Reduce the provisioned RCUs and WCUs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the DynamoDB table to use on-demand capacity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Dynamo DB auto scaling for the table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Purchase 1-year reserved capacity that is sufficient to cover the peak load for 4 hours each day.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 664149,
          "date": "Fri 09 Sep 2022 04:20",
          "username": "AwsBRFan",
          "content": "https://aws.amazon.com/blogs/database/amazon-dynamodb-auto-scaling-performance-and-cost-optimization-at-any-scale/<br>\\\"As you can see, there are compelling reasons to use DynamoDB auto scaling with actively changing traffic. Auto scaling responds quickly and simplifies capacity management, which lowers costs by scaling your table’s provisioned capacity and reducing operational overhead.\\\"",
          "upvote_count": "6"
        },
        {
          "id": 712234,
          "date": "Sun 06 Nov 2022 10:57",
          "username": "Dozer",
          "content": "Why not D? Key is cost-efficient with predictible usage. You can reserve RCU and WCU: https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-reservation-models/amazon-dynamodb-reservations.html",
          "upvote_count": "2"
        },
        {
          "id": 708694,
          "date": "Mon 31 Oct 2022 20:43",
          "username": "Blair77",
          "content": "CCC Auto Scaling !",
          "upvote_count": "1"
        },
        {
          "id": 702293,
          "date": "Sun 23 Oct 2022 17:43",
          "username": "fdoxxx",
          "content": "AutoScaling will adjust RCU and WCU to current needs - not only 4h peak",
          "upvote_count": "1"
        },
        {
          "id": 701008,
          "date": "Fri 21 Oct 2022 16:57",
          "username": "sjpd10sjpd10",
          "content": "The Q says 'predictable model with high sales traffic for 4 hours daily' and 'meets these requirements MOST cost-effectively' - how can it be auto-scaling ? <br><br>With On-demand, DynamoDB would scale when needed (4 hr window). With auto-scaling, aren't you billed for the provisioned capacity ?<br><br>I think the answer is 'B''C'<br><br>Auto-scaling adjusts RCU & WCU based on the requirement for those 4 hrs of PEAK.",
          "upvote_count": "21"
        },
        {
          "id": 714856,
          "date": "Thu 10 Nov 2022 02:49",
          "username": "sjpd10",
          "content": "'C'<br><br>Auto-scaling adjusts RCU & WCU based on the requirement for those 4 hrs of PEAK.",
          "upvote_count": "1"
        },
        {
          "id": 655127,
          "date": "Wed 31 Aug 2022 15:36",
          "username": "aloha123",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.Console.html",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#930",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using AWS Organizations to manage multiple accounts. Due to regulatory requirements, the company wants to restrict specific member accounts to certain AWS Regions, where they are permitted to deploy resources. The resources in the accounts must be tagged, enforced based on a group standard, and centrally managed with minimal configuration.<br>What should a solutions architect do to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#930",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Config rule in the specific member accounts to limit Regions and apply a tag policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. From the AWS Billing and Cost Management console, in the management account, disable Regions for the specific member accounts and apply a tag policy on the root.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Associate the specific member accounts with the root. Apply a tag policy and an SCP using conditions to limit Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Associate the specific member accounts with a new OU. Apply a tag policy and an SCP using conditions to limit Regions.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 660117,
          "date": "Mon 05 Sep 2022 13:25",
          "username": "SGESjoancarles",
          "content": "D - Agreed putting those member accounts with OU then use tagging policy and SCP based conditions to achieve required compliance.Link for an example:<br>https://aws.amazon.com/es/blogs/mt/implement-aws-resource-tagging-strategy-using-aws-tag-policies-and-service-control-policies-scps/",
          "upvote_count": "71"
        },
        {
          "id": 685512,
          "date": "Mon 03 Oct 2022 14:13",
          "username": "joancarles",
          "content": "Link for an example:<br>https://aws.amazon.com/es/blogs/mt/implement-aws-resource-tagging-strategy-using-aws-tag-policies-and-service-control-policies-scps/",
          "upvote_count": "1"
        },
        {
          "id": 682447,
          "date": "Thu 29 Sep 2022 09:38",
          "username": "akash_it",
          "content": "Agree with comments",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#931",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A developer reports receiving an Error 403: Access Denied message when they try to download an object from an Amazon S3 bucket. The S3 bucket is accessed using an S3 endpoint inside a VPC, and is encrypted with an AWS KMS key. A solutions architect has verified that the developer is assuming the correct IAM role in the account that allows the object to be downloaded. The S3 bucket policy and the NACL are also valid.<br>Which additional step should the solutions architect take to troubleshoot this issue?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#931",
          "answers": [
            {
              "choice": "<p>A. Ensure that blocking all public access has not been enabled in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Verify that the IAM role has permission to decrypt the referenced KMS key.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Verify that the IAM role has the correct trust relationship configured.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Check that local firewall rules are not preventing access to the S3 endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 658296,
          "date": "Sat 03 Sep 2022 11:47",
          "username": "SGES",
          "content": "Answer is B<br>The objects in the bucket are encrypted therefore IAM role must have permission for decryption",
          "upvote_count": "9"
        },
        {
          "id": 711753,
          "date": "Sat 05 Nov 2022 13:54",
          "username": "Ni_yot",
          "content": "B it is",
          "upvote_count": "1"
        },
        {
          "id": 664894,
          "date": "Fri 09 Sep 2022 20:58",
          "username": "AwsBRFan",
          "content": "B also here",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#932",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company deploys a new web application. As part of the setup, the company configures AWS WAF to log to Amazon S3 through Amazon Kinesis Data Firehose.<br>The company develops an Amazon Athena query that runs once daily to return AWS WAF log data from the previous 24 hours. The volume of daily logs is constant. However, over time, the same query is taking more time to run.<br>A solutions architect needs to design a solution to prevent the query time from continuing to increase. The solution must minimize operational overhead.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#932",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function that consolidates each days AWS WAF logs into one log file.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Reduce the amount of data scanned by configuring AWS WAF to send logs to a different S3 bucket each day.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the Kinesis Data Firehose configuration to partition the data in Amazon S3 by date and time. Create external tables for Amazon Redshift. Configure Amazon Redshift Spectrum to query the data source.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the Kinesis Data Firehose configuration and Athena table definition to partition the data by date and time. Change the Athena query to view the relevant partitions.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 664896,
          "date": "Fri 09 Sep 2022 21:03",
          "username": "AwsBRFan",
          "content": "D https://docs.aws.amazon.com/athena/latest/ug/partition-projection-kinesis-firehose-example.html",
          "upvote_count": "3"
        },
        {
          "id": 662542,
          "date": "Wed 07 Sep 2022 15:34",
          "username": "cale",
          "content": "It is D.  The solution is to partition the data.",
          "upvote_count": "2"
        },
        {
          "id": 658307,
          "date": "Sat 03 Sep 2022 11:54",
          "username": "SGES",
          "content": "I will go for D<br>Key word - minimum operational overhead",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#933",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company manages an on-premises JavaScript front-end web application. The application is hosted on two servers secured with a corporate Active Directory.<br>The application calls a set of Java-based microservices on an application server and stores data in a clustered MySQL database. The application is heavily used during the day on weekdays. It is lightly used during the evenings and weekends.<br>Daytime traffic to the application has increased rapidly, and reliability has diminished as a result. The company wants to migrate the application to AWS with a solution that eliminates the need for server maintenance, with an API to securely connect to the microservices.<br>Which combination of actions will meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#933",
          "answers": [
            {
              "choice": "<p>A. Host the web application on Amazon S3. Use Amazon Cognito identity pools (federated identities) with SAML for authentication and authorization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Host the web application on Amazon EC2 with Auto Scaling. Use Amazon Cognito federation and Login with Amazon for authentication and authorization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an API layer with Amazon API Gateway. Rehost the microservices on AWS Fargate containers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an API layer with Amazon API Gateway. Rehost the microservices on Amazon Elastic Container Service (Amazon ECS) containers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Replatform the database to Amazon RDS for MySQL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Replatform the database to Amazon Aurora MySQL Serverless.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 662555,
          "date": "Wed 07 Sep 2022 15:43",
          "username": "calecale",
          "content": "A, C, F looks right as these are all using managed AWS services i.e. S3, Fargate, Aurora (MySQL).I meant to say Aurora MySQL Serverless.",
          "upvote_count": "92"
        },
        {
          "id": 662556,
          "date": "Wed 07 Sep 2022 15:45",
          "username": "cale",
          "content": "I meant to say Aurora MySQL Serverless.",
          "upvote_count": "2"
        },
        {
          "id": 711766,
          "date": "Sat 05 Nov 2022 14:13",
          "username": "Ni_yot",
          "content": "Yes ACF is right.",
          "upvote_count": "1"
        },
        {
          "id": 674241,
          "date": "Tue 20 Sep 2022 16:09",
          "username": "redipa",
          "content": "All managed services",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#934",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a data-intensive application on AWS. The application runs on a cluster of hundreds of Amazon EC2 instances. A shared file system also runs on several EC2 instances that store 200 TB of data. The application reads and modifies the data on the shared file system and generates a report. The job runs once monthly, reads a subset of the files from the shared file system, and takes about 72 hours to complete. The compute instances scale in an Auto Scaling group, but the instances that host the shared the system run continuously. The compute and storage instances are all in the same AWS Region.<br>A solutions architect needs to reduce costs by replacing the shared file system instances. The file system must provide high performance access to the needed data for the duration of the 72-hour run.<br>Which solution will provide the LARGEST overall cost reduction while meeting these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#934",
          "answers": [
            {
              "choice": "<p>A. Migrate the data from the existing shared file system to an Amazon S3 bucket that uses the S3 Intelligent-Tiering storage class. Before the job runs each month, use Amazon FSx for Lustre to create a new file system with the data from Amazon S3 by using lazy loading. Use the new file system as the shared storage for the duration of the job. Delete the file system when the job is complete.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the data from the existing shared file system to a large Amazon Elastic Block Store (Amazon EBS) volume with Multi-Attach enabled. Attach the EBS volume to each of the instances by using a user data script in the Auto Scaling group launch template. Use the EBS volume as the shared storage for the duration of the job. Detach the EBS volume when the job is complete.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the data from the existing shared file system to an Amazon S3 bucket that uses the S3 Standard storage class. Before the job runs each month, use Amazon FSx for Lustre to create a new file system with the data from Amazon S3 by using batch loading. Use the new file system as the shared storage for the duration of the job. Delete the file system when the job is complete.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the data from the existing shared file system to an Amazon S3 bucket. Before the job runs each month, use AWS Storage Gateway to create a file gateway with the data from Amazon S3. Use the file gateway as the shared storage for the job. Delete the file gateway when the job is complete.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 734111,
          "date": "Sat 03 Dec 2022 00:29",
          "username": "SureNot",
          "content": "The file system must provide high performance access",
          "upvote_count": "1"
        },
        {
          "id": 714866,
          "date": "Thu 10 Nov 2022 03:04",
          "username": "sjpd10",
          "content": "'A'<br><br>Explained well here:<br>https://aws.amazon.com/blogs/storage/new-enhancements-for-moving-data-between-amazon-fsx-for-lustre-and-amazon-s3/",
          "upvote_count": "1"
        },
        {
          "id": 691530,
          "date": "Mon 10 Oct 2022 23:57",
          "username": "joanneli77superuser784",
          "content": "Where I can't choose A is \\\"Delete the file system\\\" at the end... wait... don't we need that?the job runs once a month for 72 hours, Why do you need the file system to be up the whole month? the file system will be created again BEFORE the job start.",
          "upvote_count": "11"
        },
        {
          "id": 713429,
          "date": "Tue 08 Nov 2022 03:24",
          "username": "superuser784",
          "content": "the job runs once a month for 72 hours, Why do you need the file system to be up the whole month? the file system will be created again BEFORE the job start.",
          "upvote_count": "1"
        },
        {
          "id": 689836,
          "date": "Sun 09 Oct 2022 03:41",
          "username": "skywalker",
          "content": "There is no mentioned of High Performance Computing with low latency requirement.. thus Amazon FSx for Lustre shouldout..<br><br>Instead another ways to access S3 object is via File Storage Gateway. Just need to install a file storage gateway and points to existing S3 storage... present either NFS or SMB to appl server.",
          "upvote_count": "2"
        },
        {
          "id": 688989,
          "date": "Sat 08 Oct 2022 04:33",
          "username": "dcdcdc3",
          "content": "A described here<br>https://aws.amazon.com/blogs/storage/new-enhancements-for-moving-data-between-amazon-fsx-for-lustre-and-amazon-s3/<br><br>why not C? there is no \\\"batch loading\\\"",
          "upvote_count": "4"
        },
        {
          "id": 685392,
          "date": "Mon 03 Oct 2022 12:30",
          "username": "JohnPi",
          "content": "Amazon FSx will import the objects in our S3 bucket as files, and “lazy-load” the file contents from S3 when we first access the file.",
          "upvote_count": "2"
        },
        {
          "id": 682464,
          "date": "Thu 29 Sep 2022 10:05",
          "username": "akash_it",
          "content": "Why not C? It looks more appropriate",
          "upvote_count": "1"
        },
        {
          "id": 680603,
          "date": "Tue 27 Sep 2022 11:58",
          "username": "Biden",
          "content": "Whats the need for Intelligent Tiering ? Standard S3 should suffice, hence C",
          "upvote_count": "1"
        },
        {
          "id": 667114,
          "date": "Mon 12 Sep 2022 16:46",
          "username": "Ally26",
          "content": "D could not be answer because Storage Gateway generally used for file migration from on-prem to AWS, this is not the requirement here",
          "upvote_count": "1"
        },
        {
          "id": 665969,
          "date": "Sun 11 Sep 2022 11:07",
          "username": "pixepefdoxxx",
          "content": "Answer is A,In reality, we need to select from A & D only.<br><br>A & D comparison:<br>A do have S3 Intelligent Tiering (remember it's 200 GB) which should matter, Which D doesn't have - A wins<br>High Performance due to FSx for Lusture (requirement - file system must provide high performance acces) - A wins<br><br>Unsure but File Gateway may be less costly (than FSx lusture) - May be D wins here<br><br>After above points, Overall A is winner200 TB. ..",
          "upvote_count": "31"
        },
        {
          "id": 702299,
          "date": "Sun 23 Oct 2022 18:01",
          "username": "fdoxxx",
          "content": "200 TB. ..",
          "upvote_count": "1"
        },
        {
          "id": 664904,
          "date": "Fri 09 Sep 2022 21:11",
          "username": "AwsBRFan",
          "content": "A seems the right one to me",
          "upvote_count": "4"
        },
        {
          "id": 664557,
          "date": "Fri 09 Sep 2022 14:32",
          "username": "Rocketeer",
          "content": "Need \\\"The file system must provide high performance access to the needed data ...\\\" Hence my choice is A",
          "upvote_count": "3"
        },
        {
          "id": 662769,
          "date": "Wed 07 Sep 2022 19:52",
          "username": "ArreRajaPazhuvilfdoxxx",
          "content": "D with file gateway (software appliance) and S3 seems to be the cheapestBut need high performance access for 72 hours each month. So A seems to be reasonable.file gateway is slower than FSx... - A is a good choice",
          "upvote_count": "221"
        },
        {
          "id": 664801,
          "date": "Fri 09 Sep 2022 18:29",
          "username": "Pazhuvilfdoxxx",
          "content": "But need high performance access for 72 hours each month. So A seems to be reasonable.file gateway is slower than FSx... - A is a good choice",
          "upvote_count": "21"
        },
        {
          "id": 702301,
          "date": "Sun 23 Oct 2022 18:03",
          "username": "fdoxxx",
          "content": "file gateway is slower than FSx... - A is a good choice",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#935",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is refactoring its on-premises order-processing platform in the AWS Cloud. The platform includes a web front end that is hosted on a fleet of VMs.<br>RabbitMQ to connect the front end to the backend, and a Kubernetes cluster to run a containerized backend system to process the orders. The company does not want to make any major changes to the application.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#935",
          "answers": [
            {
              "choice": "<p>A. Create an AMI of the web server VM. Create an Amazon EC2 Auto Scaling group that uses the AMI and an Application Load Balancer. Set up Amazon MQ to replace the on-premises messaging queue. Configure Amazon Elastic Kubernetes Service (Amazon EKS) to host the order-processing backend.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a custom AWS Lambda runtime to mimic the web server environment. Create an Amazon API Gateway API to replace the front-end web servers. Set up Amazon MQ to replace the on-premises messaging queue. Configure Amazon Elastic Kubernetes Service (Amazon EKS) to host the order-processing backend.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AMI of the web server VM. Create an Amazon EC2 Auto Scaling group that uses the AMI and an Application Load Balancer. Set up Amazon MQ to replace the on-premises messaging queue. Install Kuhernetes on a fleet of different EC2 instances to host the order-processing backend.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AMI of the web server VM Create an Amazon EC2 Auto Scaling group that uses the AMI and an Application Load Balancer. Set up an Amazon Simple Queue Service (Amazon SQS) queue to replace the on-premises messaging queue, Configure Amazon Elastic Kubernetes Service (Amazon EKS) to host the order-processing backend.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 675627,
          "date": "Thu 22 Sep 2022 02:45",
          "username": "gnandam",
          "content": "A: Is right answer - https://aws.amazon.com/about-aws/whats-new/2020/11/announcing-amazon-mq-rabbitmq/<br>D: SQS need backend application to be refactored<br>B/C : not feasible",
          "upvote_count": "6"
        },
        {
          "id": 698332,
          "date": "Tue 18 Oct 2022 17:51",
          "username": "wassb",
          "content": "\\\"A company is refactoring...\\\" looks more like a replatforming",
          "upvote_count": "1"
        },
        {
          "id": 693664,
          "date": "Thu 13 Oct 2022 08:29",
          "username": "JohnPi",
          "content": "does not want to make any major changes to the application",
          "upvote_count": "1"
        },
        {
          "id": 686734,
          "date": "Wed 05 Oct 2022 11:09",
          "username": "JayF88",
          "content": "definitely A",
          "upvote_count": "2"
        },
        {
          "id": 682465,
          "date": "Thu 29 Sep 2022 10:07",
          "username": "akash_it",
          "content": "A is correct",
          "upvote_count": "3"
        },
        {
          "id": 682199,
          "date": "Thu 29 Sep 2022 01:35",
          "username": "parayan",
          "content": "A: Amazon MQ is suitable for RabbitMQ",
          "upvote_count": "1"
        },
        {
          "id": 675458,
          "date": "Wed 21 Sep 2022 21:21",
          "username": "astalavista1sb333",
          "content": "It's A or D but key for me here is LEAST Overhead, so will go for SQS over Amazon MQ. But will the application need a rewrite with MQ chosen?This would require a rewrite if you choose SQS. Better to choose what's more compatible with on-premises solution, which is Amazon MQ",
          "upvote_count": "13"
        },
        {
          "id": 683855,
          "date": "Fri 30 Sep 2022 23:33",
          "username": "sb333",
          "content": "This would require a rewrite if you choose SQS. Better to choose what's more compatible with on-premises solution, which is Amazon MQ",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#936",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization in AWS Organizations that has a large number of AWS accounts. One of the AWS accounts is designated as a transit account and has a transit gateway that is shared with all of the other AWS accounts. AWS Site-to-Site VPN connections are configured between all of the company's global offices and the transit account. The company has AWS Config enabled on all of its accounts.<br>The company's networking team needs to centrally manage a list of internal IP address ranges that belong to the global offices. Developers will reference this list to gain access to their applications securely.<br>Which solution meets these requirements with the LEAST amount of operational overhead?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#936",
          "answers": [
            {
              "choice": "<p>A. Create a JSON file that is hosted in Amazon S3 and that lists all of the internal IP address ranges. Configure an Amazon Simple Notification Service (Amazon SNS) topic in each of the accounts that can be invoked when the JSON file is updated. Subscribe an AWS Lambda function to the SNS topic to update all relevant security group rules with the updated IP address ranges.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new AWS Config managed rule that contains all of the internal IP address ranges. Use the rule to check the security groups in each of the accounts to ensure compliance with the list of IP address ranges. Configure the rule to automatically remediate any noncompliant security group that is detected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the transit account, create a VPC prefix list with all of the internal IP address ranges. Use AWS Resource Access Manager to share the prefix list with all of the other accounts. Use the shared prefix list to configure security group rules in the other accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the transit account, create a security group with all of the internal IP address ranges. Configure the security groups in the other accounts to reference the transit account's security group by using a nested security group reference of \"<transit-account-id>/sg-1a2b3c4d\".<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 674255,
          "date": "Tue 20 Sep 2022 16:26",
          "username": "redipa",
          "content": "C - Prefix list<br>Customer-managed prefix lists — Sets of IP address ranges that you define and manage. You can share your prefix list with other AWS accounts, enabling those accounts to reference the prefix list in their own resources.<br>https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html",
          "upvote_count": "8"
        },
        {
          "id": 702530,
          "date": "Mon 24 Oct 2022 01:29",
          "username": "Jonfernz",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/sharing-managed-prefix-lists.html",
          "upvote_count": "1"
        },
        {
          "id": 668902,
          "date": "Wed 14 Sep 2022 12:46",
          "username": "Cloudxie",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#937",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to move an application from on premises to the AWS Cloud. The application uses MySQL servers to store backend data. However, the application does not scale properly. The databases have become unresponsive as the user base has increased.<br>The company needs a solution to make the application highly available with low latency across multiple AWS Regions. The solution must require the least possible operational overhead and development effort.<br>Which solution will meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#937",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon RDS for MySQL DB cluster that includes a cross-Region read replica. Use AWS Database Migration Service (AWS DMS) to migrate existing databases.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy Amazon DynamoDB with global tables. Use AWS Database Migration Service (AWS DMS) to migrate existing databases. Adapt the application to work with DynamoDB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Aurora global database. Use native MySQL tools to migrate existing databases.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create MySQL servers on Amazon EC2 instances in two Regions. Set up asynchronous software replication across Regions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 715086,
          "date": "Thu 10 Nov 2022 10:24",
          "username": "janvandermerwer",
          "content": "A - available across multiple aws regions and has read replicas for improved scaling. - Initially thoguht this was the right answer.<br>C - This appears to be the most correct answer - B - Wrong database platform - Solution will require MySQL / Aurora<br>D - Not scalable and requires operational overhead",
          "upvote_count": "1"
        },
        {
          "id": 706982,
          "date": "Sat 29 Oct 2022 07:15",
          "username": "sjpd10joancarlessjpd10",
          "content": "For choosing between 'A' & 'C', is the DMS service more effort that 'MySQL Tools ~ mysqlimport utility' ?<br><br>There is no mention of saving costs and 'Amazon RDS for MySQL' supports cross-region replica.<br><br>So why should we discount 'A' ?Because the question states \\\"uses MySQL servers to store backend data\\\" which implies writes, and the A answer opts for \\\"cross-Region read replica\\\" which are useless in this scenario.Got it. So, its a READ vs. WRITE and a read HA in option A is useless.<br>'C' for sure then.",
          "upvote_count": "211"
        },
        {
          "id": 707748,
          "date": "Sun 30 Oct 2022 10:54",
          "username": "joancarlessjpd10",
          "content": "Because the question states \\\"uses MySQL servers to store backend data\\\" which implies writes, and the A answer opts for \\\"cross-Region read replica\\\" which are useless in this scenario.Got it. So, its a READ vs. WRITE and a read HA in option A is useless.<br>'C' for sure then.",
          "upvote_count": "11"
        },
        {
          "id": 714652,
          "date": "Wed 09 Nov 2022 15:29",
          "username": "sjpd10",
          "content": "Got it. So, its a READ vs. WRITE and a read HA in option A is useless.<br>'C' for sure then.",
          "upvote_count": "1"
        },
        {
          "id": 686619,
          "date": "Wed 05 Oct 2022 07:50",
          "username": "JayF88",
          "content": "I agree Aurora would be more beneficial (C), but I would be skeptical about an SA Pro examanswer with mysql > aurora shift without DMS",
          "upvote_count": "3"
        },
        {
          "id": 683876,
          "date": "Sat 01 Oct 2022 00:47",
          "username": "blitzzzzblitzzzz",
          "content": "A or C but why Dynamo DB?<br>The solution must require the least possible development effort. Should the answer be A?sorry I misread, it should be C",
          "upvote_count": "11"
        },
        {
          "id": 683878,
          "date": "Sat 01 Oct 2022 00:48",
          "username": "blitzzzz",
          "content": "sorry I misread, it should be C",
          "upvote_count": "1"
        },
        {
          "id": 667220,
          "date": "Mon 12 Sep 2022 18:29",
          "username": "AwsBRFan",
          "content": "C no doubts",
          "upvote_count": "2"
        },
        {
          "id": 659331,
          "date": "Sun 04 Sep 2022 16:13",
          "username": "pixepe",
          "content": "Answer is C:Aurora (C) is far better than MySQL RDS (A).<br>In Option C, DMS isn't mentioned. However, native MySQL tool (mysqldump utility) is fine for migration as per below FAQ from AWS.<br><br>How can I migrate from MySQL to Amazon Aurora and vice versa?<br>If you want to migrate from MySQL to Amazon Aurora (and vice versa), you have several options:<br><br>You can use the standard mysqldump utility to export data from MySQL and mysqlimport utility to import data to Amazon Aurora, and vice-versa.<br>You can also use Amazon RDS’s DB Snapshot migration feature to migrate an Amazon RDS for MySQL DB Snapshot to Amazon Aurora using the AWS Management Console.<br>Migration to Aurora completes for most customers in under an hour, though the duration depends on format and data set size. For more information see Best Practices for Migrating MySQL Databases to Amazon Aurora.",
          "upvote_count": "2"
        },
        {
          "id": 658915,
          "date": "Sun 04 Sep 2022 04:25",
          "username": "SGES",
          "content": "C<br>Amazon Aurora offers higher availability zone, global replication and compatability to existing on-premise DB",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#938",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a serverless application that consists of several AWS Lambda functions and Amazon DynamoDB tables. The company has created new functionality that requires the Lambda functions to access an Amazon Neptune DB cluster. The Neptune DB cluster is located in three subnets in a VPC. <br>Which of the possible solutions will allow the Lambda functions to access the Neptune DB cluster and DynamoDB tables? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#938",
          "answers": [
            {
              "choice": "<p>A. Create three public subnets in the Neptune VPC, and route traffic through an internet gateway. Host the Lambda functions in the three new public subnets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create three private subnets in the Neptune VPC, and route internet traffic through a NAT gateway. Host the Lambda functions in the three new private subnets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Host the Lambda functions outside the VPC.  Update the Neptune security group to allow access from the IP ranges of the Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Host the Lambda functions outside the VPC.  Create a VPC endpoint for the Neptune database, and have the Lambda functions access Neptune over the VPC endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create three private subnets in the Neptune VPC.  Host the Lambda functions in the three new isolated subnets. Create a VPC endpoint for DynamoDB, and route DynamoDB traffic to the VPC endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 727107,
          "date": "Fri 25 Nov 2022 23:09",
          "username": "SureNot",
          "content": "You can configure a Lambda function to connect to private subnets in a virtual private cloud (VPC) in your AWS account",
          "upvote_count": "1"
        },
        {
          "id": 715068,
          "date": "Thu 10 Nov 2022 10:01",
          "username": "janvandermerwer",
          "content": "Agree with comments.",
          "upvote_count": "1"
        },
        {
          "id": 713983,
          "date": "Tue 08 Nov 2022 17:45",
          "username": "AjayPrajapati",
          "content": "B & E, private subnets for the DB.  VPC end point works for dynamo not for neptune DB",
          "upvote_count": "1"
        },
        {
          "id": 711772,
          "date": "Sat 05 Nov 2022 14:27",
          "username": "Ni_yot",
          "content": "B and E. Lambda functions can only be hosted in a private subnet",
          "upvote_count": "2"
        },
        {
          "id": 703998,
          "date": "Tue 25 Oct 2022 17:48",
          "username": "xxmike89",
          "content": "NeptuneDB must in VPC ; wile DynamoDB must be outside VPC",
          "upvote_count": "1"
        },
        {
          "id": 689850,
          "date": "Sun 09 Oct 2022 03:55",
          "username": "skywalker",
          "content": "NeptuneDB must in VPC ; wile DynamoDB must be outside VPC<br><br>Thus B and E<br>Both allow connection to DynamoDB either via NAT or VPC endpoint... E will cost lesser since no outbound traffic .",
          "upvote_count": "2"
        },
        {
          "id": 686613,
          "date": "Wed 05 Oct 2022 07:43",
          "username": "JayF88",
          "content": "BE is correct",
          "upvote_count": "1"
        },
        {
          "id": 685448,
          "date": "Mon 03 Oct 2022 12:53",
          "username": "JohnPiJohnPi",
          "content": "BE is correct<br>for option D to work you need a Network Load Balancerhttps://docs.aws.amazon.com/neptune/latest/userguide/security-vpc.html",
          "upvote_count": "11"
        },
        {
          "id": 693671,
          "date": "Thu 13 Oct 2022 08:43",
          "username": "JohnPi",
          "content": "https://docs.aws.amazon.com/neptune/latest/userguide/security-vpc.html",
          "upvote_count": "1"
        },
        {
          "id": 684664,
          "date": "Sun 02 Oct 2022 09:33",
          "username": "joancarles",
          "content": "In order to connect the lambda with de Netptune, it should reside inside the VPC.  How no there are an option with and endpoint and loadbalancer, I choose the private subnets, so B. <br>The other response that cover the Dynamodb connection , remaining the lambdas in a private subnet, so my option is E<br>In resume, BE",
          "upvote_count": "2"
        },
        {
          "id": 680552,
          "date": "Tue 27 Sep 2022 11:04",
          "username": "Biden",
          "content": "D is wrong - if Lambda is hosted outside VPC then why VPC endpoint is needed ?<br>Vote for B&E !",
          "upvote_count": "3"
        },
        {
          "id": 678586,
          "date": "Sun 25 Sep 2022 10:33",
          "username": "Trump2022",
          "content": "Why not A?",
          "upvote_count": "1"
        },
        {
          "id": 668897,
          "date": "Wed 14 Sep 2022 12:39",
          "username": "Cloudxie",
          "content": "Amazon Neptune only allows connections from clients located in the same VPC as the Neptune cluster. D is wrong",
          "upvote_count": "4"
        },
        {
          "id": 665973,
          "date": "Sun 11 Sep 2022 11:12",
          "username": "Biden",
          "content": "Lambda needs access to the Neptune DB.  Host Lambda within VPCin private subnet within Neptune VPC.  OR Host Lambda outside VPC and access Neptune DB using VPC Endpoints",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#939",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use Amazon WorkSpaces in combination with thin client devices to replace aging desktops. Employees use the desktops to access applications that work with clinical trial data. Corporate security policy states that access to the applications must be restricted to only company branch office locations. The company is considering adding an additional branch office in the next 6 months.<br>Which solution meets these requirements with the MOST operational efficiency?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#939",
          "answers": [
            {
              "choice": "<p>A. Create an IP access control group rule with the list of public addresses from the branch offices. Associate the IP access control group with the WorkSpaces directory.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Firewall Manner to create a web ACL rule with an IPSet with the list of public addresses from the branch office locations. Associate the web ACL with the WorkSpaces directory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Certificate Manager (ACM) to issue trusted device certificates to the machines deployed in the branch office locations. Enable restricted access on the WorkSpaces directory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a custom WorkSpace image with Windows Firewall configured to restrict access to the public addresses of the branch offices. Use the image to deploy the WorkSpaces.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 709474,
          "date": "Wed 02 Nov 2022 00:45",
          "username": "Nidhin07",
          "content": "trusted device cert model won't support Linux it works with only Windows and MAC.  So lean towards A<br>https://aws.amazon.com/blogs/security/how-to-secure-your-amazon-workspaces-for-external-users/",
          "upvote_count": "1"
        },
        {
          "id": 689853,
          "date": "Sun 09 Oct 2022 03:58",
          "username": "skywalker",
          "content": "A- https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-ip-access-control-groups.html",
          "upvote_count": "4"
        },
        {
          "id": 682482,
          "date": "Thu 29 Sep 2022 10:30",
          "username": "akash_it",
          "content": "A is correct",
          "upvote_count": "3"
        },
        {
          "id": 675640,
          "date": "Thu 22 Sep 2022 03:07",
          "username": "gnandam",
          "content": "A - <br>Amazon WorkSpaces allows you to control which IP addresses your WorkSpaces can be accessed from. By using IP address-based control groups, you can define and manage groups of trusted IP addresses, and only allow users to access their WorkSpaces when they're connected to a trusted network.<br><br>An IP access control group acts as a virtual firewall that controls the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group, and then associate the group with your directory. You can associate each IP access control group with one or more directories. You can create up to 100 IP access control groups per Region per AWS account. However, you can only associate up to 25 IP access control groups with a single directory.<br>C - is not MOST operational efficiency",
          "upvote_count": "4"
        },
        {
          "id": 665978,
          "date": "Sun 11 Sep 2022 11:22",
          "username": "Bidenjoancarlesastalavista1",
          "content": "Cant be A since desktops wudnt have public IPs. Trusted Certs can be used: https://docs.aws.amazon.com/workspaces/latest/adminguide/trusted-devices.htmlIt is not possible to export public certificates whether they are ACM-issued or imported.<br>https://docs.aws.amazon.com/acm/latest/userguide/sdk-export.html<br>So it's ABut the branch will have a Public IP, not the desktops. Public IP for the branch and private IP for workspace, no ?",
          "upvote_count": "113"
        },
        {
          "id": 684351,
          "date": "Sat 01 Oct 2022 18:41",
          "username": "joancarles",
          "content": "It is not possible to export public certificates whether they are ACM-issued or imported.<br>https://docs.aws.amazon.com/acm/latest/userguide/sdk-export.html<br>So it's A",
          "upvote_count": "1"
        },
        {
          "id": 676984,
          "date": "Fri 23 Sep 2022 12:14",
          "username": "astalavista1",
          "content": "But the branch will have a Public IP, not the desktops. Public IP for the branch and private IP for workspace, no ?",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#940",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company provides specialized analytics services to customers. The analytics run on Amazon EC2 instances that need to be launched and terminated in response to requests from customers. A solutions architect is creating automation to manage the EC2 instances that handle customer requests. However, when the automation scripts attempt to launch many EC2 instances at the same time, a RequestLimitExceeded error frequently occurs.<br>What should the solutions architect do to handle this error?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#940",
          "answers": [
            {
              "choice": "<p>A. Implement an exponential backoff strategy so that the API token bucket can refill.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the EC2 instance launch configuration to install diagnostic tools on each instance to troubleshoot the issue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Request an increase for API throttling quotas from the AWS Support Center.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Request an EC2 API quota increase through the Service Quotas console.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 716107,
          "date": "Fri 11 Nov 2022 15:08",
          "username": "mrgreatness",
          "content": "The answer is A -- I had to do this myself. see: https://docs.aws.amazon.com/AWSEC2/latest/APIReference/query-api-troubleshooting.html . I'm 100% sure. AWS will very rarely approve increases to this limit",
          "upvote_count": "1"
        },
        {
          "id": 711784,
          "date": "Sat 05 Nov 2022 14:47",
          "username": "Ni_yot",
          "content": "Both A and C appear to be correct. As a solutions architect though i would apply the workaround to handle the error before thinking of requesting an increase.so for me A seems the best ans. - https://aws.amazon.com/premiumsupport/knowledge-center/ec2-launch-multiple-requestlimitexceeded/",
          "upvote_count": "1"
        },
        {
          "id": 707558,
          "date": "Sun 30 Oct 2022 02:05",
          "username": "hqmbsuperuser784",
          "content": "Not A, exponential backoff strategy only slows down the retry API, but it will not solve the problem as the automation script has to launch many EC2 instances at the same time anyway<br>https://docs.aws.amazon.com/AWSEC2/latest/APIReference/query-api-troubleshooting.html#api-request-rate<br>If an API request exceeds the API request rate for its category, the request returns the RequestLimitExceeded error code. To prevent this error, ensure that your application doesn't retry API requests at a high rate. You can do this by using care when polling and by using exponential backoff retries.<br><br>Ans C<br><br>https://docs.aws.amazon.com/AWSEC2/latest/APIReference/throttling.html<br>If you exceed an API throttling limit, you get the RequestLimitExceeded error code. <br>Adjusting API throttling limits<br>You can request an increase for API throttling limits for your AWS account. To request a limit adjustment, contact the AWS Support Center.I was thinking the same, but, even though if you request an increase for the API, it does not guarantee that you will not have that error again as everything has a limit, you can not request for an infinite amount of API call, thats why we have to implement exponential backoff. for that reason I changed my answer from C to A",
          "upvote_count": "21"
        },
        {
          "id": 713924,
          "date": "Tue 08 Nov 2022 16:29",
          "username": "superuser784",
          "content": "I was thinking the same, but, even though if you request an increase for the API, it does not guarantee that you will not have that error again as everything has a limit, you can not request for an infinite amount of API call, thats why we have to implement exponential backoff. for that reason I changed my answer from C to A",
          "upvote_count": "1"
        },
        {
          "id": 683884,
          "date": "Sat 01 Oct 2022 01:30",
          "username": "blitzzzz",
          "content": "A - If an API request exceeds the API request rate for its category, the request returns the RequestLimitExceeded error code. To prevent this error, ensure that your application doesn't retry API requests at a high rate. You can do this by using care when polling and by using exponential backoff retries.<br>https://docs.aws.amazon.com/AWSEC2/latest/APIReference/query-api-troubleshooting.html#api-request-rate",
          "upvote_count": "3"
        },
        {
          "id": 674270,
          "date": "Tue 20 Sep 2022 16:37",
          "username": "redipa",
          "content": "A- Exponential Backoff<br>A RequestLimitExceeded error for Amazon EC2 APIs usually indicates request rate limiting or resource rate limiting API throttling. You can use a combination of retry logic and exponential backoff strategies to work around this issue.<br>https://aws.amazon.com/premiumsupport/knowledge-center/ec2-launch-multiple-requestlimitexceeded/",
          "upvote_count": "3"
        },
        {
          "id": 668871,
          "date": "Wed 14 Sep 2022 12:09",
          "username": "Cloudxie",
          "content": "RequestLimitExceeded error for Amazon EC2 APIs usually indicates request rate limiting or resource rate limiting API throttling. You can use a combination of retry logic and exponential backoff strategies to work around this issue.",
          "upvote_count": "2"
        },
        {
          "id": 667562,
          "date": "Tue 13 Sep 2022 03:08",
          "username": "Guoxian",
          "content": "I will vote for C simply because it will resolve the EC2 API call. A will not solve the problem of excessive API call.",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#941",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a media metadata extraction pipeline running on AWS. Notifications containing a reference to a file in Amazon S3 are sent to an Amazon Simple<br>Notification Service (Amazon SNS) topic. The pipeline consists of a number of AWS Lambda functions that are subscribed to the SNS topic. The Lambda functions extract the S3 tile and write metadata to an Amazon RDS PostgreSQL DB instance.<br>Users report that updates to the metadata are sometimes slow to appear or are lost. During these times, the CPU utilization on the database is high and the number of failed Lambda invocations increases.<br>Which combination of actions should a solutions architect take to help resolve this issue? (Choose two.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#941",
          "answers": [
            {
              "choice": "<p>A. Enable message delivery status on the SNS topic. Configure the SNS topic delivery policy to enable retries with exponential backoff.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue and subscribe the queue to the SNS topic. Configure the Lambda functions to consume messages from the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an RDS proxy for the RDS instance. Update the Lambda functions to connect to the RDS instance using the proxy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable the RDS Data API for the RDS instance. Update the Lambda functions to connect to the RDS instance using the Data API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an Amazon Simple Queue Service (Amazon SQS) standard queue for each Lambda function and subscribe the queues to the SNS topic. Configure the Lambda functions to consume messages from their respective SQS queue.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 698362,
          "date": "Tue 18 Oct 2022 18:45",
          "username": "wassbwassb",
          "content": "Typical Fan-out architecturewith RDS proxy to manage the multiple connection",
          "upvote_count": "21"
        },
        {
          "id": 698364,
          "date": "Tue 18 Oct 2022 18:45",
          "username": "wassb",
          "content": "with RDS proxy to manage the multiple connection",
          "upvote_count": "1"
        },
        {
          "id": 691306,
          "date": "Mon 10 Oct 2022 17:29",
          "username": "dcdcdc3",
          "content": "B would create an issue if multiplelambdas are picking from one queue as other lambdas wouldn't know if an item is picked?<br>https://stackoverflow.com/questions/62349013/triggering-multiple-lambda-functions-from-one-sqs-trigger",
          "upvote_count": "2"
        },
        {
          "id": 686603,
          "date": "Wed 05 Oct 2022 07:33",
          "username": "JayF88superuser784",
          "content": "I'm not seeing anything wrong with B as well, BCE could workquestion says that current design is SNS -> (several lambda function's ) which works because the SNS delivers the same message to EACH lambda, if you choose B the design would be SNS -> SQS FIFO -> (several lambda function's ), with this design the lambda function will compite for the messages and the initial solution each Lambda has its OWN message, Option E is the correct one because you will have SNS -> several SQS -> a lambda for each SQS which is the fanout pattern, with this each lambda will have its own message again and will not compite. Solutions C E",
          "upvote_count": "11"
        },
        {
          "id": 711880,
          "date": "Sat 05 Nov 2022 17:32",
          "username": "superuser784",
          "content": "question says that current design is SNS -> (several lambda function's ) which works because the SNS delivers the same message to EACH lambda, if you choose B the design would be SNS -> SQS FIFO -> (several lambda function's ), with this design the lambda function will compite for the messages and the initial solution each Lambda has its OWN message, Option E is the correct one because you will have SNS -> several SQS -> a lambda for each SQS which is the fanout pattern, with this each lambda will have its own message again and will not compite. Solutions C E",
          "upvote_count": "1"
        },
        {
          "id": 676998,
          "date": "Fri 23 Sep 2022 12:25",
          "username": "astalavista1",
          "content": "CE With SNS in front of SQS, you can have multiple messages processed and RDS Proxy handles multiple database connections.",
          "upvote_count": "3"
        },
        {
          "id": 664632,
          "date": "Fri 09 Sep 2022 15:44",
          "username": "Rocketeer",
          "content": "I think BC. <br>Having single SQS queue is better than multiple SQS queues. Hence don't like E. ",
          "upvote_count": "3"
        },
        {
          "id": 658283,
          "date": "Sat 03 Sep 2022 11:38",
          "username": "SGES",
          "content": "CE<br>https://aws.amazon.com/rds/proxy/",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#942",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has VPC flow logs enabled for its NAT gateway. The company is seeing Action = ACCEPT for inbound traffic that comes from public IP address<br>198.51.100.2 destined for a private Amazon EC2 instance.<br>A solutions architect must determine whether the traffic represents unsolicited inbound connections from the internet. The first two octets of the VPC CIDR block are 203.0.<br>Which set of steps should the solutions architect take to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#942",
          "answers": [
            {
              "choice": "<p>A. Open the AWS CloudTrail console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as \"like 203.0\" and the source address set as \"like 198.51.100.2\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as \"like 203.0\" and the source address set as \"like 198.51.100.2\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Open the AWS CloudTrail console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as \"like 198.51.100.2\" and the source address set as \"like 203.0\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as \"like 198.51.100.2\" and the source address set as \"like 203.0\". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 682270,
          "date": "Thu 29 Sep 2022 04:25",
          "username": "sb333",
          "content": "D<br>The question already states that there was an Action=Accept from Internet inbound to Private IP. The goal is to determine if this was solicited or unsolicited traffic. If solicited, traffic would have been initiated from the Private IP address initially and then received the return traffic. If unsolicited, there would be no initial traffic outbound from Private IP address. So Answer D is what is needed to determine this.",
          "upvote_count": "13"
        },
        {
          "id": 667753,
          "date": "Tue 13 Sep 2022 09:36",
          "username": "Cloudxie",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/vpc-analyze-inbound-traffic-nat-gateway/",
          "upvote_count": "10"
        },
        {
          "id": 714994,
          "date": "Thu 10 Nov 2022 08:09",
          "username": "janvandermerwer",
          "content": "Cloudtrail isn't used to view VPC flow logs, so that rules out A and C. <br>Traffic is already allowed inbound, so need to see if there is suspicious traffic from the source/internal/private range = 203.0<br>Source = 203.x<br>Dest = 198.51",
          "upvote_count": "2"
        },
        {
          "id": 712621,
          "date": "Sun 06 Nov 2022 21:21",
          "username": "Jonfernz",
          "content": "As a networking guy, D is the obvious answer. You are inspecting the CW log group for the outbound traffic.",
          "upvote_count": "2"
        },
        {
          "id": 712021,
          "date": "Sat 05 Nov 2022 22:45",
          "username": "superuser784",
          "content": "B: <br>Cloudxie added the link https://aws.amazon.com/premiumsupport/knowledge-center/vpc-analyze-inbound-traffic-nat-gateway/<br>D is the case when we want to know if Traffic to the public IP was initiated from a private instance<br>filter (dstAddr like 'public IP' and srcAddr like 'xxx.xxx')",
          "upvote_count": "1"
        },
        {
          "id": 710859,
          "date": "Fri 04 Nov 2022 02:14",
          "username": "tjzsm1",
          "content": "D is correct. sb333 explained it very well.",
          "upvote_count": "2"
        },
        {
          "id": 706990,
          "date": "Sat 29 Oct 2022 07:36",
          "username": "sjpd10",
          "content": "The question already states \\\"Action=Accept from Internet inbound to Private IP\\\"<br>Option 'D' fulfils that condition.",
          "upvote_count": "1"
        },
        {
          "id": 704203,
          "date": "Tue 25 Oct 2022 23:56",
          "username": "tjzsm1",
          "content": "Answer is D",
          "upvote_count": "1"
        },
        {
          "id": 702682,
          "date": "Mon 24 Oct 2022 06:02",
          "username": "AnnT",
          "content": "D.  - to determine that it 's unsolicited or not.",
          "upvote_count": "1"
        },
        {
          "id": 693677,
          "date": "Thu 13 Oct 2022 08:59",
          "username": "JohnPi",
          "content": "traffic to the public IP was initiated from a private instance<br><br>filter (dstAddr like 'public IP' and srcAddr like 'xxx.xxx')<br>| stats sum(bytes) as bytesTransferred by srcAddr, dstAddr<br>| limit 10",
          "upvote_count": "2"
        },
        {
          "id": 691358,
          "date": "Mon 10 Oct 2022 18:37",
          "username": "dcdcdc3",
          "content": "Agree with sb333 we need to observe egress to determine if it was solicited<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/vpc-analyze-inbound-traffic-nat-gateway/ by Cloudxie says \\\"select appropriate log\\\"",
          "upvote_count": "4"
        },
        {
          "id": 686592,
          "date": "Wed 05 Oct 2022 07:23",
          "username": "JayF88",
          "content": "Since its going for unsolicited inbound conns, I'd also choose answer D on this one",
          "upvote_count": "2"
        },
        {
          "id": 658276,
          "date": "Sat 03 Sep 2022 11:20",
          "username": "SGESPazhuvil",
          "content": "A<br>Amazon cloudwatch is a monitoring service that give you visibility into the performance and health of yourAWS resources and applications whereas AWS Cloudtrail is a service that logs AWS account activity and API usuage for risk auditing, compliance and monitoringAgree that cloudtrail logs carry Audit trail data. But Cloudwatch is the one to monitor the audit logs collected by trail. So answer should be B. ",
          "upvote_count": "27"
        },
        {
          "id": 664575,
          "date": "Fri 09 Sep 2022 14:49",
          "username": "Pazhuvil",
          "content": "Agree that cloudtrail logs carry Audit trail data. But Cloudwatch is the one to monitor the audit logs collected by trail. So answer should be B. ",
          "upvote_count": "7"
        }
      ]
    },
    {
      "question_id": "#943",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning a migration from an on-premises data center to the AWS Cloud. The company plans to use multiple AWS accounts that are managed in an organization in AWS Organizations. The company will create a small number of accounts initially and will add accounts as needed. A solutions architect must design a solution that turns on AWS CloudTrail in all AWS accounts.<br>What is the MOST operationally efficient solution that meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#943",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function that creates a new CloudTrail trail in all AWS accounts in the organization. Invoke the Lambda function daily by using a scheduled action in Amazon EventBridge (Amazon CloudWatch Events).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new CloudTrail trail in the organization's management account. Configure the trail to log all events for all AWS accounts in the organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new CloudTrail trail in all AWS accounts in the organization. Create new trails whenever a new account is created. Define an SCP that prevents deletion or modification of trails. Apply the SCP to the root OU.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Systems Manager Automation runbook that creates a CloudTrail trail in all AWS accounts in the organization. Invoke the automation by using Systems Manager State Manager.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 663364,
          "date": "Thu 08 Sep 2022 10:23",
          "username": "pixepe",
          "content": "Answer is B<br><br>Per AWS documentation at https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html: <br>\\\"If you have created an organization in AWS Organizations, you can create a trail that logs all events for all AWS accounts in that organization. This is sometimes called an organization trail. You can also choose to edit an existing trail in the management account and apply it to an organization, making it an organization trail.\\\"",
          "upvote_count": "10"
        },
        {
          "id": 662968,
          "date": "Thu 08 Sep 2022 00:56",
          "username": "cale",
          "content": "B seems right.",
          "upvote_count": "5"
        },
        {
          "id": 715049,
          "date": "Thu 10 Nov 2022 09:30",
          "username": "janvandermerwer",
          "content": "B = MOST operationally efficient solution<br>Tested today - If you provision another account, this automatically adds the configuration in.<br><br>SCP can then be used to prevent deletion of trails - Typically you'd forward trails to an \\\"audit\\\" account or similar.",
          "upvote_count": "1"
        },
        {
          "id": 687706,
          "date": "Thu 06 Oct 2022 13:17",
          "username": "skywalker",
          "content": "B looks right.",
          "upvote_count": "2"
        },
        {
          "id": 686590,
          "date": "Wed 05 Oct 2022 07:20",
          "username": "JayF88",
          "content": "B is the right answer",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#944",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS CloudFormation to deploy applications within multiple VPCs that are all attached to a transit gateway. Each VPC that sends traffic to the public internet must send the traffic through a shared services VPC.  Each subnet within a VPC uses the default VPC route table, and the traffic is routed to the transit gateway. The transit gateway uses its default route table for any VPC attachment.<br>A security audit reveals that an Amazon EC2 instance that is deployed within a VPC can communicate with an EC2 instance that is deployed in any of the company's other VPCs. A solutions architect needs to limit the traffic between the VPCs. Each VPC must be able to communicate only with a predefined, limited set of authorized VPCs.<br>What should the solutions architect do to meet these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#944",
          "answers": [
            {
              "choice": "<p>A. Update the network ACL of each subnet within a VPC to allow outbound traffic only to the authorized VPCs. Remove all deny rules except the default deny rule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update all the security groups that are used within a VPC to deny outbound traffic to security groups that are used within the unauthorized VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a dedicated transit gateway route table for each VPC attachment. Route traffic only to the authorized VPCs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the main route table of each VPC to route traffic only to the authorized VPCs through the transit gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 668823,
          "date": "Wed 14 Sep 2022 11:13",
          "username": "Cloudxie",
          "content": "Q: How do I control which Amazon Virtual Private Clouds (VPCs) can communicate with each other?<br><br>You can segment your network by creating multiple route tables in an AWS Transit Gateway and associate Amazon VPCs and VPNs to them. This will allow you to create isolated networks inside an AWS Transit Gateway similar to virtual routing and forwarding (VRFs) in traditional networks. The AWS Transit Gateway will have a default route table. The use of multiple route tables is optional.",
          "upvote_count": "8"
        },
        {
          "id": 699199,
          "date": "Wed 19 Oct 2022 18:59",
          "username": "Blair77",
          "content": "C is right!",
          "upvote_count": "2"
        },
        {
          "id": 685472,
          "date": "Mon 03 Oct 2022 13:26",
          "username": "JohnPi",
          "content": "multiple route tables in an AWS Transit Gateway",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#945",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed a single-page web application in JavaScript. The source code is stored in a single Amazon S3 bucket in the us-east-1 Region. The company serves the web application to a global user base through Amazon CloudFront.<br>The company wants to experiment with two versions of the website without informing application users. Each version of the website will reside in its own S3 bucket. The company wants to determine which version is most successful in marketing a new product.<br>The solution must send application users that are based in Europe to the new website design. The solution must send application users that are based in the<br>United States to the current website design. However, some exceptions exist. The company needs to be able to redirect specific users to the new website design, regardless of the users' location.<br>Which solution meets these requirements?<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#945",
          "answers": [
            {
              "choice": "<p>A. Configure two CloudFront distributions. Configure a geolocation routing policy in Amazon Route 53 to route traffic to the appropriate CloudFront endpoint based on the location of clients.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a single CloudFront distribution. Create a behavior with different paths for each version of the site. Configure Lambda@Edge on the default path to generate redirects and send the client to the correct version of the website.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure a single CloudFront distribution. Configure an alternate domain name on the distribution. Configure two behaviors to route users to the different S3 origins based on the domain name that the client uses in the HTTP request.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure a single CloudFront distribution with Lambda@Edge. Use Lambda@Edge to send user requests to different origins based on request attributes.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 668834,
          "date": "Wed 14 Sep 2022 11:21",
          "username": "Cloudxie",
          "content": "D: https://aws.amazon.com/blogs/networking-and-content-delivery/leverage-amazon-cloudfront-geolocation-headers-for-state-level-geo-targeting/",
          "upvote_count": "10"
        },
        {
          "id": 675513,
          "date": "Wed 21 Sep 2022 23:06",
          "username": "gnandam",
          "content": "D is the right answer",
          "upvote_count": "4"
        }
      ]
    },
    {
      "question_id": "#946",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization in AWS Organizations. The company has enabled trusted access between Organizations and AWS Resource Access Manager<br>(AWS RAM). The organization includes three AWS accounts, one each for shared services, development, and production. The shared services account has a<br>VPC. <br>A solutions architect needs to meet the following requirements:<br>* Configure access between the shared services VPC and the development and production accounts.<br>* Ensure that workloads in each account are deployed to at least three Availability Zones.<br>* Ensure that there is no direct communication between the development and production workloads.<br>Which combination of steps will meet these requirements? (Choose three.)<br><br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#946",
          "answers": [
            {
              "choice": "<p>A. In the shared services VPC, create three subnets for three Availability Zones. Create one subnet in each Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the shared services VPC, create six subnets for three Availability Zones. Create two subnets in each Availability Zone.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure network ACLs to prevent connectivity between the subnets in the development account and the production account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure VPC default security group outbound rules to prevent connectivity between the subnets in the development account and the production account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS RAM to share three subnets in different Availability Zones with the development account. Additionally, use AWS RAM to share the same three subnets with the production account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use AWS RAM to share three subnets in different Availability Zones with the development account. Additionally, use AWS RAM to share three other subnets in different Availability Zones with the production account.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 657922,
          "date": "Sat 03 Sep 2022 02:09",
          "username": "SGES",
          "content": "BCF<br>B - Better HA<br>C - ACL applied at subnet level while security group at instance<br>F - Requirement that no connection between development and production",
          "upvote_count": "17"
        },
        {
          "id": 698938,
          "date": "Wed 19 Oct 2022 12:53",
          "username": "psou7",
          "content": "i would go with BCF",
          "upvote_count": "6"
        },
        {
          "id": 687879,
          "date": "Thu 06 Oct 2022 16:11",
          "username": "Biden",
          "content": "A - Shared Services with Public Subnets in each AZ - dont need 3 more<br>E - The same 3 subnets shared with each account - Prod and Dev<br>C - Yes, controls at Subnet Level vs Security Group which is incoming & at instance level",
          "upvote_count": "3"
        },
        {
          "id": 677029,
          "date": "Fri 23 Sep 2022 12:59",
          "username": "astalavista1",
          "content": "B - HA for Dev and Prod<br>C - NACL to lock down subnet.<br>F - Use RAM to prevent both env access.",
          "upvote_count": "6"
        }
      ]
    },
    {
      "question_id": "#947",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect has deployed a web application that serves users across two AWS Regions under a custom domain. The application uses Amazon Route 53 latency-based routing. The solutions architect has associated weighted record sets with a pair of web servers in separate Availability Zones for each Region.<br><br>The solutions architect runs a disaster recovery scenario. When all the web servers in one Region are stopped. Route 53 does not automatically redirect users to the other Region.<br><br>Which of the following are possible root causes of this issue? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#947",
          "answers": [
            {
              "choice": "<p>A. The weight for the Region where the web servers were stopped is higher than the weight for the other Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. One of the web servers in the secondary Region did not pass its HTTP health check.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Latency resource record sets cannot be used in combination with weighted resource record sets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The setting to evaluate target health is not turned on for the latency alias resource record set that is associated with the domain in the Region where the web servers were stopped.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. An HTTP health check has not been set up for one or more of the weighted resource record sets associated with the stopped web servers.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#948",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an application that uses several Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). During the initial startup of the EC2 instances, the EC2 instances run user data scripts to download critical content for the application from an Amazon S3 bucket.<br><br>The EC2 instances are launching correctly. However, after a period of time, the EC2 instances are terminated with the following error message: \"An instance was taken out of service in response to an ELB system health check failure.\" EC2 instances continue to launch and be terminated because of Auto Scaling events in an endless loop.<br><br>The only recent change to the deployment is that the company added a large amount of critical content to the S3 bucket. The company does not want to alter the user data scripts in production.<br><br>What should a solutions architect do so that the production environment can deploy successfully?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#948",
          "answers": [
            {
              "choice": "<p>A. Increase the size of the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase the health check timeout for the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the health check path for the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the health check grace period for the Auto Scaling group.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 723583,
          "date": "Mon 21 Nov 2022 15:12",
          "username": "ggrodskiy",
          "content": "D - correct<br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-check-grace-period.html",
          "upvote_count": "3"
        }
      ]
    },
    {
      "question_id": "#949",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media storage application uploads user photos to Amazon S3 for processing by AWS Lambda functions. Application state is stored in Amazon DynamoDB tables. Users are reporting that some uploaded photos are not being processed properly. The application developers trace the logs and find that Lambda is experiencing photo processing issues when thousands of users upload photos simultaneously. The issues are the result of Lambda concurrency limits and the performance of DynamoDB when data is saved.<br><br>Which combination of actions should a solutions architect take to increase the performance and reliability of the application? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#949",
          "answers": [
            {
              "choice": "<p>A. Evaluate and adjust the RCUs for the DynamoDB tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Evaluate and adjust the WCUs for the DynamoDB tables.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add an Amazon ElastiCache layer to increase the performance of Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an Amazon Simple Queue Service (Amazon SQS) queue and reprocessing logic between Amazon S3 and the Lambda functions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use S3 Transfer Acceleration to provide lower latency to users.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#950",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a multi-tier web application that runs on a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are in an Auto Scaling group. The ALB and the Auto Scaling group are replicated in a backup AWS Region. The minimum value and the maximum value for the Auto Scaling group are set to zero. An Amazon RDS Multi-AZ DB instance stores the application's data. The DB instance has a read replica in the backup Region. The application presents an endpoint to end users by using an Amazon Route 53 record.<br><br>The company needs to reduce its RTO to less than 15 minutes by giving the application the ability to automatically fail over to the backup Region. The company does not have a large enough budget for an active-active strategy.<br><br>What should a solutions architect recommend to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#950",
          "answers": [
            {
              "choice": "<p>A. Reconfigure the application's Route 53 record with a latency-based routing policy that load balances traffic between the two ALBs. Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values. Create an Amazon CloudWatch alarm that is based on the HTTPCode_Target_5XX_Count metric for the ALB in the primary Region. Configure the CloudWatch alarm to invoke the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values. Configure Route 53 with a health check that monitors the web application and sends an Amazon Simple Notification Service (Amazon SNS) notification to the Lambda function when the health check status is unhealthy. Update the application's Route 53 record with a failover policy that routes traffic to the ALB in the backup Region when a health check failure occurs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the Auto Scaling group in the backup Region to have the same values as the Auto Scaling group in the primary Region. Reconfigure the application's Route 53 record with a latency-based routing policy that load balances traffic between the two ALBs. Remove the read replica. Replace the read replica with a standalone RDS DB instance. Configure Cross-Region Replication between the RDS DB instances by using snapshots and Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an endpoint in AWS Global Accelerator with the two ALBs as equal weighted targets. Create an AWS Lambda function in the backup Region to promote the read replica and modify the Auto Scaling group values. Create an Amazon CloudWatch alarm that is based on the HTTPCode_Target_5XX_Count metric for the ALB in the primary Region. Configure the CloudWatch alarm to invoke the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 732553,
          "date": "Thu 01 Dec 2022 12:48",
          "username": "Spavanko",
          "content": "Why not B:<br><br>C is incorrect because \\\"The company does not have a large enough budget for an active-active strategy.\\\"",
          "upvote_count": "1"
        },
        {
          "id": 727101,
          "date": "Fri 25 Nov 2022 22:40",
          "username": "SureNotmasetromainpixepe",
          "content": "Standard solutionwhy not A is not good?It;s NOT A because, It's not Active-Active, Latency based routing is for active-active mainly.<br><br>We need failover policy.<br><br>Ref - https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html",
          "upvote_count": "112"
        },
        {
          "id": 730420,
          "date": "Tue 29 Nov 2022 14:14",
          "username": "masetromainpixepe",
          "content": "why not A is not good?It;s NOT A because, It's not Active-Active, Latency based routing is for active-active mainly.<br><br>We need failover policy.<br><br>Ref - https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html",
          "upvote_count": "12"
        },
        {
          "id": 730975,
          "date": "Wed 30 Nov 2022 02:15",
          "username": "pixepe",
          "content": "It;s NOT A because, It's not Active-Active, Latency based routing is for active-active mainly.<br><br>We need failover policy.<br><br>Ref - https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#951",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating an on-premises application and a MySQL database to AWS. The application processes highly sensitive data, and new data is constantly updated in the database. The data must not be transferred over the internet. The company also must encrypt the data in transit and at rest.<br><br>The database is 5 TB in size. The company already has created the database schema in an Amazon RDS for MySQL DB instance. The company has set up a 1 Gbps AWS Direct Connect connection to AWS. The company also has set up a public VIF and a private VIF.  A solutions architect needs to design a solution that will migrate the data to AWS with the least possible downtime.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#951",
          "answers": [
            {
              "choice": "<p>A. Perform a database backup. Copy the backup files to an AWS Snowball Edge Storage Optimized device. Import the backup to Amazon S3. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3) for encryption at rest. Use TLS for encryption in transit. Import the data from Amazon S3 to the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Database Migration Service (AWS DMS) to migrate the data to AWS. Create a DMS replication instance in a private subnet. Create VPC endpoints for AWS DMS. Configure a DMS task to copy data from the on-premises database to the DB instance by using full load plus change data capture (CDC). Use the AWS Key Management Service (AWS KMS) default key for encryption at rest. Use TLS for encryption in transit.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Perform a database backup. Use AWS DataSync to transfer the backup files to Amazon S3. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3) for encryption at rest. Use TLS for encryption in transit. Import the data from Amazon S3 to the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon S3 File Gateway. Set up a private connection to Amazon S3 by using AWS PrivateLink. Perform a database backup. Copy the backup files to Amazon S3. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3) for encryption at rest. Use TLS for encryption in transit. Import the data from Amazon S3 to the DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 734584,
          "date": "Sat 03 Dec 2022 18:13",
          "username": "ggrodskiy",
          "content": "Correct B. <br>new data is constantly updated in the database",
          "upvote_count": "1"
        },
        {
          "id": 730441,
          "date": "Tue 29 Nov 2022 14:26",
          "username": "masetromain",
          "content": "B is correct<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html<br>https://aws.amazon.com/dms/<br>https://aws.amazon.com/fr/blogs/big-data/near-zero-downtime-migration-from-mysql-to-dynamodb/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#952",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to review the design of an Amazon EMR cluster that is using the EMR File System (EMRFS). The cluster performs tasks that are critical to business needs. The cluster is running Amazon EC2 On-Demand Instances at all times for all task, master, and core nodes. The EMR tasks run each morning, starting at 1:00 AM. and take 6 hours to finish running. The amount of time to complete the processing is not a priority because the data is not referenced until late in the day.<br><br>The solutions architect must review the architecture and suggest a solution to minimize the compute costs.<br><br>Which solution should the solutions architect recommend to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#952",
          "answers": [
            {
              "choice": "<p>A. Launch all task, master, and core nodes on Spot Instances in an instance fleet. Terminate the duster, including all instances, when the processing is completed.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch the master and core nodes on On-Demand Instances. Launch the task nodes on Spot Instances in an instance fleet. Terminate the cluster, including all instances, when the processing is completed. Purchase Compute Savings Plans to cover the On-Demand Instance usage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Continue to launch all nodes on On-Demand Instances. Terminate the cluster, including all instances, when the processing is completed. Purchase Compute Savings Plans to cover the On-Demand Instance usage<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch the master and core nodes on On-Demand Instances. Launch the task nodes on Spot Instances in an instance fleet. Terminate only the task node instances when the processing is completed. Purchase Compute Savings Plans to cover the On-Demand Instance usage.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 734585,
          "date": "Sat 03 Dec 2022 18:14",
          "username": "ggrodskiy",
          "content": "Correct D. ",
          "upvote_count": "1"
        },
        {
          "id": 730452,
          "date": "Tue 29 Nov 2022 14:35",
          "username": "masetromain",
          "content": "I agree with D.  The cluster performs tasks that are critical to business needs so we can't turn off cluster.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#953",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect has launched multiple Amazon EC2 instances in a placement group within a single Availability Zone. Because of additional load on the system, the solutions architect attempts to add new instances to the placement group. However, the solutions architect receives an insufficient capacity error.<br><br>What should the solutions architect do to troubleshoot this issue?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#953",
          "answers": [
            {
              "choice": "<p>A. Use a spread placement group. Set a minimum of eight instances for each Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Stop and start all the instances in the placement group. Try the launch again.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new placement group. Merge the new placement group with the original placement group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch the additional instances as Dedicated Hosts in the placement groups.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 734586,
          "date": "Sat 03 Dec 2022 18:14",
          "username": "ggrodskiy",
          "content": "Correct B. ",
          "upvote_count": "1"
        },
        {
          "id": 730541,
          "date": "Tue 29 Nov 2022 16:11",
          "username": "masetromainmasetromain",
          "content": "The correct answer is B:<br>If you receive a capacity error when launching an instance in a placement group that already has running instances, stop and start all of the instances in the placement group, and try the launch again.<br>C - is wrong \\\"You can't merge placement groups.\\\"<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.htmlIf you try to add more instances to the placement group later, or if you try to launch more than one instance type in the placement group, you increase your chances of getting an insufficient capacity error.<br><br>If you stop an instance in a placement group and then start it again, it still runs in the placement group. However, the start fails if there isn't enough capacity for the instance.<br><br>If you receive a capacity error when launching an instance in a placement group that already has running instances, stop and start all of the instances in the placement group, and try the launch again. Starting the instances may migrate them to hardware that has capacity for all of the requested instances.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",
          "upvote_count": "11"
        },
        {
          "id": 730548,
          "date": "Tue 29 Nov 2022 16:17",
          "username": "masetromain",
          "content": "If you try to add more instances to the placement group later, or if you try to launch more than one instance type in the placement group, you increase your chances of getting an insufficient capacity error.<br><br>If you stop an instance in a placement group and then start it again, it still runs in the placement group. However, the start fails if there isn't enough capacity for the instance.<br><br>If you receive a capacity error when launching an instance in a placement group that already has running instances, stop and start all of the instances in the placement group, and try the launch again. Starting the instances may migrate them to hardware that has capacity for all of the requested instances.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#954",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect has developed a web application that uses an Amazon API Gateway Regional endpoint and an AWS Lambda function. The consumers of the web application are all close to the AWS Region where the application will be deployed. The Lambda function only queries an Amazon Aurora MySQL database. The solutions architect has configured the database to have three read replicas.<br><br>During testing, the application does not meet performance requirements. Under high load, the application opens a large number of database connections. The solutions architect must improve the application's performance.<br><br>Which actions should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#954",
          "answers": [
            {
              "choice": "<p>A. Use the cluster endpoint of the Aurora database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use RDS Proxy to set up a connection pool to the reader endpoint of the Aurora database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the Lambda Provisioned Concurrency feature.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Move the code for opening the database connection in the Lambda function outside of the event handler.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Change the API Gateway endpoint to an edge-optimized endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 730545,
          "date": "Tue 29 Nov 2022 16:16",
          "username": "masetromainmasetromain",
          "content": "I go witch B and D. <br>for B:<br>Connect to RDS outside of Lambda handler method to improve performance<br><br>https://awstut.com/en/2022/04/30/connect-to-rds-outside-of-lambda-handler-method-to-improve-performance-en/<br><br>for D:<br>Using RDS Proxy, you can handle unpredictable surges in database traffic. Otherwise, these surges might cause issues due to oversubscribing connections or creating new connections at a fast rate. RDS Proxy establishes a database connection pool and reuses connections in this pool. This approach avoids the memory and CPU overhead of opening a new database connection each time. To protect the database against oversubscription, you can control the number of database connections that are created.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.htmlThe answer cannot be E and A:<br>for A:<br>The Lambda function only queries an Amazon Aurora MySQL database.<br>- You use the cluster endpoint for all write operations on the DB cluster, including inserts, updates, deletes, and DDL changes. You can also use the cluster endpoint for read operations, such as queries.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html<br><br>for E:<br>The consumers of the web application are all close to the AWS Region where the application will be deployed<br>- An edge-optimized API endpoint is best for geographically distributed clients.<br><br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-endpoint-types.html",
          "upvote_count": "11"
        },
        {
          "id": 730547,
          "date": "Tue 29 Nov 2022 16:17",
          "username": "masetromain",
          "content": "The answer cannot be E and A:<br>for A:<br>The Lambda function only queries an Amazon Aurora MySQL database.<br>- You use the cluster endpoint for all write operations on the DB cluster, including inserts, updates, deletes, and DDL changes. You can also use the cluster endpoint for read operations, such as queries.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html<br><br>for E:<br>The consumers of the web application are all close to the AWS Region where the application will be deployed<br>- An edge-optimized API endpoint is best for geographically distributed clients.<br><br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-endpoint-types.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#955",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has migrated a legacy application to the AWS Cloud. The application runs on three Amazon EC2 instances that are spread across three Availability Zones. One EC2 instance is in each Availability Zone. The EC2 instances are running in three private subnets of the VPC and are set up as targets for an Application Load Balancer (ALB) that is associated with three public subnets.<br><br>The application needs to communicate with on-premises systems. Only traffic from IP addresses in the company's IP address range are allowed to access the on-premises systems. The company's security team is bringing only one IP address from its internal IP address range to the cloud. The company has added this IP address to the allow list for the company firewall. The company also has created an Elastic IP address for this IP address.<br><br>A solutions architect needs to create a solution that gives the application the ability to communicate with the on-premises systems. The solution also must be able to mitigate failures automatically.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#955",
          "answers": [
            {
              "choice": "<p>A. Deploy three NAT gateways, one in each public subnet. Assign the Elastic IP address to the NAT gateways. Turn on health checks for the NAT gateways. If a NAT gateway fails a health check, recreate the NAT gateway and assign the Elastic IP address to the new NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Replace the ALB with a Network Load Balancer (NLB). Assign the Elastic IP address to the NLB Turn on health checks for the NLIn the case of a failed health check, redeploy the NLB in different subnets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a single NAT gateway in a public subnet. Assign the Elastic IP address to the NAT gateway. Use Amazon CloudWatch with a custom metric to monitor the NAT gateway. If the NAT gateway is unhealthy, invoke an AWS Lambda function to create a new NAT gateway in a different subnet. Assign the Elastic IP address to the new NAT gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Assign the Elastic IP address to the ALB.  Create an Amazon Route 53 simple record with the Elastic IP address as the value. Create a Route 53 health check. In the case of a failed health check, recreate the ALB in different subnets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 734911,
          "date": "Sun 04 Dec 2022 08:30",
          "username": "ggrodskiy",
          "content": "Correct C",
          "upvote_count": "1"
        },
        {
          "id": 730531,
          "date": "Tue 29 Nov 2022 15:58",
          "username": "masetromainSpavankomasetromain",
          "content": "I think the answer is D. How you plan to \\\"Assign the Elastic IP address to the ALB. \\\"?You are right an Application Load Balancer cannot be assigned an Elastic IP address. what is the right answer for you?",
          "upvote_count": "111"
        },
        {
          "id": 732655,
          "date": "Thu 01 Dec 2022 14:35",
          "username": "Spavankomasetromain",
          "content": "How you plan to \\\"Assign the Elastic IP address to the ALB. \\\"?You are right an Application Load Balancer cannot be assigned an Elastic IP address. what is the right answer for you?",
          "upvote_count": "11"
        },
        {
          "id": 733787,
          "date": "Fri 02 Dec 2022 14:55",
          "username": "masetromain",
          "content": "You are right an Application Load Balancer cannot be assigned an Elastic IP address. what is the right answer for you?",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#956",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application in the AWS Cloud. The company has several third-party services that integrate with the application through a RESTful API. The API is a serverless implementation with an Amazon API Gateway regional API endpoint that integrates with several different AWS Lambda functions.<br><br>The application's data is nonrelational and is stored in an Amazon DynamoDB table. The application and the API are running in the eu-west-1 Region. The company needs the API to also be available in the us-east-1 Region. All data must be available in both Regions. A solutions architect already has deployed all the Lambda functions in us-east-1.<br><br>Which additional steps should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#956",
          "answers": [
            {
              "choice": "<p>A. Deploy a second API Gateway regional API endpoint in us-east-1. Create Lambda integration with the functions in us-east-1.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable DynamoDB Streams on the table in eu-west-1. Replicate all changes to a DynamoDB table in us-east-1.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the DynamoDB table to be a global table in eu-west-1 and in us-east-1.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Change the API Gateway API endpoint in eu-west-1 to an edge-optimized endpoint. Create Lambda integration with the functions in both Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a DynamoDB read replica in us-east-1.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 730540,
          "date": "Tue 29 Nov 2022 16:09",
          "username": "masetromain",
          "content": "I go witch A and C<br>C:<br>Starting today, you can convert your existing DynamoDB tables to global tables with a few clicks in the AWS Management Console, or using the AWS Command Line Interface (CLI), or the Amazon DynamoDB API. Previously, only empty tables could be converted to global tables. You had to guess your regional usage of a table at the time you created it. Now you can go global, or you can extend existing global tables to additional regions at any time.<br><br>https://aws.amazon.com/fr/blogs/aws/new-convert-your-single-region-amazon-dynamodb-tables-to-global-tables/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#957",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations. The company runs two firewall appliances in a centralized networking account. Each firewall appliance runs on a manually configured highly available Amazon EC2 instance. A transit gateway connects the VPC from the centralized networking account to VPCs of member accounts. Each firewall appliance uses a static private IP address that is then used to route traffic from the member accounts to the internet.<br><br>During a recent incident, a badly configured script initiated the termination of both firewall appliances. During the rebuild of the firewall appliances, the company wrote a new script to configure the firewall appliances at startup.<br><br>The company wants to modernize the deployment of the firewall appliances. The firewall appliances need the ability to scale horizontally to handle increased traffic when the network expands. The company must continue to use the firewall appliances to comply with company policy. The provider of the firewall appliances has confirmed that the latest version of the firewall code will work with all AWS services.<br><br>Which combination of steps should the solutions architect recommend to meet these requirements MOST cost-effectively? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#957",
          "answers": [
            {
              "choice": "<p>A. Deploy a Gateway Load Balancer in the centralized networking account. Set up an endpoint service that uses AWS PrivateLink.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy a Network Load Balancer in the centralized networking account. Set up an endpoint service that uses AWS PrivateLink.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Auto Scaling group and a launch template that uses the new script as user data to configure the firewall appliances. Create a target group that uses the instance target type.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Auto Scaling group. Configure an AWS Launch Wizard deployment that uses the new script as user data to configure the firewall appliances. Create a target group that uses the IP target type.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create VPC endpoints in each member account. Update the route tables to point to the VPC endpoints.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create VPC endpoints in the centralized networking account. Update the route tables in each member account to point to the VPC endpoints.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 730556,
          "date": "Tue 29 Nov 2022 16:29",
          "username": "masetromain",
          "content": "I go witch ACF<br><br>A:<br>Gateway Load Balancer helps you easily deploy, scale, and manage your third-party virtual appliances. It gives you one gateway for distributing traffic across multiple virtual appliances while scaling them up or down, based on demand. This decreases potential points of failure in your network and increases availability.<br><br>https://aws.amazon.com/fr/elasticloadbalancing/gateway-load-balancer/<br><br>C:<br>Each firewall appliance runs on a manually configured highly available Amazon EC2 instance.<br><br>F:<br>The company runs two firewall appliances in a centralized networking account.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#958",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application in the AWS Cloud. The application uses AWS Lambda functions and Amazon Elastic Container Service (Amazon ECS) containers that run with AWS Fargate technology as its primary compute. The load on the application is irregular. The application experiences long periods of no usage, followed by sudden and significant increases and decreases in traffic. The application is write-heavy and stores data in an Amazon Aurora MySQL database. The database runs on an Amazon RDS memory optimized DB instance that is not able to handle the load.<br><br>What is the MOST cost-effective way for the company to handle the sudden and significant changes in traffic?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#958",
          "answers": [
            {
              "choice": "<p>A. Add additional read replicas to the database. Purchase Instance Savings Plans and RDS Reserved Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the database to an Aurora multi-master DB cluster. Purchase Instance Savings Plans.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database to an Aurora global database. Purchase Compute Savings Plans and RDS Reserved Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to Aurora Serverless v1. Purchase Compute Savings Plans.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 738176,
          "date": "Wed 07 Dec 2022 18:37",
          "username": "ggrodskiy",
          "content": "Correct D",
          "upvote_count": "1"
        },
        {
          "id": 730565,
          "date": "Tue 29 Nov 2022 16:37",
          "username": "masetromain",
          "content": "In the real world I would have answered answer C.  But when i read the description of Aurora Serverless v1 which is an amazon product I think the answer is D<br><br>Amazon Aurora Serverless v1 (Amazon Aurora Serverless version 1) is an on-demand autoscaling configuration for Amazon Aurora. An Aurora Serverless v1 DB cluster is a DB cluster that scales compute capacity up and down based on your application's needs. This contrasts with Aurora provisioned DB clusters, for which you manually manage capacity. Aurora Serverless v1 provides a relatively simple, cost-effective option for infrequent, intermittent, or unpredictable workloads. It is cost-effective because it automatically starts up, scales compute capacity to match your application's usage, and shuts down when it's not in use.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#959",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using a single AWS Region for its ecommerce website. The website includes a web application that runs on several Amazon EC2 instances behind an Application Load Balancer (ALB). The website also includes an Amazon DynamoDB table. A custom domain name in Amazon Route 53 is linked to the ALB.  The company created an SSL/TLS certificate in AWS Certificate Manager (ACM) and attached the certificate to the ALB.  The company is not using a content delivery network as part of its design.<br><br>The company wants to replicate its entire application stack in a second Region to provide disaster recovery, plan for future growth, and provide improved access time to users. A solutions architect needs to implement a solution that achieves these goals and minimizes administrative overhead.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#959",
          "answers": [
            {
              "choice": "<p>A. Create an AWS CloudFormation template for the current infrastructure design. Use parameters for important system values, including Region. Use the CloudFormation template to create the new infrastructure in the second Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AWS Management Console to document the existing infrastructure design in the first Region and to create the new infrastructure in the second Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the Route 53 hosted zone record for the application to use weighted routing. Send 50% of the traffic to the ALB in each Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the Route 53 hosted zone record for the application to use latency-based routing. Send traffic to the ALB in each Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Update the configuration of the existing DynamoDB table by enabling DynamoDB Streams. Add the second Region to create a global table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create a new DynamoDB table. Enable DynamoDB Streams for the new table. Add the second Region to create a global table. Copy the data from the existing DynamoDB table to the new table as a one-time operation.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 731384,
          "date": "Wed 30 Nov 2022 12:19",
          "username": "masetromainmasetromain",
          "content": "I go with ADF<br><br>for A:<br>AWS CloudFormation simplifies provisioning and management on AWS. You can create templates for application or service architectures and instruct AWS CloudFormation to use those templates to quickly and reliably provision services or applications (known as \\\"stacks\\\"). You can also update or replicate stacks very easily if needed.<br><br>https://aws.amazon.com/cloudformation/resources/templates/<br><br>for D :<br>- and provide improved access time to users<br>Latency routing policy – Use the latency routing policy when you have resources in multiple AWS Regions and want to route traffic to the Region that provides the best latency. You can use latency routing to create records in a private hosted zone.<br><br>https://docs.aws.amazon.com/fr_fr/Route53/latest/DeveloperGuide/routing-policy.htmlFor F:<br> Previously, only empty tables could be converted to global tables. You had to guess your regional usage of a table at the time you created it. Now you can go global, or you can extend existing global tables to additional regions at any time.<br><br>Your applications can continue to use the table while we set up the replication. When you add a region to your table, DynamoDB begins populating the new replica using a snapshot of your existing table. Your applications can continue writing to your existing region while DynamoDB builds the new replica, and all in-flight updates will be eventually replicated to your new replica.<br>https://aws.amazon.com/fr/blogs/aws/new-convert-your-single-region-amazon-dynamodb-tables-to-global-tables/",
          "upvote_count": "11"
        },
        {
          "id": 731386,
          "date": "Wed 30 Nov 2022 12:19",
          "username": "masetromain",
          "content": "For F:<br> Previously, only empty tables could be converted to global tables. You had to guess your regional usage of a table at the time you created it. Now you can go global, or you can extend existing global tables to additional regions at any time.<br><br>Your applications can continue to use the table while we set up the replication. When you add a region to your table, DynamoDB begins populating the new replica using a snapshot of your existing table. Your applications can continue writing to your existing region while DynamoDB builds the new replica, and all in-flight updates will be eventually replicated to your new replica.<br>https://aws.amazon.com/fr/blogs/aws/new-convert-your-single-region-amazon-dynamodb-tables-to-global-tables/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#960",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is hosting a monolithic REST-based API for a mobile app on five Amazon EC2 instances in public subnets of a VPC.  Mobile clients connect to the API by using a domain name that is hosted on Amazon Route 53. The company has erupted a Route 53 multivalue answer routing policy with the IP addresses of all the EC2 instances. Recently, the app has been overwhelmed by large and sudden increases to traffic. The app has not been able to keep up with the traffic.<br><br>A solutions architect needs to implement a solution so that the app can handle the new and varying load.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#960",
          "answers": [
            {
              "choice": "<p>A. Separate the API into individual AWS Lambda functions. Configure an Amazon API Gateway REST API with Lambda integration for the backend. Update the Route 53 record to point to the API Gateway API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Containerize the API logic. Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Run the containers in the cluster by using Amazon EC2. Create a Kubernetes ingress. Update the Route 53 record to point to the Kubernetes ingress.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Auto Scaling group. Place all the EC2 instances in the Auto Scaling group. Configure the Auto Scaling group to perform scaling actions that are based on CPU utilization. Create an AWS Lambda function that reacts to Auto Scaling group changes and updates the Route 53 record.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Application Load Balancer (ALB) in front of the API. Move the EC2 instances to private subnets in the VPC.  Add the EC2 instances as targets for the ALB.  Update the Route 53 record to point to the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 731398,
          "date": "Wed 30 Nov 2022 12:28",
          "username": "masetromain",
          "content": "I think it's A or D. <br>A seems be great but I am not sure why \\\"Separate the API into individual AWS Lambda functions\\\"<br><br>D is possible:<br>https://aws.amazon.com/fr/premiumsupport/knowledge-center/api-gateway-application-load-balancers/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#961",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon API Gateway to deploy a private REST API that will provide access to sensitive data. The API must be accessible only from an application that is deployed in a VPC.  The company deploys the API successfully. However, the API is not accessible from an Amazon EC2 instance that is deployed in the VPC. <br><br>Which solution will provide connectivity between the EC2 instance and the API?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#961",
          "answers": [
            {
              "choice": "<p>A. Create an interface VPC endpoint for API Gateway. Attach an endpoint policy that allows apigateway:* actions. Disable private DNS naming for the VPC endpoint. Configure an API resource policy that allows access from the VPC.  Use the VPC endpoint's DNS name to access the API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an interface VPC endpoint for API Gateway. Attach an endpoint policy that allows the execute-api:lnvoke action. Enable private DNS naming for the VPC endpoint. Configure an API resource policy that allows access from the VPC endpoint. Use the API endpoint's DNS names to access the API.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Network Load Balancer (NLB) and a VPC link. Configure private integration between API Gateway and the NLB.  Use the API endpoint's DNS names to access the API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Application Load Balancer (ALB) and a VPC Link. Configure private integration between API Gateway and the ALB.  Use the ALB endpoint's DNS name to access the API.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 731410,
          "date": "Wed 30 Nov 2022 12:40",
          "username": "masetromain",
          "content": "I go with B:<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-apis.html<br>https://docs.aws.amazon.com/vpc/latest/privatelink/manage-dns-names.html<br>https://docs.aws.amazon.com/fr_fr/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#962",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software development company has multiple engineers who are working remotely. The company is running Active Directory Domain Services (AD DS) on an Amazon EC2 instance. The company's security policy states that all internal, nonpublic services that are deployed in a VPC must be accessible through a VPN. Multi-factor authentication (MFA) must be used for access to a VPN.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#962",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Site-to-Site VPN connection. Configure integration between a VPN and AD DS. Use an Amazon Workspaces client with MFA support enabled to establish a VPN connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Client VPN endpoint. Create an AD Connector directory for integration with AD DS. Enable MFA for AD Connector. Use AWS Client VPN to establish a VPN connection.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create multiple AWS Site-to-Site VPN connections by using AWS VPN CloudHub. Configure integration between AWS VPN CloudHub and AD DS. Use AWS Copilot to establish a VPN connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon WorkLink endpoint. Configure integration between Amazon WorkLink and AD DS. Enable MFA in Amazon WorkLink. Use AWS Client VPN to establish a VPN connection.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 731430,
          "date": "Wed 30 Nov 2022 12:55",
          "username": "masetromain",
          "content": "I go with B:<br>Use AD Connector seems logic<br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/prereq_connector.html<br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_connector_mfa.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#963",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating an application from on-premises infrastructure to the AWS Cloud. During migration design meetings, the company expressed concerns about the availability and recovery options for its legacy Windows file server. The file server contains sensitive business-critical data that cannot be recreated in the event of data corruption or data loss. According to compliance requirements, the data must not travel across the public internet. The company wants to move to AWS managed services where possible.<br><br>The company decides to store the data in an Amazon FSx for Windows File Server file system. A solutions architect must design a solution that copies the data to another AWS Region for disaster recovery (DR) purposes.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#963",
          "answers": [
            {
              "choice": "<p>A. Create a destination Amazon S3 bucket in the DR Region. Establish connectivity between the FSx for Windows File Server file system in the primary Region and the S3 bucket in the DR Region by using Amazon FSx File Gateway. Configure the S3 bucket as a continuous backup source in FSx File Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an FSx for Windows File Server file system in the DR Region. Establish connectivity between the VPC in the primary Region and the VPC in the DR Region by using AWS Site-to-Site VPN. Configure AWS DataSync to communicate by using VPN endpoints.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an FSx for Windows File Server file system in the DR Region. Establish connectivity between the VPC in the primary Region and the VPC in the DR Region by using VPC peering. Configure AWS DataSync to communicate by using interface VPC endpoints with AWS PrivateLink.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an FSx for Windows File Server file system in the DR Region Establish connectivity between the VPC in the primary Region and the VPC in the DR Region by using AWS Transit Gateway in each Region. Use AWS Transfer Family to copy files between the FSx for Windows File Server file system in the primary Region and the FSx for Windows File Server file system in the DR Region over the private AWS backbone network.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 731443,
          "date": "Wed 30 Nov 2022 13:19",
          "username": "masetromain",
          "content": "I go with B:<br>\\\"on-premises infrastructure to the AWS Cloud\\\" --> \\\"the data must not travel across the public internet\\\"<br>In this case for me the answer is aws direct connect, if you don't have aws direct connect the answer should be to use a VPN.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#964",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has IoT sensors that monitor traffic patterns throughout a large city. The company wants to read and collect data from the sensors and perform aggregations on the data.<br><br>A solutions architect designs a solution in which the IoT devices are streaming to Amazon Kinesis Data Streams. Several applications are reading from the stream. However, several consumers are experiencing throttling and are periodically encountering a ReadProvisionedThroughputExceeded error.<br><br>Which actions should the solutions architect take to resolve this issue? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#964",
          "answers": [
            {
              "choice": "<p>A. Reshard the stream to increase the number of shards in the stream.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the Kinesis Producer Library (KPL). Adjust the polling frequency.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use consumers with the enhanced fan-out feature.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Reshard the stream to reduce the number of shards in the stream.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use an error retry and exponential backoff mechanism in the consumer logic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Configure the stream to use dynamic partitioning.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 731461,
          "date": "Wed 30 Nov 2022 13:39",
          "username": "masetromainmasetromainmasetromainmasetromain",
          "content": "I go with BCD<br><br>ReadProvisionedThroughputExceeded <br>https://aws.amazon.com/premiumsupport/knowledge-center/kinesis-readprovisionedthroughputexceeded/<br><br>Follow data flow best practices to mitigate ReadProvisionedThroughputExceeded exceptions, use the following best practices:<br><br>* Resize your stream to increase the number of partitions in the stream.<br>* Reduce the size of GetRecords requests. You can do this by configuring the limit setting or by reducing the frequency of GetRecords requests.<br>* Distribute read and write operations as evenly as possible across all partitions in Data Streams.<br>* Use consumer applications with the enhanced distribution. For more information on enhanced distribution, see, Developing Custom Consumer Applications with Dedicated Throughput (Enhanced Distribution).<br>* Use error retry and exponential backoff mechanism in consumer logic in case of ReadProvisionedThroughputExceeded exceptions. For consumer applications that use an AWS SDK, requests are retried by default.D:<br>We need to reduce the number of shards in the stream.<br><br>A single shard can ingest up to 1 MB of data per second (including partition keys) or 1,000 records per second for writes. Similarly, if you scale your stream to 5,000 shards, the stream can ingest up to 5 GB per second or 5 million records per second. If you need more ingest capacity, you can easily scale up the number of shards in the stream using the AWS Management Console or the UpdateShardCount API.<br><br>https://docs.aws.amazon.com/streams/latest/dev/service-sizes-and-limits.htmlB:<br>The KPL is an easy-to-use, highly configurable library that helps you write to a Kinesis data stream. It acts as an intermediary between your producer application code and the Kinesis Data Streams API actions. The KPL performs the following primary tasks:<br>* Writes to one or more Kinesis data streams with an automatic and configurable retry mechanism<br>* Collects records and uses PutRecords to write multiple records to multiple shards per request<br>* Aggregates user records to increase payload size and improve throughput<br>* Integrates seamlessly with the Kinesis Client Library (KCL) to de-aggregate batched records on the consumer<br>* Submits Amazon CloudWatch metrics on your behalf to provide visibility into producer performance<br><br>https://docs.aws.amazon.com/streams/latest/dev/developing-producers-with-kpl.htmlC:<br>A few weeks ago, we launched two significant performance improving features for Amazon Kinesis Data Streams (KDS): enhanced fan-out and an HTTP/2 data retrieval API.<br>https://aws.amazon.com/fr/blogs/aws/kds-enhanced-fanout/",
          "upvote_count": "1111"
        },
        {
          "id": 731462,
          "date": "Wed 30 Nov 2022 13:40",
          "username": "masetromain",
          "content": "D:<br>We need to reduce the number of shards in the stream.<br><br>A single shard can ingest up to 1 MB of data per second (including partition keys) or 1,000 records per second for writes. Similarly, if you scale your stream to 5,000 shards, the stream can ingest up to 5 GB per second or 5 million records per second. If you need more ingest capacity, you can easily scale up the number of shards in the stream using the AWS Management Console or the UpdateShardCount API.<br><br>https://docs.aws.amazon.com/streams/latest/dev/service-sizes-and-limits.html",
          "upvote_count": "1"
        },
        {
          "id": 731464,
          "date": "Wed 30 Nov 2022 13:40",
          "username": "masetromain",
          "content": "B:<br>The KPL is an easy-to-use, highly configurable library that helps you write to a Kinesis data stream. It acts as an intermediary between your producer application code and the Kinesis Data Streams API actions. The KPL performs the following primary tasks:<br>* Writes to one or more Kinesis data streams with an automatic and configurable retry mechanism<br>* Collects records and uses PutRecords to write multiple records to multiple shards per request<br>* Aggregates user records to increase payload size and improve throughput<br>* Integrates seamlessly with the Kinesis Client Library (KCL) to de-aggregate batched records on the consumer<br>* Submits Amazon CloudWatch metrics on your behalf to provide visibility into producer performance<br><br>https://docs.aws.amazon.com/streams/latest/dev/developing-producers-with-kpl.html",
          "upvote_count": "1"
        },
        {
          "id": 731465,
          "date": "Wed 30 Nov 2022 13:40",
          "username": "masetromain",
          "content": "C:<br>A few weeks ago, we launched two significant performance improving features for Amazon Kinesis Data Streams (KDS): enhanced fan-out and an HTTP/2 data retrieval API.<br>https://aws.amazon.com/fr/blogs/aws/kds-enhanced-fanout/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#965",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed its corporate website in a VPC on two Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances are deployed in private subnets. The ALB is in a public subnet. A route to an internet gateway exists in the public subnet route table. The company has deployed an Amazon CloudFront distribution with the ALB as the origin.<br><br>The company's security team recently identified that malicious traffic is accessing the ALB directly. The company must deploy security controls to prevent common attack techniques, including cross-site scripting, and to protect against volumetric denials of service.<br><br>Which strategy should a solutions architect recommend to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#965",
          "answers": [
            {
              "choice": "<p>A. Migrate the ALB to a private subnet. Associate an AWS WAF web ACL with the ALB.  Update inbound rules on the ALB security group to allow traffic on port 443 only from CloudFront IP addresses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Associate an AWS WAF web ACL with the CloudFront distribution. Configure an origin access identity (OAI) on the ALB to drop access attempts that do not originate from CloudFront.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Associate an AWS WAF web ACL with the CloudFront distribution. Configure CloudFront to add a custom header to the requests that are sent to the ALB.  Configure advanced routing on the ALB to only forward requests that include the custom header that is set by CloudFront.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Associate an AWS WAF web ACL with the CloudFront distribution. Configure AWS WAF to add a custom header to the requests that are sent to the ALB.  Configure advanced routing on the ALB to only forward requests that include the custom header that is set by CloudFront.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 732776,
          "date": "Thu 01 Dec 2022 16:38",
          "username": "Spavanko",
          "content": "I thinks is D, because we need to have DDoS protection with WAF (https://aws.amazon.com/premiumsupport/knowledge-center/waf-mitigate-ddos-attacks/)<br>Solutions under C, do not provide DDoS protection.",
          "upvote_count": "1"
        },
        {
          "id": 731487,
          "date": "Wed 30 Nov 2022 13:59",
          "username": "masetromain",
          "content": "I go with C:<br>https://blogs.halodoc.io/implementation-of-custom-header-to-origin-requests/<br>https://jayendrapatil.com/aws-cloudfront-security/",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#966",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has millions of objects in an Amazon S3 bucket. The objects are in the S3 Standard storage class. All the S3 objects are accessed frequently. The number of users and applications that access the objects is increasing rapidly. The objects are encrypted with server-side encryption with AWS KMS keys (SSE-KMS).<br><br>A solutions architect reviews the company's monthly AWS invoice and notices that AWS KMS costs are increasing because of the high number of requests from Amazon S3. The solutions architect needs to optimize costs with minimal changes to the application.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#966",
          "answers": [
            {
              "choice": "<p>A. Create a new S3 bucket that has server-side encryption with customer-provided keys (SSE-C) as the encryption type. Copy the existing objects to the new S3 bucket. Specify SSE-C. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new S3 bucket that has server-side encryption with Amazon S3 managed keys (SSE-S3) as the encryption type. Use S3 Batch Operations to copy the existing objects to the new S3 bucket. Specify SSE-S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS CloudHSM to store the encryption keys. Create a new S3 bucket. Use S3 Batch Operations to copy the existing objects to the new S3 bucket. Encrypt the objects by using the keys from CloudHSM.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the S3 Intelligent-Tiering storage class for the S3 bucket. Create an S3 Intelligent-Tiering archive configuration to transition objects that are not accessed for 90 days to S3 Glacier Deep Archive.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 731494,
          "date": "Wed 30 Nov 2022 14:10",
          "username": "masetromain",
          "content": "I go with B :<br>To reduce the volume of Amazon S3 calls to AWS KMS, use Amazon S3 bucket keys, which are protected encryption keys that are reused for a limited time in Amazon S3. Bucket keys can reduce costs for AWS KMS requests by up to 99%. You can configure a bucket key for all objects in an Amazon S3 bucket, or for a specific object in an Amazon S3 bucket.<br>https://docs.aws.amazon.com/fr_fr/kms/latest/developerguide/services-s3.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#967",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An external audit of a company's serverless application reveals IAM policies that grant too many permissions. These policies are attached to the company's AWS Lambda execution roles. Hundreds of the company's Lambda functions have broad access permissions, such as full access to Amazon S3 buckets and Amazon DynamoDB tables. The company wants each function to have only the minimum permissions that the function needs to complete its task.<br><br>A solutions architect must determine which permissions each Lambda function needs.<br><br>What should the solutions architect do to meet this requirement with the LEAST amount of effort?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#967",
          "answers": [
            {
              "choice": "<p>A. Set up Amazon CodeGuru to profile the Lambda functions and search for AWS API calls. Create an inventory of the required API calls and resources for each Lambda function. Create new IAM access policies for each Lambda function. Review the new policies to ensure that they meet the company's business requirements.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on AWS CloudTrail logging for the AWS account. Use AWS Identity and Access Management Access Analyzer to generate IAM access policies based on the activity recorded in the CloudTrail log. Review the generated policies to ensure that they meet the company's business requirements.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on AWS CloudTrail logging for the AWS account. Create a script to parse the CloudTrail log, search for AWS API calls by Lambda execution role, and create a summary report. Review the report. Create IAM access policies that provide more restrictive permissions for each Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on AWS CloudTrail logging for the AWS account. Export the CloudTrail logs to Amazon S3. Use Amazon EMR to process the CloudTrail logs in Amazon S3 and produce a report of API calls and resources used by each execution role. Create a new IAM access policy for each role. Export the generated roles to an S3 bucket. Review the generated policies to ensure that they meet the company's business requirements.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 731605,
          "date": "Wed 30 Nov 2022 15:38",
          "username": "masetromain",
          "content": "I have a doubt I will answer B but C seems possible.<br><br>IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. IAM Access Analyzer identifies resources shared with external principals by using logic-based reasoning to analyze the resource-based policies in your AWS environment.<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#968",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations. The company creates a central VPC in an AWS account that is designated for networking in a single AWS Region. The central VPC has an AWS Site-to-Site VPN connection to the company's on-premises network. A solutions architect must create another AWS account that uses the same networking resources that the central VPC uses.<br><br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#968",
          "answers": [
            {
              "choice": "<p>A. Create a VPC in the new AWS account. Create a new Site-to-Site VPN connection for the on-premises connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Resource Access Manager to share the VPN connection in the central VPC with the new AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPC in the new AWS account. Configure a virtual private gateway to connect to the central VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Resource Access Manager to share the subnets in the central VPC with the new AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 731617,
          "date": "Wed 30 Nov 2022 17:08",
          "username": "masetromain",
          "content": "I go with D:<br>You can share non-default subnets with other accounts within your organization. To share subnets, you must first create a Resource Share with the subnets to be shared and the AWS accounts, organizational units, or an entire organization that you want to share the subnets with.<br>https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#969",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a web application on Amazon EC2 instances in a production AWS account. The company requires all logs generated from the web application to be copied to a central AWS account for analysis and archiving. The company's AWS accounts are currently managed independently. Logging agents are configured on the EC2 instances to upload the log files to an Amazon S3 bucket in the central AWS account.<br><br>A solutions architect needs to provide access for a solution that will allow the production account to store log files in the central account. The central account also needs to have read access to the log files.<br><br>What should the solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#969",
          "answers": [
            {
              "choice": "<p>A. Create a cross-account role in the central account. Assume the role from the production account when the logs are being copied.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a policy on the S3 bucket with the production account ID as the principal. Allow S3 access from a delegated user.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a policy on the S3 bucket with access from only the CIDR range of the EC2 instances in the production account. Use the production account ID as the principal.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a cross-account role in the production account. Assume the role from the production account when the logs are being copied.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 731637,
          "date": "Wed 30 Nov 2022 15:59",
          "username": "masetromain",
          "content": "I go with D:<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#970",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon EC2 instances to run business-critical applications. Software that is running on the EC2 instances recently caused Amazon GuardDuty to generate the PenTest:S3/KaliLinux finding for some of the company's environments. The company wants to prevent this software from running again. The company is using AWS Organizations to manage its AWS accounts.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#970",
          "answers": [
            {
              "choice": "<p>A. Configure Amazon Inspector to check the EC2 instances for the forbidden software and to send an Amazon Simple Notification Service (Amazon SNS) notification when the software is identified. Create an AWS Lambda function that stops the EC2 instances and notifies the company. Subscribe the Lambda function to the SNS topic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a centralized Amazon EventBridge (Amazon CloudWatch Events) bus to receive GuardDuty events from all accounts. Configure an EventBridge (CloudWatch Events) rule to invoke an AWS Lambda function when the GuardDuty event is generated. Configure the Lambda function to stop the EC2 instances and notify the company.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an SCP to prevent the software from being installed. Apply the SCP to the root OU for the organization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a library of approved EC2 AMIs. Create a catalog in AWS Service Catalog to deploy the AMIs for the organization. Update IAM policies to allow EC2 instances to be created only with Service Catalog AMIs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 731655,
          "date": "Wed 30 Nov 2022 16:11",
          "username": "masetromain",
          "content": "The answer seems to be A or B",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#971",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to create and manage multiple AWS accounts for a number of departments from a central location. The security team requires read-only access to all accounts from its own AWS account. The company is using AWS Organizations and created an account for the security team.<br><br>How should a solutions architect meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#971",
          "answers": [
            {
              "choice": "<p>A. Use the OrganizationAccountAccessRole IAM role to create a new IAM policy with read-only access in each member account. Establish a trust relationship between the IAM policy in each member account and the security account. Ask the security team to use the IAM policy to gain access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the OrganizationAccountAccessRole IAM role to create a new IAM role with read-only access in each member account. Establish a trust relationship between the IAM role in each member account and the security account. Ask the security team to use the IAM role to gain access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Ask the security team to use AWS Security Token Service (AWS STS) to call the AssumeRole API for the OrganizationAccountAccessRole IAM role in the management account from the security account. Use the generated temporary credentials to gain access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Ask the security team to use AWS Security Token Service (AWS STS) to call the AssumeRole API for the OrganizationAccountAccessRole IAM role in the member account from the security account. Use the generated temporary credentials to gain access.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 735131,
          "date": "Sun 04 Dec 2022 15:12",
          "username": "ggrodskiy",
          "content": "Correct B",
          "upvote_count": "1"
        },
        {
          "id": 734150,
          "date": "Sat 03 Dec 2022 02:15",
          "username": "MasterFox",
          "content": "I am think is B",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#972",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed an application that is running Windows Server on VMware vSphere VMs that the company hosts on premises. The application data is stored in a proprietary format that must be read through the application. The company manually provisioned the servers and the application.<br><br>As part of its disaster recovery plan, the company wants the ability to host its application on AWS temporarily if the company's on-premises environment becomes unavailable. The company wants the application to return to on-premises hosting after a disaster recovery event is complete. The RPO is 5 minutes.<br><br>Which solution meets these requirements with the LEAST amount of operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#972",
          "answers": [
            {
              "choice": "<p>A. Configure AWS DataSync. Replicate the data to Amazon Elastic Block Store (Amazon EBS) volumes. When the on-premises environment is unavailable, use AWS CloudFormation templates to provision Amazon EC2 instances and attach the EBS volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure CloudEndure Disaster Recovery. Replicate the data to replication Amazon EC2 instances that are attached to Amazon Elastic Block Store (Amazon EBS) volumes. When the on-premises environment is unavailable, use CloudEndure to launch EC2 instances that use the replicated volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision an AWS Storage Gateway file gateway. Replicate the data to an Amazon S3 bucket. When the on-premises environment is unavailable, use AWS Backup to restore the data to Amazon Elastic Block Store (Amazon EBS) volumes and launch Amazon EC2 instances from these EBS volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision an Amazon FSx for Windows File Server file system on AWS. Replicate the data to the file system. When the on-premises environment is unavailable, use AWS CloudFormation templates to provision Amazon EC2 instances and use AWS::CloudFormation::Init commands to mount the Amazon FSx file shares.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#973",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company is operating a highly regulated workload on premises. The company is trying to modernize its monolithic core payments application by changing to a microservices-based architecture with containers. The company is waiting for regulatory approval to run this workload on AWS. In the meantime, the company wants to start deploying the containerized application on premises.<br><br>A solutions architect needs to design a solution that gives the company the ability to run and update existing and new workloads even if the company loses network connectivity to an AWS Region.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#973",
          "answers": [
            {
              "choice": "<p>A. Install AWS Systems Manager, Docker, and Amazon Elastic Container Service (Amazon ECS) agents on the company's managed infrastructure on premises. Register the on-premises servers or VMs with an Amazon ECS Anywhere cluster on AWS. Launch the workload's containers on the cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Install Amazon EKS Distro on the company's managed infrastructure on premises. Register the on-premises servers or VMs with an Amazon EKS Anywhere cluster on AWS. Launch the workload's containers on the cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Download and run the Amazon EKS Anywhere installer on the company's managed infrastructure on premises. Create an Amazon EKS Anywhere cluster on premises. Launch the workload's containers on the cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the Amazon Elastic Container Service (Amazon ECS) control plane for an Amazon ECS Anywhere cluster. Install the ECS agent on the company's managed infrastructure on premises. Launch the workload's containers on the cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 735130,
          "date": "Sun 04 Dec 2022 15:11",
          "username": "ggrodskiy",
          "content": "Correct B. <br>EKS-D is available to install and manage yourself. You can run EKS-D on-premises, in a cloud, or on your own systems. EKS-D provides a path to having essentially the same Amazon EKS Kubernetes distribution running wherever you need to run it.<br>https://distro.eks.amazonaws.com/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#974",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations for a multi-account setup in the AWS Cloud. The company uses AWS Control Tower for governance and uses AWS Transit Gateway for VPC connectivity across accounts.<br><br>In an AWS application account, the company's application team has deployed a web application that uses AWS Lambda and Amazon RDS. The company's database administrators have a separate DBA account and use the account to centrally manage all the databases across the organization. The database administrators use an Amazon EC2 instance that is deployed in the DBA account to access an RDS database that is deployed in the application account.<br><br>The application team has stored the database credentials as secrets in AWS Secrets Manager in the application account. The application team is manually sharing the secrets with the database administrators. The secrets are encrypted by the default AWS managed key for Secrets Manager in the application account. A solutions architect needs to implement a solution that gives the database administrators access to the database and eliminates the need to manually share the secrets.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#974",
          "answers": [
            {
              "choice": "<p>A. Use AWS Resource Access Manager (AWS RAM) to share the secrets from the application account with the DBA account. In the DBA account, create an IAM role that is named DBA-Admin. Grant the role the required permissions to access the shared secrets. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the application account, create an IAM role that is named DBA-Secret. Grant the role the required permissions to access the secrets. In the DBA account, create an IAM role that is named DBA-Admin. Grant the DBA-Admin role the required permissions to assume the DBA-Secret role in the application account. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. In the DBA account, create an IAM role that is named DBA-Admin. Grant the role the required permissions to access the secrets and the default AWS managed key in the application account. In the application account, attach resource-based policies to the key to allow access from the DBA account. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. In the DBA account, create an IAM role that is named DBA-Admin. Grant the role the required permissions to access the secrets in the application account. Attach an SCP to the application account to allow access to the secrets from the DBA account. Attach the DBA-Admin role to the EC2 instance for access to the cross-account secrets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#975",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company implements a containerized application by using Amazon Elastic Container Service (Amazon ECS) and Amazon API Gateway. The application data is stored in Amazon Aurora databases and Amazon DynamoDB databases. The company automates infrastructure provisioning by using AWS CloudFormation. The company automates application deployment by using AWS CodePipeline.<br><br>A solutions architect needs to implement a disaster recovery (DR) strategy that meets an RPO of 2 hours and an RTO of 4 hours.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#975",
          "answers": [
            {
              "choice": "<p>A. Set up an Aurora global database and DynamoDB global tables to replicate the databases to a secondary AWS Region. In the primary Region and in the secondary Region, configure an API Gateway API with a Regional endpoint. Implement Amazon CloudFront with origin failover to route traffic to the secondary Region during a DR scenario.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Database Migration Service (AWS DMS), Amazon EventBridge (Amazon CloudWatch Events), and AWS Lambda to replicate the Aurora databases to a secondary AWS Region. Use DynamoDB Streams, EventBridge (CloudWatch Events), and Lambda to replicate the DynamoDB databases to the secondary Region. In the primary Region and in the secondary Region, configure an API Gateway API with a Regional endpoint. Implement Amazon Route 53 failover routing to switch traffic from the primary Region to the secondary Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Backup to create backups of the Aurora databases and the DynamoDB databases in a secondary AWS Region. In the primary Region and in the secondary Region, configure an API Gateway API with a Regional endpoint. Implement Amazon Route 53 failover routing to switch traffic from the primary Region to the secondary Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an Aurora global database and DynamoDB global tables to replicate the databases to a secondary AWS Region. In the primary Region and in the secondary Region, configure an API Gateway API with a Regional endpoint. Implement Amazon Route 53 failover routing to switch traffic from the primary Region to the secondary Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 735154,
          "date": "Sun 04 Dec 2022 15:53",
          "username": "ggrodskiy",
          "content": "Correct C. <br>https://docs.aws.amazon.com/aws-backup/latest/devguide/cross-region-backup.html",
          "upvote_count": "1"
        },
        {
          "id": 724916,
          "date": "Wed 23 Nov 2022 06:52",
          "username": "pvrhere",
          "content": "C is going to be cost effective, right? Also, cloudformation to deploy infrastructure is already in place.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#976",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to migrate an Amazon RDS for Oracle database to an RDS for PostgreSQL DB instance in another AWS account. A solutions architect needs to design a migration strategy that will require no downtime and that will minimize the amount of time necessary to complete the migration. The migration strategy must replicate all existing data and any new data that is created during the migration. The target database must be identical to the source database at completion of the migration process.<br><br>All applications currently use an Amazon Route 53 CNAME record as their endpoint for communication with the RDS for Oracle DB instance. The RDS for Oracle DB instance is in a private subnet.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#976",
          "answers": [
            {
              "choice": "<p>A. Create a new RDS for PostgreSQL DB instance in the target account. Use the AWS Schema Conversion Tool (AWS SCT) to migrate the database schema from the source database to the target database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AWS Schema Conversion Tool (AWS SCT) to create a new RDS for PostgreSQL DB instance in the target account with the schema and initial data from the source database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure VPC peering between the VPCs in the two AWS accounts to provide connectivity to both DB instances from the target account. Configure the security groups that are attached to each DB instance to allow traffic on the database port from the VPC in the target account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Temporarily allow the source DB instance to be publicly accessible to provide connectivity from the VPC in the target account. Configure the security groups that are attached to each DB instance to allow traffic on the database port from the VPC in the target account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS Database Migration Service (AWS DMS) in the target account to perform a full load plus change data capture (CDC) migration from the source database to the target database. When the migration is complete, change the CNAME record to point to the target DB instance endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use AWS Database Migration Service (AWS DMS) in the target account to perform a change data capture (CDC) migration from the source database to the target database. When the migration is complete, change the CNAME record to point to the target DB instance endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#977",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running its solution on AWS in a manually created VPC.  The company is using AWS CloudFormation to provision other parts of the infrastructure. According to a new requirement, the company must manage all infrastructure in an automatic way.<br><br>What should the company do to meet this new requirement with the LEAST effort?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#977",
          "answers": [
            {
              "choice": "<p>A. Create a new AWS Cloud Development Kit (AWS CDK) stack that strictly provisions the existing VPC resources and configuration. Use AWS CDK to import the VPC into the stack and to manage the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a CloudFormation stack set that creates the VPC.  Use the stack set to import the VPC into the stack.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new CloudFormation template that strictly provisions the existing VPC resources and configuration. From the CloudFormation console, create a new stack by importing the existing resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new CloudFormation template that creates the VPC.  Use the AWS Serverless Application Model (AWS SAM) CLI to import the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#978",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is processing financial records in the AWS Cloud. Throughout the day, records are uploaded to an Amazon S3 bucket for processing. Every night at midnight, an application processes the records. The application runs on a set of Amazon EC2 instances and is invoked by a cron job on each instance. The application processes all the records in a total of approximately 60 minutes and stores the result in a second S3 bucket.<br><br>A solutions architect needs to modernize the application by implementing a solution that processes the records with the least possible operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#978",
          "answers": [
            {
              "choice": "<p>A. Use an AWS Lambda function to process a single record. Create an AWS Step Functions state machine to invoke the Lambda function for each record. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to schedule the state machine to run at midnight.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Containerize the processing logic. Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster that runs in AWS Fargate mode. Configure an Amazon EventBridge (Amazon CloudWatch Events) rule to schedule invocation of the Fargate tasks at midnight.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use a single AWS Lambda function to process all the records. Use S3 Event Notifications to invoke the Lambda function at midnight.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Containerize the processing logic. Create an Amazon Elastic Container Service (Amazon ECS) cluster that runs in AWS Fargate mode. Configure Amazon Simple Notification Service (Amazon SNS) to schedule invocation of the Fargate tasks at midnight.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 735179,
          "date": "Sun 04 Dec 2022 16:23",
          "username": "ggrodskiy",
          "content": "Correct D",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#979",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has PHP applications that run in containers and also has a MySQL database. The company wants to move the applications and the database from on premises to AWS. The company has millions of users and will need to manage shared application data between the containers.<br><br>The company needs a solution that will minimize operational overhead and cost. The solution also must be scalable and highly available.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#979",
          "answers": [
            {
              "choice": "<p>A. Deploy containers on Amazon Elastic Container Service (Amazon ECS). Set up the containers to run the tasks on Amazon EC2 instances. Choose Amazon Elastic File System (Amazon EFS) as the volume type. Deploy an Amazon RDS Multi-AZ DB instance with read replicas as the database solution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy containers on Amazon Elastic Container Service (Amazon ECS). Set up the containers to run the tasks on AWS Fargate. Choose Amazon Elastic File System (Amazon EFS) as the volume type. Deploy Amazon Aurora Serverless as the database solution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy containers on Amazon Elastic Kubernetes Service (Amazon EKS). Set up the containers to run the tasks on AWS Fargate. Choose Amazon S3 as the volume type. Deploy Amazon Aurora Serverless as the database solution.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy containers on Amazon Elastic Container Service (Amazon ECS). Set up the containers to run the tasks on AWS Fargate. Choose Amazon Elastic Block Store (Amazon EBS) as the volume type. Deploy Amazon Aurora Serverless as the database solution.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 737658,
          "date": "Wed 07 Dec 2022 10:18",
          "username": "ggrodskiy",
          "content": "https://aws.amazon.com/blogs/containers/developers-guide-to-using-amazon-efs-with-amazon-ecs-and-aws-fargate-part-1/",
          "upvote_count": "1"
        },
        {
          "id": 735201,
          "date": "Sun 04 Dec 2022 16:36",
          "username": "ggrodskiy",
          "content": "Correct B",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#980",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a traditional web application on Amazon EC2 instances. The company needs to refactor the application as microservices that run on containers. Separate versions of the application exist in two distinct environments: production and testing. Load for the application is variable, but the minimum load and the maximum load are known. A solutions architect needs to design the updated application with a serverless architecture that minimizes operational complexity.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#980",
          "answers": [
            {
              "choice": "<p>A. Upload the container images to AWS Lambda as functions. Configure a concurrency limit for the associated Lambda functions to handle the expected peak load. Configure two separate Lambda integrations within Amazon API Gateway: one for production and one for testing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Upload the container images to Amazon Elastic Container Registry (Amazon ECR). Configure two auto scaled Amazon Elastic Container Service (Amazon ECS) clusters with the Fargate launch type to handle the expected load. Deploy tasks from the ECR images. Configure two separate Application Load Balancers to direct traffic to the ECS clusters.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Upload the container images to Amazon Elastic Container Registry (Amazon ECR). Configure two auto scaled Amazon Elastic Kubernetes Service (Amazon EKS) clusters with the Fargate launch type to handle the expected load. Deploy tasks from the ECR images. Configure two separate Application Load Balancers to direct traffic to the EKS clusters.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Upload the container images to AWS Elastic Beanstalk. In Elastic Beanstalk, create separate environments and deployments for production and testing. Configure two separate Application Load Balancers to direct traffic to the Elastic Beanstalk deployments.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#981",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an image-processing service in the AWS Cloud. The company uses a custom on-premises application to call the service from its on-premises systems over an AWS Direct Connect connection. The application sends image-processing requests to software that is hosted on Amazon EC2 instances. The image data is embedded within the requests. The EC2 instances are in an Auto Scaling group and run behind a Network Load Balancer (NLB). The Auto Scaling group has a minimum capacity of two instances.<br><br>The company is receiving tens of thousands of image-processing requests at the same time each day and is experiencing errors. The processing of the requests is not time critical. For much of the day, the application sends no requests.<br><br>The company wants to improve the application's reliability and minimize the number of failed image-processing requests. The company also wants to reduce cost.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#981",
          "answers": [
            {
              "choice": "<p>A. Add a target tracking scaling policy based on a memory utilization metric that has a target value of 90%. Configure the Auto Scaling group to use additional Spot Instances when scaling events occur.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the application to upload the images to Amazon S3. Configure Amazon Simple Queue Service (Amazon SQS) notifications for object uploads. Rewrite the image-processing code that runs on the EC2 instances to receive SQS messages with the object reference so that the messages are processed asynchronously. Remove the NLB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function that includes the image-processing logic. Deploy the Lambda function in the VPC that hosts the EC2 instances. Update the target group on the NLB to invoke the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Lambda function that includes the image-processing logic. Change the application to upload the images to Amazon S3. Configure Amazon Simple Notification Service (Amazon SNS) notifications for object uploads with a retry policy to invoke the Lambda function. Remove the NLB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 737561,
          "date": "Wed 07 Dec 2022 09:08",
          "username": "ggrodskiy",
          "content": "Correct A",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#982",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company has an on-premises data center in Europe. The company also has a multi-Region AWS presence that includes the eu-west-1 and us-east-1 Regions. The company wants to be able to route network traffic from its on-premises infrastructure into VPCs in either of those Regions. The company also needs to support traffic that is routed directly between VPCs in those Regions. No single points of failure can exist on the network.<br><br>The company already has created two 1 Gbps AWS Direct Connect connections from its on-premises data center. Each connection goes into a separate Direct Connect location in Europe for high availability. These two locations are named DX-A and DX-B, respectively. Each Region has a single AWS Transit Gateway that is configured to route all inter-VPC traffic within that Region.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#982",
          "answers": [
            {
              "choice": "<p>A. Create a private VIF from the DX-A connection into a Direct Connect gateway. Create a private VIF from the DX-B connection into the same Direct Connect gateway for high availability. Associate both the eu-west-1 and us-east-1 transit gateways with the Direct Connect gateway. Peer the transit gateways with each other to support cross-Region routing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a transit VIF from the DX-A connection into a Direct Connect gateway. Associate the eu-west-1 transit gateway with this Direct Connect gateway. Create a transit VIF from the DX-B connection into a separate Direct Connect gateway. Associate the us-east-1 transit gateway with this separate Direct Connect gateway. Peer the Direct Connect gateways with each other to support high availability and cross-Region routing.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a transit VIF from the DX-A connection into a Direct Connect gateway. Create a transit VIF from the DX-B connection into the same Direct Connect gateway for high availability. Associate both the eu-west-1 and us-east-1 transit gateways with this Direct Connect gateway. Configure the Direct Connect gateway to route traffic between the transit gateways.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a transit VIF from the DX-A connection into a Direct Connect gateway. Create a transit VIF from the DX-B connection into the same Direct Connect gateway for high availability. Associate both the eu-west-1 and us-east-1 transit gateways with this Direct Connect gateway. Peer the transit gateways with each other to support cross-Region routing.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#983",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an AWS CloudFormation template to deploy an Amazon Elastic Container Service (Amazon ECS) service into a production environment. The template includes an Amazon S3 bucket that is named by using a common prefix with the CloudFormation stack name.<br><br>The company uses the same template to create temporary environments for development and continuous integration. Developers can create environments successfully, but they receive errors from CloudFormation when they attempt to delete the environments. The developers often need to delete and recreate stacks with the same names as part of the development and testing process.<br><br>Which combination of steps should a solutions architect take to modify the solution to resolve this issue? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#983",
          "answers": [
            {
              "choice": "<p>A. Associate an AWS Lambda function with a CloudFormation custom resource to delete all keys that are present in a given S3 bucket. Implement this custom resource as part of the application's CloudFormation template.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the S3 bucket resource in the CloudFormation template by specifying Delete for the DeletionPolicy attribute. Specify the CAPABILITY_DELETE_NONEMPTY capability to process CloudFormation delete operations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the S3 bucket resource in the CloudFormation template by specifying Retain for the DeletionPolicy attribute. Configure an AWS Config custom rule to run every 24 hours to identify, empty, and delete buckets that are no longer owned by a CloudFormation stack.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Ensure that CloudFormation operations are being invoked by a role that has s3:DeleteObject permissions on all objects in the bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Modify the S3 bucket resource in the CloudFormation template to configure a bucket policy that grants s3:DeleteObject permissions on all objects in the bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#984",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to move its three-stage web application to the AWS Cloud. The three stages are development, test, and production. Each stage must use its own dedicated VPC.  The company wants to access the stages through IPsec connections from the company's main office location.<br><br>Which combination of steps should a solutions architect implement in the network design to meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#984",
          "answers": [
            {
              "choice": "<p>A. Create a dedicated networking VPC that includes a virtual private gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a transit gateway. Attach all the VPCs to the transit gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create security groups in each VPC to control access to and from the application resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a customer gateway. Create a VPN connection. Attach the VPN connection to the transit gateway by specifying the customer gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a customer gateway. Create a VPN connection. Attach the VPN connection to the virtual private gateway by specifying the customer gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create security groups for the transit gateway to control network access to the application resources.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#985",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to move its write-intensive Amazon RDS for PostgreSQL database from the eu-west-1 Region to the eu-north-1 Region. As part of the migration, the company needs to change from Amazon RDS for PostgreSQL to Amazon Aurora PostgreSQL.<br><br>The company is using a new AWS account to host a new Aurora PostgreSQL DB cluster. The RDS database is encrypted with an AWS managed AWS Key Management Service (AWS KMS) key. There must be no interruption to applications that use the RDS for PostgreSQL DB instance.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#985",
          "answers": [
            {
              "choice": "<p>A. Create VPC peering between the VPCs in both accounts. Take a snapshot of the RDS DB instance. Export the snapshot to Amazon S3. Create an S3 gateway endpoint. Use the S3 sync command for ongoing synchronization of data. Restore the snapshot from Amazon S3 in the Aurora account. Migrate the snapshot to the Aurora DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create VPC peering between the VPCs in both accounts. Import the AWS managed KMS key to the Aurora account. Take a snapshot of the RDS DB instance. Share the snapshot with the Aurora account. Copy the shared snapshot to eu-north-1 in the Aurora account. Migrate the shared snapshot to the Aurora DB cluster. Use AWS Database Migration Service (AWS DMS) with ongoing replication to complete the migration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create VPC peering between the VPCs in both accounts. Copy the AWS managed KMS key to the Aurora account. Create an Aurora cross-Region read replica of the RDS DB instance in the Aurora account. Promote the read replica from standby DB instance to primary DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create VPC peering between the VPCs in both accounts. Create a multi-Region customer managed KMS key in the RDS account, and share the key with the Aurora account. Modify the cluster to use the customer managed KMS key. Take a snapshot of the RDS DB instance. Share the snapshot with the Aurora account. Copy the shared snapshot to eu-north-1 in the Aurora account. Migrate the shared snapshot to the Aurora DB cluster. Use AWS Database Migration Service (AWS DMS) with ongoing replication to complete the migration.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#986",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage multiple AWS accounts. The accounts share an Amazon Simple Queue Service (Amazon SQS) queue. The SQS queue is also shared with other AWS accounts outside the organization. All internal and external accounts have access to send and receive messages according to a permissions policy that is attached to the SQS queue. The company wants to identify any external principals that have access to the SQS queue.<br><br>How should a solutions architect meet this requirement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#986",
          "answers": [
            {
              "choice": "<p>A. Set up an AWS CloudTrail trail that logs data events. Use CloudTrail logs to track Amazon SQS API activities by any external principals.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an AWS Identity and Access Management Access Analyzer to create an analyzer with the current organization as a zone of trust. Filter by external findings on the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up an AWS CloudTrail trail that logs management events. Use CloudTrail logs to track Amazon SQS API activities by any external principals.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Identity and Access Management Access Analyzer to create an analyzer with the current account as a zone of trust. Filter by external findings on the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#987",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to retire its Oracle Solaris NFS storage arrays. The company requires rapid data migration over its internet network connection to a combination of destinations for Amazon S3, Amazon Elastic File System (Amazon EFS), and Amazon FSx for Windows File Server. The company also requires a full initial copy, as well as incremental transfers of changes until the retirement of the storage arrays. All data must be encrypted and checked for integrity.<br><br>What should a solutions architect recommend to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#987",
          "answers": [
            {
              "choice": "<p>A. Configure CloudEndure. Create a project and deploy the CloudEndure agent and token to the storage array. Run the migration plan to start the transfer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS DataSync. Configure the DataSync agent and deploy it to the local network. Create a transfer task and start the transfer.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the aws S3 sync command. Configure the AWS client on the client side with credentials. Run the sync command to start the transfer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS Transfer for FTP. Configure the FTP client with credentials. Script the client to connect and sync to start the transfer.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#988",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use Amazon S3 for object storage. Users must be able to access the objects from devices that are connected to their on-premises private network or Amazon EC2 instances. The company has configured AWS Direct Connect and AWS Site-to-Site VPN as a backup. The company does not want to route S3 traffic over the public Internet. The company also requires all data that is stored in S3 buckets to be appropriately classified by data type with a tag named DataClassification.<br><br>Which combination of steps should a solutions architect take to meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#988",
          "answers": [
            {
              "choice": "<p>A. Configure a gateway VPC endpoint to securely route traffic from on premises to the S3 buckets. Configure an interface VPC endpoint to route traffic between the S3 buckets and EC2 instances over the AWS private network.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an interface VPC endpoint to securely route traffic from on premises to the S3 buckets. Configure a gateway VPC endpoint to route traffic between the S3 buckets and EC2 instances over the AWS private network.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Amazon GuardDuty to identify S3 buckets that are missing the DataClassification tag. Create an Amazon Simple Notification Service (Amazon SNS) topic. Deliver notifications to the topic whenever an untagged S3 bucket is identified.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure AWS Security Hub to identify S3 buckets that are missing the DataClassification tag. Create an Amazon Simple Notification Service (Amazon SNS) topic. Deliver notifications to the topic whenever an untagged S3 bucket is identified.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure AWS Config to identify S3 buckets that are missing the DataClassification tag. Generate a report of all resources that AWS Config identifies as missing the tag.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Configure Amazon Macie to scan all S3 buckets in the account on a scheduled basis. Integrate Macie with Amazon EventBridge (Amazon CloudWatch Events). Create an AWS Lambda function to validate the data classification inferred by Macie and to add the missing tag.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 737612,
          "date": "Wed 07 Dec 2022 09:51",
          "username": "ggrodskiy",
          "content": "Correct AEF",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#989",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a new game app for mobile devices. The app has two user tiers: one tier for free-play users and another tier for premium users.<br><br>The company currently uses custom identity authentication across its apps. The company wants to continue to use custom authentication if possible. However, the company's custom identity provider (IdP) is not compatible with either the SAML or Open ID Connect (OIDC) standards. A solutions architect needs to design an authentication approach that makes it easy to transition free-play users to premium users.<br><br>Which design will meet these requirements with the LEAST development effort?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#989",
          "answers": [
            {
              "choice": "<p>A. Create a single Amazon Cognito identity pool. Develop an authentication provider for the pool that calls the existing custom IdP. Implement two separate authentication flows in the mobile app: one for the free-play users and one for the premium users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon Cognito user pool for the premium users. Add a user pool sign-in through the custom IdP. Create a second Amazon Cognito user pool to provide guest access for the free-play users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create two Amazon Cognito identity pools. Develop an authentication provider for the premium user identity pool that calls the existing custom IdP. For the second identity pool, configure an authentication flow for the free-play users.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a single Amazon Cognito user pool. Add a user pool sign-in through the custom IdP. Set up Amazon Cognito guest access in the same user pool for the free-play users.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#990",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an Amazon S3 bucket that contains millions of unencrypted objects. To comply with a recent security audit, a solutions architect needs to ensure that all objects are encrypted and needs to compile a list of objects that contain sensitive data. Many applications access objects in the S3 bucket, and the development team has limited resources.<br><br>Which solution will meet these requirements with the LEAST development effort?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#990",
          "answers": [
            {
              "choice": "<p>A. Run an Amazon Inspector report on the S3 bucket to identify sensitive data. Create a new S3 bucket with default encryption enabled. Transfer the unencrypted objects to the new S3 bucket. Update the applications to access the new S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Run an Amazon Macie report on the S3 bucket to identify sensitive data. Create a new S3 bucket with default encryption enabled. Transfer the unencrypted objects to the new S3 bucket. Update the applications to access the new S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Run an Amazon Inspector report against the S3 bucket to identify sensitive data. Modify the S3 bucket to enable default encryption. Use an Amazon S3 Inventory report and Amazon S3 Batch Operations to encrypt the existing unencrypted objects in the same S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Run an Amazon Macie report on the S3 bucket to identify sensitive data. Modify the S3 bucket to enable default encryption. Use an S3 Inventory report and S3 Batch encrvnt the existing unencrypted objects in the same S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 735353,
          "date": "Sun 04 Dec 2022 19:33",
          "username": "ggrodskiy",
          "content": "Correct B. <br>Amazon Macie generates findings when it detects potential policy violations or issues with the security or privacy of your Amazon Simple Storage Service (Amazon S3) buckets, or it discovers sensitive data in S3 objects. A finding is a detailed report of a potential issue or sensitive data that Macie found. Each finding provides a severity rating, information about the affected resource, and additional details, such as when and how Macie found the issue or data. Macie stores your policy and sensitive data findings for 90 days.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#991",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is hosting a critical application on a single Amazon EC2 instance. The application uses an Amazon ElastiCache for Redis single-node cluster for an in-memory data store. The application uses an Amazon RDS for MariaDB DB instance for a relational database. For the application to function, each piece of the infrastructure must be healthy and must be in an active state.<br><br>A solutions architect needs to improve the application's architecture so that the infrastructure can automatically recover from failure with the least possible downtime.<br><br>Which combination of steps will meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#991",
          "answers": [
            {
              "choice": "<p>A. Use an Elastic Load Balancer to distribute traffic across multiple EC2 instances. Ensure that the EC2 instances are part of an Auto Scaling group that has a minimum capacity of two instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an Elastic Load Balancer to distribute traffic across multiple EC2 instances. Ensure that the EC2 instances are configured in unlimited mode.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the DB instance to create a read replica in the same Availability Zone. Promote the read replica to be the primary DB instance in failure scenarios.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the DB instance to create a Multi-AZ deployment that extends across two Availability Zones.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a replication group for the ElastiCache for Redis cluster. Configure the cluster to use an Auto Scaling group that has a minimum capacity of two instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 733560,
          "date": "Fri 02 Dec 2022 09:05",
          "username": "ggrodskiy",
          "content": "Correct ADE",
          "upvote_count": "1"
        },
        {
          "id": 725458,
          "date": "Thu 24 Nov 2022 01:10",
          "username": "pvrhere",
          "content": "infrastructure must be healthy and must be in an 'active' state - Multi AZ deployment<br>HIgh availability to Elasticcache for redis",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#992",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an unauthenticated static website (www.example.com) that includes a registration form for users. The website uses Amazon S3 for hosting and uses Amazon CloudFront as the content delivery network with AWS WAF configured. When the registration form is submitted, the website calls an Amazon API Gateway API endpoint that invokes an AWS Lambda function to process the payload and forward the payload to an external API call.<br><br>During testing, a solutions architect encounters a cross-origin resource sharing (CORS) error. The solutions architect confirms that the CloudFront distribution origin has the Access-Control-Allow-Origin header set to www.example.com.<br><br>What should the solutions architect do to resolve the error?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#992",
          "answers": [
            {
              "choice": "<p>A. Change the CORS configuration on the S3 bucket. Add rules for CORS to the AllowedOrigin element for www.example.com.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable the CORS setting in AWS WAF.  Create a web ACL rule in which the Access-Control-Allow-Origin header is set to www.example.com.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable the CORS setting on the API Gateway API endpoint. Ensure that the API endpoint is configured to return all responses that have the Access-Control-Allow-Origin header set to www.example.com.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable the CORS setting on the Lambda function. Ensure that the return code of the function has the Access-Control-Allow-Origin header set to www.example.com.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#993",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an organization in AWS Organizations to manage AWS accounts. For each new project, the company creates a new linked account. After the creation of a new account, the root user signs in to the new account and creates a service request to increase the service quota for Amazon EC2 instances. A solutions architect needs to automate this process.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#993",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect creation of a new account. Send the event to an Amazon Simple Notification Service (Amazon SNS) topic that invokes an AWS Lambda function. Configure the Lambda function to run the request-service-quota-increase command to request a service quota increase for EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a Service Quotas request template in the management account. Configure the desired service quota increases for EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Config rule in the management account to set the service quota for EC2 instances. Q<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect creation of a new account. Send the event to an Amazon Simple Notification Service (Amazon SNS) topic that invokes an AWS Lambda function. Configure the Lambda function to run the create-case command to request a service quota increase for EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 735386,
          "date": "Sun 04 Dec 2022 20:15",
          "username": "ggrodskiy",
          "content": "correct B<br>https://docs.aws.amazon.com/servicequotas/latest/userguide/organization-templates.html",
          "upvote_count": "1"
        },
        {
          "id": 725462,
          "date": "Thu 24 Nov 2022 01:23",
          "username": "pvrhere",
          "content": "https://aws.amazon.com/blogs/mt/simplifying-setup-for-new-accounts-using-service-quotas/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#994",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to record key performance indicators (KPIs) from its application as part of a strategy to convert to a user-based licensing schema. The application is a multi-tier application with a web-based UI. The company saves all log files to Amazon CloudWatch by using the CloudWatch agent. All logins to the application are saved in a log file.<br><br>As part of the new license schema, the company needs to find out how many unique users each client has on a daily basis, weekly basis, and monthly basis.<br><br>Which solution will provide this information with the LEAST change to the application?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#994",
          "answers": [
            {
              "choice": "<p>A. Configure an Amazon CloudWatch Logs metric filter that saves each successful login as a metric. Configure the user name and client name as dimensions for the metric.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the application logic to make each successful login generate a call to the AWS SDK to increment a custom metric that records user name and client name dimensions in CloudWatch.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the CloudWatch agent to extract successful login metrics from the logs. Additionally, configure the CloudWatch agent to save the successful login metrics as a custom metric that uses the user name and client name as dimensions for the metric.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an AWS Lambda function to consume an Amazon CloudWatch Logs stream of the application logs. Additionally, configure the Lambda function to increment a custom CloudWatch that uses the user name and client name as dimensions for the metric.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#995",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's solutions architect is reviewing a web application that runs on AWS. The application references static assets in an Amazon S3 bucket in the us-east-1 Region. The company needs resiliency across multiple AWS Regions. The company already has created an S3 bucket in a second Region.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#995",
          "answers": [
            {
              "choice": "<p>A. Configure the application to write each object to both S3 buckets. Set up an Amazon Route 53 public hosted zone with a record set by using a weighted routing policy for each S3 bucket. Configure the application to reference the objects by using the Route 53 DNS name.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function to copy objects from the S3 bucket in us-east-1 to the S3 bucket in the second Region. Invoke the Lambda function each time an object is written to the S3 bucket in us-east-1. Set up an Amazon CloudFront distribution with an origin group that contains the two S3 buckets as origins.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure replication on the S3 bucket in us-east-1 to replicate objects to the S3 bucket in the second Region. Set up an Amazon CloudFront distribution with an origin group that contains the two S3 buckets as origins.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure replication on the S3 bucket in us-east-1 to replicate objects to the S3 bucket in the second Region. If Lawyer is required, update the application code to load S3 objects from the S3 bucket in the second Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 733705,
          "date": "Fri 02 Dec 2022 13:21",
          "username": "ggrodskiy",
          "content": "Correct C. <br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#996",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage its AWS accounts. A solutions architect must design a solution in which only administrator roles are allowed to use IAM actions. However, the solutions architect does not have access to all the AWS accounts throughout the company.<br><br>Which solution meets these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#996",
          "answers": [
            {
              "choice": "<p>A. Create an SCP that applies to all the AWS accounts to allow IAM actions only for administrator roles. Apply the SCP to the root OU.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS CloudTrail to invoke an AWS Lambda function for each event that is related to IAM actions. Configure the function to deny the action if the user who invoked the action is not an administrator.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an SCP that applies to all the AWS accounts to deny IAM actions for all users except for those with administrator roles. Apply the SCP to the root OU.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set an IAM permissions boundary that allows IAM actions. Attach the permissions boundary to every administrator role across all the AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#997",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using many Amazon S3 buckets to hold confidential data. Some of the S3 buckets are riot encrypted. The company wants to use AWS Key Management Service (AWS KMS) customer managed keys to encrypt the S3 buckets. The company wants a solution that will detect any S3 buckets that are not encrypted and apply AWS KMS encryption to each noncompliant S3 bucket.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#997",
          "answers": [
            {
              "choice": "<p>A. Configure the s3-default-encryption-kms AWS Config managed rule with manual remediation to check for AWS KMS encryption on the S3 buckets. Modify the properties of the noncompliant S3 buckets to turn on AWS KMS encryption.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a custom AWS Config rule with manual remediation to check for AWS KMS encryption on the S3 buckets. Modify the properties of the noncompliant buckets to turn on AWS KMS encryption.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the s3-default-encryption-kms AWS Config managed rule. Create an automatic remediation script for the rule that will turn on AWS KMS encryption for any noncompliant buckets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure a custom AWS Config rule to check for AWS KMS encryption on the S3 buckets. Create an automatic remediation script for the rule that will turn on AWS KMS encryption for any noncompliant buckets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 736041,
          "date": "Mon 05 Dec 2022 16:15",
          "username": "ggrodskiy",
          "content": "Correct C. <br>https://docs.aws.amazon.com/config/latest/developerguide/s3-default-encryption-kms.html",
          "upvote_count": "1"
        },
        {
          "id": 733738,
          "date": "Fri 02 Dec 2022 14:11",
          "username": "ggrodskiy",
          "content": "D or B",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#998",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to migrate two individual applications from on premises to AWS:<br><br>• The first application is a legacy custom application that is hosted on a physical Windows server. The application source code is no longer available. The application has little documentation, has hardcoded operating system configuration settings, and is used by an external third party.<br>• The second application is an IBM Db2 database that is hosted on a single Linux VM that uses network-attached storage (NAS) to store the database data. The company uses this database internally for employee records.<br><br>The applications are hosted in a data center that the company plans to decommission in 90 days. Where possible, the company must use managed AWS services.<br><br>Which actions for migration should a solutions architect recommend to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#998",
          "answers": [
            {
              "choice": "<p>A. Migrate the Windows server with the legacy application to Amazon EC2 by using AWS Application Migration Service (CloudEndure Migration).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the Linux VM with the IBM Db2 database service to an Amazon EC2 instance by using AWS Application Migration Service (CloudEndure Migration).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the Windows server with the legacy application to Amazon EC2 by using AWS Server Migration Service (AWS SMS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the IBM Db2 database data to Amazon RDS for MySQL by using AWS Database Migration Service (AWS DMS) and the AWS Schema Conversion Tool replication agent.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Migrate the IBM Db2 database data to Amazon RDS for MySQL by using AWS DataSync and the AWS Schema Conversion Tool data extraction agent.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 733858,
          "date": "Fri 02 Dec 2022 16:11",
          "username": "ggrodskiy",
          "content": "AD<br>https://aws.amazon.com/about-aws/whats-new/2022/07/aws-database-migration-ibm-db2-zos-source/",
          "upvote_count": "1"
        },
        {
          "id": 725494,
          "date": "Thu 24 Nov 2022 02:32",
          "username": "pvrhere",
          "content": "Isn't it A & D?",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#999",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to improve an application that is hosted in the AWS Cloud. The application uses an Amazon Aurora MySQL DB instance that is experiencing overloaded connections. Most of the application's operations insert records into the database. The application currently stores credentials in a text-based configuration file.<br><br>The solutions architect needs to implement a solution so that the application can handle the current connection load. The solution must keep the credentials secure and must provide the ability to rotate the credentials automatically on a regular basis.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#999",
          "answers": [
            {
              "choice": "<p>A. Deploy an Amazon RDS Proxy layer in front of the DB instance. Store the connection credentials as a secret in AWS Secrets Manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an Amazon RDS Proxy layer in front of the DB instance. Store the connection credentials in AWS Systems Manager Parameter Store.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Aurora Replica. Store the connection credentials as a secret in AWS Secrets Manager.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Aurora Replica. Store the connection credentials in AWS Systems Manager Parameter Store.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 733872,
          "date": "Fri 02 Dec 2022 16:26",
          "username": "ggrodskiy",
          "content": "A<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#1000",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to establish a dedicated connection between its on-premises infrastructure and AWS. The company is setting up a 1 Gbps AWS Direct Connect connection to its account VPC.  The architecture includes a transit gateway and a Direct Connect gateway to connect multiple VPCs and the on-premises infrastructure.<br><br>The company must connect to VPC resources over a transit VIF by using the Direct Connect connection.<br><br>Which combination of steps will meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1000",
          "answers": [
            {
              "choice": "<p>A. Update the 1 Gbps Direct Connect connection to 10 Gbps.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Advertise the on-premises network prefixes over the transit VIF. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Advertise the VPC prefixes from the Direct Connect gateway to the on-premises network over the transit VIF. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the Direct Connect connection's MACsec encryption mode attribute to must_encrypt.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Associate a MACsec Connection Key Name/Connectivity Association Key (CKN/CAK) pair with the Direct Connect connection.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#1001",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's solutions architect needs to provide secure Remote Desktop connectivity to users for Amazon EC2 Windows instances that are hosted in a VPC.  The solution must integrate centralized user management with the company's on-premises Active Directory. Connectivity to the VPC is through the internet. The company has hardware that can be used to establish an AWS Site-to-Site VPN connection.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1001",
          "answers": [
            {
              "choice": "<p>A. Deploy a managed Active Directory by using AWS Directory Service for Microsoft Active Directory. Establish a trust with the on-premises Active Directory. Deploy an EC2 instance as a bastion host in the VPC.  Ensure that the EC2 instance is joined to the domain. Use the bastion host to access the target instances through RDP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Single Sign-On to integrate with the on-premises Active Directory by using the AWS Directory Service for Microsoft Active Directory AD Connector. Configure permission sets against user groups for access to AWS Systems Manager. Use Systems Manager Fleet Manager to access the target instances through RDP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement a VPN between the on-premises environment and the target VPEnsure that the target instances are joined to the on-premises Active Directory domain over the VPN connection. Configure RDP access through the VPN. Connect from the company's network to the target instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy a managed Active Directory by using AWS Directory Service for Microsoft Active Directory. Establish a trust with the on-premises Active Directory. Deploy a Remote Desktop Gateway on AWS by using an AWS Quick Start. Ensure that the Remote Desktop Gateway is joined to the domain. Use the Remote Desktop Gateway to access the target instances through RDP.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 726804,
          "date": "Fri 25 Nov 2022 14:38",
          "username": "pixepe",
          "content": "the competition is between B & C. <br><br>IMO, C is best solution, however question is asking cost effective solution which leans me towards B. <br><br>B's +ve points:<br>SSO is free,<br>System manager Fleet manager is free,<br>AD connector is priced$0.05 / hour for small size, and $0.15 for larger size - https://aws.amazon.com/directoryservice/other-directories-pricing/<br>Note - I don't think VPN is mandatory as here is reference without VPN using AD connector https://aws.amazon.com/blogs/security/how-to-connect-your-on-premises-active-directory-to-aws-using-ad-connector/<br><br>Now for C:<br>$0.05 per Site-to-Site VPN connection per hour - https://aws.amazon.com/vpn/pricing/<br>$0.12 for standard edition ($0.40 for enterprise edition)<br><br>May be they have used VPN as distractor,<br>Anyways, I think answer should be B",
          "upvote_count": "1"
        },
        {
          "id": 723384,
          "date": "Mon 21 Nov 2022 11:20",
          "username": "Heer",
          "content": "The RDP client, Remote Desktop Connection, connects to an HSPH computer through the VPN tunnel.<br>The right ans is C",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#1002",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to manage its AWS accounts. The company needs a list of all its Amazon EC2 instances that have underutilized CPU or memory usage. The company also needs recommendations for how to downsize these underutilized instances.<br><br>Which solution will meet these requirements with the LEAST effort?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1002",
          "answers": [
            {
              "choice": "<p>A. Install a CPU and memory monitoring tool from AWS Marketplace on all the EC2 instances. Store the findings in Amazon S3. Implement a Python script to identify underutilized instances. Reference EC2 instance pricing information for recommendations about downsizing options.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Install the Amazon CloudWatch agent on all the EC2 instances by using AWS Systems Manager. Retrieve the resource optimization recommendations from AWS Cost Explorer in the organization's management account. Use the recommendations to downsize underutilized instances in all accounts of the organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Install the Amazon CloudWatch agent on all the EC2 instances by using AWS Systems Manager. Retrieve the resource optimization recommendations from AWS Cost Explorer in each account of the organization. Use the recommendations to downsize underutilized instances in all accounts of the organization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Install the Amazon CloudWatch agent on all the EC2 instances by using AWS Systems Manager. Create an AWS Lambda function to extract CPU and memory usage from all the EC2 instances. Store the findings as files in Amazon S3. Use Amazon Athena to find underutilized instances. Reference EC2 instance pricing information for recommendations about downsizing options.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#1003",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an on-premises data analytics platform. The system is highly available in a fully redundant configuration across 12 servers in the company's data center.<br><br>The system runs scheduled jobs, both hourly and daily, in addition to one-time requests from users. Scheduled jobs can take between 20 minutes and 2 hours to finish running and have tight SLAs. The scheduled jobs account for 65% of the system usage. User jobs typically finish running in less than 5 minutes and have no SLA.  The user jobs account for 35% of system usage. During system failures, scheduled jobs must continue to meet SLAs. However, user jobs can be delayed.<br><br>A solutions architect needs to move the system to Amazon EC2 instances and adopt a consumption-based model to reduce costs with no long-term commitments. The solution must maintain high availability and must not affect the SLAs.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1003",
          "answers": [
            {
              "choice": "<p>A. Split the 12 instances across two Availability Zones in the chosen AWS Region. Run two instances in each Availability Zone as On-Demand Instances with Capacity Reservations. Run four instances in each Availability Zone as Spot Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Split the 12 instances across three Availability Zones in the chosen AWS Region. In one of the Availability Zones, run all four instances as On-Demand Instances with Capacity Reservations. Run the remaining instances as Spot Instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Split the 12 instances across three Availability Zones in the chosen AWS Region. Run two instances in each Availability Zone as On-Demand Instances with a Savings Plan. Run two instances in each Availability Zone as Spot Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Split the 12 instances across three Availability Zones in the chosen AWS Region. Run three instances in each Availability Zone as On-Demand Instances with Capacity Reservations. Run one instance in each Availability Zone as a Spot Instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 736332,
          "date": "Mon 05 Dec 2022 22:32",
          "username": "ggrodskiy",
          "content": "Correct D. <br>must not affect the SLAs",
          "upvote_count": "1"
        },
        {
          "id": 730706,
          "date": "Tue 29 Nov 2022 19:10",
          "username": "Spavanko",
          "content": "Should be D, because of SLA",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#1004",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company operates a fleet of servers on premises and operates a fleet of Amazon EC2 instances in its organization in AWS Organizations. The company's AWS accounts contain hundreds of VPCs. The company wants to connect its AWS accounts to its on-premises network. AWS Site-to-Site VPN connections are already established to a single AWS account. The company wants to control which VPCs can communicate with other VPCs.<br><br>Which combination of steps will achieve this level of control with the LEAST operational effort? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1004",
          "answers": [
            {
              "choice": "<p>A. Create a transit gateway in an AWS account. Share the transit gateway across accounts by using AWS Resource Access Manager (AWS RAM).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure attachments to all VPCs and VPNs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up transit gateway route tables. Associate the VPCs and VPNs with the route tables.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure VPC peering between the VPCs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure attachments between the VPCs and VPNs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Set up route tables on the VPCs and VPNs.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#1005",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently deployed an application on AWS. The application uses Amazon DynamoDB.  The company measured the application load and configured the RCUs and WCUs on the DynamoDB table to match the expected peak load. The peak load occurs once a week for a 4-hour period and is double the average load. The application load is close to the average load for the rest of the week. The access pattern includes many more writes to the table than reads of the table.<br><br>A solutions architect needs to implement a solution to minimize the cost of the table.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1005",
          "answers": [
            {
              "choice": "<p>A. Use AWS Application Auto Scaling to increase capacity during the peak period. Purchase reserved RCUs and WCUs to match the average load.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure on-demand capacity mode for the table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure DynamoDB Accelerator (DAX) in front of the table. Reduce the provisioned read capacity to match the new peak load on the table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure DynamoDB Accelerator (DAX) in front of the table. Configure on-demand capacity mode for the table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#1006",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is auditing the security setup of an AWS Lambda function for a company. The Lambda function retrieves the latest changes from an Amazon Aurora database. The Lambda function and the database run in the same VPC.  Lambda environment variables are providing the database credentials to the Lambda function.<br><br>The Lambda function aggregates data and makes the data available in an Amazon S3 bucket that is configured for server-side encryption with AWS KMS managed encryption keys (SSE-KMS). The data must not travel across the internet. If any database credentials become compromised, the company needs a solution that minimizes the impact of the compromise.<br><br>What should the solutions architect recommend to meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1006",
          "answers": [
            {
              "choice": "<p>A. Enable IAM database authentication on the Aurora DB cluster. Change the IAM role for the Lambda function to allow the function to access the database by using IAM database authentication. Deploy a gateway VPC endpoint for Amazon S3 in the VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable IAM database authentication on the Aurora DB cluster. Change the IAM role for the Lambda function to allow the function to access the database by using IAM database authentication. Enforce HTTPS on the connection to Amazon S3 during data transfers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Save the database credentials in AWS Systems Manager Parameter Store. Set up password rotation on the credentials in Parameter Store. Change the IAM role for the Lambda function to allow the function to access Parameter Store. Modify the Lambda function to retrieve the credentials from Parameter Store. Deploy a gateway VPC endpoint for Amazon S3 in the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Save the database credentials in AWS Secrets Manager. Set up password rotation on the credentials in Secrets Manager. Change the IAM role for the Lambda function to allow the function to access Secrets Manager. Modify the Lambda function to retrieve the credentials Om Secrets Manager. Enforce HTTPS on the connection to Amazon S3 during data transfers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 730731,
          "date": "Tue 29 Nov 2022 19:33",
          "username": "Spavanko",
          "content": "The correct answer is A:<br>It is passwordless and provides VPC Gateway for S3 data transfer to avoid traffic over the internet.<br><br>Answer C is incorrect because AWS Systems Manager Parameter Store can not rotate passwords.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#1007",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing and hosting several projects in the AWS Cloud. The projects are developed across multiple AWS accounts under the same organization in AWS Organizations. The company requires the cost for cloud infrastructure to be allocated to the owning project. The team responsible for all of the AWS accounts has discovered that several Amazon EC2 instances are lacking the Project tag used for cost allocation.<br><br>Which actions should a solutions architect take to resolve the problem and prevent it from happening in the future? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1007",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Config rule in each account to find resources with missing tags.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an SCP in the organization with a deny action for ec2:Runlnstances if the Project tag is missing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Inspector in the organization to find resources with missing tags.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM policy in each account with a deny action for ec2:Runlnstances if the Project tag is missing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an AWS Config aggregator for the organization to collect a list of EC2 instances with the missing Project tag.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use AWS Security Hub to aggregate a list of EC2 instances with the missing Project tag.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 733059,
          "date": "Thu 01 Dec 2022 21:20",
          "username": "ggrodskiy",
          "content": "Correct BDE",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#1008",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that uses AWS Organizations is creating several new AWS accounts. The company is setting up controls to properly allocate AWS costs to business units. The company must implement a solution to ensure that all resources include a tag that has a key of costcenter and a value from a predefined list of business units. The solution must send a notification each time a resource tag does not meet these criteria. The solution must not prevent the creation of resources.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1008",
          "answers": [
            {
              "choice": "<p>A. Create an IAM policy for all actions that create AWS resources. Add a condition to the policy that aws:RequestTag/costcenter must exist and must contain a valid business unit value. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that monitors IAM service events and Amazon EC2 service events for noncompliant tag policies. Configure the rule to send notifications through Amazon Simple Notification Service (Amazon SNS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM policy for all actions that create AWS resources. Add a condition to the policy that aws:ResourceTag/costcenter must exist and must contain a valid business unit value. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that monitors IAM service events and Amazon EC2 service events for noncompliant tag policies. Configure the rule to send notifications through Amazon Simple Notification Service (Amazon SNS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an organization tag policy that ensures that all resources have the costcenter tag with a valid business unit value. Do not select the option to prevent operations when tags are noncompliant. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that monitors all events for noncompliant tag policies. Configure the rule to send notifications through Amazon Simple Notification Service (Amazon SNS).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an organization tag policy that ensures that all resources have the costcenter tag with a valid business unit value. Select the option to prevent operations when tags are noncompliant. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that monitors all events for noncompliant tag policies. Configure the rule to send notifications through Amazon Simple Notification Service (Amazon SNS).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 730658,
          "date": "Tue 29 Nov 2022 18:14",
          "username": "satussy",
          "content": "Using CloudWatch Events(EventBridge) to monitor noncompliant tags<br>https://docs.aws.amazon.com/ja_jp/organizations/latest/userguide/orgs_manage_policies_tag-policies-cwe.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#1009",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An international delivery company hosts a delivery management system on AWS. Drivers use the system to upload confirmation of delivery. Confirmation includes the recipient's signature or a photo of the package with the recipient. The driver's handheld device uploads signatures and photos through FTP to a single Amazon EC2 instance. Each handheld device saves a file in a directory based on the signed-in user, and the file name matches the delivery number. The EC2 instance then adds metadata to the file after querying a central database to pull delivery information. The file is then placed in Amazon S3 for archiving.<br><br>As the company expands, drivers report that the system is rejecting connections. The FTP server is having problems because of dropped connections and memory issues. In response to these problems, a system engineer schedules a cron task to reboot the EC2 instance every 30 minutes. The billing team reports that files are not always in the archive and that the central system is not always updated.<br><br>A solutions architect needs to design a solution that maximizes scalability to ensure that the archive always receives the files and that systems are always updated. The handheld devices cannot be modified, so the company cannot deploy a new application.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1009",
          "answers": [
            {
              "choice": "<p>A. Create an AMI of the existing EC2 instance. Create an Auto Scaling group of EC2 instances behind an Application Load Balancer. Configure the Auto Scaling group to have a minimum of three instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Transfer Family to create an FTP server that places the files in Amazon Elastic File System (Amazon EFS). Mount the EFS volume to the existing EC2 instance. Point the EC2 instance to the new path for file processing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Transfer Family to create an FTP server that places the files in Amazon S3. Use an S3 event notification through Amazon Simple Notification Service (Amazon SNS) to invoke an AWS Lambda function. Configure the Lambda function to add the metadata and update the delivery system.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the handheld devices to place the files directly in Amazon S3. Use an S3 event notification through Amazon Simple Queue Service (Amazon SQS) to invoke an AWS Lambda function. Configure the Lambda function to add the metadata and update the delivery system.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#1010",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to deploy its document storage application across two AWS Regions. The company is storing PDF documents that have an average file size of 512 KiB and a minimum file size of 200 KiB.  The company needs protection for accidental document overwrites in the primary Region. The secondary Region must have cost-optimized storage. The company needs a solution that provides an SLA of 99.99% that files will be replicated to the secondary Region within 15 minutes.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1010",
          "answers": [
            {
              "choice": "<p>A. Deploy an Amazon FSx cluster for multiple application hosts to mount in the primary Region. Configure a second Amazon FSx deployment in the secondary Region. Configure replication from the Amazon FSx cluster in the primary Region to the Amazon FSx deployment in the secondary Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy two Amazon S3 buckets, one in each Region. Enable S3 Versioning for each bucket. Enable S3 Replication Time Control (S3 RTC) to replicate objects to the secondary Region. Specify S3 Glacier Deep Archive as the storage class in the secondary Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy two Amazon S3 buckets, one in each Region. Enable S3 Versioning for the bucket in the primary Region. Set up S3 Cross-Region Replication (CRR) from the primary Region to the secondary Region. Create an S3 event secondary bucket to invoke an AWS Lambda function that reviews each replicated object and specifies S3 Glacier Deep Archive as the storage class in the secondary Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an Amazon FSx multi-Region cluster. Configure the multi-Region cluster with object versioning. Mount the file system as ZFS with versioning support. Activate S3 archiving from Amazon FSx.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 724154,
          "date": "Tue 22 Nov 2022 08:46",
          "username": "pvrhere",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-time-control.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#1011",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that is deployed on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are part of an Auto Scaling group. The application has unpredictable workloads and frequently scales out and in. The company's development team wants to analyze application logs to find ways to improve the application's performance. However, the logs are no longer available after instances scale in.<br><br>Which solution will give the development team the ability to view the application logs after a scale-in event?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1011",
          "answers": [
            {
              "choice": "<p>A. Enable access logs for the ALB.  Store the logs in an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the EC2 instances to publish logs to Amazon CloudWatch Logs by using the unified CloudWatch agent.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the Auto Scaling group to use a step scaling policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Instrument the application with AWS X-Ray tracing.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 726837,
          "date": "Fri 25 Nov 2022 15:22",
          "username": "pixepe",
          "content": "B is answer<br><br>Key from question is 'development team wants to analyze application logs ' so we need EC2 logs, per B<br><br>Why not A?<br>ALB logs doesn't have logs of application itself. It has request, response etc. So ALB logs will not help here.<br>Ref - Elastic Load Balancing provides access logs that capture detailed information about requests sent to your load balancer. Each log contains information such as the time the request was received, the client's IP address, latencies, request paths, and server responses. You can use these access logs to analyze traffic patterns and troubleshoot issues.<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html",
          "upvote_count": "1"
        },
        {
          "id": 723218,
          "date": "Mon 21 Nov 2022 07:57",
          "username": "Heer",
          "content": "The right option is B <br>1)EC2 instance do store their logs in CloudWatch using CloudWatch agent <br>2)These logs are stored for indefinite time so the logs will be available even when the EC2 instance is terminated (Scaled in).",
          "upvote_count": "2"
        }
      ]
    },
    {
      "question_id": "#1012",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a new cluster for big data analytics on AWS. The cluster will run across many Linux Amazon EC2 instances that are spread across multiple Availability Zones.<br><br>All of the nodes in the cluster must have read and write access to common underlying file storage. The file storage must be highly available, must be resilient, must be compatible with the Portable Operating System Interface (POSIX), and must accommodate high levels of throughput.<br><br>Which storage solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1012",
          "answers": [
            {
              "choice": "<p>A. Provision an AWS Storage Gateway file gateway NFS file share that is attached to an Amazon S3 bucket. Mount the NFS file share on each EC2 instance in the cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision a new Amazon Elastic File System (Amazon EFS) file system that uses General Purpose performance mode. Mount the EFS file system on each EC2 instance in the cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision a new Amazon Elastic Block Store (Amazon EBS) volume that uses the io2 volume type. Attach the EBS volume to all of the EC2 instances in the cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision a new Amazon Elastic File System (Amazon EFS) file system that uses Max I/O performance mode. Mount the EFS file system on each EC2 instance in the cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 736612,
          "date": "Tue 06 Dec 2022 09:11",
          "username": "ggrodskiy",
          "content": "D<br>The file storage must be highly available, must be resilient, must be compatible with the Portable Operating System Interface (POSIX), and must accommodate high levels of throughput<br><br> 'high levels of throughput' - Max I/O performance mode",
          "upvote_count": "1"
        },
        {
          "id": 726832,
          "date": "Fri 25 Nov 2022 15:09",
          "username": "pixepepixepe",
          "content": "B<br>When many instances needs POSIX volume, it's EFS<br>when latency sensitiveness iscriteria, it's General Purpose Performance Mode<br><br>From AWs,<br>Amazon EFS offers two performance modes, General Purpose and Max I/O:<br><br>General Purpose mode supports up to 35,000 IOPS and has the lowest per-operation latency. File systems with EFS One Zone storage classes always use General Purpose performance mode. For file systems with EFS Standard storage classes, you can use either the default General Purpose performance mode or the Max I/O performance mode.<br><br>Max I/O mode supports 500,000+ IOPS and has higher per-operation latencies when compared to General Purpose mode.<br><br>https://docs.aws.amazon.com/efs/latest/ug/performance.htmlMy bad, and can't edit answer.<br><br>Question does NOT ask to reduce latency, It is asking 'high levels of throughput' which corresponds to answer D. <br><br>\\\"Max I/O performance mode scales to higher levels of aggregate throughput and operations per second with the tradeoff of higher latencies.\\\" - AWS FAQ on EFS",
          "upvote_count": "21"
        },
        {
          "id": 727147,
          "date": "Sat 26 Nov 2022 00:49",
          "username": "pixepe",
          "content": "My bad, and can't edit answer.<br><br>Question does NOT ask to reduce latency, It is asking 'high levels of throughput' which corresponds to answer D. <br><br>\\\"Max I/O performance mode scales to higher levels of aggregate throughput and operations per second with the tradeoff of higher latencies.\\\" - AWS FAQ on EFS",
          "upvote_count": "1"
        },
        {
          "id": 723220,
          "date": "Mon 21 Nov 2022 08:01",
          "username": "Heer",
          "content": "Right option B<br>1)Highly available and compatible with POSIX is NFS<br>2)General performance provides both read and write access .<br><br>If the ask would have been to prove the highest read and write then option D would have been the right option",
          "upvote_count": "1"
        },
        {
          "id": 722716,
          "date": "Sun 20 Nov 2022 16:03",
          "username": "ggrodskiy",
          "content": "B correct.<br>https://docs.aws.amazon.com/efs/latest/ug/creating-using.html",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#1013",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company had a third-party audit of its AWS environment. The auditor identified secrets in developer documentation and found secrets that were hardcoded into AWS CloudFormation templates throughout the environment. The auditor also identified security groups that allowed inbound traffic from the internet and outbound traffic to all destinations on the internet.<br><br>A solutions architect must design a solution that will encrypt all secrets and rotate the secrets every 90 days. Additionally, the solutions architect must configure the security groups to prevent resources from being accessible from the internet.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1013",
          "answers": [
            {
              "choice": "<p>A. Use AWS Secrets Manager to create, store, and access secrets. Create new secrets in AWS CloudFormation by using the AWS::SecretsManager::Secret resource type. Reference the secrets in other templates by using Secrets Manager dynamic references. Configure automatic rotation in Secrets Manager to rotate the secrets every 90 days. Use AWS Firewall Manager to create a policy that identifies all security groups that allow inbound or outbound communications for any protocols to 0.0.0.0/0. Whenever the policy flags a security group in violation, remove the noncompliant rule from security groups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Systems Manager Parameter Store to create, store, and access secrets. Create new Parameter Store items in AWS CloudFormation by using the AWS::SSM::Parameter resource type. Access these items by using the AWS CLI or AWS APIs. Configure automatic rotation in Parameter Store to rotate the secrets every 90 days. Use AWS Firewall Manager to create a policy that identifies all security groups that allow inbound or outbound communications for any protocols to 0.0.0.0/0. Whenever the policy flags a security group in violation, remove the noncompliant rule from security groups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Secrets Manager to create, store, and access secrets. Create new secrets in AWS CloudFormation by using the AWS::SecretsManager::Secret resource type. Reference the secrets in other templates by using Secrets Manager dynamic references. Configure automatic rotation in Secrets Manager to rotate the secrets every 90 days. Use AWS Firewall Manager to create a policy that enforces a requirement for all security groups to explicitly deny inbound and outbound communications for all protocols to 0.0.0.0/0.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Systems Manager Parameter Store to create, store, and access secrets. Create new Parameter Store items in AWS CloudFormation by using the AWS::SSM::Parameter resource type. Reference the items in other templates by using Systems Manager dynamic references. Configure automatic rotation in Parameter Store to rotate the secrets every 90 days. Use AWS Firewall Manager to create a policy that enforces a requirement for all security groups to explicitly deny inbound and outbound communications for all protocols to 0.0.0.0/0.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 730677,
          "date": "Tue 29 Nov 2022 18:33",
          "username": "Spavanko",
          "content": "Answer is A<br>D: Parameter Store can not rotate secrets!",
          "upvote_count": "1"
        },
        {
          "id": 730676,
          "date": "Tue 29 Nov 2022 18:33",
          "username": "Spavanko",
          "content": "Answer is A<br>D: Parameter Store can not rotate secrets!",
          "upvote_count": "1"
        },
        {
          "id": 723263,
          "date": "Mon 21 Nov 2022 09:05",
          "username": "Heerpixepe",
          "content": "The right option is A<br>1)The requirement is to rotate the keyand only Secret Manager can do that .<br>So option B and D are out <br>2)Out of option A and C :THe catch is that we cannot apply deny any rule in security group as it only allows.Second catch is that Aws Firewall can only <br>Audit the usage of SG and remove the unused ones<br>Audit security group rules and can remediate those<br>Apply common security group rules to accounts .<br><br>So the option A talks about 'Audit security group rules and can remediate those'Good catch on Security Group, We can't add EXPLICIT DENY in security group.",
          "upvote_count": "21"
        },
        {
          "id": 726817,
          "date": "Fri 25 Nov 2022 14:53",
          "username": "pixepe",
          "content": "Good catch on Security Group, We can't add EXPLICIT DENY in security group.",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#1014",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running an application on Amazon EC2 instances in the AWS Cloud. The application is using a MongoDB database with a replica set as its data tier. The MongoDB database is installed on systems in the company's on-premises data center and is accessible through an AWS Direct Connect connection to the data center environment.<br><br>A solutions architect must migrate the on-premises MongoDB database to Amazon DocumentDB (with MongoDB compatibility).<br><br>Which strategy should the solutions architect choose to perform this migration?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1014",
          "answers": [
            {
              "choice": "<p>A. Create a fleet of EC2 instances. Install MongoDB Community Edition on the EC2 instances, and create a database. Configure continuous synchronous replication with the database that is running in the on-premises data center.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Database Migration Service (AWS DMS) replication instance. Create a source endpoint for the on-premises MongoDB database by using change data capture (CDC). Create a target endpoint for the Amazon DocumentDB database. Create and run a DMS migration task.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a data migration pipeline by using AWS Data Pipeline. Define data nodes for the on-premises MongoDB database and the Amazon DocumentDB database. Create a scheduled task to run the data pipeline.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a source endpoint for the on-premises MongoDB database by using AWS Glue crawlers. Configure continuous asynchronous replication between the MongoDB database and the Amazon DocumentDB database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 722719,
          "date": "Sun 20 Nov 2022 16:14",
          "username": "ggrodskiy",
          "content": "B - correct.<br>https://aws.amazon.com/getting-started/hands-on/move-to-managed/migrate-mongodb-to-documentdb/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#1015",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a new API to AWS. The API uses Amazon API Gateway with a Regional API endpoint and an AWS Lambda function for hosting. The API retrieves data from an external vendor API, stores data in an Amazon DynamoDB global table, and retrieves data from the DynamoDB global table. The API key for the vendor's API is stored in AWS Secrets Manager and is encrypted with a customer managed key in AWS Key Management Service (AWS KMS). The company has deployed its own API into a single AWS Region.<br><br>A solutions architect needs to change the API components of the company's API to ensure that the components can run across multiple Regions in an active-active configuration.<br><br>Which combination of changes will meet this requirement with the LEAST operational overhead? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1015",
          "answers": [
            {
              "choice": "<p>A. Deploy the API to multiple Regions. Configure Amazon Route 53 with custom domain names that route traffic to each Regional API endpoint. Implement a Route 53 multivalue answer routing policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new KMS multi-Region customer managed key. Create a new KMS customer managed replica key in each in-scope Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replicate the existing Secrets Manager secret to other Regions. For each in-scope Region's replicated secret, select the appropriate KMS key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new AWS managed KMS key in each in-scope Region. Convert an existing key to a multi-Region key. Use the multi-Region key in other Regions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a new Secrets Manager secret in each in-scope Region. Copy the secret value from the existing Region to the new secret in each in-scope Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Modify the deployment process for the Lambda function to repeat the deployment across in-scope Regions. Turn on the multi-Region option for the existing API. Select the Lambda function that is deployed in each Region as the backend for the multi-Region API.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    },
    {
      "question_id": "#1016",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company deploys workloads in multiple AWS accounts. Each account has a VPC with VPC flow logs published in text log format to a centralized Amazon S3 bucket. Each log file is compressed with gzip compression. The company must retain the log files indefinitely.<br><br>A security engineer occasionally analyzes the logs by using Amazon Athena to query the VPC flow logs. The query performance is degrading over time as the number of ingested logs is growing. A solutions architect must improve the performance of the log analysis and reduce the storage space that the VPC flow logs use.<br><br>Which solution will meet these requirements with the LARGEST performance improvement?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1016",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function to decompress the gzip files and to compress the files with bzip2 compression. Subscribe the Lambda function to an s3:ObjectCreated:Put S3 event notification for the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable S3 Transfer Acceleration for the S3 bucket. Create an S3 Lifecycle configuration to move files to the S3 Intelligent-Tiering storage class as soon as the files are uploaded.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the VPC flow log configuration to store the files in Apache Parquet format. Specify hourly partitions for the log files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new Athena workgroup without data usage control limits. Use Athena engine version 2.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 732435,
          "date": "Thu 01 Dec 2022 10:19",
          "username": "ggrodskiy",
          "content": "https://aws.amazon.com/about-aws/whats-new/2021/10/amazon-vpc-flow-logs-parquet-hive-prefixes-partitioned-files/C",
          "upvote_count": "1"
        },
        {
          "id": 732420,
          "date": "Thu 01 Dec 2022 09:41",
          "username": "ggrodskiy",
          "content": "Correct C",
          "upvote_count": "1"
        },
        {
          "id": 730689,
          "date": "Tue 29 Nov 2022 18:46",
          "username": "Spavanko",
          "content": "https://aws.amazon.com/about-aws/whats-new/2020/11/amazon-athena-announces-availability-of-engine-version-2/",
          "upvote_count": "1"
        },
        {
          "id": 724884,
          "date": "Wed 23 Nov 2022 05:39",
          "username": "pvrhere",
          "content": "https://aws.amazon.com/about-aws/whats-new/2018/09/amazon-s3-announces-new-features-for-s3-select/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#1017",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's solutions architect is managing a learning platform that supports more than 1 million students. The company's business reporting team is experiencing slow performance while extracting large datasets from the database. The learning application is based on PHP and runs on Amazon EC2 instances that are in an Amazon EC2 Auto Scaling group behind an Application Load Balancer (ALB). Application data is stored in an Amazon S3 bucket and in an Amazon RDS for MySOL database. The ALB is the origin of an Amazon CloudFront distribution.<br><br>The solutions architect observes that slow read operations for SELECT queries are affecting the RDS for MySOL DB instance's CPU utilization. The solutions architect must find a scalable solution to improve the slow website performance with near-zero downtime. The solution also must provide automatic failover with no data loss.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1017",
          "answers": [
            {
              "choice": "<p>A. Create an incremental database backup by using Percona XtraBackup. Compress the backup files. Synchronize the backup files to Amazon S3. Restore the backup files from Amazon S3 to Amazon Aurora MySOL. Direct the application endpoint to the new Aurora DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Convert the DB instance to a Multi-AZ deployment. Set the query_cache_type parameter on the database to zero. Increase the CloudFront caching TTL to reduce application server CPU utilization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Aurora read replica from the DB instance. Wait until the read replica is synchronized with the source DB instance. Promote the read replica to a standalone DB cluster. Direct the application endpoint to the new Aurora DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a read replica cluster on the DB instance. Use a Multi-AZ deployment. Synchronize the read replica with the primary DB instance. Promote the read replica as the primary DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 730696,
          "date": "Tue 29 Nov 2022 18:52",
          "username": "Spavanko",
          "content": "Correct C:<br>https://aws.amazon.com/premiumsupport/knowledge-center/aurora-mysql-create-read-replica/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#1018",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using IoT devices on its manufacturing equipment. Data from the devices travels to the AWS Cloud through a connection to AWS IoT Core. An Amazon Kinesis data stream sends the data from AWS IoT Core to the company's processing application. The processing application stores data in Amazon S3.<br><br>A new requirement states that the company also must send the raw data to a third-party system by using an HTTP API.<br><br>Which solution will meet these requirements with the LEAST amount of development work?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1018",
          "answers": [
            {
              "choice": "<p>A. Create a custom AWS Lambda function to consume records from the Kinesis data stream. Configure the Lambda function to call the third-party HTTP API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an S3 event notification with Amazon EventBridge (Amazon CloudWatch Events) as the event destination. Create an EventBridge (CloudWatch Events) API destination for the third-party HTTP API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Kinesis Data Firehose delivery stream. Configure an HTTP endpoint destination that targets the third-party HTTP API. Configure the Kinesis data stream to send data to the Kinesis Data Firehose delivery stream.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an S3 event notification with an Amazon Simple Queue Service (Amazon SQS) queue as the event destination. Configure the SOS queue to invoke a custom AWS Lambda function. Configure the Lambda function to call the third-party HTTP API.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 736768,
          "date": "Tue 06 Dec 2022 12:56",
          "username": "ggrodskiy",
          "content": "Correct B. <br>https://aws.amazon.com/blogs/compute/using-api-destinations-with-amazon-eventbridge/",
          "upvote_count": "1"
        }
      ]
    },
    {
      "question_id": "#1019",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is deploying a web application that consists of a web tier, an application tier, and a database tier. The infrastructure must be highly available across two Availability Zones. The solution must minimize single points of failure and must be resilient.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#1019",
          "answers": [
            {
              "choice": "<p>A. Deploy an Application Load Balancer (ALB) that is mapped to a public subnet in each Availability Zone for the web tier. Deploy Amazon EC2 instances as web servers in each of the private subnets. Configure the web server instances as the target group for the ALB.  Use Amazon EC2 Auto Scaling for the web server instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an Application Load Balancer (ALB) that is mapped to a public subnet in each Availability Zone for the web tier. Deploy Amazon EC2 instances as web servers in each of the public subnets. Configure the web server instances as the target group for the ALUse Amazon EC2 Auto Scaling for the web server instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a new Application Load Balancer (ALB) to a private subnet in each Availability Zone for the application tier. Deploy Amazon EC2 instances as application servers in each of the private subnets. Configure the application server instances as targets for the new ALB.  Configure the web server instances to forward traffic to the new ALB.  Use Amazon EC2 Auto Scaling for the application server instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy a new Application Load Balancer (ALB) to a private subnet in each Availability Zone for the application tier. Deploy Amazon EC2 instances as application servers in each of the private subnets. Configure the web server instances to forward traffic to the application server instances. Use Amazon EC2 Auto Scaling for the application server instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Deploy an Amazon RDS Multi-AZ DB instance. Configure the application to target the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Deploy an Amazon RDS Single-AZ DB instance with a read replica in another Availability Zone. Configure the application to target the primary DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 732400,
          "date": "Thu 01 Dec 2022 09:24",
          "username": "ggrodskiy",
          "content": "CorrectAE",
          "upvote_count": "2"
        },
        {
          "id": 730699,
          "date": "Tue 29 Nov 2022 18:57",
          "username": "Spavanko",
          "content": "AE provide full HA!",
          "upvote_count": "2"
        }
      ]
    }
  ]
}