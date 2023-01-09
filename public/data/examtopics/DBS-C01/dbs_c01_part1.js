var DBS_C01_Part1 = 
{
    "msg": "Quiz Questions",
    "data": [
      {
        "question_id": "#1",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has deployed an e-commerce web application in a new AWS account. An Amazon RDS for MySQL Multi-AZ DB instance is part of this deployment with a database-1.xxxxxxxxxxxx.us-east-1.rds.amazonaws.com endpoint listening on port 3306. The company's Database Specialist is able to log in to MySQL and run queries from the bastion host using these details.<br>When users try to utilize the application hosted in the AWS account, they are presented with a generic error message. The application servers are logging a `could not connect to server: Connection times out` error message to Amazon CloudWatch Logs.<br>What is the cause of this error?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#1",
            "answers": [
              {
                "choice": "<p>A. The user name and password the application is using are incorrect.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The security group assigned to the application servers does not have the necessary rules to allow inbound connections from the DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The security group assigned to the DB instance does not have the necessary rules to allow inbound connections from the application servers.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. The user name and password are correct, but the user is not authorized to use the DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 1 discussion",
        "discusstion": [
          {
            "id": 434397,
            "date": "Sun 07 Nov 2021 01:11",
            "username": "aws4myself",
            "content": "Correct Answer: C",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 594154,
            "date": "Fri 29 Apr 2022 03:23",
            "username": "novice_expert",
            "content": "DB needs to allow inbound",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 587221,
            "date": "Sun 17 Apr 2022 14:46",
            "username": "megadba",
            "content": "Correct Answer: C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 432509,
            "date": "Sat 06 Nov 2021 10:23",
            "username": "guru_jiguru_jilihze",
            "content": "Anyone passed \\\"AWS Certified Database - Specialty\\\" exam recently, could you please share your experience of actual exam??<br>How many Questions were came from examtopics Q set of 145 in real exam?<br><br>Your comments will be highly appreciated.. Thanks..I gave exam today. Only 40 questions came from here out of 65.Guru - 40 questions from out of 112 or 149? I can able to access only 112. Can you possible to share the dump if you have 149 questions.",
            "upvote_count": "122",
            "selected_answers": ""
          },
          {
            "id": 444715,
            "date": "Sun 07 Nov 2021 12:46",
            "username": "guru_jilihze",
            "content": "I gave exam today. Only 40 questions came from here out of 65.Guru - 40 questions from out of 112 or 149? I can able to access only 112. Can you possible to share the dump if you have 149 questions.",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 487791,
            "date": "Sat 27 Nov 2021 03:35",
            "username": "lihze",
            "content": "Guru - 40 questions from out of 112 or 149? I can able to access only 112. Can you possible to share the dump if you have 149 questions.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 432434,
            "date": "Sat 06 Nov 2021 05:44",
            "username": "aws4myselfguru_ji",
            "content": "Basically, it is a connection timeout error, so A, D can be deleted.<br>B is wrong, because if it has a problem in SG rules, it should affect at outbound not inbound,<br>Hence C is correct, which is the inbound rule for DB instance SG.Are you planning for exam?<br>We can share study material, it would be beneficial for both. You can email me on \\\"awsdbguru at gmail\\\"",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 434019,
            "date": "Sat 06 Nov 2021 17:01",
            "username": "guru_ji",
            "content": "Are you planning for exam?<br>We can share study material, it would be beneficial for both. You can email me on \\\"awsdbguru at gmail\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 428738,
            "date": "Fri 05 Nov 2021 03:44",
            "username": "guru_ji",
            "content": "Answer is C<br>Anyone preparing for DB Speciality and want to do group study with us, comment below with email",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 427549,
            "date": "Fri 05 Nov 2021 01:48",
            "username": "anandbabu",
            "content": "its C for me",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 425796,
            "date": "Wed 03 Nov 2021 13:49",
            "username": "guru_ji",
            "content": "C >> Correct Answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 414627,
            "date": "Sun 31 Oct 2021 19:31",
            "username": "Dr_Kiko",
            "content": "It's C.  I actually had to configure SG on my MYSQL instance to allow me connect from home PC with a SQL client :)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 344754,
            "date": "Wed 27 Oct 2021 20:32",
            "username": "db_interestZhongkaidb_interest",
            "content": "A company has an application that uses an Amazon DynamoDB table to store user dat<br>a. Every morning, a single-threaded process calls the DynamoDB API Scan operation to scan the entire table and generate a critical start-of-day report for management. A successful marketing campaign recently doubled the number of items in the table, and now the process takes too long to run and the report is not generated in time. A database specialist needs to improve the performance of the process. The database specialist notes that, when the process is running, 15% of the table=E2=80=99s provisioned read capacity units (RCUs) are being used.<br><br>What should the database specialist do?A.  Enable auto scaling for the DynamoDB table.B.  Use four threads and parallel DynamoDB API Scan operations.C.  Double the table=E2=80=99s provisioned RCUs.D.  Set the Limit and Offset parameters before every call to the API.Looks like BYep, B looks right. Since autoscaling would increase the WCU/RCU which is not needed.",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 355111,
            "date": "Thu 28 Oct 2021 20:20",
            "username": "Zhongkaidb_interest",
            "content": "Looks like BYep, B looks right. Since autoscaling would increase the WCU/RCU which is not needed.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 358061,
            "date": "Sun 31 Oct 2021 00:45",
            "username": "db_interest",
            "content": "Yep, B looks right. Since autoscaling would increase the WCU/RCU which is not needed.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 344719,
            "date": "Wed 27 Oct 2021 14:38",
            "username": "db_interestZhongkaich321",
            "content": "A company is running an on-premises application comprised of a web tier, an application tier, and a<br>MySQL database tier. The database is used primarily during business hours with random activity peaks<br>throughout the day. A database specialist needs to improve the availability and reduce the cost of the<br>MySQL database tier as part of the company=E2=80=99s migration to AWS.<br>Which MySQL database option would meet these requirements?A.  Amazon RDS for MySQL with Multi-AZB.  Amazon Aurora Serverless MySQL clusterC.  Amazon Aurora MySQL clusterD.  Amazon RDS for MySQL with read replicarandom activity peaks -> Aurora Serverless -> BShould be B",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 355112,
            "date": "Fri 29 Oct 2021 12:34",
            "username": "Zhongkai",
            "content": "random activity peaks -> Aurora Serverless -> B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 509712,
            "date": "Sun 26 Dec 2021 17:51",
            "username": "ch321",
            "content": "Should be B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 344712,
            "date": "Thu 21 Oct 2021 22:44",
            "username": "agrawalachin",
            "content": "A company is running an on-premises application comprised of a web tier, an application tier, and a<br>MySQL database tier. The database is used primarily during business hours with random activity peaks<br>throughout the day. A database specialist needs to improve the availability and reduce the cost of the<br>MySQL database tier as part of the company=E2=80=99s migration to AWS.<br>Which MySQL database option would meet these requirements?A.  Amazon RDS for MySQL with Multi-AZB.  Amazon Aurora Serverless MySQL clusterC.  Amazon Aurora MySQL clusterD.  Amazon RDS for MySQL with read replica",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 342919,
            "date": "Thu 21 Oct 2021 21:53",
            "username": "agrawalachindb_interestdb_interestZhongkai",
            "content": "A database specialist needs to review and optimize an Amazon DynamoDB table that is experiencing performance issues. A thorough investigation by the database specialist reveals that the partition key is causing hot partitions, so a new partition key is created. The database specialist must effectively apply this new partition key to all existing and new data.<br>How can this solution be implemented?A.  Use Amazon EMR to export the data from the current DynamoDB table to Amazon S3. Then use Amazon EMR again to import the data from Amazon S3 into a new DynamoDB table with the new partition key.B.  Use AWS DMS to copy the data from the current DynamoDB table to Amazon S3. Then import the DynamoDB table to create a new DynamoDB table with the new partition key.C.  Use the AWS CLI to update the DynamoDB table and modify the partition key.D.  Use the AWS CLI to back up the DynamoDB table. Then use the restore-table-from-backup command and modify the partition key.B.  Since requirement is of handling random activity peaksIgnore the above answer. It's for another question :)DDB cannot change Partition key of a table -> C/D wrong.<br>DMS cannot choose DDB as source -> B wrong.<br>So A should be the correct one although it appears to need a lot of efforts.",
            "upvote_count": "1113",
            "selected_answers": ""
          },
          {
            "id": 344717,
            "date": "Sat 23 Oct 2021 20:43",
            "username": "db_interestdb_interest",
            "content": "B.  Since requirement is of handling random activity peaksIgnore the above answer. It's for another question :)",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 344718,
            "date": "Tue 26 Oct 2021 05:12",
            "username": "db_interest",
            "content": "Ignore the above answer. It's for another question :)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 355118,
            "date": "Fri 29 Oct 2021 16:19",
            "username": "Zhongkai",
            "content": "DDB cannot change Partition key of a table -> C/D wrong.<br>DMS cannot choose DDB as source -> B wrong.<br>So A should be the correct one although it appears to need a lot of efforts.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 314103,
            "date": "Wed 20 Oct 2021 20:16",
            "username": "LMax",
            "content": "It's C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 297071,
            "date": "Sun 17 Oct 2021 12:19",
            "username": "RimaAwskalyan_krishna742020ozan11Zhongkai",
            "content": "A company has a heterogeneous six-node production Amazon Aurora DB cluster that handles online transaction processing (OLTP) for the core business and OLAP reports for the human resources department. To match compute resources to the use case, the company has decided to have the reporting workload for the human resources department be directed to two small nodes in the Aurora DB cluster, while every other workload goes to four large nodes in the same DB cluster.<br>Which option would ensure that the correct nodes are always available for the appropriate workload while meeting these requirements?<br>A.  Use the writer endpoint for OLTP and the reader endpoint for the OLAP reporting workload.B.  Use automatic scaling for the Aurora Replica to have the appropriate number of replicas for the desired workload.C.  Create additional readers to cater to the different scenarios.D.  Use custom endpoints to satisfy the different workloads.Hard to decide between A & D. . Leaning more towards Ait's D. only custom endpoints could let you choose a specific node. so I choose D",
            "upvote_count": "1121",
            "selected_answers": ""
          },
          {
            "id": 300596,
            "date": "Tue 19 Oct 2021 16:01",
            "username": "kalyan_krishna742020",
            "content": "Hard to decide between A & D. . Leaning more towards A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 317822,
            "date": "Thu 21 Oct 2021 14:36",
            "username": "ozan11",
            "content": "it's D. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 355119,
            "date": "Sat 30 Oct 2021 01:00",
            "username": "Zhongkai",
            "content": "only custom endpoints could let you choose a specific node. so I choose D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 297069,
            "date": "Sat 16 Oct 2021 17:32",
            "username": "RimaAwskalyan_krishna742020kalyan_krishna742020agrawalachinZhongkaidb_interestjove",
            "content": "A database specialist manages a critical Amazon RDS for MySQL DB instance for a company. The data stored daily could vary from .01% to 10% of the current database size. The database specialist needs to ensure that the DB instance storage grows as needed.<br>What is the MOST operationally efficient and cost-effective solution?<br>A.  Configure RDS Storage Auto Scaling.B.  Configure RDS instance Auto Scaling.C.  Modify the DB instance allocated storage to meet the forecasted requirements.D.  Monitor the Amazon CloudWatch FreeStorageSpace metric daily and add storage as required.Ans: C.  Since we already know the expected size.changing it to Answer B after reviewing the question - \\\"storage grows as needed\\\"You mean A?A - https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.AutoscalingA is correct since its efficient and cost-effective. We dont know if the variance would be 0.01 or 10%It is A",
            "upvote_count": "1121311",
            "selected_answers": ""
          },
          {
            "id": 300546,
            "date": "Tue 19 Oct 2021 13:15",
            "username": "kalyan_krishna742020kalyan_krishna742020agrawalachin",
            "content": "Ans: C.  Since we already know the expected size.changing it to Answer B after reviewing the question - \\\"storage grows as needed\\\"You mean A?",
            "upvote_count": "121",
            "selected_answers": ""
          },
          {
            "id": 300958,
            "date": "Wed 20 Oct 2021 08:38",
            "username": "kalyan_krishna742020agrawalachin",
            "content": "changing it to Answer B after reviewing the question - \\\"storage grows as needed\\\"You mean A?",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 342891,
            "date": "Thu 21 Oct 2021 14:52",
            "username": "agrawalachin",
            "content": "You mean A?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 355120,
            "date": "Sat 30 Oct 2021 09:59",
            "username": "Zhongkaidb_interest",
            "content": "A - https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.AutoscalingA is correct since its efficient and cost-effective. We dont know if the variance would be 0.01 or 10%",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 359009,
            "date": "Sun 31 Oct 2021 16:27",
            "username": "db_interest",
            "content": "A is correct since its efficient and cost-effective. We dont know if the variance would be 0.01 or 10%",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 508105,
            "date": "Thu 23 Dec 2021 20:28",
            "username": "jove",
            "content": "It is A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 297067,
            "date": "Sat 16 Oct 2021 09:21",
            "username": "RimaAwsWindyWindyZhongkai",
            "content": "A company's database specialist disabled TLS on an Amazon DocumentDB cluster to perform benchmarking tests. A few days after this change was implemented, a database specialist trainee accidentally deleted multiple tables. The database specialist restored the database from available snapshots. An hour after restoring the cluster. the database specialist is still unable to connect to the new cluster endpoint. What should the database specialist do to connect to the new. restored Amazon DocumentDB cluster?A.  Change the restored cluster's parameter group to the original cluster's custom parameter group.B.  Change the restored cluster's parameter group to the Amazon DocumentDB default parameter group.C.  Configure the interface VPC endpoint and associate the new Amazon DocumentDB cluster.D.  Run the synclnstances command in AWS DataSync.What is the answer?Answer is A.  I just figured it out.Looks like TLS is not enabled by default - https://docs.aws.amazon.com/documentdb/latest/developerguide/security.encryption.ssl.html<br>so we need to enable it manually. -A",
            "upvote_count": "1111",
            "selected_answers": ""
          },
          {
            "id": 299835,
            "date": "Mon 18 Oct 2021 18:49",
            "username": "WindyWindy",
            "content": "What is the answer?Answer is A.  I just figured it out.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 299839,
            "date": "Tue 19 Oct 2021 01:08",
            "username": "Windy",
            "content": "Answer is A.  I just figured it out.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 355145,
            "date": "Sat 30 Oct 2021 12:24",
            "username": "Zhongkai",
            "content": "Looks like TLS is not enabled by default - https://docs.aws.amazon.com/documentdb/latest/developerguide/security.encryption.ssl.html<br>so we need to enable it manually. -A",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#2",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An AWS CloudFormation stack that included an Amazon RDS DB instance was accidentally deleted and recent data was lost. A Database Specialist needs to add<br>RDS settings to the CloudFormation template to reduce the chance of accidental instance data loss in the future.<br>Which settings will meet this requirement? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ADF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#2",
            "answers": [
              {
                "choice": "<p>A. Set DeletionProtection to True<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set MultiAZ to True<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set TerminationProtection to True<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set DeleteAutomatedBackups to False<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Set DeletionPolicy to Delete<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Set DeletionPolicy to Retain<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 2 discussion",
        "discusstion": [
          {
            "id": 507325,
            "date": "Wed 22 Dec 2021 20:24",
            "username": "jove",
            "content": "A - https://aws.amazon.com/about-aws/whats-new/2018/09/amazon-rds-now-provides-database-deletion-protection/<br>D - https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html<br>F - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html",
            "upvote_count": "12",
            "selected_answers": "Selected Answer: ADF"
          },
          {
            "id": 702288,
            "date": "Sun 23 Oct 2022 17:38",
            "username": "sirfans",
            "content": "ADF is the right one",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ADF"
          },
          {
            "id": 675432,
            "date": "Wed 21 Sep 2022 20:32",
            "username": "Luke97",
            "content": "TerminationProtection is a delete protection on CloudFormation instead of RDS. So ADF are correct answers.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 627653,
            "date": "Wed 06 Jul 2022 02:49",
            "username": "sachin",
            "content": "ADF is right . Deletion Policy ;- retain in for any resource attached to RDS .",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 622822,
            "date": "Sun 26 Jun 2022 23:27",
            "username": "Balki",
            "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ADF"
          },
          {
            "id": 595107,
            "date": "Sat 30 Apr 2022 17:08",
            "username": "novice_expert",
            "content": "A.  Set DeletionProtection to True<br>x B.  Set MultiAZ to True<br>x C.  Set TerminationProtection to True (it is for stack deletion)D.  Set DeleteAutomatedBackups to False<br>x E.  Set DeletionPolicy to DeleteF.  Set DeletionPolicy to Retain",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ADF"
          },
          {
            "id": 561617,
            "date": "Sat 05 Mar 2022 21:07",
            "username": "RotterDam",
            "content": "Very frequently asked question usedin different question banks.<br>Set DeletionProtection of the Stack<br>Prevent Automated Backups from being deleted<br>Set deletion policy to Retain (default is snapshot)",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: ADF"
          },
          {
            "id": 540459,
            "date": "Fri 04 Feb 2022 15:06",
            "username": "jeyp12novice_expert",
            "content": "Are we not applying this to stack so should be C,D,F. .not to RDS..there is no deletion protection at stack levelADF<br>https://aws.amazon.com/about-aws/whats-new/2017/09/aws-cloudformation-provides-stack-termination-protection/#:~:textAWS%20CloudFormation%20now%20allows%20you,its%20status%2C%20will%20remain%20unchanged.",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: CDF"
          },
          {
            "id": 595106,
            "date": "Sat 30 Apr 2022 17:07",
            "username": "novice_expert",
            "content": "ADF<br>https://aws.amazon.com/about-aws/whats-new/2017/09/aws-cloudformation-provides-stack-termination-protection/#:~:textAWS%20CloudFormation%20now%20allows%20you,its%20status%2C%20will%20remain%20unchanged.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 520572,
            "date": "Mon 10 Jan 2022 02:30",
            "username": "szl0144",
            "content": "the answer is ADF",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 519862,
            "date": "Sun 09 Jan 2022 03:05",
            "username": "victornj",
            "content": "C, D & F",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497947,
            "date": "Thu 09 Dec 2021 18:52",
            "username": "2025flakytjove",
            "content": "ACF is the correct answer.<br>You needSet TerminationProtection to True for the RDS instanceRDS doesn't have TerminationProtection .. It has DeletionProtection. So, the correct options are A,D,F",
            "upvote_count": "23",
            "selected_answers": ""
          },
          {
            "id": 507323,
            "date": "Wed 22 Dec 2021 20:22",
            "username": "jove",
            "content": "RDS doesn't have TerminationProtection .. It has DeletionProtection. So, the correct options are A,D,F",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 496036,
            "date": "Tue 07 Dec 2021 14:14",
            "username": "GMartinelli",
            "content": "Option A, D, F<br><br>RDS doenst have termination protection, only deletion protection",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: ADF"
          }
        ]
      },
      {
        "question_id": "#3",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist is troubleshooting an application connection failure on an Amazon Aurora DB cluster with multiple Aurora Replicas that had been running with no issues for the past 2 months. The connection failure lasted for 5 minutes and corrected itself after that. The Database Specialist reviewed the Amazon<br>RDS events and determined a failover event occurred at that time. The failover process took around 15 seconds to complete.<br>What is the MOST likely cause of the 5-minute connection outage?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#3",
            "answers": [
              {
                "choice": "<p>A. After a database crash, Aurora needed to replay the redo log from the last database checkpoint<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The client-side application is caching the DNS data and its TTL is set too high<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. After failover, the Aurora DB cluster needs time to warm up before accepting client connections<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. There were no active Aurora Replicas in the Aurora DB cluster<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 3 discussion",
        "discusstion": [
          {
            "id": 131903,
            "date": "Thu 23 Sep 2021 04:33",
            "username": "jnassp1LMax",
            "content": "Answer: B<br>The question indicates failover has already taken place. The TTL is set too high.Agree, B.  TTL.",
            "upvote_count": "133",
            "selected_answers": ""
          },
          {
            "id": 314116,
            "date": "Mon 01 Nov 2021 21:16",
            "username": "LMax",
            "content": "Agree, B.  TTL.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 710079,
            "date": "Wed 02 Nov 2022 22:22",
            "username": "ftrimmer",
            "content": "B is corret",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 702292,
            "date": "Sun 23 Oct 2022 17:41",
            "username": "sirfans",
            "content": "B is the right one.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 677065,
            "date": "Fri 23 Sep 2022 13:39",
            "username": "niteshdba",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595290,
            "date": "Sat 30 Apr 2022 23:03",
            "username": "novice_expert",
            "content": "B.  The client-side application is caching the DNS data and its TTL is set too high<br><br>If your client application is caching the Domain Name Service (DNS) data of your DB instances, set a time-to-live (TTL) value of less than 30 seconds. Because the underlying IP address of a DB instance can change after a failover, caching the DNS data for an extended time can lead to connection failures if your application tries to connect to an IP address that no longer is in service.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 562582,
            "date": "Mon 07 Mar 2022 12:50",
            "username": "RotterDam",
            "content": "Got this question in my exam. (i cleared it). B is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 556461,
            "date": "Sat 26 Feb 2022 02:59",
            "username": "kped21",
            "content": "B<br>If your client application is caching the Domain Name Service (DNS) data of your DB instances, set a time-to-live (TTL) value of less than 30 seconds. Because the underlying IP address of a DB instance can change after a failover, caching the DNS data for an extended time can lead to connection failures if your application tries to connect to an IP address that no longer is in service.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 434478,
            "date": "Sat 06 Nov 2021 18:43",
            "username": "aws4myself",
            "content": "B is the correct answer, cache needs to be set for the lowest possible time.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 425804,
            "date": "Fri 05 Nov 2021 06:14",
            "username": "guru_ji",
            "content": "B >> Correct Answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 414736,
            "date": "Fri 05 Nov 2021 02:10",
            "username": "Dr_Kiko",
            "content": "B; in Stephane's course he talks about Aurora-Postgres settings to keep client caching at minimum. Since there were Read Replicas in place, Aurora-side failover is <1 min",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 361492,
            "date": "Thu 04 Nov 2021 23:41",
            "username": "Dip11jove",
            "content": "Why \\\"Reveal Solution\\\" answer is mostly wrong ?When i come to discussion i see the answers given by others which look correct/logical.Is \\\"Reveal solution\\\" not reliable ?\\\"Reveal solution\\\" is not reliable. Always read the discussion.",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 508292,
            "date": "Fri 24 Dec 2021 04:40",
            "username": "jove",
            "content": "\\\"Reveal solution\\\" is not reliable. Always read the discussion.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 296283,
            "date": "Sat 30 Oct 2021 09:23",
            "username": "myutran",
            "content": "Ans: B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 244839,
            "date": "Fri 29 Oct 2021 06:55",
            "username": "kilkar",
            "content": "Answer: B / TTL setting reduce failure connection time",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 205071,
            "date": "Thu 28 Oct 2021 08:12",
            "username": "pdboi3355",
            "content": "B -<br>Reducing DNS cache timeouts<br>When your application tries to establish a connection after a failover, the new Aurora PostgreSQL writer will be a previous reader, which can be found using the Aurora read only endpoint before DNS updates have fully propagated. Setting the java DNS TTL to a low value helps cycle between reader nodes on subsequent connection attempts.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 181090,
            "date": "Wed 20 Oct 2021 15:54",
            "username": "PeppaPig",
            "content": "B is correct for sure.<br>The question already mentioned the DB failover was happening automatically",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 171036,
            "date": "Mon 11 Oct 2021 04:22",
            "username": "goodh32",
            "content": "answer is B<br><br>Instant Crash Recovery<br>Amazon Aurora is designed to recover from a crash almost instantaneously and<br>continue to serve your application data. Unlike other databases, after a crash<br>Amazon Aurora does not need to replay the redo log from the last database<br>checkpoint before making the database available for operations.<br>Amazon Aurora performs crash recovery asynchronously on parallel threads, so<br>your database is open and available immediately after a crash. Because the<br>storage is organized in many small segments, each with its own redo log, the<br>underlying storage can replay redo records on demand in parallel and<br>asynchronously as part of a disk read after a crash. This approach reduces<br>database restart times to less than 60 seconds in most cases",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 138962,
            "date": "Sun 03 Oct 2021 15:10",
            "username": "BillyMadisonBillyMadisongoodh32",
            "content": "Is this why it might possibly be C<br><br>Q: If my database fails, what is my recovery path?<br><br>Amazon Aurora automatically maintains 6 copies of your data across 3 Availability Zones and will automatically attempt to recover your database in a healthy AZ with no data loss. In the unlikely event your data is unavailable within Amazon Aurora storage, you can restore from a DB Snapshot or perform a point-in-time restore operation to a new instance. Note that the latest restorable time for a point-in-time restore operation can be up to 5 minutes in the past.<br>https://aws.amazon.com/rds/aurora/faqs/Q: How does Aurora improve recovery time after a database crash?<br>Unlike other databases, after a database crash Amazon Aurora does not need to replay the redo log from the last database checkpoint (typically 5 minutes) and confirm that all changes have been applied, before making the database available for operations. This reduces database restart times to less than 60 seconds in most cases. Amazon Aurora moves the buffer cache out of the database process and makes it available immediately at restart time. This prevents you from having to throttle access until the cache is repopulated to avoid brownouts.snapshot restore is NOT automatic. it is restore while the question is saying automatic crash failover.So, that means it was not an storage issue which in turn indicates no replica issue.",
            "upvote_count": "121",
            "selected_answers": ""
          },
          {
            "id": 138966,
            "date": "Mon 04 Oct 2021 09:25",
            "username": "BillyMadison",
            "content": "Q: How does Aurora improve recovery time after a database crash?<br>Unlike other databases, after a database crash Amazon Aurora does not need to replay the redo log from the last database checkpoint (typically 5 minutes) and confirm that all changes have been applied, before making the database available for operations. This reduces database restart times to less than 60 seconds in most cases. Amazon Aurora moves the buffer cache out of the database process and makes it available immediately at restart time. This prevents you from having to throttle access until the cache is repopulated to avoid brownouts.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 178190,
            "date": "Fri 15 Oct 2021 02:09",
            "username": "goodh32",
            "content": "snapshot restore is NOT automatic. it is restore while the question is saying automatic crash failover.So, that means it was not an storage issue which in turn indicates no replica issue.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#4",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is deploying a solution in Amazon Aurora by migrating from an on-premises system. The IT department has established an AWS Direct Connect link from the company's data center. The company's Database Specialist has selected the option to require SSL/TLS for connectivity to prevent plaintext data from being set over the network. The migration appears to be working successfully, and the data can be queried from a desktop machine.<br>Two Data Analysts have been asked to query and validate the data in the new Aurora DB cluster. Both Analysts are unable to connect to Aurora. Their user names and passwords have been verified as valid and the Database Specialist can connect to the DB cluster using their accounts. The Database Specialist also verified that the security group configuration allows network from all corporate IP addresses.<br>What should the Database Specialist do to correct the Data Analysts' inability to connect?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#4",
            "answers": [
              {
                "choice": "<p>A. Restart the DB cluster to apply the SSL change.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Instruct the Data Analysts to download the root certificate and use the SSL certificate on the connection string to connect.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add explicit mappings between the Data Analysts' IP addresses and the instance in the security group assigned to the DB cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Modify the Data Analysts' local client firewall to allow network traffic to AWS.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 4 discussion",
        "discusstion": [
          {
            "id": 703970,
            "date": "Tue 25 Oct 2022 17:05",
            "username": "sirfans",
            "content": "B is the right one",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 677064,
            "date": "Fri 23 Sep 2022 13:38",
            "username": "niteshdba",
            "content": "B is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595372,
            "date": "Sun 01 May 2022 02:46",
            "username": "novice_expert",
            "content": "B.  Instruct the Data Analysts to download the root certificate and use the SSL certificate on the connection string to connect.<br><br> To connect using SSL:<br>=E2=80=A2 Provide the SSLTrust certificate (can be downloaded from AWS)<br>=E2=80=A2 Provide SSL options when connecting to database<br>=E2=80=A2 Not using SSL on a DB that enforces SSL would result in error<br><br>B - Need root certificate and then need to specify --sql-cacert.pem --ssl-modeverify_identity for example mysql<br><br>When the require_secure_transport parameter is set to ON for a DB cluster, a database client can connect to it if it can establish an encrypted connection. Otherwise, an error message similar to the following is returned to the client:<br><br>MySQL Error 3159 (HY000): Connections using insecure transport are prohibited while --require_secure_transportON.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 562154,
            "date": "Sun 06 Mar 2022 18:11",
            "username": "RotterDam",
            "content": "The answer is (B). what I am beginning to REALLY dislikeabout some of these questions is the terrible grammar. This question is very similar to another question bank where the Database specialist is able to connect to the Aurora Cluster. The english they are using is \\\"Specialist MAY use their account to log in\\\" - this is artificially vague. in the pressure of time - such english just leaves a bad taste and its clearmany of the questions are not written by native english language speakers - which makes it frustrating",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 510962,
            "date": "Tue 28 Dec 2021 10:50",
            "username": "Shunpin",
            "content": "My point: Usually, you have no privileges to modify local firewall policy in a big cooperate. In the question, it has mentioned the connection can be made from desktop that means local firewall rules allow to access RDS.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 434483,
            "date": "Sun 07 Nov 2021 12:41",
            "username": "aws4myself",
            "content": "its B, SSL issue.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 429432,
            "date": "Fri 05 Nov 2021 20:59",
            "username": "guru_ji",
            "content": "Correct Answer>> B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 414739,
            "date": "Thu 04 Nov 2021 22:01",
            "username": "Dr_Kiko",
            "content": "B, you need a cert",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314121,
            "date": "Thu 04 Nov 2021 05:31",
            "username": "LMax",
            "content": "Must be B, SSL issue.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 313339,
            "date": "Thu 04 Nov 2021 05:03",
            "username": "jnassp1",
            "content": "B<br><br>=E2=80=A2 To connect using SSL:<br>=E2=80=A2 Provide the SSLTrust certificate (can be downloaded from AWS)<br>=E2=80=A2 Provide SSL options when connecting to database<br>=E2=80=A2 Not using SSL on a DB that enforces SSL would result in error",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 313335,
            "date": "Mon 25 Oct 2021 01:00",
            "username": "jnassp1",
            "content": "D is not right this. The questions is on SSL/TLS encryption in transit -<br><br>B - Need root certificate and then need to specify --sql-cacert.pem --ssl-modeverify_identity for example mysql",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 296287,
            "date": "Fri 22 Oct 2021 11:20",
            "username": "myutran",
            "content": "Ans: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 292049,
            "date": "Thu 21 Oct 2021 18:18",
            "username": "Exia",
            "content": "When the require_secure_transport parameter is set to ON for a DB cluster, a database client can connect to it if it can establish an encrypted connection. Otherwise, an error message similar to the following is returned to the client:<br><br>MySQL Error 3159 (HY000): Connections using insecure transport are prohibited while --require_secure_transportON.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 292042,
            "date": "Thu 21 Oct 2021 00:55",
            "username": "Exia",
            "content": "D.  Aurora MySQL DB clusters must be created in an Amazon Virtual Private Cloud (VPC). To control which devices and Amazon EC2 instances can open connections to the endpoint and port of the DB instance for Aurora MySQL DB clusters in a VPC, you use a VPC security group. These endpoint and port connections can be made using Secure Sockets Layer (SSL). In addition, firewall rules at your company can control whether devices running at your company can open connections to a DB instance.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Security.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 171045,
            "date": "Sun 17 Oct 2021 06:10",
            "username": "goodh32",
            "content": "Answer is B<br>As SSL parameter can be used in string<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/ssl-certificate-rotation-aurora-postgresql.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 167381,
            "date": "Wed 13 Oct 2021 15:19",
            "username": "Ebi",
            "content": "Answer B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 160745,
            "date": "Wed 13 Oct 2021 07:26",
            "username": "[Removed]",
            "content": "of course you can use a cert on the connection string<br>https://www.connectionstrings.com/mysql-connector-odbc-5-1/using-ssl/",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#5",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is concerned about the cost of a large-scale, transactional application using Amazon DynamoDB that only needs to store data for 2 days before it is deleted. In looking at the tables, a Database Specialist notices that much of the data is months old, and goes back to when the application was first deployed.<br>What can the Database Specialist do to reduce the overall cost?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#5",
            "answers": [
              {
                "choice": "<p>A. Create a new attribute in each table to track the expiration time and create an AWS Glue transformation to delete entries more than 2 days old.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new attribute in each table to track the expiration time and enable DynamoDB Streams on each table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a new attribute in each table to track the expiration time and enable time to live (TTL) on each table.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon CloudWatch Events event to export the data to Amazon S3 daily using AWS Data Pipeline and then truncate the Amazon DynamoDB table.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 5 discussion",
        "discusstion": [
          {
            "id": 129089,
            "date": "Mon 20 Sep 2021 01:28",
            "username": "chicagomassageseeker",
            "content": "Answer C.  Enable TTL on a new attribute.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 745246,
            "date": "Wed 14 Dec 2022 16:59",
            "username": "lollyj",
            "content": "Can someone please explain why A was a better solution for cost?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 620954,
            "date": "Thu 23 Jun 2022 14:05",
            "username": "ryuhei",
            "content": "Answer:C",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 595227,
            "date": "Sat 30 Apr 2022 21:19",
            "username": "novice_expert",
            "content": "C.  Create a new attribute in each table to track the expiration time and enable time to live (TTL) on each table.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 439488,
            "date": "Fri 05 Nov 2021 02:13",
            "username": "Anuragdba",
            "content": "C: TTL is used in dynamo DB",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 434485,
            "date": "Thu 04 Nov 2021 03:43",
            "username": "aws4myself",
            "content": "its C, Dynamo DB TTL attribute for auto deletion",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 425810,
            "date": "Wed 03 Nov 2021 10:29",
            "username": "guru_ji",
            "content": "C >> Correct Answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 395246,
            "date": "Wed 27 Oct 2021 14:43",
            "username": "Ninjamonkey8812aws4myselfrlnd2000",
            "content": "My opinion:<br><br>You can include AWS glue to write a Deletion job to transform the data.<br><br>TTL might be bound by the timefactor in the documentSuper, I guess you are an aws product developer/architect. Nice answers, dont mislead people.I don't think your solution helps to minimize the total cost of ownership, the delete queries will scan the tables we will need to pay for that, and we will need to pay for Glue Jobsexecutions andaws says \\\"...TTL is provided at no extra cost as a means to reduce stored data volumes..\\\"",
            "upvote_count": "221",
            "selected_answers": ""
          },
          {
            "id": 432438,
            "date": "Wed 03 Nov 2021 17:50",
            "username": "aws4myself",
            "content": "Super, I guess you are an aws product developer/architect. Nice answers, dont mislead people.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 630611,
            "date": "Tue 12 Jul 2022 17:45",
            "username": "rlnd2000",
            "content": "I don't think your solution helps to minimize the total cost of ownership, the delete queries will scan the tables we will need to pay for that, and we will need to pay for Glue Jobsexecutions andaws says \\\"...TTL is provided at no extra cost as a means to reduce stored data volumes..\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 361508,
            "date": "Tue 26 Oct 2021 11:17",
            "username": "Dip11",
            "content": "Yes C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314123,
            "date": "Fri 01 Oct 2021 06:57",
            "username": "LMax",
            "content": "For sure Answer C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 296291,
            "date": "Thu 30 Sep 2021 02:38",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 137097,
            "date": "Sun 26 Sep 2021 18:12",
            "username": "bigaws",
            "content": "This is c - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 134143,
            "date": "Wed 22 Sep 2021 14:24",
            "username": "BillyC",
            "content": "C its correct",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#6",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an on-premises system that tracks various database operations that occur over the lifetime of a database, including database shutdown, deletion, creation, and backup.<br>The company recently moved two databases to Amazon RDS and is looking at a solution that would satisfy these requirements. The data could be used by other systems within the company.<br>Which solution will meet these requirements with minimal effort?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#6",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon CloudWatch Events rule with the operations that need to be tracked on Amazon RDS. Create an AWS Lambda function to act on these rules and write the output to the tracking systems.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Lambda function to trigger on AWS CloudTrail API calls. Filter on specific RDS API calls and write the output to the tracking systems.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create RDS event subscriptions. Have the tracking systems subscribe to specific RDS event system notifications.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Write RDS logs to Amazon Kinesis Data Firehose. Create an AWS Lambda function to act on these rules and write the output to the tracking systems.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 6 discussion",
        "discusstion": [
          {
            "id": 129109,
            "date": "Mon 27 Sep 2021 13:16",
            "username": "chicagomassageseeker",
            "content": "Answer C:<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 605014,
            "date": "Sat 21 May 2022 22:13",
            "username": "awsguys",
            "content": "NOt A > an on-premises system",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595147,
            "date": "Sat 30 Apr 2022 18:11",
            "username": "novice_expert",
            "content": "Create RDS event subscriptions. Have the tracking systems subscribe to specific RDS event system notifications.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 518983,
            "date": "Fri 07 Jan 2022 14:32",
            "username": "awsmonsterawsmonster",
            "content": "Shouldn't it be A since the tracking system sits on premise and C does not cater to write the output to the tracking system ?Should be C, after restudying RDS Event",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 534935,
            "date": "Fri 28 Jan 2022 21:18",
            "username": "awsmonster",
            "content": "Should be C, after restudying RDS Event",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 496065,
            "date": "Tue 07 Dec 2021 14:50",
            "username": "GMartinelli",
            "content": "Option C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 432439,
            "date": "Fri 05 Nov 2021 04:47",
            "username": "aws4myself",
            "content": "B also can be the answer, but question is with minimal effort, Hence the answer is C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 429440,
            "date": "Wed 20 Oct 2021 19:12",
            "username": "guru_ji",
            "content": "Theek answer hai >> C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 414742,
            "date": "Wed 13 Oct 2021 14:14",
            "username": "Dr_Kiko",
            "content": "Answer C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314127,
            "date": "Wed 06 Oct 2021 12:07",
            "username": "LMax",
            "content": "Looks like C is the one",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 305494,
            "date": "Fri 01 Oct 2021 18:03",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 167385,
            "date": "Thu 30 Sep 2021 01:16",
            "username": "Ebi",
            "content": "C is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 134148,
            "date": "Wed 29 Sep 2021 12:36",
            "username": "BillyC",
            "content": "C its correct",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#7",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A clothing company uses a custom ecommerce application and a PostgreSQL database to sell clothes to thousands of users from multiple countries. The company is migrating its application and database from its on-premises data center to the AWS Cloud. The company has selected Amazon EC2 for the application and Amazon RDS for PostgreSQL for the database. The company requires database passwords to be changed every 60 days. A Database Specialist needs to ensure that the credentials used by the web application to connect to the database are managed securely.<br>Which approach should the Database Specialist take to securely manage the database credentials?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#7",
            "answers": [
              {
                "choice": "<p>A. Store the credentials in a text file in an Amazon S3 bucket. Restrict permissions on the bucket to the IAM role associated with the instance profile only. Modify the application to download the text file and retrieve the credentials on start up. Update the text file every 60 days.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure IAM database authentication for the application to connect to the database. Create an IAM user and map it to a separate database user for each ecommerce user. Require users to update their passwords every 60 days.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Store the credentials in AWS Secrets Manager. Restrict permissions on the secret to only the IAM role associated with the instance profile. Modify the application to retrieve the credentials from Secrets Manager on start up. Configure the rotation interval to 60 days.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Store the credentials in an encrypted text file in the application AMI. Use AWS KMS to store the key for decrypting the text file. Modify the application to decrypt the text file and retrieve the credentials on start up. Update the text file and publish a new AMI every 60 days.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 7 discussion",
        "discusstion": [
          {
            "id": 129171,
            "date": "Mon 27 Sep 2021 10:52",
            "username": "chicagomassageseeker",
            "content": "Answer C. ",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 621704,
            "date": "Fri 24 Jun 2022 16:18",
            "username": "Balki",
            "content": "If people think of B, the only reason they should move away from it is, IAM DB Authentication tokens can be valid only for 15 mins.<br><br>Answer is C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 594765,
            "date": "Sat 30 Apr 2022 03:12",
            "username": "novice_expert",
            "content": "Secret Manager<br>-> rotation 60 days<br>->Secret access toIAM roles for instance only<br>-> Apps refer Secret manager to get pwd on startup",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 585205,
            "date": "Wed 13 Apr 2022 15:16",
            "username": "amitkhurana",
            "content": "Answer C. ",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 561467,
            "date": "Sat 05 Mar 2022 15:18",
            "username": "RotterDam",
            "content": "ObviouslyC. How do the owners allow 80% wrong answers andnot correct them?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 555634,
            "date": "Fri 25 Feb 2022 00:03",
            "username": "tugboat",
            "content": "secret manager",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 518152,
            "date": "Thu 06 Jan 2022 11:42",
            "username": "Raj12131Jiang_aws1",
            "content": "B seems to be right choice. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.htmlX B. Create IAM role then grant to user , not create \\\"IAM user\\\"",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 685008,
            "date": "Sun 02 Oct 2022 20:27",
            "username": "Jiang_aws1",
            "content": "X B. Create IAM role then grant to user , not create \\\"IAM user\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 490578,
            "date": "Tue 30 Nov 2021 11:23",
            "username": "GMartinelli",
            "content": "Option C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 439489,
            "date": "Mon 01 Nov 2021 01:42",
            "username": "Anuragdba",
            "content": "C: Why most of answer is wrong ? this is not right way .",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 439206,
            "date": "Tue 26 Oct 2021 20:58",
            "username": "Anuragdba",
            "content": "C . Store the credentials in AWS Secrets Manager",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 434487,
            "date": "Sat 23 Oct 2021 08:10",
            "username": "aws4myself",
            "content": "C > for centralised credentials management with auto rotation",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 425814,
            "date": "Sat 23 Oct 2021 05:02",
            "username": "guru_ji",
            "content": "C >> Correct Answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 414163,
            "date": "Thu 21 Oct 2021 12:52",
            "username": "Dr_Kiko",
            "content": "C<br>I cannot believe how easy the question is!",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 399609,
            "date": "Fri 15 Oct 2021 20:26",
            "username": "Billhardy",
            "content": "Answer C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314128,
            "date": "Thu 14 Oct 2021 22:57",
            "username": "LMax",
            "content": "Answer C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 296297,
            "date": "Fri 08 Oct 2021 20:40",
            "username": "myutran",
            "content": "Answer:C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 272558,
            "date": "Fri 08 Oct 2021 09:08",
            "username": "MultiAZ",
            "content": "C for sure",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#8",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A financial services company is developing a shared data service that supports different applications from throughout the company. A Database Specialist designed a solution to leverage Amazon ElastiCache for Redis with cluster mode enabled to enhance performance and scalability. The cluster is configured to listen on port 6379.<br>Which combination of steps should the Database Specialist take to secure the cache data and protect it from unauthorized access? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#8",
            "answers": [
              {
                "choice": "<p>A. Enable in-transit and at-rest encryption on the ElastiCache cluster.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Ensure that Amazon CloudWatch metrics are configured in the ElastiCache cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Ensure the security group for the ElastiCache cluster allows all inbound traffic from itself and inbound traffic on TCP port 6379 from trusted clients only.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an IAM policy to allow the application service roles to access all ElastiCache API actions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Ensure the security group for the ElastiCache clients authorize inbound TCP port 6379 and port 22 traffic from the trusted ElastiCache cluster's security group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Ensure the cluster is created with the auth-token parameter and that the parameter is used in all subsequent commands.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 8 discussion",
        "discusstion": [
          {
            "id": 743759,
            "date": "Tue 13 Dec 2022 09:39",
            "username": "sju",
            "content": "Why A, if data is encrypted, it will remain confidentials but open for manipulation as you can delete it. Encryption can give confidentiality but can't gurantee integrity.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 729573,
            "date": "Mon 28 Nov 2022 20:55",
            "username": "Sab",
            "content": "Elasticache for Redis 7.0 now support IAM authentication through users and roles.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595284,
            "date": "Sat 30 Apr 2022 22:50",
            "username": "novice_expert",
            "content": "A.  Enable in-transit and at-rest encryption on the ElastiCache cluster.<br>x B.  why CloudWatch ?C.  Ensure the security group for the ElastiCache cluster allows all inbound traffic from itself and inbound traffic on TCP port 6379 from trusted clients only.<br>x why all API? D.  Create an IAM policy to allow the application service roles to access all ElastiCache API actions.<br>x why 22? E.  Ensure the security group for the ElastiCache clients authorize inbound TCP port 6379 and port 22 traffic from the trusted ElastiCache cluster's security group.F.  Ensure the cluster is created with the auth-token parameter and that the parameter is used in all subsequent commands.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: ACF"
          },
          {
            "id": 531540,
            "date": "Mon 24 Jan 2022 20:41",
            "username": "soyyodario",
            "content": "ACF are the correct<br>E Why do you need port 22?",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: ACF"
          },
          {
            "id": 498689,
            "date": "Fri 10 Dec 2021 15:19",
            "username": "2025flakyt",
            "content": "ADF are the correct options",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 498678,
            "date": "Fri 10 Dec 2021 15:12",
            "username": "2025flakytjove2025flakyt",
            "content": "Ensure the security group for the ElastiCache cluster allows all inbound traffic from itself is only needed whenyou launched your ElastiCache instance in EC2 Classic. so C is not a valid optionThese questions are not for up to date versions. When this question was added the<br>most likely the EC2-Classic was still very much available.<br><br>My choice is ACFThe following is needed to protect ElastiCache<br>Use multi-factor authentication (MFA) with each account.<br>Use SSL/TLS to communicate with AWS resources.<br>Set up API and user activity logging with AWS CloudTrail.<br>Use AWS encryption solutions, along with all default security controls within AWS services.<br>Use advanced managed security services such as Amazon Macie, which assists in discovering and securing personal data that is stored in Amazon S3.",
            "upvote_count": "112",
            "selected_answers": ""
          },
          {
            "id": 508289,
            "date": "Fri 24 Dec 2021 04:23",
            "username": "jove",
            "content": "These questions are not for up to date versions. When this question was added the<br>most likely the EC2-Classic was still very much available.<br><br>My choice is ACF",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 498686,
            "date": "Fri 10 Dec 2021 15:18",
            "username": "2025flakyt",
            "content": "The following is needed to protect ElastiCache<br>Use multi-factor authentication (MFA) with each account.<br>Use SSL/TLS to communicate with AWS resources.<br>Set up API and user activity logging with AWS CloudTrail.<br>Use AWS encryption solutions, along with all default security controls within AWS services.<br>Use advanced managed security services such as Amazon Macie, which assists in discovering and securing personal data that is stored in Amazon S3.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 491791,
            "date": "Wed 01 Dec 2021 17:06",
            "username": "cynthiacy",
            "content": "ACF. <br>F refers to https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/encryption.html",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#9",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running an Amazon RDS for PostgreSQL DB instance and wants to migrate it to an Amazon Aurora PostgreSQL DB cluster. The current database is 1 TB in size. The migration needs to have minimal downtime.<br>What is the FASTEST way to accomplish this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#9",
            "answers": [
              {
                "choice": "<p>A. Create an Aurora PostgreSQL DB cluster. Set up replication from the source RDS for PostgreSQL DB instance using AWS DMS to the target DB cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the pg_dump and pg_restore utilities to extract and restore the RDS for PostgreSQL DB instance to the Aurora PostgreSQL DB cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a database snapshot of the RDS for PostgreSQL DB instance and use this snapshot to create the Aurora PostgreSQL DB cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Migrate data from the RDS for PostgreSQL DB instance to an Aurora PostgreSQL DB cluster using an Aurora Replica. Promote the replica during the cutover.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 9 discussion",
        "discusstion": [
          {
            "id": 129617,
            "date": "Tue 21 Sep 2021 07:08",
            "username": "[Removed]",
            "content": "D.  While C would work, the requirement is minimal downtime.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Migrating.html",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 704365,
            "date": "Wed 26 Oct 2022 06:06",
            "username": "sirfans",
            "content": "D is the right option",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 594045,
            "date": "Thu 28 Apr 2022 22:49",
            "username": "novice_expert",
            "content": "C - snapshot will take time (and new transactions lost)<br>D- Replica is fast",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 561705,
            "date": "Sun 06 Mar 2022 01:05",
            "username": "RotterDam",
            "content": "D is absolutely correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 547795,
            "date": "Tue 15 Feb 2022 14:44",
            "username": "pcpcpc888",
            "content": "We need the SPEEDIEST solution, however, we also need a reasonable solution; how would we deal with database changes when restoring the database when we pick B? AWS perform that job for us when choosing D. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 507396,
            "date": "Wed 22 Dec 2021 22:26",
            "username": "jove",
            "content": "Keywords : seamless and speediest..<br>Answer : Option D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 496244,
            "date": "Tue 07 Dec 2021 19:37",
            "username": "GMartinelli",
            "content": "Option D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 439210,
            "date": "Fri 05 Nov 2021 19:11",
            "username": "Anuragdba",
            "content": "D: because in question talking about minimum downtime .",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 434493,
            "date": "Wed 03 Nov 2021 05:54",
            "username": "aws4myself",
            "content": "D is the correct answer, Read Replica is faster than snapshots",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 425827,
            "date": "Wed 03 Nov 2021 00:45",
            "username": "guru_ji",
            "content": "D >> Correct Answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 361035,
            "date": "Sat 30 Oct 2021 10:08",
            "username": "jayshah7",
            "content": "if we say C is fastest then how to handle changes to source server while snapshot is being transferred and getting applied to target ?",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 314730,
            "date": "Wed 27 Oct 2021 07:38",
            "username": "LMax",
            "content": "Answer D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 301039,
            "date": "Tue 26 Oct 2021 07:27",
            "username": "jyrajan",
            "content": "Answer D.  When you take a snapshot there will be a temporary suspension of I/O Services, now this can be seconds or longer, but our size is 1TB which means that there will be downtime, so based on that the answer is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 296369,
            "date": "Tue 26 Oct 2021 00:57",
            "username": "myutran",
            "content": "Ans: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 252800,
            "date": "Sat 23 Oct 2021 07:43",
            "username": "JobinAkaJoeGeeBeeEl",
            "content": "Option C ( Using snapshot) appears to be slightly faster option that D(creating aurora-replica)<br>However D is the best option considering downtime required(minimal)<br>Also D is the recommended option for this requirement.<br>Best answer is DI am confused, you said C is fastest, why choose D.  They are asking for the FASTEST!",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 290461,
            "date": "Sun 24 Oct 2021 17:51",
            "username": "GeeBeeEl",
            "content": "I am confused, you said C is fastest, why choose D.  They are asking for the FASTEST!",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 244857,
            "date": "Fri 22 Oct 2021 10:42",
            "username": "kilkar",
            "content": "Answer: D<br>Migrating data from an RDS PostgreSQL DB instance to an Aurora PostgreSQL DB cluster by using an Aurora read replica.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Migrating.html#AuroraPostgreSQL.Migrating.RDSPostgreSQ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 211581,
            "date": "Wed 20 Oct 2021 10:55",
            "username": "Ashoks",
            "content": "D.  Minimal down time",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#10",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist is migrating a 2 TB Amazon RDS for Oracle DB instance to an RDS for PostgreSQL DB instance using AWS DMS. The source RDS Oracle<br>DB instance is in a VPC in the us-east-1 Region. The target RDS for PostgreSQL DB instance is in a VPC in the use-west-2 Region.<br>Where should the AWS DMS replication instance be placed for the MOST optimal performance?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#10",
            "answers": [
              {
                "choice": "<p>A. In the same Region and VPC of the source DB instance<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. In the same Region and VPC as the target DB instance<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. In the same VPC and Availability Zone as the target DB instance<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. In the same VPC and Availability Zone as the source DB instance<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 10 discussion",
        "discusstion": [
          {
            "id": 153303,
            "date": "Wed 29 Sep 2021 13:20",
            "username": "zanhsiehscottkerker",
            "content": "C.  See the diagram here:<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.VPC. html#CHAP_ReplicationInstance.VPC. Configurations.ScenarioVPCPeer<br>In fact, all the configurations list on above url prefer the replication instance putting into target vpc region / subnet / az.There is also another question related to migration between a RDS resource and a Redshift cluster where they are in different VPCs and the Redshift cluster is the target. It asks readers where should the DMS replication instance be placed and the answer is the replication instance should be placed with the same VPC as the target.",
            "upvote_count": "161",
            "selected_answers": ""
          },
          {
            "id": 494157,
            "date": "Sun 05 Dec 2021 09:26",
            "username": "scottkerker",
            "content": "There is also another question related to migration between a RDS resource and a Redshift cluster where they are in different VPCs and the Redshift cluster is the target. It asks readers where should the DMS replication instance be placed and the answer is the replication instance should be placed with the same VPC as the target.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 136917,
            "date": "Sat 25 Sep 2021 19:28",
            "username": "halolBillyMadisonBillyMadisonguru_ji",
            "content": "D is correct based on :<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html<br>it showsChoose the Availability Zone where your source database is located.Going with D as well since it mentions in your link \\\"reducing load on your source database\\\"Changing my mind and going with C now. Talked with an AWS solutions architect. He said \\\"target DB instance\\\" has worked better for him in the past.C is correct.<br><br>glat mtt kar dena exam mein. All the Best !!",
            "upvote_count": "5141",
            "selected_answers": ""
          },
          {
            "id": 139003,
            "date": "Mon 27 Sep 2021 02:31",
            "username": "BillyMadisonBillyMadison",
            "content": "Going with D as well since it mentions in your link \\\"reducing load on your source database\\\"Changing my mind and going with C now. Talked with an AWS solutions architect. He said \\\"target DB instance\\\" has worked better for him in the past.",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 161168,
            "date": "Sun 03 Oct 2021 07:41",
            "username": "BillyMadison",
            "content": "Changing my mind and going with C now. Talked with an AWS solutions architect. He said \\\"target DB instance\\\" has worked better for him in the past.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 429446,
            "date": "Mon 25 Oct 2021 04:34",
            "username": "guru_ji",
            "content": "C is correct.<br><br>glat mtt kar dena exam mein. All the Best !!",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 745428,
            "date": "Wed 14 Dec 2022 21:40",
            "username": "lollyj",
            "content": "Answer: C. I'm new to this site.Is the suggested answer typically the correct answer.I'm really confused. Who provides the suggested answers on this site?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 595603,
            "date": "Sun 01 May 2022 15:05",
            "username": "novice_expert",
            "content": "C.  In the same VPC and Availability Zone as the target DB instance<br>(BTW, target region is implicit)<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.VPC. html#CHAP_ReplicationInstance.VPC. Configurations.ScenarioVPCPeer",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 444398,
            "date": "Sat 30 Oct 2021 08:02",
            "username": "jnassp1",
            "content": "C - \\\"For best results, we recommend that you locate your replication instance in the same VPC and Availability Zone as your target database, in this case Aurora MySQL.\\\" -",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 439217,
            "date": "Sat 30 Oct 2021 01:23",
            "username": "Anuragdba",
            "content": "C: we will get performance improvement if place dms replication instance in target (VPC & availability zonesame )",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 436759,
            "date": "Thu 28 Oct 2021 20:39",
            "username": "LB",
            "content": "C is the right answer here ie, the DMS replication instance should be placed in the target AZ.<br><br>D would have been correct if the source data needed a lot of filtering and manipulation before transferring data to the target.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 434495,
            "date": "Tue 26 Oct 2021 14:46",
            "username": "aws4myself",
            "content": "C > AZ of target instance",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 425847,
            "date": "Sun 24 Oct 2021 03:21",
            "username": "guru_ji",
            "content": "C >> Correct Answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 422152,
            "date": "Fri 22 Oct 2021 23:15",
            "username": "ChauPhanChauPhan",
            "content": "It seems a tough question and need to check in real practice, not on AWS books. I read the best practice but don't see any mention where these DMSs are located.<br>DMS is not an replica DB, it is like a machine that read the information from source DB and re-procedure it to target DB. <br>\\\"AWS DMS is a managed service that runs on an Amazon EC2 instance. This service connects to the source database, reads the source data, formats the data for consumption by the target database, and loads the data into the target database.\\\"<br>As above, I prefer to put it close to the source DB, where it can access source DB and read data faster, then send DDL information??? to target DB to re-procedure table etcImagine that we need to do full scan of source DB to find out the change. If we put DMS at target VPC/Region, it needs to connect back to source DB and process.<br>That's I think, but need real practice so if somebody did it, he/she can prove.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 422158,
            "date": "Sat 23 Oct 2021 12:06",
            "username": "ChauPhan",
            "content": "Imagine that we need to do full scan of source DB to find out the change. If we put DMS at target VPC/Region, it needs to connect back to source DB and process.<br>That's I think, but need real practice so if somebody did it, he/she can prove.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 378427,
            "date": "Fri 22 Oct 2021 22:12",
            "username": "Suresh108",
            "content": "CCCCCCCCCCCC<br><br>Ref:<br>https://docs.aws.amazon.com/dms/latest/sbs/CHAP_SQLServer2Aurora.Steps.CreateReplicationInstance.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 327674,
            "date": "Wed 20 Oct 2021 23:56",
            "username": "AWSGuru99",
            "content": "Answer is - C. <br>Follow this link - https://docs.aws.amazon.com/dms/latest/sbs/CHAP_SQLServer2Aurora.Steps.CreateReplicationInstance.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314732,
            "date": "Wed 20 Oct 2021 16:01",
            "username": "LMax",
            "content": "Answer C for me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 296371,
            "date": "Tue 19 Oct 2021 02:24",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 292186,
            "date": "Thu 14 Oct 2021 17:06",
            "username": "ExiaExia",
            "content": "I will go with C because the migration workload is a huge burden. For reducing the influence on the source DB instance, we should reduce the cross-region or cross-AZ traffic from the source DB to DMS replication instance.And I found the answer: Availability zone<br>Generally, performance is better if you locate your primary replication server in the same Availability Zone as your target database.<br><br>https://docs.aws.amazon.com/dms/latest/sbs/CHAP_SQLServer2Aurora.Steps.CreateReplicationInstance.html",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 292187,
            "date": "Sun 17 Oct 2021 11:22",
            "username": "Exia",
            "content": "And I found the answer: Availability zone<br>Generally, performance is better if you locate your primary replication server in the same Availability Zone as your target database.<br><br>https://docs.aws.amazon.com/dms/latest/sbs/CHAP_SQLServer2Aurora.Steps.CreateReplicationInstance.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 273838,
            "date": "Wed 13 Oct 2021 19:56",
            "username": "Glendon",
            "content": "According to this AWS documentation link: https://docs.aws.amazon.com/dms/latest/sbs/CHAP_SQLServer2Aurora.Steps.CreateReplicationInstance.html<br><br>\\\"Generally, performance is better if you locate your primary replication server in the same Availability Zone as your target database.\\\"<br><br>The answer should be C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 272568,
            "date": "Tue 12 Oct 2021 01:16",
            "username": "MultiAZ",
            "content": "The right answer is C, and I tell you this from lots of experience. For performance (2 TB) you need DMS instance as close to your TARGET as possible.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#11",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The Development team recently executed a database script containing several data definition language (DDL) and data manipulation language (DML) statements on an Amazon Aurora MySQL DB cluster. The release accidentally deleted thousands of rows from an important table and broke some application functionality.<br>This was discovered 4 hours after the release. Upon investigation, a Database Specialist tracked the issue to a DELETE command in the script with an incorrect<br>WHERE clause filtering the wrong set of rows.<br>The Aurora DB cluster has Backtrack enabled with an 8-hour backtrack window. The Database Administrator also took a manual snapshot of the DB cluster before the release started. The database needs to be returned to the correct state as quickly as possible to resume full application functionality. Data loss must be minimal.<br>How can the Database Specialist accomplish this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#11",
            "answers": [
              {
                "choice": "<p>A. Quickly rewind the DB cluster to a point in time before the release using Backtrack.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Perform a point-in-time recovery (PITR) of the DB cluster to a time before the release and copy the deleted rows from the restored database to the original database.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Restore the DB cluster using the manual backup snapshot created before the release and change the application configuration settings to point to the new DB cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a clone of the DB cluster with Backtrack enabled. Rewind the cloned cluster to a point in time before the release. Copy deleted rows from the clone to the original database.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 11 discussion",
        "discusstion": [
          {
            "id": 136938,
            "date": "Thu 23 Sep 2021 12:16",
            "username": "halolChauPhanMazekhchan123swakan",
            "content": "A&B correct.however, A cause loss data for last 4 hours but it's quickly will take just few minutes to rewind the databse to 4 hours before,<br>however B will keep database and fix it by reinsert deleted records from database which created from restore point in time<br>this will take more time but without loss data as the question refer to<br>\\\"Data loss must be minimal\\\"<br>So I guess B the correct answerB is wrong because \\\"Perform a point-in-time recovery (PITR) of the DB cluster to a time before the release\\\"<br>I example: The release time was 5AM, and you found that the records are deleted at 9AM. So why we recover the database \\\"before 5AM\\\" (release time). > we still lose 4 hours.<br>The correct way to minimize data loss is: recover as nearest as possible time such as 8:55AM) then copy the deletion data. So only 5 mins data loss. Only this minimizes data loss.PITR is restored another cluster with Product cluster. Executing PITR doesn't mean back-forward. we dont lose 4 hours. we can export and import from PITR restored cluster.Agree with ChauPhan. B is wrong. A is correct.Option B suggest to restore the db to a point before the records were deleted, then copy the required records from this newly restored db (using PITR) to the original DB.  So this way, all the other changes made on the DB are still there, while we copied the deleted rows from the PITR db. I think option B is correct. Please correct if wrong.",
            "upvote_count": "213112",
            "selected_answers": ""
          },
          {
            "id": 422469,
            "date": "Sat 30 Oct 2021 20:38",
            "username": "ChauPhanMazekhchan123swakan",
            "content": "B is wrong because \\\"Perform a point-in-time recovery (PITR) of the DB cluster to a time before the release\\\"<br>I example: The release time was 5AM, and you found that the records are deleted at 9AM. So why we recover the database \\\"before 5AM\\\" (release time). > we still lose 4 hours.<br>The correct way to minimize data loss is: recover as nearest as possible time such as 8:55AM) then copy the deletion data. So only 5 mins data loss. Only this minimizes data loss.PITR is restored another cluster with Product cluster. Executing PITR doesn't mean back-forward. we dont lose 4 hours. we can export and import from PITR restored cluster.Agree with ChauPhan. B is wrong. A is correct.Option B suggest to restore the db to a point before the records were deleted, then copy the required records from this newly restored db (using PITR) to the original DB.  So this way, all the other changes made on the DB are still there, while we copied the deleted rows from the PITR db. I think option B is correct. Please correct if wrong.",
            "upvote_count": "3112",
            "selected_answers": ""
          },
          {
            "id": 695379,
            "date": "Sat 15 Oct 2022 14:22",
            "username": "Maze",
            "content": "PITR is restored another cluster with Product cluster. Executing PITR doesn't mean back-forward. we dont lose 4 hours. we can export and import from PITR restored cluster.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 603589,
            "date": "Thu 19 May 2022 05:52",
            "username": "khchan123swakan",
            "content": "Agree with ChauPhan. B is wrong. A is correct.Option B suggest to restore the db to a point before the records were deleted, then copy the required records from this newly restored db (using PITR) to the original DB.  So this way, all the other changes made on the DB are still there, while we copied the deleted rows from the PITR db. I think option B is correct. Please correct if wrong.",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 670394,
            "date": "Fri 16 Sep 2022 04:04",
            "username": "swakan",
            "content": "Option B suggest to restore the db to a point before the records were deleted, then copy the required records from this newly restored db (using PITR) to the original DB.  So this way, all the other changes made on the DB are still there, while we copied the deleted rows from the PITR db. I think option B is correct. Please correct if wrong.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 216874,
            "date": "Fri 08 Oct 2021 00:24",
            "username": "edmondmeJiang_aws1Jiang_aws1",
            "content": "D is right, you can create a clone with backtrack if the database was created with backtrack which it was in this case. It's either B (pitr) or D (backtrack). Backtrack is faster. A is wrong, because if you backtrack, you lose the data that users entered for the past 4 hours. you want to clone to another area and copy the data that was lost.X A.  May lose 4 hrs users entered<br>X B.  Take too long ( restored -> copy delete rows to Org-DB ) <br>X C.  Take too long & May lose 4 hrs users enteredD.  Bettera. clone is faster than restore b. Copy delete rows to Org-DBOnly A, D using \\\"Rewind\\\"which is good<br>D is correct if we can rewind \\\"clone with Backtrack enabled\\\" Anyone know ?",
            "upvote_count": "2011",
            "selected_answers": ""
          },
          {
            "id": 684820,
            "date": "Sun 02 Oct 2022 15:06",
            "username": "Jiang_aws1Jiang_aws1",
            "content": "X A.  May lose 4 hrs users entered<br>X B.  Take too long ( restored -> copy delete rows to Org-DB ) <br>X C.  Take too long & May lose 4 hrs users enteredD.  Bettera. clone is faster than restore b. Copy delete rows to Org-DBOnly A, D using \\\"Rewind\\\"which is good<br>D is correct if we can rewind \\\"clone with Backtrack enabled\\\" Anyone know ?",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 684824,
            "date": "Sun 02 Oct 2022 15:10",
            "username": "Jiang_aws1",
            "content": "Only A, D using \\\"Rewind\\\"which is good<br>D is correct if we can rewind \\\"clone with Backtrack enabled\\\" Anyone know ?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 755607,
            "date": "Sun 25 Dec 2022 12:54",
            "username": "Sathish_dbs",
            "content": "A is correct, you don't lose 4 hours data with as you can do both back and forth with backtrack. D is so wrong as clones won't backtrack after read this - https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 720987,
            "date": "Fri 18 Nov 2022 01:52",
            "username": "Sab",
            "content": "Answer is B.  A clone cannot be backtracked to a point before it is created.<br>You can't backtrack a database clone to a time before that database clone was created. However, you can use the original database to backtrack to a time before the clone was created.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 701321,
            "date": "Sat 22 Oct 2022 06:22",
            "username": "rags1482",
            "content": "B<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-pitr.html<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 698923,
            "date": "Wed 19 Oct 2022 12:29",
            "username": "sayed",
            "content": "B seems to be the correct answer because they said\\\"Data loss must be minimal\\\"<br>A.  Quickly rewind the DB cluster to a point in time before the release using Backtrack.<br>this is the fastest option but we will lose 4 hours of data because we discover issue after 4 hours from running script during this period we have used the app and new data added<br>B.  Perform a point-in-time recovery (PITR) of the DB cluster to a time before the release and copy the deleted rows from the restored database to the original database. Most Voted<br>we will restore to a new instance and copy data but anyone knows how to copy data between to clusters<br>C.  Restore the DB cluster using the manual backup snapshot created before the release and change the application configuration settings to point to the new DB cluster.<br>this will cause losing 4 hours of data as option A<br>D.  Create a clone of the DB cluster with Backtrack enabled. Rewind the cloned cluster to a point in time before the release. Copy deleted rows from the clone to the original database.<br>you can not use backtrack a cloned cluster to a time before its cloning",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 696262,
            "date": "Sun 16 Oct 2022 15:34",
            "username": "awsjjj",
            "content": "Very tricky question. \\\"Data loss must be minimal\\\" is a key word here. Hence B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 692040,
            "date": "Tue 11 Oct 2022 13:29",
            "username": "awsjjj",
            "content": "the answer is A.  its in the documentation . https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 684813,
            "date": "Sun 02 Oct 2022 14:50",
            "username": "Jiang_aws1",
            "content": "A is correct<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html<br><br>You can easily undo mistakes. If you mistakenly perform a destructive action, such as a DELETE<br>Backtracking a DB cluster doesn't require a new DB cluster and rewinds the DB cluster in minutes.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 683583,
            "date": "Fri 30 Sep 2022 15:27",
            "username": "JeanGat",
            "content": "B. You can NOT clone and THEN Backtrack to some time prior to the clone.IF we could use the source backtrack in the clone, THEN D would be correct and faster.But alas, this is not an option.<br><br>https://aws.plainenglish.io/aurora-database-clones-what-they-are-and-when-to-use-them-b82be9d60309<br><br>\\\"Aurora clones also support backtracking but we can backtrack an Aurora clone only up to the point when that clone was actually created from the original database and not any further (in case the original database supports backtracking up to any point further in the past).\\\"",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 677427,
            "date": "Fri 23 Sep 2022 22:19",
            "username": "venimus_vidimus_vicimusJiang_aws1",
            "content": "I think it's b.<br>A -> will result in Data loss.<br>D -> can't rewind a cloned cluster to a time before the clone was created<br>according to the comments here.D.  Create a clone : create \\\"New\\\" clone then rewind",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 684826,
            "date": "Sun 02 Oct 2022 15:11",
            "username": "Jiang_aws1",
            "content": "D.  Create a clone : create \\\"New\\\" clone then rewind",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 670396,
            "date": "Fri 16 Sep 2022 04:05",
            "username": "swakan",
            "content": "Option B suggest to restore the db to a point before the records were deleted, then copy the required records from this newly restored db (using PITR) to the original DB.  So this way, all the other changes made on the DB are still there, while we copied the deleted rows from the PITR db. I think option B is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 652449,
            "date": "Sat 27 Aug 2022 04:33",
            "username": "kyo",
            "content": "\\\"Option A\\\" will result in loss of several hours of data and would not be recommended. A specialist should create a new DB instance using a backup taken at the correct recoverable point. Isn't it difficult to specify an exact time for \\\"D\\\"? So the answer would be B with point-in-time recovery.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 623445,
            "date": "Mon 27 Jun 2022 20:42",
            "username": "rlnd2000DevoteamAnalytix",
            "content": "Read carefully the question says ... just performed a database script ......problem was caused by a DELETE command in the script that had an improper WHERE. .. so the deletion happeneda few seconds ago, and the release occurred four hours ago.<br><br>BUT OPTION A SAYS -> Quickly rewind the DB cluster to a point in time BEFORE RELEASE using Backtrack. it was 4 hours ago, for me this is unacceptable data loss.<br><br>I will go with D:I agree with D:<br>> Original stays like this<br>> Rewind clone to find the deleted data<br>> Add diffs to original DB",
            "upvote_count": "43",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 624630,
            "date": "Wed 29 Jun 2022 14:21",
            "username": "DevoteamAnalytix",
            "content": "I agree with D:<br>> Original stays like this<br>> Rewind clone to find the deleted data<br>> Add diffs to original DB",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 620446,
            "date": "Wed 22 Jun 2022 15:28",
            "username": "ryuhei",
            "content": "The answer is B. <br>If it is A, the data for 4 hours after the release will be lost.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 604973,
            "date": "Sat 21 May 2022 19:53",
            "username": "Radhaghosh",
            "content": "Only coping deleted rows may create data consistency issue. I will got with A",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 595066,
            "date": "Sat 30 Apr 2022 16:09",
            "username": "novice_expert",
            "content": "PITR table<br>-> The point-in-time recovery process always restores to a new table.<br>-> copy the deleted rows from the restored database to the original database.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          }
        ]
      },
      {
        "question_id": "#12",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is load testing its three-tier production web application deployed with an AWS CloudFormation template on AWS. The Application team is making changes to deploy additional Amazon EC2 and AWS Lambda resources to expand the load testing capacity. A Database Specialist wants to ensure that the changes made by the Application team will not change the Amazon RDS database resources already deployed.<br>Which combination of steps would allow the Database Specialist to accomplish this? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#12",
            "answers": [
              {
                "choice": "<p>A. Review the stack drift before modifying the template<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create and review a change set before applying it<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Export the database resources as stack outputs<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Define the database resources in a nested stack<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Set a stack policy for the database resources<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 12 discussion",
        "discusstion": [
          {
            "id": 133699,
            "date": "Tue 28 Sep 2021 14:57",
            "username": "chicagomassageseeker",
            "content": "Correct Answer B and E. B.  You need to review the change set before accepting changes.E.  use Stack set policy to prevent updates tto resources.",
            "upvote_count": "20",
            "selected_answers": ""
          },
          {
            "id": 179249,
            "date": "Thu 07 Oct 2021 09:08",
            "username": "RDSBot",
            "content": "B&E : https://docs.amazonaws.cn/en_us/AWSCloudFormation/latest/UserGuide/best-practices.html#cfn-best-practices-changesets",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 745477,
            "date": "Wed 14 Dec 2022 22:44",
            "username": "lollyj",
            "content": "Answer BE however I don't answer the A. Can someone explain?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 698926,
            "date": "Wed 19 Oct 2022 12:31",
            "username": "sayed",
            "content": "B and E",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 597937,
            "date": "Sat 07 May 2022 03:59",
            "username": "KaranGandhi30",
            "content": "B.  change set will assure that App Dev modification are not impacting resources.E.  Policy rules will be additional to fail deployment if the resources are changed.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 594020,
            "date": "Thu 28 Apr 2022 21:43",
            "username": "novice_expert",
            "content": "https://docs.amazonaws.cn/en_us/AWSCloudFormation/latest/UserGuide/best-practices.html#cfn-best-practices-changesets",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 562571,
            "date": "Mon 07 Mar 2022 12:34",
            "username": "RotterDam",
            "content": "Got this question in my exam. (i cleared it). BE is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 561654,
            "date": "Sat 05 Mar 2022 22:12",
            "username": "RotterDam",
            "content": "B & E are the right choices",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 437444,
            "date": "Fri 05 Nov 2021 13:15",
            "username": "guru_ji",
            "content": "Correct Answer: B and E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 434498,
            "date": "Wed 03 Nov 2021 19:58",
            "username": "aws4myself",
            "content": "its BE, stack policy and changesets",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 422512,
            "date": "Thu 28 Oct 2021 23:39",
            "username": "ChauPhan",
            "content": "B & E are the answers.<br>A is not clear and headache as we need to review the CF manually, not recommended.<br>C D won't help",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314743,
            "date": "Sun 24 Oct 2021 09:30",
            "username": "LMax",
            "content": "I would go with B & E",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 299600,
            "date": "Fri 15 Oct 2021 18:53",
            "username": "myutran",
            "content": "Ans: BE",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 252458,
            "date": "Fri 15 Oct 2021 02:07",
            "username": "Faz",
            "content": "Answer is BE",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 211596,
            "date": "Wed 13 Oct 2021 22:25",
            "username": "Ashoks",
            "content": "B and E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 205101,
            "date": "Fri 08 Oct 2021 15:49",
            "username": "pdboi3355",
            "content": "B and E",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 169620,
            "date": "Thu 07 Oct 2021 02:35",
            "username": "Ebi",
            "content": "Answer is BE",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#13",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A manufacturing company's website uses an Amazon Aurora PostgreSQL DB cluster.<br>Which configurations will result in the LEAST application downtime during a failover? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#13",
            "answers": [
              {
                "choice": "<p>A. Use the provided read and write Aurora endpoints to establish a connection to the Aurora DB cluster.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon CloudWatch alert triggering a restore in another Availability Zone when the primary Aurora DB cluster is unreachable.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Edit and enable Aurora DB cluster cache management in parameter groups.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set TCP keepalive parameters to a high value.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Set JDBC connection string timeout variables to a low value.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>F. Set Java DNS caching timeouts to a high value.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 13 discussion",
        "discusstion": [
          {
            "id": 135380,
            "date": "Wed 22 Sep 2021 07:37",
            "username": "MickysinghLMax",
            "content": "Ans is ACEAgree with ACE",
            "upvote_count": "82",
            "selected_answers": ""
          },
          {
            "id": 314746,
            "date": "Thu 14 Oct 2021 20:07",
            "username": "LMax",
            "content": "Agree with ACE",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 743950,
            "date": "Tue 13 Dec 2022 12:54",
            "username": "satishstechie",
            "content": "ACE should be wright",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 741341,
            "date": "Sun 11 Dec 2022 02:06",
            "username": "rags1482",
            "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.BestPractices.FastFailover.html<br><br>ACE based on above link",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 604174,
            "date": "Fri 20 May 2022 01:35",
            "username": "praffuln",
            "content": "Question is discussing about low recovery time at failure...",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 595185,
            "date": "Sat 30 Apr 2022 19:53",
            "username": "novice_expert",
            "content": "A E is correct<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.BestPractices.htmlA.  Use the endpoints tocluster.<br>x B cloudwatch...<br>x D.  Set TCP keepalive parameters to a high value. (keep it low)E.  Set JDBC connection string timeout variables to a low value.<br>x F.  Set Java DNS caching timeouts to a high value. (keep it low)<br><br>C is here<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.cluster-cache-mgmt.htmlC.  Edit and enable Aurora DB cluster cache management in parameter groups. (keeps cache in sync on replica)",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 562574,
            "date": "Mon 07 Mar 2022 12:38",
            "username": "RotterDam",
            "content": "Got this question in my exam. (i cleared it). ACE is correct",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 443697,
            "date": "Tue 02 Nov 2021 19:00",
            "username": "lokeshM",
            "content": "Ans isACE",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 434502,
            "date": "Sat 30 Oct 2021 05:05",
            "username": "aws4myself",
            "content": "its ACE",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 425865,
            "date": "Thu 21 Oct 2021 13:33",
            "username": "guru_ji",
            "content": "A,C,E >> Correct Answer.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 422768,
            "date": "Thu 21 Oct 2021 02:05",
            "username": "ChauPhan",
            "content": "A E is correct<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.BestPractices.html<br>C is here<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.cluster-cache-mgmt.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 361527,
            "date": "Mon 18 Oct 2021 15:28",
            "username": "Dip11",
            "content": "A and E are correct. Not sure of third one.C is for keeping the cache warm on replica so that after failover performance is not degraded. Purpose of CCM is not to reduce downtime.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 301847,
            "date": "Thu 14 Oct 2021 14:13",
            "username": "jyrajanChauPhan",
            "content": "Based on the link below, the answer looks like it should be ADE.  Not sure where it says C is an option to ensure a fast failover.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.BestPractices.html#AuroraPostgreSQL.BestPractices.FastFailover.TCPKeepaliveD is not correct. You should set TCP keepalive to low value, not high one.<br>Enabling TCP keepalive parameters and setting them aggressively ensures that if your client is no longer able to connect to the database, then any active connections are quickly closed. This action allows the application to react appropriately, such as by picking a new host to connect to",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 422766,
            "date": "Wed 20 Oct 2021 18:34",
            "username": "ChauPhan",
            "content": "D is not correct. You should set TCP keepalive to low value, not high one.<br>Enabling TCP keepalive parameters and setting them aggressively ensures that if your client is no longer able to connect to the database, then any active connections are quickly closed. This action allows the application to react appropriately, such as by picking a new host to connect to",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 298690,
            "date": "Mon 11 Oct 2021 07:45",
            "username": "Windy",
            "content": "Answer is ACE",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 297099,
            "date": "Sun 10 Oct 2021 22:19",
            "username": "myutran",
            "content": "Ans: ACE",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 216855,
            "date": "Sat 09 Oct 2021 08:06",
            "username": "AwsSuperTrooper",
            "content": "Agree with A,C & E. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 211597,
            "date": "Sat 02 Oct 2021 23:47",
            "username": "Ashoks",
            "content": "A,C & E",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 191359,
            "date": "Thu 30 Sep 2021 19:05",
            "username": "saryu",
            "content": "ACE is corrct",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#14",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is hosting critical business data in an Amazon Redshift cluster. Due to the sensitive nature of the data, the cluster is encrypted at rest using AWS<br>KMS. As a part of disaster recovery requirements, the company needs to copy the Amazon Redshift snapshots to another Region.<br>Which steps should be taken in the AWS Management Console to meet the disaster recovery requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#14",
            "answers": [
              {
                "choice": "<p>A. Create a new KMS customer master key in the source Region. Switch to the destination Region, enable Amazon Redshift cross-Region snapshots, and use the KMS key of the source Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new IAM role with access to the KMS key. Enable Amazon Redshift cross-Region replication using the new IAM role, and use the KMS key of the source Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable Amazon Redshift cross-Region snapshots in the source Region, and create a snapshot copy grant and use a KMS key in the destination Region.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new KMS customer master key in the destination Region and create a new IAM role with access to the new KMS key. Enable Amazon Redshift cross-Region replication in the source Region and use the KMS key of the destination Region.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 14 discussion",
        "discusstion": [
          {
            "id": 745498,
            "date": "Wed 14 Dec 2022 23:22",
            "username": "lollyj",
            "content": "I thought keys are region specific and one will need to be created in the destination region",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 608949,
            "date": "Mon 30 May 2022 00:52",
            "username": "Dantas",
            "content": "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 595001,
            "date": "Sat 30 Apr 2022 14:40",
            "username": "novice_expert",
            "content": "-A,B,D are incorrect<br>-C<br>new KMS in the destination Region<br>-> snapshot copy grant in the destination Region specifying the new key<br>->In the source Region, configure cross-Region snapshots for the Amazon Redshift cluster specifying<br>- the destination Region,<br>- the snapshot copy grant,<br>- and retention periods for the snapshot.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 519740,
            "date": "Sat 08 Jan 2022 20:27",
            "username": "victornjuser0001",
            "content": "Question is poorly written . In absence of true answer C is right. It is right because A,B,D are not correct. You definitely need snapshot copy grant in destination region but based on that region key. Answer C does not say which key.agree with you",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 557554,
            "date": "Sun 27 Feb 2022 20:24",
            "username": "user0001",
            "content": "agree with you",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 513934,
            "date": "Fri 31 Dec 2021 08:37",
            "username": "MahiShai",
            "content": "C is correct ans",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 490781,
            "date": "Tue 30 Nov 2021 16:13",
            "username": "jove",
            "content": "C seems to be the correct answer",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 479676,
            "date": "Tue 16 Nov 2021 22:21",
            "username": "PietraOra",
            "content": "I think C<br>If you want to enable cross-Region snapshot copy for an AWS KMS=E2=80=93encrypted cluster, you must configure a snapshot copy grant for a root key in the destination AWS Region<br>Source-Region :configure a cross-Region snapshot for an AWS KMS=E2=80=93encrypted cluster<br>In Destination AWS Region : choose the AWS Region to which to copy snapshots.<br>https://docs.aws.amazon.com/redshift/latest/mgmt/managing-snapshots-console.html#xregioncopy-kms-encrypted-snapshot",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 479426,
            "date": "Tue 16 Nov 2021 15:21",
            "username": "hemantr",
            "content": "D https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#15",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a production Amazon Aurora Db cluster that serves both online transaction processing (OLTP) transactions and compute-intensive reports. The reports run for 10% of the total cluster uptime while the OLTP transactions run all the time. The company has benchmarked its workload and determined that a six- node Aurora DB cluster is appropriate for the peak workload.<br>The company is now looking at cutting costs for this DB cluster, but needs to have a sufficient number of nodes in the cluster to support the workload at different times. The workload has not changed since the previous benchmarking exercise.<br>How can a Database Specialist address these requirements with minimal user involvement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#15",
            "answers": [
              {
                "choice": "<p>A. Split up the DB cluster into two different clusters: one for OLTP and the other for reporting. Monitor and set up replication between the two clusters to keep data consistent.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Review all evaluate the peak combined workload. Ensure that utilization of the DB cluster node is at an acceptable level. Adjust the number of instances, if necessary.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the stop cluster functionality to stop all the nodes of the DB cluster during times of minimal workload. The cluster can be restarted again depending on the workload at the time.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up automatic scaling on the DB cluster. This will allow the number of reader nodes to adjust automatically to the reporting workload, when needed.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 15 discussion",
        "discusstion": [
          {
            "id": 129418,
            "date": "Sat 25 Sep 2021 17:23",
            "username": "chicagomassageseeker",
            "content": "Answer D.  You dont setup a seperate cluster for reporting. Aurora does OLTP and reporting from same cluster. just use autoscaling.",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 681888,
            "date": "Wed 28 Sep 2022 17:53",
            "username": "Zimboguru",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 595247,
            "date": "Sat 30 Apr 2022 22:01",
            "username": "novice_expert",
            "content": "Auto-scaling will scale-up/down number of read-replicas",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 437449,
            "date": "Tue 02 Nov 2021 09:04",
            "username": "guru_ji",
            "content": "D >> Correct Answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 434506,
            "date": "Tue 02 Nov 2021 06:47",
            "username": "aws4myself",
            "content": "D > autoscaling on Aurora cluster",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 425875,
            "date": "Mon 01 Nov 2021 12:54",
            "username": "guru_ji",
            "content": "D >> Correct Answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314756,
            "date": "Sun 24 Oct 2021 08:08",
            "username": "LMax",
            "content": "D for sure.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 299601,
            "date": "Thu 21 Oct 2021 22:18",
            "username": "myutran",
            "content": "Ans: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 252843,
            "date": "Tue 12 Oct 2021 10:47",
            "username": "JobinAkaJoe",
            "content": "D is the correct answer.Auto-scaling will scale-up/down number of read-replicas automatically based on the workload.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 169860,
            "date": "Thu 30 Sep 2021 00:13",
            "username": "Ebi",
            "content": "Answer is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 139726,
            "date": "Thu 30 Sep 2021 00:02",
            "username": "BillyC",
            "content": "D is Correct",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#16",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a finance application on an Amazon RDS for MySQL DB instance. The application is governed by multiple financial regulatory agencies.<br>The RDS DB instance is set up with security groups to allow access to certain Amazon EC2 servers only. AWS KMS is used for encryption at rest.<br>Which step will provide additional security?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#16",
            "answers": [
              {
                "choice": "<p>A. Set up NACLs that allow the entire EC2 subnet to access the DB instance<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Disable the master user account<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set up a security group that blocks SSH to the DB instance<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up RDS to use SSL for data in transit<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 16 discussion",
        "discusstion": [
          {
            "id": 486226,
            "date": "Wed 24 Nov 2021 21:09",
            "username": "jove",
            "content": "This needs to be corrected in the question: Instead of \\\"AWS KMS is used to encrypt data in transit\\\" it should be \\\"AWS KMS is used to encrypt data at rest\\\".",
            "upvote_count": "15",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 726070,
            "date": "Thu 24 Nov 2022 18:07",
            "username": "vkruger",
            "content": "Correct answer is D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 594593,
            "date": "Fri 29 Apr 2022 18:32",
            "username": "novice_expert",
            "content": "SSL for data in transit",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 555484,
            "date": "Thu 24 Feb 2022 19:34",
            "username": "tugboat",
            "content": "After text correct in Q, D is good for security in transit",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 486660,
            "date": "Thu 25 Nov 2021 13:59",
            "username": "Sp230",
            "content": "D set up ssl",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#17",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs a data warehouse solution that keeps data in a consistent, highly structured format. The company requires fast responses for end-user queries when looking at data from the current year, and users must have access to the full 15-year dataset, when needed. This solution also needs to handle a fluctuating number incoming queries. Storage costs for the 100 TB of data must be kept low.<br>Which solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#17",
            "answers": [
              {
                "choice": "<p>A. Leverage an Amazon Redshift data warehouse solution using a dense storage instance type while keeping all the data on local Amazon Redshift storage. Provision enough instances to support high demand.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Leverage an Amazon Redshift data warehouse solution using a dense storage instance to store the most recent data. Keep historical data on Amazon S3 and access it using the Amazon Redshift Spectrum layer. Provision enough instances to support high demand.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Leverage an Amazon Redshift data warehouse solution using a dense storage instance to store the most recent data. Keep historical data on Amazon S3 and access it using the Amazon Redshift Spectrum layer. Enable Amazon Redshift Concurrency Scaling.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Leverage an Amazon Redshift data warehouse solution using a dense storage instance to store the most recent data. Keep historical data on Amazon S3 and access it using the Amazon Redshift Spectrum layer. Leverage Amazon Redshift elastic resize.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 17 discussion",
        "discusstion": [
          {
            "id": 139697,
            "date": "Mon 27 Sep 2021 16:51",
            "username": "BillyMadison",
            "content": "C. <br>https://docs.aws.amazon.com/redshift/latest/dg/concurrency-scaling.html<br>\\\"ith the Concurrency Scaling feature, you can support virtually unlimited concurrent users and concurrent queries, with consistently fast query performance. When concurrency scaling is enabled, Amazon Redshift automatically adds additional cluster capacity when you need it to process an increase in concurrent read queries. Write operations continue as normal on your main cluster. Users always see the most current data, whether the queries run on the main cluster or on a concurrency scaling cluster. You're charged for concurrency scaling clusters only for the time they're in use. For more information about pricing, see Amazon Redshift pricing. You manage which queries are sent to the concurrency scaling cluster by configuring WLM queues. When you enable concurrency scaling for a queue, eligible queries are sent to the concurrency scaling cluster instead of waiting in line.\\\"",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 594015,
            "date": "Thu 28 Apr 2022 21:36",
            "username": "novice_expert",
            "content": "https://docs.aws.amazon.com/redshift/latest/dg/concurrency-scaling.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 572655,
            "date": "Tue 22 Mar 2022 03:38",
            "username": "JustPassIt",
            "content": "D. <br>Main cluster can't be a single-node cluster.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 496149,
            "date": "Tue 07 Dec 2021 16:42",
            "username": "GMartinelli",
            "content": "Option C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 461730,
            "date": "Thu 21 Oct 2021 16:59",
            "username": "GaryYsurisitcsJiang_aws1",
            "content": "Why not D? I think D (Redshift elastic resize) is also correct.Elastic resize is only available for Amazon Redshift clusters that use the EC2-VPC platform. Option of \\\"Dense Storage\\\" and \\\"Elastic resize\\\" is mutually exclusive I think# https://aws.amazon.com/redshift/faqs/<br>Q: What is Elastic Resize and how is it different from Concurrency Scaling?<br><br>Elastic Resize adds or removes nodes from a single Redshift cluster within minutes to manage its query throughput. For example, an ETL workload for certain hours in a day or<br>month-end reporting may need additional Amazon Redshift resources to complete on time. Concurrency Scaling adds additional cluster resources to increase the overall<br>query concurrency.",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 463419,
            "date": "Wed 27 Oct 2021 06:39",
            "username": "surisitcsJiang_aws1",
            "content": "Elastic resize is only available for Amazon Redshift clusters that use the EC2-VPC platform. Option of \\\"Dense Storage\\\" and \\\"Elastic resize\\\" is mutually exclusive I think# https://aws.amazon.com/redshift/faqs/<br>Q: What is Elastic Resize and how is it different from Concurrency Scaling?<br><br>Elastic Resize adds or removes nodes from a single Redshift cluster within minutes to manage its query throughput. For example, an ETL workload for certain hours in a day or<br>month-end reporting may need additional Amazon Redshift resources to complete on time. Concurrency Scaling adds additional cluster resources to increase the overall<br>query concurrency.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 685878,
            "date": "Tue 04 Oct 2022 04:26",
            "username": "Jiang_aws1",
            "content": "# https://aws.amazon.com/redshift/faqs/<br>Q: What is Elastic Resize and how is it different from Concurrency Scaling?<br><br>Elastic Resize adds or removes nodes from a single Redshift cluster within minutes to manage its query throughput. For example, an ETL workload for certain hours in a day or<br>month-end reporting may need additional Amazon Redshift resources to complete on time. Concurrency Scaling adds additional cluster resources to increase the overall<br>query concurrency.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 445280,
            "date": "Tue 19 Oct 2021 08:33",
            "username": "GMartinelli",
            "content": "C.  But I would argue that you could use redshift spectrum for everything, I just don=C2=B4t know if you can use it on S3 IA for the historical data, but it might work.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 437454,
            "date": "Sat 16 Oct 2021 00:24",
            "username": "guru_ji",
            "content": "C >> Correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 434508,
            "date": "Thu 14 Oct 2021 10:00",
            "username": "aws4myself",
            "content": "C > S3 + local storage + concurrency scaling",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314763,
            "date": "Tue 12 Oct 2021 06:33",
            "username": "LMax",
            "content": "Agree with C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 297846,
            "date": "Thu 07 Oct 2021 06:53",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 153374,
            "date": "Fri 01 Oct 2021 17:16",
            "username": "Ebi",
            "content": "C is the answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 145727,
            "date": "Wed 29 Sep 2021 18:23",
            "username": "BillyC",
            "content": "C Here",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#18",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A gaming company wants to deploy a game in multiple Regions. The company plans to save local high scores in Amazon DynamoDB tables in each Region. A<br>Database Specialist needs to design a solution to automate the deployment of the database with identical configurations in additional Regions, as needed. The solution should also automate configuration changes across all Regions.<br>Which solution would meet these requirements and deploy the DynamoDB tables?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#18",
            "answers": [
              {
                "choice": "<p>A. Create an AWS CLI command to deploy the DynamoDB table to all the Regions and save it for future deployments.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS CloudFormation template and deploy the template to all the Regions.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS CloudFormation template and use a stack set to deploy the template to all the Regions.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create DynamoDB tables using the AWS Management Console in all the Regions and create a step-by-step guide for future deployments.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 18 discussion",
        "discusstion": [
          {
            "id": 137941,
            "date": "Sat 02 Oct 2021 20:07",
            "username": "helpawsuser0001",
            "content": "C heretrue but wording is wrong as well",
            "upvote_count": "101",
            "selected_answers": ""
          },
          {
            "id": 557628,
            "date": "Sun 27 Feb 2022 22:13",
            "username": "user0001",
            "content": "true but wording is wrong as well",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 745611,
            "date": "Thu 15 Dec 2022 02:51",
            "username": "lollyj",
            "content": "Stack sets to deploy to regions",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 698931,
            "date": "Wed 19 Oct 2022 12:45",
            "username": "sayed",
            "content": "C<br><br>automate the deployment of the database with identical configurations in additional Regions (leads us to cloud formation), as needed. The solution should also automate configuration changes across all Regions (leads us to stack set)",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 595094,
            "date": "Sat 30 Apr 2022 16:56",
            "username": "novice_expert",
            "content": "Create an AWS CloudFormation template<br>-> use a stack set<br>->deploy the template to all the Regions.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 496022,
            "date": "Tue 07 Dec 2021 14:05",
            "username": "GMartinelli",
            "content": "Option C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 441070,
            "date": "Wed 03 Nov 2021 02:18",
            "username": "astood",
            "content": "C >>> Absolutely agreed",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 439245,
            "date": "Sun 31 Oct 2021 08:37",
            "username": "Anuragdba",
            "content": "C :Use CloudFormation StackSets to Provision Resources Across Multiple AWS Accounts and Regions<br>https://aws.amazon.com/blogs/aws/use-cloudformation-stacksets-to-provision-resources-across-multiple-aws-accounts-and-regions/",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 434509,
            "date": "Sat 30 Oct 2021 04:55",
            "username": "aws4myself",
            "content": "C > stack set to deploy in multiple regions",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 430114,
            "date": "Fri 29 Oct 2021 05:57",
            "username": "guru_ji",
            "content": "Correct Answer >> C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 423461,
            "date": "Wed 20 Oct 2021 15:03",
            "username": "ChauPhan",
            "content": "C. <br>A stack set lets you create stacks in AWS accounts across regions by using a single CloudFormation template",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 341829,
            "date": "Mon 18 Oct 2021 13:06",
            "username": "manan728",
            "content": "Yup C it is.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314765,
            "date": "Sat 16 Oct 2021 23:21",
            "username": "LMax",
            "content": "Answer C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 297853,
            "date": "Fri 15 Oct 2021 08:43",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253115,
            "date": "Thu 14 Oct 2021 22:34",
            "username": "JobinAkaJoe",
            "content": "C seems to to be the right answer.<br>Also good use case for global table",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 211623,
            "date": "Thu 14 Oct 2021 04:15",
            "username": "Ashoks",
            "content": "yes, C should be",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 150125,
            "date": "Sat 09 Oct 2021 06:28",
            "username": "szmulderszmulder",
            "content": "Ans is B, I think the stack set is for different AWS account and regions.Sorry, C is correct",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 150690,
            "date": "Wed 13 Oct 2021 12:43",
            "username": "szmulder",
            "content": "Sorry, C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 145729,
            "date": "Thu 07 Oct 2021 06:40",
            "username": "BillyC",
            "content": "Ans C is correct",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#19",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A team of Database Specialists is currently investigating performance issues on an Amazon RDS for MySQL DB instance and is reviewing related metrics. The team wants to narrow the possibilities down to specific database wait events to better understand the situation.<br>How can the Database Specialists accomplish this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#19",
            "answers": [
              {
                "choice": "<p>A. Enable the option to push all database logs to Amazon CloudWatch for advanced analysis<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create appropriate Amazon CloudWatch dashboards to contain specific periods of time<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable Amazon RDS Performance Insights and review the appropriate dashboard<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable Enhanced Monitoring will the appropriate settings<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 19 discussion",
        "discusstion": [
          {
            "id": 134201,
            "date": "Mon 20 Sep 2021 10:14",
            "username": "BillyC",
            "content": "Yes, C its correct!",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 620193,
            "date": "Wed 22 Jun 2022 07:47",
            "username": "sachin",
            "content": "My take is B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 619451,
            "date": "Mon 20 Jun 2022 22:00",
            "username": "Balki",
            "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.UsingDashboard.AnalyzeDBLoad.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 594638,
            "date": "Fri 29 Apr 2022 20:19",
            "username": "novice_expert",
            "content": "C.  Enable Amazon RDS Performance Insights will give you metric specifically for database with the dashboard<br>D.  Enhanced monitoring is for OS info",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 555563,
            "date": "Thu 24 Feb 2022 22:09",
            "username": "tugboat",
            "content": "Performance Insights will give you required info",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 441072,
            "date": "Sat 30 Oct 2021 07:51",
            "username": "astood",
            "content": "C>>> Enable Amazon RDS Performance Insights will give you metric specifically for database with the dashboard to navigate visually around to see database performance activities",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 434515,
            "date": "Fri 29 Oct 2021 16:37",
            "username": "aws4myself",
            "content": "C is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 430116,
            "date": "Fri 22 Oct 2021 12:25",
            "username": "guru_ji",
            "content": "Correct Answer >> C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 416444,
            "date": "Wed 20 Oct 2021 07:46",
            "username": "damaldon",
            "content": "When you use RDS Performance Insights, you can visualize the database load and filter the load by waits, SQL statements, hosts, or users. This way, you can identify which queries are causing issues and view the wait type and wait events associated to that query.<br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-mysql-db-performance/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 317400,
            "date": "Sat 16 Oct 2021 00:57",
            "username": "dcabib",
            "content": "Amazon RDS does not gave Fault injection - Just Aurora has this feature ... Answer is B. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314766,
            "date": "Fri 15 Oct 2021 23:25",
            "username": "LMax",
            "content": "Answer C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 297886,
            "date": "Mon 11 Oct 2021 20:16",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253116,
            "date": "Mon 11 Oct 2021 13:59",
            "username": "JobinAkaJoe",
            "content": "C, no doubt",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 139730,
            "date": "Wed 22 Sep 2021 01:08",
            "username": "BillyMadison",
            "content": "C as well.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.Enabling.html<br>https://aws.amazon.com/rds/performance-insights/<br>https://aws.amazon.com/blogs/database/tuning-amazon-rds-for-mysql-with-performance-insights/",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#20",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large company is using an Amazon RDS for Oracle Multi-AZ DB instance with a Java application. As a part of its disaster recovery annual testing, the company would like to simulate an Availability Zone failure and record how the application reacts during the DB instance failover activity. The company does not want to make any code changes for this activity.<br>What should the company do to achieve this in the shortest amount of time?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#20",
            "answers": [
              {
                "choice": "<p>A. Use a blue-green deployment with a complete application-level failover test<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the RDS console to reboot the DB instance by choosing the option to reboot with failover<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use RDS fault injection queries to simulate the primary node failure<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add a rule to the NACL to deny all traffic on the subnets associated with a single Availability Zone<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 20 discussion",
        "discusstion": [
          {
            "id": 478563,
            "date": "Mon 15 Nov 2021 10:15",
            "username": "toppic26",
            "content": "B is the correct option. Use the RDS fault injection query to simulate the primary instance failure - This is a trick option. You can test the fault tolerance of your Aurora DB cluster by using fault injection queries. Fault injection queries are issued as SQL commands to an Aurora instance.<br><br>Exam Alert:<br><br>Fault injection queries can be only used with Aurora DB cluster and NOT with an RDS DB cluster.",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 745617,
            "date": "Thu 15 Dec 2022 02:58",
            "username": "lollyj",
            "content": "B is the correct option.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 594628,
            "date": "Fri 29 Apr 2022 19:50",
            "username": "novice_expert",
            "content": "reboot with failover option.<br><br>You can force a crash of an Amazon Aurora instance using the ALTER SYSTEM CRASH fault injection query.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 555554,
            "date": "Thu 24 Feb 2022 22:01",
            "username": "tugboat",
            "content": "Test for failover is done via reboot with failover",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 510185,
            "date": "Mon 27 Dec 2021 10:28",
            "username": "Shunpin",
            "content": "I prefer B. <br>My point is that you can't simulate real application behaviors. For example in JDBC connection, if the TCP socket disconnect detection is not in the java coder. Your connection is stuck while failover.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 477828,
            "date": "Sat 13 Nov 2021 23:21",
            "username": "joveleunamE2025flakyt",
            "content": "It seems the RDS fault injection queries are supported only on Aurora :<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.FaultInjectionQueries.html<br>So, for testing Oracle, B should be the correct option.Yes, but even if it's Aurora instead of RDS, I think the key is that the question says they want to test how the application behaves during DB instance failover activity. in this case it is always the reboot with failover option.Although B is the correct answer for HA testing but RDS also support fault injection<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/disaster-recovery-resiliency.html<br>https://wellarchitectedlabs.com/reliability/300_labs/300_testing_for_resiliency_of_ec2_rds_and_s3/",
            "upvote_count": "411",
            "selected_answers": ""
          },
          {
            "id": 478134,
            "date": "Sun 14 Nov 2021 14:19",
            "username": "leunamE",
            "content": "Yes, but even if it's Aurora instead of RDS, I think the key is that the question says they want to test how the application behaves during DB instance failover activity. in this case it is always the reboot with failover option.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 497173,
            "date": "Wed 08 Dec 2021 21:41",
            "username": "2025flakyt",
            "content": "Although B is the correct answer for HA testing but RDS also support fault injection<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/disaster-recovery-resiliency.html<br>https://wellarchitectedlabs.com/reliability/300_labs/300_testing_for_resiliency_of_ec2_rds_and_s3/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 475837,
            "date": "Wed 10 Nov 2021 23:38",
            "username": "leunamE",
            "content": "Option B. ",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#21",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company maintains several databases using Amazon RDS for MySQL and PostgreSQL. Each RDS database generates log files with retention periods set to their default values. The company has now mandated that database logs be maintained for up to 90 days in a centralized repository to facilitate real-time and after-the-fact analyses.<br>What should a Database Specialist do to meet these requirements with minimal effort?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#21",
            "answers": [
              {
                "choice": "<p>A. Create an AWS Lambda function to pull logs from the RDS databases and consolidate the log files in an Amazon S3 bucket. Set a lifecycle policy to expire the objects after 90 days.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the RDS databases to publish log to Amazon CloudWatch Logs. Change the log retention policy for each log group to expire the events after 90 days.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Write a stored procedure in each RDS database to download the logs and consolidate the log files in an Amazon S3 bucket. Set a lifecycle policy to expire the objects after 90 days.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS Lambda function to download the logs from the RDS databases and publish the logs to Amazon CloudWatch Logs. Change the log retention policy for the log group to expire the events after 90 days.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 21 discussion",
        "discusstion": [
          {
            "id": 137580,
            "date": "Wed 22 Sep 2021 16:59",
            "username": "learnawsszmuldercloud4gr8user0001",
            "content": "I'll go with B because it facilitate real-timeI think it's due to the question need minimal effort. A need write a lambda is not minimal efforthttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.htmlregardless of the effort, why do you want to write code? (option A).<br>you should always try to go with built-in fuctionality",
            "upvote_count": "9321",
            "selected_answers": ""
          },
          {
            "id": 150695,
            "date": "Tue 28 Sep 2021 07:13",
            "username": "szmuldercloud4gr8user0001",
            "content": "I think it's due to the question need minimal effort. A need write a lambda is not minimal efforthttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.htmlregardless of the effort, why do you want to write code? (option A).<br>you should always try to go with built-in fuctionality",
            "upvote_count": "321",
            "selected_answers": ""
          },
          {
            "id": 164727,
            "date": "Tue 12 Oct 2021 14:10",
            "username": "cloud4gr8",
            "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 557403,
            "date": "Sun 27 Feb 2022 16:23",
            "username": "user0001",
            "content": "regardless of the effort, why do you want to write code? (option A).<br>you should always try to go with built-in fuctionality",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 696315,
            "date": "Sun 16 Oct 2022 17:03",
            "username": "awsjjj",
            "content": "B it is",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 620219,
            "date": "Wed 22 Jun 2022 08:51",
            "username": "sachin",
            "content": "with the least amount of work possible ; _the ans seems to be B but<br>with have central repository to store logs for post-mortem analysis .. the Ans A seems to be correct..<br>This is confusing question :)",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 594652,
            "date": "Fri 29 Apr 2022 20:54",
            "username": "novice_expertDevoteamAnalytix",
            "content": "no for B because: Logfiles are already created, and we do not want to mix that info with other log entries on CloudWatch<br><br>so A:<br>Lambda function to pull logs from the RDS databases -> consolidate the log files in an Amazon S3 bucket. Set a lifecycle policy to expire the objects after 90 days.Why not mix logs on CloudWatch? We can use different Log groups and we can filter logs....",
            "upvote_count": "12",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 619290,
            "date": "Mon 20 Jun 2022 15:00",
            "username": "DevoteamAnalytix",
            "content": "Why not mix logs on CloudWatch? We can use different Log groups and we can filter logs....",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 561216,
            "date": "Sat 05 Mar 2022 06:08",
            "username": "RotterDam",
            "content": "B is the correction Option",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 555580,
            "date": "Thu 24 Feb 2022 22:32",
            "username": "tugboat",
            "content": "B can be scripted too",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 536107,
            "date": "Sun 30 Jan 2022 12:58",
            "username": "soyyodario",
            "content": "B, best option with minimal effort and real time.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 521062,
            "date": "Mon 10 Jan 2022 20:03",
            "username": "awsmonster",
            "content": "Going with B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 503319,
            "date": "Fri 17 Dec 2021 03:53",
            "username": "mnzsql365",
            "content": "B is the right ans.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.Procedural.UploadtoCloudWatch.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 479447,
            "date": "Tue 16 Nov 2021 15:53",
            "username": "andy909",
            "content": "Answer: B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 445294,
            "date": "Thu 04 Nov 2021 02:26",
            "username": "GMartinelli",
            "content": "Its a tricky question, the correct option goes down to which of the options uses minimal effort, creating a lambda function or modifying all the databases. The question doesn=C2=B4t tell us how many RDS, so I would choose B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 437711,
            "date": "Wed 03 Nov 2021 23:29",
            "username": "guru_ji",
            "content": "B is Correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 423669,
            "date": "Wed 03 Nov 2021 16:04",
            "username": "ChauPhan",
            "content": "Vote B for minimal effort.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 317363,
            "date": "Thu 28 Oct 2021 11:22",
            "username": "LMax",
            "content": "I believe it is B. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 299608,
            "date": "Fri 22 Oct 2021 12:34",
            "username": "myutran",
            "content": "Ans: B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212004,
            "date": "Mon 18 Oct 2021 09:34",
            "username": "Ashoks",
            "content": "B should be",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 168940,
            "date": "Thu 14 Oct 2021 19:22",
            "username": "Rahu",
            "content": "Going with B",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#22",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist is setting up a new Amazon Aurora DB cluster with one primary instance and three Aurora Replicas for a highly intensive, business-critical application. The Aurora DB cluster has one medium-sized primary instance, one large-sized replica, and two medium sized replicas. The Database Specialist did not assign a promotion tier to the replicas.<br>In the event of a primary failure, what will occur?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#22",
            "answers": [
              {
                "choice": "<p>A. Aurora will promote an Aurora Replica that is of the same size as the primary instance<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Aurora will promote an arbitrary Aurora Replica<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Aurora will promote the largest-sized Aurora Replica<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Aurora will not promote an Aurora Replica<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 22 discussion",
        "discusstion": [
          {
            "id": 141659,
            "date": "Mon 27 Sep 2021 05:39",
            "username": "pan24",
            "content": "ANS: C<br>Priority: If you don't select a value, the default is tier-1. This priority determines the order in which Aurora<br>https://docs.amazonaws.cn/en_us/AmazonRDS/latest/AuroraUserGuide/aurora-replicas-adding.html<br><br>More than one Aurora Replica can share the same priority, resulting in promotion tiers. If two or more Aurora Replicas share the same priority, then Amazon RDS promotes the replica that is largest in size. If two or more Aurora Replicas share the same priority and size, then Amazon RDS promotes an arbitrary replica in the same promotion tier.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 595390,
            "date": "Sun 01 May 2022 03:41",
            "username": "novice_expert",
            "content": "default tier-1<br>More than one Aurora Replica can share the same priority, resulting in promotion tiers. If two or more Aurora Replicas share the same priority, then Amazon RDS promotes the replica that is largest in size.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 585083,
            "date": "Wed 13 Apr 2022 09:30",
            "username": "kret",
            "content": "C<br>\\\"If two or more Aurora Replicas share the same priority, then Amazon RDS promotes the replica that is largest in size. If two or more Aurora Replicas share the same priority and size, then Amazon RDS promotes an arbitrary replica in the same promotion tier.\\\"",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 444407,
            "date": "Tue 02 Nov 2021 12:38",
            "username": "jnassp1",
            "content": "C<br>If two replicas have the same priority, then the replica that is largest in size gets promoted",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 437713,
            "date": "Sat 30 Oct 2021 19:10",
            "username": "guru_ji",
            "content": "Correct Answer >> C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 430122,
            "date": "Fri 29 Oct 2021 23:41",
            "username": "guru_ji",
            "content": "Correct Answer >> C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314778,
            "date": "Mon 25 Oct 2021 10:36",
            "username": "LMax",
            "content": "Answer C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 297893,
            "date": "Sat 23 Oct 2021 22:37",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 292936,
            "date": "Fri 22 Oct 2021 16:20",
            "username": "Exia",
            "content": "C.  If two or more Aurora Replicas share the same priority, then Amazon RDS promotes the replica that is largest in size. If two or more Aurora Replicas share the same priority and size, then Amazon RDS promotes an arbitrary replica in the same promotion tier.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 253127,
            "date": "Mon 18 Oct 2021 03:27",
            "username": "JobinAkaJoe",
            "content": "C is the right choice. Since all replicas have same default priority the largest among them will be considered for failover.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 226079,
            "date": "Sun 17 Oct 2021 18:37",
            "username": "Billhardy",
            "content": "Since priority isn't assigned, aurora will promote the largest sized replica.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212006,
            "date": "Mon 11 Oct 2021 18:39",
            "username": "Ashoks",
            "content": "Ans is C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 209542,
            "date": "Sun 10 Oct 2021 05:40",
            "username": "Manmohan",
            "content": "Answer: C, If you don't have priority, Aurora will pick the biggest size by default",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 168938,
            "date": "Sun 03 Oct 2021 22:40",
            "username": "Rahu",
            "content": "C is right!",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 139753,
            "date": "Mon 27 Sep 2021 05:21",
            "username": "BillyMadisonBillyMadison",
            "content": "https://aws.amazon.com/blogs/aws/additional-failover-control-for-amazon-aurora/<br>A<br>\\\"In the event of a failover, Amazon RDS will promote the read replica that has the highest priority (the lowest numbered tier). If two or more replicas have the same priority, RDS will promote the one that is the same size as the previous primary instance.\\\"Switching to C.  AWS has made this question way to hard as their own documentation isn't consistent with their priority levels. I'm going with largest first priority due to https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-ug.pdf<br>More than one Aurora Replica can share the same priority, resulting in promotion tiers. If two or more Aurora Replicas share the same priority, then Amazon RDS promotes the replica that is largest in size. If<br>two or more Aurora Replicas share the same priority and size, then Amazon RDS promotes an arbitrary replica in the same promotion tier.\\\"",
            "upvote_count": "112",
            "selected_answers": ""
          },
          {
            "id": 149871,
            "date": "Sun 03 Oct 2021 04:23",
            "username": "BillyMadison",
            "content": "Switching to C.  AWS has made this question way to hard as their own documentation isn't consistent with their priority levels. I'm going with largest first priority due to https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-ug.pdf<br>More than one Aurora Replica can share the same priority, resulting in promotion tiers. If two or more Aurora Replicas share the same priority, then Amazon RDS promotes the replica that is largest in size. If<br>two or more Aurora Replicas share the same priority and size, then Amazon RDS promotes an arbitrary replica in the same promotion tier.\\\"",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 135644,
            "date": "Sun 26 Sep 2021 22:11",
            "username": "BillyCszmulder",
            "content": "A is Correct!The problem for A is there is no same size replicas can be promote.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 174156,
            "date": "Wed 06 Oct 2021 22:56",
            "username": "szmulder",
            "content": "The problem for A is there is no same size replicas can be promote.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#23",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running its line of business application on AWS, which uses Amazon RDS for MySQL at the persistent data store. The company wants to minimize downtime when it migrates the database to Amazon Aurora.<br>Which migration method should a Database Specialist use?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#23",
            "answers": [
              {
                "choice": "<p>A. Take a snapshot of the RDS for MySQL DB instance and create a new Aurora DB cluster with the option to migrate snapshots.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Make a backup of the RDS for MySQL DB instance using the mysqldump utility, create a new Aurora DB cluster, and restore the backup.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Aurora Replica from the RDS for MySQL DB instance and promote the Aurora DB cluster.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a clone of the RDS for MySQL DB instance and promote the Aurora DB cluster.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 23 discussion",
        "discusstion": [
          {
            "id": 133718,
            "date": "Sun 19 Sep 2021 23:05",
            "username": "chicagomassageseekerBillyMadison",
            "content": "Answer C.  Minimal Downtime with Aurora replica. However this is not the fastest.Agree C. <br>This blogpost explains why C is the answer since read replicas reduce downtime.<br>https://aws.amazon.com/blogs/database/best-practices-for-migrating-rds-for-mysql-databases-to-amazon-aurora/",
            "upvote_count": "1112",
            "selected_answers": ""
          },
          {
            "id": 139755,
            "date": "Wed 29 Sep 2021 18:53",
            "username": "BillyMadison",
            "content": "Agree C. <br>This blogpost explains why C is the answer since read replicas reduce downtime.<br>https://aws.amazon.com/blogs/database/best-practices-for-migrating-rds-for-mysql-databases-to-amazon-aurora/",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 605012,
            "date": "Sat 21 May 2022 22:10",
            "username": "awsguys",
            "content": "C > rightas minimize downtime.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595144,
            "date": "Sat 30 Apr 2022 18:06",
            "username": "novice_expert",
            "content": "MySQL DB instance<br>-> Create an Aurora Replica ( will take time)<br>-> promote the Aurora DB cluster (Minimal downtime)",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 507359,
            "date": "Wed 22 Dec 2021 21:12",
            "username": "jove",
            "content": "Answer is option C .. Minimal downtime.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 496062,
            "date": "Tue 07 Dec 2021 14:48",
            "username": "GMartinelli",
            "content": "Option C",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 430124,
            "date": "Thu 04 Nov 2021 12:03",
            "username": "guru_ji",
            "content": "Correct Answer >> C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 414340,
            "date": "Tue 02 Nov 2021 00:12",
            "username": "gelsm",
            "content": "C.  Create an Aurora Replica from the RDS for MySQL DB instance and promote the Aurora DB cluster.<br>This may not be the fastest but the question is \\\"minimize downtime\\\".",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314779,
            "date": "Sun 24 Oct 2021 10:41",
            "username": "LMax",
            "content": "I go with C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 297895,
            "date": "Mon 18 Oct 2021 18:25",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 290466,
            "date": "Mon 18 Oct 2021 16:52",
            "username": "GeeBeeElimatowelDip11",
            "content": "The answer is A and I will prove it --- please follow with me carefully<br>There is a requirement for minimal downtime (FASTEST) --- I go with A<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Migrating.html#AuroraPostgreSQL.Migrating.RDSPostgreSQL.Import.Console<br><br>According to that link =E2=80=9CBe prepared for migration to take a while, roughly several hours per tebibyte (TiB) of data.=E2=80=9D if you go with C.  C will thus lead to a longer downtime while A will notOk, so what about data written to source RDS after snapshop but before swap to Aurora? You loose data that's unacceptableYou need to understand the difference between minimal downtime and Fastest. Both are not same. Answer is C. ",
            "upvote_count": "211",
            "selected_answers": ""
          },
          {
            "id": 300883,
            "date": "Tue 19 Oct 2021 09:57",
            "username": "imatowel",
            "content": "Ok, so what about data written to source RDS after snapshop but before swap to Aurora? You loose data that's unacceptable",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 364612,
            "date": "Wed 27 Oct 2021 17:25",
            "username": "Dip11",
            "content": "You need to understand the difference between minimal downtime and Fastest. Both are not same. Answer is C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253128,
            "date": "Mon 11 Oct 2021 20:05",
            "username": "JobinAkaJoe",
            "content": "C because it facilitates migration to aurora with least down-time.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 242156,
            "date": "Sun 03 Oct 2021 08:48",
            "username": "waterh30",
            "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Migrating.html#AuroraPostgreSQL.Migrating.RDSPostgreSQL.Replica",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212008,
            "date": "Thu 30 Sep 2021 19:32",
            "username": "Ashoks",
            "content": "C should be",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 134206,
            "date": "Mon 20 Sep 2021 15:55",
            "username": "BillyC",
            "content": "Answer C",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#24",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>The Security team for a finance company was notified of an internal security breach that happened 3 weeks ago. A Database Specialist must start producing audit logs out of the production Amazon Aurora PostgreSQL cluster for the Security team to use for monitoring and alerting. The Security team is required to perform real-time alerting and monitoring outside the Aurora DB cluster and wants to have the cluster push encrypted files to the chosen solution.<br>Which approach will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#24",
            "answers": [
              {
                "choice": "<p>A. Use pg_audit to generate audit logs and send the logs to the Security team.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS CloudTrail to audit the DB cluster and the Security team will get data from Amazon S3.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set up database activity streams and connect the data stream from Amazon Kinesis to consumer applications.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Turn on verbose logging and set up a schedule for the logs to be dumped out for the Security team.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 24 discussion",
        "discusstion": [
          {
            "id": 137587,
            "date": "Sun 26 Sep 2021 22:41",
            "username": "learnawsBillyCBillyMadison",
            "content": "answer is C. <br>https://aws.amazon.com/about-aws/whats-new/2019/05/amazon-aurora-with-postgresql-compatibility-supports-database-activity-streams/Yes, real timeAgree C, the link you posted nails it. Anytime the question want \\\"real time alerts or streams\\\", its almost always Kinesis streams.<br>\\\"Database Activity Streams for Amazon Aurora with PostgreSQL compatibility provides a near real-time data stream of the database activity in your relational database to help you monitor activity. When integrated with third party database activity monitoring tools, Database Activity Streams can monitor and audit database activity to provide safeguards for your database and help meet compliance and regulatory requirements.\\\"",
            "upvote_count": "1234",
            "selected_answers": ""
          },
          {
            "id": 139732,
            "date": "Mon 27 Sep 2021 01:31",
            "username": "BillyC",
            "content": "Yes, real time",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 139865,
            "date": "Wed 29 Sep 2021 22:08",
            "username": "BillyMadison",
            "content": "Agree C, the link you posted nails it. Anytime the question want \\\"real time alerts or streams\\\", its almost always Kinesis streams.<br>\\\"Database Activity Streams for Amazon Aurora with PostgreSQL compatibility provides a near real-time data stream of the database activity in your relational database to help you monitor activity. When integrated with third party database activity monitoring tools, Database Activity Streams can monitor and audit database activity to provide safeguards for your database and help meet compliance and regulatory requirements.\\\"",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 636042,
            "date": "Sun 24 Jul 2022 14:22",
            "username": "Chirantan",
            "content": "answer is C. <br>https://aws.amazon.com/about-aws/whats-new/2019/05/amazon-aurora-with-postgresql-compatibility-supports-database-activity-streams/<br>Database Activity Streams for Amazon Aurora with PostgreSQL compatibility provides a near real-time data stream of the database activity in your relational database to help you monitor activity. When integrated with third party database activity monitoring tools, Database Activity Streams can monitor and audit database activity to provide safeguards for your database and help meet compliance and regulatory requirements.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 630528,
            "date": "Tue 12 Jul 2022 14:44",
            "username": "Chirantan",
            "content": "Database Activity Streams for Amazon Aurora with PostgreSQL compatibility provides a near real-time data stream of the database activity in your relational database to help you monitor activity. When integrated with third party database activity monitoring tools, Database Activity Streams can monitor and audit database activity to provide safeguards for your database and help meet compliance and regulatory requirements.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595611,
            "date": "Sun 01 May 2022 15:25",
            "username": "novice_expert",
            "content": "I chose C over B<br>x B.  Use AWS CloudTrail to audit the DB cluster and the Security team will get data from Amazon S3.<br>- CloudTrail is automatically enabled for all accounts, and logs events, so this is good for past activities for breach<br>Amazon Aurora activity is recorded in a CloudTrail event in Event history. You can use the CloudTrail console to view the last 90 days of recorded API activity and events in an AWS Region.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/logging-using-cloudtrail.html<br><br>https://aws.amazon.com/cloudtrail/faqs/<br><br>C is for future activities<br>Database Activity Streams can monitor and audit database activity to provide real time safeguards for your database and help meet compliance and regulatory requirements.<br>https://aws.amazon.com/about-aws/whats-new/2019/05/amazon-aurora-with-postgresql-compatibility-supports-database-activity-streams/<br><br>DB->Database Activity Streams->Kinesis ->Security team<br>C.  Set up database activity streams and connect the data stream from Amazon Kinesis to consumer applications.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 508859,
            "date": "Fri 24 Dec 2021 21:31",
            "username": "jove",
            "content": "Real-time alerting and monitoring > Option C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 447591,
            "date": "Thu 04 Nov 2021 18:09",
            "username": "Scunningham99",
            "content": "C https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.Overview.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 423678,
            "date": "Sun 31 Oct 2021 16:57",
            "username": "ChauPhan",
            "content": "Only C meets the real-time, A, D is possible but schedule.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 414349,
            "date": "Thu 28 Oct 2021 04:42",
            "username": "gelsm",
            "content": "C.  Set up database activity streams and connect the data stream from Amazon Kinesis to consumer applications.<br><br>Aurora Database activity streams provide a near real-time data stream of the database activity for an Aurora DB cluster.Database activity streams require the use of AWS KMS because the activity streams are always encrypted.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 364615,
            "date": "Wed 27 Oct 2021 04:07",
            "username": "Dip11",
            "content": "C for sure.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314782,
            "date": "Wed 20 Oct 2021 22:37",
            "username": "LMax",
            "content": "Between A and C, but would go with C after reading this:<br>https://aws.amazon.com/about-aws/whats-new/2019/05/amazon-aurora-with-postgresql-compatibility-supports-database-activity-streams/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 297897,
            "date": "Fri 15 Oct 2021 12:34",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 260078,
            "date": "Wed 13 Oct 2021 10:41",
            "username": "bigaws",
            "content": "I agree with C.  I think that Cloudtrail does not support the type of loging that would be required here, it is not the internal databsae info: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Overview.LoggingAndMonitoring.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253132,
            "date": "Mon 11 Oct 2021 03:50",
            "username": "JobinAkaJoe",
            "content": "Between A & C I will go with C as the logs should be used for real-time alerting and monitoring.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212013,
            "date": "Fri 08 Oct 2021 06:28",
            "username": "Ashoks",
            "content": "C is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 153494,
            "date": "Thu 07 Oct 2021 06:12",
            "username": "Ebi",
            "content": "C is the answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 152393,
            "date": "Tue 05 Oct 2021 08:55",
            "username": "halol",
            "content": "c is the correct answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 135646,
            "date": "Sun 19 Sep 2021 23:48",
            "username": "BillyCszmulder",
            "content": "B. .. i ThinkIt's using cloudwatch not cloudtrail, that's why not B<br>https://aws.amazon.com/blogs/database/audit-amazon-aurora-database-logs-for-connections-query-patterns-and-more-using-amazon-athena-and-amazon-quicksight/",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 150712,
            "date": "Sat 02 Oct 2021 19:02",
            "username": "szmulder",
            "content": "It's using cloudwatch not cloudtrail, that's why not B<br>https://aws.amazon.com/blogs/database/audit-amazon-aurora-database-logs-for-connections-query-patterns-and-more-using-amazon-athena-and-amazon-quicksight/",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#25",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using Amazon RDS for MySQL to redesign its business application. A Database Specialist has noticed that the Development team is restoring their<br>MySQL database multiple times a day when Developers make mistakes in their schema updates. The Developers sometimes need to wait hours for the restores to complete.<br>Multiple team members are working on the project, making it difficult to find the correct restore point for each mistake.<br>Which approach should the Database Specialist take to reduce downtime?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#25",
            "answers": [
              {
                "choice": "<p>A. Deploy multiple read replicas and have the team members make changes to separate replica instances<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Migrate to Amazon RDS for SQL Server, take a snapshot, and restore from the snapshot<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Migrate to Amazon Aurora MySQL and enable the Aurora Backtrack feature<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable the Amazon RDS for MySQL Backtrack feature<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 25 discussion",
        "discusstion": [
          {
            "id": 182769,
            "date": "Sun 10 Oct 2021 22:13",
            "username": "Amogh77saryu",
            "content": "Answer is : A,Backtrack feature is only available with Aurora.<br>each developer can perform DDL operations for the schema changes on the MySQL read replica once the read replica is in sync with its primary DB instance. Then the developer can promote the read replica and direct the application to use the promoted instance during the development phase. This solution isolates the schema changes done by each developer to their own promoted instance. This also avoids the problem of keeping track of the \\\"correct restore point\\\" that the team faced while using the same DB instance.Correct",
            "upvote_count": "132",
            "selected_answers": ""
          },
          {
            "id": 190447,
            "date": "Wed 13 Oct 2021 07:37",
            "username": "saryu",
            "content": "Correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 131987,
            "date": "Fri 24 Sep 2021 08:00",
            "username": "[Removed]Jiang_aws1KhastachicagomassageseekerBillyMadison",
            "content": "I don't see how it can be A.  These are read replicas, so by definition you cannot make changes to them. C sounds right to meif using clone then will be OKbut not Replicas - Read onlyYes you can write to MYSQL readable replicas as mentioned here https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.htmlyes C is the answer.C agree<br>https://aws.amazon.com/blogs/aws/amazon-aurora-backtrack-turn-back-time/",
            "upvote_count": "111322",
            "selected_answers": ""
          },
          {
            "id": 692516,
            "date": "Wed 12 Oct 2022 02:06",
            "username": "Jiang_aws1",
            "content": "if using clone then will be OKbut not Replicas - Read only",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 523106,
            "date": "Thu 13 Jan 2022 21:34",
            "username": "Khasta",
            "content": "Yes you can write to MYSQL readable replicas as mentioned here https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 133720,
            "date": "Mon 27 Sep 2021 09:33",
            "username": "chicagomassageseekerBillyMadison",
            "content": "yes C is the answer.C agree<br>https://aws.amazon.com/blogs/aws/amazon-aurora-backtrack-turn-back-time/",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 139868,
            "date": "Wed 29 Sep 2021 01:17",
            "username": "BillyMadison",
            "content": "C agree<br>https://aws.amazon.com/blogs/aws/amazon-aurora-backtrack-turn-back-time/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 724559,
            "date": "Tue 22 Nov 2022 19:24",
            "username": "awsexams",
            "content": "I will go with A as well, mainly because of the wording on \\\"correct restore point\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 696321,
            "date": "Sun 16 Oct 2022 17:12",
            "username": "awsjjj",
            "content": "Key word is \\\"Multiple team members are working on the project, making it difficult to find the correct restore point for each mistake.\\\"Hence A.  you can write into mysql read replica",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 685766,
            "date": "Mon 03 Oct 2022 22:10",
            "username": "Jiang_aws1",
            "content": "X A : even give few Read Replicas, but each team members still need to wait few hrs their own restore so more Replicas don't fix issue.<br>C is correct,each backtrack only take few mins",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 633817,
            "date": "Wed 20 Jul 2022 05:44",
            "username": "niau",
            "content": "IMHO the right answer is A.  As the question said, \\\"multiple team memebers are involved in the project, which makes difficult to identify the right restoartion point...\\\"",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 632497,
            "date": "Sun 17 Jul 2022 10:07",
            "username": "db2luwdba",
            "content": "Multiple team members are involved in the project, which makes it difficult to identify the right restoration point for each error.<br>Every body making their own set of changes and later reverting it<br>So A is correct choice.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 632207,
            "date": "Sat 16 Jul 2022 16:20",
            "username": "niau",
            "content": "A.  Ready replicas as isolated single istances",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 630396,
            "date": "Tue 12 Jul 2022 10:28",
            "username": "rlnd2000",
            "content": "I have read the question many time,what I see is ONE database, One team (... the Development team is restoring their MySQL database numerous times...) NO teams, No databases so why we need multiple replicas, how many replicas? One per error?, How many errors?,<br><br>I will go with C. ",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 610133,
            "date": "Wed 01 Jun 2022 13:31",
            "username": "dbaroger",
            "content": "A: Read replica MySQL can be writetable<br>C: Good, but this statement invalid this alternative: \\\"this Multiple team members are involved in the project, which makes it difficult to identify the right restoration point for each error\\\"",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 595355,
            "date": "Sun 01 May 2022 01:49",
            "username": "novice_expert",
            "content": "C.  Migrate to Amazon Aurora MySQL and enable the Aurora Backtrack feature",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 562585,
            "date": "Mon 07 Mar 2022 12:53",
            "username": "RotterDam",
            "content": "Got this question in my exam. (i cleared it). C is correct",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 557722,
            "date": "Mon 28 Feb 2022 01:00",
            "username": "kped21Jiang_aws1",
            "content": "A: No backtack for Non-Aurora RDSThat's why C: a. Migrate to Aurora b. enable Backtrack",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 692513,
            "date": "Wed 12 Oct 2022 02:03",
            "username": "Jiang_aws1",
            "content": "That's why C: a. Migrate to Aurora b. enable Backtrack",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 521997,
            "date": "Wed 12 Jan 2022 09:25",
            "username": "awsmonster",
            "content": "A: Read replica can be changed to writeable.<br><br>C: is incorrect due to the statement: \\\"this Multiple team members are involved in the project, which makes it difficult to identify the right restoration point for each error.\\\" While Backtrack is an excellent feature, there is simply no way to determine the right restoration point.",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 519918,
            "date": "Sun 09 Jan 2022 06:22",
            "username": "awsmonster",
            "content": "On the other hand: due to the last statement: \\\"this Multiple team members are involved in the project, which makes it difficult to identify the right restoration point for each error.\\\"<br><br>Aurora MySQL may not be the right solution.<br><br>Answer: A multiple read replicas seem more appropriate",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 513911,
            "date": "Fri 31 Dec 2021 07:19",
            "username": "nideesh",
            "content": "just because developer made mistakes and takes time to set up the environment, why would you change the architecture to Aurora MySQL. Will the production be RDS or Aurora ? If the project is already live, what is the migration strategy for RDS to Aurora ? Hence going with A.  B and D are not possible. B-> They are already using this. D no backtrack in RDS",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 510933,
            "date": "Tue 28 Dec 2021 10:15",
            "username": "Shunpin",
            "content": "I will go for C.  Actually, in Oracle, there is a similar feature called flashback. This is very useful for developer and tester to try and error many times a day with flashback to certain point. As a DBA, I can't spend much time with doing read replica in a day.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#26",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A media company is using Amazon RDS for PostgreSQL to store user data. The RDS DB instance currently has a publicly accessible setting enabled and is hosted in a public subnet. Following a recent AWS Well-Architected Framework review, a Database Specialist was given new security requirements.<br>-Only certain on-premises corporate network IPs should connect to the DB instance.<br>-Connectivity is allowed from the corporate network only.<br>Which combination of steps does the Database Specialist need to take to meet these new requirements? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BEF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#26",
            "answers": [
              {
                "choice": "<p>A. Modify the pg_hba.conf file. Add the required corporate network IPs and remove the unwanted IPs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the associated security group. Add the required corporate network IPs and remove the unwanted IPs.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Move the DB instance to a private subnet using AWS DMS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable VPC peering between the application host running on the corporate network and the VPC associated with the DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Disable the publicly accessible setting.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>F. Connect to the DB instance using private IPs and a VPN.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 26 discussion",
        "discusstion": [
          {
            "id": 153506,
            "date": "Mon 04 Oct 2021 02:28",
            "username": "Ebi",
            "content": "Answer is BEF<br>Database does not need to be in private subnet (there is no requirement in the question) disabling public accessibility will remove public IP address associated from the instance.",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 423701,
            "date": "Mon 25 Oct 2021 08:20",
            "username": "ChauPhanguru_ji",
            "content": "B E F are the answers.<br>D is not correct because there is on-premise network, VPC peering is for AWS VPC - AWS VPC<br>C is not correct. DMS is using for DB migration, not subnet modificationCorrect Answer >> B,E,F",
            "upvote_count": "71",
            "selected_answers": ""
          },
          {
            "id": 430160,
            "date": "Wed 03 Nov 2021 22:59",
            "username": "guru_ji",
            "content": "Correct Answer >> B,E,F",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 594782,
            "date": "Sat 30 Apr 2022 03:35",
            "username": "novice_expertkush_sumit",
            "content": "x A.  RDS you don't edit config files directlyB.  Modify the security group. Add the required corporate network IPs and remove the unwanted IPs<br>x C.  sunet change by DMS?<br>x D.  VPC peering is within AWS onlyE.  disable publicly accessibleF.  .Connect to the DB instance using private IPs and a VPN.You cant ssh directly into rds how would you connect using private IP's?",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: BEF"
          },
          {
            "id": 626533,
            "date": "Sun 03 Jul 2022 13:41",
            "username": "kush_sumit",
            "content": "You cant ssh directly into rds how would you connect using private IP's?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 561470,
            "date": "Sat 05 Mar 2022 15:22",
            "username": "RotterDam",
            "content": "1) Security Groups HAS to be done to restrict DB access to specific IPS<br>2) Public accessibility hasto be removed<br>3) Corp to AWS VPN has to be enabled to secure traffic",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BEF"
          },
          {
            "id": 555710,
            "date": "Fri 25 Feb 2022 03:49",
            "username": "tugboat",
            "content": "agree with others",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BEF"
          },
          {
            "id": 528409,
            "date": "Thu 20 Jan 2022 14:00",
            "username": "awsmonster",
            "content": "F is incorrect. RDS uses endpoint, not IP address.<br><br>I vote for BCE",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 490584,
            "date": "Tue 30 Nov 2021 11:32",
            "username": "GMartinelli",
            "content": "B, E & F",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BEF"
          },
          {
            "id": 342862,
            "date": "Sun 24 Oct 2021 22:39",
            "username": "manan728",
            "content": "B,C and E are correct. You need to migrate the database to private subnet before you can disable the publicly accessible setting in the console.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 298703,
            "date": "Fri 22 Oct 2021 09:46",
            "username": "Windy",
            "content": "BEF for me",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 297907,
            "date": "Tue 19 Oct 2021 05:15",
            "username": "myutran",
            "content": "Ans: BEF",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 253143,
            "date": "Mon 18 Oct 2021 14:23",
            "username": "JobinAkaJoe",
            "content": "I will go with BEF. <br>Ideally db should be moved to private subnet.But using DMS for that makes C a wrong choice",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 246497,
            "date": "Mon 18 Oct 2021 07:19",
            "username": "kilkarChauPhan",
            "content": "BDF<br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-connectivity-instance-subnet-vpc/<br>https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.htmlVPC peering is between AWS VPCs, not between on-primise network and AWS VPC",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 424092,
            "date": "Wed 27 Oct 2021 20:28",
            "username": "ChauPhan",
            "content": "VPC peering is between AWS VPCs, not between on-primise network and AWS VPC",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 221527,
            "date": "Sat 16 Oct 2021 01:03",
            "username": "[Removed]",
            "content": "F- Connect to DB instance using VPC peering - At which point in this question does it mention the need to connect to other VPC's?Best practices in AWS doco state that (see the Note) - - https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC. WorkingWithRDSInstanceinaVPC. html#USER_VPC. Hiding",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212024,
            "date": "Tue 12 Oct 2021 06:29",
            "username": "Ashoks",
            "content": "B,C,E,F are probable answers.<br>C - database needs to moved private to public subnet, however, migration can be done through snapshot instead dms.<br>So BEF would be the answers",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 209983,
            "date": "Sun 10 Oct 2021 03:29",
            "username": "Manmohan",
            "content": "BEF for me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 196487,
            "date": "Tue 05 Oct 2021 08:29",
            "username": "halol",
            "content": "BEF the most correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 150726,
            "date": "Sun 03 Oct 2021 01:49",
            "username": "szmulderBillyCMultiAZLMax",
            "content": "BEF for me. I don't think we need using the DMS to move it to the private subnet. Just using the snapshot will do. And why we need move it to private subnetA database must be in a private subnetThis is veru good practice, indeed, but is not requirement here. And using DMS to move it (instead of snapshot or RR) is very, very strange. That's why C stinks. BEF for meAgree with all points. BEF for me.",
            "upvote_count": "1231",
            "selected_answers": ""
          },
          {
            "id": 151183,
            "date": "Sun 03 Oct 2021 16:54",
            "username": "BillyCMultiAZLMax",
            "content": "A database must be in a private subnetThis is veru good practice, indeed, but is not requirement here. And using DMS to move it (instead of snapshot or RR) is very, very strange. That's why C stinks. BEF for meAgree with all points. BEF for me.",
            "upvote_count": "231",
            "selected_answers": ""
          },
          {
            "id": 272615,
            "date": "Tue 19 Oct 2021 00:04",
            "username": "MultiAZLMax",
            "content": "This is veru good practice, indeed, but is not requirement here. And using DMS to move it (instead of snapshot or RR) is very, very strange. That's why C stinks. BEF for meAgree with all points. BEF for me.",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 314794,
            "date": "Sat 23 Oct 2021 00:04",
            "username": "LMax",
            "content": "Agree with all points. BEF for me.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#27",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is about to launch a new product, and test databases must be re-created from production data. The company runs its production databases on an<br>Amazon Aurora MySQL DB cluster. A Database Specialist needs to deploy a solution to create these test databases as quickly as possible with the least amount of administrative effort.<br>What should the Database Specialist do to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#27",
            "answers": [
              {
                "choice": "<p>A. Restore a snapshot from the production cluster into test clusters<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create logical dumps of the production cluster and restore them into new test clusters<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use database cloning to create clones of the production cluster<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add an additional read replica to the production cluster and use that node for testing<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 27 discussion",
        "discusstion": [
          {
            "id": 139876,
            "date": "Fri 15 Oct 2021 19:16",
            "username": "BillyMadison",
            "content": "C. <br>https://aws.amazon.com/getting-started/hands-on/aurora-cloning-backtracking/<br>\\\"Cloning an Aurora cluster is extremely useful if you want to assess the impact of changes to your database, or if you need to perform workload-intensive operations=E2=80=94such as exporting data or running analytical queries, or simply if you want to use a copy of your production database in a development or testing environment. You can make multiple clones of your Aurora DB cluster. You can even create additional clones from other clones, with the constraint that the clone databases must be created in the same region as the source databases.",
            "upvote_count": "16",
            "selected_answers": ""
          },
          {
            "id": 682848,
            "date": "Thu 29 Sep 2022 18:30",
            "username": "Jiang_aws1",
            "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html<br>Creating a clone is faster and more space-efficient than physically copying the data using other techniques, such as restoring a snapshot.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595376,
            "date": "Sun 01 May 2022 03:04",
            "username": "novice_expert",
            "content": "C.  Use database cloning to create clones of the production cluster<br><br>Cloning is best choice with \\\"copy-on-write\\\" protocol, database becomes available in a few mins.<br><br>https://aws.amazon.com/getting-started/hands-on/aurora-cloning-backtracking/<br>\\\"Cloning an Aurora cluster is extremely useful if you want to assess the impact of changes to your database, or if you need to perform workload-intensive operations=E2=80=94such as exporting data or running analytical queries, or simply if you want to use a copy of your production database in a development or testing environment. You can make multiple clones of your Aurora DB cluster. You can even create additional clones from other clones, with the constraint that the clone databases must be created in the same region as the source databases.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 539863,
            "date": "Thu 03 Feb 2022 18:40",
            "username": "AriraAWS",
            "content": "Cloning is best choice with \\\"copy-on-write\\\" protocol, database becomes available in a few mins.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 314795,
            "date": "Wed 03 Nov 2021 03:51",
            "username": "LMax",
            "content": "Answer C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 297913,
            "date": "Tue 02 Nov 2021 21:04",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253149,
            "date": "Tue 02 Nov 2021 17:09",
            "username": "JobinAkaJoe",
            "content": "Answer is C<br>Aurora copy-on-write clones are best suited for this requirement",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 165213,
            "date": "Sat 23 Oct 2021 19:26",
            "username": "BillyC",
            "content": "Yes, C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 135572,
            "date": "Tue 12 Oct 2021 13:26",
            "username": "jnassp1",
            "content": "C Database Clone is quickest and the right approach. Takes secs..",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 135404,
            "date": "Mon 11 Oct 2021 01:03",
            "username": "Mickysingh",
            "content": "C is correct as we have least admin effort and quck",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 134226,
            "date": "Fri 08 Oct 2021 10:00",
            "username": "BillyC",
            "content": "D here!",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 133092,
            "date": "Sat 02 Oct 2021 18:52",
            "username": "[Removed]Ebi",
            "content": "D is neither least administrative nor will it meet the requirement. A is simplest for meRestoring from snapshot is never quick.<br>Answer is C",
            "upvote_count": "25",
            "selected_answers": ""
          },
          {
            "id": 153509,
            "date": "Wed 20 Oct 2021 17:25",
            "username": "Ebi",
            "content": "Restoring from snapshot is never quick.<br>Answer is C",
            "upvote_count": "5",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#28",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company with branch offices in Portland, New York, and Singapore has a three-tier web application that leverages a shared database. The database runs on<br>Amazon RDS for MySQL and is hosted in the us-west-2 Region. The application has a distributed front end deployed in the us-west-2, ap-southheast-1, and us- east-2 Regions.<br>This front end is used as a dashboard for Sales Managers in each branch office to see current sales statistics. There are complaints that the dashboard performs more slowly in the Singapore location than it does in Portland or New York. A solution is needed to provide consistent performance for all users in each location.<br>Which set of actions will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#28",
            "answers": [
              {
                "choice": "<p>A. Take a snapshot of the instance in the us-west-2 Region. Create a new instance from the snapshot in the ap-southeast-1 Region. Reconfigure the ap- southeast-1 front-end dashboard to access this instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an RDS read replica in the ap-southeast-1 Region from the primary RDS DB instance in the us-west-2 Region. Reconfigure the ap-southeast-1 front- end dashboard to access this instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a new RDS instance in the ap-southeast-1 Region. Use AWS DMS and change data capture (CDC) to update the new instance in the ap-southeast-1 Region. Reconfigure the ap-southeast-1 front-end dashboard to access this instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an RDS read replica in the us-west-2 Region where the primary instance resides. Create a read replica in the ap-southeast-1 Region from the read replica located on the us-west-2 Region. Reconfigure the ap-southeast-1 front-end dashboard to access this instance.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 28 discussion",
        "discusstion": [
          {
            "id": 139882,
            "date": "Sun 03 Oct 2021 06:14",
            "username": "BillyMadisonkhchan123",
            "content": "Leaning to B. <br>https://aws.amazon.com/rds/features/read-replicas/<br>\\\"Amazon RDS Read Replicas provide enhanced performance and durability for RDS database (DB) instances. They make it easy to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads. You can create one or more replicas of a given source DB Instance and serve high-volume application read traffic from multiple copies of your data, thereby increasing aggregate read throughput. \\\"Agree it's B. ",
            "upvote_count": "161",
            "selected_answers": ""
          },
          {
            "id": 603730,
            "date": "Thu 19 May 2022 10:37",
            "username": "khchan123",
            "content": "Agree it's B. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 133097,
            "date": "Thu 30 Sep 2021 12:02",
            "username": "[Removed]",
            "content": "If they go with A, how do they keep the databases in sync?<br>B for me",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 729438,
            "date": "Mon 28 Nov 2022 17:49",
            "username": "examineme",
            "content": "B is the answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 627654,
            "date": "Wed 06 Jul 2022 02:50",
            "username": "sachin",
            "content": "You can create read replication from a already existing replica, but the replication lag will be high. So D is operationally possible but replication lag will be high.<br>So correct answer is B. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 620944,
            "date": "Thu 23 Jun 2022 13:49",
            "username": "ryuhei",
            "content": "Answer:B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 595194,
            "date": "Sat 30 Apr 2022 20:12",
            "username": "novice_expert",
            "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.XRgn.html<br>You can create replicas through Region same way as in same region<br><br>Create an RDS read replica in the ap-southeast-1 Region from the primary RDS DB instance in the us-west-2 Region. Reconfigure the ap-southeast-1 front- end dashboard to access this instance.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 539238,
            "date": "Thu 03 Feb 2022 00:03",
            "username": "AriraAWS",
            "content": "B is the right answer!!",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 424319,
            "date": "Wed 03 Nov 2021 21:26",
            "username": "ChauPhan",
            "content": "B is correct. You can create replicas through Region<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.XRgn.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 364652,
            "date": "Mon 01 Nov 2021 20:36",
            "username": "Dip11",
            "content": "I will go with B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314798,
            "date": "Sun 31 Oct 2021 16:24",
            "username": "LMax",
            "content": "Would go with B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 297917,
            "date": "Sun 31 Oct 2021 07:21",
            "username": "myutran",
            "content": "Ans: B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 285529,
            "date": "Sat 30 Oct 2021 12:18",
            "username": "Bassel",
            "content": "Not sure why you all excluded C.  It is definitely a good solution to keep two databases in sync using DMS with CDC. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 274120,
            "date": "Thu 21 Oct 2021 18:32",
            "username": "GlendonRadhaghosh",
            "content": "D is incorrect - we cannot replica-chain. E. g. we cannot create a read-replica from another read-replica. The answer is B. That is not the reason why D is wrong. Read Replica is Source (us-west-2) is not required for this use case.<br>If a read replica is running any version of MySQL, you can specify it as the source DB instance for another read replica. For example, you can create ReadReplica1 from MyDBInstance, and then create ReadReplica2 from ReadReplica1. Updates made to MyDBInstance are replicated to ReadReplica1 and then replicated from ReadReplica1 to ReadReplica2. You can't have more than four instances involved in a replication chain. For example, you can create ReadReplica1 from MySourceDBInstance, and then create ReadReplica2 from ReadReplica1, and then create ReadReplica3 from ReadReplica2, but you can't create a ReadReplica4 from ReadReplica3.",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 605589,
            "date": "Sun 22 May 2022 17:09",
            "username": "Radhaghosh",
            "content": "That is not the reason why D is wrong. Read Replica is Source (us-west-2) is not required for this use case.<br>If a read replica is running any version of MySQL, you can specify it as the source DB instance for another read replica. For example, you can create ReadReplica1 from MyDBInstance, and then create ReadReplica2 from ReadReplica1. Updates made to MyDBInstance are replicated to ReadReplica1 and then replicated from ReadReplica1 to ReadReplica2. You can't have more than four instances involved in a replication chain. For example, you can create ReadReplica1 from MySourceDBInstance, and then create ReadReplica2 from ReadReplica1, and then create ReadReplica3 from ReadReplica2, but you can't create a ReadReplica4 from ReadReplica3.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 212029,
            "date": "Mon 18 Oct 2021 11:14",
            "username": "Ashoks",
            "content": "Ans - B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 203003,
            "date": "Mon 18 Oct 2021 07:56",
            "username": "Jack86",
            "content": "A : FALSE . No SYNC Mechanism configured<br> B : TRUE<br> C : FALSE . aws dms Essentially for Migration Purposes<br> D : FALSE : ( as stated by szmulder) You can only create a cross-Region Amazon RDS read replica from a source Amazon RDS DB instance that is not a read replica of another Amazon RDS DB instance.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html#USER_ReadRepl.XRgn<br><br>Correct answer is B .",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 153513,
            "date": "Sun 17 Oct 2021 13:27",
            "username": "Ebi",
            "content": "Correct answer is B",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 145744,
            "date": "Thu 07 Oct 2021 10:02",
            "username": "BillyC",
            "content": "I thinkis correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#29",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to migrate its existing on-premises Oracle database to Amazon Aurora PostgreSQL. The migration must be completed with minimal downtime using AWS DMS. A Database Specialist must validate that the data was migrated accurately from the source to the target before the cutover. The migration must have minimal impact on the performance of the source database.<br>Which approach will MOST effectively meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#29",
            "answers": [
              {
                "choice": "<p>A. Use the AWS Schema Conversion Tool (AWS SCT) to convert source Oracle database schemas to the target Aurora DB cluster. Verify the datatype of the columns.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the table metrics of the AWS DMS task created for migrating the data to verify the statistics for the tables being migrated and to verify that the data definition language (DDL) statements are completed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable the AWS Schema Conversion Tool (AWS SCT) premigration validation and review the premigration checklist to make sure there are no issues with the conversion.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable AWS DMS data validation on the task so the AWS DMS task compares the source and target records, and reports any mismatches.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 29 discussion",
        "discusstion": [
          {
            "id": 314803,
            "date": "Tue 02 Nov 2021 22:33",
            "username": "LMax",
            "content": "Answer D",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 314802,
            "date": "Sun 31 Oct 2021 04:06",
            "username": "LMax",
            "content": "Answer D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 297919,
            "date": "Mon 25 Oct 2021 08:57",
            "username": "myutran",
            "content": "Ans: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212030,
            "date": "Sun 24 Oct 2021 23:06",
            "username": "Ashoks",
            "content": "D is correct",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 153753,
            "date": "Sat 16 Oct 2021 05:32",
            "username": "zanhsieh",
            "content": "D.  AWS Schema Conversion Tool is used to perform before migration, not after. \\\"Database Specialist must validate that the data was migrated accurately from the source to the target before the cutover.\\\" means the migration tasks already happened.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 152618,
            "date": "Wed 13 Oct 2021 13:08",
            "username": "halol",
            "content": "D is the correct answer as it asks for validation data we can enable validate data in DMS",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 145042,
            "date": "Sun 03 Oct 2021 19:54",
            "username": "lui",
            "content": "Ans: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 141673,
            "date": "Fri 01 Oct 2021 16:33",
            "username": "pan24",
            "content": "Ans:D<br>During data validation, AWS DMS compares each row in the source with its corresponding row at the target, and verifies that those rows contain the same data.<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Validating.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 139887,
            "date": "Wed 29 Sep 2021 22:30",
            "username": "BillyMadisonBillyMadison",
            "content": "Leaning towards C. <br>https://docs.aws.amazon.com/dms/latest/sbs/CHAP_RDSOracle2PostgreSQL.Prerequisites.html<br>https://aws.amazon.com/blogs/database/aws-schema-conversion-tool-blog-series-introducing-new-features-in-build-616/Adjusting answer to D because of the following link<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Validating.html",
            "upvote_count": "15",
            "selected_answers": ""
          },
          {
            "id": 149941,
            "date": "Fri 08 Oct 2021 11:13",
            "username": "BillyMadison",
            "content": "Adjusting answer to D because of the following link<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Validating.html",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 139517,
            "date": "Sat 25 Sep 2021 14:06",
            "username": "awscamusszmulderDip11",
            "content": "C is the answer. Pls refer to https://docs.aws.amazon.com/dms/latest/sbs/CHAP_RDSOracle2Aurora.htmlThat's for Migrating Oracle to mysql, the question for Oracle to Aurora Oracle.There is no such thing as Aurora Oracle.I think answer is D. ",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 151405,
            "date": "Tue 12 Oct 2021 14:59",
            "username": "szmulderDip11",
            "content": "That's for Migrating Oracle to mysql, the question for Oracle to Aurora Oracle.There is no such thing as Aurora Oracle.I think answer is D. ",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 364659,
            "date": "Fri 05 Nov 2021 00:30",
            "username": "Dip11",
            "content": "There is no such thing as Aurora Oracle.I think answer is D. ",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#30",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is planning to close for several days. A Database Specialist needs to stop all applications along with the DB instances to ensure employees do not have access to the systems during this time. All databases are running on Amazon RDS for MySQL.<br>The Database Specialist wrote and ran a script to stop all the DB instances. When reviewing the logs, the Database Specialist found that Amazon RDS DB instances with read replicas did not stop.<br>How should the Database Specialist edit the script to fix this issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#30",
            "answers": [
              {
                "choice": "<p>A. Stop the source instances before stopping their read replicas<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Delete each read replica before stopping its corresponding source instance<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Stop the read replicas before stopping their source instances<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the AWS CLI to stop each read replica and source instance at the same time<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 30 discussion",
        "discusstion": [
          {
            "id": 139595,
            "date": "Sun 19 Sep 2021 20:21",
            "username": "awscamus",
            "content": "B.  Because You can't stop a DB instance that has a read replica, or that is a read replica.https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html",
            "upvote_count": "18",
            "selected_answers": ""
          },
          {
            "id": 699030,
            "date": "Wed 19 Oct 2022 14:34",
            "username": "sayed",
            "content": "B because<br>=E2=80=A2 Can stop an RDS instance only if it does not have a replica<br>=E2=80=A2 Cannot stop an RDS replica",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 696336,
            "date": "Sun 16 Oct 2022 17:29",
            "username": "awsjjj",
            "content": "You can't stop a DB instance that has a read replica, or that is a read replica",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 605036,
            "date": "Sat 21 May 2022 23:43",
            "username": "awsguys",
            "content": "B. as terminated all database instances",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595205,
            "date": "Sat 30 Apr 2022 20:25",
            "username": "novice_expertnovice_expert",
            "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.Concepts.General.SSL.Using.html<br>D. addressing the port where the RDS DB instance is listening for encrypted connections (communications connection failure > port)sorry it is for next question.<br>For this one answer is B",
            "upvote_count": "12",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 595206,
            "date": "Sat 30 Apr 2022 20:26",
            "username": "novice_expert",
            "content": "sorry it is for next question.<br>For this one answer is B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 595200,
            "date": "Sat 30 Apr 2022 20:19",
            "username": "novice_expert",
            "content": "B.  Delete each read replica before stopping its corresponding source instance<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html<br><br>Limitations<br>The following are some limitations to stopping and starting a DB instance:<br><br>You can't stop a DB instance that has a read replica, or that is a read replica.<br><br>You can't stop an Amazon RDS for SQL Server DB instance in a Multi-AZ configuration.<br><br>You can't modify a stopped DB instance.<br><br>You can't delete an option group that is associated with a stopped DB instance.<br><br>You can't delete a DB parameter group that is associated with a stopped DB instance.<br><br>In a Multi-AZ configuration, the primary and secondary Availability Zones might be switched after you start the DB instance.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 585170,
            "date": "Wed 13 Apr 2022 13:43",
            "username": "kret",
            "content": "\\\"You can't stop a DB instance that has a read replica, or that is a read replica.\\\"",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 424326,
            "date": "Sat 06 Nov 2021 09:28",
            "username": "ChauPhan",
            "content": "B is correct<br>Limitations<br>The following are some limitations to stopping and starting a DB instance:<br>You can't stop a DB instance that has a read replica, or that is a read repl",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314807,
            "date": "Tue 02 Nov 2021 15:34",
            "username": "LMax",
            "content": "Answer B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 297920,
            "date": "Mon 01 Nov 2021 04:27",
            "username": "myutran",
            "content": "Ans: B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253154,
            "date": "Sat 23 Oct 2021 07:08",
            "username": "JobinAkaJoe",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 226100,
            "date": "Thu 14 Oct 2021 02:29",
            "username": "Billhardy",
            "content": "Answer is B.  The read replicas need to be deleted in order to stop the primary.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212032,
            "date": "Mon 04 Oct 2021 05:10",
            "username": "Ashoks",
            "content": "Ans is B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 145746,
            "date": "Thu 30 Sep 2021 20:10",
            "username": "BillyC",
            "content": "Ans B is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 139891,
            "date": "Mon 20 Sep 2021 04:34",
            "username": "BillyMadison",
            "content": "I think B. <br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html<br>\\\"The following are some limitations to stopping and starting a DB instance:<br>You can't stop a DB instance that has a read replica, or that is a read replica.\\\"<br>So if you cant stop a db with a read replica, you have to delete the read replica first to then stop it???<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_MySQL.Replication.ReadReplicas.html#USER_MySQL.Replication.ReadReplicas.StartStop",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#31",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A global digital advertising company captures browsing metadata to contextually display relevant images, pages, and links to targeted users. A single page load can generate multiple events that need to be stored individually. The maximum size of an event is 200 KB and the average size is 10 KB.  Each page load must query the user's browsing history to provide targeting recommendations. The advertising company expects over 1 billion page visits per day from users in the<br>United States, Europe, Hong Kong, and India. The structure of the metadata varies depending on the event. Additionally, the browsing metadata must be written and read with very low latency to ensure a good viewing experience for the users.<br>Which database solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#31",
            "answers": [
              {
                "choice": "<p>A. Amazon DocumentDB<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon RDS Multi-AZ deployment<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon DynamoDB global table<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon Aurora Global Database<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 31 discussion",
        "discusstion": [
          {
            "id": 153530,
            "date": "Wed 29 Sep 2021 06:59",
            "username": "EbiszmulderChauPhan",
            "content": "Answer is C<br>\\\" The structure of the metadata varies depending on the event.\\\" Aurora is RDBMS, structure is fixed, so D can NOT be the answerfor the \\\" The structure of the metadata varies depending on the event.\\\", RDS can also handle that, just need create different table for store different event, or mysql support store json as data type..The structure of the metadata varies depending on the event > it is very hard to handle by DB schemas/tables.",
            "upvote_count": "611",
            "selected_answers": ""
          },
          {
            "id": 174198,
            "date": "Sun 17 Oct 2021 00:32",
            "username": "szmulderChauPhan",
            "content": "for the \\\" The structure of the metadata varies depending on the event.\\\", RDS can also handle that, just need create different table for store different event, or mysql support store json as data type..The structure of the metadata varies depending on the event > it is very hard to handle by DB schemas/tables.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 424331,
            "date": "Sun 07 Nov 2021 16:04",
            "username": "ChauPhan",
            "content": "The structure of the metadata varies depending on the event > it is very hard to handle by DB schemas/tables.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 428754,
            "date": "Sun 07 Nov 2021 16:54",
            "username": "guru_ji",
            "content": "Correct Answer >> C.  any idea how much Q we will get in real exam from Q available here? anyone is preparing for this exam and want to do group study with us, comment with mail id.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314820,
            "date": "Thu 04 Nov 2021 21:42",
            "username": "LMax",
            "content": "C for sure.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 297922,
            "date": "Wed 03 Nov 2021 16:25",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253160,
            "date": "Mon 01 Nov 2021 05:20",
            "username": "JobinAkaJoe",
            "content": "Flexible schema, low latency, billions of transactions per day, global customers --- perfect use-case for dynamoDB global tables",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 212034,
            "date": "Sun 24 Oct 2021 16:26",
            "username": "Ashoks",
            "content": "C - Dynamo DB covers variable size/semi-structured data",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 153948,
            "date": "Sat 02 Oct 2021 04:41",
            "username": "lannyBillyMadison",
            "content": "where can I find all the questions?https://www.examtopics.com/exams/amazon/aws-certified-database-specialty/ is not workingYou haveto search for each numbered questions individually, 1 thru 85. I have been googling \\\"examtopics certified database question 31\\\" to see this one and then do it for each question.Sometimes only the cache version is available.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 161490,
            "date": "Mon 11 Oct 2021 12:06",
            "username": "BillyMadison",
            "content": "You haveto search for each numbered questions individually, 1 thru 85. I have been googling \\\"examtopics certified database question 31\\\" to see this one and then do it for each question.Sometimes only the cache version is available.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 150410,
            "date": "Wed 22 Sep 2021 05:38",
            "username": "BillyC",
            "content": "Please thoughs",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 140230,
            "date": "Tue 21 Sep 2021 14:20",
            "username": "BillyMadisonszmulderszmulderBillyMadison",
            "content": "It's either C or D<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html<br>https://aws.amazon.com/rds/aurora/global-database/D is not correct. due to the \\\"read and write\\\" requirement. aurora global db can only support read from other region.I mean \\\"written and read with very low latency\\\" is required.Going with C due to \\\"The structure of the metadata varies depending on the event\\\"",
            "upvote_count": "1214",
            "selected_answers": ""
          },
          {
            "id": 151413,
            "date": "Thu 23 Sep 2021 20:25",
            "username": "szmulderszmulder",
            "content": "D is not correct. due to the \\\"read and write\\\" requirement. aurora global db can only support read from other region.I mean \\\"written and read with very low latency\\\" is required.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 151414,
            "date": "Sat 25 Sep 2021 13:22",
            "username": "szmulder",
            "content": "I mean \\\"written and read with very low latency\\\" is required.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 161492,
            "date": "Wed 13 Oct 2021 14:48",
            "username": "BillyMadison",
            "content": "Going with C due to \\\"The structure of the metadata varies depending on the event\\\"",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 135654,
            "date": "Mon 20 Sep 2021 17:57",
            "username": "BillyC",
            "content": "Yes C its correct!",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#32",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist modified an existing parameter group currently associated with a production Amazon RDS for SQL Server Multi-AZ DB instance. The change is associated with a static parameter type, which controls the number of user connections allowed on the most critical RDS SQL Server DB instance for the company. This change has been approved for a specific maintenance window to help minimize the impact on users.<br>How should the Database Specialist apply the parameter group change for the DB instance?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#32",
            "answers": [
              {
                "choice": "<p>A. Select the option to apply the change immediately<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Allow the preconfigured RDS maintenance window for the given DB instance to control when the change is applied<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Apply the change manually by rebooting the DB instance during the approved maintenance window<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Reboot the secondary Multi-AZ DB instance<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 32 discussion",
        "discusstion": [
          {
            "id": 561723,
            "date": "Sun 06 Mar 2022 02:15",
            "username": "RotterDam",
            "content": "C - static parametersrequire a manual reboot. You can either do it immediately or during the maintenance window",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 699033,
            "date": "Wed 19 Oct 2022 14:38",
            "username": "sayed",
            "content": "C<br><br>changing static parameters in a Parameter Group requires a manual reboot, RDS will not reboot the instance during maintenance window.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 595191,
            "date": "Sat 30 Apr 2022 20:07",
            "username": "novice_expert",
            "content": "C.  Apply the change manually by rebooting the DB instance during the approved maintenance window",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 483049,
            "date": "Sun 21 Nov 2021 07:30",
            "username": "keitahigaki",
            "content": "Ans C<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html#USER_WorkingWithParamGroups.Modifying",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 479454,
            "date": "Tue 16 Nov 2021 16:18",
            "username": "toppic26",
            "content": "Answer is C",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#33",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist is designing a new database infrastructure for a ride hailing application. The application data includes a ride tracking system that stores<br>GPS coordinates for all rides. Real-time statistics and metadata lookups must be performed with high throughput and microsecond latency. The database should be fault tolerant with minimal operational overhead and development effort.<br>Which solution meets these requirements in the MOST efficient way?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#33",
            "answers": [
              {
                "choice": "<p>A. Use Amazon RDS for MySQL as the database and use Amazon ElastiCache<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon DynamoDB as the database and use DynamoDB Accelerator<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon Aurora MySQL as the database and use Aurora's buffer cache<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon DynamoDB as the database and use Amazon API Gateway<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 33 discussion",
        "discusstion": [
          {
            "id": 137616,
            "date": "Thu 23 Sep 2021 03:48",
            "username": "learnawsBillyMadison",
            "content": "B.  keyword here is microsecond. DAX has thatAgree, microsecondDynamoDB Dax<br>https://aws.amazon.com/dynamodb/dax/#:~:textAmazon%20DynamoDB%20Accelerator%20(DAX)%20is,millions%20of%20requests%20per%20second.<br>\\\"Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement =E2=80=93 from milliseconds to microseconds =E2=80=93 even at millions of requests per second. \\\"",
            "upvote_count": "134",
            "selected_answers": ""
          },
          {
            "id": 140240,
            "date": "Sat 25 Sep 2021 14:54",
            "username": "BillyMadison",
            "content": "Agree, microsecondDynamoDB Dax<br>https://aws.amazon.com/dynamodb/dax/#:~:textAmazon%20DynamoDB%20Accelerator%20(DAX)%20is,millions%20of%20requests%20per%20second.<br>\\\"Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement =E2=80=93 from milliseconds to microseconds =E2=80=93 even at millions of requests per second. \\\"",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 629431,
            "date": "Sun 10 Jul 2022 06:29",
            "username": "sachin",
            "content": "Since the data lookup should be consistent and real time ,so eventual consistency will not work. DAX will not help . I think D is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 610246,
            "date": "Wed 01 Jun 2022 18:08",
            "username": "Dantas",
            "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 594111,
            "date": "Fri 29 Apr 2022 01:57",
            "username": "novice_expert",
            "content": "microsecond > DAX",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 501338,
            "date": "Tue 14 Dec 2021 13:17",
            "username": "GMartinelli",
            "content": "Option B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 498827,
            "date": "Fri 10 Dec 2021 17:28",
            "username": "GMartinelli",
            "content": "Option B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 314835,
            "date": "Sat 30 Oct 2021 02:01",
            "username": "LMax",
            "content": "Agree with B due to latency requirement that can be full field only with DAX",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 297981,
            "date": "Sun 24 Oct 2021 02:34",
            "username": "myutran",
            "content": "Ans: B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253166,
            "date": "Mon 18 Oct 2021 06:52",
            "username": "JobinAkaJoe",
            "content": "B -NoSQL is ideal here. DynamoDB+DAX provides microseconds latency",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 226106,
            "date": "Wed 13 Oct 2021 07:29",
            "username": "Billhardy",
            "content": "I will go with B.  DAX facilitates the requirement stated",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 212040,
            "date": "Tue 05 Oct 2021 13:36",
            "username": "Ashoks",
            "content": "Ans B.  Low latencyDynamoDB, Micro secDAX",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 196555,
            "date": "Sat 02 Oct 2021 17:40",
            "username": "halol",
            "content": "Answer is B ,",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 154274,
            "date": "Thu 30 Sep 2021 13:42",
            "username": "Ebi",
            "content": "Answer is B,<br>Microsecond latency is always NoSQL<br>API Gateway has nothing to do with requirement of this question.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 134870,
            "date": "Tue 21 Sep 2021 09:37",
            "username": "Mickysingh",
            "content": "D is correctas document says API gateway to use for minimize developer<br> efforts",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 133953,
            "date": "Tue 21 Sep 2021 07:03",
            "username": "[Removed]",
            "content": "I looked at the link, and watched the video. At no point was API gateway mentioned, Dynamo was.<br>I will go with B",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#34",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using an Amazon Aurora PostgreSQL DB cluster with an xlarge primary instance master and two large Aurora Replicas for high availability and read-only workload scaling. A failover event occurs and application performance is poor for several minutes. During this time, application servers in all Availability<br>Zones are healthy and responding normally.<br>What should the company do to eliminate this application performance issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#34",
            "answers": [
              {
                "choice": "<p>A. Configure both of the Aurora Replicas to the same instance class as the primary DB instance. Enable cache coherence on the DB cluster, set the primary DB instance failover priority to tier-0, and assign a failover priority of tier-1 to the replicas.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy an AWS Lambda function that calls the DescribeDBInstances action to establish which instance has failed, and then use the PromoteReadReplica operation to promote one Aurora Replica to be the primary DB instance. Configure an Amazon RDS event subscription to send a notification to an Amazon SNS topic to which the Lambda function is subscribed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure one Aurora Replica to have the same instance class as the primary DB instance. Implement Aurora PostgreSQL DB cluster cache management. Set the failover priority to tier-0 for the primary DB instance and one replica with the same instance class. Set the failover priority to tier-1 for the other replicas.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure both Aurora Replicas to have the same instance class as the primary DB instance. Implement Aurora PostgreSQL DB cluster cache management. Set the failover priority to tier-0 for the primary DB instance and to tier-1 for the replicas.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 34 discussion",
        "discusstion": [
          {
            "id": 760563,
            "date": "Thu 29 Dec 2022 04:55",
            "username": "RBSK",
            "content": "Tier-0 is a requirement for CCM to work. Also having more than 1 read replica with Tier-0 also disables CCM - https://docs.amazonaws.cn/en_us/AmazonRDS/latest/AuroraUserGuide/aurora_ccm_status.html<br><br>This clearly eliminates Option-D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 699040,
            "date": "Wed 19 Oct 2022 14:48",
            "username": "sayed",
            "content": "C<br><br>for CCM to work<br>1- you need to have one RR with the same instance class type and size as the writer instance<br>2- you need to set promotion priority to 0 for both writer and RR you need<br><br>the details here https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.cluster-cache-mgmt.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 620737,
            "date": "Thu 23 Jun 2022 05:42",
            "username": "sachin",
            "content": "C is correct.<br>https://aws.amazon.com/blogs/database/introduction-to-aurora-postgresql-cluster-cache-management/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 594663,
            "date": "Fri 29 Apr 2022 21:24",
            "username": "novice_expert",
            "content": "One Aurora Replica of same instance class as the primary DB<br> -> Aurora PostgreSQL DB cluster cache management<br>-> failover priority to tier-0 for the primary DB instance and one replica with the same instance class<br>-> failover priority to tier-1 for the other replicas",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 561221,
            "date": "Sat 05 Mar 2022 06:11",
            "username": "RotterDam",
            "content": "C is correct. Cluster Cache Management needs these three:<br>- Set One Replica to have same priority as Primary<br>- Set its instance classsame as Primary",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 555590,
            "date": "Thu 24 Feb 2022 22:53",
            "username": "tugboat",
            "content": "C is economical, but priorities don't need to be set as largest replica will always be first target option for failovers",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 540572,
            "date": "Fri 04 Feb 2022 19:29",
            "username": "VPup",
            "content": "CCM can be set to only one replica. That's why we put it to tier-0 to guarantee the fail over to the CCM enabled replica.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 538012,
            "date": "Tue 01 Feb 2022 17:12",
            "username": "theladnovice_expert",
            "content": "Answer is D.  The replicas must be the same size as the primary when cluster cache management is used.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.cluster-cache-mgmt.htmlNo all replicas but one where you want to fail over to, so ans is C",
            "upvote_count": "43",
            "selected_answers": ""
          },
          {
            "id": 594664,
            "date": "Fri 29 Apr 2022 21:27",
            "username": "novice_expert",
            "content": "No all replicas but one where you want to fail over to, so ans is C",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 492006,
            "date": "Thu 02 Dec 2021 00:31",
            "username": "shuraosipovtheladnovice_expert",
            "content": "Answer is C. <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.cluster-cache-mgmt.htmlFrom that link - \\\"Cluster cache management requires that the designated reader instance have the same instance class type and size (db.r5.2xlarge or db.r5.xlarge, for example) as the writer\\\"<br>Therefore both replicas are required to be the same size as the primary. I'm going for Answer Dnot both, just one is good",
            "upvote_count": "211",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 538006,
            "date": "Tue 01 Feb 2022 17:09",
            "username": "theladnovice_expert",
            "content": "From that link - \\\"Cluster cache management requires that the designated reader instance have the same instance class type and size (db.r5.2xlarge or db.r5.xlarge, for example) as the writer\\\"<br>Therefore both replicas are required to be the same size as the primary. I'm going for Answer Dnot both, just one is good",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 594665,
            "date": "Fri 29 Apr 2022 21:28",
            "username": "novice_expert",
            "content": "not both, just one is good",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 485891,
            "date": "Wed 24 Nov 2021 12:26",
            "username": "GMartinelli",
            "content": "Option C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 364709,
            "date": "Sat 30 Oct 2021 05:21",
            "username": "Dip11",
            "content": "Ans is C. Because this doc https://aws.amazon.com/blogs/database/introduction-to-aurora-postgresql-cluster-cache-management/ says to set priority of primary and one replica to zero. Which is not the case with D. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 328032,
            "date": "Wed 27 Oct 2021 17:24",
            "username": "shantest1anon9002",
            "content": "C Answer<br>Tier Priority 0 is the clue to eliminate D:The priority of 0 has nothing to do with it since more than one replica can have the same priority. The only difference appears to be cost and C will be cheaper.<br><br>\\\"You can customize the order in which your Aurora Replicas are promoted to the primary instance after a failure by assigning each replica a priority. Priorities range from 0 for the first priority to 15 for the last priority. If the primary instance fails, Amazon RDS promotes the Aurora Replica with the better priority to the new primary instance. You can modify the priority of an Aurora Replica at any time. Modifying the priority doesn't trigger a failover.<br><br>More than one Aurora Replica can share the same priority, resulting in promotion tiers. If two or more Aurora Replicas share the same priority, then Amazon RDS promotes the replica that is largest in size. If two or more Aurora Replicas share the same priority and size, then Amazon RDS promotes an arbitrary replica in the same promotion tier. \\\"",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 337711,
            "date": "Wed 27 Oct 2021 22:00",
            "username": "anon9002",
            "content": "The priority of 0 has nothing to do with it since more than one replica can have the same priority. The only difference appears to be cost and C will be cheaper.<br><br>\\\"You can customize the order in which your Aurora Replicas are promoted to the primary instance after a failure by assigning each replica a priority. Priorities range from 0 for the first priority to 15 for the last priority. If the primary instance fails, Amazon RDS promotes the Aurora Replica with the better priority to the new primary instance. You can modify the priority of an Aurora Replica at any time. Modifying the priority doesn't trigger a failover.<br><br>More than one Aurora Replica can share the same priority, resulting in promotion tiers. If two or more Aurora Replicas share the same priority, then Amazon RDS promotes the replica that is largest in size. If two or more Aurora Replicas share the same priority and size, then Amazon RDS promotes an arbitrary replica in the same promotion tier. \\\"",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 314838,
            "date": "Tue 26 Oct 2021 13:05",
            "username": "LMax",
            "content": "C and D look equally good to address the problem, but D would cost more as you upgrade all read replicas, not just 1. So for cost saving reasons would go with Answer C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 299022,
            "date": "Tue 26 Oct 2021 04:56",
            "username": "Windy",
            "content": "C for me.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 297985,
            "date": "Mon 25 Oct 2021 04:11",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253172,
            "date": "Mon 18 Oct 2021 21:29",
            "username": "JobinAkaJoe",
            "content": "I am torn between C &D. <br>Performance issue after failover lasts only for a short duration which means it has more to do with cache management than instance sizing.CCM definitely is the solution.<br>Between C & D, I will go with C considering the fact that originally read-replicas were of lower configuration for cost-saving, so its ideal to have one read-replica matching primary instance size and others with lower configuration if cost is a concern.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 226110,
            "date": "Mon 18 Oct 2021 13:57",
            "username": "Billhardy",
            "content": "Has to be C<br><br>Setting the promotion tier priority for a reader DB instance<br>You set one reader DB instance for cluster cache management. To do so, choose a reader from the Aurora PostgreSQL cluster that is the same instance class as the writer DB instance. Then set its promotion tier priority to 0.",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#35",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a database monitoring solution that uses Amazon CloudWatch for its Amazon RDS for SQL Server environment. The cause of a recent spike in<br>CPU utilization was not determined using the standard metrics that were collected. The CPU spike caused the application to perform poorly, impacting users. A<br>Database Specialist needs to determine what caused the CPU spike.<br>Which combination of steps should be taken to provide more visibility into the processes and queries running during an increase in CPU load? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#35",
            "answers": [
              {
                "choice": "<p>A. Enable Amazon CloudWatch Events and view the incoming T-SQL statements causing the CPU to spike.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable Enhanced Monitoring metrics to view CPU utilization at the RDS SQL Server DB instance level.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Implement a caching layer to help with repeated queries on the RDS SQL Server DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon QuickSight to view the SQL statement being run.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Enable Amazon RDS Performance Insights to view the database load and filter the load by waits, SQL statements, hosts, or users.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 35 discussion",
        "discusstion": [
          {
            "id": 140250,
            "date": "Mon 04 Oct 2021 23:17",
            "username": "BillyMadison",
            "content": "B&E as well<br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-instance-high-cpu/<br>\\\"Several factors can cause an increase in CPU utilization. For example, user-initiated heavy workloads, analytic queries, prolonged deadlocks and lock waits, multiple concurrent transactions, long-running transactions, or other processes that utilize CPU resources.<br>First, you can identify the source of the CPU usage by:<br>Using Enhanced Monitoring<br>Using Performance Insights\\\"",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 314841,
            "date": "Sun 17 Oct 2021 04:28",
            "username": "LMax",
            "content": "B & E for me too",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 594629,
            "date": "Fri 29 Apr 2022 19:54",
            "username": "novice_expert",
            "content": "you can identify the source of the CPU usage by:<br>Using Enhanced Monitoring<br>Using Performance Insights\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 555555,
            "date": "Thu 24 Feb 2022 22:03",
            "username": "tugboat",
            "content": "Gets good visibility",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 297986,
            "date": "Thu 14 Oct 2021 20:08",
            "username": "myutran",
            "content": "Ans: BE",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 154322,
            "date": "Wed 06 Oct 2021 07:24",
            "username": "Ebi",
            "content": "Answer is B,E",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 135664,
            "date": "Mon 04 Oct 2021 06:14",
            "username": "BillyC",
            "content": "Yes B and E here",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 134874,
            "date": "Wed 29 Sep 2021 11:34",
            "username": "Mickysingh",
            "content": "B and E",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#36",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using Amazon with Aurora Replicas for read-only workload scaling. A Database Specialist needs to split up two read-only applications so each application always connects to a dedicated replica. The Database Specialist wants to implement load balancing and high availability for the read-only applications.<br>Which solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#36",
            "answers": [
              {
                "choice": "<p>A. Use a specific instance endpoint for each replica and add the instance endpoint to each read-only application connection string.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use reader endpoints for both the read-only workload applications.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a reader endpoint for one read-only application and use an instance endpoint for the other read-only application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use custom endpoints for the two read-only applications.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 36 discussion",
        "discusstion": [
          {
            "id": 633037,
            "date": "Mon 18 Jul 2022 15:18",
            "username": "sachinsachin",
            "content": "Custome end points are usually used when custom load balancing is needed ,i.e. when specific read application should connect to comstom read replicat directed by custom rules in load balancing. When all RR are of same size, so need for custom end point reader end point will do .So B is correct",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 633038,
            "date": "Mon 18 Jul 2022 15:18",
            "username": "sachin",
            "content": "So B is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 621665,
            "date": "Fri 24 Jun 2022 15:07",
            "username": "ryuhei",
            "content": "Answer:D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 595352,
            "date": "Sun 01 May 2022 01:43",
            "username": "novice_expert",
            "content": "A custom endpoint for an Aurora cluster represents a set of DB instances (here replicas) that you choose. When you connect to the endpoint, Aurora performs load balancing and chooses one of the instances in the group to handle the connection.<br><br>we can create like two custom endpoints:<br>1. With two specific read replicas for application A,<br>another three read replicas for application B. <br>HA and meet the requirements that A and B will connect to different replicas",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 562156,
            "date": "Sun 06 Mar 2022 18:12",
            "username": "RotterDam",
            "content": "Definitely (D)",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 438311,
            "date": "Fri 05 Nov 2021 06:57",
            "username": "guru_ji",
            "content": "Answer is: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 426166,
            "date": "Thu 04 Nov 2021 19:38",
            "username": "ChauPhan",
            "content": "A is incorrect because it is not HA: \\\"Use a specific instance endpoint for each replica\\\"<br>> if the specific instance is down, connection is lost<br>B is incorrect because the demand requires 02 applications connect to different RO replicas. In case B, the traffic will be distributed among read replicas.<br>C is same with A, using one endpoint or instance does not meet the HA requirement.D.  Use custom endpoints for the two read-only applications.<br>D is correct because we can create like two customer endpoints: 1. With two specific read replicas for application A, another three read replicas for application B. <br>HA and meet the requirements that A and B will connect to different replicas",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 364718,
            "date": "Sun 31 Oct 2021 10:21",
            "username": "Dip11",
            "content": "Ans is D.  In order for application to connect to specific instance, and also provide HA by flipping DNS in case of one read replica goes down.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 314842,
            "date": "Sat 30 Oct 2021 23:16",
            "username": "LMax",
            "content": "No doubts that D is the answer.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 297992,
            "date": "Sat 30 Oct 2021 02:02",
            "username": "myutran",
            "content": "Ans: D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 293081,
            "date": "Tue 12 Oct 2021 13:04",
            "username": "ExiaExia",
            "content": "A.  For example, your client application might require more fine-grained load balancing based on workload type. In this case, you can configure multiple clients to connect to different Aurora Replicas in a DB cluster to distribute read workloads.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html#Aurora.Endpoints.ViewingThe reader endpoint load-balances connections to available Aurora Replicas in an Aurora DB cluster. It doesn't load-balance individual queries. If you want to load-balance each query to distribute the read workload for a DB cluster, open a new connection to the reader endpoint for each query.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 293082,
            "date": "Fri 22 Oct 2021 06:48",
            "username": "Exia",
            "content": "The reader endpoint load-balances connections to available Aurora Replicas in an Aurora DB cluster. It doesn't load-balance individual queries. If you want to load-balance each query to distribute the read workload for a DB cluster, open a new connection to the reader endpoint for each query.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253178,
            "date": "Sun 10 Oct 2021 17:38",
            "username": "JobinAkaJoe",
            "content": "D - Custom endpoints allows distributing workload in a customized way by grouping read-replicas of various size, configuration and location",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 226112,
            "date": "Fri 08 Oct 2021 21:51",
            "username": "Billhardy",
            "content": "D, custom endpoints",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 212067,
            "date": "Mon 04 Oct 2021 00:44",
            "username": "Ashoks",
            "content": "D.  Custom endpoint for custom requirements",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 196815,
            "date": "Sun 03 Oct 2021 03:17",
            "username": "halol",
            "content": "the answer is D , dedicated endpoint for each application by custom endpoint<br> or each application has to use reader endoint not cluster reader and this option does not exists in the answers.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 158602,
            "date": "Tue 28 Sep 2021 19:00",
            "username": "awscamus",
            "content": "D is the answer. Dedicated replica is the key",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 154365,
            "date": "Mon 27 Sep 2021 05:37",
            "username": "Ebi",
            "content": "Answer is D. <br>B is not correct, reader endpoint of the cluster performs load balancing across all reader instances, questions say reader instances must be split up between to applications.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 153917,
            "date": "Fri 24 Sep 2021 15:15",
            "username": "firbhat",
            "content": "Answer D:<br>Use case =E2=80=93 custom load balancing with HA<br>https://aws.amazon.com/about-aws/whats-new/2018/11/amazon-aurora-simplifies-workload-management-with-custom-endpoints/",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#37",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An online gaming company is planning to launch a new game with Amazon DynamoDB as its data store. The database should be designated to support the following use cases:<br>-Update scores in real time whenever a player is playing the game.<br>-Retrieve a player's score details for a specific game session.<br>A Database Specialist decides to implement a DynamoDB table. Each player has a unique user_id and each game has a unique game_id.<br>Which choice of keys is recommended for the DynamoDB table?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#37",
            "answers": [
              {
                "choice": "<p>A. Create a global secondary index with game_id as the partition key<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a global secondary index with user_id as the partition key<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a composite primary key with game_id as the partition key and user_id as the sort key<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a composite primary key with user_id as the partition key and game_id as the sort key<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 37 discussion",
        "discusstion": [
          {
            "id": 140536,
            "date": "Fri 24 Sep 2021 18:44",
            "username": "BillyMadison",
            "content": "I'm going with D based on the following links.<br>https://aws.amazon.com/blogs/database/amazon-dynamodb-gaming-use-cases-and-design-patterns/<br>\\\"EA uses the user ID as the partition key and primary key (a 1:1 modeling pattern).\\\"<br>https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/<br>\\\"Partition key and sort key: Referred to as a composite primary key, this type of key is composed of two attributes. The first attribute is the partition key, and the second attribute is the sort key.\\\"",
            "upvote_count": "17",
            "selected_answers": ""
          },
          {
            "id": 253181,
            "date": "Tue 05 Oct 2021 23:17",
            "username": "JobinAkaJoe",
            "content": "D is the best choice of keys for below requirements.<br><br>-Update scores in real time whenever a player is playing the game.-- user_id being partition key<br>-Retrieve a player's score details for a specific game session.-- game_id sort key",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 758969,
            "date": "Tue 27 Dec 2022 20:39",
            "username": "jthuma",
            "content": "D. Game_id would have lower cardinality than user_id.Say the gaming company only had 4 games with 2m users.You would want your partition to be by higher cardinality and your secondary with lower.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 728210,
            "date": "Sun 27 Nov 2022 13:44",
            "username": "fserrano",
            "content": "I'm going with C, for queries and updates game_id and user_id are always used, in addition, game_id has more high cardinality and avoids \\\"hot\\\" partitions if used as the partition key.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 683625,
            "date": "Fri 30 Sep 2022 15:50",
            "username": "JeanGat",
            "content": "D. There are going to be more user_ids than game_ids, hence user_id will be the higher cardinality valuethe better partition key.For those of you saying \\\"C\\\", are you telling me Electronic Arts has more unique games than they have users!!??!<br>https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 606373,
            "date": "Tue 24 May 2022 02:07",
            "username": "praffuln",
            "content": "If there will be player_id it will cause of hot partitioning. So D is wrong.<br>C is correct as game_id will have more high cardinality",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 603781,
            "date": "Thu 19 May 2022 12:17",
            "username": "khchan123",
            "content": "C is the answer.<br>-Scores should be updated in real time anytime a player is engaged in the game.-> game_id is the partition key<br>-Retrieve the information of a player's score for a certain gaming session. - > game_id and user_id is the primary key (i.e. user_id is the sort key)",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 595369,
            "date": "Sun 01 May 2022 02:38",
            "username": "novice_expert",
            "content": "use cases:<br>-Scores should be updated in real time anytime a player is engaged in the game. (query based on user_id only > user_id partition key)<br>-Retrieve the information of a player's score for a certain gaming session.(query based on user_id + game_id> user_id partition key, and game_id sort key)<br>D.  Create a composite primary key with user_id as the partition key and game_id as the sort key",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 584454,
            "date": "Tue 12 Apr 2022 02:11",
            "username": "randss",
            "content": "Answer is C, partition key must have high cardinality ie. game_id as there may be multiple instances of games played by each user.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 575432,
            "date": "Sat 26 Mar 2022 09:42",
            "username": "ugo009",
            "content": "I chose D.  GSI does not support strong consistency.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 426194,
            "date": "Tue 26 Oct 2021 22:04",
            "username": "ChauPhan",
            "content": "For me, both C and D can be used but C is better.<br>-Update scores in real time whenever a player is playing the game.<br>> Query by the game_id first, then update relevant user_id with his relevant score.<br>-Retrieve a player\\\"=E2=84=A2s score details for a specific game session > game_id can be used to query then specify the user_id<br>D can do the same as above. But for the query such as: Top score player for each game, C is better.<br>D is for the query such as: This player plays how many games and the score of each.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 380716,
            "date": "Thu 14 Oct 2021 18:40",
            "username": "uupadhyayjove",
            "content": "Why not C ? Any idea ?Partition key should have high cardinality. Therefore user id is better than game id as the partition key.. Answer is D",
            "upvote_count": "15",
            "selected_answers": ""
          },
          {
            "id": 508559,
            "date": "Fri 24 Dec 2021 16:38",
            "username": "jove",
            "content": "Partition key should have high cardinality. Therefore user id is better than game id as the partition key.. Answer is D",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 364743,
            "date": "Sat 09 Oct 2021 23:47",
            "username": "Dip11nideesh",
            "content": "I would go with A. <br>Reason,Need user_id as partition key for main table and global secondary index with game_id as partition key since we want to update via user_id and also retrieve via game_id. Both these options do not exists in any of the options so A seems to be nearest correct answer.https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html<br>GameScores is identified by a partition key (UserId) and a sort key (GameTitle). A query that specified the key attributes (UserId and GameTitle) would be very efficient<br>Composite primary key is the answer. For building a leader board we need global secondar index",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 510441,
            "date": "Mon 27 Dec 2021 17:01",
            "username": "nideesh",
            "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html<br>GameScores is identified by a partition key (UserId) and a sort key (GameTitle). A query that specified the key attributes (UserId and GameTitle) would be very efficient<br>Composite primary key is the answer. For building a leader board we need global secondar index",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314843,
            "date": "Wed 06 Oct 2021 20:06",
            "username": "LMax",
            "content": "Answer D",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 216008,
            "date": "Tue 05 Oct 2021 04:28",
            "username": "edmondme",
            "content": "I was going to say A since the article states game_id as the secondary index, but I think D is the answer, since you need a composite key.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 212073,
            "date": "Wed 29 Sep 2021 04:28",
            "username": "Ashoks",
            "content": "D is the answer.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 153923,
            "date": "Tue 28 Sep 2021 03:07",
            "username": "firbhat",
            "content": "Ans D:<br>Composite Key has two attributes (partition/hash key + sort/range key)",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#38",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist migrated an existing production MySQL database from on-premises to an Amazon RDS for MySQL DB instance. However, after the migration, the database needed to be encrypted at rest using AWS KMS. Due to the size of the database, reloading, the data into an encrypted database would be too time-consuming, so it is not an option.<br>How should the Database Specialist satisfy this new requirement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#38",
            "answers": [
              {
                "choice": "<p>A. Create a snapshot of the unencrypted RDS DB instance. Create an encrypted copy of the unencrypted snapshot. Restore the encrypted snapshot copy.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the RDS DB instance. Enable the AWS KMS encryption option that leverages the AWS CLI.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Restore an unencrypted snapshot into a MySQL RDS DB instance that is encrypted.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an encrypted read replica of the RDS DB instance. Promote it the master.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 38 discussion",
        "discusstion": [
          {
            "id": 140550,
            "date": "Tue 21 Sep 2021 08:33",
            "username": "BillyMadison",
            "content": "Agree with A.  This blog post also says the same steps as Micky's link.<br>\\\"However, because you can encrypt a copy of an unencrypted DB snapshot, you can effectively add encryption to an unencrypted DB instance. That is, you can create a snapshot of your DB instance, and then create an encrypted copy of that snapshot. You can then restore a DB instance from the encrypted snapshot, and thus you have an encrypted copy of your original DB instance. For more information, see Copying a Snapshot.\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html",
            "upvote_count": "15",
            "selected_answers": ""
          },
          {
            "id": 595243,
            "date": "Sat 30 Apr 2022 21:51",
            "username": "novice_expert",
            "content": "snapshot -> encrypted snapshot -> Restore the encrypted snapshot copy.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 585165,
            "date": "Wed 13 Apr 2022 13:28",
            "username": "kret",
            "content": "A is an obvious choice here",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 380718,
            "date": "Fri 05 Nov 2021 06:19",
            "username": "uupadhyayScunningham99",
            "content": "Here source database is in on premises ? How we can access snapshot of on-premises database from AWS console ? How A is possible ?its talking about the database has already been migrated to RDS, but they want to know how to encrypt it after the migration - hence a is correct",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 459582,
            "date": "Sat 06 Nov 2021 04:37",
            "username": "Scunningham99",
            "content": "its talking about the database has already been migrated to RDS, but they want to know how to encrypt it after the migration - hence a is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 314849,
            "date": "Fri 05 Nov 2021 02:11",
            "username": "LMax",
            "content": "Answer A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 297994,
            "date": "Wed 03 Nov 2021 23:54",
            "username": "myutran",
            "content": "Ans: A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 279771,
            "date": "Wed 13 Oct 2021 12:31",
            "username": "Roontha",
            "content": "Answer: A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253757,
            "date": "Sat 09 Oct 2021 08:47",
            "username": "ppraveshGeeBeeElExia",
            "content": "I guess It should be D: As per this document it is possible to do replication from unencrypted to encrypted read replica.<br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-encrypt-instance-mysql-mariadb/This is for MariaDB!!!You cannot create an encrypted Read Replica from an unencrypted DB instance.",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 290979,
            "date": "Sat 16 Oct 2021 21:14",
            "username": "GeeBeeEl",
            "content": "This is for MariaDB!!!",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 293141,
            "date": "Wed 20 Oct 2021 17:33",
            "username": "Exia",
            "content": "You cannot create an encrypted Read Replica from an unencrypted DB instance.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 246092,
            "date": "Mon 27 Sep 2021 10:24",
            "username": "rootkimJobinAkaJoe",
            "content": "If you become D, do you really need to do A?<br>How do you fix data inconsistencies?<br>D is possible, so I think it's best.To have an encrypted read-replica, primary instance must be encrypted",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 253203,
            "date": "Tue 05 Oct 2021 02:57",
            "username": "JobinAkaJoe",
            "content": "To have an encrypted read-replica, primary instance must be encrypted",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 144903,
            "date": "Wed 22 Sep 2021 11:22",
            "username": "BillyC",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 134885,
            "date": "Mon 20 Sep 2021 21:17",
            "username": "Mickysingh",
            "content": "A is correct answer<br>https://blog.theodo.com/2019/11/encrypt-existing-aws-rds-database/",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#39",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist is planning to create a read replica of an existing Amazon RDS for MySQL Multi-AZ DB instance. When using the AWS Management<br>Console to conduct this task, the Database Specialist discovers that the source RDS DB instance does not appear in the read replica source selection box, so the read replica cannot be created.<br>What is the most likely reason for this?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#39",
            "answers": [
              {
                "choice": "<p>A. The source DB instance has to be converted to Single-AZ first to create a read replica from it.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enhanced Monitoring is not enabled on the source DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The minor MySQL version in the source DB instance does not support read replicas.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Automated backups are not enabled on the source DB instance.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 39 discussion",
        "discusstion": [
          {
            "id": 137626,
            "date": "Tue 28 Sep 2021 21:50",
            "username": "learnawsBillyMadison",
            "content": "D. <br>Q: Do I need to enable automatic backups on my DB instance before I can create read replicas?<br><br>Yes. Enable automatic backups on your source DB Instance before adding read replicas, by setting the backup retention period to a value other than 0. Backups must remain enabled for read replicas to work.Agree D.  \\\"Before a MySQL DB instance can serve as a replication source, make sure to enable automatic backups on the source DB instance.\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_MySQL.Replication.ReadReplicas.html",
            "upvote_count": "81",
            "selected_answers": ""
          },
          {
            "id": 140553,
            "date": "Sun 03 Oct 2021 00:06",
            "username": "BillyMadison",
            "content": "Agree D.  \\\"Before a MySQL DB instance can serve as a replication source, make sure to enable automatic backups on the source DB instance.\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_MySQL.Replication.ReadReplicas.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 134893,
            "date": "Mon 20 Sep 2021 01:30",
            "username": "Mickysingh",
            "content": "Ans D because option will only available if automatic backup is enable",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 430188,
            "date": "Sun 31 Oct 2021 08:44",
            "username": "guru_ji",
            "content": "Correct Answer >> D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314853,
            "date": "Sun 31 Oct 2021 07:04",
            "username": "LMax",
            "content": "Answer D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 226115,
            "date": "Mon 18 Oct 2021 04:19",
            "username": "Billhardy",
            "content": "Has to be D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 140272,
            "date": "Thu 30 Sep 2021 10:26",
            "username": "BillyC",
            "content": "D is Correct",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#40",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist has migrated an on-premises Oracle database to Amazon Aurora PostgreSQL. The schema and the data have been migrated successfully.<br>The on-premises database server was also being used to run database maintenance cron jobs written in Python to perform tasks including data purging and generating data exports. The logs for these jobs show that, most of the time, the jobs completed within 5 minutes, but a few jobs took up to 10 minutes to complete. These maintenance jobs need to be set up for Aurora PostgreSQL.<br>How can the Database Specialist schedule these jobs so the setup requires minimal maintenance and provides high availability?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#40",
            "answers": [
              {
                "choice": "<p>A. Create cron jobs on an Amazon EC2 instance to run the maintenance jobs following the required schedule.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Connect to the Aurora host and create cron jobs to run the maintenance jobs following the required schedule.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create AWS Lambda functions to run the maintenance jobs and schedule them with Amazon CloudWatch Events.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create the maintenance job using the Amazon CloudWatch job scheduling plugin.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 40 discussion",
        "discusstion": [
          {
            "id": 134560,
            "date": "Fri 24 Sep 2021 07:45",
            "username": "MickysinghBillyMadisonwaterh30",
            "content": "Answer should be C but below link confuses<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/Create-CloudWatch-Events-Scheduled-Rule.html<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/schedule-jobs-for-amazon-rds-and-aurora-postgresql-using-lambda-and-secrets-manager.html<br><br> a job for data extraction or a job for data purging can easily be scheduled using cron. For these jobs, database credentials are typically either hard-coded or stored in a properties file. However, when you migrate to Amazon Relational Database Service (Amazon RDS) or Amazon Aurora PostgreSQL, you lose the ability to log in to the host instance to schedule cron jobs.<br><br>This pattern describes how to use AWS Lambda and AWS Secrets Manager to schedule jobs for Amazon RDS and Aurora PostgreSQL databases after migration. <br><br>it confirms that answer is CI agree with C via your second link:<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/schedule-jobs-for-amazon-rds-and-aurora-postgresql-using-lambda-and-secrets-manager.htmlhttps://medium.com/better-programming/cron-job-patterns-in-aws-126fbf54a276",
            "upvote_count": "1031",
            "selected_answers": ""
          },
          {
            "id": 140562,
            "date": "Sat 25 Sep 2021 13:29",
            "username": "BillyMadison",
            "content": "I agree with C via your second link:<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/schedule-jobs-for-amazon-rds-and-aurora-postgresql-using-lambda-and-secrets-manager.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 242194,
            "date": "Sun 26 Sep 2021 06:00",
            "username": "waterh30",
            "content": "https://medium.com/better-programming/cron-job-patterns-in-aws-126fbf54a276",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 561579,
            "date": "Sat 05 Mar 2022 19:44",
            "username": "RotterDam",
            "content": "C.  Whenever its asked to create Cron Jobs Lambda vs EC2 : Its ALWAYS Lambda!!",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 492650,
            "date": "Thu 02 Dec 2021 17:01",
            "username": "GMartinelli",
            "content": "Option C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 430189,
            "date": "Wed 03 Nov 2021 00:13",
            "username": "guru_ji",
            "content": "Correct Answer >> C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 426217,
            "date": "Mon 01 Nov 2021 17:31",
            "username": "ChauPhanguru_ji",
            "content": "C is correct.<br>A B is not HA. <br>D, there is no such maintenance JOB for CW Events. CW Events has to trigger the other functions (Lambda/SSM/Step Function/ Batch) to do the task.Correct Answer: C",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 438331,
            "date": "Thu 04 Nov 2021 20:39",
            "username": "guru_ji",
            "content": "Correct Answer: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 364762,
            "date": "Sun 24 Oct 2021 23:32",
            "username": "Dip11",
            "content": "Answer should be C. I don't think there is anything like CloudWatch job scheduling plugin. Internet search doesn't show anything like this.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 314863,
            "date": "Wed 13 Oct 2021 02:27",
            "username": "LMax",
            "content": "Agree with Answer C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 314862,
            "date": "Fri 08 Oct 2021 12:51",
            "username": "LMax",
            "content": "Agree with Answer C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 299042,
            "date": "Mon 04 Oct 2021 13:54",
            "username": "Windy",
            "content": "C for me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 298004,
            "date": "Sat 02 Oct 2021 06:29",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 253210,
            "date": "Fri 01 Oct 2021 15:16",
            "username": "JobinAkaJoe",
            "content": "C is the best answer.<br>Eventbridge would have been a better choice to schedule lambda.<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/RunLambdaSchedule.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 212077,
            "date": "Sat 25 Sep 2021 15:30",
            "username": "Ashoks",
            "content": "Ans is C.  CloudWatch scheduling and Lambda execution and this option should be fine as long as job completes within 15 minutes.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 140273,
            "date": "Sat 25 Sep 2021 05:05",
            "username": "BillyC",
            "content": "Answer should be C",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 134056,
            "date": "Tue 21 Sep 2021 17:41",
            "username": "[Removed]",
            "content": "The document referenced has no mention of job scheduling plugin for cloudwatch.... it is for systems manager.<br>I will have to go with C. ",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#41",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has an Amazon RDS Multi-AZ DB instances that is 200 GB in size with an RPO of 6 hours. To meet the company's disaster recovery policies, the database backup needs to be copied into another Region. The company requires the solution to be cost-effective and operationally efficient.<br>What should a Database Specialist do to copy the database backup into a different Region?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#41",
            "answers": [
              {
                "choice": "<p>A. Use Amazon RDS automated snapshots and use AWS Lambda to copy the snapshot into another Region<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon RDS automated snapshots every 6 hours and use Amazon S3 cross-Region replication to copy the snapshot into another Region<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an AWS Lambda function to take an Amazon RDS snapshot every 6 hours and use a second Lambda function to copy the snapshot into another Region<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a cross-Region read replica for Amazon RDS in another Region and take an automated snapshot of the read replica<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 41 discussion",
        "discusstion": [
          {
            "id": 155253,
            "date": "Thu 30 Sep 2021 06:49",
            "username": "Ebiszmulderzanhsieh",
            "content": "Answer is C<br>A.  Use Amazon RDS automated snapshots and use AWS Lambda to copy the snapshot into another Region<br>Automated snapshots are taken once per day only, RPO is 6 hours, so not an option<br>B.  Use Amazon RDS automated snapshots every 6 hours and use Amazon S3 cross-Region replication to copy the snapshot into another Region<br>You can not take automated snapshots every 6 hours<br>C.  Create an AWS Lambda function to take an Amazon RDS snapshot every 6 hours and use a second Lambda function to copy the snapshot into another Region<br>Only possible option<br>D.  Create a cross-Region read replica for Amazon RDS in another Region and take an automated snapshot of the read replica<br>Not cost-effective, replica is the most expensive DR option.It's hard to choose. A is correct is RDS can restore to point in time, so we don't need to do a snapshot every 6 hours.Agreed with C.  Any options mention / use 'automated snapshot' should be dropped, so no ABD.  Verified via AWS console in RDS. Change time interval for RDS automatic backup period to 0 means disable automatic backup. See:<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html",
            "upvote_count": "2213",
            "selected_answers": ""
          },
          {
            "id": 157606,
            "date": "Sat 02 Oct 2021 13:46",
            "username": "szmulder",
            "content": "It's hard to choose. A is correct is RDS can restore to point in time, so we don't need to do a snapshot every 6 hours.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 159128,
            "date": "Sun 03 Oct 2021 00:37",
            "username": "zanhsieh",
            "content": "Agreed with C.  Any options mention / use 'automated snapshot' should be dropped, so no ABD.  Verified via AWS console in RDS. Change time interval for RDS automatic backup period to 0 means disable automatic backup. See:<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 629461,
            "date": "Sun 10 Jul 2022 08:41",
            "username": "sachin",
            "content": "Copying 200 Gb of snapshot every 6 hours across region will be costlier approach and ensuring lambda tofinish job of coping 200gb snapshot with 15 mins is also not viable.<br>So i think D is best choice.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 605453,
            "date": "Sun 22 May 2022 14:18",
            "username": "awsguys",
            "content": "c is right .",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595250,
            "date": "Sat 30 Apr 2022 22:07",
            "username": "novice_expert",
            "content": "x A & B out: only automated snapshot per day allowed we need 4C.  Create an AWS Lambda function to take an Amazon RDS snapshot every 6 hours and use a second Lambda function to copy the snapshot into another Region (cost effective)D.  Create a cross-Region read replica for Amazon RDS in another Region and take an automated snapshot of the read replica (costly)",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 562194,
            "date": "Sun 06 Mar 2022 19:12",
            "username": "RotterDam",
            "content": "Definitely (C) - also a question in the pfficial sample exam discussed by Stephen Maarek and Riyaz in their Udemy course",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 510884,
            "date": "Tue 28 Dec 2021 08:31",
            "username": "Shunpin",
            "content": "System snapshot can't fulfill 6 hours requirement. You need to control it by script<br>https://aws.amazon.com/blogs/database/%C2%AD%C2%AD%C2%ADautomating-cross-region-cross-account-snapshot-copies-with-the-snapshot-tool-for-amazon-aurora/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 434026,
            "date": "Sat 06 Nov 2021 15:32",
            "username": "guru_ji",
            "content": "Anyone planning for exam?<br>We can share study material with each other, it would be beneficial for both. You can email me on \\\"awsdbguru at gmail\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 428752,
            "date": "Thu 04 Nov 2021 16:00",
            "username": "guru_ji",
            "content": "Correct Answer is >> C.  any idea how much Q we will get in real exam from Q available here? anyone is preparing for this exam and want to do group study with us, comment with mail id.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 426225,
            "date": "Wed 03 Nov 2021 13:41",
            "username": "ChauPhan",
            "content": "https://aws.amazon.com/blogs/database/implementing-a-disaster-recovery-strategy-with-amazon-rds/<br>Automated Backup is daily, so 6 hour RPO is not possible.<br>Only C is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 364770,
            "date": "Sun 31 Oct 2021 19:20",
            "username": "Dip11",
            "content": "Answer is C. Reason for eliminating D is that RDS SQL SERVER does not support cross-region read replica and the question does not state which database engine used in RDS.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314880,
            "date": "Sat 30 Oct 2021 02:40",
            "username": "LMax",
            "content": "Agree with C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 299049,
            "date": "Fri 29 Oct 2021 03:09",
            "username": "Windy",
            "content": "I think it is C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 298008,
            "date": "Wed 27 Oct 2021 12:37",
            "username": "myutran",
            "content": "Ans: D with key \\\"operationally efficient\\\".<br>With option C, it is necessary to copy 200GB of data from one region to another every 6 hours.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253214,
            "date": "Tue 26 Oct 2021 21:31",
            "username": "JobinAkaJoe",
            "content": "A - wrong - I guess you cannot copy automated snapshots to another region. You must create a copy of automated snapshot in the same region first.<br>B - wrong - automated snapshots aretaken once in a day which alone wouldnt meet proposed RPO of 6hrs<br>C - best answer for the requirement in hand.<br>D - best option for cross region DR. However having a read-replica in another region is costlier than option C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 241316,
            "date": "Tue 26 Oct 2021 07:37",
            "username": "waterh30waterh30",
            "content": "ANS: B<br>Database snapshots are manual (user-initiated) backups of your complete DB instance that serve as full backups. They=E2=80=99re stored in Amazon S3, and are retained until you explicitly delete them. These snapshots can be copied and shared to different Regions and accounts.<br>and region replication is fast way. not sure how much costchange to C",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 242200,
            "date": "Tue 26 Oct 2021 14:31",
            "username": "waterh30",
            "content": "change to C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 226209,
            "date": "Sat 23 Oct 2021 13:48",
            "username": "SAAbbas",
            "content": "Keep in mind key of \\\"operational efficient\\\" two lamda function may be hard to manage. so D. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212080,
            "date": "Wed 20 Oct 2021 12:05",
            "username": "Ashoks",
            "content": "C should be.<br>Snapshot solution is cost efficient compare to replica. Two lambdas to execute since copy may take long time",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#42",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An Amazon RDS EBS-optimized instance with Provisioned IOPS (PIOPS) storage is using less than half of its allocated IOPS over the course of several hours under constant load. The RDS instance exhibits multi-second read and write latency, and uses all of its maximum bandwidth for read throughput, yet the instance uses less than half of its CPU and RAM resources.<br>What should a Database Specialist do in this situation to increase performance and return latency to sub-second levels?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#42",
            "answers": [
              {
                "choice": "<p>A. Increase the size of the DB instance storage<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Change the underlying EBS storage type to General Purpose SSD (gp2)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Disable EBS optimization on the DB instance<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Change the DB instance to an instance class with a higher maximum bandwidth<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 42 discussion",
        "discusstion": [
          {
            "id": 140582,
            "date": "Sat 25 Sep 2021 08:56",
            "username": "BillyMadison",
            "content": "I think this is D<br>https://docs.amazonaws.cn/en_us/AmazonRDS/latest/UserGuide/CHAP_BestPractices.html<br>\\\"If you are already using Provisioned IOPS storage, provision additional throughput capacity.\\\" Does D sound right?",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 750003,
            "date": "Mon 19 Dec 2022 16:48",
            "username": "lollyj",
            "content": "Correct answer I think",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 595581,
            "date": "Sun 01 May 2022 13:51",
            "username": "novice_expert",
            "content": "Objective is to handle maximum bandwidth for read throughput used<br><br>x A.  Increase the size of the DB instance storage (unrelated)<br>x B.  Change the underlying EBS storage type to General Purpose SSD (gp2) (will slow down)<br>x C.  Disable EBS optimization on the DB instance (will slow down)D.  Change the DB instance to an instance class with a higher maximum bandwidth<br><br>https://docs.amazonaws.cn/en_us/AmazonRDS/latest/UserGuide/CHAP_BestPractices.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 585066,
            "date": "Wed 13 Apr 2022 09:07",
            "username": "kret",
            "content": "A.  Increase the size of the DB instance storage - nonsense; instance is using EBSB.  Change the underlying EBS storage type to General Purpose SSD (gp2) -> nonsense; GP2 is slower than IO2C.  Disable EBS optimization on the DB instance -> nonsense; nothing like this exist<br><br>D is the answer",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 430196,
            "date": "Tue 26 Oct 2021 11:42",
            "username": "guru_ji",
            "content": "Correct Answer >> D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314888,
            "date": "Thu 14 Oct 2021 22:27",
            "username": "LMax",
            "content": "My answer is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 298010,
            "date": "Tue 12 Oct 2021 13:10",
            "username": "myutran",
            "content": "Ans: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 286288,
            "date": "Mon 11 Oct 2021 04:20",
            "username": "RSSRAO",
            "content": "Answer is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253219,
            "date": "Sat 09 Oct 2021 14:38",
            "username": "JobinAkaJoe",
            "content": "D is the right answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212083,
            "date": "Fri 08 Oct 2021 05:49",
            "username": "Ashoks",
            "content": "D.  For high throughput.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 168177,
            "date": "Thu 07 Oct 2021 11:32",
            "username": "AWSCert2020",
            "content": "D here! Throughput is related to Size/Type of Instance<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 168175,
            "date": "Sat 02 Oct 2021 03:41",
            "username": "AWSCert2020",
            "content": "Throughput is related to Size/Type of Instance<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 144908,
            "date": "Tue 28 Sep 2021 08:33",
            "username": "BillyC",
            "content": "Sorry i mean D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 141354,
            "date": "Mon 27 Sep 2021 00:13",
            "username": "BillyC",
            "content": "Ans B here",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#43",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>After restoring an Amazon RDS snapshot from 3 days ago, a company's Development team cannot connect to the restored RDS DB instance. What is the likely cause of this problem?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#43",
            "answers": [
              {
                "choice": "<p>A. The restored DB instance does not have Enhanced Monitoring enabled<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The production DB instance is using a custom parameter group<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The restored DB instance is using the default security group<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. The production DB instance is using a custom option group<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 43 discussion",
        "discusstion": [
          {
            "id": 137636,
            "date": "Sat 02 Oct 2021 02:02",
            "username": "learnawsBillyMadison",
            "content": "C. <br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RestoreFromSnapshot.htmlC, agree.",
            "upvote_count": "93",
            "selected_answers": ""
          },
          {
            "id": 140588,
            "date": "Sun 03 Oct 2021 03:15",
            "username": "BillyMadison",
            "content": "C, agree.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 135718,
            "date": "Sat 25 Sep 2021 09:22",
            "username": "BillyC",
            "content": "C is correct",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 630527,
            "date": "Tue 12 Jul 2022 14:39",
            "username": "Chirantan",
            "content": "When you restore a DB instance, the default virtual private cloud (VPC), DB subnet group, and VPC security group are associated with the restored instance, unless you choose different ones.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 595576,
            "date": "Sun 01 May 2022 13:42",
            "username": "novice_expertnovice_expert",
            "content": "C and B both have incomplete info, would go with B assuming that PROD is the source, and custom parameter group not selected or changed from default for restored one<br><br>x A. Enhanced Monitoring enabled (unrelated - for performance check)B.  The production DB instance is using a custom parameter group (would be correct if it was the source)<br>x C.  The restored DB instance is using the default security group (but would not be issue if source also had default)<br>x D.  The production DB instance is using a custom option group (unrelated - it can specify features, called options, that are available for a particular Amazon RDS DB instance)<br><br>https://aws.amazon.com/about-aws/whats-new/2018/10/specify-parameter-groups-when-restoring-amazon-rds-backups/Correction: Ans is C<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RestoreFromSnapshot.html<br><br>When you restore a DB instance, the default virtual private cloud (VPC), DB subnet group, and VPC security group are associated with the restored instance, unless you choose different ones.",
            "upvote_count": "12",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 595578,
            "date": "Sun 01 May 2022 13:45",
            "username": "novice_expert",
            "content": "Correction: Ans is C<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RestoreFromSnapshot.html<br><br>When you restore a DB instance, the default virtual private cloud (VPC), DB subnet group, and VPC security group are associated with the restored instance, unless you choose different ones.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 585067,
            "date": "Wed 13 Apr 2022 09:08",
            "username": "kret",
            "content": "SG is most typically the cause of an connection issue",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 535621,
            "date": "Sat 29 Jan 2022 18:31",
            "username": "soyyodario",
            "content": "C, but B. .......<br><br>Parameter group considerations<br><br>We recommend that you retain the DB parameter group for any DB snapshots you create, so that you can associate your restored DB instance with the correct parameter group.<br><br>The default DB parameter group is associated with the restored instance, unless you choose a different one. No custom parameter settings are available in the default parameter group.<br><br>You can specify the parameter group when you restore the DB instance.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 426229,
            "date": "Tue 02 Nov 2021 17:15",
            "username": "ChauPhan",
            "content": "Omit B, D regarding PROD DB<br>A is not relevant.<br>C is correct.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 414329,
            "date": "Sun 24 Oct 2021 00:46",
            "username": "gelsmgelsm",
            "content": "C.  The restored DB instance is using the default security group<br><br>This is likely the cause of the problem since security groups control the connectivity to the DB instance.https://aws.amazon.com/premiumsupport/knowledge-center/rds-cannot-connect/",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 414336,
            "date": "Tue 02 Nov 2021 00:58",
            "username": "gelsm",
            "content": "https://aws.amazon.com/premiumsupport/knowledge-center/rds-cannot-connect/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314889,
            "date": "Sat 23 Oct 2021 04:32",
            "username": "LMax",
            "content": "Answer C",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 298014,
            "date": "Thu 21 Oct 2021 16:10",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 295049,
            "date": "Tue 12 Oct 2021 14:39",
            "username": "kubilay",
            "content": "C is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 253223,
            "date": "Mon 11 Oct 2021 07:11",
            "username": "JobinAkaJoe",
            "content": "C is the correct answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 212085,
            "date": "Mon 11 Oct 2021 02:01",
            "username": "Ashoks",
            "content": "yes. C.  SG controls the access.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 168179,
            "date": "Tue 05 Oct 2021 00:58",
            "username": "AWSCert2020",
            "content": "C Here",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#44",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A gaming company has implemented a leaderboard in AWS using a Sorted Set data structure within Amazon ElastiCache for Redis. The ElastiCache cluster has been deployed with cluster mode disabled and has a replication group deployed with two additional replicas. The company is planning for a worldwide gaming event and is anticipating a higher write load than what the current cluster can handle.<br>Which method should a Database Specialist use to scale the ElastiCache cluster ahead of the upcoming event?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#44",
            "answers": [
              {
                "choice": "<p>A. Enable cluster mode on the existing ElastiCache cluster and configure separate shards for the Sorted Set across all nodes in the cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Increase the size of the ElastiCache cluster nodes to a larger instance size.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an additional ElastiCache cluster and load-balance traffic between the two clusters.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the EXPIRE command and set a higher time to live (TTL) after each call to increment a given key.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 44 discussion",
        "discusstion": [
          {
            "id": 702481,
            "date": "Sun 23 Oct 2022 23:36",
            "username": "rags1482",
            "content": "B<br><br>Redis (cluster mode disabled) supports scaling. You can scale read capacity by adding or deleting replica nodes, or you can scale capacity by scaling up to a larger node type.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 620959,
            "date": "Thu 23 Jun 2022 14:12",
            "username": "ryuhei",
            "content": "Answer:B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 595245,
            "date": "Sat 30 Apr 2022 21:57",
            "username": "novice_expert",
            "content": "cannot enable Cluster Mode on an existing cluster,With cluster mode disabled it will allow only vertical scaling.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 562191,
            "date": "Sun 06 Mar 2022 19:08",
            "username": "RotterDam",
            "content": "B is correct. You cannot enable Cluster Mode on an existing cluster",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 552275,
            "date": "Sun 20 Feb 2022 21:49",
            "username": "mayank830",
            "content": "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Replication.Redis-RedisCluster.html<br><br>Reads v. writes =E2=80=93 If the primary load on your cluster is applications reading data, you can scale a Redis (cluster mode disabled) cluster by adding and deleting read replicas. However, there is a maximum of 5 read replicas. If the load on your cluster is write-heavy, you can benefit from the additional write endpoints of a Redis (cluster mode enabled) cluster with multiple shards.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 542944,
            "date": "Tue 08 Feb 2022 09:56",
            "username": "jeyp12",
            "content": "I think answer is B.  With cluster mode disabled it will allow only vertical scaling. So going with B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 498598,
            "date": "Fri 10 Dec 2021 13:14",
            "username": "2025flakytVPupRotterDam",
            "content": "A is the correct answer<br>Enabling Cluster Mode provides a number of additional benefits in scaling your cluster. In short, it allows you to scale in or out the number of shards (horizontal scaling) versus scaling up or down the node type (vertical scaling). This means that Cluster Mode can scale to very large amounts of storage (potentially 100s of terabytes) across up to 90 shards, whereas a single node can only store as much data in memory as the instance type has capacity for.<br>https://aws.amazon.com/blogs/database/work-with-cluster-mode-on-amazon-elasticache-for-redis/you can not enable the cluster mode on the already running Elasticache cluster. Have to provision a new cluster with the Cluster mode enabled and restore the backed up data from S3.Wrong. You cannot convert an EXISTING Cluster Mode Disabled cluster to Cluster Mode enabled. You need to create a new cluster with cluster mode enabled and warm cache it by loading it with the RDB file backup of the original",
            "upvote_count": "222",
            "selected_answers": ""
          },
          {
            "id": 542628,
            "date": "Mon 07 Feb 2022 20:20",
            "username": "VPup",
            "content": "you can not enable the cluster mode on the already running Elasticache cluster. Have to provision a new cluster with the Cluster mode enabled and restore the backed up data from S3.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 562190,
            "date": "Sun 06 Mar 2022 19:08",
            "username": "RotterDam",
            "content": "Wrong. You cannot convert an EXISTING Cluster Mode Disabled cluster to Cluster Mode enabled. You need to create a new cluster with cluster mode enabled and warm cache it by loading it with the RDB file backup of the original",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#45",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An ecommerce company has tasked a Database Specialist with creating a reporting dashboard that visualizes critical business metrics that will be pulled from the core production database running on Amazon Aurora. Data that is read by the dashboard should be available within 100 milliseconds of an update.<br>The Database Specialist needs to review the current configuration of the Aurora DB cluster and develop a cost-effective solution. The solution needs to accommodate the unpredictable read workload from the reporting dashboard without any impact on the write availability and performance of the DB cluster.<br>Which solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#45",
            "answers": [
              {
                "choice": "<p>A. Turn on the serverless option in the DB cluster so it can automatically scale based on demand.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Provision a clone of the existing DB cluster for the new Application team.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a separate DB cluster for the new workload, refresh from the source DB cluster, and set up ongoing replication using AWS DMS change data capture (CDC).<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add an automatic scaling policy to the DB cluster to add Aurora Replicas to the cluster based on CPU consumption.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 45 discussion",
        "discusstion": [
          {
            "id": 750378,
            "date": "Tue 20 Dec 2022 02:21",
            "username": "IBANGA007",
            "content": "C.  Create a separate DB cluster for the new workload, refresh from the source DB cluster, and set up ongoing replication using AWS DMS change data capture (CDC).",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 750057,
            "date": "Mon 19 Dec 2022 17:57",
            "username": "lollyj",
            "content": "Even though replication is asynchronous I believe it is within the 100 ms requirement.It is also cost effective with autoscaling.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 597943,
            "date": "Sat 07 May 2022 04:12",
            "username": "KaranGandhi30",
            "content": "Option A? How can you use serverless and scale in the same statement",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 594043,
            "date": "Thu 28 Apr 2022 22:38",
            "username": "novice_expert",
            "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html<br><br>replica lag < 100 ms<br><br>Option A would take time",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 542093,
            "date": "Mon 07 Feb 2022 01:44",
            "username": "VPup",
            "content": "Answer D<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html<br><br>\\\"As a result, all Aurora Replicas return the same data for query results with minimal replica lag. This lag is usually much less than 100 milliseconds after the primary instance has written an update. \\\"",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 364812,
            "date": "Mon 01 Nov 2021 17:46",
            "username": "Dip11",
            "content": "Option D makes most sense.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 314902,
            "date": "Sat 30 Oct 2021 18:09",
            "username": "LMax",
            "content": "Answer D",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 298020,
            "date": "Tue 26 Oct 2021 16:49",
            "username": "myutran",
            "content": "Ans: D",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 277439,
            "date": "Mon 25 Oct 2021 17:28",
            "username": "RobbbGeeBeeEl[Removed]RotterDam",
            "content": "A is a ridiculous answer. If you say A, don't bother taking the test.Oh, I love this your response...... Option A seemsto make the most sense to me and I will take the test<br>Here is a link to help with the correct response --https://aws.amazon.com/rds/aurora/faqs/<br><br>Amazon Aurora Serverless is an on-demand, autoscaling configuration for the MySQL-compatible and PostgreSQL-compatible editions of Amazon Aurora. An Aurora Serverless DB cluster automatically starts up, shuts down, and scales capacity up or down based on your application's needs. Aurora Serverless provides a relatively simple, cost-effective option for infrequent, intermittent, or unpredictable workloads.<br>The question is focused on unpredictable workloadsyou can't turn on serverless option.you need to take a snapshot and restore it to Aurora Serverless. A is definitely wrongThe answer is saying \\\"Turn on Serverless option on the cluster\\\". There's no such thing.",
            "upvote_count": "1241",
            "selected_answers": ""
          },
          {
            "id": 291354,
            "date": "Tue 26 Oct 2021 14:09",
            "username": "GeeBeeEl[Removed]RotterDam",
            "content": "Oh, I love this your response...... Option A seemsto make the most sense to me and I will take the test<br>Here is a link to help with the correct response --https://aws.amazon.com/rds/aurora/faqs/<br><br>Amazon Aurora Serverless is an on-demand, autoscaling configuration for the MySQL-compatible and PostgreSQL-compatible editions of Amazon Aurora. An Aurora Serverless DB cluster automatically starts up, shuts down, and scales capacity up or down based on your application's needs. Aurora Serverless provides a relatively simple, cost-effective option for infrequent, intermittent, or unpredictable workloads.<br>The question is focused on unpredictable workloadsyou can't turn on serverless option.you need to take a snapshot and restore it to Aurora Serverless. A is definitely wrongThe answer is saying \\\"Turn on Serverless option on the cluster\\\". There's no such thing.",
            "upvote_count": "241",
            "selected_answers": ""
          },
          {
            "id": 352391,
            "date": "Sun 31 Oct 2021 08:24",
            "username": "[Removed]",
            "content": "you can't turn on serverless option.you need to take a snapshot and restore it to Aurora Serverless. A is definitely wrong",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 561703,
            "date": "Sun 06 Mar 2022 01:03",
            "username": "RotterDam",
            "content": "The answer is saying \\\"Turn on Serverless option on the cluster\\\". There's no such thing.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 277438,
            "date": "Sun 24 Oct 2021 08:08",
            "username": "Robbbtoppic26",
            "content": "Also it says that the new workload is unpredictable, and yet should have no impact on the current operations. It takes time to adjust to unpredictable workloads, so D does not solve the stated problem.it says read workload, not write.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 479416,
            "date": "Tue 16 Nov 2021 15:04",
            "username": "toppic26",
            "content": "it says read workload, not write.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 277435,
            "date": "Thu 21 Oct 2021 15:41",
            "username": "RobbbDip11",
            "content": "B is the best choice. A cloned Cluster will use the existing DB cluster until those items are written over, so that will have the fastest, immediate response. The best solution, of course, is to dedicate a read replica to the team and use an instance endpoint. D does not directly address the issue.Clone is a one time copy, it does not continuously replicate which is a requirement here.",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 364822,
            "date": "Thu 04 Nov 2021 07:13",
            "username": "Dip11",
            "content": "Clone is a one time copy, it does not continuously replicate which is a requirement here.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 272847,
            "date": "Fri 15 Oct 2021 20:25",
            "username": "GlendonAM",
            "content": "Why can't B be an option? Create a clone of the Aurora cluster and use the clone for data read on the Dashboard?B is not an option since clone does not support read scaling of the same cluster. This question is on read scaling of Aurora cluster. Only achieved with Read replicas. Serverless as pointed out is not available as an option. Correct an D. ",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 277391,
            "date": "Wed 20 Oct 2021 06:40",
            "username": "AM",
            "content": "B is not an option since clone does not support read scaling of the same cluster. This question is on read scaling of Aurora cluster. Only achieved with Read replicas. Serverless as pointed out is not available as an option. Correct an D. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 257234,
            "date": "Wed 13 Oct 2021 10:21",
            "username": "Faz",
            "content": "Ans is D. <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Integrating.AutoScaling.html#:~:textThe%20scaling%20policy%20defines%20the,CloudWatch%20metrics%20and%20target%20values.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 253235,
            "date": "Mon 11 Oct 2021 20:07",
            "username": "JobinAkaJoe",
            "content": "D is the best choice",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 246914,
            "date": "Sat 09 Oct 2021 06:30",
            "username": "kilkar",
            "content": "Ashoks is right. There is no turn on option to Serverless, it needs migration",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 246683,
            "date": "Sat 09 Oct 2021 00:14",
            "username": "kilkarjove",
            "content": "Within A or D.  I prefer A as an answer.<br>Since the problem-statement is about a cost-effective solution with less than 100-millisecond read latency. AWS highlight Serverless as the most cost-effective solution (even though the pricing model looks high)<br><br>https://www.youtube.com/results?search_queryAurora+AWSThere is no such a \\\"serverless option\\\" to turn on or off for an existing Aurora cluster.<br>Correct answer is D",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 507393,
            "date": "Wed 22 Dec 2021 22:23",
            "username": "jove",
            "content": "There is no such a \\\"serverless option\\\" to turn on or off for an existing Aurora cluster.<br>Correct answer is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212093,
            "date": "Fri 08 Oct 2021 14:37",
            "username": "Ashoks",
            "content": "D should be. Serverless requires migration and no turn on option",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#46",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A retail company is about to migrate its online and mobile store to AWS. The company's CEO has strategic plans to grow the brand globally. A Database<br>Specialist has been challenged to provide predictable read and write database performance with minimal operational overhead.<br>What should the Database Specialist do to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#46",
            "answers": [
              {
                "choice": "<p>A. Use Amazon DynamoDB global tables to synchronize transactions<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon EMR to copy the orders table data across Regions<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon Aurora Global Database to synchronize all transactions<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon DynamoDB Streams to replicate all DynamoDB transactions and sync them<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 46 discussion",
        "discusstion": [
          {
            "id": 520429,
            "date": "Sun 09 Jan 2022 20:49",
            "username": "awsmonster",
            "content": "A<br>https://aws.amazon.com/dynamodb/features/<br>With global tables, your globally distributed applications can access data locally in the selected regions to get single-digit millisecond read and write performance.<br><br>Not Aurora Global Database, as per this link: https://aws.amazon.com/rds/aurora/global-database/?nc1h_ls .Aurora Global Database lets you easily scale database reads across the world and place your applications close to your users.",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 595585,
            "date": "Sun 01 May 2022 13:57",
            "username": "novice_expert",
            "content": "A.  Use Amazon DynamoDB global tables",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 522148,
            "date": "Wed 12 Jan 2022 13:34",
            "username": "awsmonster",
            "content": "Ans: A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 508857,
            "date": "Fri 24 Dec 2021 21:26",
            "username": "jove",
            "content": "I go with option A",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          }
        ]
      },
      {
        "question_id": "#47",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is closing one of its remote data centers. This site runs a 100 TB on-premises data warehouse solution. The company plans to use the AWS Schema<br>Conversion Tool (AWS SCT) and AWS DMS for the migration to AWS. The site network bandwidth is 500 Mbps. A Database Specialist wants to migrate the on- premises data using Amazon S3 as the data lake and Amazon Redshift as the data warehouse. This move must take place during a 2-week period when source systems are shut down for maintenance. The data should stay encrypted at rest and in transit.<br>Which approach has the least risk and the highest likelihood of a successful data transfer?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#47",
            "answers": [
              {
                "choice": "<p>A. Set up a VPN tunnel for encrypting data over the network from the data center to AWS. Leverage AWS SCT and apply the converted schema to Amazon Redshift. Once complete, start an AWS DMS task to move the data from the source to Amazon S3. Use AWS Glue to load the data from Amazon S3 to Amazon Redshift.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Leverage AWS SCT and apply the converted schema to Amazon Redshift. Start an AWS DMS task with two AWS Snowball Edge devices to copy data from on-premises to Amazon S3 with AWS KMS encryption. Use AWS DMS to finish copying data to Amazon Redshift.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Leverage AWS SCT and apply the converted schema to Amazon Redshift. Once complete, use a fleet of 10 TB dedicated encrypted drives using the AWS Import/Export feature to copy data from on-premises to Amazon S3 with AWS KMS encryption. Use AWS Glue to load the data to Amazon redshift.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set up a VPN tunnel for encrypting data over the network from the data center to AWS. Leverage a native database export feature to export the data and compress the files. Use the aws S3 cp multi-port upload command to upload these files to Amazon S3 with AWS KMS encryption. Once complete, load the data to Amazon Redshift using AWS Glue.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 47 discussion",
        "discusstion": [
          {
            "id": 140112,
            "date": "Sun 19 Sep 2021 18:48",
            "username": "pan24szmulderBillyMadisonRotterDamBillyMadisonBillyMadison",
            "content": "Ans: B<br>https://aws.amazon.com/blogs/database/new-aws-dms-and-aws-snowball-integration-enables-mass-database-migrations-and-migrations-of-large-databases/B is incorrect.<br>1. You just need one snowball edge device because one device can hold up to 80 TB of data.<br>2. The lastest step for B is \\\"Use AWS DMS to finish copying data to Amazon Redshift.\\\" but from the AWS docs need \\\"use AWS SCT to migrate the data to Amazon Redshift.\\\"There is 100 TB of data that needs to be transferred. Since a snowball can only hold 80, it makes sense that there would be a need for 2 of them. Hence B. Wrong. you need TWO snowballedge devices since out of 100TBonly 80TB is usable. This is a standard question in tutotrialsdojo as well - very respectable site.Going with B as well due to your compelling link.Found this link that agrees with B<br>https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/agents.dw.html<br>\\\"Large-scale data migrations can include many terabytes of information, and can be slowed by network performance and by the sheer amount of data that has to be moved. AWS Snowball Edge is an AWS service you can use to transfer data to the cloud at faster-than-network speeds using an AWS-owned appliance.\\\"<br>\\\"When you use AWS SCT and an AWS Snowball Edge device, you migrate your data in two stages. First, you use the AWS SCT to process the data locally and then move that data to the AWS Snowball Edge device. You then send the device to AWS using the AWS Snowball Edge process, and then AWS automatically loads the data into an Amazon S3 bucket. Next, when the data is available on Amazon S3, you use AWS SCT to migrate the data to Amazon Redshift.\\\"",
            "upvote_count": "1828224",
            "selected_answers": ""
          },
          {
            "id": 157649,
            "date": "Wed 06 Oct 2021 17:28",
            "username": "szmulderBillyMadisonRotterDam",
            "content": "B is incorrect.<br>1. You just need one snowball edge device because one device can hold up to 80 TB of data.<br>2. The lastest step for B is \\\"Use AWS DMS to finish copying data to Amazon Redshift.\\\" but from the AWS docs need \\\"use AWS SCT to migrate the data to Amazon Redshift.\\\"There is 100 TB of data that needs to be transferred. Since a snowball can only hold 80, it makes sense that there would be a need for 2 of them. Hence B. Wrong. you need TWO snowballedge devices since out of 100TBonly 80TB is usable. This is a standard question in tutotrialsdojo as well - very respectable site.",
            "upvote_count": "282",
            "selected_answers": ""
          },
          {
            "id": 161576,
            "date": "Tue 19 Oct 2021 15:48",
            "username": "BillyMadison",
            "content": "There is 100 TB of data that needs to be transferred. Since a snowball can only hold 80, it makes sense that there would be a need for 2 of them. Hence B. ",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 561660,
            "date": "Sat 05 Mar 2022 22:26",
            "username": "RotterDam",
            "content": "Wrong. you need TWO snowballedge devices since out of 100TBonly 80TB is usable. This is a standard question in tutotrialsdojo as well - very respectable site.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 141230,
            "date": "Tue 21 Sep 2021 08:53",
            "username": "BillyMadisonBillyMadison",
            "content": "Going with B as well due to your compelling link.Found this link that agrees with B<br>https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/agents.dw.html<br>\\\"Large-scale data migrations can include many terabytes of information, and can be slowed by network performance and by the sheer amount of data that has to be moved. AWS Snowball Edge is an AWS service you can use to transfer data to the cloud at faster-than-network speeds using an AWS-owned appliance.\\\"<br>\\\"When you use AWS SCT and an AWS Snowball Edge device, you migrate your data in two stages. First, you use the AWS SCT to process the data locally and then move that data to the AWS Snowball Edge device. You then send the device to AWS using the AWS Snowball Edge process, and then AWS automatically loads the data into an Amazon S3 bucket. Next, when the data is available on Amazon S3, you use AWS SCT to migrate the data to Amazon Redshift.\\\"",
            "upvote_count": "24",
            "selected_answers": ""
          },
          {
            "id": 141232,
            "date": "Wed 29 Sep 2021 21:14",
            "username": "BillyMadison",
            "content": "Found this link that agrees with B<br>https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/agents.dw.html<br>\\\"Large-scale data migrations can include many terabytes of information, and can be slowed by network performance and by the sheer amount of data that has to be moved. AWS Snowball Edge is an AWS service you can use to transfer data to the cloud at faster-than-network speeds using an AWS-owned appliance.\\\"<br>\\\"When you use AWS SCT and an AWS Snowball Edge device, you migrate your data in two stages. First, you use the AWS SCT to process the data locally and then move that data to the AWS Snowball Edge device. You then send the device to AWS using the AWS Snowball Edge process, and then AWS automatically loads the data into an Amazon S3 bucket. Next, when the data is available on Amazon S3, you use AWS SCT to migrate the data to Amazon Redshift.\\\"",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 597941,
            "date": "Sat 07 May 2022 04:09",
            "username": "KaranGandhi30",
            "content": "With the given bandwidth any other option will be completed in more than 20 days.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 594029,
            "date": "Thu 28 Apr 2022 22:03",
            "username": "novice_expert",
            "content": "https://aws.amazon.com/blogs/database/new-aws-dms-and-aws-snowball-integration-enables-mass-database-migrations-and-migrations-of-large-databases/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 507384,
            "date": "Wed 22 Dec 2021 22:10",
            "username": "jove",
            "content": "Option B. . With SCT data extraction agent you can extract the data as well as the schema. Snowball Edge devices are safe.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314912,
            "date": "Sat 06 Nov 2021 04:17",
            "username": "LMax",
            "content": "Agree with B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 298023,
            "date": "Tue 02 Nov 2021 10:35",
            "username": "myutran",
            "content": "Ans: B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 293647,
            "date": "Tue 02 Nov 2021 05:28",
            "username": "Exia",
            "content": "Although snowball is a petabyte-scale data transport solution, 100TB database migration through a 500 Mbps network is impossible in 2 weeks.<br>bandwidth: 500 Mbps62.5 MB/s<br>capacity: 100 TB100 * 10**6100000000 MB<br>time consume: 100000000 / 62.5 MB/s1600000.0 s <br>1600000 / 60 / 60 / 2418.5 days",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 253257,
            "date": "Sun 31 Oct 2021 00:53",
            "username": "JobinAkaJoe",
            "content": "B is the right choice here",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212383,
            "date": "Sat 30 Oct 2021 02:18",
            "username": "Ashoks",
            "content": "B.  Snow ball will be the solution to transfer 100TB, since existing 500Mbps bandwidth is not enough",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 168224,
            "date": "Thu 28 Oct 2021 09:02",
            "username": "AWSCert2020",
            "content": "For me B here",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 157655,
            "date": "Thu 14 Oct 2021 17:31",
            "username": "szmulder[Removed]szmulder",
            "content": "A.  Answer: It's possible but copy 100TB via internet is not reliable<br>B.  Answer: \\\"Use AWS DMS to finish copying data to Amazon Redshift.\\\" but from the AWS docs need \\\"use AWS SCT to migrate the data to Amazon Redshift.\\\"<br>C.  Answer: Correct<br>D.  Answer: It's possible but it's missing the step AWS SCT and apply the converted schema to Amazon Redshift.didn't know you can ship fleets of drives to AWS.sorry, change my mind, B is correct.",
            "upvote_count": "121",
            "selected_answers": ""
          },
          {
            "id": 160994,
            "date": "Tue 19 Oct 2021 01:57",
            "username": "[Removed]",
            "content": "didn't know you can ship fleets of drives to AWS.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 174222,
            "date": "Sat 30 Oct 2021 01:08",
            "username": "szmulder",
            "content": "sorry, change my mind, B is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 149738,
            "date": "Tue 05 Oct 2021 00:58",
            "username": "badrik",
            "content": "B is right option",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 145812,
            "date": "Thu 30 Sep 2021 14:11",
            "username": "BillyC",
            "content": "B is correct for me",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#48",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is looking to migrate a 1 TB Oracle database from on-premises to an Amazon Aurora PostgreSQL DB cluster. The company's Database Specialist discovered that the Oracle database is storing 100 GB of large binary objects (LOBs) across multiple tables. The Oracle database has a maximum LOB size of<br>500 MB with an average LOB size of 350 MB.  The Database Specialist has chosen AWS DMS to migrate the data with the largest replication instances.<br>How should the Database Specialist optimize the database migration using AWS DMS?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#48",
            "answers": [
              {
                "choice": "<p>A. Create a single task using full LOB mode with a LOB chunk size of 500 MB to migrate the data and LOBs together<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create two tasks: task1 with LOB tables using full LOB mode with a LOB chunk size of 500 MB and task2 without LOBs<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create two tasks: task1 with LOB tables using limited LOB mode with a maximum LOB size of 500 MB and task 2 without LOBs<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a single task using limited LOB mode with a maximum LOB size of 500 MB to migrate data and LOBs together<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 48 discussion",
        "discusstion": [
          {
            "id": 200887,
            "date": "Sat 09 Oct 2021 00:35",
            "username": "vicks316JobinAkaJoekhchan123",
            "content": "C sounds correct since as per link https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html#CHAP_BestPractices.LOBS, \\\"AWS DMS migrates LOB data in two phases:<br>1. AWS DMS creates a new row in the target table and populates the row with all data except the associated LOB value.<br>2.AWS DMS updates the row in the target table with the LOB data.\\\"<br>This means that we would need two tasks, one per phase and use limited LOB mode for best performance.This doesn't mean we need two tasks.It just explains how LOBs are copied to target in any scenario.First all columns except LOBs then the LOB. I think it is C.  The explanation from vicks316 is irrelevant. From this link -><br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.LOBSupport.html<br>Using the Max LOB size (K) option with a value greater than 63KB impacts the performance of a full load configured to run in limited LOB mode. During a full load, DMS allocates memory by multiplying the Max LOB size (k) value by the Commit rate, and the product is multiplied by the number of LOB columns. When DMS can=E2=80=99t pre-allocate that memory, DMS starts consuming SWAP memory, and that impacts performance of a full load. So, if you experience performance issues when using limited LOB mode, consider decreasing the commit rate until you achieve an acceptable level of performance. You can also consider using inline LOB mode for supported endpoints once you understand your LOB distribution for the table.",
            "upvote_count": "1422",
            "selected_answers": ""
          },
          {
            "id": 253258,
            "date": "Sun 17 Oct 2021 01:13",
            "username": "JobinAkaJoe",
            "content": "This doesn't mean we need two tasks.It just explains how LOBs are copied to target in any scenario.First all columns except LOBs then the LOB. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 604259,
            "date": "Fri 20 May 2022 08:41",
            "username": "khchan123",
            "content": "I think it is C.  The explanation from vicks316 is irrelevant. From this link -><br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.LOBSupport.html<br>Using the Max LOB size (K) option with a value greater than 63KB impacts the performance of a full load configured to run in limited LOB mode. During a full load, DMS allocates memory by multiplying the Max LOB size (k) value by the Commit rate, and the product is multiplied by the number of LOB columns. When DMS can=E2=80=99t pre-allocate that memory, DMS starts consuming SWAP memory, and that impacts performance of a full load. So, if you experience performance issues when using limited LOB mode, consider decreasing the commit rate until you achieve an acceptable level of performance. You can also consider using inline LOB mode for supported endpoints once you understand your LOB distribution for the table.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 511055,
            "date": "Tue 28 Dec 2021 12:51",
            "username": "ShunpinShunpin",
            "content": "Limited LOB maxsize is 100MB.  This question is about LOB average 350MB.  Full LOB is better optionhttps://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.LOBSupport.html",
            "upvote_count": "92",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 511056,
            "date": "Tue 28 Dec 2021 12:52",
            "username": "Shunpin",
            "content": "https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.LOBSupport.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 750788,
            "date": "Tue 20 Dec 2022 12:32",
            "username": "khun",
            "content": "C.  is the answer. Faster2 task Limited Lob and No Lob<br><br>Full LOB mode =E2=80=93 Migrate complete LOBs regardless of size. AWS DMS migrates LOBs piecewise in chunks controlled by the Max LOB Size parameter. This mode is slower than using limited LOB mode.<br>Limited LOB mode =E2=80=93 Truncate LOBs to the value specified by the Max LOB Size parameter. This mode is faster than using full LOB mode.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 743713,
            "date": "Tue 13 Dec 2022 08:41",
            "username": "shuo82",
            "content": "C is correct, 100MB is the maximum recommended value, not a limitation.<br>B is wrong, because 500MB is too huge for chunk setting, connection error would be encountered.<br><br>When a task is configured to use full LOB mode, AWS DMS retrieves LOBs in pieces. The LOB chunk size (K) option determines the size of each piece. When setting this option, pay particular attention to the maximum packet size allowed by your network configuration. If the LOB chunk size exceeds your maximum allowed packet size, you might see disconnect errors. The recommended value for LobChunkSize is 64 kilobytes. Increasing the value for LobChunkSize above 64 kilobytes can cause task failures.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 702584,
            "date": "Mon 24 Oct 2022 03:29",
            "username": "rags1482",
            "content": "https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html#CHAP_BestPractices.LOBS<br><br>Answer : C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 682486,
            "date": "Thu 29 Sep 2022 10:45",
            "username": "niteshdba",
            "content": "i think its C , since all the data will be migrated when we give 500 has the max lob size and nothing is truncated , and also Limited LOB mode is faster than Full Lob mode",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 632785,
            "date": "Mon 18 Jul 2022 03:36",
            "username": "db2luwdba",
            "content": "Limited LOB mode migrates all LOB values up to a user-specified size limit (default is 32 KB). LOB values larger than the size limit must be manually migrated. Limited LOB mode, the default for all migration tasks, typically provides the best performance. However, ensure that the Max LOB size parameter setting is correct. Set this parameter to the largest LOB size for all your tables.<br><br>Full LOB mode migrates all LOB data in your tables, regardless of size. Full LOB mode provides the convenience of moving all LOB data in your tables, but the process can have a significant impact on performance.<br><br>For some database engines, such as PostgreSQL, Amazon DMS treats JSON data types like LOBs. Make sure that if you chose Limited LOB mode, the Max LOB size option is set to a value that doesn't cause the JSON data to be truncated.<br>Oracle to PostgreSQL --> Limited Lob Mode ( Max Lob Size is set to Max Lob in DB )<br>C is best choice",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 629522,
            "date": "Sun 10 Jul 2022 12:29",
            "username": "sachin",
            "content": "Using multiple job also improves performance in DMS<br>So C is more viable option , Limited LOB with multiple tasks<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html#CHAP_BestPractices.Performance<br>Use multiple tasks<br>Sometimes using multiple tasks for a single migration can improve performance. If you have sets of tables that don't participate in common transactions, you might be able to divide your migration into multiple tasks. Transactional consistency is maintained within a task, so it's important that tables in separate tasks don't participate in common transactions. Also, each task independently reads the transaction stream, so be careful not to put too much stress on the source database.<br><br>You can use multiple tasks to create separate streams of replication. By doing this, you can parallelize the reads on the source, the processes on the replication instance, and the writes to the target database.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595616,
            "date": "Sun 01 May 2022 15:39",
            "username": "novice_expertdb2luwdbarlnd2000",
            "content": "A& D out for LOB should be in separate task<br><br>not C because Limited LOB mode, maximum LOB size 100MB<br><br>so use Full LOB mode, chunk size 500 MB and task 2 without LOB<br>B.  Create two tasks: task1 with LOB tables using full LOB mode with a LOB chunk size of 500 MB and task2 without LOBs<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.LOBSupport.htmllimited LOB Mode 100 MB is recommended size. You can specify more than this if the replication instance size is large with good amount of memory .<br>If the sizes of LOBs are known and most of them fall into same range the limited will provide more performance than full.I don't think selecting in the test any option that is not recommended is a good Idea, AWS say ... We recommend that you use limited LOB mode whenever possible. The maximum recommended value is 102400 KB (100 MB)...<br>for me that is enough :) Thanks @novice_expert",
            "upvote_count": "322",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 632786,
            "date": "Mon 18 Jul 2022 03:36",
            "username": "db2luwdbarlnd2000",
            "content": "limited LOB Mode 100 MB is recommended size. You can specify more than this if the replication instance size is large with good amount of memory .<br>If the sizes of LOBs are known and most of them fall into same range the limited will provide more performance than full.I don't think selecting in the test any option that is not recommended is a good Idea, AWS say ... We recommend that you use limited LOB mode whenever possible. The maximum recommended value is 102400 KB (100 MB)...<br>for me that is enough :) Thanks @novice_expert",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 633643,
            "date": "Tue 19 Jul 2022 17:18",
            "username": "rlnd2000",
            "content": "I don't think selecting in the test any option that is not recommended is a good Idea, AWS say ... We recommend that you use limited LOB mode whenever possible. The maximum recommended value is 102400 KB (100 MB)...<br>for me that is enough :) Thanks @novice_expert",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 583550,
            "date": "Sun 10 Apr 2022 03:58",
            "username": "BOYKA",
            "content": "B seems to be the answer, With limited LOB mode the max size accepted is 100MB and here the average is 350 MB.  https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.LOBSupport.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 510467,
            "date": "Mon 27 Dec 2021 17:38",
            "username": "jove",
            "content": "Limited LOB + multiple task",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 426311,
            "date": "Tue 26 Oct 2021 12:17",
            "username": "ChauPhanChauPhanguru_jiguru_jijohnconnor",
            "content": "I choose D because it is performance<br>Using limited LOB mode<br>AWS DMS uses two methods that balance performance and convenience when your migration contains LOB values:<br><br>1. Limited LOB mode migrates all LOB values up to a user-specified size limit (default is 32 KB). LOB values larger than the size limit must be manually migrated. Limited LOB mode, the default for all migration tasks, typically provides the best performance. However, ensure that the Max LOB size parameter setting is correct. Set this parameter to the largest LOB size for all your tables.<br>2. Full LOB mode migrates all LOB data in your tables, regardless of size. Full LOB mode provides the convenience of moving all LOB data in your tables, but the process can have a significant impact on performance.Because we knew the maximum LOB size is 500MB, we can choose Limited LIB with Max LOB size parameter setting to optimize the performance. If we don't know it, we have to set Full LOB mode to make sure no data left behind (if LOB > 500MB).ok....I agree with you.<br>But why C is not correct, can you explain ?it is asking you for the best way to improve performance, D is simpler but C would improve performance, hence I'd choose C",
            "upvote_count": "21111",
            "selected_answers": ""
          },
          {
            "id": 426313,
            "date": "Fri 29 Oct 2021 00:12",
            "username": "ChauPhanguru_ji",
            "content": "Because we knew the maximum LOB size is 500MB, we can choose Limited LIB with Max LOB size parameter setting to optimize the performance. If we don't know it, we have to set Full LOB mode to make sure no data left behind (if LOB > 500MB).ok....",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 455057,
            "date": "Sat 06 Nov 2021 23:01",
            "username": "guru_ji",
            "content": "ok....",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 430242,
            "date": "Wed 03 Nov 2021 01:42",
            "username": "guru_ji",
            "content": "I agree with you.<br>But why C is not correct, can you explain ?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 483743,
            "date": "Mon 22 Nov 2021 01:07",
            "username": "johnconnor",
            "content": "it is asking you for the best way to improve performance, D is simpler but C would improve performance, hence I'd choose C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 415793,
            "date": "Sun 24 Oct 2021 21:05",
            "username": "TonyGe",
            "content": "Choose between C&D,D is correct:<br>With option C,1st task with 500 LOB limited is fine. But 2nd task with no LOB limited? I think this will migrate all the data set, how can we separate large data and small data into different task?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 364850,
            "date": "Sat 23 Oct 2021 16:56",
            "username": "Dip11",
            "content": "C and D both are possible. Looks like C is efficient but requires more work to segregate tables. D is simple. I would go for D in such cases.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 328003,
            "date": "Fri 22 Oct 2021 18:00",
            "username": "shantest1",
            "content": "C.  Answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 327458,
            "date": "Wed 20 Oct 2021 05:48",
            "username": "giterthelad",
            "content": "Definitely B<br>https://aws.amazon.com/premiumsupport/knowledge-center/dms-improve-speed-lob-data/#:~:textWhen%20using%20Full%20LOB%20mode,LOBs%20regardless%20of%20their%20size.&textIf%20you%20have%20LOBs%20that,to%20migrate%20these%20tables%20alone.<br><br>If you have LOBs that are larger than a few megabytes, then you can create a separate AWS DMS task with Full LOB mode. It's a best practice to create the separate task on a new replication instance to migrate these tables alone.Using this link you also find the following text<br>\\\"Using Limited LOB mode improves performance, but before you run the task, you must identify the maximum LOB size of the data on the source. Then, you must specify the Max LOB size parameter when using Limited LOB mode\\\"<br>Therefore answer is C",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 538448,
            "date": "Wed 02 Feb 2022 09:08",
            "username": "thelad",
            "content": "Using this link you also find the following text<br>\\\"Using Limited LOB mode improves performance, but before you run the task, you must identify the maximum LOB size of the data on the source. Then, you must specify the Max LOB size parameter when using Limited LOB mode\\\"<br>Therefore answer is C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314929,
            "date": "Tue 19 Oct 2021 14:17",
            "username": "LMaxshantest1ExtHo",
            "content": "Based on info from Udemy course from Maarek & Riyaz I would choose B. They also say<br>Limited LOB mode =E2=80=93 truncates each LOB to Max LOB size (is faster)<br>Hence Answer is C:Have you focused on wording ?<br>\\\"So if you already know the maximum lob size in your source database, then you can definitely use the limited lob mode with the particular maximum lob size.\\\"",
            "upvote_count": "312",
            "selected_answers": ""
          },
          {
            "id": 328002,
            "date": "Fri 22 Oct 2021 06:58",
            "username": "shantest1ExtHo",
            "content": "They also say<br>Limited LOB mode =E2=80=93 truncates each LOB to Max LOB size (is faster)<br>Hence Answer is C:Have you focused on wording ?<br>\\\"So if you already know the maximum lob size in your source database, then you can definitely use the limited lob mode with the particular maximum lob size.\\\"",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 401419,
            "date": "Sat 23 Oct 2021 18:55",
            "username": "ExtHo",
            "content": "Have you focused on wording ?<br>\\\"So if you already know the maximum lob size in your source database, then you can definitely use the limited lob mode with the particular maximum lob size.\\\"",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#49",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist is designing a disaster recovery strategy for a production Amazon DynamoDB table. The table uses provisioned read/write capacity mode, global secondary indexes, and time to live (TTL). The Database Specialist has restored the latest backup to a new table.<br>To prepare the new table with identical settings, which steps should be performed? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#49",
            "answers": [
              {
                "choice": "<p>A. Re-create global secondary indexes in the new table<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Define IAM policies for access to the new table<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Define the TTL settings<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Encrypt the table from the AWS Management Console or use the update-table command<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Set the provisioned read and write capacity<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 49 discussion",
        "discusstion": [
          {
            "id": 468065,
            "date": "Wed 27 Oct 2021 14:47",
            "username": "Notsjohnconnor",
            "content": "I'll go B and C. <br>The following items need to be reconfigured after restoring the DynamoDB table.<br>--AutoScaling policy<br>--IAM policy<br>--CloudWatch settings<br>--Tags<br>--Stream settings<br>--TTLYou are right, it is explained here -> https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/backuprestore_HowItWorks.html",
            "upvote_count": "133",
            "selected_answers": ""
          },
          {
            "id": 468369,
            "date": "Fri 29 Oct 2021 00:24",
            "username": "johnconnor",
            "content": "You are right, it is explained here -> https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/backuprestore_HowItWorks.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 594122,
            "date": "Fri 29 Apr 2022 02:26",
            "username": "novice_expert",
            "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/CreateBackup.html<br><br>You must manually set up the following on the restored table:<br>Auto scaling policies<br>AWS Identity and Access Management (IAM) policies<br>Amazon CloudWatch metrics and alarms<br>Tags<br>Stream settings<br>Time to Live (TTL) settings",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 561715,
            "date": "Sun 06 Mar 2022 01:37",
            "username": "RotterDam",
            "content": "The following are not restored and would need to be configured again:<br>- IAM and Autoscaling Policies<br>- Cloudwatch Triggers and Alarms<br>- TTL and Streams<br>- Tag",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 501342,
            "date": "Tue 14 Dec 2021 13:25",
            "username": "GMartinelli",
            "content": "Option B, C",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BC"
          }
        ]
      },
      {
        "question_id": "#50",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist is creating Amazon DynamoDB tables, Amazon CloudWatch alarms, and associated infrastructure for an Application team using a development AWS account. The team wants a deployment method that will standardize the core solution components while managing environment-specific settings separately, and wants to minimize rework due to configuration errors.<br>Which process should the Database Specialist recommend to meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#50",
            "answers": [
              {
                "choice": "<p>A. Organize common and environmental-specific parameters hierarchically in the AWS Systems Manager Parameter Store, then reference the parameters dynamically from an AWS CloudFormation template. Deploy the CloudFormation stack using the environment name as a parameter.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a parameterized AWS CloudFormation template that builds the required objects. Keep separate environment parameter files in separate Amazon S3 buckets. Provide an AWS CLI command that deploys the CloudFormation stack directly referencing the appropriate parameter bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a parameterized AWS CloudFormation template that builds the required objects. Import the template into the CloudFormation interface in the AWS Management Console. Make the required changes to the parameters and deploy the CloudFormation stack.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS Lambda function that builds the required objects using an AWS SDK. Set the required parameter values in a test event in the Lambda console for each environment that the Application team can modify, as needed. Deploy the infrastructure by triggering the test event in the console.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 50 discussion",
        "discusstion": [
          {
            "id": 131756,
            "date": "Sat 25 Sep 2021 13:02",
            "username": "chicagomassageseekerpan24BillyMadison",
            "content": "A.  AWS Systems Manager Parameter StoreA is correct<br>https://aws.amazon.com/blogs/mt/integrating-aws-cloudformation-with-aws-systems-manager-parameter-store/Is it A based off this?<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
            "upvote_count": "743",
            "selected_answers": ""
          },
          {
            "id": 145297,
            "date": "Tue 12 Oct 2021 00:18",
            "username": "pan24",
            "content": "A is correct<br>https://aws.amazon.com/blogs/mt/integrating-aws-cloudformation-with-aws-systems-manager-parameter-store/",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 141257,
            "date": "Mon 04 Oct 2021 19:07",
            "username": "BillyMadison",
            "content": "Is it A based off this?<br>https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 750201,
            "date": "Mon 19 Dec 2022 20:46",
            "username": "lollyj",
            "content": "Parameter store to separate the environments",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 629531,
            "date": "Sun 10 Jul 2022 13:01",
            "username": "sachin",
            "content": "Mapping should have been the right approach for handing environment and it related setting but that option is not there..<br>We can still achieve setting as using parameters.<br>A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595641,
            "date": "Sun 01 May 2022 17:28",
            "username": "novice_expert",
            "content": "A.  Organize common and environmental-specific parameters hierarchically in the AWS Systems Manager Parameter Store, then reference the parameters dynamically from an AWS CloudFormation template. Deploy the CloudFormation stack using the environment name as a parameter.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 314936,
            "date": "Sat 06 Nov 2021 08:31",
            "username": "LMax",
            "content": "The only reasonable answer is A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 298669,
            "date": "Fri 05 Nov 2021 08:59",
            "username": "myutran",
            "content": "Ans: A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253267,
            "date": "Fri 05 Nov 2021 00:27",
            "username": "JobinAkaJoe",
            "content": "Not sure. I will go with A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212412,
            "date": "Sat 23 Oct 2021 21:29",
            "username": "Ashoks",
            "content": "I would select A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 210971,
            "date": "Fri 22 Oct 2021 04:06",
            "username": "Manmohan",
            "content": "I will go with B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 168257,
            "date": "Wed 20 Oct 2021 14:07",
            "username": "AWSCert2020",
            "content": "For me is C or B because on DynamoDB probably i need different configuration (for example RCU and WCU) between Dev and Prod environment. Probably i choose C because CLI not support parameters on S3 but only the body template.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 145820,
            "date": "Sat 16 Oct 2021 04:58",
            "username": "BillyC",
            "content": "A is correct",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#51",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs online transaction processing (OLTP) workloads on an Amazon RDS for PostgreSQL Multi-AZ DB instance. Tests were run on the database after work hours, which generated additional database logs. The free storage of the RDS DB instance is low due to these additional logs.<br>What should the company do to address this space constraint issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#51",
            "answers": [
              {
                "choice": "<p>A. Log in to the host and run the rm $PGDATA/pg_logs/* command<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the rds.log_retention_period parameter to 1440 and wait up to 24 hours for database logs to be deleted<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a ticket with AWS Support to have the logs deleted<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Run the SELECT rds_rotate_error_log() stored procedure to rotate the logs<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 51 discussion",
        "discusstion": [
          {
            "id": 141266,
            "date": "Tue 28 Sep 2021 15:09",
            "username": "BillyMadisontrietnv",
            "content": "I cant find anything for the other answers, so I'm going with B based off<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.Concepts.PostgreSQL.html<br>\\\"To set the retention period for system logs, use the rds.log_retention_period parameter. You can find rds.log_retention_period in the DB parameter group associated with your DB instance. The unit for this parameter is minutes. For example, a setting of 1,440 retains logs for one day. The default value is 4,320 (three days).\\\"<br>\\\"If storage gets too low, Aurora might delete compressed PostgreSQL logs before the retention period expires. If logs are deleted early, you get a message like the following.<br>The oldest PostgreSQL log files were deleted due to local storage constraints.\\\"Reason: DB logs (error files) that are retained for too long.<br>Because by default, PostgreSQL error log files have a retention value of 4,320 minutes (three days). Large log files can use more space because of higher workloads. You can change the retention period for system logs using the rds.log_retention_period parameter in the DB parameter group associated with your DB instance. For example, if you set the value to 1440, then logs are retained for one day<br>Ref: https://aws.amazon.com/premiumsupport/knowledge-center/diskfull-error-rds-postgresql/",
            "upvote_count": "51",
            "selected_answers": ""
          },
          {
            "id": 620792,
            "date": "Thu 23 Jun 2022 07:52",
            "username": "trietnv",
            "content": "Reason: DB logs (error files) that are retained for too long.<br>Because by default, PostgreSQL error log files have a retention value of 4,320 minutes (three days). Large log files can use more space because of higher workloads. You can change the retention period for system logs using the rds.log_retention_period parameter in the DB parameter group associated with your DB instance. For example, if you set the value to 1440, then logs are retained for one day<br>Ref: https://aws.amazon.com/premiumsupport/knowledge-center/diskfull-error-rds-postgresql/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 691765,
            "date": "Tue 11 Oct 2022 07:21",
            "username": "SachinGoel",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 594494,
            "date": "Fri 29 Apr 2022 15:33",
            "username": "novice_expert",
            "content": "reducerds.log_retention_period parameter and wait",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 554945,
            "date": "Thu 24 Feb 2022 00:36",
            "username": "tugboat",
            "content": "correct",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 515709,
            "date": "Mon 03 Jan 2022 13:45",
            "username": "AmitB",
            "content": "B is correct Answer.<br><br>To set the retention period for system logs, use the rds.log_retention_period parameter. You can find rds.log_retention_period in the DB parameter group associated with your DB instance. The unit for this parameter is minutes. For example, a setting of 1,440 retains logs for one day. The default value is 4,320 (three days). The maximum value is 10,080 (seven days).",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 434025,
            "date": "Mon 01 Nov 2021 18:58",
            "username": "guru_ji",
            "content": "B is Correct.<br>> Anyone planning for exam?<br>We can share study material with each other, it would be beneficial for both. You can email me on \\\"awsdbguru at gmail\\\"",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 428746,
            "date": "Sun 31 Oct 2021 23:02",
            "username": "guru_ji",
            "content": "Correct Answer is >> B<br>any idea how much Q we will get in real exam from Q available here?<br>anyone is preparing for this exam and want to do group study with us, comment with mail_id.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 317526,
            "date": "Wed 27 Oct 2021 14:07",
            "username": "LMax",
            "content": "My choice is B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 168260,
            "date": "Tue 19 Oct 2021 11:59",
            "username": "AWSCert2020",
            "content": "B here<br>The SELECT rds_rotate_error_log() does not exist on RDS",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 145822,
            "date": "Tue 05 Oct 2021 17:08",
            "username": "BillyC",
            "content": "B is correct",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#52",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A user has a non-relational key-value database. The user is looking for a fully managed AWS service that will offload the administrative burdens of operating and scaling distributed databases. The solution must be cost-effective and able to handle unpredictable application traffic.<br>What should a Database Specialist recommend for this user?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#52",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon DynamoDB table with provisioned capacity mode<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an Amazon DocumentDB cluster<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an Amazon DynamoDB table with on-demand capacity mode<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an Amazon Aurora Serverless DB cluster<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 52 discussion",
        "discusstion": [
          {
            "id": 595228,
            "date": "Sat 30 Apr 2022 21:21",
            "username": "novice_expert",
            "content": "C.  Create an Amazon DynamoDB table with on-demand capacity mode",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 509858,
            "date": "Sun 26 Dec 2021 23:00",
            "username": "jove",
            "content": "Key-value database -> DynamoDB<br>Capable of dealing with unexpected application traffic -> on-demand capacity mode",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 498556,
            "date": "Fri 10 Dec 2021 12:25",
            "username": "2025flakyt",
            "content": "C is the answer<br>A key-value database is a type of nonrelational database that uses a simple key-value method to store data. A key-value database stores data as a collection of key-value pairs in which a key serves as a unique identifier.<br>On-demand mode is a good option to create new tables with unknown workloads.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#53",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A gaming company is designing a mobile gaming app that will be accessed by many users across the globe. The company wants to have replication and full support for multi-master writes. The company also wants to ensure low latency and consistent performance for app users.<br>Which solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#53",
            "answers": [
              {
                "choice": "<p>A. Use Amazon DynamoDB global tables for storage and enable DynamoDB automatic scaling<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon Aurora for storage and enable cross-Region Aurora Replicas<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon Aurora for storage and cache the user content with Amazon ElastiCache<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon Neptune for storage<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 53 discussion",
        "discusstion": [
          {
            "id": 594679,
            "date": "Fri 29 Apr 2022 22:00",
            "username": "novice_expert",
            "content": "DynamoDB global tables have read and write in all regions, so these are kind of multi master like Aurora Multi Master<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_HowItWorks.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 505725,
            "date": "Tue 21 Dec 2021 00:00",
            "username": "jove",
            "content": "Option A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 487357,
            "date": "Fri 26 Nov 2021 13:48",
            "username": "GMartinelli",
            "content": "Option A.  I was looking for Aurora Multi-Master or DynamoDB Global Tables, there is only one of them.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 476545,
            "date": "Thu 11 Nov 2021 23:49",
            "username": "leunamE",
            "content": "Option A.  worldwide, multi-master writes, minimal latency",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#54",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist needs to speed up any failover that might occur on an Amazon Aurora PostgreSQL DB cluster. The Aurora DB cluster currently includes the primary instance and three Aurora Replicas.<br>How can the Database Specialist ensure that failovers occur with the least amount of downtime for the application?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#54",
            "answers": [
              {
                "choice": "<p>A. Set the TCP keepalive parameters low<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Call the AWS CLI failover-db-cluster command<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable Enhanced Monitoring on the DB cluster<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Start a database activity stream on the DB cluster<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 54 discussion",
        "discusstion": [
          {
            "id": 130372,
            "date": "Thu 23 Sep 2021 13:01",
            "username": "pan24gelsmguru_ji",
            "content": "Ans: A<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.BestPractices.html#AuroraPostgreSQL.BestPractices.FastFailover.TCPKeepalivesA<br>\\\"Enabling TCP keepalive parameters and setting them aggressively ensures that if your client is no longer able to connect to the database, then any active connections are quickly closed. This action allows the application to react appropriately, such as by picking a new host to connect to.\\\"Correct Answer: A",
            "upvote_count": "1232",
            "selected_answers": ""
          },
          {
            "id": 414432,
            "date": "Mon 18 Oct 2021 05:44",
            "username": "gelsmguru_ji",
            "content": "A<br>\\\"Enabling TCP keepalive parameters and setting them aggressively ensures that if your client is no longer able to connect to the database, then any active connections are quickly closed. This action allows the application to react appropriately, such as by picking a new host to connect to.\\\"Correct Answer: A",
            "upvote_count": "32",
            "selected_answers": ""
          },
          {
            "id": 438540,
            "date": "Mon 18 Oct 2021 05:53",
            "username": "guru_ji",
            "content": "Correct Answer: A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 595571,
            "date": "Sun 01 May 2022 13:32",
            "username": "novice_expert",
            "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.BestPractices.html#AuroraPostgreSQL.BestPractices.FastFailover.TCPKeepalives<br><br>You need to set the following TCP keepalive parameters:<br><br>tcp_keepalive_time controls the time, in seconds, after which a keepalive packet is sent when no data has been sent by the socket (ACKs are not considered data). We recommend the following setting:<br><br>tcp_keepalive_time1<br><br>tcp_keepalive_intvl controls the time, in seconds, between sending subsequent keepalive packets after the initial packet is sent (set using the tcp_keepalive_time parameter). We recommend the following setting:<br><br>tcp_keepalive_intvl1<br><br>tcp_keepalive_probes is the number of unacknowledged keepalive probes that occur before the application is notified. We recommend the following setting:<br><br>tcp_keepalive_probes5<br><br>These settings should notify the application within five seconds when the database stops responding.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 438541,
            "date": "Tue 26 Oct 2021 12:19",
            "username": "guru_ji",
            "content": "Correct Answer: A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 314951,
            "date": "Mon 18 Oct 2021 01:53",
            "username": "LMax",
            "content": "Answer A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 298685,
            "date": "Sat 02 Oct 2021 15:07",
            "username": "myutran",
            "content": "Ans: A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253282,
            "date": "Sat 02 Oct 2021 08:02",
            "username": "JobinAkaJoe",
            "content": "Option A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212421,
            "date": "Fri 01 Oct 2021 08:44",
            "username": "Ashoks",
            "content": "Yes. It is A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 145825,
            "date": "Sun 26 Sep 2021 00:03",
            "username": "BillyC",
            "content": "A is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 134916,
            "date": "Sat 25 Sep 2021 20:06",
            "username": "Mickysingh",
            "content": "Ans A because we can reduce it by keeping low value of TCP among other parameter.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 131803,
            "date": "Sat 25 Sep 2021 14:29",
            "username": "chicagomassageseeker",
            "content": "Answer A",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#55",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist needs to define a database migration strategy to migrate an on-premises Oracle database to an Amazon Aurora MySQL DB cluster. The company requires near-zero downtime for the data migration. The solution must also be cost-effective.<br>Which approach should the Database Specialist take?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#55",
            "answers": [
              {
                "choice": "<p>A. Dump all the tables from the Oracle database into an Amazon S3 bucket using datapump (expdp). Run data transformations in AWS Glue. Load the data from the S3 bucket to the Aurora DB cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Order an AWS Snowball appliance and copy the Oracle backup to the Snowball appliance. Once the Snowball data is delivered to Amazon S3, create a new Aurora DB cluster. Enable the S3 integration to migrate the data directly from Amazon S3 to Amazon RDS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the AWS Schema Conversion Tool (AWS SCT) to help rewrite database objects to MySQL during the schema migration. Use AWS DMS to perform the full load and change data capture (CDC) tasks.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use AWS Server Migration Service (AWS SMS) to import the Oracle virtual machine image as an Amazon EC2 instance. Use the Oracle Logical Dump utility to migrate the Oracle data from Amazon EC2 to an Aurora DB cluster.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 55 discussion",
        "discusstion": [
          {
            "id": 131823,
            "date": "Fri 24 Sep 2021 22:43",
            "username": "chicagomassageseeker",
            "content": "Answer C.  This is heterogenous migration and requires DMS and SCT.",
            "upvote_count": "15",
            "selected_answers": ""
          },
          {
            "id": 137658,
            "date": "Thu 14 Oct 2021 14:35",
            "username": "learnawsBillyMadison",
            "content": "Yep, C hereLooks correct<br>https://aws.amazon.com/blogs/database/migrating-oracle-databases-with-near-zero-downtime-using-aws-dms/",
            "upvote_count": "62",
            "selected_answers": ""
          },
          {
            "id": 141279,
            "date": "Fri 15 Oct 2021 05:49",
            "username": "BillyMadison",
            "content": "Looks correct<br>https://aws.amazon.com/blogs/database/migrating-oracle-databases-with-near-zero-downtime-using-aws-dms/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 729508,
            "date": "Mon 28 Nov 2022 19:19",
            "username": "examineme",
            "content": "Answer is C:Use AWS Schema Conversion Toolto convert Database and DMS for fast transfer.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 703460,
            "date": "Tue 25 Oct 2022 02:57",
            "username": "rags1482",
            "content": "Answer: C<br>https://docs.aws.amazon.com/dms/latest/sbs/chap-on-premoracle2aurora.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 595386,
            "date": "Sun 01 May 2022 03:31",
            "username": "novice_expert",
            "content": "https://aws.amazon.com/blogs/database/migrating-oracle-databases-with-near-zero-downtime-using-aws-dms/<br><br>Zero down timeFirst SCT and then DMS full and CDC<br>C.  Use the AWS Schema Conversion Tool (AWS SCT) to help rewrite database objects to MySQL during the schema migration. Use AWS DMS to perform the full load and change data capture (CDC) tasks.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 314952,
            "date": "Wed 20 Oct 2021 18:36",
            "username": "LMax",
            "content": "Answer C should be the one.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 298691,
            "date": "Mon 18 Oct 2021 11:15",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253283,
            "date": "Sun 17 Oct 2021 04:55",
            "username": "JobinAkaJoe",
            "content": "C is the right choice",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212424,
            "date": "Fri 15 Oct 2021 12:49",
            "username": "Ashoks",
            "content": "Yes, it is C.  Zero down timeFirst SCT and then DMS full and CDC",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 134923,
            "date": "Tue 28 Sep 2021 20:26",
            "username": "Mickysingh",
            "content": "Ans D can not be right as it is not doing schema conversion and using oracle backup for restoring. Also downtime is high.",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#56",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A marketing company is using Amazon DocumentDB and requires that database audit logs be enabled. A Database Specialist needs to configure monitoring so that all data definition language (DDL) statements performed are visible to the Administrator. The Database Specialist has set the audit_logs parameter to enabled in the cluster parameter group.<br>What should the Database Specialist do to automatically collect the database logs for the Administrator?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#56",
            "answers": [
              {
                "choice": "<p>A. Enable DocumentDB to export the logs to Amazon CloudWatch Logs<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable DocumentDB to export the logs to AWS CloudTrail<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable DocumentDB Events to export the logs to Amazon CloudWatch Logs<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure an AWS Lambda function to download the logs using the download-db-log-file-portion operation and store the logs in Amazon S3<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 56 discussion",
        "discusstion": [
          {
            "id": 476902,
            "date": "Fri 12 Nov 2021 13:00",
            "username": "leunamE",
            "content": "Option A. ",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 540355,
            "date": "Fri 04 Feb 2022 11:15",
            "username": "jeyp12",
            "content": "Looks like option C was added as a distractor. When the value of the audit_logs cluster parameter is enabled, you must also enable Amazon DocumentDB to export logs to Amazon CloudWatch. If you omit either of these steps, audit logs will not be sent to CloudWatch. Answer should be A",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 724924,
            "date": "Wed 23 Nov 2022 07:07",
            "username": "Arun32",
            "content": "Option A is correct. Just validated from AWS site:<br>When the value of the audit_logs cluster parameter is enabled, you must also enable Amazon DocumentDB to export logs to Amazon CloudWatch. If you omit either of these steps, audit logs will not be sent to CloudWatch.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 696594,
            "date": "Sun 16 Oct 2022 23:28",
            "username": "awsjjj",
            "content": "I am leaning towards A. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 629546,
            "date": "Sun 10 Jul 2022 13:59",
            "username": "Chirantan",
            "content": "I think Answer is A<br>When auditing is enabled, Amazon DocumentDB exports your cluster=E2=80=99s auditing records (JSON documents) to Amazon CloudWatch Logs. You can use Amazon CloudWatch Logs to analyze, monitor, and archive your Amazon DocumentDB auditing events.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 626523,
            "date": "Sun 03 Jul 2022 12:53",
            "username": "kush_sumit",
            "content": "Answer A:<br><br>https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html<br>Step 2. Enable Amazon CloudWatch Logs Export<br>When the value of the audit_logs cluster parameter is enabled, you must also enable Amazon DocumentDB to export logs to Amazon CloudWatch. If you omit either of these steps, audit logs will not be sent to CloudWatch.<br><br>Do not get confused with \\\"Amazon DocumentDB records Data Definition Language (DDL), authentication, authorization, and user management events to Amazon CloudWatch Logs.\\\" The above event start to get recorded when you enable auditing via enabling audit_log parameter.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 626515,
            "date": "Sun 03 Jul 2022 12:39",
            "username": "kush_sumit",
            "content": "Answer A:<br><br>https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html<br>Step 2. Enable Amazon CloudWatch Logs Export<br>When the value of the audit_logs cluster parameter is enabled, you must also enable Amazon DocumentDB to export logs to Amazon CloudWatch. If you omit either of these steps, audit logs will not be sent to CloudWatch.<br><br>When creating a cluster, performing a point-in-time-restore, or restoring a snapshot, you can enable CloudWatch Logs by following these steps.<br><br>Do not get confused with \\\"Amazon DocumentDB records Data Definition Language (DDL), authentication, authorization, and user management events to Amazon CloudWatch Logs.\\\" The above event start to get recorded when you enable auditing via enabling audit_log parameter.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 626395,
            "date": "Sun 03 Jul 2022 05:17",
            "username": "minhntm",
            "content": "Option A",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 626394,
            "date": "Sun 03 Jul 2022 05:16",
            "username": "minhntm",
            "content": "Option A. <br>According to this document: https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html<br>Ensure that both steps are completed, or auditing logs will not be sent to CloudWatch Logs:<br>- Enable the audit_logs Cluster Parameter<br>- Enable Amazon CloudWatch Logs Export<br>The question saidthat \\\"the Database Specialist has activated the audit logs option\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 622698,
            "date": "Sun 26 Jun 2022 19:19",
            "username": "elf78",
            "content": "In https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html ,<br>Read this line \\\"When auditing is enabled, Amazon DocumentDB records Data Definition Language (DDL), ....\\\".",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 608892,
            "date": "Sun 29 May 2022 20:34",
            "username": "Dantas",
            "content": "https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 602010,
            "date": "Sun 15 May 2022 11:22",
            "username": "rlnd2000",
            "content": "I will go with C, You Must enable AUDITs to get the DDLs, for me \\\"Enable DocumentDB Events\\\" means enable the audit events that are by default disabled, check this from aws documentation:<br><br>https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html<br><br>With Amazon DocumentDB (with MongoDB compatibility), you can audit events that were performed in your cluster. Examples of logged events include successful and failed authentication attempts, dropping a collection in a database, or creating an index. By default, auditing is disabled on Amazon DocumentDB and requires that you opt in to use this feature.<br><br>When auditing is enabled, Amazon DocumentDB records Data Definition Language (DDL), ...",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 594746,
            "date": "Sat 30 Apr 2022 02:33",
            "username": "novice_expert",
            "content": "A.  logs -> CloudWatch<br>x B.  CloudTrail is to enable auditing not file destinatiom<br>x C DocumentDB Events do not support DDL<br>x D. ",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 555617,
            "date": "Thu 24 Feb 2022 23:32",
            "username": "tugboat",
            "content": "C is a distraction",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 534658,
            "date": "Fri 28 Jan 2022 12:46",
            "username": "awsmonster",
            "content": "Option A:https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html<br>When auditing is enabled, Amazon DocumentDB records Data Definition Language (DDL), authentication, authorization, and user management events to Amazon CloudWatch Logs. When auditing is enabled, Amazon DocumentDB exports your cluster=E2=80=99s auditing records (JSON documents) to Amazon CloudWatch Logs. You can use Amazon CloudWatch Logs to analyze, monitor, and archive your Amazon DocumentDB auditing events.<br><br>DocumentDB Event does not support DDL:<br>https://docs.aws.amazon.com/documentdb/latest/developerguide/managing-events.html<br>\\\"EventCategories\\\": [<br>\\\"notification\\\",<br>\\\"failure\\\",<br>\\\"creation\\\",<br>\\\"maintenance\\\",<br>\\\"deletion\\\",<br>\\\"recovery\\\",<br>\\\"restoration\\\",<br>\\\"configuration change\\\",<br>\\\"read replica\\\",<br>\\\"backtrack\\\",<br>\\\"low storage\\\",<br>\\\"backup\\\",<br>\\\"availability\\\",<br>\\\"failover\\\"",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 510338,
            "date": "Mon 27 Dec 2021 14:40",
            "username": "ShunpinRotterDam",
            "content": "https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.htmlEvents capture changes to thingslike instance restart, sg changes. it does NOT capture DDLs. Thats AUDITS. C is incorrect",
            "upvote_count": "22",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 561270,
            "date": "Sat 05 Mar 2022 07:36",
            "username": "RotterDam",
            "content": "Events capture changes to thingslike instance restart, sg changes. it does NOT capture DDLs. Thats AUDITS. C is incorrect",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 488527,
            "date": "Sat 27 Nov 2021 22:58",
            "username": "joveRotterDam",
            "content": "Option C seems correctEvents capture changes to thingslike instance restart, sg changes. it does NOT capture DDLs. Thats AUDITS. C is incorrect",
            "upvote_count": "41",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 561271,
            "date": "Sat 05 Mar 2022 07:36",
            "username": "RotterDam",
            "content": "Events capture changes to thingslike instance restart, sg changes. it does NOT capture DDLs. Thats AUDITS. C is incorrect",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#57",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is looking to move an on-premises IBM Db2 database running AIX on an IBM POWER7 server. Due to escalating support and maintenance costs, the company is exploring the option of moving the workload to an Amazon Aurora PostgreSQL DB cluster.<br>What is the quickest way for the company to gather data on the migration compatibility?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#57",
            "answers": [
              {
                "choice": "<p>A. Perform a logical dump from the Db2 database and restore it to an Aurora DB cluster. Identify the gaps and compatibility of the objects migrated by comparing row counts from source and target tables.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Run AWS DMS from the Db2 database to an Aurora DB cluster. Identify the gaps and compatibility of the objects migrated by comparing the row counts from source and target tables.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Run native PostgreSQL logical replication from the Db2 database to an Aurora DB cluster to evaluate the migration compatibility.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Run the AWS Schema Conversion Tool (AWS SCT) from the Db2 database to an Aurora DB cluster. Create a migration assessment report to evaluate the migration compatibility.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 57 discussion",
        "discusstion": [
          {
            "id": 314959,
            "date": "Wed 03 Nov 2021 02:23",
            "username": "LMax",
            "content": "Must be D",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 595007,
            "date": "Sat 30 Apr 2022 14:50",
            "username": "novice_expert",
            "content": "runAWS SCT from the Db2 database to an Aurora DB cluster.<br> -> Create a migration assessment report to evaluate the migration compatibility.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 555719,
            "date": "Fri 25 Feb 2022 04:04",
            "username": "tugboat",
            "content": "SCT can do the required checks",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 298709,
            "date": "Thu 21 Oct 2021 14:27",
            "username": "myutran",
            "content": "Ans: D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 253296,
            "date": "Thu 21 Oct 2021 09:03",
            "username": "JobinAkaJoe",
            "content": "D -right answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 153956,
            "date": "Mon 04 Oct 2021 21:48",
            "username": "firbhat",
            "content": "ANS: D<br><br>=E2=80=A2 Converts DB/DW schema from source to target (including procedures / views / secondary indexes / FK and constraints)<br>=E2=80=A2 Mainly for heterogeneous DB migrations and DW migrations",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 144765,
            "date": "Wed 29 Sep 2021 13:33",
            "username": "jnassp1",
            "content": "D - SCT",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#58",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An ecommerce company is using Amazon DynamoDB as the backend for its order-processing application. The steady increase in the number of orders is resulting in increased DynamoDB costs. Order verification and reporting perform many repeated GetItem functions that pull similar datasets, and this read activity is contributing to the increased costs. The company wants to control these costs without significant development efforts.<br>How should a Database Specialist address these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#58",
            "answers": [
              {
                "choice": "<p>A. Use AWS DMS to migrate data from DynamoDB to Amazon DocumentDB<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon DynamoDB Streams and Amazon Kinesis Data Firehose to push the data into Amazon Redshift<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an Amazon ElastiCache for Redis in front of DynamoDB to boost read performance<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use DynamoDB Accelerator to offload the reads<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 58 discussion",
        "discusstion": [
          {
            "id": 137661,
            "date": "Thu 23 Sep 2021 09:58",
            "username": "learnaws",
            "content": "Keywords here are \\\"without significant development efforts\\\". DAX is the answer. D",
            "upvote_count": "16",
            "selected_answers": ""
          },
          {
            "id": 724928,
            "date": "Wed 23 Nov 2022 07:16",
            "username": "Arun32",
            "content": "Option D :<br>https://docs.amazonaws.cn/en_us/amazondynamodb/latest/developerguide/DAX.html<br>\\\"Applications that are read-intensive, but are also cost-sensitive. With DynamoDB, you provision the number of reads per second that your application requires. If read activity increases, you can increase your tables' provisioned read throughput (at an additional cost). Or, you can offload the activity from your application to a DAX cluster, and reduce the number of read capacity units that you need to purchase otherwise.\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 594674,
            "date": "Fri 29 Apr 2022 21:53",
            "username": "novice_expert",
            "content": "large number of repeated GetItem methods > DAX",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 557412,
            "date": "Sun 27 Feb 2022 16:43",
            "username": "user0001",
            "content": "D is the answer since they don't want developments",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 505724,
            "date": "Mon 20 Dec 2021 23:59",
            "username": "jove",
            "content": "Option D.  Service cost is not a concern but development cost is.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 485900,
            "date": "Wed 24 Nov 2021 12:39",
            "username": "GMartinelli",
            "content": "The problem is various repeated operations, a in memory DB like DAX is the best aproach.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 314961,
            "date": "Fri 05 Nov 2021 11:55",
            "username": "LMax",
            "content": "D is the easiest option",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 298712,
            "date": "Thu 04 Nov 2021 06:15",
            "username": "myutran",
            "content": "Ans: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253298,
            "date": "Tue 02 Nov 2021 01:36",
            "username": "JobinAkaJoe",
            "content": "We need caching solution to offload reads and reduce the cost.<br>DAX is the best caching solution for DynamoDB API calls",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212434,
            "date": "Sun 31 Oct 2021 02:04",
            "username": "Ashoks",
            "content": "yes it is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 168276,
            "date": "Sat 30 Oct 2021 05:04",
            "username": "AWSCert2020",
            "content": "D here, but DAX is not cost effective way",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 159859,
            "date": "Sat 23 Oct 2021 17:16",
            "username": "[Removed]cloud4gr8Dip11",
            "content": "B was never in play for me. Redshift is not cheap and that's not what they're asking.<br>I'm surprised nobody picked C, textbook case for CachingC is not easy to set up....it needs significant development efforts.<br>So, its not the ideal one choose.<br>D could be the best option.C and D both caching solution. D is purpose built for DynamoDB, where in C you have to do deal with staleness manually.So D is correct answer.",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 164372,
            "date": "Tue 26 Oct 2021 15:49",
            "username": "cloud4gr8Dip11",
            "content": "C is not easy to set up....it needs significant development efforts.<br>So, its not the ideal one choose.<br>D could be the best option.C and D both caching solution. D is purpose built for DynamoDB, where in C you have to do deal with staleness manually.So D is correct answer.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 365194,
            "date": "Sun 07 Nov 2021 05:42",
            "username": "Dip11",
            "content": "C and D both caching solution. D is purpose built for DynamoDB, where in C you have to do deal with staleness manually.So D is correct answer.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 158884,
            "date": "Fri 15 Oct 2021 19:36",
            "username": "szmulder",
            "content": "Q, The company wants to control these costs<br>Answer B.  I this to using Redshift and kinesis will increase the cost a lot compare to just using DAX.<br>So the answer is D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 146605,
            "date": "Fri 08 Oct 2021 11:45",
            "username": "BillyMadison",
            "content": "I think D as well. Dax helps with read intensiveness and cost effectiveness \\\"without significant development efforts\\\".<br>https://docs.amazonaws.cn/en_us/amazondynamodb/latest/developerguide/DAX.html<br>\\\"Applications that are read-intensive, but are also cost-sensitive. With DynamoDB, you provision the number of reads per second that your application requires. If read activity increases, you can increase your tables' provisioned read throughput (at an additional cost). Or, you can offload the activity from your application to a DAX cluster, and reduce the number of read capacity units that you need to purchase otherwise.\\\"",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 145176,
            "date": "Sat 25 Sep 2021 02:16",
            "username": "BillyC",
            "content": "D here",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 134964,
            "date": "Wed 22 Sep 2021 12:00",
            "username": "MickysinghAWSCert2020rlnd2000",
            "content": "Ans B and its righthttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/RedshiftforDynamoDB. html<br>https://medium.com/@lewisdgavin/complex-dynamodb-data-into-redshift-made-easy-336c6329ea25<br><br>Ingesting DynamoDB data into Redshift<br>If you want to ingest DynamoDB data into Redshift you have a few options.<br>The Redshift Copy command<br>Build a Data Pipeline that copies the data using an EMR job to S3<br>Export the DynamoDB data to a file using the AWS CLI and load the flat file into Redshift.<br>You also have the option of DynamoDB streams or a Kinesis firehouse but I=E2=80=99ll save those for a future article.Why this ? are you thinking that RS is more cheaper than DynamoDB ? I don't think soYou are assuming that the company has a Redshift cluster, and that is incorrect, you have to deploy a new Redshift Cluster in prod, and that is not a cheap solution.",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 168274,
            "date": "Wed 27 Oct 2021 01:22",
            "username": "AWSCert2020",
            "content": "Why this ? are you thinking that RS is more cheaper than DynamoDB ? I don't think so",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 611106,
            "date": "Fri 03 Jun 2022 15:35",
            "username": "rlnd2000",
            "content": "You are assuming that the company has a Redshift cluster, and that is incorrect, you have to deploy a new Redshift Cluster in prod, and that is not a cheap solution.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#59",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>An IT consulting company wants to reduce costs when operating its development environment databases. The company's workflow creates multiple Amazon<br>Aurora MySQL DB clusters for each development group. The Aurora DB clusters are only used for 8 hours a day. The DB clusters can then be deleted at the end of the development cycle, which lasts 2 weeks.<br>Which of the following provides the MOST cost-effective solution?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#59",
            "answers": [
              {
                "choice": "<p>A. Use AWS CloudFormation templates. Deploy a stack with the DB cluster for each development group. Delete the stack at the end of the development cycle.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use the Aurora DB cloning feature. Deploy a single development and test Aurora DB instance, and create clone instances for the development groups. Delete the clones at the end of the development cycle.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Aurora Replicas. From the master automatic pause compute capacity option, create replicas for each development group, and promote each replica to master. Delete the replicas at the end of the development cycle.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Aurora Serverless. Restore current Aurora snapshot and deploy to a serverless cluster for each development group. Enable the option to pause the compute capacity on the cluster and set an appropriate timeout.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 59 discussion",
        "discusstion": [
          {
            "id": 621702,
            "date": "Fri 24 Jun 2022 16:13",
            "username": "Balki",
            "content": "It is a close call between B and D.  However, not everyone talks about the actual API call that can be used for Aurora Serverless, which is called as AutoPause. More details in the link.<br>https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ScalingConfiguration.html<br>So it should be D",
            "upvote_count": "9",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 253307,
            "date": "Mon 25 Oct 2021 05:40",
            "username": "JobinAkaJoeDip11",
            "content": "A - meets the basic requirement. But its not cost effective.<br>B - Good option. Saves cost on the storage layer with copy-on-write feature<br>C - Meets the requirement, bit not cost effective.<br>D - Most cost effective.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.pause-resumeSpot on",
            "upvote_count": "51",
            "selected_answers": ""
          },
          {
            "id": 365198,
            "date": "Tue 02 Nov 2021 20:09",
            "username": "Dip11",
            "content": "Spot on",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 694649,
            "date": "Fri 14 Oct 2022 11:53",
            "username": "RBSK",
            "content": "Most-Cost effective solution is the key here.REfer to https://aws.plainenglish.io/aurora-database-clones-what-they-are-and-when-to-use-them-b82be9d60309<br><br>Pricing<br>Now let=E2=80=99s talk about the pricing for creating and using Amazon Aurora database clones. We get billed per hour for the database instances provisioned as part of the clone database. The pricing is based on the DB instance class that we select for the clone. We are also charged for any addition storage that we use as we make edits to the clone database.<br>Option D is full copy of the DB and definitely will cost more than Option B. ",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 629550,
            "date": "Sun 10 Jul 2022 14:09",
            "username": "Chirantan",
            "content": "Answer should be D",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 619767,
            "date": "Tue 21 Jun 2022 12:34",
            "username": "ryuhei",
            "content": "Answer:D",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 604637,
            "date": "Fri 20 May 2022 23:31",
            "username": "Radhaghosh",
            "content": "Option B is correct.<br>Question talks about destroying the cluster after 2 weeks, With aurora you will not pay for the compute capacity but you will pay for the storage capacity. If Option D had the delete option, I could have happily choose Option D.  The advantage of Option B, you are not paying additional Storage as clone use the same storage + delta changes.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 597903,
            "date": "Sat 07 May 2022 00:37",
            "username": "muro",
            "content": "It is necessary to support operation for 8 hours.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 594758,
            "date": "Sat 30 Apr 2022 02:56",
            "username": "novice_expert",
            "content": "single dev & test instanace<br>-> Aurora clone<br>-> delete clones at end of dev cycle",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 586232,
            "date": "Fri 15 Apr 2022 09:38",
            "username": "randss",
            "content": "Even if u pause serverless cluster storage, doesnt address the destroyed after 2 weeks requirement. I go with B. ",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 555628,
            "date": "Thu 24 Feb 2022 23:50",
            "username": "tugboat",
            "content": "Amazon Aurora now allows you to create clones between Aurora Serverless v1 and provisioned Aurora DB clusters to enable quick sharing of data.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 534677,
            "date": "Fri 28 Jan 2022 13:19",
            "username": "awsmonster",
            "content": "I vote for B:<br><br>There isn't an \\\"option to pause the compute capacity on the cluster and set an appropriate timeout.\\\" in the RDS console for Serverless.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 510366,
            "date": "Mon 27 Dec 2021 15:16",
            "username": "Shunpin",
            "content": "I prefer B. <br>Aurora Serverless is not compatible to all Aurora provisioned engine version. However, you can do clone with most engine version. Meanwhile, I also consider the performance while restoring snapshot to Aurora Serverless.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 506362,
            "date": "Tue 21 Dec 2021 19:44",
            "username": "jove",
            "content": "It is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 438599,
            "date": "Thu 04 Nov 2021 18:21",
            "username": "guru_ji",
            "content": "Answer: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 380818,
            "date": "Wed 03 Nov 2021 05:28",
            "username": "Suresh108guru_ji",
            "content": "B or D???<br><br>B - if you have 100TB database then it is going to be beneficial on storage cost savings.<br>D - best on compute cost savings, keeping it down when not required to run the resources.<br><br>I think Question gives more emphasizes on 8 hour run time of resources, I am leaning towards D. I agree with you.<br>Answer: D",
            "upvote_count": "32",
            "selected_answers": ""
          },
          {
            "id": 438598,
            "date": "Thu 04 Nov 2021 12:05",
            "username": "guru_ji",
            "content": "I agree with you.<br>Answer: D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 314967,
            "date": "Mon 01 Nov 2021 06:19",
            "username": "LMax",
            "content": "The most optimal is D in the list provided",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 298716,
            "date": "Tue 26 Oct 2021 19:30",
            "username": "myutran",
            "content": "Ans: D",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#60",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has multiple applications serving data from a secure on-premises database. The company is migrating all applications and databases to the AWS<br>Cloud. The IT Risk and Compliance department requires that auditing be enabled on all secure databases to capture all log ins, log outs, failed logins, permission changes, and database schema changes. A Database Specialist has recommended Amazon Aurora MySQL as the migration target, and leveraging the Advanced<br>Auditing feature in Aurora.<br>Which events need to be specified in the Advanced Auditing configuration to satisfy the minimum auditing requirements? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ABC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#60",
            "answers": [
              {
                "choice": "<p>A. CONNECT<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. QUERY_DCL<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. QUERY_DDL<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. QUERY_DML<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. TABLE<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. QUERY<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 60 discussion",
        "discusstion": [
          {
            "id": 474597,
            "date": "Tue 09 Nov 2021 04:33",
            "username": "alwaysAstudentjohnconnoruser0001jthuma",
            "content": "Answer A,B,C<br>Connect - logins / DCL - authorizations (grant,revoke), DDL - schema updatesyou are rightB is wrong , they are not asking for grant and revokeI think they are...Grant Revoke are permission statements.",
            "upvote_count": "13111",
            "selected_answers": ""
          },
          {
            "id": 480477,
            "date": "Thu 18 Nov 2021 07:36",
            "username": "johnconnor",
            "content": "you are right",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 557672,
            "date": "Sun 27 Feb 2022 23:04",
            "username": "user0001jthuma",
            "content": "B is wrong , they are not asking for grant and revokeI think they are...Grant Revoke are permission statements.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 759104,
            "date": "Tue 27 Dec 2022 23:02",
            "username": "jthuma",
            "content": "I think they are...Grant Revoke are permission statements.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595152,
            "date": "Sat 30 Apr 2022 18:15",
            "username": "novice_expert",
            "content": "A.  CONNECT(for log ins and log outs, unsuccessful logins)B.  QUERY_DCL (for grants - authorization modifications)C.  QUERY_DDL (for schema changes)<br>x D.  QUERY_DML<br>x E.  TABLE<br>x F.  QUERY",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: ABC"
          },
          {
            "id": 594004,
            "date": "Thu 28 Apr 2022 21:22",
            "username": "novice_expert",
            "content": "QUERY_DCL for authorization changes",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: ABC"
          },
          {
            "id": 561647,
            "date": "Sat 05 Mar 2022 21:58",
            "username": "RotterDam",
            "content": "ABC- pretty straightfoward",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: ABC"
          },
          {
            "id": 557670,
            "date": "Sun 27 Feb 2022 23:03",
            "username": "user0001",
            "content": "ACD<br>since they need to capture data modification",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 555747,
            "date": "Fri 25 Feb 2022 05:10",
            "username": "tugboat",
            "content": "B is necessary too",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: ABC"
          },
          {
            "id": 507361,
            "date": "Wed 22 Dec 2021 21:17",
            "username": "jove",
            "content": "A,B,C are correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#61",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A gaming company has recently acquired a successful iOS game, which is particularly popular during the holiday season. The company has decided to add a leaderboard to the game that uses Amazon DynamoDB.  The application load is expected to ramp up over the holiday season.<br>Which solution will meet these requirements at the lowest cost?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#61",
            "answers": [
              {
                "choice": "<p>A. DynamoDB Streams<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. DynamoDB with DynamoDB Accelerator<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. DynamoDB with on-demand capacity mode<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. DynamoDB with provisioned capacity mode with Auto Scaling<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 61 discussion",
        "discusstion": [
          {
            "id": 609459,
            "date": "Mon 30 May 2022 23:31",
            "username": "Dantas",
            "content": "provisioned + auto scaling<br><br>1. It's not a new game, so the application's load (and its increase during Xmas) is already known.<br>2. the question asks \\\"at the lowest possible cost\\\":",
            "upvote_count": "8",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 521396,
            "date": "Tue 11 Jan 2022 09:44",
            "username": "awsmonster",
            "content": "I vote for D. <br><br>Reason, the game is bought from another company. So it has been running for some time and the load is known. The company is able to even identify the surge during Christmas period. Provisioned capacity will be more economical as compared to on demand.",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 675531,
            "date": "Wed 21 Sep 2022 23:45",
            "username": "Jokera",
            "content": "I vote for D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 670567,
            "date": "Fri 16 Sep 2022 09:22",
            "username": "RyanFeng",
            "content": "C might be better<br>https://dynobase.dev/dynamodb-on-demand-vs-provisioned-scaling/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 624523,
            "date": "Wed 29 Jun 2022 10:53",
            "username": "sachin",
            "content": "Since this is a leader board, DAX is out of question which mostly help in read intensive workloads.<br>Now when we compare on-Demand vs providioned with auto scaling .<br>Since the application is already a popular application and likely to increase during chrismas that mean business is aware about the application usage pattern.<br><br>https://aws.amazon.com/blogs/database/amazon-dynamodb-auto-scaling-performance-and-cost-optimization-at-any-scale/<br><br>Provisioned Auto Scaling can provide lower cost also in shown in the above case study.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 617966,
            "date": "Sat 18 Jun 2022 00:27",
            "username": "rlnd2000rlnd2000",
            "content": "I will go with B. <br>The app is ok ad the new feature is the leaderboard, leaderboard needs low latency so DAX is the answer for me.One more thing DAX saves costs because it reduces read load in DynamoDB,",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 618215,
            "date": "Sat 18 Jun 2022 13:15",
            "username": "rlnd2000",
            "content": "One more thing DAX saves costs because it reduces read load in DynamoDB,",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595048,
            "date": "Sat 30 Apr 2022 15:43",
            "username": "novice_expert",
            "content": "x A.  DynamoDB Streams<br>x B.  DynamoDB with DynamoDB Accelerator (DAX is for fast static reads, but here data will change quickly)C.  DynamoDB with on-demand capacity mode<br>x D.  DynamoDB with provisioned capacity mode with Auto Scaling ( may be good option if game in use always)",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 557586,
            "date": "Sun 27 Feb 2022 21:06",
            "username": "user0001",
            "content": "why mot B ? it is about leaderboard refresh",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 506602,
            "date": "Wed 22 Dec 2021 03:28",
            "username": "jove",
            "content": "Auto Scaling is cheaper.. If you're not expecting sudden spikes.I vote for D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 500695,
            "date": "Mon 13 Dec 2021 16:44",
            "username": "grekh001",
            "content": "I'm not sure about C?<br>\\\"On-demand is ideal for bursty, new, or unpredictable workloads whose traffic can spike in seconds or minutes\\\"<br>vs.<br>'DynamoDB released auto scaling to make it easier for you to manage capacity efficiently, and auto scaling continues to help DynamoDB users lower the cost of workloads that have a predictable traffic pattern.\\\"<br><br>https://aws.amazon.com/blogs/database/amazon-dynamodb-auto-scaling-performance-and-cost-optimization-at-any-scale/<br><br>To save costs and based on the link I'd say that the answer is D",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 497873,
            "date": "Thu 09 Dec 2021 17:14",
            "username": "2025flakyt",
            "content": "C is correct<br>On-demand mode is a good option if any of the following are true:<br>You create new tables with unknown workloads.<br>You have unpredictable application traffic.<br>You prefer the ease of paying for only what you use.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 492660,
            "date": "Thu 02 Dec 2021 17:10",
            "username": "GMartinelli",
            "content": "Option C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          }
        ]
      },
      {
        "question_id": "#62",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's Security department established new requirements that state internal users must connect to an existing Amazon RDS for SQL Server DB instance using their corporate Active Directory (AD) credentials. A Database Specialist must make the modifications needed to fulfill this requirement.<br>Which combination of actions should the Database Specialist take? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BCF</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#62",
            "answers": [
              {
                "choice": "<p>A. Disable Transparent Data Encryption (TDE) on the RDS SQL Server DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Modify the RDS SQL Server DB instance to use the directory for Windows authentication. Create appropriate new logins.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the AWS Management Console to create an AWS Managed Microsoft AD.  Create a trust relationship with the corporate AD. <br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Stop the RDS SQL Server DB instance, modify it to use the directory for Windows authentication, and start it again. Create appropriate new logins.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use the AWS Management Console to create an AD Connector. Create a trust relationship with the corporate AD. <br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Configure the AWS Managed Microsoft AD domain controller Security Group.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 62 discussion",
        "discusstion": [
          {
            "id": 345007,
            "date": "Tue 02 Nov 2021 21:54",
            "username": "manan728",
            "content": "This question was asked in my exam. B,C and F seems the correct options.",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 621668,
            "date": "Fri 24 Jun 2022 15:14",
            "username": "ryuhei",
            "content": "Answer:BCF",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BCF"
          },
          {
            "id": 595364,
            "date": "Sun 01 May 2022 02:23",
            "username": "novice_expert",
            "content": "x A.  Disable Transparent Data Encryption (unrelated)B.  Modify the RDS SQL Server DB instance to use the directory for Windows authentication. Create appropriate new logins.(would need reboot)C.  Use the AWS Management Console to create an AWS Managed Microsoft AD.  Create a trust relationship with the corporate AD. <br>x D.  Stop the RDS SQL Server DB instance, modify it to use the directory for Windows authentication, and start it again. Create appropriate new logins. (stop-start should be at end, not first)<br>x E.  Use the AWS Management Console to create an AD Connector. Create a trust relationship with the corporate AD. F.  Configure the AWS Managed Microsoft AD domain controller Security Group.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BCF"
          },
          {
            "id": 446053,
            "date": "Thu 04 Nov 2021 13:10",
            "username": "guru_ji",
            "content": "I got this Question in exam.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 298807,
            "date": "Mon 01 Nov 2021 14:38",
            "username": "myutran",
            "content": "Ans: BCF",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 253393,
            "date": "Sun 31 Oct 2021 19:24",
            "username": "JobinAkaJoe",
            "content": "BCF<br>C&F is confirmed.<br>Choosing B over D becausemodifying the RDS to enable windows authentication must be done when the RDS is in available status though it will be rebooted for it to take effect.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 221806,
            "date": "Fri 29 Oct 2021 10:30",
            "username": "[Removed]",
            "content": "BCF is the answer - https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 212727,
            "date": "Fri 22 Oct 2021 10:34",
            "username": "Ashoks",
            "content": "BCF. <br>No restart required.Connector is a proxy, no trust relationship can be established with it.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 211229,
            "date": "Thu 21 Oct 2021 04:41",
            "username": "Manmohananon9002",
            "content": "Ans: BEFE - Not right<br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_connector_app_compatibility.html",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 337750,
            "date": "Tue 02 Nov 2021 04:26",
            "username": "anon9002",
            "content": "E - Not right<br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_connector_app_compatibility.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 202549,
            "date": "Tue 19 Oct 2021 12:06",
            "username": "Jack86",
            "content": "Sorry i made a mistake.<br>According to https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html#USER_ModifyInstance.Settings ,modifying domain or directory id parameter in AWS RDS SqlServer requires a bried outage .<br><br>So correct answers are: C , D , F .",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 200983,
            "date": "Sun 17 Oct 2021 10:54",
            "username": "Jack86",
            "content": "I would also vote for BCF. <br>Nobody doubt that C anf F are correct.<br><br>Regarding my choice B ( B or D ? ).<br>We need to configure an existing DB ( stated in the question).<br>According to https://aws.amazon.com/blogs/database/joining-your-amazon-rds-instances-across-accounts-to-a-single-shared-domain/ , there is no need to stop the RDS to join it to an AD ( step 3 )",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 168317,
            "date": "Sat 02 Oct 2021 11:41",
            "username": "AWSCert2020",
            "content": "CDF Here https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 158480,
            "date": "Wed 29 Sep 2021 15:43",
            "username": "EbiEbisaki0915anon9002",
            "content": "Answer is BDEMeant BCF<br>D is not correct, you can't modify stopped RDS instanceIsn't B not restarting RDS?E - Not right<br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_connector_app_compatibility.html",
            "upvote_count": "1811",
            "selected_answers": ""
          },
          {
            "id": 158497,
            "date": "Fri 01 Oct 2021 21:34",
            "username": "Ebisaki0915",
            "content": "Meant BCF<br>D is not correct, you can't modify stopped RDS instanceIsn't B not restarting RDS?",
            "upvote_count": "81",
            "selected_answers": ""
          },
          {
            "id": 179888,
            "date": "Sun 03 Oct 2021 21:57",
            "username": "saki0915",
            "content": "Isn't B not restarting RDS?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 337749,
            "date": "Tue 02 Nov 2021 00:40",
            "username": "anon9002",
            "content": "E - Not right<br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_connector_app_compatibility.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 153458,
            "date": "Fri 24 Sep 2021 19:22",
            "username": "Billhardy",
            "content": "I will go with CDF<br>https://www.powerupcloud.com/integrate-aws-sql-server-rds-with-multiple-ad/<br>https://www.sqlshack.com/advanced-windows-authentication-configurations-in-aws-rds-sql-server/<br>https://aws.amazon.com/blogs/security/how-to-enable-windows-integrated-authentication-for-rds-for-sql-server-using-on-premises-active-directory/<br>https://aws.amazon.com/blogs/aws/amazon-rds-for-sql-server-support-for-windows-authentication/",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#63",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist is performing a proof of concept with Amazon Aurora using a small instance to confirm a simple database behavior. When loading a large dataset and creating the index, the Database Specialist encounters the following error message from Aurora:<br>ERROR: cloud not write block 7507718 of temporary file: No space left on device<br>What is the cause of this error and what should the Database Specialist do to resolve this issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#63",
            "answers": [
              {
                "choice": "<p>A. The scaling of Aurora storage cannot catch up with the data loading. The Database Specialist needs to modify the workload to load the data slowly.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. The scaling of Aurora storage cannot catch up with the data loading. The Database Specialist needs to enable Aurora storage scaling.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. The local storage used to store temporary tables is full. The Database Specialist needs to scale up the instance.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. The local storage used to store temporary tables is full. The Database Specialist needs to enable local storage scaling.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 63 discussion",
        "discusstion": [
          {
            "id": 595090,
            "date": "Sat 30 Apr 2022 16:53",
            "username": "novice_expert",
            "content": "The local storage used to store temporary tables is full.<br>And only way to increase local storage is to upgrade instance type.<br>The Database Specialist needs to scale up the instance.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 521418,
            "date": "Tue 11 Jan 2022 10:20",
            "username": "awsmonsteruser0001",
            "content": "Answer: Ctrue , you cant change local storagesize , the only way is the change the instance type",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 557609,
            "date": "Sun 27 Feb 2022 21:36",
            "username": "user0001",
            "content": "true , you cant change local storagesize , the only way is the change the instance type",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 507187,
            "date": "Wed 22 Dec 2021 15:58",
            "username": "jove",
            "content": "Option C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 496012,
            "date": "Tue 07 Dec 2021 13:57",
            "username": "GMartinelli",
            "content": "Option C",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 477114,
            "date": "Fri 12 Nov 2021 19:38",
            "username": "leunamE",
            "content": "Option C. ",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#64",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A financial company wants to store sensitive user data in an Amazon Aurora PostgreSQL DB cluster. The database will be accessed by multiple applications across the company. The company has mandated that all communications to the database be encrypted and the server identity must be validated. Any non-SSL- based connections should be disallowed access to the database.<br>Which solution addresses these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#64",
            "answers": [
              {
                "choice": "<p>A. Set the rds.force_ssl0 parameter in DB parameter groups. Download and use the Amazon RDS certificate bundle and configure the PostgreSQL connection string with sslmodeallow.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Set the rds.force_ssl1 parameter in DB parameter groups. Download and use the Amazon RDS certificate bundle and configure the PostgreSQL connection string with sslmodedisable.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set the rds.force_ssl0 parameter in DB parameter groups. Download and use the Amazon RDS certificate bundle and configure the PostgreSQL connection string with sslmodeverify-ca.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Set the rds.force_ssl1 parameter in DB parameter groups. Download and use the Amazon RDS certificate bundle and configure the PostgreSQL connection string with sslmodeverify-full.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 64 discussion",
        "discusstion": [
          {
            "id": 144953,
            "date": "Tue 21 Sep 2021 06:38",
            "username": "BillyC",
            "content": "ANS D is Correct!",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 754045,
            "date": "Fri 23 Dec 2022 09:45",
            "username": "tucobbad",
            "content": "Ans is D<br><br>rds.force_ssl1 to force ssl in RDS and sslmodeverify-full to encrypt the connection and validate server identity.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 595622,
            "date": "Sun 01 May 2022 16:15",
            "username": "novice_expertkhchan123",
            "content": "- in DB parameter groups:rds.force_ssl1 (o>false, 1>true)<br>-Download and use the Amazon RDS certificate bundle<br>- configure the PostgreSQL connection string with<br> sslmodeverify-full.<br><br>https://jdbc.postgresql.org/documentation/head/ssl-client.html<br>If sslmodeverify-ca, the server is verified by checking the certificate chain up to the root certificate stored on the client.<br><br>If sslmodeverify-full, the server host name will be verified to make sure it matches the name stored in the server certificate.Yes answer D. ",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 604267,
            "date": "Fri 20 May 2022 09:09",
            "username": "khchan123",
            "content": "Yes answer D. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 430291,
            "date": "Thu 04 Nov 2021 18:46",
            "username": "guru_ji",
            "content": "Correct Answer >> D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 298819,
            "date": "Tue 02 Nov 2021 17:48",
            "username": "myutran",
            "content": "Ans: D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 253404,
            "date": "Fri 22 Oct 2021 13:28",
            "username": "JobinAkaJoe",
            "content": "D indeed is the right choice",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212733,
            "date": "Sun 10 Oct 2021 09:58",
            "username": "Ashoks",
            "content": "yes. it is D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 152567,
            "date": "Sat 25 Sep 2021 20:19",
            "username": "firbhat",
            "content": "ANS: D<br>PostgreSQL: sslrootcertrds-cert.pem sslmode[verify-ca | verify-full]",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#65",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using 5 TB Amazon RDS DB instances and needs to maintain 5 years of monthly database backups for compliance purposes. A Database<br>Administrator must provide Auditors with data within 24 hours.<br>Which solution will meet these requirements and is the MOST operationally efficient?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#65",
            "answers": [
              {
                "choice": "<p>A. Create an AWS Lambda function to run on the first day of every month to take a manual RDS snapshot. Move the snapshot to the company's Amazon S3 bucket.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create an AWS Lambda function to run on the first day of every month to take a manual RDS snapshot.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create an RDS snapshot schedule from the AWS Management Console to take a snapshot every 30 days.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS Lambda function to run on the first day of every month to create an automated RDS snapshot.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 65 discussion",
        "discusstion": [
          {
            "id": 293976,
            "date": "Mon 11 Oct 2021 14:10",
            "username": "Exiahelpaws",
            "content": "A. <br>Unlike automated backups, manual snapshots aren't subject to the backup retention period. Snapshots don't expire.<br><br>For very long-term backups of MariaDB, MySQL, and PostgreSQL data, we recommend exporting snapshot data to Amazon S3. If the major version of your DB engine is no longer supported, you can't restore to that version from a snapshot.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.htmlSo the keyword here is \\\"move to S3\\\". Move means copy to S3 and then delete on RDS. The question asks for \\\"operational efficiency\\\" and \\\"24 hours\\\" to report to auditor. Just leave it in RDS, it doesn't expire and can be easily share right away. B is the answer.",
            "upvote_count": "122",
            "selected_answers": ""
          },
          {
            "id": 645601,
            "date": "Thu 11 Aug 2022 22:04",
            "username": "helpaws",
            "content": "So the keyword here is \\\"move to S3\\\". Move means copy to S3 and then delete on RDS. The question asks for \\\"operational efficiency\\\" and \\\"24 hours\\\" to report to auditor. Just leave it in RDS, it doesn't expire and can be easily share right away. B is the answer.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 632810,
            "date": "Mon 18 Jul 2022 05:56",
            "username": "db2luwdbadb2luwdba",
            "content": "There is difference between copy / share a snapshot and Export. Export to S3 option will<br><br> When you export a DB snapshot, Amazon RDS extracts data from the snapshot and stores it in an Amazon S3 bucket. The data is stored in an Apache Parquet format that is compressed and consistent.<br>Where you have option to copy manual snapshot as is to different region or different AWS account. So we can not basically move the manual snapshot to S3 directly.<br>B is correct.Plus<br>Unlike automated backups, manual snapshots aren't subject to the backup retention period. Snapshots don't expire.<br><br>For very long-term backups of MariaDB, MySQL, and PostgreSQL data, we recommend exporting snapshot data to Amazon S3. If the major version of your DB engine is no longer supported, you can't restore to that version from a snapshot.<br><br>Here the backup movement is only for compliance. there is no requirement to query that backup .( using parquet format query through athena or rds redshift spectrum )",
            "upvote_count": "52",
            "selected_answers": ""
          },
          {
            "id": 632812,
            "date": "Mon 18 Jul 2022 06:00",
            "username": "db2luwdba",
            "content": "Plus<br>Unlike automated backups, manual snapshots aren't subject to the backup retention period. Snapshots don't expire.<br><br>For very long-term backups of MariaDB, MySQL, and PostgreSQL data, we recommend exporting snapshot data to Amazon S3. If the major version of your DB engine is no longer supported, you can't restore to that version from a snapshot.<br><br>Here the backup movement is only for compliance. there is no requirement to query that backup .( using parquet format query through athena or rds redshift spectrum )",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 750304,
            "date": "Mon 19 Dec 2022 23:57",
            "username": "lollyj",
            "content": "This is confusing because don't allow manual snapshots end up in s3 anyway?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 724021,
            "date": "Tue 22 Nov 2022 02:48",
            "username": "MazeMaze",
            "content": "A. <br>manual snapshot has a limitation. (Each supported Region: 100)<br>this case, customer want to keep backup 5 years..<br>so i think,it can't possible to keep snapshots during 5 yeers(365*5)<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Limitsmy mistacke... B is the more correct.<br>because, only need to backups for a month..<br>so only need to snapshot 12*560.<br>it does not reach the rds snapshot's limitation.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 738524,
            "date": "Thu 08 Dec 2022 03:00",
            "username": "Maze",
            "content": "my mistacke... B is the more correct.<br>because, only need to backups for a month..<br>so only need to snapshot 12*560.<br>it does not reach the rds snapshot's limitation.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 698627,
            "date": "Wed 19 Oct 2022 04:42",
            "username": "awsjjj",
            "content": "A is the answer. aws recommends long term backups to be exported to s3",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 696612,
            "date": "Mon 17 Oct 2022 00:17",
            "username": "awsjjj",
            "content": "For very long-term backups of MariaDB, MySQL, and PostgreSQL data, we recommend exporting snapshot data to Amazon S3. If the major version of your DB engine is no longer supported, you can't restore to that version from a snapshot.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 681314,
            "date": "Wed 28 Sep 2022 02:18",
            "username": "yxyj",
            "content": "Option B is correct. manual snapshot won't expire.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 621672,
            "date": "Fri 24 Jun 2022 15:27",
            "username": "ryuhei",
            "content": "I don't think you can move snapshots to individual S3, so the answer is probably B. ",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 605525,
            "date": "Sun 22 May 2022 15:06",
            "username": "awsguys",
            "content": "A and B seems right . but i choose A . Move the snapshot to the company's Amazon S3 bucket.sound likes more right .",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595374,
            "date": "Sun 01 May 2022 02:59",
            "username": "novice_expert",
            "content": "A.  Create an AWS Lambda function to run on the first day of every month to take a manual RDS snapshot. Move the snapshot to the company's Amazon S3 bucket.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 562126,
            "date": "Sun 06 Mar 2022 17:26",
            "username": "RotterDam",
            "content": "This is also a Tutorials DOJO question (a very respectable site) and their choice is also (A). If they say its (A) -> its prettymuch as close as being stamped by official RDS",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 562122,
            "date": "Sun 06 Mar 2022 17:22",
            "username": "RotterDam",
            "content": "A seemsright. You can set lifecycle rules to move the snapshots to cold storage anddelete them after 5 years in S3",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 519946,
            "date": "Sun 09 Jan 2022 06:54",
            "username": "awsmonster",
            "content": "A:<br>There is a requirements to keep the snapshots for 5 years. RDS only allows up to 100 snapshots.<br><br>As per the link from Exia, https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html.There is a recommendation:<br><br>For very long-term backups of MariaDB, MySQL, and PostgreSQL data, we recommend exporting snapshot data to Amazon S3.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 510431,
            "date": "Mon 27 Dec 2021 16:39",
            "username": "jove",
            "content": "You need a monthly manual snapshot, for sure but you cannot MOVE a snapshot to an S3 bucket, you can EXPORT it in a parquet format but cannot MOVE or COPY it.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 509305,
            "date": "Sat 25 Dec 2021 23:25",
            "username": "SMAZ",
            "content": "A - as it says company owned s3 bucket.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 445506,
            "date": "Wed 03 Nov 2021 18:04",
            "username": "dkay16",
            "content": "Also wording \\\"move snapshot\\\" is used instead of \\\"export snapshot\\\" so will go with B but in real case use option A and export snapshot",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 445502,
            "date": "Tue 02 Nov 2021 18:51",
            "username": "dkay16guru_jijovejove",
            "content": "I think A because once you move/export RDS snapshot to S3 it can be viewed using Athena or other methods by auditors. In case of B , yes snapshot will be on S3 but to give data to Auditor in 24 hours we have to restore the DB and extract data or give permission to access DB which may or may not possible in 24 hours for multiple instances. https://aws.amazon.com/blogs/database/building-data-lakes-and-implementing-data-retention-policies-with-amazon-rds-snapshot-export-to-amazon-s3/. Really not a valid question without detail requirements but again this is test .planning for exam ?You can't use Athena for viewing RDS snapshotsI was wrong. The snapshot \\\"export\\\", exports the data in parquet format which can be queried using Athena..<br><br>For long term backups, you should export the snapshots to S3",
            "upvote_count": "1111",
            "selected_answers": ""
          },
          {
            "id": 446009,
            "date": "Fri 05 Nov 2021 04:56",
            "username": "guru_ji",
            "content": "planning for exam ?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 508561,
            "date": "Fri 24 Dec 2021 16:49",
            "username": "jovejove",
            "content": "You can't use Athena for viewing RDS snapshotsI was wrong. The snapshot \\\"export\\\", exports the data in parquet format which can be queried using Athena..<br><br>For long term backups, you should export the snapshots to S3",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 508564,
            "date": "Fri 24 Dec 2021 16:59",
            "username": "jove",
            "content": "I was wrong. The snapshot \\\"export\\\", exports the data in parquet format which can be queried using Athena..<br><br>For long term backups, you should export the snapshots to S3",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#66",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company wants to automate the creation of secure test databases with random credentials to be stored safely for later use. The credentials should have sufficient information about each test database to initiate a connection and perform automated credential rotations. The credentials should not be logged or stored anywhere in an unencrypted form.<br>Which steps should a Database Specialist take to meet these requirements using an AWS CloudFormation template?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#66",
            "answers": [
              {
                "choice": "<p>A. Create the database with the MasterUserName and MasterUserPassword properties set to the default values. Then, create the secret with the user name and password set to the same default values. Add a Secret Target Attachment resource with the SecretId and TargetId properties set to the Amazon Resource Names (ARNs) of the secret and the database. Finally, update the secret's password value with a randomly generated string set by the GenerateSecretString property.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add a Mapping property from the database Amazon Resource Name (ARN) to the secret ARN. Then, create the secret with a chosen user name and a randomly generated password set by the GenerateSecretString property. Add the database with the MasterUserName and MasterUserPassword properties set to the user name of the secret.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add a resource of type AWS::SecretsManager::Secret and specify the GenerateSecretString property. Then, define the database user name in the SecureStringTemplate template. Create a resource for the database and reference the secret string for the MasterUserName and MasterUserPassword properties. Then, add a resource of type AWS::SecretsManagerSecretTargetAttachment with the SecretId and TargetId properties set to the Amazon Resource Names (ARNs) of the secret and the database.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create the secret with a chosen user name and a randomly generated password set by the GenerateSecretString property. Add an SecretTargetAttachment resource with the SecretId property set to the Amazon Resource Name (ARN) of the secret and the TargetId property set to a parameter value matching the desired database ARN. Then, create a database with the MasterUserName and MasterUserPassword properties set to the previously created values in the secret.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 66 discussion",
        "discusstion": [
          {
            "id": 144956,
            "date": "Fri 24 Sep 2021 21:51",
            "username": "BillyCBillyMadisonjyrajan",
            "content": "Ans C is correctBillyC, any idea why the AWS Database specialty exam is so hard to find on this site / why there are 404 errors?New requirement, only visible if you have contributor access",
            "upvote_count": "1011",
            "selected_answers": ""
          },
          {
            "id": 146872,
            "date": "Thu 30 Sep 2021 17:40",
            "username": "BillyMadisonjyrajan",
            "content": "BillyC, any idea why the AWS Database specialty exam is so hard to find on this site / why there are 404 errors?New requirement, only visible if you have contributor access",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 306723,
            "date": "Wed 03 Nov 2021 06:48",
            "username": "jyrajan",
            "content": "New requirement, only visible if you have contributor access",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595665,
            "date": "Sun 01 May 2022 18:29",
            "username": "novice_expert",
            "content": "incomplete or wrong info but answer needs SecretsManager which is in C only<br><br>Add a resource of type AWS::SecretsManager::Secret<br>-> specify the GenerateSecretString property<br>-> define the database user name in the SecureStringTemplate template.<br>-> Create a resource for the database<br>-> reference the secret string for the MasterUserName and MasterUserPassword properties.<br>-> add a resource of type AWS::SecretsManagerSecretTargetAttachment with the SecretId and TargetId properties set to the Amazon Resource Names (ARNs) of the secret and the database.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 561734,
            "date": "Sun 06 Mar 2022 02:49",
            "username": "RotterDam",
            "content": "(C) is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212741,
            "date": "Sun 31 Oct 2021 09:45",
            "username": "Ashoks",
            "content": "yes, it is C",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 159030,
            "date": "Fri 01 Oct 2021 09:19",
            "username": "Ebi",
            "content": "Answer is C",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#67",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is going to use an Amazon Aurora PostgreSQL DB cluster for an application backend. The DB cluster contains some tables with sensitive data. A<br>Database Specialist needs to control the access privileges at the table level.<br>How can the Database Specialist meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#67",
            "answers": [
              {
                "choice": "<p>A. Use AWS IAM database authentication and restrict access to the tables using an IAM policy.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the rules in a NACL to restrict outbound traffic from the Aurora DB cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Execute GRANT and REVOKE commands that restrict access to the tables containing sensitive data.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Define access privileges to the tables containing sensitive data in the pg_hba.conf file.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 67 discussion",
        "discusstion": [
          {
            "id": 595394,
            "date": "Sun 01 May 2022 03:49",
            "username": "novice_expert",
            "content": "x A.  Use AWS IAM database authentication and restrict access to the tables using an IAM policy. (this is for db access)<br>x B.  Configure the rules in a NACL to restrict outbound traffic from the Aurora DB cluster. (This is for Network Access Control)C.  Execute GRANT and REVOKE commands that restrict access to the tables containing sensitive data.<br>x D.  Define access privileges to the tables containing sensitive data in the pg_hba.conf file. (not allowed)",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 415807,
            "date": "Mon 01 Nov 2021 15:58",
            "username": "TonyGe",
            "content": "C. <br>Table level means DCL",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 377815,
            "date": "Thu 28 Oct 2021 18:43",
            "username": "AM",
            "content": "This is easy. I am a DBA. Table level access is GRANT,REVOKE for many database flavors including Oracle an Postgres. Answer is C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 298843,
            "date": "Wed 27 Oct 2021 13:36",
            "username": "myutran",
            "content": "Ans: C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 294800,
            "date": "Tue 26 Oct 2021 01:27",
            "username": "GeeBeeElExtHo",
            "content": "I see answers like A or C, but I am looking for collateral support and cannot find any in the options selected so far. I choose A, see https://aws.amazon.com/blogs/database/managing-postgresql-users-and-roles/ You create roles and then attach policies to the roles. May you support your response with a link so that we can check to confirm your reasoning? Thanksin your provided link roles are db roles not IAM roles :)so C is correct",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 403020,
            "date": "Sat 30 Oct 2021 10:11",
            "username": "ExtHo",
            "content": "in your provided link roles are db roles not IAM roles :)so C is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 212755,
            "date": "Mon 18 Oct 2021 01:22",
            "username": "Ashoks",
            "content": "It is C",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 159032,
            "date": "Fri 15 Oct 2021 21:13",
            "username": "Ebi",
            "content": "Answer is C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 153913,
            "date": "Mon 11 Oct 2021 10:49",
            "username": "Billhardy",
            "content": "This should be C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 146467,
            "date": "Thu 23 Sep 2021 21:54",
            "username": "BillyCKitty0403",
            "content": "A or C. . please commentsAnswer is C.  Table level access is managed by DCL.",
            "upvote_count": "17",
            "selected_answers": ""
          },
          {
            "id": 147002,
            "date": "Fri 24 Sep 2021 10:52",
            "username": "Kitty0403",
            "content": "Answer is C.  Table level access is managed by DCL.",
            "upvote_count": "7",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#68",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist is working with a company to launch a new website built on Amazon Aurora with several Aurora Replicas. This new website will replace an on-premises website connected to a legacy relational database. Due to stability issues in the legacy database, the company would like to test the resiliency of<br>Aurora.<br>Which action can the Database Specialist take to test the resiliency of the Aurora DB cluster?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#68",
            "answers": [
              {
                "choice": "<p>A. Stop the DB cluster and analyze how the website responds<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Aurora fault injection to crash the master DB instance<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Remove the DB cluster endpoint to simulate a master DB instance failure<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Aurora Backtrack to crash the DB cluster<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 68 discussion",
        "discusstion": [
          {
            "id": 415808,
            "date": "Sat 06 Nov 2021 21:55",
            "username": "TonyGe",
            "content": "B. <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.FaultInjectionQueries.html",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 595356,
            "date": "Sun 01 May 2022 01:53",
            "username": "novice_expert",
            "content": "B.  Use Aurora fault injection to crash the master DB instance",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 298844,
            "date": "Wed 03 Nov 2021 12:54",
            "username": "myutran",
            "content": "Ans;: B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 212757,
            "date": "Thu 21 Oct 2021 20:22",
            "username": "Ashoks",
            "content": "It is B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 157643,
            "date": "Sun 10 Oct 2021 10:15",
            "username": "BillyMadison",
            "content": "B with the link that is provided in the suggested answer<br>\\\"You can test the fault tolerance of your Amazon Aurora DB cluster by using fault injection queries. Fault injection queries are issued as SQL commands to an Amazon Aurora instance and they enable you to schedule a simulated occurrence of one of the following events:<br>A crash of a writer or reader DB instance<br>A failure of an Aurora Replica<br>A disk failure<br>Disk congestion<br>When a fault injection query specifies a crash, it forces a crash of the Aurora DB instance. The other fault injection queries result in simulations of failure events, but don't cause the event to occur. When you submit a fault injection query, you also specify an amount of time for the failure event simulation to occur for.\\\"",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 153964,
            "date": "Fri 01 Oct 2021 18:31",
            "username": "firbhat",
            "content": "Ans B:<br> Two ways to test/simulate fault tolerance =E2=80=A2 Manual failover<br>=E2=80=A2 Fault injection queries",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 153915,
            "date": "Thu 23 Sep 2021 22:22",
            "username": "Billhardy",
            "content": "will go with B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 145883,
            "date": "Tue 21 Sep 2021 23:22",
            "username": "BillyC",
            "content": "B is correct",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#69",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company just migrated to Amazon Aurora PostgreSQL from an on-premises Oracle database. After the migration, the company discovered there is a period of time every day around 3:00 PM where the response time of the application is noticeably slower. The company has narrowed down the cause of this issue to the database and not the application.<br>Which set of steps should the Database Specialist take to most efficiently find the problematic PostgreSQL query?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#69",
            "answers": [
              {
                "choice": "<p>A. Create an Amazon CloudWatch dashboard to show the number of connections, CPU usage, and disk space consumption. Watch these dashboards during the next slow period.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Launch an Amazon EC2 instance, and install and configure an open-source PostgreSQL monitoring tool that will run reports based on the output error logs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Modify the logging database parameter to log all the queries related to locking in the database and then check the logs after the next slow period for this information.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable Amazon RDS Performance Insights on the PostgreSQL database. Use the metrics to identify any queries that are related to spikes in the graph during the next slow period.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 69 discussion",
        "discusstion": [
          {
            "id": 594659,
            "date": "Fri 29 Apr 2022 21:14",
            "username": "novice_expert",
            "content": "RDS Performance Insights -> identify any queries that are related to spikes in the graph during the next slow period.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 555587,
            "date": "Thu 24 Feb 2022 22:48",
            "username": "tugboat",
            "content": "Performance Insights",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 537295,
            "date": "Mon 31 Jan 2022 19:18",
            "username": "sj143VPup",
            "content": "if the database is transitioned to Aurora postgresSQL - how will enabling Amazon RDS performance insight help?D -<br>https://aws.amazon.com/about-aws/whats-new/2021/10/rds-performance-insights-more-regions/<br><br>\\\" Amazon RDS Performance Insights is a database performance tuning and monitoring feature of RDS and Aurora that helps you quickly assess the load on your database and determine when and where to take action.\\\"",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 540562,
            "date": "Fri 04 Feb 2022 19:00",
            "username": "VPup",
            "content": "D -<br>https://aws.amazon.com/about-aws/whats-new/2021/10/rds-performance-insights-more-regions/<br><br>\\\" Amazon RDS Performance Insights is a database performance tuning and monitoring feature of RDS and Aurora that helps you quickly assess the load on your database and determine when and where to take action.\\\"",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 438830,
            "date": "Sat 06 Nov 2021 23:42",
            "username": "guru_ji",
            "content": "Answer: D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 298855,
            "date": "Sun 24 Oct 2021 12:48",
            "username": "myutran",
            "content": "Ans: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212761,
            "date": "Fri 22 Oct 2021 16:33",
            "username": "Ashoks",
            "content": "D is ..",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 146911,
            "date": "Thu 21 Oct 2021 13:41",
            "username": "BillyMadison",
            "content": "https://aws.amazon.com/blogs/database/optimizing-and-tuning-queries-in-amazon-rds-postgresql-based-on-native-and-external-tools/<br>You can monitor SQL queries that caused load, I/O waits, and the users and hosts through which the queries ran.<br>As you can see in the previous screenshot, the same SQL query has been reported as consuming the most CPUs.<br>Performance Insights supports counter metrics for RDS PostgreSQL. Counter metrics allow you to customize your Performance Insights dashboard to include up to 10 additional graphs from the available operating system and database metrics. It is helpful to identify and analyze performance issues by correlating load charts.<br>Performance counter metrics are native and non-native.<br>As you can see in the following screenshot, counter metrics are updated with tuples fetched, tuples returned, blocks latency, and blocks read.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 146910,
            "date": "Sat 16 Oct 2021 20:06",
            "username": "BillyMadison",
            "content": "Going with D for now because of https://aws.amazon.com/blogs/database/optimizing-and-tuning-queries-in-amazon-rds-postgresql-based-on-native-and-external-tools/<br>\\\"AWS recently released a feature called Amazon RDS Performance Insights, which provides an easy-to-understand dashboard for detecting performance problems in terms of load.\\\"<br>\\\"AWS recently released a feature called Amazon RDS Performance Insights, which provides an easy-to-understand dashboard for detecting performance problems in terms of load.\\\"<br><br>The other possible answers are B & C but those solutions include the possibility it is an application issue which the question says it is not.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 144960,
            "date": "Fri 01 Oct 2021 08:55",
            "username": "BillyC",
            "content": "Ans D is correct",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#70",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a web-based survey application that uses Amazon DynamoDB.  During peak usage, when survey responses are being collected, a Database<br>Specialist sees the ProvisionedThroughputExceededException error.<br>What can the Database Specialist do to resolve this error? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: CD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#70",
            "answers": [
              {
                "choice": "<p>A. Change the table to use Amazon DynamoDB Streams<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Purchase DynamoDB reserved capacity in the affected Region<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Increase the write capacity units for the specific table<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Change the table capacity mode to on-demand<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Change the table type to throughput optimized<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 70 discussion",
        "discusstion": [
          {
            "id": 130390,
            "date": "Mon 27 Sep 2021 02:01",
            "username": "pan24",
            "content": "Ans:CD<br>Dynamodb doesn't have a throughput optimized table type",
            "upvote_count": "19",
            "selected_answers": ""
          },
          {
            "id": 253501,
            "date": "Sun 17 Oct 2021 06:14",
            "username": "JobinAkaJoe",
            "content": "A.  Change the table to use Amazon DynamoDB Streams \t\t--> Doesnt make any sense for the given problem.B.  Purchase DynamoDB reserved capacity in the affected Region\t--> reserved capacity is not going to give you anything more than you reserveC.  Increase the write capacity units for the specific table\t--> This could be an answer. But the exception is thrown when survey responses are collected which appears to be a read \t\t\t\t\t\t\t\toperation.D.  Change the table capacity mode to on-demand\t\t\t--> This is correct answerhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/switching.capacitymode.htmlE.  Change the table type to throughput optimized\t\t--> There is no such thing as throughput optimized in dynamoDB<br><br>I will go with C,D",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 751377,
            "date": "Tue 20 Dec 2022 20:14",
            "username": "lollyj",
            "content": "My answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 639095,
            "date": "Fri 29 Jul 2022 10:43",
            "username": "sriexam",
            "content": "C and D - Any setting will be on Table level for DynamoDB",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 625243,
            "date": "Thu 30 Jun 2022 14:26",
            "username": "minhntm",
            "content": "Ans:CD",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 609160,
            "date": "Mon 30 May 2022 13:34",
            "username": "dbaroger",
            "content": "C and D are not compatible. If you use on-demand mode, you don=C2=B4t change read/write capacity.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 600941,
            "date": "Fri 13 May 2022 05:20",
            "username": "praffuln",
            "content": "ANS : C & D. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 594483,
            "date": "Fri 29 Apr 2022 15:16",
            "username": "novice_expert",
            "content": "C.  Increase the write capacity units for the specific table --> This could be an answer. As the exception is thrown when survey responses are collected which is write operation.D.  Change the table capacity mode to on-demand --> This is correct answer https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/switching.capacitymode.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 562045,
            "date": "Sun 06 Mar 2022 14:42",
            "username": "RotterDam",
            "content": "CD<br><br>Whoever writes these questions should go for English grammar classes!! both options cannot go togeher which means a question like \\\"What is database specialist's role in this?\\\" makes little sense. What would have made sense is \\\"What are the options a specialist can try to remediate this problem?\\\"",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 561010,
            "date": "Fri 04 Mar 2022 20:56",
            "username": "RotterDam",
            "content": "C & D are the absolutely correct answers.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 554942,
            "date": "Thu 24 Feb 2022 00:32",
            "username": "tugboat",
            "content": "Correct answers",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: CD"
          },
          {
            "id": 554893,
            "date": "Wed 23 Feb 2022 22:26",
            "username": "kped21",
            "content": "C,D: Valid",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 365435,
            "date": "Sun 07 Nov 2021 10:57",
            "username": "Dip11",
            "content": "C and D are the only correct options. Although both cannot go together.<br>Question does not clarify that both options should apply or either of it.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 298864,
            "date": "Sat 06 Nov 2021 17:34",
            "username": "myutran",
            "content": "Ans: CD",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 273137,
            "date": "Thu 04 Nov 2021 12:34",
            "username": "MultiAZ",
            "content": "Should be C OR D, right... because either would work, but you cannot have both. On-demand does not allow you to set write capacity???<br>The only 2 answers that fit together are B and C, as both are about provisioned capacity. But B is very unlikely here, although may be a good practice overall.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212766,
            "date": "Thu 07 Oct 2021 03:50",
            "username": "Ashoks",
            "content": "yes, C & D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 145405,
            "date": "Sat 02 Oct 2021 17:04",
            "username": "Kitty0403",
            "content": "Answer is C and D",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#71",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running a two-tier ecommerce application in one AWS account. The web server is deployed using an Amazon RDS for MySQL Multi-AZ DB instance. A Developer mistakenly deleted the database in the production environment. The database has been restored, but this resulted in hours of downtime and lost revenue.<br>Which combination of changes in existing IAM policies should a Database Specialist make to prevent an error like this from happening in the future? (Choose three.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: ACD</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#71",
            "answers": [
              {
                "choice": "<p>A. Grant least privilege to groups, users, and roles<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Allow all users to restore a database from a backup that will reduce the overall downtime to restore the database<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable multi-factor authentication for sensitive operations to access sensitive resources and API operations<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use policy conditions to restrict access to selective IP addresses<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>E. Use AccessList Controls policy type to restrict users for database instance deletion<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>F. Enable AWS CloudTrail logging and Enhanced Monitoring<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 71 discussion",
        "discusstion": [
          {
            "id": 134115,
            "date": "Tue 28 Sep 2021 23:57",
            "username": "chicagomassageseeker",
            "content": "ACD are right",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 751383,
            "date": "Tue 20 Dec 2022 20:21",
            "username": "lollyj",
            "content": "Can someone explain why E isn't plausible?I didn't choose D because sometimes developers are need access to Prod environments and restricting their IPs doesn't mean they can't utilize another IP to do the same damage.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 750809,
            "date": "Tue 20 Dec 2022 12:56",
            "username": "khun",
            "content": "ACE. <br><br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": [<br>{<br>\\\"Action\\\": [<br>\\\"rds:DeleteDBInstance\\\"<br>],<br>\\\"Resource\\\": [<br>\\\"arn:aws:rds:::db:\\\"<br>],<br>\\\"Effect\\\": \\\"Deny\\\"<br>}<br>]<br>}",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: ACE"
          },
          {
            "id": 633345,
            "date": "Tue 19 Jul 2022 06:54",
            "username": "db2luwdbadb2luwdba",
            "content": "Prevent a user from deleting a DB instance<br>The following permissions policy grants permissions to prevent a user from deleting a specific DB instance. For example, you might want to deny the ability to delete your production DB instances to any user that is not an administrator.<br><br>{<br> \\\"Version\\\": \\\"2012-10-17\\\",<br> \\\"Statement\\\": [<br>{<br> \\\"Sid\\\": \\\"DenyDelete1\\\",<br> \\\"Effect\\\": \\\"Deny\\\",<br> \\\"Action\\\": \\\"rds:DeleteDBInstance\\\",<br> \\\"Resource\\\": \\\"arn:aws:rds:us-west-2:123456789012:db:my-mysql-instance\\\"<br>}<br> ]<br>}<br>ABE-- Wording of the question not very accurate. RDS Access polict can be done this way<br>but there is nothing called as Access Control list poicy type in RDSI mean ACE",
            "upvote_count": "32",
            "selected_answers": ""
          },
          {
            "id": 633346,
            "date": "Tue 19 Jul 2022 06:55",
            "username": "db2luwdba",
            "content": "I mean ACE",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 594601,
            "date": "Fri 29 Apr 2022 18:46",
            "username": "novice_expert",
            "content": "A.  Least previlegesC.  Multi factorD.  restrict access",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: ACD"
          },
          {
            "id": 555487,
            "date": "Thu 24 Feb 2022 19:40",
            "username": "tugboat",
            "content": "Appropriate and RDS supported options",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: ACD"
          },
          {
            "id": 534515,
            "date": "Fri 28 Jan 2022 08:51",
            "username": "awsmonster",
            "content": "Agree with ACD<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_id-based-policy-examples.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 446034,
            "date": "Thu 04 Nov 2021 06:24",
            "username": "guru_ji",
            "content": "I got this Question in exam.<br>60% questions came in actual exam from this 145 set. Bunch of new Questions.<br>We can share study material for free, You can email me on<br>\\\"awsdbguru at gmail\\\"",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 428749,
            "date": "Wed 03 Nov 2021 14:01",
            "username": "guru_jiniteshdba",
            "content": "Correct Answer >> ACD<br>any idea how much Q we will get in real exam from Q available here?<br>anyone is preparing for this exam and want to do group study with us, comment with mail_id.srivastavanitesh16@gmail.com",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 682525,
            "date": "Thu 29 Sep 2022 12:10",
            "username": "niteshdba",
            "content": "srivastavanitesh16@gmail.com",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 342901,
            "date": "Sat 23 Oct 2021 09:19",
            "username": "manan728",
            "content": "ACD are correct choices. MFA is specified in the aws docs specifically for such use case<br>https://aws.amazon.com/blogs/database/using-iam-multifactor-authentication-with-amazon-rds/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 307169,
            "date": "Sun 17 Oct 2021 12:36",
            "username": "ricksunricksun",
            "content": "I go for ACEchange to ACD since RDS not support access list",
            "upvote_count": "41",
            "selected_answers": ""
          },
          {
            "id": 307175,
            "date": "Tue 19 Oct 2021 23:48",
            "username": "ricksun",
            "content": "change to ACD since RDS not support access list",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 298870,
            "date": "Sat 16 Oct 2021 01:45",
            "username": "myutran",
            "content": "Ans: ACD",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 278591,
            "date": "Sun 10 Oct 2021 18:48",
            "username": "See111",
            "content": "Answer is acd",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 273138,
            "date": "Sun 10 Oct 2021 06:41",
            "username": "MultiAZChauPhan",
            "content": "D makes no sense. You filter out lumpy devs based on IP?<br>I'd go for ACERead the question: Which combination of changes in existing IAM POLICIES",
            "upvote_count": "41",
            "selected_answers": ""
          },
          {
            "id": 427437,
            "date": "Mon 25 Oct 2021 06:52",
            "username": "ChauPhan",
            "content": "Read the question: Which combination of changes in existing IAM POLICIES",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253503,
            "date": "Fri 08 Oct 2021 19:39",
            "username": "JobinAkaJoe",
            "content": "ACD is my choice too",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 159082,
            "date": "Thu 07 Oct 2021 12:30",
            "username": "Ebi",
            "content": "answer ACD",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 145408,
            "date": "Fri 01 Oct 2021 02:48",
            "username": "Kitty0403",
            "content": "Answer is ACD",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#72",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is building a new web platform where user requests trigger an AWS Lambda function that performs an insert into an Amazon Aurora MySQL DB cluster. Initial tests with less than 10 users on the new platform yielded successful execution and fast response times. However, upon more extensive tests with the actual target of 3,000 concurrent users, Lambda functions are unable to connect to the DB cluster and receive too many connections errors.<br>Which of the following will resolve this issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#72",
            "answers": [
              {
                "choice": "<p>A. Edit the my.cnf file for the DB cluster to increase max_connections<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Increase the instance size of the DB cluster<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Change the DB cluster to Multi-AZ<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Increase the number of Aurora Replicas<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 72 discussion",
        "discusstion": [
          {
            "id": 595398,
            "date": "Sun 01 May 2022 03:56",
            "username": "novice_expert",
            "content": "B.  Increase the instance size of the DB cluster<br><br>we need more connections which depend on instance<br><br>Max_connection is a formula in RDS parameter group:<br>GREATEST({log(DBInstanceClassMemory/805306368)*45},{log(DBInstanceClassMemory/8187281408)*1000})<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Performance.html<br>You can increase the maximum number of connections to your Aurora MySQL DB instance by scaling the instance up to a DB instance class with more memory, or by setting a larger value for the max_connections parameter in the DB parameter group for your instance, up to 16,000.<br>You must change a larger value for the max_connections parameter in the DB parameter group, not edit my.cnf, it is not physical server hosting MySQL.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 510997,
            "date": "Tue 28 Dec 2021 11:24",
            "username": "Shunpin",
            "content": "Max_connection is a formula in RDS parameter group:<br>GREATEST({log(DBInstanceClassMemory/805306368)*45},{log(DBInstanceClassMemory/8187281408)*1000})",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 446039,
            "date": "Fri 22 Oct 2021 23:02",
            "username": "guru_ji",
            "content": "I got this Question in exam.<br>Answer: B",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 427440,
            "date": "Sun 17 Oct 2021 15:44",
            "username": "ChauPhan",
            "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Performance.html<br>You can increase the maximum number of connections to your Aurora MySQL DB instance by scaling the instance up to a DB instance class with more memory, or by setting a larger value for the max_connections parameter in the DB parameter group for your instance, up to 16,000.<br>You must change a larger value for the max_connections parameter in the DB parameter group, not edit my.cnf, it is not physical server hosting MySQL.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 365441,
            "date": "Tue 12 Oct 2021 06:39",
            "username": "Dip11",
            "content": "ANS B. RDS doesn't allow to change config files on host so A is ruled out.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 298872,
            "date": "Mon 04 Oct 2021 07:35",
            "username": "myutran",
            "content": "Ans: B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 253505,
            "date": "Sun 26 Sep 2021 06:21",
            "username": "JobinAkaJoe",
            "content": "B is the best answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 153920,
            "date": "Sat 25 Sep 2021 23:35",
            "username": "Billhardy",
            "content": "B is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 146965,
            "date": "Sat 25 Sep 2021 05:45",
            "username": "BillyMadisonChauPhan",
            "content": "Agree with B because of https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Performance.html<br>\\\"You can increase the maximum number of connections to your Aurora MySQL DB instance by scaling the instance up to a DB instance class with more memory, or by setting a larger value for the max_connections parameter, up to 16,000.\\\"<br>Could be A as well, just haven't seen good enough documentation to choose it.You can change a larger value for the max_connections parameter in the DB parameter group, not edit my.cnf, so A is incorrect",
            "upvote_count": "42",
            "selected_answers": ""
          },
          {
            "id": 427442,
            "date": "Wed 20 Oct 2021 11:52",
            "username": "ChauPhan",
            "content": "You can change a larger value for the max_connections parameter in the DB parameter group, not edit my.cnf, so A is incorrect",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 144971,
            "date": "Sun 19 Sep 2021 19:53",
            "username": "BillyC",
            "content": "Ans B is correct",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#73",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is developing a multi-tier web application hosted on AWS using Amazon Aurora as the database. The application needs to be deployed to production and other non-production environments. A Database Specialist needs to specify different MasterUsername and MasterUserPassword properties in the AWS<br>CloudFormation templates used for automated deployment. The CloudFormation templates are version controlled in the company's code repository. The company also needs to meet compliance requirement by routinely rotating its database master password for production.<br>What is most secure solution to store the master password?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#73",
            "answers": [
              {
                "choice": "<p>A. Store the master password in a parameter file in each environment. Reference the environment-specific parameter file in the CloudFormation template.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Encrypt the master password using an AWS KMS key. Store the encrypted master password in the CloudFormation template.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the secretsmanager dynamic reference to retrieve the master password stored in AWS Secrets Manager and enable automatic rotation.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the ssm dynamic reference to retrieve the master password stored in the AWS Systems Manager Parameter Store and enable automatic rotation.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 73 discussion",
        "discusstion": [
          {
            "id": 146960,
            "date": "Fri 01 Oct 2021 05:32",
            "username": "BillyMadison",
            "content": "Agree with C<br>\\\"By using the secure string support in CloudFormation with dynamic references you can better maintain your infrastructure as code. You=E2=80=99ll be able to avoid hard coding passwords into your templates and you can keep these runtime configuration parameters separated from your code. Moreover, when properly used, secure strings will help keep your development and production code as similar as possible, while continuing to make your infrastructure code suitable for continuous deployment pipelines.\\\"<br>https://aws.amazon.com/blogs/mt/using-aws-systems-manager-parameter-store-secure-string-parameters-in-aws-cloudformation-templates/<br><br>https://aws.amazon.com/blogs/security/how-to-use-aws-secrets-manager-rotate-credentials-amazon-rds-database-types-oracle/",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 144975,
            "date": "Mon 20 Sep 2021 11:45",
            "username": "BillyC",
            "content": "C is correct",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 621667,
            "date": "Fri 24 Jun 2022 15:12",
            "username": "ryuhei",
            "content": "Answer:C",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 595358,
            "date": "Sun 01 May 2022 01:58",
            "username": "novice_expert",
            "content": "C.  Use the secretsmanager dynamic reference to retrieve the master password stored in AWS Secrets Manager and enable automatic rotation.<br><br>\\\"By using the secure string support in CloudFormation with dynamic references you can better maintain your infrastructure as code. You=E2=80=99ll be able to avoid hard coding passwords into your templates and you can keep these runtime configuration parameters separated from your code. Moreover, when properly used, secure strings will help keep your development and production code as similar as possible, while continuing to make your infrastructure code suitable for continuous deployment pipelines.\\\"",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 515962,
            "date": "Mon 03 Jan 2022 19:25",
            "username": "selva1982",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 342255,
            "date": "Sun 31 Oct 2021 17:00",
            "username": "swarndeep",
            "content": "C is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253507,
            "date": "Mon 18 Oct 2021 00:41",
            "username": "JobinAkaJoe",
            "content": "C is the right answe",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212783,
            "date": "Wed 13 Oct 2021 16:55",
            "username": "Ashoks",
            "content": "Ans - C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 159091,
            "date": "Wed 13 Oct 2021 00:15",
            "username": "Ebi",
            "content": "Answer id C<br>SSM does not supported automatic rotation",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 146528,
            "date": "Thu 23 Sep 2021 07:58",
            "username": "BillyC",
            "content": "Sorry D",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#74",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is writing a new survey application to be used with a weekly televised game show. The application will be available for 2 hours each week. The company expects to receive over 500,000 entries every week, with each survey asking 2-3 multiple choice questions of each user. A Database Specialist needs to select a platform that is highly scalable for a large number of concurrent writes to handle the anticipated volume.<br>Which AWS services should the Database Specialist consider? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: AE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#74",
            "answers": [
              {
                "choice": "<p>A. Amazon DynamoDB<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Amazon Redshift<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Amazon Neptune<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Amazon Elasticsearch Service<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Amazon ElastiCache<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 74 discussion",
        "discusstion": [
          {
            "id": 144977,
            "date": "Sat 25 Sep 2021 01:23",
            "username": "BillyC",
            "content": "Ans A and E are correct",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 595623,
            "date": "Sun 01 May 2022 16:25",
            "username": "novice_expert",
            "content": "A.  Amazon DynamoDB (for high responses 500K in 2 hours)E.  Amazon ElastiCache (for high static reads 500K in 2 hours for few questions + options)",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 511066,
            "date": "Tue 28 Dec 2021 13:10",
            "username": "Shunpin",
            "content": "Advantages and disadvantages of write-through<br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Strategies.html#Strategies.WriteThrough",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 508865,
            "date": "Fri 24 Dec 2021 22:00",
            "username": "jove",
            "content": "https://aws.amazon.com/products/databases/real-time-apps-elasticache-for-redis/",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: AE"
          },
          {
            "id": 446040,
            "date": "Sun 07 Nov 2021 08:53",
            "username": "guru_ji",
            "content": "I got this Question in exam.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 427451,
            "date": "Sat 06 Nov 2021 20:33",
            "username": "ChauPhanRotterDamjove",
            "content": "it is asking about the use case of each DBC.  Amazon Neptune<br>It is not relevant, AWS Neptune is Graph databaseD.  Amazon Elasticsearch Service<br>it is not a use case, ES is using for log store/search/metric/config info/document list/ etcE.  Amazon ElastiCache<br>It is used to cache the data for faster query (read) performance, usually using before a database<br>A, B is my choice. Redshift is dataware house, but can be used as a data lake as high concurrent write.definitely not RedshiftRedshift is not a good idea",
            "upvote_count": "241",
            "selected_answers": ""
          },
          {
            "id": 561784,
            "date": "Sun 06 Mar 2022 06:11",
            "username": "RotterDam",
            "content": "definitely not Redshift",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 508864,
            "date": "Fri 24 Dec 2021 21:57",
            "username": "jove",
            "content": "Redshift is not a good idea",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358850,
            "date": "Thu 04 Nov 2021 18:30",
            "username": "Aesthet",
            "content": "AE would make sense if not this part: \\\"needs to select a platform that is highly scalable for a large number of concurrent writes\\\".<br>I think AD is a better choice here.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 299098,
            "date": "Sun 31 Oct 2021 02:08",
            "username": "myutran",
            "content": "Ans: AE",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 294444,
            "date": "Thu 28 Oct 2021 12:34",
            "username": "Exia",
            "content": "A, E for sure<br>https://aws.amazon.com/products/databases/real-time-apps-elasticache-for-redis/",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 253511,
            "date": "Thu 21 Oct 2021 07:30",
            "username": "JobinAkaJoeaddixion",
            "content": "A.  Amazon DynamoDB \t-- ideal for this requirementB.  Amazon Redshift \t-- Wrong choiceC.  Amazon Neptune\t-- Not a requirement to have graph databaseD.  Amazon Elasticsearch Service-- Not requirement for ElasticSearchE.  Amazon ElastiCache\t\t-- The requirement is write intensive.. Not sure how Elasticache can help.<br><br>A,E seem to be the best choice.ElastiCache store the questions and multiple answers",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 287832,
            "date": "Sun 24 Oct 2021 14:58",
            "username": "addixion",
            "content": "ElastiCache store the questions and multiple answers",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212785,
            "date": "Thu 07 Oct 2021 17:35",
            "username": "Ashoks",
            "content": "yes, A, E",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 161770,
            "date": "Thu 07 Oct 2021 02:58",
            "username": "BillyMadison",
            "content": "AE<br>https://aws.amazon.com/elasticache/<br>Building real-time apps across versatile use cases like gaming, geospatial service, caching, session stores, or queuing, with advanced data structures, replication, and point-in-time snapshot support.<br>https://aws.amazon.com/dynamodb/<br>Build powerful web applications that automatically scale up and down. You don't need to maintain servers, and your applications have automated high availability.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 159498,
            "date": "Sat 02 Oct 2021 10:55",
            "username": "szmulderawsmonsterrootkim",
            "content": "My ans is A and D.  Why not E, E is store data in memory and normally we use it as a buffer server but not the server to store the data.<br>D, Amazon Elasticsearch is Highly scalable.Amazon OpenSearch Service (successor to Amazon Elasticsearch Service)<br>makes it easy for you to perform interactive log analytics, real-time application monitoring, website search, and more. <br><br>Seems like an overkill for a 2-3 multiple question.<br><br>I vote for AEMy opinion is the same as yours.",
            "upvote_count": "211",
            "selected_answers": ""
          },
          {
            "id": 520447,
            "date": "Sun 09 Jan 2022 21:26",
            "username": "awsmonster",
            "content": "Amazon OpenSearch Service (successor to Amazon Elasticsearch Service)<br>makes it easy for you to perform interactive log analytics, real-time application monitoring, website search, and more. <br><br>Seems like an overkill for a 2-3 multiple question.<br><br>I vote for AE",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 246216,
            "date": "Fri 08 Oct 2021 13:45",
            "username": "rootkim",
            "content": "My opinion is the same as yours.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 159095,
            "date": "Thu 30 Sep 2021 10:14",
            "username": "Ebi",
            "content": "Answer is AE",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#75",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has migrated a single MySQL database to Amazon Aurora. The production data is hosted in a DB cluster in VPC_PROD, and 12 testing environments are hosted in VPC_TEST using the same AWS account. Testing results in minimal changes to the test data. The Development team wants each environment refreshed nightly so each test database contains fresh production data every day.<br>Which migration approach will be the fastest and most cost-effective to implement?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#75",
            "answers": [
              {
                "choice": "<p>A. Run the master in Amazon Aurora MySQL. Create 12 clones in VPC_TEST, and script the clones to be deleted and re-created nightly.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Run the master in Amazon Aurora MySQL. Take a nightly snapshot, and restore it into 12 databases in VPC_TEST using Aurora Serverless.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Run the master in Amazon Aurora MySQL. Create 12 Aurora Replicas in VPC_TEST, and script the replicas to be deleted and re-created nightly.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Run the master in Amazon Aurora MySQL using Aurora Serverless. Create 12 clones in VPC_TEST, and script the clones to be deleted and re-created nightly.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 75 discussion",
        "discusstion": [
          {
            "id": 149677,
            "date": "Mon 27 Sep 2021 11:40",
            "username": "zanhsiehHuyChauPhan",
            "content": "A. <br>B dropped due to snapshot is slower (full disk dump) than clone (copy-on-write)<br>C dropped due to no write on Aurora Replicas<br>D dropped due to there=E2=80=99s no option for cloning in the console.Cloning is not supported on Aurora Serverlessnor Cross-Region. https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.htmlNo, it is cross-account, not cross-region. The question mentions same account<br>You can create an Aurora provisioned clone from a provisioned Aurora DB cluster. You can create an Aurora Serverless v1 clone from an Aurora Serverless v1 DB cluster. But you can also create Aurora Serverless v1 clones from Aurora provisioned DB clusters, and you can create provisioned clones from Aurora Serverless v1 DB clusters.<br>\\\"CROSS-ACCOUNT cloning currently doesn't support cloning Aurora Serverless v1 DB clusters\\\"",
            "upvote_count": "1331",
            "selected_answers": ""
          },
          {
            "id": 360085,
            "date": "Mon 18 Oct 2021 07:22",
            "username": "HuyChauPhan",
            "content": "Cloning is not supported on Aurora Serverlessnor Cross-Region. https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.htmlNo, it is cross-account, not cross-region. The question mentions same account<br>You can create an Aurora provisioned clone from a provisioned Aurora DB cluster. You can create an Aurora Serverless v1 clone from an Aurora Serverless v1 DB cluster. But you can also create Aurora Serverless v1 clones from Aurora provisioned DB clusters, and you can create provisioned clones from Aurora Serverless v1 DB clusters.<br>\\\"CROSS-ACCOUNT cloning currently doesn't support cloning Aurora Serverless v1 DB clusters\\\"",
            "upvote_count": "31",
            "selected_answers": ""
          },
          {
            "id": 427471,
            "date": "Mon 18 Oct 2021 07:27",
            "username": "ChauPhan",
            "content": "No, it is cross-account, not cross-region. The question mentions same account<br>You can create an Aurora provisioned clone from a provisioned Aurora DB cluster. You can create an Aurora Serverless v1 clone from an Aurora Serverless v1 DB cluster. But you can also create Aurora Serverless v1 clones from Aurora provisioned DB clusters, and you can create provisioned clones from Aurora Serverless v1 DB clusters.<br>\\\"CROSS-ACCOUNT cloning currently doesn't support cloning Aurora Serverless v1 DB clusters\\\"",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 751426,
            "date": "Tue 20 Dec 2022 21:11",
            "username": "lollyj",
            "content": "I chose A over D because I don't believe serverless will be cheaper necessarily.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 696625,
            "date": "Mon 17 Oct 2022 00:54",
            "username": "awsjjjawsjjj",
            "content": "aurora server less now supports cloning since june 2021. Question is abount cost effective. i am leanng towards DAlthough Personally I wouldn't recommend Serverless for production workload with the limitations comes with aurora serverless . A is not a wrong answer either",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 696626,
            "date": "Mon 17 Oct 2022 00:56",
            "username": "awsjjj",
            "content": "Although Personally I wouldn't recommend Serverless for production workload with the limitations comes with aurora serverless . A is not a wrong answer either",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 683680,
            "date": "Fri 30 Sep 2022 16:49",
            "username": "JeanGat",
            "content": "Going to go with A. Aurora Serverless is a good fit for applications that are not expected to serve traffic on a regular basis, such as development or test environments.So in this case, moving the master to serverless seems kind of backwards.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 632218,
            "date": "Sat 16 Jul 2022 16:55",
            "username": "niau",
            "content": "A.  D It s not correct. Why move to serverless?",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 595619,
            "date": "Sun 01 May 2022 15:54",
            "username": "novice_expert",
            "content": "x A.  Run the master in Amazon Aurora MySQL. Create 12 clones in VPC_TEST, and script the clones to be deleted and re-created nightly. (right answer before June 2021 as option D's serverless did not allow clone earlier)<br>x B.  snapshot slow<br>x C.  Replica not for testingD.  Run the master in Amazon Aurora MySQL using Aurora Serverless. Create 12 clones in VPC_TEST, and script the clones to be deleted and re-created nightly. (right answer after 6/2021, serverless v1 supports cloning to same account)<br><br>https://aws.amazon.com/about-aws/whats-new/2021/06/amazon-aurora-serverless-v1-supports-fast-database-cloning/<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 520442,
            "date": "Sun 09 Jan 2022 21:19",
            "username": "awsmonster",
            "content": "A. <br><br>Although the question does not mention any info about the production database. I am not convinced to move the production to Aurora Serverless, with these limitations in place:Aurora Serverless v1 doesn't support the following features:<br>Aurora global databases<br>Aurora multi-master clusters<br>Aurora Replicas<br>AWS Identity and Access Management (IAM) database authentication<br>Backtracking in Aurora<br>Database activity streams<br>Performance Insights",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 493809,
            "date": "Sat 04 Dec 2021 17:49",
            "username": "scottkerker",
            "content": "The best answer will be D after Jun. 21, 2021. According to https://aws.amazon.com/about-aws/whats-new/2021/06/amazon-aurora-serverless-v1-supports-fast-database-cloning/,<br>after Jun. 21, 2021, Amazon Aurora allows you to create clones between Aurora Serverless v1 and provisioned Aurora DB clusters to enable quick sharing of data, i.e., you can create Aurora Serverless v1 clones from Aurora provisioned DB clusters, and you can also create provisioned clones from Aurora Serverless v1 DB clusters.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 446056,
            "date": "Mon 01 Nov 2021 11:51",
            "username": "guru_ji",
            "content": "I got this Question in exam.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 439024,
            "date": "Fri 29 Oct 2021 13:07",
            "username": "guru_ji",
            "content": "Answer: A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 435696,
            "date": "Thu 28 Oct 2021 15:55",
            "username": "grekh001",
            "content": "https://aws.amazon.com/about-aws/whats-new/2021/06/amazon-aurora-serverless-v1-supports-fast-database-cloning/<br><br>This link seems to support D for \\\"get quick access to production data for development and testing\\\"<br><br>I say D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 433350,
            "date": "Tue 26 Oct 2021 20:08",
            "username": "aws4myself",
            "content": "I will go with B, because snapshots are incremental, only 1st snapshot will take time and rest all are incremental, just changes will be added. We have snapshot now, will use aurora serverless for less cost.<br><br>Definitely, D is not, because it is asking about the clone solution to Test vpc, not prod vpc.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 427478,
            "date": "Sat 23 Oct 2021 08:30",
            "username": "ChauPhanguru_ji",
            "content": "D is more cost-effective than C<br>You pay on a per-second basis for the database capacity you use when the database is active, and migrate between standard and serverless configurationsThe load is NOT unpredictable.<br>I don't agree with D. ",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 430318,
            "date": "Tue 26 Oct 2021 03:41",
            "username": "guru_ji",
            "content": "The load is NOT unpredictable.<br>I don't agree with D. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 345012,
            "date": "Sun 17 Oct 2021 01:48",
            "username": "manan728",
            "content": "Yup A is correct and thisquestion was asked in my exam.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 342256,
            "date": "Sat 16 Oct 2021 17:47",
            "username": "swarndeep",
            "content": "A looks like the correct answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 299104,
            "date": "Sat 16 Oct 2021 10:03",
            "username": "myutran",
            "content": "Ans: A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 294814,
            "date": "Thu 14 Oct 2021 14:54",
            "username": "GeeBeeElChauPhan",
            "content": "To confirm A, see https://aws.amazon.com/blogs/aws/amazon-aurora-fast-database-cloning/ where it shows that cloning of 2TB can happen in 2 hours --- =E2=80=9CIf I had a 2TB database it could take hours just waiting for a copy of the data to be ready before I could perform my tasks. Even within RDS MySQL=E2=80=9D With cloning, =E2=80=9Cmy 2TB snapshot restore job that used to take an hour is now ready in about 5 minutes =E2=80=9C<br>While A or D may be correct in terms of speed. D serverless is more expensive<br>A is the answerD is more cost-effective because \\\"You pay on a per-second basis for the database capacity you use when the database is active, and migrate between standard and serverless configurations\\\"",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 427477,
            "date": "Tue 19 Oct 2021 16:16",
            "username": "ChauPhan",
            "content": "D is more cost-effective because \\\"You pay on a per-second basis for the database capacity you use when the database is active, and migrate between standard and serverless configurations\\\"",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#76",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large ecommerce company uses Amazon DynamoDB to handle the transactions on its web portal. Traffic patterns throughout the year are usually stable; however, a large event is planned. The company knows that traffic will increase by up to 10 times the normal load over the 3-day event. When sale prices are published during the event, traffic will spike rapidly.<br>How should a Database Specialist ensure DynamoDB can handle the increased traffic?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#76",
            "answers": [
              {
                "choice": "<p>A. Ensure the table is always provisioned to meet peak needs<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Allow burst capacity to handle the additional load<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Set an AWS Application Auto Scaling policy for the table to handle the increase in traffic<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Preprovision additional capacity for the known peaks and then reduce the capacity after the event<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 76 discussion",
        "discusstion": [
          {
            "id": 146972,
            "date": "Fri 01 Oct 2021 08:48",
            "username": "BillyMadison",
            "content": "I'm going with D because we know about the increased traffic in advance because it will be due to a sale.<br>Burst capacity is fine for unknown spikes up to 5 minutes. This even is for 3 days.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html#bp-partition-key-throughput-bursting<br>\\\"DynamoDB provides some flexibility in your per-partition throughput provisioning by providing burst capacity. Whenever you're not fully using a partition's throughput, DynamoDB reserves a portion of that unused capacity for later bursts of throughput to handle usage spikes.<br>DynamoDB currently retains up to 5 minutes (300 seconds) of unused read and write capacity. During an occasional burst of read or write activity, these extra capacity units can be consumed quickly=E2=80=94even faster than the per-second provisioned throughput capacity that you've defined for your table.<br>DynamoDB can also consume burst capacity for background maintenance and other tasks without prior notice.<br>Note that these burst capacity details might change in the future.\\\"",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 134128,
            "date": "Wed 22 Sep 2021 09:57",
            "username": "chicagomassageseeker",
            "content": "D.  Preprovision DynamoDB. (assign RCU and WCU 10 times higher than normal load using provisioned mode)",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 751428,
            "date": "Tue 20 Dec 2022 21:16",
            "username": "lollyj",
            "content": "I\\\"m going with D because auto scaling on the application doesn't mean the DB can accommodate the increased RW on the DB. Since the peak traffic is predictable then it may be best to pre-provision ahead and reduce after sale is over.I may be wrong though",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 696628,
            "date": "Mon 17 Oct 2022 01:03",
            "username": "awsjjj",
            "content": "I go with D.  although If the answer D also includes autoscaling it would have been easy to choose D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 691890,
            "date": "Tue 11 Oct 2022 10:13",
            "username": "SachinGoel",
            "content": "C.  Set an AWS Application Auto Scaling policy for the table to handle the increase in traffic",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 627093,
            "date": "Mon 04 Jul 2022 19:23",
            "username": "kush_sumitDevoteamAnalytix",
            "content": "Answer: C<br>Dynamodb falls under the category of application scaling as per link and we can use schedule scaling option which can be used for one time or recurring schedule.<br><br>https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html<br>Features of Application Auto Scaling<br>Application Auto Scaling allows you to automatically scale your scalable resources according to conditions that you define.<br><br>Target tracking scaling =E2=80=93 Scale a resource based on a target value for a specific CloudWatch metric.<br><br>Step scaling =E2=80=93 Scale a resource based on a set of scaling adjustments that vary based on the size of the alarm breach.<br><br>Scheduled scaling =E2=80=93 Scale a resource one time only or on a recurring schedule.<br><br>Link: https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.htmlI agree because of the possibility of \\\"Scheduled scaling for Application Auto Scaling\\\" (https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html)",
            "upvote_count": "42",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 640410,
            "date": "Mon 01 Aug 2022 09:04",
            "username": "DevoteamAnalytix",
            "content": "I agree because of the possibility of \\\"Scheduled scaling for Application Auto Scaling\\\" (https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html)",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 626976,
            "date": "Mon 04 Jul 2022 13:59",
            "username": "minhntm",
            "content": "Aggre with sachin, C is correct",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 625593,
            "date": "Fri 01 Jul 2022 07:57",
            "username": "sachinminhntm",
            "content": "C is the correct.<br>D is not correct because in Dynamodb when you scale up the capacity your data partition will increase accorssing to your RCU and WCU, but when you scale down the partition remain unchnaged, so the per table RCU and WCU will give poor performance.<br>I think Auto Scaling is the correctway is such situation.correct, I'm surprised that no one talk about it. Once you add more capacity, it's really hard to reduce",
            "upvote_count": "72",
            "selected_answers": ""
          },
          {
            "id": 626975,
            "date": "Mon 04 Jul 2022 13:59",
            "username": "minhntm",
            "content": "correct, I'm surprised that no one talk about it. Once you add more capacity, it's really hard to reduce",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 595122,
            "date": "Sat 30 Apr 2022 17:28",
            "username": "novice_expert",
            "content": "x A.  table is always provisioned to meet peak needs (bad solution)<br>x B.  burst capacity (good for 5 min)<br>x C.  Application Auto Scaling policy ( first it says Application not DB, second why auto scale when event is non-recurring)D.  Preprovision additional capacity for the known peaks and then reduce the capacity after the event (better add DB auto scaling too)",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 561620,
            "date": "Sat 05 Mar 2022 21:13",
            "username": "RotterDam",
            "content": "D sounds correct.<br>(1) weknow in advance there is going to be an enormous increase and we can pre-provision a large capacity before the event<br>(2) Autoscaling does NOT kick in immediately. ITs gradual and may not be able to keep up with the spike. Fairly high chance of throttlingas even Burst Capacity wont be able to keep up.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 557655,
            "date": "Sun 27 Feb 2022 22:46",
            "username": "user0001",
            "content": "i vote for C , anticipating is not an option you consider on production<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 529157,
            "date": "Fri 21 Jan 2022 14:36",
            "username": "awsmonster",
            "content": "C<br><br>Application Auto Scaling supports DynamoDB. <br>https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 496057,
            "date": "Tue 07 Dec 2021 14:34",
            "username": "GMartinelli",
            "content": "Option D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 378641,
            "date": "Thu 04 Nov 2021 21:10",
            "username": "Suresh108",
            "content": "I am with DDDDDD. <br><br>choosing D over C becauseof the words \\\"will spike rapidly.\\\" and traffic is known by 10 times, prerevision should be good.<br><br>When sale prices are published during the event, *****traffic will spike rapidly.******",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 365473,
            "date": "Wed 03 Nov 2021 21:56",
            "username": "Dip11",
            "content": "D looks to be more appropriate.C is also possible but when its a one time event why do want to create policies and schedule it. If its recurring event then C is more appropriate.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358858,
            "date": "Tue 02 Nov 2021 08:23",
            "username": "Aesthet",
            "content": "D for me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 308547,
            "date": "Thu 28 Oct 2021 18:02",
            "username": "jyrajanshantest1ChauPhan",
            "content": "Definitely C.  See the link, you can use this for scheduled scaling.<br><br>https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.htmlGood find, makes sense, C is the answerAs we can predict the traffic in the event 10 times, there is no need to setup a application autoscaling. Will you delete it after the event is done?",
            "upvote_count": "411",
            "selected_answers": ""
          },
          {
            "id": 330369,
            "date": "Sun 31 Oct 2021 03:48",
            "username": "shantest1",
            "content": "Good find, makes sense, C is the answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 427484,
            "date": "Sun 07 Nov 2021 07:16",
            "username": "ChauPhan",
            "content": "As we can predict the traffic in the event 10 times, there is no need to setup a application autoscaling. Will you delete it after the event is done?",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#77",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist is migrating an on-premises Microsoft SQL Server application database to Amazon RDS for PostgreSQL using AWS DMS. The application requires minimal downtime when the RDS DB instance goes live.<br>What change should the Database Specialist make to enable the migration?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#77",
            "answers": [
              {
                "choice": "<p>A. Configure the on-premises application database to act as a source for an AWS DMS full load with ongoing change data capture (CDC)<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure the AWS DMS replication instance to allow both full load and ongoing change data capture (CDC)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the AWS DMS task to generate full logs to allow for ongoing change data capture (CDC)<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure the AWS DMS connections to allow two-way communication to allow for ongoing change data capture (CDC)<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 77 discussion",
        "discusstion": [
          {
            "id": 158702,
            "date": "Sun 03 Oct 2021 12:05",
            "username": "awscamusKamazani",
            "content": "Sorry, I mean A.  We cannot define full load or CDC in Replication instanceB is the answer.....You define full load and CDC<br>when creating the replication task",
            "upvote_count": "91",
            "selected_answers": ""
          },
          {
            "id": 257428,
            "date": "Thu 14 Oct 2021 08:52",
            "username": "Kamazani",
            "content": "B is the answer.....You define full load and CDC<br>when creating the replication task",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595637,
            "date": "Sun 01 May 2022 17:07",
            "username": "novice_expert",
            "content": "C&D unrelatedA.  \\\"AWS DMS full load with ongoing change data capture (CDC)\\\" (Note WITH means 1 task)B.  allow both full load and ongoing change data capture (CDC)<br>(note AND, means 2 tasks)<br>There are two types of ongoing replication tasks:<br><br>Full load plus CDC =E2=80=93 The task migrates existing data and then updates the target database based on changes to the source database.<br><br>CDC only =E2=80=93 The task migrates ongoing changes after you have data on your target database.<br><br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC. html<br><br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 561778,
            "date": "Sun 06 Mar 2022 05:26",
            "username": "RotterDam",
            "content": "whoever makes these questions is probably not sober -<br>answer choice (A) is super apparent to the point of silliness - what ELSE would be the source?<br>answer choice (B) says replication instance needs to be configured to allow Full Load + CDC.  The INSTANCE doesnt do this. The Task it hosts does! Do they intend both to bethe one and the same?",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 522171,
            "date": "Wed 12 Jan 2022 14:07",
            "username": "awsmonster",
            "content": "Ans A: Full load and CDC are defined in a DMS Tasks.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 365475,
            "date": "Sun 07 Nov 2021 06:28",
            "username": "Dip11",
            "content": "Question not clear.A seems more relevant.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 358866,
            "date": "Mon 01 Nov 2021 09:43",
            "username": "Aesthet",
            "content": "\\\"requires minimal downtime when the RDS DB instance goes live\\\"<br>in order to do CDC: \\\"you must first ensure that ARCHIVELOG MODE is on to provide information to LogMiner. AWS DMS uses LogMiner to read information from the archive logs so that AWS DMS can capture changes\\\"<br>So my answer is A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 356051,
            "date": "Sat 30 Oct 2021 07:10",
            "username": "Zhongkai",
            "content": "https://docs.aws.amazon.com/dms/latest/sbs/chap-oracle2postgresql.steps.configureoracle.html says \\\"If you want to capture and apply changes (CDC), then you also need the following privileges.\\\"<br>so A is the correct answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253519,
            "date": "Tue 12 Oct 2021 00:10",
            "username": "JobinAkaJoe",
            "content": "This question is bit vague. I will go with A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212852,
            "date": "Fri 08 Oct 2021 23:56",
            "username": "Ashoks",
            "content": "A is the answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 158698,
            "date": "Wed 29 Sep 2021 19:04",
            "username": "awscamusMultiAZSee111Jiang_aws1",
            "content": "B since Migrate existing data and replicate ongoing changes (full load + change data capture (CDC)) =E2=80=93 To migrate data with minimal downtime, AWS DMS can migrate the existing data and replicate the data changes from the source to the target until the cutover. This migration type is best for small and medium databases that require minimal downtime, which only lasts for the duration of the cutover.Answer is A.  You need to to a DMS task that is \\\"full+cdc\\\", this has nothing to do with the DMS instance in BAnswer is A replication instance can't do full and cdc task .only dms do.https://docs.aws.amazon.com/dms/latest/sbs/chap-rdsoracle2aurora.steps.createreplicationinstance.html<br><br>A DMS replication instance performs the actual data migration between source and target. The replication instance also caches the transaction logs during the migration. How much CPU and memory capacity a replication instance has influences the overall time required for the migration.",
            "upvote_count": "2221",
            "selected_answers": ""
          },
          {
            "id": 273147,
            "date": "Tue 19 Oct 2021 02:54",
            "username": "MultiAZ",
            "content": "Answer is A.  You need to to a DMS task that is \\\"full+cdc\\\", this has nothing to do with the DMS instance in B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 278601,
            "date": "Tue 26 Oct 2021 05:35",
            "username": "See111Jiang_aws1",
            "content": "Answer is A replication instance can't do full and cdc task .only dms do.https://docs.aws.amazon.com/dms/latest/sbs/chap-rdsoracle2aurora.steps.createreplicationinstance.html<br><br>A DMS replication instance performs the actual data migration between source and target. The replication instance also caches the transaction logs during the migration. How much CPU and memory capacity a replication instance has influences the overall time required for the migration.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 691321,
            "date": "Mon 10 Oct 2022 17:46",
            "username": "Jiang_aws1",
            "content": "https://docs.aws.amazon.com/dms/latest/sbs/chap-rdsoracle2aurora.steps.createreplicationinstance.html<br><br>A DMS replication instance performs the actual data migration between source and target. The replication instance also caches the transaction logs during the migration. How much CPU and memory capacity a replication instance has influences the overall time required for the migration.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 148058,
            "date": "Sat 25 Sep 2021 13:57",
            "username": "BillyC",
            "content": "B i think... im not sure",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 147999,
            "date": "Sun 19 Sep 2021 23:36",
            "username": "Mohitrecdgp",
            "content": "A looks fine",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#78",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A financial company has allocated an Amazon RDS MariaDB DB instance with large storage capacity to accommodate migration efforts. Post-migration, the company purged unwanted data from the instance. The company now want to downsize storage to save money. The solution must have the least impact on production and near-zero downtime.<br>Which solution would meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#78",
            "answers": [
              {
                "choice": "<p>A. Create a snapshot of the old databases and restore the snapshot with the required storage<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new RDS DB instance with the required storage and move the databases from the old instances to the new instance using AWS DMS<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a new database using native backup and restore<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new read replica and make it the primary by terminating the existing primary<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 78 discussion",
        "discusstion": [
          {
            "id": 147512,
            "date": "Mon 27 Sep 2021 01:35",
            "username": "BillyMadison",
            "content": "https://aws.amazon.com/premiumsupport/knowledge-center/rds-db-storage-size/\\\"After you create an Amazon RDS DB instance, you can't modify the allocated storage size of the DB instance to decrease the total storage space it uses. To decrease the storage size of your DB instance, create a new DB instance that has less provisioned storage size. Then, migrate your data into the new DB instance using one of the following methods:<br>Use the database engine's native dump and restore method.<br>Note: This method causes some downtime.<br>Use AWS Database Migration Service (AWS DMS) for minimal downtime.\\\"",
            "upvote_count": "18",
            "selected_answers": ""
          },
          {
            "id": 620187,
            "date": "Wed 22 Jun 2022 07:39",
            "username": "sachin",
            "content": "Its not Dbecause For replication to operate effectively, each Read Replica should have the same amount of compute & storage resources as the source DB instance.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 566783,
            "date": "Sun 13 Mar 2022 12:57",
            "username": "Dantas",
            "content": "B.  When you create a read replica you cannot set the storage size... so D is incorrect.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 561173,
            "date": "Sat 05 Mar 2022 05:24",
            "username": "RotterDam",
            "content": "A.  Create a snapshot of the old databases and restore the snapshot with the required storage (Downtime )B.  Create a new RDS DB instance with the required storage and move the databases from the old instances to the new instance using AWS DMS ( no downtime)C.  Create a new database using native backup and restore (Downtime like A)D.  Create a new read replica and make it the primary by terminating the existing primary (wontchange the storage)",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 548462,
            "date": "Wed 16 Feb 2022 10:46",
            "username": "yahooos",
            "content": "B<br>Almost no downtime > AWS DMS",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 511603,
            "date": "Tue 28 Dec 2021 22:55",
            "username": "aws_enthuuser0001",
            "content": "Isn't A?no, this will not shrink the size",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 557367,
            "date": "Sun 27 Feb 2022 15:16",
            "username": "user0001",
            "content": "no, this will not shrink the size",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 491995,
            "date": "Thu 02 Dec 2021 00:11",
            "username": "shuraosipov",
            "content": "Answer is B. <br>You cannot downsize the database storage size on RDS.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 477833,
            "date": "Sat 13 Nov 2021 23:29",
            "username": "jove",
            "content": "Almost no downtime > AWS DMS : Option B",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 433352,
            "date": "Mon 01 Nov 2021 06:54",
            "username": "aws4myself",
            "content": "D is not correct because, You cannot set the size of the read replica, which is always same as the master.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 370900,
            "date": "Wed 27 Oct 2021 18:38",
            "username": "stevewuoisiroDantas",
            "content": "B is correct. D is close, however, you don't make the read replica the primary by terminating the existing primary.<br>\\\"Create a new read replica and make it the primary by terminating the existing primary\\\"Yes, you can make the read replica the primary just by terminating the current primary. Anyways option D is incorrect once the replica storage will be the same as the primary.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 566831,
            "date": "Sun 13 Mar 2022 13:41",
            "username": "Dantas",
            "content": "Yes, you can make the read replica the primary just by terminating the current primary. Anyways option D is incorrect once the replica storage will be the same as the primary.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 365484,
            "date": "Mon 25 Oct 2021 06:51",
            "username": "Dip11",
            "content": "D can be an option too.Read replicas can have different storage size and Read replicas will have less impact on production as compared to DMS.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358876,
            "date": "Sat 23 Oct 2021 04:57",
            "username": "Aesthet",
            "content": "B looks correct according to BillyMadaison's link. Not my initial answer though",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 299152,
            "date": "Mon 18 Oct 2021 23:47",
            "username": "myutran",
            "content": "Ans: B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253521,
            "date": "Thu 14 Oct 2021 05:50",
            "username": "JobinAkaJoe",
            "content": "B looks to be the correct answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212857,
            "date": "Mon 04 Oct 2021 21:05",
            "username": "Ashoks",
            "content": "Yes. B is the answer<br>snapshot will retain same size. DB needs to be recreated and DMS is for near zero",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 210010,
            "date": "Wed 29 Sep 2021 12:57",
            "username": "halol",
            "content": "B is corect",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 159746,
            "date": "Mon 27 Sep 2021 18:49",
            "username": "Ebi",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#79",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A large financial services company requires that all data be encrypted in transit. A Developer is attempting to connect to an Amazon RDS DB instance using the company VPC for the first time with credentials provided by a Database Specialist. Other members of the Development team can connect, but this user is consistently receiving an error indicating a communications link failure. The Developer asked the Database Specialist to reset the password a number of times, but the error persists.<br>Which step should be taken to troubleshoot this issue?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#79",
            "answers": [
              {
                "choice": "<p>A. Ensure that the database option group for the RDS DB instance allows ingress from the Developer machine's IP address<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Ensure that the RDS DB instance's subnet group includes a public subnet to allow the Developer to connect<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Ensure that the RDS DB instance has not reached its maximum connections limit<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Ensure that the connection is using SSL and is addressing the port where the RDS DB instance is listening for encrypted connections<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 79 discussion",
        "discusstion": [
          {
            "id": 138022,
            "date": "Tue 28 Sep 2021 14:54",
            "username": "k115",
            "content": "D is correct",
            "upvote_count": "7",
            "selected_answers": ""
          },
          {
            "id": 624313,
            "date": "Wed 29 Jun 2022 01:25",
            "username": "rlnd2000",
            "content": "A lot of time this issue has happened to me, a Developer call me because is unable to connectto Redshift or any other DB and the problem isthat they forgot to check\\\"use SSL\\\" in DBeaver. :)<br>I will go with D:",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 620946,
            "date": "Thu 23 Jun 2022 13:52",
            "username": "ryuhei",
            "content": "Ofcourse it's decided to be D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 605037,
            "date": "Sat 21 May 2022 23:46",
            "username": "awsguys",
            "content": "d. as all data in transit be encrypted",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 595208,
            "date": "Sat 30 Apr 2022 20:28",
            "username": "novice_expert",
            "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.Concepts.General.SSL.Using.html<br>D.  addressing the port where the RDS DB instance is listening for encrypted connections (communications connection failure > port)",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 585168,
            "date": "Wed 13 Apr 2022 13:41",
            "username": "kret",
            "content": "\\\"Other members of the Development team are able to connect\\\", so obviously not B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 529762,
            "date": "Sat 22 Jan 2022 11:42",
            "username": "soyyodario",
            "content": "\\\"firm mandates that all data in transit be encrypted\\\" but \\\"Other members of the Development team are able to connect\\\", then SSL connections are ok. B is the answer that has more sence for communication error.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 510825,
            "date": "Tue 28 Dec 2021 06:52",
            "username": "Shunpin",
            "content": "\\\"a communications connection failure\\\". It's about communication failure during connection.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 415885,
            "date": "Thu 04 Nov 2021 11:42",
            "username": "gelsm",
            "content": "Asnwer D: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.Concepts.General.SSL.Using.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 365486,
            "date": "Tue 02 Nov 2021 12:58",
            "username": "Dip11",
            "content": "D for sure.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 326613,
            "date": "Tue 02 Nov 2021 01:39",
            "username": "shantest1",
            "content": "D is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 299160,
            "date": "Mon 01 Nov 2021 04:26",
            "username": "myutran",
            "content": "Ans: D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 253524,
            "date": "Sat 30 Oct 2021 20:39",
            "username": "JobinAkaJoe",
            "content": "D is my choice",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 212864,
            "date": "Mon 25 Oct 2021 16:49",
            "username": "Ashoks",
            "content": "D is the answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 159748,
            "date": "Sat 09 Oct 2021 18:06",
            "username": "Ebi",
            "content": "D is answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 159540,
            "date": "Wed 29 Sep 2021 14:08",
            "username": "szmulder",
            "content": "B is incorrect due to \\\"Other members of the Development team can connect\\\"",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 144983,
            "date": "Wed 29 Sep 2021 05:20",
            "username": "BillyC",
            "content": "Ans D here",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#80",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is running Amazon RDS for MySQL for its workloads. There is downtime when AWS operating system patches are applied during the Amazon RDS- specified maintenance window.<br>What is the MOST cost-effective action that should be taken to avoid downtime?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#80",
            "answers": [
              {
                "choice": "<p>A. Migrate the workloads from Amazon RDS for MySQL to Amazon DynamoDB<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Enable cross-Region read replicas and direct read traffic to them when Amazon RDS is down<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable a read replica and direct read traffic to it when Amazon RDS is down<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable an Amazon RDS for MySQL Multi-AZ configuration<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 80 discussion",
        "discusstion": [
          {
            "id": 147409,
            "date": "Wed 29 Sep 2021 03:04",
            "username": "BillyMadison",
            "content": "Going with D for now<br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-required-maintenance/<br>To minimize downtime, modify the Amazon RDS DB instance to a Multi-AZ deployment. For Multi-AZ deployments, OS maintenance is applied to the secondary instance first, then the instance fails over, and then the primary instance is updated. The downtime is during failover. For more information, see Maintenance for Multi-AZ Deployments.<br>https://aws.amazon.com/rds/faqs/<br>The availability benefits of Multi-AZ also extend to planned maintenance. For example, with automated backups, I/O activity is no longer suspended on your primary during your preferred backup window, since backups are taken from the standby. In the case of patching or DB instance class scaling, these operations occur first on the standby, prior to automatic fail over. As a result, your availability impact is limited to the time required for automatic failover to complete.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 130405,
            "date": "Fri 24 Sep 2021 19:06",
            "username": "pan24",
            "content": "Ans: D<br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-required-maintenance/",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 605533,
            "date": "Sun 22 May 2022 15:22",
            "username": "praffuln",
            "content": "Obviously D is correct.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 595288,
            "date": "Sat 30 Apr 2022 22:59",
            "username": "novice_expert",
            "content": "C is the answer if the workload is read-only.<br>D is the answer to do the maintenance for R+W workload with reduced outage",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 370913,
            "date": "Wed 03 Nov 2021 17:08",
            "username": "stevewuoisiro",
            "content": "D is correct: \\\"Single-AZ deployments are unavailable for a few minutes. Multi-AZ deployments are unavailable for the time it takes the instance to failover (usually about 60 seconds) if the Availability Zone is affected by the maintenance. If only the secondary Availability Zone is affected, then there is no failover or downtime. \\\"<br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-required-maintenance/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 365489,
            "date": "Tue 02 Nov 2021 09:40",
            "username": "Dip11",
            "content": "D for sure.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 326614,
            "date": "Tue 26 Oct 2021 18:02",
            "username": "shantest1",
            "content": "Ans: D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 299169,
            "date": "Mon 25 Oct 2021 19:26",
            "username": "myutran",
            "content": "-Ans: D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 253529,
            "date": "Sat 23 Oct 2021 17:01",
            "username": "JobinAkaJoe",
            "content": "A.  Migrate the workloads from Amazon RDS for MySQL to Amazon DynamoDB<br>DynamoDB is not appropriate to take over RDS workload.B.  Enable cross-Region read replicas and direct read traffic to then when Amazon RDS is down<br>What about writes ?why do you need cross-region when you can have read-replicas in same regionC.  Enable a read replicas and direct read traffic to it when Amazon RDS is down<br>What about write workload ?D.  Enable an Amazon RDS for MySQL Multi-AZ configuration<br>Helps in reducing the outage required for the maintenance(just a failover)<br><br>C is the answer if the workload is read-only.<br>D is the answer to do the maintenance for R+W workload with reduced outage",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 212867,
            "date": "Fri 22 Oct 2021 13:48",
            "username": "Ashoks",
            "content": "Yes it is D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 178362,
            "date": "Sun 17 Oct 2021 02:54",
            "username": "Billhardy",
            "content": "Ans is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 159754,
            "date": "Sat 16 Oct 2021 19:30",
            "username": "Ebi",
            "content": "Answer is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 158594,
            "date": "Tue 05 Oct 2021 03:52",
            "username": "[Removed]",
            "content": "D.  100%",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 146513,
            "date": "Tue 28 Sep 2021 07:57",
            "username": "BillyC",
            "content": "Yes D is correct",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#81",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist must create a read replica to isolate read-only queries for an Amazon RDS for MySQL DB instance. Immediately after creating the read replica, users that query it report slow response times.<br>What could be causing these slow response times?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#81",
            "answers": [
              {
                "choice": "<p>A. New volumes created from snapshots load lazily in the background<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Long-running statements on the master<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Insufficient resources on the master<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Overload of a single replication thread by excessive writes on the master<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 81 discussion",
        "discusstion": [
          {
            "id": 140141,
            "date": "Mon 27 Sep 2021 19:09",
            "username": "pan24gelsmhariti_crafting",
            "content": "ANS: A<br>snapshot is lazy loaded If the volume is accessed where the data is not loaded, the application accessing the volume encounters a higher latency than normal while the data gets loadedhttps://aws.amazon.com/about-aws/whats-new/2019/11/amazon-ebs-fast-snapshot-restore-eliminates-need-for-prewarming-data-into-volumes-created-snapshots/question is about RDS this link is irrevalent not need to confuse ebs and rds",
            "upvote_count": "1312",
            "selected_answers": ""
          },
          {
            "id": 414327,
            "date": "Mon 01 Nov 2021 19:03",
            "username": "gelsmhariti_crafting",
            "content": "https://aws.amazon.com/about-aws/whats-new/2019/11/amazon-ebs-fast-snapshot-restore-eliminates-need-for-prewarming-data-into-volumes-created-snapshots/question is about RDS this link is irrevalent not need to confuse ebs and rds",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 627778,
            "date": "Wed 06 Jul 2022 09:43",
            "username": "hariti_crafting",
            "content": "question is about RDS this link is irrevalent not need to confuse ebs and rds",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 561246,
            "date": "Sat 05 Mar 2022 06:41",
            "username": "RotterDam",
            "content": "Unlike Aurora - RDS does not have a warm pool of cache (unless its POSTGRES and you are using CCM there - but there is MYSQL). First touch penalty. Can be mitigated with doing a select * from all tables",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 630151,
            "date": "Mon 11 Jul 2022 19:39",
            "username": "Rayls2000ray6li",
            "content": "Ans: B<br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-mysql-high-replica-lag/<br>If the replica SQL_THREAD is the source of replication delays, then those delays could be caused by the following:<br><br>Long-running queries on the primary DB instance<br>Insufficient DB instance class size or storage<br>Parallel queries run on the primary DB instance<br>Binary logs synced to the disk on the replica DB instance<br>Binlog_format on the replica is set to ROW<br>Replica creation lagCorrection: Ans: A.  Lag ! slow response time.",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 632673,
            "date": "Sun 17 Jul 2022 20:46",
            "username": "ray6li",
            "content": "Correction: Ans: A.  Lag ! slow response time.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 594683,
            "date": "Fri 29 Apr 2022 22:22",
            "username": "novice_experthariti_crafting",
            "content": "https://aws.amazon.com/about-aws/whats-new/2019/11/amazon-ebs-fast-snapshot-restore-eliminates-need-for-prewarming-data-into-volumes-created-snapshots/question is about RDS this link is irrevalent not need to confuse ebs and rds",
            "upvote_count": "32",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 627777,
            "date": "Wed 06 Jul 2022 09:43",
            "username": "hariti_crafting",
            "content": "question is about RDS this link is irrevalent not need to confuse ebs and rds",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 487359,
            "date": "Fri 26 Nov 2021 13:50",
            "username": "GMartinelli",
            "content": "Option A. ",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 326616,
            "date": "Sun 31 Oct 2021 01:12",
            "username": "shantest1",
            "content": "Ans: A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 253530,
            "date": "Sat 23 Oct 2021 11:22",
            "username": "JobinAkaJoe",
            "content": "A is my choice",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212871,
            "date": "Fri 22 Oct 2021 17:42",
            "username": "Ashoks",
            "content": "Yes, it is A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 159756,
            "date": "Sun 17 Oct 2021 18:40",
            "username": "Ebi",
            "content": "A is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 154315,
            "date": "Sat 16 Oct 2021 20:31",
            "username": "firbhat",
            "content": "Ans A<br>When you spin up a new replica, its EBS volume loads lazily in the background",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 148066,
            "date": "Wed 29 Sep 2021 18:42",
            "username": "BillyC",
            "content": "Yes A is Correct",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#82",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company developed an AWS CloudFormation template used to create all new Amazon DynamoDB tables in its AWS account. The template configures provisioned throughput capacity using hard-coded values. The company wants to change the template so that the tables it creates in the future have independently configurable read and write capacity units assigned.<br>Which solution will enable this change?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#82",
            "answers": [
              {
                "choice": "<p>A. Add values for the rcuCount and wcuCount parameters to the Mappings section of the template. Configure DynamoDB to provision throughput capacity using the stack's mappings.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Add values for two Number parameters, rcuCount and wcuCount, to the template. Replace the hard-coded values with calls to the Ref intrinsic function, referencing the new parameters.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Add values for the rcuCount and wcuCount parameters as outputs of the template. Configure DynamoDB to provision throughput capacity using the stack outputs.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Add values for the rcuCount and wcuCount parameters to the Mappings section of the template. Replace the hard-coded values with calls to the Ref intrinsic function, referencing the new parameters.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 82 discussion",
        "discusstion": [
          {
            "id": 615274,
            "date": "Sun 12 Jun 2022 13:08",
            "username": "rlnd2000",
            "content": "A and D are out, parameters are useful when you know thevalue for me mapping are like constant in any program language we can use them for Region, Accounts, AZ, etc and the question says \\\"...allocate independently variable read and write capacity...\\\" the word variable is key for me here.<br><br>C- is out Output is for importing values into other stack.<br><br>B is correctUse the optional Parameters section to customize your templates.<br>Parameters enable you to input custom values to your template each time you create or update a stack. from https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html<br>D -",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 604964,
            "date": "Sat 21 May 2022 19:40",
            "username": "Radhaghosh",
            "content": "\\\"The organization want to modify the template in order to allocate independently variable read and write capacity units to future tables.\\\" this is the vital sentence in the question. Only Option is Parameter. Option B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 595044,
            "date": "Sat 30 Apr 2022 15:37",
            "username": "novice_expert",
            "content": "Add values for two Number parameters, rcuCount and wcuCount, to the template. Replace the hard-coded values with calls to the Ref intrinsic function, referencing the new parameters.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 492655,
            "date": "Thu 02 Dec 2021 17:07",
            "username": "GMartinelli",
            "content": "Option B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 446067,
            "date": "Fri 29 Oct 2021 17:37",
            "username": "guru_ji",
            "content": "I got this Question in exam.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 403339,
            "date": "Thu 28 Oct 2021 23:24",
            "username": "umatrilok",
            "content": "definetly A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358892,
            "date": "Wed 20 Oct 2021 17:25",
            "username": "Aesthet",
            "content": "probably B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 300038,
            "date": "Tue 12 Oct 2021 18:44",
            "username": "WindyZhongkaiAesthetImprovMAN",
            "content": "Why not A? It is obvious that there are multiple tables and rcu and wcu should be defined for each of them. I think mapping is a must here.Mapping is not used like this way. Check https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html. We should use Parameter here so that the user could input what RCU/WCU they need when deploying a new stack.Input parameter and FindInMap<br>You can use an input parameter with the Fn::FindInMap function to refer to a specific value in a map. For example, suppose you have a list of regions and environment types that map to a specific AMI ID.  You can select the AMI ID that your stack uses by using an input parameter (EnvironmentType). To determine the region, use the AWS::Region pseudo parameter, which gets the AWS Region in which you create the stack.<br>I am not saying that B is not right answer thoughYou can't include parameters, pseudo parameters, or intrinsic functions in the Mappings section. https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html",
            "upvote_count": "1111",
            "selected_answers": ""
          },
          {
            "id": 356072,
            "date": "Wed 13 Oct 2021 11:57",
            "username": "ZhongkaiAesthetImprovMAN",
            "content": "Mapping is not used like this way. Check https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html. We should use Parameter here so that the user could input what RCU/WCU they need when deploying a new stack.Input parameter and FindInMap<br>You can use an input parameter with the Fn::FindInMap function to refer to a specific value in a map. For example, suppose you have a list of regions and environment types that map to a specific AMI ID.  You can select the AMI ID that your stack uses by using an input parameter (EnvironmentType). To determine the region, use the AWS::Region pseudo parameter, which gets the AWS Region in which you create the stack.<br>I am not saying that B is not right answer thoughYou can't include parameters, pseudo parameters, or intrinsic functions in the Mappings section. https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 358887,
            "date": "Sun 17 Oct 2021 04:26",
            "username": "AesthetImprovMAN",
            "content": "Input parameter and FindInMap<br>You can use an input parameter with the Fn::FindInMap function to refer to a specific value in a map. For example, suppose you have a list of regions and environment types that map to a specific AMI ID.  You can select the AMI ID that your stack uses by using an input parameter (EnvironmentType). To determine the region, use the AWS::Region pseudo parameter, which gets the AWS Region in which you create the stack.<br>I am not saying that B is not right answer thoughYou can't include parameters, pseudo parameters, or intrinsic functions in the Mappings section. https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 744005,
            "date": "Tue 13 Dec 2022 13:39",
            "username": "ImprovMAN",
            "content": "You can't include parameters, pseudo parameters, or intrinsic functions in the Mappings section. https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 299184,
            "date": "Sun 10 Oct 2021 17:17",
            "username": "myutran",
            "content": "Ans: B",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 253532,
            "date": "Sat 09 Oct 2021 18:41",
            "username": "JobinAkaJoe",
            "content": "B is my choice",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212872,
            "date": "Sun 03 Oct 2021 08:02",
            "username": "Ashoks",
            "content": "yes B for dynamic and not pre-determined values",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 161787,
            "date": "Sat 02 Oct 2021 04:36",
            "username": "BillyMadison",
            "content": "GOing with B<br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 159761,
            "date": "Fri 01 Oct 2021 22:55",
            "username": "Ebi",
            "content": "B is correct",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 152296,
            "date": "Tue 28 Sep 2021 12:25",
            "username": "Kitty0403",
            "content": "Answer is B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 149789,
            "date": "Sat 25 Sep 2021 05:24",
            "username": "BillyC",
            "content": "B orC, pleaseThoughts",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#83",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A retail company with its main office in New York and another office in Tokyo plans to build a database solution on AWS. The company's main workload consists of a mission-critical application that updates its application data in a data store. The team at the Tokyo office is building dashboards with complex analytical queries using the application data. The dashboards will be used to make buying decisions, so they need to have access to the application data in less than 1 second.<br>Which solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#83",
            "answers": [
              {
                "choice": "<p>A. Use an Amazon RDS DB instance deployed in the us-east-1 Region with a read replica instance in the ap-northeast-1 Region. Create an Amazon ElastiCache cluster in the ap-northeast-1 Region to cache application data from the replica to generate the dashboards.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an Amazon DynamoDB global table in the us-east-1 Region with replication into the ap-northeast-1 Region. Use Amazon QuickSight for displaying dashboard results.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use an Amazon RDS for MySQL DB instance deployed in the us-east-1 Region with a read replica instance in the ap-northeast-1 Region. Have the dashboard application read from the read replica.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use an Amazon Aurora global database. Deploy the writer instance in the us-east-1 Region and the replica in the ap-northeast-1 Region. Have the dashboard application read from the replica ap-northeast-1 Region.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 83 discussion",
        "discusstion": [
          {
            "id": 725076,
            "date": "Wed 23 Nov 2022 12:11",
            "username": "Arun32",
            "content": "Surely D :<br>Global Database uses storage-based replication with typical latency of less than 1 second, using dedicated infrastructure that leaves your database fully available to serve application workloads.<br>https://aws.amazon.com/rds/aurora/global-database/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595278,
            "date": "Sat 30 Apr 2022 22:41",
            "username": "novice_expert",
            "content": "Use an Amazon Aurora global database.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 439509,
            "date": "Tue 02 Nov 2021 08:12",
            "username": "guru_ji",
            "content": "Correct Answer: D<br><br>Dynamo DB >> No direct analytical queries (No joins).",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 438100,
            "date": "Mon 01 Nov 2021 05:36",
            "username": "LB",
            "content": "D - Aurora Global Database - The solution needs to support complex analytical queries. Which eliminates Dynamodb from the equation.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 396928,
            "date": "Tue 26 Oct 2021 17:25",
            "username": "sbhujbal",
            "content": "option B is not possible since Quicksight cannot talk with DynamoDB and hence only possible option is D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 358896,
            "date": "Sun 24 Oct 2021 11:53",
            "username": "Aesthet",
            "content": "D final answer",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 299196,
            "date": "Fri 22 Oct 2021 15:13",
            "username": "myutran",
            "content": "Ans: D",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 229407,
            "date": "Mon 18 Oct 2021 20:24",
            "username": "halolaws4myself",
            "content": "why it's not A, I can see A and D make sense !Because they have asked for 1 sec replication lag.",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 433356,
            "date": "Wed 27 Oct 2021 03:58",
            "username": "aws4myself",
            "content": "Because they have asked for 1 sec replication lag.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212875,
            "date": "Thu 14 Oct 2021 23:28",
            "username": "Ashoks",
            "content": "I would go with D.  Covers cross region 1 sec latency and complex query",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 205902,
            "date": "Mon 11 Oct 2021 11:52",
            "username": "pdboi3355",
            "content": "D - \\\"This means that committed transactional changes from the writer are replicated globally to the Regions that you select, typically within 1 second.\\\" -- based on link below",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 178901,
            "date": "Sat 09 Oct 2021 08:41",
            "username": "goodh32goodh32",
            "content": "Answer is B<br>Complex query and analytics is key to use RDS, not DynamoDB**editing:<br>Answer is for Aurora (D) - which is Relational ready for complex queries",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 178903,
            "date": "Sun 10 Oct 2021 06:19",
            "username": "goodh32",
            "content": "**editing:<br>Answer is for Aurora (D) - which is Relational ready for complex queries",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 178636,
            "date": "Sat 09 Oct 2021 04:44",
            "username": "qwertyuioGeeBeeEljove",
            "content": "D.  Quicksight don't support DynamodbI dont agree with you, see https://aws.amazon.com/blogs/database/how-to-perform-advanced-analytics-and-build-visualizations-of-your-amazon-dynamodb-data-by-using-amazon-athena/That blog suggests to export data from DynamoDB to S3 first and use Athena to read from S3.This process is slow.In this question, the dashboard requires an instant access to the application's data.<br><br>Answer is D",
            "upvote_count": "321",
            "selected_answers": ""
          },
          {
            "id": 295150,
            "date": "Tue 19 Oct 2021 23:57",
            "username": "GeeBeeEljove",
            "content": "I dont agree with you, see https://aws.amazon.com/blogs/database/how-to-perform-advanced-analytics-and-build-visualizations-of-your-amazon-dynamodb-data-by-using-amazon-athena/That blog suggests to export data from DynamoDB to S3 first and use Athena to read from S3.This process is slow.In this question, the dashboard requires an instant access to the application's data.<br><br>Answer is D",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 508286,
            "date": "Fri 24 Dec 2021 04:08",
            "username": "jove",
            "content": "That blog suggests to export data from DynamoDB to S3 first and use Athena to read from S3.This process is slow.In this question, the dashboard requires an instant access to the application's data.<br><br>Answer is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 159769,
            "date": "Thu 07 Oct 2021 06:11",
            "username": "Ebi",
            "content": "Answer is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 145353,
            "date": "Sun 26 Sep 2021 14:12",
            "username": "Kitty0403Kitty0403Kitty0403Kitty0403",
            "content": "Answer is BChanging to B<br>https://aws.amazon.com/blogs/database/aurora-postgresql-disaster-recovery-solutions-using-amazon-aurora-global-database/Sorry I meant D1 sec is the key.. dyanmodb takes 2000ms for replication",
            "upvote_count": "1222",
            "selected_answers": ""
          },
          {
            "id": 152303,
            "date": "Tue 28 Sep 2021 23:09",
            "username": "Kitty0403Kitty0403Kitty0403",
            "content": "Changing to B<br>https://aws.amazon.com/blogs/database/aurora-postgresql-disaster-recovery-solutions-using-amazon-aurora-global-database/Sorry I meant D1 sec is the key.. dyanmodb takes 2000ms for replication",
            "upvote_count": "222",
            "selected_answers": ""
          },
          {
            "id": 152304,
            "date": "Mon 04 Oct 2021 00:37",
            "username": "Kitty0403Kitty0403",
            "content": "Sorry I meant D1 sec is the key.. dyanmodb takes 2000ms for replication",
            "upvote_count": "22",
            "selected_answers": ""
          },
          {
            "id": 152307,
            "date": "Mon 04 Oct 2021 03:47",
            "username": "Kitty0403",
            "content": "1 sec is the key.. dyanmodb takes 2000ms for replication",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 145181,
            "date": "Tue 21 Sep 2021 12:15",
            "username": "steves",
            "content": "Going with B, less than 1 second replication required.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#84",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using Amazon RDS for PostgreSQL. The Security team wants all database connection requests to be logged and retained for 180 days. The RDS for PostgreSQL DB instance is currently using the default parameter group. A Database Specialist has identified that setting the log_connections parameter to 1 will enable connections logging.<br>Which combination of steps should the Database Specialist take to meet the logging and retention requirements? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BC</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#84",
            "answers": [
              {
                "choice": "<p>A. Update the log_connections parameter in the default parameter group<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a custom parameter group, update the log_connections parameter, and associate the parameter with the DB instance<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Enable publishing of database engine logs to Amazon CloudWatch Logs and set the event expiration to 180 days<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Enable publishing of database engine logs to an Amazon S3 bucket and set the lifecycle policy to 180 days<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Connect to the RDS PostgreSQL host and update the log_connections parameter in the postgresql.conf file<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 84 discussion",
        "discusstion": [
          {
            "id": 147599,
            "date": "Tue 05 Oct 2021 10:40",
            "username": "BillyMadison",
            "content": "B&C<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.Concepts.PostgreSQL.html#USER_LogAccess.PostgreSQL.log_retention_period<br>To set the retention period for system logs, use the rds.log_retention_period parameter. You can find rds.log_retention_period in the DB parameter group associated with your DB instance. The unit for this parameter is minutes. For example, a setting of 1,440 retains logs for one day. The default value is 4,320 (three days). The maximum value is 10,080 (seven days). Your instance must have enough allocated storage to contain the retained log files.<br>To retain older logs, publish them to Amazon CloudWatch Logs. For more information, see Publishing PostgreSQL Logs to CloudWatch Logs.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.Concepts.PostgreSQL.html#USER_LogAccess.PostgreSQL.PublishtoCloudWatchLogs",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 704838,
            "date": "Wed 26 Oct 2022 17:48",
            "username": "subzzzero",
            "content": "why A,E? this is misleading there is no way you can edit postgresql.conf in RDS... correct is B&C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595368,
            "date": "Sun 01 May 2022 02:32",
            "username": "novice_expert",
            "content": "B.  Create a custom parameter group, update the log_connections parameter, and associate the parameter with the DB instance<br>C.  Enable publishing of database engine logs to Amazon CloudWatch Logs and set the event expiration to 180 days",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 530458,
            "date": "Sun 23 Jan 2022 11:50",
            "username": "soyyodario",
            "content": "B and C. <br><br>A wrong:<br>Parameter groups<br>Each Amazon RDS PostgreSQL instance is associated with a parameter group that contains the engine specific configurations. The engine configurations also include several parameters that control PostgreSQL logging behavior. AWS provides the parameter groups with default configuration settings to use for your instances. However, to change the default settings, you must create a clone of the default parameter group, modify it, and attach it to your instance.<br><br>To set logging parameters for a DB instance, set the parameters in a DB parameter group and associate that parameter group with the DB instance. For more information, see Working with DB parameter groups.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BC"
          },
          {
            "id": 365692,
            "date": "Sat 06 Nov 2021 15:18",
            "username": "Dip11",
            "content": "B and C for sure.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358895,
            "date": "Sat 06 Nov 2021 07:22",
            "username": "Aesthet",
            "content": "BC final answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 299201,
            "date": "Sat 30 Oct 2021 17:26",
            "username": "myutran",
            "content": "Ans: BC",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 253535,
            "date": "Sat 30 Oct 2021 01:02",
            "username": "JobinAkaJoe",
            "content": "B and C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212876,
            "date": "Tue 12 Oct 2021 04:22",
            "username": "Ashoks",
            "content": "Yes B&C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 159771,
            "date": "Mon 11 Oct 2021 12:43",
            "username": "Ebi",
            "content": "BC correct answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 145354,
            "date": "Mon 04 Oct 2021 19:56",
            "username": "Kitty0403",
            "content": "Answer is B and C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 141904,
            "date": "Fri 01 Oct 2021 03:25",
            "username": "SaulGoodman",
            "content": "agreed with B&C<br>export logs to Cloudwatch Logs",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 139457,
            "date": "Wed 22 Sep 2021 15:50",
            "username": "k115",
            "content": "I will go for B & C",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#85",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A Database Specialist is creating a new Amazon Neptune DB cluster, and is attempting to load data from Amazon S3 into the Neptune DB cluster using the<br>Neptune bulk loader API. The Database Specialist receives the following error:<br>`Unable to connect to s3 endpoint. Provided sources3://mybucket/graphdata/ and regionus-east-1. Please verify your<br>S3 configuration.`<br>Which combination of actions should the Database Specialist take to troubleshoot the problem? (Choose two.)<br></p>",
        "mark": 1,
        "is_partially_correct": true,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: BE</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#85",
            "answers": [
              {
                "choice": "<p>A. Check that Amazon S3 has an IAM role granting read access to Neptune<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Check that an Amazon S3 VPC endpoint exists<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Check that a Neptune VPC endpoint exists<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Check that Amazon EC2 has an IAM role granting read access to Amazon S3<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>E. Check that Neptune has an IAM role granting read access to Amazon S3<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 85 discussion",
        "discusstion": [
          {
            "id": 139443,
            "date": "Sun 19 Sep 2021 23:58",
            "username": "k115",
            "content": "B & E https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-IAM.html",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 147606,
            "date": "Sun 10 Oct 2021 01:41",
            "username": "BillyMadison",
            "content": "BE<br>https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-data.html<br>=E2=80=9CAn IAM role for the Neptune DB instance to assume that has an IAM policy that allows access to the data files in the S3 bucket. The policy must grant Read and List permissions.=E2=80=9D<br>=E2=80=9CAn Amazon S3 VPC endpoint. For more information, see the Creating an Amazon S3 VPC Endpoint section.=E2=80=9D",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 751540,
            "date": "Tue 20 Dec 2022 22:44",
            "username": "lollyj",
            "content": "My final answer",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 595625,
            "date": "Sun 01 May 2022 16:33",
            "username": "novice_expert",
            "content": "https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-data.htmlB.  Check that an Amazon S3 VPC endpoint existsE.  Check that Neptune has an IAM role granting read access to Amazon S3<br>An IAM role for the Neptune DB instance to assume that has an IAM policy that allows access to the data files in the S3 bucket. The policy must grant Read and List permissions.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 561777,
            "date": "Sun 06 Mar 2022 05:19",
            "username": "RotterDam",
            "content": "BE are the correct answers<br>- S3 VPC endpoint has to exist<br>- Neptune must have the IAM role and policies with access to S3 bucket",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 530461,
            "date": "Sun 23 Jan 2022 11:57",
            "username": "soyyodario",
            "content": "B and E<br><br>https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-data.html",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: BE"
          },
          {
            "id": 358898,
            "date": "Sat 06 Nov 2021 10:25",
            "username": "Aesthet",
            "content": "BE final answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 344998,
            "date": "Thu 04 Nov 2021 20:52",
            "username": "manan728",
            "content": "Guys this question was asked in my exam that I passed. B and E are correct.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 299204,
            "date": "Mon 01 Nov 2021 00:26",
            "username": "myutran",
            "content": "Ans: BE",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 262717,
            "date": "Mon 25 Oct 2021 17:43",
            "username": "Umer24",
            "content": "send me a note ryan23680 at yahoo for new aws database questions to find the correct answers.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 257843,
            "date": "Mon 25 Oct 2021 14:14",
            "username": "Umer24Glendon",
            "content": "Question-121<br>A company's database specialist disabled TLS on an Amazon DocumentDB cluster to perform benchmarking tests. A few days after this change was implemented, a database specialist trainee accidentally deleted multiple tables. The database specialist restored the database from available snapshots. An hour after restoring the cluster. the database specialist is still unable to connect to the new cluster endpoint. What should the database specialist do to connect to the new. restored Amazon DocumentDB cluster?A.  Change the restored cluster's parameter group to the original cluster's custom parameter group.B.  Change the restored cluster's parameter group to the Amazon DocumentDB default parameter group.C.  Configure the interface VPC endpoint and associate the new Amazon DocumentDB cluster.D.  Run the synclnstances command in AWS DataSync.What is the answer for this? A?",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 274413,
            "date": "Wed 27 Oct 2021 17:27",
            "username": "Glendon",
            "content": "What is the answer for this? A?",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 253537,
            "date": "Mon 18 Oct 2021 09:14",
            "username": "JobinAkaJoe",
            "content": "B and E my choice",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 212879,
            "date": "Wed 13 Oct 2021 10:23",
            "username": "Ashoks",
            "content": "Ans is B&E",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 159775,
            "date": "Mon 11 Oct 2021 11:42",
            "username": "Ebi",
            "content": "Answer is BE",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 145926,
            "date": "Sat 09 Oct 2021 02:01",
            "username": "BillyC",
            "content": "B and E here",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 145355,
            "date": "Fri 08 Oct 2021 22:02",
            "username": "Kitty0403",
            "content": "Answer is B and E",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 141911,
            "date": "Fri 01 Oct 2021 07:35",
            "username": "SaulGoodman",
            "content": "A and D. <br>Neptune assume the role that give S3ReadOnly and S3 VPC gateway endpoint should exist",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#86",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A database specialist manages a critical Amazon RDS for MySQL DB instance for a company. The data stored daily could vary from .01% to 10% of the current database size. The database specialist needs to ensure that the DB instance storage grows as needed.<br>What is the MOST operationally efficient and cost-effective solution?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#86",
            "answers": [
              {
                "choice": "<p>A. Configure RDS Storage Auto Scaling.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Configure RDS instance Auto Scaling.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Modify the DB instance allocated storage to meet the forecasted requirements.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Monitor the Amazon CloudWatch FreeStorageSpace metric daily and add storage as required.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 86 discussion",
        "discusstion": [
          {
            "id": 594587,
            "date": "Fri 29 Apr 2022 18:17",
            "username": "novice_expert",
            "content": "Storage auto scaling",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 566016,
            "date": "Sat 12 Mar 2022 10:34",
            "username": "Dantas",
            "content": "There's no Amazon RDS for MySQL DB instance autoscaling service (it's only available for Aurora). And it wouldn't solve the storage issue.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 554987,
            "date": "Thu 24 Feb 2022 01:36",
            "username": "tugboat",
            "content": "agree with other comments",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 529913,
            "date": "Sat 22 Jan 2022 15:38",
            "username": "peacegrace",
            "content": "Cost Effective",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 510153,
            "date": "Mon 27 Dec 2021 09:48",
            "username": "Shunpin",
            "content": "Ans: A<br>From the AWS Console, you can only see storage section with autoscaling.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 491982,
            "date": "Wed 01 Dec 2021 23:39",
            "username": "shuraosipov",
            "content": "Answer is A. <br>If your workload is unpredictable, you can enable storage autoscaling for an Amazon RDS DB instance. With storage autoscaling enabled, when Amazon RDS detects that you are running out of free database space it automatically scales up your storage.<br><br>https://aws.amazon.com/about-aws/whats-new/2019/06/rds-storage-auto-scaling/<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 414342,
            "date": "Tue 02 Nov 2021 22:52",
            "username": "gelsm",
            "content": "A.  Configure RDS Storage Auto Scaling.<br><br>https://aws.amazon.com/vi/about-aws/whats-new/2019/06/rds-storage-auto-scaling/<br>\\\"operationally efficient and cost-effective\\\"<br>RDS Storage Auto Scaling automatically scales storage capacity in response to growing database workloads, with zero downtime.<br>There is no additional cost for RDS Storage Auto Scaling.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 365696,
            "date": "Sun 31 Oct 2021 00:24",
            "username": "Dip11",
            "content": "A is correct ans.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 364068,
            "date": "Fri 22 Oct 2021 07:01",
            "username": "yossanjp",
            "content": "Ans.A<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358900,
            "date": "Thu 14 Oct 2021 07:33",
            "username": "Aesthet",
            "content": "A final answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 356028,
            "date": "Sun 03 Oct 2021 20:25",
            "username": "thanhphan",
            "content": "I'll go with A. <br>https://aws.amazon.com/vi/about-aws/whats-new/2019/06/rds-storage-auto-scaling/",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 326622,
            "date": "Mon 27 Sep 2021 12:51",
            "username": "shantest1",
            "content": "A.  Answer",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#87",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is due for renewing its database license. The company wants to migrate its 80 TB transactional database system from on-premises to the AWS Cloud.<br>The migration should incur the least possible downtime on the downstream database applications. The company's network infrastructure has limited network bandwidth that is shared with other applications.<br>Which solution should a database specialist use for a timely migration?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#87",
            "answers": [
              {
                "choice": "<p>A. Perform a full backup of the source database to AWS Snowball Edge appliances and ship them to be loaded to Amazon S3. Use AWS DMS to migrate change data capture (CDC) data from the source database to Amazon S3. Use a second AWS DMS task to migrate all the S3 data to the target database.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Perform a full backup of the source database to AWS Snowball Edge appliances and ship them to be loaded to Amazon S3. Periodically perform incremental backups of the source database to be shipped in another Snowball Edge appliance to handle syncing change data capture (CDC) data from the source to the target database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use AWS DMS to migrate the full load of the source database over a VPN tunnel using the internet for its primary connection. Allow AWS DMS to handle syncing change data capture (CDC) data from the source to the target database.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the AWS Schema Conversion Tool (AWS SCT) to migrate the full load of the source database over a VPN tunnel using the internet for its primary connection. Allow AWS SCT to handle syncing change data capture (CDC) data from the source to the target database.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 87 discussion",
        "discusstion": [
          {
            "id": 345564,
            "date": "Sun 17 Oct 2021 14:18",
            "username": "frankzenggelsm",
            "content": "https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html<br>Using Amazon S3 as a target for AWS Database Migration Service<br>Ahttps://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html",
            "upvote_count": "111",
            "selected_answers": ""
          },
          {
            "id": 415072,
            "date": "Wed 27 Oct 2021 18:07",
            "username": "gelsm",
            "content": "https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 725080,
            "date": "Wed 23 Nov 2022 12:24",
            "username": "Arun32",
            "content": "A for sure. 2nd snowball device not required for CDC. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595213,
            "date": "Sat 30 Apr 2022 20:40",
            "username": "novice_expert",
            "content": "-C and D out because of VPN Tunnel<br>-B is out for multiple snowballs<br>A.  80 TB1 Snowball -> S3 -> DMS -> CDC -> Target",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 585167,
            "date": "Wed 13 Apr 2022 13:38",
            "username": "kret",
            "content": "80TB -> Snowball, ongoing changes rep with DMS",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 561732,
            "date": "Sun 06 Mar 2022 02:30",
            "username": "RotterDam",
            "content": "A is the correct Answer",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 538781,
            "date": "Wed 02 Feb 2022 15:35",
            "username": "thelad",
            "content": "I'm taking B here as the company network bandwidth is pretty much redundant for use in the migration.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 365699,
            "date": "Sat 23 Oct 2021 18:22",
            "username": "Dip11",
            "content": "Ans: A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 358906,
            "date": "Mon 18 Oct 2021 07:17",
            "username": "Aesthet",
            "content": "A final answer",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 342910,
            "date": "Sun 10 Oct 2021 06:54",
            "username": "manan728",
            "content": "You need snowball edge here. Of A and B only A makes more sense.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 335240,
            "date": "Fri 01 Oct 2021 16:29",
            "username": "wzlinux",
            "content": "A is for me.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 328318,
            "date": "Tue 21 Sep 2021 09:41",
            "username": "Xgab",
            "content": "My answer is A ,D is incorrect SCTis for schemasand doesn't support CDC",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#88",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A database specialist is responsible for an Amazon RDS for MySQL DB instance with one read replica. The DB instance and the read replica are assigned to the default parameter group. The database team currently runs test queries against a read replica. The database team wants to create additional tables in the read replica that will only be accessible from the read replica to benefit the tests.<br>Which should the database specialist do to allow the database team to create the test tables?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#88",
            "answers": [
              {
                "choice": "<p>A. Contact AWS Support to disable read-only mode on the read replica. Reboot the read replica. Connect to the read replica and create the tables.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Change the read_only parameter to false (read_only0) in the default parameter group of the read replica. Perform a reboot without failover. Connect to the read replica and create the tables using the local_only MySQL option.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Change the read_only parameter to false (read_only0) in the default parameter group. Reboot the read replica. Connect to the read replica and create the tables.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new DB parameter group. Change the read_only parameter to false (read_only0). Associate the read replica with the new group. Reboot the read replica. Connect to the read replica and create the tables.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 88 discussion",
        "discusstion": [
          {
            "id": 508073,
            "date": "Thu 23 Dec 2021 18:49",
            "username": "jove",
            "content": "https://aws.amazon.com/premiumsupport/knowledge-center/rds-read-replica/",
            "upvote_count": "7",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 610300,
            "date": "Wed 01 Jun 2022 20:31",
            "username": "Dantas",
            "content": "Option D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 597950,
            "date": "Sat 07 May 2022 04:31",
            "username": "KaranGandhi30",
            "content": "Option D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 594129,
            "date": "Fri 29 Apr 2022 02:46",
            "username": "novice_expert",
            "content": "read_only in default parameter group can not be changed (possible in custom parameter group)<br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-read-replica/",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 501344,
            "date": "Tue 14 Dec 2021 13:28",
            "username": "GMartinelli",
            "content": "Option D",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 446073,
            "date": "Thu 28 Oct 2021 15:59",
            "username": "guru_ji",
            "content": "This Q was asked in my exam.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 408519,
            "date": "Tue 26 Oct 2021 02:36",
            "username": "Hits_23",
            "content": "D is correct answer due to default parameter changes are not allowed",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 365702,
            "date": "Fri 22 Oct 2021 10:37",
            "username": "Dip11",
            "content": "D is the correct ans.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358915,
            "date": "Wed 13 Oct 2021 17:03",
            "username": "Aesthet",
            "content": "D final answer",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 343919,
            "date": "Tue 12 Oct 2021 10:04",
            "username": "shyamnsingh",
            "content": "D For me",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 337578,
            "date": "Tue 12 Oct 2021 07:37",
            "username": "Billhardy",
            "content": "D for me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 335244,
            "date": "Sun 03 Oct 2021 00:27",
            "username": "wzlinux",
            "content": "D is for me",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 326519,
            "date": "Thu 23 Sep 2021 11:51",
            "username": "shantest1shantest1shantest1shantest1",
            "content": "I think D?<br><br>Default parameter group cannot be changed.Sorry B. Sorry C: - Do not think need to adjust anything like what is said in B:<br>* We can edit default parameter group (no need of extra step of creating additional parameter group)Sorry again, default parameter cannot be changed.<br>D: answer.<br><br> No way to delete the comments, otherwise it will make it easy to update.",
            "upvote_count": "3113",
            "selected_answers": ""
          },
          {
            "id": 326626,
            "date": "Thu 23 Sep 2021 12:12",
            "username": "shantest1shantest1shantest1",
            "content": "Sorry B. Sorry C: - Do not think need to adjust anything like what is said in B:<br>* We can edit default parameter group (no need of extra step of creating additional parameter group)Sorry again, default parameter cannot be changed.<br>D: answer.<br><br> No way to delete the comments, otherwise it will make it easy to update.",
            "upvote_count": "113",
            "selected_answers": ""
          },
          {
            "id": 326629,
            "date": "Thu 30 Sep 2021 10:18",
            "username": "shantest1shantest1",
            "content": "Sorry C: - Do not think need to adjust anything like what is said in B:<br>* We can edit default parameter group (no need of extra step of creating additional parameter group)Sorry again, default parameter cannot be changed.<br>D: answer.<br><br> No way to delete the comments, otherwise it will make it easy to update.",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 327790,
            "date": "Sat 02 Oct 2021 08:06",
            "username": "shantest1",
            "content": "Sorry again, default parameter cannot be changed.<br>D: answer.<br><br> No way to delete the comments, otherwise it will make it easy to update.",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#89",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company has a heterogeneous six-node production Amazon Aurora DB cluster that handles online transaction processing (OLTP) for the core business and<br>OLAP reports for the human resources department. To match compute resources to the use case, the company has decided to have the reporting workload for the human resources department be directed to two small nodes in the Aurora DB cluster, while every other workload goes to four large nodes in the same DB cluster.<br>Which option would ensure that the correct nodes are always available for the appropriate workload while meeting these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#89",
            "answers": [
              {
                "choice": "<p>A. Use the writer endpoint for OLTP and the reader endpoint for the OLAP reporting workload.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use automatic scaling for the Aurora Replica to have the appropriate number of replicas for the desired workload.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create additional readers to cater to the different scenarios.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use custom endpoints to satisfy the different workloads.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 89 discussion",
        "discusstion": [
          {
            "id": 326520,
            "date": "Fri 01 Oct 2021 02:28",
            "username": "shantest1",
            "content": "D - Custom endpoints",
            "upvote_count": "8",
            "selected_answers": ""
          },
          {
            "id": 730463,
            "date": "Tue 29 Nov 2022 14:40",
            "username": "examineme",
            "content": "Use custom endpoints",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 595671,
            "date": "Sun 01 May 2022 19:04",
            "username": "novice_expert",
            "content": "D.  Use custom endpoints to satisfy the different workloads.<br><br>https://aws.amazon.com/about-aws/whats-new/2018/11/amazon-aurora-simplifies-workload-management-with-custom-endpoints/<br><br>you can now create custom endpoints for Amazon Aurora databases. This allows you to distribute and load balance workloads across different sets of database instances in your Aurora cluster.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 561733,
            "date": "Sun 06 Mar 2022 02:37",
            "username": "RotterDamkhchan123",
            "content": "What does \\\" heterogeneous six-node production Amazon Aurora DB cluster \\\" even mean? I've never heard of any Aurora infrastructure described this way!!heterogeneous means the six nodes are of different size.",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 604289,
            "date": "Fri 20 May 2022 10:22",
            "username": "khchan123",
            "content": "heterogeneous means the six nodes are of different size.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 439535,
            "date": "Tue 26 Oct 2021 09:35",
            "username": "guru_ji",
            "content": "Correct Answer: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 419391,
            "date": "Wed 20 Oct 2021 12:37",
            "username": "damaldon",
            "content": "D is correct as per link:<br>https://aws.amazon.com/about-aws/whats-new/2018/11/amazon-aurora-simplifies-workload-management-with-custom-endpoints/<br>ou can now create custom endpoints for Amazon Aurora databases. This allows you to distribute and load balance workloads across different sets of database instances in your Aurora cluster.<br><br>For example, you may provision a set of Aurora Replicas to use an instance type with higher memory capacity in order to run an analytics workload. A custom endpoint can then help you route the analytics workload to these appropriately-configured instances, while keeping other instances in your cluster isolated from this workload. As you add or remove instances from the custom endpoint to match your workload, the endpoint helps spread the load around.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 408525,
            "date": "Sun 17 Oct 2021 23:05",
            "username": "Hits_23",
            "content": "D is right choice. Custom endpoints. OLTP can only work with master instance endpoint. OLAP reports could work with either master instance/any combination of reader endpoints",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358918,
            "date": "Sat 16 Oct 2021 15:35",
            "username": "Aesthet",
            "content": "D final answer",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 326071,
            "date": "Thu 23 Sep 2021 04:54",
            "username": "std2021",
            "content": "Answer D",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#90",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>Developers have requested a new Amazon Redshift cluster so they can load new third-party marketing data. The new cluster is ready and the user credentials are given to the developers. The developers indicate that their copy jobs fail with the following error message:<br>`Amazon Invalid operation: S3ServiceException:Access Denied,Status 403,Error AccessDenied.`<br>The developers need to load this data soon, so a database specialist must act quickly to solve this issue.<br>What is the MOST secure solution?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#90",
            "answers": [
              {
                "choice": "<p>A. Create a new IAM role with the same user name as the Amazon Redshift developer user ID.  Provide the IAM role with read-only access to Amazon S3 with the assume role action.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Create a new IAM role with read-only access to the Amazon S3 bucket and include the assume role action. Modify the Amazon Redshift cluster to add the IAM role.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Create a new IAM role with read-only access to the Amazon S3 bucket with the assume role action. Add this role to the developer IAM user ID used for the copy job that ended with an error message.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create a new IAM user with access keys and a new role with read-only access to the Amazon S3 bucket. Add this role to the Amazon Redshift cluster. Change the copy job to use the access keys created.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 90 discussion",
        "discusstion": [
          {
            "id": 326072,
            "date": "Fri 24 Sep 2021 14:08",
            "username": "std2021",
            "content": "Answer B",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 594787,
            "date": "Sat 30 Apr 2022 03:45",
            "username": "novice_expert",
            "content": "B. new IAM role with read-only access to the Amazon S3 bucket and include the assume role action.<br>Modify the Amazon Redshift cluster to add the IAM role.Provide authentication for your cluster to access Amazon S3 on your behalf to load the sample data. You provide authentication by referencing the IAM role that you created and set as the default for your cluster",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 548965,
            "date": "Wed 16 Feb 2022 23:22",
            "username": "user0001",
            "content": "B<br>https://docs.aws.amazon.com/redshift/latest/gsg/rs-gsg-create-sample-db.html<br>Provide authentication for your cluster to access Amazon S3 on your behalf to load the sample data. You provide authentication by referencing the IAM role that you created and set as the default for your cluster",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 490589,
            "date": "Tue 30 Nov 2021 11:36",
            "username": "GMartinelli",
            "content": "Option B",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 428109,
            "date": "Sun 07 Nov 2021 06:10",
            "username": "ChauPhan",
            "content": "B.  To best protect your sensitive data and safeguard your AWS access credentials, we recommend creating an IAM role and attaching it to your cluster. For more information about providing access permissions, see Permissions to access other AWS resources.<br><br>In this step, you create a new IAM role that allows Amazon Redshift to load data from Amazon S3 buckets. An IAM role is an IAM identity that you can create in your account that has specific permissions. In the next step, you attach the role to your cluster",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 427445,
            "date": "Fri 29 Oct 2021 16:35",
            "username": "guru_ji",
            "content": "anyone here already cleared the exam ?<br>How much %age Q we will get in real exam, any idea ?",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 415946,
            "date": "Wed 27 Oct 2021 14:02",
            "username": "gelsm",
            "content": "Answer: B<br>https://docs.aws.amazon.com/redshift/latest/gsg/rs-gsg-create-an-iam-role.html<br>\\\"Now that you have created the new role, your next step is to attach it to your cluster. You can attach the role when you launch a new cluster or you can attach it to an existing cluster. In the next step, you attach the role to a new cluster.\\\"",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 408527,
            "date": "Wed 20 Oct 2021 02:50",
            "username": "Hits_23",
            "content": "Correct answer is B.  Good practice is to create an IAM Role with read only permission to S3 and attach this role to Redshift cluster for COPY jobs from S3 to Redshift cluster",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 358921,
            "date": "Sat 02 Oct 2021 23:31",
            "username": "AesthetAesthet",
            "content": "B<br>https://docs.aws.amazon.com/redshift/latest/gsg/rs-gsg-create-an-iam-role.htmlRole-based access control<br>https://docs.aws.amazon.com/redshift/latest/dg/copy-usage_notes-access-permissions.html",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 358955,
            "date": "Sun 03 Oct 2021 17:19",
            "username": "Aesthet",
            "content": "Role-based access control<br>https://docs.aws.amazon.com/redshift/latest/dg/copy-usage_notes-access-permissions.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 342288,
            "date": "Wed 29 Sep 2021 22:42",
            "username": "manan728[Removed]",
            "content": "C is the correct one. You cannot modify the redshift cluster to add IAM role to it. But you can add the role to the user who's trying to get access to S3you can modify the redshift cluster to associal an IAM role. C is not correct",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 351617,
            "date": "Thu 30 Sep 2021 23:33",
            "username": "[Removed]",
            "content": "you can modify the redshift cluster to associal an IAM role. C is not correct",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#91",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A database specialist at a large multi-national financial company is in charge of designing the disaster recovery strategy for a highly available application that is in development. The application uses an Amazon DynamoDB table as its data store. The application requires a recovery time objective (RTO) of 1 minute and a recovery point objective (RPO) of 2 minutes.<br>Which operationally efficient disaster recovery strategy should the database specialist recommend for the DynamoDB table?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#91",
            "answers": [
              {
                "choice": "<p>A. Create a DynamoDB stream that is processed by an AWS Lambda function that copies the data to a DynamoDB table in another Region.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use a DynamoDB global table replica in another Region. Enable point-in-time recovery for both tables.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use a DynamoDB Accelerator table in another Region. Enable point-in-time recovery for the table.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Create an AWS Backup plan and assign the DynamoDB table as a resource.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 91 discussion",
        "discusstion": [
          {
            "id": 331165,
            "date": "Wed 22 Sep 2021 19:06",
            "username": "shantest1",
            "content": "B DynamoDB global tables",
            "upvote_count": "16",
            "selected_answers": ""
          },
          {
            "id": 378678,
            "date": "Mon 01 Nov 2021 17:33",
            "username": "Suresh108",
            "content": "BBBBBBBBBBB<br><br>global tables are multi master replication enabled solution.<br>it meets the requirement.",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 751618,
            "date": "Wed 21 Dec 2022 00:07",
            "username": "lollyj",
            "content": "Only logical answer.Backups take too long to restore. Global tables are synchronously updated",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 626205,
            "date": "Sat 02 Jul 2022 17:24",
            "username": "sachinJiang_aws1",
            "content": "It is asking for DR soulution. My vote is forA . If you need less RPO and RTO setup Streams and Kinesis, Lambda andyou can achive the given RPO RTO,<br>RPO is 5 mins in usual automated backups .B could be true but in global tables also RPO is 5 minsB is correct. Global table is multi master & it is sync up with few sec",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 693423,
            "date": "Thu 13 Oct 2022 00:37",
            "username": "Jiang_aws1",
            "content": "B is correct. Global table is multi master & it is sync up with few sec",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 609812,
            "date": "Tue 31 May 2022 18:42",
            "username": "Dantas",
            "content": "Two-minute recovery point objective (RPO).",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 595135,
            "date": "Sat 30 Apr 2022 17:45",
            "username": "novice_expert",
            "content": "x A.  Create a DynamoDB stream that is processed by an AWS Lambda function that copies the data to a DynamoDB table in another Region. (good if B is wrong)B.  Use a DynamoDB global table replica in another Region. Enable point-in-time recovery for both tables. (PITR is distraction btw PITR takes 5 min recovery, but global table will auto failover to good region, right?)<br>x C.  DynamoDB Accelerator (its for read caching)<br>x D.  Create an AWS Backup plan and assign the DynamoDB table as a resource. (takes 1 hour)",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 593603,
            "date": "Thu 28 Apr 2022 08:36",
            "username": "marcoeu",
            "content": "B because of RTO and RPO limits defined. D is good solution doesn't fit limits. DynamoDB Accellerator is distractor for DR question.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 529995,
            "date": "Sat 22 Jan 2022 18:56",
            "username": "Sandy1971RotterDam",
            "content": "A, B and C are not DR solutions for Dynamo DB.  Global Tables is multi region replication.<br>D meets the objective . You can set up scheduled backups for Amazon DynamoDB using AWS Backup.. https://aws.amazon.com/blogs/database/set-up-scheduled-backups-for-amazon-dynamodb-using-aws-backup/to get RPO of 2minutes you will have to create a backup plan that backs up < 2 minutes!! Thats not what backup is for",
            "upvote_count": "14",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 561636,
            "date": "Sat 05 Mar 2022 21:33",
            "username": "RotterDam",
            "content": "to get RPO of 2minutes you will have to create a backup plan that backs up < 2 minutes!! Thats not what backup is for",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 510774,
            "date": "Tue 28 Dec 2021 04:20",
            "username": "Shunpin",
            "content": "I will go to B. <br>https://s3.amazonaws.com/solutions-reference/multi-region-application-architecture/latest/multi-region-application-architecture.pdf",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 479356,
            "date": "Tue 16 Nov 2021 13:19",
            "username": "toppic26",
            "content": "A is the answer.<br>D is wrong. Restore takes nearly 1 hour https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/backuprestore_HowItWorks.html<br>B is wrong. RPO is about 5 mins.<br>A is true. If you need less RPO and RTO setup Streams and Kinesis, Lambda whatever",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 478085,
            "date": "Sun 14 Nov 2021 12:45",
            "username": "Sp230toppic26",
            "content": "The question requires 2 min RPO.Using PITR RPO is about 5 min. I think D makes more sense hereBut restore is \\\"less than one hour\\\" aws says https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/backuprestore_HowItWorks.html",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 479351,
            "date": "Tue 16 Nov 2021 13:06",
            "username": "toppic26",
            "content": "But restore is \\\"less than one hour\\\" aws says https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/backuprestore_HowItWorks.html",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 448969,
            "date": "Thu 04 Nov 2021 03:58",
            "username": "Scunningham99",
            "content": "BBBBB https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 358959,
            "date": "Sun 10 Oct 2021 18:06",
            "username": "Aesthetgelsm",
            "content": "B final answerHI Aesthet, How are you sure about this? :) Thanks!",
            "upvote_count": "41",
            "selected_answers": ""
          },
          {
            "id": 359308,
            "date": "Sat 23 Oct 2021 13:36",
            "username": "gelsm",
            "content": "HI Aesthet, How are you sure about this? :) Thanks!",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#92",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A small startup company is looking to migrate a 4 TB on-premises MySQL database to AWS using an Amazon RDS for MySQL DB instance.<br>Which strategy would allow for a successful migration with the LEAST amount of downtime?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#92",
            "answers": [
              {
                "choice": "<p>A. Deploy a new RDS for MySQL DB instance and configure it for access from the on-premises data center. Use the mysqldump utility to create an initial snapshot from the on-premises MySQL server, and copy it to an Amazon S3 bucket. Import the snapshot into the DB instance utilizing the MySQL utilities running on an Amazon EC2 instance. Immediately point the application to the DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Deploy a new Amazon EC2 instance, install the MySQL software on the EC2 instance, and configure networking for access from the on-premises data center. Use the mysqldump utility to create a snapshot of the on-premises MySQL server. Copy the snapshot into the EC2 instance and restore it into the EC2 MySQL instance. Use AWS DMS to migrate data into a new RDS for MySQL DB instance. Point the application to the DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Deploy a new Amazon EC2 instance, install the MySQL software on the EC2 instance, and configure networking for access from the on-premises data center. Use the mysqldump utility to create a snapshot of the on-premises MySQL server. Copy the snapshot into an Amazon S3 bucket and import the snapshot into a new RDS for MySQL DB instance using the MySQL utilities running on an EC2 instance. Point the application to the DB instance.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Deploy a new RDS for MySQL DB instance and configure it for access from the on-premises data center. Use the mysqldump utility to create an initial snapshot from the on-premises MySQL server, and copy it to an Amazon S3 bucket. Import the snapshot into the DB instance using the MySQL utilities running on an Amazon EC2 instance. Establish replication into the new DB instance using MySQL replication. Stop application access to the on-premises MySQL server and let the remaining transactions replicate over. Point the application to the DB instance.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 92 discussion",
        "discusstion": [
          {
            "id": 751631,
            "date": "Wed 21 Dec 2022 00:24",
            "username": "lollyj",
            "content": "Was a toss between B&D.  DMS task threw me off but I don't see how you can get snapshot to an EC2 instance from option B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 729472,
            "date": "Mon 28 Nov 2022 18:36",
            "username": "vkrugerlollyj",
            "content": "Correct answer is B<br>I don't get why so many people chose D.  How is extra copy to S3 bucket reduce downtime?Installing new SQL software on an EC2 just for the sake of migration threw me off.Getting that much data through an s3 gateway endpoint would get the data from on-prem to the VPC but directly on to an EC2 instance seems ridic to me.So answer is D",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 751630,
            "date": "Wed 21 Dec 2022 00:23",
            "username": "lollyj",
            "content": "Installing new SQL software on an EC2 just for the sake of migration threw me off.Getting that much data through an s3 gateway endpoint would get the data from on-prem to the VPC but directly on to an EC2 instance seems ridic to me.So answer is D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 595237,
            "date": "Sat 30 Apr 2022 21:46",
            "username": "novice_expert",
            "content": "on-premises MySQL server -> mysqldump utility -> snapshot -> copy to S3 ->MySQL Utility on EC2 -> import to AWS RDS MySQL -> Establish replication into the new DB instance using MySQL replication -> Stop application access to the on-premises MySQL server ->let the remaining transactions replicate over. -> Point the application to the DB instance.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 419396,
            "date": "Sat 16 Oct 2021 14:07",
            "username": "damaldon",
            "content": "D looks correct as per this liink:<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.NonRDSRepl.html",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 378681,
            "date": "Thu 14 Oct 2021 08:29",
            "username": "Suresh108Suresh108",
            "content": "DDDDDDDDIgnore all EC2 based answers - method of elimination -left with D",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 380865,
            "date": "Sat 16 Oct 2021 09:04",
            "username": "Suresh108",
            "content": "Ignore all EC2 based answers - method of elimination -left with D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358962,
            "date": "Fri 08 Oct 2021 21:25",
            "username": "Aesthet",
            "content": "D<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.External.Repl.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 326632,
            "date": "Tue 05 Oct 2021 06:45",
            "username": "shantest1",
            "content": "D: Ans",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 326074,
            "date": "Thu 23 Sep 2021 20:15",
            "username": "std2021",
            "content": "Option D",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#93",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A software development company is using Amazon Aurora MySQL DB clusters for several use cases, including development and reporting. These use cases place unpredictable and varying demands on the Aurora DB clusters, and can cause momentary spikes in latency. System users run ad-hoc queries sporadically throughout the week. Cost is a primary concern for the company, and a solution that does not require significant rework is needed.<br>Which solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#93",
            "answers": [
              {
                "choice": "<p>A. Create new Aurora Serverless DB clusters for development and reporting, then migrate to these new DB clusters.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Upgrade one of the DB clusters to a larger size, and consolidate development and reporting activities on this larger DB cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use existing DB clusters and stop/start the databases on a routine basis using scheduling tools.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Change the DB clusters to the burstable instance family.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 93 discussion",
        "discusstion": [
          {
            "id": 356251,
            "date": "Mon 04 Oct 2021 23:33",
            "username": "Zhongkai",
            "content": "Check https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html - t2 and t3 (8vCPU 32GB RAM) series are mostly weaker than r4/r5 (96 vCPU 768GB RAM) series. Changing from r to t series is not a good idea. Furthermore, \\\"unpredictable\\\" indicates \\\"Aurora Serverless\\\". Hence I will go with A. ",
            "upvote_count": "14",
            "selected_answers": ""
          },
          {
            "id": 594641,
            "date": "Fri 29 Apr 2022 20:29",
            "username": "novice_expert",
            "content": "\\\"unexpected and variable demands, adhoc searched\\\" > \\\"Aurora Serverless\\\"",
            "upvote_count": "6",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 751642,
            "date": "Wed 21 Dec 2022 00:31",
            "username": "lollyj",
            "content": "A - Serverless will require moving existing DB although you are saving on cost. D.  Can respond to traffic spikes, requires very little change and the costs for the spikes won't be much because it isn't too frequent. The burst credits can be used.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 566802,
            "date": "Sun 13 Mar 2022 13:20",
            "username": "Dantas",
            "content": "https://aws.amazon.com/rds/aurora/serverless/<br><br>Amazon Aurora Serverless is a simple, cost-effective option for infrequent, intermittent, or unpredictable workloads.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 555572,
            "date": "Thu 24 Feb 2022 22:19",
            "username": "tugboat",
            "content": "ad-hoc searchesServerless<br><br>https://aws.amazon.com/rds/aurora/faqs/?ncsn&loc6<br>Q: Can I migrate an existing Aurora DB cluster to Aurora Serverless?<br>Yes, you can restore a snapshot taken from an existing Aurora provisioned cluster into an Aurora Serverless DB Cluster (and vice versa).",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 548774,
            "date": "Wed 16 Feb 2022 17:42",
            "username": "user0001",
            "content": "D<br>A is good if the cluster experience no activities which is not the case",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 521050,
            "date": "Mon 10 Jan 2022 19:53",
            "username": "awsmonster",
            "content": "Answer: A<br>The company's key concern is cost, and a solution that does not need extensive rework is required. Converting Aurora Cluster to Serverless does not require extensive rework.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 509673,
            "date": "Sun 26 Dec 2021 16:31",
            "username": "SMAZ",
            "content": "\\\"resulting in brief latency spikes\\\"Answer is D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 477844,
            "date": "Sat 13 Nov 2021 23:54",
            "username": "jove",
            "content": "If the key concern is the cost, the right option is Aurora Serverless.. Answer is A",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 448989,
            "date": "Sat 06 Nov 2021 02:09",
            "username": "Scunningham99",
            "content": "D less rework - A is too much work",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 439654,
            "date": "Wed 20 Oct 2021 02:59",
            "username": "guru_ji",
            "content": "Answer: D<br><br>**does not require significant rework is needed**",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 438186,
            "date": "Sat 16 Oct 2021 21:04",
            "username": "CW0106",
            "content": "D.  no significant work.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 430460,
            "date": "Thu 14 Oct 2021 14:01",
            "username": "ChauPhan",
            "content": "A.  Aurora Serverless is most saving cost. You pay what you query",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 408561,
            "date": "Fri 08 Oct 2021 02:19",
            "username": "Hits_23",
            "content": "Answer is A.  Serverless aurora cluster can be cost effective in the varying workload and dev/test environment where services are not required 24 * 7",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358968,
            "date": "Tue 05 Oct 2021 21:52",
            "username": "Aesthet",
            "content": "A final answer",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 347904,
            "date": "Thu 23 Sep 2021 22:48",
            "username": "sonidhaval",
            "content": "Will go for Option D because the solution that does not require significant rework is needed. Option A requires migration-related work.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 345354,
            "date": "Wed 22 Sep 2021 19:36",
            "username": "Thatxamguy",
            "content": "Will go with A",
            "upvote_count": "3",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#94",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A database specialist is building a system that uses a static vendor dataset of postal codes and related territory information that is less than 1 GB in size. The dataset is loaded into the application's cache at start up. The company needs to store this data in a way that provides the lowest cost with a low application startup time.<br>Which approach will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#94",
            "answers": [
              {
                "choice": "<p>A. Use an Amazon RDS DB instance. Shut down the instance once the data has been read.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon Aurora Serverless. Allow the service to spin resources up and down, as needed.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use Amazon DynamoDB in on-demand capacity mode.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon S3 and load the data from flat files.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 94 discussion",
        "discusstion": [
          {
            "id": 415852,
            "date": "Thu 28 Oct 2021 13:37",
            "username": "TonyGe",
            "content": "D, key words \\\" static vendor dataset\\\" & \\\"lowest cost\\\"",
            "upvote_count": "6",
            "selected_answers": ""
          },
          {
            "id": 757635,
            "date": "Mon 26 Dec 2022 17:08",
            "username": "satishstechie",
            "content": "simple option",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 751654,
            "date": "Wed 21 Dec 2022 00:40",
            "username": "lollyj",
            "content": "Static small files.S3 is your best bet for costs",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 595190,
            "date": "Sat 30 Apr 2022 20:05",
            "username": "novice_expert",
            "content": "x A.  RDS (costly for 1 GB data)<br>x B.  Amazon Aurora Serverless. (costly for 1 GB data)<br>x C.  Use Amazon DynamoDB in on-demand capacity mode.<br> (postal codes and associated territorial data that is less than 1 GB in size > key value data,<br>minimizing application launch time > dynamoDB, but caching is required at application and not database)<br>D.  Use Amazon S3 and load the data from flat files.(most cost-effective)",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 448990,
            "date": "Sun 07 Nov 2021 09:53",
            "username": "Scunningham99",
            "content": "D is the answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 433365,
            "date": "Tue 02 Nov 2021 18:12",
            "username": "aws4myself",
            "content": "Let us see in this way, 1 GB file on boot uploading in to application time < (1 GB file from s3 to Application + load time). So definitely it is not D, I will go with B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 404413,
            "date": "Tue 26 Oct 2021 00:39",
            "username": "gelsm",
            "content": "I agree with D based on the link below:<br>https://www.sumologic.com/insight/s3-cost-optimization/<br>For example, for 1 GB file stored on S3 with 1 TB of storage provisioned, you are billed for 1 GB only. In a lot of other services such as Amazon EC2, Amazon Elastic Block Storage (Amazon EBS) and Amazon DynamoDB you pay for provisioned capacity. For example, in the case of Amazon EBS disk you pay for the size of 1 TB of disk even if you just save 1 GB file. This makes managing S3 cost easier than many other services including Amazon EBS and Amazon EC2. On S3 there is no risk of over-provisioning and no need to manage disk utilization.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 378688,
            "date": "Mon 25 Oct 2021 21:24",
            "username": "Suresh108",
            "content": "DDDDDDDDDDD.  lowest cost.<br><br>--> this says Application cache and NOT DB cache.<br><br>application\\\"=E2=84=A2s cache at start up",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 375442,
            "date": "Mon 25 Oct 2021 02:57",
            "username": "AM",
            "content": "OR D is also a possibility",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 375441,
            "date": "Fri 22 Oct 2021 20:58",
            "username": "AM",
            "content": "I will go with B.  Will cover lowesr cost.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358972,
            "date": "Wed 20 Oct 2021 21:35",
            "username": "Aesthet",
            "content": "C or D<br>I choose D",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 326639,
            "date": "Sat 02 Oct 2021 20:20",
            "username": "shantest1shantest1",
            "content": "C: ?<br>lowest start up time askedMay be D:<br>Application Cache may be enough. Load from S3 straight into Application Cache",
            "upvote_count": "16",
            "selected_answers": ""
          },
          {
            "id": 331156,
            "date": "Sat 16 Oct 2021 12:08",
            "username": "shantest1",
            "content": "May be D:<br>Application Cache may be enough. Load from S3 straight into Application Cache",
            "upvote_count": "6",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#95",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A database specialist needs to review and optimize an Amazon DynamoDB table that is experiencing performance issues. A thorough investigation by the database specialist reveals that the partition key is causing hot partitions, so a new partition key is created. The database specialist must effectively apply this new partition key to all existing and new data.<br>How can this solution be implemented?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#95",
            "answers": [
              {
                "choice": "<p>A. Use Amazon EMR to export the data from the current DynamoDB table to Amazon S3. Then use Amazon EMR again to import the data from Amazon S3 into a new DynamoDB table with the new partition key.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use AWS DMS to copy the data from the current DynamoDB table to Amazon S3. Then import the DynamoDB table to create a new DynamoDB table with the new partition key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use the AWS CLI to update the DynamoDB table and modify the partition key.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use the AWS CLI to back up the DynamoDB table. Then use the restore-table-from-backup command and modify the partition key.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 95 discussion",
        "discusstion": [
          {
            "id": 331910,
            "date": "Tue 05 Oct 2021 20:13",
            "username": "shantest1",
            "content": "A.  Answer<br>Use EMR to copy to S3 and use EMR to create new table.",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 378711,
            "date": "Fri 15 Oct 2021 09:49",
            "username": "Suresh108",
            "content": "AAAA for me as well.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/back-up-dynamodb-s3/<br><br>EMR to backup and restore",
            "upvote_count": "5",
            "selected_answers": ""
          },
          {
            "id": 752624,
            "date": "Wed 21 Dec 2022 18:58",
            "username": "lollyjKanwar_89",
            "content": "I believe DMS works with DynamoDB and is a simpler solution compared to EMR. Dynamodb can be a source for DMS.<br><br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB. htmlDynamodb can be a target , but not a source -- Hence A",
            "upvote_count": "11",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 760541,
            "date": "Thu 29 Dec 2022 03:56",
            "username": "Kanwar_89",
            "content": "Dynamodb can be a target , but not a source -- Hence A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 629427,
            "date": "Sun 10 Jul 2022 06:15",
            "username": "Chirantan",
            "content": "Is it possible to change partition key in DynamoDB? No. Once the table is setup, you cannot modify its Key Schema. You can only provision a new table, move data there, and then remove the first table",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 594504,
            "date": "Fri 29 Apr 2022 15:58",
            "username": "novice_expert",
            "content": "https://aws.amazon.com/premiumsupport/knowledge-center/back-up-dynamodb-s3/<br><br>DynamoDB to S3 is possible by EMR, AWS Glue, or AWS Data Pipeline.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 554954,
            "date": "Thu 24 Feb 2022 00:49",
            "username": "tugboat",
            "content": "DynamoDB cannot be a source for DMS.<br><br>Per -https://dynobase.com/dynamodb-keys/<br>Is it possible to change partition key in DynamoDB?<br>No. Once the table is setup, you cannot modify its Key Schema. You can only provision a new table, move data there, and then remove the first table.Per - https://aws.amazon.com/premiumsupport/knowledge-center/back-up-dynamodb-s3/<br>To customize the process of creating backups, you can use use Amazon EMR, AWS Glue, or AWS Data Pipeline.<br><br>So, using EMR is the only valid option.",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 554918,
            "date": "Wed 23 Feb 2022 23:17",
            "username": "kped21RotterDam",
            "content": "D<br>https://docs.aws.amazon.com/cli/latest/reference/dynamodb/restore-table-from-backup.htmlthis will recreate the same partition key",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 562051,
            "date": "Sun 06 Mar 2022 14:50",
            "username": "RotterDam",
            "content": "this will recreate the same partition key",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358980,
            "date": "Wed 13 Oct 2021 18:11",
            "username": "Aesthet",
            "content": "A, other options are not possible",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 326086,
            "date": "Wed 29 Sep 2021 07:25",
            "username": "std2021toppic26",
            "content": "I'll go with B. <br>restore-table-from-backup doesn't seem to be able to change partition key, not sure hereDynamoDB doesnt seem to be a source for DMS. https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.html",
            "upvote_count": "24",
            "selected_answers": ""
          },
          {
            "id": 476881,
            "date": "Fri 12 Nov 2021 12:00",
            "username": "toppic26",
            "content": "DynamoDB doesnt seem to be a source for DMS. https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.html",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#96",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is going through a security audit. The audit team has identified cleartext master user password in the AWS CloudFormation templates for Amazon<br>RDS for MySQL DB instances. The audit team has flagged this as a security risk to the database team.<br>What should a database specialist do to mitigate this risk?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#96",
            "answers": [
              {
                "choice": "<p>A. Change all the databases to use AWS IAM for authentication and remove all the cleartext passwords in CloudFormation templates.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use an AWS Secrets Manager resource to generate a random password and reference the secret in the CloudFormation template.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Remove the passwords from the CloudFormation templates so Amazon RDS prompts for the password when the database is being created.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Remove the passwords from the CloudFormation template and store them in a separate file. Replace the passwords by running CloudFormation using a sed command.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 96 discussion",
        "discusstion": [
          {
            "id": 716261,
            "date": "Fri 11 Nov 2022 19:46",
            "username": "ImprovMAN",
            "content": "Answer B",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 594772,
            "date": "Sat 30 Apr 2022 03:18",
            "username": "novice_expert",
            "content": "Use an AWS Secrets Manager resource to generate a random password and reference the secret in the CloudFormation template.",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 555708,
            "date": "Fri 25 Feb 2022 03:46",
            "username": "tugboat",
            "content": "secret manager to the rescue!",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 537296,
            "date": "Mon 31 Jan 2022 19:19",
            "username": "soyyodario",
            "content": "Answer B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 490583,
            "date": "Tue 30 Nov 2021 11:28",
            "username": "GMartinelli",
            "content": "Option B",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 430467,
            "date": "Wed 03 Nov 2021 17:53",
            "username": "ChauPhan",
            "content": "B no doubt",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 414394,
            "date": "Sat 30 Oct 2021 15:42",
            "username": "gelsm",
            "content": "Answer: B<br>https://aws.amazon.com/blogs/infrastructure-and-automation/securing-passwords-in-aws-quick-starts-using-aws-secrets-manager/<br>Saving a password in a clear text file is not a secure practice.<br><br>Today, I want to discuss how you can store secrets in Secrets Manager via AWS CloudFormation. Then I=E2=80=99ll show, using code examples, how to retrieve secrets.",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 386517,
            "date": "Fri 29 Oct 2021 03:16",
            "username": "AMrlnd2000",
            "content": "Even though B works, A will also work as it will generate token for login. Also there is no info if rotation of paassowrd is required. I ma not sure between A & B. It is not necessary to state in the question that the rotation of passwords for services accounts, such as master user, it is a best practice.",
            "upvote_count": "21",
            "selected_answers": ""
          },
          {
            "id": 639217,
            "date": "Fri 29 Jul 2022 14:51",
            "username": "rlnd2000",
            "content": "It is not necessary to state in the question that the rotation of passwords for services accounts, such as master user, it is a best practice.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358981,
            "date": "Wed 06 Oct 2021 20:50",
            "username": "Aesthet",
            "content": "B final answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 326644,
            "date": "Wed 29 Sep 2021 17:03",
            "username": "shantest1",
            "content": "B.  Ans",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 326087,
            "date": "Mon 20 Sep 2021 17:22",
            "username": "std2021",
            "content": "Option B",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#97",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company's database specialist disabled TLS on an Amazon DocumentDB cluster to perform benchmarking tests. A few days after this change was implemented, a database specialist trainee accidentally deleted multiple tables. The database specialist restored the database from available snapshots. An hour after restoring the cluster, the database specialist is still unable to connect to the new cluster endpoint.<br>What should the database specialist do to connect to the new, restored Amazon DocumentDB cluster?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: A</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#97",
            "answers": [
              {
                "choice": "<p>A. Change the restored cluster's parameter group to the original cluster's custom parameter group.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>B. Change the restored cluster's parameter group to the Amazon DocumentDB default parameter group.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure the interface VPC endpoint and associate the new Amazon DocumentDB cluster.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Run the syncInstances command in AWS DataSync.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 97 discussion",
        "discusstion": [
          {
            "id": 326088,
            "date": "Wed 29 Sep 2021 13:04",
            "username": "std2021",
            "content": "Option A",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 754931,
            "date": "Sat 24 Dec 2022 15:21",
            "username": "tucobbad",
            "content": "Option A because context is TLS was disabled to perform benchmark testing so a new parameter group different from the default was created. As the default is to have TLS enabled, it will not be possible to connect to a new restored database with default settings so the original, previous custom parameter group should be assigned to it.",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 752628,
            "date": "Wed 21 Dec 2022 19:10",
            "username": "lollyj",
            "content": "Can someone explain why C isn't the answer? I understand why option A could be an answer but why not C?",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 595231,
            "date": "Sat 30 Apr 2022 21:25",
            "username": "novice_expert",
            "content": "A.  Change the restored cluster's parameter group to the original cluster's custom parameter group.<br><br>Trick question: You can't modify the parameter settings of the default parameter groups.<br>You can use a DB parameter group to act as a container for engine configuration values that are applied to one or more DB instances.",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: A"
          },
          {
            "id": 439658,
            "date": "Fri 29 Oct 2021 12:49",
            "username": "guru_ji",
            "content": "Correct Answer: A",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 414451,
            "date": "Fri 22 Oct 2021 23:43",
            "username": "gelsm",
            "content": "A<br>Trick question: You can't modify the parameter settings of the default parameter groups.<br>You can use a DB parameter group to act as a container for engine configuration values that are applied to one or more DB instances.<br><br>If you create a DB instance without specifying a DB parameter group, the DB instance uses a default DB parameter group. Each default DB parameter group contains database engine defaults and Amazon RDS system defaults. You can't modify the parameter settings of a default parameter group. Instead, you create your own parameter group where you choose your own parameter settings. Not all DB engine parameters can be changed in a parameter group that you create.",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 379414,
            "date": "Wed 20 Oct 2021 11:53",
            "username": "Suresh108",
            "content": "AAAA is looking good",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358983,
            "date": "Sat 16 Oct 2021 18:07",
            "username": "Aesthet",
            "content": "A final answer",
            "upvote_count": "2",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#98",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company runs a customer relationship management (CRM) system that is hosted on-premises with a MySQL database as the backend. A custom stored procedure is used to send email notifications to another system when data is inserted into a table. The company has noticed that the performance of the CRM system has decreased due to database reporting applications used by various teams. The company requires an AWS solution that would reduce maintenance, improve performance, and accommodate the email notification feature.<br>Which AWS solution meets these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: D</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#98",
            "answers": [
              {
                "choice": "<p>A. Use MySQL running on an Amazon EC2 instance with Auto Scaling to accommodate the reporting applications. Configure a stored procedure and an AWS Lambda function that uses Amazon SES to send email notifications to the other system.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Use Amazon Aurora MySQL in a multi-master cluster to accommodate the reporting applications. Configure Amazon RDS event subscriptions to publish a message to an Amazon SNS topic and subscribe the other system's email address to the topic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Use MySQL running on an Amazon EC2 instance with a read replica to accommodate the reporting applications. Configure Amazon SES integration to send email notifications to the other system.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Use Amazon Aurora MySQL with a read replica for the reporting applications. Configure a stored procedure and an AWS Lambda function to publish a message to an Amazon SNS topic. Subscribe the other system's email address to the topic.<br></p>",
                "correct": true,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 98 discussion",
        "discusstion": [
          {
            "id": 328668,
            "date": "Fri 24 Sep 2021 11:32",
            "username": "shantest1manan728",
            "content": "D.  Answer<br><br>Reduce maintenance, hosting database on EC2 increases maintenance.Did you take the real test @shantest1? Are the questions here valid if you know by any chance.",
            "upvote_count": "61",
            "selected_answers": ""
          },
          {
            "id": 342301,
            "date": "Thu 07 Oct 2021 13:26",
            "username": "manan728",
            "content": "Did you take the real test @shantest1? Are the questions here valid if you know by any chance.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 594116,
            "date": "Fri 29 Apr 2022 02:13",
            "username": "novice_expert",
            "content": "reporting > read replica",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 562572,
            "date": "Mon 07 Mar 2022 12:36",
            "username": "RotterDam",
            "content": "Got this question in my exam. (i cleared it). D is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 498831,
            "date": "Fri 10 Dec 2021 17:32",
            "username": "GMartinelli",
            "content": "Option D",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: D"
          },
          {
            "id": 439666,
            "date": "Sun 07 Nov 2021 03:01",
            "username": "guru_ji",
            "content": "Correct Answer: D",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 379423,
            "date": "Sat 06 Nov 2021 17:28",
            "username": "Suresh108",
            "content": "DDDDDDDDD is my choice",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358984,
            "date": "Wed 27 Oct 2021 07:14",
            "username": "Aesthet",
            "content": "D final answer",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 356402,
            "date": "Thu 07 Oct 2021 21:54",
            "username": "ZhongkaiZhongkai",
            "content": "RDS event subscriptions do not cover \\\"data is inserted into a table\\\" - see https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html<br>We can use stored procedure to invoke Lambda function - https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Lambda.html<br>So I will go with BTypo. I mean D",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 356404,
            "date": "Sun 10 Oct 2021 17:35",
            "username": "Zhongkai",
            "content": "Typo. I mean D",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#99",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company needs to migrate Oracle Database Standard Edition running on an Amazon EC2 instance to an Amazon RDS for Oracle DB instance with Multi-AZ.<br>The database supports an ecommerce website that runs continuously. The company can only provide a maintenance window of up to 5 minutes.<br>Which solution will meet these requirements?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: C</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#99",
            "answers": [
              {
                "choice": "<p>A. Configure Oracle Real Application Clusters (RAC) on the EC2 instance and the RDS DB instance. Update the connection string to point to the RAC cluster. Once the EC2 instance and RDS DB instance are in sync, fail over from Amazon EC2 to Amazon RDS.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Export the Oracle database from the EC2 instance using Oracle Data Pump and perform an import into Amazon RDS. Stop the application for the entire process. When the import is complete, change the database connection string and then restart the application.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>C. Configure AWS DMS with the EC2 instance as the source and the RDS DB instance as the destination. Stop the application when the replication is in sync, change the database connection string, and then restart the application.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>D. Configure AWS DataSync with the EC2 instance as the source and the RDS DB instance as the destination. Stop the application when the replication is in sync, change the database connection string, and then restart the application.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 99 discussion",
        "discusstion": [
          {
            "id": 342303,
            "date": "Tue 05 Oct 2021 14:01",
            "username": "manan728",
            "content": "C is most plausible option even though it does not mention change data capture or CDC.  Rest of the steps seem legit in option C.  No other given alternative would ideally meet the 5 min downtime requirement.",
            "upvote_count": "12",
            "selected_answers": ""
          },
          {
            "id": 752635,
            "date": "Wed 21 Dec 2022 19:27",
            "username": "lollyj",
            "content": "C is the most plausible",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 594599,
            "date": "Fri 29 Apr 2022 18:40",
            "username": "novice_expert",
            "content": "x B.  export import would take long timeC.  EC2 -> DMS -> new RDS -> Stop when in sync.<br>Change db connections",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 562556,
            "date": "Mon 07 Mar 2022 12:08",
            "username": "RotterDam",
            "content": "this question came up in my exam. I chose (C).I passed the exam -also fairly certain this is the right answer. (I'll add this in as many questions as possible)",
            "upvote_count": "4",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 555486,
            "date": "Thu 24 Feb 2022 19:36",
            "username": "tugboat",
            "content": "C as DMS enables fastest failover",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 554949,
            "date": "Thu 24 Feb 2022 00:42",
            "username": "kped21",
            "content": "C: Correct<br>B - Invalid as the exp/imp can take long time and there is only 5 min downtime",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 510167,
            "date": "Mon 27 Dec 2021 10:01",
            "username": "Shunpin",
            "content": "Ans:C<br>Oracle SE only support single thread export/import. Not possible to finish within 5 minutes.",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 486228,
            "date": "Wed 24 Nov 2021 21:10",
            "username": "jove",
            "content": "C is correct",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 476906,
            "date": "Fri 12 Nov 2021 13:07",
            "username": "toppic26",
            "content": "AWS Question with DMS, solution is Oracle tool, are you serious? Answer is C",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 449001,
            "date": "Tue 02 Nov 2021 17:29",
            "username": "Scunningham99",
            "content": "CCCCCC -- B is a big no even for a small database would take more than 5 mins.Stopping the application for the entire process etc",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 439668,
            "date": "Tue 02 Nov 2021 06:08",
            "username": "guru_ji",
            "content": "Correct Answer: C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 379425,
            "date": "Thu 28 Oct 2021 08:34",
            "username": "Suresh108",
            "content": "only possible choices B and C. <br><br>B is wrong -- datapump import method takes longer time to migrate. it can't be done in 5 minutes - forget about it.<br><br>My choice is C. ",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 358985,
            "date": "Wed 20 Oct 2021 13:58",
            "username": "Aesthet",
            "content": "C final answer",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 341785,
            "date": "Tue 28 Sep 2021 10:33",
            "username": "anandkl80Huy",
            "content": "Answer B: acle Data Pump technology enables very high-speed movement of data and metadata from one database to another. Oracle Data Pump is available only on Oracle Database 10g release 1 (10.1) and later. ... Moving Data Between Different Database Versions. Original Export and Import Versus Data Pump Export and Import.Option B could be correct if it didn't mention 'Stop the application for the entire process'",
            "upvote_count": "13",
            "selected_answers": ""
          },
          {
            "id": 360378,
            "date": "Sun 24 Oct 2021 23:45",
            "username": "Huy",
            "content": "Option B could be correct if it didn't mention 'Stop the application for the entire process'",
            "upvote_count": "3",
            "selected_answers": ""
          },
          {
            "id": 337336,
            "date": "Tue 28 Sep 2021 01:35",
            "username": "sellu",
            "content": "Option C is correct.<br>Option B is incorrect as it says application needs to be stopped till entire migration got completed",
            "upvote_count": "4",
            "selected_answers": ""
          },
          {
            "id": 326649,
            "date": "Thu 23 Sep 2021 20:10",
            "username": "shantest1shantest1",
            "content": "B looks correct<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Oracle.Procedural.Importing.html<br><br>oracle datapump5 minutes downtime only ... hmmm...<br>C?",
            "upvote_count": "11",
            "selected_answers": ""
          },
          {
            "id": 326653,
            "date": "Fri 24 Sep 2021 17:43",
            "username": "shantest1",
            "content": "5 minutes downtime only ... hmmm...<br>C?",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 326092,
            "date": "Sun 19 Sep 2021 22:45",
            "username": "std2021",
            "content": "Option C",
            "upvote_count": "4",
            "selected_answers": ""
          }
        ]
      },
      {
        "question_id": "#100",
        "topic_id": 1,
        "course_id": 1,
        "case_study_id": null,
        "lab_id": 0,
        "question_text": "<p>A company is using Amazon Aurora PostgreSQL for the backend of its application. The system users are complaining that the responses are slow. A database specialist has determined that the queries to Aurora take longer during peak times. With the Amazon RDS Performance Insights dashboard, the load in the chart for average active sessions is often above the line that denotes maximum CPU usage and the wait state shows that most wait events are IO:XactSync.<br>What should the company do to resolve these performance issues?<br></p>",
        "mark": 1,
        "is_partially_correct": false,
        "question_type": "1",
        "difficulty_level": "0",
        "general_feedback": "<p>Correct Answer: B</p>",
        "is_active": true,
        "answer_list": [
          {
            "question_answer_id": 1,
            "question_id": "#100",
            "answers": [
              {
                "choice": "<p>A. Add an Aurora Replica to scale the read traffic.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>B. Scale up the DB instance class.<br></p>",
                "correct": true,
                "feedback": ""
              },
              {
                "choice": "<p>C. Modify applications to commit transactions in batches.<br></p>",
                "correct": false,
                "feedback": ""
              },
              {
                "choice": "<p>D. Modify applications to avoid conflicts by taking locks.<br></p>",
                "correct": false,
                "feedback": ""
              }
            ]
          }
        ],
        "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 100 discussion",
        "discusstion": [
          {
            "id": 360390,
            "date": "Tue 19 Oct 2021 09:15",
            "username": "Huy",
            "content": "C is answer. https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Reference.html. Check frank's link.",
            "upvote_count": "10",
            "selected_answers": ""
          },
          {
            "id": 345768,
            "date": "Wed 06 Oct 2021 20:20",
            "username": "frankzeng",
            "content": "C<br>https://blog.dbi-services.com/aws-aurora-xactsync-batch-commit/",
            "upvote_count": "9",
            "selected_answers": ""
          },
          {
            "id": 754941,
            "date": "Sat 24 Dec 2022 15:38",
            "username": "tucobbad",
            "content": "(with typos fixed)<br>My answer is B.  Despite we know that CPU is related to it as well as COMMIT frequency is high, tell me honestly what would be the fastest/easiest approach here to resolve the issue? Scale up the instance (B) or Modify an application to commit in batches (C).<br>Second, this post by Franck Pachot has plenty info which basically leds to CPU issue: https://www.dbi-services.com/blog/aws-aurora-xactsync-batch-commit/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 754938,
            "date": "Sat 24 Dec 2022 15:36",
            "username": "tucobbad",
            "content": "My answer is B.  Despite we know that CPU is related to it as well as COMMIT frequency is high, tell me honestly what would be the fastest/easiest approach here to resolve the issue? Scale up the instance (B) or Modify an application to commit in batches (C).<br>Second, this post by Frank Pachot has planty info which basically leds to CPU issue: https://www.dbi-services.com/blog/aws-aurora-xactsync-batch-commit/",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 712654,
            "date": "Sun 06 Nov 2022 22:18",
            "username": "bikash7758",
            "content": "C IS CORRECT",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 705048,
            "date": "Thu 27 Oct 2022 00:27",
            "username": "rags1482",
            "content": "Answer : C",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 700094,
            "date": "Thu 20 Oct 2022 17:52",
            "username": "awsjjj",
            "content": "that will resolve the issue",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 696678,
            "date": "Mon 17 Oct 2022 02:30",
            "username": "awsjjj",
            "content": "CPU is the core issue. B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 676519,
            "date": "Thu 22 Sep 2022 21:32",
            "username": "venimus_vidimus_vicimus",
            "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/apg-waits.xactsync.html<br>Answer is clearly B",
            "upvote_count": "1",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 634784,
            "date": "Thu 21 Jul 2022 21:57",
            "username": "bigticket",
            "content": "B<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/apg-waits.xactsync.html",
            "upvote_count": "2",
            "selected_answers": ""
          },
          {
            "id": 626711,
            "date": "Sun 03 Jul 2022 21:21",
            "username": "elf78Jiang_aws1",
            "content": "While both B&C can be the solutions according to the links that shared in comments, but batch commit only solves the XactSync issue, while upscaling the instance will address both, including the poor performance on load time and high cpu usage. I go with B. High CPU due to IO from often commit base events logs. so \\\"C\\\" is correct.",
            "upvote_count": "21",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 688838,
            "date": "Fri 07 Oct 2022 19:15",
            "username": "Jiang_aws1",
            "content": "High CPU due to IO from often commit base events logs. so \\\"C\\\" is correct.",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 609805,
            "date": "Tue 31 May 2022 18:12",
            "username": "Dantas",
            "content": "\\\"The load on the chart for average active sessions is often more than the line denoting maximum CPU use\\\", so B. <br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/apg-waits.xactsync.html",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 595108,
            "date": "Sat 30 Apr 2022 17:11",
            "username": "novice_expert",
            "content": "XactSync is caused by too many commits<br>solution is commit in batches",
            "upvote_count": "2",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 557641,
            "date": "Sun 27 Feb 2022 22:36",
            "username": "user0001",
            "content": "i vote for B , since it is an ongoing issue CPU<br>C is good if it is during peak hours only",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 555742,
            "date": "Fri 25 Feb 2022 05:00",
            "username": "tugboat",
            "content": "batch mode will fix it",
            "upvote_count": "3",
            "selected_answers": "Selected Answer: C"
          },
          {
            "id": 540465,
            "date": "Fri 04 Feb 2022 15:13",
            "username": "jeyp12",
            "content": "Answer is B.  CPU issue needs resolving first as that is the core issue",
            "upvote_count": "1",
            "selected_answers": ""
          },
          {
            "id": 529518,
            "date": "Sat 22 Jan 2022 02:35",
            "username": "ShinytopologyJiang_aws1",
            "content": "B.  Active sessions are using up CPU. C is not correct, INSERT is not mentioned unlike the question in earlier page. Don't just match keyword.<br>\\\"The load on the chart for average active sessions is often more than the line denoting maximum CPU use\\\" ItHigh CPU from active sessions but wait events show IO:XactSync so active sessions wait for IO:XacSync: commit in batch is first thing to try to fix issue.",
            "upvote_count": "41",
            "selected_answers": "Selected Answer: B"
          },
          {
            "id": 688841,
            "date": "Fri 07 Oct 2022 19:21",
            "username": "Jiang_aws1",
            "content": "High CPU from active sessions but wait events show IO:XactSync so active sessions wait for IO:XacSync: commit in batch is first thing to try to fix issue.",
            "upvote_count": "1",
            "selected_answers": ""
          }
        ]
      }
    ]
}