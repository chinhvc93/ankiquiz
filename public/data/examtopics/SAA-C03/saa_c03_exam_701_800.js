var SAA_C03_Exam_701_800 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#701",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A city has deployed a web application running on Amazon EC2 instances behind an Application Load Balancer (ALB). The application's users have reported sporadic performance, which appears to be related to DDoS attacks originating from random IP addresses. The city needs a solution that requires minimal configuration changes and provides an audit trail for the DDoS sources.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#701",
          "answers": [
            {
              "choice": "<p>Enable an AWS WAF web ACL on the ALB, and configure rules to block traffic from unknown sources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Subscribe to Amazon Inspector. Engage the AWS DDoS Response Team (DRT) to integrate mitigating controls into the service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Subscribe to AWS Shield Advanced. Engage the AWS DDoS Response Team (DRT) to integrate mitigating controls into the service.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon CloudFront distribution for the application, and set the ALB as the origin. Enable an AWS WAF web ACL on the distribution, and configure rules to block traffic from unknown sources<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 701 discussion",
      "discusstion": [
        {
          "id": 1141254,
          "date": "Mon 05 Feb 2024 17:01",
          "username": "Andy_09",
          "content": "C is the correct answer",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1240073,
          "date": "Mon 01 Jul 2024 11:23",
          "username": "Scheldon",
          "content": "AnswerC",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1228648,
          "date": "Tue 11 Jun 2024 22:32",
          "username": "NSA_Poker",
          "content": "(A & D) are incorrect.<br>AWS WAF Web ACL - contain WAF rules that define how to inspect web requests and what to do when a web request matches the inspection criteria.<br>We don't have the inspection criteria necessary to use WAF Web ACL effectively bc DDoS attacks are originating from random IP addresses.<br>The AWS DDoS Response Team can respond to the randomness.<br><br>(B) is incorrect.<br>Amazon Inspector - a service that analyzes your EC2 instances to identify potential security and configuration issues.<br>Inspector is not good at dealing with an actual DDOS attack like AWS Shield Advanced.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1202042,
          "date": "Thu 25 Apr 2024 16:04",
          "username": "sandordini",
          "content": "DDoSAWS Shield",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1187408,
          "date": "Mon 01 Apr 2024 14:22",
          "username": "Mikado211",
          "content": "C is the correct answer, AWS Shield Advanced.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1165138,
          "date": "Sun 03 Mar 2024 23:32",
          "username": "asdfcdsxdfc",
          "content": "C looks correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1155620,
          "date": "Wed 21 Feb 2024 16:05",
          "username": "Naveena_Devanga",
          "content": "C is the correct answer.<br>Amazon Inspector is an automated vulnerability management service whereas AWS Shield Advanced is a managed service that helps you protect your application against external threats, like DDoS attacks, volumetric bots, and vulnerability exploitation attempts. For higher levels of protection against attacks.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1148052,
          "date": "Mon 12 Feb 2024 12:45",
          "username": "Darshan07",
          "content": "C is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#702",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company copies 200 TB of data from a recent ocean survey onto AWS Snowball Edge Storage Optimized devices. The company has a high performance computing (HPC) cluster that is hosted on AWS to look for oil and gas deposits. A solutions architect must provide the cluster with consistent sub-millisecond latency and high-throughput access to the data on the Snowball Edge Storage Optimized devices. The company is sending the devices back to AWS.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#702",
          "answers": [
            {
              "choice": "<p>Create an Amazon S3 bucket. Import the data into the S3 bucket. Configure an AWS Storage Gateway file gateway to use the S3 bucket. Access the file gateway from the HPC cluster instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 bucket. Import the data into the S3 bucket. Configure an Amazon FSx for Lustre file system, and integrate it with the S3 bucket. Access the FSx for Lustre file system from the HPC cluster instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 bucket and an Amazon Elastic File System (Amazon EFS) file system. Import the data into the S3 bucket. Copy the data from the S3 bucket to the EFS file system. Access the EFS file system from the HPC cluster instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon FSx for Lustre file system. Import the data directly into the FSx for Lustre file system. Access the FSx for Lustre file system from the HPC cluster instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 702 discussion",
      "discusstion": [
        {
          "id": 1144484,
          "date": "Thu 08 Feb 2024 14:35",
          "username": "Cali182",
          "content": "Option D<br>Option A, B, and C involve using Amazon S3 or Amazon EFS as an intermediary storage layer, which may introduce additional latency and overhead, not meeting the requirement of consistent sub-millisecond latency. Therefore, Option D is the most suitable solution for this scenario.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The format on the Snowball device would be s3 compatible only. The FSx for Lustre file system can be created and then linked to the S3 bucket. The Lustre file system can then be mounted on the HPC workloads that need sub-millisecond latency to storge data. Option B would be the correct option, assuming only S3 support on snowball.</li></ul>",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1157053,
          "date": "Fri 23 Feb 2024 11:39",
          "username": "domper20232023",
          "content": "The format on the Snowball device would be s3 compatible only. The FSx for Lustre file system can be created and then linked to the S3 bucket. The Lustre file system can then be mounted on the HPC workloads that need sub-millisecond latency to storge data. Option B would be the correct option, assuming only S3 support on snowball.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1211267,
          "date": "Tue 14 May 2024 09:14",
          "username": "Linuslin",
          "content": "No direct integration between Snowball and Fsx for Lustre. It must be via S3.<br>Snowball Edge (Storage Optimized) --> S3 --integrate--> FSx for Lustre<br><br>https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html<br><br>https://aws.amazon.com/tw/blogs/aws/enhanced-amazon-s3-integration-for-amazon-fsx-for-lustre/",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1333329,
          "date": "Sun 29 Dec 2024 05:49",
          "username": "FlyingHawk",
          "content": "it is not possible to import data directly from Snowball Edge Storage Optimized devices to Amazon FSx for Lustre,<br> FSx for Lustre is designed to work seamlessly with data stored in Amazon S3, providing integration for high-performance access and lazy loading.<br>Snowball Edge devices are designed to securely transfer data to AWS services, particularly Amazon S3. https://aws.amazon.com/blogs/storage/automatically-import-objects-from-amazon-s3-into-amazon-fsx-for-lustre/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1267656,
          "date": "Sat 17 Aug 2024 13:17",
          "username": "Abdullah2004",
          "content": "The correct answer is D for sure<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You cannot import data from snowball in any other destination other than S3. So no, D is INCORRECT. Don't get tricked just because they mentioned HPC.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1285475,
          "date": "Wed 18 Sep 2024 00:29",
          "username": "MatAlves",
          "content": "You cannot import data from snowball in any other destination other than S3. So no, D is INCORRECT. Don't get tricked just because they mentioned HPC.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1257522,
          "date": "Mon 29 Jul 2024 16:03",
          "username": "n999",
          "content": "B for sure",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1232173,
          "date": "Tue 18 Jun 2024 02:46",
          "username": "DZRomero",
          "content": "Import data to AWS services: When AWS receives the device, the data is automatically imported into the designated AWS service or Amazon S3 bucket based on your configuration. For example, if you need to access the data from an HPC cluster running on AWS, you would import the data into an Amazon FSx for Lustre file system or Amazon S3, and then access it from your HPC cluster instances.<br>No need S3 bucket",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1205104,
          "date": "Wed 01 May 2024 15:24",
          "username": "trinh_le",
          "content": "You cannot access the FSx for Lustre file system from the HPC cluster instances and this is only possible via S3",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1202043,
          "date": "Thu 25 Apr 2024 16:06",
          "username": "sandordini",
          "content": "HPCLustre<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Extension: HPC Lustre, but SnowballS3, therefore: B<br>Sync from Snowball to S3 -&gt; Link/integrate with Lustre<br><br>Correct answer: C</li><li>Which is of course not C but B... :D Sorry...<br>So correct answer::D</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1202059,
          "date": "Thu 25 Apr 2024 16:30",
          "username": "sandordini",
          "content": "Extension: HPC Lustre, but SnowballS3, therefore: B<br>Sync from Snowball to S3 -> Link/integrate with Lustre<br><br>Correct answer: C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Which is of course not C but B... :D Sorry...<br>So correct answer::D</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1202061,
          "date": "Thu 25 Apr 2024 16:31",
          "username": "sandordini",
          "content": "Which is of course not C but B... :D Sorry...<br>So correct answer::D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1193111,
          "date": "Wed 10 Apr 2024 17:29",
          "username": "sukjubae",
          "content": "B is right",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1180155,
          "date": "Fri 22 Mar 2024 17:04",
          "username": "alawada",
          "content": "Selected Answer: D is right answer because it mentions sub-millisecond latency and high-throughput access",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1177163,
          "date": "Tue 19 Mar 2024 10:24",
          "username": "mgrimandi",
          "content": "B<br>https://medium.com/@abylead/amazon-fsx-for-migration-and-certification-f3cb7b4dd843",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1173644,
          "date": "Thu 14 Mar 2024 20:00",
          "username": "MattBJ",
          "content": "B is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1165504,
          "date": "Mon 04 Mar 2024 11:37",
          "username": "agg42",
          "content": "According to Copilot: Transferring data directly from AWS Snowball Edge to Amazon FSx for Lustre is not a standard process supported directly by AWS.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1157993,
          "date": "Sat 24 Feb 2024 15:34",
          "username": "iczcezar",
          "content": "Option D, creating an Amazon FSx for Lustre file system and importing the data directly into it, is indeed the most suitable solution for this scenario. By bypassing an intermediary storage layer and directly importing the data into FSx for Lustre, the solution ensures optimal performance with consistent sub-millisecond latency and high throughput, meeting the requirements of the HPC cluster. Thank you for pointing out the clarity.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1155744,
          "date": "Wed 21 Feb 2024 18:31",
          "username": "FZA24",
          "content": "It should be B.<br>No direct integration between Snowball and Fsx for Lustre<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It must be via S3</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1155745,
          "date": "Wed 21 Feb 2024 18:31",
          "username": "FZA24",
          "content": "It must be via S3",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1153951,
          "date": "Mon 19 Feb 2024 14:46",
          "username": "67a3f49",
          "content": "Cali182 you cannot directly copy from Snowball Edge to FSx for luster",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1152537,
          "date": "Sat 17 Feb 2024 13:25",
          "username": "1Alpha1",
          "content": "Its B.<br>Snowball Edge (Storage Optimized) --> S3 --integrate--> FSx for Lustre",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#703",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has NFS servers in an on-premises data center that need to periodically back up small amounts of data to Amazon S3.<br><br>Which solution meets these requirements and is MOST cost-effective?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#703",
          "answers": [
            {
              "choice": "<p>Set up AWS Glue to copy the data from the on-premises servers to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an AWS DataSync agent on the on-premises servers, and sync the data to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an SFTP sync using AWS Transfer for SFTP to sync data from on premises to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an AWS Direct Connect connection between the on-premises data center and a VPC, and copy the data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 703 discussion",
      "discusstion": [
        {
          "id": 1141260,
          "date": "Mon 05 Feb 2024 17:05",
          "username": "Andy_09",
          "content": "B is the correct option",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1148976,
          "date": "Tue 13 Feb 2024 08:55",
          "username": "BillaRanga",
          "content": "A -> Used for ETL not copying<br>B -> Works<br>C ->Works, but overkill for the described scenario of periodic small backups, high cost<br>D -> Works but it may not be necessary for transferring small amounts of data periodically. High setup cost",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1240075,
          "date": "Mon 01 Jul 2024 11:27",
          "username": "Scheldon",
          "content": "AnswerB<br><br>Should be sufficient",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1148057,
          "date": "Mon 12 Feb 2024 12:51",
          "username": "Darshan07",
          "content": "B is the correct option",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#704",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online video game company must maintain ultra-low latency for its game servers. The game servers run on Amazon EC2 instances. The company needs a solution that can handle millions of UDP internet traffic requests each second.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#704",
          "answers": [
            {
              "choice": "<p>Configure an Application Load Balancer with the required protocol and ports for the internet traffic. Specify the EC2 instances as the targets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a Gateway Load Balancer for the internet traffic. Specify the EC2 instances as the targets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a Network Load Balancer with the required protocol and ports for the internet traffic. Specify the EC2 instances as the targets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Launch an identical set of game servers on EC2 instances in separate AWS Regions. Route internet traffic to both sets of EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 704 discussion",
      "discusstion": [
        {
          "id": 1141261,
          "date": "Mon 05 Feb 2024 17:06",
          "username": "Andy_09",
          "content": "UDP needs NLB",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1313585,
          "date": "Sun 17 Nov 2024 15:52",
          "username": "echonesis",
          "content": "UDP -> L4 Protocol -> NLB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1285480,
          "date": "Wed 18 Sep 2024 00:40",
          "username": "MatAlves",
          "content": "UDP > NLB.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1192093,
          "date": "Tue 09 Apr 2024 09:40",
          "username": "zinabu",
          "content": "Ans : C<br>OfCourse we can use bothNLB and GLB balancers for UDP traffic but NLB is more cost effective than GLB that is why we choice C.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1165140,
          "date": "Sun 03 Mar 2024 23:42",
          "username": "asdfcdsxdfc",
          "content": "TCP/UDPNLB",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1149476,
          "date": "Tue 13 Feb 2024 19:38",
          "username": "osmk",
          "content": "C ->https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1149243,
          "date": "Tue 13 Feb 2024 15:48",
          "username": "Marunio",
          "content": "UDP -> NLB.<br><br>ALB is for HTTP/HTTPS.<br><br>Gateway Load Balancer is for 3rd party virtual appliances like Firewalls etc not the traffic distribution.<br><br>https://aws.amazon.com/compare/the-difference-between-the-difference-between-application-network-and-gateway-load-balancing/#:~:textAn%20NLB%20operates%20on%20layer,level%20along%20with%20gateway%20functionality.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1149225,
          "date": "Tue 13 Feb 2024 15:35",
          "username": "Gagg",
          "content": "UDP, should use network load balancer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1145426,
          "date": "Fri 09 Feb 2024 12:56",
          "username": "nj1999",
          "content": "C, NLB",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#705",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a three-tier application in a VPC. The database tier uses an Amazon RDS for MySQL DB instance.<br><br>The company plans to migrate the RDS for MySQL DB instance to an Amazon Aurora PostgreSQL DB cluster. The company needs a solution that replicates the data changes that happen during the migration to the new database.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#705",
          "answers": [
            {
              "choice": "<p>Use AWS Database Migration Service (AWS DMS) Schema Conversion to transform the database objects.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Database Migration Service (AWS DMS) Schema Conversion to create an Aurora PostgreSQL read replica on the RDS for MySQL DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Aurora MySQL read replica for the RDS for MySQL DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Define an AWS Database Migration Service (AWS DMS) task with change data capture (CDC) to migrate the data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Promote the Aurora PostgreSQL read replica to a standalone Aurora PostgreSQL DB cluster when the replica lag is zero.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 705 discussion",
      "discusstion": [
        {
          "id": 1182218,
          "date": "Mon 25 Mar 2024 06:06",
          "username": "h0ng97_spare_002",
          "content": "A: Correct. because need convert from MySQL to PostgreSQL<br><br>B: Wrong. Schema Conversion does not create an Aurora read replica<br><br>C: Wrong. Company wants to migrate to Aurora PostgreSQL, not Aurora MySQL<br><br>D: Correct. CDC task helps to capture ongoing change from source data store<br><br>E: Wrong. Although using Aurora Read Replica is an option for DB migration within the same Region, this question is asking for \\\"combination of steps\\\", which this option does not have another compatible option to pair with<br><br>Therefore, answer is \\\"AD\\\"",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1142816,
          "date": "Tue 06 Feb 2024 23:51",
          "username": "mestule",
          "content": "AD makes sense to me, but I am not sure if that's the best answer.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agreed. AD makes more sense !!</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1144628,
          "date": "Thu 08 Feb 2024 16:27",
          "username": "Andy_09",
          "content": "Agreed. AD makes more sense !!",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1240078,
          "date": "Mon 01 Jul 2024 11:33",
          "username": "Scheldon",
          "content": "AnswerAD",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1173937,
          "date": "Fri 15 Mar 2024 02:39",
          "username": "xBUGx",
          "content": "Lag many never be zero, then it will ne er be promoted to primary",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1152162,
          "date": "Fri 16 Feb 2024 19:06",
          "username": "haci",
          "content": "It's quite similar with Q.235, based on that discussion A-D makes more sense.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>of course, sin mas</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1262114,
          "date": "Wed 07 Aug 2024 15:35",
          "username": "1e22522",
          "content": "of course, sin mas",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1141264,
          "date": "Mon 05 Feb 2024 17:11",
          "username": "Andy_09",
          "content": "Correct answer BE",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#706",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a database that runs on an Amazon RDS instance that is deployed to multiple Availability Zones. The company periodically runs a script against the database to report new entries that are added to the database. The script that runs against the database negatively affects the performance of a critical application. The company needs to improve application performance with minimal costs.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#706",
          "answers": [
            {
              "choice": "<p>Add functionality to the script to identify the instance that has the fewest active connections. Configure the script to read from that instance to report the total new entries.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a read replica of the database. Configure the script to query only the read replica to report the total new entries.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Instruct the development team to manually export the new entries for the day in the database at the end of each day.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon ElastiCache to cache the common queries that the script runs against the database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 706 discussion",
      "discusstion": [
        {
          "id": 1144721,
          "date": "Thu 08 Feb 2024 17:40",
          "username": "Moon239",
          "content": "Read replica",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1240079,
          "date": "Mon 01 Jul 2024 11:35",
          "username": "Scheldon",
          "content": "Answer B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1170641,
          "date": "Sun 10 Mar 2024 22:34",
          "username": "giovanna_mag",
          "content": "B, read replica",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1142819,
          "date": "Tue 06 Feb 2024 23:54",
          "username": "mestule",
          "content": "B looks correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#707",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an Application Load Balancer (ALB) to present its application to the internet. The company finds abnormal traffic access patterns across the application. A solutions architect needs to improve visibility into the infrastructure to help the company understand these abnormalities better.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#707",
          "answers": [
            {
              "choice": "<p>Create a table in Amazon Athena for AWS CloudTrail logs. Create a query for the relevant information.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable ALB access logging to Amazon S3. Create a table in Amazon Athena, and query the logs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enable ALB access logging to Amazon S3. Open each file in a text editor, and search each line for the relevant information.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EMR on a dedicated Amazon EC2 instance to directly query the ALB to acquire traffic access log information.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 707 discussion",
      "discusstion": [
        {
          "id": 1141275,
          "date": "Mon 05 Feb 2024 17:20",
          "username": "Andy_09",
          "content": "B is the correct answer",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 1149248,
          "date": "Tue 13 Feb 2024 15:53",
          "username": "Marunio",
          "content": "A - Cloudtrail is for API Calls and changes on AWS account.<br>B - Going for athena in S3.- Correct<br>C - Manual work<br>D - Distractor",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1334087,
          "date": "Mon 30 Dec 2024 13:01",
          "username": "Salilgen",
          "content": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1240080,
          "date": "Mon 01 Jul 2024 11:37",
          "username": "Scheldon",
          "content": "Answer B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1205277,
          "date": "Thu 02 May 2024 04:53",
          "username": "[Removed]",
          "content": "Correct answer is B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1155646,
          "date": "Wed 21 Feb 2024 16:33",
          "username": "Naveena_Devanga",
          "content": "B -<br>Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1150783,
          "date": "Thu 15 Feb 2024 07:37",
          "username": "c48b4e2",
          "content": "Why there is a \\\"Correct answer\\\" (the green bordered one) at all while most of the time the community thinks (correctly) otherwise?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1148482,
          "date": "Mon 12 Feb 2024 19:22",
          "username": "betttty",
          "content": "why not A?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Access logs is an optional feature of Elastic Load Balancing that is disabled by default</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1177433,
          "date": "Tue 19 Mar 2024 15:38",
          "username": "Kezuko",
          "content": "Access logs is an optional feature of Elastic Load Balancing that is disabled by default",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#708",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use NAT gateways in its AWS environment. The company's Amazon EC2 instances in private subnets must be able to connect to the public internet through the NAT gateways.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#708",
          "answers": [
            {
              "choice": "<p>Create public NAT gateways in the same private subnets as the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create private NAT gateways in the same private subnets as the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create public NAT gateways in public subnets in the same VPCs as the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create private NAT gateways in public subnets in the same VPCs as the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 708 discussion",
      "discusstion": [
        {
          "id": 1143263,
          "date": "Wed 07 Aug 2024 11:09",
          "username": "anikolov",
          "content": "Should be C: Public NAT GW in Public Subnet to have access to internet. Private NAT GW is used for VPC or on-prem",
          "upvote_count": "16",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1142822,
          "date": "Tue 06 Aug 2024 23:07",
          "username": "mestule",
          "content": "I think the correct is C, because D would require more than just private NAT gateway.<br><br>Private =E2=80=93 Instances in private subnets can connect to other VPCs or your on-premises network through a private NAT gateway. You can route traffic from the NAT gateway through a transit gateway or a virtual private gateway. You cannot associate an elastic IP address with a private NAT gateway. You can attach an internet gateway to a VPC with a private NAT gateway, but if you route traffic from the private NAT gateway to the internet gateway, the internet gateway drops the traffic.<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1177437,
          "date": "Thu 19 Sep 2024 14:40",
          "username": "Kezuko",
          "content": "Public NAT Gateway in public subnets for the internet access<br>https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1158173,
          "date": "Sat 24 Aug 2024 21:37",
          "username": "knben",
          "content": "Public NAT GW in Public Subnet to have access to internet",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1141277,
          "date": "Mon 05 Aug 2024 16:26",
          "username": "Andy_09",
          "content": "Looks correct",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#709",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization in AWS Organizations. The company runs Amazon EC2 instances across four AWS accounts in the root organizational unit (OU). There are three nonproduction accounts and one production account. The company wants to prohibit users from launching EC2 instances of a certain size in the nonproduction accounts. The company has created a service control policy (SCP) to deny access to launch instances that use the prohibited types.<br><br>Which solutions to deploy the SCP will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#709",
          "answers": [
            {
              "choice": "<p>Attach the SCP to the root OU for the organization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Attach the SCP to the three nonproduction Organizations member accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Attach the SCP to the Organizations management account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an OU for the production account. Attach the SCP to the OU. Move the production member account into the new OU.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an OU for the required accounts. Attach the SCP to the OU. Move the nonproduction member accounts into the new OU.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 709 discussion",
      "discusstion": [
        {
          "id": 1143268,
          "date": "Wed 07 Feb 2024 12:13",
          "username": "anikolov",
          "content": "My vote is for BE",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1142825,
          "date": "Wed 07 Feb 2024 00:10",
          "username": "mestule",
          "content": "I think it's B (directly attach) and E (attach via OU).",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1285491,
          "date": "Wed 18 Sep 2024 01:09",
          "username": "MatAlves",
          "content": "B - Attach the SPC to the three accounts<br>E - Creates an OU > moves the member accounts to OU > attach the SCP to OU<br><br>\\\"If you apply an authorization policy (for example, a service control policy (SCP)), to the<br>root, it applies to all organizational units (OUs) and member accounts in the organization.\\\"<br><br>\\\"A\\\" would also affect the one production account, which we clearly don't want.<br><br>You can \\\"attach an SCP to a root, OU, or account\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html<br><br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1285492,
          "date": "Wed 18 Sep 2024 01:09",
          "username": "MatAlves",
          "content": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html<br><br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1202070,
          "date": "Thu 25 Apr 2024 16:47",
          "username": "sandordini",
          "content": "Only the non-prods need to be limited.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1153994,
          "date": "Mon 19 Feb 2024 15:21",
          "username": "67a3f49",
          "content": "According to GPT-4 it's AE:<br>A. Attach the SCP to the root OU for the organization. This approach will apply the SCP to all accounts under the organization, including both nonproduction and production accounts. However, without additional context or actions, this does not meet the requirement to exclude the production account from the restrictions.<br><br>E. Create an OU for the required accounts. Attach the SCP to the OU. Move the nonproduction member accounts into the new OU. This is the correct approach as it directly addresses the requirement. By creating a separate OU for nonproduction accounts and attaching the SCP to this OU, you can specifically target the policy to only those accounts, effectively exempting the production account from the restrictions.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1152567,
          "date": "Sat 17 Feb 2024 14:40",
          "username": "1Alpha1",
          "content": "AC - same answer<br><br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The link you provided says:<br><br>\\\"If you apply an authorization policy (for example, a service control policy (SCP)), to the<br>root, it applies to all organizational units (OUs) and member accounts in the organization.\\\"<br><br>\\\"A\\\" would also affect the one production account, which we clearly don't want.<br><br>You can \\\"attach an SCP to a root, OU, or account\\\"<br><br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1285490,
          "date": "Wed 18 Sep 2024 01:07",
          "username": "MatAlves",
          "content": "The link you provided says:<br><br>\\\"If you apply an authorization policy (for example, a service control policy (SCP)), to the<br>root, it applies to all organizational units (OUs) and member accounts in the organization.\\\"<br><br>\\\"A\\\" would also affect the one production account, which we clearly don't want.<br><br>You can \\\"attach an SCP to a root, OU, or account\\\"<br><br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1144582,
          "date": "Thu 08 Feb 2024 15:55",
          "username": "Cali182",
          "content": "From Chat<br><br>A. Attach the SCP to the root OU for the organization: Attaching the SCP to the root OU ensures that it applies to all member accounts within the organization, including both nonproduction and production accounts.<br><br>D. Create an OU for the production account. Attach the SCP to the OU. Move the production member account into the new OU: By creating a separate OU for the production account and attaching the SCP to that OU, you can ensure that the SCP only affects the nonproduction accounts while allowing the production account to operate without restrictions.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1141279,
          "date": "Mon 05 Feb 2024 17:30",
          "username": "Andy_09",
          "content": "CE should be the correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#710",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's website hosted on Amazon EC2 instances processes classified data stored in Amazon S3. Due to security concerns, the company requires a private and secure connection between its EC2 resources and Amazon S3.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#710",
          "answers": [
            {
              "choice": "<p>Set up S3 bucket policies to allow access from a VPC endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an IAM policy to grant read-write access to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a NAT gateway to access resources outside the private subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an access key ID and a secret access key to access the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 710 discussion",
      "discusstion": [
        {
          "id": 1145706,
          "date": "Fri 09 Aug 2024 18:46",
          "username": "Ashy1313",
          "content": "A VPC endpoint enables customers to privately connect to supported AWS services .",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1202073,
          "date": "Fri 25 Oct 2024 16:50",
          "username": "sandordini",
          "content": "I think this question asks about the connection not about authorization, and for a secure S3 connection (e.g. without internet exposure, etc. ) should be a VPC endpoint.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1155648,
          "date": "Wed 21 Aug 2024 15:35",
          "username": "Naveena_Devanga",
          "content": "D is the correct answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1149163,
          "date": "Tue 13 Aug 2024 12:46",
          "username": "Darshan07",
          "content": "A is the correct answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#711",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company runs its application on AWS. The application uses an Amazon Aurora PostgreSQL cluster in Multi-AZ mode for the underlying database. During a recent promotional campaign, the application experienced heavy read load and write load. Users experienced timeout issues when they attempted to access the application.<br><br>A solutions architect needs to make the application architecture more scalable and highly available.<br><br>Which solution will meet these requirements with the LEAST downtime?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#711",
          "answers": [
            {
              "choice": "<p>Create an Amazon EventBridge rule that has the Aurora cluster as a source. Create an AWS Lambda function to log the state change events of the Aurora cluster. Add the Lambda function as a target for the EventBridge rule. Add additional reader nodes to fail over to.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the Aurora cluster and activate the zero-downtime restart (ZDR) feature. Use Database Activity Streams on the cluster to track the cluster status.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add additional reader instances to the Aurora cluster. Create an Amazon RDS Proxy target group for the Aurora cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon ElastiCache for Redis cache. Replicate data from the Aurora cluster to Redis by using AWS Database Migration Service (AWS DMS) with a write-around approach.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 711 discussion",
      "discusstion": [
        {
          "id": 1149264,
          "date": "Tue 13 Feb 2024 16:05",
          "username": "Marunio",
          "content": "Only C is real viable option - Adding Reader replica for handling Read load and RDS Proxy for connections.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1141288,
          "date": "Mon 05 Feb 2024 17:49",
          "username": "Andy_09",
          "content": "I would go for option C",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1285509,
          "date": "Wed 18 Sep 2024 02:07",
          "username": "MatAlves",
          "content": "C - Explanation below:",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1285508,
          "date": "Wed 18 Sep 2024 02:06",
          "username": "MatAlves",
          "content": "A - \\\"Lambda function to log state changes\\\" - doesn't help with read/write load.<br><br>B - ZDR applies to restarts that Aurora performs automatically to resolve error conditions: doesn't help with read/write load.<br><br>D - Write-around approach: data is always written to the database and the data that is read goes to the cache. Doesn't help with read/write load.<br><br>C - CORRECT. Even though it doesn't address \\\"write operations\\\", Aurora Replicas to offload read workloads from the primary DB instance. Amazon RDS Proxy allows applications to pool and share connections established with the database, improving database efficiency and application scalability.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1238170,
          "date": "Thu 27 Jun 2024 15:18",
          "username": "Scheldon",
          "content": "AnswerC.<br><br>Proxy should help with the problem",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1180162,
          "date": "Fri 22 Mar 2024 17:25",
          "username": "alawada",
          "content": "Selected Answer: C<br>RDX proxy to handle timeout issue",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1173956,
          "date": "Fri 15 Mar 2024 02:56",
          "username": "xBUGx",
          "content": "I go with C bc there is no better option",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1146898,
          "date": "Sun 11 Feb 2024 01:40",
          "username": "jaswantn",
          "content": "RDX proxy to handle timeout issue. option C",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#712",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a web application on AWS. The application will use a VPN connection between the company's existing data centers and the company's VPCs.<br><br>The company uses Amazon Route 53 as its DNS service. The application must use private DNS records to communicate with the on-premises services from a VPC.<br><br>Which solution will meet these requirements in the MOST secure manner?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#712",
          "answers": [
            {
              "choice": "<p>Create a Route 53 Resolver outbound endpoint. Create a resolver rule. Associate the resolver rule with the VPC.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Route 53 Resolver inbound endpoint. Create a resolver rule. Associate the resolver rule with the VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Route 53 private hosted zone. Associate the private hosted zone with the VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Route 53 public hosted zone. Create a record for each service to allow service communication<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 712 discussion",
      "discusstion": [
        {
          "id": 1152207,
          "date": "Fri 16 Feb 2024 20:56",
          "username": "haci",
          "content": "If you have workloads that leverage both VPCs and on-premises resources, you also need to resolve DNS records hosted on-premises. Similarly, these on-premises resources may need to resolve names hosted on AWS. Through Resolver endpoints and conditional forwarding rules, you can resolve DNS queries between your on-premises resources and VPCs to create a hybrid cloud setup over VPN or Direct Connect (DX). Specifically:<br><br>Inbound Resolver endpoints allow DNS queries to your VPC from your on-premises network or another VPC.<br><br>Outbound Resolver endpoints allow DNS queries from your VPC to your on-premises network or another VPC.<br><br>Reference: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Right to the point!</li></ul>",
          "upvote_count": "15",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1285511,
          "date": "Wed 18 Sep 2024 02:11",
          "username": "MatAlves",
          "content": "Right to the point!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1174294,
          "date": "Fri 15 Mar 2024 14:55",
          "username": "JCVDB23",
          "content": "Amazon Route 53 Resolver provides DNS resolution for VPCs and on-premises networks over a Direct Connect or VPN connection. An outbound resolver endpoint forwards DNS queries from your VPC to your on-premises DNS service. A resolver rule specifies the domain names for the DNS queries that you want to forward (such as example.com), and the IP addresses of the DNS resolvers in your on-premises network.<br>Option C is not suitable because private hosted zones are used to route traffic within a VPC<br>https://aws.amazon.com/blogs/architecture/using-route-53-private-hosted-zones-for-cross-account-multi-region-architectures/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1330822,
          "date": "Mon 23 Dec 2024 14:37",
          "username": "Duddle88",
          "content": "\\\"The company uses Amazon Route 53 as its DNS service\\\" THERE IS NO DNS ON-PREMISES<br><br>Private DNS Resolution: It allows you to create DNS records that are only accessible within your VPC, ensuring secure and private communication between your AWS resources and on-premises network.<br><br>Forwarding DNS Queries: This is useful if you need to forward DNS queries from your VPC to your on-premises DNS servers. It's typically used when you have existing DNS infrastructure on-premises that you want to continue using.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1285512,
          "date": "Wed 18 Sep 2024 02:14",
          "username": "MatAlves",
          "content": "AWS <-> On-premisesRoute 53 Resolver<br>- Outbound ResolverFrom your VPC (AWS) to On-premises or another VPC<br>- Inbound ResolverFrom on-premises network or another VPC TO your VPC.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1237502,
          "date": "Wed 26 Jun 2024 15:57",
          "username": "Jacky_S",
          "content": "The reason why i vote on C, because the question mentioned that \\\"The company uses Amazon Route53 as it's DNS service\\\" and did not mention that is using multiple accounts, so it should be the most secure way to just add the record in it's private host zone of it's own account due to dns poisoning concern.<br><br>Of cause, i totally agree on A if the dns zone owner is in on-premises dns server which reduce the operation efforts.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1230561,
          "date": "Fri 14 Jun 2024 18:24",
          "username": "cjace",
          "content": "C. Create a Route 53 private hosted zone. Associate the private hosted zone with the VPC.<br><br>This setup allows the application within the VPC to resolve DNS queries using private DNS records, ensuring that the communication remains within the AWS network and is not exposed to the public internet. Associating the private hosted zone with the VPC ensures that only the resources within the VPC can resolve the DNS queries, maintaining a secure environment for application and on-premises service communication.<br><br>The outbound resolver endpoint and rule would be more relevant if the requirement was for resources within the VPC to resolve DNS queries for domain names that are located in the on-premises network. In that case, the outbound resolver would forward queries from the VPC to the on-premises DNS server for resolution. However, for private DNS communication from the VPC to on-premises services, the private hosted zone is the most secure method.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1180166,
          "date": "Fri 22 Mar 2024 17:27",
          "username": "alawada",
          "content": "Amazon Route 53 Resolver provides DNS resolution for VPCs and on-premises networks",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1143167,
          "date": "Wed 07 Feb 2024 10:54",
          "username": "anikolov",
          "content": "Should be A \\\"Create a Route 53 Resolver outbound endpoint.\\\"",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1141290,
          "date": "Mon 05 Feb 2024 17:52",
          "username": "Andy_09",
          "content": "Looks correct",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#713",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a photo hosting service in the us-east-1 Region. The service enables users across multiple countries to upload and view photos. Some photos are heavily viewed for months, and others are viewed for less than a week. The application allows uploads of up to 20 MB for each photo. The service uses the photo metadata to determine which photos to display to each user.<br><br>Which solution provides the appropriate user access MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#713",
          "answers": [
            {
              "choice": "<p>Store the photos in Amazon DynamoDB. Turn on DynamoDB Accelerator (DAX) to cache frequently viewed items.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the photos in the Amazon S3 Intelligent-Tiering storage class. Store the photo metadata and its S3 location in DynamoDB.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store the photos in the Amazon S3 Standard storage class. Set up an S3 Lifecycle policy to move photos older than 30 days to the S3 Standard-Infrequent Access (S3 Standard-IA) storage class. Use the object tags to keep track of metadata.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the photos in the Amazon S3 Glacier storage class. Set up an S3 Lifecycle policy to move photos older than 30 days to the S3 Glacier Deep Archive storage class. Store the photo metadata and its S3 location in Amazon OpenSearch Service.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 713 discussion",
      "discusstion": [
        {
          "id": 1141294,
          "date": "Mon 05 Feb 2024 17:59",
          "username": "Andy_09",
          "content": "B is the correct option",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 1150913,
          "date": "Thu 15 Feb 2024 12:03",
          "username": "Typewriter101",
          "content": "The Intelligent-Tiering storage class automatically moves objects between two access tiers (frequent access and infrequent access) based on their access patterns, which aligns well with the varying view frequencies of the photos. Storing metadata in DynamoDB allows for efficient querying and retrieval of photo metadata.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1238178,
          "date": "Thu 27 Jun 2024 15:24",
          "username": "Scheldon",
          "content": "AnswerB<br><br>Seem to be the best solution from provided",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1180171,
          "date": "Fri 22 Mar 2024 17:31",
          "username": "alawada",
          "content": "Store the photos in the Amazon S3 Intelligent-TieringUnpredictable scenario",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1155243,
          "date": "Wed 21 Feb 2024 05:39",
          "username": "Indrasis",
          "content": "Correct option: B",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#714",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a highly available web application on Amazon EC2 instances behind an Application Load Balancer. The company uses Amazon CloudWatch metrics.<br><br>As the traffic to the web application increases, some EC2 instances become overloaded with many outstanding requests. The CloudWatch metrics show that the number of requests processed and the time to receive the responses from some EC2 instances are both higher compared to other EC2 instances. The company does not want new requests to be forwarded to the EC2 instances that are already overloaded.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#714",
          "answers": [
            {
              "choice": "<p>Use the round robin routing algorithm based on the RequestCountPerTarget and ActiveConnectionCount CloudWatch metrics.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the least outstanding requests algorithm based on the RequestCountPerTarget and ActiveConnectionCount CloudWatch metrics.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the round robin routing algorithm based on the RequestCount and TargetResponseTime CloudWatch metrics.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the least outstanding requests algorithm based on the RequestCount and TargetResponseTime CloudWatch metrics.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 714 discussion",
      "discusstion": [
        {
          "id": 1182241,
          "date": "Mon 25 Mar 2024 07:09",
          "username": "h0ng97_spare_002",
          "content": "Option B is correct because can use \\\"RequestCountPerTarget\\\" to identify the amount of requests for each EC2 instance. Then use \\\"least outstanding requests algorithm\\\" to route to targets with the lowest number of in progress requests.<br><br>Option D is wrong because \\\"RequestCount\\\" cannot identify the amount of requests for each EC2 instance. \\\"RequestCount\\\" is for the whole ALB.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/about-aws/whats-new/2019/11/application-load-balancer-now-supports-least-outstanding-requests-algorithm-for-load-balancing-requests/</li></ul>",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1223596,
          "date": "Mon 03 Jun 2024 15:22",
          "username": "Tatai2015",
          "content": "https://aws.amazon.com/about-aws/whats-new/2019/11/application-load-balancer-now-supports-least-outstanding-requests-algorithm-for-load-balancing-requests/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1141298,
          "date": "Mon 05 Feb 2024 18:07",
          "username": "Andy_09",
          "content": "Option B would be the correct choice",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1238190,
          "date": "Thu 27 Jun 2024 15:38",
          "username": "Scheldon",
          "content": "AnswerB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1182960,
          "date": "Tue 26 Mar 2024 04:08",
          "username": "TruthWS",
          "content": "Option B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1181796,
          "date": "Sun 24 Mar 2024 16:41",
          "username": "dkw2342",
          "content": "IMO the correct answer is option D:<br><br>This is from an earlier version of the AWS documentation on ALB target groups - for some reason they removed this information in the current revision:<br><br>\\\"Consider using least outstanding requests when the requests for your application vary in complexity or your targets vary in processing capability. Round robin is a good choice when the requests and targets are similar, or if you need to distribute requests equally among targets. You can compare the effect of round robin versus least outstanding requests using the following CloudWatch metrics: RequestCount, TargetConnectionErrorCount, and TargetResponseTime.\\\"<br> https://web.archive.org/web/20200426172626/https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#modify-routing-algorithm<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I agree.<br>\\\"The CloudWatch metrics show that the number of requests processed and the time to receive the responses from some EC2 instances are both higher compared to other EC2 instances\\\". Then we must monitor time and number of requests metrics</li><li>The link is just saying that you can view \\\"RequestCount, TargetConnectionErrorCount, and TargetResponseTime\\\" to understand the difference in effect between round robin vs least outstanding requests. It is not the direct answer to this question.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1334260,
          "date": "Mon 30 Dec 2024 17:42",
          "username": "Salilgen",
          "content": "I agree.<br>\\\"The CloudWatch metrics show that the number of requests processed and the time to receive the responses from some EC2 instances are both higher compared to other EC2 instances\\\". Then we must monitor time and number of requests metrics",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1182243,
          "date": "Mon 25 Mar 2024 07:10",
          "username": "h0ng97_spare_002",
          "content": "The link is just saying that you can view \\\"RequestCount, TargetConnectionErrorCount, and TargetResponseTime\\\" to understand the difference in effect between round robin vs least outstanding requests. It is not the direct answer to this question.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1181159,
          "date": "Sat 23 Mar 2024 22:25",
          "username": "xBUGx",
          "content": "I think TargetResponseTime is the best indicator for telling is a server is overloaded or not",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1180178,
          "date": "Fri 22 Mar 2024 17:37",
          "username": "alawada",
          "content": "distribute the number of requests among instances",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1177478,
          "date": "Tue 19 Mar 2024 16:13",
          "username": "Kezuko",
          "content": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-cloudwatch-metrics.html<br><br>To understand the types",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1170279,
          "date": "Sun 10 Mar 2024 12:29",
          "username": "haci",
          "content": "The question is not asking for better performance in response time. It is just simply asking to distribute the number of requests among instances. So B seems more logical.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1157845,
          "date": "Sat 24 Feb 2024 12:41",
          "username": "osmk",
          "content": "The least outstanding requests routing algorithm routes requests to the targets with the lowest number of in progress requests > https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1152823,
          "date": "Sat 17 Feb 2024 22:10",
          "username": "osmk",
          "content": "D>>> The least outstanding requests routing algorithm routes requests to the targets with the lowest number of in progress requests > https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1144844,
          "date": "Thu 08 Feb 2024 20:13",
          "username": "Moon239",
          "content": "Why not D?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>With Least outstanding requests algorithm,new request will send it to the \\\"target\\\" with least number of outstanding requests. Targets processing long-standing requests or having lower processing capabilities are not burdened with more requests. That's why option B is correct and not option D.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1146904,
          "date": "Sun 11 Feb 2024 02:00",
          "username": "jaswantn",
          "content": "With Least outstanding requests algorithm,new request will send it to the \\\"target\\\" with least number of outstanding requests. Targets processing long-standing requests or having lower processing capabilities are not burdened with more requests. That's why option B is correct and not option D.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#715",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon EC2, AWS Fargate, and AWS Lambda to run multiple workloads in the company's AWS account. The company wants to fully make use of its Compute Savings Plans. The company wants to receive notification when coverage of the Compute Savings Plans drops.<br><br>Which solution will meet these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#715",
          "answers": [
            {
              "choice": "<p>Create a daily budget for the Savings Plans by using AWS Budgets. Configure the budget with a coverage threshold to send notifications to the appropriate email message recipients.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Lambda function that runs a coverage report against the Savings Plans. Use Amazon Simple Email Service (Amazon SES) to email the report to the appropriate email message recipients.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Budgets report for the Savings Plans budget. Set the frequency to daily.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Savings Plans alert subscription. Enable all notification options. Enter an email address to receive notifications.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 715 discussion",
      "discusstion": [
        {
          "id": 1143224,
          "date": "Wed 07 Feb 2024 11:18",
          "username": "anikolov",
          "content": "My vote is for A :https://docs.aws.amazon.com/savingsplans/latest/userguide/sp-usingBudgets.html",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1328635,
          "date": "Wed 18 Dec 2024 18:27",
          "username": "rosanna",
          "content": "AWS budget is mostly used to avoid exceeding the threshold, not under utilization alert.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1285516,
          "date": "Wed 18 Sep 2024 02:30",
          "username": "MatAlves",
          "content": "A - describes exactly what is said in this link:<br><br>\\\"You can use AWS Budgets to enable simple-to-complex cost and usage tracking. Some examples include:<br>(...)<br>Setting a daily utilization or coverage budget to track your RI or Savings Plans. You can choose to be notified through email and Amazon SNS topics when your utilization drops below 80 percent for a given day.\\\"<br><br>https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D - clearly not what the question is asking:<br><br>\\\"You can track your Savings Plans expirations and upcoming queued Savings Plans in Cost Explorer. You can use Savings Plans alerts to receive advance email alerts 1, 7, 30, or 60 days before your Savings Plan expiration date, or in when a commitment is queued for purchase. These notifications also alert you on the expiration date, and can be sent to up to 10 email recipients.\\\"<br><br>\\\"Savings Plans Expiration Alerts notify you as your existing Savings Plans approach expiration. These alerts can help you easily renew your Savings Plans .\\\"</li><li>https://docs.aws.amazon.com/savingsplans/latest/userguide/sp-alert.html</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1285517,
          "date": "Wed 18 Sep 2024 02:33",
          "username": "MatAlves",
          "content": "D - clearly not what the question is asking:<br><br>\\\"You can track your Savings Plans expirations and upcoming queued Savings Plans in Cost Explorer. You can use Savings Plans alerts to receive advance email alerts 1, 7, 30, or 60 days before your Savings Plan expiration date, or in when a commitment is queued for purchase. These notifications also alert you on the expiration date, and can be sent to up to 10 email recipients.\\\"<br><br>\\\"Savings Plans Expiration Alerts notify you as your existing Savings Plans approach expiration. These alerts can help you easily renew your Savings Plans .\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1285518,
          "date": "Wed 18 Sep 2024 02:33",
          "username": "MatAlves",
          "content": "https://docs.aws.amazon.com/savingsplans/latest/userguide/sp-alert.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1238194,
          "date": "Thu 27 Jun 2024 15:44",
          "username": "Scheldon",
          "content": "AnswerAWe can set Savings Plan in AWS Budgets which will notify us if utilization, coverage and costs will be not in set range.<br>https://docs.aws.amazon.com/savingsplans/latest/userguide/sp-usingBudgets.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1179723,
          "date": "Fri 22 Mar 2024 00:00",
          "username": "lenotc",
          "content": "D:<br>https://aws.amazon.com/about-aws/whats-new/2020/11/savings-plans-alerts-now-available-in-aws-cost-management/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1177482,
          "date": "Tue 19 Mar 2024 16:17",
          "username": "Kezuko",
          "content": "https://aws.amazon.com/blogs/aws-cloud-financial-management/launch-savings-plans-expiration-and-queued-alerts-now-available-in-aws-cost-management/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1175608,
          "date": "Sun 17 Mar 2024 07:01",
          "username": "YGHUIWRHF1234",
          "content": "Correct answer is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1175373,
          "date": "Sat 16 Mar 2024 23:42",
          "username": "xBUGx",
          "content": "A is precisely targeted",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1161118,
          "date": "Wed 28 Feb 2024 01:47",
          "username": "ManishGup",
          "content": "Ny vote going to D.<br>https://aws.amazon.com/blogs/aws-cloud-financial-management/launch-savings-plans-expiration-and-queued-alerts-now-available-in-aws-cost-management/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1155247,
          "date": "Wed 21 Feb 2024 05:44",
          "username": "Indrasis",
          "content": "A is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1146907,
          "date": "Sun 11 Feb 2024 02:08",
          "username": "jaswantn",
          "content": "Option D...In the Savings Plans Overview page indicate how many days in advance you would like to receive Savings Plans Alerts for Plan's expiration and upcoming queued purchase notifications.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141299,
          "date": "Mon 05 Feb 2024 18:08",
          "username": "Andy_09",
          "content": "Option D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>alert subscription will notify u before ending saving plan</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1147216,
          "date": "Sun 11 Feb 2024 13:30",
          "username": "hajra313",
          "content": "alert subscription will notify u before ending saving plan",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#716",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a real-time data ingestion solution on AWS. The solution consists of the most recent version of Amazon Managed Streaming for Apache Kafka (Amazon MSK). The solution is deployed in a VPC in private subnets across three Availability Zones.<br><br>A solutions architect needs to redesign the data ingestion solution to be publicly available over the internet. The data in transit must also be encrypted.<br><br>Which solution will meet these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#716",
          "answers": [
            {
              "choice": "<p>Configure public subnets in the existing VPC. Deploy an MSK cluster in the public subnets. Update the MSK cluster security settings to enable mutual TLS authentication.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new VPC that has public subnets. Deploy an MSK cluster in the public subnets. Update the MSK cluster security settings to enable mutual TLS authentication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Application Load Balancer (ALB) that uses private subnets. Configure an ALB security group inbound rule to allow inbound traffic from the VPC CIDR block for HTTPS protocol.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a Network Load Balancer (NLB) that uses private subnets. Configure an NLB listener for HTTPS communication over the internet.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 716 discussion",
      "discusstion": [
        {
          "id": 1152213,
          "date": "Fri 16 Feb 2024 21:18",
          "username": "haci",
          "content": "Since we are talking about real-time data (UDP packets) ALB is not a viable solution. You don't need to listen HTTPS, so D is eliminated. If you create a new VPC, you must create link between the old one and this is not mentioned in B. So It is A for me.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1285519,
          "date": "Wed 18 Sep 2024 02:40",
          "username": "MatAlves",
          "content": "\\\"You can turn on public access to an MSK cluster at no additional cost...<br><br>To turn on public access to a cluster, first ensure that the cluster meets all of the following conditions:<br><br>- The subnets that are associated with the cluster must be public.<br>- Unauthenticated access control must be off and at least one of the following access-control methods must be on: SASL/IAM, SASL/SCRAM, mTLS.<br>- ...\\\"<br><br>https://docs.aws.amazon.com/msk/latest/developerguide/public-access.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>There is no reference to a NEW VPC being required in the documentation. We can simply configure subnets in the existing VPC.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1285520,
          "date": "Wed 18 Sep 2024 02:40",
          "username": "MatAlves",
          "content": "There is no reference to a NEW VPC being required in the documentation. We can simply configure subnets in the existing VPC.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1238197,
          "date": "Thu 27 Jun 2024 15:48",
          "username": "Scheldon",
          "content": "AnswerA<br><br>I need to agree that answer will probably be Option A.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1155277,
          "date": "Wed 21 Feb 2024 06:50",
          "username": "Indrasis",
          "content": "A is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1149288,
          "date": "Tue 13 Feb 2024 16:25",
          "username": "Marunio",
          "content": "A, since Kafka is loadbalancing itself. - https://dattell.com/data-architecture-blog/load-balancing-with-kafka/#:~:textLoad%20balancing%20with%20Kafka%20is,partitions%20while%20preserving%20message%20ordering.<br><br>B - why create new VPC?<br><br>C / D - Kafka is loadbalacing itself, also NLB can't handle HTTPS.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1141300,
          "date": "Mon 05 Feb 2024 18:12",
          "username": "Andy_09",
          "content": "Option A",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#717",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate an on-premises legacy application to AWS. The application ingests customer order files from an on-premises enterprise resource planning (ERP) system. The application then uploads the files to an SFTP server. The application uses a scheduled job that checks for order files every hour.<br><br>The company already has an AWS account that has connectivity to the on-premises network. The new application on AWS must support integration with the existing ERP system. The new application must be secure and resilient and must use the SFTP protocol to process orders from the ERP system immediately.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#717",
          "answers": [
            {
              "choice": "<p>Create an AWS Transfer Family SFTP internet-facing server in two Availability Zones. Use Amazon S3 storage. Create an AWS Lambda function to process order files. Use S3 Event Notifications to send s3:ObjectCreated:* events to the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Transfer Family SFTP internet-facing server in one Availability Zone. Use Amazon Elastic File System (Amazon EFS) storage. Create an AWS Lambda function to process order files. Use a Transfer Family managed workflow to invoke the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Transfer Family SFTP internal server in two Availability Zones. Use Amazon Elastic File System (Amazon EFS) storage. Create an AWS Step Functions state machine to process order files. Use Amazon EventBridge Scheduler to invoke the state machine to periodically check Amazon EFS for order files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Transfer Family SFTP internal server in two Availability Zones. Use Amazon S3 storage. Create an AWS Lambda function to process order files. Use a Transfer Family managed workflow to invoke the Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 717 discussion",
      "discusstion": [
        {
          "id": 1143236,
          "date": "Wed 07 Feb 2024 11:30",
          "username": "anikolov",
          "content": "D looks more secure over existing on-prem to AWS connection<br>-Transfer Family SFTP internal server in two Availability Zones.<br>-Use Amazon S3 storage.<br>-Use a Transfer Family managed workflow to invoke the Lambda function\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>If the legacy application needs to ingest customer order files from an on-premises ERP system and upload them to an SFTP server, an internet-facing AWS Transfer Family SFTP server would be the appropriate choice.<br><br>In this scenario, the SFTP server needs to be accessible from the internet to facilitate the file transfer between the on-premises system and AWS. Therefore, an internet-facing server is required to securely receive the files.</li><li>\\\"The company already has an AWS account that has connectivity to the on-premises network.\\\" Internal Server.</li></ul>",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1147234,
          "date": "Sun 11 Feb 2024 14:02",
          "username": "hajra313",
          "content": "If the legacy application needs to ingest customer order files from an on-premises ERP system and upload them to an SFTP server, an internet-facing AWS Transfer Family SFTP server would be the appropriate choice.<br><br>In this scenario, the SFTP server needs to be accessible from the internet to facilitate the file transfer between the on-premises system and AWS. Therefore, an internet-facing server is required to securely receive the files.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"The company already has an AWS account that has connectivity to the on-premises network.\\\" Internal Server.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1221804,
          "date": "Thu 30 May 2024 21:58",
          "username": "Mr_Marcus",
          "content": "\\\"The company already has an AWS account that has connectivity to the on-premises network.\\\" Internal Server.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1317621,
          "date": "Mon 25 Nov 2024 17:15",
          "username": "ckhemani",
          "content": "A and B is out since it is public facing and we don't need public facing SFTP since Company already have Connection to AWS thro ON-PREMISES.<br><br>Initially i thought it will C since it was doing scheduled as they were doing scheduled job every hour on on-premises. Then the read thro question and saw they are saying with new solution, they want to process the file immediately after it is uploaded so D is correct since it will trigger the Lambda file as soon as file appears on S3.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1238210,
          "date": "Thu 27 Jun 2024 15:57",
          "username": "Scheldon",
          "content": "Answer D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1202143,
          "date": "Thu 25 Apr 2024 18:22",
          "username": "sandordini",
          "content": "\\\"order files from an on-premises enterprise resource planning (ERP)\\\" - Therefore Internal Endpoint is enough, no need for Internet-facing, although Internet-facing also handles on-prem connections as well, but \\\"most secure\\\". Even tho we are talking about SecureFTP....Very bad wording of the question... :(<br>Definitely S3 against EFS, so D should be the answer...<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Also: With managed workflows, you can kick off a workflow after a file has been transferred over SFTP</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1202144,
          "date": "Thu 25 Apr 2024 18:25",
          "username": "sandordini",
          "content": "Also: With managed workflows, you can kick off a workflow after a file has been transferred over SFTP",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1187272,
          "date": "Mon 01 Apr 2024 09:32",
          "username": "Hung23",
          "content": "Correct answer is A because must support integration with existing erp system we need to choose sftp internal-facing",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1184498,
          "date": "Thu 28 Mar 2024 02:21",
          "username": "buzzinmumbai",
          "content": "Answer is D . Both A&D are right but the question says it must support integration with existing erp system. I believe you can use transfer family for the existing job onprem as well to check for files.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1180190,
          "date": "Fri 22 Mar 2024 17:47",
          "username": "alawada",
          "content": "has an AWS account that has connectivity to the on-premises network.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1169074,
          "date": "Fri 08 Mar 2024 20:59",
          "username": "xBUGx",
          "content": "The company already has an AWS account that has connectivity to the on-premises network. So no need internet.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1154072,
          "date": "Mon 19 Feb 2024 16:28",
          "username": "67a3f49",
          "content": "I would go in D as it's internal network.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1153938,
          "date": "Mon 19 Feb 2024 14:28",
          "username": "NayeraB",
          "content": "I think A makes more sense",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1141302,
          "date": "Mon 05 Feb 2024 18:22",
          "username": "Andy_09",
          "content": "A is the correct option",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#718",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's applications use Apache Hadoop and Apache Spark to process data on premises. The existing infrastructure is not scalable and is complex to manage.<br><br>A solutions architect must design a scalable solution that reduces operational complexity. The solution must keep the data processing on premises.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#718",
          "answers": [
            {
              "choice": "<p>Use AWS Site-to-Site VPN to access the on-premises Hadoop Distributed File System (HDFS) data and application. Use an Amazon EMR cluster to process the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS DataSync to connect to the on-premises Hadoop Distributed File System (HDFS) cluster. Create an Amazon EMR cluster to process the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the Apache Hadoop application and the Apache Spark application to Amazon EMR clusters on AWS Outposts. Use the EMR clusters to process the data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Snowball device to migrate the data to an Amazon S3 bucket. Create an Amazon EMR cluster to process the data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 718 discussion",
      "discusstion": [
        {
          "id": 1143238,
          "date": "Wed 07 Feb 2024 11:32",
          "username": "anikolov",
          "content": "C cover requirement: The solution must keep the data processing on premises",
          "upvote_count": "14",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1141305,
          "date": "Mon 05 Feb 2024 18:24",
          "username": "Andy_09",
          "content": "I would go for option C, as data processing has to be done on premise.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1238208,
          "date": "Thu 27 Jun 2024 15:56",
          "username": "Scheldon",
          "content": "Answer C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1202147,
          "date": "Thu 25 Apr 2024 18:28",
          "username": "sandordini",
          "content": "Only solution to keep the processing on-prem.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1187275,
          "date": "Mon 01 Apr 2024 09:35",
          "username": "Hung23",
          "content": "Create an Amazon EMR Cluster: With the data now available in Amazon S3, the company can create an Amazon EMR cluster for data processing. EMR provides scalable Hadoop and Spark clusters that can process data stored in S3, enabling the company to leverage cloud-based processing resources while still keeping the data processing on premises.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Selected response : C</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1248792,
          "date": "Tue 16 Jul 2024 11:24",
          "username": "example_",
          "content": "Selected response : C",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#719",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating a large amount of data from on-premises storage to AWS. Windows, Mac, and Linux based Amazon EC2 instances in the same AWS Region will access the data by using SMB and NFS storage protocols. The company will access a portion of the data routinely. The company will access the remaining data infrequently.<br><br>The company needs to design a solution to host the data.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#719",
          "answers": [
            {
              "choice": "<p>Create an Amazon Elastic File System (Amazon EFS) volume that uses EFS Intelligent-Tiering. Use AWS DataSync to migrate the data to the EFS volume.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon FSx for ONTAP instance. Create an FSx for ONTAP file system with a root volume that uses the auto tiering policy. Migrate the data to the FSx for ONTAP volume.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 bucket that uses S3 Intelligent-Tiering. Migrate the data to the S3 bucket by using an AWS Storage Gateway Amazon S3 File Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon FSx for OpenZFS file system. Migrate the data to the new volume.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 719 discussion",
      "discusstion": [
        {
          "id": 1153090,
          "date": "Sun 18 Feb 2024 08:46",
          "username": "ogerber",
          "content": "Amazon FsX for NetAPP ONTAP feature: Multi-protocol access to data using the Network File System (NFS), Server Message Block (SMB), and Internet Small Computer Systems Interface (iSCSI) protocols",
          "upvote_count": "17",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1146914,
          "date": "Sun 11 Feb 2024 02:28",
          "username": "jaswantn",
          "content": "option C ....SMB and NFS storage protocols ->S3 file gateway<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"S3 File Gateway is used for on-premises data intensive applications that need file protocol access to objects in S3. \\\"<br><br>https://aws.amazon.com/storagegateway/file/s3/</li><li>The company is MIGRATING data from on-premises to AWS.<br><br>Amazon FSx for NetApp ONTAP offers high-performance file storage that's broadly accessible from Linux, Windows, and macOS compute instances via the industry-standard NFS, SMB, iSCSI, and NVMe-over-TCP protocols.<br><br>https://aws.amazon.com/fsx/netapp-ontap/features/</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1285524,
          "date": "Wed 18 Sep 2024 02:56",
          "username": "MatAlves",
          "content": "\\\"S3 File Gateway is used for on-premises data intensive applications that need file protocol access to objects in S3. \\\"<br><br>https://aws.amazon.com/storagegateway/file/s3/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The company is MIGRATING data from on-premises to AWS.<br><br>Amazon FSx for NetApp ONTAP offers high-performance file storage that's broadly accessible from Linux, Windows, and macOS compute instances via the industry-standard NFS, SMB, iSCSI, and NVMe-over-TCP protocols.<br><br>https://aws.amazon.com/fsx/netapp-ontap/features/</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1285525,
          "date": "Wed 18 Sep 2024 02:57",
          "username": "MatAlves",
          "content": "The company is MIGRATING data from on-premises to AWS.<br><br>Amazon FSx for NetApp ONTAP offers high-performance file storage that's broadly accessible from Linux, Windows, and macOS compute instances via the industry-standard NFS, SMB, iSCSI, and NVMe-over-TCP protocols.<br><br>https://aws.amazon.com/fsx/netapp-ontap/features/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1285526,
          "date": "Wed 18 Sep 2024 02:57",
          "username": "MatAlves",
          "content": "Amazon FSx for NetApp ONTAP offers high-performance file storage that's broadly accessible from Linux, Windows, and macOS compute instances via the industry-standard NFS, SMB, iSCSI, and NVMe-over-TCP protocols.<br><br>https://aws.amazon.com/fsx/netapp-ontap/features/<br><br>\\\"S3 File Gateway is used for on-premises data intensive applications that need file protocol access to objects in S3. \\\"<br><br>https://aws.amazon.com/storagegateway/file/s3/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1238207,
          "date": "Thu 27 Jun 2024 15:56",
          "username": "Scheldon",
          "content": "Answer B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1215852,
          "date": "Wed 22 May 2024 18:43",
          "username": "rjjkc",
          "content": "I think it is \\\"C\\\"<br>Not \\\"B\\\" - The question never indicates the company is using \\\"NetApp ONTAP file systems\\\", so I am not sure what it means by \\\"Migrate the data to the FSx for ONTAP volume\\\".Please correct if misunderstood.<br>\\\"C\\\" clearly indicates how to migrate the data to S3, the S3 Intelligent-Tiering addressed the access pattern in the question and you can SMB/NFS mount S3 bucket<br>https://docs.aws.amazon.com/filegateway/latest/files3/using-smb-fileshare.html<br>https://docs.aws.amazon.com/filegateway/latest/files3/GettingStartedAccessFileShare.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1212988,
          "date": "Fri 17 May 2024 19:35",
          "username": "TwinSpark",
          "content": "FSx for ONTAP support NFS and SMB Protocol, even AWS Storage Gateway Amazon S3 File Gateway support them but it is used to connect on premises devices to file on s3, not to connect ec2 instances in the same aws region",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1211766,
          "date": "Wed 15 May 2024 07:28",
          "username": "Linuslin",
          "content": "Amazon FSx for NetApp ONTAP provides fully managed shared storage in the AWS Cloud with the popular data access and management capabilities of ONTAP.<br>Move workloads running on NetApp or other NFS/SMB/iSCSI servers to AWS without modifying application code or how you manage data.<br>And FsX for NetAPP ONTAP support \\\"Reducing storage costs with automatic and intelligent storage tiering.\\\"<br><br>https://aws.amazon.com/tw/fsx/netapp-ontap/faqs/#product-faqs#netapp-ontap-faq#reducing-storage-costs-with-automatic-and-intelligent-storage-tiering",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1184933,
          "date": "Thu 28 Mar 2024 19:10",
          "username": "camps",
          "content": "it's C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1182491,
          "date": "Mon 25 Mar 2024 14:23",
          "username": "TruthWS",
          "content": "B - FSx for ONTAP support SMB and NFS",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1180200,
          "date": "Fri 22 Mar 2024 17:55",
          "username": "alawada",
          "content": "Amazon FsX for NetAPP ONTAP feature: Multi-protocol access to data using the Network File System (NFS), Server Message Block (SMB), and Internet Small Computer Systems Interface (iSCSI) protocols<br>Option C: make no sense I see it as a distractor",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1177496,
          "date": "Tue 19 Mar 2024 16:30",
          "username": "Kezuko",
          "content": "Both B and C works, but it seems like C has a least operational overhead<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The company will access the remaining data infrequently.\\\"</li><li>https://www.amazonaws.cn/en/storagegateway/faqs/#:~:textThe%20Amazon%20S3%20File%20Gateway,be%20directly%20accessed%20in%20S3.</li><li>It's B, option C makes no sense.<br><br>1. \\\"Migrate the data to the S3 bucket using an AWS Storage Gateway Amazon S3 File Gateway.\\\" -&gt; Nothing about running the gateway to access the files via SMB and NFS afterwards.<br><br>2. Even if you ignore this, the S3 File Gateway requires a virtual appliance to be deployed (on EC2 in this case), which contradicts the \\\"LEAST operational overhead\\\" requirement.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1190460,
          "date": "Sat 06 Apr 2024 17:22",
          "username": "rondelldell",
          "content": "The company will access the remaining data infrequently.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1177497,
          "date": "Tue 19 Mar 2024 16:31",
          "username": "Kezuko",
          "content": "https://www.amazonaws.cn/en/storagegateway/faqs/#:~:textThe%20Amazon%20S3%20File%20Gateway,be%20directly%20accessed%20in%20S3.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It's B, option C makes no sense.<br><br>1. \\\"Migrate the data to the S3 bucket using an AWS Storage Gateway Amazon S3 File Gateway.\\\" -&gt; Nothing about running the gateway to access the files via SMB and NFS afterwards.<br><br>2. Even if you ignore this, the S3 File Gateway requires a virtual appliance to be deployed (on EC2 in this case), which contradicts the \\\"LEAST operational overhead\\\" requirement.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1181844,
          "date": "Sun 24 Mar 2024 17:16",
          "username": "dkw2342",
          "content": "It's B, option C makes no sense.<br><br>1. \\\"Migrate the data to the S3 bucket using an AWS Storage Gateway Amazon S3 File Gateway.\\\" -> Nothing about running the gateway to access the files via SMB and NFS afterwards.<br><br>2. Even if you ignore this, the S3 File Gateway requires a virtual appliance to be deployed (on EC2 in this case), which contradicts the \\\"LEAST operational overhead\\\" requirement.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1155284,
          "date": "Wed 21 Feb 2024 06:59",
          "username": "Indrasis",
          "content": "Option C looks correct.<br>\\\"The company will access a portion of the data routinely. The company will access the remaining data infrequently.\\\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1153920,
          "date": "Mon 19 Feb 2024 13:48",
          "username": "Appon",
          "content": "option B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1149106,
          "date": "Tue 13 Feb 2024 11:58",
          "username": "MattBJ",
          "content": "C is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1147250,
          "date": "Sun 11 Feb 2024 14:29",
          "username": "hajra313",
          "content": "Option A and D do not support SMB and NFS file system . Option b looks correvt",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1141306,
          "date": "Mon 05 Feb 2024 18:26",
          "username": "Andy_09",
          "content": "Option with S3 usage looks corrcet",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#720",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A manufacturing company runs its report generation application on AWS. The application generates each report in about 20 minutes. The application is built as a monolith that runs on a single Amazon EC2 instance. The application requires frequent updates to its tightly coupled modules. The application becomes complex to maintain as the company adds new features.<br><br>Each time the company patches a software module, the application experiences downtime. Report generation must restart from the beginning after any interruptions. The company wants to redesign the application so that the application can be flexible, scalable, and gradually improved. The company wants to minimize application downtime.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#720",
          "answers": [
            {
              "choice": "<p>Run the application on AWS Lambda as a single function with maximum provisioned concurrency.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Run the application on Amazon EC2 Spot Instances as microservices with a Spot Fleet default allocation strategy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Run the application on Amazon Elastic Container Service (Amazon ECS) as microservices with service auto scaling.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Run the application on AWS Elastic Beanstalk as a single application environment with an all-at-once deployment strategy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 720 discussion",
      "discusstion": [
        {
          "id": 1141307,
          "date": "Mon 05 Feb 2024 18:27",
          "username": "Andy_09",
          "content": "Microservices using ECS",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 1285528,
          "date": "Wed 18 Sep 2024 03:00",
          "username": "MatAlves",
          "content": "Monolith -> MicroservicesECS.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1187279,
          "date": "Mon 01 Apr 2024 09:46",
          "username": "Hung23",
          "content": "Sure 100%",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1165168,
          "date": "Mon 04 Mar 2024 01:05",
          "username": "asdfcdsxdfc",
          "content": "Microservices using Elastic Container Service is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1155286,
          "date": "Wed 21 Feb 2024 07:02",
          "username": "Indrasis",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1150981,
          "date": "Thu 15 Feb 2024 13:27",
          "username": "Typewriter101",
          "content": "B will not help<br>spot instances provide cost savings but using it for a stateful task isn't right cause spot instances can be interrupted<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Correct answer but incorrect reasoning. Spot fleet includes on-demand AND spot instances to provide the desired capacity.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1202156,
          "date": "Thu 25 Apr 2024 18:39",
          "username": "sandordini",
          "content": "Correct answer but incorrect reasoning. Spot fleet includes on-demand AND spot instances to provide the desired capacity.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#721",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to rearchitect a large-scale web application to a serverless microservices architecture. The application uses Amazon EC2 instances and is written in Python.<br><br>The company selected one component of the web application to test as a microservice. The component supports hundreds of requests each second. The company wants to create and test the microservice on an AWS solution that supports Python. The solution must also scale automatically and require minimal infrastructure and minimal operational support.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#721",
          "answers": [
            {
              "choice": "<p>Use a Spot Fleet with auto scaling of EC2 instances that run the most recent Amazon Linux operating system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Elastic Beanstalk web server environment that has high availability configured.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic Kubernetes Service (Amazon EKS). Launch Auto Scaling groups of self-managed EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Lambda function that runs custom developed code.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 721 discussion",
      "discusstion": [
        {
          "id": 1141310,
          "date": "Mon 05 Feb 2024 18:31",
          "username": "Andy_09",
          "content": "Lambda looks like a better option",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 1150983,
          "date": "Thu 15 Feb 2024 13:31",
          "username": "Typewriter101",
          "content": "Lambda<br>serverless, scalable, minimal infrastructure, handling hundreds of requests per second",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1202408,
          "date": "Fri 26 Apr 2024 08:25",
          "username": "sandordini",
          "content": "A: auto-scaling of EC2 instances - Lot of overhead + Infra<br>B: The company selected one component of the web application to test as a microservice. The component supports hundreds of requests each second.>lastic Beanstalk is a bad choice if you need worker processes. The whole point of a worker process is to perform a task in the background without slowing down your main web app. But Elastic Beanstalk doesn't support this option in a scalable way.<br>Also, they want to test just 1 selected microservice and I think it's a bit of overkill to do it using Elastic Beanstalk. Happy to be challenged though!<br>C: self-managed EC2 instances > infra + operational overhead<br>D: Lambda supports Python, microservice should be quicker than 15 mins, worst case scenario the test will fail.. (that's the purpose tests are conducted for anyway..)<br>I'd go for D",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1182229,
          "date": "Mon 25 Mar 2024 06:33",
          "username": "gsgdga",
          "content": "microservice >EKS, ECS<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>containerized application then go with EKS, ECS is absolutely yes, but there would be more solution for microservices e.g. lambda</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1303791,
          "date": "Mon 28 Oct 2024 02:58",
          "username": "LuongTo",
          "content": "containerized application then go with EKS, ECS is absolutely yes, but there would be more solution for microservices e.g. lambda",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1180207,
          "date": "Fri 22 Mar 2024 18:04",
          "username": "alawada",
          "content": "C is the correct answer. The best way to deploy microservice is to use container-based service<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Maintain nodes yourself with self-managed nodes\\\"<br><br>https://docs.aws.amazon.com/eks/latest/userguide/worker.html</li><li>Microservices doesn't automatically mean ECS or EKS. Read the question again: \\\"Serverless\\\" clearly contradicts \\\"self-managed EC2 instances\\\".<br><br>D is the only option that fits the criteria.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1285551,
          "date": "Wed 18 Sep 2024 05:31",
          "username": "MatAlves",
          "content": "\\\"Maintain nodes yourself with self-managed nodes\\\"<br><br>https://docs.aws.amazon.com/eks/latest/userguide/worker.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1182427,
          "date": "Mon 25 Mar 2024 12:27",
          "username": "dkw2342",
          "content": "Microservices doesn't automatically mean ECS or EKS. Read the question again: \\\"Serverless\\\" clearly contradicts \\\"self-managed EC2 instances\\\".<br><br>D is the only option that fits the criteria.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1156779,
          "date": "Thu 22 Feb 2024 23:44",
          "username": "rubiteb",
          "content": "Best answer is C.<br>The application is a large-scale we app as mentioned in the question.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You cannot have 'minimal infrastructure and minimal operational support' with 'Auto Scaling groups of self-managed EC2 instances.'</li><li>I mean B for Elastic Beans Stalk not C.EBS is the best solution for running large-scale application.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1285552,
          "date": "Wed 18 Sep 2024 05:33",
          "username": "MatAlves",
          "content": "You cannot have 'minimal infrastructure and minimal operational support' with 'Auto Scaling groups of self-managed EC2 instances.'",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1156781,
          "date": "Thu 22 Feb 2024 23:46",
          "username": "rubiteb",
          "content": "I mean B for Elastic Beans Stalk not C.EBS is the best solution for running large-scale application.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1143955,
          "date": "Thu 08 Feb 2024 02:53",
          "username": "Umuntu",
          "content": "C is the correct answer. The best way to deploy microservice is to use container-based service such as EKS or ECS. So C is great<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Using ECS or EKS involves managing cluster and ec2 which will increase the infrastructure and operational overhead compared to lambda which is serverless.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1150985,
          "date": "Thu 15 Feb 2024 13:33",
          "username": "Typewriter101",
          "content": "Using ECS or EKS involves managing cluster and ec2 which will increase the infrastructure and operational overhead compared to lambda which is serverless.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141308,
          "date": "Mon 05 Feb 2024 18:29",
          "username": "Andy_09",
          "content": "EBS for minimal infra maintenance",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#722",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an AWS Direct Connect connection from its on-premises location to an AWS account. The AWS account has 30 different VPCs in the same AWS Region. The VPCs use private virtual interfaces (VIFs). Each VPC has a CIDR block that does not overlap with other networks under the company's control.<br><br>The company wants to centrally manage the networking architecture while still allowing each VPC to communicate with all other VPCs and on-premises networks.<br><br>Which solution will meet these requirements with the LEAST amount of operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#722",
          "answers": [
            {
              "choice": "<p>Create a transit gateway, and associate the Direct Connect connection with a new transit VIF. Turn on the transit gateway's route propagation feature.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Direct Connect gateway. Recreate the private VIFs to use the new gateway. Associate each VPC by creating new virtual private gateways.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a transit VPConnect the Direct Connect connection to the transit VPCreate a peering connection between all other VPCs in the Region. Update the route tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create AWS Site-to-Site VPN connections from on premises to each VPC. Ensure that both VPN tunnels are UP for each connection. Turn on the route propagation feature.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 722 discussion",
      "discusstion": [
        {
          "id": 1141311,
          "date": "Mon 05 Feb 2024 18:32",
          "username": "Andy_09",
          "content": "Option A",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1143960,
          "date": "Thu 08 Feb 2024 02:58",
          "username": "Umuntu",
          "content": "A is the best solution",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1285553,
          "date": "Wed 18 Sep 2024 05:37",
          "username": "MatAlves",
          "content": "\\\"You can use AWS Direct Connect gateway to connect your Direct Connect connection over a transit virtual interface to the VPCs or VPNs that are attached to your transit gateway. You associate a Direct Connect gateway with the transit gateway. Then, create a transit virtual interface for your AWS Direct Connect connection to the Direct Connect gateway.\\\"<br>https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-transit-gateways.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1180209,
          "date": "Fri 22 Mar 2024 18:07",
          "username": "alawada",
          "content": "Turn on the transit gateway's route propagation feature.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1169144,
          "date": "Fri 08 Mar 2024 23:57",
          "username": "cedser8",
          "content": "https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1150986,
          "date": "Thu 15 Feb 2024 13:41",
          "username": "Typewriter101",
          "content": "transit gateway -> hub and spoke",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#723",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has applications that run on Amazon EC2 instances. The EC2 instances connect to Amazon RDS databases by using an IAM role that has associated policies. The company wants to use AWS Systems Manager to patch the EC2 instances without disrupting the running applications.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#723",
          "answers": [
            {
              "choice": "<p>Create a new IAM role. Attach the AmazonSSMManagedInstanceCore policy to the new IAM role. Attach the new IAM role to the EC2 instances and the existing IAM role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM user. Attach the AmazonSSMManagedInstanceCore policy to the IAM user. Configure Systems Manager to use the IAM user to manage the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable Default Host Configuration Management in Systems Manager to manage the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Remove the existing policies from the existing IAM role. Add the AmazonSSMManagedInstanceCore policy to the existing IAM role.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 723 discussion",
      "discusstion": [
        {
          "id": 1146918,
          "date": "Sun 11 Feb 2024 02:43",
          "username": "jaswantn",
          "content": "option C....Default Host Management Configuration creates and applies a default IAM role to ensure that Systems Manager has permissions to manage all instances in the Region and perform automated patch scans using Patch Manager.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 1162306,
          "date": "Thu 29 Feb 2024 08:48",
          "username": "Pics00094",
          "content": "C is the answer",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1329250,
          "date": "Fri 20 Dec 2024 03:27",
          "username": "LeonSauveterre",
          "content": "Well.. Actually I don't know what to choose. A or C ??<br><br>A - EC2 instances can have only one IAM role attached at a time. Whether attaching multiple roles is possible or not depends on whether AWS allows such configuration in your environment.<br>B - Systems Manager manages EC2 instances through the instance's attached IAM role, not an IAM user.<br>C - It doesn't address the core requirement of maintaining the existing RDS connectivity. It still requires the EC2 instances to have the necessary IAM permissions to be managed by SSM. The IAM role associated with the EC2 instance must still have the AmazonSSMManagedInstanceCore policy attached to enable Systems Manager capabilities.<br>D - Removing the existing policies would break the application's ability to connect to the RDS database. This directly contradicts the requirement of not disrupting running applications.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1328633,
          "date": "Wed 18 Dec 2024 18:16",
          "username": "rosanna",
          "content": "I'd vote for A because the request here is not to disrupt the existing workload, meaning the existing IAM role must be intact with the addition to the new permission set that gives SSM patch manager patching capabilities.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1285555,
          "date": "Wed 18 Sep 2024 05:44",
          "username": "MatAlves",
          "content": "\\\"The Default Host Management Configuration setting allows AWS Systems Manager to manage your Amazon EC2 instances automatically as managed instances.<br><br>Default Host Management Configuration makes it possible to manage EC2 instances without your having to manually create an AWS Identity and Access Management (IAM) instance profile. Instead, Default Host Management Configuration creates and applies a default IAM role to ensure that Systems Manager has permissions to manage all instances in the AWS account and AWS Region where it's activated.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-manager-default-host-management-configuration.html</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1285556,
          "date": "Wed 18 Sep 2024 05:44",
          "username": "MatAlves",
          "content": "https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-manager-default-host-management-configuration.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1206038,
          "date": "Fri 03 May 2024 12:24",
          "username": "88f8032",
          "content": "i think A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1153897,
          "date": "Mon 19 Feb 2024 13:06",
          "username": "NayeraB",
          "content": "So is C same as A, but automated?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, A is impossible because EC2 instances can have only one IAM role attached at a time.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1329241,
          "date": "Fri 20 Dec 2024 03:16",
          "username": "LeonSauveterre",
          "content": "No, A is impossible because EC2 instances can have only one IAM role attached at a time.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1152845,
          "date": "Sat 17 Feb 2024 22:46",
          "username": "osmk",
          "content": "C is fine",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1142292,
          "date": "Tue 06 Feb 2024 16:08",
          "username": "Andy_09",
          "content": "C is a better option",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1141340,
          "date": "Mon 05 Feb 2024 19:28",
          "username": "Andy_09",
          "content": "Correct answer A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Attach the new IAM role to the EC2 instances and the existing IAM role\\\" - You can't attach multiple policies to an EC2 instance. So A is wrong.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1158965,
          "date": "Sun 25 Feb 2024 17:47",
          "username": "arunkpskpm",
          "content": "\\\"Attach the new IAM role to the EC2 instances and the existing IAM role\\\" - You can't attach multiple policies to an EC2 instance. So A is wrong.",
          "upvote_count": "6",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#724",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs container applications by using Amazon Elastic Kubernetes Service (Amazon EKS) and the Kubernetes Horizontal Pod Autoscaler. The workload is not consistent throughout the day. A solutions architect notices that the number of nodes does not automatically scale out when the existing nodes have reached maximum capacity in the cluster, which causes performance issues.<br><br>Which solution will resolve this issue with the LEAST administrative overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#724",
          "answers": [
            {
              "choice": "<p>Scale out the nodes by tracking the memory usage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Kubernetes Cluster Autoscaler to manage the number of nodes in the cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Lambda function to resize the EKS cluster automatically.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon EC2 Auto Scaling group to distribute the workload.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 724 discussion",
      "discusstion": [
        {
          "id": 1285558,
          "date": "Wed 18 Sep 2024 05:48",
          "username": "MatAlves",
          "content": "Refer to<br><br>https://www.examtopics.com/discussions/amazon/view/109702-exam-aws-certified-solutions-architect-associate-saa-c03/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1237455,
          "date": "Wed 26 Jun 2024 14:45",
          "username": "Scheldon",
          "content": "AnswerB<br><br>Using of Kubernetes Cluster Autoscaler seems to be the best solution here",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1180212,
          "date": "Fri 22 Mar 2024 18:15",
          "username": "alawada",
          "content": "When the workload increases and existing nodes reach maximum capacity, the Cluster Autoscaler detects the need for additional nodes and requests them from the underlying AWS infrastructure.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1157850,
          "date": "Sat 24 Feb 2024 12:55",
          "username": "osmk",
          "content": "Bcorrect",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1155957,
          "date": "Thu 22 Feb 2024 01:33",
          "username": "Naveena_Devanga",
          "content": "B is the correct answer. The Kubernetes Cluster Autoscaler automatically adjusts the number of nodes in your cluster when pods fail or are rescheduled onto other nodes. The Cluster Autoscaler uses Auto Scaling groups",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1146921,
          "date": "Sun 11 Feb 2024 02:45",
          "username": "jaswantn",
          "content": "option B.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141343,
          "date": "Mon 05 Feb 2024 19:30",
          "username": "Andy_09",
          "content": "Kubernetes Cluster Autoscaler looks correct",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#725",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company maintains about 300 TB in Amazon S3 Standard storage month after month. The S3 objects are each typically around 50 GB in size and are frequently replaced with multipart uploads by their global application. The number and size of S3 objects remain constant, but the company's S3 storage costs are increasing each month.<br><br>How should a solutions architect reduce costs in this situation?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#725",
          "answers": [
            {
              "choice": "<p>Switch from multipart uploads to Amazon S3 Transfer Acceleration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable an S3 Lifecycle policy that deletes incomplete multipart uploads.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure S3 inventory to prevent objects from being archived too quickly.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon CloudFront to reduce the number of objects stored in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 725 discussion",
      "discusstion": [
        {
          "id": 1285559,
          "date": "Wed 18 Sep 2024 05:50",
          "username": "MatAlves",
          "content": "B - No brainer.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpu-abort-incomplete-mpu-lifecycle-config.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1285560,
          "date": "Wed 18 Sep 2024 05:50",
          "username": "MatAlves",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpu-abort-incomplete-mpu-lifecycle-config.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1180217,
          "date": "Fri 22 Mar 2024 18:25",
          "username": "alawada",
          "content": "Optimize multipart uploads to reduce costs associated with storing incomplete multipart upload parts. Ensure that multipart uploads are completed and the parts are assembled into complete objects in a timely manner to avoid unnecessary storage costs.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1151025,
          "date": "Thu 15 Feb 2024 14:28",
          "username": "Typewriter101",
          "content": "when primary concern is cost and the data transfer multipart upload may be the more cost-effective than S3 transfer acceleration. So switching to s3 TA is won't be reasonable.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1143973,
          "date": "Thu 08 Feb 2024 03:11",
          "username": "Umuntu",
          "content": "Option B is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141345,
          "date": "Mon 05 Feb 2024 19:33",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#726",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed a multiplayer game for mobile devices. The game requires live location tracking of players based on latitude and longitude. The data store for the game must support rapid updates and retrieval of locations.<br><br>The game uses an Amazon RDS for PostgreSQL DB instance with read replicas to store the location data. During peak usage periods, the database is unable to maintain the performance that is needed for reading and writing updates. The game's user base is increasing rapidly.<br><br>What should a solutions architect do to improve the performance of the data tier?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#726",
          "answers": [
            {
              "choice": "<p>Take a snapshot of the existing DB instance. Restore the snapshot with Multi-AZ enabled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate from Amazon RDS to Amazon OpenSearch Service with OpenSearch Dashboards.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon DynamoDB Accelerator (DAX) in front of the existing DB instance. Modify the game to use DAX.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Amazon ElastiCache for Redis cluster in front of the existing DB instance. Modify the game to use Redis.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 726 discussion",
      "discusstion": [
        {
          "id": 1239416,
          "date": "Sat 29 Jun 2024 22:44",
          "username": "Rhydian25",
          "content": "Why are people voting for C? PostgreSQL is a relational DB. DynamoDB is NoSQL.<br><br>It makes no sense<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>its bezos with his alt accounts.</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1262127,
          "date": "Wed 07 Aug 2024 16:34",
          "username": "1e22522",
          "content": "its bezos with his alt accounts.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1285562,
          "date": "Wed 18 Sep 2024 05:57",
          "username": "MatAlves",
          "content": "Refer to https://www.examtopics.com/discussions/amazon/view/53854-exam-aws-certified-solutions-architect-associate-saa-c02/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Specific to Redis, ElastiCache lets you 'scale in'  or 'scale out'  both reads and writes. Cluster mode offers added shard support, enabling write scaling.<br><br>https://aws.amazon.com/blogs/database/building-a-real-time-gaming-leaderboard-with-amazon-elasticache-for-redis/</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1285564,
          "date": "Wed 18 Sep 2024 05:59",
          "username": "MatAlves",
          "content": "Specific to Redis, ElastiCache lets you 'scale in'  or 'scale out'  both reads and writes. Cluster mode offers added shard support, enabling write scaling.<br><br>https://aws.amazon.com/blogs/database/building-a-real-time-gaming-leaderboard-with-amazon-elasticache-for-redis/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1238970,
          "date": "Sat 29 Jun 2024 02:34",
          "username": "Lin878",
          "content": "I confuse, Is DAX working with RDS?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1237550,
          "date": "Wed 26 Jun 2024 17:17",
          "username": "Jacky_S",
          "content": "The answer C is not making any sense with \\\"Deploy Amazon DynamoDB Accelerator (DAX) in front of the existing DB instance.\\\", because AWS DynamoDB is a DBaaS.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1237519,
          "date": "Wed 26 Jun 2024 16:28",
          "username": "Scheldon",
          "content": "AnswerD<br><br>ElastiCache is a fully managed, in-memory caching service that provides microsecond read and write latencies that support flexible, real-time use cases.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/creating-elasticache-cluster-with-RDS-settings.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Beside DAX is for DynamoDB and I think it will not work with RDS</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1237520,
          "date": "Wed 26 Jun 2024 16:29",
          "username": "Scheldon",
          "content": "Beside DAX is for DynamoDB and I think it will not work with RDS",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1232530,
          "date": "Tue 18 Jun 2024 18:43",
          "username": "ug56c",
          "content": "Amazon ElastiCache for Redis for RDS",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1224645,
          "date": "Wed 05 Jun 2024 11:55",
          "username": "sheilawu",
          "content": "\\\" writing updates\\\" so it shoud be DAX.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1216646,
          "date": "Thu 23 May 2024 16:27",
          "username": "f07ed8f",
          "content": "Vote for C (DAX) as ElastiCache for Redis cluster only helps on read operation but not white.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Vote for C (DAX) as ElastiCache for Redis cluster only helps on read operation but not write operation.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1216647,
          "date": "Thu 23 May 2024 16:27",
          "username": "f07ed8f",
          "content": "Vote for C (DAX) as ElastiCache for Redis cluster only helps on read operation but not write operation.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1207683,
          "date": "Tue 07 May 2024 04:27",
          "username": "sirajtr47",
          "content": "Performance >> Amazon ElastiCache for Redis cluster<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yeah, but this is an online game that need to update everything instantly so i don't think that caching is the right method here<br>think about it, you are making movments in the online game its like loading new data all the time, so each time you move you load the cache for next time usage. what if you dont need to use it again?<br>i dont think elasticache is the right method here so it leave us with DAX<br>what do you think?</li><li>i agree with DAX, but how it can be deploying in front of DB instance? Since that is a DBaaS.</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1223508,
          "date": "Mon 03 Jun 2024 11:31",
          "username": "Rylz",
          "content": "Yeah, but this is an online game that need to update everything instantly so i don't think that caching is the right method here<br>think about it, you are making movments in the online game its like loading new data all the time, so each time you move you load the cache for next time usage. what if you dont need to use it again?<br>i dont think elasticache is the right method here so it leave us with DAX<br>what do you think?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>i agree with DAX, but how it can be deploying in front of DB instance? Since that is a DBaaS.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1237547,
          "date": "Wed 26 Jun 2024 17:12",
          "username": "Jacky_S",
          "content": "i agree with DAX, but how it can be deploying in front of DB instance? Since that is a DBaaS.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1155811,
          "date": "Wed 21 Feb 2024 20:25",
          "username": "FZA24",
          "content": "D looks correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1143974,
          "date": "Thu 08 Feb 2024 03:15",
          "username": "Umuntu",
          "content": "D looks correct",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1141347,
          "date": "Mon 05 Feb 2024 19:36",
          "username": "Andy_09",
          "content": "Looks correct",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#727",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores critical data in Amazon DynamoDB tables in the company's AWS account. An IT administrator accidentally deleted a DynamoDB table. The deletion caused a significant loss of data and disrupted the company's operations. The company wants to prevent this type of disruption in the future.<br><br>Which solution will meet this requirement with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#727",
          "answers": [
            {
              "choice": "<p>Configure a trail in AWS CloudTrail. Create an Amazon EventBridge rule for delete actions. Create an AWS Lambda function to automatically restore deleted DynamoDB tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a backup and restore plan for the DynamoDB tables. Recover the DynamoDB tables manually.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure deletion protection on the DynamoDB tables.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enable point-in-time recovery on the DynamoDB tables.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 727 discussion",
      "discusstion": [
        {
          "id": 1152051,
          "date": "Fri 16 Aug 2024 14:10",
          "username": "BillaRanga",
          "content": "https://aws.amazon.com/about-aws/whats-new/2023/03/amazon-dynamodb-table-deletion-protection/<br><br>Deletion protection is now available for Amazon DynamoDB tables in all AWS Regions. DynamoDB now makes it possible for you to protect your tables from accidental deletion when performing regular table management operations. When creating new tables or managing existing tables, authorized administrators can set the deletion protection property for each table, which will govern whether a table can be deleted.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B and D talks about recovering but not preventing. A is tooooo much work</li></ul>",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1152053,
          "date": "Fri 16 Aug 2024 14:11",
          "username": "BillaRanga",
          "content": "Option B and D talks about recovering but not preventing. A is tooooo much work",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1141349,
          "date": "Mon 05 Aug 2024 18:39",
          "username": "Andy_09",
          "content": "Option C",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1151028,
          "date": "Thu 15 Aug 2024 13:33",
          "username": "Typewriter101",
          "content": "B involves more operations.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#728",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises data center that is running out of storage capacity. The company wants to migrate its storage infrastructure to AWS while minimizing bandwidth costs. The solution must allow for immediate retrieval of data at no additional cost.<br><br>How can these requirements be met?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#728",
          "answers": [
            {
              "choice": "<p>Deploy Amazon S3 Glacier Vault and enable expedited retrieval. Enable provisioned retrieval capacity for the workload.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy AWS Storage Gateway using cached volumes. Use Storage Gateway to store data in Amazon S3 while retaining copies of frequently accessed data subsets locally.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy AWS Storage Gateway using stored volumes to store data locally. Use Storage Gateway to asynchronously back up point-in-time snapshots of the data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy AWS Direct Connect to connect with the on-premises data center. Configure AWS Storage Gateway to store data locally. Use Storage Gateway to asynchronously back up point-in-time snapshots of the data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 728 discussion",
      "discusstion": [
        {
          "id": 1154840,
          "date": "Tue 20 Feb 2024 17:20",
          "username": "67a3f49",
          "content": "B is the correct one because:<br>\\\"A company has an on-premises data center that is running out of storage capacity\\\".<br>So when they keep data on-premis and do the backup to S3 they'll run out of data and this is not their purpose.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Storage Gateway in Stored mode DOS does NOT improve capacity =E2=80=93 the main copy of data is stored on the gateway. It's B for that same reason</li></ul>",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 1309242,
          "date": "Sun 10 Nov 2024 01:17",
          "username": "Sergantus",
          "content": "Storage Gateway in Stored mode DOS does NOT improve capacity =E2=80=93 the main copy of data is stored on the gateway. It's B for that same reason",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1174371,
          "date": "Fri 15 Mar 2024 17:12",
          "username": "JCVDB23",
          "content": "B. Deploy AWS Storage Gateway using cached volumes. Use Storage Gateway to store data in Amazon S3 while retaining copies of frequently accessed data subsets locally.<br><br>AWS Storage Gateway's cached volumes let you use Amazon S3 as your primary data storage while retaining frequently accessed data locally in your storage gateway. Cached volumes minimize the need to scale your on-premises storage infrastructure, while still providing your applications with low-latency access to their frequently accessed data. All data transferred between your gateway and AWS storage is encrypted for security. You can also save on data transfer costs as AWS Storage Gateway compresses all data transferred between the gateway and AWS, allowing you to store more data in AWS while reducing your data transfer costs.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1329259,
          "date": "Fri 20 Dec 2024 03:52",
          "username": "LeonSauveterre",
          "content": "Another headache one. Well, I'll go for B for now.<br>A - Really cost-effective, but immediate retrievals incurs additional costs.<br>B - Less optimal for datasets where most data is accessed frequently and must be immediately available locally.<br>C - The on-prem data center \\\"is running out of storage capacity\\\". Then why store everything locally? Why even migrate storage infrastructure to AWS...<br>D - Like C, and also, bandwidth costs are not acceptable.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1238972,
          "date": "Sat 29 Jun 2024 02:43",
          "username": "Lin878",
          "content": "I vote \\\"C\\\" because Question doesn't mention to access frequent data. If they want access frequent data, I will vote \\\"B\\\" with cached volume.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>you don't fool me bezos boy</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1262130,
          "date": "Wed 07 Aug 2024 16:38",
          "username": "1e22522",
          "content": "you don't fool me bezos boy",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1237531,
          "date": "Wed 26 Jun 2024 16:43",
          "username": "Scheldon",
          "content": "AnswerB<br><br>I think B answer is the best option here. We will store only data which are frequently accessed and all other we will sent to the cloud. So we will have access to all data but hence most frequently accessed data will be stored in On-Premises Cache we will not pay a lot of additionally $$ for data transfer if any.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1231026,
          "date": "Sat 15 Jun 2024 16:26",
          "username": "ike001",
          "content": "C is the correct. answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1188430,
          "date": "Wed 03 Apr 2024 04:36",
          "username": "mohammadthainat",
          "content": "1- \\\"The company wants to migrate its storage infrastructure to AWS\\\" ->> B as data will be migrated to AWS.<br><br>2- \\\"The solution must allow for immediate retrieval of data at no additional cost.\\\" ->> B as data will be stored in S3 Standard storage class which provide immediate data retrieval",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1182237,
          "date": "Mon 25 Mar 2024 07:03",
          "username": "gsgdga",
          "content": "immediate retrieval of data =E2=86=92 shoud have full data set on-premises > stored volumes AWS Storage Gateway",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1156666,
          "date": "Thu 22 Feb 2024 20:56",
          "username": "rubiteb",
          "content": "B -as the company is migrating their data to AWS so data has to be stored in the cloud.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1152648,
          "date": "Sat 17 Feb 2024 16:27",
          "username": "osmk",
          "content": "C>>><br>Cached Mode: In this mode, your primary data resides in Amazon S3, while frequently accessed data is cached locally for low-latency access.<br>Stored Mode: Here, your entire dataset is stored locally, allowing low-latency access on premises. Simultaneously, the data is asynchronously backed up to Amazon S3.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>How does that address the fact the company is \\\"running out of storage capacity\\\"?</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1285567,
          "date": "Wed 18 Sep 2024 06:10",
          "username": "MatAlves",
          "content": "How does that address the fact the company is \\\"running out of storage capacity\\\"?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1152058,
          "date": "Fri 16 Feb 2024 15:16",
          "username": "BillaRanga",
          "content": "D -> It takes One month to set up AWS Direct Connect setup<br>A -> No sense as it talks nothing about On-Prem<br>B -> Cached volume only stores frequently access data On-Prem, But requirement tells \\\"Data\\\" so we assume it tells All data<br><br>C -> Correct, as Stored volumes stores everything in Storage Gateway On-Prem while asynchronously backing up to the cloud<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D: It never said one month would be a problem.. Question doesn't state a matter of urgency, but it still stores the data on-prem, and synchronizes to AWS.<br>C: The same issue as D. Stores data locally, but our on-prem storage is full. Thats why the company wants cloud.<br>A: Has retrieval costs.</li><li>i was voting for C, but C doesnt solve on prem out of capacity issue.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1202421,
          "date": "Fri 26 Apr 2024 08:50",
          "username": "sandordini",
          "content": "D: It never said one month would be a problem.. Question doesn't state a matter of urgency, but it still stores the data on-prem, and synchronizes to AWS.<br>C: The same issue as D. Stores data locally, but our on-prem storage is full. Thats why the company wants cloud.<br>A: Has retrieval costs.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1189374,
          "date": "Thu 04 Apr 2024 15:59",
          "username": "xBUGx",
          "content": "i was voting for C, but C doesnt solve on prem out of capacity issue.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1146930,
          "date": "Sun 11 Feb 2024 02:58",
          "username": "jaswantn",
          "content": "option C... data being accessible through stored volume reduces bandwidth cost and provides immediate retrieval of data.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141356,
          "date": "Mon 05 Feb 2024 19:53",
          "username": "Andy_09",
          "content": "Option C, as it makes all the data available for low-latency access.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#729",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a three-tier web application in a VPC across multiple Availability Zones. Amazon EC2 instances run in an Auto Scaling group for the application tier.<br><br>The company needs to make an automated scaling plan that will analyze each resource's daily and weekly historical workload trends. The configuration must scale resources appropriately according to both the forecast and live changes in utilization.<br><br>Which scaling strategy should a solutions architect recommend to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#729",
          "answers": [
            {
              "choice": "<p>Implement dynamic scaling with step scaling based on average CPU utilization from the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable predictive scaling to forecast and scale. Configure dynamic scaling with target tracking<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an automated scheduled scaling action based on the traffic patterns of the web application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a simple scaling policy. Increase the cooldown period based on the EC2 instance startup time.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 729 discussion",
      "discusstion": [
        {
          "id": 1202422,
          "date": "Sat 26 Oct 2024 08:57",
          "username": "sandordini",
          "content": "Not A: Only handles Dynamic scaling, not pattern-based/predictive scaling.<br>B: Both Predictive and dynamic<br>Not C: Manual version of predictive, lacks live circumstances..<br>Not D: The question doesn't talk about cool down period...",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1180223,
          "date": "Sun 22 Sep 2024 17:53",
          "username": "alawada",
          "content": "https://aws.amazon.com/blogs/aws/new-predictive-scaling-for-ec2-powered-by-machine-learning/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1152064,
          "date": "Fri 16 Aug 2024 14:19",
          "username": "BillaRanga",
          "content": "By configuring dynamic scaling with target tracking, the company can automatically adjust resources based on the forecasted demand while also responding to live changes in utilization",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1141360,
          "date": "Mon 05 Aug 2024 18:56",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#730",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A package delivery company has an application that uses Amazon EC2 instances and an Amazon Aurora MySQL DB cluster. As the application becomes more popular, EC2 instance usage increases only slightly. DB cluster usage increases at a much faster rate.<br><br>The company adds a read replica, which reduces the DB cluster usage for a short period of time. However, the load continues to increase. The operations that cause the increase in DB cluster usage are all repeated read statements that are related to delivery details. The company needs to alleviate the effect of repeated reads on the DB cluster.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#730",
          "answers": [
            {
              "choice": "<p>Implement an Amazon ElastiCache for Redis cluster between the application and the DB cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add an additional read replica to the DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Aurora Auto Scaling for the Aurora read replicas.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the DB cluster to have multiple writer instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 730 discussion",
      "discusstion": [
        {
          "id": 1141366,
          "date": "Mon 05 Feb 2024 20:01",
          "username": "Andy_09",
          "content": "Option A",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1240191,
          "date": "Mon 01 Jul 2024 16:18",
          "username": "Scheldon",
          "content": "AnswerC<br><br>After topic reconsideration I will go with Aurora autoscaling<br><br>To meet your connectivity and workload requirements, Aurora Auto Scaling dynamically adjusts the number of Aurora Replicas (reader DB instances) provisioned for an Aurora DB cluster. Aurora Auto Scaling is available for both Aurora MySQL and Aurora PostgreSQL. Aurora Auto Scaling enables your Aurora DB cluster to handle sudden increases in connectivity or workload. When the connectivity or workload decreases, Aurora Auto Scaling removes unnecessary Aurora Replicas so that you don't pay for unused provisioned DB instances.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Integrating.AutoScaling.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>repeated readsperfect scenario for CACHING.<br><br>How adding more reader instances will \\\"alleviate the effect of repeated reads on the DB cluster\\\"?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1285568,
          "date": "Wed 18 Sep 2024 06:17",
          "username": "MatAlves",
          "content": "repeated readsperfect scenario for CACHING.<br><br>How adding more reader instances will \\\"alleviate the effect of repeated reads on the DB cluster\\\"?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1237539,
          "date": "Wed 26 Jun 2024 16:57",
          "username": "Scheldon",
          "content": "AnswerA",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1202425,
          "date": "Fri 26 Apr 2024 09:02",
          "username": "sandordini",
          "content": "A. Although Redis is not typically cheap, the question statement clearly shouts for a cached solution, which is Redis... Also, that's the only long-term solution, as we don't know anything about the volumes, scale of trends, etc...",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1177929,
          "date": "Wed 20 Mar 2024 06:06",
          "username": "Kezuko",
          "content": "\\\"repeated read statements\\\" -> Cache layer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1152068,
          "date": "Fri 16 Feb 2024 15:24",
          "username": "BillaRanga",
          "content": "The question says, \\\"The operations that cause the increase in DB cluster usage are all **repeated read statements** that are related to delivery details.\\\" - Read statements mean we can cache the results - hence, we need No read-replicas; we need only a cache layer to improve the performance.. Also, Adding read replicas costs money. The requirement is to meet them MOST cost-effectively",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#731",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that uses an Amazon DynamoDB table for storage. A solutions architect discovers that many requests to the table are not returning the latest data. The company's users have not reported any other issues with database performance. Latency is in an acceptable range.<br><br>Which design change should the solutions architect recommend?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#731",
          "answers": [
            {
              "choice": "<p>Add read replicas to the table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a global secondary index (GSI).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Request strongly consistent reads for the table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Request eventually consistent reads for the table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 731 discussion",
      "discusstion": [
        {
          "id": 1180226,
          "date": "Sun 22 Sep 2024 18:01",
          "username": "alawada",
          "content": "DynamoDB by default provides eventual consistency for read operations, which means that a query may not reflect the most recent data changes immediately after an update. Instead, it may take some time for the data to propagate across all replicas in the DynamoDB global table.<br><br>To ensure that read operations return the latest data and address the issue of stale data being returned to users, the solutions architect should recommend switching the read consistency level from eventually consistent reads to strongly consistent reads.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1152074,
          "date": "Fri 16 Aug 2024 14:29",
          "username": "BillaRanga",
          "content": "Both tables and LSIs provide two read consistency options: eventually consistent (default) and strongly consistent reads.<br>1) Eventually Consistent Reads<br>Eventually consistent is the default read consistent model for all read operations. When issuing eventually consistent reads to a DynamoDB table or an index, the responses may not reflect the results of a recently completed write operation. If you repeat your read request after a short time, the response should eventually return the more recent item.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>2) Strongly Consistent Reads<br>Read operations such as GetItem, Query, and Scan provide an optional ConsistentRead parameter. If you set ConsistentRead to true, DynamoDB returns a response with the most up-to-date data, reflecting the updates from all prior write operations that were successful.<br><br>Hence it is C<br>A) Read-replicas are Async again, Which will persist the same problem.<br>B) Indexing will further cause latency, this has nothing to do with the question</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1152075,
          "date": "Fri 16 Aug 2024 14:29",
          "username": "BillaRanga",
          "content": "2) Strongly Consistent Reads<br>Read operations such as GetItem, Query, and Scan provide an optional ConsistentRead parameter. If you set ConsistentRead to true, DynamoDB returns a response with the most up-to-date data, reflecting the updates from all prior write operations that were successful.<br><br>Hence it is C<br>A) Read-replicas are Async again, Which will persist the same problem.<br>B) Indexing will further cause latency, this has nothing to do with the question",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1141367,
          "date": "Mon 05 Aug 2024 19:01",
          "username": "Andy_09",
          "content": "Option C",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#732",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed its application on Amazon EC2 instances with an Amazon RDS database. The company used the principle of least privilege to configure the database access credentials. The company's security team wants to protect the application and the database from SQL injection and other web-based attacks.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#732",
          "answers": [
            {
              "choice": "<p>Use security groups and network ACLs to secure the database and application servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS WAF to protect the application. Use RDS parameter groups to configure the security settings.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Network Firewall to protect the application and the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use different database accounts in the application code for different functions. Avoid granting excessive privileges to the database users.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 732 discussion",
      "discusstion": [
        {
          "id": 1141370,
          "date": "Mon 05 Aug 2024 19:06",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1152077,
          "date": "Fri 16 Aug 2024 14:32",
          "username": "BillaRanga",
          "content": "protect the application and the database from SQL injection and other web-based attacks. -> WAF",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1200364,
          "date": "Tue 22 Oct 2024 22:17",
          "username": "03beafc",
          "content": "It's probably still B, but waf can't be attached directly to ec2's",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1151056,
          "date": "Thu 15 Aug 2024 14:24",
          "username": "Typewriter101",
          "content": "SQL injection -> WAF",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#733",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company runs applications in AWS accounts that are part of an organization in AWS Organizations. The applications run on Amazon Aurora PostgreSQL databases across all the accounts. The company needs to prevent malicious activity and must identify abnormal failed and incomplete login attempts to the databases.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#733",
          "answers": [
            {
              "choice": "<p>Attach service control policies (SCPs) to the root of the organization to identity the failed login attempts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable the Amazon RDS Protection feature in Amazon GuardDuty for the member accounts of the organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Publish the Aurora general logs to a log group in Amazon CloudWatch Logs. Export the log data to a central Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Publish all the Aurora PostgreSQL database events in AWS CloudTrail to a central Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 733 discussion",
      "discusstion": [
        {
          "id": 1152081,
          "date": "Fri 16 Feb 2024 15:45",
          "username": "BillaRanga",
          "content": "A -> SCPs are not for monitoring or logging<br><br>B->correct<br>After you enable the RDS Protection feature, GuardDuty immediately starts monitoring RDS login activity from Aurora databases in your account. GuardDuty continuously monitors and profiles RDS login activity for suspicious activity, for example, unauthorized access to Aurora database in your account, from a previously unseen external actor.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1192175,
          "date": "Tue 09 Apr 2024 11:28",
          "username": "zinabu",
          "content": "malicious activitygurd duty",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1237307,
          "date": "Wed 26 Jun 2024 10:06",
          "username": "Scheldon",
          "content": "AnswerB<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_BestPractices.Security.html<br>Amazon GuardDuty is a threat detection service that helps protect your accounts, containers, workloads, and the data within your AWS environment. Using machine learning (ML) models, and anomaly and threat detection capabilities, GuardDuty continuously monitors different log sources and runtime activity to identify and prioritize potential security risks and malicious activities in your environment.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/guard-duty-rds-protection.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1155975,
          "date": "Thu 22 Feb 2024 02:00",
          "username": "Naveena_Devanga",
          "content": "B is the correct answer.<br><br>Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your Amazon Web Services accounts, workloads, and data stored in Amazon S3.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1141379,
          "date": "Mon 05 Feb 2024 20:17",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#734",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an AWS Direct Connect connection from its corporate data center to its VPC in the us-east-1 Region. The company recently acquired a corporation that has several VPCs and a Direct Connect connection between its on-premises data center and the eu-west-2 Region. The CIDR blocks for the VPCs of the company and the corporation do not overlap. The company requires connectivity between two Regions and the data centers. The company needs a solution that is scalable while reducing operational overhead.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#734",
          "answers": [
            {
              "choice": "<p>Set up inter-Region VPC peering between the VPC in us-east-1 and the VPCs in eu-west-2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create private virtual interfaces from the Direct Connect connection in us-east-1 to the VPCs in eu-west-2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Establish VPN appliances in a fully meshed VPN network hosted by Amazon EC2. Use AWS VPN CloudHub to send and receive data between the data centers and each VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Connect the existing Direct Connect connection to a Direct Connect gateway. Route traffic from the virtual private gateways of the VPCs in each Region to the Direct Connect gateway.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 734 discussion",
      "discusstion": [
        {
          "id": 1319758,
          "date": "Fri 29 Nov 2024 15:43",
          "username": "JA2018",
          "content": "Connect the existing Direct Connect connection to a Direct Connect gateway. Route traffic from the virtual private gateways of the VPCs in each Region to the Direct Connect gateway.<br>Explanation:<br>Scalability and Reduced Overhead:<br>Using a Direct Connect gateway allows for easy scaling by adding more virtual private gateways from different regions to the same Direct Connect gateway, eliminating the need to manage separate connections for each region and minimizing operational overhead.<br>Inter-Region Connectivity:<br>A Direct Connect gateway acts as a central hub for routing traffic between VPCs in different regions through the Direct Connect connection, providing the required connectivity between the US-East-1 and EU-West-2 regions",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1152082,
          "date": "Fri 16 Feb 2024 15:52",
          "username": "BillaRanga",
          "content": "\\\"If you want to set up a Direct Connect to one or more VPC in many different regions (same account), you must use a Direct Connect Gateway.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>CloudHub isa VPN (encrypted) connection, so it goes over the public Internet., Whereas DirectConnect is Private (but not encrypted). So CloudHub is not suited for this useCase</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1152085,
          "date": "Fri 16 Feb 2024 15:56",
          "username": "BillaRanga",
          "content": "CloudHub isa VPN (encrypted) connection, so it goes over the public Internet., Whereas DirectConnect is Private (but not encrypted). So CloudHub is not suited for this useCase",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1146934,
          "date": "Sun 11 Feb 2024 03:03",
          "username": "jaswantn",
          "content": "option D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1142317,
          "date": "Tue 06 Feb 2024 16:21",
          "username": "Andy_09",
          "content": "Changing to Option D for simpler implementation.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>sure \\\"Andy\\\"</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1262134,
          "date": "Wed 07 Aug 2024 16:54",
          "username": "1e22522",
          "content": "sure \\\"Andy\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141388,
          "date": "Mon 05 Feb 2024 20:34",
          "username": "Andy_09",
          "content": "Option A",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#735",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a mobile game that streams score updates to a backend processor and then posts results on a leaderboard. A solutions architect needs to design a solution that can handle large traffic spikes, process the mobile game updates in order of receipt, and store the processed updates in a highly available database. The company also wants to minimize the management overhead required to maintain the solution.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#735",
          "answers": [
            {
              "choice": "<p>Push score updates to Amazon Kinesis Data Streams. Process the updates in Kinesis Data Streams with AWS Lambda. Store the processed updates in Amazon DynamoDB.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Push score updates to Amazon Kinesis Data Streams. Process the updates with a fleet of Amazon EC2 instances set up for Auto Scaling. Store the processed updates in Amazon Redshift.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Push score updates to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe an AWS Lambda function to the SNS topic to process the updates. Store the processed updates in a SQL database running on Amazon EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Push score updates to an Amazon Simple Queue Service (Amazon SQS) queue. Use a fleet of Amazon EC2 instances with Auto Scaling to process the updates in the SQS queue. Store the processed updates in an Amazon RDS Multi-AZ DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 735 discussion",
      "discusstion": [
        {
          "id": 1152089,
          "date": "Fri 16 Feb 2024 16:07",
          "username": "BillaRanga",
          "content": "requirement -1: \\\"Stream + process in order + Minimum Overhead\\\"Kinesis Data Stream + Lambda<br>requirement-2: \\\"Highly available database + Min Management overhead\\\"DynamoDb<br><br>Setting Up Ec2 instance or MultiAZ DBoverhead",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1141395,
          "date": "Mon 05 Feb 2024 20:40",
          "username": "Andy_09",
          "content": "Option A",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1237317,
          "date": "Wed 26 Jun 2024 10:19",
          "username": "Scheldon",
          "content": "AnswerA",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1202438,
          "date": "Fri 26 Apr 2024 09:24",
          "username": "sandordini",
          "content": "Even though it looks like SQS, but EC2 and Multi-AZ DB fail when it comes to minimal operational overhead.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1188723,
          "date": "Wed 03 Apr 2024 16:47",
          "username": "mohammadthainat",
          "content": "easy one: mobile game ->> DynamoDB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#736",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple AWS accounts with applications deployed in the us-west-2 Region. Application logs are stored within Amazon S3 buckets in each account. The company wants to build a centralized log analysis solution that uses a single S3 bucket. Logs must not leave us-west-2, and the company wants to incur minimal operational overhead.<br><br>Which solution meets these requirements and is MOST cost-effective?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#736",
          "answers": [
            {
              "choice": "<p>Create an S3 Lifecycle policy that copies the objects from one of the application S3 buckets to the centralized S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Same-Region Replication to replicate logs from the S3 buckets to another S3 bucket in us-west-2. Use this S3 bucket for log analysis.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Write a script that uses the PutObject API operation every day to copy the entire contents of the buckets to another S3 bucket in us-west-2. Use this S3 bucket for log analysis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Write AWS Lambda functions in these accounts that are triggered every time logs are delivered to the S3 buckets (s3:ObjectCreated:* event). Copy the logs to another S3 bucket in us-west-2. Use this S3 bucket for log analysis.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 736 discussion",
      "discusstion": [
        {
          "id": 1152090,
          "date": "Fri 16 Feb 2024 16:13",
          "username": "BillaRanga",
          "content": "The main Use case of S3 same region replication is \\\"log aggregation, live replication between production and test accounts\\\".",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1141396,
          "date": "Mon 05 Feb 2024 20:41",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1317664,
          "date": "Mon 25 Nov 2024 18:29",
          "username": "ckhemani",
          "content": "Option C and D is out ot question since it required operation overhead.<br>Between A and B, Lifecycle is used to transfer between S3storage classes and not within same S3 Buckets. So B is correct answer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1202443,
          "date": "Fri 26 Apr 2024 09:29",
          "username": "sandordini",
          "content": "Needs to be B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#737",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that delivers on-demand training videos to students around the world. The application also allows authorized content developers to upload videos. The data is stored in an Amazon S3 bucket in the us-east-2 Region.<br><br>The company has created an S3 bucket in the eu-west-2 Region and an S3 bucket in the ap-southeast-1 Region. The company wants to replicate the data to the new S3 buckets. The company needs to minimize latency for developers who upload videos and students who stream videos near eu-west-2 and ap-southeast-1.<br><br>Which combination of steps will meet these requirements with the FEWEST changes to the application? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#737",
          "answers": [
            {
              "choice": "<p>Configure one-way replication from the us-east-2 S3 bucket to the eu-west-2 S3 bucket. Configure one-way replication from the us-east-2 S3 bucket to the ap-southeast-1 S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure one-way replication from the us-east-2 S3 bucket to the eu-west-2 S3 bucket. Configure one-way replication from the eu-west-2 S3 bucket to the ap-southeast-1 S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure two-way (bidirectional) replication among the S3 buckets that are in all three Regions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 Multi-Region Access Point. Modify the application to use the Amazon Resource Name (ARN) of the Multi-Region Access Point for video streaming. Do not modify the application for video uploads.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 Multi-Region Access Point. Modify the application to use the Amazon Resource Name (ARN) of the Multi-Region Access Point for video streaming and uploads.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 737 discussion",
      "discusstion": [
        {
          "id": 1152102,
          "date": "Fri 16 Feb 2024 16:51",
          "username": "BillaRanga",
          "content": "To keep replication in SYNC across all three regions, we use Bi-directional.<br>Multi-Region Access Point for video streaming and uploads.-> uploads to nearest Low latency region and Bi-directional replication will keep other two regions in SYNC this reducing the upload and streaming latency<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>For confirmation purposes: https://aws.amazon.com/s3/features/multi-region-access-points/</li></ul>",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 1204039,
          "date": "Mon 29 Apr 2024 15:30",
          "username": "bujuman",
          "content": "For confirmation purposes: https://aws.amazon.com/s3/features/multi-region-access-points/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1330685,
          "date": "Mon 23 Dec 2024 07:03",
          "username": "kajiyatta",
          "content": "This is an example of the kind of joke problem AWS provides. The information needed to derive justification is vague and it is not clear which region the uploading developer will be using.<br>Time spent on these problems is wasted.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1329316,
          "date": "Fri 20 Dec 2024 07:00",
          "username": "LeonSauveterre",
          "content": "I agree with @kbgsgsgs and here's why:<br><br>What the scenario is about: Currenly, videos are in us, so they're uploaded to us. Then, we want to replicate them to eu and ap. People near eu and ap should be fast delivered with the videos they need.<br><br>So with \\\"FEWEST changes\\\", all we need is replicate from us to both eu and ap, which is option B. Option C works but not fewest changes.<br><br>The uploads are directly to us, so option E actually induces more latency. You may argue that if we can upload videos directly to eu/ap, it would be faster. Yes, but it requires modifying the application for both streaming and upload workflows, so much more complicated than option D, and definitely not fewest changes.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry, typo. All we need is replicate from us to both eu and ap, which is option A, not option B. You can share you ideas here if you disagree</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1329317,
          "date": "Fri 20 Dec 2024 07:02",
          "username": "LeonSauveterre",
          "content": "Sorry, typo. All we need is replicate from us to both eu and ap, which is option A, not option B. You can share you ideas here if you disagree",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1319760,
          "date": "Fri 29 Nov 2024 15:57",
          "username": "JA2018",
          "content": "My personal take: C & D<br><br>C > Although stem did not specify which region S# bucket the developers will upload their contents, this will allow new contents in 1 S3 bucket to replicate over to the other 2 S3 buckets.<br><br>D > uploads needs to be performed to the first region only (Closest???) and accessed by remaining two S3 buckets.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>but I am confused by Google AI search's response:<br><br>The correct answers to this question are D. Create an S3 Multi-Region Access Point. Modify the application to use the Amazon Resource Name (ARN) of the Multi-Region Access Point for video streaming and E. Create an S3 Multi-Region Access Point. Modify the application to use the Amazon Resource Name (ARN) of the Multi-Region Access Point for video streaming and uploads.</li><li>Explanation:<br>Minimizing changes to the application:<br>The question explicitly asks for the solution with the \\\"fewest changes to the application.\\\". Option D and E only require modifying the application to use the Multi-Region Access Point ARN, while options A, B, and C would involve additional replication configurations, making them less ideal.<br>Multi-Region Access Point benefits:<br>An S3 Multi-Region Access Point allows users to access data from any region through a single endpoint, effectively minimizing latency for users in different regions without requiring data replication across multiple buckets.</li><li>Why not the other options:<br>Options A and B:<br>These involve one-way replication, which would still require users in some regions to access data from a geographically distant bucket, leading to higher latency.<br>Option C:<br>Bidirectional replication would create unnecessary data redundancy and additional network traffic, making it less efficient.<br>Key takeaway: When you need to minimize latency for users in different regions while minimizing application changes, an S3 Multi-Region Access Point is the best solution.</li><li>is it just me or am I missing something in this question?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1319761,
          "date": "Fri 29 Nov 2024 15:57",
          "username": "JA2018",
          "content": "but I am confused by Google AI search's response:<br><br>The correct answers to this question are D. Create an S3 Multi-Region Access Point. Modify the application to use the Amazon Resource Name (ARN) of the Multi-Region Access Point for video streaming and E. Create an S3 Multi-Region Access Point. Modify the application to use the Amazon Resource Name (ARN) of the Multi-Region Access Point for video streaming and uploads.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Explanation:<br>Minimizing changes to the application:<br>The question explicitly asks for the solution with the \\\"fewest changes to the application.\\\". Option D and E only require modifying the application to use the Multi-Region Access Point ARN, while options A, B, and C would involve additional replication configurations, making them less ideal.<br>Multi-Region Access Point benefits:<br>An S3 Multi-Region Access Point allows users to access data from any region through a single endpoint, effectively minimizing latency for users in different regions without requiring data replication across multiple buckets.</li><li>Why not the other options:<br>Options A and B:<br>These involve one-way replication, which would still require users in some regions to access data from a geographically distant bucket, leading to higher latency.<br>Option C:<br>Bidirectional replication would create unnecessary data redundancy and additional network traffic, making it less efficient.<br>Key takeaway: When you need to minimize latency for users in different regions while minimizing application changes, an S3 Multi-Region Access Point is the best solution.</li><li>is it just me or am I missing something in this question?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1319763,
          "date": "Fri 29 Nov 2024 15:58",
          "username": "JA2018",
          "content": "Explanation:<br>Minimizing changes to the application:<br>The question explicitly asks for the solution with the \\\"fewest changes to the application.\\\". Option D and E only require modifying the application to use the Multi-Region Access Point ARN, while options A, B, and C would involve additional replication configurations, making them less ideal.<br>Multi-Region Access Point benefits:<br>An S3 Multi-Region Access Point allows users to access data from any region through a single endpoint, effectively minimizing latency for users in different regions without requiring data replication across multiple buckets.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why not the other options:<br>Options A and B:<br>These involve one-way replication, which would still require users in some regions to access data from a geographically distant bucket, leading to higher latency.<br>Option C:<br>Bidirectional replication would create unnecessary data redundancy and additional network traffic, making it less efficient.<br>Key takeaway: When you need to minimize latency for users in different regions while minimizing application changes, an S3 Multi-Region Access Point is the best solution.</li><li>is it just me or am I missing something in this question?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1319764,
          "date": "Fri 29 Nov 2024 15:58",
          "username": "JA2018",
          "content": "Why not the other options:<br>Options A and B:<br>These involve one-way replication, which would still require users in some regions to access data from a geographically distant bucket, leading to higher latency.<br>Option C:<br>Bidirectional replication would create unnecessary data redundancy and additional network traffic, making it less efficient.<br>Key takeaway: When you need to minimize latency for users in different regions while minimizing application changes, an S3 Multi-Region Access Point is the best solution.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>is it just me or am I missing something in this question?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1319765,
          "date": "Fri 29 Nov 2024 15:58",
          "username": "JA2018",
          "content": "is it just me or am I missing something in this question?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1290447,
          "date": "Sat 28 Sep 2024 02:32",
          "username": "kbgsgsgs",
          "content": "They are simply trying to replicate to a new S3 bucket. I don't see why it needs to be bidirectional. Also, since the problem assumes that the content developer with permission is the one uploading, it seems like there needs to be a way to centralize the upload without modifying the application.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1245629,
          "date": "Wed 10 Jul 2024 19:23",
          "username": "1166ae3",
          "content": "Since developer upload video to us-east-2, by configuring one-way replication directly from us-east-2 to eu-west-2 and from us-east-2 to ap-southeast-1, you ensure that each region has the latest data without additional replication hops.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1237326,
          "date": "Wed 26 Jun 2024 10:36",
          "username": "Scheldon",
          "content": "AnswerCE<br><br>From my understanding Video uploads can happen near new regions hence to speed up that operation we need to upload to nearest region, hence I would choose option E, and for the same reason we need to be able to replicate data from any of new region to old one and oposite, hence we we need bidirectional (two-way) replication",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 1177802,
          "date": "Tue 19 Mar 2024 23:58",
          "username": "lenotc",
          "content": "FEWEST changes to the application<br>D -> MRAP can upload the appropriate S3 bucket<br>C -> two-way -> to worry about anything<br>obs:I believe this question dubious, amphibological",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1154881,
          "date": "Tue 20 Feb 2024 18:40",
          "username": "67a3f49",
          "content": "There is no information where the upload should be performed. If files will be uploaded to first region then:<br><br>AD because:<br>A -> content uploaded to the primary bucket in us-east-2 is automatically replicated to the other regions, minimizing latency for users accessing content near those regions.<br>D -> uploads needs to be performed to the first region only and accessed to remaining two<br><br>Otherwise CE<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You are right but I think files are only uploaded to first region.<br>The question states \\\"A company has an application that delivers on-demand training videos to students around the world\\\".It doesn't state anything about developer.<br>Furthermore, in this case both AD and CE work but AD requires fewest changes to the application</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1334408,
          "date": "Mon 30 Dec 2024 21:46",
          "username": "Salilgen",
          "content": "You are right but I think files are only uploaded to first region.<br>The question states \\\"A company has an application that delivers on-demand training videos to students around the world\\\".It doesn't state anything about developer.<br>Furthermore, in this case both AD and CE work but AD requires fewest changes to the application",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1141397,
          "date": "Mon 05 Feb 2024 20:43",
          "username": "Andy_09",
          "content": "Correct answer CE",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#738",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a new mobile app. Anywhere in the world, users can see local news on topics they choose. Users also can post photos and videos from inside the app.<br><br>Users access content often in the first minutes after the content is posted. New content quickly replaces older content, and then the older content disappears. The local nature of the news means that users consume 90% of the content within the AWS Region where it is uploaded.<br><br>Which solution will optimize the user experience by providing the LOWEST latency for content uploads?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#738",
          "answers": [
            {
              "choice": "<p>Upload and store content in Amazon S3. Use Amazon CloudFront for the uploads.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Upload and store content in Amazon S3. Use S3 Transfer Acceleration for the uploads.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Upload content to Amazon EC2 instances in the Region that is closest to the user. Copy the data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Upload and store content in Amazon S3 in the Region that is closest to the user. Use multiple distributions of Amazon CloudFront.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 738 discussion",
      "discusstion": [
        {
          "id": 1145709,
          "date": "Fri 09 Feb 2024 19:54",
          "username": "Cali182",
          "content": "Cloudfront is for reading not for uploading<br>Option B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I don't think so<br>https://aws.amazon.com/blogs/aws/amazon-cloudfront-content-uploads-post-put-other-methods/</li></ul>",
          "upvote_count": "17",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1334414,
          "date": "Mon 30 Dec 2024 22:01",
          "username": "Salilgen",
          "content": "I don't think so<br>https://aws.amazon.com/blogs/aws/amazon-cloudfront-content-uploads-post-put-other-methods/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1152139,
          "date": "Fri 16 Feb 2024 18:18",
          "username": "BillaRanga",
          "content": "Question says - \\\" LOWEST latency for content uploads\\\"<br>HenceUse S3 Transfer Acceleration for the uploads.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1256414,
          "date": "Sat 27 Jul 2024 20:21",
          "username": "flaviobrf",
          "content": "Cloudfront can also upload data, not just for caching content<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry, for this scenario, i believe that B its the correct</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1256415,
          "date": "Sat 27 Jul 2024 20:23",
          "username": "flaviobrf",
          "content": "Sorry, for this scenario, i believe that B its the correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1231056,
          "date": "Sat 15 Jun 2024 18:24",
          "username": "ike001",
          "content": "B is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1212696,
          "date": "Fri 17 May 2024 06:34",
          "username": "[Removed]",
          "content": "option D. Upload and store content in Amazon S3 in the Region that is closest to the user. Use multiple distributions of Amazon CloudFront.<br>This solution ensures low-latency uploads by storing content in the nearest S3 region and provides fast access to users by distributing content through CloudFront edge locations.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1212563,
          "date": "Thu 16 May 2024 21:31",
          "username": "7fb06b3",
          "content": "CloudFront does support upload acceleration<br>https://aws.amazon.com/blogs/aws/amazon-cloudfront-content-uploads-post-put-other-methods/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1183125,
          "date": "Tue 26 Mar 2024 09:14",
          "username": "TruthWS",
          "content": "Option D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1180241,
          "date": "Fri 22 Mar 2024 19:25",
          "username": "alawada",
          "content": "Amazon S3 Transfer Acceleration utilizes Amazon CloudFront's globally distributed edge locations to accelerate content uploads to Amazon S3.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1175126,
          "date": "Sat 16 Mar 2024 17:58",
          "username": "xBUGx",
          "content": "S3TA is acturally using cloudfront's infrastructure.<br>So, yes B. Which is just an optimized solution for cloudfront itself.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1173662,
          "date": "Thu 14 Mar 2024 20:42",
          "username": "Ipergorta",
          "content": "Option D<br>Regional S3 Buckets: Storing content in S3 buckets located in the same Region as the user minimizes the physical distance the data needs to travel during upload, reducing latency.<br>CloudFront Distributions: CloudFront is a content delivery network (CDN) that caches content in edge locations around the world. By creating multiple CloudFront distributions with edge locations closest to users, the content can be served with minimal latency for downloads.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1141401,
          "date": "Mon 05 Feb 2024 20:46",
          "username": "Andy_09",
          "content": "Option D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>option B...S3 transfer acceleration for LOWEST latency for content uploads. question is not asking for low latency for content retrieval.<br>Happy to be corrected</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1146942,
          "date": "Sun 11 Feb 2024 03:16",
          "username": "jaswantn",
          "content": "option B...S3 transfer acceleration for LOWEST latency for content uploads. question is not asking for low latency for content retrieval.<br>Happy to be corrected",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#739",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a new application that uses serverless architecture. The architecture will consist of an Amazon API Gateway REST API and AWS Lambda functions to manage incoming requests.<br><br>The company wants to add a service that can send messages received from the API Gateway REST API to multiple target Lambda functions for processing. The service must offer message filtering that gives the target Lambda functions the ability to receive only the messages the functions need.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#739",
          "answers": [
            {
              "choice": "<p>Send the requests from the API Gateway REST API to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe Amazon Simple Queue Service (Amazon SQS) queues to the SNS topic. Configure the target Lambda functions to poll the different SQS queues.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Send the requests from the API Gateway REST API to Amazon EventBridge. Configure EventBridge to invoke the target Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Send the requests from the API Gateway REST API to Amazon Managed Streaming for Apache Kafka (Amazon MSK). Configure Amazon MSK to publish the messages to the target Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Send the requests from the API Gateway REST API to multiple Amazon Simple Queue Service (Amazon SQS) queues. Configure the target Lambda functions to poll the different SQS queues.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 739 discussion",
      "discusstion": [
        {
          "id": 1177947,
          "date": "Wed 20 Mar 2024 06:48",
          "username": "Kezuko",
          "content": "\\\"message filtering\\\"SNS",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1245640,
          "date": "Wed 10 Jul 2024 19:33",
          "username": "1166ae3",
          "content": "LEAST operational overhead -> B better than A",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1332580,
          "date": "Fri 27 Dec 2024 19:52",
          "username": "Denise123",
          "content": "The answer is B. On the other hand, the solution involving Amazon SNS, Amazon SQS, and Lambda polling (Option A) introduces more moving parts and operational overhead:<br>It requires managing and configuring multiple services (SNS, SQS, and Lambda).<br>Lambda functions need to continuously poll SQS queues, which can be less efficient and introduce additional latency.<br>Scaling and managing SQS queues and their associated resources (e.g., dead-letter queues) add operational complexity.<br>While the SNS-SQS-Lambda solution is still valid and widely used, the EventBridge-Lambda integration offers a more streamlined and serverless-native approach, aligning better with the company's serverless architecture goals and minimizing operational overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1329325,
          "date": "Fri 20 Dec 2024 07:30",
          "username": "LeonSauveterre",
          "content": "EventBridge applies filtering rules and invokes the appropriate Lambda functions directly, just like SNS + SQS. Option B is definitely \\\"the LEAST operational overhead\\\".<br><br>While there's a 5-target-per-rule limit, you can work around it by creating additional rules. Each rule can directly invoke Lambda functions without the need for SQS queues or polling.<br><br>Let's not stick to option A just because it's the textbook exam-standard SNS+SQS combination. There are other options that will help you achieve the goal under different circumstances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1319768,
          "date": "Fri 29 Nov 2024 16:09",
          "username": "JA2018",
          "content": "agreed with AMEJack.... based on the stem, B required the LEAST operational overhead<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>From Google AI Search:<br><br>The correct answer is B. Send the requests from the API Gateway REST API to Amazon EventBridge. Configure EventBridge to invoke the target Lambda functions.</li><li>Explanation:<br>Least operational overhead:<br>EventBridge is designed specifically for event routing and filtering, making it the most efficient option for managing which Lambda functions receive messages based on specific criteria, minimizing operational overhead compared to the other choices.<br>Message filtering:<br>EventBridge allows you to define detailed rules with attributes and conditions to filter messages and send them only to the relevant Lambda functions, fulfilling the requirement for message filtering.<br>Scalability:<br>Both EventBridge and SNS can handle large volumes of messages, but EventBridge offers better management and control over message routing, especially when dealing with complex event patterns.</li><li>Why the other options are less ideal:<br>A. SNS with SQS:<br>While SNS can be used for fan-out messaging, adding SQS queues introduces extra complexity and potential bottlenecks in managing multiple queues and subscriptions.<br>C. Amazon MSK:<br>While Kafka is a powerful messaging system, it might be overkill for this scenario due to its complexity and overhead for managing a dedicated Kafka cluster, especially if the message volume is not very high.<br>D. Multiple SQS queues:<br>This option would require additional logic to decide which SQS queue to send messages to based on filtering criteria, adding complexity to the architecture.<br>Key takeaway: When looking for a solution with the least operational overhead for message routing and filtering between an API Gateway and multiple Lambda functions, Amazon EventBridge is the most suitable choice.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1319769,
          "date": "Fri 29 Nov 2024 16:09",
          "username": "JA2018",
          "content": "From Google AI Search:<br><br>The correct answer is B. Send the requests from the API Gateway REST API to Amazon EventBridge. Configure EventBridge to invoke the target Lambda functions.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Explanation:<br>Least operational overhead:<br>EventBridge is designed specifically for event routing and filtering, making it the most efficient option for managing which Lambda functions receive messages based on specific criteria, minimizing operational overhead compared to the other choices.<br>Message filtering:<br>EventBridge allows you to define detailed rules with attributes and conditions to filter messages and send them only to the relevant Lambda functions, fulfilling the requirement for message filtering.<br>Scalability:<br>Both EventBridge and SNS can handle large volumes of messages, but EventBridge offers better management and control over message routing, especially when dealing with complex event patterns.</li><li>Why the other options are less ideal:<br>A. SNS with SQS:<br>While SNS can be used for fan-out messaging, adding SQS queues introduces extra complexity and potential bottlenecks in managing multiple queues and subscriptions.<br>C. Amazon MSK:<br>While Kafka is a powerful messaging system, it might be overkill for this scenario due to its complexity and overhead for managing a dedicated Kafka cluster, especially if the message volume is not very high.<br>D. Multiple SQS queues:<br>This option would require additional logic to decide which SQS queue to send messages to based on filtering criteria, adding complexity to the architecture.<br>Key takeaway: When looking for a solution with the least operational overhead for message routing and filtering between an API Gateway and multiple Lambda functions, Amazon EventBridge is the most suitable choice.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1319770,
          "date": "Fri 29 Nov 2024 16:10",
          "username": "JA2018",
          "content": "Explanation:<br>Least operational overhead:<br>EventBridge is designed specifically for event routing and filtering, making it the most efficient option for managing which Lambda functions receive messages based on specific criteria, minimizing operational overhead compared to the other choices.<br>Message filtering:<br>EventBridge allows you to define detailed rules with attributes and conditions to filter messages and send them only to the relevant Lambda functions, fulfilling the requirement for message filtering.<br>Scalability:<br>Both EventBridge and SNS can handle large volumes of messages, but EventBridge offers better management and control over message routing, especially when dealing with complex event patterns.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why the other options are less ideal:<br>A. SNS with SQS:<br>While SNS can be used for fan-out messaging, adding SQS queues introduces extra complexity and potential bottlenecks in managing multiple queues and subscriptions.<br>C. Amazon MSK:<br>While Kafka is a powerful messaging system, it might be overkill for this scenario due to its complexity and overhead for managing a dedicated Kafka cluster, especially if the message volume is not very high.<br>D. Multiple SQS queues:<br>This option would require additional logic to decide which SQS queue to send messages to based on filtering criteria, adding complexity to the architecture.<br>Key takeaway: When looking for a solution with the least operational overhead for message routing and filtering between an API Gateway and multiple Lambda functions, Amazon EventBridge is the most suitable choice.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1319771,
          "date": "Fri 29 Nov 2024 16:10",
          "username": "JA2018",
          "content": "Why the other options are less ideal:<br>A. SNS with SQS:<br>While SNS can be used for fan-out messaging, adding SQS queues introduces extra complexity and potential bottlenecks in managing multiple queues and subscriptions.<br>C. Amazon MSK:<br>While Kafka is a powerful messaging system, it might be overkill for this scenario due to its complexity and overhead for managing a dedicated Kafka cluster, especially if the message volume is not very high.<br>D. Multiple SQS queues:<br>This option would require additional logic to decide which SQS queue to send messages to based on filtering criteria, adding complexity to the architecture.<br>Key takeaway: When looking for a solution with the least operational overhead for message routing and filtering between an API Gateway and multiple Lambda functions, Amazon EventBridge is the most suitable choice.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1316240,
          "date": "Fri 22 Nov 2024 11:36",
          "username": "AMEJack",
          "content": "The question is asking about one service. If you choose A, you need to build 3 services one per each SNS topic. Also, creating one Event Bridge with rules to forward to the target Lambda is easier than creating 3 topics with 3 SQS queues. The answer is definetly B.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1237336,
          "date": "Wed 26 Jun 2024 10:50",
          "username": "Scheldon",
          "content": "AnswerA<br><br>Hence EventBridge is a solution to handle events and we need to handle messages I believe option A is the best solution here",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1229585,
          "date": "Thu 13 Jun 2024 04:09",
          "username": "3bdf1cc",
          "content": "https://aws.amazon.com/blogs/compute/capturing-client-events-using-amazon-api-gateway-and-amazon-eventbridge/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1204863,
          "date": "Wed 01 May 2024 06:54",
          "username": "BBR01",
          "content": "The main issue with B is that with Eventbrige, you can only define up to five targets for each rule.<br>https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-targets.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1202489,
          "date": "Fri 26 Apr 2024 10:50",
          "username": "sandordini",
          "content": "B: EventBridge reacts to events, not requests or messages.<br>C: I don't think so, but I don't know MSK well enough.<br><br>D: You can add a filter so that your function only processes Amazon SQS messages containing certain data parameters. but it will still receive, so I assume it's not what the question asks for.<br>Only A remains... But it still misses steps plus we are looking for the Least ops overhead..<br><br>I am confused..",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1200375,
          "date": "Mon 22 Apr 2024 23:05",
          "username": "03beafc",
          "content": "Eventbridge + lambda is two services, sns + sqs + lambda is 3.Both can filter, but the config involved in eventbridge > lambda is easier<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>SNS provides built-in message filtering.<br>SNS -&gt; SQS -&gt; Lambdavery common Fanout Scenario</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1285606,
          "date": "Wed 18 Sep 2024 08:08",
          "username": "MatAlves",
          "content": "SNS provides built-in message filtering.<br>SNS -> SQS -> Lambdavery common Fanout Scenario",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1188197,
          "date": "Tue 02 Apr 2024 19:25",
          "username": "AlvinC2024",
          "content": "Upload and store content in Amazon S3 in the Region that is closest to the user. Use multiple distributions of Amazon CloudFront. This approach ensures that uploads are quick, taking advantage of the geographical proximity of S3, while still leveraging CloudFront for efficient content delivery outside the local region if necessary. The local nature of the content consumption aligns with storing content in the closest region to the user, addressing the requirement that 90% of the content is consumed within the AWS Region where it is uploaded.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1183775,
          "date": "Wed 27 Mar 2024 02:12",
          "username": "TruthWS",
          "content": "Option B - Eventbridge allow routing event from source to dest or multi dest you want",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1177829,
          "date": "Wed 20 Mar 2024 01:11",
          "username": "lenotc",
          "content": "EventBridge rules can filter messages based on, content, attributes, or patterns",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1169005,
          "date": "Fri 08 Mar 2024 18:43",
          "username": "seetpt",
          "content": "A because of SNS",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1158184,
          "date": "Sat 24 Feb 2024 23:13",
          "username": "knben",
          "content": "I'd go with D<br><br>Multiple targets but target Lambda functions the ability to receive only the messages the functions need, so gateway should send to specific SQS so specific lambda can process that message. With SNS you send to all at once, so lambdas will get the messages they can't process.<br><br>Correct me if I'm wrong.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1157020,
          "date": "Fri 23 Feb 2024 10:17",
          "username": "hgknight",
          "content": "multiple target, message filteringSNS",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#740",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company migrated millions of archival files to Amazon S3. A solutions architect needs to implement a solution that will encrypt all the archival data by using a customer-provided key. The solution must encrypt existing unencrypted objects and future objects.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#740",
          "answers": [
            {
              "choice": "<p>Create a list of unencrypted objects by filtering an Amazon S3 Inventory report. Configure an S3 Batch Operations job to encrypt the objects from the list with a server-side encryption with a customer-provided key (SSE-C). Configure the S3 default encryption feature to use a server-side encryption with a customer-provided key (SSE-C).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Storage Lens metrics to identify unencrypted S3 buckets. Configure the S3 default encryption feature to use a server-side encryption with AWS KMS keys (SSE-KMS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a list of unencrypted objects by filtering the AWS usage report for Amazon S3. Configure an AWS Batch job to encrypt the objects from the list with a server-side encryption with AWS KMS keys (SSE-KMS). Configure the S3 default encryption feature to use a server-side encryption with AWS KMS keys (SSE-KMS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a list of unencrypted objects by filtering the AWS usage report for Amazon S3. Configure the S3 default encryption feature to use a server-side encryption with a customer-provided key (SSE-C).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 740 discussion",
      "discusstion": [
        {
          "id": 1144160,
          "date": "Thu 08 Feb 2024 07:37",
          "username": "OX_HDR",
          "content": "A seems correct here.<br><br>https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1152166,
          "date": "Fri 16 Feb 2024 19:22",
          "username": "BillaRanga",
          "content": "S3 inventory list has \\\"Encryption status\\\" field so you can use this to filter the unencrypted objects. and use S3 batch to encrypt it with SSE-C key.<br><br>AWS Usage report does not provide details about encryption status of individual objects",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1329330,
          "date": "Fri 20 Dec 2024 07:39",
          "username": "LeonSauveterre",
          "content": "As stated, \\\"by using a customer-provided key\\\", which rules out B & C.<br><br>Option A uses 3 thingies:<br>1. S3 Inventory - Provides a native way to generate a list of unencrypted objects, making it scalable for millions of objects.<br>2. S3 Batch Operations - Encrypts existing objects efficiently.<br>3. S3 Default Encryption - Ensures future objects are automatically encrypted (with SSE-C).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1237341,
          "date": "Wed 26 Jun 2024 10:53",
          "username": "Scheldon",
          "content": "AnswerA",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1231060,
          "date": "Sat 15 Jun 2024 18:30",
          "username": "ike001",
          "content": "A is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1146946,
          "date": "Sun 11 Feb 2024 03:19",
          "username": "jaswantn",
          "content": "option B.... S3 Inventory report to check for unencrypted objects in s3 and then using Batch operation.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1142871,
          "date": "Wed 07 Feb 2024 02:05",
          "username": "mestule",
          "content": "The solution must encrypt existing unencrypted objects. Batch will do that.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1141410,
          "date": "Mon 05 Feb 2024 20:54",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#741",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The DNS provider that hosts a company's domain name records is experiencing outages that cause service disruption for a website running on AWS. The company needs to migrate to a more resilient managed DNS service and wants the service to run on AWS.<br><br>What should a solutions architect do to rapidly migrate the DNS hosting service?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#741",
          "answers": [
            {
              "choice": "<p>Create an Amazon Route 53 public hosted zone for the domain name. Import the zone file containing the domain records hosted by the previous provider.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Route 53 private hosted zone for the domain name. Import the zone file containing the domain records hosted by the previous provider.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Simple AD directory in AWS. Enable zone transfer between the DNS provider and AWS Directory Service for Microsoft Active Directory for the domain records.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Route 53 Resolver inbound endpoint in the VPC. Specify the IP addresses that the provider's DNS will forward DNS queries to. Configure the provider's DNS to forward DNS queries for the domain to the IP addresses that are specified in the inbound endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 741 discussion",
      "discusstion": [
        {
          "id": 1141412,
          "date": "Mon 05 Feb 2024 20:57",
          "username": "Andy_09",
          "content": "Option A",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1152168,
          "date": "Fri 16 Feb 2024 19:27",
          "username": "BillaRanga",
          "content": "A -> Correct as we need to route to a Company in public network.<br>B ->No, because it routes only within one or more VPC<br>C -> Added as a distractor<br>D -> Inbound resolver is for traffic from On-Prem to VPC<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Hello Billaranga, I just bought this examtopics. My exam is on Jun 9th. Did we get questions from exam topics? How was the exam?</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1211107,
          "date": "Tue 14 May 2024 00:34",
          "username": "aditianand",
          "content": "Hello Billaranga, I just bought this examtopics. My exam is on Jun 9th. Did we get questions from exam topics? How was the exam?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1272967,
          "date": "Mon 26 Aug 2024 20:11",
          "username": "ccceb01",
          "content": "A is the answer<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-in-use.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1205892,
          "date": "Fri 03 May 2024 03:02",
          "username": "pawanghujanamazon53",
          "content": "option A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#742",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building an application on AWS that connects to an Amazon RDS database. The company wants to manage the application configuration and to securely store and retrieve credentials for the database and other services.<br><br>Which solution will meet these requirements with the LEAST administrative overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#742",
          "answers": [
            {
              "choice": "<p>Use AWS AppConfig to store and manage the application configuration. Use AWS Secrets Manager to store and retrieve the credentials.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda to store and manage the application configuration. Use AWS Systems Manager Parameter Store to store and retrieve the credentials.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an encrypted application configuration file. Store the file in Amazon S3 for the application configuration. Create another S3 file to store and retrieve the credentials.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS AppConfig to store and manage the application configuration. Use Amazon RDS to store and retrieve the credentials.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 742 discussion",
      "discusstion": [
        {
          "id": 1152172,
          "date": "Fri 16 Aug 2024 18:34",
          "username": "BillaRanga",
          "content": "AppConfig useCaseYou can use AWS AppConfig to deploy configuration data stored in the AWS AppConfig hosted configuration store, AWS Secrets Manager, Systems Manager Parameter Store, or Amazon S3.<br>So B and C are out.<br><br>use RDS to store credentials is not a good practise. So D is out.<br><br>Ans is A",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1141414,
          "date": "Mon 05 Aug 2024 19:58",
          "username": "Andy_09",
          "content": "Option A",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1187980,
          "date": "Wed 02 Oct 2024 12:57",
          "username": "Awsbeginner87",
          "content": "Credentials secrets Manager",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#743",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>To meet security requirements, a company needs to encrypt all of its application data in transit while communicating with an Amazon RDS MySQL DB instance. A recent security audit revealed that encryption at rest is enabled using AWS Key Management Service (AWS KMS), but data in transit is not enabled.<br><br>What should a solutions architect do to satisfy the security requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#743",
          "answers": [
            {
              "choice": "<p>Enable IAM database authentication on the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provide self-signed certificates. Use the certificates in all connections to the RDS instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Take a snapshot of the RDS instance. Restore the snapshot to a new instance with encryption enabled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Download AWS-provided root certificates. Provide the certificates in all connections to the RDS instance.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 743 discussion",
      "discusstion": [
        {
          "id": 1152173,
          "date": "Fri 16 Feb 2024 19:41",
          "username": "BillaRanga",
          "content": "Amazon RDS creates an SSL certificate and installs the certificate on the DB instance when the instance is provisioned. So it is AWS provided.",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1141417,
          "date": "Mon 05 Feb 2024 21:02",
          "username": "Andy_09",
          "content": "Option D",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1319986,
          "date": "Sat 30 Nov 2024 02:19",
          "username": "Arad",
          "content": "A is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1319778,
          "date": "Fri 29 Nov 2024 16:34",
          "username": "JA2018",
          "content": "Why D is correct:<br>To encrypt data in transit to an RDS MySQL instance, you need to configure the database connection to use TLS/SSL, which requires using AWS-provided root certificates to establish a secure connection.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why other options are incorrect:<br>A (IAM database authentication): While important for user access control, this does not address data encryption in transit.<br>B (Self-signed certificates): Using self-signed certificates is not recommended for production environments as they cannot be verified by the client and might raise security concerns.<br>C (Snapshot and restore): Taking a snapshot and restoring to a new instance with encryption enabled only affects data at rest, not data in transit.</li><li>From Google AI Search:<br><br>Key point: To encrypt data in transit to an RDS instance, ensure your application uses the appropriate AWS-provided root certificates to establish a secure TLS/SSL connection.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1319779,
          "date": "Fri 29 Nov 2024 16:34",
          "username": "JA2018",
          "content": "Why other options are incorrect:<br>A (IAM database authentication): While important for user access control, this does not address data encryption in transit.<br>B (Self-signed certificates): Using self-signed certificates is not recommended for production environments as they cannot be verified by the client and might raise security concerns.<br>C (Snapshot and restore): Taking a snapshot and restoring to a new instance with encryption enabled only affects data at rest, not data in transit.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>From Google AI Search:<br><br>Key point: To encrypt data in transit to an RDS instance, ensure your application uses the appropriate AWS-provided root certificates to establish a secure TLS/SSL connection.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1319780,
          "date": "Fri 29 Nov 2024 16:35",
          "username": "JA2018",
          "content": "From Google AI Search:<br><br>Key point: To encrypt data in transit to an RDS instance, ensure your application uses the appropriate AWS-provided root certificates to establish a secure TLS/SSL connection.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1236876,
          "date": "Tue 25 Jun 2024 13:30",
          "username": "Scheldon",
          "content": "AnswerD",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1208703,
          "date": "Thu 09 May 2024 07:35",
          "username": "DAIYL",
          "content": "Even if IAM database authentication is enabled, clients still need to download and configure the AWS-provided root certificate to ensure a secure connection using SSL/TLS encryption. Without configuring the certificate, communication may not be fully encrypted, even with IAM authentication enabled.<br>https://docs.aws.amazon.com/zh_cn/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That's not in any of the answers - \\\"Provide the certificates in all connections to the RDS instance.\\\" this doesn't make sense with option D - it's not saying configure to trust the CA. Answer can only be option A. Your link includes this \\\"Optionally, your SSL/TLS connection can perform server identity verification by validating the server certificate installed on your database.\\\". This you don't actually need to trust the using CA and can configure the app that way - the traffic is still encrypted though.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1223518,
          "date": "Mon 03 Jun 2024 11:56",
          "username": "Nm55569",
          "content": "That's not in any of the answers - \\\"Provide the certificates in all connections to the RDS instance.\\\" this doesn't make sense with option D - it's not saying configure to trust the CA. Answer can only be option A. Your link includes this \\\"Optionally, your SSL/TLS connection can perform server identity verification by validating the server certificate installed on your database.\\\". This you don't actually need to trust the using CA and can configure the app that way - the traffic is still encrypted though.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1177983,
          "date": "Wed 20 Mar 2024 07:50",
          "username": "Kezuko",
          "content": "A<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1170226,
          "date": "Sun 10 Mar 2024 11:11",
          "username": "Sivaeas",
          "content": "Optiona A:<br>IAM database authentication provides the following benefits:<br><br>Network traffic to and from the database is encrypted using Secure Socket Layer (SSL) or Transport Layer Security (TLS). For more information about using SSL/TLS with Amazon RDS, see Using SSL/TLS to encrypt a connection to a DB instance or cluster.",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#744",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a new web service that will run on Amazon EC2 instances behind an Elastic Load Balancing (ELB) load balancer. However, many of the web service clients can only reach IP addresses authorized on their firewalls.<br><br>What should a solutions architect recommend to meet the clients' needs?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#744",
          "answers": [
            {
              "choice": "<p>A Network Load Balancer with an associated Elastic IP address.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>An Application Load Balancer with an associated Elastic IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>An A record in an Amazon Route 53 hosted zone pointing to an Elastic IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>An EC2 instance with a public IP address running as a proxy in front of the load balancer.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 744 discussion",
      "discusstion": [
        {
          "id": 1154910,
          "date": "Tue 20 Feb 2024 19:21",
          "username": "67a3f49",
          "content": "A for sure. The same question was in \\\"AWS Certified Solutions Architect Associate Practice Test 3\\\" on Udemy. There was an explaination that NLB needs to be before ALB because only NLB can have static IP.",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 1152178,
          "date": "Fri 16 Feb 2024 19:49",
          "username": "BillaRanga",
          "content": "B ->Application Load Balancer cannot be assigned an Elastic IP address (static IP address).<br>C -> Its DNS after all, \\\"Associated elastic IP\\\" is what IP? Makes no sense<br>D -> \\\"If you require a persistent public IP address that can be associated to and from instances as you require, use an Elastic IP address instead.\\\" PUBLIC IP of an EC2 is not persistent, although we can give an Elastic Ip,Using EC2 in front of a Load Balancer is tooooo much. What if it gets a million request? So to scale that EC2 you use another LB and an ASG>? This makes no sense<br><br>A is correct because a NLB can have an elastic IP and we can use this in our firewall as per the use case",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1236941,
          "date": "Tue 25 Jun 2024 16:26",
          "username": "Scheldon",
          "content": "AnswerA",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1180249,
          "date": "Fri 22 Mar 2024 19:50",
          "username": "alawada",
          "content": "A - correct (Static ip can thereafter be used for client whitelisting)<br>Using a Network Load Balancer instead of a Classic Load Balancer has the following benefits:<br>Support for static IP addresses for the load balancer.<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1170234,
          "date": "Sun 10 Mar 2024 11:18",
          "username": "Sivaeas",
          "content": "Option A<br><br>Pleaselook into the below for detailed explaination<br>https://www.scalefactory.com/blog/2021/12/13/aws-network-load-balancers-new-features/img/previously-firewall-egress.png",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1152708,
          "date": "Sat 17 Feb 2024 17:59",
          "username": "PolarFox",
          "content": "Option C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B. An Application Load Balancer with an associated Elastic IP address:<br>While an ALB can use an Elastic IP, it operates at the application layer and may not be suitable when the primary concern is client firewall restrictions requiring a specific IP.<br><br>C. An A record in an Amazon Route 53 hosted zone pointing to an Elastic IP address:<br>While Route 53 can manage DNS records, it does not directly address the need for a specific IP address accessible by clients with firewall restrictions.<br><br>D. An EC2 instance with a public IP address running as a proxy in front of the load balancer:<br>This adds unnecessary complexity and introduces a single point of failure, making it less than optimal.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1319781,
          "date": "Fri 29 Nov 2024 16:39",
          "username": "JA2018",
          "content": "B. An Application Load Balancer with an associated Elastic IP address:<br>While an ALB can use an Elastic IP, it operates at the application layer and may not be suitable when the primary concern is client firewall restrictions requiring a specific IP.<br><br>C. An A record in an Amazon Route 53 hosted zone pointing to an Elastic IP address:<br>While Route 53 can manage DNS records, it does not directly address the need for a specific IP address accessible by clients with firewall restrictions.<br><br>D. An EC2 instance with a public IP address running as a proxy in front of the load balancer:<br>This adds unnecessary complexity and introduces a single point of failure, making it less than optimal.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1146438,
          "date": "Sat 10 Feb 2024 17:39",
          "username": "hajra313",
          "content": "Setting up an EC2 instance with a public IP address to act as a proxy in front of the load balancer allows clients with restricted IP access to connect to the web service. The EC2 instance can handle IP address whitelisting and proxy requests to the ELB load balancer, ensuring that only authorized clients can access the service. This solution provides flexibility and control over access while leveraging the scalability and availability benefits of ELB.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Is this ChatGPT answer?Can you provide the AWS documentation link?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1152179,
          "date": "Fri 16 Feb 2024 19:50",
          "username": "BillaRanga",
          "content": "Is this ChatGPT answer?Can you provide the AWS documentation link?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1141423,
          "date": "Mon 05 Feb 2024 21:08",
          "username": "Andy_09",
          "content": "Option C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>is there any valid justification for opting C? Glad to be informed, as these questions are tricky to answer.</li><li>My inclination is for Option D, but not 100 % sure</li><li>D. An EC2 instance with a public IP address running as a proxy in front of the load balancer:<br>This adds unnecessary complexity and introduces a single point of failure, making it less than optimal.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1152094,
          "date": "Fri 16 Feb 2024 16:28",
          "username": "jaswantn",
          "content": "is there any valid justification for opting C? Glad to be informed, as these questions are tricky to answer.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>My inclination is for Option D, but not 100 % sure</li><li>D. An EC2 instance with a public IP address running as a proxy in front of the load balancer:<br>This adds unnecessary complexity and introduces a single point of failure, making it less than optimal.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1152095,
          "date": "Fri 16 Feb 2024 16:29",
          "username": "jaswantn",
          "content": "My inclination is for Option D, but not 100 % sure<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D. An EC2 instance with a public IP address running as a proxy in front of the load balancer:<br>This adds unnecessary complexity and introduces a single point of failure, making it less than optimal.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1319782,
          "date": "Fri 29 Nov 2024 16:39",
          "username": "JA2018",
          "content": "D. An EC2 instance with a public IP address running as a proxy in front of the load balancer:<br>This adds unnecessary complexity and introduces a single point of failure, making it less than optimal.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#745",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has established a new AWS account. The account is newly provisioned and no changes have been made to the default settings. The company is concerned about the security of the AWS account root user.<br><br>What should be done to secure the root user?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#745",
          "answers": [
            {
              "choice": "<p>Create IAM users for daily administrative tasks. Disable the root user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create IAM users for daily administrative tasks. Enable multi-factor authentication on the root user.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Generate an access key for the root user. Use the access key for daily administration tasks instead of the AWS Management Console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provide the root user credentials to the most senior solutions architect. Have the solutions architect use the root user for daily administration tasks.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 745 discussion",
      "discusstion": [
        {
          "id": 1152182,
          "date": "Fri 16 Aug 2024 18:55",
          "username": "BillaRanga",
          "content": "\\\"As a best practice, do not use the AWS account root user for any task where it's not required. Instead, create a new IAM user for each person that requires administrator access.\\\"<br>It's B :)",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1141425,
          "date": "Mon 05 Aug 2024 20:09",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1196692,
          "date": "Wed 16 Oct 2024 18:33",
          "username": "d401c0d",
          "content": "D is just killing me. If we have reached this far, we all know it is Option B - \\\"As a best practice, do not use the AWS account root user for any task where it's not required. Instead, create a new IAM user for each person that requires administrator access.\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1170249,
          "date": "Tue 10 Sep 2024 10:37",
          "username": "Sivaeas",
          "content": "its option B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1156012,
          "date": "Thu 22 Aug 2024 01:53",
          "username": "Naveena_Devanga",
          "content": "Segregation of roles, also known as separation of duties (SoD), is a business control<br> that helps prevent security or privacy incidents and errors. Therefore, root access must never used for routine operational activities.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#746",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying an application that processes streaming data in near-real time. The company plans to use Amazon EC2 instances for the workload. The network architecture must be configurable to provide the lowest possible latency between nodes.<br><br>Which combination of network solutions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#746",
          "answers": [
            {
              "choice": "<p>Enable and configure enhanced networking on each EC2 instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Group the EC2 instances in separate accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Run the EC2 instances in a cluster placement group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Attach multiple elastic network interfaces to each EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic Block Store (Amazon EBS) optimized instance types.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 746 discussion",
      "discusstion": [
        {
          "id": 1142874,
          "date": "Wed 07 Aug 2024 01:30",
          "username": "mestule",
          "content": "A. Enable and configure enhanced networking on each EC2 instance. Enhanced networking provides higher bandwidth, higher packet per second (PPS) performance, and consistently lower inter-instance latencies.<br><br>C. Run the EC2 instances in a cluster placement group. A cluster placement group is a logical grouping of instances within a single Availability Zone. This configuration is recommended for applications that need low network latency, high network throughput, or both.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1176592,
          "date": "Wed 18 Sep 2024 15:20",
          "username": "AmirBe",
          "content": "AC<br>Use of Placement Groups: Utilize EC2 Placement Groups to ensure that instances are physically located close to each other within the same Availability Zone. This reduces the latency between instances by minimizing the distance data needs to travel.<br>Selection of EC2 Instance Types: Choose EC2 instance types optimized for low-latency networking, such as instances with enhanced networking capabilities like Elastic Network Adapter (ENA) or instances that support Amazon EC2 Nitro System. These instances provide high throughput and low latency networking performance.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1170254,
          "date": "Tue 10 Sep 2024 10:44",
          "username": "Sivaeas",
          "content": "To reach speeds up to 10 Gbps between instances, launch your instances in a cluster placement group with the enhanced networking instance type. These instance types are placed physically close to each other. Instance types that are close to each other further reduces latency and improves transfer speeds.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1152700,
          "date": "Sat 17 Aug 2024 16:36",
          "username": "osmk",
          "content": "what's AM?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1146955,
          "date": "Sun 11 Aug 2024 02:41",
          "username": "jaswantn",
          "content": "option C & E.<br>Option A is not viable as ..EC2 provides enhanced networking capabilities using single root I/O virtualization (SR-IOV) only on supported instance types.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>option E... EBS=E2=80=93optimized instance uses an optimized configuration</li><li>C'mon, EBS is storage. The question does not deal with the storage solutions. Its a distractor...</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1146956,
          "date": "Sun 11 Aug 2024 02:43",
          "username": "jaswantn",
          "content": "option E... EBS=E2=80=93optimized instance uses an optimized configuration",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1202548,
          "date": "Sat 26 Oct 2024 12:54",
          "username": "sandordini",
          "content": "C'mon, EBS is storage. The question does not deal with the storage solutions. Its a distractor...",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141426,
          "date": "Mon 05 Aug 2024 20:11",
          "username": "Andy_09",
          "content": "Correct option should be CD",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#747",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company wants to shut down two data centers and migrate more than 100 TB of data to AWS. The data has an intricate directory structure with millions of small files stored in deep hierarchies of subfolders. Most of the data is unstructured, and the company's file storage consists of SMB-based storage types from multiple vendors. The company does not want to change its applications to access the data after migration.<br><br>What should a solutions architect do to meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#747",
          "answers": [
            {
              "choice": "<p>Use AWS Direct Connect to migrate the data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS DataSync to migrate the data to Amazon FSx for Lustre.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS DataSync to migrate the data to Amazon FSx for Windows File Server.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Direct Connect to migrate the data on-premises file storage to an AWS Storage Gateway volume gateway.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 747 discussion",
      "discusstion": [
        {
          "id": 1170256,
          "date": "Sun 10 Mar 2024 11:46",
          "username": "Sivaeas",
          "content": "AWS DataSync is a data transfer service that simplifies, automates, and accelerates moving and replicating data between on-premises storage systems and AWS storage services over the internet or AWS Direct Connect. DataSync can transfer your file data, and also file system metadata such as ownership, time stamps, and access permissions.<br><br>In DataSync, a location for Amazon FSx for Windows is an endpoint for an FSx for Windows File Server. You can transfer files between a location for Amazon FSx for Windows and a location for other file systems. For information, see Working with Locations in the AWS DataSync User Guide.<br><br>DataSync accesses your FSx for Windows File Server using the Server Message Block (SMB) protocol.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Does Fsx support SMB? I read prior posts that it only ONTAP supports SMB</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1211114,
          "date": "Tue 14 May 2024 00:53",
          "username": "aditianand",
          "content": "Does Fsx support SMB? I read prior posts that it only ONTAP supports SMB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1141432,
          "date": "Mon 05 Feb 2024 21:13",
          "username": "Andy_09",
          "content": "Option C",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1236948,
          "date": "Tue 25 Jun 2024 16:42",
          "username": "Scheldon",
          "content": "AnswerC",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1212384,
          "date": "Thu 16 May 2024 12:44",
          "username": "Linuslin",
          "content": "AWS Storage Gateway provides a standard set of storage protocols such as iSCSI, SMB, and NFS, which allow you to use AWS storage without rewriting your existing applications.--->A is not complete describe, so A is out.<br>https://aws.amazon.com/storagegateway/faqs/?ncsn&loc6<br><br>Only FSx for NetApp ONTAP and FSx for Windows File Server support SMB Protocol. --->B is out.<br>https://aws.amazon.com/tw/fsx/when-to-choose-fsx/<br><br>AWS Direct Connect is more expensive than AWS DataSync.--->D is out<br><br>C is the correct answer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1156019,
          "date": "Thu 22 Feb 2024 03:02",
          "username": "Naveena_Devanga",
          "content": "Correct Anwer is C<br>As most of the data is unstructured, and the company's file storage consists of SMB-based storage types from multiple vendors which is commonly a Windows-Linux file-sharing type so FSx for Windows File Server file systems completely meets the solution.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1153115,
          "date": "Sun 18 Feb 2024 09:22",
          "username": "ogerber",
          "content": "Option C since its SMB (windows) , and low operational effort so DataSync over Direct Connect",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1153044,
          "date": "Sun 18 Feb 2024 05:59",
          "username": "osmk",
          "content": "https://docs.aws.amazon.com/datasync/latest/userguide/create-fsx-location.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#748",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an organization in AWS Organizations to manage AWS accounts that contain applications. The company sets up a dedicated monitoring member account in the organization. The company wants to query and visualize observability data across the accounts by using Amazon CloudWatch.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#748",
          "answers": [
            {
              "choice": "<p>Enable CloudWatch cross-account observability for the monitoring account. Deploy an AWS CloudFormation template provided by the monitoring account in each AWS account to share the data with the monitoring account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up service control policies (SCPs) to provide access to CloudWatch in the monitoring account under the Organizations root organizational unit (OU).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a new IAM user in the monitoring account. In each AWS account, configure an IAM policy to have access to query and visualize the CloudWatch data in the account. Attach the new IAM policy to the new IAM user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new IAM user in the monitoring account. Create cross-account IAM policies in each AWS account. Attach the IAM policies to the new IAM user.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 748 discussion",
      "discusstion": [
        {
          "id": 1152092,
          "date": "Fri 16 Feb 2024 16:17",
          "username": "jaswantn",
          "content": "option A<br>below are the links to check both parts of option A.<br>https://docs.amazonaws.cn/en_us/AmazonCloudWatch/latest/monitoring/cloudwatch_crossaccount_dashboard.html<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account-Setup.html#Unified-Cross-Account-SetupSource-SingleTemplate<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"If you have multiple Amazon accounts, you can set up CloudWatch cross-account observability and then create rich cross-account dashboards in your monitoring accounts. You can seamlessly search, visualize, and analyze your metrics, logs, and traces without account boundaries.\\\"<br><br>Nice catch!</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1285983,
          "date": "Wed 18 Sep 2024 22:17",
          "username": "MatAlves",
          "content": "\\\"If you have multiple Amazon accounts, you can set up CloudWatch cross-account observability and then create rich cross-account dashboards in your monitoring accounts. You can seamlessly search, visualize, and analyze your metrics, logs, and traces without account boundaries.\\\"<br><br>Nice catch!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1170258,
          "date": "Sun 10 Mar 2024 11:48",
          "username": "Sivaeas",
          "content": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1159641,
          "date": "Mon 26 Feb 2024 12:52",
          "username": "ninasgx",
          "content": "It's C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1153046,
          "date": "Sun 18 Feb 2024 06:01",
          "username": "osmk",
          "content": "https://docs.amazonaws.cn/en_us/AmazonCloudWatch/latest/monitoring/cloudwatch_crossaccount_dashboard.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1141434,
          "date": "Mon 05 Feb 2024 21:17",
          "username": "Andy_09",
          "content": "Option A",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#749",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's website is used to sell products to the public. The site runs on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). There is also an Amazon CloudFront distribution, and AWS WAF is being used to protect against SQL injection attacks. The ALB is the origin for the CloudFront distribution. A recent review of security logs revealed an external malicious IP that needs to be blocked from accessing the website.<br><br>What should a solutions architect do to protect the application?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#749",
          "answers": [
            {
              "choice": "<p>Modify the network ACL on the CloudFront distribution to add a deny rule for the malicious IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the configuration of AWS WAF to add an IP match condition to block the malicious IP address.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the network ACL for the EC2 instances in the target groups behind the ALB to deny the malicious IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the security groups for the EC2 instances in the target groups behind the ALB to deny the malicious IP address.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 749 discussion",
      "discusstion": [
        {
          "id": 1141438,
          "date": "Mon 05 Feb 2024 21:20",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 1189014,
          "date": "Thu 04 Apr 2024 03:27",
          "username": "mohammadthainat",
          "content": "in WAF you can define Web ACL (Web Access Control List) Rule:<br>IP Set: up to 10,000 IP addresses =E2=80=93 use multiple Rules for more IPs",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1204539,
          "date": "Tue 30 Apr 2024 13:32",
          "username": "bujuman",
          "content": "There was option from disttribution Security Tab > Request logs for the specified time range where someone could target an IP address and block it - which action won't do more than creating a block rule under the associated Web ACL- but function has vanished, i don't ask me why.<br>So the only feasable option in WEBACLv2 is to go for an Ipset andad a WebACL ip match block condition.<br>I really liked the option A the first time i experimented it.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1179809,
          "date": "Fri 22 Mar 2024 04:06",
          "username": "xBUGx",
          "content": "You only need to blockan IP.And Cloudfront is the first layer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Modifying the CloudFront network ACL would block access at the CDN level. This could<br> impact legitimate users globally, not just the malicious IP.</li><li>When dealing with web application security concerns, leverage the capabilities of AWS WAF to block malicious IPs rather than modifying network access controls at lower levels like EC2 security groups or network ACLs</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1319789,
          "date": "Fri 29 Nov 2024 16:51",
          "username": "JA2018",
          "content": "Modifying the CloudFront network ACL would block access at the CDN level. This could<br> impact legitimate users globally, not just the malicious IP.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>When dealing with web application security concerns, leverage the capabilities of AWS WAF to block malicious IPs rather than modifying network access controls at lower levels like EC2 security groups or network ACLs</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1319790,
          "date": "Fri 29 Nov 2024 16:51",
          "username": "JA2018",
          "content": "When dealing with web application security concerns, leverage the capabilities of AWS WAF to block malicious IPs rather than modifying network access controls at lower levels like EC2 security groups or network ACLs",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1170265,
          "date": "Sun 10 Mar 2024 11:54",
          "username": "Sivaeas",
          "content": "The AWS WAF IP set match statement inspects the IP address of a web request against a set of IP addresses and address ranges. Use this to allow or block web requests based on the IP addresses that the requests originate from",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1155079,
          "date": "Wed 21 Feb 2024 00:39",
          "username": "stephensimudemy",
          "content": "Option B",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#750",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company sets up an organization in AWS Organizations that contains 10 AWS accounts. A solutions architect must design a solution to provide access to the accounts for several thousand employees. The company has an existing identity provider (IdP). The company wants to use the existing IdP for authentication to AWS.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#750",
          "answers": [
            {
              "choice": "<p>Create IAM users for the employees in the required AWS accounts. Connect IAM users to the existing IdP. Configure federated authentication for the IAM users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up AWS account root users with user email addresses and passwords that are synchronized from the existing IdP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS IAM Identity Center (AWS Single Sign-On). Connect IAM Identity Center to the existing IdP. Provision users and groups from the existing IdP.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Resource Access Manager (AWS RAM) to share access to the AWS accounts with the users in the existing IdP.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 750 discussion",
      "discusstion": [
        {
          "id": 1152973,
          "date": "Sun 18 Aug 2024 01:23",
          "username": "osmk",
          "content": "c--> Regardless of how you provision users, IAM Identity Center redirects the AWS Management Console, command line interface, and application authentication to your external IdP. IAM Identity Center then grants access to those resources based on policies you create in IAM Identity Center https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-identity-source-idp.html#provisioning-when-external-idp",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1153117,
          "date": "Sun 18 Aug 2024 08:28",
          "username": "ogerber",
          "content": "Option C<br>https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-identity-source-idp.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1153034,
          "date": "Sun 18 Aug 2024 04:37",
          "username": "osmk",
          "content": "https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-identity-source-idp.html#provisioning-when-external-idp",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1141440,
          "date": "Mon 05 Aug 2024 20:22",
          "username": "Andy_09",
          "content": "Option C",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#751",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing an AWS Identity and Access Management (IAM) authorization model for a company's AWS account. The company has designated five specific employees to have full access to AWS services and resources in the AWS account.<br><br>The solutions architect has created an IAM user for each of the five designated employees and has created an IAM user group.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#751",
          "answers": [
            {
              "choice": "<p>Attach the AdministratorAccess resource-based policy to the IAM user group. Place each of the five designated employee IAM users in the IAM user group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Attach the SystemAdministrator identity-based policy to the IAM user group. Place each of the five designated employee IAM users in the IAM user group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Attach the AdministratorAccess identity-based policy to the IAM user group. Place each of the five designated employee IAM users in the IAM user group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Attach the SystemAdministrator resource-based policy to the IAM user group. Place each of the five designated employee IAM users in the IAM user group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 751 discussion",
      "discusstion": [
        {
          "id": 1236731,
          "date": "Tue 25 Jun 2024 09:22",
          "username": "Scheldon",
          "content": "AnswerC<br><br>We need identity-based policy and if we will compare System Admin and Administrator Access policy it clear that SysAdmin have is allowing for limited amount of actions, where Admin Access simple allow for all actions.<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html<br><br>https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AdministratorAccess.html<br><br>https://docs.aws.amazon.com/aws-managed-policy/latest/reference/SystemAdministrator.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1231098,
          "date": "Sat 15 Jun 2024 20:21",
          "username": "NSA_Poker",
          "content": "(A & D) eliminated. Resource-based policies are attached to a resource NOT an IAM user, group, or role.<br>(B) eliminated. SystemAdministrator has fewer permissions than AdministratorAccess.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1212616,
          "date": "Fri 17 May 2024 01:26",
          "username": "Linuslin",
          "content": "The question says \\\"full access to AWS services and resources in the AWS account\\\" and \\\"created an IAM user group.\\\"<br>You can see it is identity-based policy, notresource-based.--->A and D are out.<br>SystemAdministrator: Allow 28 of 412 services.--->B is out.<br>AdministratorAccess: Allow 412 of 412 services.--->C is the correct answer.<br><br>If you are curious about what a policy can allow for, just log in you AWS account and go to IAM-policies to find out.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1155787,
          "date": "Wed 21 Feb 2024 19:41",
          "username": "MattBJ",
          "content": "C is the correct answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1152999,
          "date": "Sun 18 Feb 2024 03:11",
          "username": "osmk",
          "content": "C>>>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1152979,
          "date": "Sun 18 Feb 2024 02:32",
          "username": "osmk",
          "content": "C>>>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1145121,
          "date": "Fri 09 Feb 2024 01:48",
          "username": "Umuntu",
          "content": "C looks correct",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1142400,
          "date": "Tue 06 Feb 2024 18:14",
          "username": "Andy_09",
          "content": "Option C",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#752",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a multi-tier payment processing application that is based on virtual machines (VMs). The communication between the tiers occurs asynchronously through a third-party middleware solution that guarantees exactly-once delivery.<br><br>The company needs a solution that requires the least amount of infrastructure management. The solution must guarantee exactly-once delivery for application messaging.<br><br>Which combination of actions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#752",
          "answers": [
            {
              "choice": "<p>Use AWS Lambda for the compute layers in the architecture.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EC2 instances for the compute layers in the architecture.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Simple Notification Service (Amazon SNS) as the messaging component between the compute layers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Simple Queue Service (Amazon SQS) FIFO queues as the messaging component between the compute layers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use containers that are based on Amazon Elastic Kubernetes Service (Amazon EKS) for the compute layers in the architecture.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 752 discussion",
      "discusstion": [
        {
          "id": 1152998,
          "date": "Sun 18 Feb 2024 03:10",
          "username": "osmk",
          "content": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1330638,
          "date": "Mon 23 Dec 2024 02:12",
          "username": "tch",
          "content": "SQS is helpful for Asynchronous processing workflows.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1286002,
          "date": "Wed 18 Sep 2024 23:31",
          "username": "MatAlves",
          "content": "\\\"As its name suggests, exactly-once semantics means that each message is delivered precisely once. The message can neither be lost nor delivered twice (or more times).\\\"<br><br>- SNS doesn't provide exactly-once delivery. Thus, we need SQS.<br>- To achieve \\\"least amount of intra management\\\", we go with Lambda for compute layer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1236733,
          "date": "Tue 25 Jun 2024 09:27",
          "username": "Scheldon",
          "content": "AnswerAD,<br><br>SQS FIFO will guarantee exactly one time execution for each operation. The problem is with processing as we do not know if whole process will be closed in 15 min (TTL for Lambda).<br>I'm choosing Lambda as it is natural thing for Payment procesing in AWS but I'm not 100% sure",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1170270,
          "date": "Sun 10 Mar 2024 12:04",
          "username": "Sivaeas",
          "content": "Lamdba+SQS FIFO",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1153865,
          "date": "Mon 19 Feb 2024 12:13",
          "username": "PolarFox",
          "content": "someone please explain why the combination of D and E is not the correct?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>because qn says 'least amount of infrastructure management'.<br>E is not.</li><li>While EKS can provide scalability, it still requires managing container infrastructure. This adds complexity (more overhead in infra mgmt than A) to the solution</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1154701,
          "date": "Tue 20 Feb 2024 13:25",
          "username": "stephensimudemy",
          "content": "because qn says 'least amount of infrastructure management'.<br>E is not.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>While EKS can provide scalability, it still requires managing container infrastructure. This adds complexity (more overhead in infra mgmt than A) to the solution</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1319793,
          "date": "Fri 29 Nov 2024 17:00",
          "username": "JA2018",
          "content": "While EKS can provide scalability, it still requires managing container infrastructure. This adds complexity (more overhead in infra mgmt than A) to the solution",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1152265,
          "date": "Fri 16 Feb 2024 23:44",
          "username": "jaswantn",
          "content": "option A for payment processing.<br>option D for exactly once delivery.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1145124,
          "date": "Fri 09 Feb 2024 01:53",
          "username": "Umuntu",
          "content": "CD IS THE BEST ANSWER",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1145061,
          "date": "Thu 08 Feb 2024 23:00",
          "username": "hajra313",
          "content": "a and d",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#753",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a nightly batch processing routine that analyzes report files that an on-premises file system receives daily through SFTP. The company wants to move the solution to the AWS Cloud. The solution must be highly available and resilient. The solution also must minimize operational effort.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#753",
          "answers": [
            {
              "choice": "<p>Deploy AWS Transfer for SFTP and an Amazon Elastic File System (Amazon EFS) file system for storage. Use an Amazon EC2 instance in an Auto Scaling group with a scheduled scaling policy to run the batch operation.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Amazon EC2 instance that runs Linux and an SFTP service. Use an Amazon Elastic Block Store (Amazon EBS) volume for storage. Use an Auto Scaling group with the minimum number of instances and desired number of instances set to 1.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Amazon EC2 instance that runs Linux and an SFTP service. Use an Amazon Elastic File System (Amazon EFS) file system for storage. Use an Auto Scaling group with the minimum number of instances and desired number of instances set to 1.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy AWS Transfer for SFTP and an Amazon S3 bucket for storage. Modify the application to pull the batch files from Amazon S3 to an Amazon EC2 instance for processing. Use an EC2 instance in an Auto Scaling group with a scheduled scaling policy to run the batch operation.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 753 discussion",
      "discusstion": [
        {
          "id": 1170273,
          "date": "Sun 10 Mar 2024 12:09",
          "username": "Sivaeas",
          "content": "The Answer should be A not D because ...<br>Modify the application to pull the batch files from Amazon S3 to an Amazon EC2 instance for processing.--Why we need to do this when we can move the file directly to EFS in EC2 system<br><br>AWS Transfer Family now also supports file transfers to Amazon Elastic File System (Amazon EFS) file systems as well as Amazon S3.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1204901,
          "date": "Wed 01 May 2024 08:58",
          "username": "BBR01",
          "content": "A should be enough. EFS can be mounted to ASG directly, and there is no need to use S3 in the middle.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1286015,
          "date": "Wed 18 Sep 2024 23:58",
          "username": "MatAlves",
          "content": "\\\"... an on-premises file system receives\\\"file system > EFS.<br>SFT in AWSAWS Transfer family<br><br>Even though D works, that would require changes in the current architecture.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1236736,
          "date": "Tue 25 Jun 2024 09:33",
          "username": "Scheldon",
          "content": "AnswerA<br><br>Option A and D will work, but taking into consideration requirements I would go with A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1227333,
          "date": "Sun 09 Jun 2024 15:00",
          "username": "Franjly",
          "content": "File systemefs, fsx, ....",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1212573,
          "date": "Thu 16 May 2024 21:56",
          "username": "7fb06b3",
          "content": "Option D, I'm not 100% sure..Always prefer S3 over EFS<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"... an on-premises file system receives\\\"file system &gt; EFS.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1286013,
          "date": "Wed 18 Sep 2024 23:56",
          "username": "MatAlves",
          "content": "\\\"... an on-premises file system receives\\\"file system > EFS.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1187318,
          "date": "Mon 01 Apr 2024 10:37",
          "username": "JackyCCK",
          "content": "I think the ans is A as well, option D require \\\"Modify the application\\\" which is not \\\"minimize operational effort\\\"",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1185286,
          "date": "Fri 29 Mar 2024 08:59",
          "username": "khoantd",
          "content": "Option D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1175125,
          "date": "Sat 16 Mar 2024 17:57",
          "username": "Ipergorta",
          "content": "Option D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1153885,
          "date": "Mon 19 Feb 2024 12:48",
          "username": "PolarFox",
          "content": "trasnfer + S3HA, scheduled scalingresilient",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1153797,
          "date": "Mon 19 Feb 2024 10:03",
          "username": "NayeraB",
          "content": "I'm not 100% sure, but D looks like the right flow to me<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I agree on a professional level, that's will make the company save money, that is the only things company care about. But for the exam i will go for A</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1213319,
          "date": "Sat 18 May 2024 15:01",
          "username": "TwinSpark",
          "content": "I agree on a professional level, that's will make the company save money, that is the only things company care about. But for the exam i will go for A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1152994,
          "date": "Sun 18 Feb 2024 03:07",
          "username": "osmk",
          "content": "The service is designed to be highly scalable, highly available, and highly durable. Amazon EFS offers the following file system types to meet your availability and durability needs<br>->https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html<br>Amazon S3 achieves high availability by replicating data across multiple servers within AWS data centers->https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But option A doesn't address the need for the application to pull the batch jobs from the new storage, also is the use of EFS needed here? In terms of it being a shared storage and whatnot..</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1153796,
          "date": "Mon 19 Feb 2024 10:02",
          "username": "NayeraB",
          "content": "But option A doesn't address the need for the application to pull the batch jobs from the new storage, also is the use of EFS needed here? In terms of it being a shared storage and whatnot..",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1152991,
          "date": "Sun 18 Feb 2024 03:04",
          "username": "osmk",
          "content": "A>>>>><br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The service is designed to be highly scalable, highly available, and highly durable. Amazon EFS offers the following file system types to meet your availability and durability needs<br>-&gt;https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html<br>Amazon S3 achieves high availability by replicating data across multiple servers within AWS data centers-&gt;https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1152992,
          "date": "Sun 18 Feb 2024 03:06",
          "username": "osmk",
          "content": "The service is designed to be highly scalable, highly available, and highly durable. Amazon EFS offers the following file system types to meet your availability and durability needs<br>->https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html<br>Amazon S3 achieves high availability by replicating data across multiple servers within AWS data centers->https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1141447,
          "date": "Mon 05 Feb 2024 21:30",
          "username": "Andy_09",
          "content": "Option D",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#754",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has users all around the world accessing its HTTP-based application deployed on Amazon EC2 instances in multiple AWS Regions. The company wants to improve the availability and performance of the application. The company also wants to protect the application against common web exploits that may affect availability, compromise security, or consume excessive resources. Static IP addresses are required.<br><br>What should a solutions architect recommend to accomplish this?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#754",
          "answers": [
            {
              "choice": "<p>Put the EC2 instances behind Network Load Balancers (NLBs) in each Region. Deploy AWS WAF on the NLBs. Create an accelerator using AWS Global Accelerator and register the NLBs as endpoints.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Put the EC2 instances behind Application Load Balancers (ALBs) in each Region. Deploy AWS WAF on the ALBs. Create an accelerator using AWS Global Accelerator and register the ALBs as endpoints.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Put the EC2 instances behind Network Load Balancers (NLBs) in each Region. Deploy AWS WAF on the NLBs. Create an Amazon CloudFront distribution with an origin that uses Amazon Route 53 latency-based routing to route requests to the NLBs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Put the EC2 instances behind Application Load Balancers (ALBs) in each Region. Create an Amazon CloudFront distribution with an origin that uses Amazon Route 53 latency-based routing to route requests to the ALBs. Deploy AWS WAF on the CloudFront distribution.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 754 discussion",
      "discusstion": [
        {
          "id": 1153133,
          "date": "Sun 18 Aug 2024 08:53",
          "username": "ogerber",
          "content": "HTTP based application so ALB is required.<br>because static IP addresses are required, we should use global accelerator:<br>\\\"By default, Global Accelerator provides you with static IP addresses that you associate with your accelerator.\\\"",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1141452,
          "date": "Mon 05 Aug 2024 20:32",
          "username": "Andy_09",
          "content": "Option D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why D cause i think global accelerator will do a better job an cloudfront to increase availability and performance</li><li>than cloudfront*</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1151811,
          "date": "Fri 16 Aug 2024 07:58",
          "username": "Typewriter101",
          "content": "Why D cause i think global accelerator will do a better job an cloudfront to increase availability and performance<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>than cloudfront*</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1151813,
          "date": "Fri 16 Aug 2024 07:59",
          "username": "Typewriter101",
          "content": "than cloudfront*",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1217068,
          "date": "Sun 24 Nov 2024 01:39",
          "username": "f07ed8f",
          "content": "CloudFront doesn't support assigning a static IP address to distributions",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1202508,
          "date": "Sat 26 Oct 2024 11:26",
          "username": "zinabu",
          "content": "Http based appALB<br>static IP AWS global accelerator<br>for those who choice ''A'' NLB doesn't support Http based traffic it is just used for TCP/UDP based traffic.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1189040,
          "date": "Fri 04 Oct 2024 04:50",
          "username": "mohammadthainat",
          "content": "Something wrong in the question, here is why:<br><br>Static IP addresses are required --> NLB<br>protect against common web exploits --> WAF (But you can't use WAF directly with NLB)<br>HTTP-based application --> Cloudfront (using CloudFront with NLB is not recommended)<br>EC2s in multiple AWS Regions --> Route 53 latency-based<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Changing my answer to B<br><br>Static IP addresses are required --&gt; We can use Global Accelerator for fixed IP and WAF on the ALB</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1189042,
          "date": "Fri 04 Oct 2024 04:55",
          "username": "mohammadthainat",
          "content": "Changing my answer to B<br><br>Static IP addresses are required --> We can use Global Accelerator for fixed IP and WAF on the ALB",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1183077,
          "date": "Thu 26 Sep 2024 06:21",
          "username": "TruthWS",
          "content": "Option A <br>Static IP --> NLB<br>against common web exploits --> WAF<br>performance --> Global Accelerator is best choice in this situation.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, option B is correct.<br><br>* WAF (L7) does not work with NLB (L4)<br>* Traffic enters via the Global Accelerator, so that's the customer-facing (static) IP - https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.eip-accelerator.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1184262,
          "date": "Fri 27 Sep 2024 17:38",
          "username": "dkw2342",
          "content": "No, option B is correct.<br><br>* WAF (L7) does not work with NLB (L4)<br>* Traffic enters via the Global Accelerator, so that's the customer-facing (static) IP - https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.eip-accelerator.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1180470,
          "date": "Mon 23 Sep 2024 02:16",
          "username": "jackky3123213",
          "content": "Option D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1180275,
          "date": "Sun 22 Sep 2024 19:24",
          "username": "alawada",
          "content": "CloudFront uses multiple sets of dynamically changing IP addresses while Global Accelerator will provide you a set of static IP addresses as a fixed entry point to your applications",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1175133,
          "date": "Mon 16 Sep 2024 17:02",
          "username": "Ipergorta",
          "content": "Option D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1156026,
          "date": "Thu 22 Aug 2024 02:15",
          "username": "Naveena_Devanga",
          "content": "Correct Answer is C.<br>Static IP addresses are required specific to the requirement.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1154713,
          "date": "Tue 20 Aug 2024 12:56",
          "username": "stephensimudemy",
          "content": "CloudFront uses multiple sets of dynamically changing IP addresses while Global Accelerator will provide you a set of static IP addresses as a fixed entry point to your applications",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1153004,
          "date": "Sun 18 Aug 2024 02:44",
          "username": "osmk",
          "content": "Network Load Balancer (NLB): NLB operates at layer 4 and does not support AWS WAF directly<br>https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The company wants to improve the availability and performance of the application</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1153007,
          "date": "Sun 18 Aug 2024 02:47",
          "username": "osmk",
          "content": "The company wants to improve the availability and performance of the application",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1152269,
          "date": "Fri 16 Aug 2024 22:49",
          "username": "jaswantn",
          "content": "Static IP addresses are required, so option B....global accelerator with ALB",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1145767,
          "date": "Fri 09 Aug 2024 20:21",
          "username": "Dhokal",
          "content": "B is correct",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#755",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's data platform uses an Amazon Aurora MySQL database. The database has multiple read replicas and multiple DB instances across different Availability Zones. Users have recently reported errors from the database that indicate that there are too many connections. The company wants to reduce the failover time by 20% when a read replica is promoted to primary writer.<br><br>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#755",
          "answers": [
            {
              "choice": "<p>Switch from Aurora to Amazon RDS with Multi-AZ cluster deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon RDS Proxy in front of the Aurora database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Switch to Amazon DynamoDB with DynamoDB Accelerator (DAX) for read connections.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Switch to Amazon Redshift with relocation capability.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 755 discussion",
      "discusstion": [
        {
          "id": 1153017,
          "date": "Sun 18 Aug 2024 03:21",
          "username": "osmk",
          "content": "By using Amazon RDS Proxy, your applications can pool and share database connections. This pooling improves scalability by allowing multiple application instances to reuse existing connections.<br>It also makes your applications more resilient to database failures. When a primary database instance fails, RDS Proxy automatically connects to a standby DB instance while preserving application connections. >https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1145134,
          "date": "Fri 09 Aug 2024 01:12",
          "username": "Umuntu",
          "content": "Option B",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1141457,
          "date": "Mon 05 Aug 2024 20:37",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#756",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores text files in Amazon S3. The text files include customer chat messages, date and time information, and customer personally identifiable information (PII).<br><br>The company needs a solution to provide samples of the conversations to an external service provider for quality control. The external service provider needs to randomly pick sample conversations up to the most recent conversation. The company must not share the customer PII with the external service provider. The solution must scale when the number of customer conversations increases.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#756",
          "answers": [
            {
              "choice": "<p>Create an Object Lambda Access Point. Create an AWS Lambda function that redacts the PII when the function reads the file. Instruct the external service provider to access the Object Lambda Access Point.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a batch process on an Amazon EC2 instance that regularly reads all new files, redacts the PII from the files, and writes the redacted files to a different S3 bucket. Instruct the external service provider to access the bucket that does not contain the PII.B. Create a web application on an Amazon EC2 instance that presents a list of the files, redacts the PII from the files, and allows the external service provider to download new versions of the files that have the PII redacted.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon DynamoDB table. Create an AWS Lambda function that reads only the data in the files that does not contain PII. Configure the Lambda function to store the non-PII data in the DynamoDB table when a new file is written to Amazon S3. Grant the external service provider access to the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 756 discussion",
      "discusstion": [
        {
          "id": 1153019,
          "date": "Sun 18 Feb 2024 04:24",
          "username": "osmk",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/tutorial-s3-object-lambda-redact-pii.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>thanks</li></ul>",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1205629,
          "date": "Thu 02 May 2024 16:13",
          "username": "Sergiuss95",
          "content": "thanks",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141459,
          "date": "Mon 05 Feb 2024 21:39",
          "username": "Andy_09",
          "content": "Option A",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1331039,
          "date": "Tue 24 Dec 2024 07:09",
          "username": "LeonSauveterre",
          "content": "If you want to achieve the goal stipulated in the question, all 4 options work, but only option A minimizes operational overhead and ensures scalability while redacting PII dynamically.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1236031,
          "date": "Mon 24 Jun 2024 00:48",
          "username": "trinh_le",
          "content": "Use AWS Lambda functions to change the Object before it is retrieved by the caller application. Only one S3 bucket is needed, on top of which we create S3 Access Point And S3 Object Lambda Access Points<br>Use case:<br>1. Redact PII for analytics or non-production environment<br>2. Convert across data formats ex: XML to Json<br>3. Resizing and watermaking images on fly using caller-specific details ex: user who requested the object",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1202518,
          "date": "Fri 26 Apr 2024 11:36",
          "username": "zinabu",
          "content": "Creating a RAID 0 array allows you to achieve a higher level of performance for a file system than you can provision on a single Amazon EBS volume. Use RAID 0 when I/O performance is of the utmost importance. With RAID 0, I/O is distributed across the volumes in a stripe.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/raid-config.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1147657,
          "date": "Sun 11 Feb 2024 21:38",
          "username": "VIad",
          "content": "A is the correct choice.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1145137,
          "date": "Fri 09 Feb 2024 02:17",
          "username": "Umuntu",
          "content": "A is the best choice",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#757",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a legacy system on an Amazon EC2 instance. The application code cannot be modified, and the system cannot run on more than one instance. A solutions architect must design a resilient solution that can improve the recovery time for the system.<br><br>What should the solutions architect recommend to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#757",
          "answers": [
            {
              "choice": "<p>Enable termination protection for the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the EC2 instance for Multi-AZ deployment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon CloudWatch alarm to recover the EC2 instance in case of failure.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Launch the EC2 instance with two Amazon Elastic Block Store (Amazon EBS) volumes that use RAID configurations for storage redundancy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 757 discussion",
      "discusstion": [
        {
          "id": 1195707,
          "date": "Mon 15 Apr 2024 00:13",
          "username": "KynExam",
          "content": "A. Enable termination protection for the EC2 instance.<br>No. Termination protection is about avoid accidentally delete the instance<br><br>B. Configure the EC2 instance for Multi-AZ deployment.<br>No. Question says \\\"cannot run on more than one instance\\\"<br><br>C. Create an Amazon CloudWatch alarm to recover the EC2 instance in case of failure.<br>Yes. CloudWatch can be used to recover the instance: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html#AddingRecoverActions<br><br>D. Launch the EC2 instance with two Amazon Elastic Block Store (Amazon EBS) volumes that use RAID configurations for storage redundancy.<br>No. Raid could be helpful to increase resilience, but does not help with \\\"improve the recovery time\\\"",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1142404,
          "date": "Tue 06 Feb 2024 18:21",
          "username": "Andy_09",
          "content": "Option C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>i think D is the answer.<br>Cause the question asks for a resilient solution and EBS with RAID config can balance between the performance and redundancy. EBS can also help with faster launch.</li><li>But how does that \\\"improve the recovery time for the system\\\"?</li><li>Your solution can't resolve the problem</li></ul>",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1151818,
          "date": "Fri 16 Feb 2024 09:13",
          "username": "Typewriter101",
          "content": "i think D is the answer.<br>Cause the question asks for a resilient solution and EBS with RAID config can balance between the performance and redundancy. EBS can also help with faster launch.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But how does that \\\"improve the recovery time for the system\\\"?</li><li>Your solution can't resolve the problem</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1286026,
          "date": "Thu 19 Sep 2024 00:16",
          "username": "MatAlves",
          "content": "But how does that \\\"improve the recovery time for the system\\\"?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1157999,
          "date": "Sat 24 Feb 2024 16:06",
          "username": "_mavik_",
          "content": "Your solution can't resolve the problem",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1190082,
          "date": "Fri 05 Apr 2024 22:50",
          "username": "buzzinmumbai",
          "content": "Option should be B .They are not asking about storage anywhere. In muti-AZ you application runs on the primary and the secondary is kept in sync.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1189054,
          "date": "Thu 04 Apr 2024 05:39",
          "username": "mohammadthainat",
          "content": "Question about \\\"\\\"\\\"improve the recovery time for the system\\\"\\\"\\\" RAID improves data resilience, but won't recover the instance if the system itself fails. it's 100% C",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1184885,
          "date": "Thu 28 Mar 2024 17:27",
          "username": "dkw2342",
          "content": "Pretty sure option D is NOT correct.<br><br>> RAID 5 and RAID 6 are not recommended for Amazon EBS (...).<br>> RAID 1 is also not recommended for use with Amazon EBS.<br><br>https://docs.aws.amazon.com/ebs/latest/userguide/raid-config.html#raid-config-options<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>So what is the answer?</li><li>C: You can create an Amazon CloudWatch alarm that monitors an Amazon EC2 instance and automatically recovers the instance if it becomes impaired due to an underlying hardware failure or a problem that requires AWS involvement to repair. Terminated instances cannot be recovered. A recovered instance is identical to the original instance, including the instance ID, private IP addresses, Elastic IP addresses, and all instance metadata.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1188047,
          "date": "Tue 02 Apr 2024 14:59",
          "username": "Awsbeginner87",
          "content": "So what is the answer?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C: You can create an Amazon CloudWatch alarm that monitors an Amazon EC2 instance and automatically recovers the instance if it becomes impaired due to an underlying hardware failure or a problem that requires AWS involvement to repair. Terminated instances cannot be recovered. A recovered instance is identical to the original instance, including the instance ID, private IP addresses, Elastic IP addresses, and all instance metadata.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1202589,
          "date": "Fri 26 Apr 2024 14:45",
          "username": "sandordini",
          "content": "C: You can create an Amazon CloudWatch alarm that monitors an Amazon EC2 instance and automatically recovers the instance if it becomes impaired due to an underlying hardware failure or a problem that requires AWS involvement to repair. Terminated instances cannot be recovered. A recovered instance is identical to the original instance, including the instance ID, private IP addresses, Elastic IP addresses, and all instance metadata.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1174365,
          "date": "Fri 15 Mar 2024 17:03",
          "username": "haci",
          "content": "For those who choose C, the question asks that \\\"must design a resilient solution\\\".. C may improve recovery time but it has nothing to do with resiliency.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"resilient solution that can improve the recovery time for the system\\\" , resiliency here means only</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1188127,
          "date": "Tue 02 Apr 2024 17:14",
          "username": "JackyCCK",
          "content": "\\\"resilient solution that can improve the recovery time for the system\\\" , resiliency here means only",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1157998,
          "date": "Sat 24 Feb 2024 16:04",
          "username": "_mavik_",
          "content": "Option C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1154735,
          "date": "Tue 20 Feb 2024 14:19",
          "username": "stephensimudemy",
          "content": "Can only run 1 instance.<br>improve recovery time.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1154731,
          "date": "Tue 20 Feb 2024 14:16",
          "username": "stephensimudemy",
          "content": "Option B.<br>Question never ask anything about storage.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1153022,
          "date": "Sun 18 Feb 2024 04:49",
          "username": "osmk",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/raid-config.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#758",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to deploy its containerized application workloads to a VPC across three Availability Zones. The company needs a solution that is highly available across Availability Zones. The solution must require minimal changes to the application.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#758",
          "answers": [
            {
              "choice": "<p>Use Amazon Elastic Container Service (Amazon ECS). Configure Amazon ECS Service Auto Scaling to use target tracking scaling. Set the minimum capacity to 3. Set the task placement strategy type to spread with an Availability Zone attribute.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic Kubernetes Service (Amazon EKS) self-managed nodes. Configure Application Auto Scaling to use target tracking scaling. Set the minimum capacity to 3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EC2 Reserved Instances. Launch three EC2 instances in a spread placement group. Configure an Auto Scaling group to use target tracking scaling. Set the minimum capacity to 3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Lambda function. Configure the Lambda function to connect to a VPC. Configure Application Auto Scaling to use Lambda as a scalable target. Set the minimum capacity to 3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 758 discussion",
      "discusstion": [
        {
          "id": 1153030,
          "date": "Sun 18 Feb 2024 05:12",
          "username": "osmk",
          "content": "Amazon EKS self-managed nodes require you to manually install and configure the Kubernetes node components, such as kubelet, kube-proxy, and Docker, on your Amazon EC2 instances. You also need to manage the security group, IAM role, and subnet for your node group. Amazon ECS handles these tasks for you when you use the Amazon EC2 launch type .<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>but it requires minimum change in application. I believe when changing to ECS, its a huge change</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1239052,
          "date": "Sat 29 Jun 2024 07:43",
          "username": "EdricHoang",
          "content": "but it requires minimum change in application. I believe when changing to ECS, its a huge change",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1280995,
          "date": "Mon 09 Sep 2024 16:57",
          "username": "ajwksdldfgdsg",
          "content": "Containerized..ECS",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1168097,
          "date": "Thu 07 Mar 2024 15:37",
          "username": "1dd",
          "content": "why not lambda?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Containerized... The solution must require minimal changes to the application.</li><li>lamda dont have containerized</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1205640,
          "date": "Thu 02 May 2024 16:21",
          "username": "Sergiuss95",
          "content": "Containerized... The solution must require minimal changes to the application.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1187877,
          "date": "Tue 02 Apr 2024 08:11",
          "username": "khoahoang",
          "content": "lamda dont have containerized",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141467,
          "date": "Mon 05 Feb 2024 21:50",
          "username": "Andy_09",
          "content": "Option A",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#759",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company stores movies in Amazon S3. Each movie is stored in a single video file that ranges from 1 GB to 10 GB in size.<br><br>The company must be able to provide the streaming content of a movie within 5 minutes of a user purchase. There is higher demand for movies that are less than 20 years old than for movies that are more than 20 years old. The company wants to minimize hosting service costs based on demand.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#759",
          "answers": [
            {
              "choice": "<p>Store all media content in Amazon S3. Use S3 Lifecycle policies to move media data into the Infrequent Access tier when the demand for a movie decreases.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store newer movie video files in S3 Standard. Store older movie video files in S3 Standard-infrequent Access (S3 Standard-IA). When a user orders an older movie, retrieve the video file by using standard retrieval.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store newer movie video files in S3 Intelligent-Tiering. Store older movie video files in S3 Glacier Flexible Retrieval. When a user orders an older movie, retrieve the video file by using expedited retrieval.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store newer movie video files in S3 Standard. Store older movie video files in S3 Glacier Flexible Retrieval. When a user orders an older movie, retrieve the video file by using bulk retrieval.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 759 discussion",
      "discusstion": [
        {
          "id": 1151655,
          "date": "Fri 16 Feb 2024 01:46",
          "username": "Freddie26",
          "content": "Technically, expedited retrieval for files is not guaranteed within 1-5 minutes for files larger than 250 MB+. See https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html.",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 1153033,
          "date": "Sun 18 Feb 2024 05:36",
          "username": "osmk",
          "content": "S3 Standard-IA is for data that is accessed less frequently, but requires rapid access when needed. S3 Standard-IA offers the high durability, high throughput, and low latency of S3 Standard, with a low per GB storage price and per GB retrieval chargehttps://aws.amazon.com/s3/storage-classes/",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1331040,
          "date": "Tue 24 Dec 2024 07:22",
          "username": "LeonSauveterre",
          "content": "A - Cost optimization for > 20-yr-old files is insufficient.<br>B - Good. Although, S3 Standard-IA is still relatively expensive compared to archival classes.<br>C - Glacier Flexible Retrieval may not consistently meet the 5-minute streaming requirement. Could be minutes, could be hours.<br>D - Bulk retrieval typically takes hours, let alone 5 minutes.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1318976,
          "date": "Thu 28 Nov 2024 02:28",
          "username": "Arad",
          "content": "C is the correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1268219,
          "date": "Sun 18 Aug 2024 23:35",
          "username": "Abdullah2004",
          "content": "A is most correct =E2=9C=85",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1239055,
          "date": "Sat 29 Jun 2024 07:48",
          "username": "EdricHoang",
          "content": "\\\"Expedited Retrieval, you can retrieve small amounts of data (up to 250 MB per request) within 1-5 minutes.\\\"<br>Cannot C",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1231115,
          "date": "Sat 15 Jun 2024 22:09",
          "username": "NSA_Poker",
          "content": "(A) is eliminated. Demand metric is popularly based & cannot be configured with Lifecycle policies. Ex: an old movie can have resurgent demand 20 years after it's sequel is released.<br>(C) is eliminated. Expedited retrieval is for all but the largest archived objects (250 MB+).<br>(D) is eliminated. Bulk retrieval takes hours.<br>(B) is more expensive than S3 Glacier Flexible Retrieval but it's the only one that works.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1207927,
          "date": "Tue 07 May 2024 17:25",
          "username": "bujuman",
          "content": "AS the pattern is uncertain- Customer could not, in advance, segregate data, the pattern will be determined on the fly - and with regard of the following S3 feature:<br>S3 Intelligent-Tiering is an additional storage class that provides flexibility for data with unknown or changing access patterns. It automates the movement of your objects between storage classes to optimize cost.<br>C will be the most cost effective for this use case.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>More insight:<br>S3 Glacier Flexible Retrieval for the most flexible retrieval options that balance cost with access times ranging from minutes to hours. Your retrieval options permit you to access all the archives you need, when you need them, for one low storage price. This storage class comes with multiple retrieval options:<br>- Expedited retrievals (restore in 1=E2=80=935 minutes)<br>- Standard retrievals (restore in 3=E2=80=935 hours)<br>- Bulk retrievals (restore in 5=E2=80=9312 hours). Bulk retrievals are available at no additional charge</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1207929,
          "date": "Tue 07 May 2024 17:27",
          "username": "bujuman",
          "content": "More insight:<br>S3 Glacier Flexible Retrieval for the most flexible retrieval options that balance cost with access times ranging from minutes to hours. Your retrieval options permit you to access all the archives you need, when you need them, for one low storage price. This storage class comes with multiple retrieval options:<br>- Expedited retrievals (restore in 1=E2=80=935 minutes)<br>- Standard retrievals (restore in 3=E2=80=935 hours)<br>- Bulk retrievals (restore in 5=E2=80=9312 hours). Bulk retrievals are available at no additional charge",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1205652,
          "date": "Thu 02 May 2024 16:28",
          "username": "Sergiuss95",
          "content": "Expedited 1-5min and for new files intelligent tier is a good option",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1189060,
          "date": "Thu 04 Apr 2024 05:55",
          "username": "mohammadthainat",
          "content": "All old files should be in--> Glacier Flexible Retrieval takes (1-5 minutes) to retrieve the file.<br>New files should not stay in Standard Storage class forever --> Intelligent-Tiering",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1187373,
          "date": "Mon 01 Apr 2024 13:27",
          "username": "JackyCCK",
          "content": "I don't think C is an option, S3 Glacier Flexible takes hour to retrieve the data.<br>Option A is actually valid, but the way the option A describe it does not consider \\\"demand patterns based on time\\\"<br><br>So it should be B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>expedited retrieval should not be used in that way as well</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1187377,
          "date": "Mon 01 Apr 2024 13:29",
          "username": "JackyCCK",
          "content": "expedited retrieval should not be used in that way as well",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1186439,
          "date": "Sat 30 Mar 2024 23:47",
          "username": "Drew3000",
          "content": "There is something I like about option A.It's the only one that deals with what happens with a movie that goes from \\\"new\\\" to \\\"old\\\". With other options, new movies will be new forever.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1185457,
          "date": "Fri 29 Mar 2024 14:52",
          "username": "dkw2342",
          "content": "Option B makes the most sense.<br><br>Why not option C:<br><br>1. This is not an archival use case, the company runs a video streaming service, so objects are still accessed regularly. Accelerated Retrieval is designed for \\\"occasional urgent requests for a subset of archives\\\".<br>2. The 5 minute timeframe does not apply to items of 250+ MB.<br>3. Even if the timeframe were valid, it's not guaranteed (\\\"typically\\\")<br>4. Expedited retrieval is expensive if used frequently ($10.00 per 1,000 requests) - depending on access patterns, this may more than offset the savings in storage costs.<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1183064,
          "date": "Tue 26 Mar 2024 07:00",
          "username": "TruthWS",
          "content": "Option C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1180802,
          "date": "Sat 23 Mar 2024 12:00",
          "username": "[Removed]",
          "content": "Expedited Retrievals (1-5 minutes)<br>Intelligent-Tiering cost",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1180299,
          "date": "Fri 22 Mar 2024 21:29",
          "username": "alawada",
          "content": "Expedited Retrievals (1-5 minutes) - Intelligent-Tiering cost",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1175209,
          "date": "Sat 16 Mar 2024 20:13",
          "username": "xBUGx",
          "content": "I go with C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#760",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to design the architecture for an application that a vendor provides as a Docker container image. The container needs 50 GB of storage available for temporary files. The infrastructure must be serverless.<br><br>Which solution meets these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#760",
          "answers": [
            {
              "choice": "<p>Create an AWS Lambda function that uses the Docker container image with an Amazon S3 mounted volume that has more than 50 GB of space.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function that uses the Docker container image with an Amazon Elastic Block Store (Amazon EBS) volume that has more than 50 GB of space.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Elastic Container Service (Amazon ECS) cluster that uses the AWS Fargate launch type. Create a task definition for the container image with an Amazon Elastic File System (Amazon EFS) volume. Create a service with that task definition.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Elastic Container Service (Amazon ECS) cluster that uses the Amazon EC2 launch type with an Amazon Elastic Block Store (Amazon EBS) volume that has more than 50 GB of space. Create a task definition for the container image. Create a service with that task definition.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 760 discussion",
      "discusstion": [
        {
          "id": 1154744,
          "date": "Tue 20 Feb 2024 14:38",
          "username": "stephensimudemy",
          "content": "Options A and B involve AWS Lambda, which is suitable for event-driven, short-lived compute tasks, but it's NOT ideal for long-running containerized applications and managing large volumes of data.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1141471,
          "date": "Mon 05 Feb 2024 21:54",
          "username": "Andy_09",
          "content": "Option C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why C and not B?</li><li>Not B because your lambda container needs the RIC and the image is already provided, presumably without the RIC (or else it would have mentioned it)</li><li>RIC: Runtime interface clients</li><li>the infrastructure must be serverless</li><li>Creating an AWS Lambda function that uses the Docker container image with an Amazon S3 mounted volume might not be suitable because Lambda functions have limitations on execution duration (15 minutes) and storage size (maximum 512 MB in the /tmp directory).</li><li>There's no indication of runtime, so that's not the reason.<br><br>A is wrong because \\\"S3 volumes\\\" do not exist. If the question were about S3 buckets: while it is possible to mount an S3 bucket using FUSE, this is completely unsupported by AWS and definitely won't work in a container running on Lambda (you can't assign SYS_ADMIN cap and mount /dev/fuse).<br><br>B is wrong because you can't use EBS volumes with Lambda.<br><br>As an aside, Lambda supports up to 10 GB of ephemeral storage (configurable).</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1144891,
          "date": "Thu 08 Feb 2024 21:26",
          "username": "nj1999",
          "content": "Why C and not B?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Not B because your lambda container needs the RIC and the image is already provided, presumably without the RIC (or else it would have mentioned it)</li><li>RIC: Runtime interface clients</li><li>the infrastructure must be serverless</li><li>Creating an AWS Lambda function that uses the Docker container image with an Amazon S3 mounted volume might not be suitable because Lambda functions have limitations on execution duration (15 minutes) and storage size (maximum 512 MB in the /tmp directory).</li><li>There's no indication of runtime, so that's not the reason.<br><br>A is wrong because \\\"S3 volumes\\\" do not exist. If the question were about S3 buckets: while it is possible to mount an S3 bucket using FUSE, this is completely unsupported by AWS and definitely won't work in a container running on Lambda (you can't assign SYS_ADMIN cap and mount /dev/fuse).<br><br>B is wrong because you can't use EBS volumes with Lambda.<br><br>As an aside, Lambda supports up to 10 GB of ephemeral storage (configurable).</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1200783,
          "date": "Tue 23 Apr 2024 16:17",
          "username": "03beafc",
          "content": "Not B because your lambda container needs the RIC and the image is already provided, presumably without the RIC (or else it would have mentioned it)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>RIC: Runtime interface clients</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1202602,
          "date": "Fri 26 Apr 2024 15:10",
          "username": "sandordini",
          "content": "RIC: Runtime interface clients",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1146428,
          "date": "Sat 10 Feb 2024 17:15",
          "username": "hajra313",
          "content": "the infrastructure must be serverless",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1146349,
          "date": "Sat 10 Feb 2024 15:19",
          "username": "Cali182",
          "content": "Creating an AWS Lambda function that uses the Docker container image with an Amazon S3 mounted volume might not be suitable because Lambda functions have limitations on execution duration (15 minutes) and storage size (maximum 512 MB in the /tmp directory).<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>There's no indication of runtime, so that's not the reason.<br><br>A is wrong because \\\"S3 volumes\\\" do not exist. If the question were about S3 buckets: while it is possible to mount an S3 bucket using FUSE, this is completely unsupported by AWS and definitely won't work in a container running on Lambda (you can't assign SYS_ADMIN cap and mount /dev/fuse).<br><br>B is wrong because you can't use EBS volumes with Lambda.<br><br>As an aside, Lambda supports up to 10 GB of ephemeral storage (configurable).</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1185470,
          "date": "Fri 29 Mar 2024 15:16",
          "username": "dkw2342",
          "content": "There's no indication of runtime, so that's not the reason.<br><br>A is wrong because \\\"S3 volumes\\\" do not exist. If the question were about S3 buckets: while it is possible to mount an S3 bucket using FUSE, this is completely unsupported by AWS and definitely won't work in a container running on Lambda (you can't assign SYS_ADMIN cap and mount /dev/fuse).<br><br>B is wrong because you can't use EBS volumes with Lambda.<br><br>As an aside, Lambda supports up to 10 GB of ephemeral storage (configurable).",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1331043,
          "date": "Tue 24 Dec 2024 07:29",
          "username": "LeonSauveterre",
          "content": "A - Technically, temporary file access in Lambda is limited to the /tmp directory with a 512 MB limit.<br>B - AWS Lambda does not natively support mounting EBS volumes.<br>C - Looks good to me.<br>D - ECS with EC2 is not serverless.<br><br>FYI - Serverless infrastructure: Solutions must not involve managing servers or underlying infrastructure. AWS Fargate and AWS Lambda are serverless options, while Amazon ECS with EC2 launch type involves managing EC2 instances.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1234452,
          "date": "Fri 21 Jun 2024 16:11",
          "username": "dragongoseki",
          "content": "C is right answer.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1234181,
          "date": "Fri 21 Jun 2024 05:56",
          "username": "DZRomero",
          "content": "The combination of ECS with Fargate and EFS (option C) provides a serverless solution that can run Docker containers and meet the storage requirements, all while minimizing operational overhead. You don't need to manage any servers, and the storage will automatically scale as needed. This makes it the best fit for the given requirements.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1202609,
          "date": "Fri 26 Apr 2024 15:16",
          "username": "sandordini",
          "content": "Lambda would need Runtime interface clients (RIC) to host a container workload.<br>Also Lambda storage limit: 10GB<br>Fargate is Serverless >> C",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1201749,
          "date": "Thu 25 Apr 2024 06:54",
          "username": "zinabu",
          "content": "the key word here is {\\\" serverless + temporary file''}<br>A: it uses S3 for storage that is not a temporary file storage system<br>C: that was good using ECS with farget for serverless part but is uses EFS file system still it is a durable file system not temporary<br>D: Using EBS was good to use for temporary file system but it is mounted on EC2 which is not serverless. so that we are left with ''B'' which uses [ lambda(serverless) + EBS(temporary storage)]",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1201748,
          "date": "Thu 25 Apr 2024 06:52",
          "username": "zinabu",
          "content": "the key word here is {\\\" serverless + temporary file''}<br>A: it uses S3 for storage that is not a temporary file storage system<br>C: that was good using ECS with farget for serverless part but is uses EFS filesystem still it is a durable file system not temporary<br>D: Using EBS was good to use for temporary file system but it is mounted on EC2 which is not serverless. so that we are left with ''B'' which uses [ lambda(serverless) + EBS(temporary storage)]",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#761",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to use its on-premises LDAP directory service to authenticate its users to the AWS Management Console. The directory service is not compatible with Security Assertion Markup Language (SAML).<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#761",
          "answers": [
            {
              "choice": "<p>Enable AWS IAM Identity Center (AWS Single Sign-On) between AWS and the on-premises LDAP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM policy that uses AWS credentials, and integrate the policy into LDAP.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a process that rotates the IAM credentials whenever LDAP credentials are updated.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Develop an on-premises custom identity broker application or process that uses AWS Security Token Service (AWS STS) to get short-lived credentials.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 761 discussion",
      "discusstion": [
        {
          "id": 1143867,
          "date": "Wed 07 Feb 2024 23:26",
          "username": "kempes",
          "content": "The solution that best meets the requirements. This approach provides a pathway for authenticating LDAP users to AWS without requiring direct LDAP to AWS IAM Identity Center integration or SAML compatibility, offering a flexible and secure method to extend on-premises authentication mechanisms to AWS services.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why not option A A. Enable AWS IAM Identity Center (AWS Single Sign-On) between AWS and the on-premises LDAP.</li><li>(A) is incorrect bc to use AWS IAM Identity Center (AWS Single Sign-On) with an external IdP, you need SAML.</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1211142,
          "date": "Tue 14 May 2024 02:00",
          "username": "aditianand",
          "content": "Why not option A A. Enable AWS IAM Identity Center (AWS Single Sign-On) between AWS and the on-premises LDAP.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>(A) is incorrect bc to use AWS IAM Identity Center (AWS Single Sign-On) with an external IdP, you need SAML.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1231126,
          "date": "Sat 15 Jun 2024 22:48",
          "username": "NSA_Poker",
          "content": "(A) is incorrect bc to use AWS IAM Identity Center (AWS Single Sign-On) with an external IdP, you need SAML.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1331046,
          "date": "Tue 24 Dec 2024 08:01",
          "username": "LeonSauveterre",
          "content": "A - AWS IAM Identity Center (formerly AWS SSO) allows integration with SAML-compatible identity providers, which won't work with on-premises LDAP directory (not SAML-compatible).<br>B - There's no way to \\\"integrate\\\" an IAM policy into LDAP.<br>C - Too complex. AWS already provides better mechanisms for handling temporary credentials - AWS STS.<br>D - YES. Actually, this approach is commonly used when SAML is not an option.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1235463,
          "date": "Sat 22 Jun 2024 17:13",
          "username": "Scheldon",
          "content": "AnswerD",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1231491,
          "date": "Sun 16 Jun 2024 20:17",
          "username": "ike001",
          "content": "D is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1231127,
          "date": "Sat 15 Jun 2024 23:01",
          "username": "NSA_Poker",
          "content": "Identity federation can be accomplished in one of three ways.<br>(1) Use a corporate IdP (such as Microsoft Active Directory) or a custom identity broker application. Each option uses AWS STS.<br>(2) Create an integration that uses Security Assertion Markup Language (SAML).<br>(3) Use a web identity provider, such as Amazon Cognito.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>YEA SURE FED</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1262176,
          "date": "Wed 07 Aug 2024 19:17",
          "username": "1e22522",
          "content": "YEA SURE FED",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1213333,
          "date": "Sat 18 May 2024 15:37",
          "username": "TwinSpark",
          "content": "option D<br>As per described here:<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_federated-users.html#id_roles_common-scenarios_federated-users-idbroker<br>option A is wrong becouse for use SSO need to be compatible with SAML (at least this is what i understand from here:<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_federated-users.html#id_roles_common-scenarios_federated-users-saml20 )",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1156037,
          "date": "Thu 22 Feb 2024 03:39",
          "username": "Naveena_Devanga",
          "content": "Option D<br>A custom identity broker application can be built to perform a similar function to an identity store that is not compatible with SAML 2.0. The broker application authenticates users, requests temporary credentials from AWS, and provides them to the user to access AWS resources.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why not option A A. Enable AWS IAM Identity Center (AWS Single Sign-On) between AWS and the on-premises LDAP.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1211143,
          "date": "Tue 14 May 2024 02:00",
          "username": "aditianand",
          "content": "Why not option A A. Enable AWS IAM Identity Center (AWS Single Sign-On) between AWS and the on-premises LDAP.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1152296,
          "date": "Sat 17 Feb 2024 01:22",
          "username": "jaswantn",
          "content": "If your identity store is not compatible with SAML 2.0, then you can build a custom identity broker application to perform a similar function. .....option D",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#762",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores multiple Amazon Machine Images (AMIs) in an AWS account to launch its Amazon EC2 instances. The AMIs contain critical data and configurations that are necessary for the company's operations. The company wants to implement a solution that will recover accidentally deleted AMIs quickly and efficiently.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#762",
          "answers": [
            {
              "choice": "<p>Create Amazon Elastic Block Store (Amazon EBS) snapshots of the AMIs. Store the snapshots in a separate AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Copy all AMIs to another AWS account periodically.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a retention rule in Recycle Bin.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Upload the AMIs to an Amazon S3 bucket that has Cross-Region Replication.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 762 discussion",
      "discusstion": [
        {
          "id": 1180304,
          "date": "Sun 22 Sep 2024 20:38",
          "username": "alawada",
          "content": "Recycle Bin is a data recovery feature that enables you to restore accidentally deleted Amazon EBS snapshots and EBS-backed AMIs. When using Recycle Bin, if your resources are deleted, they are retained in the Recycle Bin for a time period that you specify before being permanently deleted. You can restore a resource from the Recycle Bin at any time before its retention period expires. This solution has the least operational overhead, as you do not need to create, copy, or upload any additional resources. You can also manage tags and permissions for AMIs in the Recycle Bin. AMIs in the Recycle Bin do not incur any additional charges.Reference:",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1180839,
          "date": "Mon 23 Sep 2024 12:07",
          "username": "[Removed]",
          "content": "Option C<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1166044,
          "date": "Wed 04 Sep 2024 22:04",
          "username": "asdfcdsxdfc",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1156041,
          "date": "Thu 22 Aug 2024 02:44",
          "username": "Naveena_Devanga",
          "content": "Option C<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1151732,
          "date": "Fri 16 Aug 2024 03:51",
          "username": "Freddie26",
          "content": "Option C is correct. Recycling bin is a new feature to protect snaps and AMIs from accidental or malicious deleting. Inside the recycling bin, set a retention policy, and then your images or snapshots are protected.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1143538,
          "date": "Wed 07 Aug 2024 16:55",
          "username": "mestule",
          "content": "https://aws.amazon.com/about-aws/whats-new/2022/02/amazon-ec2-recycle-bin-machine-images/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1141474,
          "date": "Mon 05 Aug 2024 20:59",
          "username": "Andy_09",
          "content": "Option C",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#763",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has 150 TB of archived image data stored on-premises that needs to be moved to the AWS Cloud within the next month. The company's current network connection allows up to 100 Mbps uploads for this purpose during the night only.<br><br>What is the MOST cost-effective mechanism to move this data and meet the migration deadline?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#763",
          "answers": [
            {
              "choice": "<p>Use AWS Snowmobile to ship the data to AWS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Order multiple AWS Snowball devices to ship the data to AWS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enable Amazon S3 Transfer Acceleration and securely upload the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 VPC endpoint and establish a VPN to upload the data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 763 discussion",
      "discusstion": [
        {
          "id": 1141478,
          "date": "Mon 05 Feb 2024 22:02",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 1235468,
          "date": "Sat 22 Jun 2024 17:19",
          "username": "Scheldon",
          "content": "AnwerB<br><br>SnowBall Storage will give us 80TB. To transfer data we will need 2 devices. Taking into consideration that 1 device~300$ we will spend 600$. Option B is most Cost effective and will allow us to end operation in lest then month.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1202626,
          "date": "Fri 26 Apr 2024 15:35",
          "username": "sandordini",
          "content": "Snowball base free from 200USD, Snowmobile base fee from 4100USD (According to AWS)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Snowmobile advised above 10 Petabytes<br>Snowball(s) below 10 PB</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1202630,
          "date": "Fri 26 Apr 2024 15:37",
          "username": "sandordini",
          "content": "Snowmobile advised above 10 Petabytes<br>Snowball(s) below 10 PB",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1182948,
          "date": "Tue 26 Mar 2024 03:46",
          "username": "TruthWS",
          "content": "Option B - Snowmobile have higher cost",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1182029,
          "date": "Mon 25 Mar 2024 00:16",
          "username": "Mikado211",
          "content": "Amazon S3 Transfer Acceleration must be very expensive<br>Correct in such case : B Snowball",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1166047,
          "date": "Mon 04 Mar 2024 23:05",
          "username": "asdfcdsxdfc",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1156570,
          "date": "Thu 22 Feb 2024 18:11",
          "username": "iczcezar",
          "content": "Option B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1156043,
          "date": "Thu 22 Feb 2024 03:46",
          "username": "Naveena_Devanga",
          "content": "Option B:<br>1 Snow Ball Max Allowed capacity is 80 TB. Hence, you need to order multiple snowballs to achieve the requirement.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1154618,
          "date": "Tue 20 Feb 2024 11:05",
          "username": "stephensimudemy",
          "content": "B. Its only 150TB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#764",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its three-tier application from on premises to AWS. The web tier and the application tier are running on third-party virtual machines (VMs). The database tier is running on MySQL.<br><br>The company needs to migrate the application by making the fewest possible changes to the architecture. The company also needs a database solution that can restore data to a specific point in time.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#764",
          "answers": [
            {
              "choice": "<p>Migrate the web tier and the application tier to Amazon EC2 instances in private subnets. Migrate the database tier to Amazon RDS for MySQL in private subnets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the web tier to Amazon EC2 instances in public subnets. Migrate the application tier to EC2 instances in private subnets. Migrate the database tier to Amazon Aurora MySQL in private subnets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the web tier to Amazon EC2 instances in public subnets. Migrate the application tier to EC2 instances in private subnets. Migrate the database tier to Amazon RDS for MySQL in private subnets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the web tier and the application tier to Amazon EC2 instances in public subnets. Migrate the database tier to Amazon Aurora MySQL in public subnets.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 764 discussion",
      "discusstion": [
        {
          "id": 1153113,
          "date": "Sun 18 Feb 2024 09:21",
          "username": "haci",
          "content": "I'm between B and C. Since RDS requires an additional configuration for PTR, it adds an operational overhead. So I will go with B.<br><br>Aurora provides automated backup and point-in-time recovery, simplifying backup management and data protection. Continuous incremental backups are taken automatically and stored in Amazon S3, and data retention periods can be specified to meet compliance requirements.<br><br>RDS provides the same but first, the users should set a retention period for these backups, allowing historical data recovery in case of accidental data loss or corruption, and point-in-time recovery (PITR) allows users to restore the database to any specific moment within the set retention period.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1291128,
          "date": "Sun 29 Sep 2024 13:14",
          "username": "Bwhizzy",
          "content": "Answer is B. please see below article<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-pitr.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1290466,
          "date": "Sat 28 Sep 2024 03:50",
          "username": "kbgsgsgs",
          "content": "Auroralo maigeuleisyeonhalyeomyeon MySQLboda akitegcheo byeongyeong-i deo pil-yohal su issseubnida. ganeunghamyeon choesohan-ui byeongyeong-eul yocheong<br>67 / 5,000<br>Migrating to Aurora may require more architectural changes than MySQL. Request minimal changes if possible.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1235477,
          "date": "Sat 22 Jun 2024 17:32",
          "username": "Scheldon",
          "content": "AnswerB<br><br>The problem with this question is that we do not have enough information. We can execute task with both AURORA or RDS DB. I will go with AURORA as it is Amazon Proprietary and is developed by AWS teams, hence we do not need to think about updates etc. as it is done by AWS teams.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1173061,
          "date": "Thu 14 Mar 2024 04:25",
          "username": "MattBJ",
          "content": "B is the correct option.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1165650,
          "date": "Mon 04 Mar 2024 15:19",
          "username": "shahreh1",
          "content": "B: Amazon Aurora is a fully managed relational database engine that's compatible with both MySQL and PostgreSQL",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1155782,
          "date": "Wed 21 Feb 2024 19:30",
          "username": "DEN_ZZ",
          "content": "PTR, it's Aurora",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1154627,
          "date": "Tue 20 Feb 2024 11:17",
          "username": "stephensimudemy",
          "content": "It's C. Strictly speaking, there is no AWS DB call Amazon Aurora \\\"MySQL\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.AuroraMySQL.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1155397,
          "date": "Wed 21 Feb 2024 10:43",
          "username": "ogerber",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.AuroraMySQL.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1144831,
          "date": "Thu 08 Feb 2024 20:00",
          "username": "hajra313",
          "content": "C. This option aligns with the requirements by keeping the web tier in public subnets, migrating the application tier to EC2 instances in private subnets to enhance security, and using Amazon RDS for MySQL in private subnets to meet the database requirements with minimal operational overhead. option A:While migrating the web tier and application tier to EC2 instances in private subnets minimizes exposure to the internet. option B:. Migrating the database tier to Amazon Aurora MySQL introduces changes to the database engine, which might require additional testing and adjustments to the application. Additionally, Aurora MySQL does not directly support point-in-time recovery; instead, it uses continuous backups and snapshots for data recovery.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1142408,
          "date": "Tue 06 Feb 2024 18:30",
          "username": "Andy_09",
          "content": "Option A works better",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141481,
          "date": "Mon 05 Feb 2024 22:03",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#765",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A development team is collaborating with another company to create an integrated product. The other company needs to access an Amazon Simple Queue Service (Amazon SQS) queue that is contained in the development team's account. The other company wants to poll the queue without giving up its own account permissions to do so.<br><br>How should a solutions architect provide access to the SQS queue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#765",
          "answers": [
            {
              "choice": "<p>Create an instance profile that provides the other company access to the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM policy that provides the other company access to the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an SQS access policy that provides the other company access to the SQS queue.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) access policy that provides the other company access to the SQS queue.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 765 discussion",
      "discusstion": [
        {
          "id": 1156563,
          "date": "Thu 22 Feb 2024 18:06",
          "username": "iczcezar",
          "content": "The correct option to provide access to the SQS queue without giving up the other company's account permissions is:<br><br>C. Create an SQS access policy that provides the other company access to the SQS queue.<br><br>By creating an SQS access policy, you can define specific permissions for the other company to access the SQS queue without requiring them to modify their own account permissions. This allows for fine-grained control over access to the queue while maintaining security and isolation between accounts. Options A, B, and D are not appropriate for granting access to the SQS queue in this scenario.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1212578,
          "date": "Thu 16 May 2024 22:14",
          "username": "7fb06b3",
          "content": "Amazon SQS policy system lets you grant permission to other Amazon Accounts.<br>https://docs.amazonaws.cn/en_us/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-using-identity-based-policies.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1331047,
          "date": "Tue 24 Dec 2024 08:12",
          "username": "LeonSauveterre",
          "content": "A - Instance profiles are attached to Amazon EC2 instances. This is irrelevant.<br>B - While you could create an IAM role in your account for the other company to assume, it is explicitly stated that the other company does not want to give up its own permissions, meaning cross-account access must be configured, but IAM policies alone do not provide cross-account access.<br>C - SQS supports resource-based policies, which allow you to grant access to specific AWS principals (users, roles, or accounts) across accounts.<br>D - No idea what it would achieve. SNS policies don't even apply to SQS queues.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1235478,
          "date": "Sat 22 Jun 2024 17:35",
          "username": "Scheldon",
          "content": "AnswerC<br><br>Creating Access policy in SQS which will allow other company to acess SQS queue seems to be the only solution which is RIGHT here",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1202639,
          "date": "Fri 26 Apr 2024 15:49",
          "username": "sandordini",
          "content": "SQS Access Policy for secure, fine-grained Cross-account access",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1153771,
          "date": "Mon 19 Feb 2024 09:09",
          "username": "NayeraB",
          "content": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-overview-of-managing-access.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1144826,
          "date": "Thu 08 Feb 2024 19:52",
          "username": "hajra313",
          "content": "option A: Instance profiles are used to grant permissions to EC2 instances, not for granting access to other AWS services like SQS queues. Option B.:AM policies are applied to IAM users, groups, or roles within the same AWS account. They are not directly applicable to granting access to resources in other AWS accounts. option C:SQS access policies allow you to grant cross-account access to SQS resources. You can specify the necessary permissions in the policy and attach it directly to the SQS queue. This way, you can give the other company's AWS account the necessary permissions to poll the queue without compromising their account permissions. option D. Amazon SNS access policies are used to manage access to SNS topics, not SQS queues",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1143879,
          "date": "Wed 07 Feb 2024 23:50",
          "username": "kempes",
          "content": "Option C",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1141485,
          "date": "Mon 05 Feb 2024 22:05",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#766",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's developers want a secure way to gain SSH access on the company's Amazon EC2 instances that run the latest version of Amazon Linux. The developers work remotely and in the corporate office.<br><br>The company wants to use AWS services as a part of the solution. The EC2 instances are hosted in a VPC private subnet and access the internet through a NAT gateway that is deployed in a public subnet.<br><br>What should a solutions architect do to meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#766",
          "answers": [
            {
              "choice": "<p>Create a bastion host in the same subnet as the EC2 instances. Grant the ec2:CreateVpnConnection IAM permission to the developers. Install EC2 Instance Connect so that the developers can connect to the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Site-to-Site VPN connection between the corporate network and the VPC. Instruct the developers to use the Site-to-Site VPN connection to access the EC2 instances when the developers are on the corporate network. Instruct the developers to set up another VPN connection for access when they work remotely.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a bastion host in the public subnet of the VPConfigure the security groups and SSH keys of the bastion host to only allow connections and SSH authentication from the developers' corporate and remote networks. Instruct the developers to connect through the bastion host by using SSH to reach the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Attach the AmazonSSMManagedInstanceCore IAM policy to an IAM role that is associated with the EC2 instances. Instruct the developers to use AWS Systems Manager Session Manager to access the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 766 discussion",
      "discusstion": [
        {
          "id": 1141487,
          "date": "Mon 05 Aug 2024 21:06",
          "username": "Andy_09",
          "content": "Option D",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1180316,
          "date": "Sun 22 Sep 2024 20:52",
          "username": "alawada",
          "content": "AWS Systems Manager Session Manager is a service that enables you to securely connect to your EC2 instances without using SSH keys or bastion hosts. You can use Session Manager to access your instances through the AWS Management Console, the AWS CLI, or the AWS SDKs. Session Manager uses IAM policies and roles to control who can access which instances. By attaching the AmazonSSMManagedlnstanceCore IAM policy to an IAM role that is associated with the EC2 instances, you grant the Session Manager service the necessary permissions to perform actions on your instances. You also need to attach another IAM policy to the developers' IAM users or roles that allows them to start sessions to the instances.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1331049,
          "date": "Tue 24 Dec 2024 08:19",
          "username": "LeonSauveterre",
          "content": "A - Bastion hosts are typically placed in public subnets (not private subnets). Also, see option C below.<br>B - Would work, but this is too complex and too expensive.<br>C - An additional EC2 instance (bastion host)instance running costs + endless maintenance.<br>D - God yes. No need to manage SSH keys, and access is encrypted by default.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1182950,
          "date": "Thu 26 Sep 2024 02:48",
          "username": "TruthWS",
          "content": "Option D",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1182023,
          "date": "Tue 24 Sep 2024 23:07",
          "username": "Mikado211",
          "content": "SSM is always the recommended way of connection for EC2 \\\"using ssh\\\".<br>It's the most cost effective and the most secure way of doing the job.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1156559,
          "date": "Thu 22 Aug 2024 17:02",
          "username": "iczcezar",
          "content": "Why not C?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>it doesn`t meet requirements MOST cost-effectively</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1176874,
          "date": "Wed 18 Sep 2024 23:07",
          "username": "pila21",
          "content": "it doesn`t meet requirements MOST cost-effectively",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1143888,
          "date": "Wed 07 Aug 2024 22:56",
          "username": "kempes",
          "content": "Option D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#767",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A pharmaceutical company is developing a new drug. The volume of data that the company generates has grown exponentially over the past few months. The company's researchers regularly require a subset of the entire dataset to be immediately available with minimal lag. However, the entire dataset does not need to be accessed on a daily basis. All the data currently resides in on-premises storage arrays, and the company wants to reduce ongoing capital expenses.<br><br>Which storage solution should a solutions architect recommend to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#767",
          "answers": [
            {
              "choice": "<p>Run AWS DataSync as a scheduled cron job to migrate the data to an Amazon S3 bucket on an ongoing basis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an AWS Storage Gateway file gateway with an Amazon S3 bucket as the target storage. Migrate the data to the Storage Gateway appliance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an AWS Storage Gateway volume gateway with cached volumes with an Amazon S3 bucket as the target storage. Migrate the data to the Storage Gateway appliance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS Site-to-Site VPN connection from the on-premises environment to AWS. Migrate data to an Amazon Elastic File System (Amazon EFS) file system.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 767 discussion",
      "discusstion": [
        {
          "id": 1141809,
          "date": "Tue 06 Feb 2024 06:50",
          "username": "Andy_09",
          "content": "Option C",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 1144817,
          "date": "Thu 08 Feb 2024 19:43",
          "username": "hajra313",
          "content": "B. Deploying an AWS Storage Gateway file gateway with an Amazon S3 bucket as the target storage would require the entire dataset to be stored in Amazon S3, which might not be cost-effective considering that only a subset of the data needs to be accessed regularly. Additionally, accessing data directly from S3 might introduce latency. so correct option is CbczAWS Storage Gateway volume gateway with cached volumes allows the company to keep frequently accessed data locally on-premises while storing the entire dataset in Amazon S3. This solution provides immediate access to the subset of data with minimal lag, as frequently accessed data is cached locally. It also reduces ongoing capital expenses as it leverages Amazon S3 storage, which is cost-effective.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Both B and C store the entire data set in Amazon S3 and the AWS Storage Gateway file gateway also supports local caching. I do not know if it is B or C for me.</li></ul>",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1242482,
          "date": "Fri 05 Jul 2024 06:50",
          "username": "capepenguin",
          "content": "Both B and C store the entire data set in Amazon S3 and the AWS Storage Gateway file gateway also supports local caching. I do not know if it is B or C for me.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1236393,
          "date": "Mon 24 Jun 2024 16:40",
          "username": "Scheldon",
          "content": "AnswerC<br><br>Deploying an AWS Storage Gateway volume gateway with cached volumes will allow to store all data in AWS but the most frequently accessed data will be stored/cached localy (on-premises)low latency for most used data while all data will be stored in the cloud.<br><br>https://docs.aws.amazon.com/storagegateway/latest/vgw/StorageGatewayConcepts.html#storage-gateway-cached-concepts",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1200048,
          "date": "Mon 22 Apr 2024 10:36",
          "username": "BatVanyo",
          "content": "A storage guy here.. the question is not clear enough to give a definitive answer between B and C, as both can do the job.<br>An \\\"on-prem storage array\\\" can be any of the three:<br>- File array (serving any file protocol, e.g. NFS/SMB) -> requiring a file gateway (supports caching of the most recently used data)<br>- Block array (iSCSI/Fibre Channel) -> requiring a volume gateway (supports cached volumes most recently used data)<br>- Combo (providing both File and Block protocols)<br><br>Something is clearly missing in the question in order to give a definitive answer between B and C.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1189524,
          "date": "Thu 04 Apr 2024 22:10",
          "username": "mohammadthainat",
          "content": "storage arraysVolume Gateway",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1173761,
          "date": "Thu 14 Mar 2024 22:34",
          "username": "lenotc",
          "content": "storage array, also known as a disk array so AWS Storage Gateway volume.<br>its a trap",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1173095,
          "date": "Thu 14 Mar 2024 05:23",
          "username": "MattBJ",
          "content": "C is correct. Using AWS Storage Gatewayvolume gateway with cached volumes provide local access to the file.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1159736,
          "date": "Mon 26 Feb 2024 14:00",
          "username": "ninasgx",
          "content": "require a subset of the entire dataset > cached volumes",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1158042,
          "date": "Sat 24 Feb 2024 17:40",
          "username": "osmk",
          "content": "The company's researchers regularly require a subset of the entire dataset to be immediately available with minimal laghttps://docs.aws.amazon.com/storagegateway/latest/vgw/WhatIsStorageGateway.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#768",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a business-critical application that runs on Amazon EC2 instances. The application stores data in an Amazon DynamoDB table. The company must be able to revert the table to any point within the last 24 hours.<br><br>Which solution meets these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#768",
          "answers": [
            {
              "choice": "<p>Configure point-in-time recovery for the table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Backup for the table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Lambda function to make an on-demand backup of the table every hour.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Turn on streams on the table to capture a log of all changes to the table in the last 24 hours. Store a copy of the stream in an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 768 discussion",
      "discusstion": [
        {
          "id": 1141490,
          "date": "Mon 05 Feb 2024 22:11",
          "username": "Andy_09",
          "content": "Option A",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 1173096,
          "date": "Thu 14 Mar 2024 05:25",
          "username": "MattBJ",
          "content": "A is correct. One of the highlight features of DynamoDB.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1236395,
          "date": "Mon 24 Jun 2024 16:44",
          "username": "Scheldon",
          "content": "AnswerA<br>Point-in-time recovery helps protect your DynamoDB tables from accidental write or delete operations. With point-in-time recovery, you don't have to worry about creating, maintaining, or scheduling on-demand backups. For example, suppose that a test script writes accidentally to a production DynamoDB table. With point-in-time recovery, you can restore that table to any point in time during the last 35 days. After you enable point-in-time recovery, you can restore to any point in time from five minutes before the current time until 35 days ago. DynamoDB maintains incremental backups of your table.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1168532,
          "date": "Fri 08 Mar 2024 04:40",
          "username": "1dd",
          "content": "option A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1166064,
          "date": "Mon 04 Mar 2024 23:29",
          "username": "asdfcdsxdfc",
          "content": "A looks correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1158019,
          "date": "Sat 24 Feb 2024 16:42",
          "username": "_mavik_",
          "content": "Option A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#769",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an application used to upload files to an Amazon S3 bucket. Once uploaded, the files are processed to extract metadata, which takes less than 5 seconds. The volume and frequency of the uploads varies from a few files each hour to hundreds of concurrent uploads. The company has asked a solutions architect to design a cost-effective architecture that will meet these requirements.<br><br>What should the solutions architect recommend?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#769",
          "answers": [
            {
              "choice": "<p>Configure AWS CloudTrail trails to log S3 API calls. Use AWS AppSync to process the files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an object-created event notification within the S3 bucket to invoke an AWS Lambda function to process the files.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Kinesis Data Streams to process and send data to Amazon S3. Invoke an AWS Lambda function to process the files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon Simple Notification Service (Amazon SNS) topic to process the files uploaded to Amazon S3. Invoke an AWS Lambda function to process the files.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 769 discussion",
      "discusstion": [
        {
          "id": 1144811,
          "date": "Thu 08 Feb 2024 19:35",
          "username": "hajra313",
          "content": "option b bcz option c is WS AppSync is not the most appropriate solution for file processing.<br>option d While Amazon Simple Notification Service (SNS) can be used to trigger actions based on S3 events, it's not directly involved in processing files .option c :Kinesis is typically used for real-time data streaming and analytics, which may not be needed for simple file processing tasks such as extracting metadata.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1143566,
          "date": "Wed 07 Feb 2024 18:16",
          "username": "mestule",
          "content": "B seems to be make most sense to me.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1239311,
          "date": "Sat 29 Jun 2024 15:59",
          "username": "Lin878",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1236397,
          "date": "Mon 24 Jun 2024 16:47",
          "username": "Scheldon",
          "content": "AnswerB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1180325,
          "date": "Fri 22 Mar 2024 22:01",
          "username": "alawada",
          "content": "The problem with C is how it sends the data to S3, if it was Firehose it would make sense. I waka for B.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1173100,
          "date": "Thu 14 Mar 2024 05:27",
          "username": "MattBJ",
          "content": "B is correct. The most cost effective option.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1152321,
          "date": "Sat 17 Feb 2024 02:34",
          "username": "jaswantn",
          "content": "option B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1143893,
          "date": "Thu 08 Feb 2024 00:08",
          "username": "kempes",
          "content": "Option D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141814,
          "date": "Tue 06 Feb 2024 06:57",
          "username": "Andy_09",
          "content": "Option D",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#770",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's application is deployed on Amazon EC2 instances and uses AWS Lambda functions for an event-driven architecture. The company uses nonproduction development environments in a different AWS account to test new features before the company deploys the features to production.<br><br>The production instances show constant usage because of customers in different time zones. The company uses nonproduction instances only during business hours on weekdays. The company does not use the nonproduction instances on the weekends. The company wants to optimize the costs to run its application on AWS.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#770",
          "answers": [
            {
              "choice": "<p>Use On-Demand Instances for the production instances. Use Dedicated Hosts for the nonproduction instances on weekends only.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Reserved Instances for the production instances and the nonproduction instances. Shut down the nonproduction instances when not in use.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Compute Savings Plans for the production instances. Use On-Demand Instances for the nonproduction instances. Shut down the nonproduction instances when not in use.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Dedicated Hosts for the production instances. Use EC2 Instance Savings Plans for the nonproduction instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 770 discussion",
      "discusstion": [
        {
          "id": 1141819,
          "date": "Tue 06 Feb 2024 07:03",
          "username": "Andy_09",
          "content": "Option C",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 1173104,
          "date": "Thu 14 Mar 2024 05:34",
          "username": "MattBJ",
          "content": "Definitely C.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1331701,
          "date": "Wed 25 Dec 2024 21:27",
          "username": "Penjerla",
          "content": "A Reserved Instance is preferred if you use the reserve capacity for the full duration of the one- or three-year term. You may also find that a Reserved Instance offers cost savings over On-Demand Instances, even if you are only using the instance at half capacity. Reserved Instances also offer guaranteed availability for stop-and-start scenarios. In addition, by utilizing and continuously monitoring Convertible Reserved Instances, you can save more money.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1286069,
          "date": "Thu 19 Sep 2024 02:20",
          "username": "MatAlves",
          "content": "\\\"An Amazon EC2 Dedicated Host is a physical server fully dedicated for your use, so you can help address corporate compliance requirements.\\\"<br><br>https://aws.amazon.com/ec2/dedicated-hosts/<br><br>That already eliminates \\\"A\\\" and \\\"D\\\". No need to pay extra since there is no requirement for eligible software licences.<br><br>B is INCORRECTno need to use reserved instances for non-prod, since they will only be active during business hours during weekdays.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1236405,
          "date": "Mon 24 Jun 2024 16:55",
          "username": "Scheldon",
          "content": "AnswerC<br><br>We need to use somekind of savings plans for production and disable Development servers when we are not using them. Only Option C has both.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1156248,
          "date": "Thu 22 Feb 2024 09:46",
          "username": "Naveena_Devanga",
          "content": "Option C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1154642,
          "date": "Tue 20 Feb 2024 11:41",
          "username": "stephensimudemy",
          "content": "It's C",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#771",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores data in an on-premises Oracle relational database. The company needs to make the data available in Amazon Aurora PostgreSQL for analysis. The company uses an AWS Site-to-Site VPN connection to connect its on-premises network to AWS.<br><br>The company must capture the changes that occur to the source database during the migration to Aurora PostgreSQL.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#771",
          "answers": [
            {
              "choice": "<p>Use the AWS Schema Conversion Tool (AWS SCT) to convert the Oracle schema to Aurora PostgreSQL schema. Use the AWS Database Migration Service (AWS DMS) full-load migration task to migrate the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS DataSync to migrate the data to an Amazon S3 bucket. Import the S3 data to Aurora PostgreSQL by using the Aurora PostgreSQL aws_s3 extension.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Schema Conversion Tool (AWS SCT) to convert the Oracle schema to Aurora PostgreSQL schema. Use AWS Database Migration Service (AWS DMS) to migrate the existing data and replicate the ongoing changes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Snowball device to migrate the data to an Amazon S3 bucket. Import the S3 data to Aurora PostgreSQL by using the Aurora PostgreSQL aws_s3 extension.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 771 discussion",
      "discusstion": [
        {
          "id": 1143724,
          "date": "Wed 07 Feb 2024 20:19",
          "username": "kempes",
          "content": "Option C",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1141820,
          "date": "Tue 06 Feb 2024 07:04",
          "username": "Andy_09",
          "content": "Option C",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1305673,
          "date": "Fri 01 Nov 2024 07:20",
          "username": "striker89",
          "content": "migrate the existing data and replicate the ongoing changes.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1235297,
          "date": "Sat 22 Jun 2024 11:37",
          "username": "Scheldon",
          "content": "Answer C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1173107,
          "date": "Thu 14 Mar 2024 05:36",
          "username": "MattBJ",
          "content": "C is correct. As we need to capture the change during the migration.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#772",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company built an application with Docker containers and needs to run the application in the AWS Cloud. The company wants to use a managed service to host the application.<br><br>The solution must scale in and out appropriately according to demand on the individual container services. The solution also must not result in additional operational overhead or infrastructure to manage.<br><br>Which solutions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#772",
          "answers": [
            {
              "choice": "<p>Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an Amazon API Gateway API. Connect the API to AWS Lambda to run the containers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 worker nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 worker nodes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 772 discussion",
      "discusstion": [
        {
          "id": 1177479,
          "date": "Tue 19 Mar 2024 16:14",
          "username": "xBUGx",
          "content": "I don't want confuse other...<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>AWS Lambda can run Docker containers, but it is more suited for short-duration, event-driven functions rather than long-running services.<br>While you can use Lambda to run container images, it is typically used for microservices or functions rather than managing scalable containerized applications in the same way that ECS or EKS does.</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1299116,
          "date": "Thu 17 Oct 2024 10:19",
          "username": "JohnYu",
          "content": "AWS Lambda can run Docker containers, but it is more suited for short-duration, event-driven functions rather than long-running services.<br>While you can use Lambda to run container images, it is typically used for microservices or functions rather than managing scalable containerized applications in the same way that ECS or EKS does.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1331063,
          "date": "Tue 24 Dec 2024 10:20",
          "username": "LeonSauveterre",
          "content": "A or B is OK.<br>About C: Amazon API Gateway and AWS Lambda are not typically used for running Docker containers. Lambda is designed for serverless functions, and while you can use Lambda to invoke containerized tasks, it does not run containers directly.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1319815,
          "date": "Fri 29 Nov 2024 18:01",
          "username": "JA2018",
          "content": "AWS Fargate:<br>Both ECS and EKS with Fargate provide a fully managed container orchestration service where you don't need to manage underlying infrastructure like EC2 instances, making it ideal for scaling and reducing operational overhead.<br>Scaling capabilities:<br><br>Both options allow for automatic scaling based on demand, meaning the container instances will automatically scale up or down based on application requirements.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1305676,
          "date": "Fri 01 Nov 2024 07:34",
          "username": "striker89",
          "content": "API Gateway + Lamda are not designed for running Dockers containers directly",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1286088,
          "date": "Thu 19 Sep 2024 03:54",
          "username": "MatAlves",
          "content": "- ContainerECS or EKS<br>- \\\"managed service to host the application\\\"Fargate<br>- \\\"not result in additional operational overhead or infrastructure to manage\\\"ECS for the win.<br><br>The main difference between ECS and EKSsimplicity vs flexibility.<br><br>https://aws.amazon.com/blogs/containers/amazon-ecs-vs-amazon-eks-making-sense-of-aws-container-services/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>now, if instead of asking the \\\"best\\\" (combination) solution you want TWO SOLUTIONS, then I see value in A-B.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1286098,
          "date": "Thu 19 Sep 2024 04:29",
          "username": "MatAlves",
          "content": "now, if instead of asking the \\\"best\\\" (combination) solution you want TWO SOLUTIONS, then I see value in A-B.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1268445,
          "date": "Mon 19 Aug 2024 08:50",
          "username": "Abdullah2004",
          "content": "For sure<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why so many trolls recently...</li><li>Dear MatAlves before you describe my answer as trolls try to study and focus<br>I will explain to you that C is not correct<br>Lambda is for running code in response to events and does not natively support running Docker containers in the traditional sense of a containerized application. Lambda can use container image as deployment packages but this setup isn't ideal for managing and calling complex containerized applications<br>So it's A + B</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1286087,
          "date": "Thu 19 Sep 2024 03:52",
          "username": "MatAlves",
          "content": "Why so many trolls recently...<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Dear MatAlves before you describe my answer as trolls try to study and focus<br>I will explain to you that C is not correct<br>Lambda is for running code in response to events and does not natively support running Docker containers in the traditional sense of a containerized application. Lambda can use container image as deployment packages but this setup isn't ideal for managing and calling complex containerized applications<br>So it's A + B</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1303352,
          "date": "Sat 26 Oct 2024 19:19",
          "username": "Abdullah2004",
          "content": "Dear MatAlves before you describe my answer as trolls try to study and focus<br>I will explain to you that C is not correct<br>Lambda is for running code in response to events and does not natively support running Docker containers in the traditional sense of a containerized application. Lambda can use container image as deployment packages but this setup isn't ideal for managing and calling complex containerized applications<br>So it's A + B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1262184,
          "date": "Wed 07 Aug 2024 19:32",
          "username": "1e22522",
          "content": "glowies out reeeeeeeeeeeeeeee",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1239661,
          "date": "Sun 30 Jun 2024 15:38",
          "username": "Rhydian25",
          "content": "The question is asking for two alternatives to run Docker containers in a serverless service with minimal effort.<br><br>Option C will require a lot of effort to configure the Lambda and the API Gateway to run the Container correctly.<br><br>Instead, just use EKS o ECS with Fargate to execute the container image",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1230077,
          "date": "Thu 13 Jun 2024 21:55",
          "username": "victor78",
          "content": "It should be AB",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1229675,
          "date": "Thu 13 Jun 2024 09:12",
          "username": "sheilawu",
          "content": "It should be AB, Container :ECS , EKS<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, I decided to change my option since this question is asking \\\"Docker\\\"&amp;\\\"AWS\\\"<br>it is not asking local Kubernet, so AC should be the right answer.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1229676,
          "date": "Thu 13 Jun 2024 09:14",
          "username": "sheilawu",
          "content": "No, I decided to change my option since this question is asking \\\"Docker\\\"&\\\"AWS\\\"<br>it is not asking local Kubernet, so AC should be the right answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1194646,
          "date": "Sat 13 Apr 2024 06:33",
          "username": "jcck202020",
          "content": "AB are using AWS Fargate which IS considered a managed service,option C does not run containers, , DE you have to manage your own EC2 instances thus not consider managed",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1166637,
          "date": "Tue 05 Mar 2024 18:14",
          "username": "asdfcdsxdfc",
          "content": "Everyone is picking AB too..",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1165782,
          "date": "Mon 04 Mar 2024 17:09",
          "username": "agg42",
          "content": "Option AB",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1153736,
          "date": "Mon 19 Feb 2024 07:17",
          "username": "NayeraB",
          "content": "Are people picking A&B as alternate solutions? Is the question asking for alternates?? Am I missing something? Somebody explain please I'm super confused.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I believe so.Based on other questions, they would have asked \\\"which combination\\\"</li><li>The question states itself. Which Solutions....?</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1186454,
          "date": "Sun 31 Mar 2024 00:26",
          "username": "Drew3000",
          "content": "I believe so.Based on other questions, they would have asked \\\"which combination\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1158265,
          "date": "Sun 25 Feb 2024 02:32",
          "username": "Cali182",
          "content": "The question states itself. Which Solutions....?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1143732,
          "date": "Wed 07 Feb 2024 20:26",
          "username": "kempes",
          "content": "Option AB",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141828,
          "date": "Tue 06 Feb 2024 07:24",
          "username": "Andy_09",
          "content": "Option AB",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#773",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company is running a seasonal online sale. The company hosts its website on Amazon EC2 instances spanning multiple Availability Zones. The company wants its website to manage sudden traffic increases during the sale.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#773",
          "answers": [
            {
              "choice": "<p>Create an Auto Scaling group that is large enough to handle peak traffic load. Stop half of the Amazon EC2 instances. Configure the Auto Scaling group to use the stopped instances to scale out when traffic increases.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Auto Scaling group for the website. Set the minimum size of the Auto Scaling group so that it can handle high traffic volumes without the need to scale out.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon CloudFront and Amazon ElastiCache to cache dynamic content with an Auto Scaling group set as the origin. Configure the Auto Scaling group with the instances necessary to populate CloudFront and ElastiCache. Scale in after the cache is fully populated.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Auto Scaling group to scale out as traffic increases. Create a launch template to start new instances from a preconfigured Amazon Machine Image (AMI).<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 773 discussion",
      "discusstion": [
        {
          "id": 1141831,
          "date": "Tue 06 Feb 2024 07:25",
          "username": "Andy_09",
          "content": "Option D",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1224538,
          "date": "Wed 05 Jun 2024 07:37",
          "username": "[Removed]",
          "content": "The most cost-effective solution is:<br><br>D. Configure an Auto Scaling group to scale out as traffic increases. Create a launch template to start new instances from a preconfigured Amazon Machine Image (AMI).",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1319816,
          "date": "Fri 29 Nov 2024 18:05",
          "username": "JA2018",
          "content": "Reasons?<br><br>Cost-effective scaling: Allows the company to only pay for the EC2 instances needed during peak traffic periods, automatically scaling up when necessary and scaling down when traffic subsides, which is the most cost-efficient approach.<br><br>Launch template and AMI: Using a launch template with a preconfigured AMI simplifies the scaling process by ensuring new instances are quickly provisioned with the required configurations.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1224110,
          "date": "Tue 04 Jun 2024 14:03",
          "username": "viejito",
          "content": "En la respuesta C : Al usar servicios como Amazon CloudFront y Amazon ElastiCache para almacenar en cach=C3=A9 el contenido din=C3=A1mico, reduciendo la carga en las instancias de Amazon EC2 y mejorando la velocidad de entrega del contenido a los usuarios finales. Esto resulta en una soluci=C3=B3n m=C3=A1s rentable y eficiente en comparaci=C3=B3n con la respuesta D : simplemente escalar instancias de EC2 sin considerar medidas adicionales para optimizar el rendimiento y reducir los costos . Por lo que la opci=C3=B3n correcta es la C .",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1202994,
          "date": "Sat 27 Apr 2024 09:49",
          "username": "sandordini",
          "content": "Cloudfront coulld be a good idea, but it seems to be a simple scaling scenario.. IMO: D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Don't we need a launch template? How can it just launch from AMI image</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1220382,
          "date": "Tue 28 May 2024 17:22",
          "username": "aditianand",
          "content": "Don't we need a launch template? How can it just launch from AMI image",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1198848,
          "date": "Fri 19 Apr 2024 23:41",
          "username": "buzzinmumbai",
          "content": "Answer is D .C is not cost effective to use elasticache .Not sure if you can have ASG as the origin.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1198214,
          "date": "Fri 19 Apr 2024 00:35",
          "username": "geraltRebo",
          "content": "Sorry D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1198213,
          "date": "Fri 19 Apr 2024 00:34",
          "username": "geraltRebo",
          "content": "Option C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1182941,
          "date": "Tue 26 Mar 2024 03:43",
          "username": "TruthWS",
          "content": "Option D bring a most cost effective",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1182494,
          "date": "Mon 25 Mar 2024 14:25",
          "username": "JCAWS",
          "content": "C more suitable",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1154586,
          "date": "Tue 20 Feb 2024 10:06",
          "username": "stephensimudemy",
          "content": "It's D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#774",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect must provide an automated solution for a company's compliance policy that states security groups cannot include a rule that allows SSH from 0.0.0.0/0. The company needs to be notified if there is any breach in the policy. A solution is needed as soon as possible.<br><br>What should the solutions architect do to meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#774",
          "answers": [
            {
              "choice": "<p>Write an AWS Lambda script that monitors security groups for SSH being open to 0.0.0.0/0 addresses and creates a notification every time it finds one.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable the restricted-ssh AWS Config managed rule and generate an Amazon Simple Notification Service (Amazon SNS) notification when a noncompliant rule is created.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM role with permissions to globally open security groups and network ACLs. Create an Amazon Simple Notification Service (Amazon SNS) topic to generate a notification every time the role is assumed by a user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a service control policy (SCP) that prevents non-administrative users from creating or editing security groups. Create a notification in the ticketing system when a user requests a rule that needs administrator permissions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 774 discussion",
      "discusstion": [
        {
          "id": 1141835,
          "date": "Tue 06 Aug 2024 06:28",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1143748,
          "date": "Wed 07 Aug 2024 19:45",
          "username": "kempes",
          "content": "Option B",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1202997,
          "date": "Sun 27 Oct 2024 10:54",
          "username": "sandordini",
          "content": "The others sound 'silly'... to say the least",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1166640,
          "date": "Thu 05 Sep 2024 17:19",
          "username": "asdfcdsxdfc",
          "content": "B looks correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1156251,
          "date": "Thu 22 Aug 2024 08:55",
          "username": "Naveena_Devanga",
          "content": "Option B<br>https://docs.aws.amazon.com/config/latest/developerguide/restricted-ssh.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1144744,
          "date": "Thu 08 Aug 2024 17:14",
          "username": "hajra313",
          "content": "option b",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#775",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 worker nodes.<br><br>A company has deployed an application in an AWS account. The application consists of microservices that run on AWS Lambda and Amazon Elastic Kubernetes Service (Amazon EKS). A separate team supports each microservice. The company has multiple AWS accounts and wants to give each team its own account for its microservices.<br><br>A solutions architect needs to design a solution that will provide service-to-service communication over HTTPS (port 443). The solution also must provide a service registry for service discovery.<br><br>Which solution will meet these requirements with the LEAST administrative overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#775",
          "answers": [
            {
              "choice": "<p>Create an inspection VPC. Deploy an AWS Network Firewall firewall to the inspection VPC. Attach the inspection VPC to a new transit gateway. Route VPC-to-VPC traffic to the inspection VPC. Apply firewall rules to allow only HTTPS communication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a VPC Lattice service network. Associate the microservices with the service network. Define HTTPS listeners for each service. Register microservice compute resources as targets. Identify VPCs that need to communicate with the services. Associate those VPCs with the service network.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Network Load Balancer (NLB) with an HTTPS listener and target groups for each microservice. Create an AWS PrivateLink endpoint service for each microservice. Create an interface VPC endpoint in each VPC that needs to consume that microservice.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create peering connections between VPCs that contain microservices. Create a prefix list for each service that requires a connection to a client. Create route tables to route traffic to the appropriate VPC. Create security groups to allow only HTTPS communication.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 775 discussion",
      "discusstion": [
        {
          "id": 1168559,
          "date": "Sun 08 Sep 2024 05:09",
          "username": "1dd",
          "content": "VPC Lattice is a completely new way to simplify API communication between services or microservices in one or more AWS accounts.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1202529,
          "date": "Sat 26 Oct 2024 12:07",
          "username": "zinabu",
          "content": "Amazon VPC Lattice is a new capability of Amazon Virtual Private Cloud (Amazon VPC) designed to simplify networking for service-to-service communication.<br>link: https://www.bing.com/search?qwhat+VPC+Lattice+service+used+for+microservices&cvidd706d95737274f388660cbda9b7b2c4e&gs_lcrpEgZjaHJvbWUyBggAEEUYOTIICAEQ6QcY_FXSAQkyMTY1N2owajSoAgCwAgE&FORMANAB01&PCU531<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Did you complete the exam recently? Was examtopics useful?</li><li>Please keep in mind this is for helpful answers to THIS specific question.Please don't abuse it as a random info pitch for yourself.This is distracting and wasting others' time.Please respect other people's time.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1211153,
          "date": "Thu 14 Nov 2024 03:39",
          "username": "aditianand",
          "content": "Did you complete the exam recently? Was examtopics useful?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Please keep in mind this is for helpful answers to THIS specific question.Please don't abuse it as a random info pitch for yourself.This is distracting and wasting others' time.Please respect other people's time.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1213063,
          "date": "Mon 18 Nov 2024 00:51",
          "username": "phoenix2023",
          "content": "Please keep in mind this is for helpful answers to THIS specific question.Please don't abuse it as a random info pitch for yourself.This is distracting and wasting others' time.Please respect other people's time.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1154600,
          "date": "Tue 20 Aug 2024 09:22",
          "username": "stephensimudemy",
          "content": "IT's B. Google VPC Lattice service network",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1141844,
          "date": "Tue 06 Aug 2024 06:33",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#776",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a mobile game that reads most of its metadata from an Amazon RDS DB instance. As the game increased in popularity, developers noticed slowdowns related to the game's metadata load times. Performance metrics indicate that simply scaling the database will not help. A solutions architect must explore all options that include capabilities for snapshots, replication, and sub-millisecond response times.<br><br>What should the solutions architect recommend to solve these issues?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#776",
          "answers": [
            {
              "choice": "<p>Migrate the database to Amazon Aurora with Aurora Replicas.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to Amazon DynamoDB with global tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add an Amazon ElastiCache for Redis layer in front of the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add an Amazon ElastiCache for Memcached layer in front of the database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 776 discussion",
      "discusstion": [
        {
          "id": 1143024,
          "date": "Wed 07 Feb 2024 08:07",
          "username": "Andy_09",
          "content": "Option C is better as we need replication and snapshots<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Not sure if this is applicable to the stem. While Redis can be used as a cache, placing it in front of a relational database like RDS might not be enough to address the performance issues if the primary bottleneck is database access time.</li><li>C is correct as only Redis support snapshot feature :https://aws.amazon.com/elasticache/redis-vs-memcached/</li></ul>",
          "upvote_count": "20",
          "selected_answers": ""
        },
        {
          "id": 1319820,
          "date": "Fri 29 Nov 2024 18:14",
          "username": "JA2018",
          "content": "Not sure if this is applicable to the stem. While Redis can be used as a cache, placing it in front of a relational database like RDS might not be enough to address the performance issues if the primary bottleneck is database access time.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1159268,
          "date": "Mon 26 Feb 2024 01:29",
          "username": "arunkpskpm",
          "content": "C is correct as only Redis support snapshot feature :https://aws.amazon.com/elasticache/redis-vs-memcached/",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1331070,
          "date": "Tue 24 Dec 2024 10:43",
          "username": "LeonSauveterre",
          "content": "A - If the root cause is database-related (for example, read-heavy traffic), then OK. However, \\\"Performance metrics indicate that simply scaling the database will not help.\\\" means that maybe caching is a more effective option.<br>B - Migrating from a relational database to DynamoDB requires so much effort. Such a headache.<br>C - ElastiCache for Redis supports replication and snapshots, and of course, sub-millisecond response times.<br>D - Memcached lacks built-in persistence, which is why game applications rarely use it.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1330825,
          "date": "Mon 23 Dec 2024 14:42",
          "username": "tch",
          "content": "capabilities for snapshots, replication",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1319819,
          "date": "Fri 29 Nov 2024 18:13",
          "username": "JA2018",
          "content": "Why I choose B?<br><br># 1 High-performance, low latency: DynamoDB is a NoSQL database designed for fast, sub-millisecond response times, which is crucial for handling the high volume of metadata requests from a popular mobile game.<br><br># 2 Scalability: DynamoDB scales automatically to handle fluctuating traffic without the need to manually manage database instances, making it ideal for a rapidly growing game.<br><br># 3 Global tables: This feature allows for geographically distributed data access, ensuring quick response times for players across different regions.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1244259,
          "date": "Mon 08 Jul 2024 11:19",
          "username": "JunsK1e",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1217114,
          "date": "Fri 24 May 2024 01:52",
          "username": "f07ed8f",
          "content": "Thinking the capabilities with \\\"snapshots, replication, and sub-millisecond response times\\\" is for the Database or selected solution(ElastiCache).",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1166652,
          "date": "Tue 05 Mar 2024 18:36",
          "username": "asdfcdsxdfc",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1163172,
          "date": "Fri 01 Mar 2024 03:04",
          "username": "nbellaiche",
          "content": "R=C3=A9ponse C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1162536,
          "date": "Thu 29 Feb 2024 13:38",
          "username": "osmk",
          "content": ":https://aws.amazon.com/elasticache/redis-vs-memcached/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1141845,
          "date": "Tue 06 Feb 2024 07:36",
          "username": "Andy_09",
          "content": "Option D",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#777",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations for its multi-account AWS setup. The security organizational unit (OU) of the company needs to share approved Amazon Machine Images (AMIs) with the development OU. The AMIs are created by using AWS Key Management Service (AWS KMS) encrypted snapshots.<br><br>Which solution will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#777",
          "answers": [
            {
              "choice": "<p>Add the development team's OU Amazon Resource Name (ARN) to the launch permission list for the AMIs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add the Organizations root Amazon Resource Name (ARN) to the launch permission list for the AMIs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the key policy to allow the development team's OU to use the AWS KMS keys that are used to decrypt the snapshots.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add the development team's account Amazon Resource Name (ARN) to the launch permission list for the AMIs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Recreate the AWS KMS key. Add a key policy to allow the Organizations root Amazon Resource Name (ARN) to use the AWS KMS key.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 777 discussion",
      "discusstion": [
        {
          "id": 1143030,
          "date": "Wed 07 Feb 2024 08:12",
          "username": "Andy_09",
          "content": "Changing to options AC",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 1331072,
          "date": "Tue 24 Dec 2024 10:51",
          "username": "LeonSauveterre",
          "content": "A - The security OU is explicitly allowing the development OU to use the AMI.<br>B - OK but too broad, and not secure.<br>C - Now they can use the encrypted snapshots.<br>D - Would be too much trouble if there are many accounts. A is enough.<br>E - Recreate the AWS KMS key? Uhm, why?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1235445,
          "date": "Sat 22 Jun 2024 16:43",
          "username": "Scheldon",
          "content": "AnswerAC<br><br>Option A will allow to run/lunch AMIs<br>Option C will allow to decript AMIs which is necessery to run AMI.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1230871,
          "date": "Sat 15 Jun 2024 11:22",
          "username": "cjace",
          "content": "CD - Solution C: Update the Key Policy<br>Why: The AMIs are created using KMS-encrypted snapshots, so the KMS keys must allow the development team's accounts to use these keys for decrypting the snapshots.<br>How: Update the key policy of the KMS key to include permissions for the development OU or specific accounts within that OU. This will enable those accounts to use the KMS key for decrypting the snapshots associated with the AMIs.<br>Solution D: Add the Development Team's Account ARN to the Launch Permission List<br>Why: To share the AMIs with the development accounts, you need to grant launch permissions to those accounts. This allows the specified accounts to use the shared AMIs to launch instances.<br>How: Add the ARNs of the development team's accounts to the launch permission list of the AMIs. This can be done using the modify-image-attribute command in the AWS CLI, specifying the account IDs that should have launch permissions.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1182009,
          "date": "Sun 24 Mar 2024 23:37",
          "username": "Mikado211",
          "content": "A : give users the right to launch<br>C : give users the right to decrypt",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1158274,
          "date": "Sun 25 Feb 2024 02:53",
          "username": "osmk",
          "content": "c>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/share-amis-with-organizations-and-OUs.html#allow-org-ou-to-use-key<br><br>A-->https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/share-amis-with-organizations-and-OUs.html#share-amis-org-ou",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1141846,
          "date": "Tue 06 Feb 2024 07:37",
          "username": "Andy_09",
          "content": "Option CD",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#778",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A data analytics company has 80 offices that are distributed globally. Each office hosts 1 PB of data and has between 1 and 2 Gbps of internet bandwidth.<br><br>The company needs to perform a one-time migration of a large amount of data from its offices to Amazon S3. The company must complete the migration within 4 weeks.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#778",
          "answers": [
            {
              "choice": "<p>Establish a new 10 Gbps AWS Direct Connect connection to each office. Transfer the data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use multiple AWS Snowball Edge storage-optimized devices to store and transfer the data to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Snowmobile to store and transfer the data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an AWS Storage Gateway Volume Gateway to transfer the data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 778 discussion",
      "discusstion": [
        {
          "id": 1143598,
          "date": "Wed 07 Feb 2024 18:45",
          "username": "mestule",
          "content": "B because too many offices that are geographically separated.<br><br>\\\"data analytics company has 80 offices that are distributed globally.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Nice spot...completely missed that part !!</li></ul>",
          "upvote_count": "16",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1144671,
          "date": "Thu 08 Feb 2024 16:59",
          "username": "Andy_09",
          "content": "Nice spot...completely missed that part !!",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1286105,
          "date": "Thu 19 Sep 2024 04:59",
          "username": "MatAlves",
          "content": "AWS Snowmobile: ideal for migrating big datasets containing 10PB or more and stored in one location. Snowmobile can help you migrate all of these large datasets at once, but the process requires a high-speed backbone with hundreds of Gb/s of spare throughput.<br><br>AWS Snowball: ideal for datasets storing less than 10PB or datasets distributed across multiple locations. You can use Snowball to migrate data incrementally=E2=80=94this is a good alternative if you do not have enough bandwidth on the network backbone.<br><br>https://bluexp.netapp.com/blog/aws-cvo-blg-aws-snowball-vs-snowmobile-data-migration-options-comparedwork backbone.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1273032,
          "date": "Mon 26 Aug 2024 22:49",
          "username": "ccceb01",
          "content": "10 Snowball price (100TB x 10) still cheaper then 1 Snowmobile price ($4,100 plus additional cost for data transfer)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1211160,
          "date": "Tue 14 May 2024 02:53",
          "username": "aditianand",
          "content": "Why not D? Why not AWS storage gateway? With 1Gbps, they can transfer 1.25 GBPS which translates to 2.8 PB in 4 weeks. They need just 1 PB to be transferred",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1202274,
          "date": "Fri 26 Apr 2024 00:29",
          "username": "buzzinmumbai",
          "content": "As of March 2024 AWS has stopped offering snowmobile as a service .So B is the right answer.Hopefully they don't ask this question :)",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1193396,
          "date": "Thu 11 Apr 2024 05:15",
          "username": "Tanidanindo",
          "content": "Too large for snowball devices.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1156260,
          "date": "Thu 22 Feb 2024 10:08",
          "username": "Naveena_Devanga",
          "content": "Option C,<br>An AWS Snowmobile has a maximum storage capacity of 100 petabytes (PB). This is equivalent to the capacity of 1,250 Snowball Edge devices<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>but there are many offices geographically distributed, so snowmobile for each one of them adds up to a lot of cost as compared to option B).</li><li>Snowmobile advised over 10PB! Definitely snowball</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1166943,
          "date": "Wed 06 Mar 2024 06:49",
          "username": "HarryLopez",
          "content": "but there are many offices geographically distributed, so snowmobile for each one of them adds up to a lot of cost as compared to option B).<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Snowmobile advised over 10PB! Definitely snowball</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1203000,
          "date": "Sat 27 Apr 2024 10:08",
          "username": "sandordini",
          "content": "Snowmobile advised over 10PB! Definitely snowball",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1144206,
          "date": "Thu 08 Feb 2024 08:24",
          "username": "chefKC",
          "content": "option B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141847,
          "date": "Tue 06 Feb 2024 07:40",
          "username": "Andy_09",
          "content": "Option C looks good, as option B would lead to usage of too many snowball devices.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#779",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an Amazon Elastic File System (Amazon EFS) file system that contains a reference dataset. The company has applications on Amazon EC2 instances that need to read the dataset. However, the applications must not be able to change the dataset. The company wants to use IAM access control to prevent the applications from being able to modify or delete the dataset.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#779",
          "answers": [
            {
              "choice": "<p>Mount the EFS file system in read-only mode from within the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a resource policy for the EFS file system that denies the elasticfilesystem:ClientWrite action to the IAM roles that are attached to the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an identity policy for the EFS file system that denies the elasticfilesystem:ClientWrite action on the EFS file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an EFS access point for each application. Use Portable Operating System Interface (POSIX) file permissions to allow read-only access to files in the root directory.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 779 discussion",
      "discusstion": [
        {
          "id": 1172066,
          "date": "Tue 12 Mar 2024 22:43",
          "username": "lenotc",
          "content": "B correct best solution best well architected<br>C wrong because identity policies are typically associated with users or roles, not directly with the EFS file system<br>D wrong because POSIX file permissions at the root directory level may not be sufficient to prevent modifications to other directories or files<br>A is so far away",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1144787,
          "date": "Thu 08 Feb 2024 19:01",
          "username": "hajra313",
          "content": "Create an EFS access point for each application. Use Portable Operating System Interface (POSIX) file permissions to allow read-only access to files in the root directory.<br><br>Explanation:<br>By creating an EFS access point for each application and configuring POSIX file permissions to allow read-only access, you can enforce the desired access control. This approach restricts write and delete actions on the dataset while allowing read access, aligning with the company's requirements.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Resource policies are included in \\\" IAM to control\\\":<br><br>\\\"Using IAM to control file system data access<br><br>NFS clients can identify themselves using an IAM role when connecting to an EFS file system. When a client connects to a file system, Amazon EFS evaluates the file system's IAM resource policy, which is called a file system policy, along with any identity-based IAM policies to determine the appropriate file system access permissions to grant.\\\"<br><br>https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html</li><li>Please note that the question is asking \\\"The company wants to use IAM access control to prevent the applications from being able to modify or delete the dataset.\\\"</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1286108,
          "date": "Thu 19 Sep 2024 05:10",
          "username": "MatAlves",
          "content": "Resource policies are included in \\\" IAM to control\\\":<br><br>\\\"Using IAM to control file system data access<br><br>NFS clients can identify themselves using an IAM role when connecting to an EFS file system. When a client connects to a file system, Amazon EFS evaluates the file system's IAM resource policy, which is called a file system policy, along with any identity-based IAM policies to determine the appropriate file system access permissions to grant.\\\"<br><br>https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1218708,
          "date": "Sun 26 May 2024 05:25",
          "username": "f07ed8f",
          "content": "Please note that the question is asking \\\"The company wants to use IAM access control to prevent the applications from being able to modify or delete the dataset.\\\"",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1286107,
          "date": "Thu 19 Sep 2024 05:06",
          "username": "MatAlves",
          "content": "- Identity-based policies are attached to an IAM user, group, or role.<br>- Resource-based policies are attached to a resource.<br>- elasticfilesystem:ClientWrite: Provides write permissions on a file system.<br><br>EFS is a RESOURCE, so that excludes \\\"C\\\" (we need a resource policy).<br><br>https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1282195,
          "date": "Wed 11 Sep 2024 17:02",
          "username": "elmyth",
          "content": "There is no such thing as an \\\"identity policy\\\" for EFS.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1203013,
          "date": "Sat 27 Apr 2024 10:22",
          "username": "sandordini",
          "content": "2 ways to prevent writing to the file system:<br>1. The mount option in the /etc/fstab file is set to read-only access. > A<br>2. IAM policy indicates read-only access, or root access disabled. > B<br>The question clearly states they are looking to use IAM access control",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1177832,
          "date": "Wed 20 Mar 2024 01:17",
          "username": "Ansuman_lucky",
          "content": "prevent the applications from being able to modify or delete the dataset.-- This means a role would be used. So answer is B",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1177523,
          "date": "Tue 19 Mar 2024 17:06",
          "username": "xBUGx",
          "content": "IAM policies are used to control access to AWS resources, including Amazon EFS. By default, IAM policies control access to the EFS API actions, such as elasticfilesystem:ClientWrite, which allows clients to write to the file system. However, POSIX file permissions control access to files within the file system itself, which is independent of IAM policies.<br><br>While using POSIX file permissions can restrict access to the files within the file system, it doesn't prevent a user or application with the appropriate IAM permissions from modifying or deleting those files directly through the EFS API.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1166942,
          "date": "Wed 06 Mar 2024 06:47",
          "username": "HarryLopez",
          "content": "B)<br>IAM needs to be used, so A) & D) are out.<br>So b/w B) and C), Resource policies are meant for specific aws service or resource while Identity policies are attached to an identity (user, group or role). C) attached identity policy to EFS, dont know how and why. Hence, B).",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1163142,
          "date": "Fri 01 Mar 2024 02:05",
          "username": "osmk",
          "content": "company wants to use IAM access control to prevent https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1161065,
          "date": "Wed 28 Feb 2024 01:17",
          "username": "jaswantn",
          "content": "option D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1147598,
          "date": "Sun 11 Feb 2024 20:09",
          "username": "Oo_Cc",
          "content": "\\\"The company wasn't to use IAM access control\\\". Yes, it would deny writing action to everything .. but it's still the only one that uses IAM.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Using IAM to control file system data access<br><br>NFS clients can identify themselves using an IAM role when connecting to an EFS file system. When a client connects to a file system, Amazon EFS evaluates the file system's IAM resource policy, which is called a file system policy, along with any identity-based IAM policies to determine the appropriate file system access permissions to grant.\\\"<br><br>https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html</li><li>What we need to change is the \\\" IAM resource policy\\\".</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1286109,
          "date": "Thu 19 Sep 2024 05:12",
          "username": "MatAlves",
          "content": "\\\"Using IAM to control file system data access<br><br>NFS clients can identify themselves using an IAM role when connecting to an EFS file system. When a client connects to a file system, Amazon EFS evaluates the file system's IAM resource policy, which is called a file system policy, along with any identity-based IAM policies to determine the appropriate file system access permissions to grant.\\\"<br><br>https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>What we need to change is the \\\" IAM resource policy\\\".</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1286110,
          "date": "Thu 19 Sep 2024 05:12",
          "username": "MatAlves",
          "content": "What we need to change is the \\\" IAM resource policy\\\".",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1141849,
          "date": "Tue 06 Feb 2024 07:41",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "5",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#780",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has hired an external vendor to perform work in the company's AWS account. The vendor uses an automated tool that is hosted in an AWS account that the vendor owns. The vendor does not have IAM access to the company's AWS account. The company needs to grant the vendor access to the company's AWS account.<br><br>Which solution will meet these requirements MOST securely?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#780",
          "answers": [
            {
              "choice": "<p>Create an IAM role in the company's account to delegate access to the vendor's IAM role. Attach the appropriate IAM policies to the role for the permissions that the vendor requires.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM user in the company's account with a password that meets the password complexity requirements. Attach the appropriate IAM policies to the user for the permissions that the vendor requires.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM group in the company's account. Add the automated tool's IAM user from the vendor account to the group. Attach the appropriate IAM policies to the group for the permissions that the vendor requires.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM user in the company's account that has a permission boundary that allows the vendor's account. Attach the appropriate IAM policies to the user for the permissions that the vendor requires.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 780 discussion",
      "discusstion": [
        {
          "id": 1198135,
          "date": "Thu 18 Apr 2024 21:34",
          "username": "Mikado211",
          "content": "When you have somebody from another account who needs a resource in your account<br>- create a role to access to this account<br>- allow the remote account to asume the role.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1141856,
          "date": "Tue 06 Feb 2024 07:47",
          "username": "Andy_09",
          "content": "Option A looks ok",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1319821,
          "date": "Fri 29 Nov 2024 18:28",
          "username": "JA2018",
          "content": "Least privilege principle: Using an IAM role instead of a user adheres to the least privilege principle as it only grants the vendor access to specific actions needed for their task, not full account access like a user would have.<br><br>No direct access to the company account: By delegating access through a role, the vendor's IAM user in their own account does not need to have direct login credentials to the company's AWS account, enhancing security.<br><br>Granular control: IAM policies attached to the role can be carefully crafted to provide only the necessary permissions for thevendor's automated tool, limiting potential damage in case of unauthorized access",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1235461,
          "date": "Sat 22 Jun 2024 17:11",
          "username": "Scheldon",
          "content": "AnswerA<br><br>I would go with option A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1158328,
          "date": "Sun 25 Feb 2024 04:41",
          "username": "osmk",
          "content": "Question #222",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#781",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to run its experimental workloads in the AWS Cloud. The company has a budget for cloud spending. The company's CFO is concerned about cloud spending accountability for each department. The CFO wants to receive notification when the spending threshold reaches 60% of the budget.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#781",
          "answers": [
            {
              "choice": "<p>Use cost allocation tags on AWS resources to label owners. Create usage budgets in AWS Budgets. Add an alert threshold to receive notification when spending exceeds 60% of the budget.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Cost Explorer forecasts to determine resource owners. Use AWS Cost Anomaly Detection to create alert threshold notifications when spending exceeds 60% of the budget.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use cost allocation tags on AWS resources to label owners. Use AWS Support API on AWS Trusted Advisor to create alert threshold notifications when spending exceeds 60% of the budget.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Cost Explorer forecasts to determine resource owners. Create usage budgets in AWS Budgets. Add an alert threshold to receive notification when spending exceeds 60% of the budget.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 781 discussion",
      "discusstion": [
        {
          "id": 1153711,
          "date": "Mon 19 Feb 2024 05:45",
          "username": "NayeraB",
          "content": "Nothing with cost explorer in it, and I don't want to be Captain Obvious but we need to set the budget alerts through AWS Budgets, so A",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1230058,
          "date": "Thu 13 Jun 2024 21:01",
          "username": "Scheldon",
          "content": "AnswerA<br><br>https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-controls.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1141860,
          "date": "Tue 06 Feb 2024 07:48",
          "username": "Andy_09",
          "content": "Option A",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#782",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to deploy an internal web application on AWS. The web application must be accessible only from the company's office. The company needs to download security patches for the web application from the internet.<br><br>The company has created a VPC and has configured an AWS Site-to-Site VPN connection to the company's office. A solutions architect must design a secure architecture for the web application.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#782",
          "answers": [
            {
              "choice": "<p>Deploy the web application on Amazon EC2 instances in public subnets behind a public Application Load Balancer (ALB). Attach an internet gateway to the VPC. Set the inbound source of the ALB's security group to 0.0.0.0/0.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the web application on Amazon EC2 instances in private subnets behind an internal Application Load Balancer (ALB). Deploy NAT gateways in public subnets. Attach an internet gateway to the VPC. Set the inbound source of the ALB's security group to the company's office network CIDR block.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the web application on Amazon EC2 instances in public subnets behind an internal Application Load Balancer (ALB). Deploy NAT gateways in private subnets. Attach an internet gateway to the VPSet the outbound destination of the ALB's security group to the company's office network CIDR block.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the web application on Amazon EC2 instances in private subnets behind a public Application Load Balancer (ALB). Attach an internet gateway to the VPC. Set the outbound destination of the ALB's security group to 0.0.0.0/0.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 782 discussion",
      "discusstion": [
        {
          "id": 1141866,
          "date": "Tue 06 Feb 2024 07:57",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1163211,
          "date": "Fri 01 Mar 2024 04:50",
          "username": "osmk",
          "content": "none sense why IGW on top of NATGW.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/network-firewall/latest/developerguide/arch-igw-ngw.html<br><br>Confusing, I agree. But it seems to be recommended in some cases.</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1286165,
          "date": "Thu 19 Sep 2024 07:32",
          "username": "MatAlves",
          "content": "https://docs.aws.amazon.com/network-firewall/latest/developerguide/arch-igw-ngw.html<br><br>Confusing, I agree. But it seems to be recommended in some cases.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1305732,
          "date": "Fri 01 Nov 2024 11:14",
          "username": "striker89",
          "content": "I Would go for B even if NAT GW allow outbound traffic ONLY. Still wondering how the Company newtwork will access Private Subnet in the VPC.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1235246,
          "date": "Sat 22 Jun 2024 09:41",
          "username": "Scheldon",
          "content": "AnswerB<br><br>Server and LB in Private will hide WEB application from the word. NAT will allow for server's access to the internet in case of need",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1153713,
          "date": "Mon 19 Feb 2024 05:50",
          "username": "NayeraB",
          "content": "B is well structured",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1153169,
          "date": "Sun 18 Feb 2024 10:54",
          "username": "ogerber",
          "content": "To my opinion, with only having inbound of the companys CIDR block, it will not include access for the patches available online.<br>i would go for D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Incorrect: B says inbound, D says outbound. Outbound for ALB are the EC2 Instances.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1203021,
          "date": "Sat 27 Apr 2024 10:39",
          "username": "sandordini",
          "content": "Incorrect: B says inbound, D says outbound. Outbound for ALB are the EC2 Instances.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1143452,
          "date": "Wed 07 Feb 2024 16:16",
          "username": "kempes",
          "content": "Option B",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#783",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company maintains its accounting records in a custom application that runs on Amazon EC2 instances. The company needs to migrate the data to an AWS managed service for development and maintenance of the application data. The solution must require minimal operational support and provide immutable, cryptographically verifiable logs of data changes.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#783",
          "answers": [
            {
              "choice": "<p>Copy the records from the application into an Amazon Redshift cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Copy the records from the application into an Amazon Neptune cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Copy the records from the application into an Amazon Timestream database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Copy the records from the application into an Amazon Quantum Ledger Database (Amazon QLDB) ledger.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 783 discussion",
      "discusstion": [
        {
          "id": 1141872,
          "date": "Tue 06 Feb 2024 08:02",
          "username": "Andy_09",
          "content": "Option D",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1166736,
          "date": "Tue 05 Mar 2024 21:36",
          "username": "asdfcdsxdfc",
          "content": "Amazon QLDB<br>- QLDB stands for ' Quantum Ledger Database' <br>- A ledger is a book recording financial transactions<br>- Fully Managed, Serverless, High available, Replication across 3 AZ<br>- Used to review history of all the changes made to your application data over time<br>- Immutable system: no entry can be removed or modified, cryptographically verifiable",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1235249,
          "date": "Sat 22 Jun 2024 09:46",
          "username": "Scheldon",
          "content": "AnswerD<br><br>Amazon Quantum Ledger Database (Amazon QLDB) is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log owned by a central trusted authority.<br><br>https://docs.aws.amazon.com/qldb/latest/developerguide/what-is.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1215342,
          "date": "Wed 22 May 2024 03:52",
          "username": "f07ed8f",
          "content": "Amazon Quantum Ledger Database (Amazon QLDB) is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1178832,
          "date": "Wed 20 Mar 2024 23:59",
          "username": "Mikado211",
          "content": "immutable, cryptographically verifiable> Amazon QLDB",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1165811,
          "date": "Mon 04 Mar 2024 17:45",
          "username": "agg42",
          "content": "https://aws.amazon.com/qldb/<br>Amazon Quantum Ledger Database (Amazon QLDB) is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1153717,
          "date": "Mon 19 Feb 2024 05:57",
          "username": "NayeraB",
          "content": "D is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#784",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's marketing data is uploaded from multiple sources to an Amazon S3 bucket. A series of data preparation jobs aggregate the data for reporting. The data preparation jobs need to run at regular intervals in parallel. A few jobs need to run in a specific order later.<br><br>The company wants to remove the operational overhead of job error handling, retry logic, and state management.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#784",
          "answers": [
            {
              "choice": "<p>Use an AWS Lambda function to process the data as soon as the data is uploaded to the S3 bucket. Invoke other Lambda functions at regularly scheduled intervals.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Athena to process the data. Use Amazon EventBridge Scheduler to invoke Athena on a regular internal.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Glue DataBrew to process the data. Use an AWS Step Functions state machine to run the DataBrew data preparation jobs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Data Pipeline to process the data. Schedule Data Pipeline to process the data once at midnight.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 784 discussion",
      "discusstion": [
        {
          "id": 1165815,
          "date": "Mon 04 Mar 2024 17:52",
          "username": "agg42",
          "content": "data preparationGlue DataBrew https://docs.aws.amazon.com/databrew/latest/dg/what-is.html<br>state handlingDataBrew with Step Functions https://docs.aws.amazon.com/step-functions/latest/dg/connect-databrew.html",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1141873,
          "date": "Tue 06 Feb 2024 08:05",
          "username": "Andy_09",
          "content": "Option C",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1331298,
          "date": "Wed 25 Dec 2024 02:05",
          "username": "LeonSauveterre",
          "content": "A - Lambda function alone is incompetent for retries or running in a specific order.<br>B - Athena cannot automatically handle errors or running in a specific order.<br>C - YES and fully managed. See below.<br>D - Data Pipeline with retries and error handling is A LOT OF WORK.<br>Takeaway:<br>1. Glue DataBrew simplifies the data preparation process with a visual interface, and it integrates with S3 for input/output.<br>2. Step Functions efficiently manages parallel and sequential workflows while minimizing operational overhead for state management, error handling, and retries.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1235252,
          "date": "Sat 22 Jun 2024 09:55",
          "username": "Scheldon",
          "content": "AnswerC<br><br>With Step Functions' built-in controls, you can examine the state of each step in your workflow to make sure that your application runs in order and as expected.<br><br>https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html<br><br>AWS Glue is a serverless data integration service that makes it easy for analytics users to discover, prepare, move, and integrate data from multiple sources.<br><br>https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1166738,
          "date": "Tue 05 Mar 2024 21:39",
          "username": "asdfcdsxdfc",
          "content": "c looks correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#785",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a payment processing application that runs on AWS Lambda in private subnets across multiple Availability Zones. The application uses multiple Lambda functions and processes millions of transactions each day.<br><br>The architecture must ensure that the application does not process duplicate payments.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#785",
          "answers": [
            {
              "choice": "<p>Use Lambda to retrieve all due payments. Publish the due payments to an Amazon S3 bucket. Configure the S3 bucket with an event notification to invoke another Lambda function to process the due payments.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Lambda to retrieve all due payments. Publish the due payments to an Amazon Simple Queue Service (Amazon SQS) queue. Configure another Lambda function to poll the SQS queue and to process the due payments.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Lambda to retrieve all due payments. Publish the due payments to an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Configure another Lambda function to poll the FIFO queue and to process the due payments.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Lambda to retrieve all due payments. Store the due payments in an Amazon DynamoDB table. Configure streams on the DynamoDB table to invoke another Lambda function to process the due payments.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 785 discussion",
      "discusstion": [
        {
          "id": 1143250,
          "date": "Wed 07 Feb 2024 11:46",
          "username": "hajra313",
          "content": "Standard queues provide at-least-once delivery, which means that each message is delivered at least once.<br><br>FIFO queues provide exactly-once processing , which means that each message is delivered once and remains available until a consumer processes it and deletes it. Duplicates are not introduced into the queue. OPTION C",
          "upvote_count": "17",
          "selected_answers": ""
        },
        {
          "id": 1235254,
          "date": "Sat 22 Jun 2024 10:00",
          "username": "Scheldon",
          "content": "AnswerC<br><br>SQS FIFO was created for such tasks<br><br>Unlike standard queues, FIFO queues don't introduce duplicate messages. FIFO queues help you avoid sending duplicates to a queue. If you retry the SendMessage action within the 5-minute deduplication interval, Amazon SQS doesn't introduce any duplicates into the queue.<br>https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1171579,
          "date": "Tue 12 Mar 2024 10:40",
          "username": "escalibran",
          "content": "C over D, because<br>https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html Processing dynamo streams with lambda can cause duplication.<br>SQS FIFO can be configured for High Throughput to exceed the 3000/s (batched) limit https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html<br><br>I previously worked with payments and would argue that either option doesn't fully solve duplications. Events might be sent multiple times from source, you definitely want to perform de-duplication and have some sort of idempotent processing for them, instead of just blindly processing each thing you're given.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1166742,
          "date": "Tue 05 Mar 2024 21:48",
          "username": "asdfcdsxdfc",
          "content": "c is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1162899,
          "date": "Thu 29 Feb 2024 19:21",
          "username": "shahreh1",
          "content": "Option C:<br>FIFO queues<br>Exactly-Once Processing =E2=80=93 A message is delivered once and remains available until a consumer processes and deletes it. Duplicates aren't introduced into the queue.<br>First-In-First-Out Delivery =E2=80=93 The order in which messages are sent and received is strictly preserved.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1155868,
          "date": "Wed 21 Feb 2024 22:26",
          "username": "FZA24",
          "content": "Option C Fifo",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1154306,
          "date": "Mon 19 Feb 2024 22:28",
          "username": "Mikado211",
          "content": "SQS can have duplicate messages in case of problems with the timeout window.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1153549,
          "date": "Sun 18 Feb 2024 21:16",
          "username": "haci",
          "content": "\\\"The application does not process duplicate payments\\\" is the key point, which leads us directly to SQS FIFO",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1146883,
          "date": "Sun 11 Feb 2024 00:38",
          "username": "Cali182",
          "content": "Option D<br>DynamoDB Streams helps ensure the following:<br><br>Each stream record appears exactly once in the stream.<br><br>For each item that is modified in a DynamoDB table, the stream records appear in the same sequence as the actual modifications to the item.<br><br>DynamoDB Streams writes stream records in near-real time so that you can build applications that consume these streams and take action based on the contents.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option D...If you need to handle millions of transactions each day, you might need to consider other approach instead of SQS FIFO. And amongst the given options, we have DynmamoDB that maintains order in the streams.</li><li>I'm not sure if the answer is DynamoDB as well, but answering your question, SQS Fifo can handle 300 messages/second without batching, 3,000 messages/second with batching. Assuming we're using the 300/sec option, with 86,400 seconds in a day, that gives you 25,920,000 messages, so in short, yes SQS can handle millions of requests each day.<br>Not to mention DynamoDB doesn't provide the exactly-once processing the SQS offer and clearly requested in the question. That's just my train of thought, I'm happy to be corrected.</li><li>Dynamodb streams with partition key can be used to implement exactly once processing. There are many options with dynamodb to check for already processed item, and can befiltered out so that they are processed only once.</li><li>This calculation limits the number of transactions to 25 million a day. What if there are transactions exceeding this limit?As question say .... millions of transactions a day; that could be 70,80 or 90 millions also. In that case how SQS FIFO would perform?<br>Happy to be corrected with more convincing facts</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1152340,
          "date": "Sat 17 Feb 2024 03:46",
          "username": "jaswantn",
          "content": "Option D...If you need to handle millions of transactions each day, you might need to consider other approach instead of SQS FIFO. And amongst the given options, we have DynmamoDB that maintains order in the streams.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I'm not sure if the answer is DynamoDB as well, but answering your question, SQS Fifo can handle 300 messages/second without batching, 3,000 messages/second with batching. Assuming we're using the 300/sec option, with 86,400 seconds in a day, that gives you 25,920,000 messages, so in short, yes SQS can handle millions of requests each day.<br>Not to mention DynamoDB doesn't provide the exactly-once processing the SQS offer and clearly requested in the question. That's just my train of thought, I'm happy to be corrected.</li><li>Dynamodb streams with partition key can be used to implement exactly once processing. There are many options with dynamodb to check for already processed item, and can befiltered out so that they are processed only once.</li><li>This calculation limits the number of transactions to 25 million a day. What if there are transactions exceeding this limit?As question say .... millions of transactions a day; that could be 70,80 or 90 millions also. In that case how SQS FIFO would perform?<br>Happy to be corrected with more convincing facts</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1153724,
          "date": "Mon 19 Feb 2024 06:22",
          "username": "NayeraB",
          "content": "I'm not sure if the answer is DynamoDB as well, but answering your question, SQS Fifo can handle 300 messages/second without batching, 3,000 messages/second with batching. Assuming we're using the 300/sec option, with 86,400 seconds in a day, that gives you 25,920,000 messages, so in short, yes SQS can handle millions of requests each day.<br>Not to mention DynamoDB doesn't provide the exactly-once processing the SQS offer and clearly requested in the question. That's just my train of thought, I'm happy to be corrected.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Dynamodb streams with partition key can be used to implement exactly once processing. There are many options with dynamodb to check for already processed item, and can befiltered out so that they are processed only once.</li><li>This calculation limits the number of transactions to 25 million a day. What if there are transactions exceeding this limit?As question say .... millions of transactions a day; that could be 70,80 or 90 millions also. In that case how SQS FIFO would perform?<br>Happy to be corrected with more convincing facts</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1158309,
          "date": "Sun 25 Feb 2024 03:58",
          "username": "jaswantn",
          "content": "Dynamodb streams with partition key can be used to implement exactly once processing. There are many options with dynamodb to check for already processed item, and can befiltered out so that they are processed only once.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1158300,
          "date": "Sun 25 Feb 2024 03:45",
          "username": "jaswantn",
          "content": "This calculation limits the number of transactions to 25 million a day. What if there are transactions exceeding this limit?As question say .... millions of transactions a day; that could be 70,80 or 90 millions also. In that case how SQS FIFO would perform?<br>Happy to be corrected with more convincing facts",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1143475,
          "date": "Wed 07 Feb 2024 16:38",
          "username": "kempes",
          "content": "Option c",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141875,
          "date": "Tue 06 Feb 2024 08:08",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#786",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs multiple workloads in its on-premises data center. The company's data center cannot scale fast enough to meet the company's expanding business needs. The company wants to collect usage and configuration data about the on-premises servers and workloads to plan a migration to AWS.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#786",
          "answers": [
            {
              "choice": "<p>Set the home AWS Region in AWS Migration Hub. Use AWS Systems Manager to collect data about the on-premises servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set the home AWS Region in AWS Migration Hub. Use AWS Application Discovery Service to collect data about the on-premises servers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Schema Conversion Tool (AWS SCT) to create the relevant templates. Use AWS Trusted Advisor to collect data about the on-premises servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Schema Conversion Tool (AWS SCT) to create the relevant templates. Use AWS Database Migration Service (AWS DMS) to collect data about the on-premises servers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 786 discussion",
      "discusstion": [
        {
          "id": 1178054,
          "date": "Wed 20 Mar 2024 09:55",
          "username": "Kezuko",
          "content": "Still the planning stage, C and D is out.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1235257,
          "date": "Sat 22 Jun 2024 10:03",
          "username": "Scheldon",
          "content": "AnswerB<br>AWS Migration Hub delivers a guided end-to-end migration and modernization journey through discovery, assessment, planning, and execution.<br>https://aws.amazon.com/migration-hub/<br>AWS Application Discovery Service helps you plan your migration to the AWS cloud by collecting usage and configuration data about your on-premises servers and databases. Application Discovery Service is integrated with AWS Migration Hub and AWS Database Migration Service Fleet Advisor.<br>https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1175711,
          "date": "Sun 17 Mar 2024 10:46",
          "username": "Ipergorta",
          "content": "Option D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry B</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1175714,
          "date": "Sun 17 Mar 2024 10:47",
          "username": "Ipergorta",
          "content": "Sorry B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1166745,
          "date": "Tue 05 Mar 2024 21:51",
          "username": "asdfcdsxdfc",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1165818,
          "date": "Mon 04 Mar 2024 17:56",
          "username": "agg42",
          "content": "AWS Application Discovery Service helps you plan your migration to the AWS cloud by collecting usage and configuration data about your on-premises servers and databases. https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1141877,
          "date": "Tue 06 Feb 2024 08:09",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#787",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an organization in AWS Organizations that has all features enabled. The company requires that all API calls and logins in any existing or new AWS account must be audited. The company needs a managed solution to prevent additional work and to minimize costs. The company also needs to know when any AWS account is not compliant with the AWS Foundational Security Best Practices (FSBP) standard.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#787",
          "answers": [
            {
              "choice": "<p>Deploy an AWS Control Tower environment in the Organizations management account. Enable AWS Security Hub and AWS Control Tower Account Factory in the environment.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an AWS Control Tower environment in a dedicated Organizations member account. Enable AWS Security Hub and AWS Control Tower Account Factory in the environment.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Managed Services (AMS) Accelerate to build a multi-account landing zone (MALZ). Submit an RFC to self-service provision Amazon GuardDuty in the MALZ.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Managed Services (AMS) Accelerate to build a multi-account landing zone (MALZ). Submit an RFC to self-service provision AWS Security Hub in the MALZ.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 787 discussion",
      "discusstion": [
        {
          "id": 1331300,
          "date": "Wed 25 Dec 2024 02:23",
          "username": "LeonSauveterre",
          "content": "A - Control Tower enforces centralized logging, monitoring, and account management. Security Hub monitors compliance with AWS Foundational Security Best Practices (FSBP). Account Factory simplifies the creation of new accounts with preconfigured settings.<br>B - Control Tower is intended to be deployed in the management account, not a member account, which deviates from AWS-recommended practices.<br>C - GuardDuty focuses on security threats rather than compliance monitoring for FSBP.<br>D - AMS Accelerate is more suitable for enterprises with highly complex requirements. Also, more operational overheads and cost more, but the question wants \\\"to prevent additional work and to minimize costs\\\".",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1303816,
          "date": "Mon 28 Oct 2024 05:18",
          "username": "LuongTo",
          "content": "Why not B?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1178056,
          "date": "Wed 20 Mar 2024 09:57",
          "username": "Kezuko",
          "content": "https://docs.aws.amazon.com/controltower/latest/userguide/security-hub-controls.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1175712,
          "date": "Sun 17 Mar 2024 10:47",
          "username": "Ipergorta",
          "content": "Option D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1166747,
          "date": "Tue 05 Mar 2024 21:53",
          "username": "asdfcdsxdfc",
          "content": "A is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1143536,
          "date": "Wed 07 Feb 2024 17:54",
          "username": "kempes",
          "content": "Option A",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1141879,
          "date": "Tue 06 Feb 2024 08:11",
          "username": "Andy_09",
          "content": "Option A",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#788",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has stored 10 TB of log files in Apache Parquet format in an Amazon S3 bucket. The company occasionally needs to use SQL to analyze the log files.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#788",
          "answers": [
            {
              "choice": "<p>Create an Amazon Aurora MySQL database. Migrate the data from the S3 bucket into Aurora by using AWS Database Migration Service (AWS DMS). Issue SQL statements to the Aurora database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Redshift cluster. Use Redshift Spectrum to run SQL statements directly on the data in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Glue crawler to store and retrieve table metadata from the S3 bucket. Use Amazon Athena to run SQL statements directly on the data in the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon EMR cluster. Use Apache Spark SQL to run SQL statements directly on the data in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 788 discussion",
      "discusstion": [
        {
          "id": 1331310,
          "date": "Wed 25 Dec 2024 02:39",
          "username": "LeonSauveterre",
          "content": "A - Aurora is cool but migrating 10 TB of data incurs significant costs and operational overhead.<br>B - Redshift Spectrum allows querying data directly in S3 without loading it into Redshift, but costs are really high especially for infrequent use.<br>C - Athena is serverless and charges only for the data scanned by queries. Glue Crawler automatically extracts metadata and schema information from the Parquet files. No need to migrate anything.<br>D - Just by the look of it I know I'll go bankrupt if I choose that.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1203047,
          "date": "Sun 27 Oct 2024 12:29",
          "username": "sandordini",
          "content": "S3 + SQLAthena",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1178057,
          "date": "Fri 20 Sep 2024 08:58",
          "username": "Kezuko",
          "content": "Apache Parquet > Glue Crawler",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1166748,
          "date": "Thu 05 Sep 2024 20:55",
          "username": "asdfcdsxdfc",
          "content": "c is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1143687,
          "date": "Wed 07 Aug 2024 18:53",
          "username": "kempes",
          "content": "Option C",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1141880,
          "date": "Tue 06 Aug 2024 07:11",
          "username": "Andy_09",
          "content": "Option C",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#789",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs a solution to prevent AWS CloudFormation stacks from deploying AWS Identity and Access Management (IAM) resources that include an inline policy or '*'  in the statement. The solution must also prohibit deployment of Amazon EC2 instances with public IP addresses. The company has AWS Control Tower enabled in its organization in AWS Organizations.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#789",
          "answers": [
            {
              "choice": "<p>Use AWS Control Tower proactive controls to block deployment of EC2 instances with public IP addresses and inline policies with elevated access or '*' .<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Control Tower detective controls to block deployment of EC2 instances with public IP addresses and inline policies with elevated access or '*' .<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Config to create rules for EC2 and IAM compliance. Configure the rules to run an AWS Systems Manager Session Manager automation to delete a resource when it is not compliant.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a service control policy (SCP) to block actions for the EC2 instances and IAM resources if the actions lead to noncompliance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 789 discussion",
      "discusstion": [
        {
          "id": 1165839,
          "date": "Mon 04 Mar 2024 18:17",
          "username": "agg42",
          "content": "proactive controls pls see links for both * in inline policy: https://docs.aws.amazon.com/controltower/latest/userguide/iam-rules.html#ct-iam-pr-1-description<br>and for ec2 public IP: https://docs.aws.amazon.com/controltower/latest/userguide/ec2-rules.html#ct-ec2-pr-9-description",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1152349,
          "date": "Sat 17 Feb 2024 04:14",
          "username": "jaswantn",
          "content": "Option D... This is preventive control of Control Tower where we use SCP to disallow actions that lead to policy violation.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1331315,
          "date": "Wed 25 Dec 2024 02:55",
          "username": "LeonSauveterre",
          "content": "A - Proactive controls are a feature of AWS Control Tower that prevent noncompliant resources from being deployed by validating configurations before deployment.<br>B - Detective controls can't block deployment.<br>C - If you must monitor to get it right, then something's already wrong before you notice that.<br>D - SCPs can indeed block specific API calls for creating IAM resources with \\\"*\\\" or EC2 instances with public IPs, but can't make the most of AWS CloudFormation stacks. Plus, SCPs apply at the account level and might inadvertently restrict legitimate use cases. Not ideal enough is what I'm saying.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>And btw, since \\\"The company has AWS Control Tower enabled\\\", option A induces much less overhead than option D.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1331316,
          "date": "Wed 25 Dec 2024 02:57",
          "username": "LeonSauveterre",
          "content": "And btw, since \\\"The company has AWS Control Tower enabled\\\", option A induces much less overhead than option D.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1286180,
          "date": "Thu 19 Sep 2024 08:07",
          "username": "MatAlves",
          "content": "Prevent AWS CloudFormation from deploying IAM resources and EC2 instances based on specific use casesControl Tower Proactive controls.<br><br>\\\"Proactive controls are security controls that are designed to prevent the creation of noncompliant resources.<br><br>For example (...),through AWS CloudFormation, the proactive control can prevent the creation of update of any S3 bucket that has public access enabled.\\\"<br><br>https://docs.aws.amazon.com/prescriptive-guidance/latest/aws-security-controls/proactive-controls.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1206078,
          "date": "Fri 03 May 2024 13:40",
          "username": "88f8032",
          "content": "this is A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1205764,
          "date": "Thu 02 May 2024 20:09",
          "username": "Sergiuss95",
          "content": "Is D, the best way to prevent this actions, is deploying SCPs",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1205275,
          "date": "Thu 02 May 2024 04:45",
          "username": "BBR01",
          "content": "It is D. You want to prevent the events from happening.<br>Proactive controls check whether resources are compliant with your company policies and objectives, before the resources are provisioned in your accounts.<br>Detective controls detect specific events when they occur and log the action in CloudTrail.<br>Preventive controls prevent actions from occurring.<br>Preventive controls are implemented with SCPs. Detective controls are implemented with AWS Config rules. Proactive controls are implemented with AWS CloudFormation hooks.<br>https://docs.aws.amazon.com/controltower/latest/userguide/how-control-tower-works.html#how-controls-work<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>as stated by you A is correct, Proactive controls are implemented as cloudformation hooks and the resource will not be deployed if not compliants. It is exactly what is asked in question.<br>Using an SCP it is actually a valid solution, but it need to be associated to a specific resource that is not specified. If you associated to root account nobody can deploy a public ip ec2, not only cloudformation</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1213637,
          "date": "Sun 19 May 2024 08:59",
          "username": "TwinSpark",
          "content": "as stated by you A is correct, Proactive controls are implemented as cloudformation hooks and the resource will not be deployed if not compliants. It is exactly what is asked in question.<br>Using an SCP it is actually a valid solution, but it need to be associated to a specific resource that is not specified. If you associated to root account nobody can deploy a public ip ec2, not only cloudformation",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1163100,
          "date": "Fri 01 Mar 2024 00:53",
          "username": "osmk",
          "content": "Proactive controls are implemented using AWS CloudFormation hooks within AWS Control Tower. They operate before resources are deployed to determine compliance with activated controls. SCPs are part of AWS Organizations and are used to manage permissions. vs Define specific purposes for implementing controls.https://docs.aws.amazon.com/controltower/latest/userguide/proactive-controls.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>SCPs focus on managing permissions at the OU level, while proactive controls in AWS Control Tower help prevent non-compliance during resource provisioning.</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1163105,
          "date": "Fri 01 Mar 2024 00:57",
          "username": "osmk",
          "content": "SCPs focus on managing permissions at the OU level, while proactive controls in AWS Control Tower help prevent non-compliance during resource provisioning.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1153732,
          "date": "Mon 19 Feb 2024 06:53",
          "username": "NayeraB",
          "content": "A would provide a proactive solution, also I'm not sure if SCP are made for granular details like creation of EC2 instances with public IP addresses or IAM resources with certain inline policies.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1141881,
          "date": "Tue 06 Feb 2024 08:12",
          "username": "Andy_09",
          "content": "Option D",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#790",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's web application that is hosted in the AWS Cloud recently increased in popularity. The web application currently exists on a single Amazon EC2 instance in a single public subnet. The web application has not been able to meet the demand of the increased web traffic.<br><br>The company needs a solution that will provide high availability and scalability to meet the increased user demand without rewriting the web application.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#790",
          "answers": [
            {
              "choice": "<p>Replace the EC2 instance with a larger compute optimized instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon EC2 Auto Scaling with multiple Availability Zones in private subnets.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a NAT gateway in a public subnet to handle web requests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Replace the EC2 instance with a larger memory optimized instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Application Load Balancer in a public subnet to distribute web traffic.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 790 discussion",
      "discusstion": [
        {
          "id": 1143717,
          "date": "Wed 07 Feb 2024 20:12",
          "username": "kempes",
          "content": "Option BE",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1235268,
          "date": "Sat 22 Jun 2024 10:41",
          "username": "Scheldon",
          "content": "AnswerBE,<br><br>AutoScaling to increase amount of servers per need,<br>Load Balancer to palance traffic equaly to all available servers",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1203054,
          "date": "Sat 27 Apr 2024 11:43",
          "username": "sandordini",
          "content": "Only BE makes sense, even though it might require modification of the application",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1183767,
          "date": "Wed 27 Mar 2024 02:02",
          "username": "gsgdga",
          "content": "Why isn't C the answer?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>nat gateway is for accessing internet-facing from private subnets, not the other way around</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1197956,
          "date": "Thu 18 Apr 2024 15:32",
          "username": "802c4ff",
          "content": "nat gateway is for accessing internet-facing from private subnets, not the other way around",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1166749,
          "date": "Tue 05 Mar 2024 22:01",
          "username": "asdfcdsxdfc",
          "content": "be are correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1143931,
          "date": "Thu 08 Feb 2024 02:05",
          "username": "chefKC",
          "content": "Option B & E",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1141883,
          "date": "Tue 06 Feb 2024 08:13",
          "username": "Andy_09",
          "content": "Option BE",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#791",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has AWS Lambda functions that use environment variables. The company does not want its developers to see environment variables in plaintext.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#791",
          "answers": [
            {
              "choice": "<p>Deploy code to Amazon EC2 instances instead of using Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure SSL encryption on the Lambda functions to use AWS CloudHSM to store and encrypt the environment variables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a certificate in AWS Certificate Manager (ACM). Configure the Lambda functions to use the certificate to encrypt the environment variables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Key Management Service (AWS KMS) key. Enable encryption helpers on the Lambda functions to use the KMS key to store and encrypt the environment variables.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 791 discussion",
      "discusstion": [
        {
          "id": 1141899,
          "date": "Tue 06 Feb 2024 08:42",
          "username": "Andy_09",
          "content": "Option D",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1158456,
          "date": "Sun 25 Feb 2024 08:39",
          "username": "osmk",
          "content": "https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1320053,
          "date": "Sat 30 Nov 2024 05:35",
          "username": "JA2018",
          "content": "Reasons for choosing D:<br><br>AWS KMS is the primary service for managing encryption keys in AWS. This makes it the most appropriate choice for encrypting sensitive environment variables within Lambda functions.<br><br>Encryption helpers in Lambda allow you to easily integrate KMS key usage within your Lambda code, ensuring that environment variables are stored and accessed in an encrypted format.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1286181,
          "date": "Thu 19 Sep 2024 08:15",
          "username": "MatAlves",
          "content": "\\\"To configure encryption for your environment variables<br><br>Enable console encryption helpers to use client-side encryption to protect your data in transit.<br><br>Under Encryption in transit, choose Enable helpers for encryption in transit.<br><br>For each environment variable that you want to enable console encryption helpers for, choose Encrypt next to the environment variable.<br><br>Under AWS KMS key to encrypt in transit, choose a customer managed key that you created at the beginning of this procedure.\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1239714,
          "date": "Sun 30 Jun 2024 17:44",
          "username": "Rhydian25",
          "content": "I don't understand why we should use a complex way of encrypting variables instead of using Parameter Store... but in this case the best option is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#792",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An analytics company uses Amazon VPC to run its multi-tier services. The company wants to use RESTful APIs to offer a web analytics service to millions of users. Users must be verified by using an authentication service to access the APIs.<br><br>Which solution will meet these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#792",
          "answers": [
            {
              "choice": "<p>Configure an Amazon Cognito user pool for user authentication. Implement Amazon API Gateway REST APIs with a Cognito authorizer.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon Cognito identity pool for user authentication. Implement Amazon API Gateway HTTP APIs with a Cognito authorizer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS Lambda function to handle user authentication. Implement Amazon API Gateway REST APIs with a Lambda authorizer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an IAM user to handle user authentication. Implement Amazon API Gateway HTTP APIs with an IAM authorizer.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 792 discussion",
      "discusstion": [
        {
          "id": 1154048,
          "date": "Mon 19 Aug 2024 15:02",
          "username": "stephensimudemy",
          "content": "User pools is for Authentication and user management",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1203060,
          "date": "Sun 27 Oct 2024 12:52",
          "username": "sandordini",
          "content": "User pools are for authentication. Your app users can sign in through the user pool, Identity pools are for authorization, give them access to other AWS services.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1165843,
          "date": "Wed 04 Sep 2024 17:24",
          "username": "agg42",
          "content": "user pool vs identity pool: https://repost.aws/knowledge-center/cognito-user-pools-identity-pools",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1153569,
          "date": "Sun 18 Aug 2024 21:02",
          "username": "NayeraB",
          "content": "B offers more operational efficiency imo",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1143930,
          "date": "Thu 08 Aug 2024 00:58",
          "username": "chefKC",
          "content": "Answer is A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141905,
          "date": "Tue 06 Aug 2024 07:52",
          "username": "Andy_09",
          "content": "Option A",
          "upvote_count": "5",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#793",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a mobile app for customers. The app's data is sensitive and must be encrypted at rest. The company uses AWS Key Management Service (AWS KMS).<br><br>The company needs a solution that prevents the accidental deletion of KMS keys. The solution must use Amazon Simple Notification Service (Amazon SNS) to send an email notification to administrators when a user attempts to delete a KMS key.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#793",
          "answers": [
            {
              "choice": "<p>Create an Amazon EventBridge rule that reacts when a user tries to delete a KMS key. Configure an AWS Config rule that cancels any deletion of a KMS key. Add the AWS Config rule as a target of the EventBridge rule. Create an SNS topic that notifies the administrators.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function that has custom logic to prevent KMS key deletion. Create an Amazon CloudWatch alarm that is activated when a user tries to delete a KMS key. Create an Amazon EventBridge rule that invokes the Lambda function when the DeleteKey operation is performed. Create an SNS topic. Configure the EventBridge rule to publish an SNS message that notifies the administrators.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon EventBridge rule that reacts when the KMS DeleteKey operation is performed. Configure the rule to initiate an AWS Systems Manager Automation runbook. Configure the runbook to cancel the deletion of the KMS key. Create an SNS topic. Configure the EventBridge rule to publish an SNS message that notifies the administrators.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS CloudTrail trail. Configure the trail to deliver logs to a new Amazon CloudWatch log group. Create a CloudWatch alarm based on the metric filter for the CloudWatch log group. Configure the alarm to use Amazon SNS to notify the administrators when the KMS DeleteKey operation is performed.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 793 discussion",
      "discusstion": [
        {
          "id": 1141908,
          "date": "Tue 06 Feb 2024 08:55",
          "username": "Andy_09",
          "content": "Option C<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/monitor-and-remediate-scheduled-deletion-of-aws-kms-keys.html",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 1144796,
          "date": "Thu 08 Feb 2024 19:15",
          "username": "hajra313",
          "content": "option c bcz Option C emerges as the clear winner due to its:<br><br>Direct event monitoring for the DeleteKey operation<br><br>Pre-built automation using Systems Manager Automation runbooks<br><br>Efficient notification via Amazon SNS<br><br>Minimal code development and operational overhead<br><br>Reduced risk of accidental deletion with faster response times",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 1320057,
          "date": "Sat 30 Nov 2024 05:45",
          "username": "JA2018",
          "content": "Option C provides the most streamlined solution with minimal additional components needed (LEAST operational overhead). It directly leverages EventBridge to monitor for KMS key deletion attempts, triggers a Systems Manager Automation runbook to automatically prevent the deletion, and sends notifications through SNS without requiring additional Lambda functions or complex CloudWatch metric filtering.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1286183,
          "date": "Thu 19 Sep 2024 08:25",
          "username": "MatAlves",
          "content": "\\\"Deletion of an AWS KMS key is scheduled.<br>The scheduled-deletion event is evaluated by an EventBridge rule.<br>The EventBridge rule engages the Amazon SNS topic.<br>The EventBridge rule initiates the Systems Manager automation and runbooks.<br>The runbooks cancel the deletion.\\\"https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/monitor-and-remediate-scheduled-deletion-of-aws-kms-keys.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1244263,
          "date": "Mon 08 Jul 2024 11:27",
          "username": "JunsK1e",
          "content": "I agree with andy_09",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1237732,
          "date": "Wed 26 Jun 2024 21:49",
          "username": "Dammy031",
          "content": "Cloud trail helps to keep all invoked API calls in the AWS account which can trail back to the delete call made by a user<br>CloudWatch triggers an alarm when deletion is attempted.<br>SNS sends a notification to the administration about the attempt made.<br><br>All these met the requirement of the question.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1203063,
          "date": "Sat 27 Apr 2024 12:21",
          "username": "sandordini",
          "content": "My educated guess was C. Now, reading the comments, from Hajr=C3=A1313 and knben I feel confident as well :)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1184775,
          "date": "Thu 28 Mar 2024 14:06",
          "username": "camps",
          "content": "It's D https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys-creating-cloudwatch-alarm.html<br><br>https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys-creating-cloudwatch-alarm.html#cloudwatch-alarm-prerequisites",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1169162,
          "date": "Sat 09 Mar 2024 00:53",
          "username": "1dd",
          "content": "C as it \\\" cancel the deletion of the KMS key\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1158218,
          "date": "Sun 25 Feb 2024 00:40",
          "username": "knben",
          "content": "I would go with C<br><br>A -> Config is for compliance<br>B -> No lambda is required, too much complexity<br>C -> It achieves the goal, since KMS keys are not immediately deleted, which gives time to automation to cancel the action<br>D -> Cloudtrail is for auditing",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1153570,
          "date": "Sun 18 Feb 2024 22:06",
          "username": "NayeraB",
          "content": "I agree with hajra313",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#794",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to analyze and generate reports to track the usage of its mobile app. The app is popular and has a global user base. The company uses a custom report building program to analyze application usage.<br><br>The program generates multiple reports during the last week of each month. The program takes less than 10 minutes to produce each report. The company rarely uses the program to generate reports outside of the last week of each month The company wants to generate reports in the least amount of time when the reports are requested.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#794",
          "answers": [
            {
              "choice": "<p>Run the program by using Amazon EC2 On-Demand Instances. Create an Amazon EventBridge rule to start the EC2 instances when reports are requested. Run the EC2 instances continuously during the last week of each month.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Run the program in AWS Lambda. Create an Amazon EventBridge rule to run a Lambda function when reports are requested.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Run the program in Amazon Elastic Container Service (Amazon ECS). Schedule Amazon ECS to run the program when reports are requested.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Run the program by using Amazon EC2 Spot Instances. Create an Amazon EventBndge rule to start the EC2 instances when reports are requested. Run the EC2 instances continuously during the last week of each month.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 794 discussion",
      "discusstion": [
        {
          "id": 1141914,
          "date": "Tue 06 Feb 2024 09:04",
          "username": "Andy_09",
          "content": "Option B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>can lambda host the \\\"custom report building program\\\" ?</li><li>not sure because it says that the program producues several reports , and each takes less than 10 min. i am voting for option A</li><li>Lambda takes duration--&gt; 15 minutes</li><li>each lambda triggering produces a report in less than 10 mins.</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1303820,
          "date": "Mon 28 Oct 2024 05:45",
          "username": "LuongTo",
          "content": "can lambda host the \\\"custom report building program\\\" ?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1153187,
          "date": "Sun 18 Feb 2024 11:17",
          "username": "ogerber",
          "content": "not sure because it says that the program producues several reports , and each takes less than 10 min. i am voting for option A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Lambda takes duration--&gt; 15 minutes</li><li>each lambda triggering produces a report in less than 10 mins.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1169165,
          "date": "Sat 09 Mar 2024 00:57",
          "username": "1dd",
          "content": "Lambda takes duration--> 15 minutes",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1155878,
          "date": "Wed 21 Feb 2024 22:38",
          "username": "FZA24",
          "content": "each lambda triggering produces a report in less than 10 mins.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1331343,
          "date": "Wed 25 Dec 2024 05:46",
          "username": "LeonSauveterre",
          "content": "A - The task only runs for 10 minutes per report. Why would you need an EC2 instance?<br>B - No infrastructure to manage. Love it.<br>C - Works, but cost more than B and is more complex to set up than B.<br>D - More cost-effective than A, but spot instances can be interrupted, probably causing delays in report generation.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1292138,
          "date": "Wed 02 Oct 2024 00:34",
          "username": "agbor_tambe",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1238896,
          "date": "Fri 28 Jun 2024 22:15",
          "username": "EdricHoang",
          "content": "\\\"The program takes less than 10 minutes to produce each report. The company rarely uses the program to generate reports outside of the last week of each month The company wants to generate reports in the least amount of time when the reports are requested.\\\"<br>I go for B because of this",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1230021,
          "date": "Thu 13 Jun 2024 20:05",
          "username": "Scheldon",
          "content": "AnswerC<br><br>Option A and D are saying abount Running the EC2 instances countinously during the last week of each month which is not necessery from my understanding and will be not so cheap.<br><br>Option B - 10min per report and we have couple of reports. So it looks like program is running for at least 20 min so in theory Lambda is not useful here<br><br>Option C - ECS is allowing us to run Fargate which will allow to run program for more then 15 min, hence all reports which program is preparing should be created. I'm not sure but I think ECS API is allowing to run task on demand/request.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It's \\\"15 minutes per execution\\\", which is enough to produce a report and be ready for another invocation.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1286184,
          "date": "Thu 19 Sep 2024 08:33",
          "username": "MatAlves",
          "content": "It's \\\"15 minutes per execution\\\", which is enough to produce a report and be ready for another invocation.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1166751,
          "date": "Tue 05 Mar 2024 22:07",
          "username": "asdfcdsxdfc",
          "content": "B is corre ct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1153704,
          "date": "Mon 19 Feb 2024 05:19",
          "username": "NayeraB",
          "content": "B..maybe?",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#795",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a tightly coupled high performance computing (HPC) environment in the AWS Cloud. The company needs to include features that will optimize the HPC environment for networking and storage.<br><br>Which combination of solutions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#795",
          "answers": [
            {
              "choice": "<p>Create an accelerator in AWS Global Accelerator. Configure custom routing for the accelerator.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon FSx for Lustre file system. Configure the file system with scratch storage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon CloudFront distribution. Configure the viewer protocol policy to be HTTP and HTTPS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Launch Amazon EC2 instances. Attach an Elastic Fabric Adapter (EFA) to the instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Elastic Beanstalk deployment to manage the environment.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 795 discussion",
      "discusstion": [
        {
          "id": 1141916,
          "date": "Tue 06 Aug 2024 08:06",
          "username": "Andy_09",
          "content": "Options BD",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1331347,
          "date": "Wed 25 Dec 2024 05:55",
          "username": "LeonSauveterre",
          "content": "A - Global Accelerator is not designed for tightly coupled HPC environments. It focuses on improving performance for geographically distributed users, not for low-latency intra-cluster communication.<br>B - FSx for Lustre is specifically designed for HPC workloads and integrates well with Amazon S3 for high-throughput and low-latency access to data.<br>C - CloudFront does not address the low-latency, high-bandwidth networking or storage requirements of tightly coupled HPC environments.<br>D - EFA is a network interface that provides low-latency, high-throughput connectivity for tightly coupled HPC workloads, such as those using MPI (Message Passing Interface).<br>E - Elastic Beanstalk is used for deploying and managing web applications and services, which has nothing to do with HPC.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1169049,
          "date": "Sun 08 Sep 2024 19:30",
          "username": "seetpt",
          "content": "BD looks right",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1166752,
          "date": "Thu 05 Sep 2024 21:10",
          "username": "asdfcdsxdfc",
          "content": "Elastic Fabric Adapter (EFA)<br>- Improved ENA for HPC, only works for Linux<br>- Great for inter-node communications, tightly coupled workloads<br>- Leverages Message Passing Interface (MPI) standard<br>- Bypasses the underlying Linux OS to provide low-latency, reliable transport",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#796",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs a solution to prevent photos with unwanted content from being uploaded to the company's web application. The solution must not involve training a machine learning (ML) model.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#796",
          "answers": [
            {
              "choice": "<p>Create and deploy a model by using Amazon SageMaker Autopilot. Create a real-time endpoint that the web application invokes when new photos are uploaded.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function that uses Amazon Rekognition to detect unwanted content. Create a Lambda function URL that the web application invokes when new photos are uploaded.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon CloudFront function that uses Amazon Comprehend to detect unwanted content. Associate the function with the web application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function that uses Amazon Rekognition Video to detect unwanted content. Create a Lambda function URL that the web application invokes when new photos are uploaded.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 796 discussion",
      "discusstion": [
        {
          "id": 1141919,
          "date": "Tue 06 Aug 2024 08:11",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1166642,
          "date": "Thu 05 Sep 2024 17:23",
          "username": "HarryLopez",
          "content": "Rekognition: for image and video analysis<br>Comprehend: natural language processing model for uncovering insights and connections in text<br>Sagemaker Autopilot: feature set that simplifies and accelerates and automates the various stages of the machine learning workflow",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1331353,
          "date": "Wed 25 Dec 2024 06:13",
          "username": "LeonSauveterre",
          "content": "You've made it this far, and you're all gonna make it.<br><br>For your quick reference:<br>Vision and Image Processing<br>1. Amazon Rekognition: Detects objects, scenes, text, faces, and activities in images/videos.<br>2. Amazon Textract: Extracts text, tables, and forms from scanned documents.<br><br>Speech and Language<br>1. Amazon Polly: Converts text to lifelike speech.<br>2. Amazon Transcribe: Converts speech to text for audio files.<br>3. Amazon Translate: Yeah, translate.<br>4. Amazon Comprehend: Extracts insights like sentiment, entities, and key phrases from text.<br><br>Machine Learning Development<br>1. Amazon SageMaker: Comprehensive ML platform for building, training, and deploying models.<br>2. Amazon SageMaker Autopilot: Automatically builds, trains, and tunes ML models, basically simplified model creation for non-experts.<br>3. Amazon SageMaker JumpStart: Provides pre-built ML models and solutions for quick deployment.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Chatbots and Conversations<br>1. Amazon Lex: Builds conversational AI (chatbots) using speech and text.<br>2. Amazon Kendra: Intelligent search service for documents and FAQs.<br><br>Personalization and Forecasting<br>1. Amazon Personalize: Provides personalized recommendations using ML.<br>2. Amazon Forecast: Time-series forecasting for demand, sales, and resource planning.<br><br>Data Insights<br>1. Amazon Fraud Detector: Detects fraudulent activity using ML models.<br>2. Amazon Lookout for Metrics: Detects anomalies in metrics automatically.<br>3. Amazon Lookout for Vision: Detects manufacturing defects in images.<br><br>Robotics and Edge AI<br>1. AWS DeepRacer: Provides a platform for learning reinforcement learning using autonomous racing.<br>2. AWS Panorama: Adds computer vision to on-premises cameras.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1331355,
          "date": "Wed 25 Dec 2024 06:13",
          "username": "LeonSauveterre",
          "content": "Chatbots and Conversations<br>1. Amazon Lex: Builds conversational AI (chatbots) using speech and text.<br>2. Amazon Kendra: Intelligent search service for documents and FAQs.<br><br>Personalization and Forecasting<br>1. Amazon Personalize: Provides personalized recommendations using ML.<br>2. Amazon Forecast: Time-series forecasting for demand, sales, and resource planning.<br><br>Data Insights<br>1. Amazon Fraud Detector: Detects fraudulent activity using ML models.<br>2. Amazon Lookout for Metrics: Detects anomalies in metrics automatically.<br>3. Amazon Lookout for Vision: Detects manufacturing defects in images.<br><br>Robotics and Edge AI<br>1. AWS DeepRacer: Provides a platform for learning reinforcement learning using autonomous racing.<br>2. AWS Panorama: Adds computer vision to on-premises cameras.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1153705,
          "date": "Mon 19 Aug 2024 04:29",
          "username": "NayeraB",
          "content": "B is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#797",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS to run its ecommerce platform. The platform is critical to the company's operations and has a high volume of traffic and transactions. The company configures a multi-factor authentication (MFA) device to secure its AWS account root user credentials. The company wants to ensure that it will not lose access to the root user account if the MFA device is lost.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#797",
          "answers": [
            {
              "choice": "<p>Set up a backup administrator account that the company can use to log in if the company loses the MFA device.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add multiple MFA devices for the root user account to handle the disaster scenario.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new administrator account when the company cannot access the root account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Attach the administrator policy to another IAM user when the company cannot access the root account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 797 discussion",
      "discusstion": [
        {
          "id": 1142810,
          "date": "Tue 06 Feb 2024 23:42",
          "username": "hajra313",
          "content": "B. Add multiple MFA devices for the root user account to handle the disaster scenario.<br><br>By adding multiple MFA devices for the root user account, the company ensures that it can still access the account even if one MFA device is lost. This approach provides a backup for authentication, addressing the concern of losing access to the root user account if the MFA device is lost.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html</li></ul>",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 1212474,
          "date": "Thu 16 May 2024 16:55",
          "username": "Tatai2015",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1230027,
          "date": "Thu 13 Jun 2024 20:12",
          "username": "Scheldon",
          "content": "AnswerB<br><br>Because a root user can perform privileged actions, it's crucial to add MFA for the root user as a second authentication factor in addition to the email address and password as sign-in credentials. We strongly recommend enabling multiple MFA for your root user credentials to provide additional flexibility and resiliency in your security strategy. You can register up to eight MFA devices of any combination of the currently supported MFA types with your AWS account root user.<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html#ru-bp-mfa",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1166755,
          "date": "Tue 05 Mar 2024 22:16",
          "username": "asdfcdsxdfc",
          "content": "b looks correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1153706,
          "date": "Mon 19 Feb 2024 05:32",
          "username": "NayeraB",
          "content": "I'd go for B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1141921,
          "date": "Tue 06 Feb 2024 09:14",
          "username": "Andy_09",
          "content": "Option B",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#798",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A social media company is creating a rewards program website for its users. The company gives users points when users create and upload videos to the website. Users redeem their points for gifts or discounts from the company's affiliated partners. A unique ID identifies users. The partners refer to this ID to verify user eligibility for rewards.<br><br>The partners want to receive notification of user IDs through an HTTP endpoint when the company gives users points. Hundreds of vendors are interested in becoming affiliated partners every day. The company wants to design an architecture that gives the website the ability to add partners rapidly in a scalable way.<br><br>Which solution will meet these requirements with the LEAST implementation effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#798",
          "answers": [
            {
              "choice": "<p>Create an Amazon Timestream database to keep a list of affiliated partners. Implement an AWS Lambda function to read the list. Configure the Lambda function to send user IDs to each partner when the company gives users points.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Notification Service (Amazon SNS) topic. Choose an endpoint protocol. Subscribe the partners to the topic. Publish user IDs to the topic when the company gives users points.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Step Functions state machine. Create a task for every affiliated partner. Invoke the state machine with user IDs as input when the company gives users points.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a data stream in Amazon Kinesis Data Streams. Implement producer and consumer applications. Store a list of affiliated partners in the data stream. Send user IDs when the company gives users points.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 798 discussion",
      "discusstion": [
        {
          "id": 1143365,
          "date": "Wed 07 Feb 2024 14:51",
          "username": "kempes",
          "content": "SNS is designed for precisely this kind of use case. It allows you to publish messages to a topic, which can then be delivered to multiple subscribers. Partners can subscribe to the SNS topic using an HTTP endpoint as the protocol, which meets the requirement to notify partners via an HTTP endpoint. This approach is highly scalable and requires the least implementation effort because it leverages managed services without the need for custom logic to manage subscriptions or deliver notifications.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1142807,
          "date": "Tue 06 Feb 2024 23:40",
          "username": "hajra313",
          "content": "Option A involves creating an Amazon Timestream database to store affiliated partners and implementing an AWS Lambda function to read the list and send user IDs to each partner. While this approach can work, it involves more implementation effort than the Amazon SNS solution. It requires setting up and managing a database, as well as configuring the Lambda function to send notifications to partners. The Amazon SNS solution provides a simpler and more scalable approach for rapidly adding partners and notifying them when users receive points. so answer is B",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1230029,
          "date": "Thu 13 Jun 2024 20:17",
          "username": "Scheldon",
          "content": "AnswerB<br><br>Sending Notification to multiple subscribersSNS<br><br>Amazon Simple Notification Service (Amazon SNS) is a managed service that provides message delivery from publishers to subscribers (also known as producers and consumers). Publishers communicate asynchronously with subscribers by sending messages to a topic, which is a logical access point and communication channel. Clients can subscribe to the SNS topic and receive published messages using a supported endpoint type, such as Amazon Data Firehose, Amazon SQS, AWS Lambda, HTTP, email, mobile push notifications, and mobile text messages (SMS).<br>https://docs.aws.amazon.com/sns/latest/dg/welcome.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1153708,
          "date": "Mon 19 Feb 2024 05:40",
          "username": "NayeraB",
          "content": "This is a perfect SNS use case",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1145921,
          "date": "Sat 10 Feb 2024 05:36",
          "username": "jjcode",
          "content": "The answer is B, create an SNS topic one subscriptions you can make is HTTP, This completely addresses the question objective.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141922,
          "date": "Tue 06 Feb 2024 09:16",
          "username": "Andy_09",
          "content": "Option A",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#799",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to extract the names of ingredients from recipe records that are stored as text files in an Amazon S3 bucket. A web application will use the ingredient names to query an Amazon DynamoDB table and determine a nutrition score.<br><br>The application can handle non-food records and errors. The company does not have any employees who have machine learning knowledge to develop this solution.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#799",
          "answers": [
            {
              "choice": "<p>Use S3 Event Notifications to invoke an AWS Lambda function when PutObject requests occur. Program the Lambda function to analyze the object and extract the ingredient names by using Amazon Comprehend. Store the Amazon Comprehend output in the DynamoDB table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon EventBridge rule to invoke an AWS Lambda function when PutObject requests occur. Program the Lambda function to analyze the object by using Amazon Forecast to extract the ingredient names. Store the Forecast output in the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Event Notifications to invoke an AWS Lambda function when PutObject requests occur. Use Amazon Polly to create audio recordings of the recipe records. Save the audio files in the S3 bucket. Use Amazon Simple Notification Service (Amazon SNS) to send a URL as a message to employees. Instruct the employees to listen to the audio files and calculate the nutrition score. Store the ingredient names in the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon EventBridge rule to invoke an AWS Lambda function when a PutObject request occurs. Program the Lambda function to analyze the object and extract the ingredient names by using Amazon SageMaker. Store the inference output from the SageMaker endpoint in the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 799 discussion",
      "discusstion": [
        {
          "id": 1169054,
          "date": "Fri 08 Mar 2024 20:34",
          "username": "seetpt",
          "content": "A correct",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1311619,
          "date": "Wed 13 Nov 2024 21:13",
          "username": "Danilus",
          "content": "Key: Most cost-effective solution<br>Key: Extract the names of ingredients from recipe records<br>Key: The company does not have any employees with machine learning knowledge<br>Not B because Forecast is used for making predictions in time series, not for extracting text or ingredients.<br>Not C because it would be too expensive and involve too much operational overhead.<br>Not D because SageMaker is designed for creating custom machine learning models, and the company lacks employees with machine learning knowledge.<br><br>Conclusion: The answer is A because Comprehend is used for natural language processing (NLP), which in this case can extract ingredient names from the recipes effectively.<br><br>so the answer is Abecause comprehend is used for nlp (natular languages processing) which isin this case use for to extract the names of the recipes",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1230031,
          "date": "Thu 13 Jun 2024 20:23",
          "username": "Scheldon",
          "content": "AnswerA<br><br>Amazon Comprehend uses natural language processing (NLP) to extract insights about the content of documents. It develops insights by recognizing the entities, key phrases, language, sentiments, and other common elements in a document. Use Amazon Comprehend to create new products based on understanding the structure of documents. For example, using Amazon Comprehend you can search social networking feeds for mentions of products or scan an entire document repository for key phrases.<br>https://docs.aws.amazon.com/comprehend/latest/dg/what-is.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1225110,
          "date": "Thu 06 Jun 2024 04:13",
          "username": "fae3297",
          "content": "A seems right<br><br>B. Forecast is time-series<br>C. Using Polly to create audio recordings just to make your employees listen to them seems inefficient to say the least<br>D. Question asks for no ML. SageMakerML",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1168671,
          "date": "Fri 08 Mar 2024 10:02",
          "username": "seetpt",
          "content": "A is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1166764,
          "date": "Tue 05 Mar 2024 22:24",
          "username": "asdfcdsxdfc",
          "content": "shouldn't it be A?",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#800",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to create an AWS Lambda function that will run in a VPC in the company's primary AWS account. The Lambda function needs to access files that the company stores in an Amazon Elastic File System (Amazon EFS) file system. The EFS file system is located in a secondary AWS account. As the company adds files to the file system, the solution must scale to meet the demand.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#800",
          "answers": [
            {
              "choice": "<p>Create a new EFS file system in the primary account. Use AWS DataSync to copy the contents of the original EFS file system to the new EFS file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a VPC peering connection between the VPCs that are in the primary account and the secondary account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a second Lambda function in the secondary account that has a mount that is configured for the file system. Use the primary account's Lambda function to invoke the secondary account's Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Move the contents of the file system to a Lambda layer. Configure the Lambda layer's permissions to allow the company's secondary account to use the Lambda layer.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 800 discussion",
      "discusstion": [
        {
          "id": 1170632,
          "date": "Sun 10 Mar 2024 22:25",
          "username": "lenotc",
          "content": "B -> VPC peering allows the Lambda access secondary account securely and efficiently<br>A -> redundancy<br>C -> additional complexity<br>D -> sharing code libraries",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1331385,
          "date": "Wed 25 Dec 2024 07:07",
          "username": "LeonSauveterre",
          "content": "A - Duplicating the EFS file system leads to unnecessary storage costs and additional complexity.<br>B - VPC peering connection allows seamless access without additional manual scaling.<br>C - Well... I don't know, but you could've directly enabled access to the EFS file system. Why make it even more complex?<br>D - Lambda layers are intended for shared libraries or dependencies. You would be crazy to store large amounts of data there.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1230035,
          "date": "Thu 13 Jun 2024 20:28",
          "username": "Scheldon",
          "content": "AnswerB<br><br>You can configure a function to mount an Amazon EFS file system in another AWS account. Before you mount the file system, you must ensure the following:<br>VPC peering must be configured, and appropriate routes must be added to the route tables in each VPC.<br>.<br>.<br>.<br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem-cross-account.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1223626,
          "date": "Mon 03 Jun 2024 16:07",
          "username": "Nm55569",
          "content": "https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html#configuration-filesystem-cross-account",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1170549,
          "date": "Sun 10 Mar 2024 19:49",
          "username": "osmk",
          "content": "https://docs.aws.amazon.com/efs/latest/ug/efs-different-vpc.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1166767,
          "date": "Tue 05 Mar 2024 22:27",
          "username": "asdfcdsxdfc",
          "content": "Shouldn't it be B?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I thinks AWS DataSync less costly</li><li>setting up a peering connection is free. same for data transfer in the same AZ. data sync at the end of the day cost $$$ to move data.</li><li>When you will SyncData you need to have secondary storage for which you need to pay so it is not cheap solution.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1169184,
          "date": "Sat 09 Mar 2024 01:47",
          "username": "1dd",
          "content": "I thinks AWS DataSync less costly<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>setting up a peering connection is free. same for data transfer in the same AZ. data sync at the end of the day cost $$$ to move data.</li><li>When you will SyncData you need to have secondary storage for which you need to pay so it is not cheap solution.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1174718,
          "date": "Sat 16 Mar 2024 04:51",
          "username": "[Removed]",
          "content": "setting up a peering connection is free. same for data transfer in the same AZ. data sync at the end of the day cost $$$ to move data.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>When you will SyncData you need to have secondary storage for which you need to pay so it is not cheap solution.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1230033,
          "date": "Thu 13 Jun 2024 20:26",
          "username": "Scheldon",
          "content": "When you will SyncData you need to have secondary storage for which you need to pay so it is not cheap solution.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    }
  ]
}