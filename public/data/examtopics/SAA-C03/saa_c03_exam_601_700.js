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
    }
  ]
}