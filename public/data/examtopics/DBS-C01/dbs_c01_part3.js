var DBS_C01_Part3 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#201",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company uses Amazon DynamoDB as the backend for its payments system. A new regulation requires the company to log all data access requests for financial audits. For this purpose, the company plans to use AWS logging and save logs to Amazon S3<br>How can a database specialist activate logging on the database?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#201",
          "answers": [
            {
              "choice": "<p>A. Use AWS CloudTrail to monitor DynamoDB control-plane operations. Create a DynamoDB stream to monitor data-plane operations. Pass the stream to Amazon Kinesis Data Streams. Use that stream as a source for Amazon Kinesis Data Firehose to store the data in an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS CloudTrail to monitor DynamoDB data-plane operations. Create a DynamoDB stream to monitor control-plane operations. Pass the stream to Amazon Kinesis Data Streams. Use that stream as a source for Amazon Kinesis Data Firehose to store the data in an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create two trails in AWS CloudTrail. Use Trail1 to monitor DynamoDB control-plane operations. Use Trail2 to monitor DynamoDB data-plane operations.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS CloudTrail to monitor DynamoDB data-plane and control-plane operations.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 201 discussion",
      "discusstion": [
        {
          "id": 658718,
          "date": "Sat 03 Sep 2022 20:05",
          "username": "mbar94",
          "content": "It's D - https://aws.amazon.com/about-aws/whats-new/2021/04/you-now-can-use-aws-cloudtrail-to-log-amazon-dynamodb-streams-da/.<br><br>No need of separator trails as in C. ",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 758746,
          "date": "Tue 27 Dec 2022 16:58",
          "username": "parle101",
          "content": "Ans should be D as per this<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/logging-using-cloudtrail.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 758738,
          "date": "Tue 27 Dec 2022 16:53",
          "username": "parle101",
          "content": "The logs should be saved to S3. C and D do not meet that requirement",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 700440,
          "date": "Fri 21 Oct 2022 03:15",
          "username": "RBSK",
          "content": "Separating two trails (With option C) is also right answer???",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#202",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A vehicle insurance company needs to choose a highly available database to track vehicle owners and their insurance details. The persisted data should be immutable in the database, including the complete and sequenced history of changes over time with all the owners and insurance transfer details for a vehicle.<br>The data should be easily verifiable for the data lineage of an insurance claim.<br>Which approach meets these requirements with MINIMAL effort?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#202",
          "answers": [
            {
              "choice": "<p>A. Create a blockchain to store the insurance details. Validate the data using a hash function to verify the data lineage of an insurance claim.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon DynamoDB table to store the insurance details. Validate the data using AWS DMS validation by moving the data to Amazon S3 to verify the data lineage of an insurance claim.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon QLDB ledger to store the insurance details. Validate the data by choosing the ledger name in the digest request to verify the data lineage of an insurance claim.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Aurora database to store the insurance details. Validate the data using AWS DMS validation by moving the data to Amazon S3 to verify the data lineage of an insurance claim.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 202 discussion",
      "discusstion": [
        {
          "id": 754363,
          "date": "Fri 23 Dec 2022 17:46",
          "username": "Don2021",
          "content": "C : Amazon Quantum Ledger Database (QLDB) - Maintain an immutable, cryptographically verifiable log of data changes",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 749391,
          "date": "Mon 19 Dec 2022 03:39",
          "username": "khun",
          "content": "Ans is C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 679930,
          "date": "Mon 26 Sep 2022 18:06",
          "username": "cloudsunriser",
          "content": "immutable",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 665299,
          "date": "Sat 10 Sep 2022 12:11",
          "username": "SonamDhingra",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 658724,
          "date": "Sat 03 Sep 2022 20:12",
          "username": "mbar94",
          "content": "Immutable history of changes - agree with C. ",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#203",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores session history for its users in an Amazon DynamoDB table. The company has a large user base and generates large amounts of session data.<br>Teams analyze the session data for 1 week, and then the data is no longer needed. A database specialist needs to design an automated solution to purge session data that is more than 1 week old.<br>Which strategy meets these requirements with the MOST operational efficiency?<br></p>",
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
              "choice": "<p>A. Create an AWS Step Functions state machine with a DynamoDB DeleteItem operation that uses the ConditionExpression parameter to delete items older than a week. Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled rule that runs the Step Functions state machine on a weekly basis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function to delete items older than a week from the DynamoDB table. Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled rule that triggers the Lambda function on a weekly basis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Amazon DynamoDB Streams on the table. Use a stream to invoke an AWS Lambda function to delete items older than a week from the DynamoDB table<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable TTL on the DynamoDB table and set a Number data type as the TTL attribute. DynamoDB will automatically delete items that have a TTL that is less than the current time.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 203 discussion",
      "discusstion": [
        {
          "id": 658728,
          "date": "Sat 03 Sep 2022 20:16",
          "username": "mbar94",
          "content": "Textbook question for TTL - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 749392,
          "date": "Mon 19 Dec 2022 03:42",
          "username": "khun",
          "content": "D.  TTL less effort",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 724607,
          "date": "Tue 22 Nov 2022 20:28",
          "username": "Jiang_aws1",
          "content": "This is wrong : delete items that have a TTL that is less than the current time. Most Voted<br>they need to delete 1 week old , not old than current time",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 665300,
          "date": "Sat 10 Sep 2022 12:11",
          "username": "SonamDhingra",
          "content": "D is correct",
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
      "question_text": "<p>A company conducted a security audit of its AWS infrastructure. The audit identified that data was not encrypted in transit between application servers and a<br>MySQL database that is hosted in Amazon RDS.<br>After the audit, the company updated the application to use an encrypted connection. To prevent this problem from occurring again, the company's database team needs to configure the database to require in-transit encryption for all connections.<br>Which solution will meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#204",
          "answers": [
            {
              "choice": "<p>A. Update the parameter group in use by the DB instance, and set the require_secure_transport parameter to ON.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Connect to the database, and use ALTER USER to enable the REQUIRE SSL option on the database user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the security group in use by the DB instance, and remove port 80 to prevent unencrypted connections from being established.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the DB instance, and enable the Require Transport Layer Security option.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 204 discussion",
      "discusstion": [
        {
          "id": 679931,
          "date": "Mon 26 Sep 2022 18:08",
          "username": "cloudsunriser",
          "content": "https://aws.amazon.com/about-aws/whats-new/2022/08/amazon-rds-mysql-supports-ssl-tls-connections/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 658935,
          "date": "Sun 04 Sep 2022 06:17",
          "username": "mbar94",
          "content": "It's A.  https://aws.amazon.com/about-aws/whats-new/2022/08/amazon-rds-mysql-supports-ssl-tls-connections/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#205",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A database specialist is designing an enterprise application for a large company. The application uses Amazon DynamoDB with DynamoDB Accelerator (DAX).<br>The database specialist observes that most of the queries are not found in the DAX cache and that they still require DynamoDB table reads.<br>What should the database specialist review first to improve the utility of DAX?<br></p>",
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
              "choice": "<p>A. The DynamoDB ConsumedReadCapacityUnits metric<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The trust relationship to perform the DynamoDB API calls<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The DAX cluster's TTL setting<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The validity of customer-specified AWS Key Management Service (AWS KMS) keys for DAX encryption at rest<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 205 discussion",
      "discusstion": [
        {
          "id": 679939,
          "date": "Mon 26 Sep 2022 18:13",
          "username": "cloudsunriser",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.cluster-management.html#DAX.cluster-management.custom-settings.ttl",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 666535,
          "date": "Mon 12 Sep 2022 03:51",
          "username": "hcltechaws",
          "content": "I think C. <br><br>When you create a DAX cluster, the following default settings are used:<br><br>Automatic cache eviction enabled with Time to Live (TTL) of 5 minutes<br><br>No preference for Availability Zones<br><br>No preference for maintenance windows<br><br>Notifications disabled",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 665305,
          "date": "Sat 10 Sep 2022 12:15",
          "username": "SonamDhingra",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 658937,
          "date": "Sun 04 Sep 2022 06:21",
          "username": "mbar94khun",
          "content": "Agree with A - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.sizing-guide.htmlAgree on this we should check first the cache missed stats,<br><br>If you also already have a DAX cluster, remember that the DynamoDB ConsumedReadCapacityUnits metric only accounts for cache misses. So, to get an idea of the read capacity units per second handled by your DAX cluster, divide the number by your cache miss rate (that is, 1 - cache hit rate).",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 749399,
          "date": "Mon 19 Dec 2022 03:51",
          "username": "khun",
          "content": "Agree on this we should check first the cache missed stats,<br><br>If you also already have a DAX cluster, remember that the DynamoDB ConsumedReadCapacityUnits metric only accounts for cache misses. So, to get an idea of the read capacity units per second handled by your DAX cluster, divide the number by your cache miss rate (that is, 1 - cache hit rate).",
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
      "question_text": "<p>A company plans to use AWS Database Migration Service (AWS DMS) to migrate its database from one Amazon EC2 instance to another EC2 instance as a full load task. The company wants the database to be inactive during the migration. The company will use a dms.t3.medium instance to perform the migration and will use the default settings for the migration.<br>Which solution will MOST improve the performance of the data migration?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#206",
          "answers": [
            {
              "choice": "<p>A. Increase the number of tables that are loaded in parallel.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Drop all indexes on the source tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the processing mode from the batch optimized apply option to transactional mode.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable Multi-AZ on the target database while the full load task is in progress.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 206 discussion",
      "discusstion": [
        {
          "id": 759339,
          "date": "Wed 28 Dec 2022 04:59",
          "username": "Kanwar_89",
          "content": "So i dont get it ,<br><br>A -- may be helpful<br>B - DMS doesnt take indexes into account during migration , unless they are manually created on target<br>C - transaction mode is default setting - no need to switch it from batch<br>D- Not helpful",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 738532,
          "date": "Thu 08 Dec 2022 03:13",
          "username": "Sab",
          "content": "To indicate the maximum number of tables to load in parallel, set the MaxFullLoadSubTasks option. The default is 8; the maximum value is 49.<br><br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.FullLoad.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 732557,
          "date": "Thu 01 Dec 2022 12:53",
          "username": "satishstechie",
          "content": "There is no much confusion on the query.. Most of the action items are for the target DB as per the URL..Answer should be C. .",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 724741,
          "date": "Wed 23 Nov 2022 00:00",
          "username": "Jiang_aws1",
          "content": "A :Correct<br>XB Drop index on target DB<br>XC Using batch <br>XD.  Not help",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 707024,
          "date": "Sat 29 Oct 2022 08:26",
          "username": "rags1482",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 700496,
          "date": "Fri 21 Oct 2022 06:03",
          "username": "RBSK",
          "content": "Optimizing change processing<br>By default, AWS DMS processes changes in a transactional mode, which preserves transactional integrity. If you can afford temporary lapses in transactional integrity, you can use the batch optimized apply option instead. This option efficiently groups transactions and applies them in batches for efficiency purposes. Using the batch optimized apply option almost always violates referential integrity constraints. So we recommend that you turn these constraints off during the migration process and turn them on again as part of the cutover process.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 679953,
          "date": "Mon 26 Sep 2022 18:25",
          "username": "cloudsunriserhogtroughhogtrough",
          "content": "C is incorrect as it's mentioned in questions that DMS is running with default setting and default is transactional mode. D will have no effect on performance.A will help but dms.t3.medium is not strong enough to handle excess parallelism. It may in fact degrade performance. With all these I feel B seems to be answer. Even with B I guess best practice will be to drop indexes on Destination side and not on source. But It's mentioned database will be inactive I believe dropping indexes on source and recreating later can help.<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html#CHAP_BestPractices.PerformanceThey mention it's running with default so that you understand what's being used currently. Changing to batch optimized from transactional will improve performance as described.Had this backwards. B is correct.",
          "upvote_count": "211",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 710737,
          "date": "Thu 03 Nov 2022 19:58",
          "username": "hogtroughhogtrough",
          "content": "They mention it's running with default so that you understand what's being used currently. Changing to batch optimized from transactional will improve performance as described.Had this backwards. B is correct.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 711275,
          "date": "Fri 04 Nov 2022 18:24",
          "username": "hogtrough",
          "content": "Had this backwards. B is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 677799,
          "date": "Sat 24 Sep 2022 14:22",
          "username": "saran123RBSKRBSK",
          "content": "For a full load task, we recommend that you drop primary key indexes, secondary indexes, referential integrity constraints, and data manipulation language (DML) triggers. Or you can delay their creation until after the full load tasks are complete. You don't need indexes during a full load task, and indexes incur maintenance overhead if they are present. Because the full load task loads groups of tables at a time, referential integrity constraints are violated. Similarly, insert, update, and delete triggers can cause errors, for example if a row insert is triggered for a previously bulk loaded table. Other types of triggers also affect performance due to added processing.<br><br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.htmlWhole phrase mentioned above, in the doc refers to the target, not the source.I will go with C - Same Doc explains it - Optimizing change processing<br>By default, AWS DMS processes changes in a transactional mode, which preserves transactional integrity. If you can afford temporary lapses in transactional integrity, you can use the batch optimized apply option instead. This option efficiently groups transactions and applies them in batches for efficiency purposes. Using the batch optimized apply option almost always violates referential integrity constraints. So we recommend that you turn these constraints off during the migration process and turn them on again as part of the cutover process.",
          "upvote_count": "121",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 700493,
          "date": "Fri 21 Oct 2022 06:01",
          "username": "RBSKRBSK",
          "content": "Whole phrase mentioned above, in the doc refers to the target, not the source.I will go with C - Same Doc explains it - Optimizing change processing<br>By default, AWS DMS processes changes in a transactional mode, which preserves transactional integrity. If you can afford temporary lapses in transactional integrity, you can use the batch optimized apply option instead. This option efficiently groups transactions and applies them in batches for efficiency purposes. Using the batch optimized apply option almost always violates referential integrity constraints. So we recommend that you turn these constraints off during the migration process and turn them on again as part of the cutover process.",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 700494,
          "date": "Fri 21 Oct 2022 06:02",
          "username": "RBSK",
          "content": "I will go with C - Same Doc explains it - Optimizing change processing<br>By default, AWS DMS processes changes in a transactional mode, which preserves transactional integrity. If you can afford temporary lapses in transactional integrity, you can use the batch optimized apply option instead. This option efficiently groups transactions and applies them in batches for efficiency purposes. Using the batch optimized apply option almost always violates referential integrity constraints. So we recommend that you turn these constraints off during the migration process and turn them on again as part of the cutover process.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 673699,
          "date": "Tue 20 Sep 2022 01:44",
          "username": "yxyj",
          "content": "B, t3 medium still too weak to handle large parallel workload.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 672210,
          "date": "Sun 18 Sep 2022 12:08",
          "username": "saran123",
          "content": "I go with A, its mentioned as Full load task and not CDC, so as per this link, it should be A<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html#CHAP_BestPractices.Performance",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 661668,
          "date": "Wed 07 Sep 2022 00:01",
          "username": "Adi_M",
          "content": "C is not the correct answer \\\"By default, AWS DMS processes changes in a transactional mode, which preserves transactional integrity.\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 659716,
          "date": "Mon 05 Sep 2022 06:09",
          "username": "mbar94RBSKmbar94",
          "content": "Agree with C as DB will be inactive during migration. Otherwise, I'd be opting for B. C is correct - Optimizing change processing<br>By default, AWS DMS processes changes in a transactional mode, which preserves transactional integrity. If you can afford temporary lapses in transactional integrity, you can use the batch optimized apply option instead. This option efficiently groups transactions and applies them in batches for efficiency purposes. Using the batch optimized apply option almost always violates referential integrity constraints. So we recommend that you turn these constraints off during the migration process and turn them on again as part of the cutover process.Switching to B, removing indexes may reduce overhead.",
          "upvote_count": "111",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 700495,
          "date": "Fri 21 Oct 2022 06:03",
          "username": "RBSK",
          "content": "C is correct - Optimizing change processing<br>By default, AWS DMS processes changes in a transactional mode, which preserves transactional integrity. If you can afford temporary lapses in transactional integrity, you can use the batch optimized apply option instead. This option efficiently groups transactions and applies them in batches for efficiency purposes. Using the batch optimized apply option almost always violates referential integrity constraints. So we recommend that you turn these constraints off during the migration process and turn them on again as part of the cutover process.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 666670,
          "date": "Mon 12 Sep 2022 08:47",
          "username": "mbar94",
          "content": "Switching to B, removing indexes may reduce overhead.",
          "upvote_count": "1",
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
      "question_text": "<p>A finance company migrated its 3 =D7=80=C2=A2=D7=80' on-premises PostgreSQL database to an Amazon Aurora PostgreSQL DB cluster. During a review after the migration, a database specialist discovers that the database is not encrypted at rest. The database must be encrypted at rest as soon as possible to meet security requirements. The database specialist must enable encryption for the DB cluster with minimal downtime.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#207",
          "answers": [
            {
              "choice": "<p>A. Modify the unencrypted DB cluster using the AWS Management Console. Enable encryption and choose to apply the change immediately.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Take a snapshot of the unencrypted DB cluster and restore it to a new DB cluster with encryption enabled. Update any database connection strings to reference the new DB cluster endpoint, and then delete the unencrypted DB cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an encrypted Aurora Replica of the unencrypted DB cluster. Promote the Aurora Replica as the new master.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new DB cluster with encryption enabled and use the pg_dump and pg_restore utilities to load data to the new DB cluster. Update any database connection strings to reference the new DB cluster endpoint, and then delete the unencrypted DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 207 discussion",
      "discusstion": [
        {
          "id": 758982,
          "date": "Tue 27 Dec 2022 20:57",
          "username": "lollyj",
          "content": "https://aws.amazon.com/blogs/database/best-practices-for-migrating-postgresql-databases-to-amazon-rds-and-amazon-aurora/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 758696,
          "date": "Tue 27 Dec 2022 16:20",
          "username": "Kanwar_89",
          "content": "Point number 4 in limitations - https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Overview.Encryption.html#Overview.Encryption.Limitations",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 679958,
          "date": "Mon 26 Sep 2022 18:33",
          "username": "cloudsunriser",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Overview.Encryption.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 665309,
          "date": "Sat 10 Sep 2022 12:19",
          "username": "SonamDhingra",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 659718,
          "date": "Mon 05 Sep 2022 06:13",
          "username": "mbar94",
          "content": "It's B.  A and C for sure incorrect - https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Overview.Encryption.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#208",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a 4 =D7=80=C2=A2=D7=80' on-premises Oracle Real Application Clusters (RAC) database. The company wants to migrate the database to AWS and reduce licensing costs. The company's application team wants to store JSON payloads that expire after 28 hours. The company has development capacity if code changes are required.<br>Which solution meets these requirements?<br></p>",
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
              "choice": "<p>A. Use Amazon DynamoDB and leverage the Time to Live (TTL) feature to automatically expire the data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon RDS for Oracle with Multi-AZ. Create an AWS Lambda function to purge the expired data. Schedule the Lambda function to run daily using Amazon EventBridge.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon DocumentDB with a read replica in a different Availability Zone. Use DocumentDB change streams to expire the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Aurora PostgreSQL with Multi-AZ and leverage the Time to Live (TTL) feature to automatically expire the data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 208 discussion",
      "discusstion": [
        {
          "id": 679964,
          "date": "Mon 26 Sep 2022 18:40",
          "username": "cloudsunriser",
          "content": "Expiration + Json + Capacity to have code changeOption A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 665311,
          "date": "Sat 10 Sep 2022 12:23",
          "username": "SonamDhingra",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 659719,
          "date": "Mon 05 Sep 2022 06:14",
          "username": "mbar94",
          "content": "JSON + expirationDynamo DB.  It's A. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#209",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A database specialist is working on an Amazon RDS for PostgreSQL DB instance that is experiencing application performance issues due to the addition of new workloads. The database has 5 =D7=80=C2=A2=D7=80' of storage space with Provisioned IOPS. Amazon CloudWatch metrics show that the average disk queue depth is greater than<br>200 and that the disk I/O response time is significantly higher than usual.<br>What should the database specialist do to improve the performance of the application immediately?<br></p>",
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
              "choice": "<p>A. Increase the Provisioned IOPS rate on the storage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Increase the available storage space.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use General Purpose SSD (gp2) storage with burst credits.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a read replica to offload Read IOPS from the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 209 discussion",
      "discusstion": [
        {
          "id": 759861,
          "date": "Wed 28 Dec 2022 14:10",
          "username": "lollyj",
          "content": "Increasing the provisioned IO capacity will immediately alleviate the latency.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 758785,
          "date": "Tue 27 Dec 2022 17:30",
          "username": "parle101",
          "content": "Ans - A<br>Getting the best performance from Amazon RDS Provisioned IOPS SSD storage:<br>If your workload is I/O constrained, using Provisioned IOPS SSD storage can increase the number of I/O requests that the system can process concurrently. Increased concurrency allows for decreased latency because I/O requests spend less time in a queue. Decreased latency allows for faster database commits, which improves response time and allows for higher database throughput.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 711278,
          "date": "Fri 04 Nov 2022 18:26",
          "username": "hogtrough",
          "content": "Key word is \\\"immediate.\\\" Replica will take time to create.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 695533,
          "date": "Sat 15 Oct 2022 18:30",
          "username": "awsjjj",
          "content": "answer A due to \\\"immediate improvement\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 679969,
          "date": "Mon 26 Sep 2022 18:51",
          "username": "cloudsunriser",
          "content": "I think both A and D are correct but as last line of question says we want immediate improvement then A should be answer as read replica creation will take some time.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 665316,
          "date": "Sat 10 Sep 2022 12:31",
          "username": "SonamDhingra",
          "content": "A is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 659722,
          "date": "Mon 05 Sep 2022 06:26",
          "username": "mbar94",
          "content": "It seems that D - https://aws.amazon.com/blogs/database/best-storage-practices-for-running-production-workloads-on-hosted-databases-with-amazon-rds-or-amazon-ec2/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#210",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software company uses an Amazon RDS for MySQL Multi-AZ DB instance as a data store for its critical applications. During an application upgrade process, a database specialist runs a custom SQL script that accidentally removes some of the default permissions of the master user.<br>What is the MOST operationally efficient way to restore the default permissions of the master user?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#210",
          "answers": [
            {
              "choice": "<p>A. Modify the DB instance and set a new master user password.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Secrets Manager to modify the master user password and restart the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new master user for the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Review the IAM user that owns the DB instance, and add missing permissions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 210 discussion",
      "discusstion": [
        {
          "id": 749402,
          "date": "Mon 19 Dec 2022 04:02",
          "username": "khun",
          "content": "A. <br>If you accidentally delete the permissions for the master user, you can restore them by modifying the DB instance and setting a new master user password.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 734608,
          "date": "Sat 03 Dec 2022 18:44",
          "username": "Gosha109876",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.MasterAccounts.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 665319,
          "date": "Sat 10 Sep 2022 12:32",
          "username": "SonamDhingra",
          "content": "A is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659724,
          "date": "Mon 05 Sep 2022 06:28",
          "username": "mbar94",
          "content": "A is correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#211",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is launching a new Amazon RDS for MySQL Multi-AZ DB instance to be used as a data store for a custom-built application. After a series of tests with point-in-time recovery disabled, the company decides that it must have point-in-time recovery reenabled before using the DB instance to store production data.<br>What should a database specialist do so that point-in-time recovery can be successful?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#211",
          "answers": [
            {
              "choice": "<p>A. Enable binary logging in the DB parameter group used by the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the DB instance and enable audit logs to be pushed to Amazon CloudWatch Logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the DB instance and configure a backup retention period<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up a scheduled job to create manual DB instance snapshots.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 211 discussion",
      "discusstion": [
        {
          "id": 707565,
          "date": "Sun 30 Oct 2022 02:26",
          "username": "rags1482",
          "content": "You can restore a DB instance to a specific point in time (PITR), creating a new DB instance. To support PITR, your DB instances must have backup retention set to a nonzero value.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-backup-sqlserver.html<br><br>Answer : C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 680053,
          "date": "Mon 26 Sep 2022 20:27",
          "username": "JeanGat",
          "content": "https://aws.amazon.com/blogs/database/setting-up-a-binlog-server-for-amazon-rds-mysql-and-mariadb-using-mariadb-maxscale/<br>\\\"After you run the command, it's okay to enable backup retention on the RDS instance by using the AWS CLI or the console. Enabling backup retention also enables binary logging.\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 679978,
          "date": "Mon 26 Sep 2022 19:01",
          "username": "cloudsunriser",
          "content": "Correct answer is c.Setting non-zero value in backup retention turns on automatic backups and also turns on bin logging which is required for PIT. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.MySQL.BinaryFormat.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 665320,
          "date": "Sat 10 Sep 2022 12:34",
          "username": "SonamDhingra",
          "content": "A is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 659725,
          "date": "Mon 05 Sep 2022 06:32",
          "username": "mbar94",
          "content": "Backup retention period must be set - it's C.  https://aws.amazon.com/blogs/storage/point-in-time-recovery-and-continuous-backup-for-amazon-rds-with-aws-backup/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#212",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a database fleet that includes an Amazon RDS for MySQL DB instance. During an audit, the company discovered that the data that is stored on the DB instance is unencrypted.<br>A database specialist must enable encryption for the DB instance. The database specialist also must encrypt all connections to the DB instance.<br>Which combination of actions should the database specialist take to meet these requirements? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CDE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#212",
          "answers": [
            {
              "choice": "<p>A. In the RDS console, choose \"Enable encryption\" to encrypt the DB instance by using an AWS Key Management Service (AWS KMS) key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Encrypt the read replica of the unencrypted DB instance by using an AWS Key Management Service (AWS KMS) key. Fail over the read replica to the primary DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a snapshot of the unencrypted DB instance. Encrypt the snapshot by using an AWS Key Management Service (AWS KMS) key. Restore the DB instance from the encrypted snapshot. Delete the original DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Require SSL connections for applicable database user accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use SSL/TLS from the application to encrypt a connection to the DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Enable SSH encryption on the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 212 discussion",
      "discusstion": [
        {
          "id": 759871,
          "date": "Wed 28 Dec 2022 14:16",
          "username": "lollyj",
          "content": "F is incorrect because you cannot SSH into the DB instance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CDE"
        },
        {
          "id": 752552,
          "date": "Wed 21 Dec 2022 17:10",
          "username": "Don2021",
          "content": "CDE is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 707022,
          "date": "Sat 29 Oct 2022 08:24",
          "username": "rags1482",
          "content": "ACE<br>To encrypt a new DB instance, choose Enable encryption on the Amazon RDS console<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Enabling",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 707020,
          "date": "Sat 29 Oct 2022 08:22",
          "username": "rags1482",
          "content": "ACD<br>To encrypt a new DB instance, choose Enable encryption on the Amazon RDS console<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Enabling",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 701182,
          "date": "Fri 21 Oct 2022 23:31",
          "username": "RBSKtucobbad",
          "content": "CEF - We need to force SSL from DB tooF means \\\"SSH\\\" not SSL, hence, incorrect. CDE is the answer",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 758924,
          "date": "Tue 27 Dec 2022 19:38",
          "username": "tucobbad",
          "content": "F means \\\"SSH\\\" not SSL, hence, incorrect. CDE is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 679981,
          "date": "Mon 26 Sep 2022 19:05",
          "username": "cloudsunriser",
          "content": "CDE seems to be correct. Both A and B are not possible.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CDE"
        },
        {
          "id": 659728,
          "date": "Mon 05 Sep 2022 06:38",
          "username": "mbar94",
          "content": "I'd go for CDE - https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CDE"
        }
      ]
    },
    {
      "question_id": "#213",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an ecommerce website that runs on AWS. The website uses an Amazon RDS for MySQL database. A database specialist wants to enforce the use of temporary credentials to access the database.<br>Which solution will meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#213",
          "answers": [
            {
              "choice": "<p>A. Use MySQL native database authentication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Secrets Manager to rotate the credentials.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Identity and Access Management (IAM) database authentication.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Systems Manager Parameter Store for authentication.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 213 discussion",
      "discusstion": [
        {
          "id": 759876,
          "date": "Wed 28 Dec 2022 14:21",
          "username": "lollyj",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAM.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 679982,
          "date": "Mon 26 Sep 2022 19:06",
          "username": "cloudsunriser",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 665321,
          "date": "Sat 10 Sep 2022 12:36",
          "username": "SonamDhingra",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 659730,
          "date": "Mon 05 Sep 2022 06:39",
          "username": "mbar94",
          "content": "Agree with C. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#214",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A manufacturing company has an. inventory system that stores information in an Amazon Aurora MySQL DB cluster. The database tables are partitioned. The database size has grown to 3 TB.  Users run one-time queries by using a SQL client. Queries that use an equijoin to join large tables are taking a long time to run.<br>Which action will improve query performance with the LEAST operational effort?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#214",
          "answers": [
            {
              "choice": "<p>A. Migrate the database to a new Amazon Redshift data warehouse.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable hash joins on the database by setting the variable optimizer_switch to hash_joinon.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Take a snapshot of the DB cluster. Create a new DB instance by using the snapshot, and enable parallel query mode.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an Aurora read replica.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 214 discussion",
      "discusstion": [
        {
          "id": 749405,
          "date": "Mon 19 Dec 2022 04:13",
          "username": "khun",
          "content": "B is correct.<br>When you need to join a large amount of data by using an equijoin, a hash join can improve query performance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 665323,
          "date": "Sat 10 Sep 2022 12:38",
          "username": "SonamDhingra",
          "content": "B is correct<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.BestPractices.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 659733,
          "date": "Mon 05 Sep 2022 06:41",
          "username": "mbar94",
          "content": "Agree with B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#215",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a business-critical application on premises by using Microsoft SQL Server. A database specialist is planning to migrate the instance with several databases to the AWS Cloud. The database specialist will use SQL Server Standard edition hosted on Amazon EC2 Windows instances. The solution must provide high availability and must avoid a single point of failure in the SQL Server deployment architecture.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#215",
          "answers": [
            {
              "choice": "<p>A. Create Amazon RDS for SQL Server Multi-AZ DB instances. Use Amazon S3 as a shared storage option to host the databases.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up Always On Failover Cluster Instances as a single SQL Server instance. Use Multi-AZ Amazon FSx for Windows File Server as a shared storage option to host the databases.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up Always On availability groups to group one or more user databases that fail over together across multiple SQL Server instances. Use Multi-AZ Amazon FSx for Windows File Server as a shared storage option to host the databases.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Application Load Balancer to distribute database traffic across multiple EC2 instances in multiple Availability Zones. Use Amazon S3 as a shared storage option to host the databases.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 215 discussion",
      "discusstion": [
        {
          "id": 680843,
          "date": "Tue 27 Sep 2022 16:07",
          "username": "JeanGat",
          "content": "https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-sql-server/ec2-fci.html<br>An FCI is generally preferable over an Always on availability group when:<br>You're using SQL Server Standard edition instead of Enterprise edition.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 738271,
          "date": "Wed 07 Dec 2022 20:14",
          "username": "vkruger",
          "content": "Answer is B.  Key word \\\"SQL Server Standard edition\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 724555,
          "date": "Tue 22 Nov 2022 19:18",
          "username": "Sab",
          "content": "B is right. C is incorrect because it is mentioned to use FSx for hosting databases.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 701197,
          "date": "Sat 22 Oct 2022 00:18",
          "username": "RBSK",
          "content": "B is right",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 698286,
          "date": "Tue 18 Oct 2022 16:16",
          "username": "DBA_MJF",
          "content": "C - https://aws.amazon.com/about-aws/whats-new/2021/02/amazon-rds-for-sql-server-now-supports-always-on-availability-groups-for-standard-edition/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695547,
          "date": "Sat 15 Oct 2022 19:05",
          "username": "awsjjj",
          "content": "C requires dedicated storage for each instance B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 690130,
          "date": "Sun 09 Oct 2022 13:56",
          "username": "Changwha",
          "content": "An FCI is generally preferable over an Always on availability group when you're using SQL Server Standard edition instead of Enterprise edition.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 679998,
          "date": "Mon 26 Sep 2022 19:20",
          "username": "cloudsunriser",
          "content": "RDS is not in picture. FsX for shared storage on windows ec2 instances. C is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 660581,
          "date": "Tue 06 Sep 2022 00:13",
          "username": "zoomacRBSK",
          "content": "B: SQL Server Standard edition: FCI.<br>For C you need SQL Server Enterprise Edition.Agree. SQL AAG needs Enterprise Edition",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 701196,
          "date": "Sat 22 Oct 2022 00:17",
          "username": "RBSK",
          "content": "Agree. SQL AAG needs Enterprise Edition",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659735,
          "date": "Mon 05 Sep 2022 06:44",
          "username": "mbar94",
          "content": "Agree with C. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#216",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is planning to use Amazon RDS for SQL Server for one of its critical applications. The company's security team requires that the users of the RDS for<br>SQL Server DB instance are authenticated with on-premises Microsoft Active Directory credentials.<br>Which combination of steps should a database specialist take to meet this requirement? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#216",
          "answers": [
            {
              "choice": "<p>A. Extend the on-premises Active Directory to AWS by using AD Connector.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM user that uses the AmazonRDSDirectoryServiceAccess managed IAM policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a directory by using AWS Directory Service for Microsoft Active Directory.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Active Directory domain controller on Amazon EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an IAM role that uses the AmazonRDSDirectoryServiceAccess managed IAM policy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create a one-way forest trust from the AWS Directory Service for Microsoft Active Directory directory to the on-premises Active Directory.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 216 discussion",
      "discusstion": [
        {
          "id": 665328,
          "date": "Sat 10 Sep 2022 12:41",
          "username": "SonamDhingra",
          "content": "CEF is the answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 659740,
          "date": "Mon 05 Sep 2022 06:53",
          "username": "mbar94",
          "content": "CEF is correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CEF"
        }
      ]
    },
    {
      "question_id": "#217",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing an application that performs intensive in-memory operations on advanced data structures such as sorted sets. The application requires sub-millisecond latency for reads and writes. The application occasionally must run a group of commands as an ACID-compliant operation. A database specialist is setting up the database for this application. The database specialist needs the ability to create a new database cluster from the latest backup of the production cluster.<br>Which type of cluster should the database specialist create to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#217",
          "answers": [
            {
              "choice": "<p>A. Amazon ElastiCache for Memcached<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon Neptune<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon ElastiCache for Redis<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon DynamoDB Accelerator (DAX)<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 217 discussion",
      "discusstion": [
        {
          "id": 759954,
          "date": "Wed 28 Dec 2022 15:37",
          "username": "lollyj",
          "content": "Elasticache for Redis is appropriate for complex data structures, ACID compliant and can be restored from a backup unlike Memcache.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 680015,
          "date": "Mon 26 Sep 2022 19:42",
          "username": "cloudsunriser",
          "content": "Sorted sets seems to be key. I think C is answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 664014,
          "date": "Thu 08 Sep 2022 23:01",
          "username": "gairaj",
          "content": "C is rightas advanced data structures supported in Redis not in memcache. https://aws.amazon.com/elasticache/redis-vs-memcached/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 660583,
          "date": "Tue 06 Sep 2022 00:15",
          "username": "zoomacsupratip",
          "content": "D is the right answer.<br>C is wrong since Redis transactions are not fully ACID compliant.<br>Memcached is a simple key-value store.<br>Neptune is a graph database.I dont think DAX is ACID compliant",
          "upvote_count": "41",
          "selected_answers": ""
        },
        {
          "id": 675772,
          "date": "Thu 22 Sep 2022 08:05",
          "username": "supratip",
          "content": "I dont think DAX is ACID compliant",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659736,
          "date": "Mon 05 Sep 2022 06:47",
          "username": "mbar94",
          "content": "Sorted sets - https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-use-cases.html#elasticache-for-redis-use-cases-gaming",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#218",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon Aurora MySQL as the primary database engine for many of its applications. A database specialist must create a dashboard to provide the company with information about user connections to databases. According to compliance requirements, the company must retain all connection logs for at least 7 years.<br>Which solution will meet these requirements MOST cost-effectively?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#218",
          "answers": [
            {
              "choice": "<p>A. Enable advanced auditing on the Aurora cluster to log CONNECT events. Export audit logs from Amazon CloudWatch to Amazon S3 by using an AWS Lambda function that is invoked by an Amazon EventBridge (Amazon CloudWatch Events) scheduled event. Build a dashboard by using Amazon QuickSight.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Capture connection attempts to the Aurora cluster with AWS Cloud Trail by using the DescribeEvents API operation. Create a CloudTrail trail to export connection logs to Amazon S3. Build a dashboard by using Amazon QuickSight.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Start a database activity stream for the Aurora cluster. Push the activity records to an Amazon Kinesis data stream. Build a dynamic dashboard by using AWS Lambda.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Publish the DatabaseConnections metric for the Aurora DB instances to Amazon CloudWatch. Build a dashboard by using CloudWatch dashboards.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 218 discussion",
      "discusstion": [
        {
          "id": 733979,
          "date": "Fri 02 Dec 2022 19:27",
          "username": "examineme",
          "content": "A is absolutely Correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 668791,
          "date": "Wed 14 Sep 2022 10:47",
          "username": "SonamDhingra",
          "content": "A is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 659806,
          "date": "Mon 05 Sep 2022 08:44",
          "username": "mbar94",
          "content": "It's A, any thoughts? https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Auditing.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#219",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company requires near-real-time notifications when changes are made to Amazon RDS DB security groups.<br>Which solution will meet this requirement with the LEAST operational overhead?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#219",
          "answers": [
            {
              "choice": "<p>A. Configure an RDS event notification subscription for DB security group events.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function that monitors DB security group changes. Create an Amazon Simple Notification Service (Amazon SNS) topic for notification.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on AWS CloudTrail. Configure notifications for the detection of changes to DB security groups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Amazon CloudWatch alarm for RDS metrics about changes to DB security groups.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 219 discussion",
      "discusstion": [
        {
          "id": 659807,
          "date": "Mon 05 Sep 2022 08:45",
          "username": "mbar94",
          "content": "A, RDS Event notification https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html#USER_Events.Messages.security-group",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 668793,
          "date": "Wed 14 Sep 2022 10:48",
          "username": "SonamDhingra",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#220",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A development team asks a database specialist to create a copy of a production Amazon RDS for MySQL DB instance every morning. The development team will use the copied DB instance as a testing environment for development. The original DB instance and the copy will be hosted in different VPCs of the same AWS account. The development team wants the copy to be available by 6 AM each day and wants to use the same endpoint address each day.<br>Which combination of steps should the database specialist take to meet these requirements MOST cost-effectively? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ABC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#220",
          "answers": [
            {
              "choice": "<p>A. Create a snapshot of the production database each day before the 6 AM deadline.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an RDS for MySQL DB instance from the snapshot. Select the desired DB instance size.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update a defined Amazon Route 53 CNAME record to point to the copied DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an AWS Database Migration Service (AWS DMS) migration task to copy the snapshot to the copied DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use the CopySnapshot action on the production DB instance to create a snapshot before 6 AM.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Update a defined Amazon Route 53 alias record to point to the copied DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 220 discussion",
      "discusstion": [
        {
          "id": 760175,
          "date": "Wed 28 Dec 2022 18:51",
          "username": "lollyj",
          "content": "Can someone explain why a CNAME record isn't chosen over ALIAS record? From my understanding Alias records do not support RDS DNS endpoints. Any thoughts?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABF"
        },
        {
          "id": 755530,
          "date": "Sun 25 Dec 2022 10:05",
          "username": "RBSKRBSK",
          "content": "\\\"C\\\" is not right. Pls refer to https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.htmlAgree, ABC-https://jayendrapatil.com/aws-route-53-alias-vs-cname/",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: ABF"
        },
        {
          "id": 755548,
          "date": "Sun 25 Dec 2022 10:19",
          "username": "RBSK",
          "content": "Agree, ABC-https://jayendrapatil.com/aws-route-53-alias-vs-cname/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 733977,
          "date": "Fri 02 Dec 2022 19:24",
          "username": "examineme",
          "content": "ABC is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 680023,
          "date": "Mon 26 Sep 2022 19:52",
          "username": "cloudsunriser",
          "content": "ABC is correct. E is I guess for copying EBS volume snapshots and not for RDS.DMS is not required and it's not alias record.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 665334,
          "date": "Sat 10 Sep 2022 12:45",
          "username": "SonamDhingra",
          "content": "ABC is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 659816,
          "date": "Mon 05 Sep 2022 08:49",
          "username": "mbar94",
          "content": "BCE, any thoughts?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        }
      ]
    },
    {
      "question_id": "#221",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software company is conducting a security audit of its three-node Amazon Aurora MySQL DB cluster.<br>Which finding is a security concern that needs to be addressed?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#221",
          "answers": [
            {
              "choice": "<p>A. The AWS account root user does not have the minimum privileges required for client applications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Encryption in transit is not configured for all Aurora native backup processes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Each Aurora DB cluster node is not in a separate private VPC with restricted access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The IAM credentials used by the application are not rotated regularly.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 221 discussion",
      "discusstion": [
        {
          "id": 760178,
          "date": "Wed 28 Dec 2022 18:55",
          "username": "lollyj",
          "content": "I chose D however I believe A is somewhat confusing because root shouldn't be used by the application and it is privilege shouldn't be minimized for application use.Very confusing",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 680856,
          "date": "Tue 27 Sep 2022 16:17",
          "username": "JeanGat",
          "content": "Go with D, not A. A is saying root does NOT have the required minimum permissions for the application.Which is fine....if you're not using root for the application, then who cares.Nowhere does it say, \\\"root is being used for application access\\\".",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 680025,
          "date": "Mon 26 Sep 2022 19:55",
          "username": "cloudsunriser",
          "content": "Rotate your IAM credentials regularly.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 674258,
          "date": "Tue 20 Sep 2022 16:28",
          "username": "yxyj",
          "content": "D, Rotate your IAM credentials regularly.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 668804,
          "date": "Wed 14 Sep 2022 10:51",
          "username": "SonamDhingra",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 662940,
          "date": "Thu 08 Sep 2022 00:15",
          "username": "Adi_M",
          "content": "A is the not the answer. Root user should NOT be used for the applications.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 659812,
          "date": "Mon 05 Sep 2022 08:47",
          "username": "mbar94",
          "content": "It's A - minimum priviledge rule should be always maintained.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#222",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an AWS CloudFormation stack that defines an Amazon RDS DB instance. The company accidentally deletes the stack and loses recent data from the DB instance. A database specialist must change the CloudFormation template for the RDS resource to reduce the chance of accidental data loss from the DB instance in the future.<br>Which combination of actions should the database specialist take to meet this requirement? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ADF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#222",
          "answers": [
            {
              "choice": "<p>A. Set the DeletionProtection property to True.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set the MultiAZ property to True.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set the TerminationProtection property to True.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set the DeleteAutomatedBackups property to False.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Set the DeletionPolicy attribute to No.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Set the DeletionPolicy attribute to Retain.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 222 discussion",
      "discusstion": [
        {
          "id": 760183,
          "date": "Wed 28 Dec 2022 19:04",
          "username": "lollyj",
          "content": "Can someone explain why making the DB instance a multi AZ not a good option?This way if primary is deleted the standby becomes a standalone. Disabling \\\"Delete automated backups\\\" only ensures that the database can be restored.Any thoughts?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABF"
        },
        {
          "id": 701873,
          "date": "Sun 23 Oct 2022 04:51",
          "username": "RBSK",
          "content": "Agree, This is a Duplicate",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 680027,
          "date": "Mon 26 Sep 2022 19:55",
          "username": "cloudsunriser",
          "content": "Answer ADF. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659819,
          "date": "Mon 05 Sep 2022 08:51",
          "username": "mbar94",
          "content": "It's duplicated question - see Question no. 2<br>Answer ADF. ",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ADF"
        }
      ]
    },
    {
      "question_id": "#223",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has branch offices in the United States and Singapore. The company has a three-tier web application that uses a shared database. The database runs on an Amazon RDS for MySQL DB instance that is hosted in the us-west-2 Region. The application has a distributed front end that is deployed in us-west-2 and in the ap-southeast-1 Region. The company uses this front end as a dashboard that provides statistics to sales managers in each branch office.<br>The dashboard loads more slowly in the Singapore branch office than in the United States branch office. The company needs a solution so that the dashboard loads consistently for users in each location.<br>Which solution will meet these requirements in the MOST operationally efficient way?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#223",
          "answers": [
            {
              "choice": "<p>A. Take a snapshot of the DB instance in us-west-2. Create a new DB instance in ap-southeast-2 from the snapshot. Reconfigure the ap-southeast-1 front-end dashboard to access the new DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an RDS read replica in ap-southeast-1 from the primary DB instance in us-west-2. Reconfigure the ap-southeast-1 front-end dashboard to access the read replica.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new DB instance in ap-southeast-1. Use AWS Database Migration Service (AWS DMS) and change data capture (CDC) to update the new DB instance in ap-southeast-1. Reconfigure the ap-southeast-1 front-end dashboard to access the new DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an RDS read replica in us-west-2, where the primary DB instance resides. Create a read replica in ap-southeast-1 from the read replica in us-west-2. Reconfigure the ap-southeast-1 front-end dashboard to access the read replica in ap-southeast-1.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 223 discussion",
      "discusstion": [
        {
          "id": 680031,
          "date": "Mon 26 Sep 2022 19:58",
          "username": "cloudsunriser",
          "content": "B is more logical. C will work but it has operational overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 659823,
          "date": "Mon 05 Sep 2022 08:52",
          "username": "mbar94",
          "content": "It's B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#224",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an Amazon ElastiCache for Redis cluster to host its online shopping website. Shoppers receive the following error when the website's application queries the cluster:<br><img src=\"https://www.examtopics.com/assets/media/exam-media/04237/0014900001.png\" class=\"in-exam-image\"><br>Which solutions will resolve this memory issues with the LEAST amount of effort? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ABC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#224",
          "answers": [
            {
              "choice": "<p>A. Reduce the TTL value for keys on the node.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Choose a larger node type.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Test different values in the parameter group for the maxmemory-policy parameter to find the ideal value to use.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the number of nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Monitor the EngineCPUUtilization Amazon CloudWatch metric. Create an AWS Lambda function to delete keys on nodes when a threshold is reached.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Increase the TTL value for keys on the node.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 224 discussion",
      "discusstion": [
        {
          "id": 749484,
          "date": "Mon 19 Dec 2022 06:17",
          "username": "khun",
          "content": "To resolve this error and to prevent clients from receiving OOM command not allowed error messages, do some combination of the following:<br><br>Set a TTL value for keys on your node.<br>Update the parameter group to use a different maxmemory-policy parameter.<br>Delete some existing keys manually to free up memory.<br>Choose a larger node type.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 680034,
          "date": "Mon 26 Sep 2022 20:01",
          "username": "cloudsunriser",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/oom-command-not-allowed-redis/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABC"
        },
        {
          "id": 680033,
          "date": "Mon 26 Sep 2022 20:01",
          "username": "cloudsunriser",
          "content": "ABC is answer. https://aws.amazon.com/premiumsupport/knowledge-center/oom-command-not-allowed-redis/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 671174,
          "date": "Sat 17 Sep 2022 03:07",
          "username": "DavidMadrid",
          "content": "Answer is BCE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659826,
          "date": "Mon 05 Sep 2022 08:58",
          "username": "mbar94",
          "content": "ABC - https://aws.amazon.com/premiumsupport/knowledge-center/oom-command-not-allowed-redis/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ABC"
        }
      ]
    },
    {
      "question_id": "#225",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Microsoft SQL Server on Amazon RDS in a Multi-AZ deployment as the database engine for its application. The company was recently acquired by another company. A database specialist must rename the database to follow a new naming standard.<br>Which combination of steps should the database specialist take to rename the database? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#225",
          "answers": [
            {
              "choice": "<p>A. Turn off automatic snapshots for the DB instance. Rename the database with the rdsadmin.dbo.rds_modify_db_name stored procedure. Turn on the automatic snapshots.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn off Multi-AZ for the DB instance. Rename the database with the rdsadmin.dbo.rds_modify_db_name stored procedure. Turn on Multi-AZ Mirroring.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Delete all existing snapshots for the DB instance. Use the rdsadmin.dbo.rds_modify_db_name stored procedure.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the application with the new database connection string.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Update the DNS record for the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 225 discussion",
      "discusstion": [
        {
          "id": 680037,
          "date": "Mon 26 Sep 2022 20:04",
          "username": "cloudsunriser",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.SQLServer.CommonDBATasks.RenamingDB. html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 668809,
          "date": "Wed 14 Sep 2022 10:55",
          "username": "SonamDhingra",
          "content": "BD is correct<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.SQLServer.CommonDBATasks.RenamingDB. html<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.SQLServer.CommonDBATasks.RenamingDB. html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 668808,
          "date": "Wed 14 Sep 2022 10:55",
          "username": "SonamDhingra",
          "content": "BD is correct<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.SQLServer.CommonDBATasks.RenamingDB. html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 659829,
          "date": "Mon 05 Sep 2022 09:00",
          "username": "mbar94",
          "content": "Agree, it's B and D. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#226",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an on-premises Microsoft SQL Server Enterprise edition database with Transparent Data Encryption (TDE) enabled. The database is 20 TB in size and includes sparse tables. The company needs to migrate the database to Amazon RDS for SQL Server during a maintenance window that is scheduled for an upcoming weekend. Data-at-rest encryption must be enabled for the target DB instance.<br>Which combination of steps should the company take to migrate the database to AWS in the MOST operationally efficient manner? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#226",
          "answers": [
            {
              "choice": "<p>A. Use AWS Database Migration Service (AWS DMS) to migrate from the on-premises source database to the RDS for SQL Server target database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Disable TDE.  Create a database backup without encryption. Copy the backup to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Restore the backup to the RDS for SQL Server DB instance. Enable TDE for the RDS for SQL Server DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an AWS Snowball Edge device. Copy the database backup to the device. Send the device to AWS. Restore the database from Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Encrypt the data with client-side encryption before transferring the data to Amazon RDS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 226 discussion",
      "discusstion": [
        {
          "id": 739206,
          "date": "Thu 08 Dec 2022 16:15",
          "username": "Sab",
          "content": "B and C are correct. But with the new release, we don't have to disable TDE. <br>https://aws.amazon.com/blogs/database/migrate-tde-enabled-sql-server-databases-to-amazon-rds-for-sql-server/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 680050,
          "date": "Mon 26 Sep 2022 20:16",
          "username": "cloudsunriser",
          "content": "A - DMS is out of question as it doesn't support sparse tables.<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.html<br><br>D - D will not work as migration is scheduled for an upcoming weekend and snowball takes time for shipping.<br><br>E - E will come into picture if using DMS and we can't use DMS.<br><br>B and C is correct. Though as per latest updates disabling TDE is no longer required.<br><br>https://aws.amazon.com/blogs/database/migrate-tde-enabled-sql-server-databases-to-amazon-rds-for-sql-server/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 675614,
          "date": "Thu 22 Sep 2022 02:19",
          "username": "hello_aws",
          "content": "DMS doesn't support sparse tables.<br>https://aws.amazon.com/blogs/database/migrate-tde-enabled-sql-server-databases-to-amazon-rds-for-sql-server/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 674359,
          "date": "Tue 20 Sep 2022 18:55",
          "username": "yxyj",
          "content": "B & C, TDE needs certificate created and installed.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 660587,
          "date": "Tue 06 Sep 2022 00:17",
          "username": "zoomac",
          "content": "A is wrong because Limitations on using SQL Server as a source for AWS DMS: The SQL Server endpoint doesn't support the use of sparse tables.<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659832,
          "date": "Mon 05 Sep 2022 09:08",
          "username": "mbar94",
          "content": "A and E, any thoughts?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        }
      ]
    },
    {
      "question_id": "#227",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A database specialist wants to ensure that an Amazon Aurora DB cluster is always automatically upgraded to the most recent minor version available. Noticing that there is a new minor version available, the database specialist has issues an AWS CLI command to enable automatic minor version updates. The command runs successfully, but checking the Aurora DB cluster indicates that no update to the Aurora version has been made.<br>What might account for this? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#227",
          "answers": [
            {
              "choice": "<p>A. The new minor version has not yet been designated as preferred and requires a manual upgrade.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configuring automatic upgrades using the AWS CLI is not supported. This must be enabled expressly using the AWS Management Console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Applying minor version upgrades requires sufficient free space.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The AWS CLI command did not include an apply-immediately parameter.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Aurora has detected a breaking change in the new minor version and has automatically rejected the upgrade.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 227 discussion",
      "discusstion": [
        {
          "id": 711288,
          "date": "Fri 04 Nov 2022 18:38",
          "username": "hogtrough",
          "content": "Key is \\\"automatically upgraded.\\\"<br><br>\\\"When Amazon RDS designates a minor engine version as the preferred minor engine version, each database that meets both of the following conditions is upgraded to the minor engine version automatically\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 698536,
          "date": "Wed 19 Oct 2022 00:37",
          "username": "awsjjj",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 689907,
          "date": "Sun 09 Oct 2022 06:29",
          "username": "Changwha",
          "content": "Cx : The command runs successfully<br>Call the modify-db-instance Amazon CLI command. Specify the name of your DB instance for the --db-instance-identifier option and true for the --auto-minor-version-upgrade option. Optionally, specify the --apply-immediately option to immediately enable this setting for your DB instance. Run a separate modify-db-instance command for each DB instance in the cluster.<br>https://docs.amazonaws.cn/en_us/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.Patching.html#AuroraMySQL.Updates.AMVU",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 689906,
          "date": "Sun 09 Oct 2022 06:23",
          "username": "Changwha",
          "content": "Cx : The command runs successfully",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 659843,
          "date": "Mon 05 Sep 2022 09:14",
          "username": "mbar94",
          "content": "Agree, CD",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        }
      ]
    },
    {
      "question_id": "#228",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A security team is conducting an audit for a financial company. The security team discovers that the database credentials of an Amazon RDS for MySQL DB instance are hardcoded in the source code. The source code is stored in a shared location for automatic deployment and is exposed to all users who can access the location.<br>A database specialist must use encryption to ensure that the credentials are not visible in the source code.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#228",
          "answers": [
            {
              "choice": "<p>A. Use an AWS Key Management Service (AWS KMS) key to encrypt the most recent database backup. Restore the backup as a new database to activate encryption.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the source code to access the credentials in an AWS Systems Manager Parameter Store secure string parameter that is encrypted by AWS Key Management Service (AWS KMS). Access the code with calls to Systems Manager.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the credentials in an AWS Systems Manager Parameter Store secure string parameter that is encrypted by AWS Key Management Service (AWS KMS). Access the credentials with calls to Systems Manager.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an AWS Key Management Service (AWS KMS) key to encrypt the DB instance at rest. Activate RDS encryption in transit by using SSL certificates.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 228 discussion",
      "discusstion": [
        {
          "id": 680051,
          "date": "Mon 26 Sep 2022 20:23",
          "username": "cloudsunriser",
          "content": "only creds in system manager secure parameter.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 659844,
          "date": "Mon 05 Sep 2022 09:16",
          "username": "mbar94",
          "content": "It's C, only credentials in System Manager Store.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#229",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A gaming company is evaluating Amazon ElastiCache as a solution to manage player leaderboards. Millions of players around the world will complete in annual tournaments. The company wants to implement an architecture that is highly available. The company also wants to ensure that maintenance activities have minimal impact on the availability of the gaming platform.<br>Which combination of steps should the company take to meet these requirements? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#229",
          "answers": [
            {
              "choice": "<p>A. Deploy an ElastiCache for Redis cluster with read replicas and Multi-AZ enabled.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an ElastiCache for Memcached global datastore.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy a single-node ElastiCache for Redis cluster with automatic backups enabled. In the event of a failure, create a new cluster and restore data from the most recent backup.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the default maintenance window to apply any required system changes and mandatory updates as soon as they are available.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Choose a preferred maintenance window at the time of lowest usage to apply any required changes and mandatory updates.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 229 discussion",
      "discusstion": [
        {
          "id": 659847,
          "date": "Mon 05 Sep 2022 09:18",
          "username": "mbar94",
          "content": "It's AE - https://aws.amazon.com/blogs/database/configuring-amazon-elasticache-for-redis-for-higher-availability/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 680052,
          "date": "Mon 26 Sep 2022 20:25",
          "username": "cloudsunriserRBSK",
          "content": "AE is correctWhy not BE? What prompted you to choose Redis instead of MemcacheD?",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 747741,
          "date": "Sat 17 Dec 2022 04:29",
          "username": "RBSK",
          "content": "Why not BE? What prompted you to choose Redis instead of MemcacheD?",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#230",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's database specialist implements an AWS Database Migration Service (AWS DMS) task for change data capture (CDC) to replicate data from an on- premises Oracle database to Amazon S3. When usage of the company's application increases, the database specialist notices multiple hours of latency with the<br>CDC. <br>Which solutions will reduce this latency? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#230",
          "answers": [
            {
              "choice": "<p>A. Configure the DMS task to run in full large binary object (LOB) mode.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the DMS task to run in limited large binary object (LOB) mode.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a Multi-AZ replication instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Load tables in parallel by creating multiple replication instances for sets of tables that participate in common transactions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Replicate tables in parallel by creating multiple DMS tasks for sets of tables that do not participate in common transactions.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 230 discussion",
      "discusstion": [
        {
          "id": 761984,
          "date": "Fri 30 Dec 2022 14:28",
          "username": "lollyj",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/dms-high-source-latency/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 680058,
          "date": "Mon 26 Sep 2022 20:30",
          "username": "cloudsunriser",
          "content": "A is incorrect. C is not applicable. D is incorrect.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 668818,
          "date": "Wed 14 Sep 2022 11:08",
          "username": "SonamDhingra",
          "content": "BE is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 659850,
          "date": "Mon 05 Sep 2022 09:21",
          "username": "mbar94",
          "content": "BE would help, any thoughts?",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        }
      ]
    },
    {
      "question_id": "#231",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company is running AWS Database Migration Service (AWS DMS) to replicate an on-premises Microsoft SQL Server database to Amazon RDS for SQL Server. The company has set up an AWS Direct Connect connection from its on-premises data center to AWS. During the migration, the company's security team receives an alarm that is related to the migration. The security team mandates that the DMS replication instance must not be accessible from public<br>IP addresses.<br>What should a database specialist do to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#231",
          "answers": [
            {
              "choice": "<p>A. Set up a VPN connection to encrypt the traffic over the Direct Connect connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the DMS replication instance by disabling the publicly accessible option.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Delete the DMS replication instance. Recreate the DMS replication instance with the publicly accessible option disabled.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new replication VPC subnet group with private subnets. Modify the DMS replication instance by selecting the newly created VPC subnet group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 231 discussion",
      "discusstion": [
        {
          "id": 760080,
          "date": "Wed 28 Dec 2022 17:27",
          "username": "ftrimmer",
          "content": "Answer is D:Instead of recreating the replication instance, you can change the subnets that are in the subnet group that is associated with the replication instance to private subnets. A private subnet is a subnet that isn't routed to an internet gateway. Instances in a private subnet can't communicate with a public IP address, even if they have a public IP address. For more information, see Setting up a network for a replication instance. https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.VPC. html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 759811,
          "date": "Wed 28 Dec 2022 13:35",
          "username": "tucobbad",
          "content": "D as it is indeed possible to change subnet group to private according to https://aws.amazon.com/premiumsupport/knowledge-center/dms-disable-public-access<br>Actually, C and D are correct, but D could be easier",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 724621,
          "date": "Tue 22 Nov 2022 20:50",
          "username": "Sabtucobbad",
          "content": "C. <br>D is wrong . We cannot modify DMS instance to assign a new subnet group with private subnets .https://aws.amazon.com/premiumsupport/knowledge-center/dms-disable-public-access/ says:<br>\\\"Instead of recreating the replication instance, you can change the subnets that are in the subnet group that is associated with the replication instance to private subnets. A private subnet is a subnet that isn't routed to an internet gateway. Instances in a private subnet can't communicate with a public IP address, even if they have a public IP address.\\\"",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 759808,
          "date": "Wed 28 Dec 2022 13:33",
          "username": "tucobbad",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/dms-disable-public-access/ says:<br>\\\"Instead of recreating the replication instance, you can change the subnets that are in the subnet group that is associated with the replication instance to private subnets. A private subnet is a subnet that isn't routed to an internet gateway. Instances in a private subnet can't communicate with a public IP address, even if they have a public IP address.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695595,
          "date": "Sat 15 Oct 2022 20:14",
          "username": "awsjjj",
          "content": "C will ensure there will be no public access",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 689929,
          "date": "Sun 09 Oct 2022 08:01",
          "username": "Changwha",
          "content": "Dx : Not create VPC subnet. Change the subnets that are in the subnet group that is associated with the replication instance to private subnets.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 680894,
          "date": "Tue 27 Sep 2022 17:07",
          "username": "cloudsunriser",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/dms-disable-public-access/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 680888,
          "date": "Tue 27 Sep 2022 16:54",
          "username": "JeanGat",
          "content": "From link provided, obviously C or D would work.I'd vote D, as it would be an easier fix.Kind of a dumb question, as there are two legit answers.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 680219,
          "date": "Tue 27 Sep 2022 00:41",
          "username": "Stteve",
          "content": "D is most easy way to fix the issue.<br>https://aws.amazon.com/premiumsupport/knowledge-center/dms-disable-public-access/<br><br>To disable public access to your replication instance, delete the replication instance and then recreate it. Before you can delete a replication instance, you must delete all the tasks that use the replication instance.<br><br>Instead of recreating the replication instance, you can change the subnets that are in the subnet group that is associated with the replication instance to private subnets.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 668821,
          "date": "Wed 14 Sep 2022 11:12",
          "username": "SonamDhingra",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 664560,
          "date": "Fri 09 Sep 2022 14:35",
          "username": "gairaj",
          "content": "delete and create again with new publicly accessible option. https://aws.amazon.com/premiumsupport/knowledge-center/dms-disable-public-access/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 664154,
          "date": "Fri 09 Sep 2022 04:34",
          "username": "hcltechaws",
          "content": "After you create the replication instance, you can't modify the Publicly accessible option.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 662204,
          "date": "Wed 07 Sep 2022 09:55",
          "username": "mbar94",
          "content": "It's B - https://aws.amazon.com/premiumsupport/knowledge-center/dms-disable-public-access/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#232",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an Amazon Aurora MySQL database with Performance Insights enabled. A database specialist is checking Performance Insights and observes an alert message that starts with the following phrase: `Performance Insights is unable to collect SQL Digest statistics on new queries`=C2=A6`<br>Which action will resolve this alert message?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#232",
          "answers": [
            {
              "choice": "<p>A. Truncate the events_statements_summary_by_digest table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change the AWS Key Management Service (AWS KMS) key that is used to enable Performance Insights.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set the value for the performance_schema parameter in the parameter group to 1.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Disable and reenable Performance Insights to be effective in the next maintenance window.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 232 discussion",
      "discusstion": [
        {
          "id": 712635,
          "date": "Sun 06 Nov 2022 21:41",
          "username": "Goram113",
          "content": "In this situation, MariaDB and MySQL don't track SQL queries. To address this issue, Performance Insights automatically truncates the digest table when both of the following conditions are met:<br><br>The table is full.<br><br>Performance Insights manages the Performance Schema automatically.<br><br>For automatic management, the performance_schema parameter must be set to 0 and the Source must not be set to user. If Performance Insights isn't managing the Performance Schema automatically, see Turning on the Performance Schema for Performance Insights on Amazon RDS for MariaDB or MySQL.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 680895,
          "date": "Tue 27 Sep 2022 17:09",
          "username": "cloudsunriser",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.UsingDashboard.AnalyzeDBLoad.AdditionalMetrics.MySQL.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 665409,
          "date": "Sat 10 Sep 2022 14:30",
          "username": "SonamDhingra",
          "content": "A is correct<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.UsingDashboard.AnalyzeDBLoad.AdditionalMetrics.MySQL.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 662205,
          "date": "Wed 07 Sep 2022 09:56",
          "username": "mbar94",
          "content": "Agree, it's A. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#233",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A bike rental company operates an application to track its bikes. The application receives location and condition data from bike sensors. The application also receives rental transaction data from the associated mobile app.<br>The application uses Amazon DynamoDB as its database layer. The company has configured DynamoDB with provisioned capacity set to 20% above the expected peak load of the application. On an average day, DynamoDB used 22 billion read capacity units (RCUs) and 60 billion write capacity units (WCUs). The application is running well. Usage changes smoothly over the course of the day and is generally shaped like a bell curve. The timing and magnitude of peaks vary based on the weather and season, but the general shape is consistent.<br>Which solution will provide the MOST cost optimization of the DynamoDB database layer?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#233",
          "answers": [
            {
              "choice": "<p>A. Change the DynamoDB tables to use on-demand capacity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Auto Scaling and configure time-based scaling.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable DynamoDB capacity-based auto scaling.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable DynamoDB Accelerator (DAX).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 233 discussion",
      "discusstion": [
        {
          "id": 708811,
          "date": "Tue 01 Nov 2022 04:12",
          "username": "rags1482",
          "content": "Answer C Capacity based or target scaling<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 668824,
          "date": "Wed 14 Sep 2022 11:13",
          "username": "SonamDhingra",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 662206,
          "date": "Wed 07 Sep 2022 09:57",
          "username": "mbar94",
          "content": "Vote for C. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#234",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a quarterly customer survey. The survey uses an Amazon EC2 instance that is hosted in a public subnet to host a customer survey website. The company uses an Amazon RDS DB instance that is hosted in a private subnet in the same VPC to store the survey results.<br>The company takes a snapshot of the DB instance after a survey is complete, deletes the DB instance, and then restores the DB instance from the snapshot when the survey needs to be conducted again. A database specialist discovers that the customer survey website times out when it attempts to establish a connection to the restored DB instance.<br>What is the root cause of this problem?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#234",
          "answers": [
            {
              "choice": "<p>A. The VPC peering connection has not been configured properly for the EC2 instance to communicate with the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The route table of the private subnet that hosts the DB instance does not have a NAT gateway configured for communication with the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The public subnet that hosts the EC2 instance does not have an internet gateway configured for communication with the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The wrong security group was associated with the new DB instance when it was restored from the snapshot.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 234 discussion",
      "discusstion": [
        {
          "id": 662208,
          "date": "Wed 07 Sep 2022 09:59",
          "username": "mbar94",
          "content": "Agree with D. ",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 668827,
          "date": "Wed 14 Sep 2022 11:14",
          "username": "SonamDhingra",
          "content": "D is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#235",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to improve its ecommerce website on AWS. A database specialist decides to add Amazon ElastiCache for Redis in the implementation stack to ease the workload off the database and shorten the website response times. The database specialist must also ensure the ecommerce website is highly available within the company's AWS Region.<br>How should the database specialist deploy ElastiCache to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#235",
          "answers": [
            {
              "choice": "<p>A. Launch an ElastiCache for Redis cluster using the AWS CLI with the -cluster-enabled switch.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Launch an ElastiCache for Redis cluster and select read replicas in different Availability Zones.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch two ElastiCache for Redis clusters in two different Availability Zones. Configure Redis streams to replicate the cache from the primary cluster to another.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch an ElastiCache cluster in the primary Availability Zone and restore the cluster's snapshot to a different Availability Zone during disaster recovery.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 235 discussion",
      "discusstion": [
        {
          "id": 733951,
          "date": "Fri 02 Dec 2022 18:45",
          "username": "examineme",
          "content": "B look great",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 689946,
          "date": "Sun 09 Oct 2022 08:37",
          "username": "Changwha",
          "content": "You can enable Multi-AZ only on Redis (cluster mode disabled) clusters that have at least one available read replica. Clusters without read replicas do not provide high availability or fault tolerance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 686214,
          "date": "Tue 04 Oct 2022 15:30",
          "username": "Zimboguru",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 662268,
          "date": "Wed 07 Sep 2022 10:59",
          "username": "mbar94",
          "content": "It's B - https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#236",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online gaming company is using an Amazon DynamoDB table in on-demand mode to store game scores. After an intensive advertisement campaign in South<br>America, the average number of concurrent users rapidly increases from 100,000 to 500,000 in less than 10 minutes every day around 5 PM.<br>The on-call software reliability engineer has observed that the application logs contain a high number of DynamoDB throttling exceptions caused by game score insertions around 5 PM. Customer service has also reported that several users are complaining about their scores not being registered.<br>How should the database administrator remediate this issue at the lowest cost?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#236",
          "answers": [
            {
              "choice": "<p>A. Enable auto scaling and set the target usage rate to 90%.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Switch the table to provisioned mode and enable auto scaling.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Switch the table to provisioned mode and set the throughput to the peak value.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a DynamoDB Accelerator cluster and use it to access the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 236 discussion",
      "discusstion": [
        {
          "id": 748539,
          "date": "Sun 18 Dec 2022 02:46",
          "username": "RBSK",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/dynamodb-table-throttled/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 662276,
          "date": "Wed 07 Sep 2022 11:06",
          "username": "mbar94RBSK",
          "content": "B is fine, A is too little buffer with 90% target utilization rate.Q claims, lowest cost. Opt.A is lower than B.  Hence unsure of B as a right Ans.",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 748542,
          "date": "Sun 18 Dec 2022 02:52",
          "username": "RBSK",
          "content": "Q claims, lowest cost. Opt.A is lower than B.  Hence unsure of B as a right Ans.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#237",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An IT company wants to reduce its database operation costs in its development environment. The company's workflow creates an Amazon Aurora MySQL DB cluster for each development group. The DB clusters are used for only 8 hours a day. The DB clusters can be deleted at the end of a development cycle, which lasts 2 weeks.<br>Which solution will meet these requirements MOST cost-effectively?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#237",
          "answers": [
            {
              "choice": "<p>A. Use AWS CloudFormation templates. Deploy a stack with a DB cluster for each development group. Delete the stack at the end of each development cycle.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the Aurora cloning feature. Deploy a single development and test Aurora DB instance. Create clone instances for the development groups. Delete the clones at the end of each development cycle.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Aurora Replicas. From the primary writer instance, create read replicas for each development group. Promote each read replica to a standalone DB cluster Delete the standalone DB cluster at the end of each development cycle.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Aurora Serverless. Restore a current Aurora snapshot to an Aurora Serverless cluster for each development group. Select the option to pause the compute capacity on the cluster after a specified amount of time with no activity. Delete the Aurora Serverless cluster at the end of each development cycle.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 237 discussion",
      "discusstion": [
        {
          "id": 749515,
          "date": "Mon 19 Dec 2022 07:08",
          "username": "khun",
          "content": "Answer is D.  Looking for Cost Effective option... Go with Aurora serverless with pause option.<br>Pause after inactivity =E2=80=93 The amount of time with no database traffic to scale to zero processing capacity. When database traffic resumes, Aurora automatically resumes processing capacity and scales to handle the traffic.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 713593,
          "date": "Tue 08 Nov 2022 09:15",
          "username": "snehilsrcs",
          "content": "It will be B, read question 59 discussion for clarification.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 713591,
          "date": "Tue 08 Nov 2022 09:15",
          "username": "snehilsrcs",
          "content": "single dev & test instanace<br>-> Aurora clone<br>-> delete clones at end of dev cycle<br><br>Amazon Aurora now allows you to create clones between Aurora Serverless v1 and provisioned Aurora DB clusters to enable quick sharing of data.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 668829,
          "date": "Wed 14 Sep 2022 11:17",
          "username": "SonamDhingra",
          "content": "D is correct, the question has been repeated in the set",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 662279,
          "date": "Wed 07 Sep 2022 11:07",
          "username": "mbar94",
          "content": "It's D - Aurora Serverless with option to pause.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#238",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A gaming company uses Amazon Aurora Serverless for one of its internal applications. The company's developers use Amazon RDS Data API to work with the<br>Aurora Serverless DB cluster. After a recent security review, the company is mandating security enhancements. A database specialist must ensure that access to<br>RDS Data API is private and never passes through the public internet.<br>What should the database specialist do to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#238",
          "answers": [
            {
              "choice": "<p>A. Modify the Aurora Serverless cluster by selecting a VPC with private subnets.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the Aurora Serverless cluster by unchecking the publicly accessible option.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an interface VPC endpoint that uses AWS PrivateLink for RDS Data API.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a gateway VPC endpoint for RDS Data API.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 238 discussion",
      "discusstion": [
        {
          "id": 662283,
          "date": "Wed 07 Sep 2022 11:09",
          "username": "mbar94",
          "content": "C can be confirmed - https://aws.amazon.com/about-aws/whats-new/2020/02/amazon-rds-data-api-now-supports-aws-privatelink/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 749517,
          "date": "Mon 19 Dec 2022 07:10",
          "username": "khun",
          "content": "C. <br>You can now use AWS PrivateLink to privately access Amazon RDS Data API for Aurora Serverless from your Amazon Virtual Private Cloud (Amazon VPC) without using public IPs, and without requiring the traffic to traverse across the Internet.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 668830,
          "date": "Wed 14 Sep 2022 11:17",
          "username": "SonamDhingra",
          "content": "C is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#239",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A startup company in the travel industry wants to create an application that includes a personal travel assistant to display information for nearby airports based on user location. The application will use Amazon DynamoDB and must be able to access and display attributes such as airline names, arrival times, and flight numbers. However, the application must not be able to access or display pilot names or passenger counts.<br>Which solution will meet these requirements MOST cost-effectively?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#239",
          "answers": [
            {
              "choice": "<p>A. Use a proxy tier between the application and DynamoDB to regulate access to specific tables, items, and attributes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use IAM policies with a combination of IAM conditions and actions to implement fine-grained access control.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use DynamoDB resource policies to regulate access to specific tables, items, and attributes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an AWS Lambda function to extract only allowed attributes from tables based on user profiles.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 239 discussion",
      "discusstion": [
        {
          "id": 662285,
          "date": "Wed 07 Sep 2022 11:11",
          "username": "mbar94",
          "content": "It's B - https://aws.amazon.com/blogs/aws/fine-grained-access-control-for-amazon-dynamodb/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 668831,
          "date": "Wed 14 Sep 2022 11:18",
          "username": "SonamDhingra",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#240",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large IT hardware manufacturing company wants to deploy a MySQL database solution in the AWS Cloud. The solution should quickly create copies of the company's production databases for test purposes. The solution must deploy the test databases in minutes, and the test data should match the latest production data as closely as possible. Developers must also be able to make changes in the test database and delete the instances afterward.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#240",
          "answers": [
            {
              "choice": "<p>A. Leverage Amazon RDS for MySQL with write-enabled replicas running on Amazon EC2. Create the test copies using a mysqidump backup from the RDS for MySQL DB instances and importing them into the new EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Leverage Amazon Aurora MySQL. Use database cloning to create multiple test copies of the production DB clusters.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Leverage Amazon Aurora MySQL. Restore previous production DB instance snapshots into new test copies of Aurora MySQL DB clusters to allow them to make changes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Leverage Amazon RDS for MySQL. Use database cloning to create multiple developer copies of the production DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 240 discussion",
      "discusstion": [
        {
          "id": 668832,
          "date": "Wed 14 Sep 2022 11:18",
          "username": "SonamDhingra",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 662288,
          "date": "Wed 07 Sep 2022 11:13",
          "username": "mbar94",
          "content": "Quick and easy deploy - Aurora with cloning feature. It's B. ",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#241",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's application development team wants to share an automated snapshot of its Amazon RDS database with another team. The database is encrypted with a custom AWS Key Management Service (AWS KMS) key under the \"WeShare\" AWS account. The application development team needs to share the DB snapshot under the \"WeReceive\" AWS account.<br>Which combination of actions must the application development team take to meet these requirements? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#241",
          "answers": [
            {
              "choice": "<p>A. Add access from the \"WeReceive\" account to the custom AWS KMS key policy of the sharing team.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Make a copy of the DB snapshot, and set the encryption option to disable.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Share the DB snapshot by setting the DB snapshot visibility option to public.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Make a copy of the DB snapshot, and set the encryption option to enable.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Share the DB snapshot by using the default AWS KMS encryption key.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 241 discussion",
      "discusstion": [
        {
          "id": 732770,
          "date": "Thu 01 Dec 2022 16:30",
          "username": "examineme",
          "content": "A & D is the best choice of answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 708848,
          "date": "Tue 01 Nov 2022 05:53",
          "username": "rags1482rags1482",
          "content": "Answer AC. <br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-snapshots-share-account/<br><br>Open the Amazon RDS console.<br>Choose Snapshots from the left navigation pane.<br>Choose the DB snapshot that you want to copy.<br>Choose Actions, and then choose Share Snapshot.<br>Choose the DB snapshot visibility:<br>Public allows all AWS accounts to restore a DB instance from your manual DB snapshot.<br>Private allows only AWS accounts that you specify to restore a DB instance from your manual DB snapshot.<br>In the AWS Account ID field, enter the ID of the AWS account that you want to permit to restore a DB instance from your manual DB snapshot. Then, choose Add.May be A & D is correct because we need to copy automated snapshot to share with other account",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 708850,
          "date": "Tue 01 Nov 2022 05:56",
          "username": "rags1482",
          "content": "May be A & D is correct because we need to copy automated snapshot to share with other account",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 662291,
          "date": "Wed 07 Sep 2022 11:16",
          "username": "mbar94RBSK",
          "content": "It's A&D.  https://aws.amazon.com/premiumsupport/knowledge-center/rds-snapshots-share-account/URL mentioned above, in my opinion points to Ans A&E.  Where do we have ref for D??",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 748724,
          "date": "Sun 18 Dec 2022 10:57",
          "username": "RBSK",
          "content": "URL mentioned above, in my opinion points to Ans A&E.  Where do we have ref for D??",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#242",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon Redshift as its data warehouse solution. The Redshift cluster handles the following types of workloads:<br>-Real-time inserts through Amazon Kinesis Data Firehose<br>-Bulk inserts through COPY commands from Amazon S3<br>-Analytics through SQL queries<br>Recently, the cluster has started to experience performance issues.<br>Which combination of actions should a database specialist take to improve the cluster's performance? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#242",
          "answers": [
            {
              "choice": "<p>A. Modify the Kinesis Data Firehose delivery stream to stream the data to Amazon S3 with a high buffer size and to load the data into Amazon Redshift by using the COPY command.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Stream real-time data into Redshift temporary tables before loading the data into permanent tables.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. For bulk inserts, split input files on Amazon S3 into multiple files to match the number of slices on Amazon Redshift. Then use the COPY command to load data into Amazon Redshift.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. For bulk inserts, use the parallel parameter in the COPY command to enable multi-threading.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Optimize analytics SQL queries to use sort keys.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Avoid using temporary tables in analytics SQL queries.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 242 discussion",
      "discusstion": [
        {
          "id": 713620,
          "date": "Tue 08 Nov 2022 10:04",
          "username": "snehilsrcs",
          "content": "https://aws.amazon.com/blogs/big-data/top-10-performance-tuning-techniques-for-amazon-redshift/<br><br>Tip #6: Improving the efficiency of temporary tables<br><br>Tip #9: Maintaining efficient data loads<br>Amazon Redshift best practices suggest using the COPY command to perform data loads of file-based data.<br><br>Tip #3: Sort key recommendation<br>Sorting a table on an appropriate sort key can accelerate query performance, especially queries with range-restricted predicates, by requiring fewer table blocks to be read from disk.<br><br>Hence BCE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 695642,
          "date": "Sat 15 Oct 2022 21:13",
          "username": "awsjjj",
          "content": "https://aws.amazon.com/blogs/big-data/top-10-performance-tuning-techniques-for-amazon-redshift/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 692175,
          "date": "Tue 11 Oct 2022 16:11",
          "username": "Changwha",
          "content": "Ax:Kinesis Data Firehose is a fully managed service that automatically scales to match the throughput of your data and requires no ongoing administration.<br>B: The proper use of temporary tables can significantly improve performance of some ETL operations.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCE"
        },
        {
          "id": 681031,
          "date": "Tue 27 Sep 2022 19:54",
          "username": "JeanGat",
          "content": "C for sure - from Tip #9 here.<br>https://aws.amazon.com/blogs/big-data/top-10-performance-tuning-techniques-for-amazon-redshift/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 670461,
          "date": "Fri 16 Sep 2022 06:36",
          "username": "zoomac",
          "content": "A is wrong because \\\"Note that in circumstances where data delivery to the destination is falling behind data ingestion into the delivery stream, Kinesis Data Firehose raises the buffer size automatically to catch up and make sure that all data is delivered to the destination.\\\"<br>Reference: https://aws.amazon.com/kinesis/data-firehose/faqs/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 668839,
          "date": "Wed 14 Sep 2022 11:35",
          "username": "SonamDhingra",
          "content": "ACE is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 662296,
          "date": "Wed 07 Sep 2022 11:19",
          "username": "mbar94",
          "content": "It's ACE. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACE"
        }
      ]
    },
    {
      "question_id": "#243",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An information management services company is storing JSON documents on premises. The company is using a MongoDB 3.6 database but wants to migrate to<br>AWS. The solution must be compatible, scalable, and fully managed. The solution also must result in as little downtime as possible during the migration.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#243",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Database Migration Service (AWS DMS) replication instance, a source endpoint for MongoDB, and a target endpoint of Amazon DocumentDB (with MongoDB compatibility).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Database Migration Service (AWS DMS) replication instance, a source endpoint for MongoDB, and a target endpoint of a MongoDB image that is hosted on Amazon EC2<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the mongodump and mongorestore tools to migrate the data from the source MongoDB deployment to Amazon DocumentDB (with MongoDB compatibility).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the mongodump and mongorestore tools to migrate the data from the source MongoDB deployment to a MongoDB image that is hosted on Amazon EC2.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 243 discussion",
      "discusstion": [
        {
          "id": 732766,
          "date": "Thu 01 Dec 2022 16:25",
          "username": "examineme",
          "content": "A is the Answer<br><br>https://docs.aws.amazon.com/documentdb/latest/developerguide/docdb-migration.html#docdb-migration-approaches",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 681040,
          "date": "Tue 27 Sep 2022 20:01",
          "username": "JeanGat",
          "content": "DMS is the slowest, but has the least downtime.From link: https://docs.aws.amazon.com/documentdb/latest/developerguide/docdb-migration.html#docdb-migration-approaches",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 668840,
          "date": "Wed 14 Sep 2022 11:36",
          "username": "SonamDhingra",
          "content": "A is correct. DMS for no downtime",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 662299,
          "date": "Wed 07 Sep 2022 11:24",
          "username": "mbar94",
          "content": "According to the link, little downtime is achieved with DMS approach, option A.  https://docs.aws.amazon.com/documentdb/latest/developerguide/docdb-migration.html#docdb-migration-approaches",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#244",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores critical data for a department in Amazon RDS for MySQL DB instances. The department was closed for 3 weeks and notified a database specialist that access to the RDS DB instances should not be granted to anyone during this time. To meet this requirement, the database specialist stopped all the<br>DB instances used by the department but did not select the option to create a snapshot. Before the 3 weeks expired, the database specialist discovered that users could connect to the database successfully.<br>What could be the reason for this?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#244",
          "answers": [
            {
              "choice": "<p>A. When stopping the DB instance, the option to create a snapshot should have been selected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. When stopping the DB instance, the duration for stopping the DB instance should have been selected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Stopped DB instances will automatically restart if the number of attempted connections exceeds the threshold set.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Stopped DB instances will automatically restart if the instance is not manually started after 7 days.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 244 discussion",
      "discusstion": [
        {
          "id": 744464,
          "date": "Tue 13 Dec 2022 22:02",
          "username": "Mardoyyy",
          "content": "it cost me almost $2000 because of this, it was by SQL Server enterprise which automatically restart for weeks",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732762,
          "date": "Thu 01 Dec 2022 16:22",
          "username": "examineme",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/rds-stop-seven-days/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 668841,
          "date": "Wed 14 Sep 2022 11:37",
          "username": "SonamDhingra",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 662300,
          "date": "Wed 07 Sep 2022 11:26",
          "username": "mbar94",
          "content": "It's D - https://aws.amazon.com/premiumsupport/knowledge-center/rds-stop-seven-days/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#245",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an on-premises Microsoft SQL Server database to host relational and JSON data and to run daily ETL and advanced analytics. The company wants to migrate the database to the AWS Cloud. Database specialist must choose one or more AWS services to run the company's workloads.<br>Which solution will meet these requirements in the MOST operationally efficient manner?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#245",
          "answers": [
            {
              "choice": "<p>A. Use Amazon Redshift for relational data. Use Amazon DynamoDB for JSON data<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Redshift for relational data and JSON data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon RDS for relational data. Use Amazon Neptune for JSON data<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Redshift for relational data. Use Amazon S3 for JSON data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 245 discussion",
      "discusstion": [
        {
          "id": 678349,
          "date": "Sun 25 Sep 2022 04:25",
          "username": "Usman0506",
          "content": "https://docs.aws.amazon.com/redshift/latest/dg/super-overview.html. It's B. ",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 752859,
          "date": "Thu 22 Dec 2022 00:25",
          "username": "khun",
          "content": "B. <br>By using semistructured data support in Amazon Redshift, you can ingest and store semistructured data in your Amazon Redshift data warehouses. Using the SUPER data type and PartiQL language, Amazon Redshift expands data warehouse capability to integrate with both SQL and NoSQL data sources. This way, Amazon Redshift enables efficient analytics on relational and semistructured stored data such as JSON.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 695652,
          "date": "Sat 15 Oct 2022 21:25",
          "username": "awsjjjawsjjj",
          "content": "https://docs.aws.amazon.com/redshift/latest/dg/super-overview.htm\\\" to run daily ETL and advanced analytics\\\" is a keyword here",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 695684,
          "date": "Sat 15 Oct 2022 22:01",
          "username": "awsjjj",
          "content": "\\\" to run daily ETL and advanced analytics\\\" is a keyword here",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 686497,
          "date": "Wed 05 Oct 2022 02:08",
          "username": "Zimboguru",
          "content": "B is correct I would say. I wouldn't use DynamoDB for advanced analytics, so that takes out A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 668843,
          "date": "Wed 14 Sep 2022 11:38",
          "username": "SonamDhingra",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 662337,
          "date": "Wed 07 Sep 2022 12:20",
          "username": "mbar94",
          "content": "ETL and advanced analytics - Redshift, JSON Data for sure DynamoDB.  It's A. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#246",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company plans to migrate a MySQL-based application from an on-premises environment to AWS. The application performs database joins across several tables and uses indexes for faster query response times. The company needs the database to be highly available with automatic failover.<br>Which solution on AWS will meet these requirements with the LEAST operational overhead?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#246",
          "answers": [
            {
              "choice": "<p>A. Deploy an Amazon RDS DB instance with a read replica.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an Amazon RDS Multi-AZ DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy Amazon DynamoDB global tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy multiple Amazon RDS DB instances. Use Amazon Route 53 DNS with failover health checks configured.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 246 discussion",
      "discusstion": [
        {
          "id": 754345,
          "date": "Fri 23 Dec 2022 16:56",
          "username": "Don2021",
          "content": "B: its MySQL, multiple joins, failover",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 675650,
          "date": "Thu 22 Sep 2022 03:30",
          "username": "supratip",
          "content": "High availabilityMulti AZ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 662339,
          "date": "Wed 07 Sep 2022 12:21",
          "username": "mbar94",
          "content": "High availabilityMulti AZ",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#247",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A social media company is using Amazon DynamoDB to store user profile data and user activity data. Developers are reading and writing the data, causing the size of the tables to grow significantly. Developers have started to face performance bottlenecks with the tables.<br>Which solution should a database specialist recommend to read items the FASTEST without consuming all the provisioned throughput for the tables?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#247",
          "answers": [
            {
              "choice": "<p>A. Use the Scan API operation in parallel with many workers to read all the items. Use the Query API operation to read multiple items that have a specific partition key and sort key. Use the GetItem API operation to read a single item.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the Scan API operation with a filter expression that allows multiple items to be read. Use the Query API operation to read multiple items that have a specific partition key and sort key. Use the GetItem API operation to read a single item.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the Scan API operation with a filter expression that allows multiple items to be read. Use the Query API operation to read a single item that has a specific primary key. Use the BatchGetItem API operation to read multiple items.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the Scan API operation in parallel with many workers to read all the items. Use the Query API operation to read a single item that has a specific primary key Use the BatchGetItem API operation to read multiple items.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 247 discussion",
      "discusstion": [
        {
          "id": 720133,
          "date": "Thu 17 Nov 2022 02:56",
          "username": "saikirankshatriya",
          "content": "Option should be A.  As filter will still bring all the associated records which doesnt help the use case instead use the parallelscan which scan operation can logically divide the table into multiple segments.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 686499,
          "date": "Wed 05 Oct 2022 02:22",
          "username": "Zimboguru",
          "content": "Why not A<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan<br>> The larger the table or index being scanned, the more time the Scan takes to complete. In addition, a sequential Scan might not always be able to fully use the provisioned read throughput capacity: Even though DynamoDB distributes a large table's data across multiple physical partitions, a Scan operation can only read one partition at a time. For this reason, the throughput of a Scan is constrained by the maximum throughput of a single partition.<br><br>To address these issues, the Scan operation can logically divide a table or secondary index into multiple segments, with multiple application workers scanning the segments in parallel.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 681051,
          "date": "Tue 27 Sep 2022 20:12",
          "username": "JeanGat",
          "content": "B. Comparing to C - which has BatchGetItem as the last step.This will do up to 100 GetItem requests. <br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.ReadData.html<br><br>Definitely not A or D. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 662352,
          "date": "Wed 07 Sep 2022 12:38",
          "username": "mbar94",
          "content": "Agree, it's B. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#248",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A pharmaceutical company's drug search API is using an Amazon Neptune DB cluster. A bulk uploader process automatically updates the information in the database a few times each week. A few weeks ago during a bulk upload, a database specialist noticed that the database started to respond frequently with a<br>ThrottlingException error. The problem also occurred with subsequent uploads.<br>The database specialist must create a solution to prevent ThrottlingException errors for the database. The solution must minimize the downtime of the cluster.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#248",
          "answers": [
            {
              "choice": "<p>A. Create a read replica that uses a larger instance size than the primary DB instance. Fail over the primary DB instance to the read replica.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a read replica to each Availability Zone. Use an instance for the read replica that is the same size as the primary DB instance. Keep the traffic between the API and the database within the Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a read replica that uses a larger instance size than the primary DB instance. Offload the reads from the primary DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Take the latest backup, and restore it in a DB cluster of a larger size. Point the application to the newly created DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 248 discussion",
      "discusstion": [
        {
          "id": 752870,
          "date": "Thu 22 Dec 2022 00:34",
          "username": "khun",
          "content": "C is correct.<br>You can achieve read scaling for your Neptune DB cluster by creating up to 15 Neptune replicas in the DB cluster. Each Neptune replica returns the same data from the cluster volume with minimal replica lag (often considerably less than 100 milliseconds after the primary instance has written an update). As your read traffic increases, you can create additional Neptune replicas and connect to them directly to distribute the read load for your DB cluster. Neptune replicas don't have to be of the same DB instance class as the primary instance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 682080,
          "date": "Wed 28 Sep 2022 21:49",
          "username": "Stteve",
          "content": "C is correct answer.there is no down-time compare to other options<br>https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-add-replicas.html<br><br>Neptune replicas connect to the same storage volume as the primary DB instance and support only read operations. Neptune replicas can offload read workloads from the primary DB instance.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 681062,
          "date": "Tue 27 Sep 2022 20:27",
          "username": "JeanGat",
          "content": "A - Readers do not need to be of the same size.Create a larger sized reader, and failover.<br><br>Not D. How is backup and recover \\\"no downtime\\\".Dude, you just lost data potentially using last nights backup.<br><br>https://docs.aws.amazon.com/neptune/latest/userguide/neptune-gdb-disaster-recovery.html#neptune-gdb-managed-failover",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 668847,
          "date": "Wed 14 Sep 2022 11:41",
          "username": "SonamDhingraChangwha",
          "content": "D is correct for no downtimeD is not correct. Recovery using latest backup results in data loss.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 692147,
          "date": "Tue 11 Oct 2022 15:37",
          "username": "Changwha",
          "content": "D is not correct. Recovery using latest backup results in data loss.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 662360,
          "date": "Wed 07 Sep 2022 12:44",
          "username": "mbar94",
          "content": "I'd go for A. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#249",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A global company is developing an application across multiple AWS Regions. The company needs a database solution with low latency in each Region and automatic disaster recovery. The database must be deployed in an active-active configuration with automatic data synchronization between Regions.<br>Which solution will meet these requirements with the LOWEST latency?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#249",
          "answers": [
            {
              "choice": "<p>A. Amazon RDS with cross-Region read replicas<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon DynamoDB global tables<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon Aurora global database<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon Athena and Amazon S3 with S3 Cross Region Replication<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 249 discussion",
      "discusstion": [
        {
          "id": 662365,
          "date": "Wed 07 Sep 2022 12:48",
          "username": "mbar94",
          "content": "I would choose B. ",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 708855,
          "date": "Tue 01 Nov 2022 06:01",
          "username": "rags1482",
          "content": "active-active is dynamo DB global table<br>Answer B",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#250",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A pharmaceutical company uses Amazon Quantum Ledger Database (Amazon QLDB) to store its clinical trial data records. The company has an application that runs as AWS Lambda functions. The application is hosted in the private subnet in a VPC. <br>The application does not have internet access and needs to read some of the clinical data records. The company is concerned that traffic between the QLDB ledger and the VPC could leave the AWS network. The company needs to secure access to the QLDB ledger and allow the VPC traffic to have read-only access.<br>Which security strategy should a database specialist implement to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#250",
          "answers": [
            {
              "choice": "<p>A. Move the QLDB ledger into a private database subnet inside the VPC.  Run the Lambda functions inside the same VPC in an application private subnet. Ensure that the VPC route table allows read-only flow from the application subnet to the database subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS PrivateLink VPC endpoint for the QLDB ledger. Attach a VPC policy to the VPC endpoint to allow read-only traffic for the Lambda functions that run inside the VPC. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add a security group to the QLDB ledger to allow access from the private subnets inside the VPC where the Lambda functions that access the QLDB ledger are running.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a VPN connection to ensure pairing of the private subnet where the Lambda functions are running with the private subnet where the QLDB ledger is deployed.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 250 discussion",
      "discusstion": [
        {
          "id": 733926,
          "date": "Fri 02 Dec 2022 17:56",
          "username": "examineme",
          "content": "AWS PrivateLink VPC endpoint",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 707311,
          "date": "Sat 29 Oct 2022 18:04",
          "username": "rags1482",
          "content": "Answer is B as per mbar94 link",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696229,
          "date": "Sun 16 Oct 2022 14:26",
          "username": "awsjjj",
          "content": "https://docs.aws.amazon.com/qldb/latest/developerguide/vpc-endpoints.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 663182,
          "date": "Thu 08 Sep 2022 07:58",
          "username": "mbar94",
          "content": "I'd go with B - https://docs.aws.amazon.com/qldb/latest/developerguide/vpc-endpoints.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#251",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company uses a backend application that stores data in an Amazon DynamoDB table. The backend application runs in a private subnet in a VPC and must connect to this table.<br>The company must minimize any network latency that results from network connectivity issues, even during periods of heavy application usage. A database administrator also needs the ability to use a private connection to connect to the DynamoDB table from the application.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#251",
          "answers": [
            {
              "choice": "<p>A. Use network ACLs to ensure that any outgoing or incoming connections to any port except DynamoDB are deactivated. Encrypt API calls by using TLS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a VPC endpoint for DynamoDB in the application's VPC.  Use the VPC endpoint to access the table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS Lambda function that has access to DynamoDB.  Restrict outgoing access only to this Lambda function from the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a VPN to route all communication to DynamoDB through the company's own corporate network infrastructure.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 251 discussion",
      "discusstion": [
        {
          "id": 675636,
          "date": "Thu 22 Sep 2022 02:59",
          "username": "supratip",
          "content": "Always VPC endpoint for services outside VPC - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 663183,
          "date": "Thu 08 Sep 2022 08:00",
          "username": "mbar94",
          "content": "It's B - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#252",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's database specialist is building an Amazon RDS for Microsoft SQL Server DB instance to store hundreds of records in CSV format. A customer service tool uploads the records to an Amazon S3 bucket.<br>An employee who previously worked at the company already created a custom stored procedure to map the necessary CSV fields to the database tables. The database specialist needs to implement a solution that reuses this previous work and minimizes operational overhead.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#252",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon S3 event to invoke an AWS Lambda function. Configure the Lambda function to parse the .csv file and use a SQL client library to run INSERT statements to load the data into the tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Write a custom .NET app that is hosted on Amazon EC2. Configure the .NET app to load the .csv file and call the custom stored procedure to insert the data into the tables.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Download the .csv file from Amazon S3 to the RDS D drive by using an AWS msdb stored procedure. Call the custom stored procedure to insert the data from the RDS D drive into the tables.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon S3 event to invoke AWS Step Functions to parse the .csv file and call the custom stored procedure to insert the data into the tables.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 252 discussion",
      "discusstion": [
        {
          "id": 678362,
          "date": "Sun 25 Sep 2022 04:51",
          "username": "Usman0506",
          "content": "\\\"The database specialist needs to implement a solution that reuses this previous work\\\". Option D is to reuse previous work.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 733921,
          "date": "Fri 02 Dec 2022 17:50",
          "username": "examineme",
          "content": "Download S3 File",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 733121,
          "date": "Thu 01 Dec 2022 22:42",
          "username": "Sabftrimmer",
          "content": "exec msdb.dbo.rds_download_from_s3<br>@s3_arn_of_file'arn:aws:s3:::<bucket_name>/<file_name>',<br>@rds_file_path'D:\\S3\\<custom_folder_name>\\<file_name>',<br>@overwrite_file1;Already done really!",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 760381,
          "date": "Wed 28 Dec 2022 23:11",
          "username": "ftrimmer",
          "content": "Already done really!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 724543,
          "date": "Tue 22 Nov 2022 19:00",
          "username": "awsexams",
          "content": "Alternative C allows the file to be downloaded to S3 and then a local copy with the stored procedure would work",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 713877,
          "date": "Tue 08 Nov 2022 14:54",
          "username": "snehilsrcs",
          "content": "Step 1: Download S3 Files<br>Amazon RDS for SQL Server comes with several custom stored procedures and functions. These are located in the msdb database. The stored procedure to download files from S3 is \\\"rds_download_from_s3\\\". The syntax for this stored procedure is shown here:<br><br>exec msdb.dbo.rds_download_from_s3<br> @s3_arn_of_file'arn:aws:s3:::<bucket_name>/<file_name>',<br> @rds_file_path'D:\\S3\\<custom_folder_name>\\<file_name>',<br> @overwrite_file1;",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 713875,
          "date": "Tue 08 Nov 2022 14:52",
          "username": "snehilsrcs",
          "content": "https://www.mssqltips.com/sqlservertip/6619/rds-sql-server-data-import-from-amazon-s3/<br><br>Amazon Web Service (AWS) recently announced a new feature of its Relational Database Service (RDS) for SQL Server. This feature allows a native integration between Amazon RDS SQL Server and Amazon S3. With this integration, it's now possible to import files from an Amazon S3 bucket into a local folder of the RDS instance. Similarly, files from that folder can be exported to S3. The RDS local folder path is D:\\S3\\.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 700112,
          "date": "Thu 20 Oct 2022 18:15",
          "username": "DBA_MJF",
          "content": "I believe the answer is C based on the following article:https://www.mssqltips.com/sqlservertip/6619/rds-sql-server-data-import-from-amazon-s3/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 663188,
          "date": "Thu 08 Sep 2022 08:01",
          "username": "mbar94",
          "content": "Minimum operational overhead would be for A. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#253",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a 2 TB Oracle database in its on-premises data center. A database specialist is migrating the database from on premises to an Amazon Aurora<br>PostgreSQL database on AWS.<br>The database specialist identifies a problem that relates to compatibility Oracle stores metadata in its data dictionary in uppercase, but PostgreSQL stores the metadata in lowercase. The database specialist must resolve this problem to complete the migration.<br>What is the MOST operationally efficient solution that meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#253",
          "answers": [
            {
              "choice": "<p>A. Override the default uppercase format of Oracle schema by encasing object names in quotation marks during creation.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Database Migration Service (AWS DMS) mapping rules with rule-action as convert-lowercase.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS Schema Conversion Tool conversion agent to convert the metadata from uppercase to lowercase.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an AWS Glue job that is attached to an AWS Database Migration Service (AWS DMS) replication task to convert the metadata from uppercase to lowercase.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 253 discussion",
      "discusstion": [
        {
          "id": 663191,
          "date": "Thu 08 Sep 2022 08:03",
          "username": "mbar94",
          "content": "Agree with B - https://aws.amazon.com/premiumsupport/knowledge-center/dms-mapping-oracle-postgresql/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#254",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial company is running an Amazon Redshift cluster for one of its data warehouse solutions. The company needs to generate connection logs, user logs, and user activity logs. The company also must make these logs available for future analysis.<br>Which combination of steps should a database specialist take to meet these requirements? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#254",
          "answers": [
            {
              "choice": "<p>A. Edit the database configuration of the cluster by enabling audit logging. Direct the logging to a specified log group in Amazon CloudWatch Logs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Edit the database configuration of the cluster by enabling audit logging. Direct the logging to a specified Amazon S3 bucket<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the cluster by enabling continuous delivery of AWS CloudTrail logs to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new parameter group with the enable_user_activity_logging parameter set to true. Configure the cluster to use the new parameter group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Modify the system table to enable logging for each user.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 254 discussion",
      "discusstion": [
        {
          "id": 711134,
          "date": "Fri 04 Nov 2022 13:34",
          "username": "hogtrough",
          "content": "AWS CloudWatch Logs are stored indefinitely and CloudWatch Log Insights is used to analyze the logs and query upon them.<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html<br>\\\"Log retention =E2=80=93 By default, logs are kept indefinitely and never expire. You can adjust the retention policy for each log group, keeping the indefinite retention, or choosing a retention period between 10 years and one day.\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 707300,
          "date": "Sat 29 Oct 2022 17:51",
          "username": "rags1482",
          "content": "Anser: BD<br>as S3 we can store logs for future analysis",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696241,
          "date": "Sun 16 Oct 2022 14:46",
          "username": "awsjjj",
          "content": "https://docs.aws.amazon.com/redshift/latest/mgmt/db-auditing.html<br>https://docs.aws.amazon.com/redshift/latest/mgmt/db-auditing.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 681095,
          "date": "Tue 27 Sep 2022 21:01",
          "username": "JeanGatJeanGat",
          "content": "A and B<br>From here: https://docs.aws.amazon.com/redshift/latest/mgmt/db-auditing.html<br><br>\\\"Audit logging is not turned on by default in Amazon Redshift. When you turn on logging on your cluster, Amazon Redshift exports logs to Amazon CloudWatch, or creates and uploads logs to Amazon S3, that capture data from the time audit logging is enabled to the present time. \\\"Changing to A and D. For \\\"user activity logs\\\" we need D. ",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 714032,
          "date": "Tue 08 Nov 2022 19:14",
          "username": "JeanGat",
          "content": "Changing to A and D. For \\\"user activity logs\\\" we need D. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 674654,
          "date": "Wed 21 Sep 2022 03:04",
          "username": "yxyj",
          "content": "B & D, send to S3 for future use.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 663198,
          "date": "Thu 08 Sep 2022 08:09",
          "username": "mbar94",
          "content": "I'd go for AD. ",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AD"
        }
      ]
    },
    {
      "question_id": "#255",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A bank is using an Amazon RDS for MySQL DB instance in a proof of concept. A database specialist is evaluating automated database snapshots and cross-<br><br>Region snapshot copies as -<br>part of this proof of concept. After validating three automated snapshots successfully, the database specialist realizes that the fourth snapshot was not created.<br>Which of the following are possible reasons why the snapshot was not created? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#255",
          "answers": [
            {
              "choice": "<p>A. A copy of the automated snapshot for this DB instance is in progress within the same AWS Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. A copy of a manual snapshot for this DB instance is in progress for only certain databases within the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The RDS maintenance window is not specified.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The DB instance is in the STORAGE_FULL state.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. RDS event notifications have not been enabled.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 255 discussion",
      "discusstion": [
        {
          "id": 713883,
          "date": "Tue 08 Nov 2022 15:06",
          "username": "snehilsrcs",
          "content": "Referquestion 118",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 681096,
          "date": "Tue 27 Sep 2022 21:04",
          "username": "JeanGat",
          "content": "From here:<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html<br><br>Automated backups follow these rules:<br><br>Your DB instance must be in the AVAILABLE state for automated backups to occur. Automated backups don't occur while your DB instance is in a state other than AVAILABLE, for example STORAGE_FULL.<br><br>Automated backups don't occur while a DB snapshot copy is running in the same AWS Region for the same DB instance.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 681088,
          "date": "Tue 27 Sep 2022 20:54",
          "username": "cloudsunriser",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 663199,
          "date": "Thu 08 Sep 2022 08:10",
          "username": "mbar94",
          "content": "Agree with AD. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        }
      ]
    },
    {
      "question_id": "#256",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently migrated its line-of-business (LOB) application to AWS. The application uses an Amazon RDS for SQL Server DB instance as its database engine.<br>The company must set up cross-Region disaster recovery for the application. The company needs a solution with the lowest possible RPO and RTO.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#256",
          "answers": [
            {
              "choice": "<p>A. Create a cross-Region read replica of the DB instance. Promote the read replica at the time of failover.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up SQL replication from the DB instance to an Amazon EC2 instance in the disaster recovery Region. Promote the EC2 instance as the primary server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Database Migration Service (AWS KMS) for ongoing replication of the DB instance in the disaster recovery Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Take manual snapshots of the DB instance in the primary Region. Copy the snapshots to the disaster recovery Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 256 discussion",
      "discusstion": [
        {
          "id": 664800,
          "date": "Fri 09 Sep 2022 18:28",
          "username": "gairaj",
          "content": "Only two options in sql server cross region replication. copy snapshots and DMS<br>https://aws.amazon.com/blogs/database/cross-region-disaster-recovery-of-amazon-rds-for-sql-server/",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 750406,
          "date": "Tue 20 Dec 2022 03:22",
          "username": "khun",
          "content": "I'll go with A. <br><br>Amazon Relational Database Service (Amazon RDS) for SQL Server now supports Cross Region Read Replica. Cross Region Read Replica enables managed disaster recovery capability for mission critical databases by allowing a read replica in another region be \\\"promoted\\\" as a new standalone production database.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 749373,
          "date": "Mon 19 Dec 2022 03:17",
          "username": "RBSK",
          "content": "https://aws.amazon.com/blogs/database/use-cross-region-read-replicas-with-amazon-relational-database-service-for-sql-server/<br><br>Nov 2022 - Release date hence \\\"A\\\" is a right choice as of now",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 734534,
          "date": "Sat 03 Dec 2022 16:27",
          "username": "examineme",
          "content": "I will go with (A). https://aws.amazon.com/about-aws/whats-new/2022/11/amazon-rds-sql-server-cross-region-read-replica/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 733130,
          "date": "Thu 01 Dec 2022 22:53",
          "username": "Sab",
          "content": "RDS for SQL Server now supports cross Region Replica.(released Nov 2022)<br>https://aws.amazon.com/about-aws/whats-new/2022/11/amazon-rds-sql-server-cross-region-read-replica/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 697884,
          "date": "Tue 18 Oct 2022 06:37",
          "username": "VK1709PNP",
          "content": "C, as cross-region read replica is not supported for RDS SQL Server",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 681107,
          "date": "Tue 27 Sep 2022 21:18",
          "username": "JeanGat",
          "content": "C, as per link",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 675631,
          "date": "Thu 22 Sep 2022 02:54",
          "username": "supratip",
          "content": "Definitely C is correct - https://aws.amazon.com/blogs/database/cross-region-disaster-recovery-of-amazon-rds-for-sql-server/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 663353,
          "date": "Thu 08 Sep 2022 10:11",
          "username": "mbar94",
          "content": "It's A. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#257",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs hundreds of Microsoft SQL Server databases on Windows servers in its on-premises data center. A database specialist needs to migrate these databases to Linux on AWS.<br>Which combination of steps should the database specialist take to meet this requirement? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#257",
          "answers": [
            {
              "choice": "<p>A. Install AWS Systems Manager Agent on the on-premises servers. Use Systems Manager Run Command to install the Windows to Linux replatforming assistant for Microsoft SQL Server Databases.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Systems Manager Run Command to install and configure the AWS Schema Conversion Tool on the on-premises servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. On the Amazon EC2 console, launch EC2 instances and select a Linux AMI that includes SQL Server. Install and configure AWS Systems Manager Agent on the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. On the AWS Management Console, set up Amazon RDS for SQL Server DB instances with Linux as the operating system. Install AWS Systems Manager Agent on the DB instances by using an options group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Open the Windows to Linux replatforming assistant tool. Enter configuration details of the source and destination databases. Start migration.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. On the AWS Management Console, set up AWS Database Migration Service (AWS DMS) by entering details of the source SQL Server database and the destination SQL Server database on AWS. Start migration.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 257 discussion",
      "discusstion": [
        {
          "id": 707500,
          "date": "Sat 29 Oct 2022 23:32",
          "username": "rags1482",
          "content": "https://d1.awsstatic.com/events/reinvent/2019/REPEAT_1_Leverage_automation_to_re-platform_SQL_Server_to_Linux_WIN322-R1.pdf<br><br>Answer ACE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 692135,
          "date": "Tue 11 Oct 2022 15:14",
          "username": "Changwha",
          "content": "Migration using backup and restore.https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/replatform-sql-server.html<br><br>Bx: Not STS, Dx: Not RDS, Fx: Not DMS",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: ACE"
        },
        {
          "id": 664847,
          "date": "Fri 09 Sep 2022 19:54",
          "username": "gairaj",
          "content": "ACE as many databases to migrate",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACE"
        }
      ]
    },
    {
      "question_id": "#258",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a blogging platform. A security audit determines that the Amazon RDS DB instance that is used by the platform is not configured to encrypt the data at rest. The company must encrypt the DB instance within 30 days.<br>What should a database specialist do to meet this requirement with the LEAST amount of downtime?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#258",
          "answers": [
            {
              "choice": "<p>A. Create a read replica of the DB instance, and enable encryption. When the read replica is available, promote the read replica and update the endpoint that is used by the application. Delete the unencrypted DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Take a snapshot of the DB instance. Make an encrypted copy of the snapshot. Restore the encrypted snapshot. When the new DB instance is available, update the endpoint that is used by the application. Delete the unencrypted DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new encrypted DB instance. Perform an initial data load, and set up logical replication between the two DB instances When the new DB instance is in sync with the source DB instance, update the endpoint that is used by the application. Delete the unencrypted DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Convert the DB instance to an Amazon Aurora DB cluster, and enable encryption. When the DB cluster is available, update the endpoint that is used by the application to the cluster endpoint. Delete the unencrypted DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 258 discussion",
      "discusstion": [
        {
          "id": 707294,
          "date": "Sat 29 Oct 2022 17:38",
          "username": "rags1482",
          "content": "https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/encrypt-an-existing-amazon-rds-for-postgresql-db-instance.html<br><br>Answer : B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 696248,
          "date": "Sun 16 Oct 2022 15:06",
          "username": "awsjjj",
          "content": "minimum downtime.<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/encrypt-an-existing-amazon-rds-for-postgresql-db-instance.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 692110,
          "date": "Tue 11 Oct 2022 14:41",
          "username": "Changwha",
          "content": "When the new, encrypted copy of the DB instance becomes available, you can point your applications to the new database. However, if your project doesn't allow for significant downtime for this activity, you need an alternate approach that helps minimize the downtime. This pattern uses the AWS Database Migration Service (AWS DMS) to migrate and continuously replicate the data so that the cutover to the new, encrypted database can be done with minimal downtime.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 681103,
          "date": "Tue 27 Sep 2022 21:12",
          "username": "cloudsunriser",
          "content": "Solution expects minimal downtime.<br><br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/encrypt-an-existing-amazon-rds-for-postgresql-db-instance.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 668864,
          "date": "Wed 14 Sep 2022 12:00",
          "username": "SonamDhingra",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 664806,
          "date": "Fri 09 Sep 2022 18:40",
          "username": "gairaj",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Enabling",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 663655,
          "date": "Thu 08 Sep 2022 15:27",
          "username": "hcltechaws",
          "content": "My choice is B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 663356,
          "date": "Thu 08 Sep 2022 10:13",
          "username": "mbar94",
          "content": "Agree with C. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#259",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A database specialist is planning to migrate a MySQL database to Amazon Aurora. The database specialist wants to configure the primary DB cluster in the us-west-2 Region and the secondary DB cluster in the eu-west-1 Region. In the event of a disaster recovery scenario, the database must be available in eu-west-1 with an RPO of a few seconds. Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#259",
          "answers": [
            {
              "choice": "<p>A. Use Aurora MySQL with the primary DB cluster in us-west-2 and a cross-Region Aurora Replica in eu-west-1<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Aurora MySQL with the primary DB cluster in us-west-2 and binlog-based external replication to eu-west-1<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an Aurora MySQL global database with the primary DB cluster in us-west-2 and the secondary DB cluster in eu-west-1<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Aurora MySQL with the primary DB cluster in us-west-2. Use AWS Database Migration Service (AWS DMS) change data capture (GDC) replication to the secondary DB cluster in eu-west-1<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 259 discussion",
      "discusstion": [
        {
          "id": 733141,
          "date": "Thu 01 Dec 2022 23:14",
          "username": "Sab",
          "content": "Recovery point objective (RPO) =E2=80=93 The amount of data that can be lost (measured in time). For an Aurora global database, RPO is typically measured in seconds.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#260",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company is planning to launch a custom customer relationship management (CRM) application on AWS. The development team selected Microsoft SQL Server as the database engine for this deployment. The CRM application will require operating system access because the application will manipulate files and packages on the server hosting the database. A senior database engineer must help the application team select a suitable deployment model for SQL Server. The deployment model should be optimized for the workload requirements.<br><br>Which deployment option should the database engineer choose that involves the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#260",
          "answers": [
            {
              "choice": "<p>A. Run SQL Server on Amazon EC2 and grant elevated privileges for both the database instance and the host operating system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon RDS for SQL Server and grant elevated privileges for both the database instance and the host operating system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Run SQL Server on Amazon EC2 and grant elevated privileges for the database instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. An Amazon RDS Custom for SQL Server and grant elevated privileges for both the database instance and the host operating system.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 260 discussion",
      "discusstion": [
        {
          "id": 750420,
          "date": "Tue 20 Dec 2022 03:47",
          "username": "khun",
          "content": "D.  Amazon RDS Custom",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 733902,
          "date": "Fri 02 Dec 2022 17:14",
          "username": "examineme",
          "content": "Amazon RDS Custom is supported for the Oracle and Microsoft SQL Server database engines",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 733146,
          "date": "Thu 01 Dec 2022 23:17",
          "username": "Sab",
          "content": "Amazon RDS Custom automates database administration tasks and operations. RDS Custom makes it possible for you as a database administrator to access and customize your database environment and operating system. With RDS Custom, you can customize to meet the requirements of legacy, custom, and packaged applications.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#261",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon DynamoDB to store its customer data. The DynamoDB table is designed with the user ID as the partition key value and multiple other non-key attributes. An external application needs to access data for specific user IDs. The external application must have access only to items with specific partition key values.<br><br>What should the database specialist do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#261",
          "answers": [
            {
              "choice": "<p>A. Use the dynamodb:ReturnValues condition key in the external application's IAM policy to grant access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use a projection expression to select specific users from the DynamoDB table for the external application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the ExecuteStatementAPI operation to select specific users from the DynamoDB table for the external application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the dynamodb:LeadingKeys condition key in the external application's IAM policy to grant access.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 261 discussion",
      "discusstion": [
        {
          "id": 743275,
          "date": "Mon 12 Dec 2022 20:47",
          "username": "vkruger",
          "content": "Answer: D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 741401,
          "date": "Sun 11 Dec 2022 05:18",
          "username": "amulbaba",
          "content": "ynamodb:LeadingKeys condition key to limit",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 732038,
          "date": "Wed 30 Nov 2022 23:09",
          "username": "Sab",
          "content": "D<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html<br>dynamodb:LeadingKeys condition key to limit user actions only on the items whose UserID partition key value matches the Login",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#262",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A city's weather forecast team is using Amazon DynamoDB in the data tier for an application. The application has several components. The analysis component of the application requires repeated reads against a large dataset. The application has started to temporarily consume all the read capacity in the DynamoDB table and is negatively affecting other applications that need to access the same data.<br><br>Which solution will resolve this issue with the LEAST development effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#262",
          "answers": [
            {
              "choice": "<p>A. Use DynamoDB Accelerator (DAX)<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon CloudFront in front of DynamoDB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a DynamoDB table with a local secondary index (LSI)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon ElastiCache in front of DynamoDB<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 262 discussion",
      "discusstion": [
        {
          "id": 740149,
          "date": "Fri 09 Dec 2022 14:41",
          "username": "amulbaba",
          "content": "DAX saves from overprovisioning of read capacity",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 736404,
          "date": "Tue 06 Dec 2022 00:47",
          "username": "catboy",
          "content": "A correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#263",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is creating a serverless application that uses multiple AWS services and stores data on an Amazon RDS DB instance. The database credentials must be stored securely. An AWS Lambda function must be able to access the credentials. The company also must rotate the database password monthly by using an automated solution.<br><br>What should a database specialist do to meet those requirements in the MOST secure manner?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#263",
          "answers": [
            {
              "choice": "<p>A. Store the database credentials by using AWS Systems Manager Parameter Store. Enable automatic rotation of the password. Use the AWS Cloud Development Kit (AWS CDK) in the Lambda function to retrieve the credentials from Parameter Store<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Encrypt the database credentials by using AWS Key Management Service (AWS KMS). Store the credentials in Amazon S3. Use an S3 Lifecycle policy to rotate the password. Retrieve the credentials by using Python code in Lambda<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the database credentials by using AWS Secrets Manager. Enable automatic rotation of the password. Configure the Lambda function to use the Secrets Manager API to retrieve the credentials<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the database credentials in an Amazon DynamoDB table. Assign an IAM role to the Lambda function to grant the Lambda function read-only access to the DynamoDB table. Rotate the password by using another Lambda function that runs monthly<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 263 discussion",
      "discusstion": [
        {
          "id": 740154,
          "date": "Fri 09 Dec 2022 14:43",
          "username": "amulbaba",
          "content": "Secret manager is the service which provides credential storing and rotating.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 734245,
          "date": "Sat 03 Dec 2022 07:29",
          "username": "Maze",
          "content": "Answer is C.  Secret Manager",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: =EC=94=A8"
        },
        {
          "id": 733892,
          "date": "Fri 02 Dec 2022 17:03",
          "username": "examineme",
          "content": "AWS Secrets Manager",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 733311,
          "date": "Fri 02 Dec 2022 02:32",
          "username": "examineme",
          "content": "Answer is C.  Secret Manager is for Credentials storing",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 732674,
          "date": "Thu 01 Dec 2022 14:59",
          "username": "examineme",
          "content": "Answer is C for AWS Secrets Manager for Credentials",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732041,
          "date": "Wed 30 Nov 2022 23:10",
          "username": "Sab",
          "content": "Answer C",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#264",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its on-premises Oracle database to Amazon RDS for PostgreSQL by using AWS Database Migration Service (AWS DMS). A database specialist needs to evaluate the migration task settings and data type conversion in an AWS DMS task.<br><br>What should the database specialist do to identify the optimal migration method?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#264",
          "answers": [
            {
              "choice": "<p>A. Use the AWS Schema Conversion Tool (AWS SCT) database migration assessment report<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AWS Schema Conversion Tool (AWS SCT) multiserver assessor.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an AWS DMS pre-migration assessment<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS DMS data validation tool<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 264 discussion",
      "discusstion": [
        {
          "id": 760419,
          "date": "Thu 29 Dec 2022 00:20",
          "username": "ftrimmer",
          "content": "C for me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732043,
          "date": "Wed 30 Nov 2022 23:13",
          "username": "Sab",
          "content": "Answer C<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#265",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company runs an application on Amazon RDS for SQL Server 2017 Enterprise edition. Due to the increase in read volume, the company's application team is planning to offload the read transactions by adding a read replica to the RDS for SQL Server DB instance.<br><br>What architectural conditions should a database specialist set? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#265",
          "answers": [
            {
              "choice": "<p>A. Ensure that the automatic backups are turned on for the RDS DB instance<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Ensure the backup retention value is set to 0 for the RDSDB instance<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Ensure the RDS DB instance is set to Multi-AZ<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Ensure the RDS DB instance is set to Single-AZ<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Ensure the RDS DB instance is in a stopped state to turn on the read replica<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 265 discussion",
      "discusstion": [
        {
          "id": 754281,
          "date": "Fri 23 Dec 2022 15:16",
          "username": "Don2021",
          "content": "AC<br>you must enable automatic backups on the source DB instance. To do so, you set the backup retention period to a value other than 0. The source DB instance must be a Multi-AZ deployment with Always On Availability Groups (AGs). Setting this type of deployment also enforces that automatic backups are enabled.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 732044,
          "date": "Wed 30 Nov 2022 23:18",
          "username": "Sab",
          "content": "AC<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.ReadReplicas.html",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#266",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Lambda functions in a private subnet in a VPC to run application logic. The Lambda functions must not have access to the public internet. Additionally, all data communication must remain within the private network. As part of a new requirement, the application logic needs access to an Amazon DynamoDB table.<br><br>What is the MOST secure way to meet this new requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#266",
          "answers": [
            {
              "choice": "<p>A. Provision the DynamoDB table inside the same VPC that contains the Lambda functions<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a gateway VPC endpoint for DynamoDB to provide access to the table<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use a network ACL to only allow access to the DynamoDB table from the VPC<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a security group to only allow access to the DynamoDB table from the VPC<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 266 discussion",
      "discusstion": [
        {
          "id": 749069,
          "date": "Sun 18 Dec 2022 18:25",
          "username": "shubhary25",
          "content": "B. <br>A gateway VPC endpoint",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744958,
          "date": "Wed 14 Dec 2022 11:08",
          "username": "Hira101",
          "content": "B- VPC endpoint for DynamoDB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732046,
          "date": "Wed 30 Nov 2022 23:20",
          "username": "Sab",
          "content": "B<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#267",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A startup company is developing electric vehicles. These vehicles are expected to send real-time data to the AWS Cloud for data analysis. This data will include trip metrics, trip duration, and engine temperature. The database team decides to store the data for 15 days using Amazon DynamoDB. <br><br>How can the database team achieve this with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#267",
          "answers": [
            {
              "choice": "<p>A. Implement Amazon DynamoDB Accelerator (DAX) on the DynamoDB table. Use Amazon EventBridge (Amazon CloudWatch Events) to poll the DynamoDB table and drop items after 15 days<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on DynamoDB Streams for the DynamoDB table to push the data from DynamoDB to another storage location. Use AWS Lambda to poll and terminate items older than 15 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on the TTL feature for the DynamoDB table. Use the TTL attribute as a timestamp and set the expiration of items to 15 days<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Lambda function to poll the list of DynamoDB tables every 15 days. Drop the existing table and create a new table<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 267 discussion",
      "discusstion": [
        {
          "id": 741404,
          "date": "Sun 11 Dec 2022 05:27",
          "username": "amulbaba",
          "content": "Definitely C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 733693,
          "date": "Fri 02 Dec 2022 12:50",
          "username": "satishstechie",
          "content": "C is the answer, Less overhead",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 733691,
          "date": "Fri 02 Dec 2022 12:49",
          "username": "satishstechie",
          "content": "Answer is C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 732047,
          "date": "Wed 30 Nov 2022 23:21",
          "username": "Sab",
          "content": "AnswerC",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#268",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an Amazon RDS Multi-AZ DB instance in its development environment. The DB instance uses General Purpose SSD storage. The DB instance provides data to an application that has I/O constraints and high online transaction processing (OLTP) workloads. The users report that the application is slow.<br><br>A database specialist finds a high degree of latency in the database writes. The database specialist must decrease the database latency by designing a solution that minimizes operational overhead.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#268",
          "answers": [
            {
              "choice": "<p>A. Eliminate the Multi-AZ deployment. Run the DB instance in only one Availability Zone<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Recreate the DB instance. Use the default storage type. Reload the data from an automatic snapshot<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Switch the storage to Provisioned IOPS SSD on the DB instance that is running<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Recreate the DB instance. Use Provisioned IOPS SSD storage. Reload the data from an automatic snapshot<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 268 discussion",
      "discusstion": [
        {
          "id": 744768,
          "date": "Wed 14 Dec 2022 07:07",
          "username": "Mardoyyy",
          "content": "ans is C,<br>changing from GP into privisoned IOPS does NOT make downtime and could apply immediately",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 744766,
          "date": "Wed 14 Dec 2022 07:07",
          "username": "Mardoyyy",
          "content": "ans is C,<br>changing from GP into privisoned IOPS does NOT make downtime and could apply immediately",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 736418,
          "date": "Tue 06 Dec 2022 01:09",
          "username": "catboylollyjSab",
          "content": "D right answerAnswer C: I've tested and the storage and instance classes can be modified on the fly without downtimeStorage type can be modified.<br>Storage type<br><br>The storage type that you want to use.<br>If you choose General Purpose SSD (gp3), you can provision additional Provisioned IOPS and Storage throughput under Advanced settings.<br>If you choose Provisioned IOPS SSD (io1), enter the Provisioned IOPS value.<br>After Amazon RDS begins to modify your DB instance to change the storage size or type, you can't submit another request to change the storage size, performance, or type for six hours.<br><br>For more information, see Amazon RDS storage types<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 745333,
          "date": "Wed 14 Dec 2022 18:38",
          "username": "lollyj",
          "content": "Answer C: I've tested and the storage and instance classes can be modified on the fly without downtime",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 738573,
          "date": "Thu 08 Dec 2022 04:03",
          "username": "Sab",
          "content": "Storage type can be modified.<br>Storage type<br><br>The storage type that you want to use.<br>If you choose General Purpose SSD (gp3), you can provision additional Provisioned IOPS and Storage throughput under Advanced settings.<br>If you choose Provisioned IOPS SSD (io1), enter the Provisioned IOPS value.<br>After Amazon RDS begins to modify your DB instance to change the storage size or type, you can't submit another request to change the storage size, performance, or type for six hours.<br><br>For more information, see Amazon RDS storage types<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 736340,
          "date": "Mon 05 Dec 2022 22:40",
          "username": "Sab",
          "content": "C<br>You can modify storage class. There will be performance issue while storage is moved to new class.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#269",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its on-premises Oracle database to a managed open-source database engine in Amazon RDS by using AWS Database Migration Service (AWS DMS). A database specialist needs to identify the target engine in Amazon RDS based on the conversion percentage of database code objects such as stored procedures, functions, views, and database storage objects. The company will select the engine that has the least manual conversion effort.<br><br>What should the database specialist do to identify the target engine?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#269",
          "answers": [
            {
              "choice": "<p>A. Use the AWS Schema Conversion Tool (AWS SCT) database migration assessment report<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AWS Schema Conversion Tool (AWS SCT) multiserver assessor<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an AWS DMS pre-migration assessment<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS DMS data validation tool<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 269 discussion",
      "discusstion": [
        {
          "id": 761467,
          "date": "Thu 29 Dec 2022 21:31",
          "username": "tucobbad",
          "content": "A. <br>This is a single Oracle Database according to the question, so, no need to go multiserver. It will provide effort on converting such objects in the database migration assessemnt report:<br>https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_AssessmentReport.Summary.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 750448,
          "date": "Tue 20 Dec 2022 04:35",
          "username": "khun",
          "content": "B. <br>A multiserver assessment report evaluates multiple servers based on input that you provide for each schema definition that you want to assess. Your schema definition contains database server connection parameters and the full name of each schema. After assessing each schema, AWS SCT produces a summary, aggregated assessment report for database migration across your multiple servers. This report shows the estimated complexity for each possible migration target.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 740198,
          "date": "Fri 09 Dec 2022 15:25",
          "username": "amulbaba",
          "content": "https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_AssessmentReport.Multiserver.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 740197,
          "date": "Fri 09 Dec 2022 15:25",
          "username": "amulbaba",
          "content": "https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_AssessmentReport.Multiserver.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#270",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company runs its production database on Amazon RDS for SOL Server. The company wants more flexibility in backing up and restoring the database. A database specialist needs to create a native backup and restore strategy. The solution must take native SQL Server backups and store them in a highly scalable manner.<br><br>Which combination of stops should the database specialist take to meet those requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#270",
          "answers": [
            {
              "choice": "<p>A. Set up an Amazon S3 destination bucket. Establish a trust relationship with an IAM role that includes permissions for Amazon RDS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an Amazon FSx for Windows File Server destination file system. Establish a trust relationship with an IAM role that includes permissions for Amazon RDS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an option group. Add the SQLSERVER_BACKUP_RESTORE option to the option group<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the existing default option group. Add the SQLSERVER_BACKUP_RESTORE option to the option group<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Back up the database by using the native BACKUP DATABASE TSQL command. Restore the database by using the RESTORE DATABASE TSQL command.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Back up the database by using the rds_backup_database stored procedure. Restore the database by using the rds_restore_database stored procedure.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 270 discussion",
      "discusstion": [
        {
          "id": 744772,
          "date": "Wed 14 Dec 2022 07:11",
          "username": "Mardoyyy",
          "content": "default option group cannot be modified",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 732064,
          "date": "Wed 30 Nov 2022 23:48",
          "username": "Sab",
          "content": "ACF<br>https://docs.amazonaws.cn/en_us/AmazonRDS/latest/UserGuide/Appendix.SQLServer.Options.BackupRestore.html<br>https://aws.amazon.com/premiumsupport/knowledge-center/native-backup-rds-sql-server/",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#271",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a variety of Amazon Aurora DB clusters. Each of these DB clusters has various configurations that meet specific sets of requirements. Depending on the team and the use case, these configurations can be organized into broader categories. A database specialist wants to implement a solution to make the storage and modification of the configuration parameters more systematic.<br><br>Which AWS service or feature should the database specialist use to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#271",
          "answers": [
            {
              "choice": "<p>A. AWS Systems Manager Parameter Store<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. DB parameter group<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS Config with the Amazon RDS managed rules<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS Secrets Manager<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 271 discussion",
      "discusstion": [
        {
          "id": 760819,
          "date": "Thu 29 Dec 2022 10:24",
          "username": "Kanwar_89",
          "content": "B as RDS does not support parameter store",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 754296,
          "date": "Fri 23 Dec 2022 15:38",
          "username": "Don2021",
          "content": "B<br>A DB cluster parameter group acts as a container for engine configuration values that are applied to every DB instance in an Aurora DB cluster. For example, the Aurora shared storage model requires that every DB instance in an Aurora cluster use the same setting for parameters such as innodb_file_per_table. Thus, parameters that affect the physical storage layout are part of the cluster parameter group.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 752896,
          "date": "Thu 22 Dec 2022 01:21",
          "username": "khun",
          "content": "B.  check Hira101's comment",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 744963,
          "date": "Wed 14 Dec 2022 11:21",
          "username": "Hira101",
          "content": "B - As RDS can not access the Parameter store:<br>You can also reference parameters in a number of other AWS services, including the following:<br><br>Amazon Elastic Compute Cloud (Amazon EC2)<br><br>Amazon Elastic Container Service (Amazon ECS)<br><br>AWS Secrets Manager<br><br>AWS Lambda<br><br>AWS CloudFormation<br><br>AWS CodeBuild<br><br>AWS CodePipeline<br><br>AWS CodeDeploy",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 743539,
          "date": "Tue 13 Dec 2022 03:59",
          "username": "rags1482",
          "content": "Answer : B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 742489,
          "date": "Mon 12 Dec 2022 08:00",
          "username": "Sab",
          "content": "Parameter Store, a capability of AWS Systems Manager, provides secure, hierarchical storage for configuration data management and secrets management.<br><br>https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#272",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Accompany is using Amazon Redshift for its data warehouse. During review of the last few AWS monthly bills, a database specialist notices charges for Amazon Redshift backup storage. The database specialist needs to decrease the cost of these charges in the future and must create a solution that provides notification if the charges exceed a threshold.<br><br>Which combination of actions will moot those requirements with the LEAST operational overhead? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#272",
          "answers": [
            {
              "choice": "<p>A. Migrate all manual snapshots to the Amazon S3 Standard-Infrequent Access (S3 Standard-IA) storage class<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an automated snapshot schedule to take a snapshot once each day<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudWatch billing alarm to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic if the threshold is exceeded<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a serverless AWS Glue job to run every 4 hours to describe cluster snapshots and send an email message if the threshold is exceeded<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Delete manual snapshots that are not required anymore<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 272 discussion",
      "discusstion": [
        {
          "id": 758191,
          "date": "Tue 27 Dec 2022 07:14",
          "username": "Kanwar_89",
          "content": "going with E just because moving all snapshots is not an ideal solutions",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 745310,
          "date": "Wed 14 Dec 2022 18:06",
          "username": "lollyj",
          "content": "Moving unnecessary manual snapshots to S3-IA simply reduces cost but deleting unnecessary snapshots helps more.Also moving all snapshots may not be ideal for business' needs.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 744801,
          "date": "Wed 14 Dec 2022 07:50",
          "username": "Mardoyyy",
          "content": "manual snapshot will stay forever if its not deleted manually",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 732141,
          "date": "Thu 01 Dec 2022 02:22",
          "username": "Sab",
          "content": "Answer EC<br>Amazon Redshift charges for manual snapshots you take using the console, application programming interface (API), or command-line interface (CLI). Redshift Automated snapshots, which are created using Amazon Redshift's snapshot scheduling feature, are offered at no charge and can be retained for a maximum of 35 days",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#273",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online bookstore recently migrated its database from on-premises Oracle to Amazon Aurora PostgreSQL 13. The bookstore uses scheduled jobs to run customized SQL scripts to administer the Oracle database, running hours-long maintenance tasks, such as partition maintenance and statistics gathering. The bookstore's application team has reached out to a database specialist seeking an ideal replacement for scheduling jobs with Aurora PostgreSQL.<br><br>What should the database specialist implement to meet these requirements with MINIMAL operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#273",
          "answers": [
            {
              "choice": "<p>A. Configure an Amazon EC2 instance to run on a schedule to initiate database maintenance jobs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure AWS Batch with AWS Step Functions to schedule long-running database maintenance tasks<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon EventBridae (Amazon CloudWatch Events) rule with AWS Lambda that runs on a schedule to initiate database maintenance jobs<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on the pg_cron extension in the Aurora PostgreSOL database and schedule the database maintenance tasks by using the cron.schedule function<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 273 discussion",
      "discusstion": [
        {
          "id": 759784,
          "date": "Wed 28 Dec 2022 13:07",
          "username": "parle101",
          "content": "Ans: D<br>I check for the closest answers and then research on my own. That way I get a chance to figure which answer is right and why.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 745305,
          "date": "Wed 14 Dec 2022 17:59",
          "username": "lollyjkhun",
          "content": "I'm confused.What's the correct answer? Sorry I'm new to this site.My answer was C but it says \\\"Suggested Answer\\\" smhMost of the time community answers are the correct ones.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 750458,
          "date": "Tue 20 Dec 2022 04:48",
          "username": "khun",
          "content": "Most of the time community answers are the correct ones.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744803,
          "date": "Wed 14 Dec 2022 07:51",
          "username": "Mardoyyy",
          "content": "Answer D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 733085,
          "date": "Thu 01 Dec 2022 21:42",
          "username": "Sab",
          "content": "Answer D<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/PostgreSQL_pg_cron.html",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#274",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is preparing to release a new application. During a load test on the application before launch, the company noticed that its Amazon RDS for MySQL database responded more slowly than expected. As a result, the application did not meet performance goals. A database specialist must determine which SQL statements are consuming the most load.<br><br>Which set of steps should the database specialist take to obtain this information?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#274",
          "answers": [
            {
              "choice": "<p>A. Navigate to RDS Performance Insights. Select the database that is associated with the application. Update the counter metrics to show top_sql. Update the time range to when the load test occurred. Review the top SQL statements.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Navigate to RDS Performance Insights. Select the database that is associated with the application. Update the time range to when the load test occurred. Change the slice to SQL. Review the top SQL statements.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Navigate to Amazon CloudWatch. Select the metrics for the appropriate DB instance. Review the top SQL statements metric for the time range when the load test occurred. Create a CloudWatch dashboard to watch during future load tests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Navigate to Amazon CloudWatch. Find the log group for the application's database. Review the top-sql-statements log file for the time range when the load test occurred.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 274 discussion",
      "discusstion": [
        {
          "id": 741416,
          "date": "Sun 11 Dec 2022 05:57",
          "username": "amulbaba",
          "content": "B is correct . \\\"A\\\" does mention performance insights but the steps are not correct.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#275",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using an Amazon Aurora PostgreSQL DB cluster for the backend of its mobile application. The application is running continuously and a database specialist is satisfied with high availability and fast failover, but is concerned about performance degradation after failover.<br><br>How can the database specialist minimize the performance degradation after failover?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#275",
          "answers": [
            {
              "choice": "<p>A. Enable cluster cache management for the Aurora DB cluster and set the promotion priority for the writer DB instance and replica to tier-0<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable cluster cache management tor the Aurora DB cluster and set the promotion priority for the writer DB instance and replica to tier-1<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Query Plan Management for the Aurora DB cluster and perform a manual plan capture<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable Query Plan Management for the Aurora DB cluster and force the query optimizer to use the desired plan<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 275 discussion",
      "discusstion": [
        {
          "id": 754309,
          "date": "Fri 23 Dec 2022 15:54",
          "username": "Don2021",
          "content": "A<br>Set the value of the apg_ccm_enabled cluster parameter to 1 and both writer and reader tier 0 for failover priority.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 752685,
          "date": "Wed 21 Dec 2022 20:30",
          "username": "Llytle",
          "content": "I don't know guys & gals, distributing optimizer plans globally seem to me to be a better way to get consistent query performance from the failover.<br><br>https://aws.amazon.com/about-aws/whats-new/2018/12/amazon-aurora-postgresql-compatibility-adds-query-plan-management/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 744806,
          "date": "Wed 14 Dec 2022 07:54",
          "username": "Mardoyyy",
          "content": "A<br>Failover priority of writer and reader needs to be Tier-0",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 741417,
          "date": "Sun 11 Dec 2022 05:59",
          "username": "amulbaba",
          "content": "refer the link given by Sab",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 732145,
          "date": "Thu 01 Dec 2022 02:29",
          "username": "Sab",
          "content": "A<br>Failover priority of writer and reader needs to be Tier-0<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.cluster-cache-mgmt.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#276",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to move its on-premises Oracle database to an Amazon Aurora PostgreSQL DB cluster. The source database includes 500 GB of data. 900 stored procedures and functions, and application source code with embedded SQL statements. The company understands there are some database code objects and custom features that may not be automatically converted and may need some manual intervention. Management would like to complete this migration as fast as possible with minimal downtime.<br><br>Which tools and approach should be used to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#276",
          "answers": [
            {
              "choice": "<p>A. Use AWS DMS to perform data migration and to automatically create all schemas with Aurora PostgreSQL<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS DMS to perform data migration and use the AWS Schema Conversion Tool (AWS SCT) to automatically generate the converted code<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS Schema Conversion Tool (AWS SCT) to automatically convert all types of Oracle schemas to PostgreSQL and migrate the data to Aurora<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the dump and pg_dump utilities for both data migration and schema conversion<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 276 discussion",
      "discusstion": [
        {
          "id": 741418,
          "date": "Sun 11 Dec 2022 06:01",
          "username": "amulbaba",
          "content": "B is correct . SCT can not be used for migration , It helps togeneratecode for conversion of non compatible components / items .",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#277",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently launched a mobile app that has grown in popularity during the last week. The company started development in the cloud and did not initially follow security best practices during development of the mobile app. The mobile app gives customers the ability to use the platform anonymously. Platform architects use Amazon ElastiCache for Redis in a VPC to manage session affinity (sticky sessions) and cookies for customers.<br><br>The company's security team now mandates encryption in transit and encryption at rest for all traffic. A database specialist is using the AWS CLI to comply with this mandate.<br><br>Which combination of steps should the database specialist take to meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ABE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#277",
          "answers": [
            {
              "choice": "<p>A. Create a manual backup of the existing Redis replication group by using the create-snapshot command. Restore from the backup by using the create-replication-group command<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the --transit-encryption-enabled parameter on the new Redis replication group<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the --at-rest-encryption-enabled parameter on the existing Redis replication group<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the --transit-encryption-enabled parameter on the existing Redis replication group<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use the --at-rest-encryption-enabled parameter on the new Redis replication group<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create a manual backup of the existing Redis replication group by using the CreateBackupSelection command. Restore from the backup by using the StartRestoreJob command<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 277 discussion",
      "discusstion": [
        {
          "id": 744815,
          "date": "Wed 14 Dec 2022 08:07",
          "username": "Mardoyyy",
          "content": "ABE<br>TLS and Encryption at rest cannot be configured on existing cluster.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ABE"
        },
        {
          "id": 732154,
          "date": "Thu 01 Dec 2022 02:35",
          "username": "Sab",
          "content": "ABE<br>TLS and Encryption at rest cannot be configured on existing cluster.<br>Snapshot CLI command - create-snapshot<br>Restore snapshot to a new cluster :- create-cache-cluster or create-replication-group",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#278",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon DocumentDB (with MongoDB compatibility) to manage its complex documents. Users report that an Amazon DocumentDB cluster takes a long time to return query results. A database specialist must investigate and resolve this issue.<br><br>Which of the following can the database specialist use to investigate the query plan and analyze the query performance?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#278",
          "answers": [
            {
              "choice": "<p>A. AWS X-Ray deep linking<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon CloudWatch Logs Insights<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. MongoDB explain() method<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS CloudTrail with a custom filter<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 278 discussion",
      "discusstion": [
        {
          "id": 733088,
          "date": "Thu 01 Dec 2022 21:46",
          "username": "Sab",
          "content": "https://docs.aws.amazon.com/documentdb/latest/developerguide/user_diagnostics.html#user_diagnostics-query_plan",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 732158,
          "date": "Thu 01 Dec 2022 02:39",
          "username": "Sab",
          "content": "C<br>If a query runs slow, it could be because the query execution requires a full scan of the collection to choose the relevant documents. Sometimes creating appropriate indexes enables the query to run faster. To detect this scenario and decide the fields on which to create the indexes, use the explain command.<br><br>https://docs.aws.amazon.com/documentdb/latest/developerguide/user_diagnostics.html#user_diagnostics-query_plan",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#279",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's database specialist is migrating a production Amazon RDS for MySQL database to Amazon Aurora MySQL. The source database is configured for Multi-AZ. The company's production team wants to validate the target database before switching the associated application over to use the new database endpoint. The database specialist plans to use AWS Database Migration Service (AWS DMS) for the migration.<br><br>Which steps should the database specialist perform to meet the production team's requirement? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#279",
          "answers": [
            {
              "choice": "<p>A. Enable automatic backups on the source database<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Disable automatic backups on the source database<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable binary logging. Set the binlog format parameter to ROW on the source database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable binary logging. Set the binlog_format parameter to MIXED on the source database<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use the source primary database as the source endpoint for the DMS task. Configure the task as full load plus change data capture(CDC) to complete the migration<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use the source secondary database as the source endpoint for the DMS task. Configure the task as full load plus change data capture (CDC) to complete the migration<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 279 discussion",
      "discusstion": [
        {
          "id": 733728,
          "date": "Fri 02 Dec 2022 13:58",
          "username": "satishstechie",
          "content": "ACE should be right.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 731783,
          "date": "Wed 30 Nov 2022 18:11",
          "username": "DBA_MJF",
          "content": "I think the answer is ACE. However, C should be binlog_format (not binlog format(. The information below is from https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.Homogeneous.<br>When using an AWS-managed MySQL-compatible database as a source for AWS DMS, make sure that you have the following prerequisites for CDC:<br><br>To enable binary logs for RDS for MySQL and for RDS for MariaDB, enable automatic backups at the instance level.<br>Set the binlog_format parameter to \\\"ROW\\\".",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACE"
        }
      ]
    },
    {
      "question_id": "#280",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company hosts a highly available news website on AWS but needs to improve its page load time, especially during very popular news releases. Once a news page is published, it is very unlikely to change unless an error is identified. The company has decided to use Amazon ElastiCache.<br><br>What is the recommended strategy for this use case?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#280",
          "answers": [
            {
              "choice": "<p>A. Use ElastiCache for Memcached with write-through and long time to live (TTL)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use ElastiCache for Redis with lazy loading and short time to live (TTL)<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use ElastiCache for Memcached with lazy loading and short time to live (TTL)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use ElastiCache for Redis with write-through and long time to live (TTL)<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 280 discussion",
      "discusstion": [
        {
          "id": 759881,
          "date": "Wed 28 Dec 2022 14:26",
          "username": "parle101",
          "content": "D is the answer -<br>Since the news is not likely to change it will be there once it is written and with long TTL it will be there for longer time.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 736902,
          "date": "Tue 06 Dec 2022 15:39",
          "username": "catboySab",
          "content": "D right answerWith Write through, if a node goes down it won't cache again until there is a write operation. So if the pages are not modified, caching won't happen. Also, with Write-Through, all the writes will be cached and it can reason for memory being used be less frequently accessed pages. High TTL can further increase that problem.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 738582,
          "date": "Thu 08 Dec 2022 04:20",
          "username": "Sab",
          "content": "With Write through, if a node goes down it won't cache again until there is a write operation. So if the pages are not modified, caching won't happen. Also, with Write-Through, all the writes will be cached and it can reason for memory being used be less frequently accessed pages. High TTL can further increase that problem.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 733091,
          "date": "Thu 01 Dec 2022 21:48",
          "username": "Sabkhun",
          "content": "Elasticache for redis since application needs to be highly available. Memcache dont have HA.  Lazy Writing since there is no much modifications expected on page.How about the short TTL?",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 750578,
          "date": "Tue 20 Dec 2022 07:55",
          "username": "khun",
          "content": "How about the short TTL?",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#281",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company migrated an on-premises Oracle database to Amazon RDS for Oracle. A database specialist needs to monitor the latency of the database.<br><br>Which solution will meet this requirement with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#281",
          "answers": [
            {
              "choice": "<p>A. Publish RDS Performance insights metrics to Amazon CloudWatch. Add AWS CloudTrail filters to monitor database performance<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Install Oracle Statspack. Enable the performance statistics feature to collect, store, and display performance data to monitor database performance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable RDS Performance Insights to visualize the database load. Enable Enhanced Monitoring to view how different threads use the CPU<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new DB parameter group that includes the AllocatedStorage, DBInstanceClassMemory, and DBInstanceVCPU variables. Enable RDS Performance Insights<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 281 discussion",
      "discusstion": [
        {
          "id": 753372,
          "date": "Thu 22 Dec 2022 15:27",
          "username": "Kuntal97322",
          "content": "Can somebody please answer and explain the answers to the question no 271,272,277,282,283,284,285.<br>There are no discussions on these questions it seems.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 740225,
          "date": "Fri 09 Dec 2022 16:24",
          "username": "amulbaba",
          "content": "Enhance monitoring will give granular details and performance insights will give you database performance metrics",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#282",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A database administrator is working on transferring data from an on-premises Oracle instance to an Amazon RDS for Oracle DB instance through an AWS Database Migration Service (AWS DMS) task with ongoing replication only. The database administrator noticed that the migration task failed after running successfully for some time. The logs indicate that there was generic error. The database administrator wants to know which data definition language (DDL) statement caused this issue.<br><br>What should the database administrator do to identify' this issue in the MOST operationally efficient manner?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#282",
          "answers": [
            {
              "choice": "<p>A. Export AWS DMS logs to Amazon CloudWatch and identify the DDL statement from the AWS Management Console<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on logging for the AWS DMS task by setting the TARGET_LOAD action with the level of severity set to LOGGER_SEVERITY_DETAILED_DEBUG<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on DDL activity tracing in the RDS for Oracle DB instance parameter group<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on logging for the AWS DMS task by setting the TARGET_APPLY action with the level of severity' set to LOGGER_SEVERITY_DETAILED_DEBUG<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 282 discussion",
      "discusstion": [
        {
          "id": 750582,
          "date": "Tue 20 Dec 2022 07:58",
          "username": "khun",
          "content": "D. <br>TARGET_APPLY =E2=80=93 Data and data definition language (DDL) statements are applied to the target database.<br>LOGGER_SEVERITY_DETAILED_DEBUG =E2=80=93 All information is written to the log.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 732170,
          "date": "Thu 01 Dec 2022 03:03",
          "username": "Sab",
          "content": "Answer D<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.Logging.html",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    }
  ]
}