var SAA_C03_Exam_601_700 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#601",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its critical database on an Amazon RDS for PostgreSQL DB instance. The company wants to migrate to Amazon Aurora PostgreSQL with minimal downtime and data loss.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#601",
          "answers": [
            {
              "choice": "<p>Create a DB snapshot of the RDS for PostgreSQL DB instance to populate a new Aurora PostgreSQL DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Aurora read replica of the RDS for PostgreSQL DB instance. Promote the Aurora read replicate to a new Aurora PostgreSQL DB cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use data import from Amazon S3 to migrate the database to an Aurora PostgreSQL DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the pg_dump utility to back up the RDS for PostgreSQL database. Restore the backup to a new Aurora PostgreSQL DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 601 discussion",
      "discusstion": [
        {
          "id": 1015247,
          "date": "Sat 23 Sep 2023 21:03",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>Aurora read replicas allow setting up replication from RDS PostgreSQL to Aurora PostgreSQL with minimal downtime.<br>Once replication is set up, the read replica can be promoted to a full standalone Aurora DB cluster with little to no downtime.<br>This approach leverages AWS's managed replication between the source RDS PostgreSQL instance and Aurora. It avoids having to manually create backups and restore data.<br>Using DB snapshots or pg_dump backups requires manually restoring data which increases downtime and operational overhead.<br>Data import from S3 would require exporting, uploading and then importing data which adds overhead.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>can share the link? thanks</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1316741,
          "date": "Sat 23 Nov 2024 18:02",
          "username": "JA2018",
          "content": "can share the link? thanks",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1015503,
          "date": "Sun 24 Sep 2023 07:43",
          "username": "Sugarbear_01",
          "content": "Answer [B]<br><br>There are five options for migrating data from your existing Amazon RDS for PostgreSQL database to an Amazon Aurora PostgreSQL-Compatible DB cluster.<br>1-Using a snapshot<br>2-Using an Aurora read replica<br>3-Using a pg_dump utility<br>4-Using logical replication<br>5-Using a data import from Amazon S3<br><br>(2-Using an Aurora read replica)<br> The Aurora read replica option minimizes downtime during a migration. Which is what the question demand so answer B; is the correct ;<br>https://repost.aws/knowledge-center/aurora-postgresql-migrate-from-rds<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Using ( 4 - using logical replication) RDS for PostgreSQL and Aurora PostgreSQL instance to migrate data off minimal downtime. But is not part of the option in the answer. Which makes answer B the best solution.</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1015509,
          "date": "Sun 24 Sep 2023 07:52",
          "username": "Sugarbear_01",
          "content": "Using ( 4 - using logical replication) RDS for PostgreSQL and Aurora PostgreSQL instance to migrate data off minimal downtime. But is not part of the option in the answer. Which makes answer B the best solution.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1126764,
          "date": "Fri 19 Jan 2024 16:08",
          "username": "Firdous586",
          "content": "B is correct as the question says least down time and data loss",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1120593,
          "date": "Fri 12 Jan 2024 09:57",
          "username": "awsgeek75",
          "content": "\\\"Use an RDS for PostgreSQL DB instance as the basis for a new Aurora PostgreSQL DB cluster by using an Aurora read replica. The Aurora read replica is available for migrating only within the same AWS Region and account. The Aurora read replica option minimizes downtime during a migration. You can promote the new cluster when you have zero (0) replication lag between the primary RDS instance and the Aurora read replica.\\\"<br>https://repost.aws/knowledge-center/aurora-postgresql-migrate-from-rds",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111769,
          "date": "Tue 02 Jan 2024 11:08",
          "username": "pentium75",
          "content": "Not A: Would work but have some (though minor) downtime<br>B: \\\"The Aurora read replica option minimizes downtime during a migration\\\"<br>Not C: \\\"If your data is stored using Amazon Simple Storage Service (Amazon S3)\\\" ... in this case it is not<br>Not D: \\\"If ... you don't have downtime considerations, you can use this option\\\"<br>https://repost.aws/knowledge-center/aurora-postgresql-migrate-from-rds",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1101425,
          "date": "Wed 20 Dec 2023 11:09",
          "username": "Cyberkayu",
          "content": "ACD will have delta changes issue. Which means, RDS snapshot/export at 2pm, upload/import the table into Aurora, configure and populated completed by 6pm. This created a 4-hour gap of delta changes",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1095542,
          "date": "Wed 13 Dec 2023 15:38",
          "username": "aws94",
          "content": "please focus, we have RDS not Aurora, I don't know how you vote to create an Aurora read replica to migrate an RDS to Aurora.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I thought that too but B is correct: https://repost.aws/knowledge-center/aurora-postgresql-migrate-from-rds</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111766,
          "date": "Tue 02 Jan 2024 11:06",
          "username": "pentium75",
          "content": "I thought that too but B is correct: https://repost.aws/knowledge-center/aurora-postgresql-migrate-from-rds",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1081402,
          "date": "Mon 27 Nov 2023 11:30",
          "username": "TariqKipkemei",
          "content": "LEAST operational overheadread replica",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1064283,
          "date": "Mon 06 Nov 2023 22:47",
          "username": "potomac",
          "content": "A,B,C are all valid option.<br>But B: The Aurora read replica option minimizes downtime during a migration.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1050747,
          "date": "Sun 22 Oct 2023 16:26",
          "username": "thanhnv142",
          "content": "B is correct guys. Lets see what we got here:<br>C and D is not correct of course. We have to consider A and B.<br>A: migration using a snapshot: this would, of course, introduce heavy data loss and down time<br>B: migration using read replica: nearly no dataloss and downtime.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1045299,
          "date": "Mon 16 Oct 2023 23:50",
          "username": "RRya",
          "content": "RDS PostgreSQL to Aurora PostgreSQL:<br>- Option 1: DB Snapshots from RDS PostgreSQL restored as PostgreSQL Aurora DB<br>- Option 2: Create an Aurora Read Replica from your RDS PostgreSQL, and when the replication lag is 0, promote it as its own DB cluster (can take time and cost $)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"The Aurora read replica option minimizes downtime during a migration\\\"<br>https://repost.aws/knowledge-center/aurora-postgresql-migrate-from-rds</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111767,
          "date": "Tue 02 Jan 2024 11:06",
          "username": "pentium75",
          "content": "\\\"The Aurora read replica option minimizes downtime during a migration\\\"<br>https://repost.aws/knowledge-center/aurora-postgresql-migrate-from-rds",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1015747,
          "date": "Sun 24 Sep 2023 14:24",
          "username": "Jay2k23",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Migrating.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1014488,
          "date": "Fri 22 Sep 2023 22:27",
          "username": "taustin2",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Migrating.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#602",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's infrastructure consists of hundreds of Amazon EC2 instances that use Amazon Elastic Block Store (Amazon EBS) storage. A solutions architect must ensure that every EC2 instance can be recovered after a disaster.<br><br>What should the solutions architect do to meet this requirement with the LEAST amount of effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#602",
          "answers": [
            {
              "choice": "<p>Take a snapshot of the EBS storage that is attached to each EC2 instance. Create an AWS CloudFormation template to launch new EC2 instances from the EBS storage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Take a snapshot of the EBS storage that is attached to each EC2 instance. Use AWS Elastic Beanstalk to set the environment based on the EC2 template and attach the EBS storage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Backup to set up a backup plan for the entire group of EC2 instances. Use the AWS Backup API or the AWS CLI to speed up the restore process for multiple EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function to take a snapshot of the EBS storage that is attached to each EC2 instance and copy the Amazon Machine Images (AMIs). Create another Lambda function to perform the restores with the copied AMIs and attach the EBS storage.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 602 discussion",
      "discusstion": [
        {
          "id": 1015237,
          "date": "Mon 23 Sep 2024 20:54",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>AWS Backup automates backup of resources like EBS volumes. It allows defining backup policies for groups of resources. This removes the need to manually create backups for each resource.<br>The AWS Backup API and CLI allow programmatic control of backup plans and restores. This enables restoring hundreds of EC2 instances programmatically after a disaster instead of manually.<br>AWS Backup handles cleanup of old backups based on policies to minimize storage costs.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1324442,
          "date": "Tue 10 Dec 2024 09:25",
          "username": "LeonSauveterre",
          "content": "A - Manually managing templates for hundreds of EC2 instances is TOO MUCH WORK.<br>B - Beanstalk is designed for managing application environments, not backups.<br>C - AWS Backup API or CLI simplifies bulk restore operations. YES.<br>D - Never create a lambda function when there's already to tool to do that and you need minimal effort. This is true for almost all the questions in this list.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1081405,
          "date": "Wed 27 Nov 2024 11:32",
          "username": "TariqKipkemei",
          "content": "LEAST amount of effortAWS Backup",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1075160,
          "date": "Wed 20 Nov 2024 06:17",
          "username": "Chiquitabandita",
          "content": "for the question, I would choose C as well, AWS Backup of the EC2, but design, why would anything of importance be on the Ec2 that would need to be restored?Shouldn't any critical or important data be on the EBS volumes in this example or similar location?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>There are actually scenarios where an EC2 instance itself might still need restoration, even when EBS is being used for storage.<br><br>1. Some workloads may have specific configurations or dependencies baked into the EC2 instance itself, like custom softwares and OS-level configs.<br>2. Some applications may be running on EC2 relies on temporary but critical data stored on the instance's root volume.<br>3. Some stateful applications might store temporary state information locally on the EC2 instance. If this state isn't externalized (like DynamoDB, Redis, or EFS), then recovery is needed.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1324446,
          "date": "Tue 10 Dec 2024 09:29",
          "username": "LeonSauveterre",
          "content": "There are actually scenarios where an EC2 instance itself might still need restoration, even when EBS is being used for storage.<br><br>1. Some workloads may have specific configurations or dependencies baked into the EC2 instance itself, like custom softwares and OS-level configs.<br>2. Some applications may be running on EC2 relies on temporary but critical data stored on the instance's root volume.<br>3. Some stateful applications might store temporary state information locally on the EC2 instance. If this state isn't externalized (like DynamoDB, Redis, or EFS), then recovery is needed.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1014495,
          "date": "Sun 22 Sep 2024 22:44",
          "username": "taustin2",
          "content": "Going with Backup. Can restore programmatically using Backup API.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#603",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently migrated to the AWS Cloud. The company wants a serverless solution for large-scale parallel on-demand processing of a semistructured dataset. The data consists of logs, media files, sales transactions, and IoT sensor data that is stored in Amazon S3. The company wants the solution to process thousands of items in the dataset in parallel.<br><br>Which solution will meet these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#603",
          "answers": [
            {
              "choice": "<p>Use the AWS Step Functions Map state in Inline mode to process the data in parallel.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Step Functions Map state in Distributed mode to process the data in parallel.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Glue to process the data in parallel.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use several AWS Lambda functions to process the data in parallel.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 603 discussion",
      "discusstion": [
        {
          "id": 1015233,
          "date": "Sat 23 Sep 2023 20:49",
          "username": "Guru4Cloud",
          "content": "AWS Step Functions allows you to orchestrate and scale distributed processing using the Map state. The Map state can process items in a large dataset in parallel by distributing the work across multiple resources.<br>Using the Map state in Distributed mode will automatically handle the parallel processing and scaling. Step Functions will add more workers to process the data as needed.<br>Step Functions is serverless so there are no servers to manage. It will scale up and down automatically based on demand.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1244613,
          "date": "Tue 09 Jul 2024 01:55",
          "username": "Sandy1254",
          "content": "https://docs.aws.amazon.com/step-functions/latest/dg/use-dist-map-orchestrate-large-scale-parallel-workloads.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1239197,
          "date": "Sat 29 Jun 2024 11:55",
          "username": "bogdannb",
          "content": "Using step functions will be overwill from my point of view. I would use Glue, it's serverless and purposely designed for such use case",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1235670,
          "date": "Sun 23 Jun 2024 03:57",
          "username": "Lin878",
          "content": "Simple - user Lambda / Complex - user Step Functions",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1131152,
          "date": "Wed 24 Jan 2024 22:48",
          "username": "Lx016",
          "content": "A Map in Inline mode can support concurrency of 40 parallel branches and execution history limits of 25,000 events or approximately 6,500 state transitions in a workflow. With the Distributed mode, you can run at concurrency of up to 10,000 parallel branches. So I believe if it has to process thousands of items in parallel Distributed Mode is more appropriate",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1120596,
          "date": "Fri 12 Jan 2024 10:03",
          "username": "awsgeek75",
          "content": "https://aws.amazon.com/blogs/aws/step-functions-distributed-map-a-serverless-solution-for-large-scale-parallel-data-processing/<br>https://docs.aws.amazon.com/step-functions/latest/dg/sample-dist-map-s3data-process.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1081415,
          "date": "Mon 27 Nov 2023 11:42",
          "username": "TariqKipkemei",
          "content": "The Distributed Map has been optimized for Amazon S3.,helping you more easily iterate over objects in an S3 bucket.With the Distributed mode, you can run at concurrency of up to 10,000 parallel branches.<br><br>https://aws.amazon.com/step-functions/faqs/#:~:textA%20Map%20in%20Inline%20mode,up%20to%2010%2C000%20parallel%20branches.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1016666,
          "date": "Mon 25 Sep 2023 11:30",
          "username": "Sugarbear_01",
          "content": "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-orchestrate-large-scale-parallel-workloads.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1014501,
          "date": "Fri 22 Sep 2023 22:52",
          "username": "taustin2",
          "content": "With Step Functions, you can orchestrate large-scale parallel workloads to perform tasks, such as on-demand processing of semi-structured data. These parallel workloads let you concurrently process large-scale data sources stored in Amazon S3. https://docs.aws.amazon.com/step-functions/latest/dg/concepts-orchestrate-large-scale-parallel-workloads.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>After going through the link I confirmed the answer is B</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1015519,
          "date": "Sun 24 Sep 2023 08:11",
          "username": "Sugarbear_01",
          "content": "After going through the link I confirmed the answer is B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1014491,
          "date": "Fri 22 Sep 2023 22:32",
          "username": "[Removed]",
          "content": "Large Scale + ParallelDistributedStep Function<br><br>https://docs.aws.amazon.com/step-functions/latest/dg/concepts-inline-vs-distributed-map.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#604",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company will migrate 10 PB of data to Amazon S3 in 6 weeks. The current data center has a 500 Mbps uplink to the internet. Other on-premises applications share the uplink. The company can use 80% of the internet bandwidth for this one-time migration task.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#604",
          "answers": [
            {
              "choice": "<p>Configure AWS DataSync to migrate the data to Amazon S3 and to automatically verify the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use rsync to transfer the data directly to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS CLI and multiple copy processes to send the data directly to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Order multiple AWS Snowball devices. Copy the data to the devices. Send the devices to AWS to copy the data to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 604 discussion",
      "discusstion": [
        {
          "id": 1101441,
          "date": "Wed 20 Dec 2023 11:32",
          "username": "Cyberkayu",
          "content": "7 Years, 5 Months, 3 Weeks, 5 Days required to transfer 10PB on 400 Mbps. Finger cross the upload don't drop or timeout on year 7.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>As a data engineer, this comment made both laugh and shudder at the same time -- hits too close to home</li></ul>",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 1268592,
          "date": "Mon 19 Aug 2024 13:03",
          "username": "zits88",
          "content": "As a data engineer, this comment made both laugh and shudder at the same time -- hits too close to home",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1081420,
          "date": "Mon 27 Nov 2023 11:44",
          "username": "TariqKipkemei",
          "content": "PBsnowball",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1162756,
          "date": "Thu 29 Feb 2024 16:20",
          "username": "Ravan",
          "content": "To calculate the total time required in weeks, we can use the result we obtained earlier, which was approximately<br>6.26<br>=C3=97<br>1<br>0<br>10<br>6.26=C3=9710<br>10<br>weeks.<br><br>So, the total time required to transfer 10 PB of data to Amazon S3, given a 500 Mbps uplink, would be approximately<br>6.26<br>=C3=97<br>1<br>0<br>10<br>6.26=C3=9710<br>10<br>weeks. However, this is an extremely large value and not practically feasible.<br><br>It's important to note that the result obtained might not accurately reflect real-world scenarios due to various factors such as network limitations, bandwidth constraints, and other practical considerations. Additionally, this calculation assumes a constant transfer rate and does not consider potential optimizations or parallelization techniques that could be employed to expedite the data transfer process.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1120609,
          "date": "Fri 12 Jan 2024 10:11",
          "username": "awsgeek75",
          "content": "10PB on 80% of 500Mbps (Megabits not Megabytes) will take 6.5 years. But for the sake of exam when you cannot use calculators etc, just use snowball for petabytes of transfer if it is an option!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer is D! not A! Fiddly fingers!</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1120612,
          "date": "Fri 12 Jan 2024 10:12",
          "username": "awsgeek75",
          "content": "Answer is D! not A! Fiddly fingers!",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1057026,
          "date": "Sun 29 Oct 2023 18:27",
          "username": "wsdasdasdqwdaw",
          "content": "D, but even if you do not know, all 3 option (A,B and C) have the same nature ( transfer via bandwidth ) and we know that there is only one correct answer > D.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1047314,
          "date": "Thu 19 Oct 2023 01:08",
          "username": "iwannabeawsgod",
          "content": "snowball for sure",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1024311,
          "date": "Wed 04 Oct 2023 03:04",
          "username": "joshik",
          "content": "1Gbps will roughly do 7 TB in 24 hours. This means 400Mbps will only do 3x42TB.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1018265,
          "date": "Wed 27 Sep 2023 01:38",
          "username": "Xin123",
          "content": "D<br>1Gbps will roughly do 7 TB in 24 hours. This means 400Mbps will only do 3x42TB.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1016669,
          "date": "Mon 25 Sep 2023 11:31",
          "username": "Sugarbear_01",
          "content": "D<br>1Gbps will roughly do 7 TB in 24 hours. This means 400Mbps will only do 3x42TB.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1015372,
          "date": "Sun 24 Sep 2023 01:33",
          "username": "Devsin2000",
          "content": "D<br>1Gbps will roughly do 7 TB in 24 hours. This means 400Mbps will only do 3x42TB.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1015309,
          "date": "Sat 23 Sep 2023 22:09",
          "username": "Guru4Cloud",
          "content": "D. Order multiple AWS Snowball devices. Copy the data to the devices. Send the devices to AWS to copy the data to Amazon S3.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1014505,
          "date": "Fri 22 Sep 2023 22:56",
          "username": "taustin2",
          "content": "10 PBIt's Snowballs.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1014192,
          "date": "Fri 22 Sep 2023 16:12",
          "username": "kambarami",
          "content": "Answer is DDDDD",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#605",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has several on-premises Internet Small Computer Systems Interface (ISCSI) network storage servers. The company wants to reduce the number of these servers by moving to the AWS Cloud. A solutions architect must provide low-latency access to frequently used data and reduce the dependency on on-premises servers with a minimal number of infrastructure changes.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#605",
          "answers": [
            {
              "choice": "<p>Deploy an Amazon S3 File Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon Elastic Block Store (Amazon EBS) storage with backups to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an AWS Storage Gateway volume gateway that is configured with stored volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an AWS Storage Gateway volume gateway that is configured with cached volumes.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 605 discussion",
      "discusstion": [
        {
          "id": 1015307,
          "date": "Sat 23 Mar 2024 23:09",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>The Storage Gateway volume gateway provides iSCSI block storage using cached volumes. This allows replacing the on-premises iSCSI servers with minimal changes.<br>Cached volumes store frequently accessed data locally for low latency access, while storing less frequently accessed data in S3.<br>This reduces the number of on-premises servers while still providing low latency access to hot data.<br>EBS does not provide iSCSI support to replace the existing servers.<br>S3 File Gateway is for file storage, not block storage.<br>Stored volumes would store all data on-premises, not in S3.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1120619,
          "date": "Fri 12 Jul 2024 09:16",
          "username": "awsgeek75",
          "content": "Low latencyalways look for cache or local storage.<br>A: Doesn't address low latency<br>B: Don't think this is possible<br>CD are both low latency but D is better:<br>https://aws.amazon.com/storagegateway/faqs/#:~:textIn%20the%20cached%20mode%2C%20your,asynchronously%20backed%20up%20to%20AWS.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1081421,
          "date": "Mon 27 May 2024 10:46",
          "username": "TariqKipkemei",
          "content": "low-latency access to frequently used datacached volumes",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1015540,
          "date": "Sun 24 Mar 2024 09:48",
          "username": "Sugarbear_01",
          "content": "Answer D<br><br>Here is the link ;<br>https://docs.aws.amazon.com/storagegateway/latest/vgw/WhatIsStorageGateway.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1014509,
          "date": "Fri 22 Mar 2024 23:58",
          "username": "taustin2",
          "content": "ISCIVolume Gateway.<br>low-latency access to frequently used datacached volumes",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1014493,
          "date": "Fri 22 Mar 2024 23:40",
          "username": "[Removed]",
          "content": "\\\"low-latency access to FREQUENTLY used data\\\"Cached AWS Storage Gateway volumes",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1013995,
          "date": "Fri 22 Mar 2024 13:55",
          "username": "nnecode",
          "content": "An AWS Storage Gateway volume gateway is a hybrid storage solution that connects your on-premises applications to your cloud storage. It provides low-latency access to frequently used data while storing your entire dataset in the cloud.<br><br>When you configure an AWS Storage Gateway volume gateway with cached volumes, the gateway stores a copy of frequently accessed data locally. This allows you to provide low-latency access to your frequently accessed data while reducing your dependency on on-premises servers.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#606",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing an application that will allow business users to upload objects to Amazon S3. The solution needs to maximize object durability. Objects also must be readily available at any time and for any length of time. Users will access objects frequently within the first 30 days after the objects are uploaded, but users are much less likely to access objects that are older than 30 days.<br><br>Which solution meets these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#606",
          "answers": [
            {
              "choice": "<p>Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 Glacier after 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store all the objects in S3 Intelligent-Tiering with an S3 Lifecycle rule to transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 606 discussion",
      "discusstion": [
        {
          "id": 1016150,
          "date": "Sun 24 Sep 2023 22:08",
          "username": "Sugarbear_01",
          "content": "Minimum Days for Transition to S3 Standard-IA or S3 One Zone-IA<br><br>Before you transition objects to S3 Standard-IA or S3 One Zone-IA, you must store them for at least 30 days in Amazon S3. For example, you cannot create a Lifecycle rule to transition objects to the S3 Standard-IA storage class one day after you create them. Amazon S3 doesn't support this transition within the first 30 days because newer objects are often accessed more frequently or deleted sooner than is suitable for S3 Standard-IA or S3 One Zone-IA storage.<br><br>Similarly, if you are transitioning noncurrent objects (in versioned buckets), you can transition only objects that are at least 30 days noncurrent to S3 Standard-IA or S3 One Zone-IA storage.https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1257484,
          "date": "Mon 29 Jul 2024 14:51",
          "username": "abriggy",
          "content": "Answer is B.<br><br>C is wrong because one-zone doesn't maximize durability, it compromises it.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, both Standard-IA and OZ-IA have SAME durability. What differs it the availability.<br><br>Durability is calculated based on how many times the data is copied and made redundant, inherently by the service itself. But that redundancy can be across one building (AZ) or multiple availability zones.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1284866,
          "date": "Mon 16 Sep 2024 18:45",
          "username": "MatAlves",
          "content": "No, both Standard-IA and OZ-IA have SAME durability. What differs it the availability.<br><br>Durability is calculated based on how many times the data is copied and made redundant, inherently by the service itself. But that redundancy can be across one building (AZ) or multiple availability zones.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1176155,
          "date": "Mon 18 Mar 2024 02:09",
          "username": "TheLaPlanta",
          "content": "I believe it's C. The following link mentions One Zone-IA offers 99.999999999% durability. Questions says nothing about HA",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1087285,
          "date": "Mon 04 Dec 2023 03:36",
          "username": "SHAAHIBHUSHANAWS",
          "content": "B<br>Intelligent tiering will automatically transition toS3 One Zone-IA which is not needed for durability.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1082241,
          "date": "Tue 28 Nov 2023 08:04",
          "username": "TariqKipkemei",
          "content": "'Objects also must be readily available at any time and for any length of time'=E2=80=A6definitely option B.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1064292,
          "date": "Mon 06 Nov 2023 22:56",
          "username": "potomac",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1050770,
          "date": "Sun 22 Oct 2023 16:55",
          "username": "thanhnv142",
          "content": "B is correct<br>C is not correct because data must be durable. C is only for data that can be regenerated.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1018335,
          "date": "Wed 27 Sep 2023 03:29",
          "username": "Xin123",
          "content": "Durability. Available any time for any duration > B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1015375,
          "date": "Sun 24 Sep 2023 01:42",
          "username": "Devsin2000",
          "content": "A<br>S3 Glacier is most cost effective<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Between A &amp; B, this is the tie-breaker:<br>\\\"Objects also must be readily available at any time and for any length of time\\\"<br><br>While Glacier IS more cost effective but it won't make the objects readily available at any time for any duration.... this is only possible with IA.</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1120623,
          "date": "Fri 12 Jan 2024 10:21",
          "username": "awsgeek75",
          "content": "Between A & B, this is the tie-breaker:<br>\\\"Objects also must be readily available at any time and for any length of time\\\"<br><br>While Glacier IS more cost effective but it won't make the objects readily available at any time for any duration.... this is only possible with IA.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1014510,
          "date": "Fri 22 Sep 2023 23:02",
          "username": "taustin2",
          "content": "B meets the requirements. No need for intelligent Tiering because of 30 days.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#607",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has migrated a two-tier application from its on-premises data center to the AWS Cloud. The data tier is a Multi-AZ deployment of Amazon RDS for Oracle with 12 TB of General Purpose SSD Amazon Elastic Block Store (Amazon EBS) storage. The application is designed to process and store documents in the database as binary large objects (blobs) with an average document size of 6 MB.<br><br>The database size has grown over time, reducing the performance and increasing the cost of storage. The company must improve the database performance and needs a solution that is highly available and resilient.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#607",
          "answers": [
            {
              "choice": "<p>Reduce the RDS DB instance size. Increase the storage capacity to 24 TiB. Change the storage type to Magnetic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the RDS DB instance size. Increase the storage capacity to 24 TiChange the storage type to Provisioned IOPS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 bucket. Update the application to store documents in the S3 bucket. Store the object metadata in the existing database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon DynamoDB table. Update the application to use DynamoDB. Use AWS Database Migration Service (AWS DMS) to migrate data from the Oracle database to DynamoDB.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 607 discussion",
      "discusstion": [
        {
          "id": 1120629,
          "date": "Fri 12 Jul 2024 09:24",
          "username": "awsgeek75",
          "content": "When using BLOB, always try to pick a solution with S3.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1127038,
          "date": "Sat 20 Jul 2024 03:35",
          "username": "ferdzcruz",
          "content": "process and store documents as objects. S3 is known for object storage.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1082248,
          "date": "Tue 28 May 2024 07:16",
          "username": "TariqKipkemei",
          "content": "MOST cost-effectivelystore the objects in S3, and object metadata in the existing DB.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1015823,
          "date": "Sun 24 Mar 2024 16:26",
          "username": "taustin2",
          "content": "DynamoDB's limit on the size of each record is 400KB, so D is wrong.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1015304,
          "date": "Sat 23 Mar 2024 23:04",
          "username": "Guru4Cloud",
          "content": "C. Create an Amazon S3 bucket. Update the application to store documents in the S3 bucket. Store the object metadata in the existing database.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1014511,
          "date": "Sat 23 Mar 2024 00:04",
          "username": "taustin2",
          "content": "Storing the blobs in the db is more expensive than s3 with references in the db.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#608",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that serves clients that are deployed in more than 20.000 retail storefront locations around the world. The application consists of backend web services that are exposed over HTTPS on port 443. The application is hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The retail locations communicate with the web application over the public internet. The company allows each retail location to register the IP address that the retail location has been allocated by its local ISP.<br><br>The company's security team recommends to increase the security of the application endpoint by restricting access to only the IP addresses registered by the retail locations.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#608",
          "answers": [
            {
              "choice": "<p>Associate an AWS WAF web ACL with the ALB. Use IP rule sets on the ALB to filter traffic. Update the IP addresses in the rule to include the registered IP addresses.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy AWS Firewall Manager to manage the ALConfigure firewall rules to restrict traffic to the ALModify the firewall rules to include the registered IP addresses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the IP addresses in an Amazon DynamoDB table. Configure an AWS Lambda authorization function on the ALB to validate that incoming requests are from the registered IP addresses.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the network ACL on the subnet that contains the public interface of the ALB. Update the ingress rules on the network ACL with entries for each of the registered IP addresses.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 608 discussion",
      "discusstion": [
        {
          "id": 1111802,
          "date": "Tue 02 Jul 2024 11:18",
          "username": "pentium75",
          "content": "WAF, you can have 100 \\\"rule sets\\\" per account, each with up to 10,000 IP addresses.<br><br>https://docs.aws.amazon.com/waf/latest/developerguide/limits.html",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1192747,
          "date": "Thu 10 Oct 2024 08:28",
          "username": "Karls",
          "content": "Selected Answer: C<br>AWS Lambda and DynamoDB to dynamically manage and validate incoming requests based on registered IP addresses.<br>https://docs.aws.amazon.com/lambda/latest/dg/services-alb.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1127039,
          "date": "Sat 20 Jul 2024 03:37",
          "username": "ferdzcruz",
          "content": "web services and HTTPS WAF",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1120662,
          "date": "Fri 12 Jul 2024 09:45",
          "username": "awsgeek75",
          "content": "B: Looks like an incomplete solution for something different<br>C: Not workable as Lambda for IP filtering means you have already allowed the request to pass through<br>D NACL with entries for each registered IP is not possible.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1082251,
          "date": "Tue 28 May 2024 07:21",
          "username": "TariqKipkemei",
          "content": "endpoint restriction by IP addressesAWS WAF",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1043298,
          "date": "Sun 14 Apr 2024 11:21",
          "username": "Passexam4sure_com",
          "content": "Associate an AWS WAF web ACL with the ALB. Use IP rule sets on the ALB to filter traffic. Update the IP addresses in the rule to include the registered IP addresses.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1016676,
          "date": "Mon 25 Mar 2024 12:44",
          "username": "Sugarbear_01",
          "content": "AWS WAF cannot be directly associated with a Web Application. But, can only be associated with Application Load Balancer, CloudFront and API Gateway.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1015837,
          "date": "Sun 24 Mar 2024 16:39",
          "username": "taustin2",
          "content": "Changing answer to C because of \\\"20000\\\" IP addresses. Use Lambda with ALB.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>WAF allows 100 rule sets, each with up to 10,000 IP addresses, per account.</li><li>10,000 IP addresses<br>For the latest version of AWS WAF, see AWS WAF. If you want to allow or block web requests based on the IP addresses that the requests originate from, create one or more IP match conditions. An IP match condition lists up to 10,000 IP addresses or IP address ranges that your requests originate from.</li><li>I will choose this answer if it is API Gateway. But I cannot figure out how to do lambda authentication on ALB. I will go A</li><li>You are right. I don't know of a way to use Lambda with ALB in this way. Answer is A.</li><li>ALB invokes Lambda function, sending the incoming data in JSON format. Lambda function performs task, returns HTTP response to ALB.</li><li>WAF seems still better</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1111804,
          "date": "Tue 02 Jul 2024 11:19",
          "username": "pentium75",
          "content": "WAF allows 100 rule sets, each with up to 10,000 IP addresses, per account.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1064301,
          "date": "Mon 06 May 2024 22:13",
          "username": "potomac",
          "content": "10,000 IP addresses<br>For the latest version of AWS WAF, see AWS WAF. If you want to allow or block web requests based on the IP addresses that the requests originate from, create one or more IP match conditions. An IP match condition lists up to 10,000 IP addresses or IP address ranges that your requests originate from.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1040967,
          "date": "Thu 11 Apr 2024 19:30",
          "username": "bsbs1234",
          "content": "I will choose this answer if it is API Gateway. But I cannot figure out how to do lambda authentication on ALB. I will go A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You are right. I don't know of a way to use Lambda with ALB in this way. Answer is A.</li><li>ALB invokes Lambda function, sending the incoming data in JSON format. Lambda function performs task, returns HTTP response to ALB.</li><li>WAF seems still better</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1042904,
          "date": "Sat 13 Apr 2024 21:06",
          "username": "taustin2",
          "content": "You are right. I don't know of a way to use Lambda with ALB in this way. Answer is A.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ALB invokes Lambda function, sending the incoming data in JSON format. Lambda function performs task, returns HTTP response to ALB.</li><li>WAF seems still better</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1064302,
          "date": "Mon 06 May 2024 22:16",
          "username": "potomac",
          "content": "ALB invokes Lambda function, sending the incoming data in JSON format. Lambda function performs task, returns HTTP response to ALB.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>WAF seems still better</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1064305,
          "date": "Mon 06 May 2024 22:21",
          "username": "potomac",
          "content": "WAF seems still better",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1015301,
          "date": "Sat 23 Mar 2024 22:52",
          "username": "Guru4Cloud",
          "content": "A. Associate an AWS WAF web ACL with the ALB. Use IP rule sets on the ALB to filter traffic. Update the IP addresses in the rule to include the registered IP addresses.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1014514,
          "date": "Sat 23 Mar 2024 00:12",
          "username": "taustin2",
          "content": "WAF meets the requirements.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#609",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a data analysis platform on AWS by using AWS Lake Formation. The platform will ingest data from different sources such as Amazon S3 and Amazon RDS. The company needs a secure solution to prevent access to portions of the data that contain sensitive information.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#609",
          "answers": [
            {
              "choice": "<p>Create an IAM role that includes permissions to access Lake Formation tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create data filters to implement row-level security and cell-level security.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function that removes sensitive information before Lake Formation ingests the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function that periodically queries and removes sensitive information from Lake Formation tables.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 609 discussion",
      "discusstion": [
        {
          "id": 1015298,
          "date": "Sat 23 Sep 2023 21:50",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>Lake Formation data filters allow restricting access to rows or cells in data tables based on conditions. This allows preventing access to sensitive data.<br>Data filters are implemented within Lake Formation and do not require additional coding or Lambda functions.<br>Lambda functions to pre-process data or purge tables would require ongoing development and maintenance.<br>IAM roles only provide user-level permissions, not row or cell level security.<br>Data filters give granular access control over Lake Formation data with minimal configuration, avoiding complex custom code.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/lake-formation/latest/dg/data-filters-about.html</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1120676,
          "date": "Fri 12 Jan 2024 11:00",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/lake-formation/latest/dg/data-filters-about.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1239479,
          "date": "Sun 30 Jun 2024 03:49",
          "username": "emakid",
          "content": "B. Create data filters to implement row-level security and cell-level security.<br>Explanation:<br><br>Row-Level and Cell-Level Security: AWS Lake Formation provides built-in support for row-level and cell-level security. By using data filters, you can define policies that control access to specific rows and cells within your tables. This allows you to restrict access to sensitive information without needing to manually filter or remove data.<br><br>Least Operational Overhead: This solution leverages built-in Lake Formation capabilities, reducing the need for additional infrastructure or custom code. Once the data filters are set up, they automatically enforce the security policies, minimizing ongoing operational overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1231568,
          "date": "Mon 17 Jun 2024 01:15",
          "username": "KennethNg923",
          "content": "As it said 'prevent access to portions of the data that contain sensitive information' , not the access to S3, so data filter is enough",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1208026,
          "date": "Tue 07 May 2024 23:03",
          "username": "wizcloudifa",
          "content": "Focus on the exact wordings: \\\"to prevent access to portions of the data that contain sensitive information.\\\"<br>Only option B restricts the platform to access sensitive data, option A restrict users to restrict access that doesn't serve the req here, C and D are talking about removing the sensitive data which is not the ask here",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1127040,
          "date": "Sat 20 Jan 2024 04:38",
          "username": "ferdzcruz",
          "content": "portions of the data that contain sensitive informationFiltered data.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1120675,
          "date": "Fri 12 Jan 2024 10:58",
          "username": "awsgeek75",
          "content": "A is possible but it does not secure the data properly and only provides table level access control (if any).<br>CD are too much overhead<br>B is exactly for this purpose and is a built-in feature of Lake formation",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1064309,
          "date": "Mon 06 Nov 2023 23:30",
          "username": "potomac",
          "content": "https://docs.aws.amazon.com/lake-formation/latest/dg/data-filters-about.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1014516,
          "date": "Fri 22 Sep 2023 23:15",
          "username": "taustin2",
          "content": "You can create data filters based on the values of columns in a Lake Formation table. Easy. Lowest operational overhead.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1013914,
          "date": "Fri 22 Sep 2023 11:33",
          "username": "nnecode",
          "content": "The best solution to meet the requirements with the least operational overhead is to create data filters to implement row-level security and cell-level security.<br><br>Data filters are a feature of Lake Formation that allow you to restrict access to data based on row and column values. This can be used to implement row-level security and cell-level security.<br><br>To implement row-level security, you would create a data filter that only allows users to access rows where the values in certain columns meet certain criteria. For example, you could create a data filter that only allows users to access rows where the value in the customer_id column matches the user's own customer ID.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#610",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company deploys Amazon EC2 instances that run in a VPC. The EC2 instances load source data into Amazon S3 buckets so that the data can be processed in the future. According to compliance laws, the data must not be transmitted over the public internet. Servers in the company's on-premises data center will consume the output from an application that runs on the EC2 instances.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#610",
          "answers": [
            {
              "choice": "<p>Deploy an interface VPC endpoint for Amazon EC2. Create an AWS Site-to-Site VPN connection between the company and the VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a gateway VPC endpoint for Amazon S3. Set up an AWS Direct Connect connection between the on-premises network and the VPC.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an AWS Transit Gateway connection from the VPC to the S3 buckets. Create an AWS Site-to-Site VPN connection between the company and the VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up proxy EC2 instances that have routes to NAT gateways. Configure the proxy EC2 instances to fetch S3 data and feed the application instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 610 discussion",
      "discusstion": [
        {
          "id": 1014517,
          "date": "Fri 22 Sep 2023 23:19",
          "username": "taustin2",
          "content": "Gateway VPC Endpointno internet to access S3. Direct Connectsecure access to VPC.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1015295,
          "date": "Sat 23 Sep 2023 21:48",
          "username": "Guru4Cloud",
          "content": "Gateway VPC Endpointno internet to access S3. Direct Connectsecure access to VPC<br>I agree with you @taustin2- Happy Learning all",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1284871,
          "date": "Mon 16 Sep 2024 19:02",
          "username": "MatAlves",
          "content": "Deploy a gateway VPC endpoint for Amazon S3so traffic between EC2 and S3 doesn't live AWS private network.<br><br>Set up an AWS Direct Connect connection between the on-premises network and the VPCservers on-premises can consume the output from ec2 instances via private connection.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1120683,
          "date": "Fri 12 Jan 2024 11:05",
          "username": "awsgeek75",
          "content": "No public internet ! encrypted public internet (VPN)<br>Direct connect is the only option.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1114912,
          "date": "Sat 06 Jan 2024 03:55",
          "username": "OSHOAIB",
          "content": "A gateway VPC endpoint for Amazon S3 allows the EC2 instances within the VPC to access Amazon S3 buckets without using the public internet. The traffic between the VPC and S3 is routed within the AWS network.<br>AWS Direct Connect establishes a private connection between the on-premises data center and AWS infrastructure, avoiding data transfer over the public internet and ensuring compliance with the specified requirements. It provides a dedicated network link with higher bandwidth options and potentially more consistent network performance than internet-based connections.<br>Whereas Option A uses Site-to-Site VPN connection which is secure. However it typically runs over the public internet, which would not meet the company's requirement of avoiding public internet data transit.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111814,
          "date": "Tue 02 Jan 2024 12:32",
          "username": "pentium75",
          "content": "I think the last sentence(\\\"Servers in the company's on-premises data center will consume the output from an application that runs on the EC2 instances\\\") refers to a different application. Purely from the wording, it does NOT seem to refer to the data 'loaded into S3 buckets so that it can be processed in the future' before. So the EC2 instances could write to S3, the on-premises servers can talk to the EC2 application, and data would not be transmitted over the public internet.<br><br>Not A: There's no such thing as a \\\"VPC endpoint for Amazon EC2 (!)\\\"<br>Not C: Transit Gateway is not for EC2->S3, VPN is over public internet<br>Not D: Would address only the first part and use public Internet<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Interface endpoint is a thing, the only reason A is not true is because of the presence of site-to-site vpn which is essentially accessing public internet</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1208035,
          "date": "Tue 07 May 2024 23:17",
          "username": "wizcloudifa",
          "content": "Interface endpoint is a thing, the only reason A is not true is because of the presence of site-to-site vpn which is essentially accessing public internet",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1107885,
          "date": "Thu 28 Dec 2023 16:04",
          "username": "ale_brd_111",
          "content": "I would go for A, for two reasons:<br>1) \\\"S3 gateway endpoints do not currently support access from resources in a different Region, different VPC, or from an on-premises (non-AWS) environment.<br>2) we tryna access an output from an application hosted in e2 instances and not to access the s3 stored data so ideally we should use Interface Endpoints for the applications running in ec2.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You forgot the traffic from EC2 to S3. Without the Gateway Endpoint, that would go via public internet.<br><br>1. Deploy a gateway VPC endpoint for Amazon S3so traffic between EC2 and S3 doesn't live AWS private network.<br><br>2. Set up an AWS Direct Connect connection between the on-premises network and the VPCservers on-premises can consume the output from ec2 instances via private connection.</li><li>Plus, in A you deploy a VPC endpoint \\\"for EC2\\\" (!) which doesn't exist</li><li>exists, check the docs, interface VPS endpoint ! gateway VPC endpoint, they have different range of services</li><li>\\\"Data must not be transmitted over the public internet\\\", as it would with A (VPN).</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1284872,
          "date": "Mon 16 Sep 2024 19:04",
          "username": "MatAlves",
          "content": "You forgot the traffic from EC2 to S3. Without the Gateway Endpoint, that would go via public internet.<br><br>1. Deploy a gateway VPC endpoint for Amazon S3so traffic between EC2 and S3 doesn't live AWS private network.<br><br>2. Set up an AWS Direct Connect connection between the on-premises network and the VPCservers on-premises can consume the output from ec2 instances via private connection.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111815,
          "date": "Tue 02 Jan 2024 12:33",
          "username": "pentium75",
          "content": "Plus, in A you deploy a VPC endpoint \\\"for EC2\\\" (!) which doesn't exist<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>exists, check the docs, interface VPS endpoint ! gateway VPC endpoint, they have different range of services</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1282273,
          "date": "Wed 11 Sep 2024 19:56",
          "username": "elmyth",
          "content": "exists, check the docs, interface VPS endpoint ! gateway VPC endpoint, they have different range of services",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111808,
          "date": "Tue 02 Jan 2024 12:24",
          "username": "pentium75",
          "content": "\\\"Data must not be transmitted over the public internet\\\", as it would with A (VPN).",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1103108,
          "date": "Fri 22 Dec 2023 04:15",
          "username": "ftaws",
          "content": "I standhood answer is B, but why not A?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>there's no such things a 'VPC endpoint for EC2', and it uses public Internet</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1111819,
          "date": "Tue 02 Jan 2024 12:38",
          "username": "pentium75",
          "content": "there's no such things a 'VPC endpoint for EC2', and it uses public Internet",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1084573,
          "date": "Thu 30 Nov 2023 18:00",
          "username": "achechen",
          "content": "https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/ According to this document, \\\" S3 gateway endpoints do not currently support access from resources in a different Region, different VPC, or from an on-premises (non-AWS) environment. However, if you're willing to manage a complex custom architecture, you can use proxies. In all those scenarios, where access is from resources external to VPC, S3 interface endpoints access S3 in a secure way.\\\" so, the answer is A.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A uses a VPC endpoint \\\"for Amazon EC2\\\", not S3. Also it uses public Internet.</li><li>interface VPC endpoint works with PrivateLink, so it can be connected to huge amount of services, and to EC2. Gateway VPC endpoint can't work for on-prem</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111816,
          "date": "Tue 02 Jan 2024 12:33",
          "username": "pentium75",
          "content": "A uses a VPC endpoint \\\"for Amazon EC2\\\", not S3. Also it uses public Internet.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>interface VPC endpoint works with PrivateLink, so it can be connected to huge amount of services, and to EC2. Gateway VPC endpoint can't work for on-prem</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1282272,
          "date": "Wed 11 Sep 2024 19:53",
          "username": "elmyth",
          "content": "interface VPC endpoint works with PrivateLink, so it can be connected to huge amount of services, and to EC2. Gateway VPC endpoint can't work for on-prem",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1082263,
          "date": "Tue 28 Nov 2023 08:33",
          "username": "TariqKipkemei",
          "content": "data must not be transmitted over the public internetgateway VPC endpoint for Amazon S3 and AWS Direct Connect connection between the on-premises network and the VPC.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#611",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application with a REST-based interface that allows data to be received in near-real time from a third-party vendor. Once received, the application processes and stores the data for further analysis. The application is running on Amazon EC2 instances.<br><br>The third-party vendor has received many 503 Service Unavailable Errors when sending data to the application. When the data volume spikes, the compute capacity reaches its maximum limit and the application is unable to process all requests.<br><br>Which design should a solutions architect recommend to provide a more scalable solution?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#611",
          "answers": [
            {
              "choice": "<p>Use Amazon Kinesis Data Streams to ingest the data. Process the data using AWS Lambda functions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon API Gateway on top of the existing application. Create a usage plan with a quota limit for the third-party vendor.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Simple Notification Service (Amazon SNS) to ingest the data. Put the EC2 instances in an Auto Scaling group behind an Application Load Balancer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Repackage the application as a container. Deploy the application using Amazon Elastic Container Service (Amazon ECS) using the EC2 launch type with an Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 611 discussion",
      "discusstion": [
        {
          "id": 1015293,
          "date": "Sat 23 Mar 2024 22:46",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>Kinesis Data Streams provides an auto-scaling stream that can handle large amounts of streaming data ingestion and throughput. This removes the bottlenecks around receiving the data.<br>AWS Lambda can process and store the data in a scalable serverless manner, avoiding EC2 capacity limits.<br>API Gateway adds API management capabilities but does not improve the underlying scalability of the EC2 application.<br>SNS is for event publishing/notifications, not large scale data ingestion. ECS still relies on EC2 capacity.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1014521,
          "date": "Sat 23 Mar 2024 00:26",
          "username": "taustin2",
          "content": "For near-real time data ingest and processing, Kinesis and Lambda are most scalable choice.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1127042,
          "date": "Sat 20 Jul 2024 03:45",
          "username": "ferdzcruz",
          "content": "A.<br>Kinesis Data Streamsnear realtime and scalable<br>AWS Lambda functionsscalable",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1082268,
          "date": "Tue 28 May 2024 07:38",
          "username": "TariqKipkemei",
          "content": "more scalable solution?serverlessAmazon Kinesis Data Streams and AWS Lambda functions",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1057040,
          "date": "Mon 29 Apr 2024 17:42",
          "username": "wsdasdasdqwdaw",
          "content": "Only A is pure serverless which means scale. A for sure.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#612",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that runs on Amazon EC2 instances in a private subnet. The application needs to process sensitive information from an Amazon S3 bucket. The application must not use the internet to connect to the S3 bucket.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#612",
          "answers": [
            {
              "choice": "<p>Configure an internet gateway. Update the S3 bucket policy to allow access from the internet gateway. Update the application to use the new internet gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a VPN connection. Update the S3 bucket policy to allow access from the VPN connection. Update the application to use the new VPN connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a NAT gateway. Update the S3 bucket policy to allow access from the NAT gateway. Update the application to use the new NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a VPC endpoint. Update the S3 bucket policy to allow access from the VPC endpoint. Update the application to use the new VPC endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 612 discussion",
      "discusstion": [
        {
          "id": 1015292,
          "date": "Sat 23 Mar 2024 22:44",
          "username": "Guru4Cloud",
          "content": "The solution that will meet these requirements is to:<br><br>Configure a VPC endpoint for Amazon S3<br>Update the S3 bucket policy to allow access from the VPC endpoint<br>Update the application to use the new VPC endpoint<br>The key reasons are:<br><br>VPC endpoints allow private connectivity from VPCs to AWS services like S3 without using an internet gateway.<br>The application can connect to S3 through the VPC endpoint while remaining in the private subnet, without internet access.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1127043,
          "date": "Sat 20 Jul 2024 03:47",
          "username": "ferdzcruz",
          "content": "D.<br>VPC endpointnot internet, direct access from VPC to S3",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1120693,
          "date": "Fri 12 Jul 2024 10:17",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/whitepapers/latest/aws-privatelink/what-are-vpc-endpoints.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1084410,
          "date": "Thu 30 May 2024 13:47",
          "username": "achechen",
          "content": "Answer is D",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1082269,
          "date": "Tue 28 May 2024 07:40",
          "username": "TariqKipkemei",
          "content": "application must not use the internet to connect to the S3 bucketVPC endpoint",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1014519,
          "date": "Sat 23 Mar 2024 00:22",
          "username": "taustin2",
          "content": "VPC Endpoint for S3.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1014112,
          "date": "Fri 22 Mar 2024 16:00",
          "username": "aleariva",
          "content": "D is the correct...https://docs.aws.amazon.com/whitepapers/latest/aws-privatelink/what-are-vpc-endpoints.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1014063,
          "date": "Fri 22 Mar 2024 14:53",
          "username": "awslearnerin2022",
          "content": "VPC endpoint enables communication between VPC subnet and S3 bucket.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1013895,
          "date": "Fri 22 Mar 2024 12:07",
          "username": "nnecode",
          "content": "A VPC endpoint is a managed endpoint in your VPC that is connected to a public AWS service. It provides a private connection between your VPC and the service, and it does not require an internet gateway or a NAT device.<br><br>Option A (internet gateway) would involve exposing the S3 bucket to the internet, which is not recommended for security reasons.<br><br>Option B (VPN connection) would require additional setup and would still involve traffic going over the internet.<br><br>Option C (NAT gateway) is used for outbound internet access from private subnets, not for accessing S3 without the internet.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#613",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon Elastic Kubernetes Service (Amazon EKS) to run a container application. The EKS cluster stores sensitive information in the Kubernetes secrets object. The company wants to ensure that the information is encrypted.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#613",
          "answers": [
            {
              "choice": "<p>Use the container application to encrypt the information by using AWS Key Management Service (AWS KMS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable secrets encryption in the EKS cluster by using AWS Key Management Service (AWS KMS).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Implement an AWS Lambda function to encrypt the information by using AWS Key Management Service (AWS KMS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Systems Manager Parameter Store to encrypt the information by using AWS Key Management Service (AWS KMS).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 613 discussion",
      "discusstion": [
        {
          "id": 1015291,
          "date": "Sat 23 Sep 2023 21:42",
          "username": "Guru4Cloud",
          "content": "EKS supports encrypting Kubernetes secrets at the cluster level using AWS KMS keys. This provides an automated way to encrypt secrets.<br>Enabling this feature requires minimal configuration changes to the EKS cluster and no code changes.<br>Other options like using Lambda functions or modifying the application code to encrypt secrets require additional development effort and overhead.<br>Systems Manager Parameter Store could store encrypted parameters but does not natively integrate with EKS to encrypt Kubernetes secrets.<br>The EKS secrets encryption feature leverages AWS KMS without the need to directly call KMS APIs from the application.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1231574,
          "date": "Mon 17 Jun 2024 01:27",
          "username": "KennethNg923",
          "content": "System manager: irrelevant<br>Lambda or application: operational overhead<br>So it will be B secret encryption",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1082274,
          "date": "Tue 28 Nov 2023 08:41",
          "username": "TariqKipkemei",
          "content": "LEAST operational overhead?Enable secrets encryption in the EKS cluster",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1064320,
          "date": "Mon 06 Nov 2023 23:46",
          "username": "potomac",
          "content": "https://aws.amazon.com/about-aws/whats-new/2020/03/amazon-eks-adds-envelope-encryption-for-secrets-with-aws-kms/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1058940,
          "date": "Tue 31 Oct 2023 15:43",
          "username": "dilaaziz",
          "content": "https://aws.amazon.com/about-aws/whats-new/2020/03/amazon-eks-adds-envelope-encryption-for-secrets-with-aws-kms/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1047320,
          "date": "Thu 19 Oct 2023 01:33",
          "username": "iwannabeawsgod",
          "content": "BBBBBBB",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1014522,
          "date": "Fri 22 Sep 2023 23:29",
          "username": "taustin2",
          "content": "Use KMS. Enable secrets encryption in KMS.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1013889,
          "date": "Fri 22 Sep 2023 11:04",
          "username": "nnecode",
          "content": "Enabling secrets encryption in the EKS cluster by using AWS Key Management Service (AWS KMS) is the least operationally overhead way to encrypt the sensitive information in the Kubernetes secrets object.<br><br>When you enable secrets encryption in the EKS cluster, AWS KMS encrypts the secrets before they are stored in the EKS cluster. You do not need to make any changes to your container application or implement any additional Lambda functions.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#614",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a new multi-tier web application that consists of the following components:<br><br>- Web and application servers that run on Amazon EC2 instances as part of Auto Scaling groups<br>- An Amazon RDS DB instance for data storage<br><br>A solutions architect needs to limit access to the application servers so that only the web servers can access them.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#614",
          "answers": [
            {
              "choice": "<p>Deploy AWS PrivateLink in front of the application servers. Configure the network ACL to allow only the web servers to access the application servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a VPC endpoint in front of the application servers. Configure the security group to allow only the web servers to access the application servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a Network Load Balancer with a target group that contains the application servers' Auto Scaling group. Configure the network ACL to allow only the web servers to access the application servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Application Load Balancer with a target group that contains the application servers' Auto Scaling group. Configure the security group to allow only the web servers to access the application servers.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 614 discussion",
      "discusstion": [
        {
          "id": 1015289,
          "date": "Sat 23 Mar 2024 22:41",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>An Application Load Balancer (ALB) allows directing traffic to the application servers and provides access control via security groups.<br>Security groups act as a firewall at the instance level and can control access to the application servers from the web servers.<br>Network ACLs work at the subnet level and are less flexible for security groups for instance-level access control.<br>VPC endpoints are used to provide private access to AWS services, not for access between EC2 instances.<br>AWS PrivateLink provides private connectivity between VPCs, which is not required in this single VPC scenario.",
          "upvote_count": "19",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1163624,
          "date": "Sun 01 Sep 2024 16:37",
          "username": "Ravan",
          "content": "A VPC endpoint is a managed endpoint in your VPC that is connected to a public AWS service. It provides a private connection between your VPC and the service, and it does not require an internet gateway or a NAT device.<br>The other options do not meet all of the requirements:<br><br>Option A: AWS PrivateLink is a service that allows you to connect your VPC to private services that are owned by AWS or by other AWS customers. It is not designed to be used to limit access to resources within the same VPC.<br>Option C: A Network Load Balancer can be used to distribute traffic across multiple application servers, but it does not provide a way to limit access to the application servers.<br>Option D: An Application Load Balancer can be used to distribute traffic across multiple application servers, but it does not provide a way to limit access to the application servers.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1127176,
          "date": "Sat 20 Jul 2024 09:58",
          "username": "awsgeek75",
          "content": "\\\"limit access to the application servers so that only the web servers can access them\\\"<br>Can be done via NACL or SG<br>A: Irrelevant as everything is inside the same VPC<br>B: VPC endpoint are attached to VPC and if you deploy a VPC endpoint like this itwill be in front of both app and web server. Language is weird here<br>C: Potentially a good solution but NACL is allowing on web to app traffic and no response will reach to web servers as NACL have to be configured in both directions<br>D: ALB in front of ASG will give an internal endpoint which can be secured by SG as recommended. ASG itself is not an endpoint that can be used with SG which is why we need ALB here.<br><br>Hence D is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1082278,
          "date": "Tue 28 May 2024 07:44",
          "username": "TariqKipkemei",
          "content": "Deploy an Application Load Balancer with a target group that contains the application servers' Auto Scaling group. Configure the security group to allow only the web servers to access the application servers",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1072201,
          "date": "Thu 16 May 2024 06:25",
          "username": "Tekk97",
          "content": "I think B also working. but A company has Auto Scaling groups. D has strategy for Auto Scaling. D is correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>How do you want to \\\"deploy a VPC endpoint\\\" for a group of EC2 instances that are inside your VPC?</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111849,
          "date": "Tue 02 Jul 2024 12:07",
          "username": "pentium75",
          "content": "How do you want to \\\"deploy a VPC endpoint\\\" for a group of EC2 instances that are inside your VPC?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1064323,
          "date": "Mon 06 May 2024 22:53",
          "username": "potomac",
          "content": "D is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1047324,
          "date": "Fri 19 Apr 2024 01:36",
          "username": "iwannabeawsgod",
          "content": "Scaling group to Scaling group.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1015382,
          "date": "Sun 24 Mar 2024 03:00",
          "username": "Devsin2000",
          "content": "C -ALB is for Web applications only. NLB can be internal / not public<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Both ALB and NLB can be internal or public. NLB works on layer 3 while ALB works on layer 7.<br><br>Both ALB and NLB could help here, but C uses a network ACL that's missing the outbound traffic.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1111844,
          "date": "Tue 02 Jul 2024 12:06",
          "username": "pentium75",
          "content": "Both ALB and NLB can be internal or public. NLB works on layer 3 while ALB works on layer 7.<br><br>Both ALB and NLB could help here, but C uses a network ACL that's missing the outbound traffic.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1014524,
          "date": "Sat 23 Mar 2024 00:34",
          "username": "taustin2",
          "content": "ALB with Security Group is simplest solution.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1013887,
          "date": "Fri 22 Mar 2024 12:00",
          "username": "nnecode",
          "content": "A VPC endpoint is a managed endpoint in your VPC that is connected to a public AWS service. It provides a private connection between your VPC and the service, and it does not require an internet gateway or a NAT device.<br>The other options do not meet all of the requirements:<br><br>Option A: AWS PrivateLink is a service that allows you to connect your VPC to private services that are owned by AWS or by other AWS customers. It is not designed to be used to limit access to resources within the same VPC.<br>Option C: A Network Load Balancer can be used to distribute traffic across multiple application servers, but it does not provide a way to limit access to the application servers.<br>Option D: An Application Load Balancer can be used to distribute traffic across multiple application servers, but it does not provide a way to limit access to the application servers.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>We don't want to connect \\\"to a public AWS service\\\" but to EC2 instances.<br><br>\\\"An Application Load Balancer can be used to distribute traffic across multiple application servers, but it does not provide a way to limit access to the application servers\\\" but the Security Group of the web servers does.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111841,
          "date": "Tue 02 Jul 2024 12:05",
          "username": "pentium75",
          "content": "We don't want to connect \\\"to a public AWS service\\\" but to EC2 instances.<br><br>\\\"An Application Load Balancer can be used to distribute traffic across multiple application servers, but it does not provide a way to limit access to the application servers\\\" but the Security Group of the web servers does.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#615",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a critical, customer-facing application on Amazon Elastic Kubernetes Service (Amazon EKS). The application has a microservices architecture. The company needs to implement a solution that collects, aggregates, and summarizes metrics and logs from the application in a centralized location.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#615",
          "answers": [
            {
              "choice": "<p>Run the Amazon CloudWatch agent in the existing EKS cluster. View the metrics and logs in the CloudWatch console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Run AWS App Mesh in the existing EKS cluster. View the metrics and logs in the App Mesh console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS CloudTrail to capture data events. Query CloudTrail by using Amazon OpenSearch Service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon CloudWatch Container Insights in the existing EKS cluster. View the metrics and logs in the CloudWatch console.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 615 discussion",
      "discusstion": [
        {
          "id": 1064324,
          "date": "Mon 06 May 2024 22:55",
          "username": "potomac",
          "content": "Use CloudWatch Container Insights to collect, aggregate, and summarize metrics and logs from your containerized applications and microservices. Container Insights is available for Amazon Elastic Container Service (Amazon ECS), Amazon Elastic Kubernetes Service (Amazon EKS), and Kubernetes platforms on Amazon EC2. Container Insights supports collecting metrics from clusters deployed on AWS Fargate for both Amazon ECS and Amazon EKS.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111858,
          "date": "Tue 02 Jul 2024 12:11",
          "username": "pentium75",
          "content": "'Running the Amazon CloudWatch agent in the existing EKS cluster' is called Amazon CloudWatch Container Insights: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-metrics.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1120755,
          "date": "Fri 12 Jul 2024 12:26",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html<br>\\\"Use CloudWatch Container Insights to collect, aggregate, and summarize metrics and logs from your containerized applications and microservices.\\\"",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1087703,
          "date": "Tue 04 Jun 2024 14:22",
          "username": "SHAAHIBHUSHANAWS",
          "content": "Selected Answer: D<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1082282,
          "date": "Tue 28 May 2024 07:49",
          "username": "TariqKipkemei",
          "content": "EKS monitoringAmazon CloudWatch Container Insights",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1067606,
          "date": "Sat 11 May 2024 00:49",
          "username": "Examanier1217",
          "content": "I have worked on it. A is the right answer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But 'running the Amazon CloudWatch agent in the existing EKS cluster' is called Container Insights, thus D.<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-metrics.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111854,
          "date": "Tue 02 Jul 2024 12:10",
          "username": "pentium75",
          "content": "But 'running the Amazon CloudWatch agent in the existing EKS cluster' is called Container Insights, thus D.<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-metrics.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1058901,
          "date": "Tue 30 Apr 2024 14:29",
          "username": "dilaaziz",
          "content": "https://aws.amazon.com/cloudwatch/features/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1015284,
          "date": "Sat 23 Mar 2024 22:36",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>CloudWatch Container Insights automatically collects metrics and logs from containers running in EKS clusters. This provides visibility into resource utilization, application performance, and microservice interactions.<br>The metrics and logs are stored in CloudWatch Logs and CloudWatch metrics for central access.<br>The CloudWatch console allows querying, filtering, and visualizing the metrics and logs in one centralized place.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1014986,
          "date": "Sat 23 Mar 2024 17:14",
          "username": "ErnShm",
          "content": "D<br><br>Amazon CloudWatch Application Insights facilitates observability for your applications and underlying AWS resources. It helps you set up the best monitors for your application resources to continuously analyze data for signs of problems with your applications.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1014525,
          "date": "Sat 23 Mar 2024 00:37",
          "username": "taustin2",
          "content": "What Cloudwatch Container Insights is for.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1014155,
          "date": "Fri 22 Mar 2024 16:42",
          "username": "kambarami",
          "content": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/deploy-container-insights-EKS.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1014057,
          "date": "Fri 22 Mar 2024 14:45",
          "username": "awslearnerin2022",
          "content": "Cloudwatch monitors applications and provides metrics. Cloudtrail is used for API activities in the account.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1013878,
          "date": "Fri 22 Mar 2024 11:54",
          "username": "nnecode",
          "content": "Amazon CloudWatch Container Insights is a service that collects, aggregates, and summarizes metrics and logs from containerized applications. It is designed to work with Amazon EKS and Kubernetes.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#616",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed its newest product on AWS. The product runs in an Auto Scaling group behind a Network Load Balancer. The company stores the product's objects in an Amazon S3 bucket.<br><br>The company recently experienced malicious attacks against its systems. The company needs a solution that continuously monitors for malicious activity in the AWS account, workloads, and access patterns to the S3 bucket. The solution must also report suspicious activity and display the information on a dashboard.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#616",
          "answers": [
            {
              "choice": "<p>Configure Amazon Macie to monitor and report findings to AWS Config.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Inspector to monitor and report findings to AWS CloudTrail.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon GuardDuty to monitor and report findings to AWS Security Hub.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Config to monitor and report findings to Amazon EventBridge.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 616 discussion",
      "discusstion": [
        {
          "id": 1015280,
          "date": "Sat 23 Sep 2023 21:34",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior. It analyzes AWS CloudTrail, VPC Flow Logs, and DNS logs.<br>GuardDuty can detect threats like instance or S3 bucket compromise, malicious IP addresses, or unusual API calls.<br>Findings can be sent to AWS Security Hub which provides a centralized security dashboard and alerts.<br>Amazon Macie and Amazon Inspector do not monitor the breadth of activity that GuardDuty does. They focus more on data security and application vulnerabilities respectively.<br>AWS Config monitors for resource configuration changes, not malicious activity.",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1284917,
          "date": "Mon 16 Sep 2024 21:11",
          "username": "MatAlves",
          "content": "- Amazon Inspectorautomated vulnerability management service<br><br>- Amazon GuardDutythreat detection service that monitors for malicious activity and anomalous behavior to protect AWS accounts, workloads, and data.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1231575,
          "date": "Mon 17 Jun 2024 01:31",
          "username": "KennethNg923",
          "content": "' continuously monitors for malicious activity in the AWS account, workloads, and access patterns to the S3 bucket'  only guard duty for this purpose in the options",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1083223,
          "date": "Wed 29 Nov 2023 08:56",
          "username": "TariqKipkemei",
          "content": "Amazon Inspector provides you with security assessments of your applications settings and configurations on your EC2 instances while Amazon GuardDuty helps with analyzing your entire AWS environment for potential threats.<br>AWS Security Hub is a cloud security posture management service that aggregates alerts, and enables automated remediation.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1058887,
          "date": "Tue 31 Oct 2023 15:20",
          "username": "dilaaziz",
          "content": "Guardduty",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1014526,
          "date": "Fri 22 Sep 2023 23:38",
          "username": "taustin2",
          "content": "What Guard Duty is for.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The key reasons are:<br><br>Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior. It analyzes AWS CloudTrail, VPC Flow Logs, and DNS logs.<br>GuardDuty can detect threats like instance or S3 bucket compromise, malicious IP addresses, or unusual API calls.<br>Findings can be sent to AWS Security Hub which provides a centralized security dashboard and alerts.<br>Amazon Macie and Amazon Inspector do not monitor the breadth of activity that GuardDuty does. They focus more on data security and application vulnerabilities respectively.<br>AWS Config monitors for resource configuration changes, not malicious activity.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1015281,
          "date": "Sat 23 Sep 2023 21:34",
          "username": "Guru4Cloud",
          "content": "The key reasons are:<br><br>Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior. It analyzes AWS CloudTrail, VPC Flow Logs, and DNS logs.<br>GuardDuty can detect threats like instance or S3 bucket compromise, malicious IP addresses, or unusual API calls.<br>Findings can be sent to AWS Security Hub which provides a centralized security dashboard and alerts.<br>Amazon Macie and Amazon Inspector do not monitor the breadth of activity that GuardDuty does. They focus more on data security and application vulnerabilities respectively.<br>AWS Config monitors for resource configuration changes, not malicious activity.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1014151,
          "date": "Fri 22 Sep 2023 15:39",
          "username": "kambarami",
          "content": "Answer is C.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1014130,
          "date": "Fri 22 Sep 2023 15:14",
          "username": "aleariva",
          "content": "C is the correct.https://aws.amazon.com/guardduty/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1014084,
          "date": "Fri 22 Sep 2023 14:10",
          "username": "brownie23",
          "content": "Answer is C Since Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts, Amazon Elastic Compute Cloud (EC2) workloads, container applications, Amazon Aurora databases, and data stored in Amazon Simple Storage Service (S3).",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1014054,
          "date": "Fri 22 Sep 2023 13:42",
          "username": "awslearnerin2022",
          "content": "Gaurd duty is a threat detection service for accounts and workloads.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#617",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate an on-premises data center to AWS. The data center hosts a storage server that stores data in an NFS-based file system. The storage server holds 200 GB of data. The company needs to migrate the data without interruption to existing services. Multiple resources in AWS must be able to access the data by using the NFS protocol.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#617",
          "answers": [
            {
              "choice": "<p>Create an Amazon FSx for Lustre file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Elastic File System (Amazon EFS) file system.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 bucket to receive the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Manually use an operating system copy command to push the data into the AWS destination.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Install an AWS DataSync agent in the on-premises data center. Use a DataSync task between the on-premises location and AWS.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 617 discussion",
      "discusstion": [
        {
          "id": 1015277,
          "date": "Sat 23 Mar 2024 22:31",
          "username": "Guru4Cloud",
          "content": "Amazon EFS provides a scalable, high performance NFS file system that can be accessed from multiple resources in AWS.<br>AWS DataSync can perform the migration from the on-prem NFS server to EFS without interruption to existing services.<br>This avoids having to manually move the data which could cause downtime. DataSync incrementally syncs changed data.<br>EFS and DataSync together provide a cost-optimized approach compared to using S3 or FSx, while still meeting the requirements.<br>Manually copying 200 GB of data to AWS would be slow and risky compared to using DataSync.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1014527,
          "date": "Sat 23 Mar 2024 00:41",
          "username": "taustin2",
          "content": "NFS file systemEFS, Use DataSync for the migration with NFS support.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1120766,
          "date": "Fri 12 Jul 2024 12:32",
          "username": "awsgeek75",
          "content": "A: FSX Lustre is for parallel high performance file storage not NFS<br>C: S3 is a blob storage, not a file system<br>D: Too much to copy with a lot of overhead<br>A: NFS maps to EFS and allows NFS protocol for access<br>E: DataSync solves copy problems without interruptions",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1058874,
          "date": "Tue 30 Apr 2024 14:14",
          "username": "dilaaziz",
          "content": "https://aws.amazon.com/compare/the-difference-between-nfs-smb/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1014052,
          "date": "Fri 22 Mar 2024 14:39",
          "username": "awslearnerin2022",
          "content": "EFS can be accessed by multiple AWS resources.<br>Datasync allowes NFS migrations.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BE"
        }
      ]
    },
    {
      "question_id": "#618",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use Amazon FSx for Windows File Server for its Amazon EC2 instances that have an SMB file share mounted as a volume in the us-east-1 Region. The company has a recovery point objective (RPO) of 5 minutes for planned system maintenance or unplanned service disruptions. The company needs to replicate the file system to the us-west-2 Region. The replicated data must not be deleted by any user for 5 years.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#618",
          "answers": [
            {
              "choice": "<p>Create an FSx for Windows File Server file system in us-east-1 that has a Single-AZ 2 deployment type. Use AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2. Configure AWS Backup Vault Lock in compliance mode for a target vault in us-west-2. Configure a minimum duration of 5 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an FSx for Windows File Server file system in us-east-1 that has a Multi-AZ deployment type. Use AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2. Configure AWS Backup Vault Lock in governance mode for a target vault in us-west-2. Configure a minimum duration of 5 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an FSx for Windows File Server file system in us-east-1 that has a Multi-AZ deployment type. Use AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2. Configure AWS Backup Vault Lock in compliance mode for a target vault in us-west-2. Configure a minimum duration of 5 years.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an FSx for Windows File Server file system in us-east-1 that has a Single-AZ 2 deployment type. Use AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2. Configure AWS Backup Vault Lock in governance mode for a target vault in us-west-2. Configure a minimum duration of 5 years.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 618 discussion",
      "discusstion": [
        {
          "id": 1014531,
          "date": "Fri 22 Sep 2023 23:52",
          "username": "taustin2",
          "content": "Need to use Compliance Mode, so it's either A or C. RPO leads to Multi-AZ so C.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree Compliance Mode with Multi-AZ</li></ul>",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1231591,
          "date": "Mon 17 Jun 2024 02:34",
          "username": "KennethNg923",
          "content": "Agree Compliance Mode with Multi-AZ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1083247,
          "date": "Wed 29 Nov 2023 09:15",
          "username": "TariqKipkemei",
          "content": "high availabilitymulti AZ<br>data must be retained for 5 years compliance mode<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No HA was mentioned though. But RPO leads to that, so IDK</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1176181,
          "date": "Mon 18 Mar 2024 02:37",
          "username": "TheLaPlanta",
          "content": "No HA was mentioned though. But RPO leads to that, so IDK",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1058860,
          "date": "Tue 31 Oct 2023 15:09",
          "username": "dilaaziz",
          "content": "https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1050809,
          "date": "Sun 22 Oct 2023 17:34",
          "username": "thanhnv142",
          "content": "C is correct.<br>A and C is potential answer because they mention compliance mode. But single AZ is recommended for test and development only. For production workloads, we need multi AZ, which is C",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1018343,
          "date": "Wed 27 Sep 2023 03:46",
          "username": "Xin123",
          "content": "Trust me bro",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#619",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a security solution for a company that wants to provide developers with individual AWS accounts through AWS Organizations, while also maintaining standard security controls. Because the individual developers will have AWS account root user-level access to their own accounts, the solutions architect wants to ensure that the mandatory AWS CloudTrail configuration that is applied to new developer accounts is not modified.<br><br>Which action meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#619",
          "answers": [
            {
              "choice": "<p>Create an IAM policy that prohibits changes to CloudTrail. and attach it to the root user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new trail in CloudTrail from within the developer accounts with the organization trails option enabled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a service control policy (SCP) that prohibits changes to CloudTrail, and attach it the developer accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a service-linked role for CloudTrail with a policy condition that allows changes only from an Amazon Resource Name (ARN) in the management account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 619 discussion",
      "discusstion": [
        {
          "id": 1014532,
          "date": "Sat 23 Mar 2024 00:55",
          "username": "taustin2",
          "content": "For Organizations to restrict users in accounts, use an SCP.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1018345,
          "date": "Wed 27 Mar 2024 04:47",
          "username": "Xin123",
          "content": "Organizations + RestrictsSCP",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1120799,
          "date": "Fri 12 Jul 2024 13:28",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C is correct but for my sanity I want to know what D is talking about as it makes no sense to me. Can someone explain?</li><li>The \\\"policy condition\\\" mentioned in option D can never be created. A service-linked role is a type of IAM role that is predefined by AWS and tightly integrated with AWS services, allowing AWS services to perform actions on your behalf. However, service-linked roles are not meant to control or restrict user actions, but simply designed for services to function correctly.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1127186,
          "date": "Sat 20 Jul 2024 10:08",
          "username": "awsgeek75",
          "content": "C is correct but for my sanity I want to know what D is talking about as it makes no sense to me. Can someone explain?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The \\\"policy condition\\\" mentioned in option D can never be created. A service-linked role is a type of IAM role that is predefined by AWS and tightly integrated with AWS services, allowing AWS services to perform actions on your behalf. However, service-linked roles are not meant to control or restrict user actions, but simply designed for services to function correctly.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1325506,
          "date": "Thu 12 Dec 2024 10:25",
          "username": "LeonSauveterre",
          "content": "The \\\"policy condition\\\" mentioned in option D can never be created. A service-linked role is a type of IAM role that is predefined by AWS and tightly integrated with AWS services, allowing AWS services to perform actions on your behalf. However, service-linked roles are not meant to control or restrict user actions, but simply designed for services to function correctly.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1083250,
          "date": "Wed 29 May 2024 08:18",
          "username": "TariqKipkemei",
          "content": "Guardrailsservice control policy",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1022921,
          "date": "Tue 02 Apr 2024 09:50",
          "username": "Ramdi1",
          "content": "C - Use SCP best way",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#620",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to deploy a business-critical application in the AWS Cloud. The application requires durable storage with consistent, low-latency performance.<br><br>Which type of storage should a solutions architect recommend to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#620",
          "answers": [
            {
              "choice": "<p>Instance store volume<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon ElastiCache for Memcached cluster<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provisioned IOPS SSD Amazon Elastic Block Store (Amazon EBS) volume<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Throughput Optimized HDD Amazon Elastic Block Store (Amazon EBS) volume<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 620 discussion",
      "discusstion": [
        {
          "id": 1014533,
          "date": "Sat 23 Mar 2024 00:57",
          "username": "taustin2",
          "content": "Durable storage excludes A and B. Low-latency excludes D. Choose C.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1120801,
          "date": "Fri 12 Jul 2024 13:30",
          "username": "awsgeek75",
          "content": "AB are not storage or this purpose<br>D is HDD so slow by nature<br>C best fit",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1083260,
          "date": "Wed 29 May 2024 08:22",
          "username": "TariqKipkemei",
          "content": "durable storage, low-latency performanceProvisioned IOPS SSD Amazon EBS volume",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1064328,
          "date": "Mon 06 May 2024 23:09",
          "username": "potomac",
          "content": "Provisioned IOPS SSD =E2=80=94 Provides high performance for mission-critical, low-latency, or high-throughput workloads. Throughput Optimized HDD =E2=80=94 A low-cost HDD designed for frequently accessed, throughput-intensive workloads.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1058836,
          "date": "Tue 30 Apr 2024 13:53",
          "username": "dilaaziz",
          "content": "https://aws.amazon.com/ebs/volume-types/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#621",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online photo-sharing company stores its photos in an Amazon S3 bucket that exists in the us-west-1 Region. The company needs to store a copy of all new photos in the us-east-1 Region.<br><br>Which solution will meet this requirement with the LEAST operational effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#621",
          "answers": [
            {
              "choice": "<p>Create a second S3 bucket in us-east-1. Use S3 Cross-Region Replication to copy photos from the existing S3 bucket to the second S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a cross-origin resource sharing (CORS) configuration of the existing S3 bucket. Specify us-east-1 in the CORS rule's AllowedOrigin element.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a second S3 bucket in us-east-1 across multiple Availability Zones. Create an S3 Lifecycle rule to save photos into the second S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a second S3 bucket in us-east-1. Configure S3 event notifications on object creation and update events to invoke an AWS Lambda function to copy photos from the existing S3 bucket to the second S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 621 discussion",
      "discusstion": [
        {
          "id": 1015262,
          "date": "Sat 23 Sep 2023 21:18",
          "username": "Guru4Cloud",
          "content": "S3 Cross-Region Replication handles automatically copying new objects added to the source bucket to the destination bucket in a different region.<br>It continuously replicates new photos without needing to manually copy files or set up Lambda triggers.<br>CORS only enables cross-origin access, it does not copy objects.<br>Using Lifecycle rules or Lambda functions requires custom code and logic to handle the copying.<br>S3 Cross-Region Replication provides automated replication that minimizes operational overhead.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1170745,
          "date": "Mon 11 Mar 2024 03:52",
          "username": "xBUGx",
          "content": "All NEW photo, not all photo.<br>We dont want to copy existing photos<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"There are two types of replication: live replication and on-demand replication.<br><br>Live replication =E2=80=93 To automatically replicate new and updated objects as they are written to the source bucket, use live replication. Live replication doesn't replicate any objects that existed in the bucket before you set up replication. To replicate objects that existed before you set up replication, use on-demand replication.\\\"<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html</li><li>A does exactly that</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1284959,
          "date": "Tue 17 Sep 2024 00:59",
          "username": "MatAlves",
          "content": "\\\"There are two types of replication: live replication and on-demand replication.<br><br>Live replication =E2=80=93 To automatically replicate new and updated objects as they are written to the source bucket, use live replication. Live replication doesn't replicate any objects that existed in the bucket before you set up replication. To replicate objects that existed before you set up replication, use on-demand replication.\\\"<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1176183,
          "date": "Mon 18 Mar 2024 02:41",
          "username": "TheLaPlanta",
          "content": "A does exactly that",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1120804,
          "date": "Fri 12 Jan 2024 14:33",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html<br><br>To automatically replicate new objects as they are written to the bucket, use live replication, such as Cross-Region Replication (CRR). To replicate existing objects to a different bucket on demand, use S3 Batch Replication.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1083265,
          "date": "Wed 29 Nov 2023 09:25",
          "username": "TariqKipkemei",
          "content": "LEAST operational effortCross-Region Replication",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1058832,
          "date": "Tue 31 Oct 2023 14:44",
          "username": "dilaaziz",
          "content": "https://aws.amazon.com/about-aws/whats-new/2015/03/amazon-s3-introduces-cross-region-replication/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1014535,
          "date": "Fri 22 Sep 2023 23:59",
          "username": "taustin2",
          "content": "S3 Cross-Region Replication is least operational overhead.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#622",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is creating a new web application for its subscribers. The application will consist of a static single page and a persistent database layer. The application will have millions of users for 4 hours in the morning, but the application will have only a few thousand users during the rest of the day. The company's data architects have requested the ability to rapidly evolve their schema.<br><br>Which solutions will meet these requirements and provide the MOST scalability? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#622",
          "answers": [
            {
              "choice": "<p>Deploy Amazon DynamoDB as the database solution. Provision on-demand capacity.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon Aurora as the database solution. Choose the serverless DB engine mode.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon DynamoDB as the database solution. Ensure that DynamoDB auto scaling is enabled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the static content into an Amazon S3 bucket. Provision an Amazon CloudFront distribution with the S3 bucket as the origin.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the web servers for static content across a fleet of Amazon EC2 instances in Auto Scaling groups. Configure the instances to periodically refresh the content from an Amazon Elastic File System (Amazon EFS) volume.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 622 discussion",
      "discusstion": [
        {
          "id": 1015913,
          "date": "Sun 24 Sep 2023 16:46",
          "username": "taustin2",
          "content": "Changing answer to A,D.DynamoDB on-demand is more scalable than DynamoDB auto-scaling.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1072145,
          "date": "Thu 16 Nov 2023 05:56",
          "username": "bogobob",
          "content": "For those answering A over C, the question asks about scalability, but the text says the traffic patterns are known and don't state they will change. Both auto-scaling and on-demand can \\\"scale\\\", but auto-scaling is for known, on-demand is better for unknown traffic patterns. Its likely the \\\"scalability\\\" is more to do with the file hosting (EC2 wouldn't scale well at all vs S3)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Most scalability\\\"A. Might be more expensive, but cost is irrelevant in the question.</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1111891,
          "date": "Tue 02 Jan 2024 13:44",
          "username": "pentium75",
          "content": "\\\"Most scalability\\\"A. Might be more expensive, but cost is irrelevant in the question.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1317319,
          "date": "Mon 25 Nov 2024 05:26",
          "username": "JA2018",
          "content": "Amazon Aurora Serverless for a highly fluctuating DB workload, and S3 for static webpage<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Cant change schema in Aurora</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1323823,
          "date": "Mon 09 Dec 2024 02:30",
          "username": "RamanAgarwal",
          "content": "Cant change schema in Aurora",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1255265,
          "date": "Fri 26 Jul 2024 00:41",
          "username": "Ravee_L",
          "content": "B and D B. Deploy Amazon Aurora as the database solution. Choose the serverless DB engine mode: Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1242954,
          "date": "Fri 05 Jul 2024 20:17",
          "username": "a7md0",
          "content": "on-demand capacity for DynamoDB since traffic is not consistent, and S3 & CloudFront for static files",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1231594,
          "date": "Mon 17 Jun 2024 02:40",
          "username": "KennethNg923",
          "content": "MOST scalability - DynamoDB On-Demand > Auto Scaling + Static Content host in S3",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1225116,
          "date": "Thu 06 Jun 2024 04:43",
          "username": "NSA_Poker",
          "content": "(A) is incorrect. \\\"On-demand capacity mode is probably best when you have new tables with unknown workloads, unpredictable application traffic.\\\" We know the workload upper limit is the total amount of subscribers & we know it's busy in the morning & not so much in the afternoon. Nothing in the question says it bursts in the morning.<br><br>(C) is correct. The traffic pattern is known, so prep for the morning & the exact upper boundary is the # of subscribers.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1146376,
          "date": "Sat 10 Feb 2024 15:52",
          "username": "jaswantn",
          "content": "For autoscaling we need to know the lower and upper limits. Anh the question says....application will have millions of users for 4 hours in the morning....how many millions , how much upper limit we need to set for to handle this much request?<br>here we can't have exact estimation for the upper limit in autoscaling. Thus, better option is (A)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>With autoscaling we can face throttling initially, when there is surge of requests and the load is greater than the scaling upper limit. We can gradually increase the upper limit of autoscaling and would be then able to handle the load in subsequent requests preventing ourself from using OnDemand.<br>Thus Option (C) is more scalable as it can handle the both types of load(high &amp; low) in efficient manner.</li><li>why not Amazon AuroraServerless?</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1147255,
          "date": "Sun 11 Feb 2024 14:33",
          "username": "jaswantn",
          "content": "With autoscaling we can face throttling initially, when there is surge of requests and the load is greater than the scaling upper limit. We can gradually increase the upper limit of autoscaling and would be then able to handle the load in subsequent requests preventing ourself from using OnDemand.<br>Thus Option (C) is more scalable as it can handle the both types of load(high & low) in efficient manner.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>why not Amazon AuroraServerless?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1317320,
          "date": "Mon 25 Nov 2024 05:27",
          "username": "JA2018",
          "content": "why not Amazon AuroraServerless?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1143017,
          "date": "Wed 07 Feb 2024 07:58",
          "username": "1Alpha1",
          "content": "AD vs CD ?<br>1) Please read the final sentence. Which solutions will meet these requirements and provide the \\\"MOST\\\" scalability?<br>2) It is not possible to predict an exact boundary based on the number of \\\"millions of users\\\".<br>So I would choose \\\"AD\\\".<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The exact boundary is known, the application's subscribers. Leaning towards AC now.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1225113,
          "date": "Thu 06 Jun 2024 04:24",
          "username": "NSA_Poker",
          "content": "The exact boundary is known, the application's subscribers. Leaning towards AC now.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1127210,
          "date": "Sat 20 Jan 2024 11:49",
          "username": "06042022",
          "content": "The traffic pattern is known here.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1120807,
          "date": "Fri 12 Jan 2024 14:39",
          "username": "awsgeek75",
          "content": "A: On-demand scaling because the demand changes drastically (millions to thousands)<br>D: S3 for static page is perfect<br><br>B: Aurora is RDMS so not much rapid schema changes (it's subjective and DBA will argue but better options on the table are DynamoDB)<br>E: Too much work and overhead<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>To be fair, 4 hours is a strange time duration for burst traffic. 20 hours of low traffic may benefit from auto-scaling's as it is long enough to be called a \\\"depressed\\\" traffic mode in autoscaling config. 4 hours in the morning can also be termed as \\\"sustained period\\\" of burst in autoscaling.<br><br>This question is not theoretical, someone who has scaled Dynamo in similar scenarios will be able to answer correctly.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1127197,
          "date": "Sat 20 Jan 2024 11:28",
          "username": "awsgeek75",
          "content": "To be fair, 4 hours is a strange time duration for burst traffic. 20 hours of low traffic may benefit from auto-scaling's as it is long enough to be called a \\\"depressed\\\" traffic mode in autoscaling config. 4 hours in the morning can also be termed as \\\"sustained period\\\" of burst in autoscaling.<br><br>This question is not theoretical, someone who has scaled Dynamo in similar scenarios will be able to answer correctly.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111895,
          "date": "Tue 02 Jan 2024 13:46",
          "username": "pentium75",
          "content": "Question asks for \\\"most scalability\\\", not cost optimization. \\\"DynamoDB auto scaling ... modifies provisioned throughput settings only when the actual workload stays elevated or depressed for a sustained period of several minutes. ... This means that provisioned capacity is probably best for you if you have relatively predictable application traffic, run applications whose traffic is consistent, and ramps up or down gradually.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"The on-demand pricing model is ideal for bursty, new, or unpredictable workloads whose traffic can spike in seconds or minutes, and when under-provisioned capacity would impact the user experience.\\\"<br><br>Whereas on-demand capacity mode is probably best when you have new tables with unknown workloads, unpredictable application traffic and also if you only want to pay exactly for what you use. The on-demand pricing model is ideal for bursty, new, or unpredictable workloads whose traffic can spike in seconds or minutes, and when under-provisioned capacity would impact the user experience.<br><br>https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/capacity.html</li><li>This support C not A</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1111896,
          "date": "Tue 02 Jan 2024 13:47",
          "username": "pentium75",
          "content": "\\\"The on-demand pricing model is ideal for bursty, new, or unpredictable workloads whose traffic can spike in seconds or minutes, and when under-provisioned capacity would impact the user experience.\\\"<br><br>Whereas on-demand capacity mode is probably best when you have new tables with unknown workloads, unpredictable application traffic and also if you only want to pay exactly for what you use. The on-demand pricing model is ideal for bursty, new, or unpredictable workloads whose traffic can spike in seconds or minutes, and when under-provisioned capacity would impact the user experience.<br><br>https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/capacity.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This support C not A</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1332609,
          "date": "Fri 27 Dec 2024 21:29",
          "username": "Salilgen",
          "content": "This support C not A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1107424,
          "date": "Thu 28 Dec 2023 06:01",
          "username": "Ashhher",
          "content": "I understand the argument between A and C, but why not B?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Ability to rapidly evolve their schema\\\" -&gt; NoSQL database, schema changes in transactional databases like RDS are difficult</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1111882,
          "date": "Tue 02 Jan 2024 13:35",
          "username": "pentium75",
          "content": "\\\"Ability to rapidly evolve their schema\\\" -> NoSQL database, schema changes in transactional databases like RDS are difficult",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1105304,
          "date": "Mon 25 Dec 2023 14:48",
          "username": "Derek_G",
          "content": "Provisioned on-demand capacity:<br>Manual: Requires manual setup and management of capacity.<br>Cost-Effectiveness: Requires manual estimation of workload, which can result in either excess or insufficient capacity.<br>Use Case: Suitable for relatively stable workloads with predictable capacity needs.<br><br> predictable capacity needs.=EF=BC=9A4 hours in the morning,a few thousand users during the rest of the day.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1095105,
          "date": "Wed 13 Dec 2023 04:13",
          "username": "[Removed]",
          "content": "Provisioned mode is more suitable and it is the default.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1083278,
          "date": "Wed 29 Nov 2023 09:33",
          "username": "TariqKipkemei",
          "content": "rapidly evolve their schema, MOST scalability for data layerDynamoDB with on-demand capacity. on-demand capacity mode automatically enables autoscaling.<br>MOST scalability for single page appAmazon CloudFront distribution with the S3 bucket as the origin.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1078212,
          "date": "Thu 23 Nov 2023 09:05",
          "username": "t0nx",
          "content": "CD as pattern is known",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        }
      ]
    },
    {
      "question_id": "#623",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon API Gateway to manage its REST APIs that third-party service providers access. The company must protect the REST APIs from SQL injection and cross-site scripting attacks.<br><br>What is the MOST operationally efficient solution that meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#623",
          "answers": [
            {
              "choice": "<p>Configure AWS Shield.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS WAF.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up API Gateway with an Amazon CloudFront distribution. Configure AWS Shield in CloudFront.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up API Gateway with an Amazon CloudFront distribution. Configure AWS WAF in CloudFront.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 623 discussion",
      "discusstion": [
        {
          "id": 1014538,
          "date": "Sat 23 Mar 2024 01:09",
          "username": "taustin2",
          "content": "SQL Injection and Cross-Site ScriptingWAF so Either B or D. Both B and D are valid options but the question doesn't indicate a real need for CloudFront, so just use WAF with the API Gateway. Answer is B.",
          "upvote_count": "14",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1014030,
          "date": "Fri 22 Mar 2024 14:14",
          "username": "awslearnerin2022",
          "content": "WAF helps with layer 7 attacks like SQL injection and XSS. Shield is helpful for DDOS attacks.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1332621,
          "date": "Fri 27 Dec 2024 22:06",
          "username": "Salilgen",
          "content": "https://aws.amazon.com/blogs/compute/amazon-api-gateway-adds-support-for-aws-waf/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1120820,
          "date": "Fri 12 Jul 2024 14:01",
          "username": "awsgeek75",
          "content": "WAF is good enough for SQL Injection and Cross Site scripting so A is good<br>A: AWS Shield (basic) is not for SQL injection<br>C: Same as A<br>D: Good solution and will work but it provides extra DDoS protection and caching which is not needed (as we don't know much about the API also)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111906,
          "date": "Tue 02 Jul 2024 13:08",
          "username": "pentium75",
          "content": "Question asks for protection against SQL injection and XSS, both is provided by WAF (option B). D would work too, but it would add another layer (CloudFront) with benefits that nobody asked for (and that would cost money), thus it would IMO be less 'operationally efficient'.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1109392,
          "date": "Sun 30 Jun 2024 04:09",
          "username": "Naijaboy99",
          "content": "D. Set up API Gateway with an Amazon CloudFront distribution. Configure AWS WAF in CloudFront.<br><br>Option A (Configure AWS Shield) is a DDoS protection service but doesn't specifically address SQL injection and cross-site scripting attacks.<br><br>Option B (Configure AWS WAF) alone is a valid option, but integrating it with CloudFront (Option D) provides additional benefits like improved performance through caching.<br><br>Option C (Set up API Gateway with CloudFront and configure AWS Shield in CloudFront) might provide DDoS protection, but for SQL injection and cross-site scripting, AWS WAF is the more appropriate service.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>In questions like this that mentioned \\\"operationally efficient\\\" or \\\"operationally effective\\\", aim for the indicated jobs only. We don't need additional benefits, so CloudFront is not a necessity here.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1325511,
          "date": "Thu 12 Dec 2024 10:37",
          "username": "LeonSauveterre",
          "content": "In questions like this that mentioned \\\"operationally efficient\\\" or \\\"operationally effective\\\", aim for the indicated jobs only. We don't need additional benefits, so CloudFront is not a necessity here.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1083280,
          "date": "Wed 29 May 2024 08:35",
          "username": "TariqKipkemei",
          "content": "SQL injection and cross-site scripting attacksAWS WAF",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1064338,
          "date": "Mon 06 May 2024 23:33",
          "username": "potomac",
          "content": "B or D<br>But no need for CloudFront",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1056849,
          "date": "Mon 29 Apr 2024 13:44",
          "username": "Sugarbear_01",
          "content": "AWS WAF protect agains :<br>Presence of SQL code that is likely to be malicious (known as SQL injection).<br>Presence of a script that is likely to be malicious (known as cross-site scripting).<br><br>AWS Shield provides protection against distributed denial of service (DDoS) attacks for AWS resources, at the network and transport layers (layer 3 and 4) and the application layer (layer 7).<br><br>https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1050822,
          "date": "Mon 22 Apr 2024 17:47",
          "username": "thanhnv142",
          "content": "Finally, I am here at the end. Thank you guys for your support!",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1015254,
          "date": "Sat 23 Mar 2024 22:10",
          "username": "Guru4Cloud",
          "content": "B. Configure AWS WAF.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1014154,
          "date": "Fri 22 Mar 2024 16:41",
          "username": "aleariva",
          "content": "B is the correct. https://docs.aws.amazon.com/waf/latest/developerguide/classic-web-acl-xss-conditions.html",
          "upvote_count": "5",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#624",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to provide users with access to AWS resources. The company has 1,500 users and manages their access to on-premises resources through Active Directory user groups on the corporate network. However, the company does not want users to have to maintain another identity to access the resources. A solutions architect must manage user access to the AWS resources while preserving access to the on-premises resources.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#624",
          "answers": [
            {
              "choice": "<p>Create an IAM user for each user in the company. Attach the appropriate policies to each user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Cognito with an Active Directory user pool. Create roles with the appropriate policies attached.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Define cross-account roles with the appropriate policies attached. Map the roles to the Active Directory groups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Security Assertion Markup Language (SAML) 2 0-based federation. Create roles with the appropriate policies attached Map the roles to the Active Directory groups.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 624 discussion",
      "discusstion": [
        {
          "id": 1111911,
          "date": "Tue 02 Jul 2024 13:11",
          "username": "pentium75",
          "content": "Though you can federate Cognito with Active Directory, Cognito is for providing access to your own applications, NOT to AWS Resources.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1123726,
          "date": "Mon 15 Jul 2024 22:01",
          "username": "tsdsmth",
          "content": "While Amazon Cognito can integrate with Active Directory, it is more focused on providing identity management for mobile and web applications. In this scenario, where the primary concern is integrating with existing on-premises resources, using SAML-based federation with IAM roles is more appropriate.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1332628,
          "date": "Fri 27 Dec 2024 22:26",
          "username": "Salilgen",
          "content": "https://aws.amazon.com/blogs/security/aws-federated-authentication-with-active-directory-federation-services-ad-fs/<br>B is wrong because user pool is in Cognito not in Active Directory<br>https://aws.amazon.com/blogs/security/how-to-set-up-amazon-cognito-for-federated-authentication-using-azure-ad/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1108451,
          "date": "Sat 29 Jun 2024 07:49",
          "username": "sangavi_vijay",
          "content": "why its not b?",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1083292,
          "date": "Wed 29 May 2024 08:55",
          "username": "TariqKipkemei",
          "content": "Use Amazon Cognito via SAML integration. (SAML) is an open federation standard that allows an identity provider (for this case on-prem AD) to authenticate users and pass identity and security information about them to a service provider (for this case AWS).<br><br>I will settle for D, because this is definitely required for this to work.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1066877,
          "date": "Fri 10 May 2024 01:55",
          "username": "NickGordon",
          "content": "D.<br><br>An Amazon Cognito user pool is a user directory for WEB and MOBILE app authentication and authorization.So it is not a best option for corporate users.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1064353,
          "date": "Tue 07 May 2024 00:04",
          "username": "potomac",
          "content": "I think it is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1062716,
          "date": "Sun 05 May 2024 08:29",
          "username": "ahlofan",
          "content": "Access to Aws resource -> cognito, then use iam role<br>SAML or AD -> identity pool<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Cognito is for app users, to authenticate users accessing your apps. Cognito is NOT for granting access to AWS resources.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111910,
          "date": "Tue 02 Jul 2024 13:10",
          "username": "pentium75",
          "content": "Cognito is for app users, to authenticate users accessing your apps. Cognito is NOT for granting access to AWS resources.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1061945,
          "date": "Sat 04 May 2024 07:23",
          "username": "dilaaziz",
          "content": "https://aws.amazon.com/identity/saml/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#625",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is hosting a website behind multiple Application Load Balancers. The company has different distribution rights for its content around the world. A solutions architect needs to ensure that users are served the correct content without violating distribution rights.<br><br>Which configuration should the solutions architect choose to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#625",
          "answers": [
            {
              "choice": "<p>Configure Amazon CloudFront with AWS WAF.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Application Load Balancers with AWS WAF<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Route 53 with a geolocation policy<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Route 53 with a geoproximity routing policy<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 625 discussion",
      "discusstion": [
        {
          "id": 1064357,
          "date": "Tue 07 Nov 2023 01:11",
          "username": "potomac",
          "content": "Geolocation routing policy =E2=80=94 Use when you want to route traffic based on the location of users.<br><br>Geo-proximity routing policy =E2=80=94 Use when you want to route traffic based on the location of your resources and optionally switch resource traffic at one location to resources elsewhere.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Restrict the geographic distribution of your content<br>You can use geographic restrictions, sometimes known as geo blocking, to prevent users in specific geographic locations from accessing content that you're distributing through an Amazon CloudFront distribution.\\\"<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html</li><li>\\\"Violation to distribution rights\\\" is something you want to handle seriously by actually blocking the access. This can only be accomplished by \\\"OPTION A\\\".</li><li>They're not talking about detail like your case</li><li>DNS routing can be easily bypassed, and just routing traffic from different countries to different endpoints does still not restrict what each country can see. It's clearly A.</li></ul>",
          "upvote_count": "14",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1284963,
          "date": "Tue 17 Sep 2024 01:16",
          "username": "MatAlves",
          "content": "\\\"Restrict the geographic distribution of your content<br>You can use geographic restrictions, sometimes known as geo blocking, to prevent users in specific geographic locations from accessing content that you're distributing through an Amazon CloudFront distribution.\\\"<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Violation to distribution rights\\\" is something you want to handle seriously by actually blocking the access. This can only be accomplished by \\\"OPTION A\\\".</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1284965,
          "date": "Tue 17 Sep 2024 01:17",
          "username": "MatAlves",
          "content": "\\\"Violation to distribution rights\\\" is something you want to handle seriously by actually blocking the access. This can only be accomplished by \\\"OPTION A\\\".",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1269820,
          "date": "Wed 21 Aug 2024 06:26",
          "username": "loverduck",
          "content": "They're not talking about detail like your case",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1111921,
          "date": "Tue 02 Jan 2024 14:18",
          "username": "pentium75",
          "content": "DNS routing can be easily bypassed, and just routing traffic from different countries to different endpoints does still not restrict what each country can see. It's clearly A.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1127508,
          "date": "Sat 20 Jan 2024 21:59",
          "username": "upliftinghut",
          "content": "\\\"You can also use geolocation routing to restrict distribution of content to only the locations in which you have distribution rights\\\"<br>Link: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1329486,
          "date": "Fri 20 Dec 2024 14:57",
          "username": "EllenLiu",
          "content": "A is incorrect, what is config cloudfront with waf? should be WAF geo match statement only",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1307818,
          "date": "Wed 06 Nov 2024 13:17",
          "username": "bujuman",
          "content": "When you use geolocation routing, you can localize your content and present some or all of your website in the language of your users. You can also use geolocation routing to restrict distribution of content to only the locations in which you have distribution rights. Another possible use is for balancing load across endpoints in a predictable, easy-to-manage way, so that each user location is consistently routed to the same endpoint.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1284966,
          "date": "Tue 17 Sep 2024 01:17",
          "username": "MatAlves",
          "content": "\\\"Restrict the geographic distribution of your content<br>You can use geographic restrictions, sometimes known as geo blocking, to prevent users in specific geographic locations from accessing content that you're distributing through an Amazon CloudFront distribution.\\\"<br><br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Actually, it also says:<br><br>\\\"You can also use geolocation routing to restrict distribution of content to only the locations in which you have distribution rights.\\\"<br><br>It can be either C or A, but C seems to address the question wording better.</li><li>Agreed</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1284968,
          "date": "Tue 17 Sep 2024 01:19",
          "username": "MatAlves",
          "content": "Actually, it also says:<br><br>\\\"You can also use geolocation routing to restrict distribution of content to only the locations in which you have distribution rights.\\\"<br><br>It can be either C or A, but C seems to address the question wording better.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agreed</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1317327,
          "date": "Mon 25 Nov 2024 05:41",
          "username": "JA2018",
          "content": "Agreed",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1265948,
          "date": "Wed 14 Aug 2024 21:19",
          "username": "Johnoppong101",
          "content": "Check line 6 on this documentation.<br>...You can also use geolocation routing to restrict distribution of content to only the locations in which you have distribution rights.<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1235679,
          "date": "Sun 23 Jun 2024 05:18",
          "username": "Lin878",
          "content": "Route 53 can only restrict for geolocation users in this case, it's not for contents. I vote for \\\"A\\\".",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1223317,
          "date": "Mon 03 Jun 2024 01:39",
          "username": "FZBianco",
          "content": "Answer is A.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1172191,
          "date": "Wed 13 Mar 2024 02:57",
          "username": "xBUGx",
          "content": "I vote for A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1163647,
          "date": "Fri 01 Mar 2024 18:37",
          "username": "Ravan",
          "content": ". Configure Amazon Route 53 with a geolocation policy.<br><br>By configuring Amazon Route 53 with a geolocation policy, the solutions architect can direct users to different Application Load Balancers based on their geographical location. This allows the company to serve the correct content to users in different regions without violating distribution rights. Geolocation routing policies enable you to route traffic based on the geographic location of your users, ensuring that users are directed to the nearest or most appropriate endpoint based on their location. This solution is suitable for scenarios where content distribution rights vary by region and need to be enforced accordingly.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1161555,
          "date": "Wed 28 Feb 2024 12:22",
          "username": "Pics00094",
          "content": "I think it's A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1120826,
          "date": "Fri 12 Jan 2024 15:08",
          "username": "awsgeek75",
          "content": "WAF for filtering web traffic based on rules. In this case it may be IP address, geolocation, region. CloudFront for global distribution.<br><br>B: Just balances and does not filter<br>CD: Connects the user to the NEAREST server which is not same as AUTHORISED content<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>WAF for geo filtering can be configured like this:<br>https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html<br><br>How CloudFront integrates with your WAF rules:<br>https://docs.aws.amazon.com/waf/latest/developerguide/cloudfront-features.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1127204,
          "date": "Sat 20 Jan 2024 11:44",
          "username": "awsgeek75",
          "content": "WAF for geo filtering can be configured like this:<br>https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html<br><br>How CloudFront integrates with your WAF rules:<br>https://docs.aws.amazon.com/waf/latest/developerguide/cloudfront-features.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1117151,
          "date": "Tue 09 Jan 2024 02:53",
          "username": "Marco_St",
          "content": "distributions + restriction of content deleivery targetA",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111917,
          "date": "Tue 02 Jan 2024 14:15",
          "username": "pentium75",
          "content": "We want to restrict access by country. People in Spain are allowed to access certain content while people in Portugal are not. A Route 53 geolocation policy that returns the \\\"nearest\\\" endpoint will not help, because a) the \\\"nearest\\\" endpoint could be identical for multiple countries with different distribution rights and b) it could easily be bypassed.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A doesn't talk about geographic restrictions</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1332633,
          "date": "Fri 27 Dec 2024 22:38",
          "username": "Salilgen",
          "content": "A doesn't talk about geographic restrictions",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1106864,
          "date": "Wed 27 Dec 2023 14:48",
          "username": "master9",
          "content": "AWS CloudFront supports geographic restrictions, also known as geo-blocking, which can be used to control the distribution of your content based on the geographic location of your viewers.<br><br>You can use the CloudFront geographic restrictions feature to either grant permission to your users to access your content only if they're in one of the approved countries on your allowlist, or prevent your users from accessing your content if they're in one of the banned countries on your denylist.<br><br>For example, if a request comes from a country where you are not authorized to distribute your content, you can use CloudFront geographic restrictions to block the request.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Edit: Even though you can specify DNS targets by country, this will not help.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111919,
          "date": "Tue 02 Jan 2024 14:17",
          "username": "pentium75",
          "content": "Edit: Even though you can specify DNS targets by country, this will not help.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1096440,
          "date": "Thu 14 Dec 2023 13:02",
          "username": "Murtadhaceit",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1087619,
          "date": "Mon 04 Dec 2023 13:06",
          "username": "ekisako",
          "content": "https://repost.aws/knowledge-center/cloudfront-geo-restriction",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#626",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores its data on premises. The amount of data is growing beyond the company's available capacity.<br><br>The company wants to migrate its data from the on-premises location to an Amazon S3 bucket. The company needs a solution that will automatically validate the integrity of the data after the transfer.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#626",
          "answers": [
            {
              "choice": "<p>Order an AWS Snowball Edge device. Configure the Snowball Edge device to perform the online data transfer to an S3 bucket<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an AWS DataSync agent on premises. Configure the DataSync agent to perform the online data transfer to an S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 File Gateway on premises Configure the S3 File Gateway to perform the online data transfer to an S3 bucket<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an accelerator in Amazon S3 Transfer Acceleration on premises. Configure the accelerator to perform the online data transfer to an S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 626 discussion",
      "discusstion": [
        {
          "id": 1084251,
          "date": "Thu 30 Nov 2023 11:40",
          "username": "TariqKipkemei",
          "content": "During a transfer, AWS DataSync always checks the integrity of your data.<br><br>https://docs.aws.amazon.com/datasync/latest/userguide/configure-data-verification-options.html",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1064358,
          "date": "Tue 07 Nov 2023 01:13",
          "username": "potomac",
          "content": "During a transfer, AWS DataSync always checks the integrity of your data, but you can specify how and when this verification happens with the following options: Verify only the data transferred (recommended) =E2=80=93 DataSync calculates the checksum of transferred files and metadata at the source location.<br><br>https://docs.aws.amazon.com/datasync/latest/userguide/configure-data-verification-options.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1231598,
          "date": "Mon 17 Jun 2024 02:48",
          "username": "KennethNg923",
          "content": "\\\"automatically validate the integrity of the data after the transfer\\\" -> so it should be datasync",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1061949,
          "date": "Sat 04 Nov 2023 08:42",
          "username": "dilaaziz",
          "content": "https://aws.amazon.com/datasync/faqs/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#627",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate two DNS servers to AWS. The servers host a total of approximately 200 zones and receive 1 million requests each day on average. The company wants to maximize availability while minimizing the operational overhead that is related to the management of the two servers.<br><br>What should a solutions architect recommend to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#627",
          "answers": [
            {
              "choice": "<p>Create 200 new hosted zones in the Amazon Route 53 console Import zone files.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Launch a single large Amazon EC2 instance Import zone tiles. Configure Amazon CloudWatch alarms and notifications to alert the company about any downtime.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the servers to AWS by using AWS Server Migration Service (AWS SMS). Configure Amazon CloudWatch alarms and notifications to alert the company about any downtime.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Launch an Amazon EC2 instance in an Auto Scaling group across two Availability Zones. Import zone files. Set the desired capacity to 1 and the maximum capacity to 3 for the Auto Scaling group. Configure scaling alarms to scale based on CPU utilization.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 627 discussion",
      "discusstion": [
        {
          "id": 1120832,
          "date": "Fri 12 Jul 2024 14:25",
          "username": "awsgeek75",
          "content": "Key requirement it \\\"maximize availability while minimizing the operational overhead\\\" of 200 zones to process million requests<br><br>R53 is designed exactly to do this and supports zone import functionality so literally does the job of their EC2 servers but much better so BCD become \\\"overhead\\\" by default. I doubt D will work.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111930,
          "date": "Tue 02 Jul 2024 13:24",
          "username": "pentium75",
          "content": "B, C and D would not \\\"maximize availability\\\" (not HA) and also not minimize the operational overhead.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1084252,
          "date": "Thu 30 May 2024 10:42",
          "username": "TariqKipkemei",
          "content": "'maximize availability while minimizing the operational overhead'severlessAmazon Route 53",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1073963,
          "date": "Sat 18 May 2024 11:54",
          "username": "EdenWang",
          "content": "Only A makes sense",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1066883,
          "date": "Fri 10 May 2024 02:02",
          "username": "NickGordon",
          "content": "Should be A<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-in-use.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1064371,
          "date": "Tue 07 May 2024 00:29",
          "username": "potomac",
          "content": "D makes more sense to me<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, \\\"Desired capacity 1\\\" meaning that usually only 1 server would run, but they want to \\\"maximize availability\\\". And operating EC2 servers would not be \\\"minimizing the operational overhead that is related to the management of the two servers.\\\"</li><li>1 EC2 server for millions of requests?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111929,
          "date": "Tue 02 Jul 2024 13:23",
          "username": "pentium75",
          "content": "No, \\\"Desired capacity 1\\\" meaning that usually only 1 server would run, but they want to \\\"maximize availability\\\". And operating EC2 servers would not be \\\"minimizing the operational overhead that is related to the management of the two servers.\\\"",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1127206,
          "date": "Sat 20 Jul 2024 10:47",
          "username": "awsgeek75",
          "content": "1 EC2 server for millions of requests?",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#628",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global company runs its applications in multiple AWS accounts in AWS Organizations. The company's applications use multipart uploads to upload data to multiple Amazon S3 buckets across AWS Regions. The company wants to report on incomplete multipart uploads for cost compliance purposes.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#628",
          "answers": [
            {
              "choice": "<p>Configure AWS Config with a rule to report the incomplete multipart upload object count.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a service control policy (SCP) to report the incomplete multipart upload object count.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure S3 Storage Lens to report the incomplete multipart upload object count.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 Multi-Region Access Point to report the incomplete multipart upload object count.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 628 discussion",
      "discusstion": [
        {
          "id": 1063230,
          "date": "Sun 05 May 2024 20:00",
          "username": "warp",
          "content": "S3 storage lenses can be used to find incomplete multipart uploads: https://aws.amazon.com/blogs/aws-cloud-financial-management/discovering-and-deleting-incomplete-multipart-uploads-to-lower-amazon-s3-costs/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1106223,
          "date": "Wed 26 Jun 2024 16:43",
          "username": "LocNV",
          "content": "S3 Storage Lens provides four Cost Efficiency metrics for analyzing incomplete multipart uploads in your S3 buckets. These metrics are free of charge and automatically configured for all S3 Storage Lens dashboards.<br><br>Incomplete Multipart Upload Storage Bytes =E2=80=93 The total bytes in scope with incomplete multipart uploads<br>% Incomplete MPU Bytes =E2=80=93 The percentage of bytes in scope that are results of incomplete multipart uploads<br>Incomplete Multipart Upload Object Count =E2=80=93 The number of objects in scope that are incomplete multipart uploads<br>% Incomplete MPU Objects =E2=80=93 The percentage of objects in scope that are incomplete multipart uploads<br>https://aws.amazon.com/blogs/aws-cloud-financial-management/discovering-and-deleting-incomplete-multipart-uploads-to-lower-amazon-s3-costs/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1120837,
          "date": "Fri 12 Jul 2024 14:30",
          "username": "awsgeek75",
          "content": "ABD cannot do any of this so C is the right product for this use case",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1084253,
          "date": "Thu 30 May 2024 10:43",
          "username": "TariqKipkemei",
          "content": "Amazon S3 Storage Lens is a cloud storage analytics solution with support for AWS Organizations to give you organization-wide visibility into object storage, with point-in-time metrics and trend lines as well as actionable recommendations.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1064374,
          "date": "Tue 07 May 2024 00:32",
          "username": "potomac",
          "content": "C for sure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#629",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a production database on Amazon RDS for MySQL. The company wants to upgrade the database version for security compliance reasons. Because the database contains critical data, the company wants a quick solution to upgrade and test functionality without losing any data.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#629",
          "answers": [
            {
              "choice": "<p>Create an RDS manual snapshot. Upgrade to the new version of Amazon RDS for MySQL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use native backup and restore. Restore the data to the upgraded new version of Amazon RDS for MySQL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Database Migration Service (AWS DMS) to replicate the data to the upgraded new version of Amazon RDS for MySQL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon RDS Blue/Green Deployments to deploy and test production changes.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 629 discussion",
      "discusstion": [
        {
          "id": 1084257,
          "date": "Thu 30 Nov 2023 11:51",
          "username": "TariqKipkemei",
          "content": "A blue/green deployment copies a production database environment to a separate, synchronized staging environment. You can make changes to the database in the staging environment without affecting the production environment. When you are ready, you can promote the staging environment to be the new production database environment, with downtime typically under one minute.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1063231,
          "date": "Sun 05 Nov 2023 21:05",
          "username": "warp",
          "content": "You can make changes to the RDS DB instances in the green environment without affecting production workloads. For example, you can upgrade the major or minor DB engine version, upgrade the underlying file system configuration, or change database parameters in the staging environment. You can thoroughly test changes in the green environment.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments-overview.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1229474,
          "date": "Wed 12 Jun 2024 22:11",
          "username": "cjace",
          "content": "Option A (Create an RDS manual snapshot and upgrade) is the most straightforward and least operationally intensive method to upgrade your Amazon RDS for MySQL instance while ensuring data safety and allowing thorough testing of application functionality post-upgrade. This approach leverages RDS's snapshot capabilities to provide a reliable rollback mechanism if needed, making it the recommended choice for your scenario.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1120954,
          "date": "Fri 12 Jan 2024 18:20",
          "username": "awsgeek75",
          "content": "Least overhead, only CD qualify and D is actually a managed solution for what is being proposed (hopefully) in C so it's better.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1114862,
          "date": "Sat 06 Jan 2024 01:53",
          "username": "foha2012",
          "content": "C works for me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1064378,
          "date": "Tue 07 Nov 2023 01:37",
          "username": "potomac",
          "content": "D is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#630",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is creating a data processing job that runs once daily and can take up to 2 hours to complete. If the job is interrupted, it has to restart from the beginning.<br><br>How should the solutions architect address this issue in the MOST cost-effective manner?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#630",
          "answers": [
            {
              "choice": "<p>Create a script that runs locally on an Amazon EC2 Reserved Instance that is triggered by a cron job.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function triggered by an Amazon EventBridge scheduled event.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon Elastic Container Service (Amazon ECS) Fargate task triggered by an Amazon EventBridge scheduled event.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon Elastic Container Service (Amazon ECS) task running on Amazon EC2 triggered by an Amazon EventBridge scheduled event.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 630 discussion",
      "discusstion": [
        {
          "id": 1120956,
          "date": "Fri 12 Jan 2024 18:25",
          "username": "awsgeek75",
          "content": "A: Nonsense<br>B: Lambda max running time is 15 mins<br>D: EC2 is more expensive than Fargate for 2 hours duration as EC2 instance will be billed.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A is also nonsense because an EC2 reserved instance will cost the most for the period when the 2 hour job is not running!</li></ul>",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1127213,
          "date": "Sat 20 Jan 2024 11:54",
          "username": "awsgeek75",
          "content": "A is also nonsense because an EC2 reserved instance will cost the most for the period when the 2 hour job is not running!",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1111932,
          "date": "Tue 02 Jan 2024 14:27",
          "username": "pentium75",
          "content": "Not B because of running time",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1231604,
          "date": "Mon 17 Jun 2024 03:00",
          "username": "KennethNg923",
          "content": "EC2 expensive than Fargate or Lambda, but Lambda has 15 mins limit, so only could choose Fargate for micro service which is C.<br>I think no one will create script for that by the way",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1084262,
          "date": "Thu 30 Nov 2023 11:54",
          "username": "TariqKipkemei",
          "content": "AWS Fargate will bill you based on the amount of vCPU, RAM, OS, CPU architecture, and storage that your containerized apps consume while running on EKS or ECS.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1083323,
          "date": "Wed 29 Nov 2023 10:37",
          "username": "cevin93",
          "content": "should be C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1076150,
          "date": "Tue 21 Nov 2023 10:15",
          "username": "Alex1atd",
          "content": "Lambda function have a limit timeout about 15 minutes, so cannot be B.<br>Answer is C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1070082,
          "date": "Tue 14 Nov 2023 07:59",
          "username": "hungta",
          "content": "Lamda function have a limit timeout about 15 minutes",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1067517,
          "date": "Fri 10 Nov 2023 21:36",
          "username": "cciesam",
          "content": "I think it should be B. Considering the Cost.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Lambda times out after 15 minutes. This job requires a 2-hour time without interruption block. So, definitely not B.</li><li>Lambda Maximum execution time: 900 seconds (15 minutes)</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1096460,
          "date": "Thu 14 Dec 2023 13:34",
          "username": "Murtadhaceit",
          "content": "Lambda times out after 15 minutes. This job requires a 2-hour time without interruption block. So, definitely not B.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1070036,
          "date": "Tue 14 Nov 2023 06:50",
          "username": "zhdetn",
          "content": "Lambda Maximum execution time: 900 seconds (15 minutes)",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1064384,
          "date": "Tue 07 Nov 2023 01:44",
          "username": "potomac",
          "content": "I guess it is C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#631",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A social media company wants to store its database of user profiles, relationships, and interactions in the AWS Cloud. The company needs an application to monitor any changes in the database. The application needs to analyze the relationships between the data entities and to provide recommendations to users.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#631",
          "answers": [
            {
              "choice": "<p>Use Amazon Neptune to store the information. Use Amazon Kinesis Data Streams to process changes in the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Neptune to store the information. Use Neptune Streams to process changes in the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Quantum Ledger Database (Amazon QLDB) to store the information. Use Amazon Kinesis Data Streams to process changes in the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Quantum Ledger Database (Amazon QLDB) to store the information. Use Neptune Streams to process changes in the database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 631 discussion",
      "discusstion": [
        {
          "id": 1111944,
          "date": "Tue 02 Jan 2024 14:55",
          "username": "pentium75",
          "content": "Relationships between entitiesGraph dataNeptune<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Also, Neptune Streams can monitor changes in the data and create a changelog</li><li>I come looking for one of you guys comments. Nice.</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1120958,
          "date": "Fri 12 Jan 2024 18:28",
          "username": "awsgeek75",
          "content": "Also, Neptune Streams can monitor changes in the data and create a changelog<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I come looking for one of you guys comments. Nice.</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1284986,
          "date": "Tue 17 Sep 2024 02:40",
          "username": "MatAlves",
          "content": "I come looking for one of you guys comments. Nice.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1084267,
          "date": "Thu 30 Nov 2023 12:01",
          "username": "TariqKipkemei",
          "content": "Amazon Neptune Database is a serverless graph database designed for superior scalability and availability. Neptune Database provides built-in security, continuous backups, and integrations with other AWS services. Suitable for social media. With the Neptune Streams feature, you can generate a complete sequence of change-log entries that record every change made to your graph data as it happens.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1231605,
          "date": "Mon 17 Jun 2024 03:04",
          "username": "KennethNg923",
          "content": "Normally Amazon Quantum Ledger Database use in blockchain DB more. So i will go for B using Neptune and Neptune Stream for relationship between entities.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1169783,
          "date": "Sat 09 Mar 2024 21:08",
          "username": "haci",
          "content": "Amazon QLDB tracks and maintains a sequential history of every application data change using an immutable and transparent log. It trusts the integrity of your data. Built-in cryptographic authentication provides third-party verification of data changes. QLDB ACID transactions can create accurate, event-driven systems with support for real-time streaming to Amazon Kinesis.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1066887,
          "date": "Fri 10 Nov 2023 03:12",
          "username": "NickGordon",
          "content": "B<br><br>Social network -> Graph Structure -> Neptune",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1065672,
          "date": "Wed 08 Nov 2023 14:58",
          "username": "ekisako",
          "content": "Keyword: analyze the relationships<br>With Amazon Neptune, you can create sophisticated, interactive graph applications that can query billions of relationships in milliseconds.<br><br>https://aws.amazon.com/neptune/features/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1064389,
          "date": "Tue 07 Nov 2023 01:55",
          "username": "potomac",
          "content": "Amazon Neptune is primarily used for managing highly connected graph data, making it well-suited for graph-based applications.<br><br>In contrast, Amazon QLDB is designed for applications that require an immutable and auditable transaction history to ensure data integrity.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Exactly, thus B. \\\"Relationships between the data entities\\\" is \\\"graph data\\\".</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1111943,
          "date": "Tue 02 Jan 2024 14:55",
          "username": "pentium75",
          "content": "Exactly, thus B. \\\"Relationships between the data entities\\\" is \\\"graph data\\\".",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1063240,
          "date": "Sun 05 Nov 2023 21:17",
          "username": "warp",
          "content": "Neptune is a graph type database and Neptune streams provides view on changes into the database: https://docs.aws.amazon.com/neptune/latest/userguide/streams.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1059846,
          "date": "Wed 01 Nov 2023 16:05",
          "username": "AF_1221",
          "content": "C is the correct answer<br>provides a well-suited, managed, and scalable solution for storing and monitoring the database with the least operational overhead, meeting the requirements of the social media company.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>AQLB is like a blockchain database. Are you sure this is the correct option for graph data?</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1127215,
          "date": "Sat 20 Jan 2024 11:56",
          "username": "awsgeek75",
          "content": "AQLB is like a blockchain database. Are you sure this is the correct option for graph data?",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#632",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is creating a new application that will store a large amount of data. The data will be analyzed hourly and will be modified by several Amazon EC2 Linux instances that are deployed across multiple Availability Zones. The needed amount of storage space will continue to grow for the next 6 months.<br><br>Which storage solution should a solutions architect recommend to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#632",
          "answers": [
            {
              "choice": "<p>Store the data in Amazon S3 Glacier. Update the S3 Glacier vault policy to allow access to the application instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume on the application instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the data in an Amazon Elastic File System (Amazon EFS) file system. Mount the file system on the application instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store the data in an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume shared between the application instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 632 discussion",
      "discusstion": [
        {
          "id": 1084269,
          "date": "Sat 30 Nov 2024 12:05",
          "username": "TariqKipkemei",
          "content": "Multiple Linux instances Amazon Elastic File System (Amazon EFS) with multiple mount targets.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1059847,
          "date": "Fri 01 Nov 2024 16:07",
          "username": "AF_1221",
          "content": "C is correct<br>Shared File System: Amazon EFS allows multiple Amazon EC2 instances to mount the same file system simultaneously, making it easy for multiple instances to access and modify the data concurrently.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1332899,
          "date": "Sat 28 Dec 2024 10:57",
          "username": "Salilgen",
          "content": "S3 Glacier (flexible retrieval) is not compatible with hourly job<br>EBS can be shared only in same AZ (B and D are out)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1064391,
          "date": "Thu 07 Nov 2024 01:57",
          "username": "potomac",
          "content": "C is correct",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#633",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company manages an application that stores data on an Amazon RDS for PostgreSQL Multi-AZ DB instance. Increases in traffic are causing performance problems. The company determines that database queries are the primary reason for the slow performance.<br><br>What should a solutions architect do to improve the application's performance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#633",
          "answers": [
            {
              "choice": "<p>Serve read traffic from the Multi-AZ standby replica.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the DB instance to use Transfer Acceleration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a read replica from the source DB instance. Serve read traffic from the read replica.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Kinesis Data Firehose between the application and Amazon RDS to increase the concurrency of database requests.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 633 discussion",
      "discusstion": [
        {
          "id": 1084273,
          "date": "Thu 30 May 2024 11:11",
          "username": "TariqKipkemei",
          "content": "A Multi-AZ DB instance Creates a primary DB instance with one standby DB instance in a different Availability Zone. Using a Multi-AZ DB instance provides high availability, but the standby DB instance doesn't support connections for read workloads.<br>Therefore you will need to create a read replica from the source DB instance then serve read traffic from the read replica.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1121507,
          "date": "Sat 13 Jul 2024 10:27",
          "username": "awsgeek75",
          "content": "Read replica split for read traffic will distribute the overall load and improve the performance.<br><br>A: Standby replica cannot serve traffic (Correct me if I am wrong here)<br>B: Transfer Accelerator is to speed up S3 traffic. Not the case here<br>D: Kiensis will increase concurrency but won't solve the DB performance issues",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1064394,
          "date": "Tue 07 May 2024 01:01",
          "username": "potomac",
          "content": "you can't read from the standby DB instance. If applications require more read capacity, you should create or add additional read replicas.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1063744,
          "date": "Mon 06 May 2024 10:48",
          "username": "warp",
          "content": "After you create a read replica from a source DB instance, the source becomes the primary DB instance. When you make updates to the primary DB instance, Amazon RDS copies them asynchronously to the read replica.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#634",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company collects 10 GB of telemetry data daily from various machines. The company stores the data in an Amazon S3 bucket in a source data account.<br><br>The company has hired several consulting agencies to use this data for analysis. Each agency needs read access to the data for its analysts. The company must share the data from the source data account by choosing a solution that maximizes security and operational efficiency.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#634",
          "answers": [
            {
              "choice": "<p>Configure S3 global tables to replicate data for each agency.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Make the S3 bucket public for a limited time. Inform only the agencies.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure cross-account access for the S3 bucket to the accounts that the agencies own.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an IAM user for each analyst in the source data account. Grant each user access to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 634 discussion",
      "discusstion": [
        {
          "id": 1111953,
          "date": "Tue 02 Jul 2024 14:17",
          "username": "pentium75",
          "content": "A doesn't exist<br>B is a big \\\"hell no\\\"<br>D is a bad practice, even with IAM you'd use groups",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1170785,
          "date": "Wed 11 Sep 2024 03:49",
          "username": "xBUGx",
          "content": "What if other agencies don't have an aws account?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>then we politely tell them \\\"no.\\\"</li></ul>",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1172930,
          "date": "Fri 13 Sep 2024 22:05",
          "username": "chickenmf",
          "content": "then we politely tell them \\\"no.\\\"",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1121510,
          "date": "Sat 13 Jul 2024 10:31",
          "username": "awsgeek75",
          "content": "Others have given reason by ABD are wrong. In case you need it, here is an AWS example exercise of understanding option C<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-walkthroughs-managing-access-example2.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1084282,
          "date": "Thu 30 May 2024 11:18",
          "username": "TariqKipkemei",
          "content": "With cross-account bucket permissions Account A=E2=80=94can grant another AWS account, Account B, permission to access its resources such as buckets and objects. Account B can then delegate those permissions to users in its account.<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-walkthroughs-managing-access-example2.html#:~:text4%3A%20Clean%20up-,An%20AWS%20account,-%E2%80%94for%20example%2C%20Account",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1066892,
          "date": "Fri 10 May 2024 02:17",
          "username": "NickGordon",
          "content": "C is the best answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1066478,
          "date": "Thu 09 May 2024 14:38",
          "username": "cciesam",
          "content": "C may not correct as it's doesn't say if the analyst are using AWS services<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"consulting agencies\\\" means some companies which may have one or more analysts each. Making IAM users for each individual to manage permissions is not well-architected. You would at least create groups and assign it to users.<br>D will work as it is possible but it won't minimize \\\"operational efficiency\\\"</li><li>in that case, an analyst user group should be created and the access should be assigned to the group. So C is better</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1121514,
          "date": "Sat 13 Jul 2024 10:35",
          "username": "awsgeek75",
          "content": "\\\"consulting agencies\\\" means some companies which may have one or more analysts each. Making IAM users for each individual to manage permissions is not well-architected. You would at least create groups and assign it to users.<br>D will work as it is possible but it won't minimize \\\"operational efficiency\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1066890,
          "date": "Fri 10 May 2024 02:16",
          "username": "NickGordon",
          "content": "in that case, an analyst user group should be created and the access should be assigned to the group. So C is better",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1064396,
          "date": "Tue 07 May 2024 01:11",
          "username": "potomac",
          "content": "I think it is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#635",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon FSx for NetApp ONTAP in its primary AWS Region for CIFS and NFS file shares. Applications that run on Amazon EC2 instances access the file shares. The company needs a storage disaster recovery (DR) solution in a secondary Region. The data that is replicated in the secondary Region needs to be accessed by using the same protocols as the primary Region.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#635",
          "answers": [
            {
              "choice": "<p>Create an AWS Lambda function to copy the data to an Amazon S3 bucket. Replicate the S3 bucket to the secondary Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a backup of the FSx for ONTAP volumes by using AWS Backup. Copy the volumes to the secondary Region. Create a new FSx for ONTAP instance from the backup.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an FSx for ONTAP instance in the secondary Region. Use NetApp SnapMirror to replicate data from the primary Region to the secondary Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Elastic File System (Amazon EFS) volume. Migrate the current data to the volume. Replicate the volume to the secondary Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 635 discussion",
      "discusstion": [
        {
          "id": 1121522,
          "date": "Sat 13 Jan 2024 11:48",
          "username": "awsgeek75",
          "content": "This is a very rare usage scenario so here are the docs related to the product:<br>https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/scheduled-replication.html<br><br>AD: Not compatible solutions<br>B: Either wrongly worded or missing something but if I read it correctly, it means just take a backup and restore whereas the question is about continuous replication. If B was scheduled then it would have made sense<br>C is correct as SnapMirror is a managed solution to replicate the data<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree, thus it said \\\"replicated in the secondary Region\\\" only, not create a backup infrastructure in other region for failover, i don't think we need to use Backup feature</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1231606,
          "date": "Mon 17 Jun 2024 03:13",
          "username": "KennethNg923",
          "content": "Agree, thus it said \\\"replicated in the secondary Region\\\" only, not create a backup infrastructure in other region for failover, i don't think we need to use Backup feature",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111955,
          "date": "Tue 02 Jan 2024 15:21",
          "username": "pentium75",
          "content": "Not A, no access with CIFS (SMB) or NFS<br>Not B, one-time copy<br>Not D, EFS does not offer SMB",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1087892,
          "date": "Mon 04 Dec 2023 20:22",
          "username": "SHAAHIBHUSHANAWS",
          "content": "C<br>https://aws.amazon.com/blogs/storage/cross-region-disaster-recovery-with-amazon-fsx-for-netapp-ontap/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1084287,
          "date": "Thu 30 Nov 2023 12:20",
          "username": "TariqKipkemei",
          "content": "Amazon FSx for NetApp ONTAP supports NetApp SnapMirror, a replication technology that you can use to replicate data between two ONTAP file systems. You can configure automatic NetApp SnapMirror replication of your data to another Amazon FSx for NetApp ONTAP file system, including a file system in another AWS Region. If needed, you can fail over your applications and users to use the other Amazon FSx for NetApp ONTAP file system. With SnapMirror, you can configure replication with a Recovery Point Objective (RPO) of as low as 5 minutes, and a Recovery Time Objective (RTO) in single-digit minutes. You can configure SnapMirror using the ONTAP CLI or REST API.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1076289,
          "date": "Tue 21 Nov 2023 13:41",
          "username": "Oblako",
          "content": "SnapMirror enables you to configure replication with an RPO of as low as five minutes, and an RTO in single digit minutes. It is the recommended solution for DR when using FSx for ONTAP: https://aws.amazon.com/blogs/storage/cross-region-disaster-recovery-with-amazon-fsx-for-netapp-ontap/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1064398,
          "date": "Tue 07 Nov 2023 02:19",
          "username": "potomac",
          "content": "You can use NetApp SnapMirror to schedule periodic replication of your FSx for ONTAP file system to or from a second file system. This capability is available for both in-Region and cross-Region deployments.<br><br>https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/scheduled-replication.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#636",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A development team is creating an event-based application that uses AWS Lambda functions. Events will be generated when files are added to an Amazon S3 bucket. The development team currently has Amazon Simple Notification Service (Amazon SNS) configured as the event target from Amazon S3.<br><br>What should a solutions architect do to process the events from Amazon S3 in a scalable way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#636",
          "answers": [
            {
              "choice": "<p>Create an SNS subscription that processes the event in Amazon Elastic Container Service (Amazon ECS) before the event runs in Lambda.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an SNS subscription that processes the event in Amazon Elastic Kubernetes Service (Amazon EKS) before the event runs in Lambda<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an SNS subscription that sends the event to Amazon Simple Queue Service (Amazon SQS). Configure the SOS queue to trigger a Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an SNS subscription that sends the event to AWS Server Migration Service (AWS SMS). Configure the Lambda function to poll from the SMS event.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 636 discussion",
      "discusstion": [
        {
          "id": 1064399,
          "date": "Tue 07 Nov 2023 02:23",
          "username": "potomac",
          "content": "Amazon SQS is designed for event-driven and scalable message processing. It can handle large volumes of messages and automatically scales based on the incoming workload. This allows for better load distribution and scaling as compared to direct Lambda invocation.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1087393,
          "date": "Mon 04 Dec 2023 08:33",
          "username": "TariqKipkemei",
          "content": "scalable serviceserverlessAmazon SQS implemented with FAN-OUT.<br>However SQS is a pull based event distribution service, it does not trigger other services.<br>C is the closest option.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1231607,
          "date": "Mon 17 Jun 2024 03:14",
          "username": "KennethNg923",
          "content": "SQS + SNS standard solution",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1121526,
          "date": "Sat 13 Jan 2024 11:53",
          "username": "awsgeek75",
          "content": "AB are way too complicated to scale without more specifics (no idea about number of events)<br>D SMS is not for this, it's for server migrations<br>C SNS is notified on file creation in S3. SNS publishes to SQS which can scale according to the input load automatically. Lambda execution can scale a lot when attached to SQS.<br><br>ABC have scaling limits each but C's scaling limit is much better than AB",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#637",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a new service behind Amazon API Gateway. The request patterns for the service will be unpredictable and can change suddenly from 0 requests to over 500 per second. The total size of the data that needs to be persisted in a backend database is currently less than 1 GB with unpredictable future growth. Data can be queried using simple key-value requests.<br><br>Which combination ofAWS services would meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#637",
          "answers": [
            {
              "choice": "<p>AWS Fargate<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Lambda<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon DynamoDB<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon EC2 Auto Scaling<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>MySQL-compatible Amazon Aurora<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 637 discussion",
      "discusstion": [
        {
          "id": 1064400,
          "date": "Tue 07 Nov 2023 02:26",
          "username": "potomac",
          "content": "B and C",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1087398,
          "date": "Mon 04 Dec 2023 08:43",
          "username": "TariqKipkemei",
          "content": "Scalable,unpredictable request patternsAWS Lambda<br>Scalable, key-value data Amazon DynamoDB",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1231609,
          "date": "Mon 17 Jun 2024 03:16",
          "username": "KennethNg923",
          "content": "Auto Scaling cannot handle \\\"suddenly from 0 requests to over 500 per second\\\", use Lambda and Dynamo which for Key-value pair.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1190615,
          "date": "Sat 06 Apr 2024 22:35",
          "username": "Phi143",
          "content": "Why not AC? Size of the data has unpredictable future growth and Lambda may not be able to handle it.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Lambda is fully managed by AWS, fully scalable to meet actual spikes in demand</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1317332,
          "date": "Mon 25 Nov 2024 06:07",
          "username": "JA2018",
          "content": "Lambda is fully managed by AWS, fully scalable to meet actual spikes in demand",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1121530,
          "date": "Sat 13 Jan 2024 12:00",
          "username": "awsgeek75",
          "content": "Unpredictable scaling of API loadLambda + SPI Gateway<br>Unpredictable growth of key/value DBDynamoDB<br><br>Fargate behind API requires EKS/ECS setup which is not suitable for 0-500 varying load. Same with EC2 autoscaling.<br>Aurora MySQL is not ideal for key/value and is better suited for relational databases",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1107512,
          "date": "Thu 28 Dec 2023 07:40",
          "username": "Ashhher",
          "content": "why not Fargate?",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        }
      ]
    },
    {
      "question_id": "#638",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company collects and shares research data with the company's employees all over the world. The company wants to collect and store the data in an Amazon S3 bucket and process the data in the AWS Cloud. The company will share the data with the company's employees. The company needs a secure solution in the AWS Cloud that minimizes operational overhead.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#638",
          "answers": [
            {
              "choice": "<p>Use an AWS Lambda function to create an S3 presigned URL. Instruct employees to use the URL.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM user for each employee. Create an IAM policy for each employee to allow S3 access. Instruct employees to use the AWS Management Console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 File Gateway. Create a share for uploading and a share for downloading. Allow employees to mount shares on their local computers to use S3 File Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Transfer Family SFTP endpoints. Select the custom identity provider options. Use AWS Secrets Manager to manage the user credentials Instruct employees to use Transfer Family.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 638 discussion",
      "discusstion": [
        {
          "id": 1078209,
          "date": "Thu 23 Nov 2023 08:55",
          "username": "t0nx",
          "content": "AWS Transfer Family (Option D)<br><br>By configuring AWS Transfer Family SFTP endpoints, you can provide a secure and convenient way for employees to access and transfer data to and from the S3 bucket.<br>Using custom identity provider options allows you to integrate with existing identity systems, and AWS Secrets Manager can be used to manage user credentials securely.<br><br>A suggests using an AWS Lambda function to create an S3 presigned URL. While this can work, it involves manual generation of URLs and sharing them, which may not be as scalable or user-friendly.<br><br>B suggests creating an IAM user for each employee with IAM policies for S3 access. This involves more operational overhead, as managing IAM users for each employee can be cumbersome and less scalable.<br><br>C suggests using an S3 File Gateway. While this can work, it introduces additional components and may not be as straightforward or as efficient as using AWS Transfer Family for SFTP access.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Use AWS Secrets Manager to manage the user credentials\\\", so manage separate credentials for every user in Secrets Manager? And \\\"instruct employees to use Transfer Family\\\", actually Transfer Family is the server component, employees would use an SFTP client.</li><li>https://docs.aws.amazon.com/secretsmanager/latest/userguide/integrating_FTPlong.html</li></ul>",
          "upvote_count": "16",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111975,
          "date": "Tue 02 Jan 2024 15:49",
          "username": "pentium75",
          "content": "\\\"Use AWS Secrets Manager to manage the user credentials\\\", so manage separate credentials for every user in Secrets Manager? And \\\"instruct employees to use Transfer Family\\\", actually Transfer Family is the server component, employees would use an SFTP client.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/secretsmanager/latest/userguide/integrating_FTPlong.html</li></ul>",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1238428,
          "date": "Fri 28 Jun 2024 01:39",
          "username": "xxichlas",
          "content": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/integrating_FTPlong.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111974,
          "date": "Tue 02 Jan 2024 15:48",
          "username": "pentium75",
          "content": "Not A - S3 presigned URLs are temporary (max. 7 days); you'd need to create a new URL at least every 7 days and \\\"instruct employees\\\" to use it. Definitely NOT 'minimizing operational overhead'.<br><br>Not B - \\\"Instruct employees to use the AWS Management Console\\\", using Management console to up- and download files is complex<br><br>Not D - Secrets Manager is not for managing user credentials, and employees would not \\\"use Transfer Family\\\", they would use an (S)FTP client to access the files.<br><br>C grants simple access for up/downloading, no operational overhead.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agree, Use an AWS Lambda function to create an S3 presigned URL for 7 days limits, create URL every 7 days have operational overhead more than use Secret Manager</li><li>Glad that someone else also sees what I see in this question!</li></ul>",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1231610,
          "date": "Mon 17 Jun 2024 03:20",
          "username": "KennethNg923",
          "content": "Agree, Use an AWS Lambda function to create an S3 presigned URL for 7 days limits, create URL every 7 days have operational overhead more than use Secret Manager",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1121544,
          "date": "Sat 13 Jan 2024 12:15",
          "username": "awsgeek75",
          "content": "Glad that someone else also sees what I see in this question!",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1332187,
          "date": "Fri 27 Dec 2024 03:39",
          "username": "FlyingHawk",
          "content": "I will vote for C. For A,the S3 presigned URL is expired in 7 days, youneed to implement a process to allow user send an access request, then validate the user, then trigger the lamdba to generate the resigned URL and send it back to the user. For D, using AWS secret manager to manage the user credentials does not sound practical unless it uses Active Directory.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1329507,
          "date": "Fri 20 Dec 2024 15:41",
          "username": "EllenLiu",
          "content": "S3 File Gateway is designed for hybrid cloud use cases where on-premises applications need to interact with S3. It introduces additional infrastructure complexity and costs, making it less suitable for the described requirements.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1326036,
          "date": "Fri 13 Dec 2024 07:52",
          "username": "LeonSauveterre",
          "content": "A - Definitely not ideal. Presigned URLs have a maximum expiration time of 7 days, which might be limiting for ongoing or long-term data sharing. If employees require frequent or dynamic access to multiple files (which is likely the case because this is a research-type company), they'd need a new URL each time.<br><br>B - This is cumbersome and tiresome.<br><br>C - This is better, but still not ideal for global employees unless the gateway is highly distributed.<br><br>D - Secrets Manager stores sensitive information like passwords or API keys but is not a user directory, so they cannot \\\"manage\\\" credentials.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1238277,
          "date": "Thu 27 Jun 2024 18:12",
          "username": "Rhydian25",
          "content": "It is not operationally eficient to manage, for example, 1000 signed URLs or user credentials. In addition, it is sometimes dificult to instruct that many people.<br><br>It's easier to create an S3 File Gateway and allow the users to mount it locally to access the bucket.<br><br>It could be D if the answer said to use IAM roles instead of managing user credentials in Secrets Manager",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1232652,
          "date": "Wed 19 Jun 2024 01:48",
          "username": "MandAsh",
          "content": "but they didnt mention access in for daily use of occasional.<br>If its occasional A works well but its permanant thing them mouting drive is solution.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1211327,
          "date": "Tue 14 May 2024 12:22",
          "username": "stalk98",
          "content": "i think is d",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1209484,
          "date": "Fri 10 May 2024 20:29",
          "username": "TwinSpark",
          "content": "Less operational overheade is C<br>https://docs.aws.amazon.com/filegateway/latest/files3/GettingStartedAccessFileShare.html<br>on client pc is easily mounted. I remain with some doubts but i will go for C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1179758,
          "date": "Fri 22 Mar 2024 02:34",
          "username": "alawada",
          "content": "i would go with A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1168749,
          "date": "Fri 08 Mar 2024 12:24",
          "username": "seetpt",
          "content": "D seems right",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1163675,
          "date": "Fri 01 Mar 2024 19:26",
          "username": "Ravan",
          "content": "A. Use an AWS Lambda function to create an S3 presigned URL.<br><br>This solution meets the requirements by providing a secure way for employees to access the data stored in the Amazon S3 bucket. Here's how it works:<br><br>When an employee needs to access the data, they request access from the company's system.<br>The company's system triggers an AWS Lambda function.<br>The Lambda function generates a presigned URL with a limited validity period.<br>The employee uses the presigned URL to access the data directly from the S3 bucket.<br>Once the presigned URL expires, access to the data is no longer possible, enhancing security.<br>This solution minimizes operational overhead because it leverages AWS Lambda, which is a fully managed service. There is no need to manage servers or infrastructure, and the solution provides a secure and temporary access mechanism for sharing data stored in Amazon S3.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>if you use this method,when a user request to access, you need to implement the request validation, aka the employee validation, such as integrated with Active Directory.</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1332183,
          "date": "Fri 27 Dec 2024 03:34",
          "username": "FlyingHawk",
          "content": "if you use this method,when a user request to access, you need to implement the request validation, aka the employee validation, such as integrated with Active Directory.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1154290,
          "date": "Mon 19 Feb 2024 21:45",
          "username": "NayeraB",
          "content": "I legitimately get worried every time we have a tie",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1144012,
          "date": "Thu 08 Feb 2024 04:07",
          "username": "1Alpha1",
          "content": "Answer: *A* (Lambda + S3 pre-signed URLautomatic access)<br>*You can use the pre-signed URL multiple times, up to the expiration date and time.*<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1127422,
          "date": "Sat 20 Jan 2024 18:30",
          "username": "upliftinghut",
          "content": "Couldn't find any options that's good for the question. D is most operation efficient but not using AWS Secret Manager as managing credentials, should integrate with IAM or AD instead",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1121539,
          "date": "Sat 13 Jan 2024 12:13",
          "username": "awsgeek75",
          "content": "Minimise op overhead:<br>A: Lambdas and signed url will need to be managed and distributed to each employee every 7 days. So need database of employees and connect to lambda etc<br>B: Too much work (imagine doing that for large number of employees!)<br>D: Incomplete solution. SFTP endpoints need SFTP client and credential approach in Secrets Manager is not going to work<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C: is correct as File Gateway can be mounted on each employee's machine as a network share. Think of it as a network drive on employee's laptop.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1121542,
          "date": "Sat 13 Jan 2024 12:14",
          "username": "awsgeek75",
          "content": "C: is correct as File Gateway can be mounted on each employee's machine as a network share. Think of it as a network drive on employee's laptop.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1119294,
          "date": "Thu 11 Jan 2024 04:02",
          "username": "Marco_St",
          "content": "secure and stable connection<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Use AWS Secrets Manager to manage the user credentials Instruct employees to use Transfer Family.\\\" This is a lot of operational overhead</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1127253,
          "date": "Sat 20 Jan 2024 13:09",
          "username": "awsgeek75",
          "content": "\\\"Use AWS Secrets Manager to manage the user credentials Instruct employees to use Transfer Family.\\\" This is a lot of operational overhead",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#639",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a new furniture inventory application. The company has deployed the application on a fleet ofAmazon EC2 instances across multiple Availability Zones. The EC2 instances run behind an Application Load Balancer (ALB) in their VPC.<br><br>A solutions architect has observed that incoming traffic seems to favor one EC2 instance, resulting in latency for some requests.<br><br>What should the solutions architect do to resolve this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#639",
          "answers": [
            {
              "choice": "<p>Disable session affinity (sticky sessions) on the ALB<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Replace the ALB with a Network Load Balancer<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Increase the number of EC2 instances in each Availability Zone<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Adjust the frequency of the health checks on the ALB's target group<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 639 discussion",
      "discusstion": [
        {
          "id": 1231612,
          "date": "Mon 17 Jun 2024 03:22",
          "username": "KennethNg923",
          "content": "\\\"favor one EC2 instance\\\" it is because you enable the sticky session feature, so you have to disable it",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1144014,
          "date": "Thu 08 Feb 2024 04:12",
          "username": "1Alpha1",
          "content": "Answer: *A*<br>Enabling stickiness may bring imbalance to the load over the backend EC2 instances since sticky sessions help the same client to always redirect to the same instance behind a load balancer.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1121556,
          "date": "Sat 13 Jan 2024 12:25",
          "username": "awsgeek75",
          "content": "The question is too vague. Doesn't say much about the application or EC2 instance setup. So:<br>If you assume that application uses session management then A is correct.<br>If you think application is crashing then D is correct for health checks<br>If you don't assume anything about the application then B is also correct<br>SMH, I'll go with B... happy to discuss<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I'm not entirely happy with any choice but since others have chosen A, I'm just throwing B for discussion.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1121561,
          "date": "Sat 13 Jan 2024 12:30",
          "username": "awsgeek75",
          "content": "I'm not entirely happy with any choice but since others have chosen A, I'm just throwing B for discussion.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1107197,
          "date": "Wed 27 Dec 2023 21:43",
          "username": "MikeSWA",
          "content": "what about c?<br>it actually helps distribute traffic equally across instances in all enabled AZs.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>nope, if the sticky season is on, no matter how many instances you have in AZ or region, it willonly send traffic to you favor session</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1124055,
          "date": "Tue 16 Jan 2024 10:30",
          "username": "mr123dd",
          "content": "nope, if the sticky season is on, no matter how many instances you have in AZ or region, it willonly send traffic to you favor session",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1098199,
          "date": "Sat 16 Dec 2023 14:27",
          "username": "evelynsun",
          "content": "it's A!!<br>Session affinity is a feature of the Application Load Balancer that keeps client requests on the same EC2 instance for the duration of the session. This can cause latency issues if one EC2 instance is overloaded while others are not, as the overloaded instance will handle all subsequent requests until it is taken offline.<br><br>To resolve this issue, the solutions architect should disable session affinity on the ALB. This can be done by setting the \\\"Session affinity\\\" parameter to \\\"Off\\\" in the ALB's configuration.<br><br>Disabling session affinity will cause the ALB to distribute requests across all EC2 instances in the target group, rather than keeping them on a single instance. This will help to balance the load and reduce latency for all requests.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I agree with A but it assumes that ALB has session affinity enabled and app doesn't require it. What if the EC2 instances are running an application that requires session affinity? I think the question is missing some important context</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1121557,
          "date": "Sat 13 Jan 2024 12:28",
          "username": "awsgeek75",
          "content": "I agree with A but it assumes that ALB has session affinity enabled and app doesn't require it. What if the EC2 instances are running an application that requires session affinity? I think the question is missing some important context",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1087404,
          "date": "Mon 04 Dec 2023 08:50",
          "username": "TariqKipkemei",
          "content": "Disable session affinity (sticky sessions) on the ALB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1066896,
          "date": "Fri 10 Nov 2023 03:28",
          "username": "NickGordon",
          "content": "A<br><br>https://repost.aws/knowledge-center/elb-fix-unequal-traffic-routing<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The same article says to check health of instances. This makes D as a good candidate too.<br>\\\"Available healthy instances aren't evenly distributed across Availability Zones.\\\"</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1121559,
          "date": "Sat 13 Jan 2024 12:29",
          "username": "awsgeek75",
          "content": "The same article says to check health of instances. This makes D as a good candidate too.<br>\\\"Available healthy instances aren't evenly distributed across Availability Zones.\\\"",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1064814,
          "date": "Tue 07 Nov 2023 14:24",
          "username": "potomac",
          "content": "A makes more sense than others",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#640",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application workflow that uses an AWS Lambda function to download and decrypt files from Amazon S3. These files are encrypted using AWS Key Management Service (AWS KMS) keys. A solutions architect needs to design a solution that will ensure the required permissions are set correctly.<br><br>Which combination of actions accomplish this? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#640",
          "answers": [
            {
              "choice": "<p>Attach the kms:decrypt permission to the Lambda function's resource policy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Grant the decrypt permission for the Lambda IAM role in the KMS key's policy<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Grant the decrypt permission for the Lambda resource policy in the KMS key's policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new IAM policy with the kms:decrypt permission and attach the policy to the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new IAM role with the kms:decrypt permission and attach the execution role to the Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 640 discussion",
      "discusstion": [
        {
          "id": 1066904,
          "date": "Fri 10 Nov 2023 03:39",
          "username": "NickGordon",
          "content": "BEis right.<br><br>The key policy has to be modified to give lambda execution role access.You can't set another resource policy as principle. So C is not right",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1241691,
          "date": "Thu 04 Jul 2024 00:28",
          "username": "1166ae3",
          "content": "E is wrong, AWS Lambda function can hold only one IAM role. This role is known as the execution role. What we should do is: creating an IAM policy that allows the kms:Decrypt action and attach it to the Lambda function's execution role.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1229578,
          "date": "Thu 13 Jun 2024 03:19",
          "username": "cjace",
          "content": "B D - The combination of Option B (Grant the decrypt permission for the Lambda IAM role in the KMS key's policy) and Option D (Create a new IAM policy with the kms<br>permission and attach the policy to the Lambda function) ensures that both the IAM role used by the Lambda function and the KMS key policy are correctly configured to allow decryption of the files. This setup meets the security requirements and ensures the Lambda function can perform its tasks without issues.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1212121,
          "date": "Wed 15 May 2024 22:20",
          "username": "wizcloudifa",
          "content": "when it comes to permissions look for the \\\"IAM ROLE\\\" word, lambda would need a role to decrypt the s3 object, only roles can be attached to a function not policies",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1144019,
          "date": "Thu 08 Feb 2024 04:20",
          "username": "1Alpha1",
          "content": "B. Grant the decrypt permission for the Lambda ***IAM ROLE*** in the KMS key's policy<br>E. Create a new ***IAM ROLE*** with the kms:decrypt permission and attach the execution role to the Lambda function.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1121579,
          "date": "Sat 13 Jan 2024 12:51",
          "username": "awsgeek75",
          "content": "AC are resource policy, i.e. who can use lambda.<br>https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html<br>D: The wording is confusing so it sort of sounds as if it is correct but you cannot attach a policy to a function.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1111989,
          "date": "Tue 02 Jan 2024 15:57",
          "username": "pentium75",
          "content": "Not A and C because they are about function's \\\"resource policy\\\" which controls who can manage the function, NOT what the function can do.<br>Not D because you attach an IAM policy to an IAM principal, not to a Lambda function.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1087410,
          "date": "Mon 04 Dec 2023 09:01",
          "username": "TariqKipkemei",
          "content": "Create a new IAM role with the kms:decrypt permission and attach the execution role to the Lambda function then grant the decrypt permission for the Lambda IAM role in the KMS key's policy",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1066066,
          "date": "Thu 09 Nov 2023 03:14",
          "username": "louisaok",
          "content": "CE is right<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, the \\\"Lambda resource policy\\\" is about who can manage the Lambda function</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 1111985,
          "date": "Tue 02 Jan 2024 15:55",
          "username": "pentium75",
          "content": "No, the \\\"Lambda resource policy\\\" is about who can manage the Lambda function",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1064835,
          "date": "Tue 07 Nov 2023 14:48",
          "username": "potomac",
          "content": "DE?<br>Create an IAM role for the Lambda function that also grants decryption permission to the S3 bucket.<br>Configure the IAM role as the Lambda functions execution role.<br><br>To use an IAM policy to control access to a KMS key, the key policy for the KMS key must give the account permission to use IAM policies.<br><br>https://repost.aws/knowledge-center/lambda-execution-role-s3-bucket<br>https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>change to CE<br>C. Grant the decrypt permission for the Lambda resource policy in the KMS key's policy.<br>E. Create a new IAM role with the kms:decrypt permission and attach the execution role to the Lambda function.<br><br>https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html<br>https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html</li><li>C is about the \\\"Lambda resource policy\\\", who can manage the function.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 1064845,
          "date": "Tue 07 Nov 2023 14:56",
          "username": "potomac",
          "content": "change to CE<br>C. Grant the decrypt permission for the Lambda resource policy in the KMS key's policy.<br>E. Create a new IAM role with the kms:decrypt permission and attach the execution role to the Lambda function.<br><br>https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html<br>https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C is about the \\\"Lambda resource policy\\\", who can manage the function.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111987,
          "date": "Tue 02 Jan 2024 15:56",
          "username": "pentium75",
          "content": "C is about the \\\"Lambda resource policy\\\", who can manage the function.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#641",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to monitor its AWS costs for financial review. The cloud operations team is designing an architecture in the AWS Organizations management account to query AWS Cost and Usage Reports for all member accounts. The team must run this query once a month and provide a detailed analysis of the bill.<br><br>Which solution is the MOST scalable and cost-effective way to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#641",
          "answers": [
            {
              "choice": "<p>Enable Cost and Usage Reports in the management account. Deliver reports to Amazon Kinesis. Use Amazon EMR for analysis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable Cost and Usage Reports in the management account. Deliver the reports to Amazon S3 Use Amazon Athena for analysis.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Enable Cost and Usage Reports for member accounts. Deliver the reports to Amazon S3 Use Amazon Redshift for analysis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable Cost and Usage Reports for member accounts. Deliver the reports to Amazon Kinesis. Use Amazon QuickSight tor analysis.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 641 discussion",
      "discusstion": [
        {
          "id": 1066908,
          "date": "Sun 10 Nov 2024 03:44",
          "username": "NickGordon",
          "content": "B<br><br>https://aws.amazon.com/blogs/big-data/analyze-amazon-s3-storage-costs-using-aws-cost-and-usage-reports-amazon-s3-inventory-and-amazon-athena/",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1326039,
          "date": "Fri 13 Dec 2024 08:02",
          "username": "LeonSauveterre",
          "content": "A - EMR is powerful for large-scale data processing, but is overkill for a monthly query since neither Kinesis nor EMR is cost-effective for infrequent processing.<br>B - Cost and Usage Reports are already optimized for S3 delivery, and Athena directly integrates with S3.<br>C & D - Delivering reports for each member account creates redundant data. That mean extra time, extra work to do manually, extra money to cost, and extra account to manage.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1087412,
          "date": "Wed 04 Dec 2024 09:05",
          "username": "TariqKipkemei",
          "content": "Scalable and cost-effective wayEnable Cost and Usage Reports in the management account. Deliver the reports to Amazon S3 Use Amazon Athena for analysis",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1064847,
          "date": "Thu 07 Nov 2024 14:58",
          "username": "potomac",
          "content": "B<br>once a month",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#642",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to run a gaming application on Amazon EC2 instances that are part of an Auto Scaling group in the AWS Cloud. The application will transmit data by using UDP packets. The company wants to ensure that the application can scale out and in as traffic increases and decreases.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#642",
          "answers": [
            {
              "choice": "<p>Attach a Network Load Balancer to the Auto Scaling group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Attach an Application Load Balancer to the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an Amazon Route 53 record set with a weighted policy to route traffic appropriately.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a NAT instance that is configured with port forwarding to the EC2 instances in the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 642 discussion",
      "discusstion": [
        {
          "id": 1060853,
          "date": "Thu 02 Nov 2023 21:05",
          "username": "Sugarbear_01",
          "content": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1231614,
          "date": "Mon 17 Jun 2024 03:26",
          "username": "KennethNg923",
          "content": "UDP packets can scale out and in",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1121590,
          "date": "Sat 13 Jan 2024 13:12",
          "username": "awsgeek75",
          "content": "UDP can only be monitored by NLB.<br>ALB is for application layer (HTTP etc)<br>R53 is DNS<br>NAT is for port forwarding/address translation etc which is not going to help with scaling<br><br>A is correct",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1087413,
          "date": "Mon 04 Dec 2023 09:07",
          "username": "TariqKipkemei",
          "content": "UDP packetsNetwork Load Balancer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#643",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs several websites on AWS for its different brands. Each website generates tens of gigabytes of web traffic logs each day. A solutions architect needs to design a scalable solution to give the company's developers the ability to analyze traffic patterns across all the company's websites. This analysis by the developers will occur on demand once a week over the course of several months. The solution must support queries with standard SQL.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#643",
          "answers": [
            {
              "choice": "<p>Store the logs in Amazon S3. Use Amazon Athena tor analysis.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store the logs in Amazon RDS. Use a database client for analysis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the logs in Amazon OpenSearch Service. Use OpenSearch Service for analysis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the logs in an Amazon EMR cluster Use a supported open-source framework for SQL-based analysis.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 643 discussion",
      "discusstion": [
        {
          "id": 1121605,
          "date": "Sat 13 Jan 2024 13:21",
          "username": "awsgeek75",
          "content": "Scalable + \\\"The solution must support queries with standard SQL\\\"A<br>B not scalable<br>C OpenSearch is like ElasticSearch so does not support SQL syntax<br>D EMR is processing not storage. Map-Reduce can use SQL like syntax but this option does not solve scalable storage issues. You normally run EMR on some stored data<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>OpenSearch can support SQL queries, https://docs.aws.amazon.com/opensearch-service/latest/developerguide/sql-support.html</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1164449,
          "date": "Sun 03 Mar 2024 03:07",
          "username": "cedser8",
          "content": "OpenSearch can support SQL queries, https://docs.aws.amazon.com/opensearch-service/latest/developerguide/sql-support.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1231616,
          "date": "Mon 17 Jun 2024 03:27",
          "username": "KennethNg923",
          "content": "standard SQL + analyze traffic",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1112524,
          "date": "Wed 03 Jan 2024 06:38",
          "username": "pentium75",
          "content": "Difficult question because both A and C meet the requirements. (OpenSearch does \\\"support queries with standard SQL\\\".)<br><br>Still, native S3 storage is slightly cheaper than storage for OpenSearch. Also, Athena does not incur additional cost while OpenSearch does. Question asks for cost efficiency, thus A.<br><br>D is out, not only because of the cost but also because you do not 'store logs in (!) an Amazon EMR cluster'; you can use (!) an EMR cluster to analyze data that is stored elsewhere.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>And descriptions of both products, Athena as well as OpenSearch, state that you can use them to \\\"analyze\\\" data.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1112525,
          "date": "Wed 03 Jan 2024 06:39",
          "username": "pentium75",
          "content": "And descriptions of both products, Athena as well as OpenSearch, state that you can use them to \\\"analyze\\\" data.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1103187,
          "date": "Fri 22 Dec 2023 07:19",
          "username": "[Removed]",
          "content": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cold-storage.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Seems that even cold storage is still more expensive than S3.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1112520,
          "date": "Wed 03 Jan 2024 06:36",
          "username": "pentium75",
          "content": "Seems that even cold storage is still more expensive than S3.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1087416,
          "date": "Mon 04 Dec 2023 09:10",
          "username": "TariqKipkemei",
          "content": "solution must support queries with standard SQLAmazon S3 with Athena",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1066909,
          "date": "Fri 10 Nov 2023 03:46",
          "username": "NickGordon",
          "content": "A,mostcost effective",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1064872,
          "date": "Tue 07 Nov 2023 15:23",
          "username": "potomac",
          "content": "option D (using Amazon EMR with an open-source framework) may be overkill for the relatively simple SQL-based analysis.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#644",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An international company has a subdomain for each country that the company operates in. The subdomains are formatted as example.com, country1.example.com, and country2.example.com. The company's workloads are behind an Application Load Balancer. The company wants to encrypt the website data that is in transit.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#644",
          "answers": [
            {
              "choice": "<p>Use the AWS Certificate Manager (ACM) console to request a public certificate for the apex top domain example com and a wildcard certificate for *.example.com.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Certificate Manager (ACM) console to request a private certificate for the apex top domain example.com and a wildcard certificate for *.example.com.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Certificate Manager (ACM) console to request a public and private certificate for the apex top domain example.com.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Validate domain ownership by email address. Switch to DNS validation by adding the required DNS records to the DNS provider.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Validate domain ownership for the domain by adding the required DNS records to the DNS provider.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 644 discussion",
      "discusstion": [
        {
          "id": 1121632,
          "date": "Sat 13 Jul 2024 12:37",
          "username": "awsgeek75",
          "content": "B is private certificate so won't help as that is for internal use<br>C is for apex domain only and won't help with wildcard domain<br>A is correct<br><br>DE are both doable as per these articles<br><br>D: https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html<br>E: https://docs.aws.amazon.com/acm/latest/userguide/domain-ownership-validation.html<br><br>D is less applicable because it does not say if R53 is being used for DNS. You only validate ownership to R53<br>C makes more sense as it applies to both R53 and other DNS providers",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1087419,
          "date": "Tue 04 Jun 2024 08:13",
          "username": "TariqKipkemei",
          "content": "Validate domain ownership for the domain by adding the required DNS records to the DNS provider then use the AWS Certificate Manager (ACM) console to request a public certificate for the apex top domain example com and a wildcard certificate for *.example.com",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1065443,
          "date": "Wed 08 May 2024 08:43",
          "username": "cciesam",
          "content": "AE correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1064877,
          "date": "Tue 07 May 2024 14:29",
          "username": "potomac",
          "content": "BCD are wrong<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why E and not D ?</li><li>need to put A-record and CNAME in public DNS record to proof you are the legal owner of the domain name.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1077275,
          "date": "Wed 22 May 2024 10:54",
          "username": "t0nx",
          "content": "Why E and not D ?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>need to put A-record and CNAME in public DNS record to proof you are the legal owner of the domain name.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1101611,
          "date": "Thu 20 Jun 2024 14:19",
          "username": "Cyberkayu",
          "content": "need to put A-record and CNAME in public DNS record to proof you are the legal owner of the domain name.",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#645",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is required to use cryptographic keys in its on-premises key manager. The key manager is outside of the AWS Cloud because of regulatory and compliance requirements. The company wants to manage encryption and decryption by using cryptographic keys that are retained outside of the AWS Cloud and that support a variety of external key managers from different vendors.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#645",
          "answers": [
            {
              "choice": "<p>Use AWS CloudHSM key store backed by a CloudHSM cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Key Management Service (AWS KMS) external key store backed by an external key manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the default AWS Key Management Service (AWS KMS) managed key store.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a custom key store backed by an AWS CloudHSM cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 645 discussion",
      "discusstion": [
        {
          "id": 1112534,
          "date": "Wed 03 Jul 2024 05:46",
          "username": "pentium75",
          "content": "Keys are supposed to be managed \\\"outside of the AWS cloud\\\", thus A, C and D are out.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1064879,
          "date": "Tue 07 May 2024 14:32",
          "username": "potomac",
          "content": "https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1098219,
          "date": "Sun 16 Jun 2024 14:07",
          "username": "evelynsun",
          "content": "it's A.<br>This solution is the LEAST operational overhead because it does not require the company to manage any infrastructure or software outside of the AWS Cloud. The AWS CloudHSM key store is managed by AWS, and the company can use it to store and manage its cryptographic keys without having to worry about the underlying infrastructure or software. The CloudHSM cluster is managed by AWS, and the company can use it to create and manage its cryptographic keys without having to worry about the hardware or software.<br><br>the AWS CloudHSM key store can also be used for external key managers. The AWS CloudHSM key store is a managed key store that is backed by an AWS CloudHSM cluster. The AWS CloudHSM cluster is a managed service that is provided by AWS.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"The AWS CloudHSM key store is managed by AWS\\\" which is exactly what this company does NOT want.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1112531,
          "date": "Wed 03 Jul 2024 05:44",
          "username": "pentium75",
          "content": "\\\"The AWS CloudHSM key store is managed by AWS\\\" which is exactly what this company does NOT want.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1098218,
          "date": "Sun 16 Jun 2024 14:06",
          "username": "evelynsun",
          "content": "it's A.<br>This solution is the LEAST operational overhead because it does not require the company to manage any infrastructure or software outside of the AWS Cloud. The AWS CloudHSM key store is managed by AWS, and the company can use it to store and manage its cryptographic keys without having to worry about the underlying infrastructure or software. The CloudHSM cluster is managed by AWS, and the company can use it to create and manage its cryptographic keys without having to worry about the hardware or software.<br><br>the AWS CloudHSM key store can also be used for external key managers. The AWS CloudHSM key store is a managed key store that is backed by an AWS CloudHSM cluster. The AWS CloudHSM cluster is a managed service that is provided by AWS.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"The AWS CloudHSM key store is managed by AWS\\\" which is exactly what this company does NOT want.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1112532,
          "date": "Wed 03 Jul 2024 05:44",
          "username": "pentium75",
          "content": "\\\"The AWS CloudHSM key store is managed by AWS\\\" which is exactly what this company does NOT want.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1087988,
          "date": "Tue 04 Jun 2024 21:02",
          "username": "SHAAHIBHUSHANAWS",
          "content": "B<br>https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1087425,
          "date": "Tue 04 Jun 2024 08:22",
          "username": "TariqKipkemei",
          "content": "https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#:~:textDocument%20history-,External%20key%20stores,-PDF",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1076110,
          "date": "Tue 21 May 2024 08:21",
          "username": "1rob",
          "content": "Answer A does not comply because aws cloudHSM is within aws<br>Answer B is the correct answer because the company is required to use its on-premises key manager.Following https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html gives :An external key store is an AWS KMS custom key store backed by an external key manager outside of AWS that you own and control.(...)<br><br>Answer C and D are both solutions in the aws cloud so that does not fit.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#646",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to host a high performance computing (HPC) workload in the AWS Cloud. The workload will run on hundreds of Amazon EC2 instances and will require parallel access to a shared file system to enable distributed processing of large datasets. Datasets will be accessed across multiple instances simultaneously. The workload requires access latency within 1 ms. After processing has completed, engineers will need access to the dataset for manual postprocessing.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#646",
          "answers": [
            {
              "choice": "<p>Use Amazon Elastic File System (Amazon EFS) as a shared file system. Access the dataset from Amazon EFS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Mount an Amazon S3 bucket to serve as the shared file system. Perform postprocessing directly from the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon FSx for Lustre as a shared file system. Link the file system to an Amazon S3 bucket for postprocessing.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS Resource Access Manager to share an Amazon S3 bucket so that it can be mounted to all instances for processing and postprocessing.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 646 discussion",
      "discusstion": [
        {
          "id": 1064883,
          "date": "Tue 07 Nov 2023 15:35",
          "username": "potomac",
          "content": "Amazon FSx for Lustre is a fully managed, high-performance file system optimized for HPC workloads. It is designed to deliver sub-millisecond latencies and high throughput, making it ideal for applications that require parallel access to shared storage, such as simulations and data analytics.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1231621,
          "date": "Mon 17 Jun 2024 03:34",
          "username": "KennethNg923",
          "content": "host a high performance computing (HPC) workload -> FSx lustre",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1191991,
          "date": "Tue 09 Apr 2024 07:13",
          "username": "zinabu",
          "content": "FSx luster for HPC",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1112540,
          "date": "Wed 03 Jan 2024 06:52",
          "username": "pentium75",
          "content": "EFS could meet the latency requirement for most (!) read (!) operations, but this is not enough here. FSx for Lustre ist specifically designed for HPC.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1088249,
          "date": "Tue 05 Dec 2023 08:38",
          "username": "TariqKipkemei",
          "content": "high performance computing (HPC) workloads, shared file system Amazon FSx for Lustre",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#647",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A gaming company is building an application with Voice over IP capabilities. The application will serve traffic to users across the world. The application needs to be highly available with an automated failover across AWS Regions. The company wants to minimize the latency of users without relying on IP address caching on user devices.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#647",
          "answers": [
            {
              "choice": "<p>Use AWS Global Accelerator with health checks.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Route 53 with a geolocation routing policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon CloudFront distribution that includes multiple origins.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Application Load Balancer that uses path-based routing.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 647 discussion",
      "discusstion": [
        {
          "id": 1064886,
          "date": "Tue 07 Nov 2023 15:39",
          "username": "potomac",
          "content": "Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1112543,
          "date": "Wed 03 Jan 2024 06:55",
          "username": "pentium75",
          "content": "A - does exactly what is required<br>Not B - Would rely on DNS caching (as it should not)<br>Not C - CloudFront is not for VoIP<br>Not D - ALB does not address any of the issues and would not support VoIP",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1231622,
          "date": "Mon 17 Jun 2024 03:35",
          "username": "KennethNg923",
          "content": "automated failover across AWS Region + minimize latency -> Global Accelerator",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1096582,
          "date": "Thu 14 Dec 2023 16:05",
          "username": "Murtadhaceit",
          "content": "VoIP > UDP > Global Accelerator.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1092203,
          "date": "Sun 10 Dec 2023 01:43",
          "username": "kaleemanjum",
          "content": "AWS Global Accelerator: AWS Global Accelerator is a service that uses static IP addresses (Anycast IPs) to provide a global entry point for your applications. It routes traffic over the AWS global network to the optimal AWS endpoint based on health, geography, and routing policies.<br><br>Health Checks: AWS Global Accelerator supports health checks, allowing it to route traffic only to healthy endpoints. This helps in achieving high availability and automated failover across AWS Regions.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1087991,
          "date": "Mon 04 Dec 2023 22:12",
          "username": "SHAAHIBHUSHANAWS",
          "content": "A<br>https://aws.amazon.com/global-accelerator/faqs/#:~:textGlobal%20Accelerator%20is%20a%20good,AWS%20Shield%20for%20DDoS%20protection.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1065681,
          "date": "Wed 08 Nov 2023 15:10",
          "username": "ekisako",
          "content": "https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-benefits-of-migrating.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1065643,
          "date": "Wed 08 Nov 2023 14:14",
          "username": "cciesam",
          "content": "Global Accelerator is the answer as it can handle both TCP and UDP",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1060843,
          "date": "Thu 02 Nov 2023 20:48",
          "username": "Sugarbear_01",
          "content": "This answer should be C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>CloudFront is not for VoIP (which usually uses UDP).</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1112541,
          "date": "Wed 03 Jan 2024 06:53",
          "username": "pentium75",
          "content": "CloudFront is not for VoIP (which usually uses UDP).",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#648",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A weather forecasting company needs to process hundreds of gigabytes of data with sub-millisecond latency. The company has a high performance computing (HPC) environment in its data center and wants to expand its forecasting capabilities.<br><br>A solutions architect must identify a highly available cloud storage solution that can handle large amounts of sustained throughput. Files that are stored in the solution should be accessible to thousands of compute instances that will simultaneously access and process the entire dataset.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#648",
          "answers": [
            {
              "choice": "<p>Use Amazon FSx for Lustre scratch file systems.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon FSx for Lustre persistent file systems.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic File System (Amazon EFS) with Bursting Throughput mode.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic File System (Amazon EFS) with Provisioned Throughput mode.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 648 discussion",
      "discusstion": [
        {
          "id": 1064890,
          "date": "Tue 07 Nov 2023 15:42",
          "username": "potomac",
          "content": "Option A (Amazon FSx for Lustre scratch file systems) is designed for temporary data storage and does not provide the data persistence required for this scenario.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1231623,
          "date": "Mon 17 Jun 2024 03:36",
          "username": "KennethNg923",
          "content": "HPC + the entire dataset -> FSx Lustre presistence",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1121683,
          "date": "Sat 13 Jan 2024 14:32",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-fsx-lustre.html<br><br>Both AB can handle the processing requirements but B is Highly Available which is also a requirement not met by A.<br><br>CD won't mee the performance requirements",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1088261,
          "date": "Tue 05 Dec 2023 09:02",
          "username": "TariqKipkemei",
          "content": "high performance computing,highly available cloud storage solutionAmazon FSx for Lustre persistent file systems",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#649",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company runs a PostgreSQL database on premises. The database stores data by using high IOPS Amazon Elastic Block Store (Amazon EBS) block storage. The daily peak I/O transactions per second do not exceed 15,000 IOPS. The company wants to migrate the database to Amazon RDS for PostgreSQL and provision disk IOPS performance independent of disk storage capacity.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#649",
          "answers": [
            {
              "choice": "<p>Configure the General Purpose SSD (gp2) EBS volume storage type and provision 15,000 IOPS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the Provisioned IOPS SSD (io1) EBS volume storage type and provision 15,000 IOPS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the General Purpose SSD (gp3) EBS volume storage type and provision 15,000 IOPS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the EBS magnetic volume type to achieve maximum IOPS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 649 discussion",
      "discusstion": [
        {
          "id": 1148280,
          "date": "Mon 12 Aug 2024 15:41",
          "username": "BillaRanga",
          "content": "GP2 - - Size of the volume and IOPS are linked, max IOPS is 16,000<br>GP3 -Can increase IOPS up to 16,000 and throughput up to 1000 MiB/s independently<br><br>GP3 is 20% cheaper than GP2",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1076317,
          "date": "Tue 21 May 2024 13:39",
          "username": "Oblako",
          "content": "Both gp2 and gp3 can provision up to 16.000 IOPS. gp3 is cheaper than gp2.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1088262,
          "date": "Wed 05 Jun 2024 08:04",
          "username": "TariqKipkemei",
          "content": "MOST cost-effective GP3",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1087995,
          "date": "Tue 04 Jun 2024 21:28",
          "username": "SHAAHIBHUSHANAWS",
          "content": "C<br>https://aws.amazon.com/ebs/general-purpose/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1069149,
          "date": "Mon 13 May 2024 08:21",
          "username": "lagorb",
          "content": "gp2 and gp3 can provision up to 16.000 IOPS, and gp3 is cheaper than gp2",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1064893,
          "date": "Tue 07 May 2024 14:46",
          "username": "potomac",
          "content": "GP3 is better and cheaper than GP2",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#650",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its on-premises Microsoft SQL Server Enterprise edition database to AWS. The company's online application uses the database to process transactions. The data analysis team uses the same production database to run reports for analytical processing. The company wants to reduce operational overhead by moving to managed services wherever possible.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#650",
          "answers": [
            {
              "choice": "<p>Migrate to Amazon RDS for Microsoft SOL Server. Use read replicas for reporting purposes<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate to Microsoft SQL Server on Amazon EC2. Use Always On read replicas for reporting purposes<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate to Amazon DynamoDB. Use DynamoDB on-demand replicas for reporting purposes<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate to Amazon Aurora MySQL. Use Aurora read replicas for reporting purposes<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 650 discussion",
      "discusstion": [
        {
          "id": 1148290,
          "date": "Mon 12 Aug 2024 15:49",
          "username": "BillaRanga",
          "content": "B - Not the LEAST operational Overhead.<br>C - It is No-Sql - Not compatible with SQL server which is SQL<br>D - MS Sql Server to MySQL may miss out some SQL Server functionalities.<br><br>A - Read replicas for RDS is easy to create and also it is Asynchronous which should not be a problem for the analytics teams as they can bear 2-3 minutes delay",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1098951,
          "date": "Mon 17 Jun 2024 13:36",
          "username": "superalaga",
          "content": "You can migrate with both A&B but option A is LEAST operational overhead/<br>A: https://aws.amazon.com/tutorials/move-to-managed/migrate-sql-server-to-amazon-rds/<br>B: https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/migrate-a-microsoft-sql-server-database-to-aurora-mysql-by-using-aws-dms-and-aws-sct.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1126851,
          "date": "Fri 19 Jul 2024 17:37",
          "username": "Firdous586",
          "content": "A is the correct answer since RDS supports OLAP<br>And aurora OLTP",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1088267,
          "date": "Wed 05 Jun 2024 08:12",
          "username": "TariqKipkemei",
          "content": "Only Amazon RDS allows the creation of readable standby DB instances.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1064895,
          "date": "Tue 07 May 2024 14:47",
          "username": "potomac",
          "content": "A is the only choice",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#651",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores a large volume of image files in an Amazon S3 bucket. The images need to be readily available for the first 180 days. The images are infrequently accessed for the next 180 days. After 360 days, the images need to be archived but must be available instantly upon request. After 5 years, only auditors can access the images. The auditors must be able to retrieve the images within 12 hours. The images cannot be lost during this process.<br><br>A developer will use S3 Standard storage for the first 180 days. The developer needs to configure an S3 Lifecycle rule.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#651",
          "answers": [
            {
              "choice": "<p>Transition the objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 180 days. S3 Glacier Instant Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Transition the objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 180 days. S3 Glacier Flexible Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 180 days, S3 Glacier Instant Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 180 days, S3 Glacier Flexible Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 651 discussion",
      "discusstion": [
        {
          "id": 1090149,
          "date": "Fri 07 Jun 2024 10:21",
          "username": "TariqKipkemei",
          "content": "Images cannot be losthigh availability.<br> Transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 180 days, S3 Glacier Instant Retrieval after 360 days, and S3 Glacier Deep Archive after 5 years.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1061155,
          "date": "Fri 03 May 2024 07:41",
          "username": "dilaaziz",
          "content": "https://aws.amazon.com/s3/storage-classes/glacier/",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1332967,
          "date": "Sat 28 Dec 2024 14:19",
          "username": "Salilgen",
          "content": "IMO answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1211159,
          "date": "Thu 14 Nov 2024 03:49",
          "username": "Linuslin",
          "content": "\\\"The developer needs to configure an S3 Lifecycle rule.\\\"--->One Zone-IA can't transfer to Glacier Instant Retrieval--->A is out.<br>Check - Unsupported lifecycle transitions<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html<br>\\\"Images cannot be losthigh availability\\\"--->Can't be One Zone-IA--->B is out.<br>\\\"the images need to be archived but must be available instantly upon request\\\"--->Can't be \\\"Flexible\\\" Retrieval--->D is out.<br><br>Only C is the correct answer.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1164813,
          "date": "Tue 03 Sep 2024 13:42",
          "username": "Neung983",
          "content": "A.<br>Here's why this option is the most cost-effective:<br>+S3 One Zone-IA (after 180 days): Offers lower storage costs compared to S3 Standard for infrequently accessed data (180 - 360 days) while maintaining good availability for retrieval.<br>+S3 Glacier Instant Retrieval (after 360 days): Provides immediate access to archived images (360 - 5 years) at a significantly lower cost than S3 Standard storage. Retrieval costs are incurred but typically lower than keeping the data in S3 Standard.<br>+S3 Glacier Deep Archive (after 5 years): Offers the lowest storage cost for long-term archival (beyond 5 years) with retrieval times within 12 hours, meeting the auditor access requirement and minimizing ongoing storage costs.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A is wrong because \\\"The images cannot be lost during this process\\\" then you can use OneZone</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1332966,
          "date": "Sat 28 Dec 2024 14:18",
          "username": "Salilgen",
          "content": "A is wrong because \\\"The images cannot be lost during this process\\\" then you can use OneZone",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1115406,
          "date": "Sat 06 Jul 2024 19:49",
          "username": "Antitouch",
          "content": "https://aws.amazon.com/s3/storage-classes/glacier/#:~:textS3%20Glacier%20Flexible%20Retrieval%20delivers,year%20and%20is%20retrieved%20asynchronously.<br>S3 Glacier Flexible Retrieval delivers low-cost storage, up to 10% lower cost than S3 Glacier Instant Retrieval. Flexible retrieval is cheaper than Instant retrieval.<br>S3 Glacier Flexible retrieval storage class provides minutes to 12 hours retrieval of data. Which is within the required time by auditors.<br>--> We should select flexible retrieval.<br><br>The design is not caring about the high availability. The design is caring about cost. One zone-IA is cheaper than standard IA.<br>--> We should select One Zone IA.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"The images cannot be lost during this process\\\" is a core requirement.<br>The design cares about data loss and 5 years is a long time and AZ failure will result in data loss.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1121694,
          "date": "Sat 13 Jul 2024 13:46",
          "username": "awsgeek75",
          "content": "\\\"The images cannot be lost during this process\\\" is a core requirement.<br>The design cares about data loss and 5 years is a long time and AZ failure will result in data loss.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1112548,
          "date": "Wed 03 Jul 2024 05:59",
          "username": "pentium75",
          "content": "A, B impose risk of the images being lost in case of AZ failure<br>D does not allow instant access after 180 days",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1107781,
          "date": "Fri 28 Jun 2024 12:53",
          "username": "ale_brd_111",
          "content": "Images cannot be losthigh availability. A exposes images to risk",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1076174,
          "date": "Tue 21 May 2024 10:01",
          "username": "Alex1atd",
          "content": "The images cannot be lost during this process.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1075443,
          "date": "Mon 20 May 2024 13:48",
          "username": "1rob",
          "content": "\\\"The images cannot be lost during this process\\\" , imho this rules out S3 One zone infrequent access.S3 Glacier Instant Retrieval gives immediate access.S3 Glacier Flexible Retrieval does not give immediate access. so C.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1074018,
          "date": "Sat 18 May 2024 13:39",
          "username": "EdenWang",
          "content": "high availability is not mentioned, thus I go for A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"The images cannot be lost during this process.\\\"</li><li>That's not HA</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1112547,
          "date": "Wed 03 Jul 2024 05:59",
          "username": "pentium75",
          "content": "\\\"The images cannot be lost during this process.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That's not HA</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1176416,
          "date": "Wed 18 Sep 2024 11:43",
          "username": "TheLaPlanta",
          "content": "That's not HA",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1065061,
          "date": "Tue 07 May 2024 18:05",
          "username": "cciesam",
          "content": "I'll go for A as it doesn't talk about High availability. Considering cost. I'll go for A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"The images cannot be lost during this process.\\\"</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1065684,
          "date": "Wed 08 May 2024 14:13",
          "username": "ekisako",
          "content": "\\\"The images cannot be lost during this process.\\\"",
          "upvote_count": "5",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#652",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a large data workload that runs for 6 hours each day. The company cannot lose any data while the process is running. A solutions architect is designing an Amazon EMR cluster configuration to support this critical data workload.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#652",
          "answers": [
            {
              "choice": "<p>Configure a long-running cluster that runs the primary node and core nodes on On-Demand Instances and the task nodes on Spot Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a transient cluster that runs the primary node and core nodes on On-Demand Instances and the task nodes on Spot Instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a transient cluster that runs the primary node on an On-Demand Instance and the core nodes and task nodes on Spot Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a long-running cluster that runs the primary node on an On-Demand Instance, the core nodes on Spot Instances, and the task nodes on Spot Instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 652 discussion",
      "discusstion": [
        {
          "id": 1066067,
          "date": "Thu 09 Nov 2023 03:15",
          "username": "louisaok",
          "content": "Relax man. take a break since you have made this far so far.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Rest at the end NOT in the middle<br>-- Kobe Bryant</li></ul>",
          "upvote_count": "51",
          "selected_answers": ""
        },
        {
          "id": 1274426,
          "date": "Thu 29 Aug 2024 10:48",
          "username": "AWSSURI",
          "content": "Rest at the end NOT in the middle<br>-- Kobe Bryant",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1064907,
          "date": "Tue 07 Nov 2023 15:58",
          "username": "potomac",
          "content": "A transient cluster provides cost savings because it runs only during the computation time, and it provides scalability and flexibility in a cloud environment.<br><br>Option C (transient cluster with On-Demand primary node and Spot core and task nodes) exposes the core nodes to Spot Instance interruptions, which may not be acceptable for a workload that cannot lose any data.",
          "upvote_count": "14",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1329789,
          "date": "Sat 21 Dec 2024 04:10",
          "username": "EllenLiu",
          "content": "take a break and feel better now. thanks for encouraging with each other!<br>daily batch handling within several hours > transient cluster<br>data-critical application > spot for task node only",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1127266,
          "date": "Sat 20 Jan 2024 13:43",
          "username": "awsgeek75",
          "content": "AD are long-running so don't fit in with 6 hours schedule<br>BC are ideal for scheduled EMR activities<br>C is wrong as running core node on Spot instance has a risk of data loss https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html<br>B is correct because primary, core will be stable on on-demand as recommended by AWS and task can go on spot instances as task nodes are short lived by nature anyway",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1112551,
          "date": "Wed 03 Jan 2024 07:06",
          "username": "pentium75",
          "content": "\\\"Long-running cluster\\\"runs until you shut it down<br>\\\"Transient cluster\\\"runs until the workload is completed<br>This runs only 6 hours each day -> transient -> B or C<br><br>\\\"Cannot lose any data while the process is running\\\" -> Primary and core nodes cannot be Spot instances -> A or B<br>https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-longrunning-transient.html<br>https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-instances-guidelines.html",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1090159,
          "date": "Thu 07 Dec 2023 11:30",
          "username": "TariqKipkemei",
          "content": "Cannot loose dataondemand primary + core nodes<br>Save on costsspot task nodes<br>Runs for 6 hourstransient cluster",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1088000,
          "date": "Mon 04 Dec 2023 22:38",
          "username": "SHAAHIBHUSHANAWS",
          "content": "A<br>https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-instances-guidelines.html<br>It's long running and no data loss is needed.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The link says you can lose data if you are running a transient cluster WITH ONLY Spot instances. \\\"Long-running\\\"runs until you shut it down, \\\"Transient\\\"Runs until the workload is completed</li><li>Option A suggests a long-running cluster, which continues to run until manually terminated. This means that even if tasks are rerouted due to Spot Instance interruptions, the cluster itself remains active, allowing the rerouted tasks to complete on other nodes.<br><br>Option B suggests a transient cluster, which is terminated after all steps are completed. If the Spot Instances are interrupted and tasks are not completed, the cluster might still terminate after the steps are deemed complete, potentially leading to incomplete processing of data.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1112550,
          "date": "Wed 03 Jan 2024 07:04",
          "username": "pentium75",
          "content": "The link says you can lose data if you are running a transient cluster WITH ONLY Spot instances. \\\"Long-running\\\"runs until you shut it down, \\\"Transient\\\"Runs until the workload is completed<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A suggests a long-running cluster, which continues to run until manually terminated. This means that even if tasks are rerouted due to Spot Instance interruptions, the cluster itself remains active, allowing the rerouted tasks to complete on other nodes.<br><br>Option B suggests a transient cluster, which is terminated after all steps are completed. If the Spot Instances are interrupted and tasks are not completed, the cluster might still terminate after the steps are deemed complete, potentially leading to incomplete processing of data.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1133890,
          "date": "Sun 28 Jan 2024 07:56",
          "username": "whiterick",
          "content": "Option A suggests a long-running cluster, which continues to run until manually terminated. This means that even if tasks are rerouted due to Spot Instance interruptions, the cluster itself remains active, allowing the rerouted tasks to complete on other nodes.<br><br>Option B suggests a transient cluster, which is terminated after all steps are completed. If the Spot Instances are interrupted and tasks are not completed, the cluster might still terminate after the steps are deemed complete, potentially leading to incomplete processing of data.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1073103,
          "date": "Fri 17 Nov 2023 09:20",
          "username": "MFKang",
          "content": "Get up Stand up",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#653",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company maintains an Amazon RDS database that maps users to cost centers. The company has accounts in an organization in AWS Organizations. The company needs a solution that will tag all resources that are created in a specific AWS account in the organization. The solution must tag each resource with the cost center ID of the user who created the resource.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#653",
          "answers": [
            {
              "choice": "<p>Move the specific AWS account to a new organizational unit (OU) in Organizations from the management account. Create a service control policy (SCP) that requires all existing resources to have the correct cost center tag before the resources are created. Apply the SCP to the new OU.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function to tag the resources after the Lambda function looks up the appropriate cost center from the RDS database. Configure an Amazon EventBridge rule that reacts to AWS CloudTrail events to invoke the Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS CloudFormation stack to deploy an AWS Lambda function. Configure the Lambda function to look up the appropriate cost center from the RDS database and to tag resources. Create an Amazon EventBridge scheduled rule to invoke the CloudFormation stack.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function to tag the resources with a default value. Configure an Amazon EventBridge rule that reacts to AWS CloudTrail events to invoke the Lambda function when a resource is missing the cost center tag.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 653 discussion",
      "discusstion": [
        {
          "id": 1144363,
          "date": "Thu 08 Feb 2024 11:45",
          "username": "1Alpha1",
          "content": "I'm not sure, but I think this question is from professional solution architect question pool.<br>Please have a look at this one as well.<br>https://www.examtopics.com/discussions/amazon/view/112780-exam-aws-certified-solutions-architect-professional-sap-c02/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>SCPs cannot directly apply tags to resources; they can only restrict actions based on policies. They do not automatically tag resources. SCPs are also used to enforce policies across accounts but cannot look up values from an RDS database or dynamically assign tags.</li></ul>",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1298520,
          "date": "Wed 16 Oct 2024 05:09",
          "username": "JohnYu",
          "content": "SCPs cannot directly apply tags to resources; they can only restrict actions based on policies. They do not automatically tag resources. SCPs are also used to enforce policies across accounts but cannot look up values from an RDS database or dynamically assign tags.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1112556,
          "date": "Wed 03 Jan 2024 07:18",
          "username": "pentium75",
          "content": "A policy cannot look up \\\"the cost center ID of the user who created the resource\\\", we need Lambda to do that. Thus A is out.<br><br>C would work but runs on a schedule which doesn't make sense (and we would temporarily have untagged resources).<br><br>D tags resources \\\"with a default value\\\" which is not what we want.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Please how do you account for this part of the question with option B \\\"The solution must tag each resource with the cost center ID of the user who created the resource.\\\" ? For me this typically what SCP would handle.</li><li>That SCP won't know the cost centre. \\\"RDS database that maps users to cost centers\\\"<br>Unless the solution can read the RDS, it won't work and SCP cannot be programmed to read from RDS before applying the cost centre.</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1114739,
          "date": "Fri 05 Jan 2024 19:58",
          "username": "Ernestokoro",
          "content": "Please how do you account for this part of the question with option B \\\"The solution must tag each resource with the cost center ID of the user who created the resource.\\\" ? For me this typically what SCP would handle.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That SCP won't know the cost centre. \\\"RDS database that maps users to cost centers\\\"<br>Unless the solution can read the RDS, it won't work and SCP cannot be programmed to read from RDS before applying the cost centre.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1121705,
          "date": "Sat 13 Jan 2024 15:06",
          "username": "awsgeek75",
          "content": "That SCP won't know the cost centre. \\\"RDS database that maps users to cost centers\\\"<br>Unless the solution can read the RDS, it won't work and SCP cannot be programmed to read from RDS before applying the cost centre.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1307982,
          "date": "Wed 06 Nov 2024 16:59",
          "username": "bujuman",
          "content": "SCP can not be used to Tag resources",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1302779,
          "date": "Fri 25 Oct 2024 07:50",
          "username": "tonybuivannghia",
          "content": "B is my choice",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1262017,
          "date": "Wed 07 Aug 2024 11:28",
          "username": "1e22522",
          "content": "The best solution that meets all the requirements is option B. Here's why:<br><br>It can tag all resources created in a specific AWS account within the organization.<br>It uses a Lambda function to look up the appropriate cost center from the RDS database, ensuring accurate tagging.<br>The EventBridge rule reacting to CloudTrail events ensures that resources are tagged as they are created.<br>This approach can dynamically tag each resource with the cost center ID of the user who created it.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1224459,
          "date": "Wed 05 Jun 2024 03:10",
          "username": "sheilawu",
          "content": "I will vote for A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1201248,
          "date": "Wed 24 Apr 2024 11:38",
          "username": "sandordini",
          "content": "We need a solution, to automatically tag, also the existing resources. A,C, are more or less working solutions for new resources, but neither can do the tagging of existing resources. D would add a default tag instead of the specific CC.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1182013,
          "date": "Sun 24 Mar 2024 23:45",
          "username": "gsgdga",
          "content": "A is right<br>https://docs.aws.amazon.com/ko_kr/organizations/latest/userguide/orgs_tagging_abac.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1110769,
          "date": "Sun 31 Dec 2023 19:19",
          "username": "fea9bdf",
          "content": "Answer is A, SCP handles the assignment, no need for a Lambda function, that's unnecessary t seems like<br>Service Control Policies (SCPs)<br><br>SCPs are a policy type that you can utilize to manage permissions across accounts in your AWS Organization.<br>Using SCPs lets you ensure that your accounts stay within your organization's access control guidelines.<br>SCPs can be used along-side tag policies to ensure that the tags are applied at the resource creation time and remain attached to the resource.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>How would an SCP look up the correct cost center in the database?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1112552,
          "date": "Wed 03 Jan 2024 07:08",
          "username": "pentium75",
          "content": "How would an SCP look up the correct cost center in the database?",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1107767,
          "date": "Thu 28 Dec 2023 13:45",
          "username": "ale_brd_111",
          "content": "the company still maintains the RDS, nowhere was asked to drop using it, therefore we shall use a solution that takes advantages of it.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1103255,
          "date": "Fri 22 Dec 2023 09:46",
          "username": "ftaws",
          "content": "I also choose A.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>SCP cannot connect to RDS where the cost centre information is stored so A won't work.</li><li>Awsgeek75 and Pentium must be the same person.<br>They always have the same answers with contributions always on point.<br>Great Job!</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1121708,
          "date": "Sat 13 Jan 2024 15:08",
          "username": "awsgeek75",
          "content": "SCP cannot connect to RDS where the cost centre information is stored so A won't work.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Awsgeek75 and Pentium must be the same person.<br>They always have the same answers with contributions always on point.<br>Great Job!</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1198734,
          "date": "Fri 19 Apr 2024 17:38",
          "username": "Oluwatosin09",
          "content": "Awsgeek75 and Pentium must be the same person.<br>They always have the same answers with contributions always on point.<br>Great Job!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1101650,
          "date": "Wed 20 Dec 2023 15:52",
          "username": "Cyberkayu",
          "content": "Company have Organization. A specific AWS account need to ensure all resources were tagged.<br><br>Move this specific AWS account under the company OU, use SCP to enforce top down policies that every member account to adhere.<br><br>Answer A.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>How would an SCP look up the correct cost center in the database?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1112553,
          "date": "Wed 03 Jan 2024 07:09",
          "username": "pentium75",
          "content": "How would an SCP look up the correct cost center in the database?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1098229,
          "date": "Sat 16 Dec 2023 15:22",
          "username": "evelynsun",
          "content": "sorry, i would choose B.<br>because it allows you to tag resources as they are created, without requiring you to move existing resources.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1098225,
          "date": "Sat 16 Dec 2023 15:19",
          "username": "evelynsun",
          "content": "This solution is the best way to meet the requirements of the company. It ensures that all resources in the specific AWS account are tagged with the cost center ID of the user who created the resource. It also allows the company to easily manage and enforce compliance with its tagging policies.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>How would an SCP look up the correct cost center in the database?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1112555,
          "date": "Wed 03 Jan 2024 07:13",
          "username": "pentium75",
          "content": "How would an SCP look up the correct cost center in the database?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1090234,
          "date": "Thu 07 Dec 2023 12:44",
          "username": "TariqKipkemei",
          "content": "Create an AWS Lambda function to tag the resources after the Lambda function looks up the appropriate cost center from the RDS database. Configure an Amazon EventBridge rule that reacts to AWS CloudTrail events to invoke the Lambda function.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1077190,
          "date": "Wed 22 Nov 2023 10:45",
          "username": "t0nx",
          "content": "This solution utilizes AWS Lambda and Amazon EventBridge to automate the tagging process based on information from the RDS database and CloudTrail events.<br><br>AWS Lambda Function: Create a Lambda function that can look up the cost center information from the RDS database and tag resources accordingly.<br><br>Amazon EventBridge Rule: Set up an EventBridge rule to react to AWS CloudTrail events. The rule triggers the Lambda function whenever a resource is created, allowing dynamic tagging based on the cost center associated with the user in the RDS database.<br><br>This solution provides automation, ensuring that resources are tagged appropriately with the cost center ID of the user who created the resource. It also allows for flexibility in updating cost center information without modifying the infrastructure.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#654",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently migrated its web application to the AWS Cloud. The company uses an Amazon EC2 instance to run multiple processes to host the application. The processes include an Apache web server that serves static content. The Apache web server makes requests to a PHP application that uses a local Redis server for user sessions.<br><br>The company wants to redesign the architecture to be highly available and to use AWS managed solutions.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#654",
          "answers": [
            {
              "choice": "<p>Use AWS Elastic Beanstalk to host the static content and the PHP application. Configure Elastic Beanstalk to deploy its EC2 instance into a public subnet. Assign a public IP address.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda to host the static content and the PHP application. Use an Amazon API Gateway REST API to proxy requests to the Lambda function. Set the API Gateway CORS configuration to respond to the domain name. Configure Amazon ElastiCache for Redis to handle session information.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Keep the backend code on the EC2 instance. Create an Amazon ElastiCache for Redis cluster that has Multi-AZ enabled. Configure the ElastiCache for Redis cluster in cluster mode. Copy the frontend resources to Amazon S3. Configure the backend code to reference the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon CloudFront distribution with an Amazon S3 endpoint to an S3 bucket that is configured to host the static content. Configure an Application Load Balancer that targets an Amazon Elastic Container Service (Amazon ECS) service that runs AWS Fargate tasks for the PHP application. Configure the PHP application to use an Amazon ElastiCache for Redis cluster that runs in multiple Availability Zones.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 654 discussion",
      "discusstion": [
        {
          "id": 1121733,
          "date": "Sat 13 Jul 2024 14:30",
          "username": "awsgeek75",
          "content": "Key requirements: HA and Managed Services<br>Key components: PHP, Static content, Redis Elasticache<br>AB are instantly useless for static content scaling<br>C could work but is less managed and \\\"configure the backend code to reference EC2 instance\\\" makes no sense<br>D ECS+Linux+PHP is good managed combination when used with Fargate. S3 for static is well-architected. Multi-AZ ECache for Redis is HA also. Good managed solution for all purposes.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1127762,
          "date": "Sun 21 Jul 2024 10:50",
          "username": "ferdzcruz",
          "content": "D. ECS + Fargate<br>Company wants to redesign the architecture from Server to serverless, and managed by AWS .",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1098235,
          "date": "Sun 16 Jun 2024 14:27",
          "username": "evelynsun",
          "content": "This solution meets the requirements because it uses AWS managed solutions for hosting the static content and the PHP application. It also uses Amazon ECS to run the PHP application in a highly available and scalable manner. The solution also uses Amazon ElastiCache for Redis to handle session information, which is highly available and scalable. The solution also uses Amazon CloudFront to provide a secure and reliable way to deliver the static content to users.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1090236,
          "date": "Fri 07 Jun 2024 11:46",
          "username": "TariqKipkemei",
          "content": "Configure an Amazon CloudFront distribution with an Amazon S3 endpoint to an S3 bucket that is configured to host the static content. Configure an Application Load Balancer that targets an Amazon Elastic Container Service (Amazon ECS) service that runs AWS Fargate tasks for the PHP application. Configure the PHP application to use an Amazon ElastiCache for Redis cluster that runs in multiple Availability Zones.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#655",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a web application on Amazon EC2 instances in an Auto Scaling group that has a target group. The company designed the application to work with session affinity (sticky sessions) for a better user experience.<br><br>The application must be available publicly over the internet as an endpoint. A WAF must be applied to the endpoint for additional security. Session affinity (sticky sessions) must be configured on the endpoint.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#655",
          "answers": [
            {
              "choice": "<p>Create a public Network Load Balancer. Specify the application target group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a Gateway Load Balancer. Specify the application target group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a public Application Load Balancer. Specify the application target group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a second target group. Add Elastic IP addresses to the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a web ACL in AWS WAF. Associate the web ACL with the endpoint<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 655 discussion",
      "discusstion": [
        {
          "id": 1127763,
          "date": "Sun 21 Jan 2024 11:53",
          "username": "ferdzcruz",
          "content": "CE.<br>C. applicationALB<br>E. WAF to endpoint",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1121751,
          "date": "Sat 13 Jan 2024 15:41",
          "username": "awsgeek75",
          "content": "NLB and GLB cannot handle sticky sessions. It's an application level concept (Cookies) so ALB works.<br>Elastic IP will negate sticky sessions and this combination won't work.<br>E give proper permissions to WAF<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I agree with you CE is correct but your explanation is wrong. NLB, ALB and CLB can handle sticky sessions. But the WAF is just only working with ALB, so ALB is correct.</li><li>After a little digging, turns out NLBs only offer IP-based stickiness, which is not ideal for web applications where many users might share the same public IP address (due to NAT oh well). Cookie-based stickiness offered by ALBs is more appropriate.<br><br>PS. Sticky sessions are not supported if you are using TLS termination on NLB. If you need TLS termination and sticky sessions, you should use ALB as well.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 1302783,
          "date": "Fri 25 Oct 2024 08:10",
          "username": "tonybuivannghia",
          "content": "I agree with you CE is correct but your explanation is wrong. NLB, ALB and CLB can handle sticky sessions. But the WAF is just only working with ALB, so ALB is correct.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>After a little digging, turns out NLBs only offer IP-based stickiness, which is not ideal for web applications where many users might share the same public IP address (due to NAT oh well). Cookie-based stickiness offered by ALBs is more appropriate.<br><br>PS. Sticky sessions are not supported if you are using TLS termination on NLB. If you need TLS termination and sticky sessions, you should use ALB as well.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1326135,
          "date": "Fri 13 Dec 2024 14:30",
          "username": "LeonSauveterre",
          "content": "After a little digging, turns out NLBs only offer IP-based stickiness, which is not ideal for web applications where many users might share the same public IP address (due to NAT oh well). Cookie-based stickiness offered by ALBs is more appropriate.<br><br>PS. Sticky sessions are not supported if you are using TLS termination on NLB. If you need TLS termination and sticky sessions, you should use ALB as well.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1101037,
          "date": "Tue 19 Dec 2023 23:20",
          "username": "Mikado211",
          "content": "- Make it accessible from the web + sticky sessionPublic ALB<br>- Additional securityweb ACL in WAF (and integrate the web ACL to the ALB)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 1100322,
          "date": "Tue 19 Dec 2023 06:10",
          "username": "ZZZ_Sleep",
          "content": "session affinity (sticky sessions)Application Load Balancer<br><br>WAF must be applied to the endpoint for additional securityweb ACL in WAF",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 1090243,
          "date": "Thu 07 Dec 2023 12:51",
          "username": "TariqKipkemei",
          "content": "Session AffinityApplication Load Balancer<br>Create a public Application Load Balancer. Specify the application target groupthen create a web ACL in AWS WAF. Associate the web ACL with the ALB endpoint.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CE"
        }
      ]
    },
    {
      "question_id": "#656",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a website that stores images of historical events. Website users need the ability to search and view images based on the year that the event in the image occurred. On average, users request each image only once or twice a year. The company wants a highly available solution to store and deliver the images to users.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#656",
          "answers": [
            {
              "choice": "<p>Store images in Amazon Elastic Block Store (Amazon EBS). Use a web server that runs on Amazon EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store images in Amazon Elastic File System (Amazon EFS). Use a web server that runs on Amazon EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store images in Amazon S3 Standard. Use S3 Standard to directly deliver images by using a static website.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store images in Amazon S3 Standard-Infrequent Access (S3 Standard-IA). Use S3 Standard-IA to directly deliver images by using a static website.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 656 discussion",
      "discusstion": [
        {
          "id": 1079734,
          "date": "Sat 25 Nov 2023 05:54",
          "username": "chikuwan",
          "content": "users request each image only once or twice a year=E3=80=80<br>So the answer is D",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1261036,
          "date": "Mon 05 Aug 2024 12:57",
          "username": "Abbas_Abi_AWS",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1231629,
          "date": "Mon 17 Jun 2024 03:59",
          "username": "KennethNg923",
          "content": "users request each image only once or twice a year, so infrequent is enough and cheaper",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1121758,
          "date": "Sat 13 Jan 2024 15:48",
          "username": "awsgeek75",
          "content": "\\\"On average, users request each image only once or twice a year.\\\"<br>S3 Infrequent Access is more than enough for this.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1112565,
          "date": "Wed 03 Jan 2024 07:45",
          "username": "pentium75",
          "content": "Say, you have 1 TB of files that you access twice a year. Yearly cost:<br>C, S3 Standard: 276 USD for storage, free retrieval276 USD<br>D, S3 Standard-IA: 138 USD for storage, 20 =E2=82=AC for retrieval158 USD",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1105001,
          "date": "Mon 25 Dec 2023 04:59",
          "username": "Kumar05162",
          "content": "Option D: Store images in Amazon S3 Standard-Infrequent Access (S3 Standard-IA). Use S3 Standard-IA to directly deliver images by using a static website.<br><br>S3 Standard-IA is designed specifically for infrequently accessed data, offering lower storage costs compared to S3 Standard while still providing the necessary durability and availability.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1100330,
          "date": "Tue 19 Dec 2023 06:19",
          "username": "ZZZ_Sleep",
          "content": "High Availabilityexcluded A (EBS)<br>cost-effectiveexcluded B (EFS)<br>only once or twice a yearS3 Standard-IA, excluded C (S3 Standard, frequent access)<br><br>Left D, answer",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1090542,
          "date": "Thu 07 Dec 2023 20:16",
          "username": "LuADS",
          "content": "Suppose there are thousands or millions of users, each image should be recovered once or twice a year X total users... makes it more expensive than the standard class since the recovery price of Standard-IA is $0.01 per GB + price of the requests which is also more expensive too.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Not sure if you understood what IA class does. \\\"Recovery price is 0.001 per GB\\\", what's the issue with that if images are requested \\\"only once or twice a year\\\"?<br><br>Say, you have 1 TB of files that you access twice a year.<br>S3 Standard: 276 USD for storage, free retrieval276 USD<br>S3 Standard-IA: 138 USD for storage, 20 =E2=82=AC for retrieval158 USD</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1112563,
          "date": "Wed 03 Jan 2024 07:42",
          "username": "pentium75",
          "content": "Not sure if you understood what IA class does. \\\"Recovery price is 0.001 per GB\\\", what's the issue with that if images are requested \\\"only once or twice a year\\\"?<br><br>Say, you have 1 TB of files that you access twice a year.<br>S3 Standard: 276 USD for storage, free retrieval276 USD<br>S3 Standard-IA: 138 USD for storage, 20 =E2=82=AC for retrieval158 USD",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1090250,
          "date": "Thu 07 Dec 2023 12:54",
          "username": "TariqKipkemei",
          "content": "MOST cost-effectively,request each image only once or twice a year S3 Standard-Infrequent Access",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1088005,
          "date": "Mon 04 Dec 2023 22:51",
          "username": "SHAAHIBHUSHANAWS",
          "content": "D<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html<br>Look at table",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1084175,
          "date": "Thu 30 Nov 2023 10:38",
          "username": "achechen",
          "content": "if the images are accessed once or twice a year, then it is cheaper to use infrequent access tier",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1080664,
          "date": "Sun 26 Nov 2023 14:20",
          "username": "aragornfsm",
          "content": "I believe the correct answer is option D, but ChatGPT mentioned option C. I didn't understand. I'm curious about the actual correct answer.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Might be the fact the a user is requesting to view a image once or twice a year but how many users are there ? :) that's why it points to C i think. I still think that the correct answer is D due to lack of information in the description</li><li>\\\"Users request each image only once or twice per year\\\", this refers to all users together, it does not say \\\"EACH user\\\". In other words, every image is accessed once or twice a year.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1088745,
          "date": "Tue 05 Dec 2023 19:59",
          "username": "AndreiWebNet",
          "content": "Might be the fact the a user is requesting to view a image once or twice a year but how many users are there ? :) that's why it points to C i think. I still think that the correct answer is D due to lack of information in the description<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Users request each image only once or twice per year\\\", this refers to all users together, it does not say \\\"EACH user\\\". In other words, every image is accessed once or twice a year.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1112564,
          "date": "Wed 03 Jan 2024 07:43",
          "username": "pentium75",
          "content": "\\\"Users request each image only once or twice per year\\\", this refers to all users together, it does not say \\\"EACH user\\\". In other words, every image is accessed once or twice a year.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#657",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple AWS accounts in an organization in AWS Organizations that different business units use. The company has multiple offices around the world. The company needs to update security group rules to allow new office CIDR ranges or to remove old CIDR ranges across the organization. The company wants to centralize the management of security group rules to minimize the administrative overhead that updating CIDR ranges requires.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#657",
          "answers": [
            {
              "choice": "<p>Create VPC security groups in the organization's management account. Update the security groups when a CIDR range update is necessary.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a VPC customer managed prefix list that contains the list of CIDRs. Use AWS Resource Access Manager (AWS RAM) to share the prefix list across the organization. Use the prefix list in the security groups across the organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS managed prefix list. Use an AWS Security Hub policy to enforce the security group update across the organization. Use an AWS Lambda function to update the prefix list automatically when the CIDR ranges change.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create security groups in a central administrative AWS account. Create an AWS Firewall Manager common security group policy for the whole organization. Select the previously created security groups as primary groups in the policy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 657 discussion",
      "discusstion": [
        {
          "id": 1090258,
          "date": "Thu 07 Dec 2023 13:00",
          "username": "TariqKipkemei",
          "content": "A managed prefix list is a set of one or more CIDR blocks. You can use prefix lists to make it easier to configure and maintain your security groups and route tables. You can create a prefix list from the IP addresses that you frequently use, and reference them as a set in security group rules and routes instead of referencing them individually. If you scale your network and need to allow traffic from another CIDR block, you can update the relevant prefix list and all security groups that use the prefix list are updated.You can also use managed prefix lists with other AWS accounts using Resource Access Manager (RAM).<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html#:~:textA-,managed%20prefix,-list%20is%20a",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1241727,
          "date": "Thu 04 Jul 2024 02:57",
          "username": "Gape4",
          "content": "I will go for B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1231630,
          "date": "Mon 17 Jun 2024 04:01",
          "username": "KennethNg923",
          "content": "prefix list for CIDR blocks",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1128320,
          "date": "Mon 22 Jan 2024 05:18",
          "username": "avdxeqtr",
          "content": "https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1127282,
          "date": "Sat 20 Jan 2024 14:02",
          "username": "awsgeek75",
          "content": "Such a badly worded question:<br>\\\"The company has multiple offices around the world. The company needs to update security group rules to allow new office CIDR ranges or to remove old CIDR ranges across the organization.\\\"<br><br>Are the CIDR groups associated to offices? That will be illogical. I think it should be VPC and not offices.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1107701,
          "date": "Thu 28 Dec 2023 12:26",
          "username": "ale_brd_111",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1084180,
          "date": "Thu 30 Nov 2023 10:41",
          "username": "achechen",
          "content": "looks like B is the answer. Reference: https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#658",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an on-premises network-attached storage (NAS) system to provide file shares to its high performance computing (HPC) workloads. The company wants to migrate its latency-sensitive HPC workloads and its storage to the AWS Cloud. The company must be able to provide NFS and SMB multi-protocol access from the file system.<br><br>Which solution will meet these requirements with the LEAST latency? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#658",
          "answers": [
            {
              "choice": "<p>Deploy compute optimized EC2 instances into a cluster placement group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy compute optimized EC2 instances into a partition placement group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Attach the EC2 instances to an Amazon FSx for Lustre file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Attach the EC2 instances to an Amazon FSx for OpenZFS file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Attach the EC2 instances to an Amazon FSx for NetApp ONTAP file system.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 658 discussion",
      "discusstion": [
        {
          "id": 1084704,
          "date": "Thu 30 Nov 2023 20:16",
          "username": "lucasbg",
          "content": "You talked avout smb and nfs, you talked fsx netapp ontap<br><br>C is wrong because lustre is a POSIX fs",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1121768,
          "date": "Sat 13 Jan 2024 15:57",
          "username": "awsgeek75",
          "content": "A Because HPC equivalent in AWS is EC2. Cluster placement for low-latency: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html<br>E: ONTAP gives NFS and SMB which is required<br>AE is correct<br>B does not solve low latency requirements<br>C No support for NFS and SMB<br>D OpenZFS is not required<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/fsx/netapp-ontap/features/<br><br>Amazon FSx for NetApp ONTAP provides access to shared file storage over all versions of the Network File System (NFS) and Server Message Block (SMB) protocols, and also supports multi-protocol access (i.e. concurrent NFS and SMB access) to the same data. As a result, you can access Amazon FSx for NetApp ONTAP from virtually any Linux, Windows, or macOS client.</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1121769,
          "date": "Sat 13 Jan 2024 15:58",
          "username": "awsgeek75",
          "content": "https://aws.amazon.com/fsx/netapp-ontap/features/<br><br>Amazon FSx for NetApp ONTAP provides access to shared file storage over all versions of the Network File System (NFS) and Server Message Block (SMB) protocols, and also supports multi-protocol access (i.e. concurrent NFS and SMB access) to the same data. As a result, you can access Amazon FSx for NetApp ONTAP from virtually any Linux, Windows, or macOS client.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1285064,
          "date": "Tue 17 Sep 2024 08:44",
          "username": "MatAlves",
          "content": "I got baited into quickly going for Lustre after reading, but forgot it doesn't not support NFS/SMB.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1123250,
          "date": "Mon 15 Jan 2024 11:34",
          "username": "tsdsmth",
          "content": "Amazon FSx for Lustre does not support SMB. So it's A,E",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1114414,
          "date": "Fri 05 Jan 2024 11:04",
          "username": "1rob",
          "content": "A because cluster placement group means low latency, and D because OpenZFS has less latency compared toFSx for NetApp ONTAP. See https://aws.amazon.com/fsx/when-to-choose-fsx/<br>FSx for OpenZFS can handle SMB and NFS.<br>Despite that for onprem NAS appliances the aws Recommended Amazon FSx file system would be FSx for NetApp ONTAP, I still choose FSx for OpenZFS for the lower latency.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1100346,
          "date": "Tue 19 Dec 2023 06:53",
          "username": "ZZZ_Sleep",
          "content": "LEAST latencycluster placement group<br><br>Amazon FSx for LustreSMB<br>Amazon FSx for OpenZFSNFS<br>Amazon FSx for NetApp ONTAPNFS, SMB, iSCSI<br><br>So, answer are A and E",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1092266,
          "date": "Sun 10 Dec 2023 04:08",
          "username": "Sumith4112",
          "content": "A becase cluster placement group means low latency.<br>E",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1090279,
          "date": "Thu 07 Dec 2023 13:15",
          "username": "TariqKipkemei",
          "content": "HPC, NFS, SMBFSx for NetApp ONTAP file system<br>HPC, latency-sensitivecluster placement group",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1088027,
          "date": "Mon 04 Dec 2023 23:12",
          "username": "SHAAHIBHUSHANAWS",
          "content": "AE<br>https://aws.amazon.com/fsx/when-to-choose-fsx/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1084188,
          "date": "Thu 30 Nov 2023 15:21",
          "username": "achechen",
          "content": "I don't think FSx for Lustre supports SMB. At least I could not find anything in the documentation. However, FSx for ONTAP delivers NFS and SMB support.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1079743,
          "date": "Sat 25 Nov 2023 06:10",
          "username": "chikuwan",
          "content": "https://aws.amazon.com/jp/fsx/lustre/features/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1079658,
          "date": "Sat 25 Nov 2023 01:58",
          "username": "reika1914",
          "content": "To meet the requirements of migrating latency-sensitive HPC workloads with multi-protocol access (NFS and SMB) to AWS with minimal latency, the following solutions would be the most appropriate:<br><br>A. Deploy compute optimized EC2 instances into a cluster placement group.<br>C. Attach the EC2 instances to an Amazon FSx for Lustre file system.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>FSx for Lustre provides Lustre, not SMB and notNFS</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1112566,
          "date": "Wed 03 Jan 2024 07:50",
          "username": "pentium75",
          "content": "FSx for Lustre provides Lustre, not SMB and notNFS",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1077961,
          "date": "Thu 23 Nov 2023 02:24",
          "username": "Chiquitabandita",
          "content": "https://aws.amazon.com/fsx/netapp-ontap/features/#:~:textAmazon%20FSx%20for%20NetApp%20ONTAP%20provides%20access%20to%20shared%20file,access)%20to%20the%20same%20data. \\\"Amazon FSx for NetApp ONTAP provides access to shared file storage over all versions of the Network File System (NFS) and Server Message Block (SMB) protocols, and also supports multi-protocol access (i.e. concurrent NFS and SMB access) to the same data.\\\"",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1076871,
          "date": "Wed 22 Nov 2023 03:43",
          "username": "LemonGremlin",
          "content": "Option A: A cluster placement group provides low-latency and high-bandwidth connectivity between instances. This is particularly beneficial for high-performance computing workloads that are latency-sensitive. Instances within a cluster placement group are placed in close proximity to each other within the same Availability Zone.<br><br>Option C: Amazon FSx for Lustre is a high-performance file system optimized for fast access to data. It is well-suited for high-performance computing workloads. It provides low-latency access to data and supports the NFS protocol.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thank you</li><li>FSx for Lustre is not about NFS or SMB. You will need a linux instance. First install the open-source Lustre client on that instance. Once it's installed, you can mount your file system using standard Linux commands. So C is not correct here because NFS and SMB support is required.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1078156,
          "date": "Thu 23 Nov 2023 08:03",
          "username": "t0nx",
          "content": "Thank you",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1118875,
          "date": "Wed 10 Jan 2024 18:33",
          "username": "1rob",
          "content": "FSx for Lustre is not about NFS or SMB. You will need a linux instance. First install the open-source Lustre client on that instance. Once it's installed, you can mount your file system using standard Linux commands. So C is not correct here because NFS and SMB support is required.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#659",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is relocating its data center and wants to securely transfer 50 TB of data to AWS within 2 weeks. The existing data center has a Site-to-Site VPN connection to AWS that is 90% utilized.<br><br>Which AWS service should a solutions architect use to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#659",
          "answers": [
            {
              "choice": "<p>AWS DataSync with a VPC endpoint<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Direct Connect<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Snowball Edge Storage Optimized<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Storage Gateway<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 659 discussion",
      "discusstion": [
        {
          "id": 1102075,
          "date": "Thu 21 Dec 2023 01:50",
          "username": "Cyberkayu",
          "content": "90% utilization of the bandwidththey discouraged the use of internet bandwidth for uploading, go seek for offline data seeding to AWS method<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>data centers don't \\\"discouraged the use of internet bandwidth.\\\"</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1226529,
          "date": "Sat 08 Jun 2024 06:49",
          "username": "NSA_Poker",
          "content": "data centers don't \\\"discouraged the use of internet bandwidth.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1090836,
          "date": "Fri 08 Dec 2023 08:33",
          "username": "TariqKipkemei",
          "content": "50 TB of data to AWS within 2 weeksSnowball Edge Storage Optimized",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1231632,
          "date": "Mon 17 Jun 2024 04:06",
          "username": "KennethNg923",
          "content": "50 TB of data to AWS within 2 weeks + 90% utilization already be used -> snowball",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1226520,
          "date": "Sat 08 Jun 2024 06:37",
          "username": "NSA_Poker",
          "content": "(B) is correct.<br>Direct Connect is \\\"A dedicated connection [is] made through a 1-Gbps, 10-Gbps, or 100-Gbps Ethernet port dedicated to a single customer.\\\" DX uses 802.1Q VLANs providing a dedicated private network connection to AWS. At 1-Gbps, transfer takes less than 5 days; at 100-Gbps it takes less than 67 minutes. Since it's a data center & not an oil rig in the middle of the Gulf of Mexico, data center should be able to get this service.<br><br>(C) is incorrect<br>\\\"Consider Snowball Edge if you need to run computing in rugged, austere, mobile, or disconnected (or intermittently connected) environments. Also consider it for large-scale data transfers and migrations when bandwidth is not available for use of a high-speed online transfer service, such as AWS DataSync.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>hi bro, setting a new DX will usuallytakes longer than 2 weeks..... and we have not even started any Data transfer over the wire yet.</li><li>B &gt; A &gt; C &gt; D</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1317343,
          "date": "Mon 25 Nov 2024 07:17",
          "username": "JA2018",
          "content": "hi bro, setting a new DX will usuallytakes longer than 2 weeks..... and we have not even started any Data transfer over the wire yet.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1226541,
          "date": "Sat 08 Jun 2024 07:09",
          "username": "NSA_Poker",
          "content": "B > A > C > D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1172208,
          "date": "Wed 13 Mar 2024 04:19",
          "username": "xBUGx",
          "content": "Assumingvpn is 1Gbps,it can still transfer 50TB with in 5days with only 10% bandwidth avaliable",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1121780,
          "date": "Sat 13 Jan 2024 16:09",
          "username": "awsgeek75",
          "content": "A DataSync is for data<br>B Direct connect takes longer than 2 weeks<br>D StorageGateway is useless without more contex<br>C is only remaining choice.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>(A) The problem is not that DataSync deals with data (we have to 'transfer 50 TB of data'). The issue is with the VPC endpoint; it doesn't increase our bandwidth. DataSync task is capable fully utilizing 10-Gbps over a network link between your on-premises environment and AWS.<br>(B) works between 67-minutes &amp; 5 days.<br>(C) Works but is NOT what I would recommend to a data center.<br>(D) over VPN connection that is 90% utilized, takes more than 6 weeks.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1226537,
          "date": "Sat 08 Jun 2024 07:05",
          "username": "NSA_Poker",
          "content": "(A) The problem is not that DataSync deals with data (we have to 'transfer 50 TB of data'). The issue is with the VPC endpoint; it doesn't increase our bandwidth. DataSync task is capable fully utilizing 10-Gbps over a network link between your on-premises environment and AWS.<br>(B) works between 67-minutes & 5 days.<br>(C) Works but is NOT what I would recommend to a data center.<br>(D) over VPN connection that is 90% utilized, takes more than 6 weeks.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1103270,
          "date": "Fri 22 Dec 2023 10:28",
          "username": "ftaws",
          "content": "Not memtioned network bandwidth. How we know that?",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#660",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an application on Amazon EC2 On-Demand Instances in an Auto Scaling group. Application peak hours occur at the same time each day. Application users report slow application performance at the start of peak hours. The application performs normally 2-3 hours after peak hours begin. The company wants to ensure that the application works properly at the start of peak hours.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#660",
          "answers": [
            {
              "choice": "<p>Configure an Application Load Balancer to distribute traffic properly to the instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a dynamic scaling policy for the Auto Scaling group to launch new instances based on memory utilization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a dynamic scaling policy for the Auto Scaling group to launch new instances based on CPU utilization.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a scheduled scaling policy for the Auto Scaling group to launch new instances before peak hours.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 660 discussion",
      "discusstion": [
        {
          "id": 1100352,
          "date": "Wed 19 Jun 2024 06:09",
          "username": "ZZZ_Sleep",
          "content": "occur at the same time each daypredictable<br><br>So, scheduled scaling policy, Answer is D.<br><br>Dynamic scaling policy work for unpredictable",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1078287,
          "date": "Thu 23 May 2024 09:28",
          "username": "Arnaud92",
          "content": "D. The application performs normally 2-3 hours after peak hours begin is a key! (schedule policy)",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1121782,
          "date": "Sat 13 Jul 2024 15:13",
          "username": "awsgeek75",
          "content": "ABC won't solve the performance issues at the start of peak hours.<br>D ensure that application is ready for use during the peak hours by scheduling an early launch",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1090839,
          "date": "Sat 08 Jun 2024 07:42",
          "username": "TariqKipkemei",
          "content": "Techincally both dynamic and scheduled scaling would work but there is strict requirement for the application to work properly at the start of peak hours and no mention of cost.<br><br>So scheduled scaling policy it is.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1087012,
          "date": "Mon 03 Jun 2024 18:05",
          "username": "TOR_0511",
          "content": "Application users report slow application performance at the start of peak hours. The company wants to ensure that the application works properly at the start of peak hours",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#661",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs applications on AWS that connect to the company's Amazon RDS database. The applications scale on weekends and at peak times of the year. The company wants to scale the database more effectively for its applications that connect to the database.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#661",
          "answers": [
            {
              "choice": "<p>Use Amazon DynamoDB with connection pooling with a target group configuration for the database. Change the applications to use the DynamoDB endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon RDS Proxy with a target group for the database. Change the applications to use the RDS Proxy endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use a custom proxy that runs on Amazon EC2 as an intermediary to the database. Change the applications to use the custom proxy endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Lambda function to provide connection pooling with a target group configuration for the database. Change the applications to use the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 661 discussion",
      "discusstion": [
        {
          "id": 1090847,
          "date": "Sat 08 Jun 2024 07:46",
          "username": "TariqKipkemei",
          "content": "Amazon RDS Proxy is a fully managed, highly available database proxy for Amazon Relational Database Service (RDS) that makes applicationsmore resilient to database failures. Many applications, including those built on modern serverless architectures, can have a large number of open connections to the database server and may open and close database connections at a high rate, exhausting database memory and compute resources. Amazon RDS Proxy allows applications to pool and share connections established with the database, improving database efficiency and application scalability. With RDS Proxy, failover times for Aurora and RDS databases are reduced by up to 66%",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1087040,
          "date": "Mon 03 Jun 2024 18:42",
          "username": "TOR_0511",
          "content": "A out because DynamoDB is a NoSQL DB<br>B As the question is referring about DB connections so this option has the LEAST operational overhead",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1121787,
          "date": "Sat 13 Jul 2024 15:17",
          "username": "awsgeek75",
          "content": "A: DynamoDB ! RDS<br>C: Total nonsense<br>D: Lambda for providing connection pooling sound impractical if not impossible. Would be fun to watch someone do this though...<br>B RDS Proxy is specifically made for connection pooling.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#662",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Cost Explorer to monitor its AWS costs. The company notices that Amazon Elastic Block Store (Amazon EBS) storage and snapshot costs increase every month. However, the company does not purchase additional EBS storage every month. The company wants to optimize monthly costs for its current storage usage.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#662",
          "answers": [
            {
              "choice": "<p>Use logs in Amazon CloudWatch Logs to monitor the storage utilization of Amazon EBS. Use Amazon EBS Elastic Volumes to reduce the size of the EBS volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use a custom script to monitor space usage. Use Amazon EBS Elastic Volumes to reduce the size of the EBS volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Delete all expired and unused snapshots to reduce snapshot costs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Delete all nonessential snapshots. Use Amazon Data Lifecycle Manager to create and manage the snapshots according to the company's snapshot policy requirements.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 662 discussion",
      "discusstion": [
        {
          "id": 1077150,
          "date": "Wed 22 Nov 2023 09:58",
          "username": "t0nx",
          "content": "This option involves managing snapshots efficiently to optimize costs with minimal operational overhead.<br><br>Delete all nonessential snapshots: This reduces costs by eliminating unnecessary snapshot storage.<br>Use Amazon Data Lifecycle Manager (DLM): DLM can automate the creation and deletion of snapshots based on defined policies. This reduces operational overhead by automating snapshot management according to the company's snapshot policy requirements.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1318359,
          "date": "Wed 27 Nov 2024 02:01",
          "username": "JA2018",
          "content": "Allows the user to manage snapshots efficiently for cost optimization with the LEAST operational overhead.<br><br>#1: Delete all nonessential snapshots: This reduces costs by eliminating unnecessary storage used by such snapshots.<br><br>#2: Amazon Data Lifecycle Manager (DLM): This AWS managed service can automate the creation and deletion process of snapshots based on defined policies. Automating snapshot management according to snapshot policy requirements helps to cut down operational overhead .",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1127300,
          "date": "Sat 20 Jan 2024 14:51",
          "username": "awsgeek75",
          "content": "Least operational overhead for your snapshot management is https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html<br><br>C will just do it once but assuming they want an ongoing solution.<br>A: It will help with EBS size but won't fix the snapshot problems<br>B: Same as A, nothing to do with snapshos<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Q says The company wants to optimize monthly costs for its current storage usage. I think they only want to do it once?</li><li>I think \\\"optimize monthly costs\\\" include future monthly cost as well, so D is better than C</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1189032,
          "date": "Thu 04 Apr 2024 04:16",
          "username": "xBUGx",
          "content": "Q says The company wants to optimize monthly costs for its current storage usage. I think they only want to do it once?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I think \\\"optimize monthly costs\\\" include future monthly cost as well, so D is better than C</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1231633,
          "date": "Mon 17 Jun 2024 04:12",
          "username": "KennethNg923",
          "content": "I think \\\"optimize monthly costs\\\" include future monthly cost as well, so D is better than C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1090852,
          "date": "Fri 08 Dec 2023 08:50",
          "username": "TariqKipkemei",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#663",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a new application on AWS. The application consists of an Amazon Elastic Container Service (Amazon ECS) cluster, an Amazon S3 bucket that contains assets for the application, and an Amazon RDS for MySQL database that contains the dataset for the application. The dataset contains sensitive information. The company wants to ensure that only the ECS cluster can access the data in the RDS for MySQL database and the data in the S3 bucket.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#663",
          "answers": [
            {
              "choice": "<p>Create a new AWS Key Management Service (AWS KMS) customer managed key to encrypt both the S3 bucket and the RDS for MySQL database. Ensure that the KMS key policy includes encrypt and decrypt permissions for the ECS task execution role.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Key Management Service (AWS KMS) AWS managed key to encrypt both the S3 bucket and the RDS for MySQL database. Ensure that the S3 bucket policy specifies the ECS task execution role as a user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 bucket policy that restricts bucket access to the ECS task execution role. Create a VPC endpoint for Amazon RDS for MySQL. Update the RDS for MySQL security group to allow access from only the subnets that the ECS cluster will generate tasks in.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a VPC endpoint for Amazon RDS for MySQL. Update the RDS for MySQL security group to allow access from only the subnets that the ECS cluster will generate tasks in. Create a VPC endpoint for Amazon S3. Update the S3 bucket policy to allow access from only the S3 VPC endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 663 discussion",
      "discusstion": [
        {
          "id": 1116529,
          "date": "Mon 08 Jan 2024 11:03",
          "username": "pentium75",
          "content": "We're asked to restrict access to both, RDS and S3, to \\\"the ECS cluster\\\" (not to a subnet or endpoint).<br><br>Not B: Does not restrict RDS at all. Wording about S3 is unusual.<br>Not C: Would work for S3, but would allow RDS access from whole subnet which may contain other resources besides the ECS cluster<br>Not D: Would allow RDS access from whole subnet which may contain other resources besides the ECS cluster. Would allow S3 access from VPC endpoint which might be accessed by other resources besides the ECS cluster.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A doesn't restricy access. It only encrypts at rest. D resctricts access. Encryption and Access Control are 2 different things</li></ul>",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1332517,
          "date": "Fri 27 Dec 2024 17:16",
          "username": "deacon967",
          "content": "A doesn't restricy access. It only encrypts at rest. D resctricts access. Encryption and Access Control are 2 different things",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1077140,
          "date": "Wed 22 Nov 2023 09:49",
          "username": "t0nx",
          "content": "Option D is the most comprehensive solution as it leverages VPC endpoints for both Amazon RDS and Amazon S3, along with proper network-level controls to restrict access to only the necessary resources from the ECS cluster.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D only secures access to RDS and S3, it does not secure the sensitive data inside the RDS and S3.</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1121811,
          "date": "Sat 13 Jan 2024 16:45",
          "username": "awsgeek75",
          "content": "D only secures access to RDS and S3, it does not secure the sensitive data inside the RDS and S3.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1324175,
          "date": "Mon 09 Dec 2024 19:53",
          "username": "dragossky",
          "content": "The dataset contains sensitive information, nothing to be done here, just stating that it contains sensitive info.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1318362,
          "date": "Wed 27 Nov 2024 02:10",
          "username": "JA2018",
          "content": "Why not C?<br><br>Key point:<br><br>The question specifically asks to ensure that only the ECS cluster can access the data, which means restricting access to the S3 bucket and RDS database solely to the ECS task execution role.<br><br>Breakdown of option C:<br><br>S3 bucket policy: By creating a policy that only allows the ECS task execution role to access the S3 bucket, you effectively limit access to the data stored there.<br><br>VPC endpoint for RDS: A VPC endpoint creates a private connection to the RDS database, preventing any external access and ensuring that only resources within the VPC can connect.<br><br>RDS security group update: Further restricting access by configuring the RDS security group to only allow connections from the subnets where the ECS cluster will launch tasks.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why the other options are not as suitable:<br><br>Option A and B:<br>While using a KMS key to encrypt data is a good practice, it doesn't directly control access to the data. Attaching the KMS key to the ECS task execution role in the policy would still allow any entity with the key to decrypt the data, not just the ECS cluster.</li><li>Option D:<br>This option only addresses the RDS access by creating a VPC endpoint, but it doesn't restrict access to the S3 bucket effectively, which is also mentioned in the question</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1318363,
          "date": "Wed 27 Nov 2024 02:11",
          "username": "JA2018",
          "content": "Why the other options are not as suitable:<br><br>Option A and B:<br>While using a KMS key to encrypt data is a good practice, it doesn't directly control access to the data. Attaching the KMS key to the ECS task execution role in the policy would still allow any entity with the key to decrypt the data, not just the ECS cluster.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option D:<br>This option only addresses the RDS access by creating a VPC endpoint, but it doesn't restrict access to the S3 bucket effectively, which is also mentioned in the question</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1318364,
          "date": "Wed 27 Nov 2024 02:11",
          "username": "JA2018",
          "content": "Option D:<br>This option only addresses the RDS access by creating a VPC endpoint, but it doesn't restrict access to the S3 bucket effectively, which is also mentioned in the question",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1293480,
          "date": "Sat 05 Oct 2024 14:43",
          "username": "XXXXXlNN",
          "content": "I cannot believe how many people vote A. <br><br>the questions is asking only allow ECS cluster access RDS and access to S3.<br><br>2 keys here:1. security group is usually used to security access between RDS and ECS cluster 2. access data in S3 securely, imemdiately, we should think about S3 VPC Gateway endpoints because this secures the traffic only travel via private network.<br><br>Answer A is just talking about encrpt data at rest, and that is not what the question is asking about",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1232666,
          "date": "Wed 19 Jun 2024 02:35",
          "username": "MandAsh",
          "content": "After reading comments changed to A. D will not protect data at rest it will only give n/w level security",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1202038,
          "date": "Thu 25 Apr 2024 15:51",
          "username": "bujuman",
          "content": "According to me \\\"The dataset contains sensitive information\\\" is the main information that motivate the real requirement which is \\\"The company wants to ensure that only the ECS cluster can access the data in the RDS for MySQL database and the data in the S3 bucket\\\". So we have to take these two assertions into consideration.<br>And knowing that, as S3 default encryption capabilities, RDS Mysql DB Instance encryption is not active by default (check this link for detailshttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html ), option A is the best option to meet the requirements of accessing the datasets and the assets only from ECS cluster tasks and preserve, at the same time,data confidentiality and integrity. In other words, option A is the best one to ensurethe data protection at REST for S3 and RDSand only accessed by ECS cluster.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1199990,
          "date": "Mon 22 Apr 2024 08:00",
          "username": "Hung23",
          "content": "Try to chat GPT Please",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1168762,
          "date": "Fri 08 Mar 2024 12:58",
          "username": "seetpt",
          "content": "A seems right",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1122190,
          "date": "Sun 14 Jan 2024 03:12",
          "username": "[Removed]",
          "content": "Vote for A. Keywords:'sensitive information'  and 'data in=E2=80=A6' <br>D: only network control, can't control data access on sensitive information.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1115935,
          "date": "Sun 07 Jan 2024 16:00",
          "username": "Marco_St",
          "content": "I did not get how does D achieves the only access from ECS cluster to S3 VPC endpoint.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1114439,
          "date": "Fri 05 Jan 2024 11:44",
          "username": "1rob",
          "content": "A; When Only the ECS task execution role is able to encrypt and decrypt the data in the RDS and in the S3 bucket by means of the KMS key policy, you ensure that nothing else can read or modify the data.<br>B: this answer doesn't state that only the ECS cluster can reach the data.<br>C: Creating a VPC endpoint for RDS does not mean that only the ECS cluster can reach the data<br>D: The S3 VPC endpoint does not guarantee that only the ECS cluster can reach the data. Also allowing a subnet to have access to the RDS sounds too open to me",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1107390,
          "date": "Thu 28 Dec 2023 05:16",
          "username": "Min_93",
          "content": "Options A and B involve using AWS Key Management Service (AWS KMS) for encryption but do not directly address the requirement to restrict access to the ECS cluster. Option C is not the most direct approach for restricting access to the RDS database, as it focuses on the S3 bucket.<br><br>Therefore, option D is the most appropriate solution for ensuring that only the ECS cluster can access the data in the RDS for MySQL database and the data in the S3 bucket.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1090860,
          "date": "Fri 08 Dec 2023 08:59",
          "username": "TariqKipkemei",
          "content": "A VPC endpoint enables customers to privately connect to supported AWS services and VPC endpoint services powered by AWS PrivateLink.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1088048,
          "date": "Mon 04 Dec 2023 23:34",
          "username": "SHAAHIBHUSHANAWS",
          "content": "C<br>need to restrict access from ECS cluster<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>So you control access to S3 bucket but anyone could still access to RDS from the ECS cluster's subnet</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1333028,
          "date": "Sat 28 Dec 2024 16:32",
          "username": "Salilgen",
          "content": "So you control access to S3 bucket but anyone could still access to RDS from the ECS cluster's subnet",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1076873,
          "date": "Wed 22 Nov 2023 03:48",
          "username": "LemonGremlin",
          "content": "Create a VPC endpoint for Amazon RDS for MySQL: This ensures that the ECS cluster can access the RDS database directly within the same Virtual Private Cloud (VPC), without having to go over the internet. By updating the security group to allow access only from the specific subnets that the ECS cluster will generate tasks in, you limit access to only the authorized entities.<br><br>Create a VPC endpoint for Amazon S3: This allows the ECS cluster to access the S3 bucket directly within the same VPC. By updating the S3 bucket policy to allow access only from the S3 VPC endpoint, you restrict access to the designated VPC, ensuring that only authorized resources can access the S3 bucket.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I agree this will allow only resources from VPC but will not restrict only ECS cluster. I suggest we use bucket policy to use ECS cluster role on top of network settings.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1088045,
          "date": "Mon 04 Dec 2023 23:33",
          "username": "SHAAHIBHUSHANAWS",
          "content": "I agree this will allow only resources from VPC but will not restrict only ECS cluster. I suggest we use bucket policy to use ECS cluster role on top of network settings.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#664",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a web application that runs on premises. The application experiences latency issues during peak hours. The latency issues occur twice each month. At the start of a latency issue, the application's CPU utilization immediately increases to 10 times its normal amount.<br><br>The company wants to migrate the application to AWS to improve latency. The company also wants to scale the application automatically when application demand increases. The company will use AWS Elastic Beanstalk for application deployment.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#664",
          "answers": [
            {
              "choice": "<p>Configure an Elastic Beanstalk environment to use burstable performance instances in unlimited mode. Configure the environment to scale based on requests.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Elastic Beanstalk environment to use compute optimized instances. Configure the environment to scale based on requests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Elastic Beanstalk environment to use compute optimized instances. Configure the environment to scale on a schedule.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Elastic Beanstalk environment to use burstable performance instances in unlimited mode. Configure the environment to scale on predictive metrics.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 664 discussion",
      "discusstion": [
        {
          "id": 1076876,
          "date": "Wed 22 Nov 2023 03:51",
          "username": "LemonGremlin",
          "content": "Burstable Performance Instances (T3 or T3a): These instances are designed for burstable workloads and provide a baseline level of CPU performance with the ability to burst above that baseline when needed. Bursting is particularly beneficial for handling sudden spikes in CPU utilization, such as those described in the scenario.<br><br>Unlimited Mode: Enabling \\\"unlimited\\\" mode allows instances to burst beyond their baseline performance without accumulating CPU credits. This is important for handling sudden and sustained increases in CPU utilization during peak hours.<br><br>Scale on Predictive Metrics: Configuring the environment to scale on predictive metrics allows AWS Elastic Beanstalk to proactively adjust the number of instances based on anticipated demand. This can help ensure that the environment is scaled up before the latency issues occur, addressing them in advance.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Traffic is \\\"immediately increases\\\". We can't predict and can not use Predictive Metrics.<br>And requirement need auto scaling</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1103344,
          "date": "Fri 22 Dec 2023 12:50",
          "username": "ftaws",
          "content": "Traffic is \\\"immediately increases\\\". We can't predict and can not use Predictive Metrics.<br>And requirement need auto scaling",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1112669,
          "date": "Wed 03 Jan 2024 11:38",
          "username": "pentium75",
          "content": "\\\"Scale on predictive metrics\\\" does not sound like something that Beanstalk can do. In EC2 you can create a \\\"predictive scaling policy\\\", but apparently this is not supported by Beanstalk. That would rule out D.<br><br>We have no indication that the application is CPU-intensive in general. If CPU utilization \\\"increases to 10 times its normal amount\\\" then the \\\"normal amount\\\" cannot be higher than 10 %. This would rule out B and C.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1333039,
          "date": "Sat 28 Dec 2024 17:07",
          "username": "Salilgen",
          "content": "IMO answer is A.<br>\\\"The Auto Scaling group uses two Amazon CloudWatch alarms to trigger scaling operations. The default triggers scale when the average outbound network traffic from each instance is higher than 6 MiB or lower than 2 MiB over a period of five minutes. To use Auto Scaling effectively, configure triggers that are appropriate for your application, instance type, and service requirements. You can scale based on several statistics including latency, disk I/O, CPU utilization, and request count.\\\"<br>This is dynamic scaling.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-types.html<br>https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.managing.as.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1228523,
          "date": "Tue 11 Jun 2024 18:09",
          "username": "3c6417b",
          "content": "Explain to me why it's not B?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B is incorrect because CPU usage percentage rising does not necessarily have anything to do with computing methods. Especially during peak hours, the jobs are coming in hot, but it's quite possible that each job can be done within seconds. It's just too many jobs, and that's not something compute optimized instances can tackle.</li><li>I have the same question.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1326355,
          "date": "Sat 14 Dec 2024 06:32",
          "username": "LeonSauveterre",
          "content": "B is incorrect because CPU usage percentage rising does not necessarily have anything to do with computing methods. Especially during peak hours, the jobs are coming in hot, but it's quite possible that each job can be done within seconds. It's just too many jobs, and that's not something compute optimized instances can tackle.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1241730,
          "date": "Thu 04 Jul 2024 03:09",
          "username": "Gape4",
          "content": "I have the same question.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1201352,
          "date": "Wed 24 Apr 2024 14:28",
          "username": "sandordini",
          "content": "D - No such service as Elastic Beanstalk Predictive Scaling, And even if there was, no historical data in AWS for an application we are just about to migrate to AWS. Therefore: A",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1185323,
          "date": "Fri 29 Mar 2024 10:42",
          "username": "lenotc",
          "content": "D is incorrect Predictive scaling not fit",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1127246,
          "date": "Sat 20 Jan 2024 12:49",
          "username": "awsgeek75",
          "content": "For those voting D, predictive scaling analyses historic data to predict the scaling needs. This scenario is a migration scenario so there won't be any historic data which is why D won't work. A (burst) is the only option after migration.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1121826,
          "date": "Sat 13 Jan 2024 17:02",
          "username": "awsgeek75",
          "content": "BC are compute optimised instances which don't solve 10x CPU issues at start of the latency.<br>AD are burstable performance which will help with 10x increase CPU usage<br>D is not an available feature of Elastic Beanstalk (yet) or I cannot find it in config/docs. Happy to be corrected<br>A makes sense due to burst performance. Scale based on requests is possible and I'm assuming that latency is related to requests.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1118903,
          "date": "Wed 10 Jan 2024 19:01",
          "username": "1rob",
          "content": "Following https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.managing.as.html I see: \\\" You can scale based on several statistics including latency, disk I/O, CPU utilization, and request count. \\\" So no 'scale on predictive metrics, so D is not okay.<br><br>Also,the company also wants to scale the application automatically when application demand increases, so scale on a schedule is not appropriate here. So C is not okay.<br>Burstable performance instances in unlimited mode can sustain high CPU utilization for any period of time whenever required, so an immediate demand of CPU resources is 'covered'.So I go for A.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1107392,
          "date": "Thu 28 Dec 2023 05:19",
          "username": "Min_93",
          "content": "Option A, which suggests using burstable performance instances in unlimited mode, is appropriate. However, option D is more specific to the requirement of scaling based on predictive metrics, which is crucial for handling the latency issues that occur at specific times each month.<br><br>Options B and C suggest using compute optimized instances and scaling based on requests or on a schedule. While these options might work for general scalability, they may not address the immediate and intense spikes in CPU utilization that are mentioned in the scenario.<br><br>Therefore, option D is the most appropriate solution for improving latency and automatically scaling the application based on predictive metrics using AWS Elastic Beanstalk.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1098255,
          "date": "Sat 16 Dec 2023 15:57",
          "username": "evelynsun",
          "content": "This solution meets the requirements because it allows the company to automatically scale the application's CPU capacity based on the number of requests it receives. The burstable performance instances provide high CPU performance when needed, which can help to reduce latency during peak hours.<br><br>not D: this solution has some drawbacks. First, it can be expensive to use burstable performance instances in unlimited mode, as the instances are charged per hour. Second, it can be difficult to predict the exact CPU requirements of the application, which can lead to over- or under-provisioning of CPU resources.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1090877,
          "date": "Fri 08 Dec 2023 09:09",
          "username": "TariqKipkemei",
          "content": "The company also wants to scale the application automatically when application demand increasesScale based on requests",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1088061,
          "date": "Mon 04 Dec 2023 23:45",
          "username": "SHAAHIBHUSHANAWS",
          "content": "B<br>Question is asking scale based on demand so better scale based on requests. Predictive metrics not defined and may be interpreted differently by many users.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1079657,
          "date": "Sat 25 Nov 2023 01:52",
          "username": "reika1914",
          "content": "Given the scenario described, the best solution among the provided options to meet the requirements of migrating the application to AWS, improving latency, and scaling the application automatically during increased demand would be:<br><br>D. Configure an Elastic Beanstalk environment to use burstable performance instances in unlimited mode. Configure the environment to scale on predictive metrics.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1077121,
          "date": "Wed 22 Nov 2023 09:21",
          "username": "t0nx",
          "content": "In this scenario, the application experiences latency issues during peak hours with a sudden increase in CPU utilization. Using burstable performance instances in unlimited mode allows the application to burst beyond the baseline performance when needed. Configuring the environment to scale on predictive metrics enables proactive scaling based on anticipated increases in demand.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#665",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has customers located across the world. The company wants to use automation to secure its systems and network infrastructure. The company's security team must be able to track and audit all incremental changes to the infrastructure.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#665",
          "answers": [
            {
              "choice": "<p>Use AWS Organizations to set up the infrastructure. Use AWS Config to track changes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS CloudFormation to set up the infrastructure. Use AWS Config to track changes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Organizations to set up the infrastructure. Use AWS Service Catalog to track changes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS CloudFormation to set up the infrastructure. Use AWS Service Catalog to track changes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 665 discussion",
      "discusstion": [
        {
          "id": 1090885,
          "date": "Fri 08 Dec 2023 09:14",
          "username": "TariqKipkemei",
          "content": "use automation to secure its systems and network infrastructureAWS CloudFormation<br>track and audit all incremental changes to the infrastructureAWS Config",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1107394,
          "date": "Thu 28 Dec 2023 05:22",
          "username": "Min_93",
          "content": "Option B is the most suitable because it combines the benefits of infrastructure as code (CloudFormation) with tracking and auditing capabilities (AWS Config). With CloudFormation, the company can define and deploy its infrastructure in a repeatable and automated way, ensuring consistency and adherence to security standards. AWS Config then complements this by providing visibility into changes and configuration details.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1241733,
          "date": "Thu 04 Jul 2024 03:15",
          "username": "Gape4",
          "content": "I will go for B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1127305,
          "date": "Sat 20 Jan 2024 15:00",
          "username": "awsgeek75",
          "content": "Organisations is not really related to this<br>AWS Service Catalog is like a IaaC source control so D is a close option. However B looks more logical.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The difference is in wording:\\\"The company's security team must be able to track and audit all incremental changes to the infrastructure\\\"<br><br>If this has to be done BEFORE the deployment then D is the option<br>If this is AFTER the deployment then B is the option<br><br>Hopefully exam will have better language. Good luck!</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1127306,
          "date": "Sat 20 Jan 2024 15:01",
          "username": "awsgeek75",
          "content": "The difference is in wording:\\\"The company's security team must be able to track and audit all incremental changes to the infrastructure\\\"<br><br>If this has to be done BEFORE the deployment then D is the option<br>If this is AFTER the deployment then B is the option<br><br>Hopefully exam will have better language. Good luck!",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#666",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A startup company is hosting a website for its customers on an Amazon EC2 instance. The website consists of a stateless Python application and a MySQL database. The website serves only a small amount of traffic. The company is concerned about the reliability of the instance and needs to migrate to a highly available architecture. The company cannot modify the application code.<br><br>Which combination of actions should a solutions architect take to achieve high availability for the website? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#666",
          "answers": [
            {
              "choice": "<p>Provision an internet gateway in each Availability Zone in use.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to an Amazon RDS for MySQL Multi-AZ DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to Amazon DynamoDB, and enable DynamoDB auto scaling.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS DataSync to synchronize the database data across multiple EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Application Load Balancer to distribute traffic to an Auto Scaling group of EC2 instances that are distributed across two Availability Zones.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 666 discussion",
      "discusstion": [
        {
          "id": 1093234,
          "date": "Tue 11 Jun 2024 08:08",
          "username": "TariqKipkemei",
          "content": "To achieve high availability for the website, Migrate the database to an Amazon RDS for MySQL Multi-AZ DB instance and Create an Application Load Balancer to distribute traffic to an Auto Scaling group of EC2 instances that are distributed across two Availability Zones.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1205123,
          "date": "Fri 01 Nov 2024 17:19",
          "username": "Sergiuss95",
          "content": "I sold my soul to the devil to pass the exam",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1121831,
          "date": "Sat 13 Jul 2024 16:07",
          "username": "awsgeek75",
          "content": "B: RDS HA<br>E: Application HA<br><br>C: Company cannot change code so this won't work<br>A: Does not make sense with other options<br>D: Makes no sense with other options",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1102088,
          "date": "Fri 21 Jun 2024 01:26",
          "username": "Cyberkayu",
          "content": "A. no failed over mechanism<br>C. DynamoDB is no SQL, cannot use with MySQL<br>D. Not HA, just sync/replication tools.<br><br>Answer BE.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#667",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is moving its data and applications to AWS during a multiyear migration project. The company wants to securely access data on Amazon S3 from the company's AWS Region and from the company's on-premises location. The data must not traverse the internet. The company has established an AWS Direct Connect connection between its Region and its on-premises location.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#667",
          "answers": [
            {
              "choice": "<p>Create gateway endpoints for Amazon S3. Use the gateway endpoints to securely access the data from the Region and the on-premises location.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a gateway in AWS Transit Gateway to access Amazon S3 securely from the Region and the on-premises location.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create interface endpoints for Amazon S3. Use the interface endpoints to securely access the data from the Region and the on-premises location.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Key Management Service (AWS KMS) key to access the data securely from the Region and the on-premises location.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 667 discussion",
      "discusstion": [
        {
          "id": 1093869,
          "date": "Mon 11 Dec 2023 22:16",
          "username": "Ernestokoro",
          "content": "Ans is C: >>You can access Amazon S3 from your VPC using gateway VPC endpoints. After you create the gateway endpoint, you can add it as a target in your route table for traffic destined from your VPC to Amazon S3.<br>There is no additional charge for using gateway endpoints. Amazon S3 supports both gateway endpoints and interface endpoints. With a gateway endpoint, you can access Amazon S3 from your VPC, without requiring an internet gateway or NAT device for your VPC, and with no additional cost. However, gateway endpoints do not allow access from on-premises networks, from peered VPCs in other AWS Regions, or through a transit gateway. For those scenarios, you must use an interface endpoint, which is available for an additional cost. For more information, see Types of VPC endpoints for Amazon S3 in the Amazon S3 User Guide.<br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1076879,
          "date": "Wed 22 Nov 2023 03:55",
          "username": "LemonGremlin",
          "content": "Amazon VPC interface endpoints enable you to privately connect your VPC to supported AWS services without requiring an internet gateway, NAT device, VPN, or Direct Connect connection.<br>By creating interface endpoints for Amazon S3 in both the AWS Region and the on-premises location, you can securely access data without traversing the internet.<br>Direct Connect Connection:<br><br>With an AWS Direct Connect connection established between the AWS Region and the on-premises location, the data can flow over the dedicated, private connection rather than going over the public internet.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1285071,
          "date": "Tue 17 Sep 2024 09:14",
          "username": "MatAlves",
          "content": "Gateway Endpoint -> only within same VPC<br>Interface Endpoint -> On-premises (VPN or Direct Connect), or different Region over VPC peering.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1241737,
          "date": "Thu 04 Jul 2024 03:27",
          "username": "Gape4",
          "content": "Please C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1145217,
          "date": "Fri 09 Feb 2024 04:17",
          "username": "1Alpha1",
          "content": "Gateway endpoints do not allow access from on-premises networks, from peered VPCs in other AWS Regions, or through a transit gateway. For those scenarios, you must use an interface endpoint, which is available for an additional cost.<br><br>https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1121837,
          "date": "Sat 13 Jan 2024 17:13",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html<br><br>With AWS PrivateLink for Amazon S3, you can provision interface VPC endpoints (interface endpoints) in your virtual private cloud (VPC). These endpoints are directly accessible from applications that are on premises over VPN and AWS Direct Connect, or in a different AWS Region over VPC peering.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1112682,
          "date": "Wed 03 Jan 2024 11:52",
          "username": "pentium75",
          "content": "Not A, Gateway endpoint can be accessed only from inside the VPC it's in<br>Not B, Transit Gateway alone won't help<br>Not D, KMS has nothing to do with this",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1110752,
          "date": "Sun 31 Dec 2023 18:40",
          "username": "fea9bdf",
          "content": "Answer seems to be C<br>gateway endpoints do not allow access from on-premises networks, from peered VPCs in other AWS Regions, or through a transit gateway. For those scenarios, you must use an interface endpoint, which is available for an additional cost. For more information, see Types of VPC endpoints for Amazon S3 in the Amazon S3 User Guide.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1107681,
          "date": "Thu 28 Dec 2023 11:46",
          "username": "ale_brd_111",
          "content": "gateway endpoint uses public ip address even if traffic does not directly route thru the internet, also they are no meant to be used from on-premises. Answer is C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1107399,
          "date": "Thu 28 Dec 2023 05:30",
          "username": "Min_93",
          "content": "Options A, B, and D are not the most suitable for the following reasons:<br><br>A. Create gateway endpoints for Amazon S3:<br><br>Gateway endpoints are used for accessing S3 from within a VPC, but they do not extend connectivity to on-premises locations.<br>B. Create a gateway in AWS Transit Gateway:<br><br>AWS Transit Gateway is designed for routing traffic between VPCs and on-premises networks but is not used as a direct gateway for S3 access.<br>D. Use an AWS Key Management Service (AWS KMS) key:<br><br>AWS KMS is a key management service and does not provide direct access to S3. It's used for managing encryption keys.<br>Therefore, option C, creating interface endpoints for Amazon S3, is the most appropriate solution for securely accessing S3 from both the AWS Region and the on-premises location.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Gateway endpoints for Amazon S3<br><br>Interface endpoints for Amazon S3<br><br>In both cases, your network traffic remains on the AWS network.<br><br>Use Amazon S3 public IP addresses<br><br>Use private IP addresses from your VPC to access Amazon S3<br><br>Use the same Amazon S3 DNS names<br><br>Require endpoint-specific Amazon S3 DNS names<br><br>Do not allow access from on premises<br><br>Allow access from on premises<br><br>Do not allow access from another AWS Region<br><br>Allow access from a VPC in another AWS Region by using VPC peering or AWS Transit Gateway<br><br>Not billed<br><br>Billed</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1107402,
          "date": "Thu 28 Dec 2023 05:32",
          "username": "Min_93",
          "content": "Gateway endpoints for Amazon S3<br><br>Interface endpoints for Amazon S3<br><br>In both cases, your network traffic remains on the AWS network.<br><br>Use Amazon S3 public IP addresses<br><br>Use private IP addresses from your VPC to access Amazon S3<br><br>Use the same Amazon S3 DNS names<br><br>Require endpoint-specific Amazon S3 DNS names<br><br>Do not allow access from on premises<br><br>Allow access from on premises<br><br>Do not allow access from another AWS Region<br><br>Allow access from a VPC in another AWS Region by using VPC peering or AWS Transit Gateway<br><br>Not billed<br><br>Billed",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1103283,
          "date": "Fri 22 Dec 2023 10:52",
          "username": "ftaws",
          "content": "Transit Gateway support inter region.<br>interface gateway not use in S3<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>com.amazonaws.ap-southeast-1.s3 amazon Interface<br><br>Interface is now available for S3</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1107401,
          "date": "Thu 28 Dec 2023 05:31",
          "username": "Min_93",
          "content": "com.amazonaws.ap-southeast-1.s3 amazon Interface<br><br>Interface is now available for S3",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1093633,
          "date": "Mon 11 Dec 2023 16:50",
          "username": "Beshowasfy",
          "content": "GW Endpoint is only for S3 and DynamoDB, interface endpoint for other services so C is wrong<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>you can't access gateway endpoint from on-premises</li><li>but you can via direct connection</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1107680,
          "date": "Thu 28 Dec 2023 11:43",
          "username": "ale_brd_111",
          "content": "you can't access gateway endpoint from on-premises<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>but you can via direct connection</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1293525,
          "date": "Sat 05 Oct 2024 17:23",
          "username": "XXXXXlNN",
          "content": "but you can via direct connection",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1093239,
          "date": "Mon 11 Dec 2023 09:17",
          "username": "TariqKipkemei",
          "content": "S3 gateway endpoints do not currently support access from resources in a different Region, different VPC, or from an on-premises (non-AWS) environment.<br>https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/#:~:textassociated.%20S3%20gateway-,endpoints,-do%20not%20currently",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1088069,
          "date": "Mon 04 Dec 2023 23:52",
          "username": "SHAAHIBHUSHANAWS",
          "content": "C<br>. S3 gateway endpoints do not currently support access from resources in a different Region, different VPC, or from an on-premises (non-AWS) environment. However, if you're willing to manage a complex custom architecture, you can use proxies. In all those scenarios, where access is from resources external to VPC, S3 interface endpoints access S3 in a secure way.<br>https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1087421,
          "date": "Mon 04 Dec 2023 09:17",
          "username": "VladanO",
          "content": "Selected Answer: A<br>https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html<br>Gateway VPC endpoints provide reliable connectivity to Amazon S3 and DynamoDB without requiring an internet gateway or a NAT device for your VPC.<br>There is no additional charge for using gateway endpoints.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You can't use GW endpoint from on-premises</li><li>You can with direct connect</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1112678,
          "date": "Wed 03 Jan 2024 11:50",
          "username": "pentium75",
          "content": "You can't use GW endpoint from on-premises<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You can with direct connect</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1332003,
          "date": "Thu 26 Dec 2024 17:40",
          "username": "Prahacker69",
          "content": "You can with direct connect",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1078173,
          "date": "Thu 23 Nov 2023 08:23",
          "username": "t0nx",
          "content": "CCCCCC",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#668",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company created a new organization in AWS Organizations. The organization has multiple accounts for the company's development teams. The development team members use AWS IAM Identity Center (AWS Single Sign-On) to access the accounts. For each of the company's applications, the development teams must use a predefined application name to tag resources that are created.<br><br>A solutions architect needs to design a solution that gives the development team the ability to create resources only if the application name tag has an approved value.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#668",
          "answers": [
            {
              "choice": "<p>Create an IAM group that has a conditional Allow policy that requires the application name tag to be specified for resources to be created.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a cross-account role that has a Deny policy for any resource that has the application name tag.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a resource group in AWS Resource Groups to validate that the tags are applied to all resources in all accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a tag policy in Organizations that has a list of allowed application names.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 668 discussion",
      "discusstion": [
        {
          "id": 1121843,
          "date": "Sat 13 Jul 2024 16:27",
          "username": "awsgeek75",
          "content": "A: Don't think this is possible.<br>B: Cross account role with deny policy? Never seen anything like this<br>C: Resource groups have nothing to do with allowed tags<br><br>D:Correct https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1112690,
          "date": "Wed 03 Jul 2024 10:59",
          "username": "pentium75",
          "content": "Other options don't make sense",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1095197,
          "date": "Thu 13 Jun 2024 06:15",
          "username": "m_y_s",
          "content": "A tag policy can also specify that noncompliant tagging operations on specified resource types are enforced. In other words, noncompliant tagging requests on specified resource types are prevented from completing.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1093645,
          "date": "Tue 11 Jun 2024 16:00",
          "username": "Beshowasfy",
          "content": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1088071,
          "date": "Tue 04 Jun 2024 22:57",
          "username": "SHAAHIBHUSHANAWS",
          "content": "D<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1086449,
          "date": "Sun 02 Jun 2024 22:45",
          "username": "rcptryk",
          "content": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#669",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its databases on Amazon RDS for PostgreSQL. The company wants a secure solution to manage the master user password by rotating the password every 30 days.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#669",
          "answers": [
            {
              "choice": "<p>Use Amazon EventBridge to schedule a custom AWS Lambda function to rotate the password every 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the modify-db-instance command in the AWS CLI to change the password.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Integrate AWS Secrets Manager with Amazon RDS for PostgreSQL to automate password rotation.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Integrate AWS Systems Manager Parameter Store with Amazon RDS for PostgreSQL to automate password rotation.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 669 discussion",
      "discusstion": [
        {
          "id": 1093252,
          "date": "Tue 11 Jun 2024 08:31",
          "username": "TariqKipkemei",
          "content": "password rotationAWS Secrets Manager",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1086448,
          "date": "Sun 02 Jun 2024 22:40",
          "username": "rcptryk",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1121850,
          "date": "Sat 13 Jul 2024 16:30",
          "username": "awsgeek75",
          "content": "\\\"Least operational overhead\\\"<br>A: Lambda overhead so not correct<br>B: CLIoverhead<br>D: Yes, it can be done but requires more work for integration.<br><br>C: This is correct way of doing it.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html#rds-secrets-manager-overview",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1112691,
          "date": "Wed 03 Jul 2024 11:01",
          "username": "pentium75",
          "content": "Secrets Manager allows that, least overhead",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#670",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company performs tests on an application that uses an Amazon DynamoDB table. The tests run for 4 hours once a week. The company knows how many read and write operations the application performs to the table each second during the tests. The company does not currently use DynamoDB for any other use case. A solutions architect needs to optimize the costs for the table.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#670",
          "answers": [
            {
              "choice": "<p>Choose on-demand mode. Update the read and write capacity units appropriately.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Choose provisioned mode. Update the read and write capacity units appropriately.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase DynamoDB reserved capacity for a 1-year term.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase DynamoDB reserved capacity for a 3-year term.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 670 discussion",
      "discusstion": [
        {
          "id": 1145219,
          "date": "Fri 09 Aug 2024 03:24",
          "username": "1Alpha1",
          "content": "With provisioned capacity mode, you specify the number of reads and writes per second that you expect your application to require, and you are billed based on that. Furthermore if you can forecast your capacity requirements you can also reserve a portion of DynamoDB provisioned capacity and optimize your costs even further.<br><br>https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/capacity.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1115858,
          "date": "Sun 07 Jul 2024 13:23",
          "username": "OSHOAIB",
          "content": "On-demand mode Option A: On-demand mode is suitable for workloads that are unpredictable or that do not have significant or consistent database traffic. It automatically scales to accommodate workload demands and charges for the read and write throughput that the application consumes. For infrequent testing, this could be cost-effective because you only pay for what you use during the testing period and don't incur costs when the table is not being accessed.<br><br>Whereas for the Option B, if you only run tests once a week for 4 hours, you might pay for unused capacity for the rest of the week unless you manually scale down the capacity after tests are completed, which adds operational overhead.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1141652,
          "date": "Tue 06 Aug 2024 00:52",
          "username": "mestule",
          "content": "DynamoDB On-Demand pricing is about 6.94x the cost of provisioned capacity. If your applications have predictable traffic patterns and you don't mind spending the time to understand those patterns, using DynamoDB's provisioned throughput capacity can save you money.<br><br>Also can't set any capacity units for on-demand mode, so A is false in it's premise.<br><br>https://www.serverless.com/blog/dynamodb-on-demand-serverless",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1127783,
          "date": "Sun 21 Jul 2024 12:09",
          "username": "anikolov",
          "content": "A: is most cost effective (which is a question/requirement ) - 4h per week for Tests purpose",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1121857,
          "date": "Sat 13 Jul 2024 16:39",
          "username": "awsgeek75",
          "content": "CD are expensive as reserved capacity even with discounts would spend most time in idle mode (over paid, under utilized)<br>A: On demand is good if you have unpredictable usage, https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand<br>B: Provisioned is good if you the usage: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html<br>\\\"The company knows how many read and write operations the application performs to the table each second during the tests.\\\" so ideally they can set this as max",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1120346,
          "date": "Fri 12 Jul 2024 01:53",
          "username": "theonlyhero",
          "content": "I initially thought it would be A, but when they mentioned \\\"Update the read and write capacity units appropriately.\\\" which are automatically set in \\\"on-demand\\\" switched to B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1118525,
          "date": "Wed 10 Jul 2024 11:55",
          "username": "skynetjay",
          "content": "Provisoned Mode shoud be the answer seeing that the workloads are predictable and DynamoDB isnt used for any other thing.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1112697,
          "date": "Wed 03 Jul 2024 11:10",
          "username": "pentium75",
          "content": "Agree with B, on-demand mode might not scale fast enough after the DB has been idle for 164 hours. As they know exactly the number of reads and writes per second, should use provisioned mode, and set capacity to 1 RCU and 1 WCU while the DB is not in use.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1108868,
          "date": "Sat 29 Jun 2024 15:59",
          "username": "meenkaza",
          "content": "Provisioned Mode (Option B): Provisioned mode allows you to specify the desired read and write capacity units. Since the workload occurs once a week for 4 hours, you can provision the read and write capacity units accordingly to handle the expected load during that time. This can be a more cost-effective option than on-demand pricing for predictable workloads.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#671",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its applications on Amazon EC2 instances. The company performs periodic financial assessments of its AWS costs. The company recently identified unusual spending.<br><br>The company needs a solution to prevent unusual spending. The solution must monitor costs and notify responsible stakeholders in the event of unusual spending.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#671",
          "answers": [
            {
              "choice": "<p>Use an AWS Budgets template to create a zero spend budget.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Cost Anomaly Detection monitor in the AWS Billing and Cost Management console.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create AWS Pricing Calculator estimates for the current running workload pricing details.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon CloudWatch to monitor costs and to identify unusual spending.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 671 discussion",
      "discusstion": [
        {
          "id": 1108870,
          "date": "Sat 29 Jun 2024 16:01",
          "username": "meenkaza",
          "content": "AWS Cost Anomaly Detection (Option B): AWS Cost Anomaly Detection is designed to automatically detect unusual spending patterns based on machine learning algorithms. It can identify anomalies and send notifications when it detects unexpected changes in spending. This aligns well with the requirement to prevent unusual spending and notify stakeholders.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1121858,
          "date": "Sat 13 Jul 2024 16:40",
          "username": "awsgeek75",
          "content": "Unusual spendingCost anomaly hence B",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1112699,
          "date": "Wed 03 Jul 2024 11:16",
          "username": "pentium75",
          "content": "https://aws.amazon.com/aws-cost-management/aws-cost-anomaly-detection/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#672",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A marketing company receives a large amount of new clickstream data in Amazon S3 from a marketing campaign. The company needs to analyze the clickstream data in Amazon S3 quickly. Then the company needs to determine whether to process the data further in the data pipeline.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#672",
          "answers": [
            {
              "choice": "<p>Create external tables in a Spark catalog. Configure jobs in AWS Glue to query the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS Glue crawler to crawl the data. Configure Amazon Athena to query the data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create external tables in a Hive metastore. Configure Spark jobs in Amazon EMR to query the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS Glue crawler to crawl the data. Configure Amazon Kinesis Data Analytics to use SQL to query the data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 672 discussion",
      "discusstion": [
        {
          "id": 1108873,
          "date": "Fri 29 Dec 2023 17:03",
          "username": "meenkaza",
          "content": "AWS Glue with Athena (Option B): AWS Glue is a fully managed extract, transform, and load (ETL) service, and Athena is a serverless query service that allows you to analyze data directly in Amazon S3 using SQL queries. By configuring an AWS Glue crawler to crawl the data, you can create a schema for the data, and then use Athena to query the data directly without the need to load it into a separate database. This minimizes operational overhead.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1112700,
          "date": "Wed 03 Jan 2024 12:20",
          "username": "pentium75",
          "content": "Neither Glue nor EMR nor Kinesis are used \\\"to query the data\\\"",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1266280,
          "date": "Thu 15 Aug 2024 09:04",
          "username": "Johnoppong101",
          "content": "You`ve come a loooong way...keep going...<br>Kinesis Data Analytics applications continuously read and process streaming data in real time.<br>Data is already at rest in S3. So Athena.<br><br>https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1239949,
          "date": "Mon 01 Jul 2024 04:49",
          "username": "bogdannb",
          "content": "It says to quickly analyze the data, Athena can't do it so it's D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But Athena can directly access S3</li><li>requirement: LEAST operational overhead</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1318380,
          "date": "Wed 27 Nov 2024 02:49",
          "username": "JA2018",
          "content": "But Athena can directly access S3<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>requirement: LEAST operational overhead</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1318381,
          "date": "Wed 27 Nov 2024 02:50",
          "username": "JA2018",
          "content": "requirement: LEAST operational overhead",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1115868,
          "date": "Sun 07 Jan 2024 14:35",
          "username": "OSHOAIB",
          "content": "Option B - leverages serverless services that minimise management tasks and allows the company to focus on querying and analysing the data with the LEAST operational overhead.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#673",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an SMB file server in its data center. The file server stores large files that the company frequently accesses for up to 7 days after the file creation date. After 7 days, the company needs to be able to access the files with a maximum retrieval time of 24 hours.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#673",
          "answers": [
            {
              "choice": "<p>Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 File Gateway to increase the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon FSx File Gateway to increase the company's storage space. Create an Amazon S3 Lifecycle policy to transition the data after 7 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure access to Amazon S3 for each user. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 673 discussion",
      "discusstion": [
        {
          "id": 1121869,
          "date": "Sat 13 Jul 2024 16:48",
          "username": "awsgeek75",
          "content": "A: DataSync is not used for this<br>C: FSx File Gateway requires NFS on both sides so won't work with S3<br>D: Doesn't say how to transfer data to S3<br><br>B: S3 File Gateway will connect SMB to S3. Lifecycle policy will move objects to S3 Glacier Deep Archive which support 12 hours retrieval<br>https://aws.amazon.com/blogs/aws/new-amazon-s3-storage-class-glacier-deep-archive/",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1110138,
          "date": "Sat 29 Jun 2024 23:34",
          "username": "PegasusForever",
          "content": "Answer is B, Amazon S3 File Gateway supports SMB and NFS, Amazon FSx File Gateway SMB for windows workloads.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1154115,
          "date": "Mon 19 Aug 2024 16:36",
          "username": "NayeraB",
          "content": "It feels like C is there just to mess with everyone",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1112706,
          "date": "Wed 03 Jul 2024 11:27",
          "username": "pentium75",
          "content": "Not C because FSx File Gateway saves files in FSx for Windows file server, not S3.<br>Not D because users should acess the files via SMB<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"FSx File Gateway saves files in FSx for Windows File Server, not S3\\\"<br>-- me spreading misinformation on the Internet &gt;:)</li><li>While it is optimized for compatibility with Windows environments, the files stored in Amazon S3 through the FSx File Gateway are not limited to Windows-only access.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1163130,
          "date": "Sun 01 Sep 2024 00:42",
          "username": "chickenmf",
          "content": "\\\"FSx File Gateway saves files in FSx for Windows File Server, not S3\\\"<br>-- me spreading misinformation on the Internet >:)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>While it is optimized for compatibility with Windows environments, the files stored in Amazon S3 through the FSx File Gateway are not limited to Windows-only access.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1163131,
          "date": "Sun 01 Sep 2024 00:44",
          "username": "chickenmf",
          "content": "While it is optimized for compatibility with Windows environments, the files stored in Amazon S3 through the FSx File Gateway are not limited to Windows-only access.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1109900,
          "date": "Sun 30 Jun 2024 18:37",
          "username": "cciesam",
          "content": "S3 file gateway supports SMB and S3 Glacier Deep Archive can retrieve data within 12 hours.<br>https://aws.amazon.com/storagegateway/file/s3/<br><br>https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/amazon-s3-glacier.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1109720,
          "date": "Sun 30 Jun 2024 12:08",
          "username": "Roger_Liu",
          "content": "I prefer to choose Amazon S3 File Gateway.<br>https://docs.aws.amazon.com/filegateway/latest/files3/file-gateway-concepts.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1108876,
          "date": "Sat 29 Jun 2024 16:07",
          "username": "meenkaza",
          "content": "Amazon FSx File Gateway with S3 Lifecycle policy (Option C): Amazon FSx is a fully managed file storage service, and with a File Gateway, it allows seamless integration between on-premises file servers and AWS storage. By creating an Amazon FSx File Gateway and implementing an S3 Lifecycle policy to transition data to S3 after 7 days, you can achieve the desired storage and retrieval characteristics.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Wrong. An \\\"FSx File Gateway\\\" stores the files on AWS side in FSx for Windows file server, NOT in S3. Thus you can't apply the \\\"S3 Lifecycle Policy\\\".</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1112703,
          "date": "Wed 03 Jul 2024 11:26",
          "username": "pentium75",
          "content": "Wrong. An \\\"FSx File Gateway\\\" stores the files on AWS side in FSx for Windows file server, NOT in S3. Thus you can't apply the \\\"S3 Lifecycle Policy\\\".",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#674",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a web application on Amazon EC2 instances in an Auto Scaling group. The application uses a database that runs on an Amazon RDS for PostgreSQL DB instance. The application performs slowly when traffic increases. The database experiences a heavy read load during periods of high traffic.<br><br>Which actions should a solutions architect take to resolve these performance issues? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#674",
          "answers": [
            {
              "choice": "<p>Turn on auto scaling for the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a read replica for the DB instance. Configure the application to send read traffic to the read replica.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Convert the DB instance to a Multi-AZ DB instance deployment. Configure the application to send read traffic to the standby DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon ElastiCache cluster. Configure the application to cache query results in the ElastiCache cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the Auto Scaling group subnets to ensure that the EC2 instances are provisioned in the same Availability Zone as the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 674 discussion",
      "discusstion": [
        {
          "id": 1121879,
          "date": "Sat 13 Jul 2024 16:56",
          "username": "awsgeek75",
          "content": "A: RDS DB instance Autoscaling is not a thing<br>C: You cannot read from standby even if this was done.<br>E: Does not solve any problem<br><br>Correct answer<br>B: Read replicas distribute load and help improving performance<br>D: Caching of any kind will help with performance<br><br>Remember: \\\" The database experiences a heavy read load during periods of high traffic.\\\"",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1118920,
          "date": "Wed 10 Jul 2024 18:25",
          "username": "06042022",
          "content": "By creating a read replica, you offload read traffic from the primary DB instance to the replica, distributing the load and improving overall performance during periods of heavy read traffic.<br><br>Amazon ElastiCache can be used to cache frequently accessed data, reducing the load on the database. This is particularly effective for read-heavy workloads, as it allows the application to retrieve data from the cache rather than making repeated database queries.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1180922,
          "date": "Mon 23 Sep 2024 14:12",
          "username": "xBUGx",
          "content": "RDS auto scaling helps capacity issue, not heavy read workload issue.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1112772,
          "date": "Wed 03 Jul 2024 13:07",
          "username": "Tekk97",
          "content": "i think we need Multi az DB, wtih ElastiCache",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1112716,
          "date": "Wed 03 Jul 2024 11:40",
          "username": "pentium75",
          "content": "Not A - There is no such thing as \\\"auto scaling for a DB instance\\\". There is automatic storage scaling, but storage is not the issue here.<br>B - Yes, read replica will help with \\\"heavy read load\\\"<br>Not C - \\\"send read traffic to the standby DB instance\\\" does not work<br>D - \\\"Configure the application ...\\\" might be a bit simplified, but Elasticache helps with read load<br>Not E - That might have impact on latency, but not on database load; and all instances in same AZ would be against WAF<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Amazon RDS does support Storage Auto Scaling :)<br>https://aws.amazon.com/about-aws/whats-new/2019/06/rds-storage-auto-scaling/</li><li>Storage auto scaling is not same as instance autoscaling. Storage is not a problem here.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1115960,
          "date": "Sun 07 Jul 2024 15:25",
          "username": "OSHOAIB",
          "content": "Amazon RDS does support Storage Auto Scaling :)<br>https://aws.amazon.com/about-aws/whats-new/2019/06/rds-storage-auto-scaling/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Storage auto scaling is not same as instance autoscaling. Storage is not a problem here.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1121876,
          "date": "Sat 13 Jul 2024 16:53",
          "username": "awsgeek75",
          "content": "Storage auto scaling is not same as instance autoscaling. Storage is not a problem here.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1109442,
          "date": "Sun 30 Jun 2024 05:47",
          "username": "Riajul",
          "content": "A and B should be most correct ans<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A is autoscaling for DB, it won't fix read problem.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1127324,
          "date": "Sat 20 Jul 2024 14:29",
          "username": "awsgeek75",
          "content": "A is autoscaling for DB, it won't fix read problem.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1109012,
          "date": "Sat 29 Jun 2024 18:52",
          "username": "Riajul",
          "content": "Should be A and B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1108883,
          "date": "Sat 29 Jun 2024 16:10",
          "username": "meenkaza",
          "content": "B. Create a read replica for the DB instance. Configure the application to send read traffic to the read replica.<br><br>By creating a read replica, you offload read traffic from the primary DB instance to the replica, distributing the load and improving overall performance during periods of heavy read traffic.<br>D. Create an Amazon ElastiCache cluster. Configure the application to cache query results in the ElastiCache cluster.<br><br>Amazon ElastiCache can be used to cache frequently accessed data, reducing the load on the database. This is particularly effective for read-heavy workloads, as it allows the application to retrieve data from the cache rather than making repeated database queries.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ElastiCache requires application changes, \\\"the solutions architect\\\" cannot simply \\\"configure the application to cache query results\\\".</li><li>On second thought, this might still be correct.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/creating-elasticache-cluster-with-RDS-settings.html</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1112710,
          "date": "Wed 03 Jul 2024 11:31",
          "username": "pentium75",
          "content": "ElastiCache requires application changes, \\\"the solutions architect\\\" cannot simply \\\"configure the application to cache query results\\\".<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>On second thought, this might still be correct.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/creating-elasticache-cluster-with-RDS-settings.html</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1112714,
          "date": "Wed 03 Jul 2024 11:37",
          "username": "pentium75",
          "content": "On second thought, this might still be correct.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/creating-elasticache-cluster-with-RDS-settings.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#675",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) volumes to run an application. The company creates one snapshot of each EBS volume every day to meet compliance requirements. The company wants to implement an architecture that prevents the accidental deletion of EBS volume snapshots. The solution must not change the administrative rights of the storage administrator user.<br><br>Which solution will meet these requirements with the LEAST administrative effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#675",
          "answers": [
            {
              "choice": "<p>Create an IAM role that has permission to delete snapshots. Attach the role to a new EC2 instance. Use the AWS CLI from the new EC2 instance to delete snapshots.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM policy that denies snapshot deletion. Attach the policy to the storage administrator user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add tags to the snapshots. Create retention rules in Recycle Bin for EBS snapshots that have the tags.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Lock the EBS snapshots to prevent deletion.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 675 discussion",
      "discusstion": [
        {
          "id": 1108884,
          "date": "Fri 29 Dec 2023 17:11",
          "username": "meenkaza",
          "content": "Locking EBS Snapshots (Option D): The \\\"lock\\\" feature in AWS allows you to prevent accidental deletion of resources, including EBS snapshots. This can be set at the snapshot level, providing a straightforward and effective way to meet the requirements without changing the administrative rights of the storage administrator user.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1246394,
          "date": "Fri 12 Jul 2024 02:52",
          "username": "aquarian_ngc",
          "content": "correct option D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1241741,
          "date": "Thu 04 Jul 2024 03:42",
          "username": "Gape4",
          "content": "I will go for D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1121883,
          "date": "Sat 13 Jan 2024 17:59",
          "username": "awsgeek75",
          "content": "D: Exactly what a locked EBS snapshot is used for<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-snapshot-lock.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1112754,
          "date": "Wed 03 Jan 2024 13:47",
          "username": "pentium75",
          "content": "Typical use case for object lock aka D",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#676",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's application uses Network Load Balancers, Auto Scaling groups, Amazon EC2 instances, and databases that are deployed in an Amazon VPC. The company wants to capture information about traffic to and from the network interfaces in near real time in its Amazon VPC. The company wants to send the information to Amazon OpenSearch Service for analysis.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#676",
          "answers": [
            {
              "choice": "<p>Create a log group in Amazon CloudWatch Logs. Configure VPC Flow Logs to send the log data to the log group. Use Amazon Kinesis Data Streams to stream the logs from the log group to OpenSearch Service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a log group in Amazon CloudWatch Logs. Configure VPC Flow Logs to send the log data to the log group. Use Amazon Kinesis Data Firehose to stream the logs from the log group to OpenSearch Service.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a trail in AWS CloudTrail. Configure VPC Flow Logs to send the log data to the trail. Use Amazon Kinesis Data Streams to stream the logs from the trail to OpenSearch Service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a trail in AWS CloudTrail. Configure VPC Flow Logs to send the log data to the trail. Use Amazon Kinesis Data Firehose to stream the logs from the trail to OpenSearch Service.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 676 discussion",
      "discusstion": [
        {
          "id": 1112788,
          "date": "Wed 03 Jan 2024 14:30",
          "username": "pentium75",
          "content": "CloudTrail is for logging administrative actions, we need CloudWatch. We want the data in another AWS service (OpenSearch), not Kinesis, thus we need Firehose, not Streams.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1237374,
          "date": "Wed 26 Jun 2024 12:08",
          "username": "Jacky_S",
          "content": "base on the research, it should be Answer A, because question is asking for a \\\"near real time\\\" which Kinesis Data Stream is offering the data with less than 1 second latency. But Kinese Data Firehost is offering the data with more than 1 second.<br><br>https://docs.aws.amazon.com/opensearch-service/latest/developerguide/integrations.html#integrations-kinesis<br>https://stackoverflow.com/questions/44608274/is-there-any-difference-in-processing-times-between-aws-kinesis-firehose-and-str<br>https://docs.aws.amazon.com/streams/latest/dev/using-other-services-cw-logs.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>While Amazon Kinesis Data Streams can stream data, it requires additional setup (e.g., Lambda functions) to process and send logs to OpenSearch Service. This adds complexity compared to Kinesis Data Firehose, which is purpose-built for this use case.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1334583,
          "date": "Tue 31 Dec 2024 04:00",
          "username": "FlyingHawk",
          "content": "While Amazon Kinesis Data Streams can stream data, it requires additional setup (e.g., Lambda functions) to process and send logs to OpenSearch Service. This adds complexity compared to Kinesis Data Firehose, which is purpose-built for this use case.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1237372,
          "date": "Wed 26 Jun 2024 12:06",
          "username": "Jacky_S",
          "content": "base on the research, it should be Answer A, because question is asking for a \\\"near real time\\\" which Kinesis Data Stream is offering the data with less than 1 second latency. But Kinese Data Firehost is offering the data with more than 1 second.<br>https://docs.aws.amazon.com/opensearch-service/latest/developerguide/integrations.html#integrations-kinesis<br>https://stackoverflow.com/questions/44608274/is-there-any-difference-in-processing-times-between-aws-kinesis-firehose-and-str",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1192060,
          "date": "Tue 09 Apr 2024 08:43",
          "username": "zinabu",
          "content": "log analysis place aws cloudwatch log<br>data capturing on the entire vpcaws flow log<br>near real time data analysis and send to OpenSearch service kinesis data fire hose",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1146905,
          "date": "Sun 11 Feb 2024 02:06",
          "username": "1Alpha1",
          "content": "OpenSearch patterns for CloudWatch Logs:<br><br>1) \\\"Near Real Time\\\": CloudWatch logs --> Subscription Filter --> Kinesis Data Firehose --> Amazon OpenSearch (option *B*)<br><br>2) \\\"Real Time\\\": CloudWatch logs --> Subscription Filter --> Lambda --> Amazon OpenSearch",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1108887,
          "date": "Fri 29 Dec 2023 17:13",
          "username": "meenkaza",
          "content": "Amazon CloudWatch Logs and VPC Flow Logs (Option B): VPC Flow Logs capture information about the IP traffic going to and from network interfaces in a VPC. By configuring VPC Flow Logs to send the log data to a log group in Amazon CloudWatch Logs, you can then use Amazon Kinesis Data Firehose to stream the logs from the log group to Amazon OpenSearch Service for analysis. This approach provides near real-time streaming of logs to the analytics service.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#677",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing an application that will run on a production Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The EKS cluster has managed node groups that are provisioned with On-Demand Instances.<br><br>The company needs a dedicated EKS cluster for development work. The company will use the development cluster infrequently to test the resiliency of the application. The EKS cluster must manage all the nodes.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#677",
          "answers": [
            {
              "choice": "<p>Create a managed node group that contains only Spot Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create two managed node groups. Provision one node group with On-Demand Instances. Provision the second node group with Spot Instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Auto Scaling group that has a launch configuration that uses Spot Instances. Configure the user data to add the nodes to the EKS cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a managed node group that contains only On-Demand Instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 677 discussion",
      "discusstion": [
        {
          "id": 1112798,
          "date": "Wed 03 Jul 2024 13:43",
          "username": "pentium75",
          "content": "I think the question is easy to misunderstand, whether you should create the whole setup or just the development cluster. But from the wording (\\\"The [production] EKS cluster has (!) managed node groups ... The company needs a dedicated EKS cluster for development work\\\"), I conclude that we should only create the development cluster.<br><br>As this will be used \\\"infrequently\\\" for testing purposes only, and it must be \\\"most cost-effective\\\", I'd go with A - new cluster with \\\"one managed node group that contains only Spot instances\\\".<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The wording of question and options is so confusing. The last line is a throw off also \\\"The EKS cluster must manage all the nodes\\\" Which EKS cluster? A new one or the existing one.<br>Both A and B are correct depending on how you decipher the question.<br>I really hope the exam question uses better language!</li><li>I hate this question.... I think I will go with B just because wording also.A company is developing an application that \\\"WILL\\\" run on a production Amazon Elastic Kubernetes Service</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1121897,
          "date": "Sat 13 Jul 2024 17:20",
          "username": "awsgeek75",
          "content": "The wording of question and options is so confusing. The last line is a throw off also \\\"The EKS cluster must manage all the nodes\\\" Which EKS cluster? A new one or the existing one.<br>Both A and B are correct depending on how you decipher the question.<br>I really hope the exam question uses better language!",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1185621,
          "date": "Sun 29 Sep 2024 18:42",
          "username": "Drew3000",
          "content": "I hate this question.... I think I will go with B just because wording also.A company is developing an application that \\\"WILL\\\" run on a production Amazon Elastic Kubernetes Service",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1138701,
          "date": "Fri 02 Aug 2024 16:09",
          "username": "frmrkc",
          "content": "This question is convoluted and missing some details.<br>We need:<br>- control plane running on on-demand EC2s<br>- worker nodes running on spot instances<br><br>Read this to understand correct solution:<br>https://aws.amazon.com/blogs/containers/amazon-eks-now-supports-provisioning-and-managing-ec2-spot-instances-in-managed-node-groups/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1202532,
          "date": "Sat 26 Oct 2024 12:18",
          "username": "bujuman",
          "content": "If we look closer to the last requirement \\\"The EKS cluster must manage all the nodes.\\\" Option B is the only feasable and cost-effective one.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I think this requirment mean to use manage node group to manage all worker nodes, the nodes for control panel will be managed by AWS, so A is correct</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1334592,
          "date": "Tue 31 Dec 2024 04:15",
          "username": "FlyingHawk",
          "content": "I think this requirment mean to use manage node group to manage all worker nodes, the nodes for control panel will be managed by AWS, so A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1147124,
          "date": "Sun 11 Aug 2024 10:09",
          "username": "1Alpha1",
          "content": "Based on the document [1], we can know that only self-managed node group can deploy the container on EC2 dedicated hosts . Which mean that customer need to manually create launch template, auto scaling group, and register it to the EKS cluster. The creation process should be same as general EC2 auto scaling creation. For now, EKS managed node group only supported on-demand and spot.<br><br>MOST cost-effectively: *Spot Instances*<br><br>https://repost.aws/questions/QUugoX4f1gRHW0MGHRTHFFFA/how-to-create-eks-cluster-with-dedicated-host-node-group",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1127814,
          "date": "Sun 21 Jul 2024 12:56",
          "username": "anikolov",
          "content": "\\\"The company will use the development cluster infrequently to test the resiliency of the application\\\"Spot instancescost effective",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1118909,
          "date": "Wed 10 Jul 2024 18:09",
          "username": "06042022",
          "content": "The keywords are infrequent and resiliency..<br><br>This solution allows you to have a mix of On-Demand Instances and Spot Instances within the same EKS cluster. You can use the On-Demand Instances for the development work where you need dedicated resources and then leverage Spot Instances for testing the resiliency of the application. Spot Instances are generally more cost-effective but can be terminated with short notice, so using a combination of On-Demand and Spot Instances provides a balance between cost savings and stability.<br><br>Option A (Create a managed node group that contains only Spot Instances) might be cost-effective, but it could introduce potential challenges for tasks that require dedicated resources and might not be the best fit for all scenarios.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1116306,
          "date": "Mon 08 Jul 2024 01:36",
          "username": "mr123dd",
          "content": "The GBT vote A, I know the spot instance is the cheapest, but the question says \\\"dedicated EKS cluster for development\\\", so I vote B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A dedicated EKS cluster means a separate EKS cluster that is isolated from the production cluster. This ensures that development work does not interfere with the production environment</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1334595,
          "date": "Tue 31 Dec 2024 04:18",
          "username": "FlyingHawk",
          "content": "A dedicated EKS cluster means a separate EKS cluster that is isolated from the production cluster. This ensures that development work does not interfere with the production environment",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1115981,
          "date": "Sun 07 Jul 2024 15:46",
          "username": "OSHOAIB",
          "content": "Option A leverages the cost savings of Spot Instances, which is ideal for a development environment where the application is tested infrequently, and there is flexibility in when the nodes can be interrupted. This aligns with the goal of cost-efficiency and takes advantage of EKS's ability to manage the nodes directly.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1109910,
          "date": "Sun 30 Jun 2024 19:13",
          "username": "cciesam",
          "content": "B is the best ans.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why do you think so?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1112799,
          "date": "Wed 03 Jul 2024 13:43",
          "username": "pentium75",
          "content": "Why do you think so?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1109377,
          "date": "Sun 30 Jun 2024 03:41",
          "username": "Naijaboy99",
          "content": "Option B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why do you think so?</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1112800,
          "date": "Wed 03 Jul 2024 13:44",
          "username": "pentium75",
          "content": "Why do you think so?",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#678",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores sensitive data in Amazon S3. A solutions architect needs to create an encryption solution. The company needs to fully control the ability of users to create, rotate, and disable encryption keys with minimal effort for any data that must be encrypted.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#678",
          "answers": [
            {
              "choice": "<p>Use default server-side encryption with Amazon S3 managed encryption keys (SSE-S3) to store the sensitive data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a customer managed key by using AWS Key Management Service (AWS KMS). Use the new key to encrypt the S3 objects by using server-side encryption with AWS KMS keys (SSE-KMS).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS managed key by using AWS Key Management Service (AWS KMS). Use the new key to encrypt the S3 objects by using server-side encryption with AWS KMS keys (SSE-KMS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Download S3 objects to an Amazon EC2 instance. Encrypt the objects by using customer managed keys. Upload the encrypted objects back into Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 678 discussion",
      "discusstion": [
        {
          "id": 1108894,
          "date": "Fri 29 Dec 2023 17:19",
          "username": "meenkaza",
          "content": "SSE-KMS with Customer Managed Key (Option B): This option allows you to create a customer managed key using AWS KMS. With a customer managed key, you have full control over key lifecycle management, including the ability to create, rotate, and disable keys with minimal effort. SSE-KMS also integrates with AWS Identity and Access Management (IAM) for fine-grained access control.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1285382,
          "date": "Tue 17 Sep 2024 19:30",
          "username": "MatAlves",
          "content": "Having both awsgeek75 and pentium75 in the comment section makes me more confident about my own answers.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1162012,
          "date": "Wed 28 Feb 2024 22:30",
          "username": "rubiteb",
          "content": "Customer needs to control the 'user's ability' and not the management of the keys.Option C will prevent users to have this ability.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1121901,
          "date": "Sat 13 Jan 2024 18:23",
          "username": "awsgeek75",
          "content": "Has to be customer manages to AC are not useful<br>D is just wrong way of doing this<br>B give full control to customer while using S3 server side encryption.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1112802,
          "date": "Wed 03 Jan 2024 14:47",
          "username": "pentium75",
          "content": "A and C do not allow the company \\\"to fully control the ability of users to create, rotate, and disable encryption keys\\\". D is anything but \\\"minimal effort\\\".",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1109444,
          "date": "Sat 30 Dec 2023 06:52",
          "username": "Riajul",
          "content": "Option B should be correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#679",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to back up its on-premises virtual machines (VMs) to AWS. The company's backup solution exports on-premises backups to an Amazon S3 bucket as objects. The S3 backups must be retained for 30 days and must be automatically deleted after 30 days.<br><br>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#679",
          "answers": [
            {
              "choice": "<p>Create an S3 bucket that has S3 Object Lock enabled.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 bucket that has object versioning enabled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a default retention period of 30 days for the objects.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an S3 Lifecycle policy to protect the objects for 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an S3 Lifecycle policy to expire the objects after 30 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the backup solution to tag the objects with a 30-day retention period<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 679 discussion",
      "discusstion": [
        {
          "id": 1225175,
          "date": "Thu 06 Jun 2024 08:14",
          "username": "te1973",
          "content": "This is a good example for a completely non-sense AWS exam question. In order to delete the object like requested in the question you need (E). This is required in either versioned or non-versioned buckets. Basically the task is done here. But let's assume we want to make it extra secure and retain the files for 30 days. Then we need object lock (A). You cannot have object lock without versioning (B). You also need to set a retention period then(C). So you either have A,B,C,E or you have E. Choosing exactly 3 options is completely nonsense here. But what do i know.",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1112824,
          "date": "Wed 03 Jan 2024 15:08",
          "username": "pentium75",
          "content": "In theory, E alone would be enough because the objects are \\\"retained for 30 days\\\" without any configuration as long as no one deletes them. But let's assume that they want us to prevent deletion.<br><br>A: Yes, required to prevent deletion. Object Lock requires Versioning, so if we 'create an S3 bucket that has S3 Object Lock enabled' that this also has object versioning enabled, otherwise we would not be able to create it.<br><br>B: No. We need versioning, but we cannot \\\"create\\\" the bucket twice. If we create it \\\"with object lock enabled\\\" then versioning is enabled too, but NOT the other way round (creating it with versioning enabled will not automatically enable object lock).<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C: Yes, \\\"default retention period\\\" specifies how long object lock will be applied to new objects by default, we need this to protect objects from deletion.<br><br>D: No, S3 Lifecycle Policy can \\\"transition\\\" or \\\"expire\\\" but not \\\"protect\\\".<br><br>E: Yes, this will delete the objects after 30 days (C just removes the object lock after 30 days but does not delete the objects).<br><br>F: No, 'tag with a retention period' is not common AWS wording, \\\"tags\\\" are something different in AWS context</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1112825,
          "date": "Wed 03 Jan 2024 15:08",
          "username": "pentium75",
          "content": "C: Yes, \\\"default retention period\\\" specifies how long object lock will be applied to new objects by default, we need this to protect objects from deletion.<br><br>D: No, S3 Lifecycle Policy can \\\"transition\\\" or \\\"expire\\\" but not \\\"protect\\\".<br><br>E: Yes, this will delete the objects after 30 days (C just removes the object lock after 30 days but does not delete the objects).<br><br>F: No, 'tag with a retention period' is not common AWS wording, \\\"tags\\\" are something different in AWS context",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1328803,
          "date": "Thu 19 Dec 2024 02:40",
          "username": "omega_coaching",
          "content": "For enabling S3 object lock we need to enable Bucket versioning.. SO and must be ABE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABE"
        },
        {
          "id": 1285388,
          "date": "Tue 17 Sep 2024 19:42",
          "username": "MatAlves",
          "content": "\\\"Object Lock works only in buckets that have S3 Versioning enabled\\\"<br><br>However, we can't have 2 options (A and B) telling to create the bucket. So, A is only possible if versioning is already enabled.<br><br>We need retention period (C), since this is not a case for legal holds:<br><br>\\\"Object Lock provides two ways to manage object retention: retention periods and legal holds.\\\"<br><br>E - obvious reasons.<br><br>Ref. https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1268677,
          "date": "Mon 19 Aug 2024 14:54",
          "username": "chwieobjom",
          "content": "this is shit",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1184527,
          "date": "Thu 28 Mar 2024 04:25",
          "username": "mohammadthainat",
          "content": "1- The S3 backups must be retained for 30 days --><br><br>For that you must enable S3 Object Lock (versioning must be enabled) in Compliance Mode and set Retention Period to 30 days. Thus, to achieve this you need 3 options <A, B and C>2- The S3 backups must be automatically deleted after 30 days. --><br><br>For that you must Create Lifecycle Rule with action Expire current versions of objects (versioning must be enabled) and set Expiration Period to 30 days. Thus to achieve this you need 2 options <B and E><br><br><B> is a must here as both locking the objects and deleting them can't be achieved without it. But, when choosing \\\"A.Create an S3 bucket that has S3 Object Lock enabled.\\\" this explicitly indicated that versioning is enabled in your bucket.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1127350,
          "date": "Sat 20 Jan 2024 16:18",
          "username": "awsgeek75",
          "content": "B: No versioning is required<br>D: Lifecycle is for transitioning or expiring. There is no protection lifecycle policy<br>F: No such tag<br><br>Enable object lock, retain for 30 days (https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-retention-date.html) and expire after 30 days.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Object Lock works only in buckets that have S3 Versioning enabled\\\"<br><br>However, I still agree with ACE, since the bucket has already been created, so we can't have 2 answers telling to create the bucket.<br><br>And yes, for this case, we need retention period:<br><br>\\\"Object Lock provides two ways to manage object retention: retention periods and legal holds.\\\"<br><br>Ref. https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html</li><li>I meant ACE! not ADE!</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 1285387,
          "date": "Tue 17 Sep 2024 19:39",
          "username": "MatAlves",
          "content": "\\\"Object Lock works only in buckets that have S3 Versioning enabled\\\"<br><br>However, I still agree with ACE, since the bucket has already been created, so we can't have 2 answers telling to create the bucket.<br><br>And yes, for this case, we need retention period:<br><br>\\\"Object Lock provides two ways to manage object retention: retention periods and legal holds.\\\"<br><br>Ref. https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1127351,
          "date": "Sat 20 Jan 2024 16:18",
          "username": "awsgeek75",
          "content": "I meant ACE! not ADE!",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1110155,
          "date": "Sun 31 Dec 2023 01:13",
          "username": "PegasusForever",
          "content": "ABE -> https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html<br>A. Create an S3 bucket that has S3 Object Lock enabled. -> You set a Retention period of 30 days with this feature.<br>B. Create an S3 bucket that has object versioning enabled -> Object Lock works only in buckets that have S3 Versioning enabled<br>E. Configure an S3 Lifecycle policy to expire the objects after 30 days. -> It is valid using the lifecicle policy.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>After analyzing the question deeply and reading:https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html, I keep A and B, change E per C.<br>A. Create an S3 bucket that has S3 Object Lock enabled.<br>B. Create an S3 bucket that has object versioning enabled.<br>Change E must be automatically deleted after 30 days(objects will be marked as expired not deleted). per C. Configure a default retention period of 30 days for the objects. It feature delete the object.</li><li>Selected Answer: ACE<br>A. Create an S3 bucket that has S3 Object Lock enabled. Enable the S3 Object Lock feature on S3.<br>C. Configure a default retention period of 30 days for the objects. To lock the objects for 30 days.<br>E.Configure an S3 Lifecycle policy to expire the objects after 30 days. -&gt; to delete the objects after 30 days.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1115458,
          "date": "Sat 06 Jan 2024 22:50",
          "username": "PegasusForever",
          "content": "After analyzing the question deeply and reading:https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html, I keep A and B, change E per C.<br>A. Create an S3 bucket that has S3 Object Lock enabled.<br>B. Create an S3 bucket that has object versioning enabled.<br>Change E must be automatically deleted after 30 days(objects will be marked as expired not deleted). per C. Configure a default retention period of 30 days for the objects. It feature delete the object.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Selected Answer: ACE<br>A. Create an S3 bucket that has S3 Object Lock enabled. Enable the S3 Object Lock feature on S3.<br>C. Configure a default retention period of 30 days for the objects. To lock the objects for 30 days.<br>E.Configure an S3 Lifecycle policy to expire the objects after 30 days. -&gt; to delete the objects after 30 days.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1117156,
          "date": "Tue 09 Jan 2024 03:06",
          "username": "PegasusForever",
          "content": "Selected Answer: ACE<br>A. Create an S3 bucket that has S3 Object Lock enabled. Enable the S3 Object Lock feature on S3.<br>C. Configure a default retention period of 30 days for the objects. To lock the objects for 30 days.<br>E.Configure an S3 Lifecycle policy to expire the objects after 30 days. -> to delete the objects after 30 days.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1109960,
          "date": "Sat 30 Dec 2023 21:34",
          "username": "cciesam",
          "content": "ACE is the correct ans.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 1109450,
          "date": "Sat 30 Dec 2023 06:54",
          "username": "Riajul",
          "content": "ADE should be correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why?<br><br>S3 Lifecycle Policy can \\\"transition\\\" or \\\"expire\\\" but not \\\"protect\\\"<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-expire-general-considerations.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 1112816,
          "date": "Wed 03 Jan 2024 15:00",
          "username": "pentium75",
          "content": "Why?<br><br>S3 Lifecycle Policy can \\\"transition\\\" or \\\"expire\\\" but not \\\"protect\\\"<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-expire-general-considerations.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1109369,
          "date": "Sat 30 Dec 2023 04:31",
          "username": "Naijaboy99",
          "content": "Correct Answer is A C E",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1108899,
          "date": "Fri 29 Dec 2023 17:22",
          "username": "meenkaza",
          "content": "A. Create an S3 bucket that has S3 Object Lock enabled.<br><br>S3 Object Lock provides the ability to enforce retention periods on objects, preventing deletion or modification for a specified duration.<br>D. Configure an S3 Lifecycle policy to protect the objects for 30 days.<br><br>By configuring a lifecycle policy, you can define a transition action to move objects to the S3 Glacier storage class (or any other storage class) after 30 days.<br>E. Configure an S3 Lifecycle policy to expire the objects after 30 days.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>S3 Lifecycle Policy can \\\"transition\\\" or \\\"expire\\\" but not \\\"protect\\\"<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-expire-general-considerations.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADE"
        },
        {
          "id": 1112817,
          "date": "Wed 03 Jan 2024 15:00",
          "username": "pentium75",
          "content": "S3 Lifecycle Policy can \\\"transition\\\" or \\\"expire\\\" but not \\\"protect\\\"<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-expire-general-considerations.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#680",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to copy files from an Amazon S3 bucket to an Amazon Elastic File System (Amazon EFS) file system and another S3 bucket. The files must be copied continuously. New files are added to the original S3 bucket consistently. The copied files should be overwritten only if the source file changes.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#680",
          "answers": [
            {
              "choice": "<p>Create an AWS DataSync location for both the destination S3 bucket and the EFS file system. Create a task for the destination S3 bucket and the EFS file system. Set the transfer mode to transfer only data that has changed.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function. Mount the file system to the function. Set up an S3 event notification to invoke the function when files are created and changed in Amazon S3. Configure the function to copy files to the file system and the destination S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS DataSync location for both the destination S3 bucket and the EFS file system. Create a task for the destination S3 bucket and the EFS file system. Set the transfer mode to transfer all data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Launch an Amazon EC2 instance in the same VPC as the file system. Mount the file system. Create a script to routinely synchronize all objects that changed in the origin S3 bucket to the destination S3 bucket and the mounted file system.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 680 discussion",
      "discusstion": [
        {
          "id": 1108903,
          "date": "Sat 29 Jun 2024 16:26",
          "username": "meenkaza",
          "content": "AWS DataSync (Option A): AWS DataSync is designed for efficient and reliable copying of data between different storage solutions. By setting up an AWS DataSync task with the transfer mode set to transfer only data that has changed, you ensure that only the new or modified files are copied. This minimizes data transfer and operational overhead.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Actually this is not fully correct:<br><br>\\\"By setting up an AWS DataSync task with the transfer mode set to transfer only data that has changed, you ensure that only the new or modified files are copied. \\\"<br><br>\\\"Transfer only data that has changed ... copies only the data and metadata that differs between the source and destination location.\\\"<br><br>So, if we have a source with existing items and an empty destination (like in this example), \\\"transfer only data that has changed\\\" will transfer all the existing items though in the true sense of the word they have not \\\"changed\\\".</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1112844,
          "date": "Wed 03 Jul 2024 14:27",
          "username": "pentium75",
          "content": "Actually this is not fully correct:<br><br>\\\"By setting up an AWS DataSync task with the transfer mode set to transfer only data that has changed, you ensure that only the new or modified files are copied. \\\"<br><br>\\\"Transfer only data that has changed ... copies only the data and metadata that differs between the source and destination location.\\\"<br><br>So, if we have a source with existing items and an empty destination (like in this example), \\\"transfer only data that has changed\\\" will transfer all the existing items though in the true sense of the word they have not \\\"changed\\\".",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1184540,
          "date": "Sat 28 Sep 2024 03:44",
          "username": "mohammadthainat",
          "content": "DataSync will do an Initial Scan of both S3 buckets. Identifying Differences. Then, Transferring Changes, so technically DataSync will transfer All the data at first run then it will only transfer newly added/modified objects subsequently.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1177152,
          "date": "Thu 19 Sep 2024 09:09",
          "username": "Kezuko",
          "content": "Have always did this using B, guess now that I know A is less operational",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1121909,
          "date": "Sat 13 Jul 2024 17:29",
          "username": "awsgeek75",
          "content": "BD are more operation overhead although B can work in principle<br>AC uses managed service to transfer data. A fulfils the requirement of \\\"copied files should be overwritten only if the source file changes\\\" so A is correct. B will just copy regardless of the change<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Meant C will transfer everything and copy data without comparing for change</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1121910,
          "date": "Sat 13 Jul 2024 17:30",
          "username": "awsgeek75",
          "content": "Meant C will transfer everything and copy data without comparing for change",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1112845,
          "date": "Wed 03 Jul 2024 14:28",
          "username": "pentium75",
          "content": "Transfer only data that has changed =E2=80=93 DataSync copies only the data and metadata that differs between the source and destination location.<br><br>Transfer all data =E2=80=93 DataSync copies everything in the source to the destination without comparing differences between the locations.<br><br>https://docs.aws.amazon.com/datasync/latest/userguide/configure-metadata.html<br><br>(B would work too but is more \\\"operational overhead.\\\")",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1109961,
          "date": "Sun 30 Jun 2024 20:37",
          "username": "cciesam",
          "content": "ans: A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#681",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon EC2 instances and stores data on Amazon Elastic Block Store (Amazon EBS) volumes. The company must ensure that all data is encrypted at rest by using AWS Key Management Service (AWS KMS). The company must be able to control rotation of the encryption keys.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#681",
          "answers": [
            {
              "choice": "<p>Create a customer managed key. Use the key to encrypt the EBS volumes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS managed key to encrypt the EBS volumes. Use the key to configure automatic key rotation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an external KMS key with imported key material. Use the key to encrypt the EBS volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS owned key to encrypt the EBS volumes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 681 discussion",
      "discusstion": [
        {
          "id": 1112849,
          "date": "Wed 03 Jul 2024 14:32",
          "username": "pentium75",
          "content": "\\\"Able to control rotation of the encryption keys\\\"customer managed key (created by AWS but managed by the customer in KMS)",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1123806,
          "date": "Tue 16 Jul 2024 01:22",
          "username": "AAbirdy",
          "content": "The company must be able to control rotation of the encryption keyscustomer managed key",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1121913,
          "date": "Sat 13 Jul 2024 17:32",
          "username": "awsgeek75",
          "content": "\\\"The company must be able to control rotation of the encryption keys.\\\"<br>BD does not allow company owned keys<br>C is too much operational overhead",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1118741,
          "date": "Wed 10 Jul 2024 15:15",
          "username": "dikshya1233",
          "content": "The solution that meets the requirements with the LEAST operational overhead is:<br><br>B. Use an AWS managed key to encrypt the EBS volumes. Use the key to configure automatic key rotation.<br><br>With AWS managed keys (AWS managed CMKs), AWS takes care of key management tasks, including key rotation. This reduces operational overhead as AWS automatically handles key rotation without requiring manual intervention. It is a convenient option for users who want to ensure encryption at rest with minimal effort in managing encryption keys.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>AWS Manged keys don't meet the requirements \\\"The company must be able to control rotation of the encryption keys.\\\"</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1121915,
          "date": "Sat 13 Jul 2024 17:33",
          "username": "awsgeek75",
          "content": "AWS Manged keys don't meet the requirements \\\"The company must be able to control rotation of the encryption keys.\\\"",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1114348,
          "date": "Fri 05 Jul 2024 08:31",
          "username": "Shobhit2021",
          "content": "A is correct option",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1110716,
          "date": "Sun 30 Jun 2024 17:09",
          "username": "fea9bdf",
          "content": "Answer is C<br>Details are on this link below:<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html<br>Amazon S3 buckets have bucket encryption enabled by default, and new objects are automatically encrypted by using server-side encryption with Amazon S3 managed keys (SSE-S3). This encryption applies to all new objects in your Amazon S3 buckets, and comes at no cost to you.<br><br>If you need more control over your encryption keys, such as managing key rotation and access policy grants, you can elect to use server-side encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS), or dual-layer server-side encryption with AWS KMS keys (DSSE-KMS). For more information about SSE-KMS, see Specifying server-side encryption with AWS KMS (SSE-KMS). For more information about DSSE-KMS, see Using dual-layer server-side encryption with AWS KMS keys (DSSE-KMS).<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>How does this relate to answer C? With \\\"imported key material\\\" you cannot \\\"control rotation of the encryption keys\\\" (except by importing new keys). SSE-KMS (as mentioned in your explanationcustomer managed keyA</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1112847,
          "date": "Wed 03 Jul 2024 14:31",
          "username": "pentium75",
          "content": "How does this relate to answer C? With \\\"imported key material\\\" you cannot \\\"control rotation of the encryption keys\\\" (except by importing new keys). SSE-KMS (as mentioned in your explanationcustomer managed keyA",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1109435,
          "date": "Sun 30 Jun 2024 05:40",
          "username": "Riajul",
          "content": "Should be option A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1109370,
          "date": "Sun 30 Jun 2024 03:34",
          "username": "Naijaboy99",
          "content": "option B is the correct answer with least operational overhead on admins<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>AWS managed keys do allow for automatic rotation, but the company does NOT have control over the rotation - AWS manages this automatically without company intervention.</li><li>@meenkaza was right the answer is A</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1116308,
          "date": "Mon 08 Jul 2024 01:39",
          "username": "OSHOAIB",
          "content": "AWS managed keys do allow for automatic rotation, but the company does NOT have control over the rotation - AWS manages this automatically without company intervention.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1109383,
          "date": "Sun 30 Jun 2024 03:46",
          "username": "Naijaboy99",
          "content": "@meenkaza was right the answer is A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1108904,
          "date": "Sat 29 Jun 2024 16:28",
          "username": "meenkaza",
          "content": "option A (Create a customer managed key. Use the key to encrypt the EBS volumes) is the most suitable option with the least operational overhead for the given requirements.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#682",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs a solution to enforce data encryption at rest on Amazon EC2 instances. The solution must automatically identify noncompliant resources and enforce compliance policies on findings.<br><br>Which solution will meet these requirements with the LEAST administrative overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#682",
          "answers": [
            {
              "choice": "<p>Use an IAM policy that allows users to create only encrypted Amazon Elastic Block Store (Amazon EBS) volumes. Use AWS Config and AWS Systems Manager to automate the detection and remediation of unencrypted EBS volumes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Key Management Service (AWS KMS) to manage access to encrypted Amazon Elastic Block Store (Amazon EBS) volumes. Use AWS Lambda and Amazon EventBridge to automate the detection and remediation of unencrypted EBS volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Macie to detect unencrypted Amazon Elastic Block Store (Amazon EBS) volumes. Use AWS Systems Manager Automation rules to automatically encrypt existing and new EBS volumes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon inspector to detect unencrypted Amazon Elastic Block Store (Amazon EBS) volumes. Use AWS Systems Manager Automation rules to automatically encrypt existing and new EBS volumes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 682 discussion",
      "discusstion": [
        {
          "id": 1108907,
          "date": "Sat 29 Jun 2024 16:32",
          "username": "meenkaza",
          "content": "IAM Policy and AWS Config (Option A): By creating an IAM policy that allows users to create only encrypted EBS volumes, you proactively prevent the creation of unencrypted volumes. Using AWS Config, you can set up rules to detect noncompliant resources, and AWS Systems Manager Automation can be used for automated remediation. This approach provides a proactive and automated solution.",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1326692,
          "date": "Sun 15 Dec 2024 05:27",
          "username": "LeonSauveterre",
          "content": "Not B - because when you want to detect unencrypted EBS volumes using Lambda and EventBridge, the codes you'll need to compose is so much more than you think. Just leave that whole shebang to AWS Config and then you'll choose A accordingly.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1206014,
          "date": "Sun 03 Nov 2024 12:22",
          "username": "88f8032",
          "content": "Isn't B simpler?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1121917,
          "date": "Sat 13 Jul 2024 17:36",
          "username": "awsgeek75",
          "content": "B: Too much work<br>C: Macie is for PII and sensitive data not for encrypted volumes<br>D: Inspector for OS patching and vulnerability detections",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1121167,
          "date": "Fri 12 Jul 2024 23:11",
          "username": "f2e2419",
          "content": "why not B?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1116315,
          "date": "Mon 08 Jul 2024 01:46",
          "username": "OSHOAIB",
          "content": "Option A - enforces the creation of encrypted volumes via IAM policies and uses AWS Config for detection and AWS Systems Manager for remediation with the LEAST administrative overhead.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1112857,
          "date": "Wed 03 Jul 2024 14:37",
          "username": "pentium75",
          "content": "A as exactly described here: https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/automatically-encrypt-existing-and-new-amazon-ebs-volumes.html<br><br>Not B, that could in theory work but would be massive operational overhead<br><br>Not C, Macie detects PII data, not unencrypted volumes<br><br>Not D, Inspector detects vulnerabilities, not unencrypted volumes",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#683",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its multi-tier on-premises application to AWS. The application consists of a single-node MySQL database and a multi-node web tier. The company must minimize changes to the application during the migration. The company wants to improve application resiliency after the migration.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#683",
          "answers": [
            {
              "choice": "<p>Migrate the web tier to Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to Amazon EC2 instances in an Auto Scaling group behind a Network Load Balancer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to an Amazon RDS Multi-AZ deployment.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the web tier to an AWS Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to an Amazon DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 683 discussion",
      "discusstion": [
        {
          "id": 1108910,
          "date": "Sat 29 Jun 2024 16:34",
          "username": "meenkaza",
          "content": "Web Tier Migration (Option A): Migrating the web tier to Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB) provides horizontal scalability, automatic scaling, and improved resiliency. Auto Scaling helps in managing and maintaining the desired number of EC2 instances based on demand, and the ALB distributes incoming traffic across multiple instances.<br><br>Database Migration to Amazon RDS Multi-AZ (Option C): Migrating the database to Amazon RDS in a Multi-AZ deployment provides high availability and automatic failover. In a Multi-AZ deployment, Amazon RDS maintains a standby replica in a different Availability Zone, and in the event of a failure, it automatically promotes the replica to the primary instance. This enhances the resiliency of the database.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1112858,
          "date": "Wed 03 Jul 2024 14:41",
          "username": "pentium75",
          "content": "A - ALB is ideal for web application<br>B - NLB would work too but ALB is better<br>C - same functionality as on-premises just with 'improved resiliency'<br>D - would require significant \\\"changes to the application\\\"<br>E - would require significant \\\"changes to the application\\\"",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1110713,
          "date": "Sun 30 Jun 2024 16:59",
          "username": "fea9bdf",
          "content": "Also Dynamo DB is noSQL, that can not be an option here",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1109374,
          "date": "Sun 30 Jun 2024 03:37",
          "username": "Naijaboy99",
          "content": "option A C",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#684",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its web applications from on premises to AWS. The company is located close to the eu-central-1 Region. Because of regulations, the company cannot launch some of its applications in eu-central-1. The company wants to achieve single-digit millisecond latency.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#684",
          "answers": [
            {
              "choice": "<p>Deploy the applications in eu-central-1. Extend the company's VPC from eu-central-1 to an edge location in Amazon CloudFront.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the applications in AWS Local Zones by extending the company's VPC from eu-central-1 to the chosen Local Zone.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the applications in eu-central-1. Extend the company's VPC from eu-central-1 to the regional edge caches in Amazon CloudFront.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the applications in AWS Wavelength Zones by extending the company's VPC from eu-central-1 to the chosen Wavelength Zone.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 684 discussion",
      "discusstion": [
        {
          "id": 1112868,
          "date": "Wed 03 Jul 2024 14:56",
          "username": "pentium75",
          "content": "\\\"AWS Local Zones are a type of AWS infrastructure deployment that place compute, storage, database, and other select services closer to large population, industry, and IT centers, enabling you to deliver applications that require single-digit millisecond latency to end-users.\\\"<br><br>A and C tell us to \\\"deploy the applications in eu-central-1\\\" which is exactly what we're not supposed to do.<br><br>AWS Wavelength zones are AWS deployments in CSP's networks, has nothing to do with this question.<br><br>https://aws.amazon.com/about-aws/global-infrastructure/localzones/features/?nc1h_ls",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1121923,
          "date": "Sat 13 Jul 2024 17:41",
          "username": "awsgeek75",
          "content": "AC is not right \\\"Because of regulations, the company cannot launch some of its applications in eu-central-1\\\"<br>D: AWS Wavelength is for mobile network<br>B: Local Zones can be used to launch apps close to a region but not in a region like EUC1 so this works",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1162211,
          "date": "Thu 29 Aug 2024 04:23",
          "username": "bodakrishna",
          "content": "Correct B:<br>AWS Local Zones are an extension of AWS infrastructure and bring AWS services closer to end-users, providing ultra-low latency for applications that require single-digit millisecond latencies. By deploying the applications in AWS Local Zones, the company can meet the latency requirements while also complying with regulations that prevent certain applications from being hosted in the eu-central-1 Region.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1116325,
          "date": "Mon 08 Jul 2024 02:00",
          "username": "OSHOAIB",
          "content": "Option B - AWS Local Zones place AWS compute, storage, database, and other select services closer to end-users. This would allow the company to deploy applications within geographic proximity to eu-central-1 without being directly in the region, potentially meeting regulatory requirements and achieving low latency.<br><br>Whereas Option D - AWS Wavelength Zones are designed to provide developers the ability to build applications that deliver single-digit millisecond latencies to MOBILE and connected devices. And it's more focused on 5G Apps and may not be directly relevant to Web Apps hosting.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1114387,
          "date": "Fri 05 Jul 2024 09:18",
          "username": "pdragon1981",
          "content": "I would go also for B, was in doubt from B or D but I aggree with pentium75 the wavelenght zones are not designed for this use case however AWS local zones can provide single-digit milisecond latency as described in the link<br>https://aws.amazon.com/about-aws/global-infrastructure/localzones/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1109372,
          "date": "Sun 30 Jun 2024 03:36",
          "username": "Naijaboy99",
          "content": "option B",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1108911,
          "date": "Sat 29 Jun 2024 16:37",
          "username": "meenkaza",
          "content": "AWS Wavelength (Option D): AWS Wavelength Zones bring AWS services to the edge of the 5G network, providing ultra-low latency for applications that require single-digit millisecond latencies. Deploying applications in Wavelength Zones allows the company to extend its VPC from the eu-central-1 Region to the chosen Wavelength Zone, providing the required low-latency access.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It looks like D is correct from diagram in the following url.<br>https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html</li><li>\\\"Wavelength Zones are AWS infrastructure deployments that embed AWS compute and storage services within communications service providers' (CSP) 5G networks\\\". They reduce latency for mobile users in the CSP's network, but this is not asked here. Local Zones provide \\\"single-digit millisecond latency\\\".</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1113391,
          "date": "Thu 04 Jul 2024 07:26",
          "username": "Roger_Liu",
          "content": "It looks like D is correct from diagram in the following url.<br>https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1112870,
          "date": "Wed 03 Jul 2024 14:58",
          "username": "pentium75",
          "content": "\\\"Wavelength Zones are AWS infrastructure deployments that embed AWS compute and storage services within communications service providers' (CSP) 5G networks\\\". They reduce latency for mobile users in the CSP's network, but this is not asked here. Local Zones provide \\\"single-digit millisecond latency\\\".",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#685",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's ecommerce website has unpredictable traffic and uses AWS Lambda functions to directly access a private Amazon RDS for PostgreSQL DB instance. The company wants to maintain predictable database performance and ensure that the Lambda invocations do not overload the database with too many connections.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#685",
          "answers": [
            {
              "choice": "<p>Point the client driver at an RDS custom endpoint. Deploy the Lambda functions inside a VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Point the client driver at an RDS proxy endpoint. Deploy the Lambda functions inside a VPC.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Point the client driver at an RDS custom endpoint. Deploy the Lambda functions outside a VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Point the client driver at an RDS proxy endpoint. Deploy the Lambda functions outside a VPC.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 685 discussion",
      "discusstion": [
        {
          "id": 1151126,
          "date": "Thu 15 Aug 2024 16:39",
          "username": "ogerber",
          "content": "Option B.<br>Reduce number of connection to RDS -> RDS Proxy.<br>\\\"A Lambda function that's outside of a VPC can't access an RDS instance that's inside a VPC.\\\"<br><br>https://repost.aws/knowledge-center/connect-lambda-to-an-rds-instance",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1177159,
          "date": "Thu 19 Sep 2024 09:18",
          "username": "Kezuko",
          "content": "Have to be inside VPC in order to access the RDS instance for Lambda",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1151125,
          "date": "Thu 15 Aug 2024 16:38",
          "username": "ogerber",
          "content": "Option B.<br>Reduce number of connection to RDS -> RDS Proxy.<br>\\\"A Lambda function that's outside of a VPC can't access an RDS instance that's inside a VPC.\\\"<br><br>https://repost.aws/knowledge-center/connect-lambda-to-an-rds-instance",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1143583,
          "date": "Wed 07 Aug 2024 17:34",
          "username": "Moon239",
          "content": "Same as question 802 in SAA-C02",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#686",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is creating an application. The company stores data from tests of the application in multiple on-premises locations.<br><br>The company needs to connect the on-premises locations to VPCs in an AWS Region in the AWS Cloud. The number of accounts and VPCs will increase during the next year. The network architecture must simplify the administration of new connections and must provide the ability to scale.<br><br>Which solution will meet these requirements with the LEAST administrative overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#686",
          "answers": [
            {
              "choice": "<p>Create a peering connection between the VPCs. Create a VPN connection between the VPCs and the on-premises locations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Launch an Amazon EC2 instance. On the instance, include VPN software that uses a VPN connection to connect all VPCs and on-premises locations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a transit gateway. Create VPC attachments for the VPC connections. Create VPN attachments for the on-premises connections.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Direct Connect connection between the on-premises locations and a central VPC. Connect the central VPC to other VPCs by using peering connections.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 686 discussion",
      "discusstion": [
        {
          "id": 1147204,
          "date": "Sun 11 Feb 2024 13:09",
          "username": "1Alpha1",
          "content": "multiple on-premises locations + increasing number of accounts and VPCs --> connections using *transit gateway*",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1141162,
          "date": "Mon 05 Feb 2024 15:23",
          "username": "Andy_09",
          "content": "Think C would be the correct answer here.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1326700,
          "date": "Sun 15 Dec 2024 05:53",
          "username": "LeonSauveterre",
          "content": "A - OK but for every new VPC or account, you need to manually create new peering connections and VPNs. Too much administrative overhead!<br><br>B - Launching EC2s are never an easy job. You not only need to do everything manually mentioned in A, but now you also have to manage the EC2 instance and VPN software. Plus, if the EC2 instance goes down, all connectivity is lost, which is called \\\"single-point of failure\\\".<br><br>C - Everything seems cool, it's just uhm lightly higher initial setup cost, but it saves time and money in the long run.<br><br>D - Direct Connect provides fast & reliable connections, but just like A & B, as the number of VPCs grows, you'll go crazy due to all those unmanageable nodes.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1285414,
          "date": "Tue 17 Sep 2024 21:01",
          "username": "MatAlves",
          "content": "Anytime I see \\\"the number of VPCs will increase\\\", I immediately look for \\\"transit gateway\\\" as the least administrative overhead.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"AWS Transit Gateway provides a hub and spoke design for connecting VPCs and on-premises networks as a fully managed service without requiring you to provision third-party virtual appliances. No VPN overlay is required, and AWS manages high availability and scalability.\\\"<br><br>https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/transit-gateway.html#:~:textAWS%20Transit%20Gateway%20provides%20a,manages%20high%20availability%20and%20scalability.</li><li>Transit Gateway enables customers to connect thousands of VPCs. You can attach all your hybrid connectivity (VPN and Direct Connect connections) to a single gateway, consolidating and controlling your organization's entire AWS routing configuration in one place (refer to the following figure)</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1285415,
          "date": "Tue 17 Sep 2024 21:03",
          "username": "MatAlves",
          "content": "\\\"AWS Transit Gateway provides a hub and spoke design for connecting VPCs and on-premises networks as a fully managed service without requiring you to provision third-party virtual appliances. No VPN overlay is required, and AWS manages high availability and scalability.\\\"<br><br>https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/transit-gateway.html#:~:textAWS%20Transit%20Gateway%20provides%20a,manages%20high%20availability%20and%20scalability.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1285416,
          "date": "Tue 17 Sep 2024 21:04",
          "username": "MatAlves",
          "content": "Transit Gateway enables customers to connect thousands of VPCs. You can attach all your hybrid connectivity (VPN and Direct Connect connections) to a single gateway, consolidating and controlling your organization's entire AWS routing configuration in one place (refer to the following figure)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1151127,
          "date": "Thu 15 Feb 2024 17:40",
          "username": "ogerber",
          "content": "high number of accounts and VPC to conect to on prem _> exactly the transit gateway use case",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1144580,
          "date": "Thu 08 Feb 2024 15:54",
          "username": "KZ06",
          "content": "Hi,<br>Seems like after question 684, the discussion are quite less and seems recent comments. Are these new sets of questions updated?<br>Anyone having any idea around this?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Anytime I see \\\"the number of VPCs will increase\\\", I immediately look for \\\"transit gateway\\\" as the least administrative overhead.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1285413,
          "date": "Tue 17 Sep 2024 21:00",
          "username": "MatAlves",
          "content": "Anytime I see \\\"the number of VPCs will increase\\\", I immediately look for \\\"transit gateway\\\" as the least administrative overhead.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1143549,
          "date": "Wed 07 Feb 2024 18:02",
          "username": "Cali182",
          "content": "vote for C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1142533,
          "date": "Tue 06 Feb 2024 20:46",
          "username": "EZforeverman",
          "content": "I think its C.LEAST administrative overhead. D can work but AWS direct connection and VPC peering configure require too much administrative overhead",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#687",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that uses AWS needs a solution to predict the resources needed for manufacturing processes each month. The solution must use historical values that are currently stored in an Amazon S3 bucket. The company has no machine learning (ML) experience and wants to use a managed service for the training and predictions.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#687",
          "answers": [
            {
              "choice": "<p>Deploy an Amazon SageMaker model. Create a SageMaker endpoint for inference.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon SageMaker to train a model by using the historical data in the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS Lambda function with a function URL that uses Amazon SageMaker endpoints to create predictions based on the inputs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an AWS Lambda function with a function URL that uses an Amazon Forecast predictor to create a prediction based on the inputs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Train an Amazon Forsecast predictor by using the historical data in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 687 discussion",
      "discusstion": [
        {
          "id": 1285425,
          "date": "Tue 17 Sep 2024 21:17",
          "username": "MatAlves",
          "content": "\\\"Amazon Forecast is no longer available to new customers. Existing customers of Amazon Forecast can continue to use the service as normal\\\"<br><br>\\\"After careful consideration, we have made the decision to close new customer access to Amazon Forecast, effective July 29, 2024.\\\"<br><br>This question will either be removed or reformulated to exclude Forecast as the service is no longer available to new customers.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I agree: this is probably an old questions, but I think answer was D,E<br>Otherwise you need three options: A,B and C (to create predictions)</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1333995,
          "date": "Mon 30 Dec 2024 09:47",
          "username": "Salilgen",
          "content": "I agree: this is probably an old questions, but I think answer was D,E<br>Otherwise you need three options: A,B and C (to create predictions)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1141715,
          "date": "Tue 06 Feb 2024 03:38",
          "username": "betttty",
          "content": "Explanation:<br><br>Training the Model with SageMaker (Option B):<br><br>Use Amazon SageMaker to train a machine learning model based on historical data. SageMaker simplifies the process of training, deploying, and managing machine learning models.<br>Creating Predictions with Amazon Forecast (Option D):<br><br>Use Amazon Forecast to create a predictor based on historical data. Forecast is designed for time-series forecasting, making it suitable for predicting resources needed for manufacturing processes each month.<br>Combining SageMaker for training and Amazon Forecast for predictions provides a comprehensive solution, and AWS Lambda can be used to integrate these services into your workflow.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>combination of steps so it cannot be B,D.<br>B D is two different solution</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1188639,
          "date": "Wed 03 Apr 2024 14:01",
          "username": "JackyCCK",
          "content": "combination of steps so it cannot be B,D.<br>B D is two different solution",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1326702,
          "date": "Sun 15 Dec 2024 06:05",
          "username": "LeonSauveterre",
          "content": "Amazon Forecast is no longer available to new customers as of July 29, 2024. However, for the AWS Certified Solutions Architect =E2=80=93 Associate (SAA-C03) exam, Amazon Forecast may still appear as a valid service since the exam content often lags behind recent announcements.<br><br>Since the company has no ML expertise, A B C are all out, because they require prior SageMaker knowledge. That would make the answers: D & E.<br><br>But IRL (in real life, not a web service), you must consider SageMaker Canvas, because it \\\"includes the key capabilities found in Forecast, including the ability to train an ensemble of forecasting models using both statistical and neural network algorithms. It creates the best model for your dataset by generating base models for each algorithm, evaluating their performance, and then combining the top-performing models into an ensemble\\\".<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/blogs/machine-learning/transition-your-amazon-forecast-usage-to-amazon-sagemaker-canvas/</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 1326704,
          "date": "Sun 15 Dec 2024 06:06",
          "username": "LeonSauveterre",
          "content": "https://aws.amazon.com/blogs/machine-learning/transition-your-amazon-forecast-usage-to-amazon-sagemaker-canvas/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1293565,
          "date": "Sat 05 Oct 2024 20:23",
          "username": "XXXXXlNN",
          "content": "so what about AB since the Forcase is no logner available to new customers?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1288776,
          "date": "Tue 24 Sep 2024 23:36",
          "username": "JoeTromundo",
          "content": "Amazon Forecast is no longer available to new customers.<br>https://aws.amazon.com/blogs/machine-learning/transition-your-amazon-forecast-usage-to-amazon-sagemaker-canvas/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1212551,
          "date": "Thu 16 May 2024 20:42",
          "username": "TwinSpark",
          "content": "Amazon forecast can be trained by using data from S3:<br>https://docs.aws.amazon.com/forecast/latest/dg/getting-started.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 1202556,
          "date": "Fri 26 Apr 2024 13:16",
          "username": "bujuman",
          "content": "Because of these assertions<br> - The company has no machine learning (ML) experience<br>- The comapny wants to use a managed service<br>We could tempted to go for SageMaker that is the core AWS managed service for ML purposes .<br>But, but, if we consider this valuable information:<br>- A company that uses AWS needs a solution to predict the resources needed for manufacturing processes.<br>With a bit research, we will find out that AWS also hold time-series forecasting service based on machine learning (ML).<br>https://aws.amazon.com/forecast/?nc1h_ls<br>So i understand options DE are the best answers enven thought this service is not mentionned anywhere in current SAA-C03 course version",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 1194238,
          "date": "Fri 12 Apr 2024 09:37",
          "username": "Hung23",
          "content": "BE from CHATGPT",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1182806,
          "date": "Mon 25 Mar 2024 22:47",
          "username": "lenotc",
          "content": "SageMaker and Forecast can directly utilize data within an S3<br>B) E)<br>https://aws.amazon.com/blogs/compute/build-workflows-for-amazon-forecast-with-aws-step-functions/<br><br>https://docs.aws.amazon.com/sagemaker/latest/dg/train-model.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1176839,
          "date": "Mon 18 Mar 2024 22:24",
          "username": "TheLaPlanta",
          "content": "A + B dude",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1164871,
          "date": "Sun 03 Mar 2024 16:04",
          "username": "Ravan",
          "content": "Yes, exactly. Steps B and A together constitute a comprehensive solution:<br><br>- Step B involves using Amazon SageMaker to train a machine learning model using historical data stored in the S3 bucket.<br>- Step A involves deploying the trained model as a SageMaker endpoint, allowing for real-time inference on new data.<br><br>This combination leverages Amazon SageMaker's managed services for both training and inference, meeting the company's requirements efficiently.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1162207,
          "date": "Thu 29 Feb 2024 05:11",
          "username": "bodakrishna",
          "content": "A & B:<br>B. Amazon SageMaker is a managed service that provides built-in algorithms and tools for training machine learning models. You can use SageMaker to train a model using historical data stored in an S3 bucket. This meets the requirement of utilizing a managed service for training the model without requiring machine learning experience.<br><br>A. Once the model is trained using SageMaker, you can deploy it by creating a SageMaker endpoint for inference. This endpoint allows you to make predictions based on new data, fulfilling the requirement of predicting resources needed for manufacturing processes each month.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1147210,
          "date": "Sun 11 Feb 2024 13:26",
          "username": "1Alpha1",
          "content": "*E*: Amazon Forecast is a fully managed service that uses machine learning (ML) to generate highly accurate forecasts without requiring any prior ML experience. Forecast is applicable in a wide variety of use cases, including estimating product demand, energy demand, workforce planning, computing cloud infrastructure usage, traffic demand, supply chain optimization, and financial planning.<br><br>*D*: Publish demand using AWS Lambda, AWS Step Functions, and Amazon CloudWatch Events rule to periodically (hourly) query the database and write the past X-months (count from the current timestamp) demand data into the source Amazon S3.<br><br>https://aws.amazon.com/blogs/machine-learning/automating-your-amazon-forecast-workflow-with-lambda-step-functions-and-cloudwatch-events-rule/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 1143565,
          "date": "Wed 07 Feb 2024 18:15",
          "username": "Cali182",
          "content": "B & D is the right choice",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1143299,
          "date": "Wed 07 Feb 2024 13:03",
          "username": "anikolov",
          "content": "My votes are for DE based on statement from AWS site:<br>\\\"Alternatively, if you are looking for a fully managed service to deliver highly accurate forecasts, without writing code, we recommend checking out Amazon Forecast. Amazon Forecast is a time-series forecasting service based on machine learning (ML) and built for business metrics analysis.\\\"<br>https://aws.amazon.com/blogs/machine-learning/deep-demand-forecasting-with-amazon-sagemaker/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why E?</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 1146444,
          "date": "Sat 10 Feb 2024 18:02",
          "username": "jaswantn",
          "content": "Why E?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1141168,
          "date": "Mon 05 Feb 2024 15:32",
          "username": "Andy_09",
          "content": "BE looks correct",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#688",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company manages AWS accounts in AWS Organizations. AWS IAM Identity Center (AWS Single Sign-On) and AWS Control Tower are configured for the accounts. The company wants to manage multiple user permissions across all the accounts.<br><br>The permissions will be used by multiple IAM users and must be split between the developer and administrator teams. Each team requires different permissions. The company wants a solution that includes new users that are hired on both teams.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#688",
          "answers": [
            {
              "choice": "<p>Create individual users in IAM Identity Center for each account. Create separate developer and administrator groups in IAM Identity Center. Assign the users to the appropriate groups. Create a custom IAM policy for each group to set fine-grained permissions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create individual users in IAM Identity Center for each account. Create separate developer and administrator groups in IAM Identity Center. Assign the users to the appropriate groups. Attach AWS managed IAM policies to each user as needed for fine-grained permissions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create individual users in IAM Identity Center. Create new developer and administrator groups in IAM Identity Center. Create new permission sets that include the appropriate IAM policies for each group. Assign the new groups to the appropriate accounts. Assign the new permission sets to the new groups. When new users are hired, add them to the appropriate group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create individual users in IAM Identity Center. Create new permission sets that include the appropriate IAM policies for each user. Assign the users to the appropriate accounts. Grant additional IAM permissions to the users from within specific accounts. When new users are hired, add them to IAM Identity Center and assign them to the accounts.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 688 discussion",
      "discusstion": [
        {
          "id": 1326711,
          "date": "Sun 15 Dec 2024 06:51",
          "username": "LeonSauveterre",
          "content": "I would:<br><br>1. Use AWS IAM Identity Center (SSO) to centrally manage user access across all accounts.<br>2. Create Permission Sets in Identity Center:<br> - One for the Developer Team, granting access to resources with developer-specific permissions (AmazonEC2FullAccess or custom policies or something).<br> - Another one for the Administrator Team, granting administrator-specific permissions (AdministratorAccess or something).<br>3. Sync users and groups from the corporate identity provider (or manage groups directly in IAM Identity Center) to automatically apply these permissions.<br>4. Assign these Permission Sets to groups of users in Identity Center rather than individuals, ensuring new users automatically inherit the appropriate permissions based on their group.<br><br>That's why you choose C, with the least operational overhead.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1173609,
          "date": "Sat 14 Sep 2024 17:53",
          "username": "xBUGx",
          "content": "C is least overhead",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1147725,
          "date": "Sun 11 Aug 2024 23:35",
          "username": "1Alpha1",
          "content": "Check out this one. https://www.youtube.com/watch?vy_n9xN5mg1g",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1143642,
          "date": "Wed 07 Aug 2024 18:18",
          "username": "Moon239",
          "content": "https://docs.aws.amazon.com/controltower/latest/userguide/sso.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1143578,
          "date": "Wed 07 Aug 2024 17:27",
          "username": "Cali182",
          "content": "Correct is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1141172,
          "date": "Mon 05 Aug 2024 14:35",
          "username": "Andy_09",
          "content": "The correct answer should be C",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#689",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to standardize its Amazon Elastic Block Store (Amazon EBS) volume encryption strategy. The company also wants to minimize the cost and configuration effort required to operate the volume encryption check.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#689",
          "answers": [
            {
              "choice": "<p>Write API calls to describe the EBS volumes and to confirm the EBS volumes are encrypted. Use Amazon EventBridge to schedule an AWS Lambda function to run the API calls.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Write API calls to describe the EBS volumes and to confirm the EBS volumes are encrypted. Run the API calls on an AWS Fargate task.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Identity and Access Management (IAM) policy that requires the use of tags on EBS volumes. Use AWS Cost Explorer to display resources that are not properly tagged. Encrypt the untagged resources manually.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Config rule for Amazon EBS to evaluate if a volume is encrypted and to flag the volume if it is not encrypted.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 689 discussion",
      "discusstion": [
        {
          "id": 1285435,
          "date": "Tue 17 Sep 2024 21:28",
          "username": "MatAlves",
          "content": "D: no-brainer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1165104,
          "date": "Sun 03 Mar 2024 22:31",
          "username": "asdfcdsxdfc",
          "content": "D looks right",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1162206,
          "date": "Thu 29 Feb 2024 05:04",
          "username": "bodakrishna",
          "content": "AWS Config allows you to define rules to automatically check the configuration of AWS resources against desired configurations. By creating a custom AWS Config rule specifically for Amazon EBS volumes to evaluate if they are encrypted, you can ensure consistent encryption across all volumes. If a volume is found to be unencrypted, it can be flagged for further action. This solution automates the process of encryption checking, minimizing manual effort and ensuring standardization across the environment. Additionally, AWS Config provides a cost-effective solution compared to continuously running scripts or tasks.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1142761,
          "date": "Tue 06 Feb 2024 22:47",
          "username": "mestule",
          "content": "AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. It can check whether your resources comply with certain conditions (such as being encrypted), and it can flag or take action on resources that do not comply.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1141501,
          "date": "Mon 05 Feb 2024 22:27",
          "username": "betttty",
          "content": "D :<br>you could use a managed rule to quickly start assessing whether your Amazon Elastic Block Store (Amazon EBS) volumes are encrypted or whether specific tags are applied to your resources.<br>https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1141183,
          "date": "Mon 05 Feb 2024 15:43",
          "username": "Andy_09",
          "content": "Correct answer is D",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#690",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company regularly uploads GB-sized files to Amazon S3. After the company uploads the files, the company uses a fleet of Amazon EC2 Spot Instances to transcode the file format. The company needs to scale throughput when the company uploads data from the on-premises data center to Amazon S3 and when the company downloads data from Amazon S3 to the EC2 instances.<br><br>Which solutions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#690",
          "answers": [
            {
              "choice": "<p>Use the S3 bucket access point instead of accessing the S3 bucket directly.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Upload the files into multiple S3 buckets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 multipart uploads.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Fetch multiple byte-ranges of an object in parallel.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add a random prefix to each object when uploading the files.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 690 discussion",
      "discusstion": [
        {
          "id": 1141493,
          "date": "Mon 05 Feb 2024 22:16",
          "username": "betttty",
          "content": "CD<br>C: Increase the file upload throughput<br>D: increase the file download throughput",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1201765,
          "date": "Thu 25 Apr 2024 07:45",
          "username": "sandordini",
          "content": "C: Upload: Multipart clear,<br>D: Download: You can fetch a byte-range from an object, transferring only the specified portion. You can use concurrent connections to Amazon S3 to fetch different byte ranges from within the same object. This helps you achieve higher aggregate throughput versus a single whole-object request.<br><br>A: S3 Access Points can be easily scaled, but are typically used to simplify data access for any AWS service or customer application that stores data in S3.<br>E: Prefixes: You can increase your read or write performance by using parallelization. For example, if you create 10 prefixes in an Amazon S3 bucket to parallelize reads, you could scale your read performance to 55,000 read requests per second.<br>But wording in this answer is strange...",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1315816,
          "date": "Thu 21 Nov 2024 13:56",
          "username": "Salahdin",
          "content": "CD<br>C: Increase the file upload throughput<br>D: increase the file download throughpu",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1187970,
          "date": "Tue 02 Apr 2024 12:32",
          "username": "dds69",
          "content": "C&D are correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1178421,
          "date": "Wed 20 Mar 2024 16:01",
          "username": "Bazzix",
          "content": "Cd are correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1162205,
          "date": "Thu 29 Feb 2024 04:59",
          "username": "bodakrishna",
          "content": "C &D Correct",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1148059,
          "date": "Mon 12 Feb 2024 12:55",
          "username": "Darshan07",
          "content": "CD are the correct options",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1143588,
          "date": "Wed 07 Feb 2024 18:37",
          "username": "Cali182",
          "content": "CD is the correct for me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1141218,
          "date": "Mon 05 Feb 2024 16:24",
          "username": "Andy_09",
          "content": "Correct answer is CD",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#691",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a shared storage solution for a web application that is deployed across multiple Availability Zones. The web application runs on Amazon EC2 instances that are in an Auto Scaling group. The company plans to make frequent changes to the content. The solution must have strong consistency in returning the new content as soon as the changes occur.<br><br>Which solutions meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#691",
          "answers": [
            {
              "choice": "<p>Use AWS Storage Gateway Volume Gateway Internet Small Computer Systems Interface (iSCSI) block storage that is mounted to the individual EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system on the individual EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a shared Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume on the individual EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS DataSync to perform continuous synchronization of data between EC2 hosts in the Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 bucket to store the web content. Set the metadata for the Cache-Control header to no-cache. Use Amazon CloudFront to deliver the content.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 691 discussion",
      "discusstion": [
        {
          "id": 1141224,
          "date": "Mon 05 Feb 2024 16:29",
          "username": "Andy_09",
          "content": "Correct answer BE",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1143738,
          "date": "Wed 07 Feb 2024 20:36",
          "username": "Cali182",
          "content": "B & E seems to be the most logic",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1326712,
          "date": "Sun 15 Dec 2024 06:59",
          "username": "LeonSauveterre",
          "content": "A - Volume Gateway is typically on-prem and optimized for hybrid setups, not for fully cloud-based solutions.<br>B - EFS provides a fully managed, shared file storage system that works across multiple AZs.<br>C - Even with Multi-Attach, sharing EBS volumes across AZs is pretty complex and error-prone.<br>D - DataSync is designed for periodic synchronization and not real-time, frequent updates.<br>E - The \\\"no-cache\\\" header ensures the content is always fetched fresh, and CloudFront delivers it efficiently with reduced latency. Although S3 is less efficient for frequent updates compared to a shared file system like EFS, but not a problem here.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1322176,
          "date": "Thu 05 Dec 2024 02:23",
          "username": "Penjerla",
          "content": "Option A is out as storage gateway is suited for hybrid cloud use cases where on-premises workloads need access to AWS cloud storage<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C is wrong: you cannot share EBS in multiple AZ</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1334012,
          "date": "Mon 30 Dec 2024 10:26",
          "username": "Salilgen",
          "content": "C is wrong: you cannot share EBS in multiple AZ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1201880,
          "date": "Thu 25 Apr 2024 11:27",
          "username": "sandordini",
          "content": "Regarding storage, I'd go for EFS, although it never mentions the requirement for file storage.<br>Datasync can copy data between several storage types, including EFS, agents can be installed on EC2, but you cannot perform continuous synchronization of EC2 instances. Only storage.<br>Cloudfront can publish both passive (s3) and active content (EC2+EFS) but wording doesn't tell a thing about such a share. And if it's a passive site why do we even have 2 storage types...<br>I'd say, for me, the least bad solution seems to be B + E.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1184668,
          "date": "Thu 28 Mar 2024 10:25",
          "username": "Hung23",
          "content": "I choose BE",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1180114,
          "date": "Fri 22 Mar 2024 15:43",
          "username": "alawada",
          "content": "BD looks most logical to me - continuous changes required an update via DataSync",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#692",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying an application in three AWS Regions using an Application Load Balancer. Amazon Route 53 will be used to distribute traffic between these Regions.<br><br>Which Route 53 configuration should a solutions architect use to provide the MOST high-performing experience?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#692",
          "answers": [
            {
              "choice": "<p>Create an A record with a latency policy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an A record with a geolocation policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a CNAME record with a failover policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a CNAME record with a geoproximity policy.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 692 discussion",
      "discusstion": [
        {
          "id": 1177175,
          "date": "Thu 19 Sep 2024 09:38",
          "username": "Kezuko",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1181687,
          "date": "Tue 24 Sep 2024 14:22",
          "username": "h0ng97_spare_002",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1326713,
          "date": "Sun 15 Dec 2024 07:03",
          "username": "LeonSauveterre",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html<br><br>To provide the MOST high-performing experience, the Latency-based routing policy is the most appropriate. It ensures requests are routed to the AWS Region that provides the fastest response times based on real-world network conditions.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1201885,
          "date": "Fri 25 Oct 2024 11:34",
          "username": "sandordini",
          "content": "1. Given the chance >always use Alias over a Cname<<br>2. Latency-based routing is for user experience. (low latency)<br><br>Failover is for DR, Geolocation for local restrictions/rights/language/currency, and geo-proximity is a more complex, biased location-based routing, not part of the SA Associate exam.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Alias?! \\\"A record\\\" is NOT an Alias record; it's an ADDRESS RECORD. There's a difference in between an address record (A record) &amp; an Alias. <br><br>An Address record will map to 1 or more IP addresses.<br>An Alias record will map to another name like a CNAME does.<br><br>We eliminate C&amp;D bc we need an IP address that will give us the best performance; we distribute traffic to a certain IP address based on policy.<br>geolocation policy is defined by where the request comes from.<br>latency policy is defined by how fast (performance) we can reply.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1228175,
          "date": "Wed 11 Dec 2024 02:21",
          "username": "NSA_Poker",
          "content": "Alias?! \\\"A record\\\" is NOT an Alias record; it's an ADDRESS RECORD. There's a difference in between an address record (A record) & an Alias. <br><br>An Address record will map to 1 or more IP addresses.<br>An Alias record will map to another name like a CNAME does.<br><br>We eliminate C&D bc we need an IP address that will give us the best performance; we distribute traffic to a certain IP address based on policy.<br>geolocation policy is defined by where the request comes from.<br>latency policy is defined by how fast (performance) we can reply.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1185006,
          "date": "Sat 28 Sep 2024 20:21",
          "username": "mohammadthainat",
          "content": "Geoproximity Policy routing users to resources based on their geographic location, routing based on geographic location may not always be the absolute lowest latency.<br><br>latency-based routing prioritizes user experience.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1182513,
          "date": "Wed 25 Sep 2024 13:36",
          "username": "TruthWS",
          "content": "A is true",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1166241,
          "date": "Thu 05 Sep 2024 05:40",
          "username": "cedser8",
          "content": "The correct is D, the question says \\\"using an Application Load Balancer\\\" the ALB has a DNS name assigned not an IP. A type A record will only allow you to point to an IPv4. If I'm wrong, happy to be corrected.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer A is correct.<br><br>Route53 uses an internal record type called ALIAS, but from a DNS point of view it's still an A record.<br><br>Just try it yourself, create an ALB and create a DNS record in Route53. While you can technically use a CNAME (for subdomains, see below), the wizard will guide you to use an A ALIAS record, which also makes the most sense.<br><br>The problem with CNAME records is that it's not possible to create them at the root level of the domain. Let's say your domain is somedomain.com - you can't create a CNAME for the apex of the domain (mydomain.com), only for subdomains (subdomain.mydomain.com).<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1181530,
          "date": "Tue 24 Sep 2024 12:47",
          "username": "dkw2342",
          "content": "Answer A is correct.<br><br>Route53 uses an internal record type called ALIAS, but from a DNS point of view it's still an A record.<br><br>Just try it yourself, create an ALB and create a DNS record in Route53. While you can technically use a CNAME (for subdomains, see below), the wizard will guide you to use an A ALIAS record, which also makes the most sense.<br><br>The problem with CNAME records is that it's not possible to create them at the root level of the domain. Let's say your domain is somedomain.com - you can't create a CNAME for the apex of the domain (mydomain.com), only for subdomains (subdomain.mydomain.com).<br><br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1162202,
          "date": "Thu 29 Aug 2024 03:48",
          "username": "bodakrishna",
          "content": "ChatGPT:<br>The most high-performing experience in this scenario would be achieved by using:<br><br>D. Create a CNAME record with a geoproximity policy.<br><br>Geoproximity routing allows you to route traffic based on the geographic location of your users and your resources. This would distribute traffic to the AWS Region that is closest to the user, optimizing performance by reducing latency. It's particularly useful when deploying applications across multiple regions to ensure users are directed to the closest region, minimizing network latency and providing the best user experience.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>And, exactly, this is the reason why you should not rely on a LANGUAGE MODEL when you need a solution architect's advice .</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1201882,
          "date": "Fri 25 Oct 2024 11:31",
          "username": "sandordini",
          "content": "And, exactly, this is the reason why you should not rely on a LANGUAGE MODEL when you need a solution architect's advice .",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1152343,
          "date": "Sat 17 Aug 2024 03:03",
          "username": "osmk",
          "content": "A<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-latency.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1152120,
          "date": "Fri 16 Aug 2024 16:46",
          "username": "haci",
          "content": "Based on previous questions, I believe A is correct. Because; the closest geolocated server doesn't necessarily provide the best performance. Geolocated load balancing is mostly used for serving location-specific content.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1147808,
          "date": "Mon 12 Aug 2024 03:34",
          "username": "1Alpha1",
          "content": "Q. What is Amazon Route 53's Latency Based Routing (LBR) feature?<br><br>LBR (Latency Based Routing) is a new feature for Amazon Route 53 that helps you improve your application's performance for a global audience. You can run applications in multiple AWS regions and Amazon Route 53, using dozens of edge locations worldwide, will route end users to the AWS region that provides the lowest latency.<br><br>https://aws.amazon.com/route53/faqs/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1143740,
          "date": "Wed 07 Aug 2024 19:40",
          "username": "Cali182",
          "content": "Why would you use a CNAME record?? Most suitable seems to be option B<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-latency.html</li><li>Not really sure but ALBs do not have a static ip address they have domains assigned to them and also an Elastic ip can't be attached to an ALB. So mainly a cname would be preferred here.</li><li>But generally speaking it's not a bad idea. But yes A record alias name can point to it. and idon't think it's B cause even if it's geolocation it may not always result in a high-performing exp.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1152345,
          "date": "Sat 17 Aug 2024 03:04",
          "username": "osmk",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-latency.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1165333,
          "date": "Wed 04 Sep 2024 05:52",
          "username": "Typewriter101",
          "content": "Not really sure but ALBs do not have a static ip address they have domains assigned to them and also an Elastic ip can't be attached to an ALB. So mainly a cname would be preferred here.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But generally speaking it's not a bad idea. But yes A record alias name can point to it. and idon't think it's B cause even if it's geolocation it may not always result in a high-performing exp.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1165336,
          "date": "Wed 04 Sep 2024 06:01",
          "username": "Typewriter101",
          "content": "But generally speaking it's not a bad idea. But yes A record alias name can point to it. and idon't think it's B cause even if it's geolocation it may not always result in a high-performing exp.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1142183,
          "date": "Tue 06 Aug 2024 13:48",
          "username": "Andy_09",
          "content": "Sorry changing to B.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1141225,
          "date": "Mon 05 Aug 2024 15:31",
          "username": "Andy_09",
          "content": "D looks correct.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#693",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a web application that includes an embedded NoSQL database. The application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an Amazon EC2 Auto Scaling group in a single Availability Zone.<br><br>A recent increase in traffic requires the application to be highly available and for the database to be eventually consistent.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#693",
          "answers": [
            {
              "choice": "<p>Replace the ALB with a Network Load Balancer. Maintain the embedded NoSQL database with its replication service on the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Replace the ALB with a Network Load Balancer. Migrate the embedded NoSQL database to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the Auto Scaling group to use EC2 instances across three Availability Zones. Maintain the embedded NoSQL database with its replication service on the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Modify the Auto Scaling group to use EC2 instances across three Availability Zones. Migrate the embedded NoSQL database to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS).<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 693 discussion",
      "discusstion": [
        {
          "id": 1326715,
          "date": "Sun 15 Dec 2024 07:10",
          "username": "LeonSauveterre",
          "content": "Application Load Balancer (ALB) is better suited for HTTP/HTTPS traffic. A & B are out.<br><br>Maintaining replication and failover for the embedded database across AZs is frustratingly complex and operationally intensive. Migration to DynamoDB requires initial effort but reduces long-term operational overhead. So D.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1252152,
          "date": "Sun 21 Jul 2024 04:18",
          "username": "freedafeng",
          "content": "I honestly don't think you can use db Migration service to migrate an embedding db.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1208749,
          "date": "Thu 09 May 2024 09:52",
          "username": "HTHK",
          "content": "DDDDDDDDDDDDDDDDDD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1182962,
          "date": "Tue 26 Mar 2024 04:12",
          "username": "TruthWS",
          "content": "Option D: let focus on HA + Scaling",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1177180,
          "date": "Tue 19 Mar 2024 10:42",
          "username": "Kezuko",
          "content": "ASG for application HA + DynamoDB Scale for HA",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1160182,
          "date": "Tue 27 Feb 2024 02:15",
          "username": "rubiteb",
          "content": "B as it's highly available and has less operational overhead than D.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ALB -&gt; NLB makes no sense and solution lacks HA for the app layer.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1181535,
          "date": "Sun 24 Mar 2024 13:52",
          "username": "dkw2342",
          "content": "ALB -> NLB makes no sense and solution lacks HA for the app layer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1154037,
          "date": "Mon 19 Feb 2024 15:53",
          "username": "NayeraB",
          "content": "But wouldn't migrating an embedded database to a new one introduce operational overhead now and in the future?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, the very opposite:<br><br>\\\"Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database that runs high-performance applications at any scale.\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1285449,
          "date": "Tue 17 Sep 2024 22:40",
          "username": "MatAlves",
          "content": "No, the very opposite:<br><br>\\\"Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database that runs high-performance applications at any scale.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1147810,
          "date": "Mon 12 Feb 2024 04:38",
          "username": "1Alpha1",
          "content": "DynamoDB + Modifying the Auto Scaling group",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1143803,
          "date": "Wed 07 Feb 2024 21:42",
          "username": "Cali182",
          "content": "Dynamo DB presents more advantages, because it would need less administrative effort",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1141226,
          "date": "Mon 05 Feb 2024 16:32",
          "username": "Andy_09",
          "content": "The correct option should be D",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#694",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a shopping application on AWS. The application offers a catalog that changes once each month and needs to scale with traffic volume. The company wants the lowest possible latency from the application. Data from each user's shopping cart needs to be highly available. User session data must be available even if the user is disconnected and reconnects.<br><br>What should a solutions architect do to ensure that the shopping cart data is preserved at all times?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#694",
          "answers": [
            {
              "choice": "<p>Configure an Application Load Balancer to enable the sticky sessions feature (session affinity) for access to the catalog in Amazon Aurora.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon ElastiCache for Redis to cache catalog data from Amazon DynamoDB and shopping cart data from the user's session.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon OpenSearch Service to cache catalog data from Amazon DynamoDB and shopping cart data from the user's session.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon EC2 instance with Amazon Elastic Block Store (Amazon EBS) storage for the catalog and shopping cart. Configure automated snapshots.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 694 discussion",
      "discusstion": [
        {
          "id": 1184473,
          "date": "Thu 28 Mar 2024 01:11",
          "username": "Tanidanindo",
          "content": "- ElastiCache is a managed in-memory data store service that is well-suited for managing session data in a distributed architecture.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1326718,
          "date": "Sun 15 Dec 2024 07:13",
          "username": "LeonSauveterre",
          "content": "User session data must be available even if the user is disconnected and reconnects.<br>Choose ElastiCache for Redis. That remains true for so many similar questions.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1229721,
          "date": "Thu 13 Jun 2024 11:21",
          "username": "RC6",
          "content": "B looks correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1165123,
          "date": "Sun 03 Mar 2024 22:56",
          "username": "asdfcdsxdfc",
          "content": "why not A?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>because data to store(cache) will be bigger in size</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1236420,
          "date": "Mon 24 Jun 2024 17:13",
          "username": "24b2e9e",
          "content": "because data to store(cache) will be bigger in size",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1158143,
          "date": "Sat 24 Feb 2024 21:28",
          "username": "knben",
          "content": "session data must be available even if the user is disconnected and reconnects -> ElastiCache for Redis",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1147811,
          "date": "Mon 12 Feb 2024 04:49",
          "username": "1Alpha1",
          "content": "*B*: ELB <--> ASG <--> ElastiCache <--> DynamoDB",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1141231,
          "date": "Mon 05 Feb 2024 16:34",
          "username": "Andy_09",
          "content": "B looks correct",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#695",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a microservices-based application that will be deployed on Amazon Elastic Kubernetes Service (Amazon EKS). The microservices will interact with each other. The company wants to ensure that the application is observable to identify performance issues in the future.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#695",
          "answers": [
            {
              "choice": "<p>Configure the application to use Amazon ElastiCache to reduce the number of requests that are sent to the microservices.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon CloudWatch Container Insights to collect metrics from the EKS clusters. Configure AWS X-Ray to trace the requests between the microservices.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure AWS CloudTrail to review the API calls. Build an Amazon QuickSight dashboard to observe the microservice interactions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Trusted Advisor to understand the performance of the application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 695 discussion",
      "discusstion": [
        {
          "id": 1143817,
          "date": "Wed 07 Aug 2024 21:02",
          "username": "Cali182",
          "content": "Option B<br>Amazon CloudWatch Container Insights: This service provides monitoring and troubleshooting capabilities for containerized applications. It collects and aggregates metrics, logs, and events from Amazon EKS clusters and containers. This helps in monitoring the performance and health of microservices.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1141233,
          "date": "Mon 05 Aug 2024 15:36",
          "username": "Andy_09",
          "content": "Correct answer is B",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1326719,
          "date": "Sun 15 Dec 2024 07:18",
          "username": "LeonSauveterre",
          "content": "A - ElastiCache can reduce latency but does not directly provide observability.<br>B - CloudWatch Container Insights provides detailed metrics and logs for containers. AWS X-Ray traces requests across microservices<br>C - CloudTrail is designed for security auditing and API call tracking, not detailed observability or performance monitoring.<br>D - Trusted Advisor focuses on high-level recommendations and does not provide real-time observability for application interactions or performance issues.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1211257,
          "date": "Thu 14 Nov 2024 09:40",
          "username": "Linuslin",
          "content": "B is the correct answer.<br>Use CloudWatch Container Insights to collect, aggregate, and summarize metrics and logs from your containerized applications and microservices.<br>https://docs.aws.amazon.com/zh_tw/AmazonCloudWatch/latest/monitoring/ContainerInsights.html<br>AWS X-Ray collects data about requests that your application serves, and it helps you view, filter, and gain insights into that data to identify issues and opportunities for optimization.<br>https://docs.aws.amazon.com/zh_tw/prescriptive-guidance/latest/logging-monitoring-for-application-owners/x-ray.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#696",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to provide customers with secure access to its data. The company processes customer data and stores the results in an Amazon S3 bucket.<br><br>All the data is subject to strong regulations and security requirements. The data must be encrypted at rest. Each customer must be able to access only their data from their AWS account. Company employees must not be able to access the data.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#696",
          "answers": [
            {
              "choice": "<p>Provision an AWS Certificate Manager (ACM) certificate for each customer. Encrypt the data client-side. In the private certificate policy, deny access to the certificate for all principals except an IAM role that the customer provides.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision a separate AWS Key Management Service (AWS KMS) key for each customer. Encrypt the data server-side. In the S3 bucket policy, deny decryption of data for all principals except an IAM role that the customer provides.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision a separate AWS Key Management Service (AWS KMS) key for each customer. Encrypt the data server-side. In each KMS key policy, deny decryption of data for all principals except an IAM role that the customer provides.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an AWS Certificate Manager (ACM) certificate for each customer. Encrypt the data client-side. In the public certificate policy, deny access to the certificate for all principals except an IAM role that the customer provides.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 696 discussion",
      "discusstion": [
        {
          "id": 1326720,
          "date": "Sun 15 Dec 2024 07:25",
          "username": "LeonSauveterre",
          "content": "ACM certificates are for securing communication (e.g., HTTPS/SSL), not for encrypting data at rest in S3. A and D are out.<br><br>Between B and C, they both create a separate key for each customer, and both work. So which is more cumbersome, managing S3 policies or managing KMS key policies?<br><br>Of course the latter one. In B, S3 bucket policy centralizes access rules for all keys, while in C, policies are distributed across individual keys. That's why I decide to choose B.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1229726,
          "date": "Thu 13 Jun 2024 11:24",
          "username": "RC6",
          "content": "C looks correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1204748,
          "date": "Wed 01 May 2024 01:07",
          "username": "BBR01",
          "content": "Actually I think neither B or C is correctly worded. If talking about key policy, should be \\\"Modify the key's policy to grant the IAM user permissions for the kms:GenerateDataKey and kms:Decrypt actions at minimum.\\\"<br>If talking about bucket policy, should be \\\"Deny GetObjects of particular customer without condition kms key equals 1234abcd....\\\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1185135,
          "date": "Fri 29 Mar 2024 02:18",
          "username": "mohammadthainat",
          "content": "Encryption at rest --> KMS<br>Each customer must be able to access only their data --> KMS Key Policies<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Each customer must be able to access only their data --&gt; Deny decryption of data for all principals except an IAM role that the customer provides. This doesn't necessarily have to be KMS key policies. B &amp; C both work in this scenario.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1326723,
          "date": "Sun 15 Dec 2024 07:30",
          "username": "LeonSauveterre",
          "content": "Each customer must be able to access only their data --> Deny decryption of data for all principals except an IAM role that the customer provides. This doesn't necessarily have to be KMS key policies. B & C both work in this scenario.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1164831,
          "date": "Sun 03 Mar 2024 15:12",
          "username": "Neung983",
          "content": "B.<br>Here's why this option is the best fit:<br>Server-Side Encryption: Encrypting data server-side with KMS ensures encryption happens transparently within AWS, eliminating the need for complex client-side management and potential security risks associated with user-managed keys.<br>Customer-Specific Keys: Utilizing separate KMS keys for each customer provides granular access control and encryption isolation. Each customer can only decrypt their data using their specific KMS key.<br>S3 Bucket Policy: By denying decryption permissions for all principals except the dedicated customer IAM role in the S3 bucket policy, unauthorized access, even from company employees, is prevented. This aligns with the requirement of customer-specific data access.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1143834,
          "date": "Wed 07 Feb 2024 22:29",
          "username": "Cali182",
          "content": "Option C<br>From Chapt<br>Option A is incorrect because using ACM certificates is typically for establishing secure communication over HTTPS and doesn't directly relate to encrypting data at rest in S3.<br><br>Option B is incorrect because while it suggests using AWS KMS keys for encryption, it mentions using S3 bucket policies for access control, which would not be appropriate for controlling decryption permissions.<br><br>Option D is incorrect because it suggests using ACM certificates for client-side encryption, which is not typically used for encrypting data at rest in S3, and the approach described would not effectively control access to the encrypted data.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1141237,
          "date": "Mon 05 Feb 2024 16:40",
          "username": "Andy_09",
          "content": "Correct answer should be C",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#697",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect creates a VPC that includes two public subnets and two private subnets. A corporate security mandate requires the solutions architect to launch all Amazon EC2 instances in a private subnet. However, when the solutions architect launches an EC2 instance that runs a web server on ports 80 and 443 in a private subnet, no external internet traffic can connect to the server.<br><br>What should the solutions architect do to resolve this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#697",
          "answers": [
            {
              "choice": "<p>Attach the EC2 instance to an Auto Scaling group in a private subnet. Ensure that the DNS record for the website resolves to the Auto Scaling group identifier.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision an internet-facing Application Load Balancer (ALB) in a public subnet. Add the EC2 instance to the target group that is associated with the ALEnsure that the DNS record for the website resolves to the ALB.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Launch a NAT gateway in a private subnet. Update the route table for the private subnets to add a default route to the NAT gateway. Attach a public Elastic IP address to the NAT gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure that the security group that is attached to the EC2 instance allows HTTP traffic on port 80 and HTTPS traffic on port 443. Ensure that the DNS record for the website resolves to the public IP address of the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 697 discussion",
      "discusstion": [
        {
          "id": 1201996,
          "date": "Thu 25 Apr 2024 15:02",
          "username": "sandordini",
          "content": "Not A - Autoscaling Irrelevant<br>B - ALB, route tales for the public subnet with a route to Priv subnet<br>C - \\\"NAT gateway\\\" is \\\"to allow [outbound] internet traffic\\\", but this is about inbound traffic<br>D - Instances are in the private subnet, therefore it wont work from the public.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1143285,
          "date": "Wed 07 Feb 2024 12:45",
          "username": "anikolov",
          "content": "B: Provision an internet-facing Application Load Balancer (ALB) in a public subnet makes more sense",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1326725,
          "date": "Sun 15 Dec 2024 07:35",
          "username": "LeonSauveterre",
          "content": "A - Auto Scaling groups are for managing instance scaling.<br>B - The internet-facing ALB is deployed in a public subnet and acts as a bridge between the internet and the private EC2 instance. Then, The ALB forwards HTTP/HTTPS traffic to the EC2 instance in the private subnet.<br>C - A NAT gateway provides outbound internet access for private instances, but it does not solve inbound traffic issues.<br>D - Private EC2 instances do not have public IP addresses at all.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1302647,
          "date": "Thu 24 Oct 2024 22:36",
          "username": "8621a7c",
          "content": "Is the question ask to solve the external connection?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1195087,
          "date": "Sat 13 Apr 2024 20:12",
          "username": "waldirlsantos",
          "content": "Why not \\\"D\\\"?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1193963,
          "date": "Thu 11 Apr 2024 20:17",
          "username": "boluwatito",
          "content": "nsure that the security group attached to the EC2 instance allows inbound traffic on ports 80 and 443 from the desired sources (e.g., any IP or specific IP ranges). This allows external internet traffic to reach the web server running on the EC2 instance",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1182571,
          "date": "Mon 25 Mar 2024 15:35",
          "username": "TruthWS",
          "content": "B - because ALB do it better NAT",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1143835,
          "date": "Wed 07 Feb 2024 22:35",
          "username": "Cali182",
          "content": "Option C from Chatgt<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>NAT Gateway stays in public subnet, not in private subnet. So, C can't be.</li><li>NAT Gateway outbound connections</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1146546,
          "date": "Sat 10 Feb 2024 18:34",
          "username": "jaswantn",
          "content": "NAT Gateway stays in public subnet, not in private subnet. So, C can't be.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1181466,
          "date": "Sun 24 Mar 2024 11:59",
          "username": "lenotc",
          "content": "NAT Gateway outbound connections",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1142803,
          "date": "Tue 06 Feb 2024 23:26",
          "username": "mestule",
          "content": "B makes most sense",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1142189,
          "date": "Tue 06 Feb 2024 14:55",
          "username": "Andy_09",
          "content": "Changing to option D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1141238,
          "date": "Mon 05 Feb 2024 16:43",
          "username": "Andy_09",
          "content": "C should be the correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#698",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a new application to Amazon Elastic Kubernetes Service (Amazon EKS) with an AWS Fargate cluster. The application needs a storage solution for data persistence. The solution must be highly available and fault tolerant. The solution also must be shared between multiple application containers.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#698",
          "answers": [
            {
              "choice": "<p>Create Amazon Elastic Block Store (Amazon EBS) volumes in the same Availability Zones where EKS worker nodes are placed. Register the volumes in a StorageClass object on an EKS cluster. Use EBS Multi-Attach to share the data between containers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Elastic File System (Amazon EFS) file system. Register the file system in a StorageClass object on an EKS cluster. Use the same file system for all containers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Elastic Block Store (Amazon EBS) volume. Register the volume in a StorageClass object on an EKS cluster. Use the same volume for all containers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create Amazon Elastic File System (Amazon EFS) file systems in the same Availability Zones where EKS worker nodes are placed. Register the file systems in a StorageClass object on an EKS cluster. Create an AWS Lambda function to synchronize the data between file systems.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 698 discussion",
      "discusstion": [
        {
          "id": 1193966,
          "date": "Fri 11 Oct 2024 20:20",
          "username": "boluwatito",
          "content": "Overall, Amazon EFS provides a highly available, fault-tolerant, and shared storage solution with minimal operational overhead, making it the ideal choice for persisting data in an Amazon EKS Fargate cluster.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1182567,
          "date": "Wed 25 Sep 2024 14:31",
          "username": "TruthWS",
          "content": "B bcs EBS only attack one EC2",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1165136,
          "date": "Tue 03 Sep 2024 22:27",
          "username": "asdfcdsxdfc",
          "content": "B looks correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1155616,
          "date": "Wed 21 Aug 2024 15:00",
          "username": "Naveena_Devanga",
          "content": "B, The solution also must be shared between multiple application containers so attaching to each container is not a practical solution.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1149218,
          "date": "Tue 13 Aug 2024 14:29",
          "username": "Marunio",
          "content": "B is correct answer because it is high available - EBS isnt HA for that so A isn't dealing with request.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1146547,
          "date": "Sat 10 Aug 2024 17:38",
          "username": "jaswantn",
          "content": "Option A... EBS with multi attach does not provide HA so option B is more appropriate.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It's just plain wrong. Not getting HA with EBS multi attach is really the least of your problems. Mounting a regular FS in read/write mode on more than one machine will cause data corruption. You'd need a clustered filesystem.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1181568,
          "date": "Tue 24 Sep 2024 13:13",
          "username": "dkw2342",
          "content": "It's just plain wrong. Not getting HA with EBS multi attach is really the least of your problems. Mounting a regular FS in read/write mode on more than one machine will cause data corruption. You'd need a clustered filesystem.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1141240,
          "date": "Mon 05 Aug 2024 15:45",
          "username": "Andy_09",
          "content": "Correct answer is B",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#699",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that uses Docker containers in its local data center. The application runs on a container host that stores persistent data in a volume on the host. The container instances use the stored persistent data.<br><br>The company wants to move the application to a fully managed service because the company does not want to manage any servers or storage infrastructure.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#699",
          "answers": [
            {
              "choice": "<p>Use Amazon Elastic Kubernetes Service (Amazon EKS) with self-managed nodes. Create an Amazon Elastic Block Store (Amazon EBS) volume attached to an Amazon EC2 instance. Use the EBS volume as a persistent volume mounted in the containers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic Container Service (Amazon ECS) with an AWS Fargate launch type. Create an Amazon Elastic File System (Amazon EFS) volume. Add the EFS volume as a persistent storage volume mounted in the containers.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic Container Service (Amazon ECS) with an AWS Fargate launch type. Create an Amazon S3 bucket. Map the S3 bucket as a persistent storage volume mounted in the containers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic Container Service (Amazon ECS) with an Amazon EC2 launch type. Create an Amazon Elastic File System (Amazon EFS) volume. Add the EFS volume as a persistent storage volume mounted in the containers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 699 discussion",
      "discusstion": [
        {
          "id": 1149223,
          "date": "Tue 13 Feb 2024 15:35",
          "username": "Marunio",
          "content": "Mounting S3 in Fargate is not supported commonly. You'd have to make it manually. EFS is very well supported with Fargate.<br>https://stackoverflow.com/questions/66391791/how-to-mount-s3-bucket-to-ecs-fargate-container<br><br>https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/storage.html",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1141242,
          "date": "Mon 05 Feb 2024 16:49",
          "username": "Andy_09",
          "content": "B looks correct",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1195078,
          "date": "Sat 13 Apr 2024 19:58",
          "username": "waldirlsantos",
          "content": "EFS is listed like a best practice for this cases<br>\\\"ou can use Amazon ECS to run stateful containerized applications at scale by using AWS storage services, such as Amazon EFS, Amazon EBS, or FSx for Windows File Server, that provide data persistence to inherently ephemeral containers. The term data persistence means that the data itself outlasts the process that created it. \\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1176385,
          "date": "Mon 18 Mar 2024 11:47",
          "username": "MattBJ",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1155346,
          "date": "Wed 21 Feb 2024 08:48",
          "username": "ogerber",
          "content": "The company does not want to manage any servers or storage infrastructure.<br>I would go with C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Both B and C work with AWS launch type. So you have to decide between EFS vs S3.<br><br>How are you going to MOUNT s3 buckets in the containers?!</li><li>It's simply not good practice, unless you're confusing S3 with S3 storage gateway.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1285461,
          "date": "Tue 17 Sep 2024 23:17",
          "username": "MatAlves",
          "content": "Both B and C work with AWS launch type. So you have to decide between EFS vs S3.<br><br>How are you going to MOUNT s3 buckets in the containers?!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It's simply not good practice, unless you're confusing S3 with S3 storage gateway.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1285464,
          "date": "Tue 17 Sep 2024 23:20",
          "username": "MatAlves",
          "content": "It's simply not good practice, unless you're confusing S3 with S3 storage gateway.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#700",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A gaming company wants to launch a new internet-facing application in multiple AWS Regions. The application will use the TCP and UDP protocols for communication. The company needs to provide high availability and minimum latency for global users.<br><br>Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#700",
          "answers": [
            {
              "choice": "<p>Create internal Network Load Balancers in front of the application in each Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create external Application Load Balancers in front of the application in each Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Global Accelerator accelerator to route traffic to the load balancers in each Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Route 53 to use a geolocation routing policy to distribute the traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon CloudFront to handle the traffic and route requests to the application in each Region<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 700 discussion",
      "discusstion": [
        {
          "id": 1141248,
          "date": "Mon 05 Aug 2024 15:52",
          "username": "Andy_09",
          "content": "Correct answer should be AC<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agreed.<br><br>When you add an internal Load Balancer or an Amazon EC2 instance endpoint in AWS Global Accelerator, you enable internet traffic to flow directly to and from the endpoint in Virtual Private Clouds (VPCs) by targeting it in a private subnet. The VPC that contains the load balancer or EC2 instance must have an internet gateway attached to it, to indicate that the VPC accepts internet traffic. However, you don't need public IP addresses on the load balancer or EC2 instance. You also don't need an associated internet gateway route for the subnet.</li></ul>",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 1142808,
          "date": "Tue 06 Aug 2024 22:40",
          "username": "mestule",
          "content": "Agreed.<br><br>When you add an internal Load Balancer or an Amazon EC2 instance endpoint in AWS Global Accelerator, you enable internet traffic to flow directly to and from the endpoint in Virtual Private Clouds (VPCs) by targeting it in a private subnet. The VPC that contains the load balancer or EC2 instance must have an internet gateway attached to it, to indicate that the VPC accepts internet traffic. However, you don't need public IP addresses on the load balancer or EC2 instance. You also don't need an associated internet gateway route for the subnet.",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1151131,
          "date": "Thu 15 Aug 2024 16:56",
          "username": "ogerber",
          "content": "Gaming + TCP / UDP > always think NLB and global accelerator",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1202012,
          "date": "Fri 25 Oct 2024 15:22",
          "username": "sandordini",
          "content": "Gaming, TCP&UDP, HA, Low latency >> NLB + AWS Global Accelerator",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1195072,
          "date": "Sun 13 Oct 2024 19:46",
          "username": "waldirlsantos",
          "content": "Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP. NLB + GA for UDP, TCP",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1177198,
          "date": "Thu 19 Sep 2024 09:57",
          "username": "Kezuko",
          "content": "UDP -> NLB and Global Accelerator",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1147817,
          "date": "Mon 12 Aug 2024 04:22",
          "username": "1Alpha1",
          "content": "*AC* - the app is using TCP & UDP",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1146549,
          "date": "Sat 10 Aug 2024 17:42",
          "username": "jaswantn",
          "content": "For global user where TCP and UDP protocols are used and HA with minimum latency is needed.... Global Accelerator with NLB is the solution combination .",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    }
  ]
}