var SAA_C03_Exam_101_200 = {
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#101",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect is designing a VPC with public and private subnets. The VPC and subnets use IPv4 CIDR blocks. There is one public subnet and one private subnet in each of three Availability Zones (AZs) for high availability. An internet gateway is used to provide internet access for the public subnets. The private subnets require access to the internet to allow Amazon EC2 instances to download software updates.<br>What should the solutions architect do to enable Internet access for the private subnets?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#101",
            "answers": [
              {
                "choice": "<p>A. Create three NAT gateways, one for each public subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT gateway in its AZ.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create three NAT instances, one for each private subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT instance in its AZ.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a second internet gateway on one of the private subnets. Update the route table for the private subnets that forward non-VPC traffic to the private internet gateway.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an egress-only internet gateway on one of the public subnets. Update the route table for the private subnets that forward non-VPC traffic to the egress-only Internet gateway.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 713622,
            "date": "Tue 08 Nov 2022 10:10",
            "username": "Gil80",
            "content": "NAT Instances - OUTDATED BUT CAN STILL APPEAR IN THE EXAM!<br>However, given that A provides the newer option of NAT Gateway, then A is the correct answer.<br><br>B would be correct if NAT Gateway wasn't an option.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 713048,
            "date": "Mon 07 Nov 2022 14:02",
            "username": "Deplake",
            "content": "Should be B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 712908,
            "date": "Mon 07 Nov 2022 09:06",
            "username": "Nigma",
            "content": "https://www.examtopics.com/discussions/amazon/view/35679-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 703383,
            "date": "Mon 24 Oct 2022 23:57",
            "username": "dave9994yalvarGil80",
            "content": "B should be the answer. https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.htmlSir, you didn't even read the link you posted !! There it is clearly stated that when you need access to Internet from a private subnet you place the NAT gateway in a PUBLIC subnet.B is NAT Instances, which is outdated. The link you provided refers to NAT Gateways (the newer approach) - which means, A is the right answer.",
            "upvote_count": "112",
            "selected_answers": ""
          },
          {
            "id": 724713,
            "date": "Tue 22 Nov 2022 22:55",
            "username": "yalvar",
            "content": "Sir, you didn't even read the link you posted !! There it is clearly stated that when you need access to Internet from a private subnet you place the NAT gateway in a PUBLIC subnet.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 713623,
            "date": "Tue 08 Nov 2022 10:12",
            "username": "Gil80",
            "content": "B is NAT Instances, which is outdated. The link you provided refers to NAT Gateways (the newer approach) - which means, A is the right answer.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 699820,
            "date": "Thu 20 Oct 2022 12:56",
            "username": "Evangelia",
            "content": "aaaaaaa",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#102",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate an on-premises data center to AWS. The data center hosts an SFTP server that stores its data on an NFS-based file system. The server holds 200 GB of data that needs to be transferred. The server must be hosted on an Amazon EC2 instance that uses an Amazon Elastic File System (Amazon EFS) file system.<br>Which combination of steps should a solutions architect take to automate this task? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AB</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#102",
            "answers": [
              {
                "choice": "<p>A. Launch the EC2 instance into the same Availability Zone as the EFS file system.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Install an AWS DataSync agent in the on-premises data center.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a secondary Amazon Elastic Block Store (Amazon EBS) volume on the EC2 instance for the data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Manually use an operating system copy command to push the data to the EC2 instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use AWS DataSync to create a suitable location configuration for the on-premises SFTP server.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 698297,
            "date": "Tue 18 Oct 2022 16:36",
            "username": "123jhl0attila9778Cizzla7049",
            "content": "**A**. Launch the EC2 instance into the same Availability Zone as the EFS file system.<br>Makes sense to have the instance in the same AZ the EFS storage is.<br>**B**. Install an AWS DataSync agent in the on-premises data center.<br>The DataSync with move the data to the EFS, which already uses the EC2 instance (see the info provided). No more things are required...<br>C.  Create a secondary Amazon Elastic Block Store (Amazon EBS) volume on the EC2 instance for the data.<br>This secondary EBS volume isn't required... the data should be move on to EFS...<br>D.  Manually use an operating system copy command to push the data to the EC2 instance.<br>Potentially possible (instead of A), BUT the \\\"automate this task\\\" premise goes against any \\\"manually\\\" action. So, we should keep A. <br>E.  Use AWS DataSync to create a suitable location configuration for the on-premises SFTP server.<br>I don't get the relationship between DataSync and the configuration for SFTP \\\"on-prem\\\"! Nonsense.<br>So, anwers are A&BCan someone explain why A is correct?<br>EFS is spread across Availability Zones in a region, as per https://aws.amazon.com/blogs/gametech/gearbox-entertainment-goes-remote-with-aws-and-perforce/<br>My question then is whether it makes sense to launch EC2 instances in the *same Availability Zone as the EFS file system* ?E is correct<br>https://aws.amazon.com/blogs/storage/migrating-storage-with-aws-datasync/",
            "upvote_count": "1421",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 724149,
            "date": "Tue 22 Nov 2022 08:29",
            "username": "attila9778",
            "content": "Can someone explain why A is correct?<br>EFS is spread across Availability Zones in a region, as per https://aws.amazon.com/blogs/gametech/gearbox-entertainment-goes-remote-with-aws-and-perforce/<br>My question then is whether it makes sense to launch EC2 instances in the *same Availability Zone as the EFS file system* ?",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 720169,
            "date": "Thu 17 Nov 2022 04:28",
            "username": "Cizzla7049",
            "content": "E is correct<br>https://aws.amazon.com/blogs/storage/migrating-storage-with-aws-datasync/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 728796,
            "date": "Mon 28 Nov 2022 06:11",
            "username": "Cizzla7049",
            "content": "https://aws.amazon.com/datasync/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 727784,
            "date": "Sat 26 Nov 2022 20:43",
            "username": "DivaLight",
            "content": "Option BE",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 726578,
            "date": "Fri 25 Nov 2022 10:40",
            "username": "LeGloupier",
            "content": "B andE make more sens",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 725257,
            "date": "Wed 23 Nov 2022 17:23",
            "username": "nVizzz",
            "content": "I chose A and E, because firstly we need to install DataSync agent to copy from SFTP and then create respective location.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 723809,
            "date": "Mon 21 Nov 2022 19:02",
            "username": "Wpcorgan",
            "content": "A and E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721068,
            "date": "Fri 18 Nov 2022 05:56",
            "username": "kmliuy73",
            "content": "BE are correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720170,
            "date": "Thu 17 Nov 2022 04:29",
            "username": "Cizzla7049",
            "content": "AE are correct<br>https://aws.amazon.com/blogs/storage/migrating-storage-with-aws-datasync/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AE"
          }
        ]
      },
      {
        "question_id": "#103",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an AWS Glue extract, transform, and load (ETL) job that runs every day at the same time. The job processes XML data that is in an Amazon S3 bucket. New data is added to the S3 bucket every day. A solutions architect notices that AWS Glue is processing all the data during each run.<br>What should the solutions architect do to prevent AWS Glue from reprocessing old data?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#103",
            "answers": [
              {
                "choice": "<p>A. Edit the job to use job bookmarks.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Edit the job to delete data after the data is processed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Edit the job by setting the NumberOfWorkers field to 1.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use a FindMatches machine learning (ML) transform.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 698300,
            "date": "Tue 18 Oct 2022 16:39",
            "username": "123jhl0",
            "content": "This is the purpose of bookmarks: \\\"AWS Glue tracks data that has already been processed during a previous run of an ETL job by persisting state information from the job run. This persisted state information is called a job bookmark. Job bookmarks help AWS Glue maintain state information and prevent the reprocessing of old data.\\\"<br>https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html",
            "upvote_count": "14",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 723813,
            "date": "Mon 21 Nov 2022 19:06",
            "username": "Wpcorgan",
            "content": "A is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 698034,
            "date": "Tue 18 Oct 2022 10:20",
            "username": "LeGloupier",
            "content": "A<br>https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#104",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect must design a highly available infrastructure for a website. The website is powered by Windows web servers that run on Amazon EC2 instances. The solutions architect must implement a solution that can mitigate a large-scale DDoS attack that originates from thousands of IP addresses. Downtime is not acceptable for the website.<br>Which actions should the solutions architect take to protect the website from such an attack? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#104",
            "answers": [
              {
                "choice": "<p>A. Use AWS Shield Advanced to stop the DDoS attack.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure Amazon GuardDuty to automatically block the attackers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the website to use Amazon CloudFront for both static and dynamic content.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an AWS Lambda function to automatically add attacker IP addresses to VPC network ACLs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use EC2 Spot Instances in an Auto Scaling group with a target tracking scaling policy that is set to 80% CPU utilization.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 696435,
            "date": "Sun 16 Oct 2022 20:32",
            "username": "alvarez100attila9778",
            "content": "I think it is AC, reason is they require a solution that is highly available. AWS Shield can handle the DDoS attacks. To make the solution HA you can use cloud front. AC seems to be the best answer imo. <br>AB seem like redundant answers. How do those answers make the solution HA?A - AWS Shield Advanced<br>C - (protecting this option) IMO: AWS Shield Advanced has to be attached. But it can not be attached directly to EC2 instances. <br>According to the docs: https://aws.amazon.com/shield/ <br>It requires to be attached to services such as CloudFront, Route 53, Global Accelerator, ELB or (in the most direct way using) Elastic IP (attached to the EC2 instance)",
            "upvote_count": "122",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 724169,
            "date": "Tue 22 Nov 2022 09:19",
            "username": "attila9778",
            "content": "A - AWS Shield Advanced<br>C - (protecting this option) IMO: AWS Shield Advanced has to be attached. But it can not be attached directly to EC2 instances. <br>According to the docs: https://aws.amazon.com/shield/ <br>It requires to be attached to services such as CloudFront, Route 53, Global Accelerator, ELB or (in the most direct way using) Elastic IP (attached to the EC2 instance)",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 727236,
            "date": "Sat 26 Nov 2022 04:28",
            "username": "Newptone",
            "content": "I thought it was AB.  But after I read the docs, I vote for AC. <br><br>Amazon GuardDuty is a threat detection service, it can NOT take action directly, it needs to work with Lambda.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 723811,
            "date": "Mon 21 Nov 2022 19:03",
            "username": "Wpcorgan",
            "content": "A and C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 718844,
            "date": "Tue 15 Nov 2022 15:24",
            "username": "rjam",
            "content": "AWS Shield can handle the DDoS attacks<br>Amazon CloudFront supports DDoS protection, integration with Shield, AWS Web Application Firewall",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 714283,
            "date": "Wed 09 Nov 2022 05:20",
            "username": "tubtab",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 712326,
            "date": "Sun 06 Nov 2022 14:30",
            "username": "Az900500ocbn3wbyCizzla7049",
            "content": "I believe it's A & E ; the questions speaks to two things.<br>1. That can mitigate large DDOS attack -(Ans A )<br>2. A solutions architect must design a highly available infrastructure for a website; Downtime is not acceptable ( Ans E)<br>SoAns is AE<br><br>I guess we focus only on the DDOS attack aspect of the questionSo, spot instances mean HA for you?spot instances aren't always going to be highly available enough for certain situations. its AC",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 727436,
            "date": "Sat 26 Nov 2022 11:20",
            "username": "ocbn3wby",
            "content": "So, spot instances mean HA for you?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720175,
            "date": "Thu 17 Nov 2022 04:37",
            "username": "Cizzla7049",
            "content": "spot instances aren't always going to be highly available enough for certain situations. its AC",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 709601,
            "date": "Wed 02 Nov 2022 04:31",
            "username": "mm_",
            "content": "Amazon GuardDuty has Threat response and remediation automation.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 707431,
            "date": "Sat 29 Oct 2022 21:35",
            "username": "dokaeduVic_d_gr8Vic_d_gr8",
            "content": "A : handle DDoS<br>E: Use EC2 Spot Instances in an Auto Scaling group with a target tracking scaling policy that is set to 80% CPU utilization.spot instance are not reliable, they are for worlds which can tolerate downtime. So the Answer should be A & C*workloads",
            "upvote_count": "121",
            "selected_answers": ""
          },
          {
            "id": 725812,
            "date": "Thu 24 Nov 2022 13:06",
            "username": "Vic_d_gr8Vic_d_gr8",
            "content": "spot instance are not reliable, they are for worlds which can tolerate downtime. So the Answer should be A & C*workloads",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 725813,
            "date": "Thu 24 Nov 2022 13:07",
            "username": "Vic_d_gr8",
            "content": "*workloads",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 704801,
            "date": "Wed 26 Oct 2022 17:17",
            "username": "Six_Fingered_Jose",
            "content": "CF doesn't help with preventing downtime with dynamic content, it improves latency yes but doesn't really help with this case imo<br><br>question is asking for ways to PROTECT the server and prevent downtime,<br>and if you read this, guardduty makes sense.<br><br>https://aws.amazon.com/guardduty/<br>> Gain insight of compromised credentials, unusual data access in Amazon S3, API calls from known malicious IP addresses, and more.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 703390,
            "date": "Tue 25 Oct 2022 00:09",
            "username": "dave9994",
            "content": "The question is about \\\"Protect\\\", not remediation. So, A and C are the possible answers.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 699182,
            "date": "Wed 19 Oct 2022 18:13",
            "username": "whosawsome",
            "content": "GuardDuty allows you to take automated action to remedy an attack",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 693593,
            "date": "Thu 13 Oct 2022 06:21",
            "username": "stjokerli123jhl0",
            "content": "Only a,b are related to securityYes, BUT GuardDuty will help only with detection, not blocking or remediating. https://aws.amazon.com/guardduty/<br>On the other hand you miss the opportunity to introduce a massive HA which helps you to keep the website live (avoiding downtime) with CloudFront, valid for static and dynamic content (https://aws.amazon.com/cloudfront/)<br>I go for A and C",
            "upvote_count": "17",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 698312,
            "date": "Tue 18 Oct 2022 17:06",
            "username": "123jhl0",
            "content": "Yes, BUT GuardDuty will help only with detection, not blocking or remediating. https://aws.amazon.com/guardduty/<br>On the other hand you miss the opportunity to introduce a massive HA which helps you to keep the website live (avoiding downtime) with CloudFront, valid for static and dynamic content (https://aws.amazon.com/cloudfront/)<br>I go for A and C",
            "upvote_count": "7",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#105",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is preparing to deploy a new serverless workload. A solutions architect must use the principle of least privilege to configure permissions that will be used to run an AWS Lambda function. An Amazon EventBridge (Amazon CloudWatch Events) rule will invoke the function.<br>Which solution meets these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#105",
            "answers": [
              {
                "choice": "<p>A. Add an execution role to the function with lambda:InvokeFunction as the action and * as the principal.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add an execution role to the function with lambda:InvokeFunction as the action and Service: lambda.amazonaws.com as the principal.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add a resource-based policy to the function with lambda:* as the action and Service: events.amazonaws.com as the principal.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add a resource-based policy to the function with lambda:InvokeFunction as the action and Service: events.amazonaws.com as the principal.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 698315,
            "date": "Tue 18 Oct 2022 17:18",
            "username": "123jhl0",
            "content": "Best way to check it... The question is taken from the example shown here in the documentation:<br>https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-use-resource-based.html#eb-lambda-permissions",
            "upvote_count": "10",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727440,
            "date": "Sat 26 Nov 2022 11:26",
            "username": "ocbn3wby",
            "content": "My answer was D, as this is the most specific answer. <br>And then there's this guy's answer (123jhl0) which provides more details.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#106",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is preparing to store confidential data in Amazon S3. For compliance reasons, the data must be encrypted at rest. Encryption key usage must be logged for auditing purposes. Keys must be rotated every year.<br>Which solution meets these requirements and is the MOST operationally efficient?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#106",
            "answers": [
              {
                "choice": "<p>A. Server-side encryption with customer-provided keys (SSE-C)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Server-side encryption with Amazon S3 managed keys (SSE-S3)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Server-side encryption with AWS KMS keys (SSE-KMS) with manual rotation<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Server-side encryption with AWS KMS keys (SSE-KMS) with automatic rotation<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 698323,
            "date": "Tue 18 Oct 2022 17:31",
            "username": "123jhl0ocbn3wby",
            "content": "The MOST operationally efficient one is D. <br>Automating the key rotation is the most efficient.<br>Just to confirm, the A and B options don't allow automate the rotation as explained here: https://aws.amazon.com/kms/faqs/#:~:text=You%20can%20choose%20to%20have%20AWS%20KMS%20automatically%20rotate%20KMS,KMS%20custom%20key%20store%20featureThank you for the explanation.",
            "upvote_count": "51",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727441,
            "date": "Sat 26 Nov 2022 11:27",
            "username": "ocbn3wby",
            "content": "Thank you for the explanation.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 714477,
            "date": "Wed 09 Nov 2022 11:35",
            "username": "PS_R",
            "content": "Agree Also, SSE-S3 cannot be audited.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#107",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A bicycle sharing company is developing a multi-tier architecture to track the location of its bicycles during peak operating hours. The company wants to use these data points in its existing analytics platform. A solutions architect must determine the most viable multi-tier option to support this architecture. The data points must be accessible from the REST API.<br>Which action meets these requirements for storing and retrieving location data?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#107",
            "answers": [
              {
                "choice": "<p>A. Use Amazon Athena with Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon API Gateway with AWS Lambda.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon QuickSight with Amazon Redshift.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon API Gateway with Amazon Kinesis Data Analytics.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699031,
            "date": "Wed 19 Oct 2022 14:34",
            "username": "ArielSchivo",
            "content": "API Gateway is needed to get the data so option A and C are out.<br>“The company wants to use these data points in its existing analytics platform” so there is no need to add Kynesis. Option D is also out.<br>This leaves us with option B as the correct one.",
            "upvote_count": "17",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 704806,
            "date": "Wed 26 Oct 2022 17:24",
            "username": "Six_Fingered_Joserob74OnimoleOnimolerob74UWSFishSix_Fingered_Jose",
            "content": "I dont understand why you will vote B?<br>how are you going to store data with just lambda?<br>> Which action meets these requirements for storing and retrieving location data<br><br>In this use case there will obviously be a ton of data and you want to get real-time location data of the bicycles, and to analyze all these info kinesis is the one that makes most sense here.I vote D because company HAS its analitcs Platform, Why pay?. Kinesis is for analys not for storing. Can you explain? ThanksWeird Q as they already have their own data analysis platform<br>Hopefully i dont see this question in the exam lolit can store according to the doc<br>There is no way to lambda to store data which is part of the requirementsB Lambda and APII don't think you need to worry about storing data. The question states their is an existing platform.https://aws.amazon.com/blogs/aws/real-time-hotspot-detection-in-amazon-kinesis-analytics/",
            "upvote_count": "11451132",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 709962,
            "date": "Wed 02 Nov 2022 18:36",
            "username": "rob74OnimoleOnimolerob74",
            "content": "I vote D because company HAS its analitcs Platform, Why pay?. Kinesis is for analys not for storing. Can you explain? ThanksWeird Q as they already have their own data analysis platform<br>Hopefully i dont see this question in the exam lolit can store according to the doc<br>There is no way to lambda to store data which is part of the requirementsB Lambda and API",
            "upvote_count": "4511",
            "selected_answers": ""
          },
          {
            "id": 710390,
            "date": "Thu 03 Nov 2022 10:44",
            "username": "Onimole",
            "content": "Weird Q as they already have their own data analysis platform<br>Hopefully i dont see this question in the exam lol",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 710388,
            "date": "Thu 03 Nov 2022 10:39",
            "username": "Onimole",
            "content": "it can store according to the doc<br>There is no way to lambda to store data which is part of the requirements",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 709963,
            "date": "Wed 02 Nov 2022 18:36",
            "username": "rob74",
            "content": "B Lambda and API",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 705465,
            "date": "Thu 27 Oct 2022 13:05",
            "username": "UWSFish",
            "content": "I don't think you need to worry about storing data. The question states their is an existing platform.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 704810,
            "date": "Wed 26 Oct 2022 17:25",
            "username": "Six_Fingered_Jose",
            "content": "https://aws.amazon.com/blogs/aws/real-time-hotspot-detection-in-amazon-kinesis-analytics/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 735250,
            "date": "Sun 04 Dec 2022 17:44",
            "username": "ad1mohan",
            "content": "Because D has data analytics where B doesnot",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726053,
            "date": "Thu 24 Nov 2022 17:40",
            "username": "5up3rm4n",
            "content": "Answer is B. Kinesis Data Streams does not persist data. It also only ingests data from Kinesis Data Stream and Firehose, and outputs to Kinesis Data Stream, Firehose and Lambda.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724264,
            "date": "Tue 22 Nov 2022 12:00",
            "username": "mabotega",
            "content": "This question is about location of company´s bicycles during peak operating hours\\\", so, the data is coming from their application and must be checked in real-time during peak operating hours, so, it requires Kinesis Data Analytcs and API Gateway supports the Kinesyis.<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/integrating-api-with-aws-services-kinesis.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 719826,
            "date": "Wed 16 Nov 2022 17:19",
            "username": "rjam",
            "content": "B is wrong as the question specifies about storing and retrieving location data. APIGateway and lambda cannot store data.<br><br>Amazon API Gateway with Kinesis Data Analytics:<br>Amazon API Gateway is a fully managed service that allows you to publish, maintain, monitor, and secure APIs at any scale. Amazon API Gateway offers two options to create RESTful APIs, HTTP APIs and REST APIs, as well as an option to create WebSocket APIs.<br><br>You can use Kinesis Data Analytics to transform and analyze streaming data in real-time with Apache Flink. Kinesis Data Analytics enables you to quickly build end-to-end stream processing applications for log analytics, clickstream analytics, Internet of Things (IoT), ad tech, gaming, etc. The four most common use cases are streaming extract-transform-load (ETL), continuous metric generation, responsive real-time analytics, and interactive querying of data streams. Kinesis Data Analytics for Apache Flink applications provides your application 50 GB of running application storage per Kinesis Processing Unit (KPU).",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 714420,
            "date": "Wed 09 Nov 2022 10:16",
            "username": "BD12",
            "content": "B<br>If REST API means, there API gateway should be there.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 713738,
            "date": "Tue 08 Nov 2022 12:23",
            "username": "Gil80",
            "content": "Why B?<br>1. QuickSight doesn't support REST API.<br>2. They already have an analytics platform, A (Athena) and D (Kinesis Data Analytics) are out of the race even though S3 & APT Gateway Support REST API. B & C are an option. C will not support REST API. So answer should be B",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 713050,
            "date": "Mon 07 Nov 2022 14:02",
            "username": "Nigma",
            "content": "D is the correct. The question is asking for storing and retrieving",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 712838,
            "date": "Mon 07 Nov 2022 07:18",
            "username": "PS_R",
            "content": "KDA also stores data for 365 days, so i feel D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 710387,
            "date": "Thu 03 Nov 2022 10:37",
            "username": "Onimole",
            "content": "D might be the right choice<br>When Should I Use Amazon Kinesis Data Analytics?<br>Amazon Kinesis Data Analytics enables you to quickly author SQL code that continuously reads, processes, and stores data in near real time. Using standard SQL queries on the streaming data, you can construct applications that transform and provide insights into your data. Following are some of example scenarios for using Kinesis Data Analytics:",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 709549,
            "date": "Wed 02 Nov 2022 02:55",
            "username": "Hunkie",
            "content": "They already have an existing analytics platform",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 707832,
            "date": "Sun 30 Oct 2022 14:32",
            "username": "Dsouzaf",
            "content": "to track the location of its bicycles during peak operating hours. This lines tells it is streaming data and hence Amazon Kinesis Data Analytics",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 703393,
            "date": "Tue 25 Oct 2022 00:16",
            "username": "dave9994",
            "content": "The question is about storing and retrieving, API GW satisfies retrieving part, and Kinesys handles storing part. I would go with D. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 694934,
            "date": "Fri 14 Oct 2022 19:25",
            "username": "Lilibell",
            "content": "The answer is B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 692502,
            "date": "Wed 12 Oct 2022 01:48",
            "username": "Stiffler1",
            "content": "why d?",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#108",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an automobile sales website that stores its listings in a database on Amazon RDS. When an automobile is sold, the listing needs to be removed from the website and the data must be sent to multiple target systems.<br>Which design should a solutions architect recommend?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#108",
            "answers": [
              {
                "choice": "<p>A. Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) queue for the targets to consume.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) FIFO queue for the targets to consume.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Subscribe to an RDS event notification and send an Amazon Simple Queue Service (Amazon SQS) queue fanned out to multiple Amazon Simple Notification Service (Amazon SNS) topics. Use AWS Lambda functions to update the targets.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Subscribe to an RDS event notification and send an Amazon Simple Notification Service (Amazon SNS) topic fanned out to multiple Amazon Simple Queue Service (Amazon SQS) queues. Use AWS Lambda functions to update the targets.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 734806,
            "date": "Sun 04 Dec 2022 03:43",
            "username": "Incognito013",
            "content": "Answeris A! Haven't heard of an RDS event feature for DB level",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 734394,
            "date": "Sat 03 Dec 2022 12:33",
            "username": "Wajif",
            "content": "Why need Lambda to update targets when the whole thing can be achieved with A?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 732719,
            "date": "Thu 01 Dec 2022 15:36",
            "username": "bgingrich",
            "content": "Agreed, no event notifications for database level events, so D can't be correct.The other way to accomplish this would be A. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 731867,
            "date": "Wed 30 Nov 2022 19:45",
            "username": "mj98",
            "content": "There is no event notifications for DB level events for RDS. A is the right answer. Custom stored proc can be used to trigger lambda but there is no default option like RDS event notification. Pls do research. ANS is A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 728022,
            "date": "Sun 27 Nov 2022 08:53",
            "username": "ocbn3wby",
            "content": "There is RDS Fanout to SNS, but not specifically for DB level events (write, reads, etc). <br>It can fan out events at instance level (turn on, restart, update), cluster level (added to cluster, removed from cluster, etc). But not at DB level. <br><br>More detailed RDS event list here:<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html<br><br>Correct answer is A. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727978,
            "date": "Sun 27 Nov 2022 08:03",
            "username": "anhdao1211",
            "content": "A<br>RDS event notification ?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725831,
            "date": "Thu 24 Nov 2022 13:35",
            "username": "Vic_d_gr8",
            "content": "Amazon RDS uses the SNS to provide notification when an Amazon event occurs https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 723816,
            "date": "Mon 21 Nov 2022 19:11",
            "username": "Wpcorgan",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723536,
            "date": "Mon 21 Nov 2022 14:21",
            "username": "romkoocbn3wbyVic_d_gr8",
            "content": "Interesting point that Amazon RDS event notification doesn't support any notification when data inside DB is updated.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.overview.html<br>So subscription to RDS eventsdoesn't give any value for Fanout = SNS => SQS<br><br>B is out because FIFO is not required here.<br><br>A is left as correct answerRomko, you are right pal. Nice research. <br><br>There is RDS Fanout to SNS, but not specifically for DB level events (write, reads, etc). <br>It can fan out events at instance level (turn on, restart, update), cluster level (added to cluster, removed from cluster, etc). But not at DB level. <br><br>More detailed event list here:<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html<br><br>Correct answer is A. Amazon RDS uses the SNS to provide notification when an Amazon event occurs<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html",
            "upvote_count": "311",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 728021,
            "date": "Sun 27 Nov 2022 08:53",
            "username": "ocbn3wby",
            "content": "Romko, you are right pal. Nice research. <br><br>There is RDS Fanout to SNS, but not specifically for DB level events (write, reads, etc). <br>It can fan out events at instance level (turn on, restart, update), cluster level (added to cluster, removed from cluster, etc). But not at DB level. <br><br>More detailed event list here:<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html<br><br>Correct answer is A. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725830,
            "date": "Thu 24 Nov 2022 13:35",
            "username": "Vic_d_gr8",
            "content": "Amazon RDS uses the SNS to provide notification when an Amazon event occurs<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 714475,
            "date": "Wed 09 Nov 2022 11:33",
            "username": "PS_R",
            "content": "Cannot be C as Fanout = SNS + SQS.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 709564,
            "date": "Wed 02 Nov 2022 03:14",
            "username": "Merchant",
            "content": "DDDDDD!",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 709554,
            "date": "Wed 02 Nov 2022 03:01",
            "username": "HunkiePS_R",
            "content": "The RDS event notifications sends the notification using SNS not SQS.<br><br>Similar to old questionAgree, Also Fanout means SNS + SQS, which rules out option C, So the answer is D",
            "upvote_count": "31",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 713993,
            "date": "Tue 08 Nov 2022 18:01",
            "username": "PS_R",
            "content": "Agree, Also Fanout means SNS + SQS, which rules out option C, So the answer is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 707469,
            "date": "Sat 29 Oct 2022 22:16",
            "username": "dokaedu",
            "content": "answer should be D<br>https://betterprogramming.pub/how-to-fan-out-to-different-sqs-queues-using-sns-message-filtering-84cd23ed9d07",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 704814,
            "date": "Wed 26 Oct 2022 17:26",
            "username": "Six_Fingered_Jose",
            "content": "answer should be D<br>> the data must be sent to multiple target systems.<br><br>Fanning out -> SNS",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 699186,
            "date": "Wed 19 Oct 2022 18:23",
            "username": "whosawsome",
            "content": "D if in doubt",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 696595,
            "date": "Sun 16 Oct 2022 23:30",
            "username": "Moonus",
            "content": "Answer is D",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 694310,
            "date": "Fri 14 Oct 2022 00:18",
            "username": "Lilibell",
            "content": "The answer is D",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#109",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to store data in Amazon S3 and must prevent the data from being changed. The company wants new objects that are uploaded to Amazon S3 to remain unchangeable for a nonspecific amount of time until the company decides to modify the objects. Only specific users in the company's AWS account can have the ability 10 delete the objects.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#109",
            "answers": [
              {
                "choice": "<p>A. Create an S3 Glacier vault. Apply a write-once, read-many (WORM) vault lock policy to the objects.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Set a retention period of 100 years. Use governance mode as the S3 bucket’s default retention mode for new objects.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an S3 bucket. Use AWS CloudTrail to track any S3 API events that modify the objects. Upon notification, restore the modified objects from any backup versions that the company has.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Add a legal hold to the objects. Add the s3:PutObjectLegalHold permission to the IAM policies of users who need to delete the objects.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 698347,
            "date": "Tue 18 Oct 2022 18:20",
            "username": "123jhl0",
            "content": "A - No as \\\"specific users can delete\\\"<br>B - No as \\\"nonspecific amount of time\\\"<br>C - No as \\\"prevent the data from being change\\\"<br>D - The answer: \\\"The Object Lock legal hold operation enables you to place a legal hold on an object version. Like setting a retention period, a legal hold prevents an object version from being overwritten or deleted. However, a legal hold doesn't have an associated retention period and remains in effect until removed.\\\" https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-legal-hold.html",
            "upvote_count": "10",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 696722,
            "date": "Mon 17 Oct 2022 03:06",
            "username": "Chunsli",
            "content": "typo -- 10 delete the objects => TO delete the objects",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 733909,
            "date": "Fri 02 Dec 2022 17:26",
            "username": "AWSExam2021",
            "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html<br><br>With Object Lock you can also place a legal hold on an object version. Like a retention period, a legal hold prevents an object version from being overwritten or deleted. However, a legal hold doesn't have an associated retention period and remains in effect until removed. Legal holds can be freely placed and removed by any user who has the s3:PutObjectLegalHold permission.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728824,
            "date": "Mon 28 Nov 2022 07:08",
            "username": "Cizzla7049Cizzla7049mj98",
            "content": "Answer is 100% B. <br><br>Governance mode<br>You should use the Governance mode if you want to protect objects from being deleted by most users during a pre-defined retention period, but at the same time want some users with special permissions to have the flexibility to alter the retention settings or delete the objects.<br><br>Legal Hold works as an infinite retention period. Once applied it is not possible to delete any object until the hold is released manually. The hold can only be removed by users with special permissions.<br><br>A retention period specifies a fixed period of time during which an object remains locked. During this period, your object is WORM-protected and can’t be overwritten or deleted. You apply a retention period either in number of days or number of years with the minimum being 1-day and no maximum limit.<br>A legal hold provides the same protection as a retention period, but it has no expiration date. Instead, a legal hold remains in place until you explicitly remove it.Legal hold, no one can delete objects. Governance, those with special permissions can deletes3:PutObjectLegalHold permission allows users to remove the legal hold on the objects, So they can delete even if legal hold is there.",
            "upvote_count": "111",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 728828,
            "date": "Mon 28 Nov 2022 07:11",
            "username": "Cizzla7049mj98",
            "content": "Legal hold, no one can delete objects. Governance, those with special permissions can deletes3:PutObjectLegalHold permission allows users to remove the legal hold on the objects, So they can delete even if legal hold is there.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 731871,
            "date": "Wed 30 Nov 2022 19:51",
            "username": "mj98",
            "content": "s3:PutObjectLegalHold permission allows users to remove the legal hold on the objects, So they can delete even if legal hold is there.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721583,
            "date": "Fri 18 Nov 2022 22:10",
            "username": "nadjar007",
            "content": "D<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-legal-hold.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721024,
            "date": "Fri 18 Nov 2022 03:27",
            "username": "Cizzla7049attila9778Cizzla7049",
            "content": "https://aws.amazon.com/pt/blogs/storage/protecting-data-with-amazon-s3-object-lock/Answer: D<br>Question says: \\\"indefinite amount of time\\\" -> \\\"legal hold\\\"<br>Your provided link describes this feature as well:<br>\\\"A legal hold provides the same protection as a retention period, but it has no expiration date. Instead, a legal hold remains in place until you explicitly remove it.\\\"Go read it again. You miss this part of the question <br><br>\\\"Only specific users in the company's AWS account can have the ability 10 delete the objects\\\"<br><br>No one can delete for legal hold",
            "upvote_count": "121",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 724220,
            "date": "Tue 22 Nov 2022 10:38",
            "username": "attila9778Cizzla7049",
            "content": "Answer: D<br>Question says: \\\"indefinite amount of time\\\" -> \\\"legal hold\\\"<br>Your provided link describes this feature as well:<br>\\\"A legal hold provides the same protection as a retention period, but it has no expiration date. Instead, a legal hold remains in place until you explicitly remove it.\\\"Go read it again. You miss this part of the question <br><br>\\\"Only specific users in the company's AWS account can have the ability 10 delete the objects\\\"<br><br>No one can delete for legal hold",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 728817,
            "date": "Mon 28 Nov 2022 07:04",
            "username": "Cizzla7049",
            "content": "Go read it again. You miss this part of the question <br><br>\\\"Only specific users in the company's AWS account can have the ability 10 delete the objects\\\"<br><br>No one can delete for legal hold",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 716049,
            "date": "Fri 11 Nov 2022 13:38",
            "username": "mabotegamj98attila9778attila9778",
            "content": "Retention mode in governance mode is the correct way to some users have the ability to delete object in S3 -> https://aws.amazon.com/pt/blogs/storage/protecting-data-with-amazon-s3-object-lock/Which is why IAM policy attached with s3:PutObjectLegalHold permission for some users. Ans is DQuestion says: \\\"indefinite amount of time\\\" -> \\\"legal hold\\\"<br>Your provided link describes this feature as well:<br>\\\"A legal hold provides the same protection as a retention period, but it has no expiration date. Instead, a legal hold remains in place until you explicitly remove it.\\\"=> Answer: D",
            "upvote_count": "1111",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 731872,
            "date": "Wed 30 Nov 2022 19:52",
            "username": "mj98",
            "content": "Which is why IAM policy attached with s3:PutObjectLegalHold permission for some users. Ans is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724218,
            "date": "Tue 22 Nov 2022 10:37",
            "username": "attila9778attila9778",
            "content": "Question says: \\\"indefinite amount of time\\\" -> \\\"legal hold\\\"<br>Your provided link describes this feature as well:<br>\\\"A legal hold provides the same protection as a retention period, but it has no expiration date. Instead, a legal hold remains in place until you explicitly remove it.\\\"=> Answer: D",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 724219,
            "date": "Tue 22 Nov 2022 10:38",
            "username": "attila9778",
            "content": "=> Answer: D",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#110",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A social media company allows users to upload images to its website. The website runs on Amazon EC2 instances. During upload requests, the website resizes the images to a standard size and stores the resized images in Amazon S3. Users are experiencing slow upload requests to the website.<br>The company needs to reduce coupling within the application and improve website performance. A solutions architect must design the most operationally efficient process for image uploads.<br>Which combination of actions should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#110",
            "answers": [
              {
                "choice": "<p>A. Configure the application to upload images to S3 Glacier.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the web server to upload the original images to Amazon S3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the application to upload images directly from each user's browser to Amazon S3 through the use of a presigned URL<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure S3 Event Notifications to invoke an AWS Lambda function when an image is uploaded. Use the function to resize the image.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that invokes an AWS Lambda function on a schedule to resize uploaded images.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 734408,
            "date": "Sat 03 Dec 2022 12:49",
            "username": "Wajif",
            "content": "I would go C&D simply because it is operationally efficient and will have the users directly access S3 and avoid slowness. The slow user experience need to be resolved.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 728190,
            "date": "Sun 27 Nov 2022 13:25",
            "username": "leonnnn",
            "content": "It’s not a common solution to upload from user browser directly to S3. But it says “reduce coupling”. I think it means transferring between web server and S3 is unnecessary.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 728057,
            "date": "Sun 27 Nov 2022 09:49",
            "username": "ocbn3wby",
            "content": "B: UI -> Web Server -> S3(this is not efficient and secure, you are transferring files twice).<br><br>C: based on the above, this is one transfer only (so more efficient!)<br><br>E: EventBridge + Lambda (this requires extra integration between S3 and EventBridge). <br><br>D: simply S3 event notifications to Lambda is more operationally efficient than E.  Answer: C+D <br><br>Supporting documentation: <br>https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html<br>https://fullstackdojo.medium.com/s3-upload-with-presigned-url-react-and-nodejs-b77f348d54cc#:~:text=S3%20upload%20with%20presigned%20url%20%E2%80%94%20React%20and,upload%20the%20file%20with%20the%20returned%20presigned%20URL.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 725839,
            "date": "Thu 24 Nov 2022 13:48",
            "username": "Vic_d_gr8",
            "content": "Remember to have operationally efficiency in mind. It usually goes with configure rather than create. For Presigned URL's you have to assign it individually to the user. Example of Presiged URL's use case: For access to premium users on a premium content on a website .",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 724104,
            "date": "Tue 22 Nov 2022 06:03",
            "username": "Wilson_S",
            "content": "“Opertationally efficient”",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 723818,
            "date": "Mon 21 Nov 2022 19:13",
            "username": "Wpcorgan",
            "content": "B and D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 718907,
            "date": "Tue 15 Nov 2022 16:24",
            "username": "rjam",
            "content": "Reason:<br>option B and E. <br>Configure the web server to upload the original images to Amazon S3.<br><br>Event Bridge has the capability to replay , reliable delivery, and archive so in case if lambda fails to process it can be retried in case of connection failures as the messages will be available in Event bridge.<br>A:: NO. cannot upload directly to Glacier. you need to do it first to S3<br>C: NO. Presigned URLS expire after some time<br>D: Event bridge is better . If you configure S3 Event Notifications directly to lambda, the event will be lost during connection failures are no way to reprocess in case of failure by lambda to process.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 713608,
            "date": "Tue 08 Nov 2022 09:42",
            "username": "Deplake",
            "content": "C is not looking correct for me, you should handle somehow which image names are already uploaded in order to prevent conflicts and security could be the case as well",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 712203,
            "date": "Sun 06 Nov 2022 09:42",
            "username": "baiy",
            "content": "I go for BD,presigned URL does not improve performance, I don't see the meaning of using.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 712027,
            "date": "Sat 05 Nov 2022 22:52",
            "username": "gokalpkocer3",
            "content": "presigned URL does not improve performance which is what question asking here.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 708146,
            "date": "Mon 31 Oct 2022 03:35",
            "username": "StephhhhStephhhh",
            "content": "Upload image directly from user browser? Will it incur extra support effort to the IT team? Does it means extra operational effort?I will go for B and D, given the operation effort is a consideration",
            "upvote_count": "23",
            "selected_answers": ""
          },
          {
            "id": 708148,
            "date": "Mon 31 Oct 2022 03:36",
            "username": "Stephhhh",
            "content": "I will go for B and D, given the operation effort is a consideration",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 704819,
            "date": "Wed 26 Oct 2022 17:30",
            "username": "Six_Fingered_JoseUSalo",
            "content": "This is a tough question but i will go with C and D<br>with B: client browser -> web server -> s3<br>with C: client browser -> s3 directly,<br><br>meaning C should be a better solution than B (setting up pre-signed URLs do feel like a chore though)<br><br>am not 100% sure on this.What about security? It can be potential issue if not properly covered on front-end, but handling that adding additional overhead.",
            "upvote_count": "41",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 707081,
            "date": "Sat 29 Oct 2022 11:00",
            "username": "USalo",
            "content": "What about security? It can be potential issue if not properly covered on front-end, but handling that adding additional overhead.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#111",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company recently migrated a message processing system to AWS. The system receives messages into an ActiveMQ queue running on an Amazon EC2 instance. Messages are processed by a consumer application running on Amazon EC2. The consumer application processes the messages and writes results to a MySQL database running on Amazon EC2. The company wants this application to be highly available with low operational complexity.<br>Which architecture offers the HIGHEST availability?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#111",
            "answers": [
              {
                "choice": "<p>A. Add a second ActiveMQ server to another Availability Zone. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Use Amazon RDS for MySQL with Multi-AZ enabled.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an Auto Scaling group for the consumer EC2 instances across two Availability Zones. Use Amazon RDS for MySQL with Multi-AZ enabled.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699048,
            "date": "Wed 19 Oct 2022 14:59",
            "username": "123jhl0",
            "content": "Answer is D as the \\\"HIGHEST available\\\" and less \\\"operational complex\\\"<br>The \\\"Amazon RDS for MySQL with Multi-AZ enabled\\\" option excludes A and B<br>The \\\"Auto Scaling group\\\" is more available and reduces operational complexity in case of incidents (as remediation it is automated) than just adding one more instance. This excludes C. <br><br>C and D to choose from based on <br>D over C sinceis configured",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 723856,
            "date": "Mon 21 Nov 2022 20:38",
            "username": "Wpcorgan",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 705475,
            "date": "Thu 27 Oct 2022 13:19",
            "username": "UWSFishWajifnullvoiddeath",
            "content": "I don't know about D. Active/Standby adds to fault tolerance but does nothing for HA. Fault tolerance goes up a level from HA.  Active Standby contributes to HA. Amazon RDS > MySQL, hence A and B are eliminated",
            "upvote_count": "111",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 734787,
            "date": "Sun 04 Dec 2022 02:51",
            "username": "Wajif",
            "content": "Fault tolerance goes up a level from HA.  Active Standby contributes to HA. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 714911,
            "date": "Thu 10 Nov 2022 05:01",
            "username": "nullvoiddeath",
            "content": "Amazon RDS > MySQL, hence A and B are eliminated",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 704821,
            "date": "Wed 26 Oct 2022 17:32",
            "username": "Six_Fingered_Jose",
            "content": "agree with D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#112",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company hosts a containerized web application on a fleet of on-premises servers that process incoming requests. The number of requests is growing quickly. The on-premises servers cannot handle the increased number of requests. The company wants to move the application to AWS with minimum code changes and minimum development effort.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#112",
            "answers": [
              {
                "choice": "<p>A. Use AWS Fargate on Amazon Elastic Container Service (Amazon ECS) to run the containerized web application with Service Auto Scaling. Use an Application Load Balancer to distribute the incoming requests.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use two Amazon EC2 instances to host the containerized web application. Use an Application Load Balancer to distribute the incoming requests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS Lambda with a new code that uses one of the supported languages. Create multiple Lambda functions to support the load. Use Amazon API Gateway as an entry point to the Lambda functions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use a high performance computing (HPC) solution such as AWS ParallelCluster to establish an HPC cluster that can process the incoming requests at the appropriate scale.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699063,
            "date": "Wed 19 Oct 2022 15:38",
            "username": "123jhl0",
            "content": "Less operational overhead means A: Fargate (no EC2), move the containers on ECS, autoscaling for growth and ALB to balance consumption.<br>B - requires configure EC2<br>C - requires add code (developpers)<br>D - seems like the most complex approach, like re-architecting the app to take advantage of an HPC platform.",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 723858,
            "date": "Mon 21 Nov 2022 20:40",
            "username": "Wpcorgan",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 704823,
            "date": "Wed 26 Oct 2022 17:34",
            "username": "Six_Fingered_Jose",
            "content": "Agreed with A,<br>lambda will work too but requires more operational overhead (more chores)<br><br>with A, you are just moving from an on-prem container to AWS container",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#113",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses 50 TB of data for reporting. The company wants to move this data from on premises to AWS. A custom application in the company’s data center runs a weekly data transformation job. The company plans to pause the application until the data transfer is complete and needs to begin the transfer process as soon as possible.<br>The data center does not have any available network bandwidth for additional workloads. A solutions architect must transfer the data and must configure the transformation job to continue to run in the AWS Cloud.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#113",
            "answers": [
              {
                "choice": "<p>A. Use AWS DataSync to move the data. Create a custom transformation job by using AWS Glue.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Order an AWS Snowcone device to move the data. Deploy the transformation application to the device.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Order an AWS Snowball Edge Storage Optimized device. Copy the data to the device. Create a custom transformation job by using AWS Glue.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Order an AWS Snowball Edge Storage Optimized device that includes Amazon EC2 compute. Copy the data to the device. Create a new EC2 instance on AWS to run the transformation application.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699059,
            "date": "Wed 19 Oct 2022 15:29",
            "username": "123jhl0",
            "content": "A.  Use AWS DataSync to move the data. Create a custom transformation job by using AWS Glue. - No BW available for DataSync, so \\\"asap\\\" will be weeks/months (?)<br>B.  Order an AWS Snowcone device to move the data. Deploy the transformation application to the device. - Snowcone will just store 14TB (SSD configuration).<br>**C**. Order an AWS Snowball Edge Storage Optimized device. Copy the data to the device. Create a custom transformation job by using AWS Glue. - SnowBall can store 80TB (ok), takes around 1 week to move the device (faster than A), and AWS Glue allows to do ETL jobs. This is the answer.<br>D.  Order an AWS Snowball Edge Storage Optimized device that includes Amazon EC2 compute. Copy the data to the device. Create a new EC2 instance on AWS to run the transformation application. - Same as C, but the ETL job requires the deployment/configuration/maintenance of an EC2 instance, while Glue is serverless. This means D has more operational overhead than C. ",
            "upvote_count": "10",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 731883,
            "date": "Wed 30 Nov 2022 20:03",
            "username": "mj98",
            "content": "I would say D because they have a custom application?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728087,
            "date": "Sun 27 Nov 2022 10:19",
            "username": "ocbn3wbyocbn3wby",
            "content": "I would stick to D answer. <br><br>In real life - this is what it would have happened. Maybe after the migration, the existing ETL application would be refactored to AWS services. But this takes development time vs \\\"lift and shift\\\" approach. Edge Storage optimized offers EC2 compute functionality (with AMI directly integrated) https://docs.aws.amazon.com/snowball/latest/developer-guide/device-differences.htmlAlso, the question clearly states they want to \\\"pause the application\\\" and not transform it to something more efficient.",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728088,
            "date": "Sun 27 Nov 2022 10:19",
            "username": "ocbn3wby",
            "content": "Also, the question clearly states they want to \\\"pause the application\\\" and not transform it to something more efficient.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727090,
            "date": "Fri 25 Nov 2022 22:26",
            "username": "rewdboyocbn3wbyJayanKuruwitaocbn3wby",
            "content": "D is correct<br>I'm a bit split on this, because C is also a good answer, especially if you consider that the operational overhead. On the other hand, it seems more operationally efficient to just run the custom ETL job that already exists on the on-prem server on an EC2 instance instead of using AWS Glue. The part of the question that says they already have a \\\"custom application\\\" tells me that it should stay 1:1 to make the migration easier.In real life - this is what it would have happened. Maybe after the migration, the existing ETL application would be refactored to AWS services (Glue). But this takes development time vs \\\"lift and shift\\\" approach. I would stick to answer D. As I know Snowball Edge dosn't come with EC2. So the answer should be CYou can search this online. <br>https://docs.aws.amazon.com/snowball/latest/developer-guide/device-differences.html",
            "upvote_count": "1111",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 728085,
            "date": "Sun 27 Nov 2022 10:18",
            "username": "ocbn3wby",
            "content": "In real life - this is what it would have happened. Maybe after the migration, the existing ETL application would be refactored to AWS services (Glue). But this takes development time vs \\\"lift and shift\\\" approach. I would stick to answer D. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727397,
            "date": "Sat 26 Nov 2022 09:47",
            "username": "JayanKuruwitaocbn3wby",
            "content": "As I know Snowball Edge dosn't come with EC2. So the answer should be CYou can search this online. <br>https://docs.aws.amazon.com/snowball/latest/developer-guide/device-differences.html",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 728082,
            "date": "Sun 27 Nov 2022 10:16",
            "username": "ocbn3wby",
            "content": "You can search this online. <br>https://docs.aws.amazon.com/snowball/latest/developer-guide/device-differences.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723860,
            "date": "Mon 21 Nov 2022 20:42",
            "username": "Wpcorgan",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 704833,
            "date": "Wed 26 Oct 2022 17:43",
            "username": "Six_Fingered_Jose",
            "content": "agree with C <br>Glue is least effort",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#114",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has created an image analysis application in which users can upload photos and add photo frames to their images. The users upload images and metadata to indicate which photo frames they want to add to their images. The application uses a single Amazon EC2 instance and Amazon DynamoDB to store the metadata.<br>The application is becoming more popular, and the number of users is increasing. The company expects the number of concurrent users to vary significantly depending on the time of day and day of week. The company must ensure that the application can scale to meet the needs of the growing user base.<br>Which solution meats these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#114",
            "answers": [
              {
                "choice": "<p>A. Use AWS Lambda to process the photos. Store the photos and metadata in DynamoDB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon Kinesis Data Firehose to process the photos and to store the photos and metadata.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS Lambda to process the photos. Store the photos in Amazon S3. Retain DynamoDB to store the metadata.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Increase the number of EC2 instances to three. Use Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volumes to store the photos and metadata.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 692358,
            "date": "Tue 11 Oct 2022 21:19",
            "username": "MXB05",
            "content": "Do not store images in databases ;)... correct answer should be C",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727096,
            "date": "Fri 25 Nov 2022 22:32",
            "username": "rewdboy",
            "content": "C for sure<br>I was originally leaning toward A because it seemed like a simpler setup to keep the images and metadata in the same service, but DynamoDB has a record limit of 64KB, so S3 would be better for image storage and then DynamoDB for metadata",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 723861,
            "date": "Mon 21 Nov 2022 20:43",
            "username": "Wpcorgan",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 717820,
            "date": "Mon 14 Nov 2022 09:49",
            "username": "Pamban",
            "content": "photo needs to be on S3",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 716057,
            "date": "Fri 11 Nov 2022 13:54",
            "username": "mabotega",
            "content": "photos should be stored on S3",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 704836,
            "date": "Wed 26 Oct 2022 17:48",
            "username": "Six_Fingered_Jose",
            "content": "agree with C,<br>Storing image in DB wont be very scalable compared to S3<br>metadata does not take up much space and is more efficiently stored in DB",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 702797,
            "date": "Mon 24 Oct 2022 09:47",
            "username": "tubtab",
            "content": "cccccccccc",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#115",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A medical records company is hosting an application on Amazon EC2 instances. The application processes customer data files that are stored on Amazon S3. The EC2 instances are hosted in public subnets. The EC2 instances access Amazon S3 over the internet, but they do not require any other network access.<br>A new requirement mandates that the network traffic for file transfers take a private route and not be sent over the internet.<br>Which change to the network architecture should a solutions architect recommend to meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#115",
            "answers": [
              {
                "choice": "<p>A. Create a NAT gateway. Configure the route table for the public subnets to send traffic to Amazon S3 through the NAT gateway.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the security group for the EC2 instances to restrict outbound traffic so that only traffic to the S3 prefix list is permitted.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Move the EC2 instances to private subnets. Create a VPC endpoint for Amazon S3, and link the endpoint to the route table for the private subnets.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Remove the internet gateway from the VPC.  Set up an AWS Direct Connect connection, and route traffic to Amazon S3 over the Direct Connect connection.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 728120,
            "date": "Sun 27 Nov 2022 11:05",
            "username": "ocbn3wby",
            "content": "C is correct. <br>There is no requirement for public access from internet. <br><br>Application must be moved in Private subnet. This is a prerequisite in using VPC endpoints with S3<br>https://aws.amazon.com/blogs/storage/managing-amazon-s3-access-with-vpc-endpoints-and-s3-access-points/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723862,
            "date": "Mon 21 Nov 2022 20:45",
            "username": "Wpcorgan",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 717723,
            "date": "Mon 14 Nov 2022 06:38",
            "username": "Jtic",
            "content": "Use VPC endpoint",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 717489,
            "date": "Sun 13 Nov 2022 20:54",
            "username": "JticJtic",
            "content": "User VPC endpoint and make the EC2 privateUse VPC endpoint",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 717490,
            "date": "Sun 13 Nov 2022 20:54",
            "username": "Jtic",
            "content": "Use VPC endpoint",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 711940,
            "date": "Sat 05 Nov 2022 19:15",
            "username": "backbencher2022",
            "content": "VPC endpoint is the best choice to route S3 traffic without traversing internet. Option A alone can't be used as NAT Gateway requires an Internet gateway for outbound internet traffic. Option B would still require traversing through internet and option D is also not a suitable solution",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#116",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses a popular content management system (CMS) for its corporate website. However, the required patching and maintenance are burdensome. The company is redesigning its website and wants anew solution. The website will be updated four times a year and does not need to have any dynamic content available. The solution must provide high scalability and enhanced security.<br>Which combination of changes will meet these requirements with the LEAST operational overhead? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#116",
            "answers": [
              {
                "choice": "<p>A. Configure Amazon CloudFront in front of the website to use HTTPS functionality.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy an AWS WAF web ACL in front of the website to provide HTTPS functionality.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create and deploy an AWS Lambda function to manage and serve the website content.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create the new website and an Amazon S3 bucket. Deploy the website on the S3 bucket with static website hosting enabled.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create the new website. Deploy the website by using an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 700270,
            "date": "Thu 20 Oct 2022 22:09",
            "username": "palermo777",
            "content": "A -> We can configure CloudFront to require HTTPS from clients (enhanced security) https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html<br>D -> storing static website on S3 provides scalability and less operational overhead, then configuration of Application LB and EC2 instances (hence E is out)<br><br>B is out since AWS WAF Web ACL does not to provide HTTPS functionality, but to protect HTTPS only.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 723863,
            "date": "Mon 21 Nov 2022 20:47",
            "username": "Wpcorgan",
            "content": "A and D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 714448,
            "date": "Wed 09 Nov 2022 11:00",
            "username": "PS_R",
            "content": "Cloudfront can do the WAF part so i chose A and D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 714015,
            "date": "Tue 08 Nov 2022 19:02",
            "username": "Bevemo",
            "content": "Initially I thought B) WAF for HTTP to HTTPS redirect, but then I found CloudFront can do it so A) adds performance/scale and security. https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 705749,
            "date": "Thu 27 Oct 2022 18:58",
            "username": "ManoAni",
            "content": "For enhanced security B, and they mentioned patching is burdensome so if its E, then they must patch the EC2 instances. So hosting in S3 is ideal as it is static content.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 704842,
            "date": "Wed 26 Oct 2022 17:54",
            "username": "Six_Fingered_Jose",
            "content": "agree with A and D<br><br>static website -> obviously S3, and S3 is super scalable<br>CDN -> CloudFront obviously as well, and with HTTPS security is enhanced.<br><br>B does not make sense because you are not replacing the CDN with anything,<br>E works too but takes too much effort and compared to S3, S3 still wins in term of scalability. plus why use EC2 when you are only hosting static website",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 699671,
            "date": "Thu 20 Oct 2022 10:00",
            "username": "rob74ocbn3wby",
            "content": ". The solution must provide high scalability and enhanced security<br>AWS WAF--> For enhanced security<br>high scalability -->behind an Application Load Balancer.Please provide informed answers. You are truly correct, but in this case, there is no specific need to host the website/cms on EC2 + ALB.  <br><br>It only requires static website - which can be achieved with scalable S3.",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 728123,
            "date": "Sun 27 Nov 2022 11:13",
            "username": "ocbn3wby",
            "content": "Please provide informed answers. You are truly correct, but in this case, there is no specific need to host the website/cms on EC2 + ALB.  <br><br>It only requires static website - which can be achieved with scalable S3.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#117",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company stores its application logs in an Amazon CloudWatch Logs log group. A new policy requires the company to store all application logs in Amazon OpenSearch Service (Amazon Elasticsearch Service) in near-real time.<br>Which solution will meet this requirement with the LEAST operational overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#117",
            "answers": [
              {
                "choice": "<p>A. Configure a CloudWatch Logs subscription to stream the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Lambda function. Use the log group to invoke the function to write the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon Kinesis Data Firehose delivery stream. Configure the log group as the delivery streams sources. Configure Amazon OpenSearch Service (Amazon Elasticsearch Service) as the delivery stream's destination.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Install and configure Amazon Kinesis Agent on each application server to deliver the logs to Amazon Kinesis Data Streams. Configure Kinesis Data Streams to deliver the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 704843,
            "date": "Wed 26 Oct 2022 17:56",
            "username": "Six_Fingered_JoseUWSFish",
            "content": "answer is A<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_OpenSearch_Stream.html<br><br>> You can configure a CloudWatch Logs log group to stream data it receives to your Amazon OpenSearch Service cluster in NEAR REAL-TIME through a CloudWatch Logs subscription<br><br>least overhead compared to kinesisGreat link. Convinced me",
            "upvote_count": "144",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 705585,
            "date": "Thu 27 Oct 2022 15:21",
            "username": "UWSFish",
            "content": "Great link. Convinced me",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 715712,
            "date": "Fri 11 Nov 2022 03:41",
            "username": "study_aws1",
            "content": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions.html<br><br>You'll need to have destination arn (not mentioned under option A) - either Lambda or Kinesis Firehose.<br><br>The Amazon Resource Name (ARN) of the Kinesis stream, Kinesis Data Firehose stream, or Lambda function you want to use as the destination of the subscription feed.<br><br>Option B) does not mention the Subscription Filter. Looks more towards Option C)",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 707600,
            "date": "Sun 30 Oct 2022 05:39",
            "username": "SimonPark",
            "content": "You can configure a CloudWatch Logs log group to stream data it receives to your Amazon OpenSearch Service cluster in near real-time through a CloudWatch Logs subscription.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 704042,
            "date": "Tue 25 Oct 2022 18:59",
            "username": "ManoAnimj98",
            "content": "They mentioned near real timeA is also near real time. plus A is least operational overhead",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 731894,
            "date": "Wed 30 Nov 2022 20:09",
            "username": "mj98",
            "content": "A is also near real time. plus A is least operational overhead",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 702564,
            "date": "Mon 24 Oct 2022 02:50",
            "username": "capepenguinmj98",
            "content": "Please tell me why not C?<br>https://docs.aws.amazon.com/opensearch-service/latest/developerguide/integrations.html#integrations-fhLEAST operational overhead",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 731893,
            "date": "Wed 30 Nov 2022 20:08",
            "username": "mj98",
            "content": "LEAST operational overhead",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 700304,
            "date": "Thu 20 Oct 2022 23:10",
            "username": "ericcloud20",
            "content": "Answer is A<br><br>CloudWatch has a native feature to stream logs to OpenSearch, when you enable this setting it creates a Lambda Function automatically with pre-populated code which streams the logs to OpenSearch Cluster. The question here needs a solution with LEAST operational overhead, therefore the answer should be A<br>REF: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_OpenSearch_Stream.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 700276,
            "date": "Thu 20 Oct 2022 22:21",
            "username": "palermo777EKA_CloudGod",
            "content": "B looks good:<br>https://d1.awsstatic.com/whitepapers/whitepaper-use-amazon-elasticsearch-to-log-and-monitor-almost-everything.pdf<br>Chapter: Pushing Amazon CloudWatch Logs into Amazon ES: \\\"... integration makes it easy to send data to Elasticsearch if source data exists in CloudWatch Logs\\\"<br><br>Approach with Amazon Kinesis Data Firehose requires installation of Amazon Kinesis agent on the EC2 instances, hence it's not considered as LEAST operational complexDid you mean A?",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 732093,
            "date": "Thu 01 Dec 2022 00:43",
            "username": "EKA_CloudGod",
            "content": "Did you mean A?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 699607,
            "date": "Thu 20 Oct 2022 08:36",
            "username": "KJa",
            "content": "Should be A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 698246,
            "date": "Tue 18 Oct 2022 14:47",
            "username": "LeGloupier",
            "content": "B seems to be the right answer<br>https://computingforgeeks.com/stream-logs-in-aws-from-cloudwatch-to-elasticsearch/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#118",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building a web-based application running on Amazon EC2 instances in multiple Availability Zones. The web application will provide access to a repository of text documents totaling about 900 TB in size. The company anticipates that the web application will experience periods of high demand. A solutions architect must ensure that the storage component for the text documents can scale to meet the demand of the application at all times. The company is concerned about the overall cost of the solution.<br>Which storage solution meets these requirements MOST cost-effectively?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#118",
            "answers": [
              {
                "choice": "<p>A. Amazon Elastic Block Store (Amazon EBS)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon Elastic File System (Amazon EFS)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon OpenSearch Service (Amazon Elasticsearch Service)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon S3<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 723865,
            "date": "Mon 21 Nov 2022 20:52",
            "username": "Wpcorgan",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 713889,
            "date": "Tue 08 Nov 2022 15:11",
            "username": "PS_R",
            "content": "Only EFS and S3, Since EFS is make it much costly, S3 is the viable option",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 705591,
            "date": "Thu 27 Oct 2022 15:25",
            "username": "UWSFish",
            "content": "I originally thought C but the question is specific about wanting the storage to scale not the search capacity.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#119",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A global company is using Amazon API Gateway to design REST APIs for its loyalty club users in the us-east-1 Region and the ap-southeast-2 Region. A solutions architect must design a solution to protect these API Gateway managed REST APIs across multiple accounts from SQL injection and cross-site scripting attacks.<br>Which solution will meet these requirements with the LEAST amount of administrative effort?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#119",
            "answers": [
              {
                "choice": "<p>A. Set up AWS WAF in both Regions. Associate Regional web ACLs with an API stage.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set up AWS Firewall Manager in both Regions. Centrally configure AWS WAF rules.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set up AWS Shield in bath Regions. Associate Regional web ACLs with an API stage.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up AWS Shield in one of the Regions. Associate Regional web ACLs with an API stage.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 713898,
            "date": "Tue 08 Nov 2022 15:28",
            "username": "Gil80",
            "content": "If you want to use AWS WAF across accounts, accelerate WAF configuration, automate the protection of new resources, use Firewall Manager with AWS WAF",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 713459,
            "date": "Tue 08 Nov 2022 04:29",
            "username": "Nigma",
            "content": "B<br><br>Using AWS WAF has several benefits. Additional protection against web attacks using criteria that you specify. You can define criteria using characteristics of web requests such as the following:<br>Presence of SQL code that is likely to be malicious (known as SQL injection).<br>Presence of a script that is likely to be malicious (known as cross-site scripting).<br><br>AWS Firewall Manager simplifies your administration and maintenance tasks across multiple accounts and resources for a variety of protections.<br><br>https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 723866,
            "date": "Mon 21 Nov 2022 20:54",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 714440,
            "date": "Wed 09 Nov 2022 10:54",
            "username": "PS_R",
            "content": "The Answer is AWS Firewall Manager, as it says multiple accounts - My bad.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 713897,
            "date": "Tue 08 Nov 2022 15:26",
            "username": "ArielSchivo",
            "content": "Option B. <br><br>https://aws.amazon.com/es/blogs/security/centrally-manage-aws-waf-api-v2-and-aws-managed-rules-at-scale-with-firewall-manager/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 713890,
            "date": "Tue 08 Nov 2022 15:13",
            "username": "PS_R",
            "content": "SQL Injections _ think WAF",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 713426,
            "date": "Tue 08 Nov 2022 03:18",
            "username": "study_aws1",
            "content": "The keyword is \\\"protect API Gateway managed REST APIs across multiple accounts\\\". Firewall Manager is used when it comes to managing multiple accounts. Option B)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 707551,
            "date": "Sun 30 Oct 2022 01:35",
            "username": "dokaedu",
            "content": "Correct Answer: A<br>AWS Firewall Manager manage multiple AWS WAFs in many regions, Each Firewall Manager policy can only include resources available in that specified AWS Region, You can create a new policy for each region where you operate. The AWS WAF policies are reginal.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 704341,
            "date": "Wed 26 Oct 2022 04:47",
            "username": "envest",
            "content": "IMO: WAF & FW Mgr are regional.<br>https://aws.amazon.com/firewall-manager/faqs/#:~:text=No%2C%20AWS%20Firewall%20Manager%20security%20policies%20are%20region%20specific.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#120",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has implemented a self-managed DNS solution on three Amazon EC2 instances behind a Network Load Balancer (NLB) in the us-west-2 Region. Most of the company's users are located in the United States and Europe. The company wants to improve the performance and availability of the solution. The company launches and configures three EC2 instances in the eu-west-1 Region and adds the EC2 instances as targets for a new NLB. <br>Which solution can the company use to route traffic to all the EC2 instances?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#120",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon Route 53 geolocation routing policy to route requests to one of the two NLBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a standard accelerator in AWS Global Accelerator. Create endpoint groups in us-west-2 and eu-west-1. Add the two NLBs as endpoints for the endpoint groups.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Attach Elastic IP addresses to the six EC2 instances. Create an Amazon Route 53 geolocation routing policy to route requests to one of the six EC2 instances. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution's origin.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Replace the two NLBs with two Application Load Balancers (ALBs). Create an Amazon Route 53 latency routing policy to route requests to one of the two ALBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 698257,
            "date": "Tue 18 Oct 2022 15:05",
            "username": "LeGloupier",
            "content": "for me it is B",
            "upvote_count": "8",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727358,
            "date": "Sat 26 Nov 2022 08:18",
            "username": "Newptone",
            "content": "For option A: Create an Amazon CloudFront distribution.<br>DNS is tcp/udp only, you can not use CF to cache the traffic.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 723883,
            "date": "Mon 21 Nov 2022 21:23",
            "username": "jhxetc",
            "content": "B makes the most sense since is not for a web app, but rather a DNS solution. We probably don't need to involve Route 53 (itself a DNS solution).",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 723381,
            "date": "Mon 21 Nov 2022 11:17",
            "username": "grzeev",
            "content": "for me it is D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 717488,
            "date": "Sun 13 Nov 2022 20:47",
            "username": "Jtic",
            "content": "WS Global Accelerator is a networking service that helps you improve the availability and performance of the applications that you offer to your global users. AWS Global Accelerator is easy to set up, configure, and manage. It provides static IP addresses that provide a fixed entry point to your applications and eliminate the complexity of managing specific IP addresses for different AWS Regions and Availability Zones. AWS Global Accelerator always routes user traffic to the optimal endpoint based on performance, reacting instantly to changes in application health, your user’s location, and policies that you configure<br><br>https://aws.amazon.com/global-accelerator/faqs/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 715042,
            "date": "Thu 10 Nov 2022 09:23",
            "username": "KADSM",
            "content": "It should be A.  As in B - The solution is about using Standard accelerator. It may need custom routing accelerator to route the traffic to specific EC2 instance. <br><br>Custom routing accelerator<br>Custom routing accelerators are a new type of accelerator in AWS Global Accelerator. This new accelerator lets you use your own application logic to route user traffic to a specific Amazon EC2 instance destination in a single or multiple AWS Regions. . A custom routing accelerator is an alternative to the standard accelerator, which automatically routes traffic to a healthy endpoint that is nearest to your users. Because standard accelerators are designed to load balance traffic, you can't use them to route users to a specific EC2 instance destination behind your accelerator.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 707607,
            "date": "Sun 30 Oct 2022 05:55",
            "username": "SimonPark",
            "content": "imho, it's A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 707556,
            "date": "Sun 30 Oct 2022 01:56",
            "username": "dokaedu",
            "content": "B is the correct one for seld manage DNS<br>If need to use Route53, ALB(layar 7 ) needs to be used as end points for 2 reginal x 3 EC2s, if it the case answer would be the option 4",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 704850,
            "date": "Wed 26 Oct 2022 18:09",
            "username": "Six_Fingered_Jose",
            "content": "I think it is A,<br>if you carefully read the document below, with GA routing is managed manually in multi-region applications<br>> Your traffic routing is managed manually<br>https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-associate-saa-c03/view/30/<br><br>thus, Route53 geolocation seems to be the only solution to this problem (routing to different resources on different regions based on user's geolocation)",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 699905,
            "date": "Thu 20 Oct 2022 14:27",
            "username": "Evangelia",
            "content": "B for self managed DNS solution",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#121",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running an online transaction processing (OLTP) workload on AWS. This workload uses an unencrypted Amazon RDS DB instance in a Multi-AZ deployment. Daily database snapshots are taken from this instance.<br>What should a solutions architect do to ensure the database and snapshots are always encrypted moving forward?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#121",
            "answers": [
              {
                "choice": "<p>A. Encrypt a copy of the latest DB snapshot. Replace existing DB instance by restoring the encrypted snapshot.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new encrypted Amazon Elastic Block Store (Amazon EBS) volume and copy the snapshots to it. Enable encryption on the DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Copy the snapshots and enable encryption using AWS Key Management Service (AWS KMS) Restore encrypted snapshot to an existing DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Copy the snapshots to an Amazon S3 bucket that is encrypted using server-side encryption with AWS Key Management Service (AWS KMS) managed keys (SSE-KMS).<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699279,
            "date": "Wed 19 Oct 2022 20:53",
            "username": "123jhl0",
            "content": "\\\"You can enable encryption for an Amazon RDS DB instance when you create it, but not after it's created. However, you can add encryption to an unencrypted DB instance by creating a snapshot of your DB instance, and then creating an encrypted copy of that snapshot. You can then restore a DB instance from the encrypted snapshot to get an encrypted copy of your original DB instance.\\\"<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/encrypt-an-existing-amazon-rds-for-postgresql-db-instance.html",
            "upvote_count": "12",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 728822,
            "date": "Mon 28 Nov 2022 07:07",
            "username": "ocbn3wby",
            "content": "You cannot restore to existing DB (hence answer C is wrong). You create new DB for which you choose new unique Identifier.<br><br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/encrypt-an-existing-amazon-rds-for-postgresql-db-instance.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 724311,
            "date": "Tue 22 Nov 2022 13:23",
            "username": "mricee9",
            "content": "Cant be C - you cant restore it to an existing DB instance",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 723938,
            "date": "Mon 21 Nov 2022 22:19",
            "username": "Wpcorgan",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 717043,
            "date": "Sun 13 Nov 2022 02:27",
            "username": "JticJtic",
            "content": "It seems that D is the correct answer<br><br>Database and snapshots \\\"are always encrypted moving forward?\\\"<br>A.  is only one time implementation<br><br>In the same document : https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/encrypt-an-existing-amazon-rds-for-postgresql-db-instance.html<br>It stated the steps moving forward under section \\\"Encrypt the snapshot.\\\"<br><br>Select the Enable Encryption checkbox. For Master Key, specify the KMS key identifier to use to encrypt the DB snapshot copy<br><br>Prerequisites - Familiarity with AWS Key Management Service (AWS KMS) for encrypting databases<br><br>Architecture:<br>The destination RDS DB instance is created by restoring the DB snapshot copy of the source RDS DB instance.<br>An AWS KMS key is used for encryption while restoring the snapshot.<br><br>Tools: used to enable encryption<br>AWS KMS key for encryptionsorry typo error: My vote is C",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 717047,
            "date": "Sun 13 Nov 2022 02:32",
            "username": "Jtic",
            "content": "sorry typo error: My vote is C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 714360,
            "date": "Wed 09 Nov 2022 08:33",
            "username": "tubtabocbn3wby",
            "content": "cccccccccPlease provide arguments to your response.",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 728821,
            "date": "Mon 28 Nov 2022 07:06",
            "username": "ocbn3wby",
            "content": "Please provide arguments to your response.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 714057,
            "date": "Tue 08 Nov 2022 20:09",
            "username": "Bevemoocbn3wby",
            "content": "Restore to existing not replace instance. This link says copy and encrypt using KMS. https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/encrypt-an-existing-amazon-rds-for-postgresql-db-instance.htmlDude, the link you mentioned, in the \\\"Restore the DB snapshot.\\\" chapter says:<br><br>\\\"Provide a unique name for the new DB instance.\\\" <br><br>It says nowhere that you use an existing DB, but only to create a new encrypted DB from Snapshot. Stop inducing ppl in error pal",
            "upvote_count": "31",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 728820,
            "date": "Mon 28 Nov 2022 07:06",
            "username": "ocbn3wby",
            "content": "Dude, the link you mentioned, in the \\\"Restore the DB snapshot.\\\" chapter says:<br><br>\\\"Provide a unique name for the new DB instance.\\\" <br><br>It says nowhere that you use an existing DB, but only to create a new encrypted DB from Snapshot. Stop inducing ppl in error pal",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 711960,
            "date": "Sat 05 Nov 2022 19:54",
            "username": "backbencher2022",
            "content": "A is the correct option based on this document - https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/encrypt-an-existing-amazon-rds-for-postgresql-db-instance.html",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#122",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to build a scalable key management infrastructure to support developers who need to encrypt data in their applications.<br>What should a solutions architect do to reduce the operational burden?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#122",
            "answers": [
              {
                "choice": "<p>A. Use multi-factor authentication (MFA) to protect the encryption keys.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS Key Management Service (AWS KMS) to protect the encryption keys.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS Certificate Manager (ACM) to create, store, and assign the encryption keys.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an IAM policy to limit the scope of users who have access permissions to protect the encryption keys.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699283,
            "date": "Wed 19 Oct 2022 21:01",
            "username": "123jhl0ocbn3wby",
            "content": "If you are a developer who needs to digitally sign or verify data using asymmetric keys, you should use the service to create and manage the private keys you’ll need. If you’re looking for a scalable key management infrastructure to support your developers and their growing number of applications, you should use it to reduce your licensing costs and operational burden...<br>https://aws.amazon.com/kms/faqs/#:~:text=If%20you%20are%20a%20developer%20who%20needs%20to%20digitally,a%20broad%20set%20of%20industry%20and%20regional%20compliance%20regimes.Most documented answers. Thank you, 123jhl0.",
            "upvote_count": "71",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 728825,
            "date": "Mon 28 Nov 2022 07:09",
            "username": "ocbn3wby",
            "content": "Most documented answers. Thank you, 123jhl0.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723941,
            "date": "Mon 21 Nov 2022 22:24",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723940,
            "date": "Mon 21 Nov 2022 22:21",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 717481,
            "date": "Sun 13 Nov 2022 20:40",
            "username": "Jtic",
            "content": "If you are responsible for securing your data across AWS services, you should use it to centrally manage the encryption keys that control access to your data. If you are a developer who needs to encrypt data in your applications, you should use the AWS Encryption SDK with AWS KMS to easily generate, use and protect symmetric encryption keys in your code.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#123",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a dynamic web application hosted on two Amazon EC2 instances. The company has its own SSL certificate, which is on each instance to perform SSL termination.<br>There has been an increase in traffic recently, and the operations team determined that SSL encryption and decryption is causing the compute capacity of the web servers to reach their maximum limit.<br>What should a solutions architect do to increase the application's performance?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#123",
            "answers": [
              {
                "choice": "<p>A. Create a new SSL certificate using AWS Certificate Manager (ACM). Install the ACM certificate on each instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon S3 bucket Migrate the SSL certificate to the S3 bucket. Configure the EC2 instances to reference the bucket for SSL termination.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create another EC2 instance as a proxy server. Migrate the SSL certificate to the new instance and configure it to direct connections to the existing EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Import the SSL certificate into AWS Certificate Manager (ACM). Create an Application Load Balancer with an HTTPS listener that uses the SSL certificate from ACM.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699292,
            "date": "Wed 19 Oct 2022 21:09",
            "username": "123jhl0",
            "content": "This issue is solved by SSL offloading, i.e. by moving the SSL termination task to the ALB. <br>https://aws.amazon.com/blogs/aws/elastic-load-balancer-support-for-ssl-termination/",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 723942,
            "date": "Mon 21 Nov 2022 22:25",
            "username": "Wpcorgan",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 704852,
            "date": "Wed 26 Oct 2022 18:12",
            "username": "Six_Fingered_Jose",
            "content": "agree with D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#124",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a highly dynamic batch processing job that uses many Amazon EC2 instances to complete it. The job is stateless in nature, can be started and stopped at any given time with no negative impact, and typically takes upwards of 60 minutes total to complete. The company has asked a solutions architect to design a scalable and cost-effective solution that meets the requirements of the job.<br>What should the solutions architect recommend?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#124",
            "answers": [
              {
                "choice": "<p>A. Implement EC2 Spot Instances.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Purchase EC2 Reserved Instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Implement EC2 On-Demand Instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Implement the processing on AWS Lambda.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 728811,
            "date": "Mon 28 Nov 2022 06:47",
            "username": "Kapello10",
            "content": "Cant be implemented on Lambda because the timeout for Lambda is 15mins and the Job takes 60minutes to complete<br><br>Answer >> A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 723943,
            "date": "Mon 21 Nov 2022 22:26",
            "username": "Wpcorgan",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 707611,
            "date": "Sun 30 Oct 2022 06:01",
            "username": "SimonPark",
            "content": "A is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 699912,
            "date": "Thu 20 Oct 2022 14:37",
            "username": "Evangelia",
            "content": "spot instances",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#125",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs its two-tier ecommerce website on AWS. The web tier consists of a load balancer that sends traffic to Amazon EC2 instances. The database tier uses an Amazon RDS DB instance. The EC2 instances and the RDS DB instance should not be exposed to the public internet. The EC2 instances require internet access to complete payment processing of orders through a third-party web service. The application must be highly available.<br>Which combination of configuration options will meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#125",
            "answers": [
              {
                "choice": "<p>A. Use an Auto Scaling group to launch the EC2 instances in private subnets. Deploy an RDS Multi-AZ DB instance in private subnets.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure a VPC with two private subnets and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the private subnets.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an Auto Scaling group to launch the EC2 instances in public subnets across two Availability Zones. Deploy an RDS Multi-AZ DB instance in private subnets.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure a VPC with one public subnet, one private subnet, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnet.D.  Configure a VPC with two public subnets, two private subnets, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnets.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 723945,
            "date": "Mon 21 Nov 2022 22:30",
            "username": "Wpcorgan",
            "content": "A and E",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 721946,
            "date": "Sat 19 Nov 2022 11:53",
            "username": "AbhiJo",
            "content": "AE, E is not shown in voting, <br><br>E is correct, 2 subnets",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 720389,
            "date": "Thu 17 Nov 2022 11:19",
            "username": "pspinelli19",
            "content": "AE --> https://www.examtopics.com/discussions/amazon/view/60023-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719496,
            "date": "Wed 16 Nov 2022 10:00",
            "username": "Newptone",
            "content": "AE <br>This link should be clear: https://aws.amazon.com/premiumsupport/knowledge-center/public-load-balancer-private-ec2/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 717973,
            "date": "Mon 14 Nov 2022 14:33",
            "username": "mabotega",
            "content": "sorry guys, reading better, all instances should be in private subnets, so, answers should be A and B. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 716691,
            "date": "Sat 12 Nov 2022 14:00",
            "username": "mabotegaAbhiJo",
            "content": "Answer A for: The EC2 instances and the RDS DB instance should not be exposed to the public internet. Answer D for: The EC2 instances require internet access to complete payment processing of orders through a third-party web service. Answer A for: The application must be highly available.We will require 2 private subnets, D does mention 1 subnet",
            "upvote_count": "41",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 721948,
            "date": "Sat 19 Nov 2022 11:55",
            "username": "AbhiJo",
            "content": "We will require 2 private subnets, D does mention 1 subnet",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 716438,
            "date": "Sat 12 Nov 2022 03:27",
            "username": "Pamban",
            "content": "moderator, please correct the answers. there should be 2 answers and options are A B C D E.  correct answer would be A &E.  letter D has been duplicated<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 715378,
            "date": "Thu 10 Nov 2022 17:19",
            "username": "mabotega",
            "content": "A and B are the correct choices <br>https://www.examtopics.com/discussions/amazon/view/60023-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AB"
          },
          {
            "id": 713981,
            "date": "Tue 08 Nov 2022 17:40",
            "username": "PS_R",
            "content": "A E (Last option) looks to be more efficient",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 713519,
            "date": "Tue 08 Nov 2022 07:09",
            "username": "Nigma",
            "content": "\\\"E\\\" for request of network segmentation.<br>\\\"A\\\" for highly available<br>The two options together offer the indicated requirements",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 711976,
            "date": "Sat 05 Nov 2022 20:31",
            "username": "backbencher2022",
            "content": "First of all, due to typo error in the options, last option typed as D is actually E.  For the sake of simplicity, we can say First (A) and Last option (E mistyped as D) are the correct options. Here is the explanation and reference to AWS document which helps us choose First (A) and Last (E) options as correct answer<br>https://aws.amazon.com/premiumsupport/knowledge-center/public-load-balancer-private-ec2/#",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 710168,
            "date": "Thu 03 Nov 2022 02:26",
            "username": "TaiTran1994",
            "content": "where option E ????",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 704857,
            "date": "Wed 26 Oct 2022 18:18",
            "username": "Six_Fingered_Jose",
            "content": "A and E is the answer",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 704049,
            "date": "Tue 25 Oct 2022 19:12",
            "username": "ManoAni",
            "content": "A & E is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 703412,
            "date": "Tue 25 Oct 2022 01:20",
            "username": "dave9994",
            "content": "A & E should be the answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 700286,
            "date": "Thu 20 Oct 2022 22:35",
            "username": "palermo777",
            "content": "A - since EC2 instances should not be exposed to the Internet<br>+E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 698871,
            "date": "Wed 19 Oct 2022 11:26",
            "username": "LukM",
            "content": "E there is not. It would be:<br>E.  Configure a VPC with two public subnets, two private subnets, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnets.",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#126",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect needs to implement a solution to reduce a company's storage costs. All the company's data is in the Amazon S3 Standard storage class. The company must keep all data for at least 25 years. Data from the most recent 2 years must be highly available and immediately retrievable.<br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#126",
            "answers": [
              {
                "choice": "<p>A. Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive immediately.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 2 years.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use S3 Intelligent-Tiering. Activate the archiving option to ensure that data is archived in S3 Glacier Deep Archive.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up an S3 Lifecycle policy to transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) immediately and to S3 Glacier Deep Archive after 2 years.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 729126,
            "date": "Mon 28 Nov 2022 14:16",
            "username": "Cizzla7049",
            "content": "https://aws.amazon.com/blogs/aws/s3-intelligent-tiering-adds-archive-access-tiers/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 723948,
            "date": "Mon 21 Nov 2022 22:31",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720882,
            "date": "Thu 17 Nov 2022 22:31",
            "username": "TelaO",
            "content": "B is the only right answer. C does not indicate archiving after 2 years.If it did specify 2 years, then C would also be an option.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 720345,
            "date": "Thu 17 Nov 2022 10:00",
            "username": "rjam",
            "content": "Why Not C? Because Intelligent Tierthe objects are automatically moved to different tiers.<br>The question says \\\"the data from most recent 2 yrs should be highly available and immediately retrievable\\\", which means in intelligent tier , if you activate archiving option(as Option C specifies) , the objects will be moved to Archive tiers(instant to access to deep archive access tiers) in 90 to 730 days. Remember these archive tiers performance will be similar to S3 glacier flexible and s3 deep archive which means files cannot be retrieved immediately within 2 yrs .<br><br>We have a hard requirement in question which says it should be retreivable immediately for the 2 yrs.which cannot be acheived in Intelligent tier.So B is the correct option imho.<br><br>Because of the above reason Its possible only in S3 standard and then configure lifecycle configuration to move to S3 Glacier Deep Archive after 2 yrs.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 717478,
            "date": "Sun 13 Nov 2022 20:32",
            "username": "Jtic",
            "content": "C - S3 Intelligent-Tiering<br>Customers saving on storage with S3 Intelligent-Tiering<br><br>S3 Intelligent-Tiering automatically stores objects in three access tiers: one tier optimized for frequent access, a lower-cost tier optimized for infrequent access, and a very-low-cost tier optimized for rarely accessed data. For a small monthly object monitoring and automation charge, S3 Intelligent-Tiering moves objects that have not been accessed for 30 consecutive days to the Infrequent Access tier for savings of 40%; and after 90 days of no access, they’re<br><br>There are no retrieval charges in S3 Intelligent-Tiering. S3 Intelligent-Tiering has no minimum eligible object size, but objects smaller than 128 KB are not eligible for auto tiering. These smaller objects may be stored, but they’ll always be charged at the Frequent Access tier rates and don’t incur the monitoring and automation charge",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 717346,
            "date": "Sun 13 Nov 2022 15:11",
            "username": "DeplakeWilson_S",
            "content": "Option C doesn't look correct for me because it is not clear when it will be moved to the Deep Archive. It could be earlier then 2 years, which is not correcthttps://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html#:~:text=S3%20Intelligent%2DTiering%20provides%20you,minimum%20of%2090%20consecutive%20days. Option B /S3 Glacier Deep Archive seems correct to reduce a company's storage costs.",
            "upvote_count": "31",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 718998,
            "date": "Tue 15 Nov 2022 18:57",
            "username": "Wilson_S",
            "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html#:~:text=S3%20Intelligent%2DTiering%20provides%20you,minimum%20of%2090%20consecutive%20days. Option B /S3 Glacier Deep Archive seems correct to reduce a company's storage costs.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 716865,
            "date": "Sat 12 Nov 2022 19:43",
            "username": "MyNameIsJulien",
            "content": "The answer C seems correct",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 713907,
            "date": "Tue 08 Nov 2022 15:51",
            "username": "ArielSchivo",
            "content": "Glacier Deep Archive restores objects within 12 hours, so option A is out.<br>Option B could work but you will be paying S3 Standard for 2 years.<br>I would go with Option C then.<br>Option D is out since S3 One Zone IA is not highly available.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 708730,
            "date": "Mon 31 Oct 2022 22:27",
            "username": "rjammasetromain",
            "content": "Option D as one-zone IA is cheaper than standard s3 . they never mentioned about multi zone. so we will go for one zone IA.  The question mainly talks about reducing storage costsData from the most recent 2 years must be highly available and immediately retrievable.",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 709990,
            "date": "Wed 02 Nov 2022 19:31",
            "username": "masetromain",
            "content": "Data from the most recent 2 years must be highly available and immediately retrievable.",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#127",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A media company is evaluating the possibility of moving its systems to the AWS Cloud. The company needs at least 10 TB of storage with the maximum possible I/O performance for video processing, 300 TB of very durable storage for storing media content, and 900 TB of storage to meet requirements for archival media that is not in use anymore.<br>Which set of services should a solutions architect recommend to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#127",
            "answers": [
              {
                "choice": "<p>A. Amazon EBS for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon EBS for maximum performance, Amazon EFS for durable data storage, and Amazon S3 Glacier for archival storage<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon EC2 instance store for maximum performance, Amazon EFS for durable data storage, and Amazon S3 for archival storage<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon EC2 instance store for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699085,
            "date": "Wed 19 Oct 2022 16:01",
            "username": "Sauran",
            "content": "Max instance store possible at this time is 30TB for NVMe which has the higher I/O compared to EBS.<br><br>is4gen.8xlarge\t4 x 7,500 GB (30 TB)\tNVMe SSD<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 723949,
            "date": "Mon 21 Nov 2022 22:33",
            "username": "Wpcorgan",
            "content": "D is corect",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 716688,
            "date": "Sat 12 Nov 2022 13:59",
            "username": "mabotega",
            "content": "Answer: D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 707588,
            "date": "Sun 30 Oct 2022 04:24",
            "username": "dokaedu",
            "content": "Selected Answer: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 704858,
            "date": "Wed 26 Oct 2022 18:21",
            "username": "Six_Fingered_Jose",
            "content": "agree with D, since it is only used for video processing instance store should be the fastest here (being ephemeral shouldnt be an issue because they are moving the data to S3 after processing)",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 704447,
            "date": "Wed 26 Oct 2022 08:38",
            "username": "tubtab",
            "content": "dddddd",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 694426,
            "date": "Fri 14 Oct 2022 03:27",
            "username": "LilibellbrushekSauran",
            "content": "The answer is Dwrong ! it is A, as there is 10TB needed:<br>taken from: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/add-instance-store-volumes.html<br><br>A block device mapping always specifies the root volume for the instance. The root volume is either an Amazon EBS volume or an instance store volume. For more information, see Storage for the root device. The root volume is mounted automatically. For instances with an instance store volume for the root volume, the size of this volume varies by AMI, but the maximum size is 10 GB. It is possible to add an instance store volume up to 30TB at this time. The question doesn't say the instance store has to be the root volume. For instance stores, the root volume max size is 10GB but you can add instance stores up to 30TB. <br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes",
            "upvote_count": "214",
            "selected_answers": ""
          },
          {
            "id": 695556,
            "date": "Sat 15 Oct 2022 19:25",
            "username": "brushekSauran",
            "content": "wrong ! it is A, as there is 10TB needed:<br>taken from: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/add-instance-store-volumes.html<br><br>A block device mapping always specifies the root volume for the instance. The root volume is either an Amazon EBS volume or an instance store volume. For more information, see Storage for the root device. The root volume is mounted automatically. For instances with an instance store volume for the root volume, the size of this volume varies by AMI, but the maximum size is 10 GB. It is possible to add an instance store volume up to 30TB at this time. The question doesn't say the instance store has to be the root volume. For instance stores, the root volume max size is 10GB but you can add instance stores up to 30TB. <br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 699081,
            "date": "Wed 19 Oct 2022 15:58",
            "username": "Sauran",
            "content": "It is possible to add an instance store volume up to 30TB at this time. The question doesn't say the instance store has to be the root volume. For instance stores, the root volume max size is 10GB but you can add instance stores up to 30TB. <br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#128",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to run applications in containers in the AWS Cloud. These applications are stateless and can tolerate disruptions within the underlying infrastructure. The company needs a solution that minimizes cost and operational overhead.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#128",
            "answers": [
              {
                "choice": "<p>A. Use Spot Instances in an Amazon EC2 Auto Scaling group to run the application containers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Spot Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use On-Demand Instances in an Amazon EC2 Auto Scaling group to run the application containers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use On-Demand Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 723950,
            "date": "Mon 21 Nov 2022 22:34",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720145,
            "date": "Thu 17 Nov 2022 03:31",
            "username": "study_aws1",
            "content": "This should explain<br><br>https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 716692,
            "date": "Sat 12 Nov 2022 14:02",
            "username": "mabotega",
            "content": "Answer B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 704859,
            "date": "Wed 26 Oct 2022 18:23",
            "username": "Six_Fingered_Jose",
            "content": "agreed with B cause container",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 704448,
            "date": "Wed 26 Oct 2022 08:43",
            "username": "tubtab",
            "content": "bbbbbb",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 694433,
            "date": "Fri 14 Oct 2022 03:30",
            "username": "Lilibell",
            "content": "The answer is B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 694034,
            "date": "Thu 13 Oct 2022 17:24",
            "username": "brushek",
            "content": "it should be B:<br><br>https://aws.amazon.com/about-aws/whats-new/2020/12/amazon-eks-support-ec2-spot-instances-managed-node-groups/",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#129",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a multi-tier web application on premises. The web application is containerized and runs on a number of Linux hosts connected to a PostgreSQL database that contains user records. The operational overhead of maintaining the infrastructure and capacity planning is limiting the company's growth. A solutions architect must improve the application's infrastructure.<br>Which combination of actions should the solutions architect take to accomplish this? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#129",
            "answers": [
              {
                "choice": "<p>A. Migrate the PostgreSQL database to Amazon Aurora.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Migrate the web application to be hosted on Amazon EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set up an Amazon CloudFront distribution for the web application content.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up Amazon ElastiCache between the web application and the PostgreSQL database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Migrate the web application to be hosted on AWS Fargate with Amazon Elastic Container Service (Amazon ECS).<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 723953,
            "date": "Mon 21 Nov 2022 22:35",
            "username": "Wpcorgan",
            "content": "A and E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 713913,
            "date": "Tue 08 Nov 2022 15:58",
            "username": "ArielSchivo",
            "content": "I would say A and E since Aurora and Fargate are serverless (less operational overhead).",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 713561,
            "date": "Tue 08 Nov 2022 08:29",
            "username": "NigmaNigma",
            "content": "https://www.examtopics.com/discussions/amazon/view/46457-exam-aws-certified-solutions-architect-associate-saa-c02/A and E<br><br>Aurora and serverless",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 713563,
            "date": "Tue 08 Nov 2022 08:30",
            "username": "Nigma",
            "content": "A and E<br><br>Aurora and serverless",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 707622,
            "date": "Sun 30 Oct 2022 06:28",
            "username": "SimonPark",
            "content": "B(X) E(O) not sure about A,C,D but A looks making sense",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AE"
          }
        ]
      },
      {
        "question_id": "#130",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application runs on Amazon EC2 instances across multiple Availability Zonas. The instances run in an Amazon EC2 Auto Scaling group behind an Application Load Balancer. The application performs best when the CPU utilization of the EC2 instances is at or near 40%.<br>What should a solutions architect do to maintain the desired performance across all instances in the group?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#130",
            "answers": [
              {
                "choice": "<p>A. Use a simple scaling policy to dynamically scale the Auto Scaling group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use a target tracking policy to dynamically scale the Auto Scaling group.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an AWS Lambda function ta update the desired Auto Scaling group capacity.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use scheduled scaling actions to scale up and scale down the Auto Scaling group.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 723954,
            "date": "Mon 21 Nov 2022 22:36",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 713914,
            "date": "Tue 08 Nov 2022 16:00",
            "username": "ArielSchivo",
            "content": "Option B.  Target tracking policy.<br><br>https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 713571,
            "date": "Tue 08 Nov 2022 08:39",
            "username": "Nigma",
            "content": "B<br><br>CPU utilization = target tracking",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 707625,
            "date": "Sun 30 Oct 2022 06:30",
            "username": "SimonPark",
            "content": "B is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#131",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is developing a file-sharing application that will use an Amazon S3 bucket for storage. The company wants to serve all the files through an Amazon CloudFront distribution. The company does not want the files to be accessible through direct navigation to the S3 URL.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#131",
            "answers": [
              {
                "choice": "<p>A. Write individual policies for each S3 bucket to grant read permission for only CloudFront access.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an IAM user. Grant the user read permission to objects in the S3 bucket. Assign the user to CloudFront.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Write an S3 bucket policy that assigns the CloudFront distribution ID as the Principal and assigns the target S3 bucket as the Amazon Resource Name (ARN).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an origin access identity (OAI). Assign the OAI to the CloudFront distribution. Configure the S3 bucket permissions so that only the OAI has read permission.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699608,
            "date": "Thu 20 Oct 2022 08:36",
            "username": "123jhl0SimonPark",
            "content": "I want to restrict access to my Amazon Simple Storage Service (Amazon S3) bucket so that objects can be accessed only through my Amazon CloudFront distribution. How can I do that?<br>Create a CloudFront origin access identity (OAI)<br>https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-access-to-amazon-s3/Thanks it convinces me",
            "upvote_count": "121",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 707626,
            "date": "Sun 30 Oct 2022 06:35",
            "username": "SimonPark",
            "content": "Thanks it convinces me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724300,
            "date": "Tue 22 Nov 2022 13:11",
            "username": "Wpcorgan",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#132",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company’s website provides users with downloadable historical performance reports. The website needs a solution that will scale to meet the company’s website demands globally. The solution should be cost-effective, limit the provisioning of infrastructure resources, and provide the fastest possible response time.<br>Which combination should a solutions architect recommend to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#132",
            "answers": [
              {
                "choice": "<p>A. Amazon CloudFront and Amazon S3<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS Lambda and Amazon DynamoDB<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Application Load Balancer with Amazon EC2 Auto Scaling<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon Route 53 with internal Application Load Balancers<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724301,
            "date": "Tue 22 Nov 2022 13:12",
            "username": "Wpcorgan",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 717410,
            "date": "Sun 13 Nov 2022 16:57",
            "username": "sdasdawa",
            "content": "https://www.examtopics.com/discussions/amazon/view/27935-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 717343,
            "date": "Sun 13 Nov 2022 15:08",
            "username": "Nirmal3331",
            "content": "https://www.examtopics.com/discussions/amazon/view/27935-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 717166,
            "date": "Sun 13 Nov 2022 09:01",
            "username": "samplunk",
            "content": "See this discussion:<br>https://www.examtopics.com/discussions/amazon/view/27935-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 717054,
            "date": "Sun 13 Nov 2022 03:00",
            "username": "manu427",
            "content": "load balancing + scalability + cost effective",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 716880,
            "date": "Sat 12 Nov 2022 20:05",
            "username": "MyNameIsJulien",
            "content": "I think the answer is B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 707602,
            "date": "Sun 30 Oct 2022 05:42",
            "username": "dokaedu",
            "content": "A is the correct answer<br> The solution should be cost-effective, limit the provisioning of infrastructure resources, and provide the fastest possible response time.",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#133",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs an Oracle database on premises. As part of the company’s migration to AWS, the company wants to upgrade the database to the most recent available version. The company also wants to set up disaster recovery (DR) for the database. The company needs to minimize the operational overhead for normal operations and DR setup. The company also needs to maintain access to the database's underlying operating system.<br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#133",
            "answers": [
              {
                "choice": "<p>A. Migrate the Oracle database to an Amazon EC2 instance. Set up database replication to a different AWS Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Migrate the Oracle database to Amazon RDS for Oracle. Activate Cross-Region automated backups to replicate the snapshots to another AWS Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Migrate the Oracle database to Amazon RDS Custom for Oracle. Create a read replica for the database in another AWS Region.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Migrate the Oracle database to Amazon RDS for Oracle. Create a standby database in another Availability Zone.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 694231,
            "date": "Thu 13 Oct 2022 21:20",
            "username": "brushek",
            "content": "It should be C:<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-custom.html<br>and<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/working-with-custom-oracle.html",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 733758,
            "date": "Fri 02 Dec 2022 14:35",
            "username": "Swagata23",
            "content": "Cant be option C: Read replica cant be DR . Read replica is used for read only purpose .<br>Cant be Option D : Purpose of the DR is regional failure not zone failure .<br>So only option is B for DR",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727433,
            "date": "Sat 26 Nov 2022 11:06",
            "username": "Gabs90leonnnn",
            "content": "Maybe I missed the point, but why not A? <br> \\\"The company also needs to maintain access to the database's underlying operating system.\\\"<br>If the company want to operate on an operating system level the only option here should be the EC2.Amazon RDS Custom for Oracle also provides ability to let user to access operating system.",
            "upvote_count": "23",
            "selected_answers": ""
          },
          {
            "id": 728305,
            "date": "Sun 27 Nov 2022 15:06",
            "username": "leonnnn",
            "content": "Amazon RDS Custom for Oracle also provides ability to let user to access operating system.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 724303,
            "date": "Tue 22 Nov 2022 13:13",
            "username": "Wpcorgan",
            "content": "C is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 715178,
            "date": "Thu 10 Nov 2022 12:33",
            "username": "Gil80",
            "content": "Amazon RDS Custom for Oracle - \t• Managed Oracle and Microsoft SQL Server Database with OS and database customization.<br><br>If the company wants to reduce operational overhead, then RDS Custom is the way to go, since it's a managed service.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 714871,
            "date": "Thu 10 Nov 2022 03:10",
            "username": "AthenaAthenaAthenaMaharaja",
            "content": "Disaster Recovery = Standby Instance not read replica<br>The company also wants to set up disaster recovery (DR) for the database.Answer is C for sure <br>https://aws.amazon.com/about-aws/whats-new/2021/10/amazon-rds-custom-oracle/ Z9 (Announced in 2021)Still debating the correct answer on this one.....D also make sense to me. This is my understanding - <br>Muti-AZ gives you automated DR within a region. No need to change end point from your app end. But in case of Cross region read replica you need to promote the same to main DB during DR and modify the endpoint of the DB in the application.<br>By doing Read replica this statement -\\\"The company needs to minimize the operational overhead for normal operations and DR setup. \\\" in the question is not meet which can be achieved by multi-AZ only. Moreover, there is no mention of global DR. DR can be global or even AZ failure in Single region as well. Hope that make sense.",
            "upvote_count": "1112",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 717050,
            "date": "Sun 13 Nov 2022 02:42",
            "username": "Athena",
            "content": "Answer is C for sure <br>https://aws.amazon.com/about-aws/whats-new/2021/10/amazon-rds-custom-oracle/ Z9 (Announced in 2021)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 717044,
            "date": "Sun 13 Nov 2022 02:27",
            "username": "AthenaMaharaja",
            "content": "Still debating the correct answer on this one.....D also make sense to me. This is my understanding - <br>Muti-AZ gives you automated DR within a region. No need to change end point from your app end. But in case of Cross region read replica you need to promote the same to main DB during DR and modify the endpoint of the DB in the application.<br>By doing Read replica this statement -\\\"The company needs to minimize the operational overhead for normal operations and DR setup. \\\" in the question is not meet which can be achieved by multi-AZ only. Moreover, there is no mention of global DR. DR can be global or even AZ failure in Single region as well. Hope that make sense.",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 717388,
            "date": "Sun 13 Nov 2022 16:05",
            "username": "Maharaja",
            "content": "D also make sense to me. This is my understanding - <br>Muti-AZ gives you automated DR within a region. No need to change end point from your app end. But in case of Cross region read replica you need to promote the same to main DB during DR and modify the endpoint of the DB in the application.<br>By doing Read replica this statement -\\\"The company needs to minimize the operational overhead for normal operations and DR setup. \\\" in the question is not meet which can be achieved by multi-AZ only. Moreover, there is no mention of global DR. DR can be global or even AZ failure in Single region as well. Hope that make sense.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 714519,
            "date": "Wed 09 Nov 2022 12:43",
            "username": "ArielSchivo",
            "content": "Option C since RDS Custom has access to the underlying OS and it provides less operational overhead. Also, a read replica in another Region can be used for DR activities.<br><br>https://aws.amazon.com/blogs/database/implementing-a-disaster-recovery-strategy-with-amazon-rds/",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 712910,
            "date": "Mon 07 Nov 2022 09:07",
            "username": "PS_R",
            "content": "RDS Custom only allows access to underlying OS access, so it should be C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 712022,
            "date": "Sat 05 Nov 2022 22:45",
            "username": "backbencher2022",
            "content": "C is the correct answer indeed and here is the latest Oracle blog supporting this option - https://aws.amazon.com/blogs/database/build-high-availability-for-amazon-rds-custom-for-oracle-using-read-replicas/<br><br>B or D can't be the right option because RDS Oracle won't allow OS access. Only RDS Custom for Oracle allows OS access. Scenario is specifically talking about OS access.<br>Option A is ruled out for a different reason - more operational and admin overhead.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 712020,
            "date": "Sat 05 Nov 2022 22:44",
            "username": "backbencher2022",
            "content": "C is the correct answer indeed and here is the latest Oracle blog supporting this option - https://aws.amazon.com/blogs/database/build-high-availability-for-amazon-rds-custom-for-oracle-using-read-replicas/<br><br>B or D can't be the right option because RDS Oracle won't allow OS access. Only RDS Custom for Oracle allows OS access. Scenario is specifically talking about OS access<br>Option is ruled out for a different reason - more operational and admin overhead.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 711696,
            "date": "Sat 05 Nov 2022 12:03",
            "username": "OnimoleArielSchivoMaharaja",
            "content": "Maharaja appears to be right<br>Read replica wont help HANo HA mentioned on the subject, this is about DR. Option C is the one.Muti-AZ gives you automated DR within a region. No need to change end point from your app end. But in case of Cross region read replica you need to promote the same to main DB during DR and modify the endpoint of the DB in the application. <br>By doing Read replica this statement -\\\"The company needs to minimize the operational overhead for normal operations and DR setup. \\\" in the question is not meet which can be achieved by multi-AZ only. Moreover, there is no mention of global DR. DR can be global or even AZ failure in Single region as well. Hope that make sense.",
            "upvote_count": "121",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 714516,
            "date": "Wed 09 Nov 2022 12:42",
            "username": "ArielSchivoMaharaja",
            "content": "No HA mentioned on the subject, this is about DR. Option C is the one.Muti-AZ gives you automated DR within a region. No need to change end point from your app end. But in case of Cross region read replica you need to promote the same to main DB during DR and modify the endpoint of the DB in the application. <br>By doing Read replica this statement -\\\"The company needs to minimize the operational overhead for normal operations and DR setup. \\\" in the question is not meet which can be achieved by multi-AZ only. Moreover, there is no mention of global DR. DR can be global or even AZ failure in Single region as well. Hope that make sense.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 717185,
            "date": "Sun 13 Nov 2022 09:32",
            "username": "Maharaja",
            "content": "Muti-AZ gives you automated DR within a region. No need to change end point from your app end. But in case of Cross region read replica you need to promote the same to main DB during DR and modify the endpoint of the DB in the application. <br>By doing Read replica this statement -\\\"The company needs to minimize the operational overhead for normal operations and DR setup. \\\" in the question is not meet which can be achieved by multi-AZ only. Moreover, there is no mention of global DR. DR can be global or even AZ failure in Single region as well. Hope that make sense.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 710347,
            "date": "Thu 03 Nov 2022 08:57",
            "username": "MaharajaArielSchivo",
            "content": "D.  Please have a look at this statement \\\"To support replication between RDS Custom for Oracle instances, you can configure high availability (HA) with Oracle Data Guard. The primary DB instance automatically synchronizes data to the standby instances.<br><br>You can configure your high availability environment in the following ways:<br><br>Configure standby instances in different Availability Zones (AZs) to be resilient to AZ failures.<br><br>Place your standby databases in mounted or read-only mode.<br><br>Fail over or switch over from the primary database to a standby database with no data loss.<br><br>Migrate data by configuring high availability for your on-premises instance, and then failing over or switching over to the RDS Custom standby database.\\\" from https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-managing.htmlYou are talking about HA but here we've been requested to create a DR environment, two different things. Also, with option D you can't have access to the underlying OS.",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 714514,
            "date": "Wed 09 Nov 2022 12:41",
            "username": "ArielSchivo",
            "content": "You are talking about HA but here we've been requested to create a DR environment, two different things. Also, with option D you can't have access to the underlying OS.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 707628,
            "date": "Sun 30 Oct 2022 06:44",
            "username": "SimonParkArielSchivo",
            "content": "Even though C seems to be right, I don't think that a 'read replica' can replace the primary DB instance in case of DR.Yes, it can, check https://aws.amazon.com/blogs/database/implementing-a-disaster-recovery-strategy-with-amazon-rds/ .",
            "upvote_count": "33",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 714517,
            "date": "Wed 09 Nov 2022 12:42",
            "username": "ArielSchivo",
            "content": "Yes, it can, check https://aws.amazon.com/blogs/database/implementing-a-disaster-recovery-strategy-with-amazon-rds/ .",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 707596,
            "date": "Sun 30 Oct 2022 05:29",
            "username": "Reni_Varghese",
            "content": "It is C for sure. <br>Please go thru the below documentation.<br>https://aws.amazon.com/blogs/aws/amazon-rds-custom-for-oracle-new-control-capabilities-in-database-environment/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 704861,
            "date": "Wed 26 Oct 2022 18:31",
            "username": "Six_Fingered_Jose",
            "content": "agree with C<br>>The company also needs to maintain access to the database's underlying operating system<br><br>Amazon RDS Custom for Oracle provides that but not regular RDS<br>> https://aws.amazon.com/about-aws/whats-new/2021/10/amazon-rds-custom-oracle/<br><br>A has too much overhead so is not the optimal solution",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 704057,
            "date": "Tue 25 Oct 2022 19:23",
            "username": "ManoAni",
            "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-custom.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 703417,
            "date": "Tue 25 Oct 2022 01:34",
            "username": "dave9994",
            "content": "C should be the answer. Not D, only creating a standby doesn't satisfy the condition. The database should also be in sync, so need to create a read replica, which is in sync with the master.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#134",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to move its application to a serverless solution. The serverless solution needs to analyze existing and new data by using SL. The company stores the data in an Amazon S3 bucket. The data requires encryption and must be replicated to a different AWS Region.<br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#134",
            "answers": [
              {
                "choice": "<p>A. Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region kays (SSE-KMS). Use Amazon Athena to query the data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon RDS to query the data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon Athena to query the data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon RDS to query the data.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699631,
            "date": "Thu 20 Oct 2022 09:18",
            "username": "123jhl0",
            "content": "SSE-KMS vs SSE-S3 - The last seems to have less overhead (as the keys are automatically generated by S3 and applied on data at upload, and don't require further actions. KMS provides more flexibility, but in turn involves a different service, which finally is more \\\"complex\\\" than just managing one (S3). So A and B are excluded. If you are in doubt, you are having 2 buckets in A and B, while just keeping one in C and D. <br>https://s3browser.com/server-side-encryption-types.aspx <br>Decide between C and D is deciding on Athena or RDS. RDS is a relational db, and we have documents on S3, which is the use case for Athena. Athena is also serverless, which eliminates the need of controlling the underlying infrastructure and capacity. So C is the answer.<br>https://aws.amazon.com/athena/",
            "upvote_count": "9",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 707618,
            "date": "Sun 30 Oct 2022 06:20",
            "username": "dokaeduRODROSKAR",
            "content": "Answer is A: <br>Amazon S3 Bucket Keys reduce the cost of Amazon S3 server-side encryption using AWS Key Management Service (SSE-KMS). This new bucket-level key for SSE can reduce AWS KMS request costs by up to 99 percent by decreasing the request traffic from Amazon S3 to AWS KMS. With a few clicks in the AWS Management Console, and without any changes to your client applications, you can configure your bucket to use an S3 Bucket Key for AWS KMS-based encryption on new objects.<br>The Existing S3 bucket might have uncrypted data - encryption will apply new data received after the applying of encryption on the new bucket.Reducing cost was never the target, it's LEAST operational. In that regard SSE-S3 AWS fully managed.",
            "upvote_count": "61",
            "selected_answers": ""
          },
          {
            "id": 713354,
            "date": "Tue 08 Nov 2022 00:45",
            "username": "RODROSKAR",
            "content": "Reducing cost was never the target, it's LEAST operational. In that regard SSE-S3 AWS fully managed.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 735226,
            "date": "Sun 04 Dec 2022 17:12",
            "username": "Amaris",
            "content": "it's not C because it is not achieving the goal of encrypting all objects, hence A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 734819,
            "date": "Sun 04 Dec 2022 04:26",
            "username": "Wajif",
            "content": "Athena being serverless and offers less operational overhead so ruling out B&D. <br>C: SSE-S3 has higher operational overhead but it doesnt achieve the GOAL which is to encrypt all objects.<br>Hence the answer is A:<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html<br><br>\\\"Changes to note before enabling default encryption<br><br>After you enable default encryption for a bucket, the following encryption behavior applies:<br><br>There is no change to the encryption of the objects that existed in the bucket before default encryption was enabled.\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727986,
            "date": "Sun 27 Nov 2022 08:17",
            "username": "JayanKuruwita",
            "content": "C would be hard if we have to replicate set of existing objects, because we need AWS support assistance for that. But this is about new objects that we are going to upload to S3. Thinking about setting up permissions for KMS key with SSE-KMS mode. I would go with C. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727371,
            "date": "Sat 26 Nov 2022 08:34",
            "username": "justtry",
            "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html<br>There is no change to the encryption of the objects that existed in the bucket before default encryption was enabled.That's the reason why new bucket should be created.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 724305,
            "date": "Tue 22 Nov 2022 13:15",
            "username": "Wpcorgan",
            "content": "A is correct for me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721397,
            "date": "Fri 18 Nov 2022 17:07",
            "username": "Onimole",
            "content": "C appears to be right",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 718650,
            "date": "Tue 15 Nov 2022 10:44",
            "username": "Ohnet",
            "content": "It is A:<br>https://aws.amazon.com/blogs/storage/replicating-existing-objects-between-s3-buckets/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 715917,
            "date": "Fri 11 Nov 2022 10:33",
            "username": "study_aws1",
            "content": "The issue with Option C) is the existing data before setting up CRR will not be replicated and that is why option A) looks good.<br>The question does not talk of employing S3 Batch Replication before CRR is setup.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 712033,
            "date": "Sat 05 Nov 2022 23:28",
            "username": "backbencher2022",
            "content": "A is the solution with least operational overhead",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 709730,
            "date": "Wed 02 Nov 2022 10:28",
            "username": "masetromain",
            "content": "for me the answer is A:<br><br>The Existing S3 bucket might have uncrypted data - encryption will apply new data received after the applying of encryption on the new bucket.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 705699,
            "date": "Thu 27 Oct 2022 17:43",
            "username": "UWSFish",
            "content": "The question should read \\\"SQL\\\" not \\\"SL\\\"",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 703420,
            "date": "Tue 25 Oct 2022 01:39",
            "username": "dave9994",
            "content": "C has fewer ops. overhead. and the question says the customer has an existing S3 bucket. Then there is no need to create a new S3 bucket.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#135",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs workloads on AWS. The company needs to connect to a service from an external provider. The service is hosted in the provider's VPC.  According to the company’s security team, the connectivity must be private and must be restricted to the target service. The connection must be initiated only from the company’s VPC. <br>Which solution will mast these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#135",
            "answers": [
              {
                "choice": "<p>A. Create a VPC peering connection between the company's VPC and the provider's VPC.  Update the route table to connect to the target service.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Ask the provider to create a virtual private gateway in its VPC.  Use AWS PrivateLink to connect to the target service.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a NAT gateway in a public subnet of the company’s VPUpdate the route table to connect to the target service.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Ask the provider to create a VPC endpoint for the target service. Use AWS PrivateLink to connect to the target service.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699637,
            "date": "Thu 20 Oct 2022 09:26",
            "username": "123jhl0",
            "content": "**AWS PrivateLink provides private connectivity between VPCs, AWS services, and your on-premises networks, without exposing your traffic to the public internet**. AWS PrivateLink makes it easy to connect services across different accounts and VPCs to significantly simplify your network architecture.<br>Interface **VPC endpoints**, powered by AWS PrivateLink, connect you to services hosted by AWS Partners and supported solutions available in AWS Marketplace. <br>https://aws.amazon.com/privatelink/",
            "upvote_count": "9",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#136",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating its on-premises PostgreSQL database to Amazon Aurora PostgreSQL. The on-premises database must remain online and accessible during the migration. The Aurora database must remain synchronized with the on-premises database.<br>Which combination of actions must a solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#136",
            "answers": [
              {
                "choice": "<p>A. Create an ongoing replication task.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a database backup of the on-premises database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS Database Migration Service (AWS DMS) replication server.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Convert the database schema by using the AWS Schema Conversion Tool (AWS SCT).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to monitor the database synchronization.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699673,
            "date": "Thu 20 Oct 2022 10:03",
            "username": "123jhl0",
            "content": "AWS Database Migration Service (AWS DMS) helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database.<br>... With AWS Database Migration Service, you can also continuously replicate data with low latency from any supported source to any supported target.<br>https://aws.amazon.com/dms/",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 733372,
            "date": "Fri 02 Dec 2022 03:57",
            "username": "sunny1984",
            "content": "Anyone can explain why A ? Because DMS take care the replication",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 728079,
            "date": "Sun 27 Nov 2022 10:12",
            "username": "JayanKuruwita",
            "content": "Highly cofused why we ned SCT in here, because we don't have to use SCT for homogeneous migration. If someone knows please explain.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724313,
            "date": "Tue 22 Nov 2022 13:24",
            "username": "Wpcorgan",
            "content": "A and C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 715401,
            "date": "Thu 10 Nov 2022 17:54",
            "username": "mabotega",
            "content": "https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC. html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 707635,
            "date": "Sun 30 Oct 2022 07:03",
            "username": "SimonPark",
            "content": "A and C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 704866,
            "date": "Wed 26 Oct 2022 18:41",
            "username": "Six_Fingered_Jose",
            "content": "They are migrating Postgres to Postgres,<br>thus D does not make sense and A and C seems to be the right answer to me",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 703423,
            "date": "Tue 25 Oct 2022 01:44",
            "username": "dave9994",
            "content": "A & C are the correct combinations.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 694631,
            "date": "Fri 14 Oct 2022 11:28",
            "username": "trancex",
            "content": "I think A and C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 694479,
            "date": "Fri 14 Oct 2022 06:10",
            "username": "huiy",
            "content": "Same as this https://www.examtopics.com/discussions/amazon/view/81317-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          }
        ]
      },
      {
        "question_id": "#137",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses AWS Organizations to create dedicated AWS accounts for each business unit to manage each business unit's account independently upon request. The root email recipient missed a notification that was sent to the root user email address of one account. The company wants to ensure that all future notifications are not missed. Future notifications must be limited to account administrators.<br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#137",
            "answers": [
              {
                "choice": "<p>A. Configure the company’s email server to forward notification email messages that are sent to the AWS account root user email address to all users in the organization.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure all AWS account root user email addresses as distribution lists that go to a few administrators who can respond to alerts. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure all AWS account root user email messages to be sent to one administrator who is responsible for monitoring alerts and forwarding those alerts to the appropriate groups.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure all existing AWS accounts and all newly created accounts to use the same root user email address. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699683,
            "date": "Thu 20 Oct 2022 10:12",
            "username": "123jhl0",
            "content": "Use a group email address for the management account's root user<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_best-practices_mgmt-acct.html#best-practices_mgmt-acct_email-address",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 712922,
            "date": "Mon 07 Nov 2022 09:23",
            "username": "PS_R",
            "content": "B makes more sense and is a best practise",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 700227,
            "date": "Thu 20 Oct 2022 21:13",
            "username": "Chunsli",
            "content": "B makes better sense in the context",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#138",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs its ecommerce application on AWS. Every new order is published as a massage in a RabbitMQ queue that runs on an Amazon EC2 instance in a single Availability Zone. These messages are processed by a different application that runs on a separate EC2 instance. This application stores the details in a PostgreSQL database on another EC2 instance. All the EC2 instances are in the same Availability Zone.<br>The company needs to redesign its architecture to provide the highest availability with the least operational overhead.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#138",
            "answers": [
              {
                "choice": "<p>A. Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Create another Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Create a third Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699693,
            "date": "Thu 20 Oct 2022 10:27",
            "username": "123jhl0EKA_CloudGodUWSFish",
            "content": "Migrating to Amazon MQ reduces the overhead on the queue management. C and D are dismissed.<br>Deciding between A and B means deciding to go for an AutoScaling group for EC2 or an RDS for Postgress (both multi- AZ). The RDS option has less operational impact, as provide as a service the tools and software required. Consider for instance, the effort to add an additional node like a read replica, to the DB. <br>https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/active-standby-broker-deployment.html<br>https://aws.amazon.com/rds/postgresql/This also helps anyone in doubt; https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/active-standby-broker-deployment.htmlYes but active/standby is fault tolerance, not HA. I would concede after thinking about it that B is probably the answer that will be marked correct but its not a great question.",
            "upvote_count": "711",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 732395,
            "date": "Thu 01 Dec 2022 09:22",
            "username": "EKA_CloudGod",
            "content": "This also helps anyone in doubt; https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/active-standby-broker-deployment.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 705714,
            "date": "Thu 27 Oct 2022 17:58",
            "username": "UWSFish",
            "content": "Yes but active/standby is fault tolerance, not HA. I would concede after thinking about it that B is probably the answer that will be marked correct but its not a great question.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724316,
            "date": "Tue 22 Nov 2022 13:27",
            "username": "Wpcorgan",
            "content": "B for me",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#139",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A reporting team receives files each day in an Amazon S3 bucket. The reporting team manually reviews and copies the files from this initial S3 bucket to an analysis S3 bucket each day at the same time to use with Amazon QuickSight. Additional teams are starting to send more files in larger sizes to the initial S3 bucket.<br>The reporting team wants to move the files automatically analysis S3 bucket as the files enter the initial S3 bucket. The reporting team also wants to use AWS Lambda functions to run pattern-matching code on the copied data. In addition, the reporting team wants to send the data files to a pipeline in Amazon SageMaker Pipelines.<br>What should a solutions architect do to meet these requirements with the LEAST operational overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#139",
            "answers": [
              {
                "choice": "<p>A. Create a Lambda function to copy the files to the analysis S3 bucket. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a Lambda function to copy the files to the analysis S3 bucket. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure S3 replication between the S3 buckets. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure S3 replication between the S3 buckets. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699712,
            "date": "Thu 20 Oct 2022 10:55",
            "username": "123jhl0KADSM",
            "content": "C and D aren't answers as replicating the S3 bucket isn't efficient, as other teams are starting to use it to store larger docs not related to the reporting, making replication not useful.<br>As Amazon SageMaker Pipelines, ..., is now supported as a target for routing events in Amazon EventBridge, means the answer is B<br>https://aws.amazon.com/about-aws/whats-new/2021/04/new-options-trigger-amazon-sagemaker-pipeline-executions/Not sure how far lambda will cope up with larger files with the timelimit in place.",
            "upvote_count": "81",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 715773,
            "date": "Fri 11 Nov 2022 06:04",
            "username": "KADSM",
            "content": "Not sure how far lambda will cope up with larger files with the timelimit in place.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 704868,
            "date": "Wed 26 Oct 2022 18:49",
            "username": "Six_Fingered_Jose",
            "content": "i go for D here<br>A and B says you are copying the file to another bucket using lambda,<br>C an D just uses S3 replication to copy the files,<br><br>They are doing exactly the same thing while C and D do not require setting up of lambda, which should be more efficient<br><br>The question says the team is manually copying the files, automatically replicating the files should be the most efficient method vs manually copying or copying with lambda.",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 716459,
            "date": "Sat 12 Nov 2022 05:09",
            "username": "nhlegend",
            "content": "Should be D<br>They manually copy data, uses S3 replication to copy the files (eliminate A and B)<br>C is incorrect since S3 event notification can only send to SNS, SQS and Lambda<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html<br>So D is correct",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 715774,
            "date": "Fri 11 Nov 2022 06:18",
            "username": "KADSM",
            "content": "Answer D - The files are getting large, less operational overhead - so will choose S3 replication. Event bridge is far more advanced than S3 event notification and they support multiple targets. S3 Event notification may not support Sagemaker. Also filtering and pattern matching available in Event bridge. So answer D",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 712090,
            "date": "Sun 06 Nov 2022 01:25",
            "username": "backbencher2022",
            "content": "Option D has the least overhead and should be the correct answer in my opinion.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 698745,
            "date": "Wed 19 Oct 2022 09:02",
            "username": "LeGloupier123jhl0OnimoleOnimole",
            "content": "D make more senseReplicating docs not related to the reporting team, you are consuming more resources (duplicating storage of docs not needed), and very probably introducing discarding overhead, noise or breaking the reporting result, as these additional docs are introduced in the analytic process.arent they already duplicating it and need it to be in another bucket?someone creating a function is additional overhead. CRR replication is an aws feature",
            "upvote_count": "6113",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 699717,
            "date": "Thu 20 Oct 2022 10:58",
            "username": "123jhl0OnimoleOnimole",
            "content": "Replicating docs not related to the reporting team, you are consuming more resources (duplicating storage of docs not needed), and very probably introducing discarding overhead, noise or breaking the reporting result, as these additional docs are introduced in the analytic process.arent they already duplicating it and need it to be in another bucket?someone creating a function is additional overhead. CRR replication is an aws feature",
            "upvote_count": "113",
            "selected_answers": ""
          },
          {
            "id": 711721,
            "date": "Sat 05 Nov 2022 12:26",
            "username": "Onimole",
            "content": "arent they already duplicating it and need it to be in another bucket?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 711723,
            "date": "Sat 05 Nov 2022 12:27",
            "username": "Onimole",
            "content": "someone creating a function is additional overhead. CRR replication is an aws feature",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#140",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect needs to help a company optimize the cost of running an application on AWS. The application will use Amazon EC2 instances, AWS Fargate, and AWS Lambda for compute within the architecture.<br>The EC2 instances will run the data ingestion layer of the application. EC2 usage will be sporadic and unpredictable. Workloads that run on EC2 instances can be interrupted at any time. The application front end will run on Fargate, and Lambda will serve the API layer. The front-end utilization and API layer utilization will be predictable over the course of the next year.<br>Which combination of purchasing options will provide the MOST cost-effective solution for hosting this application? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#140",
            "answers": [
              {
                "choice": "<p>A. Use Spot Instances for the data ingestion layer<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use On-Demand Instances for the data ingestion layer<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Purchase a 1-year Compute Savings Plan for the front end and API layer.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Purchase 1-year All Upfront Reserved instances for the data ingestion layer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Purchase a 1-year EC2 instance Savings Plan for the front end and API layer.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 718669,
            "date": "Tue 15 Nov 2022 11:28",
            "username": "rjam",
            "content": "its A and C . https://www.densify.com/finops/aws-savings-plan",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 707646,
            "date": "Sun 30 Oct 2022 07:31",
            "username": "SimonPark",
            "content": "EC2 instance Savings Plan saves 72% while Compute Savings Plans saves 66%. But according to link, it says \\\"Compute Savings Plans provide the most flexibility and help to reduce your costs by up to 66%. These plans automatically apply to EC2 instance usage regardless of instance family, size, AZ, region, OS or tenancy, and also apply to Fargate and Lambda usage.\\\"EC2 instance Savings Plans are not applied to Fargate or Lambda",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 705466,
            "date": "Thu 27 Oct 2022 13:06",
            "username": "bunnychip",
            "content": "api is not EC2.need to use compute savings plan",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 700308,
            "date": "Thu 20 Oct 2022 23:18",
            "username": "Chunslicapepenguin",
            "content": "E makes more sense than C.  See https://aws.amazon.com/savingsplans/faq/, EC2 instance Savings Plan (up to 72% saving) costs less than Compute Savings Plan (up to 66% saving)Isn't the EC2 Instance Savings Plan not applicable to Fargate and Lambda?<br>https://aws.amazon.com/savingsplans/compute-pricing/",
            "upvote_count": "34",
            "selected_answers": ""
          },
          {
            "id": 705262,
            "date": "Thu 27 Oct 2022 07:37",
            "username": "capepenguin",
            "content": "Isn't the EC2 Instance Savings Plan not applicable to Fargate and Lambda?<br>https://aws.amazon.com/savingsplans/compute-pricing/",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#141",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs a web-based portal that provides users with global breaking news, local alerts, and weather updates. The portal delivers each user a personalized view by using mixture of static and dynamic content. Content is served over HTTPS through an API server running on an Amazon EC2 instance behind an Application Load Balancer (ALB). The company wants the portal to provide this content to its users across the world as quickly as possible.<br>How should a solutions architect design the application to ensure the LEAST amount of latency for all users?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#141",
            "answers": [
              {
                "choice": "<p>A. Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve all static and dynamic content by specifying the ALB as an origin.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy the application stack in two AWS Regions. Use an Amazon Route 53 latency routing policy to serve all content from the ALB in the closest Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve the static content. Serve the dynamic content directly from the ALB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Deploy the application stack in two AWS Regions. Use an Amazon Route 53 geolocation routing policy to serve all content from the ALB in the closest Region.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 694483,
            "date": "Fri 14 Oct 2022 06:21",
            "username": "huiy",
            "content": "Answer is A. <br>Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content<br>https://www.examtopics.com/discussions/amazon/view/81081-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "9",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 717251,
            "date": "Sun 13 Nov 2022 11:53",
            "username": "Pamban",
            "content": "Answer A.  refer Question #: 612 in SAA-C002 <br>https://www.examtopics.com/discussions/amazon/view/81081-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 714168,
            "date": "Wed 09 Nov 2022 01:22",
            "username": "Bevemo",
            "content": "B= as quickly as possible = lowest latency dynamic + static content.<br>CloudFront works for static and dynamic content, but the dynamic content delivery will not be 'as fast as possible' if it's coming from another region.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 705188,
            "date": "Thu 27 Oct 2022 05:37",
            "username": "tubtab",
            "content": "aaaaaaaaaaaaa",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 704873,
            "date": "Wed 26 Oct 2022 18:55",
            "username": "Six_Fingered_JoseAameeOnimole",
            "content": "Answer should be B,<br><br>CloudFront reduces latency if its only static content, which is not the case here.<br>For Dynamic content, CF cant cache the content so it sends the traffic through the AWS Network which does reduces latency, but it still has to travel through another region.<br><br>For the case with 2 region and Route 53 latency routing, Route 53 detects the nearest resouce (with lowest latency) and routes the traffic there. Because the traffic does not have to travel toresources far away, it should have the least latency in this case here.Can you pls. provide a ref. link from where this info. got extracted?Cf works for both static and dynamic content",
            "upvote_count": "412",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 732007,
            "date": "Wed 30 Nov 2022 22:37",
            "username": "Aamee",
            "content": "Can you pls. provide a ref. link from where this info. got extracted?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 711725,
            "date": "Sat 05 Nov 2022 12:31",
            "username": "Onimole",
            "content": "Cf works for both static and dynamic content",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 694637,
            "date": "Fri 14 Oct 2022 11:31",
            "username": "trancex",
            "content": "not sure but A https://aws.amazon.com/blogs/networking-and-content-delivery/deliver-your-apps-dynamic-content-using-amazon-cloudfront-getting-started-template/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#142",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A gaming company is designing a highly available architecture. The application runs on a modified Linux kernel and supports only UDP-based traffic. The company needs the front-end tier to provide the best possible user experience. That tier must have low latency, route traffic to the nearest edge location, and provide static IP addresses for entry into the application endpoints.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#142",
            "answers": [
              {
                "choice": "<p>A. Configure Amazon Route 53 to forward requests to an Application Load Balancer. Use AWS Lambda for the application in AWS Application Auto Scaling.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure Amazon CloudFront to forward requests to a Network Load Balancer. Use AWS Lambda for the application in an AWS Application Auto Scaling group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure AWS Global Accelerator to forward requests to a Network Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure Amazon API Gateway to forward requests to an Application Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 707684,
            "date": "Sun 30 Oct 2022 08:59",
            "username": "dokaeduiCcma",
            "content": "Correct Answer: C <br>AWS Global Accelerator and Amazon CloudFront are separate services that use the AWS global network and its edge locations around the world. CloudFront improves performance for both cacheable content (such as images and videos) and dynamic content (such as API acceleration and dynamic site delivery). Global Accelerator improves performance for a wide range of applications over TCP or UDP by proxying packets at the edge to applications running in one or more AWS Regions. Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover. Both services integrate with AWS Shield for DDoS protection.Thank you, your explanation helped me to better understand even the answer of question 29",
            "upvote_count": "122",
            "selected_answers": ""
          },
          {
            "id": 724888,
            "date": "Wed 23 Nov 2022 05:46",
            "username": "iCcma",
            "content": "Thank you, your explanation helped me to better understand even the answer of question 29",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 726093,
            "date": "Thu 24 Nov 2022 18:53",
            "username": "Wpcorgan",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 712936,
            "date": "Mon 07 Nov 2022 09:42",
            "username": "PS_R",
            "content": "Cloud Fronts supports both Static and Dynamic and Global Accelerator means low latency over UDP",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#143",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate its existing on-premises monolithic application to AWS. The company wants to keep as much of the front-end code and the backend code as possible. However, the company wants to break the application into smaller applications. A different team will manage each application. The company needs a highly scalable solution that minimizes operational overhead.<br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#143",
            "answers": [
              {
                "choice": "<p>A. Host the application on AWS Lambda. Integrate the application with Amazon API Gateway.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Host the application with AWS Amplify. Connect the application to an Amazon API Gateway API that is integrated with AWS Lambda.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Host the application on Amazon EC2 instances. Set up an Application Load Balancer with EC2 instances in an Auto Scaling group as targets.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Host the application on Amazon Elastic Container Service (Amazon ECS). Set up an Application Load Balancer with Amazon ECS as the target.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 707404,
            "date": "Sat 29 Oct 2022 20:41",
            "username": "Ken701",
            "content": "I think the answer here is \\\"D\\\" because usually when you see terms like \\\"monolithic\\\" the answer will likely refer to microservices.",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 726095,
            "date": "Thu 24 Nov 2022 18:54",
            "username": "Wpcorgan",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 714174,
            "date": "Wed 09 Nov 2022 01:31",
            "username": "Bevemo",
            "content": "D is organic pattern, lift and shift, decompose to containers, first making most use of existing code, whilst new features can be added over time with lambda+api gw later.<br>A is leapfrog pattern. requiring refactoring all code up front.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 712109,
            "date": "Sun 06 Nov 2022 02:11",
            "username": "backbencher2022",
            "content": "I think D is the right choice as they want application to be managed by different people which could be enabled by breaking it into different containers",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 707652,
            "date": "Sun 30 Oct 2022 07:43",
            "username": "SimonPark",
            "content": "imho, it's D because \\\"break the application into smaller applications\\\" doesn't mean it has to be 'serverless'. Rather it can be divided into smaller application running on containers.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 704875,
            "date": "Wed 26 Oct 2022 19:00",
            "username": "Six_Fingered_JoseNewptone",
            "content": "I think A is the answer here, breaking into smaller pieces so lambda makes the most sense.<br>I don't see any restrictions in the question that forbids the usage of lambdaThe reason for not choosing A: \\\"The company wants to keep as much of the front-end code and the backend code as possible\\\"",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725466,
            "date": "Thu 24 Nov 2022 01:32",
            "username": "Newptone",
            "content": "The reason for not choosing A: \\\"The company wants to keep as much of the front-end code and the backend code as possible\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#144",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company recently started using Amazon Aurora as the data store for its global ecommerce application. When large reports are run, developers report that the ecommerce application is performing poorly. After reviewing metrics in Amazon CloudWatch, a solutions architect finds that the ReadIOPS and CPUUtilizalion metrics are spiking when monthly reports run.<br>What is the MOST cost-effective solution?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#144",
            "answers": [
              {
                "choice": "<p>A. Migrate the monthly reporting to Amazon Redshift.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Migrate the monthly reporting to an Aurora Replica.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Migrate the Aurora database to a larger instance class.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Increase the Provisioned IOPS on the Aurora instance.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724395,
            "date": "Tue 22 Nov 2022 16:14",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 712111,
            "date": "Sun 06 Nov 2022 02:14",
            "username": "backbencher2022",
            "content": "ReadIOPS issue inclining towards Read Replica as the most cost effective solution here",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 709035,
            "date": "Tue 01 Nov 2022 11:31",
            "username": "rjam",
            "content": "Answer B",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#145",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company hosts a website analytics application on a single Amazon EC2 On-Demand Instance. The analytics software is written in PHP and uses a MySQL database. The analytics software, the web server that provides PHP, and the database server are all hosted on the EC2 instance. The application is showing signs of performance degradation during busy times and is presenting 5xx errors. The company needs to make the application scale seamlessly.<br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#145",
            "answers": [
              {
                "choice": "<p>A. Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use an Application Load Balancer to distribute the load to each EC2 instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use Amazon Route 53 weighted routing to distribute the load across the two EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Migrate the database to an Amazon Aurora MySQL DB instance. Create an AWS Lambda function to stop the EC2 instance and change the instance type. Create an Amazon CloudWatch alarm to invoke the Lambda function when CPU utilization surpasses 75%.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Migrate the database to an Amazon Aurora MySQL DB instance. Create an AMI of the web application. Apply the AMI to a launch template. Create an Auto Scaling group with the launch template Configure the launch template to use a Spot Fleet. Attach an Application Load Balancer to the Auto Scaling group.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 725805,
            "date": "Thu 24 Nov 2022 12:57",
            "username": "ds0321",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724396,
            "date": "Tue 22 Nov 2022 16:15",
            "username": "Wpcorgan",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 707708,
            "date": "Sun 30 Oct 2022 09:41",
            "username": "dokaedu",
            "content": "Answer: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 707657,
            "date": "Sun 30 Oct 2022 07:49",
            "username": "SimonPark",
            "content": "I think D is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 707370,
            "date": "Sat 29 Oct 2022 19:47",
            "username": "USalo",
            "content": "Agreed with D as Spot Fleet can leverage both spot+on-demand instances, it should be the most cost-effective.<br>https://www.youtube.com/watch?v=rlYLbs33Ofs&ab_channel=AmazonWebServices",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 704876,
            "date": "Wed 26 Oct 2022 19:04",
            "username": "Six_Fingered_JoserewdboySix_Fingered_Jose",
            "content": "Answer should be A,<br>question is asking for most cost effective way to scale the application layer, which means AS on EC2 is enough.<br><br>Moreover, Option D is saying to use Spot Fleet, which has potential to cause downtime in the app layerI see what you're saying, but the question also requires that \\\"The company needs to make the application scale seamlessly.\\\" This tells me that it needs Auto Scaling. Auto Scaling with Spot fleet will allow for automatic scaling up and scaling down, which will save money over having two 24x7 EC2 instances.Actually on second thought, adding optional on-demand instances might solve the spot fleet problem, so maybe leaning back to D again.<br>Wish the questions would be more specific",
            "upvote_count": "217",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 727179,
            "date": "Sat 26 Nov 2022 01:38",
            "username": "rewdboy",
            "content": "I see what you're saying, but the question also requires that \\\"The company needs to make the application scale seamlessly.\\\" This tells me that it needs Auto Scaling. Auto Scaling with Spot fleet will allow for automatic scaling up and scaling down, which will save money over having two 24x7 EC2 instances.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 704879,
            "date": "Wed 26 Oct 2022 19:06",
            "username": "Six_Fingered_Jose",
            "content": "Actually on second thought, adding optional on-demand instances might solve the spot fleet problem, so maybe leaning back to D again.<br>Wish the questions would be more specific",
            "upvote_count": "7",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#146",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs a stateless web application in production on a group of Amazon EC2 On-Demand Instances behind an Application Load Balancer. The application experiences heavy usage during an 8-hour period each business day. Application usage is moderate and steady overnight. Application usage is low during weekends.<br>The company wants to minimize its EC2 costs without affecting the availability of the application.<br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#146",
            "answers": [
              {
                "choice": "<p>A. Use Spot Instances for the entire workload.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Reserved Instances for the baseline level of usage. Use Spot instances for any additional capacity that the application needs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use On-Demand Instances for the baseline level of usage. Use Spot Instances for any additional capacity that the application needs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Dedicated Instances for the baseline level of usage. Use On-Demand Instances for any additional capacity that the application needs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724414,
            "date": "Tue 22 Nov 2022 16:38",
            "username": "Wpcorgan",
            "content": "B IS CORRECT",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 714614,
            "date": "Wed 09 Nov 2022 14:49",
            "username": "ArielSchivo",
            "content": "They are currently using On Demand instances, so option C is out.<br>A uses Spot instances which is not recommended for PROD and D uses Dedicated instances which are expensive.<br>So option B should be the one.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 709261,
            "date": "Tue 01 Nov 2022 16:48",
            "username": "rob74",
            "content": "In the Question is mentioned that it has oDemand instances...so I think is more cheapest reserved and spot",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 708918,
            "date": "Tue 01 Nov 2022 08:05",
            "username": "Dsouzaf",
            "content": "If we select B, Spot instance are reliable though it saves cost.<br>In D: base line & additional capacity is also On-Demand. Expensive than Reserve Instance but will not bring down Production",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 708873,
            "date": "Tue 01 Nov 2022 06:44",
            "username": "TaiTran1994",
            "content": "I think C should be corrected.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#147",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to retain application log files for a critical application for 10 years. The application team regularly accesses logs from the past month for troubleshooting, but logs older than 1 month are rarely accessed. The application generates more than 10 TB of logs per month.<br>Which storage option meets these requirements MOST cost-effectively?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#147",
            "answers": [
              {
                "choice": "<p>A. Store the logs in Amazon S3. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store the logs in Amazon S3. Use S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store the logs in Amazon CloudWatch Logs. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store the logs in Amazon CloudWatch Logs. Use Amazon S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724415,
            "date": "Tue 22 Nov 2022 16:39",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720000,
            "date": "Wed 16 Nov 2022 22:02",
            "username": "rjamtdkcumberland",
            "content": "Why not AwsBackup? No Glacier Deep is supported by AWS Backup<br><br>https://docs.aws.amazon.com/aws-backup/latest/devguide/s3-backups.html <br>AWS Backup allows you to backup your S3 data stored in the following S3 Storage Classes:<br>•\tS3 Standard<br>•\tS3 Standard - Infrequently Access (IA)<br>•\tS3 One Zone-IA<br>•\tS3 Glacier Instant Retrieval<br>•\tS3 Intelligent-Tiering (S3 INT)AWS BackUp costs something, setting up S3 LCP doesn't.",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727787,
            "date": "Sat 26 Nov 2022 20:50",
            "username": "tdkcumberland",
            "content": "AWS BackUp costs something, setting up S3 LCP doesn't.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 714617,
            "date": "Wed 09 Nov 2022 14:51",
            "username": "ArielSchivo",
            "content": "S3 + Glacier is the most cost effective.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 714179,
            "date": "Wed 09 Nov 2022 01:59",
            "username": "BevemoAamee",
            "content": "D works, archive cloudwatch logs to S3 .... but is an additional service to pay for over B. CloudWatch logs can't store around 10 TB of data per month I believe so both C and Doptions are ruled out already.",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 732178,
            "date": "Thu 01 Dec 2022 03:28",
            "username": "Aamee",
            "content": "CloudWatch logs can't store around 10 TB of data per month I believe so both C and Doptions are ruled out already.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 710005,
            "date": "Wed 02 Nov 2022 20:01",
            "username": "masetromain",
            "content": "https://www.examtopics.com/discussions/amazon/view/80772-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#148",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a data ingestion workflow that includes the following components:<br>An Amazon Simple Notification Service (Amazon SNS) topic that receives notifications about new data deliveries<br>An AWS Lambda function that processes and stores the data<br>The ingestion workflow occasionally fails because of network connectivity issues. When failure occurs, the corresponding data is not ingested unless the company manually reruns the job.<br>What should a solutions architect do to ensure that all notifications are eventually processed?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#148",
            "answers": [
              {
                "choice": "<p>A. Configure the Lambda function for deployment across multiple Availability Zones.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the Lambda function's configuration to increase the CPU and memory allocations for the function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the SNS topic’s retry strategy to increase both the number of retries and the wait time between retries.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure an Amazon Simple Queue Service (Amazon SQS) queue as the on-failure destination. Modify the Lambda function to process messages in the queue.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 705462,
            "date": "Thu 27 Oct 2022 12:58",
            "username": "bunnychip",
            "content": "*ensure that all notifications are eventually processed*",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 734860,
            "date": "Sun 04 Dec 2022 06:29",
            "username": "Wajif",
            "content": "C isnt specific. Hence D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 724461,
            "date": "Tue 22 Nov 2022 17:23",
            "username": "LeGloupierWajif",
            "content": "\\\"on-failure destination\\\" doesn't exist, only dead letter queue exist.<br>that's why I am leaning for CDead letter queue doesnt exist in SNS. They are specifically saying a new queue will be configured for failures from SNS. Hence D",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 734859,
            "date": "Sun 04 Dec 2022 06:29",
            "username": "Wajif",
            "content": "Dead letter queue doesnt exist in SNS. They are specifically saying a new queue will be configured for failures from SNS. Hence D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724418,
            "date": "Tue 22 Nov 2022 16:44",
            "username": "Wpcorgan",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721349,
            "date": "Fri 18 Nov 2022 16:10",
            "username": "ds0321",
            "content": "D is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 714631,
            "date": "Wed 09 Nov 2022 15:04",
            "username": "ArielSchivo",
            "content": "Option C could work but the max retries attempts is 23 days. After that messages are deleted. And you do not want that to happen! So, Option D. ",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 707658,
            "date": "Sun 30 Oct 2022 07:56",
            "username": "SimonPark",
            "content": "imho, D is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 694238,
            "date": "Thu 13 Oct 2022 21:43",
            "username": "brushek",
            "content": "should be C:<br><br>https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#149",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a service that produces event data. The company wants to use AWS to process the event data as it is received. The data is written in a specific order that must be maintained throughout processing. The company wants to implement a solution that minimizes operational overhead.<br>How should a solutions architect accomplish this?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#149",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue to hold messages. Set up an AWS Lambda function to process messages from the queue.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an AWS Lambda function as a subscriber.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon Simple Queue Service (Amazon SQS) standard queue to hold messages. Set up an AWS Lambda function to process messages from the queue independently.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a subscriber.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724420,
            "date": "Tue 22 Nov 2022 16:45",
            "username": "Wpcorgan",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 714635,
            "date": "Wed 09 Nov 2022 15:09",
            "username": "ArielSchivo",
            "content": "FIFO means order, so Option A. ",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 709052,
            "date": "Tue 01 Nov 2022 11:44",
            "username": "rjam",
            "content": "Order --- meansFIFO option A",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#150",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is migrating an application from on-premises servers to Amazon EC2 instances. As part of the migration design requirements, a solutions architect must implement infrastructure metric alarms. The company does not need to take action if CPU utilization increases to more than 50% for a short burst of time. However, if the CPU utilization increases to more than 50% and read IOPS on the disk are high at the same time, the company needs to act as soon as possible. The solutions architect also must reduce false alarms.<br>What should the solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#150",
            "answers": [
              {
                "choice": "<p>A. Create Amazon CloudWatch composite alarms where possible.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create Amazon CloudWatch dashboards to visualize the metrics and react to issues quickly.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create Amazon CloudWatch Synthetics canaries to monitor the application and raise an alarm.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create single Amazon CloudWatch metric alarms with multiple metric thresholds where possible.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 699894,
            "date": "Thu 20 Oct 2022 14:14",
            "username": "123jhl0",
            "content": "Composite alarms determine their states by monitoring the states of other alarms. You can **use composite alarms to reduce alarm noise**. For example, you can create a composite alarm where the underlying metric alarms go into ALARM when they meet specific conditions. You then can set up your composite alarm to go into ALARM and send you notifications when the underlying metric alarms go into ALARM by configuring the underlying metric alarms never to take actions. Currently, composite alarms can take the following actions:<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html",
            "upvote_count": "10",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 724421,
            "date": "Tue 22 Nov 2022 16:46",
            "username": "Wpcorgan",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#151",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate its on-premises data center to AWS. According to the company's compliance requirements, the company can use only the ap-northeast-3 Region. Company administrators are not permitted to connect VPCs to the internet.<br>Which solutions will meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#151",
            "answers": [
              {
                "choice": "<p>A. Use AWS Control Tower to implement data residency guardrails to deny internet access and deny access to all AWS Regions except ap-northeast-3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use rules in AWS WAF to prevent internet access. Deny access to all AWS Regions except ap-northeast-3 in the AWS account settings.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS Organizations to configure service control policies (SCPS) that prevent VPCs from gaining internet access. Deny access to all AWS Regions except ap-northeast-3.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an outbound rule for the network ACL in each VPC to deny all traffic from 0.0.0.0/0. Create an IAM policy for each user to prevent the use of any AWS Region other than ap-northeast-3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use AWS Config to activate managed rules to detect and alert for internet gateways and to detect and alert for new resources deployed outside of ap-northeast-3.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724437,
            "date": "Tue 22 Nov 2022 17:02",
            "username": "Wpcorgan",
            "content": "A and C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 718680,
            "date": "Tue 15 Nov 2022 12:01",
            "username": "rjamrjamrjam",
            "content": "https://aws.amazon.com/blogs/aws/new-for-aws-control-tower-region-deny-and-guardrails-to-help-you-meet-data-residency-requirements/<br>*Disallow internet access for an Amazon VPC instance managed by a customerOption A and C*You can use data-residency guardrails to control resources in any AWS Region.",
            "upvote_count": "311",
            "selected_answers": ""
          },
          {
            "id": 718681,
            "date": "Tue 15 Nov 2022 12:01",
            "username": "rjam",
            "content": "Option A and C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 718682,
            "date": "Tue 15 Nov 2022 12:02",
            "username": "rjam",
            "content": "*You can use data-residency guardrails to control resources in any AWS Region.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 704889,
            "date": "Wed 26 Oct 2022 19:24",
            "username": "Six_Fingered_Jose",
            "content": "agree with A and C<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_vpc.html#example_vpc_2",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: AC"
          }
        ]
      },
      {
        "question_id": "#152",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses a three-tier web application to provide training to new employees. The application is accessed for only 12 hours every day. The company is using an Amazon RDS for MySQL DB instance to store information and wants to minimize costs.<br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#152",
            "answers": [
              {
                "choice": "<p>A. Configure an IAM policy for AWS Systems Manager Session Manager. Create an IAM role for the policy. Update the trust relationship of the role. Set up automatic start and stop for the DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon ElastiCache for Redis cache cluster that gives users the ability to access the data from the cache when the DB instance is stopped. Invalidate the cache after the DB instance is started.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Launch an Amazon EC2 instance. Create an IAM role that grants access to Amazon RDS. Attach the role to the EC2 instance. Configure a cron job to start and stop the EC2 instance on the desired schedule.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create AWS Lambda functions to start and stop the DB instance. Create Amazon EventBridge (Amazon CloudWatch Events) scheduled rules to invoke the Lambda functions. Configure the Lambda functions as event targets for the rules.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 707852,
            "date": "Sun 30 Oct 2022 15:18",
            "username": "study_aws1",
            "content": "https://aws.amazon.com/blogs/database/schedule-amazon-rds-stop-and-start-using-aws-lambda/<br><br>It is option D.  Option A could have been applicable had it been AWS Systems Manager State Manager & not AWS Systems Manager Session Manager",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 714646,
            "date": "Wed 09 Nov 2022 15:22",
            "username": "ArielSchivo",
            "content": "Option D is the one. Option A could be as well if it referred to State Manager instead of Session Manager.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 709237,
            "date": "Tue 01 Nov 2022 16:10",
            "username": "rob74",
            "content": "I think A or D but D is cheaper (mimimize costs) because you pay Lambda only if you use it.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 709235,
            "date": "Tue 01 Nov 2022 16:10",
            "username": "rob74",
            "content": "I think A or D but D is cheaper (mimimize costs) because you pay Lambda only if you use it.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 707744,
            "date": "Sun 30 Oct 2022 10:42",
            "username": "SimonPark",
            "content": "voted d",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 706521,
            "date": "Fri 28 Oct 2022 16:06",
            "username": "Kien048",
            "content": "Vote D",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 704891,
            "date": "Wed 26 Oct 2022 19:26",
            "username": "Six_Fingered_Jose",
            "content": "agreed with A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 699963,
            "date": "Thu 20 Oct 2022 15:17",
            "username": "123jhl0ArielSchivoBevemoKien048Kien048",
            "content": "A is true for sure. \\\"Schedule Amazon RDS stop and start using AWS Systems Manager\\\" Steps in the documentation:<br>\t1. Configure an AWS Identity and Access Management (IAM) policy for State Manager.<br>\t2. Create an IAM role for the new policy.<br>\t3. Update the trust relationship of the role so Systems Manager can use it.<br>\t4. Set up the automatic stop with State Manager.<br>\t5. Set up the automatic start with State Manager.<br>https://aws.amazon.com/blogs/database/schedule-amazon-rds-stop-and-start-using-aws-systems-manager/Option A refers to Session Manager, not State Manager as you pointed, so it is wrong. Option D is valid.Agree A, free to use state manager within limits, and don't need to code or manage lambda.Look like State manager and Session manager use for difference purpose even both in same dashboard console.And ofcause, D is working, so if A also right, the question is wrong.",
            "upvote_count": "31112",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 714649,
            "date": "Wed 09 Nov 2022 15:23",
            "username": "ArielSchivo",
            "content": "Option A refers to Session Manager, not State Manager as you pointed, so it is wrong. Option D is valid.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 714217,
            "date": "Wed 09 Nov 2022 02:51",
            "username": "Bevemo",
            "content": "Agree A, free to use state manager within limits, and don't need to code or manage lambda.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 706517,
            "date": "Fri 28 Oct 2022 16:04",
            "username": "Kien048",
            "content": "Look like State manager and Session manager use for difference purpose even both in same dashboard console.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 706519,
            "date": "Fri 28 Oct 2022 16:05",
            "username": "Kien048",
            "content": "And ofcause, D is working, so if A also right, the question is wrong.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#153",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company sells ringtones created from clips of popular songs. The files containing the ringtones are stored in Amazon S3 Standard and are at least 128 KB in size. The company has millions of files, but downloads are infrequent for ringtones older than 90 days. The company needs to save money on storage while keeping the most accessed files readily available for its users.<br>Which action should the company take to meet these requirements MOST cost-effectively?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#153",
            "answers": [
              {
                "choice": "<p>A. Configure S3 Standard-Infrequent Access (S3 Standard-IA) storage for the initial storage tier of the objects.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Move the files to S3 Intelligent-Tiering and configure it to move objects to a less expensive storage tier after 90 days.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure S3 inventory to manage objects and move them to S3 Standard-Infrequent Access (S3 Standard-1A) after 90 days.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Implement an S3 Lifecycle policy that moves the objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-1A) after 90 days.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 718790,
            "date": "Tue 15 Nov 2022 14:52",
            "username": "rjam",
            "content": "Answer D<br>Why Optoin D ?<br>The Question talks about downloads are infrequent older than 90 days which means files less than 90 days are accessed frequently. Standard-Infrequent Access (S3 Standard-IA) needs a minimum 30 days if accessed before, it costs more.<br>So to access the files frequently you need aS3 Standard .After 90 days you can move it toStandard-Infrequent Access (S3 Standard-IA) as its going to be less frequently accessed",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 734857,
            "date": "Sun 04 Dec 2022 06:23",
            "username": "Wajif",
            "content": "Answer is D since it says infrequently accessed.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726072,
            "date": "Thu 24 Nov 2022 18:08",
            "username": "taichun",
            "content": "\\\"128KB\\\" and \\\"90 Days\\\" keywords should point to Answer B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 724877,
            "date": "Wed 23 Nov 2022 05:12",
            "username": "zeronine75WajifWilson_S",
            "content": "B/D seems possible answer. But, I'll go with \\\"B\\\". <br>In the following table, S3 Intelligent-Tiering seems not so expansive than S3 Standard.<br>https://aws.amazon.com/s3/pricing/?nc1=h_ls<br>And, in the question \\\"128KB\\\" size is talking about S3 Intelligent-Tiering stuff.S3 Intelligent tiering is used when the access frequency is not known. I think 128KB is a deflector.This link also has me going with “B. ” Specifying 128 KB in size is not a coincidence. https://aws.amazon.com/s3/storage-classes/intelligent-tiering/",
            "upvote_count": "311",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 734856,
            "date": "Sun 04 Dec 2022 06:22",
            "username": "Wajif",
            "content": "S3 Intelligent tiering is used when the access frequency is not known. I think 128KB is a deflector.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725573,
            "date": "Thu 24 Nov 2022 06:29",
            "username": "Wilson_S",
            "content": "This link also has me going with “B. ” Specifying 128 KB in size is not a coincidence. https://aws.amazon.com/s3/storage-classes/intelligent-tiering/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724441,
            "date": "Tue 22 Nov 2022 17:05",
            "username": "Wpcorgan",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 714678,
            "date": "Wed 09 Nov 2022 16:04",
            "username": "TaiTran1994",
            "content": "I think D is answer",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 713955,
            "date": "Tue 08 Nov 2022 17:04",
            "username": "PS_RPS_R",
            "content": "Another thought on B, Because it is asking for cost effective, it is possible to move the data to Glacier instant retrival after 90 daysbut first 90 days we dont have infrequent data and hence intelligent tiering might not be required.",
            "upvote_count": "23",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 715158,
            "date": "Thu 10 Nov 2022 11:53",
            "username": "PS_R",
            "content": "but first 90 days we dont have infrequent data and hence intelligent tiering might not be required.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 710717,
            "date": "Thu 03 Nov 2022 19:23",
            "username": "Cynthia19",
            "content": "answer : D",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#154",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to save the results from a medical trial to an Amazon S3 repository. The repository must allow a few scientists to add new files and must restrict all other users to read-only access. No users can have the ability to modify or delete any files in the repository. The company must keep every file in the repository for a minimum of 1 year after its creation date.<br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#154",
            "answers": [
              {
                "choice": "<p>A. Use S3 Object Lock in governance mode with a legal hold of 1 year.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use S3 Object Lock in compliance mode with a retention period of 365 days.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an IAM role to restrict all users from deleting or changing objects in the S3 bucket. Use an S3 bucket policy to only allow the IAM role.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure the S3 bucket to invoke an AWS Lambda function every time an object is added. Configure the function to track the hash of the saved object so that modified objects can be marked accordingly.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 726038,
            "date": "Thu 24 Nov 2022 17:25",
            "username": "Cizzla7049",
            "content": "ANSWER IS DEFINITELY A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 724446,
            "date": "Tue 22 Nov 2022 17:07",
            "username": "Wpcorgan",
            "content": "B i think. im not sure..thougts?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 718491,
            "date": "Tue 15 Nov 2022 05:13",
            "username": "Qjb8m9h",
            "content": "Answer : B<br>Reason: Compliance Mode. The key difference between Compliance Mode and Governance Mode is that there are NO users that can override the retention periods set or delete an object, and that also includes your AWS root account which has the highest privileges.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 715462,
            "date": "Thu 10 Nov 2022 19:31",
            "username": "mabotega",
            "content": "https://cloudacademy.com/course/using-amazon-s3-bucket-properties-management-features-maintain-data/object-lock/#:~:text=be%20deleted%20again.-,Compliance%20Mode.,which%20has%20the%20highest%20privileges.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 714659,
            "date": "Wed 09 Nov 2022 15:35",
            "username": "ArielSchivo",
            "content": "\\\"No users can have the ability to modify or delete any files in the repository\\\" = Compliance mode.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 710728,
            "date": "Thu 03 Nov 2022 19:43",
            "username": "USalo",
            "content": "B.  Due to compliance",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 710278,
            "date": "Thu 03 Nov 2022 06:58",
            "username": "nikerlasBobbybash",
            "content": "A is Correct <br><br>\\\"In governance mode, users can't overwrite or delete an object version or alter its lock settings unless they have special permissions. With governance mode, you protect objects against being deleted by most users, but you can still grant some users permission to alter the retention settings or delete the object if necessary.\\\"<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.htmlif you have very specific permissions, including s3:BypassGovernanceMode, s3:GetObjectLockConfiguration, s3:GetObjectRetention, then a user will still be able to delete an object version within the retention period or change any retention settings set on the bucket.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 724110,
            "date": "Tue 22 Nov 2022 06:34",
            "username": "Bobbybash",
            "content": "if you have very specific permissions, including s3:BypassGovernanceMode, s3:GetObjectLockConfiguration, s3:GetObjectRetention, then a user will still be able to delete an object version within the retention period or change any retention settings set on the bucket.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 705571,
            "date": "Thu 27 Oct 2022 15:10",
            "username": "bunnychip",
            "content": "'No users\\\" can have the ability to modify or delete any files in the repository",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 704897,
            "date": "Wed 26 Oct 2022 19:33",
            "username": "Six_Fingered_JoseSix_Fingered_Jose",
            "content": "Answer should be A because a few scientist must be able to edit the file<br>> In governance mode, users can't overwrite or delete an object version or alter its lock settings unless they have special permissions.<br><br>It cant be B because in compliance mode, absolutely nobody can touch the file during its period<br>> In compliance mode, a protected object version can't be overwritten or deleted by any user, including the root user in your AWS account<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-retention-modesactually i read the question again<br>> No users can have the ability to modify or delete any files in the repository.<br><br>answer should be B ignore my comment",
            "upvote_count": "29",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 704898,
            "date": "Wed 26 Oct 2022 19:34",
            "username": "Six_Fingered_Jose",
            "content": "actually i read the question again<br>> No users can have the ability to modify or delete any files in the repository.<br><br>answer should be B ignore my comment",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 703447,
            "date": "Tue 25 Oct 2022 02:29",
            "username": "dave9994",
            "content": "Compliance mode is more restrictive : https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#155",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large media company hosts a web application on AWS. The company wants to start caching confidential media files so that users around the world will have reliable access to the files. The content is stored in Amazon S3 buckets. The company must deliver the content quickly, regardless of where the requests originate geographically.<br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#155",
            "answers": [
              {
                "choice": "<p>A. Use AWS DataSync to connect the S3 buckets to the web application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy AWS Global Accelerator to connect the S3 buckets to the web application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Deploy Amazon CloudFront to connect the S3 buckets to CloudFront edge servers.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon Simple Queue Service (Amazon SQS) to connect the S3 buckets to the web application.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 709184,
            "date": "Tue 01 Nov 2022 14:49",
            "username": "rjam",
            "content": "key :caching<br>Option C",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 724447,
            "date": "Tue 22 Nov 2022 17:08",
            "username": "Wpcorgan",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 716946,
            "date": "Sat 12 Nov 2022 22:35",
            "username": "MyNameIsJulien",
            "content": "Answer is C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#156",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company produces batch data that comes from different databases. The company also produces live stream data from network sensors and application APIs. The company needs to consolidate all the data into one place for business analytics. The company needs to process the incoming data and then stage the data in different Amazon S3 buckets. Teams will later run one-time queries and import the data into a business intelligence tool to show key performance indicators (KPIs).<br>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#156",
            "answers": [
              {
                "choice": "<p>A. Use Amazon Athena for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon Kinesis Data Analytics for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create custom AWS Lambda functions to move the individual records from the databases to an Amazon Redshift cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an AWS Glue extract, transform, and load (ETL) job to convert the data into JSON format. Load the data into multiple Amazon OpenSearch Service (Amazon Elasticsearch Service) clusters.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use blueprints in AWS Lake Formation to identify the data that can be ingested into a data lake. Use AWS Glue to crawl the source, extract the data, and load the data into Amazon S3 in Apache Parquet format.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 697932,
            "date": "Tue 18 Oct 2022 07:28",
            "username": "Wazhija",
            "content": "I believe AE makes the most sense",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 704901,
            "date": "Wed 26 Oct 2022 19:38",
            "username": "Six_Fingered_Jose",
            "content": "yeah AE makes sense, only E is working with S3 here and questions wants them to be in S3",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 728379,
            "date": "Sun 27 Nov 2022 16:35",
            "username": "DivaLight",
            "content": "Option AE",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 726044,
            "date": "Thu 24 Nov 2022 17:28",
            "username": "Cizzla7049",
            "content": "A and C are correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 712391,
            "date": "Sun 06 Nov 2022 16:06",
            "username": "backbencher2022",
            "content": "A&E is the correct answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 708950,
            "date": "Tue 01 Nov 2022 09:01",
            "username": "Dsouzaf",
            "content": "AC is correct. Ans E is also correctBut in ans E: since Apache Parquer format is used, this is not correct answer as per AWS exam answer<br>Six_Fingered_Jose",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#157",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company stores data in an Amazon Aurora PostgreSQL DB cluster. The company must store all the data for 5 years and must delete all the data after 5 years. The company also must indefinitely keep audit logs of actions that are performed within the database. Currently, the company has automated backups configured for Aurora.<br><br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: DE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#157",
            "answers": [
              {
                "choice": "<p>A. Take a manual snapshot of the DB cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a lifecycle policy for the automated backups.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure automated backup retention for 5 years.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure an Amazon CloudWatch Logs export for the DB cluster.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use AWS Backup to take the backups and to keep the backups for 5 years.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 729013,
            "date": "Mon 28 Nov 2022 12:14",
            "username": "kmaneith",
            "content": "dude trust me",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 728382,
            "date": "Sun 27 Nov 2022 16:38",
            "username": "DivaLight",
            "content": "DE Option",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 727994,
            "date": "Sun 27 Nov 2022 08:24",
            "username": "Phinx",
            "content": "D and E is the most sensible options here.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 727423,
            "date": "Sat 26 Nov 2022 10:46",
            "username": "justtry",
            "content": "https://aws.amazon.com/about-aws/whats-new/2020/06/amazon-aurora-snapshots-can-be-managed-via-aws-backup/?nc1=h_ls<br>AWS Backup adds Amazon Aurora database cluster snapshots as its latest protected resource",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 726495,
            "date": "Fri 25 Nov 2022 09:16",
            "username": "Nightducky",
            "content": "There is no sense with A if you can use AWS backup and keep snapshot for 5 years.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 725605,
            "date": "Thu 24 Nov 2022 07:46",
            "username": "TECHNOWARRIOR",
            "content": "DE, AWS Backup adds Amazon Aurora database cluster snapshots as its latest protected resource. Starting today, you can use AWS Backup to manage Amazon Aurora database cluster snapshots. AWS Backup can centrally configure backup policies, monitor backup activity, copy a snapshot within and across AWS regions, except for China regions, where snapshots can only be copied from one China region to another.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725328,
            "date": "Wed 23 Nov 2022 19:23",
            "username": "ds0321",
            "content": "35 days is the Maximum time for Backups aurora",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 724925,
            "date": "Wed 23 Nov 2022 07:08",
            "username": "Nigma",
            "content": "A and D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 724449,
            "date": "Tue 22 Nov 2022 17:12",
            "username": "Wpcorgan",
            "content": "D and E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721289,
            "date": "Fri 18 Nov 2022 13:57",
            "username": "peneloco",
            "content": "I’m going for DE.  Picked E because AWS backup does work to create and manage snapshots of Aurora DB instances.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 721241,
            "date": "Fri 18 Nov 2022 12:10",
            "username": "LeGloupier",
            "content": "D for audit log<br>E for backup",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: DE"
          },
          {
            "id": 719552,
            "date": "Wed 16 Nov 2022 11:42",
            "username": "rjam",
            "content": "Answer A and D<br>Manual DB Snapshots. Retention of backup for as long as you want<br>Audit Logs can be enabled and sent to CloudWatch Logs for longer retention",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 719464,
            "date": "Wed 16 Nov 2022 09:16",
            "username": "babaxoxoAamee",
            "content": "Answer A&D<br>If you want to retain Aurora Backup beyond the maximum retention day (35) -> do manual snapshotWhat's the source of truth for this statement?",
            "upvote_count": "41",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 733093,
            "date": "Thu 01 Dec 2022 21:57",
            "username": "Aamee",
            "content": "What's the source of truth for this statement?",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#158",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect is optimizing a website for an upcoming musical event. Videos of the performances will be streamed in real time and then will be available on demand. The event is expected to attract a global online audience.<br><br>Which service will improve the performance of both the real-time and on-demand streaming?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#158",
            "answers": [
              {
                "choice": "<p>A. Amazon CloudFront<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. AWS Global Accelerator<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon Route 53<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon S3 Transfer Acceleration<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 718763,
            "date": "Tue 15 Nov 2022 14:43",
            "username": "Nigma",
            "content": "A is right<br><br>You can use CloudFront to deliver video on demand (VOD) or live streaming video using any HTTP origin<br><br>Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 729081,
            "date": "Mon 28 Nov 2022 13:32",
            "username": "leonnnn",
            "content": "I thought the real-time streaming comes with rtsp protocol for which B is better.<br>But I realized now real-time streaming also has http way now (like HLS, etc.).<br>So the answer should be A. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 724450,
            "date": "Tue 22 Nov 2022 17:12",
            "username": "Wpcorgan",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719468,
            "date": "Wed 16 Nov 2022 09:18",
            "username": "babaxoxo",
            "content": "CloudFront for sure",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#159",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a publicly accessible serverless application that uses Amazon API Gateway and AWS Lambda. The application’s traffic recently spiked due to fraudulent requests from botnets.<br><br>Which steps should a solutions architect take to block requests from unauthorized users? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#159",
            "answers": [
              {
                "choice": "<p>A. Create a usage plan with an API key that is shared with genuine users only.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Integrate logic within the Lambda function to ignore the requests from fraudulent IP addresses.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Implement an AWS WAF rule to target malicious requests and trigger actions to filter them out.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Convert the existing public API to a private API. Update the DNS records to redirect users to the new API endpoint.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create an IAM role for each user attempting to access the API. A user will assume the role when making the API call.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 727995,
            "date": "Sun 27 Nov 2022 08:27",
            "username": "Phinx",
            "content": "A and C are the correct choices.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 727425,
            "date": "Sat 26 Nov 2022 10:53",
            "username": "justtry",
            "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 726492,
            "date": "Fri 25 Nov 2022 09:11",
            "username": "5up3rm4n",
            "content": "Only answer C is an obviouis choice.B and D are clearly not right and A is the only remotely viable other answer but even then the documentation on API Keys and Usage quotas states not to rely on it to block API requests;<br><br>Usage plan throttling and quotas are not hard limits, and are applied on a best-effort basis. In some cases, clients can exceed the quotas that you set. Don’t rely on usage plan quotas or throttling to control costs or block access to an API. Consider using AWS Budgets to monitor costs and AWS WAF to manage API requests.<br><br>https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 725787,
            "date": "Thu 24 Nov 2022 12:41",
            "username": "ds0321",
            "content": "A and C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 719472,
            "date": "Wed 16 Nov 2022 09:24",
            "username": "babaxoxo",
            "content": "use usage plan API key",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AC"
          },
          {
            "id": 718766,
            "date": "Tue 15 Nov 2022 14:45",
            "username": "Nigma",
            "content": "A and C",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#160",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An ecommerce company hosts its analytics application in the AWS Cloud. The application generates about 300 MB of data each month. The data is stored in JSON format. The company is evaluating a disaster recovery solution to back up the data. The data must be accessible in milliseconds if it is needed, and the data must be kept for 30 days.<br><br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#160",
            "answers": [
              {
                "choice": "<p>A. Amazon OpenSearch Service (Amazon Elasticsearch Service)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon S3 Glacier<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon S3 Standard<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon RDS for PostgreSQL<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 734314,
            "date": "Sat 03 Dec 2022 10:25",
            "username": "hpipit",
            "content": "c IS correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 724453,
            "date": "Tue 22 Nov 2022 17:14",
            "username": "Wpcorgan",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719579,
            "date": "Wed 16 Nov 2022 12:37",
            "username": "sdasdawaAamee",
            "content": "IMHO <br>Normally ElasticSearch would be ideal here, however as question states \\\"Most cost-effective\\\" <br>S3 is the best choice in this caseElasticSearch is a search service, the question states here about the backup service reqd. for the DR scenario.",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 733109,
            "date": "Thu 01 Dec 2022 22:26",
            "username": "Aamee",
            "content": "ElasticSearch is a search service, the question states here about the backup service reqd. for the DR scenario.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719482,
            "date": "Wed 16 Nov 2022 09:30",
            "username": "babaxoxo",
            "content": "Ans C:<br>Cost-effective solution with milliseconds of retrieval -> it should be s3 standard",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#161",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a small Python application that processes JSON documents and outputs the results to an on-premises SQL database. The application runs thousands of times each day. The company wants to move the application to the AWS Cloud. The company needs a highly available solution that maximizes scalability and minimizes operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#161",
            "answers": [
              {
                "choice": "<p>A. Place the JSON documents in an Amazon S3 bucket. Run the Python code on multiple Amazon EC2 instances to process the documents. Store the results in an Amazon Aurora DB cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Place the JSON documents in an Amazon S3 bucket. Create an AWS Lambda function that runs the Python code to process the documents as they arrive in the S3 bucket. Store the results in an Amazon Aurora DB cluster.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Place the JSON documents in an Amazon Elastic Block Store (Amazon EBS) volume. Use the EBS Multi-Attach feature to attach the volume to multiple Amazon EC2 instances. Run the Python code on the EC2 instances to process the documents. Store the results on an Amazon RDS DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Place the JSON documents in an Amazon Simple Queue Service (Amazon SQS) queue as messages. Deploy the Python code as a container on an Amazon Elastic Container Service (Amazon ECS) cluster that is configured with the Amazon EC2 launch type. Use the container to process the SQS messages. Store the results on an Amazon RDS DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 719484,
            "date": "Wed 16 Nov 2022 09:33",
            "username": "babaxoxo",
            "content": "solution should remove operation overhead -> s3 -> lambda -> aurora",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 727998,
            "date": "Sun 27 Nov 2022 08:30",
            "username": "Phinx",
            "content": "D is incorrect because using ECS entails a lot of admin overhead. so B is the correct one.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 724458,
            "date": "Tue 22 Nov 2022 17:21",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 722986,
            "date": "Sun 20 Nov 2022 21:28",
            "username": "EKA_CloudGod",
            "content": "B is the answer<br>https://aws.amazon.com/rds/aurora/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 719702,
            "date": "Wed 16 Nov 2022 14:51",
            "username": "BENICENightducky",
            "content": "D is correct optionehhhhhh",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 720476,
            "date": "Thu 17 Nov 2022 14:29",
            "username": "Nightducky",
            "content": "ehhhhhh",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#162",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to use high performance computing (HPC) infrastructure on AWS for financial risk modeling. The company’s HPC workloads run on Linux. Each HPC workflow runs on hundreds of Amazon EC2 Spot Instances, is short-lived, and generates thousands of output files that are ultimately stored in persistent storage for analytics and long-term future use.<br><br>The company seeks a cloud storage solution that permits the copying of on-premises data to long-term persistent storage to make data available for processing by all EC2 instances. The solution should also be a high performance file system that is integrated with persistent storage to read and write datasets and output files.<br><br>Which combination of AWS services meets these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#162",
            "answers": [
              {
                "choice": "<p>A. Amazon FSx for Lustre integrated with Amazon S3<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon FSx for Windows File Server integrated with Amazon S3<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon S3 Glacier integrated with Amazon Elastic Block Store (Amazon EBS)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon S3 bucket with a VPC endpoint integrated with an Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp2) volume<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724460,
            "date": "Tue 22 Nov 2022 17:23",
            "username": "Wpcorgan",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719704,
            "date": "Wed 16 Nov 2022 14:56",
            "username": "BENICE",
            "content": "A - for HPC \\\"Amazon FSx for Lustre\\\" and long-term persistence \\\"S3\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719565,
            "date": "Wed 16 Nov 2022 12:06",
            "username": "rjamrjam",
            "content": "Amazon FSx for Lustre: <br>• HPC optimized distributed file system, millions of IOPS<br>• Backed by S3Answer A",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 719566,
            "date": "Wed 16 Nov 2022 12:06",
            "username": "rjam",
            "content": "Answer A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719491,
            "date": "Wed 16 Nov 2022 09:49",
            "username": "babaxoxo",
            "content": "FxS Lustre integrated with S3",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#163",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building a containerized application on premises and decides to move the application to AWS. The application will have thousands of users soon after it is deployed. The company is unsure how to manage the deployment of containers at scale. The company needs to deploy the containerized application in a highly available architecture that minimizes operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#163",
            "answers": [
              {
                "choice": "<p>A. Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the AWS Fargate launch type to run the containers. Use target tracking to scale automatically based on demand.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the Amazon EC2 launch type to run the containers. Use target tracking to scale automatically based on demand.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store container images in a repository that runs on an Amazon EC2 instance. Run the containers on EC2 instances that are spread across multiple Availability Zones. Monitor the average CPU utilization in Amazon CloudWatch. Launch new EC2 instances as needed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon EC2 Amazon Machine Image (AMI) that contains the container image. Launch EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon CloudWatch alarm to scale out EC2 instances when the average CPU utilization threshold is breached.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 718746,
            "date": "Tue 15 Nov 2022 14:28",
            "username": "goatbernard",
            "content": "AWS Fargate",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 728001,
            "date": "Sun 27 Nov 2022 08:33",
            "username": "Phinx",
            "content": "Fargate is the only serverless option.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 724462,
            "date": "Tue 22 Nov 2022 17:24",
            "username": "Wpcorgan",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721192,
            "date": "Fri 18 Nov 2022 10:21",
            "username": "ds0321",
            "content": "AWS Fargate",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 719719,
            "date": "Wed 16 Nov 2022 15:08",
            "username": "BENICE",
            "content": "I think A is the correct option. AWS Farget",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719271,
            "date": "Wed 16 Nov 2022 03:00",
            "username": "mricee9",
            "content": "A seems right",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#164",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has two applications: a sender application that sends messages with payloads to be processed and a processing application intended to receive the messages with payloads. The company wants to implement an AWS service to handle messages between the two applications. The sender application can send about 1,000 messages each hour. The messages may take up to 2 days to be processed: If the messages fail to process, they must be retained so that they do not impact the processing of any remaining messages.<br><br>Which solution meets these requirements and is the MOST operationally efficient?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#164",
            "answers": [
              {
                "choice": "<p>A. Set up an Amazon EC2 instance running a Redis database. Configure both applications to use the instance. Store, process, and delete the messages, respectively.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an Amazon Kinesis data stream to receive the messages from the sender application. Integrate the processing application with the Kinesis Client Library (KCL).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Integrate the sender and processor applications with an Amazon Simple Queue Service (Amazon SQS) queue. Configure a dead-letter queue to collect the messages that failed to process.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Subscribe the processing application to an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications to process. Integrate the sender application to write to the SNS topic.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 734903,
            "date": "Sun 04 Dec 2022 08:17",
            "username": "ocbn3wby",
            "content": "This matches mostly the job of Dead Letter Q: <br><br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html<br>vs<br>https://docs.aws.amazon.com/streams/latest/dev/shared-throughput-kcl-consumers.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729503,
            "date": "Mon 28 Nov 2022 19:15",
            "username": "Kapello10",
            "content": "Option C is the correct ans",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729216,
            "date": "Mon 28 Nov 2022 15:26",
            "username": "Gabs90",
            "content": "C is correct. The B is wrong because the question ask for a way to let the two application to comunicate, so che process is already done",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 727713,
            "date": "Sat 26 Nov 2022 18:31",
            "username": "TelaOocbn3wbyKADSM",
            "content": "Please explain by \\\"B\\\" is incorrect?How does SQS process data?<br><br>\\\"KCL helps you consume and process data from a Kinesis data stream by taking care of many of the complex tasks associated with distributed computing.\\\"<br><br>https://docs.aws.amazon.com/streams/latest/dev/shared-throughput-kcl-consumers.htmlThe processing is done at the 2nd application level. <br><br>This seems to be the job of Dead Letter QKinesis may not be having message retry - there is no way for kinesis to know whether the message processing failed. message can be there till their retention period.",
            "upvote_count": "112",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 734902,
            "date": "Sun 04 Dec 2022 08:16",
            "username": "ocbn3wby",
            "content": "The processing is done at the 2nd application level. <br><br>This seems to be the job of Dead Letter Q",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729362,
            "date": "Mon 28 Nov 2022 17:11",
            "username": "KADSM",
            "content": "Kinesis may not be having message retry - there is no way for kinesis to know whether the message processing failed. message can be there till their retention period.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 724463,
            "date": "Tue 22 Nov 2022 17:26",
            "username": "Wpcorgan",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719890,
            "date": "Wed 16 Nov 2022 19:13",
            "username": "mabotega",
            "content": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 719727,
            "date": "Wed 16 Nov 2022 15:17",
            "username": "BENICE",
            "content": "Option: C<br>\\\"Amazon FSx for Lustre\\\" ---> Dead Letter Queue",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 718852,
            "date": "Tue 15 Nov 2022 15:30",
            "username": "Nigma",
            "content": "Ans: C<br>https://aws.amazon.com/blogs/compute/building-loosely-coupled-scalable-c-applications-with-amazon-sqs-and-amazon-sns/<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#165",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect must design a solution that uses Amazon CloudFront with an Amazon S3 origin to store a static website. The company’s security policy requires that all website traffic be inspected by AWS WAF. <br><br>How should the solutions architect comply with these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#165",
            "answers": [
              {
                "choice": "<p>A. Configure an S3 bucket policy to accept requests coming from the AWS WAF Amazon Resource Name (ARN) only.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure Amazon CloudFront to forward all incoming requests to AWS WAF before requesting content from the S3 origin.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure a security group that allows Amazon CloudFront IP addresses to access Amazon S3 only. Associate AWS WAF to CloudFront.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure Amazon CloudFront and Amazon S3 to use an origin access identity (OAI) to restrict access to the S3 bucket. Enable AWS WAF on the distribution.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 718854,
            "date": "Tue 15 Nov 2022 15:32",
            "username": "Nigma",
            "content": "Answer D.  Use an OAI to lockdown CloudFront to S3 origin & enable WAF on CF distribution",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 724465,
            "date": "Tue 22 Nov 2022 17:28",
            "username": "Wpcorgan",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724020,
            "date": "Tue 22 Nov 2022 02:45",
            "username": "TonyghostR05",
            "content": "D using OAI",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 723401,
            "date": "Mon 21 Nov 2022 11:37",
            "username": "handyplazt",
            "content": "Answer D<br>not B because it is not supported to forward S3 requests to WAF",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 723008,
            "date": "Sun 20 Nov 2022 22:08",
            "username": "EKA_CloudGod",
            "content": "https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 718900,
            "date": "Tue 15 Nov 2022 16:17",
            "username": "sdasdawa",
            "content": "https://www.examtopics.com/discussions/amazon/view/35639-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#166",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Organizers for a global event want to put daily reports online as static HTML pages. The pages are expected to generate millions of views from users around the world. The files are stored in an Amazon S3 bucket. A solutions architect has been asked to design an efficient and effective solution.<br><br>Which action should the solutions architect take to accomplish this?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#166",
            "answers": [
              {
                "choice": "<p>A. Generate presigned URLs for the files.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use cross-Region replication to all Regions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the geoproximity feature of Amazon Route 53.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon CloudFront with the S3 bucket as its origin.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724467,
            "date": "Tue 22 Nov 2022 17:28",
            "username": "Wpcorgan",
            "content": "D is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 718862,
            "date": "Tue 15 Nov 2022 15:35",
            "username": "Nigma",
            "content": "D<br><br>Static content on S3 and hence Cloudfront is the best way",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 718848,
            "date": "Tue 15 Nov 2022 15:27",
            "username": "Pamban",
            "content": "D is the correct answer",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#167",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs a production application on a fleet of Amazon EC2 instances. The application reads the data from an Amazon SQS queue and processes the messages in parallel. The message volume is unpredictable and often has intermittent traffic. This application should continually process messages without any downtime.<br><br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#167",
            "answers": [
              {
                "choice": "<p>A. Use Spot Instances exclusively to handle the maximum capacity required.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Reserved Instances exclusively to handle the maximum capacity required.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Reserved Instances for the baseline capacity and use Spot Instances to handle additional capacity.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Reserved Instances for the baseline capacity and use On-Demand Instances to handle additional capacity.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 720240,
            "date": "Thu 17 Nov 2022 06:41",
            "username": "taer",
            "content": "D is the correct answer",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 734945,
            "date": "Sun 04 Dec 2022 09:35",
            "username": "ocbn3wby",
            "content": "I've read the C002 discussions on the same question. Ppl selecting C are doing so because there is a baseline of EC2 involved. <br><br>However, what if the baseline is full, and it cannot provide any more answers to the customers? This is why we need additional instances after all (in the cheapest way) -> to handle additional workload - not supported by baseline.<br><br>More costly than C, but C defeats the purpose of the question.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 734700,
            "date": "Sat 03 Dec 2022 22:21",
            "username": "Rameez1",
            "content": "No downtime eliminates option A and C, as spot instances can be lost unexpectedly. Unpredictable volumes directs towards on Demand instances. So Option D is the right answer.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 724983,
            "date": "Wed 23 Nov 2022 09:12",
            "username": "romko",
            "content": "A - it's out because it's not ok to use full spot coverage.<br>B - it's hard to predict how much resources are needed to buy ahead, so it's suitable to no have any down time but not the best from cost perspective<br>C - possible to be correct answer such asuse cover baseline with RI and rest with spot that is cheaper. Regarding don't time. there is no downtime because vaseline covered with RI and all communication is via SQS (distributed model)<br>D - possible but less cost effective then C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 724468,
            "date": "Tue 22 Nov 2022 17:31",
            "username": "Wpcorgan",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721183,
            "date": "Fri 18 Nov 2022 09:58",
            "username": "ds0321",
            "content": "D is the correct answer",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 720079,
            "date": "Thu 17 Nov 2022 00:36",
            "username": "Danny23132412141_2312",
            "content": "D is the correct answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 719896,
            "date": "Wed 16 Nov 2022 19:16",
            "username": "mabotega",
            "content": "Answer D: unpredictable and often has intermittent traffic",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 719593,
            "date": "Wed 16 Nov 2022 12:58",
            "username": "babaxoxo",
            "content": "No downtime required so the answer is D",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 719585,
            "date": "Wed 16 Nov 2022 12:52",
            "username": "mricee9",
            "content": "C <br>https://www.examtopics.com/discussions/amazon/view/35772-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 718867,
            "date": "Tue 15 Nov 2022 15:39",
            "username": "Nigma",
            "content": "Answer is D because you CAN NOT use spot instances for unpredictability",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 718753,
            "date": "Tue 15 Nov 2022 14:38",
            "username": "goatbernard",
            "content": "reserved instance and spot instance",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#168",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A security team wants to limit access to specific services or actions in all of the team’s AWS accounts. All accounts belong to a large organization in AWS Organizations. The solution must be scalable and there must be a single point where permissions can be maintained.<br><br>What should a solutions architect do to accomplish this?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#168",
            "answers": [
              {
                "choice": "<p>A. Create an ACL to provide access to the services or actions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a security group to allow accounts and attach it to user groups.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create cross-account roles in each account to deny access to the services or actions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a service control policy in the root organizational unit to deny access to the services or actions.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724469,
            "date": "Tue 22 Nov 2022 17:32",
            "username": "Wpcorgan",
            "content": "D iscorrect",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719595,
            "date": "Wed 16 Nov 2022 13:01",
            "username": "babaxoxo",
            "content": "an organization and requires single point place to manage permissions",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 718869,
            "date": "Tue 15 Nov 2022 15:41",
            "username": "Nigma",
            "content": "D.  Service control policies (SCPs) are one type of policy that you can use to manage your organization. SCPs offer central control over the maximum available permissions for all accounts in your organization, allowing you to ensure your accounts stay within your organization's access control guidelines. See https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 718757,
            "date": "Tue 15 Nov 2022 14:40",
            "username": "goatbernard",
            "content": "SCP for organization",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#169",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is concerned about the security of its public web application due to recent web attacks. The application uses an Application Load Balancer (ALB). A solutions architect must reduce the risk of DDoS attacks against the application.<br><br>What should the solutions architect do to meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#169",
            "answers": [
              {
                "choice": "<p>A. Add an Amazon Inspector agent to the ALB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure Amazon Macie to prevent attacks.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable AWS Shield Advanced to prevent attacks.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure Amazon GuardDuty to monitor the ALB. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724470,
            "date": "Tue 22 Nov 2022 17:32",
            "username": "Wpcorgan",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719189,
            "date": "Wed 16 Nov 2022 00:51",
            "username": "goatbernard",
            "content": "AWS Shield Advanced",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 718871,
            "date": "Tue 15 Nov 2022 15:48",
            "username": "Nigma",
            "content": "DDOS = AWS Shield",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#170",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company’s web application is running on Amazon EC2 instances behind an Application Load Balancer. The company recently changed its policy, which now requires the application to be accessed from one specific country only.<br><br>Which configuration will meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#170",
            "answers": [
              {
                "choice": "<p>A. Configure the security group for the EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the security group on the Application Load Balancer.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure AWS WAF on the Application Load Balancer in a VPC. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure the network ACL for the subnet that contains the EC2 instances.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724471,
            "date": "Tue 22 Nov 2022 17:33",
            "username": "Wpcorgan",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 723531,
            "date": "Mon 21 Nov 2022 14:17",
            "username": "handyplazt",
            "content": "Geographic (Geo) Match Conditions in AWS WAF.  This new condition type allows you to use AWS WAF to restrict application access based on the geographic location of your viewers. With geo match conditions you can choose the countries from which AWS WAF should allow access. <br>https://aws.amazon.com/about-aws/whats-new/2017/10/aws-waf-now-supports-geographic-match/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 719605,
            "date": "Wed 16 Nov 2022 13:22",
            "username": "mricee9",
            "content": "C<br>https://aws.amazon.com/about-aws/whats-new/2017/10/aws-waf-now-supports-geographic-match/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 718880,
            "date": "Tue 15 Nov 2022 15:53",
            "username": "Nigma",
            "content": "C.  WAF with ALB is the right option",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#171",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company provides an API to its users that automates inquiries for tax computations based on item prices. The company experiences a larger number of inquiries during the holiday season only that cause slower response times. A solutions architect needs to design a solution that is scalable and elastic.<br><br>What should the solutions architect do to accomplish this?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#171",
            "answers": [
              {
                "choice": "<p>A. Provide an API hosted on an Amazon EC2 instance. The EC2 instance performs the required computations when the API request is made.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Design a REST API using Amazon API Gateway that accepts the item names. API Gateway passes item names to AWS Lambda for tax computations.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Application Load Balancer that has two Amazon EC2 instances behind it. The EC2 instances will compute the tax on the received item names.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Design a REST API using Amazon API Gateway that connects with an API hosted on an Amazon EC2 instance. API Gateway accepts and passes the item names to the EC2 instance for tax computations.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 735045,
            "date": "Sun 04 Dec 2022 12:47",
            "username": "Gil80",
            "content": "B.  Lambda scales much better",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 729516,
            "date": "Mon 28 Nov 2022 19:22",
            "username": "Kapello10",
            "content": "B is the correct ans",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729225,
            "date": "Mon 28 Nov 2022 15:32",
            "username": "Gabs90",
            "content": "B is correct, lamba is a better choice",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 726819,
            "date": "Fri 25 Nov 2022 14:56",
            "username": "VISHNUKANDH",
            "content": "B is the right answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724478,
            "date": "Tue 22 Nov 2022 17:38",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720371,
            "date": "Thu 17 Nov 2022 10:41",
            "username": "BENICE",
            "content": "Seems like B is the correct option",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 719190,
            "date": "Wed 16 Nov 2022 00:53",
            "username": "goatbernard",
            "content": "Lambda",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 718904,
            "date": "Tue 15 Nov 2022 16:22",
            "username": "sdasdawa",
            "content": "https://www.examtopics.com/discussions/amazon/view/35849-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 718892,
            "date": "Tue 15 Nov 2022 16:08",
            "username": "Ohnet",
            "content": "It should be B,Lambda server-less is scalable and elastic than EC2 api gateway solution",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 718885,
            "date": "Tue 15 Nov 2022 15:56",
            "username": "Nigma",
            "content": "B.  Lambda serverless is scalable and elastic than EC2 api gateway solution",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#172",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect is creating a new Amazon CloudFront distribution for an application. Some of the information submitted by users is sensitive. The application uses HTTPS but needs another layer of security. The sensitive information should.be protected throughout the entire application stack, and access to the information should be restricted to certain applications.<br><br>Which action should the solutions architect take?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#172",
            "answers": [
              {
                "choice": "<p>A. Configure a CloudFront signed URL.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure a CloudFront signed cookie.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure a CloudFront field-level encryption profile.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure CloudFront and set the Origin Protocol Policy setting to HTTPS Only for the Viewer Protocol Policy.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724479,
            "date": "Tue 22 Nov 2022 17:38",
            "username": "Wpcorgan",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724130,
            "date": "Tue 22 Nov 2022 07:52",
            "username": "Bobbybash",
            "content": "CCCCCCCCC<br>Field-level encryption allows you to enable your users to securely upload sensitive information to your web servers. The sensitive information provided by your users is encrypted at the edge, close to the user, and remains encrypted throughout your entire application stack. This encryption ensures that only applications that need the data—and have the credentials to decrypt it—are able to do so.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 718906,
            "date": "Tue 15 Nov 2022 16:24",
            "username": "sdasdawa",
            "content": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 718895,
            "date": "Tue 15 Nov 2022 16:11",
            "username": "Ohnet",
            "content": "It should be C. https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 718889,
            "date": "Tue 15 Nov 2022 15:58",
            "username": "Nigma",
            "content": "C<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 718801,
            "date": "Tue 15 Nov 2022 14:55",
            "username": "goatbernard",
            "content": "CloudFront signed URLs provide a mechanism to control access to the content served through a distribution. Unlike the Origin Access Identity, it restricts access to which users can see the content. When you create a distribution, by default, it is open to everybody who knows the URL. But sometimes you want to limit that.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#173",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A gaming company hosts a browser-based application on AWS. The users of the application consume a large number of videos and images that are stored in Amazon S3. This content is the same for all users.<br><br>The application has increased in popularity, and millions of users worldwide accessing these media files. The company wants to provide the files to the users while reducing the load on the origin.<br><br>Which solution meets these requirements MOST cost-effectively?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#173",
            "answers": [
              {
                "choice": "<p>A. Deploy an AWS Global Accelerator accelerator in front of the web servers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy an Amazon CloudFront web distribution in front of the S3 bucket.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Deploy an Amazon ElastiCache for Redis instance in front of the web servers.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Deploy an Amazon ElastiCache for Memcached instance in front of the web servers.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 727252,
            "date": "Sat 26 Nov 2022 05:14",
            "username": "rewdboy",
            "content": "B is the correct answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 724481,
            "date": "Tue 22 Nov 2022 17:39",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 718899,
            "date": "Tue 15 Nov 2022 16:16",
            "username": "Nigma",
            "content": "B.  Cloud front is best for content delivery. Global Accelerator is best for non-HTTP (TCP/UDP) cases and supports HTTP cases as well but with static IP (elastic IP) or anycast IP address only.",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#174",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a multi-tier application that runs six front-end web servers in an Amazon EC2 Auto Scaling group in a single Availability Zone behind an Application Load Balancer (ALB). A solutions architect needs to modify the infrastructure to be highly available without modifying the application.<br><br>Which architecture should the solutions architect choose that provides high availability?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#174",
            "answers": [
              {
                "choice": "<p>A. Create an Auto Scaling group that uses three instances across each of two Regions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the Auto Scaling group to use three instances across each of two Availability Zones.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Auto Scaling template that can be used to quickly create more instances in another Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Change the ALB in front of the Amazon EC2 instances in a round-robin configuration to balance traffic to the web tier.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 726978,
            "date": "Fri 25 Nov 2022 18:20",
            "username": "mricee9",
            "content": "B is rightt",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 724484,
            "date": "Tue 22 Nov 2022 17:41",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721976,
            "date": "Sat 19 Nov 2022 13:08",
            "username": "xua81376",
            "content": "Bauto scaling i multiple AZ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 718902,
            "date": "Tue 15 Nov 2022 16:19",
            "username": "Nigma",
            "content": "B.  auto scaling groups can not span multi region",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#175",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An ecommerce company has an order-processing application that uses Amazon API Gateway and an AWS Lambda function. The application stores data in an Amazon Aurora PostgreSQL database. During a recent sales event, a sudden surge in customer orders occurred. Some customers experienced timeouts, and the application did not process the orders of those customers.<br><br>A solutions architect determined that the CPU utilization and memory utilization were high on the database because of a large number of open connections. The solutions architect needs to prevent the timeout errors while making the least possible changes to the application.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#175",
            "answers": [
              {
                "choice": "<p>A. Configure provisioned concurrency for the Lambda function. Modify the database to be a global database in multiple AWS Regions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon RDS Proxy to create a proxy for the database. Modify the Lambda function to use the RDS Proxy endpoint instead of the database endpoint.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a read replica for the database in a different AWS Region. Use query string parameters in API Gateway to route traffic to the read replica.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Migrate the data from Aurora PostgreSQL to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS). Modify the Lambda function to use the DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 723450,
            "date": "Mon 21 Nov 2022 13:10",
            "username": "handyplazt",
            "content": "Many applications, including those built on modern serverless architectures, can have a large number of open connections to the database server and may open and close database connections at a high rate, exhausting database memory and compute resources. Amazon RDS Proxy allows applications to pool and share connections established with the database, improving database efficiency and application scalability.<br>https://aws.amazon.com/id/rds/proxy/",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 719598,
            "date": "Wed 16 Nov 2022 13:08",
            "username": "babaxoxo",
            "content": "Issue related to opening many connections and the solution requires least code changes so B satisfies the conditions",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 724487,
            "date": "Tue 22 Nov 2022 17:43",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721974,
            "date": "Sat 19 Nov 2022 13:07",
            "username": "xua81376",
            "content": "B - Proxy to manage connections",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 718905,
            "date": "Tue 15 Nov 2022 16:24",
            "username": "Nigma",
            "content": "Correct B",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#176",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An application runs on Amazon EC2 instances in private subnets. The application needs to access an Amazon DynamoDB table.<br><br>What is the MOST secure way to access the table while ensuring that the traffic does not leave the AWS network?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#176",
            "answers": [
              {
                "choice": "<p>A. Use a VPC endpoint for DynamoDB. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use a NAT gateway in a public subnet.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a NAT instance in a private subnet.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the internet gateway attached to the VPC. <br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724490,
            "date": "Tue 22 Nov 2022 17:44",
            "username": "Wpcorgan",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721973,
            "date": "Sat 19 Nov 2022 13:06",
            "username": "xua81376",
            "content": "Sure A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720383,
            "date": "Thu 17 Nov 2022 11:09",
            "username": "ds0321",
            "content": "A - VPC endpoint",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 719276,
            "date": "Wed 16 Nov 2022 03:15",
            "username": "goatbernard",
            "content": "A - VPC endpoint",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 719145,
            "date": "Tue 15 Nov 2022 22:26",
            "username": "mabotega",
            "content": "VPC endpoints for service in private subnets<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 718912,
            "date": "Tue 15 Nov 2022 16:28",
            "username": "sdasdawa",
            "content": "https://www.examtopics.com/discussions/amazon/view/27700-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 718908,
            "date": "Tue 15 Nov 2022 16:25",
            "username": "Nigma",
            "content": "A for sure. https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 718903,
            "date": "Tue 15 Nov 2022 16:19",
            "username": "Ohnet",
            "content": "Its A. ",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#177",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An entertainment company is using Amazon DynamoDB to store media metadata. The application is read intensive and experiencing delays. The company does not have staff to handle additional operational overhead and needs to improve the performance efficiency of DynamoDB without reconfiguring the application.<br><br>What should a solutions architect recommend to meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#177",
            "answers": [
              {
                "choice": "<p>A. Use Amazon ElastiCache for Redis.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon DynamoDB Accelerator (DAX).<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Replicate data by using DynamoDB global tables.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon ElastiCache for Memcached with Auto Discovery enabled.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724491,
            "date": "Tue 22 Nov 2022 17:45",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719277,
            "date": "Wed 16 Nov 2022 03:17",
            "username": "goatbernard",
            "content": "DAX is the cache for this",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 719220,
            "date": "Wed 16 Nov 2022 01:52",
            "username": "nhlegend",
            "content": "B is correct, DAX provides caching + no changes",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#178",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company’s infrastructure consists of Amazon EC2 instances and an Amazon RDS DB instance in a single AWS Region. The company wants to back up its data in a separate Region.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#178",
            "answers": [
              {
                "choice": "<p>A. Use AWS Backup to copy EC2 backups and RDS backups to the separate Region.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon Data Lifecycle Manager (Amazon DLM) to copy EC2 backups and RDS backups to the separate Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create Amazon Machine Images (AMIs) of the EC2 instances. Copy the AMIs to the separate Region. Create a read replica for the RDS DB instance in the separate Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create Amazon Elastic Block Store (Amazon EBS) snapshots. Copy the EBS snapshots to the separate Region. Create RDS snapshots. Export the RDS snapshots to Amazon S3. Configure S3 Cross-Region Replication (CRR) to the separate Region.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 719599,
            "date": "Wed 16 Nov 2022 13:11",
            "username": "babaxoxo",
            "content": "Ans A with least operational overhead",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 719573,
            "date": "Wed 16 Nov 2022 12:31",
            "username": "rjam",
            "content": "AWS Backup supports Supports cross-region backups",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 719572,
            "date": "Wed 16 Nov 2022 12:29",
            "username": "rjamrjam",
            "content": "Option A<br>Aws back up supports , EC2, RDSAWS Backup suports Supports cross-region backups",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 719574,
            "date": "Wed 16 Nov 2022 12:31",
            "username": "rjam",
            "content": "AWS Backup suports Supports cross-region backups",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#179",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect needs to securely store a database user name and password that an application uses to access an Amazon RDS DB instance. The application that accesses the database runs on an Amazon EC2 instance. The solutions architect wants to create a secure parameter in AWS Systems Manager Parameter Store.<br><br>What should the solutions architect do to meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#179",
            "answers": [
              {
                "choice": "<p>A. Create an IAM role that has read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM role to the EC2 instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an IAM policy that allows read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM policy to the EC2 instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an IAM trust relationship between the Parameter Store parameter and the EC2 instance. Specify Amazon RDS as a principal in the trust policy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an IAM trust relationship between the DB instance and the EC2 instance. Specify Systems Manager as a principal in the trust policy.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 728942,
            "date": "Mon 28 Nov 2022 10:47",
            "username": "owenrooney11owenrooney11owenrooney11",
            "content": "i think policyAccess to Parameter Store is enabled by IAM policies and supports resource level permissions for access. An IAM policy that grants permissions to specific parameters or a namespace can be used to limit access to these parameters. CloudTrail logs, if enabled for the service, record any attempt to access a parameter.https://aws.amazon.com/blogs/compute/managing-secrets-for-amazon-ecs-applications-using-parameter-store-and-iam-roles-for-tasks/",
            "upvote_count": "111",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 728945,
            "date": "Mon 28 Nov 2022 10:48",
            "username": "owenrooney11",
            "content": "Access to Parameter Store is enabled by IAM policies and supports resource level permissions for access. An IAM policy that grants permissions to specific parameters or a namespace can be used to limit access to these parameters. CloudTrail logs, if enabled for the service, record any attempt to access a parameter.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 728943,
            "date": "Mon 28 Nov 2022 10:47",
            "username": "owenrooney11",
            "content": "https://aws.amazon.com/blogs/compute/managing-secrets-for-amazon-ecs-applications-using-parameter-store-and-iam-roles-for-tasks/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724054,
            "date": "Tue 22 Nov 2022 03:50",
            "username": "EKA_CloudGod",
            "content": "A.  Attach IAM role to EC2 Instance<br>https://aws.amazon.com/blogs/security/digital-signing-asymmetric-keys-aws-kms/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 719875,
            "date": "Wed 16 Nov 2022 18:45",
            "username": "sdasdawa",
            "content": "Agree with A,IAM role is for services (EC2 for example)<br>IAM policy is more for users and groups",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 719608,
            "date": "Wed 16 Nov 2022 13:26",
            "username": "babaxoxo",
            "content": "Attach IAM role to EC2 Instance profile",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 719280,
            "date": "Wed 16 Nov 2022 03:22",
            "username": "goatbernard",
            "content": "IAM policy",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#180",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is designing a cloud communications platform that is driven by APIs. The application is hosted on Amazon EC2 instances behind a Network Load Balancer (NLB). The company uses Amazon API Gateway to provide external users with access to the application through APIs. The company wants to protect the platform against web exploits like SQL injection and also wants to detect and mitigate large, sophisticated DDoS attacks.<br><br>Which combination of solutions provides the MOST protection? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#180",
            "answers": [
              {
                "choice": "<p>A. Use AWS WAF to protect the NLB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS Shield Advanced with the NLB. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS WAF to protect Amazon API Gateway.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon GuardDuty with AWS Shield Standard<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use AWS Shield Standard with Amazon API Gateway.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 719631,
            "date": "Wed 16 Nov 2022 13:46",
            "username": "babaxoxo",
            "content": "Shield - Load Balancer, CF, Route53<br>AWF - CF, ALB, API Gateway",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 724494,
            "date": "Tue 22 Nov 2022 17:50",
            "username": "Wpcorgan",
            "content": "B and C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720494,
            "date": "Thu 17 Nov 2022 14:48",
            "username": "BENICE",
            "content": "B and C<br>\\\"AWS Shield Advanced\\\" for \\\"sophisticated DDoS attacks\\\"<br>\\\"AWS WAF\\\"for \\\"NLB",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 719611,
            "date": "Wed 16 Nov 2022 13:27",
            "username": "Nigma",
            "content": "B and C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719582,
            "date": "Wed 16 Nov 2022 12:45",
            "username": "rjam",
            "content": "AWS Shield Advanced- DDos attacks<br>AWS WAF to protect Amazon API Gateway, because WAF sits before the API Gateway and then comes NLB. ",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BC"
          }
        ]
      },
      {
        "question_id": "#181",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a legacy data processing application that runs on Amazon EC2 instances. Data is processed sequentially, but the order of results does not matter. The application uses a monolithic architecture. The only way that the company can scale the application to meet increased demand is to increase the size of the instances.<br><br>The company’s developers have decided to rewrite the application to use a microservices architecture on Amazon Elastic Container Service (Amazon ECS).<br><br>What should a solutions architect recommend for communication between the microservices?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#181",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon Simple Queue Service (Amazon SQS) queue. Add code to the data producers, and send data to the queue. Add code to the data consumers to process data from the queue.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon Simple Notification Service (Amazon SNS) topic. Add code to the data producers, and publish notifications to the topic. Add code to the data consumers to subscribe to the topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS Lambda function to pass messages. Add code to the data producers to call the Lambda function with a data object. Add code to the data consumers to receive a data object that is passed from the Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon DynamoDB table. Enable DynamoDB Streams. Add code to the data producers to insert data into the table. Add code to the data consumers to use the DynamoDB Streams API to detect new table entries and retrieve the data.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 721986,
            "date": "Sat 19 Nov 2022 13:25",
            "username": "xua81376",
            "content": "We needdecoupling so ok to use SQS",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720502,
            "date": "Thu 17 Nov 2022 14:57",
            "username": "BENICEEKA_CloudGod",
            "content": "Can someone explain it bit more? Not able to understand it.As monolithic systems become too large to deal with, many enterprises are drawn to breaking them down into the microservices architectural style by means of decoupling. Amazon Simple Queue Service (Amazon SQS) is a fully managed message queuing service that makes it easy to decouple and scale microservices, distributed systems, and serverless applications",
            "upvote_count": "16",
            "selected_answers": ""
          },
          {
            "id": 724066,
            "date": "Tue 22 Nov 2022 04:08",
            "username": "EKA_CloudGod",
            "content": "As monolithic systems become too large to deal with, many enterprises are drawn to breaking them down into the microservices architectural style by means of decoupling. Amazon Simple Queue Service (Amazon SQS) is a fully managed message queuing service that makes it easy to decouple and scale microservices, distributed systems, and serverless applications",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 720235,
            "date": "Thu 17 Nov 2022 06:34",
            "username": "taer",
            "content": "Answer is A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 719645,
            "date": "Wed 16 Nov 2022 13:54",
            "username": "Nigma",
            "content": "SQS to decouple.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#182",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate its MySQL database from on premises to AWS. The company recently experienced a database outage that significantly impacted the business. To ensure this does not happen again, the company wants a reliable database solution on AWS that minimizes data loss and stores every transaction on at least two nodes.<br><br>Which solution meets these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#182",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon RDS DB instance with synchronous replication to three nodes in three Availability Zones.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon RDS MySQL DB instance with Multi-AZ functionality enabled to synchronously replicate the data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon RDS MySQL DB instance and then create a read replica in a separate AWS Region that synchronously replicates the data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon EC2 instance with a MySQL engine installed that triggers an AWS Lambda function to synchronously replicate the data to an Amazon RDS MySQL DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724498,
            "date": "Tue 22 Nov 2022 17:53",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724069,
            "date": "Tue 22 Nov 2022 04:13",
            "username": "EKA_CloudGod",
            "content": "Option B is the correct answer:<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 719650,
            "date": "Wed 16 Nov 2022 13:57",
            "username": "Nigma",
            "content": "B is the answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 719590,
            "date": "Wed 16 Nov 2022 12:57",
            "username": "rjam",
            "content": "Amazon RDS MySQL DB instance with Multi-AZ functionality enabled to synchronously replicate the data<br> Standby DB in Multi-AZ- synchronous replication<br><br>Read Replica always asynchronous. so option C is ignored.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#183",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building a new dynamic ordering website. The company wants to minimize server maintenance and patching. The website must be highly available and must scale read and write capacity as quickly as possible to meet changes in user demand.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#183",
            "answers": [
              {
                "choice": "<p>A. Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon DynamoDB with on-demand capacity for the database. Configure Amazon CloudFront to deliver the website content.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon Aurora with Aurora Auto Scaling for the database. Configure Amazon CloudFront to deliver the website content.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon DynamoDB with provisioned write capacity for the database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon Aurora with Aurora Auto Scaling for the database.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 719877,
            "date": "Wed 16 Nov 2022 18:48",
            "username": "sdasdawa",
            "content": "Agree with A, DynamoDB is perfect for storing ordering data (key-values)",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725099,
            "date": "Wed 23 Nov 2022 13:20",
            "username": "romko",
            "content": "A - is correct, because Dynamodb on-demand scales write and read capacity<br>B - Aurora auto scaling scales only read replicas",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725048,
            "date": "Wed 23 Nov 2022 11:15",
            "username": "mabotega",
            "content": "On-demand mode is a good option if any of the following are true:<br><br>You create new tables with unknown workloads.<br><br>You have unpredictable application traffic.<br><br>You prefer the ease of paying for only what you use.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 724499,
            "date": "Tue 22 Nov 2022 17:55",
            "username": "Wpcorgan",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 722500,
            "date": "Sun 20 Nov 2022 10:23",
            "username": "ManlikelekeBobbybash",
            "content": "please is this dump enough to pass the exam?I HOPE SO",
            "upvote_count": "42",
            "selected_answers": ""
          },
          {
            "id": 724173,
            "date": "Tue 22 Nov 2022 09:26",
            "username": "Bobbybash",
            "content": "I HOPE SO",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 720943,
            "date": "Thu 17 Nov 2022 23:54",
            "username": "Az900500",
            "content": "Selected Answer A<br><br>\\\"Read write capacity = DynamoDb\\\" Read Replica mostly Aurora ..@nhlegend yes DynampDB has 400KB maximum but in the answer neither Dynamo or Aurora was used as primary storage",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 719651,
            "date": "Wed 16 Nov 2022 14:00",
            "username": "Nigma",
            "content": "A is the answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 719594,
            "date": "Wed 16 Nov 2022 13:01",
            "username": "rjamrjamAamee",
            "content": "option B . Aurora is better than DynamoDBamazon aurora - highly available, self-healing, auto-scalingQuestion states \\\"must scale Read and Write Capacity\\\" which refers to Dynamo, whereas, Aurora is good for scaling read replicas.",
            "upvote_count": "112",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 719596,
            "date": "Wed 16 Nov 2022 13:03",
            "username": "rjamAamee",
            "content": "amazon aurora - highly available, self-healing, auto-scalingQuestion states \\\"must scale Read and Write Capacity\\\" which refers to Dynamo, whereas, Aurora is good for scaling read replicas.",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 734052,
            "date": "Fri 02 Dec 2022 21:36",
            "username": "Aamee",
            "content": "Question states \\\"must scale Read and Write Capacity\\\" which refers to Dynamo, whereas, Aurora is good for scaling read replicas.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 719177,
            "date": "Wed 16 Nov 2022 00:01",
            "username": "nhlegendnhlegend",
            "content": "B is correct, DynampDB has 400KB maximumtypo, I mean A is correct",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 719178,
            "date": "Wed 16 Nov 2022 00:03",
            "username": "nhlegend",
            "content": "typo, I mean A is correct",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#184",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an AWS account used for software engineering. The AWS account has access to the company’s on-premises data center through a pair of AWS Direct Connect connections. All non-VPC traffic routes to the virtual private gateway.<br><br>A development team recently created an AWS Lambda function through the console. The development team needs to allow the function to access a database that runs in a private subnet in the company’s data center.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#184",
            "answers": [
              {
                "choice": "<p>A. Configure the Lambda function to run in the VPC with the appropriate security group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set up a VPN connection from AWS to the data center. Route the traffic from the Lambda function through the VPN.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Update the route tables in the VPC to allow the Lambda function to access the on-premises data center through Direct Connect.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Elastic IP address. Configure the Lambda function to send traffic through the Elastic IP address without an elastic network interface.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 732947,
            "date": "Thu 01 Dec 2022 19:35",
            "username": "Gil80",
            "content": "To configure a VPC for an existing function:<br><br>1. Open the Functions page of the Lambda console.<br>2. Choose a function.<br>3. Choose Configuration and then choose VPC. <br>4. Under VPC, choose Edit.<br>5. Choose a VPC, subnets, and security groups. <-- **That's why I believe the answer is A**.<br><br>Note:<br>If your function needs internet access, use network address translation (NAT). Connecting a function to a public subnet doesn't give it internet access or a public IP address.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 726231,
            "date": "Thu 24 Nov 2022 22:51",
            "username": "Newptone",
            "content": "When you connect a function to a VPC, Lambda assigns your function to a Hyperplane ENI (elastic network interface) for each subnet in your function's VPC configuration. Lambda creates a Hyperplane ENI the first time a unique subnet and security group combination is defined for a VPC-enabled function in an account.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 725111,
            "date": "Wed 23 Nov 2022 13:38",
            "username": "romko",
            "content": "lambda by default runs out of vpc, so without A lambda is out of vpc.<br><br>C is incorrect, because don't matter how you change route tables in VPC it doesn't make sense while lambda is out of vpc.<br><br>So the correct answer is A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 724500,
            "date": "Tue 22 Nov 2022 17:56",
            "username": "Wpcorgan",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720236,
            "date": "Thu 17 Nov 2022 06:35",
            "username": "taer",
            "content": "Answer is C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 720136,
            "date": "Thu 17 Nov 2022 03:05",
            "username": "mricee9",
            "content": "C<br>https://www.examtopics.com/discussions/amazon/view/68069-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 719075,
            "date": "Tue 15 Nov 2022 20:46",
            "username": "Ohnet",
            "content": "Its A. Deploy the Lambda Function in the VPC with a security group.<br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html#vpc-managing-eni",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 718922,
            "date": "Tue 15 Nov 2022 16:41",
            "username": "sdasdawa",
            "content": "1st section in<br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html#vpc-managing-eni",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#185",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs an application using Amazon ECS. The application creates resized versions of an original image and then makes Amazon S3 API calls to store the resized images in Amazon S3.<br><br>How can a solutions architect ensure that the application has permission to access Amazon S3?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#185",
            "answers": [
              {
                "choice": "<p>A. Update the S3 role in AWS IAM to allow read/write access from Amazon ECS, and then relaunch the container.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task definition.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a security group that allows access from Amazon ECS to Amazon S3, and update the launch configuration used by the ECS cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an IAM user with S3 permissions, and then relaunch the Amazon EC2 instances for the ECS cluster while logged in as this account.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724502,
            "date": "Tue 22 Nov 2022 17:57",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720230,
            "date": "Thu 17 Nov 2022 06:20",
            "username": "taer",
            "content": "The answer is B. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 719665,
            "date": "Wed 16 Nov 2022 14:10",
            "username": "Nigma",
            "content": "B is the answer",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#186",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a Windows-based application that must be migrated to AWS. The application requires the use of a shared Windows file system attached to multiple Amazon EC2 Windows instances that are deployed across multiple Availability Zone:<br><br>What should a solutions architect do to meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#186",
            "answers": [
              {
                "choice": "<p>A. Configure AWS Storage Gateway in volume gateway mode. Mount the volume to each Windows instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure Amazon FSx for Windows File Server. Mount the Amazon FSx file system to each Windows instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure a file system by using Amazon Elastic File System (Amazon EFS). Mount the EFS file system to each Windows instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure an Amazon Elastic Block Store (Amazon EBS) volume with the required size. Attach each EC2 instance to the volume. Mount the file system within the volume to each Windows instance.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 724503,
            "date": "Tue 22 Nov 2022 17:57",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 722600,
            "date": "Sun 20 Nov 2022 13:39",
            "username": "xua81376",
            "content": "B FSx for windows",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721242,
            "date": "Fri 18 Nov 2022 12:10",
            "username": "BENICE",
            "content": "B is correct option",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719713,
            "date": "Wed 16 Nov 2022 15:04",
            "username": "rjam",
            "content": "Amazon FSx for Windows File Server",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 719669,
            "date": "Wed 16 Nov 2022 14:14",
            "username": "Nigma",
            "content": "Correct is B<br>FSx --> shared Windows file system（SMB）<br>EFS --> Linux NFS",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#187",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is developing an ecommerce application that will consist of a load-balanced front end, a container-based application, and a relational database. A solutions architect needs to create a highly available solution that operates with as little manual intervention as possible.<br><br>Which solutions meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#187",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon RDS DB instance in Multi-AZ mode.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon RDS DB instance and one or more replicas in another Availability Zone.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon EC2 instance-based Docker cluster to handle the dynamic application load.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon Elastic Container Service (Amazon ECS) cluster with a Fargate launch type to handle the dynamic application load.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type to handle the dynamic application load.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 727703,
            "date": "Sat 26 Nov 2022 18:07",
            "username": "Gabs90",
            "content": "A and D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AD"
          },
          {
            "id": 726208,
            "date": "Thu 24 Nov 2022 22:02",
            "username": "Wpcorgan",
            "content": "A and D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721246,
            "date": "Fri 18 Nov 2022 12:29",
            "username": "BENICE",
            "content": "A and D are the options",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720022,
            "date": "Wed 16 Nov 2022 22:29",
            "username": "Danny23132412141_2312",
            "content": "AD for sure<br>Link: https://www.examtopics.com/discussions/amazon/view/43729-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#188",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company uses Amazon S3 as its data lake. The company has a new partner that must use SFTP to upload data files. A solutions architect needs to implement a highly available SFTP solution that minimizes operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#188",
            "answers": [
              {
                "choice": "<p>A. Use AWS Transfer Family to configure an SFTP-enabled server with a publicly accessible endpoint. Choose the S3 data lake as the destination.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon S3 File Gateway as an SFTP server. Expose the S3 File Gateway endpoint URL to the new partner. Share the S3 File Gateway endpoint with the new partner.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Launch an Amazon EC2 instance in a private subnet in a VPInstruct the new partner to upload files to the EC2 instance by using a VPN. Run a cron job script, on the EC2 instance to upload files to the S3 data lake.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Launch Amazon EC2 instances in a private subnet in a VPC.  Place a Network Load Balancer (NLB) in front of the EC2 instances. Create an SFTP listener port for the NLB.  Share the NLB hostname with the new partner. Run a cron job script on the EC2 instances to upload files to the S3 data lake.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 731968,
            "date": "Wed 30 Nov 2022 21:47",
            "username": "mj98",
            "content": "AWS Transfer Family - SFTP",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 724203,
            "date": "Tue 22 Nov 2022 10:10",
            "username": "Bobbybash",
            "content": "AAAAAAAA<br>AWS Transfer for SFTP, a fully-managed, highly-available SFTP service. You simply create a server, set up user accounts, and associate the server with one or more Amazon Simple Storage Service (Amazon S3) buckets",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 724202,
            "date": "Tue 22 Nov 2022 10:09",
            "username": "Bobbybash",
            "content": "AAAAAAAA<br>AWS Transfer for SFTP, a fully-managed, highly-available SFTP service. You simply create a server, set up user accounts, and associate the server with one or more Amazon Simple Storage Service (Amazon S3) buckets.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719912,
            "date": "Wed 16 Nov 2022 19:39",
            "username": "mabotega",
            "content": "A is the answer - https://docs.aws.amazon.com/transfer/latest/userguide/create-server-sftp.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 719672,
            "date": "Wed 16 Nov 2022 14:17",
            "username": "Nigma",
            "content": "A is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719576,
            "date": "Wed 16 Nov 2022 12:36",
            "username": "LeGloupier",
            "content": "answer is A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 719153,
            "date": "Tue 15 Nov 2022 22:49",
            "username": "mabotega",
            "content": "https://www.examtopics.com/discussions/amazon/view/83197-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#189",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to store contract documents. A contract lasts for 5 years. During the 5-year period, the company must ensure that the documents cannot be overwritten or deleted. The company needs to encrypt the documents at rest and rotate the encryption keys automatically every year.<br><br>Which combination of steps should a solutions architect take to meet these requirements with the LEAST operational overhead? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#189",
            "answers": [
              {
                "choice": "<p>A. Store the documents in Amazon S3. Use S3 Object Lock in governance mode.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Store the documents in Amazon S3. Use S3 Object Lock in compliance mode.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure key rotation.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use server-side encryption with AWS Key Management Service (AWS KMS) customer managed keys. Configure key rotation.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use server-side encryption with AWS Key Management Service (AWS KMS) customer provided (imported) keys. Configure key rotation.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 729062,
            "date": "Mon 28 Nov 2022 13:08",
            "username": "owenrooney11",
            "content": "Originally answered B and C due to least operational overhead. after research its bugging me that the s3 key rotation is determined based on AWS master Key rotation which cannot guarantee the key is rotated with in a 365 day period. stated as \\\"varies\\\" in the documentation. also its impossible to configure this in the console. <br>KMS-C is a tick box in the console to turn on annual key rotation but requires more operational overhead than SSE-S3. <br>C - will not guarantee the questions objectives but requires little overhead.<br>D - will guarantee the questions objective with more overhead.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 727622,
            "date": "Sat 26 Nov 2022 16:44",
            "username": "Cizzla7049leonnnn",
            "content": "I thought it was B and C but after some research, i believed B and D but after more research and recent changes by AWS (may 2022), it is B and C.  It is D because the question says key must be rotated yearly. So you have to use CMK and configure key rotation. It automatically rotates yearly, while S3 managed keys rotate every 3 years.<br><br>https://stackoverflow.com/questions/63478626/which-aws-s3-encryption-technique-provides-rotation-policy-for-encryption-keys<br><br>After further research it is B and . AWS Managed keys changed from 3yrs to 1yr rotation.<br>https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keysGot confused by the URLs you mentioned.<br>Here's the comparison of CMK, KMS and AWS owned keys.<br>https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-mgmt<br>According to this, I think answer is B and D. ",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 729265,
            "date": "Mon 28 Nov 2022 16:20",
            "username": "leonnnn",
            "content": "Got confused by the URLs you mentioned.<br>Here's the comparison of CMK, KMS and AWS owned keys.<br>https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-mgmt<br>According to this, I think answer is B and D. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 727083,
            "date": "Fri 25 Nov 2022 22:20",
            "username": "peneloco",
            "content": "It’s B and C.  C because the question does say LEAST operational overhead, customer managed anything equals more overhead.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 726019,
            "date": "Thu 24 Nov 2022 16:38",
            "username": "Gil80",
            "content": "why not B? SSE-S3:<br>\t• Encryption using keys handled & managed by Amazon S3<br>\t• Object is encrypted server side<br>\t• AES-256 encryption type<br>\t• Must set header: \\\"x-amz-server-side-encryption\\\":\\\"AES256\\\"<br>Can someone please explain?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 721266,
            "date": "Fri 18 Nov 2022 13:08",
            "username": "BENICE",
            "content": "B and D",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 720425,
            "date": "Thu 17 Nov 2022 12:46",
            "username": "ds0321",
            "content": "B and D",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 719684,
            "date": "Wed 16 Nov 2022 14:32",
            "username": "Nigma",
            "content": "B and D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719534,
            "date": "Wed 16 Nov 2022 11:12",
            "username": "LeGloupier",
            "content": "should be BD<br>C could have been fine, but key rotation is activate per default on SSE-S3, and no way to deactivate it if I am not wrong",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 719516,
            "date": "Wed 16 Nov 2022 10:28",
            "username": "taer",
            "content": "BD<br>https://www.examtopics.com/discussions/amazon/view/81524-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BD"
          },
          {
            "id": 719304,
            "date": "Wed 16 Nov 2022 04:41",
            "username": "yuantongxue",
            "content": "Lock + Key",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 718925,
            "date": "Tue 15 Nov 2022 16:47",
            "username": "sdasdawa",
            "content": "B due to compliance mode no user (including root) can delete files<br>C due to SSE-S3 automatic key rotation",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BC"
          }
        ]
      },
      {
        "question_id": "#190",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a web application that is based on Java and PHP. The company plans to move the application from on premises to AWS. The company needs the ability to test new site features frequently. The company also needs a highly available and managed solution that requires minimum operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#190",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon S3 bucket. Enable static web hosting on the S3 bucket. Upload the static content to the S3 bucket. Use AWS Lambda to process all dynamic content.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy the web application to an AWS Elastic Beanstalk environment. Use URL swapping to switch between multiple Elastic Beanstalk environments for feature testing.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Deploy the web application to Amazon EC2 instances that are configured with Java and PHP. Use Auto Scaling groups and an Application Load Balancer to manage the website’s availability.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Containerize the web application. Deploy the web application to Amazon EC2 instances. Use the AWS Load Balancer Controller to dynamically route traffic between containers that contain the new site features for testing.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 731973,
            "date": "Wed 30 Nov 2022 21:50",
            "username": "mj98",
            "content": "Answer B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 731932,
            "date": "Wed 30 Nov 2022 20:56",
            "username": "Studen15",
            "content": "for containers, you need source image. Beanstalk is configurable runtime environment - you can choose stack (java, php, ..) and its version. Much more easier to deploy and use compared to containers.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725131,
            "date": "Wed 23 Nov 2022 13:55",
            "username": "romkoCizzla7049romkoAamee",
            "content": "wow, so many votes for B. <br><br>B will be correct if application requires one of runtime java or php, elastic Beanstallk allows to specify only one runtime. In requirement is \\\"web application that is based on Java and PHP\\\"<br>so B is out.<br><br>D allows to setup own container and there you may install as many as system needsD can also be done by Elastic Beanstalk. Answer is B, as it using beanstalk removes the overhead<br><br>AWS Elastic Beanstalk is the fastest way to get web applications up and running on AWS. You can simply upload your application code, and the service automatically handles details such as resource provisioning, load balancing, auto scaling, and monitoring. Elastic Beanstalk is ideal if you have a PHP, Java, Python, Ruby, Node.js, .NET, Go, or Docker web application. Elastic Beanstalk uses core AWS services such as Amazon Elastic Compute Cloud (EC2), Amazon Elastic Container Service (ECS), AWS Auto Scaling, and Elastic Load Balancing (ELB) to easily support applications that need to scale to serve millions of users.But Elastic Beanstalk configs only support one runtime at once, so you cannot automatically have Java and PHP,unless you go to EC2 directly and install another runtime.Don't get your point here... how can you justify Option D for a 'High Available' and 'managed' solution when you're containorizing your apps and deploying your containers on EC2s w/o any Auto-scaling groups involved??...the need in the question is about removing the overhead of managing different layers of computation involved.",
            "upvote_count": "1311",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 727630,
            "date": "Sat 26 Nov 2022 16:50",
            "username": "Cizzla7049romkoAamee",
            "content": "D can also be done by Elastic Beanstalk. Answer is B, as it using beanstalk removes the overhead<br><br>AWS Elastic Beanstalk is the fastest way to get web applications up and running on AWS. You can simply upload your application code, and the service automatically handles details such as resource provisioning, load balancing, auto scaling, and monitoring. Elastic Beanstalk is ideal if you have a PHP, Java, Python, Ruby, Node.js, .NET, Go, or Docker web application. Elastic Beanstalk uses core AWS services such as Amazon Elastic Compute Cloud (EC2), Amazon Elastic Container Service (ECS), AWS Auto Scaling, and Elastic Load Balancing (ELB) to easily support applications that need to scale to serve millions of users.But Elastic Beanstalk configs only support one runtime at once, so you cannot automatically have Java and PHP,unless you go to EC2 directly and install another runtime.Don't get your point here... how can you justify Option D for a 'High Available' and 'managed' solution when you're containorizing your apps and deploying your containers on EC2s w/o any Auto-scaling groups involved??...the need in the question is about removing the overhead of managing different layers of computation involved.",
            "upvote_count": "311",
            "selected_answers": ""
          },
          {
            "id": 731525,
            "date": "Wed 30 Nov 2022 14:34",
            "username": "romkoAamee",
            "content": "But Elastic Beanstalk configs only support one runtime at once, so you cannot automatically have Java and PHP,unless you go to EC2 directly and install another runtime.Don't get your point here... how can you justify Option D for a 'High Available' and 'managed' solution when you're containorizing your apps and deploying your containers on EC2s w/o any Auto-scaling groups involved??...the need in the question is about removing the overhead of managing different layers of computation involved.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 734162,
            "date": "Sat 03 Dec 2022 03:14",
            "username": "Aamee",
            "content": "Don't get your point here... how can you justify Option D for a 'High Available' and 'managed' solution when you're containorizing your apps and deploying your containers on EC2s w/o any Auto-scaling groups involved??...the need in the question is about removing the overhead of managing different layers of computation involved.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 724508,
            "date": "Tue 22 Nov 2022 18:03",
            "username": "Wpcorgan",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719731,
            "date": "Wed 16 Nov 2022 15:23",
            "username": "rjam",
            "content": "Swapping URL : ElasticBeanStalk<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 719687,
            "date": "Wed 16 Nov 2022 14:34",
            "username": "Nigma",
            "content": "B is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719544,
            "date": "Wed 16 Nov 2022 11:25",
            "username": "LeGloupier",
            "content": "isn't it B ?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 719518,
            "date": "Wed 16 Nov 2022 10:29",
            "username": "taer",
            "content": "B<br>https://www.examtopics.com/discussions/amazon/view/81534-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 718930,
            "date": "Tue 15 Nov 2022 16:53",
            "username": "sdasdawa",
            "content": "Elastic Beanstalk seems to be perfect for this",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#191",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an ordering application that stores customer information in Amazon RDS for MySQL. During regular business hours, employees run one-time queries for reporting purposes. Timeouts are occurring during order processing because the reporting queries are taking a long time to run. The company needs to eliminate the timeouts without preventing employees from performing queries.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#191",
            "answers": [
              {
                "choice": "<p>A. Create a read replica. Move reporting queries to the read replica.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a read replica. Distribute the ordering application to the primary DB instance and the read replica.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Migrate the ordering application to Amazon DynamoDB with on-demand capacity.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Schedule the reporting queries for non-peak hours.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 729532,
            "date": "Mon 28 Nov 2022 19:54",
            "username": "Kapello10",
            "content": "A is the correct ans",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729370,
            "date": "Mon 28 Nov 2022 17:20",
            "username": "Gabs90",
            "content": "It's A from an old question: https://www.examtopics.com/discussions/amazon/view/81535-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729316,
            "date": "Mon 28 Nov 2022 16:26",
            "username": "leonnnn",
            "content": "Timeout occurs because of the query. So use read replica for query is correct answer.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729201,
            "date": "Mon 28 Nov 2022 15:10",
            "username": "JayanKuruwita",
            "content": "It should be read load to read replica",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729179,
            "date": "Mon 28 Nov 2022 14:53",
            "username": "Nigma",
            "content": "Answer : A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#192",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A hospital wants to create digital copies for its large collection of historical written records. The hospital will continue to add hundreds of new documents each day. The hospital’s data team will scan the documents and will upload the documents to the AWS Cloud.<br><br>A solutions architect must implement a solution to analyze the documents, extract the medical information, and store the documents so that an application can run SQL queries on the data. The solution must maximize scalability and operational efficiency.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#192",
            "answers": [
              {
                "choice": "<p>A. Write the document information to an Amazon EC2 instance that runs a MySQL database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Write the document information to an Amazon S3 bucket. Use Amazon Athena to query the data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Auto Scaling group of Amazon EC2 instances to run a custom application that processes the scanned files and extracts the medical information.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Rekognition to convert the documents to raw text. Use Amazon Transcribe Medical to detect and extract relevant medical information from the text.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Textract to convert the documents to raw text. Use Amazon Comprehend Medical to detect and extract relevant medical information from the text.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 731978,
            "date": "Wed 30 Nov 2022 21:54",
            "username": "mj98",
            "content": "answer BE",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 730983,
            "date": "Wed 30 Nov 2022 02:25",
            "username": "TonyghostR05",
            "content": "BE of course",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 730488,
            "date": "Tue 29 Nov 2022 15:11",
            "username": "Ekie",
            "content": "Answer: BE",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 730487,
            "date": "Tue 29 Nov 2022 15:11",
            "username": "vqhuy",
            "content": "B and E for Sure",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 730060,
            "date": "Tue 29 Nov 2022 08:43",
            "username": "shankarece",
            "content": "B,E is correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 729908,
            "date": "Tue 29 Nov 2022 05:48",
            "username": "KADSM",
            "content": "B and E are correct. Textract to extract text from files. Rekognition can also be used for text detection but after Rekognition - it's mentioned that Transcribe is used. Transcribe is used for Speech to Text. So that option D may not be valid.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 729674,
            "date": "Mon 28 Nov 2022 23:41",
            "username": "TMM369",
            "content": "B - Store S3 Bucket<br>E - Amazon Textstract",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 729534,
            "date": "Mon 28 Nov 2022 19:58",
            "username": "Kapello10",
            "content": "B and E is the correct ans<br><br>B > Store documents on S3 an use Athena to query ><br>E > Use Textract to extract text from files and not Rekognition. N.B Rekognition is for image identififcation",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 729319,
            "date": "Mon 28 Nov 2022 16:29",
            "username": "leonnnn",
            "content": "B E meets the requirements.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: BE"
          }
        ]
      },
      {
        "question_id": "#193",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a batch application on Amazon EC2 instances. The application consists of a backend with multiple Amazon RDS databases. The application is causing a high number of reads on the databases. A solutions architect must reduce the number of database reads while ensuring high availability.<br><br>What should the solutions architect do to meet this requirement?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#193",
            "answers": [
              {
                "choice": "<p>A. Add Amazon RDS read replicas.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon ElastiCache for Redis.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon Route 53 DNS caching<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon ElastiCache for Memcached.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 729329,
            "date": "Mon 28 Nov 2022 16:34",
            "username": "leonnnn",
            "content": "Use ElastiCache to reduce reading and choose redis to ensure high availability.",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 733639,
            "date": "Fri 02 Dec 2022 11:35",
            "username": "drake2020",
            "content": "Ans is A because : Amazon RDS Read Replicas provide enhanced performance and durability for Amazon RDS database (DB) instances. They make it easy to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732216,
            "date": "Thu 01 Dec 2022 04:42",
            "username": "dcyberguy",
            "content": "The answer is A<br>Amazon RDS Read Replica provides enhance performances and durability for Amazon RDS database instances. They make it easy to elastically scale out beyond the capacity constraints of a single DB instance for READ-HEAVY DATABASE. <br>Answer is A. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729804,
            "date": "Tue 29 Nov 2022 02:08",
            "username": "Mee6",
            "content": "B because it's asking to \\\"REDUCE READS\\\" which can be accomplished with caching.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 729586,
            "date": "Mon 28 Nov 2022 21:13",
            "username": "jambajuice",
            "content": "reduce the DBread",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 729538,
            "date": "Mon 28 Nov 2022 19:59",
            "username": "Kapello10",
            "content": "A>Read replicas",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#194",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to run a critical application on AWS. The company needs to use Amazon EC2 for the application’s database. The database must be highly available and must fail over automatically if a disruptive event occurs.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#194",
            "answers": [
              {
                "choice": "<p>A. Launch two EC2 instances, each in a different Availability Zone in the same AWS Region. Install the database on both EC2 instances. Configure the EC2 instances as a cluster. Set up database replication.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use AWS CloudFormation to automate provisioning of the EC2 instance if a disruptive event occurs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Launch two EC2 instances, each in a different AWS Region. Install the database on both EC2 instances. Set up database replication. Fail over the database to a second Region.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use EC2 automatic recovery to recover the instance if a disruptive event occurs.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 730227,
            "date": "Tue 29 Nov 2022 11:21",
            "username": "Gil80",
            "content": "The question states that it is a critical app and it has to be HA.  A could be the answer, but it's in the same AZ, so if the entire region fails, it doesn't cater for the HA requirement. <br><br>However, the likelihood of a failure in two different regions at the same time is 0. Therefore, to me it seems that C is the better option to cater for HA requirement.<br><br>In addition, C does state like A that the DB app is installed on an EC2 instance.",
            "upvote_count": "5",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 735310,
            "date": "Sun 04 Dec 2022 18:46",
            "username": "Rameez1",
            "content": "Option C meets the criteria of HA with data replication in 2nd region.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 734986,
            "date": "Sun 04 Dec 2022 11:17",
            "username": "Gil80",
            "content": "Changing my vote to A.  After reviewing a Udemy course of SAA-C03, it seems that A (multi-AZ and Clusters) is sufficient for HA. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 731959,
            "date": "Wed 30 Nov 2022 21:33",
            "username": "Studen15",
            "content": "I think A is best answer - cluster manage switch to remaining DB automatically. With C, you have to switch manually to new DB server in case of failover. For me, A is better answer.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 730506,
            "date": "Tue 29 Nov 2022 15:29",
            "username": "Ekie",
            "content": "I am going with A as it mentioned clearly setting up a Cluster which is the way to go to have HA when DB is installed in EC2",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 729874,
            "date": "Tue 29 Nov 2022 04:11",
            "username": "kvsomu",
            "content": "A is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729336,
            "date": "Mon 28 Nov 2022 16:43",
            "username": "leonnnnleonnnnGil80leonnnnleonnnnKADSMleonnnn",
            "content": "\\\"The company needs to use Amazon EC2 for the application’s database\\\"<br>So we have to setup replication of database ourself on EC2I read the question and got confused now. In most cases, multi-az is enough for HA requirement but it is \\\"a critical application\\\", so maybe it makes sense to set up replication in another region...So why not C?<br>\\\" Launch two EC2 instances, each in a different AWS Region. Install the database on both EC2 instances. Set up database replication. Fail over the database to a second Region.\\\"<br><br>The question states that it has to be HA.  If you have a failure in the same region, both AZ fails, however, the likelihood of a failure in two different regions at the same time is 0.<br>In addition, C does state like A that the DB app is installed on an EC2 instance.<br><br>To me, C seems more logical. I could be wrong, but your explanation ignores the HA request.multi-az handles HA in most cases. ofcuz multi-region can keep ha when ha down, but it cost too much, and it happens in very rare case.> when ha down<br>typo... it should be \\\"when region down\\\"As the question mentioned disruptive event, entire region may be down. So thinking of HA with another region.Multi-AZ can handle HA in most cases.",
            "upvote_count": "2111111",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 731063,
            "date": "Wed 30 Nov 2022 04:47",
            "username": "leonnnn",
            "content": "I read the question and got confused now. In most cases, multi-az is enough for HA requirement but it is \\\"a critical application\\\", so maybe it makes sense to set up replication in another region...",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 730224,
            "date": "Tue 29 Nov 2022 11:18",
            "username": "Gil80leonnnnleonnnn",
            "content": "So why not C?<br>\\\" Launch two EC2 instances, each in a different AWS Region. Install the database on both EC2 instances. Set up database replication. Fail over the database to a second Region.\\\"<br><br>The question states that it has to be HA.  If you have a failure in the same region, both AZ fails, however, the likelihood of a failure in two different regions at the same time is 0.<br>In addition, C does state like A that the DB app is installed on an EC2 instance.<br><br>To me, C seems more logical. I could be wrong, but your explanation ignores the HA request.multi-az handles HA in most cases. ofcuz multi-region can keep ha when ha down, but it cost too much, and it happens in very rare case.> when ha down<br>typo... it should be \\\"when region down\\\"",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 731052,
            "date": "Wed 30 Nov 2022 04:38",
            "username": "leonnnnleonnnn",
            "content": "multi-az handles HA in most cases. ofcuz multi-region can keep ha when ha down, but it cost too much, and it happens in very rare case.> when ha down<br>typo... it should be \\\"when region down\\\"",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 731058,
            "date": "Wed 30 Nov 2022 04:40",
            "username": "leonnnn",
            "content": "> when ha down<br>typo... it should be \\\"when region down\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729924,
            "date": "Tue 29 Nov 2022 06:02",
            "username": "KADSMleonnnn",
            "content": "As the question mentioned disruptive event, entire region may be down. So thinking of HA with another region.Multi-AZ can handle HA in most cases.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 730568,
            "date": "Tue 29 Nov 2022 16:40",
            "username": "leonnnn",
            "content": "Multi-AZ can handle HA in most cases.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#195",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company’s order system sends requests from clients to Amazon EC2 instances. The EC2 instances process the orders and then store the orders in a database on Amazon RDS. Users report that they must reprocess orders when the system fails. The company wants a resilient solution that can process orders automatically if a system outage occurs.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#195",
            "answers": [
              {
                "choice": "<p>A. Move the EC2 instances into an Auto Scaling group. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to target an Amazon Elastic Container Service (Amazon ECS) task.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Move the EC2 instances into an Auto Scaling group behind an Application Load Balancer (ALB). Update the order system to send messages to the ALB endpoint.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Move the EC2 instances into an Auto Scaling group. Configure the order system to send messages to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the EC2 instances to consume messages from the queue.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon Simple Notification Service (Amazon SNS) topic. Create an AWS Lambda function, and subscribe the function to the SNS topic. Configure the order system to send messages to the SNS topic. Send a command to the EC2 instances to process the messages by using AWS Systems Manager Run Command.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 730985,
            "date": "Wed 30 Nov 2022 02:30",
            "username": "TonyghostR05",
            "content": "SQS order",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 730233,
            "date": "Tue 29 Nov 2022 11:25",
            "username": "Gil80",
            "content": "C.  SQS meets this requirement.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 730067,
            "date": "Tue 29 Nov 2022 08:57",
            "username": "shankarece",
            "content": "C is the right answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729875,
            "date": "Tue 29 Nov 2022 04:13",
            "username": "kvsomu",
            "content": "C is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729869,
            "date": "Tue 29 Nov 2022 03:55",
            "username": "Nigma",
            "content": "Answer : C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729790,
            "date": "Tue 29 Nov 2022 02:04",
            "username": "Mee6",
            "content": "Answer: C due to SQS",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729686,
            "date": "Mon 28 Nov 2022 23:53",
            "username": "TMM369",
            "content": "C - system to send messages to an Amazon Simple Queue Service (Amazon SQS)",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729427,
            "date": "Mon 28 Nov 2022 17:33",
            "username": "Gabs90",
            "content": "C - https://www.examtopics.com/discussions/amazon/view/81087-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729342,
            "date": "Mon 28 Nov 2022 16:50",
            "username": "leonnnn",
            "content": "SQS is better than SNS to meet this requirement",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#196",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs an application on a large fleet of Amazon EC2 instances. The application reads and writes entries into an Amazon DynamoDB table. The size of the DynamoDB table continuously grows, but the application needs only data from the last 30 days. The company needs a solution that minimizes cost and development effort.<br><br>Which solution meets these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#196",
            "answers": [
              {
                "choice": "<p>A. Use an AWS CloudFormation template to deploy the complete solution. Redeploy the CloudFormation stack every 30 days, and delete the original stack.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an EC2 instance that runs a monitoring application from AWS Marketplace. Configure the monitoring application to use Amazon DynamoDB Streams to store the timestamp when a new item is created in the table. Use a script that runs on the EC2 instance to delete items that have a timestamp that is older than 30 days.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure Amazon DynamoDB Streams to invoke an AWS Lambda function when a new item is created in the table. Configure the Lambda function to delete items in the table that are older than 30 days.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Extend the application to add an attribute that has a value of the current timestamp plus 30 days to each new item that is created in the table. Configure DynamoDB to use the attribute as the TTL attribute.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 733004,
            "date": "Thu 01 Dec 2022 20:18",
            "username": "Gil80",
            "content": "changing my answer to D after researching a bit.<br><br>The DynamoDB TTL feature allows you to define a per-item timestamp to determine when an item is no longer needed. Shortly after the date and time of the specified timestamp, DynamoDB deletes the item from your table without consuming any write throughput.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 731989,
            "date": "Wed 30 Nov 2022 22:13",
            "username": "mj98",
            "content": "Ans is C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 730988,
            "date": "Wed 30 Nov 2022 02:32",
            "username": "TonyghostR05",
            "content": "For my opinion, C is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 730769,
            "date": "Tue 29 Nov 2022 20:15",
            "username": "owenrooney11",
            "content": "originally thought D but this article changed my mind<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-streams.html#:~:text=Using%20DynamoDB%20Streams%20and%20Lambda%20to%20archive%20TTL%20deleted%20items",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 730412,
            "date": "Tue 29 Nov 2022 14:06",
            "username": "Heyang",
            "content": "D is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 730407,
            "date": "Tue 29 Nov 2022 14:02",
            "username": "Gil80",
            "content": "Additional info to my previous vote for C.  The question asks to minimize development effort. D says: \\\" Extend the application to add an attribute that has a value of the current timestamp...\\\"<br>Extending the application increases development effort, so it's another reason why D is not the answer.<br><br>Lastly, Amazon will always aspire to have the customers use their solution, so they would want you to use DynamoDB instead of developing (extending the application) your own solution.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 730235,
            "date": "Tue 29 Nov 2022 11:28",
            "username": "Gil80",
            "content": "I was thinking D at first because you never really want to delete data, but then at the end of the question it says \\\"The company needs a solution that minimizes cost...\\\"<br><br>So in this case, I believe cost reduction will happen when we reduce DynamoDB size, therefore C seems correct.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729876,
            "date": "Tue 29 Nov 2022 04:14",
            "username": "kvsomuGil80",
            "content": "D is the answerWhy? how does D factor in \\\"minimizes cost...\\\" ?",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 730389,
            "date": "Tue 29 Nov 2022 13:50",
            "username": "Gil80",
            "content": "Why? how does D factor in \\\"minimizes cost...\\\" ?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729870,
            "date": "Tue 29 Nov 2022 04:00",
            "username": "Nigma",
            "content": "Answer : D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729349,
            "date": "Mon 28 Nov 2022 16:56",
            "username": "leonnnn",
            "content": "C is correct.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#197",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a Microsoft .NET application that runs on an on-premises Windows Server. The application stores data by using an Oracle Database Standard Edition server. The company is planning a migration to AWS and wants to minimize development changes while moving the application. The AWS application environment should be highly available.<br><br>Which combination of actions should the company take to meet these requirements? (Choose two.)<br><br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#197",
            "answers": [
              {
                "choice": "<p>A. Refactor the application as serverless with AWS Lambda functions running .NET Core.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Rehost the application in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Replatform the application to run on Amazon EC2 with the Amazon Linux Amazon Machine Image (AMI).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Amazon DynamoDB in a Multi-AZ deployment.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Oracle on Amazon RDS in a Multi-AZ deployment.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 732200,
            "date": "Thu 01 Dec 2022 04:08",
            "username": "dcyberguy",
            "content": "B- According to the AWS documentation, the simplest way to migrate .NET applications to AWS is to repost the applications using either AWS Elastic Beanstalk or Amazon EC2.<br>E - RDS with Oracle is a no-brainer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 730772,
            "date": "Tue 29 Nov 2022 20:18",
            "username": "owenrooney11",
            "content": "same as everyone else",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 729928,
            "date": "Tue 29 Nov 2022 06:12",
            "username": "KADSM",
            "content": "B E should be correct. Question says \\\"Minimize development changes\\\" - so should go for same oracle DB",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729788,
            "date": "Tue 29 Nov 2022 02:01",
            "username": "Mee6",
            "content": "B for Minimal Development(Elastic BeanStalk)<br>E for RDS with Oracle",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 729429,
            "date": "Mon 28 Nov 2022 17:37",
            "username": "Gabs90",
            "content": "https://www.examtopics.com/discussions/amazon/view/67840-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 729350,
            "date": "Mon 28 Nov 2022 16:56",
            "username": "leonnnn",
            "content": "B E is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 729200,
            "date": "Mon 28 Nov 2022 15:10",
            "username": "Nigma",
            "content": "B and E <br>Oracle to RDS",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 729090,
            "date": "Mon 28 Nov 2022 13:42",
            "username": "asthman",
            "content": "migrate to oracle on RDS is easy compare DynamoDB",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          }
        ]
      },
      {
        "question_id": "#198",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs a containerized application on a Kubernetes cluster in an on-premises data center. The company is using a MongoDB database for data storage. The company wants to migrate some of these environments to AWS, but no code changes or deployment method changes are possible at this time. The company needs a solution that minimizes operational overhead.<br><br>Which solution meets these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#198",
            "answers": [
              {
                "choice": "<p>A. Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 worker nodes for compute and MongoDB on EC2 for data storage.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate for compute and Amazon DynamoDB for data storage<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 worker nodes for compute and Amazon DynamoDB for data storage.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute and Amazon DocumentDB (with MongoDB compatibility) for data storage.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 732195,
            "date": "Thu 01 Dec 2022 03:58",
            "username": "dcyberguy",
            "content": "DDDDDDD",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729430,
            "date": "Mon 28 Nov 2022 17:39",
            "username": "Gabs90",
            "content": "https://www.examtopics.com/discussions/amazon/view/67897-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 729351,
            "date": "Mon 28 Nov 2022 16:57",
            "username": "leonnnn",
            "content": "D meets the requirements",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 729203,
            "date": "Mon 28 Nov 2022 15:14",
            "username": "Nigma",
            "content": "D<br>EKS because of Kubernetes so A and B are eliminated<br>not C because of MongoDB and Fargate is more expensive",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#199",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A telemarketing company is designing its customer call center functionality on AWS. The company needs a solution that provides multiple speaker recognition and generates transcript files. The company wants to query the transcript files to analyze the business patterns. The transcript files must be stored for 7 years for auditing purposes.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#199",
            "answers": [
              {
                "choice": "<p>A. Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use machine learning models for transcript file analysis.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon Transcribe for multiple speaker recognition. Use Amazon Athena for transcript file analysis.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon Translate for multiple speaker recognition. Store the transcript files in Amazon Redshift. Use SQL queries for transcript file analysis.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use Amazon Textract for transcript file analysis.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 733483,
            "date": "Fri 02 Dec 2022 07:08",
            "username": "justsaysid",
            "content": "Answer is B - pretty straightforward.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 732194,
            "date": "Thu 01 Dec 2022 03:55",
            "username": "dcyberguy",
            "content": "Answer is B. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 732082,
            "date": "Thu 01 Dec 2022 00:18",
            "username": "TelaOTelaO",
            "content": "Why is it not C?<br>\\\"Amazon Translate is a text translation service that uses advanced machine learning technologies to provide high-quality translation on demand. You can use Amazon Translate to translate unstructured text documents or to build applications that work in multiple languages.\\\"Disregard.I meant B",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 732083,
            "date": "Thu 01 Dec 2022 00:18",
            "username": "TelaO",
            "content": "Disregard.I meant B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 731045,
            "date": "Wed 30 Nov 2022 04:22",
            "username": "kmaneith",
            "content": "Why it is B instead of C? The question didn't mention to use S3 to store the data, so it cannot be athena ?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 730999,
            "date": "Wed 30 Nov 2022 02:38",
            "username": "TonyghostR05",
            "content": "B Transcribe",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 730774,
            "date": "Tue 29 Nov 2022 20:21",
            "username": "owenrooney11",
            "content": "Amazon Transcribe now supports speaker labeling for streaming transcription. Amazon Transcribe is an automatic speech recognition (ASR) service that makes it easy for you to convert speech-to-text. In live audio transcription, each stream of audio may contain multiple speakers. Now you can conveniently turn on the ability to label speakers, thus helping to identify who is saying what in the output transcript.<br><br>https://aws.amazon.com/about-aws/whats-new/2020/08/amazon-transcribe-supports-speaker-labeling-streaming-transcription/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 730711,
            "date": "Tue 29 Nov 2022 19:15",
            "username": "Manlikeleketdkcumberland",
            "content": "It cannot be B because it leaves out the storage part of the question.\\\"Use Amazon Athena for transcript file analysis\\\" -> this implies that the data has to reside on S3 so it does take care of the storage question as well.",
            "upvote_count": "12",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 731983,
            "date": "Wed 30 Nov 2022 22:00",
            "username": "tdkcumberland",
            "content": "\\\"Use Amazon Athena for transcript file analysis\\\" -> this implies that the data has to reside on S3 so it does take care of the storage question as well.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 730419,
            "date": "Tue 29 Nov 2022 14:13",
            "username": "Heyang",
            "content": "Amazon transcribe convert speech to text and Athena for query",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 730411,
            "date": "Tue 29 Nov 2022 14:05",
            "username": "Gil80",
            "content": "Cannot be Rekognition, because it's for:<br>\t• Find objects, people, text, scenes in images and videos using ML<br>\t• Facial analysis and facial search to do user verification, people counting<br>\t• Create a database of \\\"familiar faces\\\" or compare against celebrities<br><br>Transcribe is for:<br>\t• Automatically convert speech to text<br>\t• Uses a deep learning process called automatic speech recognition (ASR) to convert speech to text quickly and accurately<br>\t• Automatically remove PII using reduction<br>\t• Use cases:<br>\t\t○ Transcribe customer service calls<br>\t\t○ Automate closed captioning and subtitling<br>\t\t○ Generate metadata for media assets to create a fully searchable archive",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 730279,
            "date": "Tue 29 Nov 2022 12:03",
            "username": "JCH760310",
            "content": "Transcribe - https://aws.amazon.com/about-aws/whats-new/2020/08/amazon-transcribe-supports-speaker-labeling-streaming-transcription/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 730172,
            "date": "Tue 29 Nov 2022 10:41",
            "username": "PS_R",
            "content": "D is not correct one. Amazon Rekognition cannot be used for speech detection.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729933,
            "date": "Tue 29 Nov 2022 06:15",
            "username": "KADSM",
            "content": "B should be the correct answer - transcribe can do speech to text.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729692,
            "date": "Tue 29 Nov 2022 00:02",
            "username": "TMM369leonnnn",
            "content": "D -Amazon Textract for transcript file analysis.Amazon Rekognition is used for object detection. transcribe is used for converting speech to text.",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 730575,
            "date": "Tue 29 Nov 2022 16:44",
            "username": "leonnnn",
            "content": "Amazon Rekognition is used for object detection. transcribe is used for converting speech to text.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729354,
            "date": "Mon 28 Nov 2022 17:02",
            "username": "leonnnn",
            "content": "Amazon transcribe convert speech to text.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#200",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company hosts its application on AWS. The company uses Amazon Cognito to manage users. When users log in to the application, the application fetches required data from Amazon DynamoDB by using a REST API that is hosted in Amazon API Gateway. The company wants an AWS managed solution that will control access to the REST API to reduce development efforts.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#200",
            "answers": [
              {
                "choice": "<p>A. Configure an AWS Lambda function to be an authorizer in API Gateway to validate which user made the request.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. For each user, create and assign an API key that must be sent with each request. Validate the key by using an AWS Lambda function.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Send the user’s email address in the header with every request. Invoke an AWS Lambda function to validate that the user with that email address has proper access.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure an Amazon Cognito user pool authorizer in API Gateway to allow Amazon Cognito to validate each request.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 731990,
            "date": "Wed 30 Nov 2022 22:20",
            "username": "mj98",
            "content": "API + Cognito integration - Answer D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729877,
            "date": "Tue 29 Nov 2022 04:17",
            "username": "Nigma",
            "content": "Answer : D<br>Check Gabs90 link<br><br>Use the Amazon Cognito console, CLI/SDK, or API to create a user pool—or use one that's owned by another AWS account",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 729694,
            "date": "Tue 29 Nov 2022 00:05",
            "username": "TMM369",
            "content": "D - https://aws.amazon.com/premiumsupport/knowledge-center/api-gateway-cognito-user-pool-authorizer/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 729435,
            "date": "Mon 28 Nov 2022 17:45",
            "username": "Gabs90",
            "content": "seems to be D to me:https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 729355,
            "date": "Mon 28 Nov 2022 17:05",
            "username": "leonnnn",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#201",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is developing a marketing communications service that targets mobile app users. The company needs to send confirmation messages with Short Message Service (SMS) to its users. The users must be able to reply to the SMS messages. The company must store the responses for a year for analysis.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#201",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon Connect contact flow to send the SMS messages. Use AWS Lambda to process the responses.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Build an Amazon Pinpoint journey. Configure Amazon Pinpoint to send events to an Amazon Kinesis data stream for analysis and archiving.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon Simple Queue Service (Amazon SQS) to distribute the SMS messages. Use AWS Lambda to process the responses.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon Simple Notification Service (Amazon SNS) FIFO topic. Subscribe an Amazon Kinesis data stream to the SNS topic for analysis and archiving.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 735400,
            "date": "Sun 04 Dec 2022 20:43",
            "username": "Rameez1",
            "content": "Amazon Pinpoint is perfect choice for this scenario, as it provides 2 way communication and can stream events to kinesis Data stream for further analysis.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 734170,
            "date": "Sat 03 Dec 2022 03:39",
            "username": "icaniwill",
            "content": "The diagram on the link shows \\\"Campaign and journeys\\\" with the arrow directing to Channels which includes SMS, emails etc. So the correct choice is B. <br>https://aws.amazon.com/pinpoint/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 732279,
            "date": "Thu 01 Dec 2022 06:25",
            "username": "Wilson_S",
            "content": "https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-two-way.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 731993,
            "date": "Wed 30 Nov 2022 22:22",
            "username": "mj98",
            "content": "Amazon Pinpoint +Kinesis can store for upto a year - answer B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729697,
            "date": "Tue 29 Nov 2022 00:10",
            "username": "TMM369",
            "content": "A - https://aws.amazon.com/blogs/contact-center/building-personalized-customer-experiences-over-sms-through-amazon-connect/#:~:text=Get%20Amazon%20Connect%20instance%20details%201%20Navigate%20to,in%20and%20note%20down%20the%20Contact%20Flow%20ID",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729609,
            "date": "Mon 28 Nov 2022 21:43",
            "username": "jambajuice",
            "content": "Amazon Pinpoint for two marketing",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 729437,
            "date": "Mon 28 Nov 2022 17:48",
            "username": "Gabs90",
            "content": "Pinpoint is the correct one https://aws.amazon.com/it/pinpoint/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 729360,
            "date": "Mon 28 Nov 2022 17:09",
            "username": "leonnnn",
            "content": "Amazon Connect is more like a custom service. However, amazon pinpoint can send sms to customers for confirmation.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 729209,
            "date": "Mon 28 Nov 2022 15:23",
            "username": "Nigma",
            "content": "Answer : B<br>https://aws.amazon.com/pinpoint/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#202",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is planning to move its data to an Amazon S3 bucket. The data must be encrypted when it is stored in the S3 bucket. Additionally, the encryption key must be automatically rotated every year.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#202",
            "answers": [
              {
                "choice": "<p>A. Move the data to the S3 bucket. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use the built-in key rotation behavior of SSE-S3 encryption keys.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Key Management Service (AWS KMS) customer managed key. Enable automatic key rotation. Set the S3 bucket’s default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS Key Management Service (AWS KMS) customer managed key. Set the S3 bucket’s default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket. Manually rotate the KMS key every year.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Encrypt the data with customer key material before moving the data to the S3 bucket. Create an AWS Key Management Service (AWS KMS) key without key material. Import the customer key material into the KMS key. Enable automatic key rotation.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 731015,
            "date": "Wed 30 Nov 2022 03:02",
            "username": "TonyghostR05",
            "content": "Just like old question before, B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729439,
            "date": "Mon 28 Nov 2022 17:50",
            "username": "Gabs90",
            "content": "it's B -",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 729361,
            "date": "Mon 28 Nov 2022 17:10",
            "username": "leonnnn",
            "content": "CMK automatically rotates every year as optional.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 729213,
            "date": "Mon 28 Nov 2022 15:24",
            "username": "Nigma",
            "content": "Answer : B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#203",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The customers of a finance company request appointments with financial advisors by sending text messages. A web application that runs on Amazon EC2 instances accepts the appointment requests. The text messages are published to an Amazon Simple Queue Service (Amazon SQS) queue through the web application. Another application that runs on EC2 instances then sends meeting invitations and meeting confirmation email messages to the customers. After successful scheduling, this application stores the meeting information in an Amazon DynamoDB database.<br><br>As the company expands, customers report that their meeting invitations are taking longer to arrive.<br><br>What should a solutions architect recommend to resolve this issue?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#203",
            "answers": [
              {
                "choice": "<p>A. Add a DynamoDB Accelerator (DAX) cluster in front of the DynamoDB database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add an Amazon API Gateway API in front of the web application that accepts the appointment requests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add an Amazon CloudFront distribution. Set the origin as the web application that accepts the appointment requests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add an Auto Scaling group for the application that sends meeting invitations. Configure the Auto Scaling group to scale based on the depth of the SQS queue.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 729728,
            "date": "Tue 29 Nov 2022 00:47",
            "username": "jambajuice",
            "content": "ANswer d",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 729363,
            "date": "Mon 28 Nov 2022 17:12",
            "username": "leonnnn",
            "content": "D meets the requirements",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 729217,
            "date": "Mon 28 Nov 2022 15:27",
            "username": "Nigma",
            "content": "Answer : D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          }
        ]
      },
      {
        "question_id": "#204",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An online retail company has more than 50 million active customers and receives more than 25,000 orders each day. The company collects purchase data for customers and stores this data in Amazon S3. Additional customer data is stored in Amazon RDS.<br><br>The company wants to make all the data available to various teams so that the teams can perform analytics. The solution must provide the ability to manage fine-grained permissions for the data and must minimize operational overhead.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#204",
            "answers": [
              {
                "choice": "<p>A. Migrate the purchase data to write directly to Amazon RDS. Use RDS access controls to limit access.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Schedule an AWS Lambda function to periodically copy data from Amazon RDS to Amazon S3. Create an AWS Glue crawler. Use Amazon Athena to query the data. Use S3 policies to limit access.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a data lake by using AWS Lake Formation. Create an AWS Glue JDBC connection to Amazon RDS. Register the S3 bucket in Lake Formation. Use Lake Formation access controls to limit access.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon Redshift cluster. Schedule an AWS Lambda function to periodically copy data from Amazon S3 and Amazon RDS to Amazon Redshift. Use Amazon Redshift access controls to limit access.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 734284,
            "date": "Sat 03 Dec 2022 09:14",
            "username": "9014",
            "content": "ANSWER IS OF COURSE C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729759,
            "date": "Tue 29 Nov 2022 01:52",
            "username": "Mee6",
            "content": "I think the answer is C because the keyword here is \\\"FINE GRAINED\\\" which Lake Formation provides",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729727,
            "date": "Tue 29 Nov 2022 00:46",
            "username": "jambajuice",
            "content": "answr c",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729364,
            "date": "Mon 28 Nov 2022 17:13",
            "username": "leonnnn",
            "content": "Data lake is for complex data sources",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729221,
            "date": "Mon 28 Nov 2022 15:29",
            "username": "Nigma",
            "content": "Answer : C",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#205",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company hosts a marketing website in an on-premises data center. The website consists of static documents and runs on a single server. An administrator updates the website content infrequently and uses an SFTP client to upload new documents.<br><br>The company decides to host its website on AWS and to use Amazon CloudFront. The company’s solutions architect creates a CloudFront distribution. The solutions architect must design the most cost-effective and resilient architecture for website hosting to serve as the CloudFront origin.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#205",
            "answers": [
              {
                "choice": "<p>A. Create a virtual server by using Amazon Lightsail. Configure the web server in the Lightsail instance. Upload website content by using an SFTP client.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Auto Scaling group for Amazon EC2 instances. Use an Application Load Balancer. Upload website content by using an SFTP client.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a private Amazon S3 bucket. Use an S3 bucket policy to allow access from a CloudFront origin access identity (OAI). Upload website content by using the AWS CLI.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a public Amazon S3 bucket. Configure AWS Transfer for SFTP. Configure the S3 bucket for website hosting. Upload website content by using the SFTP client.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 732528,
            "date": "Thu 01 Dec 2022 12:07",
            "username": "dvine_",
            "content": "answer is C, cost effective and resilient = cloud front and S3",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 732000,
            "date": "Wed 30 Nov 2022 22:31",
            "username": "mj98",
            "content": "Answer is very clearly D! SFTP = Transfer Family. Also questions say nothing about blocking access OAI or public/private.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 730569,
            "date": "Tue 29 Nov 2022 16:40",
            "username": "Ekie",
            "content": "D: S3 must be public to be used by CloudFront",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 730088,
            "date": "Tue 29 Nov 2022 09:19",
            "username": "mbo13",
            "content": "Would have been D if it had Cloudfront in it",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729752,
            "date": "Tue 29 Nov 2022 01:44",
            "username": "leonnnn",
            "content": "It is mentioned that the company uses cloud front to distribute the website. So CloudFront OAI is correct. Although administrator uses SFTP to upload contents, but it is \\\"infrequent\\\" so I think we can ignore this.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729724,
            "date": "Tue 29 Nov 2022 00:46",
            "username": "jambajuice",
            "content": "Answer :C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729223,
            "date": "Mon 28 Nov 2022 15:31",
            "username": "Nigma",
            "content": "Answer : D",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#206",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to manage Amazon Machine Images (AMIs). The company currently copies AMIs to the same AWS Region where the AMIs were created. The company needs to design an application that captures AWS API calls and sends alerts whenever the Amazon EC2 CreateImage API operation is called within the company’s account.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#206",
            "answers": [
              {
                "choice": "<p>A. Create an AWS Lambda function to query AWS CloudTrail logs and to send an alert when a CreateImage API call is detected.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure AWS CloudTrail with an Amazon Simple Notification Service (Amazon SNS) notification that occurs when updated logs are sent to Amazon S3. Use Amazon Athena to create a new table and to query on CreateImage when an API call is detected.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule for the CreateImage API call. Configure the target as an Amazon Simple Notification Service (Amazon SNS) topic to send an alert when a CreateImage API call is detected.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure an Amazon Simple Queue Service (Amazon SQS) FIFO queue as a target for AWS CloudTrail logs. Create an AWS Lambda function to send an alert to an Amazon Simple Notification Service (Amazon SNS) topic when a CreateImage API call is detected.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 735420,
            "date": "Sun 04 Dec 2022 21:09",
            "username": "Rameez1",
            "content": "Option B and C seems right but \\\"LEAST operational overhead\\\" eliminates B.  So, C is the right answer.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 732003,
            "date": "Wed 30 Nov 2022 22:36",
            "username": "mj98mj98",
            "content": "B - https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-ami-events.htmltypo - it's C",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 732006,
            "date": "Wed 30 Nov 2022 22:36",
            "username": "mj98",
            "content": "typo - it's C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 731076,
            "date": "Wed 30 Nov 2022 05:11",
            "username": "kmaneith",
            "content": "why it is not D? I think this is the correct answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 730831,
            "date": "Tue 29 Nov 2022 21:29",
            "username": "lakshmilnjmj98mj98",
            "content": "what's the correct answer?B - https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-ami-events.htmltypo - it's C",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 732002,
            "date": "Wed 30 Nov 2022 22:35",
            "username": "mj98mj98",
            "content": "B - https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-ami-events.htmltypo - it's C",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 732005,
            "date": "Wed 30 Nov 2022 22:36",
            "username": "mj98",
            "content": "typo - it's C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 730792,
            "date": "Tue 29 Nov 2022 20:41",
            "username": "owenrooney11",
            "content": "I'm team C. <br>https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-ami-events.html#:~:text=For%20example%2C%20you%20can%20create%20an%20EventBridge%20rule%20that%20detects%20when%20the%20AMI%20creation%20process%20has%20completed%20and%20then%20invokes%20an%20Amazon%20SNS%20topic%20to%20send%20an%20email%20notification%20to%20you.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 730312,
            "date": "Tue 29 Nov 2022 12:28",
            "username": "JCH760310",
            "content": "the key \\\"The company needs to design an application that captures AWS API calls\\\" not how can they capture AWS API calls :-)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729693,
            "date": "Tue 29 Nov 2022 00:04",
            "username": "jambajuice",
            "content": "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/using-cloudtrail.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 729450,
            "date": "Mon 28 Nov 2022 18:02",
            "username": "Gabs90KADSM",
            "content": "It's C to me : https://www.examtopics.com/discussions/amazon/view/82701-exam-aws-certified-solutions-architect-associate-saa-c02/<br>Use Event bridge seems to be the best choiceBut option C - they are trying to mention about cloudwatch events. Eventbridge monitors the state change of AMI's. Will go for Option B",
            "upvote_count": "31",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 730050,
            "date": "Tue 29 Nov 2022 08:24",
            "username": "KADSM",
            "content": "But option C - they are trying to mention about cloudwatch events. Eventbridge monitors the state change of AMI's. Will go for Option B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729368,
            "date": "Mon 28 Nov 2022 17:18",
            "username": "leonnnn",
            "content": "I choose B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 729230,
            "date": "Mon 28 Nov 2022 15:34",
            "username": "NigmajambajuiceNigma",
            "content": "Answer : CWhy C , Why not B. ?https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-ami-events.html",
            "upvote_count": "113",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 729723,
            "date": "Tue 29 Nov 2022 00:44",
            "username": "jambajuiceNigma",
            "content": "Why C , Why not B. ?https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-ami-events.html",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 729926,
            "date": "Tue 29 Nov 2022 06:10",
            "username": "Nigma",
            "content": "https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-ami-events.html",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#207",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company owns an asynchronous API that is used to ingest user requests and, based on the request type, dispatch requests to the appropriate microservice for processing. The company is using Amazon API Gateway to deploy the API front end, and an AWS Lambda function that invokes Amazon DynamoDB to store user requests before dispatching them to the processing microservices.<br><br>The company provisioned as much DynamoDB throughput as its budget allows, but the company is still experiencing availability issues and is losing user requests.<br><br>What should a solutions architect do to address this issue without impacting existing users?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#207",
            "answers": [
              {
                "choice": "<p>A. Add throttling on the API Gateway with server-side throttling limits.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use DynamoDB Accelerator (DAX) and Lambda to buffer writes to DynamoDB. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a secondary index in DynamoDB for the table with the user requests.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the Amazon Simple Queue Service (Amazon SQS) queue and Lambda to buffer writes to DynamoDB. <br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 729755,
            "date": "Tue 29 Nov 2022 01:46",
            "username": "leonnnnnVizzzRameez1",
            "content": "Using SQS should be the answer.Why not DAX? Could somebody explain?DAX helps in reducing the read loads from DynamoDB, here we need a solution to handle write requests, which is well handled by SQS and Lamda to buffer writes on DynamoDB. ",
            "upvote_count": "111",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 735058,
            "date": "Sun 04 Dec 2022 13:03",
            "username": "nVizzzRameez1",
            "content": "Why not DAX? Could somebody explain?DAX helps in reducing the read loads from DynamoDB, here we need a solution to handle write requests, which is well handled by SQS and Lamda to buffer writes on DynamoDB. ",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 735430,
            "date": "Sun 04 Dec 2022 21:21",
            "username": "Rameez1",
            "content": "DAX helps in reducing the read loads from DynamoDB, here we need a solution to handle write requests, which is well handled by SQS and Lamda to buffer writes on DynamoDB. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729722,
            "date": "Tue 29 Nov 2022 00:43",
            "username": "jambajuice",
            "content": "Answer d",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 729233,
            "date": "Mon 28 Nov 2022 15:36",
            "username": "Nigma",
            "content": "Answer : D",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#208",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to move data from an Amazon EC2 instance to an Amazon S3 bucket. The company must ensure that no API calls and no data are routed through public internet routes. Only the EC2 instance can have access to upload data to the S3 bucket.<br><br>Which solution will meet these requirements?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#208",
            "answers": [
              {
                "choice": "<p>A. Create an interface VPC endpoint for Amazon S3 in the subnet where the EC2 instance is located. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a gateway VPC endpoint for Amazon S3 in the Availability Zone where the EC2 instance is located. Attach appropriate security groups to the endpoint. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Run the nslookup tool from inside the EC2 instance to obtain the private IP address of the S3 bucket’s service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the AWS provided, publicly available ip-ranges.json file to obtain the private IP address of the S3 bucket’s service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 732642,
            "date": "Thu 01 Dec 2022 14:16",
            "username": "DWISE1",
            "content": "VPC Endpoint helps you to securely connect your VPC to another service.<br><br>There are two types<br><br>Gateway endpoint<br>Interface endpoint<br>A Gateway endpoint:<br><br>Help you to securely connect to Amazon S3 and DynamoDB<br>Endpoint serves as a target in your route table for traffic<br>Provide access to endpoint (endpoint, identity and resource policies)<br>An Interface endpoint:",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 730827,
            "date": "Tue 29 Nov 2022 21:25",
            "username": "JCH760310",
            "content": "I'm confused: see question #4 - gateway VPC endpoint",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729892,
            "date": "Tue 29 Nov 2022 05:09",
            "username": "SSASSWS",
            "content": "I think answer should be A and not B. <br>as we cannot \\\"Attach a security groups to a gateway endpoint.\\\"",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729719,
            "date": "Tue 29 Nov 2022 00:42",
            "username": "jambajuice",
            "content": "Answer A . Gateway endpoint doent support Security group.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729371,
            "date": "Mon 28 Nov 2022 17:21",
            "username": "leonnnnleonnnnmj98",
            "content": "I choose AI think it's B after some more considering.no SG for gateway",
            "upvote_count": "111",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729756,
            "date": "Tue 29 Nov 2022 01:48",
            "username": "leonnnnmj98",
            "content": "I think it's B after some more considering.no SG for gateway",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 732016,
            "date": "Wed 30 Nov 2022 22:44",
            "username": "mj98",
            "content": "no SG for gateway",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729236,
            "date": "Mon 28 Nov 2022 15:38",
            "username": "Nigma",
            "content": "Answer : B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#209",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A solutions architect is designing the architecture of a new application being deployed to the AWS Cloud. The application will run on Amazon EC2 On-Demand Instances and will automatically scale across multiple Availability Zones. The EC2 instances will scale up and down frequently throughout the day. An Application Load Balancer (ALB) will handle the load distribution. The architecture needs to support distributed session data management. The company is willing to make changes to code if needed.<br><br>What should the solutions architect do to ensure that the architecture supports distributed session data management?<br><br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#209",
            "answers": [
              {
                "choice": "<p>A. Use Amazon ElastiCache to manage and store session data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use session affinity (sticky sessions) of the ALB to manage session data.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Session Manager from AWS Systems Manager to manage the session.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the GetSessionToken API operation in AWS Security Token Service (AWS STS) to manage the session.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "",
        "discusstion": [
          {
            "id": 732095,
            "date": "Thu 01 Dec 2022 00:46",
            "username": "TelaO",
            "content": "better justification found here...<br>https://www.examtopics.com/discussions/amazon/view/46412-exam-aws-certified-solutions-architect-associate-saa-c02/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 731089,
            "date": "Wed 30 Nov 2022 05:30",
            "username": "kmaneith",
            "content": "why not C?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729376,
            "date": "Mon 28 Nov 2022 17:25",
            "username": "leonnnn",
            "content": "ALB sticky session can keep request accessing to the same backend application. But it says \\\"distributed session management\\\" and company \\\"will to change code\\\", so I think A is better",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 729237,
            "date": "Mon 28 Nov 2022 15:40",
            "username": "Nigma",
            "content": "Answer : A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          }
        ]
      }
    ]
  }