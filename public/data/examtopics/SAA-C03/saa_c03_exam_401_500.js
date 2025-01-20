var SAA_C03_Exam_401_500 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#401",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use the AWS Cloud to make an existing application highly available and resilient. The current version of the application resides in the company's data center. The application recently experienced data loss after a database server crashed because of an unexpected power outage.<br><br>The company needs a solution that avoids any single points of failure. The solution must give the application the ability to scale to meet user demand.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#401",
          "answers": [
            {
              "choice": "<p>Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon RDS DB instance in a Multi-AZ configuration.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group in a single Availability Zone. Deploy the database on an EC2 instance. Enable EC2 Auto Recovery.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon RDS DB instance with a read replica in a single Availability Zone. Promote the read replica to replace the primary DB instance if the primary DB instance fails.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Deploy the primary and secondary database servers on EC2 instances across multiple Availability Zones. Use Amazon Elastic Block Store (Amazon EBS) Multi-Attach to create shared storage between the instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 401 discussion",
      "discusstion": [
        {
          "id": 1110350,
          "date": "Sun 30 Jun 2024 07:29",
          "username": "pentium75",
          "content": "B has app servers in a single AZ and a database on a single instance<br>C has both DB replicas in a single AZ<br>D does not work (EBS Multi-Attach requires EC2 instances in same AZ), and if it would work then the EBS volume would be an SPOF",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 994044,
          "date": "Thu 29 Feb 2024 14:51",
          "username": "Guru4Cloud",
          "content": "Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon RDS DB instance in a Multi-AZ configuration",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 973993,
          "date": "Tue 06 Feb 2024 18:55",
          "username": "czyboi",
          "content": "Why is C incorrect ?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C is incorrect because the read replica also resides in a single AZ</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 994047,
          "date": "Thu 29 Feb 2024 14:53",
          "username": "Guru4Cloud",
          "content": "C is incorrect because the read replica also resides in a single AZ",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 910000,
          "date": "Thu 30 Nov 2023 10:10",
          "username": "antropaws",
          "content": "A most def.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 906316,
          "date": "Sat 25 Nov 2023 06:45",
          "username": "TariqKipkemei",
          "content": "Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon RDS DB instance in a Multi-AZ configuration.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 850647,
          "date": "Tue 26 Sep 2023 03:38",
          "username": "Buruguduystunstugudunstuy",
          "content": "The correct answer is A. Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon RDS DB instance in a Multi-AZ configuration.<br><br>To make an existing application highly available and resilient while avoiding any single points of failure and giving the application the ability to scale to meet user demand, the best solution would be to deploy the application servers using Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones and use an Amazon RDS DB instance in a Multi-AZ configuration.<br><br>By using an Amazon RDS DB instance in a Multi-AZ configuration, the database is automatically replicated across multiple Availability Zones, ensuring that the database is highly available and can withstand the failure of a single Availability Zone. This provides fault tolerance and avoids any single points of failure.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 846892,
          "date": "Fri 22 Sep 2023 09:39",
          "username": "Thief",
          "content": "Why not D?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D is incorrect because using Multi-Attach EBS adds complexity and doesn't provide automatic DB failover</li><li>Multi-Attach does not work across Availability Zones.</li><li>Answer D, deploying the primary and secondary database servers on EC2 instances across multiple Availability Zones and using Amazon Elastic Block Store (Amazon EBS) Multi-Attach to create shared storage between the instances, may provide high availability for the database but may introduce additional complexity, and management overhead, and potential performance issues.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 994048,
          "date": "Thu 29 Feb 2024 14:54",
          "username": "Guru4Cloud",
          "content": "D is incorrect because using Multi-Attach EBS adds complexity and doesn't provide automatic DB failover",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1110347,
          "date": "Sun 30 Jun 2024 07:27",
          "username": "pentium75",
          "content": "Multi-Attach does not work across Availability Zones.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 850643,
          "date": "Tue 26 Sep 2023 03:34",
          "username": "Buruguduystunstugudunstuy",
          "content": "Answer D, deploying the primary and secondary database servers on EC2 instances across multiple Availability Zones and using Amazon Elastic Block Store (Amazon EBS) Multi-Attach to create shared storage between the instances, may provide high availability for the database but may introduce additional complexity, and management overhead, and potential performance issues.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 844532,
          "date": "Wed 20 Sep 2023 04:31",
          "username": "WherecanIstart",
          "content": "Highly availableMulti-AZ approach",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 841585,
          "date": "Sun 17 Sep 2023 04:48",
          "username": "nileshlg",
          "content": "Answers is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 841177,
          "date": "Sat 16 Sep 2023 16:26",
          "username": "[Removed]",
          "content": "Option A is the correct solution. Deploying the application servers in an Auto Scaling group across multiple Availability Zones (AZs) ensures high availability and fault tolerance. An Auto Scaling group allows the application to scale horizontally to meet user demand. Using Amazon RDS DB instance in a Multi-AZ configuration ensures that the database is automatically replicated to a standby instance in a different AZ. This provides database redundancy and avoids any single point of failure.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 837972,
          "date": "Wed 13 Sep 2023 14:30",
          "username": "quentin17",
          "content": "Highly available<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No because instance and read replica \\\"in a single Availability Zone\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1110348,
          "date": "Sun 30 Jun 2024 07:27",
          "username": "pentium75",
          "content": "No because instance and read replica \\\"in a single Availability Zone\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 836005,
          "date": "Mon 11 Sep 2023 13:04",
          "username": "KAUS2",
          "content": "Yes , agree with A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 835381,
          "date": "Sun 10 Sep 2023 20:06",
          "username": "cegama543",
          "content": "agree with that",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#402",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to ingest and handle large amounts of streaming data that its application generates. The application runs on Amazon EC2 instances and sends data to Amazon Kinesis Data Streams, which is configured with default settings. Every other day, the application consumes the data and writes the data to an Amazon S3 bucket for business intelligence (BI) processing. The company observes that Amazon S3 is not receiving all the data that the application sends to Kinesis Data Streams.<br><br>What should a solutions architect do to resolve this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#402",
          "answers": [
            {
              "choice": "<p>Update the Kinesis Data Streams default settings by modifying the data retention period.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Update the application to use the Kinesis Producer Library (KPL) to send the data to Kinesis Data Streams.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Turn on S3 Versioning within the S3 bucket to preserve every version of every object that is ingested in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 402 discussion",
      "discusstion": [
        {
          "id": 844535,
          "date": "Mon 20 Mar 2023 05:37",
          "username": "WherecanIstart",
          "content": "\\\"A Kinesis data stream stores records from 24 hours by default, up to 8760 hours (365 days).\\\"<br>https://docs.aws.amazon.com/streams/latest/dev/kinesis-extended-retention.html<br><br>The question mentioned Kinesis data stream default settings and \\\"every other day\\\". After 24hrs, the data isn't in the Data stream if the default settings is not modified to store data more than 24hrs.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thank you for the link</li></ul>",
          "upvote_count": "30",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1304453,
          "date": "Tue 29 Oct 2024 14:00",
          "username": "babayomi",
          "content": "Thank you for the link",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835380,
          "date": "Fri 10 Mar 2023 21:04",
          "username": "cegama543",
          "content": "C. Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams.<br><br>The best option is to update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams. Kinesis Data Streams scales horizontally by increasing or decreasing the number of shards, which controls the throughput capacity of the stream. By increasing the number of shards, the application will be able to send more data to Kinesis Data Streams, which can help ensure that S3 receives all the data.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer C:<br>C. Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams.<br><br>- Answer C updates the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams. By increasing the number of shards, the data is distributed across multiple shards, which allows for increased throughput and ensures that all data is ingested and processed by Kinesis Data Streams.<br>- Monitoring the Kinesis Data Streams and adjusting the number of shards as needed to handle changes in data throughput can ensure that the application can handle large amounts of streaming data.</li><li>@cegama543, my apologies. Moderator if you can disapprove of the post above? I made a mistake. It is supposed to be intended on the post that I submitted.<br><br>Thanks.</li><li>lets say you had infinity shards... if the retention period is 24 hours and you get the data every 48 hours, you will lose 24 hours of data no matter the amount of shards no?</li><li>Amazon Kinesis Data Streams supports changes to the data record retention period of your data stream. A Kinesis data stream is an ordered sequence of data records meant to be written to and read from in real time. Data records are therefore stored in shards in your stream temporarily. The time period from when a record is added to when it is no longer accessible is called the retention period. A Kinesis data stream stores records from 24 hours by default, up to 8760 hours (365 days).</li></ul>",
          "upvote_count": "17",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850630,
          "date": "Sun 26 Mar 2023 03:12",
          "username": "Buruguduystunstugudunstuy",
          "content": "Answer C:<br>C. Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams.<br><br>- Answer C updates the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams. By increasing the number of shards, the data is distributed across multiple shards, which allows for increased throughput and ensures that all data is ingested and processed by Kinesis Data Streams.<br>- Monitoring the Kinesis Data Streams and adjusting the number of shards as needed to handle changes in data throughput can ensure that the application can handle large amounts of streaming data.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>@cegama543, my apologies. Moderator if you can disapprove of the post above? I made a mistake. It is supposed to be intended on the post that I submitted.<br><br>Thanks.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 850633,
          "date": "Sun 26 Mar 2023 03:18",
          "username": "Buruguduystunstugudunstuy",
          "content": "@cegama543, my apologies. Moderator if you can disapprove of the post above? I made a mistake. It is supposed to be intended on the post that I submitted.<br><br>Thanks.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 842791,
          "date": "Sat 18 Mar 2023 14:13",
          "username": "CapJackSparrow",
          "content": "lets say you had infinity shards... if the retention period is 24 hours and you get the data every 48 hours, you will lose 24 hours of data no matter the amount of shards no?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Amazon Kinesis Data Streams supports changes to the data record retention period of your data stream. A Kinesis data stream is an ordered sequence of data records meant to be written to and read from in real time. Data records are therefore stored in shards in your stream temporarily. The time period from when a record is added to when it is no longer accessible is called the retention period. A Kinesis data stream stores records from 24 hours by default, up to 8760 hours (365 days).</li></ul>",
          "upvote_count": "15",
          "selected_answers": ""
        },
        {
          "id": 843922,
          "date": "Sun 19 Mar 2023 17:10",
          "username": "enzomv",
          "content": "Amazon Kinesis Data Streams supports changes to the data record retention period of your data stream. A Kinesis data stream is an ordered sequence of data records meant to be written to and read from in real time. Data records are therefore stored in shards in your stream temporarily. The time period from when a record is added to when it is no longer accessible is called the retention period. A Kinesis data stream stores records from 24 hours by default, up to 8760 hours (365 days).",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1254619,
          "date": "Thu 25 Jul 2024 01:15",
          "username": "abriggy",
          "content": "Answer is C<br><br>Issue with A) Update the Kinesis Data Streams default settings by modifying the data retention period.is below<br><br>Limitation: Modifying the data retention period affects how long data is kept in the stream, but it does not address the issue of the stream's capacity to ingest data. If the stream is unable to handle the incoming data volume, extending the retention period will not resolve the data loss issue.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1126207,
          "date": "Thu 18 Jan 2024 22:13",
          "username": "awsgeek75",
          "content": "Every other day,48 hours<br>Default settings24 hours<br><br>B: Development library so won't help<br>C: More shards may retain more data but they will have same limitation of 24 hours retention<br>D: Irrelevant<br><br>A: Increase the default limit from 24 hours to 48 hours",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1110352,
          "date": "Sun 31 Dec 2023 08:31",
          "username": "pentium75",
          "content": "\\\"Default settings\\\"24 hour retention",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1090363,
          "date": "Thu 07 Dec 2023 15:25",
          "username": "Murtadhaceit",
          "content": "KDS has two modes:<br>1. Provisioned Mode: Answer C would be correct if KDS runs in this mode. We need to increase the number of shards.<br>2. On-Demand: Scales automatically, which means it doesn't need to adjust the number of shards based on observed throughput.<br><br>And since the question does not mention which type, I would go with On-demand. Therefore, A is the correct answer.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1052485,
          "date": "Tue 24 Oct 2023 06:20",
          "username": "TariqKipkemei",
          "content": "Data records are stored in shards in a kinesis data stream temporarily. The time period from when a record is added, to when it is no longer accessible is called the retention period. This time period is 24 hours by default, but could be adjusted to 365 days.<br>Kinesis Data Streams automatically scales the number of shards in response to changes in data volume and traffic, so this rules out option C.<br><br>https://docs.aws.amazon.com/streams/latest/dev/service-sizes-and-limits.html#:~:textthe%20number%20of-,shards,-in%20response%20to",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1016746,
          "date": "Mon 25 Sep 2023 13:32",
          "username": "Ramdi1",
          "content": "I have only voted A because it mentions the default setting in Kinesis, if it did not mention that then I would look to increase the Shards. By default it is 24 hours and can go to 365 days. I think the question should be rephrased slightly. I had trouble deciding between A & C. Also apparently the most voted answer is the correct answer as per some advice I was given.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 997236,
          "date": "Sun 03 Sep 2023 03:54",
          "username": "BrijMohan08",
          "content": "Default retention is 24 hrs, but the data read is every other day, so the S3 will never receive the data, Change the default retention period to 48 hours.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 994028,
          "date": "Wed 30 Aug 2023 13:41",
          "username": "Guru4Cloud",
          "content": "By default, a Kinesis data stream is created with one shard. If the data throughput to the stream is higher than the capacity of the single shard, the data stream may not be able to handle all the incoming data, and some data may be lost.<br>Therefore, to handle the high volume of data that the application sends to Kinesis Data Streams, the number of Kinesis shards should be increased to handle the required throughput.<br>Kinesis Data Streams shards are the basic units of scalability and availability. Each shard can process up to 1,000 records per second with a maximum of 1 MB of data per second. If the application is sending more data to Kinesis Data Streams than the shards can handle, then some of the data will be dropped.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>If you have doubts, Please read about Kinesis Data Streams shards.<br>Ans: A is not the correct answer here</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 994031,
          "date": "Wed 30 Aug 2023 13:43",
          "username": "Guru4Cloud",
          "content": "If you have doubts, Please read about Kinesis Data Streams shards.<br>Ans: A is not the correct answer here",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 979062,
          "date": "Sat 12 Aug 2023 03:23",
          "username": "Amycert",
          "content": "the default retention period is 24 hours \\\"The default retention period of 24 hours covers scenarios where intermittent lags in processing require catch-up with the real-time data. \\\"<br>so we should increment this",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 962563,
          "date": "Tue 25 Jul 2023 11:51",
          "username": "hsinchang",
          "content": "As \\\"Default settings\\\" is mentioned here, I vote for A.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 947487,
          "date": "Sun 09 Jul 2023 20:30",
          "username": "jaydesai8",
          "content": "keyword here is - default settings and every other day and since \\\"A Kinesis data stream stores records from 24 hours by default, up to 8760 hours (365 days).\\\"<br>https://docs.aws.amazon.com/streams/latest/dev/kinesis-extended-retention.html<br><br>Will go with A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 913922,
          "date": "Sat 03 Jun 2023 23:31",
          "username": "jayce5",
          "content": "C is wrong because even if you update the number of Kinesis shards, you still need to change the default data retention period first. Otherwise, you would lose data after 24 hours.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 910005,
          "date": "Tue 30 May 2023 09:16",
          "username": "antropaws",
          "content": "A is unrelated to the issue. The correct answer is C.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 909528,
          "date": "Mon 29 May 2023 18:04",
          "username": "omoakin",
          "content": "Correct Ans. is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 891375,
          "date": "Sun 07 May 2023 14:38",
          "username": "smd_",
          "content": "By default, a Kinesis data stream is created with one shard. If the data throughput to the stream is higher than the capacity of the single shard, the data stream may not be able to handle all the incoming data, and some data may be lost.<br><br>Therefore, to handle the high volume of data that the application sends to Kinesis Data Streams, the number of Kinesis shards should be increased to handle the required throughput",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#403",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A developer has an application that uses an AWS Lambda function to upload files to Amazon S3 and needs the required permissions to perform the task. The developer already has an IAM user with valid IAM credentials required for Amazon S3.<br><br>What should a solutions architect do to grant the permissions?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#403",
          "answers": [
            {
              "choice": "<p>Add required IAM permissions in the resource policy of the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a signed request using the existing IAM credentials in the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new IAM user and use the existing IAM credentials in the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM execution role with the required permissions and attach the IAM role to the Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 403 discussion",
      "discusstion": [
        {
          "id": 850525,
          "date": "Sat 25 Mar 2023 23:35",
          "username": "Buruguduystunstugudunstuy",
          "content": "To grant the necessary permissions to an AWS Lambda function to upload files to Amazon S3, a solutions architect should create an IAM execution role with the required permissions and attach the IAM role to the Lambda function. This approach follows the principle of least privilege and ensures that the Lambda function can only access the resources it needs to perform its specific task.<br><br>Therefore, the correct answer is D. Create an IAM execution role with the required permissions and attach the IAM role to the Lambda function.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Oh you're here</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1274062,
          "date": "Wed 28 Aug 2024 14:55",
          "username": "AWSSURI",
          "content": "Oh you're here",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 993988,
          "date": "Wed 30 Aug 2023 12:57",
          "username": "Guru4Cloud",
          "content": "Create Lambda execution role and attach existing S3 IAM role to the lambda function",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 846049,
          "date": "Tue 21 Mar 2023 15:15",
          "username": "Bilalglg93350",
          "content": "D. Cr=C3=A9ez un r=C3=B4le d'ex=C3=A9cution IAM avec les autorisations requises et attachez le r=C3=B4le IAM =C3=A0 la fonction Lambda.<br><br>L'architecte de solutions doit cr=C3=A9er un r=C3=B4le d'ex=C3=A9cution IAM ayant les autorisations n=C3=A9cessaires pour acc=C3=A9der =C3=A0 Amazon S3 et effectuer les op=C3=A9rations requises (par exemple, charger des fichiers). Ensuite, le r=C3=B4le doit =C3=AAtre associ=C3=A9 =C3=A0 la fonction Lambda, de sorte que la fonction puisse assumer ce r=C3=B4le et avoir les autorisations n=C3=A9cessaires pour interagir avec Amazon S3.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 841576,
          "date": "Fri 17 Mar 2023 05:35",
          "username": "nileshlg",
          "content": "Answer is D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 840669,
          "date": "Thu 16 Mar 2023 09:03",
          "username": "kampatra",
          "content": "D - correct ans",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 836356,
          "date": "Sat 11 Mar 2023 19:01",
          "username": "sitha",
          "content": "Create Lambda execution role and attach existing S3 IAM role to the lambda function",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835834,
          "date": "Sat 11 Mar 2023 11:36",
          "username": "ktulu2602",
          "content": "Definitely D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835638,
          "date": "Sat 11 Mar 2023 04:58",
          "username": "Nithin1119",
          "content": "ddddddd",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835202,
          "date": "Fri 10 Mar 2023 17:11",
          "username": "[Removed]",
          "content": "dddddddd",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#404",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed a serverless application that invokes an AWS Lambda function when new documents are uploaded to an Amazon S3 bucket. The application uses the Lambda function to process the documents. After a recent marketing campaign, the company noticed that the application did not process many of the documents.<br><br>What should a solutions architect do to improve the architecture of this application?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#404",
          "answers": [
            {
              "choice": "<p>Set the Lambda function's runtime timeout value to 15 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an S3 bucket replication policy. Stage the documents in the S3 bucket for later processing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an additional Lambda function. Load balance the processing of the documents across the two Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Simple Queue Service (Amazon SQS) queue. Send the requests to the queue. Configure the queue as an event source for Lambda.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 404 discussion",
      "discusstion": [
        {
          "id": 850511,
          "date": "Sat 25 Mar 2023 23:07",
          "username": "Buruguduystunstugudunstuy",
          "content": "To improve the architecture of this application, the best solution would be to use Amazon Simple Queue Service (Amazon SQS) to buffer the requests and decouple the S3 bucket from the Lambda function. This will ensure that the documents are not lost and can be processed at a later time if the Lambda function is not available.<br><br>This will ensure that the documents are not lost and can be processed at a later time if the Lambda function is not available. By using Amazon SQS, the architecture is decoupled and the Lambda function can process the documents in a scalable and fault-tolerant manner.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 993972,
          "date": "Wed 30 Aug 2023 12:44",
          "username": "Guru4Cloud",
          "content": "D. Create an Amazon Simple Queue Service (Amazon SQS) queue. Send the requests to the queue. Configure the queue as an event source for Lambd",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 906322,
          "date": "Thu 25 May 2023 06:02",
          "username": "TariqKipkemei",
          "content": "D is the best approach",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 850645,
          "date": "Sun 26 Mar 2023 03:36",
          "username": "Russs99",
          "content": "D is the correct answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 846044,
          "date": "Tue 21 Mar 2023 15:11",
          "username": "Bilalglg93350",
          "content": "D. Cr=C3=A9ez une file d'attente Amazon Simple Queue Service (Amazon SQS). Envoyez les demandes =C3=A0 la file d'attente. Configurez la file d'attente en tant que source d'=C3=A9v=C3=A9nement pour Lambda.<br><br>Cette solution permet de g=C3=A9rer efficacement les pics de charge et d'=C3=A9viter la perte de documents en cas d'augmentation soudaine du trafic. Lorsque de nouveaux documents sont charg=C3=A9s dans le compartiment Amazon S3, les demandes sont envoy=C3=A9es =C3=A0 la file d'attente Amazon SQS, qui agit comme un tampon. La fonction Lambda est d=C3=A9clench=C3=A9e en fonction des =C3=A9v=C3=A9nements dans la file d'attente, ce qui permet un traitement =C3=A9quilibr=C3=A9 et =C3=A9vite que l'application ne soit submerg=C3=A9e par un grand nombre de documents simultan=C3=A9s.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Frrom Google Translate:<br><br>Create an Amazon Simple Queue Service (Amazon SQS) queue. Send requests to the queue. Configure the queue as an event source for Lambda.<br><br>This solution makes it possible to effectively manage load peaks and avoid the loss of documents in the event of a sudden increase in traffic. When new documents are uploaded to the Amazon S3 bucket, requests are sent to the Amazon SQS queue, which acts as a buffer. The Lambda function is triggered based on events in the queue, which provides balanced processing and prevents the application from being overwhelmed by a large number of concurrent documents.</li><li>exactement. si je pouvais explique come cela en Francais aussi</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1315660,
          "date": "Thu 21 Nov 2024 06:38",
          "username": "JA2018",
          "content": "Frrom Google Translate:<br><br>Create an Amazon Simple Queue Service (Amazon SQS) queue. Send requests to the queue. Configure the queue as an event source for Lambda.<br><br>This solution makes it possible to effectively manage load peaks and avoid the loss of documents in the event of a sudden increase in traffic. When new documents are uploaded to the Amazon S3 bucket, requests are sent to the Amazon SQS queue, which acts as a buffer. The Lambda function is triggered based on events in the queue, which provides balanced processing and prevents the application from being overwhelmed by a large number of concurrent documents.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 850644,
          "date": "Sun 26 Mar 2023 03:35",
          "username": "Russs99",
          "content": "exactement. si je pouvais explique come cela en Francais aussi",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 844538,
          "date": "Mon 20 Mar 2023 05:40",
          "username": "WherecanIstart",
          "content": "D is the correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 840671,
          "date": "Thu 16 Mar 2023 09:05",
          "username": "kampatra",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 837533,
          "date": "Mon 13 Mar 2023 02:40",
          "username": "[Removed]",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835205,
          "date": "Fri 10 Mar 2023 17:12",
          "username": "[Removed]",
          "content": "dddddddd",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#405",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing the architecture for a software demonstration environment. The environment will run on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). The system will experience significant increases in traffic during working hours but is not required to operate on weekends.<br><br>Which combination of actions should the solutions architect take to ensure that the system can scale to meet demand? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: DE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#405",
          "answers": [
            {
              "choice": "<p>A. Use AWS Auto Scaling to adjust the ALB capacity based on request rate.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Auto Scaling to scale the capacity of the VPC internet gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Launch the EC2 instances in multiple AWS Regions to distribute the load across Regions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a target tracking scaling policy to scale the Auto Scaling group based on instance CPU utilization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use scheduled scaling to change the Auto Scaling group minimum, maximum, and desired capacity to zero for weekends. Revert to the default values at the start of the week.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 878562,
          "date": "Sun 23 Apr 2023 17:49",
          "username": "\t\t\t\tJoe94KR\t\t\t",
          "content": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html#target-tracking-choose-metrics<br><br>Based on docs, ASG can't track ALB's request rate, so the answer is D&E<br>meanwhile ASG can track CPU rates.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 859096,
          "date": "Sun 02 Apr 2023 18:46",
          "username": "\t\t\t\tkraken21\t\t\t",
          "content": "Scaling should be at the ASG not ALB.  So, not sure about \\\"Use AWS Auto Scaling to adjust the ALB capacity based on request rate\\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 858514,
          "date": "Sun 02 Apr 2023 06:30",
          "username": "\t\t\t\tchannn\t\t\t",
          "content": "A.  Use AWS Auto Scaling to adjust the ALB capacity based on request rate: This will allow the system to scale up or down based on incoming traffic demand. The solutions architect should use AWS Auto Scaling to monitor the request rate and adjust the ALB capacity as needed.<br>D.  Use a target tracking scaling policy to scale the Auto Scaling group based on instance CPU utilization: This will allow the system to scale up or down based on the CPU utilization of the EC2 instances in the Auto Scaling group. The solutions architect should use a target tracking scaling policy to maintain a specific CPU utilization target and adjust the number of EC2 instances in the Auto Scaling group accordingly.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 852773,
          "date": "Tue 28 Mar 2023 06:40",
          "username": "\t\t\t\tneosis91\t\t\t",
          "content": "A.  Use a target tracking scaling policy to scale the Auto Scaling group based on instance CPU utilization. This approach allows the Auto Scaling group to automatically adjust the number of instances based on the specified metric, ensuring that the system can scale to meet demand during working hours.<br>D.  Use scheduled scaling to change the Auto Scaling group minimum, maximum, and desired capacity to zero for weekends. Revert to the default values at the start of the week. This approach allows the Auto Scaling group to reduce the number of instances to zero during weekends when traffic is expected to be low. It will help the organization to save costs by not paying for instances that are not needed during weekends.<br><br>Therefore, options A and D are the correct answers. Options B and C are not relevant to the scenario, and option E is not a scalable solution as it would require manual intervention to adjust the group capacity every week.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 852731,
          "date": "Tue 28 Mar 2023 05:31",
          "username": "\t\t\t\tzooba72\t\t\t",
          "content": "This is why I don't believe A is correct use auto scaling to adjust the ALB .... D&E",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 850657,
          "date": "Sun 26 Mar 2023 03:49",
          "username": "\t\t\t\tRusss99\t\t\t",
          "content": "AD<br>D there is no requirement for cost minimization in the scenario therefore, A & D are the answers",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 850493,
          "date": "Sat 25 Mar 2023 22:56",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "A comparison of Answers D and E VERSUS another possible answer Answers A and E:<br><br>Answers D and E:D.  Use a target tracking scaling policy to scale the Auto Scaling group based on instance CPU utilization.E.  Use scheduled scaling to change the Auto Scaling group minimum, maximum, and desired capacity to zero for weekends. Revert to the default values at the start of the week.<br><br>- Answer D scales the Auto Scaling group based on instance CPU utilization, which ensures that the number of instances in the group can be adjusted to handle the increase in traffic during working hours and reduce capacity during periods of low traffic.<br>- Answer E uses scheduled scaling to change the Auto Scaling group minimum, maximum, and desired capacity to zero for weekends, which ensures that the Auto Scaling group scales down to zero during weekends to save costs.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answers A and E:A.  Use AWS Auto Scaling to adjust the ALB capacity based on request rate.E.  Use scheduled scaling to change the Auto Scaling group minimum, maximum, and desired capacity to zero for weekends. Revert to the default values at the start of the week.<br><br>- Answer A adjusts the capacity of the ALB based on request rate, which ensures that the ALB can handle the increase in traffic during working hours and reduce capacity during periods of low traffic.<br>- Answer E uses scheduled scaling to change the Auto Scaling group minimum, maximum, and desired capacity to zero for weekends, which ensures that the Auto Scaling group scales down to zero during weekends to save costs.</li><li>Comparing the two options, both Answers D and A are valid choices for scaling the application based on demand. However, Answer D scales the Auto Scaling group based on instance CPU utilization, which is a more granular metric than request rate and can provide better performance and cost optimization. Answer A only scales the ALB based on the request rate, which may not be sufficient for handling sudden spikes in traffic.<br><br>Answer E is a common choice for scaling down to zero during weekends to save costs. Both Answers D and A can be used in conjunction with Answer E to ensure that the Auto Scaling group scales down to zero during weekends. However, Answer D provides more granular control over the scaling of the Auto Scaling group based on instance CPU utilization, which can result in better performance and cost optimization.</li><li>In conclusion, answers D and E provide a more granular and flexible solution for scaling the application based on demand and scaling down to zero during weekends, while Answers A and E may not be as granular and may not provide as much performance and cost optimization.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 850496,
          "date": "Sat 25 Mar 2023 22:57",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Answers A and E:A.  Use AWS Auto Scaling to adjust the ALB capacity based on request rate.E.  Use scheduled scaling to change the Auto Scaling group minimum, maximum, and desired capacity to zero for weekends. Revert to the default values at the start of the week.<br><br>- Answer A adjusts the capacity of the ALB based on request rate, which ensures that the ALB can handle the increase in traffic during working hours and reduce capacity during periods of low traffic.<br>- Answer E uses scheduled scaling to change the Auto Scaling group minimum, maximum, and desired capacity to zero for weekends, which ensures that the Auto Scaling group scales down to zero during weekends to save costs.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Comparing the two options, both Answers D and A are valid choices for scaling the application based on demand. However, Answer D scales the Auto Scaling group based on instance CPU utilization, which is a more granular metric than request rate and can provide better performance and cost optimization. Answer A only scales the ALB based on the request rate, which may not be sufficient for handling sudden spikes in traffic.<br><br>Answer E is a common choice for scaling down to zero during weekends to save costs. Both Answers D and A can be used in conjunction with Answer E to ensure that the Auto Scaling group scales down to zero during weekends. However, Answer D provides more granular control over the scaling of the Auto Scaling group based on instance CPU utilization, which can result in better performance and cost optimization.</li><li>In conclusion, answers D and E provide a more granular and flexible solution for scaling the application based on demand and scaling down to zero during weekends, while Answers A and E may not be as granular and may not provide as much performance and cost optimization.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 850497,
          "date": "Sat 25 Mar 2023 22:59",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Comparing the two options, both Answers D and A are valid choices for scaling the application based on demand. However, Answer D scales the Auto Scaling group based on instance CPU utilization, which is a more granular metric than request rate and can provide better performance and cost optimization. Answer A only scales the ALB based on the request rate, which may not be sufficient for handling sudden spikes in traffic.<br><br>Answer E is a common choice for scaling down to zero during weekends to save costs. Both Answers D and A can be used in conjunction with Answer E to ensure that the Auto Scaling group scales down to zero during weekends. However, Answer D provides more granular control over the scaling of the Auto Scaling group based on instance CPU utilization, which can result in better performance and cost optimization.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>In conclusion, answers D and E provide a more granular and flexible solution for scaling the application based on demand and scaling down to zero during weekends, while Answers A and E may not be as granular and may not provide as much performance and cost optimization.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 850499,
          "date": "Sat 25 Mar 2023 22:59",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "In conclusion, answers D and E provide a more granular and flexible solution for scaling the application based on demand and scaling down to zero during weekends, while Answers A and E may not be as granular and may not provide as much performance and cost optimization.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 849335,
          "date": "Fri 24 Mar 2023 14:52",
          "username": "\t\t\t\tthaotnt\t\t\t",
          "content": "A: The system will experience significant increases in traffic during working hours<br>E: but is not required to operate on weekends.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 846349,
          "date": "Tue 21 Mar 2023 22:02",
          "username": "\t\t\t\tKunj7\t\t\t",
          "content": "Even though the question doesn't say anything about CPU utilisation. It does mention there will be \\\" increase in traffic during working hours \\\" which means the CPU utilisation will go up for the instance. Hence I think D & E is still correct.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 843786,
          "date": "Sun 19 Mar 2023 14:49",
          "username": "\t\t\t\tisoman\t\t\t",
          "content": "Auto scaling group can't adjust ALB capacity.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>AWS Auto Scaling can adjust the Application Load Balancer (ALB) capacity based on request rate. You can use target tracking scaling policies to scale your ALB automatically based on a target value for a specific metric. For example, you can create a target tracking scaling policy that maintains an average request count per target of 1000 requests per minute. When you use target tracking scaling policies with Application Load Balancers, you can specify a target value for a request metric such as RequestCountPerTarget.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 858286,
          "date": "Sat 01 Apr 2023 22:50",
          "username": "\t\t\t\tklayytech\t\t\t",
          "content": "AWS Auto Scaling can adjust the Application Load Balancer (ALB) capacity based on request rate. You can use target tracking scaling policies to scale your ALB automatically based on a target value for a specific metric. For example, you can create a target tracking scaling policy that maintains an average request count per target of 1000 requests per minute. When you use target tracking scaling policies with Application Load Balancers, you can specify a target value for a request metric such as RequestCountPerTarget.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 838174,
          "date": "Mon 13 Mar 2023 19:45",
          "username": "\t\t\t\tUnluckyDucky\t\t\t",
          "content": "Weird question, there's no mention to high CPU utilization therefore option D seems irrelevant.<br><br>Option A - Dealing with increased traffic by scaling according to request rate.<br>Option E - Obvious reasons, shutdown on weekend, revert back when week starts.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>i agree. AE is correct answer</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 843409,
          "date": "Sun 19 Mar 2023 04:57",
          "username": "\t\t\t\ttest_devops_aws\t\t\t",
          "content": "i agree. AE is correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 837531,
          "date": "Mon 13 Mar 2023 02:38",
          "username": "\t\t\t\tdcp\t\t\t",
          "content": "DE is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 836651,
          "date": "Sun 12 Mar 2023 02:08",
          "username": "\t\t\t\topswill\t\t\t",
          "content": "I think should be DE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 836329,
          "date": "Sat 11 Mar 2023 18:36",
          "username": "\t\t\t\tsitha\t\t\t",
          "content": "AE is the correct and relevant answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 835970,
          "date": "Sat 11 Mar 2023 13:26",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "A & E are the correct options.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 835635,
          "date": "Sat 11 Mar 2023 04:55",
          "username": "\t\t\t\tNithin1119\t\t\t",
          "content": "A,E all the other options are irrelevant to the given scenario",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 835206,
          "date": "Fri 10 Mar 2023 17:14",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "dedededede",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        }
      ]
    },
    {
      "question_id": "#406",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a two-tiered architecture that includes a public subnet and a database subnet. The web servers in the public subnet must be open to the internet on port 443. The Amazon RDS for MySQL DB instance in the database subnet must be accessible only to the web servers on port 3306.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#406",
          "answers": [
            {
              "choice": "<p>Create a network ACL for the public subnet. Add a rule to deny outbound traffic to 0.0.0.0/0 on port 3306.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a security group for the DB instance. Add a rule to allow traffic from the public subnet CIDR block on port 3306.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a security group for the web servers in the public subnet. Add a rule to allow traffic from 0.0.0.0/0 on port 443.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a security group for the DB instance. Add a rule to allow traffic from the web servers' security group on port 3306.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a security group for the DB instance. Add a rule to deny all traffic except traffic from the web servers' security group on port 3306.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 406 discussion",
      "discusstion": [
        {
          "id": 993395,
          "date": "Thu 29 Feb 2024 21:19",
          "username": "Guru4Cloud",
          "content": "Remember guys that SG is not used for Deny action, just Allow",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 889182,
          "date": "Sat 04 Nov 2023 08:58",
          "username": "datmd77",
          "content": "Remember guys that SG is not used for Deny action, just Allow",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1195096,
          "date": "Sun 13 Oct 2024 20:46",
          "username": "waldirlsantos",
          "content": "The following are the default rules for a security group that you create:<br><br>Allows no inbound traffic<br><br>Allows all outbound traffic",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 1053481,
          "date": "Thu 25 Apr 2024 07:38",
          "username": "TariqKipkemei",
          "content": "'must be accessible only to the web servers' is the key here.<br>Option B almost threw me off, but with this then all that exists in the public subnet would be able to access the DB security group.<br>Therefore C,D well applies the principle of least privilege.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 850473,
          "date": "Mon 25 Sep 2023 21:26",
          "username": "Buruguduystunstugudunstuy",
          "content": "To meet the requirements of allowing access to the web servers in the public subnet on port 443 and the Amazon RDS for MySQL DB instance in the database subnet on port 3306, the best solution would be to create a security group for the web servers and another security group for the DB instance, and then define the appropriate inbound and outbound rules for each security group.<br><br>1. Create a security group for the web servers in the public subnet. Add a rule to allow traffic from 0.0.0.0/0 on port 443.<br>2. Create a security group for the DB instance. Add a rule to allow traffic from the web servers' security group on port 3306.<br><br>This will allow the web servers in the public subnet to receive traffic from the internet on port 443, and the Amazon RDS for MySQL DB instance in the database subnet to receive traffic only from the web servers on port 3306.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 840681,
          "date": "Sat 16 Sep 2023 08:18",
          "username": "kampatra",
          "content": "CD - Correct ans.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 839036,
          "date": "Thu 14 Sep 2023 16:28",
          "username": "Eden",
          "content": "I choose CE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 837664,
          "date": "Wed 13 Sep 2023 05:48",
          "username": "lili_9",
          "content": "CE support @sitha",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836323,
          "date": "Mon 11 Sep 2023 17:32",
          "username": "sitha",
          "content": "Answer: CE . The solution is to deny accessing DB from Internet and allow only access from webserver.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835968,
          "date": "Mon 11 Sep 2023 12:24",
          "username": "KAUS2",
          "content": "C & D are the right choices. correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 835715,
          "date": "Mon 11 Sep 2023 07:18",
          "username": "KS2020",
          "content": "why not CE?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>By default Security Group deny all trafic and we need to configure to enable.</li><li>Characteristics of security group rules<br><br>You can specify allow rules, but not deny rules.<br>https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 840682,
          "date": "Sat 16 Sep 2023 08:18",
          "username": "kampatra",
          "content": "By default Security Group deny all trafic and we need to configure to enable.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 837528,
          "date": "Wed 13 Sep 2023 01:32",
          "username": "[Removed]",
          "content": "Characteristics of security group rules<br><br>You can specify allow rules, but not deny rules.<br>https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 835214,
          "date": "Sun 10 Sep 2023 16:19",
          "username": "[Removed]",
          "content": "cdcdcdcdcdc",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CD"
        }
      ]
    },
    {
      "question_id": "#407",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is implementing a shared storage solution for a gaming application that is hosted in the AWS Cloud. The company needs the ability to use Lustre clients to access data. The solution must be fully managed.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#407",
          "answers": [
            {
              "choice": "<p>Create an AWS DataSync task that shares the data as a mountable file system. Mount the file system to the application server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 407 discussion",
      "discusstion": [
        {
          "id": 850464,
          "date": "Mon 25 Mar 2024 22:16",
          "username": "Buruguduystunstugudunstuy",
          "content": "To meet the requirements of a shared storage solution for a gaming application that can be accessed using Lustre clients and is fully managed, the best solution would be to use Amazon FSx for Lustre.<br><br>Amazon FSx for Lustre is a fully managed file system that is optimized for compute-intensive workloads, such as high-performance computing, machine learning, and gaming. It provides a POSIX-compliant file system that can be accessed using Lustre clients and offers high performance, scalability, and data durability.<br><br>This solution provides a highly available, scalable, and fully managed shared storage solution that can be accessed using Lustre clients. Amazon FSx for Lustre is optimized for compute-intensive workloads and provides high performance and durability.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer A, creating an AWS DataSync task that shares the data as a mountable file system and mounting the file system to the application server, may not provide the required performance and scalability for a gaming application.<br><br>Answer B, creating an AWS Storage Gateway file gateway and connecting the application server to the file share, may not provide the required performance and scalability for a gaming application.<br><br>Answer C, creating an Amazon Elastic File System (Amazon EFS) file system and configuring it to support Lustre, may not provide the required performance and scalability for a gaming application and may require additional configuration and management overhead.</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 850465,
          "date": "Mon 25 Mar 2024 22:18",
          "username": "Buruguduystunstugudunstuy",
          "content": "Answer A, creating an AWS DataSync task that shares the data as a mountable file system and mounting the file system to the application server, may not provide the required performance and scalability for a gaming application.<br><br>Answer B, creating an AWS Storage Gateway file gateway and connecting the application server to the file share, may not provide the required performance and scalability for a gaming application.<br><br>Answer C, creating an Amazon Elastic File System (Amazon EFS) file system and configuring it to support Lustre, may not provide the required performance and scalability for a gaming application and may require additional configuration and management overhead.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 992352,
          "date": "Wed 28 Aug 2024 17:52",
          "username": "Guru4Cloud",
          "content": "Lustre clientsAmazon FSx for Lustre file system",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 906334,
          "date": "Sat 25 May 2024 06:25",
          "username": "TariqKipkemei",
          "content": "Lustre clientsAmazon FSx for Lustre file system",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 840684,
          "date": "Sat 16 Mar 2024 09:21",
          "username": "kampatra",
          "content": "D - correct ans",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 836349,
          "date": "Mon 11 Mar 2024 18:57",
          "username": "kprakashbehera",
          "content": "FSx for Lustre<br>DDDDDD",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835962,
          "date": "Mon 11 Mar 2024 13:16",
          "username": "KAUS2",
          "content": "Amazon FSx for Lustre is the right answer<br>- Lustre is a type of parallel distributed file system, for large-scale computing, Machine Learning, High Performance Computing (HPC)<br>- Video Processing, Financial Modeling, Electronic Design Automatio",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835369,
          "date": "Sun 10 Mar 2024 20:57",
          "username": "cegama543",
          "content": "Option D is the best solution because Amazon FSx for Lustre is a fully managed, high-performance file system that is designed to support compute-intensive workloads, such as those required by gaming applications. FSx for Lustre provides sub-millisecond access to petabyte-scale file systems, and supports Lustre clients natively. This means that the gaming application can access the shared data directly from the FSx for Lustre file system without the need for additional configuration or setup.<br><br>Additionally, FSx for Lustre is a fully managed service, meaning that AWS takes care of all maintenance, updates, and patches for the file system, which reduces the operational overhead required by the company.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835217,
          "date": "Sun 10 Mar 2024 17:20",
          "username": "[Removed]",
          "content": "dddddddddddd",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#408",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs an application that receives data from thousands of geographically dispersed remote devices that use UDP. The application processes the data immediately and sends a message back to the device if necessary. No data is stored.<br><br>The company needs a solution that minimizes latency for the data transmission from the devices. The solution also must provide rapid failover to another AWS Region.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#408",
          "answers": [
            {
              "choice": "<p>Configure an Amazon Route 53 failover routing policy. Create a Network Load Balancer (NLB) in each of the two Regions. Configure the NLB to invoke an AWS Lambda function to process the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Global Accelerator. Create a Network Load Balancer (NLB) in each of the two Regions as an endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the NLProcess the data in Amazon ECS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Global Accelerator. Create an Application Load Balancer (ALB) in each of the two Regions as an endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the ALB. Process the data in Amazon ECS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon Route 53 failover routing policy. Create an Application Load Balancer (ALB) in each of the two Regions. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the ALB. Process the data in Amazon ECS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 408 discussion",
      "discusstion": [
        {
          "id": 838183,
          "date": "Wed 13 Sep 2023 18:49",
          "username": "UnluckyDucky",
          "content": "Key words: geographically dispersed, UDP.<br><br>Geographically dispersed (related to UDP) - Global Accelerator - multiple entrances worldwide to the AWS network to provide better transfer rates.<br>UDP - NLB (Network Load Balancer).",
          "upvote_count": "15",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 835644,
          "date": "Mon 11 Sep 2023 04:07",
          "username": "Ruhi02",
          "content": "Answer should be B.. there is typo mistake in B. Correct Answer is :Use AWS Global Accelerator. Create a Network Load Balancer (NLB) in each of the two Regions as an endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the NLB. Process the data in Amazon ECS.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1196034,
          "date": "Tue 15 Oct 2024 14:59",
          "username": "wizcloudifa",
          "content": "if its UDP it has to be Global Accelarator + NLB package, plus it has the provision for rapid failover as well, piece of cake.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1195999,
          "date": "Tue 15 Oct 2024 13:32",
          "username": "sandordini",
          "content": "UDP: NLB + AWS Global Accelerator",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1189351,
          "date": "Fri 04 Oct 2024 15:12",
          "username": "zinabu",
          "content": "UDP/TCPNLB<br>rapid failover AWS global accelerator",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1111080,
          "date": "Mon 01 Jul 2024 10:03",
          "username": "ferdzcruz",
          "content": "devices that use UDPNLB<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>minimizes latencyAWS Global Accelerator</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111083,
          "date": "Mon 01 Jul 2024 10:04",
          "username": "ferdzcruz",
          "content": "minimizes latencyAWS Global Accelerator",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 992345,
          "date": "Wed 28 Feb 2024 18:41",
          "username": "Guru4Cloud",
          "content": "This option meets the requirements:<br><br>Global Accelerator provides UDP support and minimizes latency using the AWS global network.<br>Using NLBs allows the UDP traffic to be load balanced across Availability Zones.<br>ECS Fargate provides rapid scaling and failover across Regions.<br>NLB endpoints allow rapid failover if one Region goes down.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 906340,
          "date": "Sat 25 Nov 2023 07:32",
          "username": "TariqKipkemei",
          "content": "UDPAWS Global Accelerator and Network Load Balancer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 859128,
          "date": "Mon 02 Oct 2023 19:06",
          "username": "kraken21",
          "content": "Global accelerator for multi region automatic failover. NLB for UDP.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 858716,
          "date": "Mon 02 Oct 2023 11:45",
          "username": "MaxMa",
          "content": "why not A?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>NLBs do not support lambda target type. Tricky!!! https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 859129,
          "date": "Mon 02 Oct 2023 19:06",
          "username": "kraken21",
          "content": "NLBs do not support lambda target type. Tricky!!! https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 850461,
          "date": "Mon 25 Sep 2023 21:08",
          "username": "Buruguduystunstugudunstuy",
          "content": "To meet the requirements of minimizing latency for data transmission from the devices and providing rapid failover to another AWS Region, the best solution would be to use AWS Global Accelerator in combination with a Network Load Balancer (NLB) and Amazon Elastic Container Service (Amazon ECS).<br><br>AWS Global Accelerator is a service that improves the availability and performance of applications by using static IP addresses (Anycast) to route traffic to optimal AWS endpoints. With Global Accelerator, you can direct traffic to multiple Regions and endpoints, and provide automatic failover to another AWS Region.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 835219,
          "date": "Sun 10 Sep 2023 16:24",
          "username": "[Removed]",
          "content": "bbbbbbbb",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#409",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect must migrate a Windows Internet Information Services (IIS) web application to AWS. The application currently relies on a file share hosted in the user's on-premises network-attached storage (NAS). The solutions architect has proposed migrating the IIS web servers to Amazon EC2 instances in multiple Availability Zones that are connected to the storage solution, and configuring an Elastic Load Balancer attached to the instances.<br><br>Which replacement to the on-premises file share is MOST resilient and durable?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#409",
          "answers": [
            {
              "choice": "<p>Migrate the file share to Amazon RDS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the file share to AWS Storage Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the file share to Amazon FSx for Windows File Server.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the file share to Amazon Elastic File System (Amazon EFS).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 409 discussion",
      "discusstion": [
        {
          "id": 858521,
          "date": "Mon 02 Oct 2023 06:51",
          "username": "channn",
          "content": "A) RDS is a database service<br>B) Storage Gateway is a hybrid cloud storage service that connects on-premises applications to AWS storage services.<br>D) provides shared file storage for Linux-based workloads, but it does not natively support Windows-based workloads.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850454,
          "date": "Mon 25 Sep 2023 20:59",
          "username": "Buruguduystunstugudunstuy",
          "content": "The most resilient and durable replacement for the on-premises file share in this scenario would be Amazon FSx for Windows File Server.<br><br>Amazon FSx is a fully managed Windows file system service that is built on Windows Server and provides native support for the SMB protocol. It is designed to be highly available and durable, with built-in backup and restore capabilities. It is also fully integrated with AWS security services, providing encryption at rest and in transit, and it can be configured to meet compliance standards.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Migrating the file share to Amazon RDS or AWS Storage Gateway is not appropriate as these services are designed for database workloads and block storage respectively, and do not provide native support for the SMB protocol.<br><br>Migrating the file share to Amazon EFS (Linux ONLY) could be an option, but Amazon FSx for Windows File Server would be more appropriate in this case because it is specifically designed for Windows file shares and provides better performance for Windows applications.</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850455,
          "date": "Mon 25 Sep 2023 21:00",
          "username": "Buruguduystunstugudunstuy",
          "content": "Migrating the file share to Amazon RDS or AWS Storage Gateway is not appropriate as these services are designed for database workloads and block storage respectively, and do not provide native support for the SMB protocol.<br><br>Migrating the file share to Amazon EFS (Linux ONLY) could be an option, but Amazon FSx for Windows File Server would be more appropriate in this case because it is specifically designed for Windows file shares and provides better performance for Windows applications.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1084380,
          "date": "Thu 30 May 2024 13:12",
          "username": "com7",
          "content": "Windows Server to FSx For Windows",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 992344,
          "date": "Wed 28 Feb 2024 18:38",
          "username": "Guru4Cloud",
          "content": "Windows clientAmazon FSx for Windows File Serve",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 906343,
          "date": "Sat 25 Nov 2023 07:34",
          "username": "TariqKipkemei",
          "content": "Windows clientAmazon FSx for Windows File Server",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 845602,
          "date": "Thu 21 Sep 2023 06:58",
          "username": "Grace83",
          "content": "Obviously C is the correct answer - FSx for Windows - Windows",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 838186,
          "date": "Wed 13 Sep 2023 18:51",
          "username": "UnluckyDucky",
          "content": "FSx for Windows - Windows.<br>EFS - Linux.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>good summary</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1115182,
          "date": "Sat 06 Jul 2024 13:08",
          "username": "mwwt2022",
          "content": "good summary",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 838018,
          "date": "Wed 13 Sep 2023 15:15",
          "username": "elearningtakai",
          "content": "Amazon EFS is a scalable and fully-managed file storage service that is designed to provide high availability and durability. It can be accessed by multiple EC2 instances across multiple Availability Zones simultaneously. Additionally, it offers automatic and instantaneous data replication across different availability zones within a region, which makes it resilient to failures.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>EFS is a wrong choice because it can only work with Linux instances. That application has a Windows web server , so its OS is Windowsand EFS cannot connect to it</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 843300,
          "date": "Tue 19 Sep 2023 00:28",
          "username": "asoli",
          "content": "EFS is a wrong choice because it can only work with Linux instances. That application has a Windows web server , so its OS is Windowsand EFS cannot connect to it",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 837520,
          "date": "Wed 13 Sep 2023 01:22",
          "username": "[Removed]",
          "content": "Amazon FSx",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 836205,
          "date": "Mon 11 Sep 2023 15:22",
          "username": "sitha",
          "content": "Amazon FSx makes it easy and cost effective to launch, run, and scale feature-rich, high-performance file systems in the cloud.<br>Answer : C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 835877,
          "date": "Mon 11 Sep 2023 11:14",
          "username": "KAUS2",
          "content": "FSx for Windows is a fully managed Windows file system share drive . Hence C is the correct answer.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835646,
          "date": "Mon 11 Sep 2023 04:10",
          "username": "Ruhi02",
          "content": "FSx for Windows is ideal in this case. So answer is C.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 835220,
          "date": "Sun 10 Sep 2023 16:25",
          "username": "[Removed]",
          "content": "ccccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#410",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is deploying a new application on Amazon EC2 instances. The application writes data to Amazon Elastic Block Store (Amazon EBS) volumes. The company needs to ensure that all data that is written to the EBS volumes is encrypted at rest.<br><br>Which solution will meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#410",
          "answers": [
            {
              "choice": "<p>Create an IAM role that specifies EBS encryption. Attach the role to the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create the EBS volumes as encrypted volumes. Attach the EBS volumes to the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an EC2 instance tag that has a key of Encrypt and a value of True. Tag all instances that require encryption at the EBS level.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Key Management Service (AWS KMS) key policy that enforces EBS encryption in the account. Ensure that the key policy is active.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 410 discussion",
      "discusstion": [
        {
          "id": 850452,
          "date": "Mon 25 Mar 2024 21:52",
          "username": "Buruguduystunstugudunstuy",
          "content": "The solution that will meet the requirement of ensuring that all data that is written to the EBS volumes is encrypted at rest is B. Create the EBS volumes as encrypted volumes and attach the encrypted EBS volumes to the EC2 instances.<br><br>When you create an EBS volume, you can specify whether to encrypt the volume. If you choose to encrypt the volume, all data written to the volume is automatically encrypted at rest using AWS-managed keys. You can also use customer-managed keys (CMKs) stored in AWS KMS to encrypt and protect your EBS volumes. You can create encrypted EBS volumes and attach them to EC2 instances to ensure that all data written to the volumes is encrypted at rest.<br><br>Answer A is incorrect because attaching an IAM role to the EC2 instances does not automatically encrypt the EBS volumes.<br><br>Answer C is incorrect because adding an EC2 instance tag does not ensure that the EBS volumes are encrypted.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1056265,
          "date": "Mon 28 Oct 2024 17:42",
          "username": "Kds53829",
          "content": "B is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 992343,
          "date": "Wed 28 Aug 2024 17:37",
          "username": "Guru4Cloud",
          "content": "B. Create the EBS volumes as encrypted volumes. Attach the EBS volumes to the EC2 instances.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 906359,
          "date": "Sat 25 May 2024 06:48",
          "username": "TariqKipkemei",
          "content": "Windows clientAmazon FSx for Windows File Server<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ignore this, mind stuck on last question hhhhhh.<br>Just create the EBS volumes as encrypted volumes then attach the EBS volumes to the EC2 instances.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1053498,
          "date": "Fri 25 Oct 2024 07:57",
          "username": "TariqKipkemei",
          "content": "ignore this, mind stuck on last question hhhhhh.<br>Just create the EBS volumes as encrypted volumes then attach the EBS volumes to the EC2 instances.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 856582,
          "date": "Sun 31 Mar 2024 06:03",
          "username": "elearningtakai",
          "content": "The other options either do not meet the requirement of encrypting data at rest (A and C) or do so in a more complex or less efficient manner (D).",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 846258,
          "date": "Thu 21 Mar 2024 19:52",
          "username": "Bofi",
          "content": "Why not D, EBS encryption require the use of KMS key<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer D is incorrect because creating a KMS key policy that enforces EBS encryption does not automatically encrypt EBS volumes. You need to create encrypted EBS volumes and attach them to EC2 instances to ensure that all data written to the volumes are encrypted at rest.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 850450,
          "date": "Mon 25 Mar 2024 21:50",
          "username": "Buruguduystunstugudunstuy",
          "content": "Answer D is incorrect because creating a KMS key policy that enforces EBS encryption does not automatically encrypt EBS volumes. You need to create encrypted EBS volumes and attach them to EC2 instances to ensure that all data written to the volumes are encrypted at rest.",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 844545,
          "date": "Wed 20 Mar 2024 05:53",
          "username": "WherecanIstart",
          "content": "Create encrypted EBS volumes and attach encrypted EBS volumes to EC2 instances..",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 836038,
          "date": "Mon 11 Mar 2024 14:34",
          "username": "sitha",
          "content": "Use Amazon EBS encryption as an encryption solution for your EBS resources associated with your EC2 instances.Select KMS Keys either default or custom",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 835647,
          "date": "Mon 11 Mar 2024 05:12",
          "username": "Ruhi02",
          "content": "Answer B. You can enable encryption for EBS volumes while creating them.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 835221,
          "date": "Sun 10 Mar 2024 17:26",
          "username": "[Removed]",
          "content": "bbbbbbbb",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#411",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a web application with sporadic usage patterns. There is heavy usage at the beginning of each month, moderate usage at the start of each week, and unpredictable usage during the week. The application consists of a web server and a MySQL database server running inside the data center. The company would like to move the application to the AWS Cloud, and needs to select a cost-effective database platform that will not require database modifications.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#411",
          "answers": [
            {
              "choice": "<p>Amazon DynamoDB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon RDS for MySQL<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>MySQL-compatible Amazon Aurora Serverless<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>MySQL deployed on Amazon EC2 in an Auto Scaling group<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 411 discussion",
      "discusstion": [
        {
          "id": 858528,
          "date": "Mon 02 Oct 2023 06:59",
          "username": "channn",
          "content": "C: Aurora Serverless is a MySQL-compatible relational database engine that automatically scales compute and memory resources based on application usage. no upfront costs or commitments required.<br>A: DynamoDB is a NoSQL<br>B: Fixed cost on RDS class<br>D: More operation requires",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850449,
          "date": "Mon 25 Sep 2023 20:46",
          "username": "Buruguduystunstugudunstuy",
          "content": "Answer C, MySQL-compatible Amazon Aurora Serverless, would be the best solution to meet the company's requirements.<br><br>Aurora Serverless can be a cost-effective option for databases with sporadic or unpredictable usage patterns since it automatically scales up or down based on the current workload. Additionally, Aurora Serverless is compatible with MySQL, so it does not require any modifications to the application's database code.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1053511,
          "date": "Thu 25 Apr 2024 08:20",
          "username": "TariqKipkemei",
          "content": "The is a huge demand for auto-scaling which Amazon RDS cannot do. This contributes to the cost savings as Aurora serverless would scale done in low peak times, this contributes to low costs.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1018356,
          "date": "Wed 27 Mar 2024 05:22",
          "username": "JKevin778",
          "content": "RDS is cheaper than Aurora.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>RDS is cheaper than Aurora if you have a fixed instance size, but NOT if you have \\\"unpredictable\\\" usage patterns, then Aurora Serverless (!) is cheaper.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1110411,
          "date": "Sun 30 Jun 2024 09:30",
          "username": "pentium75",
          "content": "RDS is cheaper than Aurora if you have a fixed instance size, but NOT if you have \\\"unpredictable\\\" usage patterns, then Aurora Serverless (!) is cheaper.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 993245,
          "date": "Thu 29 Feb 2024 19:02",
          "username": "Guru4Cloud",
          "content": "Answer C, MySQL-compatible Amazon Aurora Serverless, would be the best solution to meet the company's requirements.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 930921,
          "date": "Fri 22 Dec 2023 21:35",
          "username": "MrAWSAssociate",
          "content": "Since we have sporadic & unpredictable usage for DB, Aurora Serverless would be fit more cost-efficient for this case scenario than RDS MySQL. https://www.techtarget.com/searchcloudcomputing/answer/When-should-I-use-Amazon-RDS-vs-Aurora-Serverless",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 910020,
          "date": "Thu 30 Nov 2023 10:41",
          "username": "antropaws",
          "content": "C for sure.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850054,
          "date": "Mon 25 Sep 2023 11:04",
          "username": "klayytech",
          "content": "Amazon RDS for MySQL is a cost-effective database platform that will not require database modifications. It makes it easier to set up, operate, and scale MySQL deployments in the cloud. With Amazon RDS, you can deploy scalable MySQL servers in minutes with cost-efficient and resizable hardware capacity=C2=B2.<br><br>Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB is a good choice for applications that require low-latency data access=C2=B9.<br><br>MySQL-compatible Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora (MySQL-compatible edition), where the database will automatically start up, shut down, and scale capacity up or down based on your application's needs=C2=B3.<br><br>So, Amazon RDS for MySQL is the best option for your requirements.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>sorry i will change to C , because<br><br>Amazon RDS for MySQL is a fully-managed relational database service that makes it easy to set up, operate, and scale MySQL deployments in the cloud. Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora (MySQL-compatible edition), where the database will automatically start up, shut down, and scale capacity up or down based on your application's needs. It is a simple, cost-effective option for infrequent, intermittent, or unpredictable workloads.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 858292,
          "date": "Sun 01 Oct 2023 23:09",
          "username": "klayytech",
          "content": "sorry i will change to C , because<br><br>Amazon RDS for MySQL is a fully-managed relational database service that makes it easy to set up, operate, and scale MySQL deployments in the cloud. Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora (MySQL-compatible edition), where the database will automatically start up, shut down, and scale capacity up or down based on your application's needs. It is a simple, cost-effective option for infrequent, intermittent, or unpredictable workloads.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 841182,
          "date": "Sat 16 Sep 2023 16:30",
          "username": "boxu03",
          "content": "Amazon Aurora Serverless : a simple, cost-effective option for infrequent, intermittent, or unpredictable workloads",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835223,
          "date": "Sun 10 Sep 2023 16:29",
          "username": "[Removed]",
          "content": "cccccccccccccccccccc",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#412",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An image-hosting company stores its objects in Amazon S3 buckets. The company wants to avoid accidental exposure of the objects in the S3 buckets to the public. All S3 objects in the entire AWS account need to remain private.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#412",
          "answers": [
            {
              "choice": "<p>Use Amazon GuardDuty to monitor S3 bucket policies. Create an automatic remediation action rule that uses an AWS Lambda function to remediate any change that makes the objects public.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Trusted Advisor to find publicly accessible S3 buckets. Configure email notifications in Trusted Advisor when a change is detected. Manually change the S3 bucket policy if it allows public access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Resource Access Manager to find publicly accessible S3 buckets. Use Amazon Simple Notification Service (Amazon SNS) to invoke an AWS Lambda function when a change is detected. Deploy a Lambda function that programmatically remediates the change.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the S3 Block Public Access feature on the account level. Use AWS Organizations to create a service control policy (SCP) that prevents IAM users from changing the setting. Apply the SCP to the account.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 412 discussion",
      "discusstion": [
        {
          "id": 835651,
          "date": "Sat 11 Mar 2023 05:23",
          "username": "Ruhi02",
          "content": "Answer is D ladies and gentlemen. While guard duty helps to monitor s3 for potential threats its a reactive action. We should always be proactive and not reactive in our solutions so D, block public access to avoid any possibility of the info becoming publicly accessible",
          "upvote_count": "20",
          "selected_answers": ""
        },
        {
          "id": 850447,
          "date": "Sat 25 Mar 2023 21:38",
          "username": "Buruguduystunstugudunstuy",
          "content": "Answer D is the correct solution that meets the requirements. The S3 Block Public Access feature allows you to restrict public access to S3 buckets and objects within the account. You can enable this feature at the account level to prevent any S3 bucket from being made public, regardless of the bucket policy settings. AWS Organizations can be used to apply a Service Control Policy (SCP) to the account to prevent IAM users from changing this setting, ensuring that all S3 objects remain private. This is a straightforward and effective solution that requires minimal operational overhead.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1160985,
          "date": "Tue 27 Feb 2024 22:02",
          "username": "noircesar25",
          "content": "its 1 aws account, how could D be the answer?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>make no difference, 1 AWS account, 10 AWS accounts or &gt; 100 AWS accounts, SCP enforces the same guard rails</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1315665,
          "date": "Thu 21 Nov 2024 06:53",
          "username": "JA2018",
          "content": "make no difference, 1 AWS account, 10 AWS accounts or > 100 AWS accounts, SCP enforces the same guard rails",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1054291,
          "date": "Thu 26 Oct 2023 07:13",
          "username": "TariqKipkemei",
          "content": "Use the S3 Block Public Access feature on the account level. Use AWS Organizations to create a service control policy (SCP) that prevents IAM users from changing the setting. Apply the SCP to the account",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 992199,
          "date": "Mon 28 Aug 2023 15:06",
          "username": "Guru4Cloud",
          "content": "Use the S3 Block Public Access feature on the account level. Use AWS Organizations to create a service control policy (SCP) that prevents IAM users from changing the setting. Apply the SCP to the account",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 930938,
          "date": "Thu 22 Jun 2023 20:58",
          "username": "MrAWSAssociate",
          "content": "A is correct!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, first it would not remove any existing public access (only detect changes), second it would just detect and then remediate, but in the meantime someone could access the objects. It's clearly D.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1110412,
          "date": "Sun 31 Dec 2023 10:32",
          "username": "pentium75",
          "content": "No, first it would not remove any existing public access (only detect changes), second it would just detect and then remediate, but in the meantime someone could access the objects. It's clearly D.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 902542,
          "date": "Sat 20 May 2023 13:38",
          "username": "Yadav_Sanjay",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 856917,
          "date": "Fri 31 Mar 2023 12:43",
          "username": "elearningtakai",
          "content": "This is the most effective solution to meet the requirements.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 846262,
          "date": "Tue 21 Mar 2023 20:02",
          "username": "Bofi",
          "content": "Option D provided real solution by using bucket policy to restrict public access. Other options were focus on detection which wasn't what was been asked",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#413",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company is experiencing an increase in user traffic. The company's store is deployed on Amazon EC2 instances as a two-tier web application consisting of a web tier and a separate database tier. As traffic increases, the company notices that the architecture is causing significant delays in sending timely marketing and order confirmation email to users. The company wants to reduce the time it spends resolving complex email delivery issues and minimize operational overhead.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#413",
          "answers": [
            {
              "choice": "<p>Create a separate application tier using EC2 instances dedicated to email processing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the web instance to send email through Amazon Simple Email Service (Amazon SES).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the web instance to send email through Amazon Simple Notification Service (Amazon SNS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a separate application tier using EC2 instances dedicated to email processing. Place the instances in an Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 413 discussion",
      "discusstion": [
        {
          "id": 856923,
          "date": "Sat 30 Sep 2023 12:46",
          "username": "elearningtakai",
          "content": "Amazon SES is a cost-effective and scalable email service that enables businesses to send and receive email using their own email addresses and domains. Configuring the web instance to send email through Amazon SES is a simple and effective solution that can reduce the time spent resolving complex email delivery issues and minimize operational overhead.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 850439,
          "date": "Mon 25 Sep 2023 20:23",
          "username": "Buruguduystunstugudunstuy",
          "content": "The best option for addressing the company's needs of minimizing operational overhead and reducing time spent resolving email delivery issues is to use Amazon Simple Email Service (Amazon SES).<br><br>Answer A of creating a separate application tier for email processing may add additional complexity to the architecture and require more operational overhead.<br><br>Answer C of using Amazon Simple Notification Service (Amazon SNS) is not an appropriate solution for sending marketing and order confirmation emails since Amazon SNS is a messaging service that is designed to send messages to subscribed endpoints or clients.<br><br>Answer D of creating a separate application tier using EC2 instances dedicated to email processing placed in an Auto Scaling group is a more complex solution than necessary and may result in additional operational overhead.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1195116,
          "date": "Sun 13 Oct 2024 21:48",
          "username": "waldirlsantos",
          "content": "B meet these requirements",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1054297,
          "date": "Fri 26 Apr 2024 07:25",
          "username": "TariqKipkemei",
          "content": "Amazon Simple Email Service (Amazon SES) lets you reach customers confidently without an on-premises Simple Mail Transfer Protocol (SMTP) email server using the Amazon SES API or SMTP interface.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 992183,
          "date": "Wed 28 Feb 2024 15:50",
          "username": "Guru4Cloud",
          "content": "B. Configure the web instance to send email through Amazon Simple Email Service (Amazon SES)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 840704,
          "date": "Sat 16 Sep 2023 08:46",
          "username": "nileshlg",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 835653,
          "date": "Mon 11 Sep 2023 04:25",
          "username": "Ruhi02",
          "content": "Answer B.. SES is meant for sending high volume e-mail efficiently and securely.<br>SNS is meant as a channel publisher/subscriber service",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 835228,
          "date": "Sun 10 Sep 2023 16:32",
          "username": "[Removed]",
          "content": "bbbbbbbb",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#414",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a business system that generates hundreds of reports each day. The business system saves the reports to a network share in CSV format. The company needs to store this data in the AWS Cloud in near-real time for analysis.<br><br>Which solution will meet these requirements with the LEAST administrative overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#414",
          "answers": [
            {
              "choice": "<p>Use AWS DataSync to transfer the files to Amazon S3. Create a scheduled task that runs at the end of each day.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 File Gateway. Update the business system to use a new network share from the S3 File Gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS DataSync to transfer the files to Amazon S3. Create an application that uses the DataSync API in the automation workflow.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an AWS Transfer for SFTP endpoint. Create a script that checks for new files on the network share and uploads the new files by using SFTP.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 414 discussion",
      "discusstion": [
        {
          "id": 1054306,
          "date": "Fri 26 Apr 2024 07:42",
          "username": "TariqKipkemei",
          "content": "Both Amazon S3 File Gateway and AWS DataSync are suitable for this scenario.<br>But there is a requirement for 'LEAST administrative overhead'.<br>Option C involves the creation of an entirely new application to consume the DataSync API, this rules out this option.",
          "upvote_count": "14",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 858534,
          "date": "Mon 02 Oct 2023 07:12",
          "username": "channn",
          "content": "Key words:<br>1. near-real-time (A is out)<br>2. LEAST administrative (C n D is out)",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1343277,
          "date": "Mon 20 Jan 2025 02:14",
          "username": "zdi561",
          "content": "Firstly the requirement is not about hybrid cloud e.g. use the data migrated to aws from on-premise, so B is gone. Secondlyit is near real time, A is gone.Thirdly less admistratively, C is one since an application is a headache. D is the best , it only involves a script. SFTP is good for light file transfer. Here there are only hundreds of files in a day.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 992177,
          "date": "Wed 28 Feb 2024 15:47",
          "username": "Guru4Cloud",
          "content": "This option has the least administrative overhead because:<br><br>Using DataSync avoids having to rewrite the business system to use a new file gateway or SFTP endpoint.<br>Calling the DataSync API from an application allows automating the data transfer instead of running scheduled tasks or scripts.<br>DataSync directly transfers files from the network share to S3 without needing an intermediate server<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Create an application\\\" hell no, the application must run somewhere etc., this is massive \\\"administrative overhead\\\".</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1110415,
          "date": "Sun 30 Jun 2024 09:35",
          "username": "pentium75",
          "content": "\\\"Create an application\\\" hell no, the application must run somewhere etc., this is massive \\\"administrative overhead\\\".",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 910026,
          "date": "Thu 30 Nov 2023 10:46",
          "username": "antropaws",
          "content": "B. Data Sync is better for one time migrations.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 883832,
          "date": "Sat 28 Oct 2023 20:54",
          "username": "kruasan",
          "content": "The correct solution here is:<br><br>B. Create an Amazon S3 File Gateway. Update the business system to use a new network share from the S3 File Gateway.<br><br>This option requires the least administrative overhead because:<br><br>- It presents a simple network file share interface that the business system can write to, just like a standard network share. This requires minimal changes to the business system.<br><br>- The S3 File Gateway automatically uploads all files written to the share to an S3 bucket in the background. This handles the transfer and upload to S3 without requiring any scheduled tasks, scripts or automation.<br><br>- All ongoing management like monitoring, scaling, patching etc. is handled by AWS for the S3 File Gateway.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The other options would require more ongoing administrative effort:<br><br>A) AWS DataSync would require creating and managing scheduled tasks and monitoring them.<br><br>C) Using the DataSync API would require developing an application and then managing and monitoring it.<br><br>D) The SFTP option would require creating scripts, managing SFTP access and keys, and monitoring the file transfer process.<br><br>So overall, the S3 File Gateway requires the least amount of ongoing management and administration as it presents a simple file share interface but handles the upload to S3 in a fully managed fashion. The business system can continue writing to a network share as is, while the files are transparently uploaded to S3.<br><br>The S3 File Gateway is the most hands-off, low-maintenance solution in this scenario.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 883833,
          "date": "Sat 28 Oct 2023 20:54",
          "username": "kruasan",
          "content": "The other options would require more ongoing administrative effort:<br><br>A) AWS DataSync would require creating and managing scheduled tasks and monitoring them.<br><br>C) Using the DataSync API would require developing an application and then managing and monitoring it.<br><br>D) The SFTP option would require creating scripts, managing SFTP access and keys, and monitoring the file transfer process.<br><br>So overall, the S3 File Gateway requires the least amount of ongoing management and administration as it presents a simple file share interface but handles the upload to S3 in a fully managed fashion. The business system can continue writing to a network share as is, while the files are transparently uploaded to S3.<br><br>The S3 File Gateway is the most hands-off, low-maintenance solution in this scenario.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 856931,
          "date": "Sat 30 Sep 2023 12:51",
          "username": "elearningtakai",
          "content": "A - creating a scheduled task is not near-real time.<br>B - The S3 File Gateway caches frequently accessed data locally and automatically uploads it to Amazon S3, providing near-real-time access to the data.<br>C - creating an application that uses the DataSync API in the automation workflow may provide near-real-time data access, but it requires additional development effort.<br>D - it requires additional development effort.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 855192,
          "date": "Sat 30 Sep 2023 04:05",
          "username": "zooba72",
          "content": "It's B.DataSync has a scheduler and it runs on hour intervals, it cannot be used real-time",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 850431,
          "date": "Mon 25 Sep 2023 20:09",
          "username": "Buruguduystunstugudunstuy",
          "content": "The correct answer is C. Use AWS DataSync to transfer the files to Amazon S3. Create an application that uses the DataSync API in the automation workflow.<br><br>To store the CSV reports generated by the business system in the AWS Cloud in near-real time for analysis, the best solution with the least administrative overhead would be to use AWS DataSync to transfer the files to Amazon S3 and create an application that uses the DataSync API in the automation workflow.<br><br>AWS DataSync is a fully managed service that makes it easy to automate and accelerate data transfer between on-premises storage systems and AWS Cloud storage, such as Amazon S3. With DataSync, you can quickly and securely transfer large amounts of data to the AWS Cloud, and you can automate the transfer process using the DataSync API.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer A, using AWS DataSync to transfer the files to Amazon S3 and creating a scheduled task that runs at the end of each day, is not the best solution because it does not meet the requirement of storing the CSV reports in near-real time for analysis.<br><br>Answer B, creating an Amazon S3 File Gateway and updating the business system to use a new network share from the S3 File Gateway, is not the best solution because it requires additional configuration and management overhead.<br><br>Answer D, deploying an AWS Transfer for the SFTP endpoint and creating a script to check for new files on the network share and upload the new files using SFTP, is not the best solution because it requires additional scripting and management overhead</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850436,
          "date": "Mon 25 Sep 2023 20:14",
          "username": "Buruguduystunstugudunstuy",
          "content": "Answer A, using AWS DataSync to transfer the files to Amazon S3 and creating a scheduled task that runs at the end of each day, is not the best solution because it does not meet the requirement of storing the CSV reports in near-real time for analysis.<br><br>Answer B, creating an Amazon S3 File Gateway and updating the business system to use a new network share from the S3 File Gateway, is not the best solution because it requires additional configuration and management overhead.<br><br>Answer D, deploying an AWS Transfer for the SFTP endpoint and creating a script to check for new files on the network share and upload the new files using SFTP, is not the best solution because it requires additional scripting and management overhead",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 847317,
          "date": "Fri 22 Sep 2023 17:05",
          "username": "COTIT",
          "content": "I think B is the better answer, \\\"LEAST administrative overhead\\\"<br>https://aws.amazon.com/storagegateway/file/?nc1h_ls",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 847260,
          "date": "Fri 22 Sep 2023 16:26",
          "username": "andyto",
          "content": "B - S3 File Gateway.<br>C - this is wrong answer because data migration is scheduled (this is not continuous task), so condition \\\"near-real time\\\" is not fulfilled",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 845690,
          "date": "Thu 21 Sep 2023 09:03",
          "username": "Thief",
          "content": "C is the best ans<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why not A? There is no scheduled job?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 850400,
          "date": "Mon 25 Sep 2023 19:25",
          "username": "lizzard812",
          "content": "Why not A? There is no scheduled job?",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#415",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is storing petabytes of data in Amazon S3 Standard. The data is stored in multiple S3 buckets and is accessed with varying frequency. The company does not know access patterns for all the data. The company needs to implement a solution for each S3 bucket to optimize the cost of S3 usage.<br><br>Which solution will meet these requirements with the MOST operational efficiency?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#415",
          "answers": [
            {
              "choice": "<p>Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Intelligent-Tiering.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use the S3 storage class analysis tool to determine the correct tier for each object in the S3 bucket. Move each object to the identified storage tier.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Glacier Instant Retrieval.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 One Zone-Infrequent Access (S3 One Zone-IA).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 415 discussion",
      "discusstion": [
        {
          "id": 909935,
          "date": "Thu 30 May 2024 07:42",
          "username": "TariqKipkemei",
          "content": "Unknown access patterns for the dataS3 Intelligent-Tiering",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 858538,
          "date": "Tue 02 Apr 2024 07:14",
          "username": "channn",
          "content": "Key words: 'The company does not know access patterns for all the data', so A.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 992166,
          "date": "Wed 28 Aug 2024 14:35",
          "username": "Guru4Cloud",
          "content": "Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Intelligent-Tiering.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 850424,
          "date": "Mon 25 Mar 2024 20:59",
          "username": "Buruguduystunstugudunstuy",
          "content": "The correct answer is A.<br><br>Creating an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Intelligent-Tiering would be the most efficient solution to optimize the cost of S3 usage. S3 Intelligent-Tiering is a storage class that automatically moves objects between two access tiers (frequent and infrequent) based on changing access patterns. It is a cost-effective solution that does not require any manual intervention to move data to different storage classes, unlike the other options.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer B, Using the S3 storage class analysis tool to determine the correct tier for each object and manually moving objects to the identified storage tier would be time-consuming and require more operational overhead.<br><br>Answer C, Transitioning objects to S3 Glacier Instant Retrieval would be appropriate for data that is accessed less frequently and does not require immediate access.<br><br>Answer D, S3 One Zone-IA would be appropriate for data that can be recreated if lost and does not require the durability of S3 Standard or S3 Standard-IA.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 850425,
          "date": "Mon 25 Mar 2024 20:59",
          "username": "Buruguduystunstugudunstuy",
          "content": "Answer B, Using the S3 storage class analysis tool to determine the correct tier for each object and manually moving objects to the identified storage tier would be time-consuming and require more operational overhead.<br><br>Answer C, Transitioning objects to S3 Glacier Instant Retrieval would be appropriate for data that is accessed less frequently and does not require immediate access.<br><br>Answer D, S3 One Zone-IA would be appropriate for data that can be recreated if lost and does not require the durability of S3 Standard or S3 Standard-IA.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 847324,
          "date": "Fri 22 Mar 2024 18:10",
          "username": "COTIT",
          "content": "For me is A. Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Intelligent-Tiering.<br><br>Why?<br>\\\"S3 Intelligent-Tiering is the ideal storage class for data with unknown, changing, or unpredictable access patterns\\\"<br>https://aws.amazon.com/s3/storage-classes/intelligent-tiering/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 846268,
          "date": "Thu 21 Mar 2024 20:11",
          "username": "Bofi",
          "content": "Once the data traffic is unpredictable, Intelligent-Tiering is the best option",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 845269,
          "date": "Wed 20 Mar 2024 22:44",
          "username": "NIL8891",
          "content": "Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Intelligent-Tiering.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 845112,
          "date": "Wed 20 Mar 2024 18:35",
          "username": "Maximus007",
          "content": "A: as exact pattern is not clear",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#416",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A rapidly growing global ecommerce company is hosting its web application on AWS. The web application includes static content and dynamic content. The website stores online transaction processing (OLTP) data in an Amazon RDS database The website's users are experiencing slow page loads.<br><br>Which combination of actions should a solutions architect take to resolve this issue? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#416",
          "answers": [
            {
              "choice": "<p>Configure an Amazon Redshift cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an Amazon CloudFront distribution.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Host the dynamic web content in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a read replica for the RDS DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a Multi-AZ deployment for the RDS DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 416 discussion",
      "discusstion": [
        {
          "id": 850422,
          "date": "Sat 25 Mar 2023 20:51",
          "username": "Buruguduystunstugudunstuy",
          "content": "To resolve the issue of slow page loads for a rapidly growing e-commerce website hosted on AWS, a solutions architect can take the following two actions:<br><br>1. Set up an Amazon CloudFront distribution<br>2. Create a read replica for the RDS DB instance<br><br>Configuring an Amazon Redshift cluster is not relevant to this issue since Redshift is a data warehousing service and is typically used for the analytical processing of large amounts of data.<br><br>Hosting the dynamic web content in Amazon S3 may not necessarily improve performance since S3 is an object storage service, not a web application server. While S3 can be used to host static web content, it may not be suitable for hosting dynamic web content since S3 doesn't support server-side scripting or processing.<br><br>Configuring a Multi-AZ deployment for the RDS DB instance will improve high availability but may not necessarily improve performance.",
          "upvote_count": "16",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 846294,
          "date": "Tue 21 Mar 2023 20:59",
          "username": "acts268",
          "content": "Cloud Front and Read Replica",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1110430,
          "date": "Sun 31 Dec 2023 11:03",
          "username": "pentium75",
          "content": "A - Redshift is for OLAP, not OLTP<br>B - Caching, reduces page load time and server load<br>C - S3 can't host dynamic (!) content<br>D - Read Replica is meant for increasing DB performance<br>E - Multi-AZ is meant for HA (not asked here)",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 992162,
          "date": "Mon 28 Aug 2023 14:33",
          "username": "Guru4Cloud",
          "content": "The two options that will best help resolve the slow page loads are:<br><br>B) Set up an Amazon CloudFront distribution<br><br>and<br><br>E) Configure a Multi-AZ deployment for the RDS DB instance<br><br>Explanation:<br><br>CloudFront can cache static content globally and improve latency for static content delivery.<br>Multi-AZ RDS improves performance and availability of the database driving dynamic content.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Wrong. Multi-AZ is meant to \\\"enhance availability by deploying a standby instance in a second AZ, and achieve fault tolerance in the event of an AZ or database instance failure.\\\"<br><br>It does not improve performance.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1282498,
          "date": "Thu 12 Sep 2024 08:51",
          "username": "MatAlves",
          "content": "Wrong. Multi-AZ is meant to \\\"enhance availability by deploying a standby instance in a second AZ, and achieve fault tolerance in the event of an AZ or database instance failure.\\\"<br><br>It does not improve performance.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 910036,
          "date": "Tue 30 May 2023 09:52",
          "username": "antropaws",
          "content": "BD is correct.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 909938,
          "date": "Tue 30 May 2023 07:46",
          "username": "TariqKipkemei",
          "content": "Resolve latencyAmazon CloudFront distribution and read replica for the RDS DB",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 854867,
          "date": "Wed 29 Mar 2023 21:23",
          "username": "SamDouk",
          "content": "B and D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 850076,
          "date": "Sat 25 Mar 2023 12:33",
          "username": "klayytech",
          "content": "The website's users are experiencing slow page loads.<br><br>To resolve this issue, a solutions architect should take the following two actions:<br><br>Create a read replica for the RDS DB instance. This will help to offload read traffic from the primary database instance and improve performance.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 849778,
          "date": "Sat 25 Mar 2023 04:32",
          "username": "zooba72",
          "content": "Question asked about performance improvements, not HA.Cloudfront & Read Replica",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 849764,
          "date": "Sat 25 Mar 2023 03:54",
          "username": "thaotnt",
          "content": "slow page loads. >>> D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 848618,
          "date": "Thu 23 Mar 2023 20:46",
          "username": "andyto",
          "content": "Read Replica will speed up Reads on RDS DB.<br>E is wrong. It brings HA but doesn't contribute to speed which is impacted in this case. Multi-AZ is Active-Standby solution.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 847330,
          "date": "Wed 22 Mar 2023 18:19",
          "username": "COTIT",
          "content": "I agree with B & E.<br>B. Set up an Amazon CloudFront distribution. (Amazon CloudFront is a content delivery network (CDN) service)<br>E. Configure a Multi-AZ deployment for the RDS DB instance. (Good idea for loadbalance the DB workflow)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Multi-AZ for HA, Read Replica for Scalability<br><br>https://aws.amazon.com/rds/features/read-replicas/?nc1h_ls</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 1110429,
          "date": "Sun 31 Dec 2023 11:02",
          "username": "pentium75",
          "content": "Multi-AZ for HA, Read Replica for Scalability<br><br>https://aws.amazon.com/rds/features/read-replicas/?nc1h_ls",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 847284,
          "date": "Wed 22 Mar 2023 17:41",
          "username": "Santosh43",
          "content": "B and E ( as there is nothing mention about read transactions)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why E? There is nothing mentioned about High Availability also. E is wrong because Multi AZ won't help with scaling</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1126245,
          "date": "Thu 18 Jan 2024 23:08",
          "username": "awsgeek75",
          "content": "Why E? There is nothing mentioned about High Availability also. E is wrong because Multi AZ won't help with scaling",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 847053,
          "date": "Wed 22 Mar 2023 13:34",
          "username": "Akademik6",
          "content": "Cloudfront and Read Replica. We don't need HA here.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 846272,
          "date": "Tue 21 Mar 2023 20:19",
          "username": "Bofi",
          "content": "Amazon CloudFront can handle both static and Dynamic contents hence there is not need for option C l.e hosting the static data on Amazon S3. RDS read replica will reduce the amount of reads on the RDS hence leading a better performance. Multi-AZ is for disaster Recovery , which means D is also out.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 845697,
          "date": "Tue 21 Mar 2023 10:11",
          "username": "Thief",
          "content": "CloudFont with S3<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>S3 can't host \\\"dynamic content\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1110428,
          "date": "Sun 31 Dec 2023 11:01",
          "username": "pentium75",
          "content": "S3 can't host \\\"dynamic content\\\"",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 845267,
          "date": "Mon 20 Mar 2023 22:43",
          "username": "NIL8891",
          "content": "B and E",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        }
      ]
    },
    {
      "question_id": "#417",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon EC2 instances and AWS Lambda functions to run its application. The company has VPCs with public subnets and private subnets in its AWS account. The EC2 instances run in a private subnet in one of the VPCs. The Lambda functions need direct network access to the EC2 instances for the application to work.<br><br>The application will run for at least 1 year. The company expects the number of Lambda functions that the application uses to increase during that time. The company wants to maximize its savings on all application resources and to keep network latency between the services low.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#417",
          "answers": [
            {
              "choice": "<p>Purchase an EC2 Instance Savings Plan Optimize the Lambda functions' duration and memory usage and the number of invocations. Connect the Lambda functions to the private subnet that contains the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase an EC2 Instance Savings Plan Optimize the Lambda functions' duration and memory usage, the number of invocations, and the amount of data that is transferred. Connect the Lambda functions to a public subnet in the same VPC where the EC2 instances run.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase a Compute Savings Plan. Optimize the Lambda functions' duration and memory usage, the number of invocations, and the amount of data that is transferred. Connect the Lambda functions to the private subnet that contains the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Purchase a Compute Savings Plan. Optimize the Lambda functions' duration and memory usage, the number of invocations, and the amount of data that is transferred. Keep the Lambda functions in the Lambda service VPC.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 417 discussion",
      "discusstion": [
        {
          "id": 850418,
          "date": "Sat 25 Mar 2023 20:44",
          "username": "Buruguduystunstugudunstuy",
          "content": "Answer C is the best solution that meets the company's requirements.<br><br>By purchasing a Compute Savings Plan, the company can save on the costs of running both EC2 instances and Lambda functions. The Lambda functions can be connected to the private subnet that contains the EC2 instances through a VPC endpoint for AWS services or a VPC peering connection. This provides direct network access to the EC2 instances while keeping the traffic within the private network, which helps to minimize network latency.<br><br>Optimizing the Lambda functions' duration, memory usage, number of invocations, and amount of data transferred can help to further minimize costs and improve performance. Additionally, using a private subnet helps to ensure that the EC2 instances are not directly accessible from the public internet, which is a security best practice.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer A is not the best solution because connecting the Lambda functions directly to the private subnet that contains the EC2 instances may not be scalable as the number of Lambda functions increases. Additionally, using an EC2 Instance Savings Plan may not provide savings on the costs of running Lambda functions.<br><br>Answer B is not the best solution because connecting the Lambda functions to a public subnet may not be as secure as connecting them to a private subnet. Also, keeping the EC2 instances in a private subnet helps to ensure that they are not directly accessible from the public internet.<br><br>Answer D is not the best solution because keeping the Lambda functions in the Lambda service VPC may not provide direct network access to the EC2 instances, which may impact the performance of the application.</li></ul>",
          "upvote_count": "18",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850419,
          "date": "Sat 25 Mar 2023 20:44",
          "username": "Buruguduystunstugudunstuy",
          "content": "Answer A is not the best solution because connecting the Lambda functions directly to the private subnet that contains the EC2 instances may not be scalable as the number of Lambda functions increases. Additionally, using an EC2 Instance Savings Plan may not provide savings on the costs of running Lambda functions.<br><br>Answer B is not the best solution because connecting the Lambda functions to a public subnet may not be as secure as connecting them to a private subnet. Also, keeping the EC2 instances in a private subnet helps to ensure that they are not directly accessible from the public internet.<br><br>Answer D is not the best solution because keeping the Lambda functions in the Lambda service VPC may not provide direct network access to the EC2 instances, which may impact the performance of the application.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1054316,
          "date": "Thu 26 Oct 2023 07:57",
          "username": "TariqKipkemei",
          "content": "Implement Compute Savings Plan because it applies to Lambda usage as well, then connect the Lambda functions to the private subnet that contains the EC2 instances",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1282500,
          "date": "Thu 12 Sep 2024 08:55",
          "username": "MatAlves",
          "content": "\\\"Savings Plans are a flexible pricing model that offer low prices on Amazon EC2, AWS Lambda, and AWS Fargate usage, in exchange for a commitment to a consistent amount of usage (measured in $/hour) for a 1 or 3 year term.\\\"<br>- That already excludes A and B.<br><br>The question requires to \\\"keep network latency between the services low\\\", which can be achieved by connectingthe Lambda functions to the private subnet that contains the EC2 instances.<br><br>C is the answer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1229796,
          "date": "Thu 13 Jun 2024 14:36",
          "username": "[Removed]",
          "content": "C<br>https://aws.amazon.com/savingsplans/compute-pricing/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 992128,
          "date": "Mon 28 Aug 2023 14:01",
          "username": "Guru4Cloud",
          "content": "A Compute Savings Plan covers both EC2 and Lambda and allows maximizing savings on all resources.<br>Optimizing Lambda configuration reduces costs.<br>Connecting the Lambda functions to the private subnet with the EC2 instances provides direct network access between them, keeping latency low.<br>The Lambda functions are isolated in the private subnet rather than public, improving security.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 971531,
          "date": "Fri 04 Aug 2023 01:30",
          "username": "jaehoon090",
          "content": "CCCCCCCCCCCCCCCCCCCC",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 855243,
          "date": "Thu 30 Mar 2023 05:33",
          "username": "elearningtakai",
          "content": "Connect Lambda to Private Subnet contains EC2",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 849782,
          "date": "Sat 25 Mar 2023 04:43",
          "username": "zooba72",
          "content": "Compute savings plan covers both EC2 & Lambda",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 848359,
          "date": "Thu 23 Mar 2023 16:16",
          "username": "Zox42",
          "content": "C. I would go with C, because Compute savings plans cover Lambda as well.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 847287,
          "date": "Wed 22 Mar 2023 17:41",
          "username": "andyto",
          "content": "A. I would go with A. Saving and low network latency are required.<br>EC2 instance savings plans offer savings of up to 72%<br>Compute savings plans offer savings of up to 66%<br>Placing Lambda on the same private network with EC2 instances provides the lowest latency.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>EC2 Instance Savings Plans apply to EC2 usage only. Compute Savings Plans apply to usage across Amazon EC2, AWS Lambda, and AWS Fargate. (https://aws.amazon.com/savingsplans/faq/)<br><br>Lambda functions need direct network access to the EC2 instances for the application to work and these EC2 instances are in the private subnet. So the correct answer is C.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 848567,
          "date": "Thu 23 Mar 2023 19:48",
          "username": "abitwrong",
          "content": "EC2 Instance Savings Plans apply to EC2 usage only. Compute Savings Plans apply to usage across Amazon EC2, AWS Lambda, and AWS Fargate. (https://aws.amazon.com/savingsplans/faq/)<br><br>Lambda functions need direct network access to the EC2 instances for the application to work and these EC2 instances are in the private subnet. So the correct answer is C.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#418",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect needs to allow team members to access Amazon S3 buckets in two different AWS accounts: a development account and a production account. The team currently has access to S3 buckets in the development account by using unique IAM users that are assigned to an IAM group that has appropriate permissions in the account.<br><br>The solutions architect has created an IAM role in the production account. The role has a policy that grants access to an S3 bucket in the production account.<br><br>Which solution will meet these requirements while complying with the principle of least privilege?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#418",
          "answers": [
            {
              "choice": "<p>Attach the Administrator Access policy to the development account users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add the development account as a principal in the trust policy of the role in the production account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Turn off the S3 Block Public Access feature on the S3 bucket in the production account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a user in the production account with unique credentials for each team member.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 418 discussion",
      "discusstion": [
        {
          "id": 875830,
          "date": "Sat 20 Apr 2024 19:45",
          "username": "kels1",
          "content": "well, if you made it this far, it means you are persistent :) Good luck with your exam!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thanks good luck for all</li><li>thank you!</li></ul>",
          "upvote_count": "75",
          "selected_answers": ""
        },
        {
          "id": 892200,
          "date": "Wed 08 May 2024 15:22",
          "username": "SkyZeroZx",
          "content": "Thanks good luck for all",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 985563,
          "date": "Tue 20 Aug 2024 07:27",
          "username": "Kimnesh",
          "content": "thank you!",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 860568,
          "date": "Thu 04 Apr 2024 04:55",
          "username": "gpt_test",
          "content": "By adding the development account as a principal in the trust policy of the IAM role in the production account, you are allowing users from the development account to assume the role in the production account. This allows the team members to access the S3 bucket in the production account without granting them unnecessary privileges.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1054319,
          "date": "Sat 26 Oct 2024 08:00",
          "username": "TariqKipkemei",
          "content": "Add the development account as a principal in the trust policy of the role in the production account",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 992102,
          "date": "Wed 28 Aug 2024 13:34",
          "username": "Guru4Cloud",
          "content": "The best solution is B) Add the development account as a principal in the trust policy of the role in the production account.<br><br>This allows cross-account access to the S3 bucket in the production account by assuming the IAM role. The development account users can assume the role to gain temporary access to the production bucket.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 943121,
          "date": "Thu 04 Jul 2024 21:37",
          "username": "nilandd44gg",
          "content": "https://aws.amazon.com/blogs/security/how-to-use-trust-policies-with-iam-roles/<br><br>An AWS account accesses another AWS account =E2=80=93 This use case is commonly referred to as a cross-account role pattern. It allows human or machine IAM principals from one AWS account to assume this role and act on resources within a second AWS account. A role is assumed to enable this behavior when the resource in the target account doesn't have a resource-based policy that could be used to grant cross-account access.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 855244,
          "date": "Sat 30 Mar 2024 06:40",
          "username": "elearningtakai",
          "content": "About Trust policy =E2=80=93 The trust policy defines which principals can assume the role, and under which conditions. A trust policy is a specific type of resource-based policy for IAM roles.<br><br>Answer A: overhead permission Admin to development.<br>Answer C: Block public access is a security best practice and seems not relevant to this scenario.<br>Answer D: difficult to manage and scale",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 850408,
          "date": "Mon 25 Mar 2024 20:35",
          "username": "Buruguduystunstugudunstuy",
          "content": "Answer A, attaching the Administrator Access policy to development account users, provides too many permissions and violates the principle of least privilege. This would give users more access than they need, which could lead to security issues if their credentials are compromised.<br><br>Answer C, turning off the S3 Block Public Access feature, is not a recommended solution as it is a security best practice to enable S3 Block Public Access to prevent accidental public access to S3 buckets.<br><br>Answer D, creating a user in the production account with unique credentials for each team member, is also not a recommended solution as it can be difficult to manage and scale for large teams. It is also less secure, as individual user credentials can be more easily compromised.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 850105,
          "date": "Mon 25 Mar 2024 13:11",
          "username": "klayytech",
          "content": "The solution that will meet these requirements while complying with the principle of least privilege is to add the development account as a principal in the trust policy of the role in the production account. This will allow team members to access Amazon S3 buckets in two different AWS accounts while complying with the principle of least privilege.<br><br>Option A is not recommended because it grants too much access to development account users. Option C is not relevant to this scenario. Option D is not recommended because it does not comply with the principle of least privilege.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 847065,
          "date": "Fri 22 Mar 2024 13:42",
          "username": "Akademik6",
          "content": "B is the correct answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#419",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations with all features enabled and runs multiple Amazon EC2 workloads in the ap-southeast-2 Region. The company has a service control policy (SCP) that prevents any resources from being created in any other Region. A security policy requires the company to encrypt all data at rest.<br><br>An audit discovers that employees have created Amazon Elastic Block Store (Amazon EBS) volumes for EC2 instances without encrypting the volumes. The company wants any new EC2 instances that any IAM user or root user launches in ap-southeast-2 to use encrypted EBS volumes. The company wants a solution that will have minimal effect on employees who create EBS volumes.<br><br>Which combination of steps will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#419",
          "answers": [
            {
              "choice": "<p>In the Amazon EC2 console, select the EBS encryption account attribute and define a default encryption key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM permission boundary. Attach the permission boundary to the root organizational unit (OU). Define the boundary to deny the ec2:CreateVolume action when the ec2:Encrypted condition equals false.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an SCP. Attach the SCP to the root organizational unit (OU). Define the SCP to deny the ec2:CreateVolume action whenthe ec2:Encrypted condition equals false.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Update the IAM policies for each account to deny the ec2:CreateVolume action when the ec2:Encrypted condition equals false.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>In the Organizations management account, specify the Default EBS volume encryption setting.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 419 discussion",
      "discusstion": [
        {
          "id": 992093,
          "date": "Wed 28 Feb 2024 14:23",
          "username": "Guru4Cloud",
          "content": "The correct answer is (C) and (E).<br><br>Option (C): Creating an SCP and attaching it to the root organizational unit (OU) will deny the ec2:CreateVolume action when the ec2:Encrypted condition equals false. This means that any IAM user or root user in any account in the organization will not be able to create an EBS volume without encrypting it.<br>Option (E): Specifying the Default EBS volume encryption setting in the Organizations management account will ensure that all new EBS volumes created in any account in the organization are encrypted by default.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 900467,
          "date": "Fri 17 Nov 2023 22:33",
          "username": "Axaus",
          "content": "CE<br>Prevent future issues by creating a SCP and set a default encryption.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 1226662,
          "date": "Sun 08 Dec 2024 12:48",
          "username": "Jazz888",
          "content": "The problem here is we don't know in which account the workload is on. The account in ap-xx-is that the management account or it's a member account?? That will decide to select either A or E. C is certainly correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1222334,
          "date": "Sat 30 Nov 2024 23:58",
          "username": "NSA_Poker",
          "content": "(A) is incorrect bc absent of SCP or the Organizations management account, the scope of the EC2 console is too narrow to be applied to 'any IAM user or root user'.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 1202712,
          "date": "Sat 26 Oct 2024 19:13",
          "username": "venutadi",
          "content": "https://repost.aws/knowledge-center/ebs-automatic-encryption<br>Newly created Amazon EBS volumes aren't encrypted by default. However, you can turn on default encryption for new EBS volumes and snapshot copies that are created within a specified Region. To turn on encryption by default, use the Amazon Elastic Compute Cloud (Amazon EC2) console.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1115670,
          "date": "Sun 07 Jul 2024 09:16",
          "username": "1rob",
          "content": "A: will enforce automatic encryption in a account. This will have no effect on employees.Do this in every account.<br>B: permission boundary is not appropriate here.<br>C: an SCP will force employees to create encrypted volumes in every account.<br>D: This would work but is too much maintenance.<br>E: Setting EBS volume encryption in the Organizations management account will only have impact on volumes in that account, not on other accounts.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1110447,
          "date": "Sun 30 Jun 2024 10:20",
          "username": "pentium75",
          "content": "The solution should \\\"have minimal effect on employees who create EBS volumes\\\". Thus new volumes should automatically be encrypted. Options B, C and D do NOT automatically encrypt volumes, they simply cause requests to create non-encrypted volumes to fail.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>IMO the correct solution is AC:<br><br>In the Amazon EC2 console, select the EBS encryption account attribute and define a default encryption key.<br>-&gt; This has to be done in every AWS account separately.<br><br>Create an SCP. Attach the SCP to the root organizational unit (OU). Define the SCP to deny the ec2:CreateVolume action whenthe ec2:Encrypted condition equals false.<br>-&gt; This will just act as a safeguard in case an admin would disable default encryption in the member account, so it should not have any effect on employees who create EBS volumes.<br><br>I think an updated question would offer options A and an updated C:<br><br>Create an SCP. Attach the SCP to the root organizational unit (OU). Define the SCP to deny the ec2:DisableEbsEncryptionByDefault action.<br>-&gt; This will prevent disabling default encryption once is has been enabled.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 1167423,
          "date": "Fri 06 Sep 2024 18:59",
          "username": "dkw2342",
          "content": "IMO the correct solution is AC:<br><br>In the Amazon EC2 console, select the EBS encryption account attribute and define a default encryption key.<br>-> This has to be done in every AWS account separately.<br><br>Create an SCP. Attach the SCP to the root organizational unit (OU). Define the SCP to deny the ec2:CreateVolume action whenthe ec2:Encrypted condition equals false.<br>-> This will just act as a safeguard in case an admin would disable default encryption in the member account, so it should not have any effect on employees who create EBS volumes.<br><br>I think an updated question would offer options A and an updated C:<br><br>Create an SCP. Attach the SCP to the root organizational unit (OU). Define the SCP to deny the ec2:DisableEbsEncryptionByDefault action.<br>-> This will prevent disabling default encryption once is has been enabled.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1001515,
          "date": "Thu 07 Mar 2024 15:07",
          "username": "Valder21",
          "content": "Wondering if just C would be sufficient?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1000103,
          "date": "Wed 06 Mar 2024 05:34",
          "username": "bjexamprep",
          "content": "Seems many people selected E as part of the correct answer. But I didn't find so called Organization level EBS default setting in my Organization management account. I tried settingdefault EBS encryption setting in my Organization management account, and it didn't apply to the member account. If E cannot guarantee default encryption in all other account, E has no advantage over A. Anyone can explain why E is better than A?",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 939900,
          "date": "Mon 01 Jan 2024 15:04",
          "username": "novelai_me",
          "content": "Option A: By default, EBS encryption is not enabled for EC2 instances. However, you can set an EBS encryption by default in your AWS account in the Amazon EC2 console. This ensures that every new EBS volume that is created is encrypted.<br>Option E: With AWS Organizations, you can centrally set the default EBS encryption for your organization's accounts. This helps in enforcing a consistent encryption policy across your organization.<br>Option B, C and D are not correct because while you can use IAM policies or SCPs to restrict the creation of unencrypted EBS volumes, this could potentially impact employees' ability to create necessary resources if not properly configured. They might require additional permissions management, which is not mentioned in the requirements. By setting the EBS encryption by default at the account or organization level (Options A and E), you can ensure all new volumes are encrypted without affecting the ability of employees to create resources.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 921870,
          "date": "Wed 13 Dec 2023 04:57",
          "username": "Buruguduystunstugudunstuy",
          "content": "SCPs are a great way to enforce policies across an entire AWS Organization, preventing users from creating resources that do not comply with the set policies.<br><br>In AWS Management Console, one can go to EC2 dashboard -> Settings -> Data encryption -> Check \\\"Always encrypt new EBS volumes\\\" and choose a default KMS key. This ensures that every new EBS volume created will be encrypted by default, regardless of how it is created.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 907859,
          "date": "Mon 27 Nov 2023 11:49",
          "username": "PRASAD180",
          "content": "1000% CE crt",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 903993,
          "date": "Wed 22 Nov 2023 14:34",
          "username": "[Removed]",
          "content": "Encryption by default allows you to ensure that all new EBS volumes created in your account are always encrypted, even if you don't specify encryptedtrue request parameter.<br>https://aws.amazon.com/blogs/compute/must-know-best-practices-for-amazon-ebs-encryption/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 902325,
          "date": "Mon 20 Nov 2023 05:12",
          "username": "hiroohiroo",
          "content": "C=E3=81=A8E=E3=81=8C=E6=AD=A3=E3=81=97=E3=81=84=E3=81=A8=E8=80=83=E3=81=88=E3=82=8B=E3=80=82",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 899136,
          "date": "Thu 16 Nov 2023 14:47",
          "username": "Efren",
          "content": "CE for me as well",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 898150,
          "date": "Wed 15 Nov 2023 12:08",
          "username": "nosense",
          "content": "SCP that denies the ec2:CreateVolume action when the ec2:Encrypted condition equals false. This will prevent users and service accounts in member accounts from creating unencrypted EBS volumes in the ap-southeast-2 Region.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Wouldn't this have \\\"effect on employees who create EBS volumes\\\", which we are asked to minimize?</li><li>agreed</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 1110436,
          "date": "Sun 30 Jun 2024 10:12",
          "username": "pentium75",
          "content": "Wouldn't this have \\\"effect on employees who create EBS volumes\\\", which we are asked to minimize?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 899135,
          "date": "Thu 16 Nov 2023 14:46",
          "username": "Efren",
          "content": "agreed",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#420",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use an Amazon RDS for PostgreSQL DB cluster to simplify time-consuming database administrative tasks for production database workloads. The company wants to ensure that its database is highly available and will provide automatic failover support in most scenarios in less than 40 seconds. The company wants to offload reads off of the primary instance and keep costs as low as possible.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#420",
          "answers": [
            {
              "choice": "<p>Use an Amazon RDS Multi-AZ DB instance deployment. Create one read replica and point the read workload to the read replica.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon RDS Multi-AZ DB duster deployment Create two read replicas and point the read workload to the read replicas.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon RDS Multi-AZ DB instance deployment. Point the read workload to the secondary instances in the Multi-AZ pair.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon RDS Multi-AZ DB cluster deployment Point the read workload to the reader endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 420 discussion",
      "discusstion": [
        {
          "id": 905110,
          "date": "Tue 23 May 2023 19:28",
          "username": "ogerber",
          "content": "A - multi-az instance : failover takes between 60-120 sec<br>D - multi-az cluster: failover around 35 sec<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>They want to keep cost low as possible, A is the right answer</li><li>No, the question clearly says \\\"failover support in most scenarios in less than 40 seconds.\\\"<br>D is the only possible answer.</li></ul>",
          "upvote_count": "19",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1208411,
          "date": "Wed 08 May 2024 16:01",
          "username": "kelmryan1",
          "content": "They want to keep cost low as possible, A is the right answer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, the question clearly says \\\"failover support in most scenarios in less than 40 seconds.\\\"<br>D is the only possible answer.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1282507,
          "date": "Thu 12 Sep 2024 09:07",
          "username": "MatAlves",
          "content": "No, the question clearly says \\\"failover support in most scenarios in less than 40 seconds.\\\"<br>D is the only possible answer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 921877,
          "date": "Tue 13 Jun 2023 04:20",
          "username": "Buruguduystunstugudunstuy",
          "content": "The correct answer is:<br>D. Use an Amazon RDS Multi-AZ DB cluster deployment. Point the read workload to the reader endpoint.<br><br>Explanation:<br>The company wants high availability, automatic failover support in less than 40 seconds, read offloading from the primary instance, and cost-effectiveness.<br><br>Answer D is the best choice for several reasons:<br><br>1. Amazon RDS Multi-AZ deployments provide high availability and automatic failover support.<br><br>2. In a Multi-AZ DB cluster, Amazon RDS automatically provisions and maintains a standby in a different Availability Zone. If a failure occurs, Amazon RDS performs an automatic failover to the standby, minimizing downtime.<br><br>3. The \\\"Reader endpoint\\\" for an Amazon RDS DB cluster provides load-balancing support for read-only connections to the DB cluster. Directing read traffic to the reader endpoint helps in offloading read operations from the primary instance.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry I'm a bit confused... I thought only Aurora DB Cluster has reader endpoint. Do you by any chance has the link to the doc for RDS Reader Endpoint?</li><li>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts-connection-management.html#multi-az-db-clusters-concepts-connection-management-endpoints-reader</li></ul>",
          "upvote_count": "13",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 966853,
          "date": "Sun 30 Jul 2023 06:35",
          "username": "Kiki_Pass",
          "content": "Sorry I'm a bit confused... I thought only Aurora DB Cluster has reader endpoint. Do you by any chance has the link to the doc for RDS Reader Endpoint?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts-connection-management.html#multi-az-db-clusters-concepts-connection-management-endpoints-reader</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 990337,
          "date": "Fri 25 Aug 2023 20:45",
          "username": "lemur88",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts-connection-management.html#multi-az-db-clusters-concepts-connection-management-endpoints-reader",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1270029,
          "date": "Wed 21 Aug 2024 12:46",
          "username": "zikou",
          "content": "to offload read we use read replicas also there is no such thing as reader endpoint in rds, it is only on aurora",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1193575,
          "date": "Thu 11 Apr 2024 10:18",
          "username": "rondelldell",
          "content": "https://aws.amazon.com/rds/features/multi-az/<br>Amazon RDS Multi-AZ with two readable standbys",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1184471,
          "date": "Thu 28 Mar 2024 01:08",
          "username": "hro",
          "content": "I think the cluster is over-kill - but the company 'wants to use an Amazon RDS ... DB cluster'.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1110453,
          "date": "Sun 31 Dec 2023 11:29",
          "username": "pentium75",
          "content": "A would be cheapest but \\\"failover times are typically 60=E2=80=93120 seconds\\\" which does not meet our requirements. We need Multi-AZ DB cluster (not instance). This has a reader endpoint by default, thus no need for additional read replicas (to \\\"keep costs as low as possible\\\").<br> https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1105655,
          "date": "Tue 26 Dec 2023 03:52",
          "username": "master9",
          "content": "in question, it has mentioned that \\\"keep costs as low as possible\\\"<br><br>In a Multi-AZ configuration, the DB instances and EBS storage volumes are deployed across two Availability Zones.<br>It provides high availability and failover support for DB instances.<br>This setup is primarily for disaster recovery.<br>It involves a primary DB instance and a standby replica, which is a copy of the primary DB instance.<br>The standby replica is not accessible directly; instead, it serves as a failover target in case the primary instance fails.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1063094,
          "date": "Sun 05 Nov 2023 16:56",
          "username": "potomac",
          "content": "It is D.<br>A is not correct. Multi-AZ DB instance deployment, which creates a primary instance and a standby instance to provide failover support. However, the standby instance does not serve traffic.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1058670,
          "date": "Tue 31 Oct 2023 11:05",
          "username": "maudsha",
          "content": "https://aws.amazon.com/blogs/database/choose-the-right-amazon-rds-deployment-option-single-az-instance-multi-az-instance-or-multi-az-database-cluster/#:~:textUnlike%20Multi%2DAZ%20instance%20deployment,different%20AZs%20serving%20read%20traffic.<br><br>According to this the answer is D<br>\\\"Unlike Multi-AZ instance deployment, where the secondary instance can't be accessed for read or writes, Multi-AZ DB cluster deployment consists of primary instance running in one AZ serving read-write traffic and two other standby running in two different AZs serving read traffic.\\\"<br><br>You don't have to create read replicas with cluster deployment so B is out.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1007617,
          "date": "Thu 14 Sep 2023 14:35",
          "username": "kwang312",
          "content": "D<br>Fail-over on Multi-AZ DB instance is 60-120s<br>On Cluster, the time under 35s",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 992082,
          "date": "Mon 28 Aug 2023 13:08",
          "username": "Guru4Cloud",
          "content": "D. Use an Amazon RDS Multi-AZ DB cluster deployment. Point the read workload to the reader endpoint",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 992073,
          "date": "Mon 28 Aug 2023 13:00",
          "username": "Guru4Cloud",
          "content": "Use an Amazon RDS Multi-AZ DB cluster deployment Point the read workload to the reader endpoint.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 990182,
          "date": "Fri 25 Aug 2023 17:45",
          "username": "Eminenza22",
          "content": "The solutions architect should use an Amazon RDS Multi-AZ DB instance deployment. The company can create one read replica and point the read workload to the read replica. Amazon RDS provides high availability and failover support for DB instances using Multi-AZ deployments.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 939018,
          "date": "Fri 30 Jun 2023 12:52",
          "username": "Gooniegoogoo",
          "content": "and d..<br><br>Multi-AZ DB clusters typically have lower write latency when compared to Multi-AZ DB instance deployments. They also allow read-only workloads to run on reader DB instances.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 916845,
          "date": "Wed 07 Jun 2023 06:18",
          "username": "TariqKipkemei",
          "content": "This is as case where both option A and D can work, but option D gives 2 DB instances for read compared to only 1 given by option A. Costwise they are the same as both options use 3 DB instances.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 910539,
          "date": "Tue 30 May 2023 20:41",
          "username": "Henrytml",
          "content": "lowest cost option, and effective with read replica",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 910160,
          "date": "Tue 30 May 2023 12:39",
          "username": "antropaws",
          "content": "It's D. Read well: \\\"A company wants to use an Amazon RDS for PostgreSQL DB CLUSTER\\\".",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#421",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a highly available SFTP service. The SFTP service uses two Amazon EC2 Linux instances that run with elastic IP addresses to accept traffic from trusted IP sources on the internet. The SFTP service is backed by shared storage that is attached to the instances. User accounts are created and managed as Linux users in the SFTP servers.<br><br>The company wants a serverless option that provides high IOPS performance and highly configurable security. The company also wants to maintain control over user permissions.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#421",
          "answers": [
            {
              "choice": "<p>Create an encrypted Amazon Elastic Block Store (Amazon EBS) volume. Create an AWS Transfer Family SFTP service with a public endpoint that allows only trusted IP addresses. Attach the EBS volume to the SFTP service endpoint. Grant users access to the SFTP service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an encrypted Amazon Elastic File System (Amazon EFS) volume. Create an AWS Transfer Family SFTP service with elastic IP addresses and a VPC endpoint that has internet-facing access. Attach a security group to the endpoint that allows only trusted IP addresses. Attach the EFS volume to the SFTP service endpoint. Grant users access to the SFTP service.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 bucket with default encryption enabled. Create an AWS Transfer Family SFTP service with a public endpoint that allows only trusted IP addresses. Attach the S3 bucket to the SFTP service endpoint. Grant users access to the SFTP service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon S3 bucket with default encryption enabled. Create an AWS Transfer Family SFTP service with a VPC endpoint that has internal access in a private subnet. Attach a security group that allows only trusted IP addresses. Attach the S3 bucket to the SFTP service endpoint. Grant users access to the SFTP service.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 421 discussion",
      "discusstion": [
        {
          "id": 913993,
          "date": "Sun 04 Jun 2023 02:25",
          "username": "alexandercamachop",
          "content": "First Serverless - EFS<br>Second it says it is attached to the Linux instances at the same time, only EFS can do that.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1110462,
          "date": "Sun 31 Dec 2023 11:44",
          "username": "pentium75",
          "content": "Not A - Transfer Family canj't use EBS<br>B - Possible and meets requirement<br>Not C - S3 doesn't guarantee \\\"high IOPS performance\\\"; also there is no \\\"public endpoint that allows only trusted IP addresses\\\" (you can assign a Security Group to a public endpoint but that is not mentioned here)<br>Not D - Endpoint would be in private subnet, not accessible from Internet at all",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1322085,
          "date": "Wed 04 Dec 2024 22:04",
          "username": "FlyingHawk",
          "content": "D, the description \\\"VPC endpoint that has internal access in a private subnet\\\" is technically incorrect and doesn't make sense for AWS Transfer Family.<br>AWS Transfer Family actually supports:<br><br>Public endpoints (internet-facing)<br>VPC endpoints (private network access)<br><br>The VPC endpoint doesn't have \\\"internal access\\\" - it's about how the SFTP service is configured to interact with your VPC network resources.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A more accurate description for a VPC-based AWS Transfer Family SFTP service would be:<br><br>Create an AWS Transfer Family SFTP service with a VPC endpoint<br>Place the endpoint in a private subnet<br>Configure security groups to allow only trusted IP sources<br>Attach the S3 bucket to the SFTP service endpoint<br><br>So while the overall strategy in option D (using S3 with VPC endpoint and security group restrictions) could be valid, the specific wording about \\\"internal access\\\" is incorrect.<br>This technical inaccuracy in the description would make D an incorrect answer in a certification or technical assessment.</li><li>C public endpoint that allows only trusted IP addresses does not sound technical correct as only the security group can restrict the IP address. the correct description should \\\" Create an AWS Transfer Family SFTP service in public subnet with security group allows only trusted IP address, create the vpc endpoint (gateway endpoint here for saving the cost) of S3 bucket to allow the SFTP service can access it privately, grant user access to the SFTP service via IAM policies and grant the access of S3 to SFTP service via IAM role</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1322088,
          "date": "Wed 04 Dec 2024 22:07",
          "username": "FlyingHawk",
          "content": "A more accurate description for a VPC-based AWS Transfer Family SFTP service would be:<br><br>Create an AWS Transfer Family SFTP service with a VPC endpoint<br>Place the endpoint in a private subnet<br>Configure security groups to allow only trusted IP sources<br>Attach the S3 bucket to the SFTP service endpoint<br><br>So while the overall strategy in option D (using S3 with VPC endpoint and security group restrictions) could be valid, the specific wording about \\\"internal access\\\" is incorrect.<br>This technical inaccuracy in the description would make D an incorrect answer in a certification or technical assessment.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1322100,
          "date": "Wed 04 Dec 2024 22:36",
          "username": "FlyingHawk",
          "content": "C public endpoint that allows only trusted IP addresses does not sound technical correct as only the security group can restrict the IP address. the correct description should \\\" Create an AWS Transfer Family SFTP service in public subnet with security group allows only trusted IP address, create the vpc endpoint (gateway endpoint here for saving the cost) of S3 bucket to allow the SFTP service can access it privately, grant user access to the SFTP service via IAM policies and grant the access of S3 to SFTP service via IAM role",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1321745,
          "date": "Wed 04 Dec 2024 07:38",
          "username": "FlyingHawk",
          "content": "Amazon S3 provides high throughput and performance suitable for many use cases, including those requiring high IOPS (Input/Output Operations Per Second). S3 is not a block storage solution (like EBS) or a file system (like EFS). While its performance is exceptional for its intended use case (object storage), it may not match the millisecond latency or consistent high IOPS required for transactional databases or other ultra-low latency applications.<br>For applications where sub-millisecond latency or extremely high random IOPS (e.g., 64,000 IOPS) is required, solutions like EBS or EFS would be better.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>After read the description of C, I feel the description of \\\"an AWS Transfer Family SFTP service with a public endpoint that allows only trusted IP addresses\\\" does not sound correct, the endpoint itself cannot restrict the IP address from internet, only the security group.the correct description should be: Create an AWS Transfer Family SFTP service with a public endpoint and security group that allows only trusted IP addresses. create the vpc endpoint (gateway endpoint here for saving the cost) of S3 bucket to allow the SFTP service can access it privately, grant user access to the SFTP service via IAM policies and grant the access of S3 to SFTP service via IAM role</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1322107,
          "date": "Wed 04 Dec 2024 22:48",
          "username": "FlyingHawk",
          "content": "After read the description of C, I feel the description of \\\"an AWS Transfer Family SFTP service with a public endpoint that allows only trusted IP addresses\\\" does not sound correct, the endpoint itself cannot restrict the IP address from internet, only the security group.the correct description should be: Create an AWS Transfer Family SFTP service with a public endpoint and security group that allows only trusted IP addresses. create the vpc endpoint (gateway endpoint here for saving the cost) of S3 bucket to allow the SFTP service can access it privately, grant user access to the SFTP service via IAM policies and grant the access of S3 to SFTP service via IAM role",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1316302,
          "date": "Fri 22 Nov 2024 13:34",
          "username": "JA2018",
          "content": "Actually AWS Transfer Family can use S3, so it's a toss-up between Options B & C but I tend to favour Option B for the following reasons (based on the keys in STEM):<br><br>company runs a highly available SFTP service. The SFTP service uses two Amazon EC2 Linux instances that run with elastic IP addresses to accept traffic from trusted IP sources on the internet. The SFTP service is backed by shared storage that is attached to the instances. User accounts are created and managed as Linux users in the SFTP servers.<br>1. Requires a serverless option that provides high IOPS performance and highly configurable security.<br><br>2. User also wants to maintain control over user permissions",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1268598,
          "date": "Mon 19 Aug 2024 13:17",
          "username": "523db89",
          "content": "Option B best meets the company's requirements by leveraging AWS Transfer Family with an EFS volume, ensuring high availability, security, and performance.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1065765,
          "date": "Wed 08 Nov 2023 17:33",
          "username": "NickGordon",
          "content": "A is incorrect as EBS is not an option<br>C is incorrect aswhen I select public accessible, I don't see an option I can set up trusted IP address<br>D isi incorrect as it is internal.<br><br>B, followed the steps and I can set up a sftp in this way",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1063097,
          "date": "Sun 05 Nov 2023 17:01",
          "username": "potomac",
          "content": "B<br>EFS has lower latency and higher throughput than S3 when accessed from within the same availability zone.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1048827,
          "date": "Fri 20 Oct 2023 15:32",
          "username": "thanhnv142",
          "content": "C: Because it is server-less. deffinitely not A or B because it utilizes server.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Amazon Elastic File System - Serverless, fully elastic file storage:<br>https://aws.amazon.com/efs/</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1049610,
          "date": "Sat 21 Oct 2023 17:32",
          "username": "warp",
          "content": "Amazon Elastic File System - Serverless, fully elastic file storage:<br>https://aws.amazon.com/efs/",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1020840,
          "date": "Fri 29 Sep 2023 15:53",
          "username": "bsbs1234",
          "content": "B,<br>A), transfer family does not support EBS<br>C,D), S3 has lower IOPS than EFS",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 992055,
          "date": "Mon 28 Aug 2023 12:32",
          "username": "Guru4Cloud",
          "content": "Create an encrypted Amazon Elastic File System (Amazon EFS) volume. Create an AWS Transfer Family SFTP service with elastic IP addresses and a VPC endpoint that has internet-facing access. Attach a security group to the endpoint that allows only trusted IP addresses. Attach the EFS volume to the SFTP service endpoint. Grant users access to the SFTP service.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 922601,
          "date": "Wed 14 Jun 2023 00:55",
          "username": "Axeashes",
          "content": "https://aws.amazon.com/blogs/storage/use-ip-whitelisting-to-secure-your-aws-transfer-for-sftp-servers/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 916852,
          "date": "Wed 07 Jun 2023 06:33",
          "username": "TariqKipkemei",
          "content": "EFS is best to serve this purpose.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 910200,
          "date": "Tue 30 May 2023 13:55",
          "username": "envest",
          "content": "Answer C (from abylead.com)<br>Transfer Family offers fully managed serverless support for B2B file transfers via SFTP, AS2, FTPS, & FTP directly in & out of S3 or EFS. For a controlled internet access you can use internet-facing endpts with Transfer SFTP servers & restrict trusted internet sources with VPC's default Sgrp. In addition, S3 Access Points aliases allows you to use S3 bkt names for a unique access control plcy on shared S3 datasets.<br>Transfer SFTP & S3: https://aws.amazon.com/blogs/apn/how-to-use-aws-transfer-family-to-replace-and-scale-sftp-servers/<br><br>A)Transfer SFTP doesn't support EBS, not for share data, & not serverless: infeasible.<br>B)EFS mounts via ENIs not endpts: infeasible.<br>D)pub endpt for internet access is missing: infeasible.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 909638,
          "date": "Mon 29 May 2023 20:37",
          "username": "omoakin",
          "content": "BBBBBBBBBBBBBB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 909216,
          "date": "Mon 29 May 2023 10:49",
          "username": "vesen22",
          "content": "EFS all day",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 908653,
          "date": "Sun 28 May 2023 15:10",
          "username": "norris81",
          "content": "https://aws.amazon.com/blogs/storage/use-ip-whitelisting-to-secure-your-aws-transfer-for-sftp-servers/ is worth a read",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#422",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a new machine learning (ML) model solution on AWS. The models are developed as independent microservices that fetch approximately 1 GB of model data from Amazon S3 at startup and load the data into memory. Users access the models through an asynchronous API. Users can send a request or a batch of requests and specify where the results should be sent.<br><br>The company provides models to hundreds of users. The usage patterns for the models are irregular. Some models could be unused for days or weeks. Other models could receive batches of thousands of requests at a time.<br><br>Which design should a solutions architect recommend to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#422",
          "answers": [
            {
              "choice": "<p>Direct the requests from the API to a Network Load Balancer (NLB). Deploy the models as AWS Lambda functions that are invoked by the NLB.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Direct the requests from the API to an Application Load Balancer (ALB). Deploy the models as Amazon Elastic Container Service (Amazon ECS) services that read from an Amazon Simple Queue Service (Amazon SQS) queue. Use AWS App Mesh to scale the instances of the ECS cluster based on the SQS queue size.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Direct the requests from the API into an Amazon Simple Queue Service (Amazon SQS) queue. Deploy the models as AWS Lambda functions that are invoked by SQS events. Use AWS Auto Scaling to increase the number of vCPUs for the Lambda functions based on the SQS queue size.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Direct the requests from the API into an Amazon Simple Queue Service (Amazon SQS) queue. Deploy the models as Amazon Elastic Container Service (Amazon ECS) services that read from the queue. Enable AWS Auto Scaling on Amazon ECS for both the cluster and copies of the service based on the queue size.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 422 discussion",
      "discusstion": [
        {
          "id": 903708,
          "date": "Wed 22 Nov 2023 07:33",
          "username": "examtopictempacc",
          "content": "asynchronousSQS, microservicesECS.<br>Use AWS Auto Scaling to adjust the number of ECS services.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>good breakdown :)</li></ul>",
          "upvote_count": "16",
          "selected_answers": ""
        },
        {
          "id": 916858,
          "date": "Thu 07 Dec 2023 07:38",
          "username": "TariqKipkemei",
          "content": "good breakdown :)",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 916861,
          "date": "Thu 07 Dec 2023 07:41",
          "username": "TariqKipkemei",
          "content": "For once examtopic answer is correct :) haha...<br><br>Batch requests/asyncAmazon SQS<br>MicroservicesAmazon ECS<br>Workload variationsAWS Auto Scaling on Amazon ECS",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1196205,
          "date": "Tue 15 Oct 2024 22:25",
          "username": "wizcloudifa",
          "content": "ALB is mentioned in other options to distract you, you dont need ALB for scaling here, we would need ECS autoscaling, they play with that idea in option B a bit however D gets it in a completely optimized way.... A and C both have lambda which for Machine learning models with workloads on heavy side, will not fly",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 992048,
          "date": "Wed 28 Feb 2024 13:25",
          "username": "Guru4Cloud",
          "content": "I go with everyone D.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 914028,
          "date": "Mon 04 Dec 2023 04:28",
          "username": "alexandercamachop",
          "content": "D, no need for an App Load balancer like C says, no where in the text.<br>SQS is needed to ensure all request gets routed properly in a Microservices architecture and also that it waits until its picked up.<br>ECS with Autoscaling, will scale based on the unknown pattern of usage as mentioned.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 907975,
          "date": "Mon 27 Nov 2023 15:27",
          "username": "anibinaadi",
          "content": "It is D<br>Refer https://aws.amazon.com/blogs/containers/amazon-elastic-container-service-ecs-auto-scaling-using-custom-metrics/ for additional information/knowledge.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 898230,
          "date": "Wed 15 Nov 2023 14:40",
          "username": "nosense",
          "content": "because it is scalable, reliable, and efficient.<br>C does not scale the models automatically<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>why C doesn't scale the model?Application Auto Scaling can apply to lambda.</li><li>How would you \\\"use Auto Scaling (!) to increase the number of vCPUs (!) for the Lamba functions\\\"?</li><li>Auto Scaling doesn't apply to Lambda. As your functions receive more requests, Lambda automatically handles scaling the number of execution environments until you reach your account's concurrency limit.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 995643,
          "date": "Fri 01 Mar 2024 07:03",
          "username": "deechean",
          "content": "why C doesn't scale the model?Application Auto Scaling can apply to lambda.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>How would you \\\"use Auto Scaling (!) to increase the number of vCPUs (!) for the Lamba functions\\\"?</li><li>Auto Scaling doesn't apply to Lambda. As your functions receive more requests, Lambda automatically handles scaling the number of execution environments until you reach your account's concurrency limit.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1110466,
          "date": "Sun 30 Jun 2024 10:51",
          "username": "pentium75",
          "content": "How would you \\\"use Auto Scaling (!) to increase the number of vCPUs (!) for the Lamba functions\\\"?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1222411,
          "date": "Sun 01 Dec 2024 04:22",
          "username": "NSA_Poker",
          "content": "Auto Scaling doesn't apply to Lambda. As your functions receive more requests, Lambda automatically handles scaling the number of execution environments until you reach your account's concurrency limit.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#423",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect wants to use the following JSON text as an identity-based policy to grant specific permissions:<br><br><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image4.png\"&gt;<br><br>Which IAM principals can the solutions architect attach this policy to? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AB</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#423",
          "answers": [
            {
              "choice": "<p>Role<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Group<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Organization<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Elastic Container Service (Amazon ECS) resource<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon EC2 resource<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 423 discussion",
      "discusstion": [
        {
          "id": 898235,
          "date": "Wed 15 Nov 2023 14:45",
          "username": "nosense",
          "content": "identity-based policy used for role and group",
          "upvote_count": "18",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1110468,
          "date": "Sun 30 Jun 2024 10:52",
          "username": "pentium75",
          "content": "Isn't the content of the policy completely irrelevant? IAM policies are applied to users, groups or roles ...",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1167876,
          "date": "Sat 07 Sep 2024 10:07",
          "username": "dkw2342",
          "content": "AB is correct, but the question is misleading because, according to the AWS IAM documentation, groups are not considered principals:<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html#intro-structure-principal.\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 990374,
          "date": "Sun 25 Feb 2024 23:02",
          "username": "Guru4Cloud",
          "content": "A. Role<br>B. Group",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 916862,
          "date": "Thu 07 Dec 2023 07:44",
          "username": "TariqKipkemei",
          "content": "Role or group",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AB"
        }
      ]
    },
    {
      "question_id": "#424",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a custom application on Amazon EC2 On-Demand Instances. The application has frontend nodes that need to run 24 hours a day, 7 days a week and backend nodes that need to run only for a short time based on workload. The number of backend nodes varies during the day.<br><br>The company needs to scale out and scale in more instances based on workload.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#424",
          "answers": [
            {
              "choice": "<p>Use Reserved Instances for the frontend nodes. Use AWS Fargate for the backend nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Reserved Instances for the frontend nodes. Use Spot Instances for the backend nodes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Spot Instances for the frontend nodes. Use Reserved Instances for the backend nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Spot Instances for the frontend nodes. Use AWS Fargate for the backend nodes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 424 discussion",
      "discusstion": [
        {
          "id": 1024846,
          "date": "Wed 04 Oct 2023 15:45",
          "username": "Ramdi1",
          "content": "Has to be A, It can scale down if required and you will be charged for what you use with fargate. Secondly they have not said the backend can have timeouts or can be down for a little period of time or something. So it has to rule out any spot instances even though they are cheaper.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Fargate is serverless EKS so it cannot manage EC2 nodes</li></ul>",
          "upvote_count": "16",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1115463,
          "date": "Sat 06 Jan 2024 23:01",
          "username": "awsgeek75",
          "content": "Fargate is serverless EKS so it cannot manage EC2 nodes",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 898244,
          "date": "Mon 15 May 2023 13:58",
          "username": "nosense",
          "content": "Reserved+ spot .<br>Fargate for serverless",
          "upvote_count": "15",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1343083,
          "date": "Sun 19 Jan 2025 17:31",
          "username": "zdi561",
          "content": "The requirement is to have an autoscaling , and fargate can do that. Spot instance only works when the work load is fault tolerant.Furthermore it is told to use on-demand instance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1297169,
          "date": "Mon 14 Oct 2024 03:40",
          "username": "Mayur_B",
          "content": "I will go with A.<br>Where does the question mentions that the workload interruptions are accepted.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1167105,
          "date": "Wed 06 Mar 2024 12:03",
          "username": "mussha",
          "content": "B) because firegate is containser",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1161037,
          "date": "Tue 27 Feb 2024 23:34",
          "username": "noircesar25",
          "content": "so what ive make up from this scenario is: the key word right here is \\\"backend nodes\\\" you cant use a serverless compute service with nodes and you need to use EC2s<br>so if we had ECS EC2 lunch type or on-demand EC2s as an options for the backend, they would be true?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1115667,
          "date": "Sun 07 Jan 2024 10:14",
          "username": "mwwt2022",
          "content": "24-7 usage for fe -> reserved instance<br>irregular workload for be -> spot instance",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1110480,
          "date": "Sun 31 Dec 2023 12:24",
          "username": "pentium75",
          "content": "Not A because Fargate runs containers, not EC2 instances. But we have no indication that the workload would be containerized; it runs \\\"on EC2 instances\\\".<br>Not C and D because frontend must run 24/7, can't use Spot.<br><br>Thus B, yes, Spot instances are risky, but as they need to run \\\"only for a short time\\\" it seems acceptable.<br><br>Technically ideal option would be Reserved Instances for frontend nodes and On-demand instances for backend nodes, but that is not an option here.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1088151,
          "date": "Tue 05 Dec 2023 03:33",
          "username": "[Removed]",
          "content": "Not sure the application can be containerized",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1085778,
          "date": "Sat 02 Dec 2023 07:38",
          "username": "AwsZora",
          "content": "it is safe<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Fargatecontainers<br>A is wrong</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1126269,
          "date": "Thu 18 Jan 2024 23:40",
          "username": "awsgeek75",
          "content": "Fargatecontainers<br>A is wrong",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1084340,
          "date": "Thu 30 Nov 2023 13:27",
          "username": "meowruki",
          "content": "Reserved Instances (RIs) for Frontend Nodes: Since the frontend nodes need to run continuously (24/7), using Reserved Instances for them makes sense. RIs provide significant cost savings compared to On-Demand Instances for steady-state workloads.<br><br>Spot Instances for Backend Nodes: Spot Instances are suitable for short-duration workloads and can be significantly cheaper than On-Demand Instances. Since the number of backend nodes varies during the day, Spot Instances can help you take advantage of spare capacity at a lower cost. Keep in mind that Spot Instances may be interrupted if the capacity is needed elsewhere, so they are best suited for stateless and fault-tolerant workloads.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A (Use Reserved Instances for the frontend nodes. Use AWS Fargate for the backend nodes): AWS Fargate is a serverless compute engine for containers, and it may not be the best fit for the described backend workload, especially if the number of backend nodes varies during the day.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1084341,
          "date": "Thu 30 Nov 2023 13:28",
          "username": "meowruki",
          "content": "Option A (Use Reserved Instances for the frontend nodes. Use AWS Fargate for the backend nodes): AWS Fargate is a serverless compute engine for containers, and it may not be the best fit for the described backend workload, especially if the number of backend nodes varies during the day.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1077981,
          "date": "Thu 23 Nov 2023 03:02",
          "username": "Goutham4981",
          "content": "AWS Fargate is a serverless compute engine for containers that allows you to run containers without having to manage the underlying infrastructure. It simplifies the process of deploying and managing containerized applications by abstracting away the complexities of server management, scaling, and cluster orchestration.<br>No containerized application requirements are mentioned in the question. Plain EC2 instances. So Fargate is not actually an option",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1048833,
          "date": "Fri 20 Oct 2023 15:43",
          "username": "thanhnv142",
          "content": "A is fargate, which is none sense. B seems more OK (though none-sense)",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1021426,
          "date": "Sat 30 Sep 2023 13:53",
          "username": "dilaaziz",
          "content": "Fargate for backend node<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Fargate is for containers not EC2 so A is wrong</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1126270,
          "date": "Thu 18 Jan 2024 23:41",
          "username": "awsgeek75",
          "content": "Fargate is for containers not EC2 so A is wrong",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1015315,
          "date": "Sat 23 Sep 2023 22:24",
          "username": "Wayne23Fang",
          "content": "(B) would take chance, though unlikely (A) is server-less auto-scaling. In case backend is idle, it might scale down, save money but no need to worry for interruption by Spot instance.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 977843,
          "date": "Thu 10 Aug 2023 17:34",
          "username": "Ale1973",
          "content": "If you will use spot instances you must assumme lost any job in course. This scenary has not explicit mentions about aaplication can tolerate this situations, then, on my opinion, option A is the most suitable.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But the app is not containerized, it can't run on Fargate without significant changes.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1110478,
          "date": "Sun 31 Dec 2023 12:21",
          "username": "pentium75",
          "content": "But the app is not containerized, it can't run on Fargate without significant changes.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 958369,
          "date": "Fri 21 Jul 2023 13:09",
          "username": "james2033",
          "content": "Question keyword \\\"scale out and scale in more instances\\\". Therefore not related Kubernetes. Choose B, reserved instance for front-end and spot instance for back-end.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#425",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses high block storage capacity to runs its workloads on premises. The company's daily peak input and output transactions per second are not more than 15,000 IOPS. The company wants to migrate the workloads to Amazon EC2 and to provision disk performance independent of storage capacity.<br><br>Which Amazon Elastic Block Store (Amazon EBS) volume type will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#425",
          "answers": [
            {
              "choice": "<p>GP2 volume type<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>io2 volume type<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>GP3 volume type<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>io1 volume type<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 425 discussion",
      "discusstion": [
        {
          "id": 898243,
          "date": "Mon 15 May 2023 13:57",
          "username": "nosense",
          "content": "Gp3 $ 0.08 usd per gb<br>Gp2 $ 0.10 usd per gb",
          "upvote_count": "15",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 902599,
          "date": "Sat 20 May 2023 15:39",
          "username": "Yadav_Sanjay",
          "content": "Both GP2 and GP3 has max IOPS 16000 but GP3 is cost effective.<br>https://aws.amazon.com/blogs/storage/migrate-your-amazon-ebs-volumes-from-gp2-to-gp3-and-save-up-to-20-on-costs/",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1321290,
          "date": "Tue 03 Dec 2024 09:28",
          "username": "LeonSauveterre",
          "content": "OK, and is this something I should know to prepare for the exam...",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 990310,
          "date": "Fri 25 Aug 2023 20:20",
          "username": "Guru4Cloud",
          "content": "C. GP3 volume type",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 958389,
          "date": "Fri 21 Jul 2023 13:21",
          "username": "james2033",
          "content": "Quote \\\"customers can scale up to 16,000 IOPS and\\\" at https://aws.amazon.com/about-aws/whats-new/2020/12/introducing-new-amazon-ebs-general-purpose-volumes-gp3/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914032,
          "date": "Sun 04 Jun 2023 03:33",
          "username": "alexandercamachop",
          "content": "The GP3 (General Purpose SSD) volume type in Amazon Elastic Block Store (EBS) is the most cost-effective option for the given requirements. GP3 volumes offer a balance of price and performance and are suitable for a wide range of workloads, including those with moderate I/O needs.<br><br>GP3 volumes allow you to provision performance independently from storage capacity, which means you can adjust the baseline performance (measured in IOPS) and throughput (measured in MiB/s) separately from the volume size. This flexibility allows you to optimize your costs while meeting the workload requirements.<br><br>In this case, since the company's daily peak input and output transactions per second are not more than 15,000 IOPS, GP3 volumes provide a suitable and cost-effective option for their workloads.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 909306,
          "date": "Mon 29 May 2023 13:01",
          "username": "maver144",
          "content": "It is not C pals. The company wants to migrate the workloads to Amazon EC2 and to provision disk performance independent of storage capacity. With GP3 we have to increase storage capacity to increase IOPS over baseline.<br><br>You can only chose IOPS independetly with IO family and IO2 is in general better then IO1.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>@maver144- That's the case with GP2volumes. With GP3 we can define IOPS independent of storage capacity.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 953187,
          "date": "Sun 16 Jul 2023 10:46",
          "username": "somsundar",
          "content": "@maver144- That's the case with GP2volumes. With GP3 we can define IOPS independent of storage capacity.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 905025,
          "date": "Tue 23 May 2023 17:12",
          "username": "Joselucho38",
          "content": "Therefore, the most suitable and cost-effective option in this scenario is the GP3 volume type (option C).",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 898782,
          "date": "Tue 16 May 2023 02:13",
          "username": "Efren",
          "content": "GPS3 allows 16000 IOPS",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#426",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to store data from its healthcare application. The application's data frequently changes. A new regulation requires audit access at all levels of the stored data.<br><br>The company hosts the application on an on-premises infrastructure that is running out of storage capacity. A solutions architect must securely migrate the existing data to AWS while satisfying the new regulation.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#426",
          "answers": [
            {
              "choice": "<p>Use AWS DataSync to move the existing data to Amazon S3. Use AWS CloudTrail to log data events.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Snowcone to move the existing data to Amazon S3. Use AWS CloudTrail to log management events.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon S3 Transfer Acceleration to move the existing data to Amazon S3. Use AWS CloudTrail to log data events.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Storage Gateway to move the existing data to Amazon S3. Use AWS CloudTrail to log management events.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 426 discussion",
      "discusstion": [
        {
          "id": 1048838,
          "date": "Fri 20 Oct 2023 15:49",
          "username": "thanhnv142",
          "content": "A is better because:<br>- Data sync is used for migrate. Storage gw is used to connect on-prem to AWS.<br>- dataevents is to log for access, management events is for config or management",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 1110487,
          "date": "Sun 31 Dec 2023 12:32",
          "username": "pentium75",
          "content": "We need to log \\\"access at all levels\\\" aka \\\"data events\\\", thus B and D are out (logging only \\\"management events\\\" like granting permissions or changing the access tier).<br>C, S3 Transfer Acceleration is to increase upload performance from widespread sources or over unreliable networks, but it just provides an endpoint, it does not upload anything itself.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1336217,
          "date": "Sat 04 Jan 2025 02:19",
          "username": "hpirnaj",
          "content": "data management shows management operations that are performed on resources in your AWS account so, D is wrong<br>https://repost.aws/knowledge-center/cloudtrail-data-management-events",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1316313,
          "date": "Fri 22 Nov 2024 14:00",
          "username": "JA2018",
          "content": "Keys in STEM:<br><br>A company needs to store data from its healthcare application. The application's data frequently changes. A new regulation requires audit access at all levels of the stored data.<br><br>1. Must securely migrate the existing data to AWS while satisfying the new regulation.<br><br>2. Logs access at all data levels",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1260804,
          "date": "Sun 04 Aug 2024 22:50",
          "username": "1e22522",
          "content": "Typical DataSync scenario me thinks!",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1165734,
          "date": "Mon 04 Mar 2024 16:06",
          "username": "osmk",
          "content": "Use AWS DataSync to migrate existing data to Amazon S3https://aws.amazon.com/datasync/faqs/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1153179,
          "date": "Sun 18 Feb 2024 11:07",
          "username": "NayeraB",
          "content": "It's DataSync for me",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1137799,
          "date": "Thu 01 Feb 2024 18:40",
          "username": "frmrkc",
          "content": "Storage Gateway integration with CloudTrail :<br>https://docs.aws.amazon.com/filegateway/latest/filefsxw/logging-using-cloudtrail.html<br><br>whereas DataSync can be monitored with Amazon CloudWatch:<br>https://docs.aws.amazon.com/datasync/latest/userguide/monitor-datasync.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>and here are all Storage Gateway actions monitored by CloudTrail:<br>https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1137810,
          "date": "Thu 01 Feb 2024 19:03",
          "username": "frmrkc",
          "content": "and here are all Storage Gateway actions monitored by CloudTrail:<br>https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1115472,
          "date": "Sat 06 Jan 2024 23:14",
          "username": "awsgeek75",
          "content": "B and C don't solve the problem<br>A is extending the data and management events are for administrative actions only (tracking account creation, user security actions etc.).<br>C uses DataSync to move all the data and logs data events which include S3 file uploads and downloads.<br><br>Management events: User logs into an EC2 instance, creates an S3 IAM role<br>Data events: User uploads a file to S3",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1115355,
          "date": "Sat 06 Jan 2024 18:58",
          "username": "benacert",
          "content": "A- DataSync secure fast data transfer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1101131,
          "date": "Wed 20 Dec 2023 03:04",
          "username": "ZZZ_Sleep",
          "content": "*Keyword* of this questionrunning out of storage capacity<br><br>AWS Storage Gatewayextend the on-premises storage<br>AWS DataSynccopy data between on-premises storage<br><br>So, the answer should be D (AWS Storage Gateway)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Securely migrate the existing data to AWS\\\" -&gt; move data away fron on-premises storage to AWS. Plus, D logs only management events, not \\\"access at all levels\\\".</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1110483,
          "date": "Sun 31 Dec 2023 12:29",
          "username": "pentium75",
          "content": "\\\"Securely migrate the existing data to AWS\\\" -> move data away fron on-premises storage to AWS. Plus, D logs only management events, not \\\"access at all levels\\\".",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1093727,
          "date": "Mon 11 Dec 2023 18:51",
          "username": "aws94",
          "content": "AWS DataSync is designed for fast, simple, and secure data transfer, but it focuses more on data synchronization rather than on-premises migration.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thus it is wrong, but more because of the incorrect logging option in this answer.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1110488,
          "date": "Sun 31 Dec 2023 12:33",
          "username": "pentium75",
          "content": "Thus it is wrong, but more because of the incorrect logging option in this answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1084344,
          "date": "Thu 30 Nov 2023 13:32",
          "username": "meowruki",
          "content": "AWS DataSync is suitable for data transfer and synchronization<br><br>Option D (Use AWS Storage Gateway to move the existing data to Amazon S3. Use AWS CloudTrail to log management events): AWS Storage Gateway is typically used for hybrid cloud storage solutions and may introduce additional complexity for a one-time data migration task. It might not be as straightforward as using AWS Snowcone for this specific scenario.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1078067,
          "date": "Thu 23 Nov 2023 05:46",
          "username": "chikuwan",
          "content": "both DataSync and Storage Gateway are fine to sync data...but to \\\"audit access at all levels of the stored data\\\" ...it should be data events(data plane operation)..management event is some account level things.<br>So answer should be A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1072968,
          "date": "Fri 17 Nov 2023 03:10",
          "username": "bogobob",
          "content": "While both DataSync and Storage Gateway allow syncing of data between on-premise and cloud, DataSync is built for rapid shifting of data into a cloud environment, not specifically for continued use in on-premise servers.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1063106,
          "date": "Sun 05 Nov 2023 17:19",
          "username": "potomac",
          "content": "AWS DataSync is an online data transfer service that simplifies, automates, and accelerates the process of copying large amounts of data to and from AWS storage services over the Internet or over AWS Direct Connect.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>What about logging?</li><li>This is where AWS CloudTrail comes into play.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1110489,
          "date": "Sun 31 Dec 2023 12:33",
          "username": "pentium75",
          "content": "What about logging?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This is where AWS CloudTrail comes into play.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1316314,
          "date": "Fri 22 Nov 2024 14:02",
          "username": "JA2018",
          "content": "This is where AWS CloudTrail comes into play.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1054172,
          "date": "Thu 26 Oct 2023 02:17",
          "username": "canonlycontainletters1",
          "content": "A seems to be more convincing to me.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#427",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is implementing a complex Java application with a MySQL database. The Java application must be deployed on Apache Tomcat and must be highly available.<br><br>What should the solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#427",
          "answers": [
            {
              "choice": "<p>Deploy the application in AWS Lambda. Configure an Amazon API Gateway API to connect with the Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy the application by using AWS Elastic Beanstalk. Configure a load-balanced environment and a rolling deployment policy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to Amazon ElastiCache. Configure the ElastiCache security group to allow access from the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Launch an Amazon EC2 instance. Install a MySQL server on the EC2 instance. Configure the application on the server. Create an AMI. Use the AMI to create a launch template with an Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 427 discussion",
      "discusstion": [
        {
          "id": 901084,
          "date": "Thu 18 May 2023 12:48",
          "username": "cloudenthusiast",
          "content": "B<br>AWS Elastic Beanstalk provides an easy and quick way to deploy, manage, and scale applications. It supports a variety of platforms, including Java and Apache Tomcat. By using Elastic Beanstalk, the solutions architect can upload the Java application and configure the environment to run Apache Tomcat.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 1231209,
          "date": "Sun 16 Jun 2024 07:19",
          "username": "KennethNg923",
          "content": "Beanstalk for sure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1196979,
          "date": "Wed 17 Apr 2024 06:24",
          "username": "zinabu",
          "content": "By using Elastic Beanstalk, the solutions architect can upload the Java application and configure the environment to run Apache Tomcat.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1196562,
          "date": "Tue 16 Apr 2024 14:03",
          "username": "wizcloudifa",
          "content": "The key word here from the question if you notice is \\\"The Java application must be DEPLOYED...\\\" hence Elastic Beanstalk, it is a serverless deployment service and supports a variety of platforms(apache Tomcat in our situation), and it will scale automatically with less operational overhead(unlike option D with a lot of operation overhead)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1126271,
          "date": "Thu 18 Jan 2024 23:48",
          "username": "awsgeek75",
          "content": "https://aws.amazon.com/elasticbeanstalk/details/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 990298,
          "date": "Fri 25 Aug 2023 20:03",
          "username": "Guru4Cloud",
          "content": "B. Deploy the application by using AWS Elastic Beanstalk. Configure a load-balanced environment and a rolling deployment policy.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 958414,
          "date": "Fri 21 Jul 2023 13:47",
          "username": "james2033",
          "content": "Keyword \\\"AWS Elastic Beanstalk\\\" for re-architecture from Java web-app inside Apache Tomcat to AWS Cloud.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 917773,
          "date": "Thu 08 Jun 2023 05:50",
          "username": "TariqKipkemei",
          "content": "Definitely B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 910250,
          "date": "Tue 30 May 2023 14:58",
          "username": "antropaws",
          "content": "Clearly B.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 898251,
          "date": "Mon 15 May 2023 14:06",
          "username": "nosense",
          "content": "Easy deploy, management and scale",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 898213,
          "date": "Mon 15 May 2023 13:19",
          "username": "greyrose",
          "content": "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#428",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A serverless application uses Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. The Lambda function needs permissions to read and write to the DynamoDB table.<br><br>Which solution will give the Lambda function access to the DynamoDB table MOST securely?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#428",
          "answers": [
            {
              "choice": "<p>Create an IAM user with programmatic access to the Lambda function. Attach a policy to the user that allows read and write access to the DynamoDB table. Store the access_key_id and secret_access_key parameters as part of the Lambda environment variables. Ensure that other AWS users do not have read and write access to the Lambda function configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM role that includes Lambda as a trusted service. Attach a policy to the role that allows read and write access to the DynamoDB table. Update the configuration of the Lambda function to use the new role as the execution role.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM user with programmatic access to the Lambda function. Attach a policy to the user that allows read and write access to the DynamoDB table. Store the access_key_id and secret_access_key parameters in AWS Systems Manager Parameter Store as secure string parameters. Update the Lambda function code to retrieve the secure string parameters before connecting to the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM role that includes DynamoDB as a trusted service. Attach a policy to the role that allows read and write access from the Lambda function. Update the code of the Lambda function to attach to the new role as an execution role.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 428 discussion",
      "discusstion": [
        {
          "id": 1115474,
          "date": "Sat 06 Jan 2024 23:20",
          "username": "awsgeek75",
          "content": "DynamoDB needs to trust Lambda. NOT the other way around. So Lambda must be configured as a trusted service. Role for service which gives B and D options. D is setting up (somehow?) to allow Lambda to trust DynamoDB... or the wording makes no sense.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 958448,
          "date": "Fri 21 Jul 2023 14:09",
          "username": "james2033",
          "content": "Keyword B. \\\" IAM role that includes Lambda as a trusted service\\\", not \\\"IAM role that includes DynamoDB as a trusted service\\\" in D. It is IAM role, not IAM user.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1231210,
          "date": "Sun 16 Jun 2024 07:22",
          "username": "KennethNg923",
          "content": "IAM Role for access to DynamoDB, not for access Lambda",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 910251,
          "date": "Tue 30 May 2023 15:00",
          "username": "antropaws",
          "content": "B sounds better.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 909685,
          "date": "Mon 29 May 2023 22:00",
          "username": "omoakin",
          "content": "BBBBBBBBBB",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 905822,
          "date": "Wed 24 May 2023 13:45",
          "username": "alvinnguyennexcel",
          "content": "vote B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 901089,
          "date": "Thu 18 May 2023 12:53",
          "username": "cloudenthusiast",
          "content": "B<br>Option B suggests creating an IAM role that includes Lambda as a trusted service, meaning the role is specifically designed for Lambda functions. The role should have a policy attached to it that grants the required read and write access to the DynamoDB table.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 898259,
          "date": "Mon 15 May 2023 14:18",
          "username": "nosense",
          "content": "B is right<br>Role key word and trusted service lambda",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#429",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The following IAM policy is attached to an IAM group. This is the only policy applied to the group.<br><br><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image5.png\"&gt;<br><br>What are the effective IAM permissions of this policy for group members?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#429",
          "answers": [
            {
              "choice": "<p>Group members are permitted any Amazon EC2 action within the us-east-1 Region. Statements after the Allow permission are not applied.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Group members are denied any Amazon EC2 permissions in the us-east-1 Region unless they are logged in with multi-factor authentication (MFA).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Group members are allowed the ec2:StopInstances and ec2:TerminateInstances permissions for all Regions when logged in with multi-factor authentication (MFA). Group members are permitted any other Amazon EC2 action.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Group members are allowed the ec2:StopInstances and ec2:TerminateInstances permissions for the us-east-1 Region only when logged in with multi-factor authentication (MFA). Group members are permitted any other Amazon EC2 action within the us-east-1 Region.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 429 discussion",
      "discusstion": [
        {
          "id": 924477,
          "date": "Thu 15 Jun 2023 20:19",
          "username": "jack79",
          "content": "came in exam today",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 1231211,
          "date": "Sun 16 Jun 2024 07:30",
          "username": "KennethNg923",
          "content": "for the us-east-1 Region only, not for all region",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1196570,
          "date": "Tue 16 Apr 2024 14:21",
          "username": "wizcloudifa",
          "content": "One of the few situations when actual answer is same as the most voted answer lol",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1107666,
          "date": "Thu 28 Dec 2023 11:27",
          "username": "pdragon1981",
          "content": "Not sure why everyone vote D, I think that the valid option as to be C as the second condition regarding MFA there is point that only refer to a specific region, so basically this means that is for all the regions<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Ok ignore D is right as the first condition is what gives permission to make anything for EC2 but is restricted to us-east-1 region</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1107670,
          "date": "Thu 28 Dec 2023 11:29",
          "username": "pdragon1981",
          "content": "Ok ignore D is right as the first condition is what gives permission to make anything for EC2 but is restricted to us-east-1 region",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1042120,
          "date": "Fri 13 Oct 2023 00:37",
          "username": "youdelin",
          "content": "the json is describing a lot of things apparently, so I go with the longest answer lol",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 990286,
          "date": "Fri 25 Aug 2023 19:46",
          "username": "Guru4Cloud",
          "content": "D. Group members are allowed the ec2:StopInstances and ec2:TerminateInstances permissions for the us-east-1 Region only when logged in with multi-factor authentication (MFA). Group members are permitted any other Amazon EC2 action within the us-east-1 Region",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 958461,
          "date": "Fri 21 Jul 2023 14:20",
          "username": "james2033",
          "content": "A. \\\"Statements after the Allow permission are not applied.\\\" --> Wrong.<br><br>B. \\\"denied any Amazon EC2 permissions in the us-east-1 Region\\\" --> Wrong. Just deny 2 items.<br><br>C. \\\"allowed the ec2:StopInstances and ec2:TerminateInstances permissions for all Regions\\\" --> Wrong. Just region us-east-1.<br><br>D. ok.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 917782,
          "date": "Thu 08 Jun 2023 05:59",
          "username": "TariqKipkemei",
          "content": "Only D makes sense",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 910255,
          "date": "Tue 30 May 2023 15:03",
          "username": "antropaws",
          "content": "D sounds about right.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 905831,
          "date": "Wed 24 May 2023 13:48",
          "username": "alvinnguyennexcel",
          "content": "D is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 901259,
          "date": "Thu 18 May 2023 15:51",
          "username": "omoakin",
          "content": "D is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 898263,
          "date": "Mon 15 May 2023 14:23",
          "username": "nosense",
          "content": "D is right",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#430",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A manufacturing company has machine sensors that upload .csv files to an Amazon S3 bucket. These .csv files must be converted into images and must be made available as soon as possible for the automatic generation of graphical reports.<br><br>The images become irrelevant after 1 month, but the .csv files must be kept to train machine learning (ML) models twice a year. The ML trainings and audits are planned weeks in advance.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#430",
          "answers": [
            {
              "choice": "<p>Launch an Amazon EC2 Spot Instance that downloads the .csv files every hour, generates the image files, and uploads the images to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Design an AWS Lambda function that converts the .csv files into images and stores the images in the S3 bucket. Invoke the Lambda function when a .csv file is uploaded.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3 Standard to S3 Glacier 1 day after they are uploaded. Expire the image files after 30 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 1 day after they are uploaded. Expire the image files after 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 1 day after they are uploaded. Keep the image files in Reduced Redundancy Storage (RRS).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 430 discussion",
      "discusstion": [
        {
          "id": 909257,
          "date": "Wed 29 Nov 2023 12:52",
          "username": "vesen22",
          "content": "https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1115476,
          "date": "Sat 06 Jul 2024 22:31",
          "username": "awsgeek75",
          "content": "B for processing the images via Lambda as it's more cost efficient than EC2 spot instances<br>C for expiring images after 30 days and because the ML trainings are planned weeks in advance so S3 glacier is ideal for slow retrieval and cheap storage.<br><br>D and E uses S3 infrequent access which is more expensive than glacier",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1110497,
          "date": "Sun 30 Jun 2024 11:43",
          "username": "pentium75",
          "content": "Not A, we need the images \\\"as soon as possible\\\", A runs every hour<br>\\\"ML trainings and audits are planned weeks in advance\\\" thus Glacier (C) is ok.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1020097,
          "date": "Thu 28 Mar 2024 19:30",
          "username": "Xin123",
          "content": "Answer is B&C. For D, you must store data for 30 days in s3 standard before move to IA tiers, glacier is fine<br><br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html#:~:textBefore%20you%20transition%20objects%20to%20S3%20Standard%2DIA%20or%20S3%20One%20Zone%2DIA%2C%20you%20must%20store%20them%20for%20at%20least%2030%20days%20in%20Amazon%20S3",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 990283,
          "date": "Sun 25 Feb 2024 20:43",
          "username": "Guru4Cloud",
          "content": "Definitely B & C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 967361,
          "date": "Tue 30 Jan 2024 20:44",
          "username": "jayce5",
          "content": "A. Wrong, the .csv files must be processed asap.<br>D and E are incorrect since Glacier is the most cost-effective option, and plans for using .csv files are known weeks in advance.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 958464,
          "date": "Sun 21 Jan 2024 15:22",
          "username": "james2033",
          "content": "Why need \\\"These .csv files must be converted into images\\\"?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Because they are being used in some graphical reports (probably fancy powerpoint presentations!)</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1126272,
          "date": "Thu 18 Jul 2024 22:56",
          "username": "awsgeek75",
          "content": "Because they are being used in some graphical reports (probably fancy powerpoint presentations!)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 933295,
          "date": "Mon 25 Dec 2023 09:03",
          "username": "smartegnine",
          "content": "the key word is Weeks in advance, even you save data in S3 Gracia will also OK to take couples days to retrieve the data",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 917783,
          "date": "Fri 08 Dec 2023 07:05",
          "username": "TariqKipkemei",
          "content": "Definitely B & C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 914228,
          "date": "Mon 04 Dec 2023 10:08",
          "username": "Abrar2022",
          "content": "A. Wrong because Lifecycle rule is not mentioned.<br><br>B. CORRECT<br><br>C. CORRECT<br><br>D. Why Store on S3 One Zone-Infrequent Access (S3 One Zone-IA) when the files are going to irrelevant after 1 month? (Availability 99.99% - consider cost)<br><br>E. again, Why use Reduced Redundancy Storage (RRS) when the files are irrelevant after 1 month? (Availability 99.99% - consider cost)",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 907898,
          "date": "Mon 27 Nov 2023 13:32",
          "username": "RoroJ",
          "content": "B: Serverless and fast responding<br>E: will keep .csv file for a year, C and D expires the file after 30 days.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B&amp;C, misread the question, expires the image files after 30 days.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 907902,
          "date": "Mon 27 Nov 2023 13:34",
          "username": "RoroJ",
          "content": "B&C, misread the question, expires the image files after 30 days.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 902301,
          "date": "Mon 20 Nov 2023 03:52",
          "username": "hiroohiroo",
          "content": "https://aws.amazon.com/jp/about-aws/whats-new/2021/11/amazon-s3-glacier-storage-class-amazon-s3-glacier-flexible-retrieval/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 898271,
          "date": "Wed 15 Nov 2023 15:29",
          "username": "nosense",
          "content": "B severless and cost effective<br>C corrctl rule to store",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BC"
        }
      ]
    },
    {
      "question_id": "#431",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has developed a new video game as a web application. The application is in a three-tier architecture in a VPC with Amazon RDS for MySQL in the database layer. Several players will compete concurrently online. The game's developers want to display a top-10 scoreboard in near-real time and offer the ability to stop and restore the game while preserving the current scores.<br><br>What should a solutions architect do to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#431",
          "answers": [
            {
              "choice": "<p>Set up an Amazon ElastiCache for Memcached cluster to cache the scores for the web application to display.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an Amazon ElastiCache for Redis cluster to compute and cache the scores for the web application to display.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Place an Amazon CloudFront distribution in front of the web application to cache the scoreboard in a section of the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a read replica on Amazon RDS for MySQL to run queries to compute the scoreboard and serve the read traffic to the web application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 431 discussion",
      "discusstion": [
        {
          "id": 990222,
          "date": "Sun 25 Feb 2024 19:31",
          "username": "Guru4Cloud",
          "content": "Redis provides fast in-memory data storage and processing. It can compute the top 10 scores and update the cache in milliseconds.<br>ElastiCache Redis supports sorting and ranking operations needed for the top 10 leaderboard.<br>The cached leaderboard can be retrieved from Redis vs hitting the MySQL database for every read. This reduces load on the database.<br>Redis supports persistence, so scores are preserved if the cache stops/restarts",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1057344,
          "date": "Tue 30 Apr 2024 04:30",
          "username": "TariqKipkemei",
          "content": "Real-time gaming leaderboards are easy to create with Amazon ElastiCache for Redis. Just use the Redis Sorted Set data structure, which provides uniqueness of elements while maintaining the list sorted by their scores. Creating a real-time ranked list is as simple as updating a user's score each time it changes. You can also use Sorted Sets to handle time series data by using timestamps as the score.<br><br>https://aws.amazon.com/elasticache/redis/#:~:textElastiCache%20for%20Redis.-,Gaming,-Leaderboards",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1063160,
          "date": "Sun 05 May 2024 18:02",
          "username": "potomac",
          "content": "ElastiCache for Redis sorts and ranks datasets",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1003607,
          "date": "Sun 10 Mar 2024 04:57",
          "username": "5ab5e39",
          "content": "https://aws.amazon.com/blogs/database/building-a-real-time-gaming-leaderboard-with-amazon-elasticache-for-redis/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 981896,
          "date": "Thu 15 Feb 2024 20:52",
          "username": "ukivanlamlpi",
          "content": "concurrentlymemcached<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Amazon ElastiCache for Memcached is non-persistent so start/stop of game will lose the score.\\\" and offer the ability to stop and restore the game while preserving the current scores.\\\"</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1115776,
          "date": "Sun 07 Jul 2024 11:38",
          "username": "awsgeek75",
          "content": "Amazon ElastiCache for Memcached is non-persistent so start/stop of game will lose the score.\\\" and offer the ability to stop and restore the game while preserving the current scores.\\\"",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 954953,
          "date": "Thu 18 Jan 2024 07:45",
          "username": "james2033",
          "content": "See case study of leaderboard with Redis at https://redis.io/docs/data-types/sorted-sets/ , it is feature \\\"sorted sets\\\". See comparison between Redis an d Memcached at https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/SelectEngine.html , the different at feature \\\"Sorted sets\\\"",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 943565,
          "date": "Fri 05 Jan 2024 13:13",
          "username": "live_reply_developers",
          "content": "advanced data structures, complex querying, pub/sub messaging, or persistence, Redis may be a better fit.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 932894,
          "date": "Sun 24 Dec 2023 22:44",
          "username": "haoAWS",
          "content": "B is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 920905,
          "date": "Mon 11 Dec 2023 21:13",
          "username": "jf_topics",
          "content": "B correct.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 902298,
          "date": "Mon 20 Nov 2023 03:46",
          "username": "hiroohiroo",
          "content": "https://aws.amazon.com/jp/blogs/news/building-a-real-time-gaming-leaderboard-with-amazon-elasticache-for-redis/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 901100,
          "date": "Sat 18 Nov 2023 14:04",
          "username": "cloudenthusiast",
          "content": "Amazon ElastiCache for Redis is a highly scalable and fully managed in-memory data store. It can be used to store and compute the scores in real time for the top-10 scoreboard. Redis supports sorted sets, which can be used to store the scores as well as perform efficient queries to retrieve the top scores. By utilizing ElastiCache for Redis, the web application can quickly retrieve the current scores without the need to perform complex and potentially resource-intensive database queries.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 899054,
          "date": "Thu 16 Nov 2023 13:20",
          "username": "nosense",
          "content": "B is right",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 898201,
          "date": "Wed 15 Nov 2023 14:08",
          "username": "Efren",
          "content": "More questions!!!",
          "upvote_count": "5",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#432",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company wants to use machine learning (ML) algorithms to build and train models. The company will use the models to visualize complex scenarios and to detect trends in customer data. The architecture team wants to integrate its ML models with a reporting platform to analyze the augmented data and use the data directly in its business intelligence dashboards.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#432",
          "answers": [
            {
              "choice": "<p>Use AWS Glue to create an ML transform to build and train models. Use Amazon OpenSearch Service to visualize the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon SageMaker to build and train models. Use Amazon QuickSight to visualize the data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use a pre-built ML Amazon Machine Image (AMI) from the AWS Marketplace to build and train models. Use Amazon OpenSearch Service to visualize the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon QuickSight to build and train models by using calculated fields. Use Amazon QuickSight to visualize the data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 432 discussion",
      "discusstion": [
        {
          "id": 1343025,
          "date": "Sun 19 Jan 2025 15:05",
          "username": "vincent2023",
          "content": "Sage Maker - ML",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1259258,
          "date": "Thu 01 Aug 2024 10:16",
          "username": "67db0ed",
          "content": "https://docs.aws.amazon.com/quicksight/latest/user/sagemaker-integration.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1115838,
          "date": "Sun 07 Jan 2024 13:58",
          "username": "awsgeek75",
          "content": "Machine LearningSage Maker so B for least operational overhead<br>A and D are not right technologies.<br>C is possible but with more overhead of using AMI even if you can get OpenSearch to visualize the data somehow which I don't think is possible without massive overhead",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 990194,
          "date": "Fri 25 Aug 2023 18:00",
          "username": "Guru4Cloud",
          "content": "Use Amazon SageMaker to build and train models. Use Amazon QuickSight to visualize the data.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 958470,
          "date": "Fri 21 Jul 2023 14:34",
          "username": "james2033",
          "content": "Question keyword \\\"machine learning\\\", answer keyword \\\"Amazon SageMaker\\\". Choose B. Use Amazon QuickSight for visualization. See \\\"Gaining insights with machine learning (ML) in Amazon QuickSight\\\" at https://docs.aws.amazon.com/quicksight/latest/user/making-data-driven-decisions-with-ml-in-quicksight.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 944893,
          "date": "Thu 06 Jul 2023 19:46",
          "username": "VellaDevil",
          "content": "Sagemaker.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 917788,
          "date": "Thu 08 Jun 2023 06:30",
          "username": "TariqKipkemei",
          "content": "Business intelligence, visualiationsAmazonQuicksight<br>MLAmazon SageMaker",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 910266,
          "date": "Tue 30 May 2023 15:12",
          "username": "antropaws",
          "content": "Most likely B.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 901342,
          "date": "Thu 18 May 2023 17:36",
          "username": "omoakin",
          "content": "Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy ML models quickly.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901102,
          "date": "Thu 18 May 2023 13:07",
          "username": "cloudenthusiast",
          "content": "Amazon SageMaker is a fully managed service that provides a complete set of tools and capabilities for building, training, and deploying ML models. It simplifies the end-to-end ML workflow and reduces operational overhead by handling infrastructure provisioning, model training, and deployment.<br>To visualize the data and integrate it into business intelligence dashboards, Amazon QuickSight can be used. QuickSight is a cloud-native business intelligence service that allows users to easily create interactive visualizations, reports, and dashboards from various data sources, including the augmented data generated by the ML models.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 899658,
          "date": "Wed 17 May 2023 04:35",
          "username": "Efren",
          "content": "ML SageMaker",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 898278,
          "date": "Mon 15 May 2023 14:40",
          "username": "nosense",
          "content": "B sagemaker provide deploy ml models",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#433",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running its production and nonproduction environment workloads in multiple AWS accounts. The accounts are in an organization in AWS Organizations. The company needs to design a solution that will prevent the modification of cost usage tags.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#433",
          "answers": [
            {
              "choice": "<p>Create a custom AWS Config rule to prevent tag modification except by authorized principals.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a custom trail in AWS CloudTrail to prevent tag modification.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a service control policy (SCP) to prevent tag modification except by authorized principals.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create custom Amazon CloudWatch logs to prevent tag modification.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 433 discussion",
      "discusstion": [
        {
          "id": 990176,
          "date": "Sun 25 Feb 2024 18:30",
          "username": "Guru4Cloud",
          "content": "Tip: AWS Organziaton + service control policy (SCP) - This for any questions, you see both together. then you tell me<br>C. Create a service control policy (SCP) to prevent tag modification except by authorized principals.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1115840,
          "date": "Sun 07 Jul 2024 13:01",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html<br><br>AWS example for this question/use case:<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_tagging.html#example-require-restrict-tag-mods-to-admin",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 958493,
          "date": "Sun 21 Jan 2024 15:56",
          "username": "james2033",
          "content": "D \\\"Amazon CloudWatch\\\" just for logging, not for prevent tag modification https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies-cwe.html<br><br>Amazon Organziaton has \\\"Service Control Policy (SCP)\\\" with \\\"tag policy\\\" https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html . Choose C.<br><br>AWS Config for technical stuff, not for tag policies. Not A.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 921930,
          "date": "Wed 13 Dec 2023 07:36",
          "username": "TariqKipkemei",
          "content": "Service control policies (SCPs) are a type of organization policy that you can use to manage permissions in your organization.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914721,
          "date": "Mon 04 Dec 2023 17:11",
          "username": "alexandercamachop",
          "content": "Anytime we need to restrict anything in an AWS Organization, it is SCP Policies.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914224,
          "date": "Mon 04 Dec 2023 09:59",
          "username": "Abrar2022",
          "content": "AWS Config is for tracking configuration changes<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>so it's wrong. Right asnwer is C</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 914225,
          "date": "Mon 04 Dec 2023 09:59",
          "username": "Abrar2022",
          "content": "so it's wrong. Right asnwer is C",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 910270,
          "date": "Thu 30 Nov 2023 16:14",
          "username": "antropaws",
          "content": "I'd say C.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 902296,
          "date": "Mon 20 Nov 2023 03:44",
          "username": "hiroohiroo",
          "content": "https://docs.aws.amazon.com/ja_jp/organizations/latest/userguide/orgs_manage_policies_scps_examples_tagging.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 899058,
          "date": "Thu 16 Nov 2023 13:23",
          "username": "nosense",
          "content": "Denies tag: modify",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#434",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts its application in the AWS Cloud. The application runs on Amazon EC2 instances behind an Elastic Load Balancer in an Auto Scaling group and with an Amazon DynamoDB table. The company wants to ensure the application can be made available in anotherAWS Region with minimal downtime.<br><br>What should a solutions architect do to meet these requirements with the LEAST amount of downtime?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#434",
          "answers": [
            {
              "choice": "<p>Create an Auto Scaling group and a load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new disaster recovery Region's load balancer.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS CloudFormation template to create EC2 instances, load balancers, and DynamoDB tables to be launched when needed Configure DNS failover to point to the new disaster recovery Region's load balancer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS CloudFormation template to create EC2 instances and a load balancer to be launched when needed. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new disaster recovery Region's load balancer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Auto Scaling group and load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table. Create an Amazon CloudWatch alarm to trigger an AWS Lambda function that updates Amazon Route 53 pointing to the disaster recovery load balancer.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 434 discussion",
      "discusstion": [
        {
          "id": 906985,
          "date": "Fri 26 May 2023 03:55",
          "username": "lucdt4",
          "content": "A and D is correct.<br>But Route 53 haves a feature DNS failover when instances down so we dont need use Cloudwatch and lambda to trigger<br>-> A correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yes it does but you configure it. Its not automated anymore. D is the best answer!</li><li>to be launched when needed &gt; requires manual human intervention<br><br>Cetainly will not help with requirement for the least amount of downtime.</li><li>What are you talking about configuring ? Yes you have to configure everything at some point<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring.html</li><li>Did not see Route 53 in this question right? So my opinion is D</li></ul>",
          "upvote_count": "16",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 926780,
          "date": "Sun 18 Jun 2023 17:43",
          "username": "Wablo",
          "content": "Yes it does but you configure it. Its not automated anymore. D is the best answer!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>to be launched when needed &gt; requires manual human intervention<br><br>Cetainly will not help with requirement for the least amount of downtime.</li><li>What are you talking about configuring ? Yes you have to configure everything at some point<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1316325,
          "date": "Fri 22 Nov 2024 14:27",
          "username": "JA2018",
          "content": "to be launched when needed > requires manual human intervention<br><br>Cetainly will not help with requirement for the least amount of downtime.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 966690,
          "date": "Sun 30 Jul 2023 00:59",
          "username": "Kp88",
          "content": "What are you talking about configuring ? Yes you have to configure everything at some point<br>https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 933325,
          "date": "Sun 25 Jun 2023 08:51",
          "username": "smartegnine",
          "content": "Did not see Route 53 in this question right? So my opinion is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1110519,
          "date": "Sun 31 Dec 2023 13:15",
          "username": "pentium75",
          "content": "They are not asking for automatic failover, they want to \\\"ensure the application can (!) be made available in another AWS Region with minimal downtime\\\". This works with C; they would just execute the template and it would be available in short time.<br><br>A would create a DR environment that IS already available, which is not what the question asks for.<br>D is like A, just abusing Lambda to update the DNS record (which doesn't make sense).<br>B would create a separate, empty database",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1258181,
          "date": "Tue 30 Jul 2024 13:43",
          "username": "[Removed]",
          "content": "ChatGPT:Option C involves creating an AWS CloudFormation template to create EC2 instances and a load balancer only when needed, and configuring the DynamoDB table as a global table. This approach might introduce more downtime because the infrastructure in the disaster recovery region is not pre-deployed and ready to take over immediately. The process of launching instances and configuring the load balancer can take some time, leading to delays during the failover.<br><br>Option A, on the other hand, ensures that the necessary infrastructure (Auto Scaling group, load balancer, and DynamoDB global table) is already set up and running in the disaster recovery region. This pre-deployment reduces downtime since the failover can be handled quickly by updating DNS to point to the disaster recovery region's load balancer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1122393,
          "date": "Sun 14 Jan 2024 09:42",
          "username": "anikolov",
          "content": "With the LEAST amount of downtimeA<br>Cost effectiveC , but risky some of EC2 types/capacity not available in Region at the time, when need to switch to DR",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1115850,
          "date": "Sun 07 Jan 2024 14:10",
          "username": "awsgeek75",
          "content": "There are 2 parts. DB and application. Dynamo DB recovery in another region is not possible without global table so option B is out.<br>A will make the infra available in 2 regions which is not required. The question is about DR, not scaling.<br>D Use Lambda to modify R53 to point to new region. This is going to cause delays but is possible and it will also be running a scaled EC2 instances in passive region.<br>C Make a CF template which can launch the infra when needed. DB is global table so it will be available.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option C relies on launching EC2 instances and load balancers only when needed, which may increase downtime. On contrary, I think A is better because it ensures resources are pre-configured and ready-to-go.<br><br>It's true nobody mentioned anything about infra availability in 2 regions... but it couldn't hurt since we simply need the least amount of downtime.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1321313,
          "date": "Tue 03 Dec 2024 10:31",
          "username": "LeonSauveterre",
          "content": "Option C relies on launching EC2 instances and load balancers only when needed, which may increase downtime. On contrary, I think A is better because it ensures resources are pre-configured and ready-to-go.<br><br>It's true nobody mentioned anything about infra availability in 2 regions... but it couldn't hurt since we simply need the least amount of downtime.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1084358,
          "date": "Thu 30 Nov 2023 13:49",
          "username": "meowruki",
          "content": "AWS CloudFormation Template: Use CloudFormation to define the infrastructure components (EC2 instances, load balancer, etc.) in a template. This allows for consistent and repeatable infrastructure deployment.<br><br>EC2 Instances and Load Balancer: Launch the EC2 instances and load balancer in the disaster recovery (DR) Region using the CloudFormation template. This enables the deployment of the application in the DR Region when needed.<br><br>DynamoDB Global Table: Configure the DynamoDB table as a global table. DynamoDB Global Tables provide automatic multi-region, multi-master replication, ensuring that the data is available in both the primary and DR Regions.<br><br>DNS Failover: Configure DNS failover to point to the new DR Region's load balancer. This allows for seamless failover of traffic to the DR Region when needed.<br><br>Option A is close, but it introduces an Auto Scaling group in the disaster recovery Region, which might introduce unnecessary complexity and potential scaling delays. Option D introduces a Lambda function triggered by CloudWatch alarms, which might add latency and complexity compared to the more direct approach in Option C.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1072953,
          "date": "Fri 17 Nov 2023 02:38",
          "username": "bogobob",
          "content": "Assuming theyre using Route53 as a DNS then A https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1068579,
          "date": "Sun 12 Nov 2023 15:25",
          "username": "EEK2k",
          "content": "Only B and C take care of EC2 instants.But since B does not take care of Data in the Dynamo DB, C is the only correct Answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1063164,
          "date": "Sun 05 Nov 2023 19:06",
          "username": "potomac",
          "content": "Route 53 haves a feature DNS failover when instances down",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1048867,
          "date": "Fri 20 Oct 2023 16:22",
          "username": "thanhnv142",
          "content": "C is the best choice here",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1048202,
          "date": "Thu 19 Oct 2023 21:00",
          "username": "Wayne23Fang",
          "content": "I think CloudFormation is easier than manual provision ofAuto Scaling group and load balancer in DR region.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 990173,
          "date": "Fri 25 Aug 2023 17:24",
          "username": "Guru4Cloud",
          "content": "Creating Auto Scaling group and load balancer in DR region allows fast launch of capacity when needed.<br>Configuring DynamoDB as a global table provides continuous data replication.<br>Using DNS failover via Route 53 to point to the DR region's load balancer enables rapid traffic shifting.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 926776,
          "date": "Sun 18 Jun 2023 17:39",
          "username": "Wablo",
          "content": "Both Option A and Option D include the necessary steps of setting up an Auto Scaling group and load balancer in the disaster recovery Region, configuring the DynamoDB table as a global table, and updating DNS records. However, Option D provides a more detailed approach by explicitly mentioning the use of an Amazon CloudWatch alarm and AWS Lambda function to automate the DNS update process.<br><br>By leveraging an Amazon CloudWatch alarm, Option D allows for an automated failover mechanism. When triggered, the CloudWatch alarm can execute an AWS Lambda function, which in turn can update the DNS records in Amazon Route 53 to redirect traffic to the disaster recovery load balancer in the new Region. This automation helps reduce the potential for human error and further minimizes downtime.<br>Answer is D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Failover policy takes care of DNS record update so no need for cloud watch/lambda</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 966687,
          "date": "Sun 30 Jul 2023 00:56",
          "username": "Kp88",
          "content": "Failover policy takes care of DNS record update so no need for cloud watch/lambda",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 921934,
          "date": "Tue 13 Jun 2023 06:43",
          "username": "TariqKipkemei",
          "content": "The company wants to ensure the application 'CAN' be made available in another AWS Region with minimal downtime. Meaning they want to be able to launch infra on need basis.<br>Best answer is C.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>minimal downtme not minimal effort!D</li><li>B, C are not OK because \\\"launching resources when needed\\\", which will increase the time to recover \\\"DR\\\"</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 926777,
          "date": "Sun 18 Jun 2023 17:41",
          "username": "Wablo",
          "content": "minimal downtme not minimal effort!D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 931359,
          "date": "Fri 23 Jun 2023 10:18",
          "username": "dajform",
          "content": "B, C are not OK because \\\"launching resources when needed\\\", which will increase the time to recover \\\"DR\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 913222,
          "date": "Sat 03 Jun 2023 05:27",
          "username": "AshishRocks",
          "content": "I feel it is A<br>Configure DNS failover: Use DNS failover to point the application's DNS record to the load balancer in the disaster recovery Region. DNS failover allows you to route traffic to the disaster recovery Region in case of a failure in the primary Region.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Once you configure manually the DNS , its no more automated like Lambda does.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 926778,
          "date": "Sun 18 Jun 2023 17:42",
          "username": "Wablo",
          "content": "Once you configure manually the DNS , its no more automated like Lambda does.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 902614,
          "date": "Sat 20 May 2023 16:04",
          "username": "Yadav_Sanjay",
          "content": "C suits best",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 902292,
          "date": "Sat 20 May 2023 02:41",
          "username": "hiroohiroo",
          "content": "A=E3=81=8CDNS =E3=83=95=E3=82=A7=E3=82=A4=E3=83=AB=E3=82=AA=E3=83=BC=E3=83=90=E3=83=BC",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#435",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to migrate a MySQL database from its on-premises data center to AWS within 2 weeks. The database is 20 TB in size. The company wants to complete the migration with minimal downtime.<br><br>Which solution will migrate the database MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#435",
          "answers": [
            {
              "choice": "<p>Order an AWS Snowball Edge Storage Optimized device. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with replication of ongoing changes. Send the Snowball Edge device to AWS to finish the migration and continue the ongoing replication.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Order an AWS Snowmobile vehicle. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with ongoing changes. Send the Snowmobile vehicle back to AWS to finish the migration and continue the ongoing replication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Order an AWS Snowball Edge Compute Optimized with GPU device. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with ongoing changes. Send the Snowball device to AWS to finish the migration and continue the ongoing replication<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Order a 1 GB dedicated AWS Direct Connect connection to establish a connection with the data center. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with replication of ongoing changes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 435 discussion",
      "discusstion": [
        {
          "id": 899118,
          "date": "Thu 16 Nov 2023 14:35",
          "username": "nosense",
          "content": "A) 300 first 10 days. 150 shipping<br>D) 750 for 2 weeks<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thanks, i was checking the speed more than price. Thanks for the clarification</li></ul>",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 899663,
          "date": "Fri 17 Nov 2023 05:39",
          "username": "Efren",
          "content": "Thanks, i was checking the speed more than price. Thanks for the clarification",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1073751,
          "date": "Sat 18 May 2024 01:26",
          "username": "Goutham4981",
          "content": "Direct Connect takes at least 1 month to setup - D is invalid<br>AWS Snowmobile is used for transferring large amounts of data (petabytes) from remote locations where establishing a connection to the cloud is impossible - B is invalid<br>AWS Snowball Edge Compute Optimized provides higher vCPU performance and lower storage as compared to Snowball storage optimized. As our need is solely data transfer, high vCPU performance is not required but high storage is - C is invalid",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1200186,
          "date": "Tue 22 Oct 2024 14:39",
          "username": "zinabu",
          "content": "But I didn't understand why we are using a schema conversion tool, because AWS have already a managed service enginefor MySQL Db, (RDS for MySQL or Aurora for my SQL is on the table )",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1068586,
          "date": "Sun 12 May 2024 14:38",
          "username": "EEK2k",
          "content": "To calculate the time it would take to transfer 20TB of data over a 1 GB dedicated AWS Direct Connect, we can use the formula:<br><br>timedata size / data transfer rate<br><br>Here, the data size is 20TB, which is equivalent to 20,000 GB or 20,000,000 MB. The data transfer rate is 1 GB/s.<br><br>Converting the data size to MB, we get:<br><br>20,000,000 MB / 1 GB/s20,000 seconds<br><br>Therefore, it would take approximately 20,000 seconds or 5.56 hours to transfer 20TB of data over a 1 GB dedicated AWS Direct Connect.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It takes more way more than 2 weeks to setup Direct Connect. Therefore, D is not valid since we have to do the transfer within 2 weeks.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1091118,
          "date": "Sat 08 Jun 2024 13:49",
          "username": "Murtadhaceit",
          "content": "It takes more way more than 2 weeks to setup Direct Connect. Therefore, D is not valid since we have to do the transfer within 2 weeks.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1063165,
          "date": "Sun 05 May 2024 18:09",
          "username": "potomac",
          "content": "C is wrong, GPU is not needed",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1024872,
          "date": "Thu 04 Apr 2024 16:07",
          "username": "Ramdi1",
          "content": "Has to be A. the option for D would only work if they said they have like 6 Months plus. It would take too long to set up.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 990166,
          "date": "Sun 25 Feb 2024 17:53",
          "username": "Guru4Cloud",
          "content": "I agreed with A.<br>Why not D.?<br>When you initiate the process by requesting an AWS Direct Connect connection, it typically starts with the AWS Direct Connect provider. This provider may need to coordinate with AWS to allocate the necessary resources. This initial setup phase can take anywhere from a few days to a couple of weeks.<br>Couple of weeks? No Good<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>When you create a Snowball job in the AWS console, it will estimate the delivery date based on your location. Being near a facility shows 1-2 day estimated delivery.<br>For extremely urgent requests, you can contact AWS Support and inquire about expedited Snowball delivery. If inventory is available, they may be able to ship same day or next day.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 990167,
          "date": "Sun 25 Feb 2024 17:59",
          "username": "Guru4Cloud",
          "content": "When you create a Snowball job in the AWS console, it will estimate the delivery date based on your location. Being near a facility shows 1-2 day estimated delivery.<br>For extremely urgent requests, you can contact AWS Support and inquire about expedited Snowball delivery. If inventory is available, they may be able to ship same day or next day.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 958500,
          "date": "Sun 21 Jan 2024 15:58",
          "username": "james2033",
          "content": "Keyword \\\"20 TB\\\", choose \\\"AWS Snowball\\\", there are A or C. C has word \\\"GPU\\\" what is not related, therefore choose A.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 947565,
          "date": "Wed 10 Jan 2024 00:35",
          "username": "Zox42",
          "content": "Answer A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 931313,
          "date": "Sat 23 Dec 2023 10:30",
          "username": "MrAWSAssociate",
          "content": "D is correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, takes months, not weeks</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1110521,
          "date": "Sun 30 Jun 2024 12:17",
          "username": "pentium75",
          "content": "No, takes months, not weeks",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 915047,
          "date": "Tue 05 Dec 2023 06:48",
          "username": "DrWatson",
          "content": "https://docs.aws.amazon.com/dms/latest/userguide/CHAP_LargeDBs.Process.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 907938,
          "date": "Mon 27 Nov 2023 14:34",
          "username": "RoroJ",
          "content": "D Direct Connection will need a long time to setup plus need to deal with Network and Security changes with existing environment. Ad then plus the Data trans time... No way can be done in 2 weeks.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 905163,
          "date": "Thu 23 Nov 2023 22:05",
          "username": "Joselucho38",
          "content": "Overall, option D combines the reliability and cost-effectiveness of AWS Direct Connect, AWS DMS, and AWS SCT to migrate the database efficiently and minimize downtime.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 904445,
          "date": "Thu 23 Nov 2023 03:38",
          "username": "Abhineet9148232",
          "content": "D -Direct Connect takes atleast a month to setup! Requirement is for within 2 weeks.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 902445,
          "date": "Mon 20 Nov 2023 11:23",
          "username": "Rob1L",
          "content": "AWS Snowball Edge Storage Optimized device is used for large-scale data transfers, but the lead time for delivery, data transfer, and return shipping would likely exceed the 2-week time frame. Also, ongoing database changes wouldn't be replicated while the device is in transit.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Change to A because \\\"Most cost effective\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 903720,
          "date": "Wed 22 Nov 2023 08:08",
          "username": "Rob1L",
          "content": "Change to A because \\\"Most cost effective\\\"",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 902289,
          "date": "Mon 20 Nov 2023 03:36",
          "username": "hiroohiroo",
          "content": "https://docs.aws.amazon.com/ja_jp/snowball/latest/developer-guide/device-differences.html#device-options<br>A=E3=81=A7=E3=81=99=E3=80=82",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 900068,
          "date": "Fri 17 Nov 2023 14:43",
          "username": "norris81",
          "content": "How long does direct connect take to provision ?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>At least one month and expensive.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 904191,
          "date": "Wed 22 Nov 2023 19:00",
          "username": "examtopictempacc",
          "content": "At least one month and expensive.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#436",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company moved its on-premises PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. The company successfully launched a new product. The workload on the database has increased. The company wants to accommodate the larger workload without adding infrastructure.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#436",
          "answers": [
            {
              "choice": "<p>Buy reserved DB instances for the total workload. Make the Amazon RDS for PostgreSQL DB instance larger.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Make the Amazon RDS for PostgreSQL DB instance a Multi-AZ DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Buy reserved DB instances for the total workload. Add another Amazon RDS for PostgreSQL DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Make the Amazon RDS for PostgreSQL DB instance an on-demand DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 436 discussion",
      "discusstion": [
        {
          "id": 909527,
          "date": "Mon 29 May 2023 18:02",
          "username": "elmogy",
          "content": "A.<br>\\\"without adding infrastructure\\\" means scaling vertically and choosing larger instance.<br>\\\"MOST cost-effectively\\\" reservedinstances<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"MOST cost-effectively\\\" doesn't mean reserved instances. Only in this case it is but not in general.</li></ul>",
          "upvote_count": "16",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1051565,
          "date": "Mon 23 Oct 2023 09:55",
          "username": "wsdasdasdqwdaw",
          "content": "\\\"MOST cost-effectively\\\" doesn't mean reserved instances. Only in this case it is but not in general.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1342804,
          "date": "Sun 19 Jan 2025 00:56",
          "username": "zdi561",
          "content": "without adding infrastructure means without adding more capacity per instance,multi-az adding read replicas solve the problem.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1115859,
          "date": "Sun 07 Jan 2024 14:25",
          "username": "awsgeek75",
          "content": "accommodate the larger workload without adding infrastructure.Reserved DB instance<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>+ make the instance larger so most cost effective is to reserve a large instance suitable for workload which is A</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1115861,
          "date": "Sun 07 Jan 2024 14:27",
          "username": "awsgeek75",
          "content": "+ make the instance larger so most cost effective is to reserve a large instance suitable for workload which is A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1110572,
          "date": "Sun 31 Dec 2023 14:15",
          "username": "pentium75",
          "content": "B - Multi-AZ is for HA, does not help 'accommodating the larger workload'<br>C - Adding \\\"another instance\\\" will not help, we can't split the workload between two instances<br>D - On-demand instance is a good choice for unknown workload, but here we know the workload, it's just higher than before",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1073758,
          "date": "Sat 18 Nov 2023 02:42",
          "username": "Goutham4981",
          "content": "Cannot add more infrastructure - C is invalid<br>Multi AZ DB instance is for high availability and failure mitigation, does not increase performance, higher workload support - B is invalid<br>On demand instances are costlier than Reserved instances - D is invalid",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1072961,
          "date": "Fri 17 Nov 2023 02:47",
          "username": "bogobob",
          "content": "Not A : \\\"launched a new product\\\", reserved instances are for known workloads, a new product doesn't have known workload.<br>Not B : \\\"accommodate the larger workload\\\", while Multi-AZ can help with larger workloads, they are more for higher availability.<br>Not C : \\\"without adding infrastructure\\\", adding a PostGresQL instance is new infrastructure.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Please refer to following Keys in Stem:<br><br>1. The company successfully launched a new product.<br><br>2. The workload on the database has increased.<br><br>3. The company wants to accommodate the larger workload without adding infrastructure.</li><li>Question says nothing about unknown load. New product -&gt; more total products -&gt; load has increased.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1316327,
          "date": "Fri 22 Nov 2024 14:38",
          "username": "JA2018",
          "content": "Please refer to following Keys in Stem:<br><br>1. The company successfully launched a new product.<br><br>2. The workload on the database has increased.<br><br>3. The company wants to accommodate the larger workload without adding infrastructure.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1110568,
          "date": "Sun 31 Dec 2023 14:12",
          "username": "pentium75",
          "content": "Question says nothing about unknown load. New product -> more total products -> load has increased.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 990081,
          "date": "Fri 25 Aug 2023 15:00",
          "username": "Guru4Cloud",
          "content": "B is the best approach in this scenario overall:<br><br>Making the RDS PostgreSQL instance Multi-AZ adds a standby replica to handle larger workloads and provides high availability.<br>Even though it adds infrastructure, the cost is less than doubling the infrastructure with a separate DB instance.<br>It provides better performance, availability, and disaster recovery than a single larger instance.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agreed the answer is B<br>Multi-AZ deployments are cost-effective because they leverage the standby instance without incurring additional charges. You only pay for the primary instance's regular usage costs.</li><li>Multi-AZ is for HA, does not add performance. Meaning, will not help 'accommodating the larger workload'.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1022378,
          "date": "Sun 01 Oct 2023 16:53",
          "username": "BillyBlunts",
          "content": "Agreed the answer is B<br>Multi-AZ deployments are cost-effective because they leverage the standby instance without incurring additional charges. You only pay for the primary instance's regular usage costs.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1110570,
          "date": "Sun 31 Dec 2023 14:12",
          "username": "pentium75",
          "content": "Multi-AZ is for HA, does not add performance. Meaning, will not help 'accommodating the larger workload'.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 958539,
          "date": "Fri 21 Jul 2023 15:24",
          "username": "james2033",
          "content": "Buy larger instance.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 954955,
          "date": "Tue 18 Jul 2023 06:54",
          "username": "james2033",
          "content": "Keyword \\\"Amazon RDS for PostgreSQL instance large\\\" . See list of size of instance at https://aws.amazon.com/rds/instance-types/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 904206,
          "date": "Mon 22 May 2023 18:23",
          "username": "examtopictempacc",
          "content": "A.<br>Not C: without adding infrastructure",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 902606,
          "date": "Sat 20 May 2023 15:58",
          "username": "EA100",
          "content": "Answer - C<br>Option B, making the Amazon RDS for PostgreSQL DB instance a Multi-AZ DB instance, would provide high availability and fault tolerance but may not directly address the need for increased capacity to handle the larger workload.<br><br>Therefore, the recommended solution is Option C: Buy reserved DB instances for the workload and add another Amazon RDS for PostgreSQL DB instance to accommodate the increased workload in a cost-effective manner.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 901125,
          "date": "Thu 18 May 2023 13:24",
          "username": "cloudenthusiast",
          "content": "C<br> Option C: buying reserved DB instances for the total workload and adding another Amazon RDS for PostgreSQL DB instance seems to be the most appropriate choice. It allows for workload distribution across multiple instances, providing scalability and potential performance improvements. Additionally, reserved instances can provide cost savings in the long term.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 899119,
          "date": "Tue 16 May 2023 13:36",
          "username": "nosense",
          "content": "A for me, because without adding additional infrastructure",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 898206,
          "date": "Mon 15 May 2023 13:14",
          "username": "th3k33n",
          "content": "Should be C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That would add more infraestructure. A would increase the size, keeping the number of instances, i think</li><li>Option A involves making the existing Amazon RDS for PostgreSQL DB instance larger. While this can improve performance, it may not be sufficient to handle a significantly increased workload. It also doesn't distribute the workload or provide scalability.</li><li>The main not HA, cost-effectively and without adding infrastructure</li><li>A is the best</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 899006,
          "date": "Tue 16 May 2023 10:44",
          "username": "Efren",
          "content": "That would add more infraestructure. A would increase the size, keeping the number of instances, i think<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A involves making the existing Amazon RDS for PostgreSQL DB instance larger. While this can improve performance, it may not be sufficient to handle a significantly increased workload. It also doesn't distribute the workload or provide scalability.</li><li>The main not HA, cost-effectively and without adding infrastructure</li><li>A is the best</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901126,
          "date": "Thu 18 May 2023 13:25",
          "username": "cloudenthusiast",
          "content": "Option A involves making the existing Amazon RDS for PostgreSQL DB instance larger. While this can improve performance, it may not be sufficient to handle a significantly increased workload. It also doesn't distribute the workload or provide scalability.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The main not HA, cost-effectively and without adding infrastructure</li><li>A is the best</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 901866,
          "date": "Fri 19 May 2023 13:18",
          "username": "nosense",
          "content": "The main not HA, cost-effectively and without adding infrastructure<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A is the best</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 909709,
          "date": "Mon 29 May 2023 22:41",
          "username": "omoakin",
          "content": "A is the best",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#437",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company operates an ecommerce website on Amazon EC2 instances behind an Application Load Balancer (ALB) in an Auto Scaling group. The site is experiencing performance issues related to a high request rate from illegitimate external systems with changing IP addresses. The security team is worried about potential DDoS attacks against the website. The company must block the illegitimate incoming requests in a way that has a minimal impact on legitimate users.<br><br>What should a solutions architect recommend?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#437",
          "answers": [
            {
              "choice": "<p>Deploy Amazon Inspector and associate it with the ALB.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy AWS WAF, associate it with the ALB, and configure a rate-limiting rule.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy rules to the network ACLs associated with the ALB to block the incomingtraffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon GuardDuty and enable rate-limiting protection when configuring GuardDuty.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 437 discussion",
      "discusstion": [
        {
          "id": 928333,
          "date": "Wed 20 Dec 2023 13:08",
          "username": "samehpalass",
          "content": "As no shield protect here so WAF rate limit<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Where's your Shield Advanced now, in your hour of need he has abandoned you</li></ul>",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1028241,
          "date": "Mon 08 Apr 2024 21:09",
          "username": "hydro143",
          "content": "Where's your Shield Advanced now, in your hour of need he has abandoned you",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 1110577,
          "date": "Sun 30 Jun 2024 13:19",
          "username": "pentium75",
          "content": "Best solution Shield Advanced, not listed here, thus second-best solution, WAF with rate limiting",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1115866,
          "date": "Sun 07 Jul 2024 13:31",
          "username": "awsgeek75",
          "content": "A. Amazon InspectorSoftware vulnerabilities like OS patches etc. Not fit for purpose.<br>C. Changing IP from DDoS so don't know the incoming traffic for configuration (even if it was possible)<br>D. GardDuty is for workload and AWS account monitoring so it can't help with DDoS.<br><br>B is correct as AWS WAF + ALB can configure rate limiting even if source IP changes.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1107685,
          "date": "Fri 28 Jun 2024 10:59",
          "username": "jAtlas7",
          "content": "according to some google searches... to protect against DDOS attack:<br>* AWS WAF(Web Application Firewall) provides protection on the application layer (I think Application Load Balancer belongs to this level)<br>* AWS Shield protects the infrastructure layers of the OSI mode(I think AWS Network Load Balancer belongs to this level)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 990063,
          "date": "Sun 25 Feb 2024 15:35",
          "username": "Guru4Cloud",
          "content": "This case is A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Inspector wouldn't help in this case as it's used to detect vulnerabilities.</li><li>Inspector is for detecting vulnerabilities, has nothing to do with the requirement.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1343026,
          "date": "Sun 19 Jan 2025 15:12",
          "username": "vincent2023",
          "content": "Inspector wouldn't help in this case as it's used to detect vulnerabilities.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1110574,
          "date": "Sun 30 Jun 2024 13:18",
          "username": "pentium75",
          "content": "Inspector is for detecting vulnerabilities, has nothing to do with the requirement.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 958553,
          "date": "Sun 21 Jan 2024 16:32",
          "username": "james2033",
          "content": "AWS Web Application Firewall (WAF) + ALB (Application Load Balancer) See image at https://aws.amazon.com/waf/ . https://docs.aws.amazon.com/waf/latest/developerguide/ddos-responding.html .<br><br>Question keyword \\\"high request rate\\\", answer keyword \\\"rate-limiting rule\\\" https://docs.aws.amazon.com/waf/latest/developerguide/waf-rate-based-example-limit-login-page-keys.html<br><br>Amazon GuardDuty for theat detection https://aws.amazon.com/guardduty/ , not for DDoS.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 922723,
          "date": "Thu 14 Dec 2023 06:34",
          "username": "TariqKipkemei",
          "content": "B in swahili 'ba' :)<br>external systems, incoming requestsAWS WAF",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 922665,
          "date": "Thu 14 Dec 2023 04:50",
          "username": "Axeashes",
          "content": "layer 7 DDoS protection with WAF<br>https://docs.aws.amazon.com/waf/latest/developerguide/ddos-get-started-web-acl-rbr.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 915158,
          "date": "Tue 05 Dec 2023 10:20",
          "username": "antropaws",
          "content": "B no doubt.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 905168,
          "date": "Thu 23 Nov 2023 22:09",
          "username": "Joselucho38",
          "content": "AWS WAF (Web Application Firewall) is a service that provides protection for web applications against common web exploits. By associating AWS WAF with the Application Load Balancer (ALB), you can inspect incoming traffic and define rules to allow or block requests based on various criteria.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 901129,
          "date": "Sat 18 Nov 2023 14:28",
          "username": "cloudenthusiast",
          "content": "B<br>AWS Web Application Firewall (WAF) is a service that helps protect web applications from common web exploits and provides advanced security features. By deploying AWS WAF and associating it with the ALB, the company can set up rules to filter and block incoming requests based on specific criteria, such as IP addresses.<br><br>In this scenario, the company is facing performance issues due to a high request rate from illegitimate external systems with changing IP addresses. By configuring a rate-limiting rule in AWS WAF, the company can restrict the number of requests coming from each IP address, preventing excessive traffic from overwhelming the website. This will help mitigate the impact of potential DDoS attacks and ensure that legitimate users can access the site without interruption.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 899678,
          "date": "Fri 17 Nov 2023 05:44",
          "username": "Efren",
          "content": "If not AWS Shield, then WAF",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 899130,
          "date": "Thu 16 Nov 2023 14:44",
          "username": "nosense",
          "content": "B obv for this<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>My mind slipped with AWS Shield. GuardDuty can be working along with WAF for DDOS attack, but ultimately would be WAF<br><br>https://aws.amazon.com/blogs/security/how-to-use-amazon-guardduty-and-aws-web-application-firewall-to-automatically-block-suspicious-hosts/</li><li>Same here, I was looking for AWS Shield</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 899677,
          "date": "Fri 17 Nov 2023 05:43",
          "username": "Efren",
          "content": "My mind slipped with AWS Shield. GuardDuty can be working along with WAF for DDOS attack, but ultimately would be WAF<br><br>https://aws.amazon.com/blogs/security/how-to-use-amazon-guardduty-and-aws-web-application-firewall-to-automatically-block-suspicious-hosts/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Same here, I was looking for AWS Shield</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 949492,
          "date": "Fri 12 Jan 2024 08:17",
          "username": "Mia2009687",
          "content": "Same here, I was looking for AWS Shield",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 899007,
          "date": "Thu 16 Nov 2023 11:45",
          "username": "Efren",
          "content": "D, Guard Duty for me<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Guard Duty detects threats, has nothing to do with rate-limiting.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1110576,
          "date": "Sun 30 Jun 2024 13:19",
          "username": "pentium75",
          "content": "Guard Duty detects threats, has nothing to do with rate-limiting.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#438",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to share accounting data with an external auditor. The data is stored in an Amazon RDS DB instance that resides in a private subnet. The auditor has its own AWS account and requires its own copy of the database.<br><br>What is the MOST secure way for the company to share the database with the auditor?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#438",
          "answers": [
            {
              "choice": "<p>Create a read replica of the database. Configure IAM standard database authentication to grant the auditor access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Export the database contents to text files. Store the files in an Amazon S3 bucket. Create a new IAM user for the auditor. Grant the user access to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Copy a snapshot of the database to an Amazon S3 bucket. Create an IAM user. Share the user's keys with the auditor to grant access to the object in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an encrypted snapshot of the database. Share the snapshot with the auditor. Allow access to the AWS Key Management Service (AWS KMS) encryption key.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 438 discussion",
      "discusstion": [
        {
          "id": 914732,
          "date": "Sun 04 Jun 2023 16:22",
          "username": "alexandercamachop",
          "content": "The most secure way for the company to share the database with the auditor is option D: Create an encrypted snapshot of the database, share the snapshot with the auditor, and allow access to the AWS Key Management Service (AWS KMS) encryption key.<br><br>By creating an encrypted snapshot, the company ensures that the database data is protected at rest. Sharing the encrypted snapshot with the auditor allows them to have their own copy of the database securely.<br><br>In addition, granting access to the AWS KMS encryption key ensures that the auditor has the necessary permissions to decrypt and access the encrypted snapshot. This allows the auditor to restore the snapshot and access the data securely.<br><br>This approach provides both data protection and access control, ensuring that the database is securely shared with the auditor while maintaining the confidentiality and integrity of the data.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>best explanation ever</li></ul>",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 922724,
          "date": "Wed 14 Jun 2023 05:37",
          "username": "TariqKipkemei",
          "content": "best explanation ever",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 990055,
          "date": "Fri 25 Aug 2023 14:27",
          "username": "Guru4Cloud",
          "content": "Key word: \\\"Secure way\\\"<br>The snapshot contents are encrypted using KMS keys for data security.<br>Sharing the snapshot directly removes risks of extracting/transferring data.<br>The auditor can restore the snapshot into their own RDS instance.<br>Access is controlled through sharing the encrypted snapshot and KMS key.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1233534,
          "date": "Thu 20 Jun 2024 10:37",
          "username": "24b2e9e",
          "content": "why not A ?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I think it's simply because it introduces more risks than sharing just a snapshot. External entities don't need that many privileges, so it's not the MOST secure way</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1321322,
          "date": "Tue 03 Dec 2024 10:46",
          "username": "LeonSauveterre",
          "content": "I think it's simply because it introduces more risks than sharing just a snapshot. External entities don't need that many privileges, so it's not the MOST secure way",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1231216,
          "date": "Sun 16 Jun 2024 07:46",
          "username": "KennethNg923",
          "content": "Encrypted snapshot must be most secure compare others",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1115881,
          "date": "Sun 07 Jan 2024 14:52",
          "username": "awsgeek75",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ShareSnapshot.html<br><br>With AWS RDS, you can share snapshots across accounts so no need to go through S3 or replication. Option D allows more secure way by using encryption and sharing encryption key.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1063169,
          "date": "Sun 05 Nov 2023 19:16",
          "username": "potomac",
          "content": "MOST secure way",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 915163,
          "date": "Mon 05 Jun 2023 09:22",
          "username": "antropaws",
          "content": "Most likely D.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 901183,
          "date": "Thu 18 May 2023 14:05",
          "username": "cloudenthusiast",
          "content": "Option D (Creating an encrypted snapshot of the database, sharing the snapshot, and allowing access to the AWS Key Management Service encryption key) is generally considered a better option for sharing the database with the auditor in terms of security and control.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 899146,
          "date": "Tue 16 May 2023 13:51",
          "username": "nosense",
          "content": "D for me",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#439",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect configured a VPC that has a small range of IP addresses. The number of Amazon EC2 instances that are in the VPC is increasing, and there is an insufficient number of IP addresses for future workloads.<br><br>Which solution resolves this issue with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#439",
          "answers": [
            {
              "choice": "<p>Add an additional IPv4 CIDR block to increase the number of IP addresses and create additional subnets in the VPC. Create new resources in the new subnets by using the new CIDR.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a second VPC with additional subnets. Use a peering connection to connect the second VPC with the first VPC Update the routes and create new resources in the subnets of the second VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Transit Gateway to add a transit gateway and connect a second VPC with the first VPUpdate the routes of the transit gateway and VPCs. Create new resources in the subnets of the second VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a second VPC. Create a Site-to-Site VPN connection between the first VPC and the second VPC by using a VPN-hosted solution on Amazon EC2 and a virtual private gateway. Update the route between VPCs to the traffic through the VPN. Create new resources in the subnets of the second VPC.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 439 discussion",
      "discusstion": [
        {
          "id": 915171,
          "date": "Mon 05 Jun 2023 09:27",
          "username": "antropaws",
          "content": "A is correct: You assign a single CIDR IP address range as the primary CIDR block when you create a VPC and can add up to four secondary CIDR blocks after creation of the VPC.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 990046,
          "date": "Fri 25 Aug 2023 14:15",
          "username": "Guru4Cloud",
          "content": "the architect just needs to:<br><br>Add the CIDR using the AWS console or CLI<br>Create new subnets in the VPC using the new CIDR<br>Launch resources in the new subnets",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1322920,
          "date": "Fri 06 Dec 2024 22:17",
          "username": "rosanna",
          "content": "The CIDR block of a VPC can NOT be changed but can be extended.<br>Thus, for the LEAST operational overhead; extend the existing one.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1119374,
          "date": "Thu 11 Jan 2024 06:16",
          "username": "f2e2419",
          "content": "best option",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1115883,
          "date": "Sun 07 Jan 2024 14:55",
          "username": "awsgeek75",
          "content": "A: LEAST operational overhead is by creating a new CIDR block in existing VPC.<br>All other options require additional overhead of gateway or second VPC",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1063171,
          "date": "Sun 05 Nov 2023 19:19",
          "username": "potomac",
          "content": "After you've created your VPC, you can associate additional IPv4 CIDR blocks with the VPC",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 922727,
          "date": "Wed 14 Jun 2023 05:41",
          "username": "TariqKipkemei",
          "content": "A is best",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 902623,
          "date": "Sat 20 May 2023 16:20",
          "username": "Yadav_Sanjay",
          "content": "Add additional CIDR of bigger range",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 899688,
          "date": "Wed 17 May 2023 04:49",
          "username": "Efren",
          "content": "Add new bigger subnets",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 899148,
          "date": "Tue 16 May 2023 13:52",
          "username": "nosense",
          "content": "A valid",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#440",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company used an Amazon RDS for MySQL DB instance during application testing. Before terminating the DB instance at the end of the test cycle, a solutions architect created two backups. The solutions architect created the first backup by using the mysqldump utility to create a database dump. The solutions architect created the second backup by enabling the final DB snapshot option on RDS termination.<br><br>The company is now planning for a new test cycle and wants to create a new DB instance from the most recent backup. The company has chosen a MySQL-compatible edition ofAmazon Aurora to host the DB instance.<br><br>Which solutions will create the new DB instance? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#440",
          "answers": [
            {
              "choice": "<p>Import the RDS snapshot directly into Aurora.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Upload the RDS snapshot to Amazon S3. Then import the RDS snapshot into Aurora.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Upload the database dump to Amazon S3. Then import the database dump into Aurora.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Database Migration Service (AWS DMS) to import the RDS snapshot into Aurora.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Upload the database dump to Amazon S3. Then use AWS Database Migration Service (AWS DMS) to import the database dump into Aurora.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 440 discussion",
      "discusstion": [
        {
          "id": 900505,
          "date": "Wed 17 May 2023 22:56",
          "username": "Axaus",
          "content": "A,C<br>A because the snapshot is already stored in AWS.<br>C because you dont need a migration tool going from MySQL to MySQL. You would use the MySQL utility.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 907862,
          "date": "Sat 27 May 2023 11:03",
          "username": "oras2023",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.RDSMySQL.Import.html",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1281412,
          "date": "Tue 10 Sep 2024 09:22",
          "username": "rpmaws",
          "content": "AWS DMS does not support migrating data directly from an RDS snapshot. DMS can migrate data from a live RDS instance or from a database dump, but not from a snapshot. <br>Also dump can be migrated to aurora using sql client.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Correct.<br>Homogeneous migration in AWS Database Migration Service (DMS) refers to migrating databases between the same type of database engine. Here's an example:<br><br>Example:<br>Source Database: Amazon RDS for MySQL<br>Target Database: Amazon Aurora MySQL</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 1298502,
          "date": "Wed 16 Oct 2024 03:44",
          "username": "Mayur_B",
          "content": "Correct.<br>Homogeneous migration in AWS Database Migration Service (DMS) refers to migrating databases between the same type of database engine. Here's an example:<br><br>Example:<br>Source Database: Amazon RDS for MySQL<br>Target Database: Amazon Aurora MySQL",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1190550,
          "date": "Sat 06 Apr 2024 20:02",
          "username": "JackyCCK",
          "content": "If you can use option A - \\\"Import the RDS snapshot directly into Aurora\\\", why go S3 in option C ?<br>Non sense, A and C cannot co-exist",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1110583,
          "date": "Sun 31 Dec 2023 14:26",
          "username": "pentium75",
          "content": "A per https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.RDSMySQL.Snapshot.html<br><br>C per https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1093770,
          "date": "Mon 11 Dec 2023 20:12",
          "username": "aws94",
          "content": "A and B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 1084376,
          "date": "Thu 30 Nov 2023 14:07",
          "username": "meowruki",
          "content": "Similar : https://repost.aws/knowledge-center/aurora-postgresql-migrate-from-rds",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1063175,
          "date": "Sun 05 Nov 2023 19:33",
          "username": "potomac",
          "content": "A and C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 1057357,
          "date": "Mon 30 Oct 2023 06:12",
          "username": "TariqKipkemei",
          "content": "Either import the RDS snapshot directly into Aurora or upload the database dump to Amazon S3, then import the database dump into Aurora.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 1048885,
          "date": "Fri 20 Oct 2023 16:36",
          "username": "thanhnv142",
          "content": "AC:<br>- store dump in s3 then upload to aurora<br>- no need to store snapshot in s3 because is in AWS already",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 990018,
          "date": "Fri 25 Aug 2023 13:48",
          "username": "Guru4Cloud",
          "content": "C and E are the solutions that can restore the backups into Amazon Aurora.<br><br>The RDS DB snapshot contains backup data in a proprietary format that cannot be directly imported into Aurora.<br>The mysqldump database dump contains SQL statements that can be imported into Aurora after uploading to S3.<br>AWS DMS can migrate the dump file from S3 into Aurora.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 954983,
          "date": "Tue 18 Jul 2023 07:33",
          "username": "james2033",
          "content": "Amazon RDS for MySQL --> Amazon Aurora MySQL-compatible.<br>* mysqldump, database dump --> (C) Upload to Amazon S3, Import dump to Aurora.<br>* DB snapshot --> (A) Import RDS Snapshot directly Aurora. The correct word should be \\\"migration\\\". \\\"Use console to migrate the DB snapshot and create an Aurora MySQL DB cluster with the same databases as the original MySQL DB instance.\\\"<br><br>Exclude B, because no need upload DB snapshot to Amazon S3. Exclude D, because no need Migration service. Exclude E, because no need Migration service. Use exclusion method is more easy for this question.<br><br>Related links:<br>- Amazon RDS create database snapshot https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html<br>- https://aws.amazon.com/rds/aurora/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 926425,
          "date": "Sun 18 Jun 2023 06:50",
          "username": "marufxplorer",
          "content": "CE<br>Since the backup created by the solutions architect was a database dump using the mysqldump utility, it cannot be directly imported into Aurora using RDS snapshots. Amazon Aurora has its own specific backup format that is different from RDS snapshots<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C and E are the solutions that can restore the backups into Amazon Aurora.<br><br>The RDS DB snapshot contains backup data in a proprietary format that cannot be directly imported into Aurora.<br>The mysqldump database dump contains SQL statements that can be imported into Aurora after uploading to S3.<br>AWS DMS can migrate the dump file from S3 into Aurora.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 990016,
          "date": "Fri 25 Aug 2023 13:47",
          "username": "Guru4Cloud",
          "content": "C and E are the solutions that can restore the backups into Amazon Aurora.<br><br>The RDS DB snapshot contains backup data in a proprietary format that cannot be directly imported into Aurora.<br>The mysqldump database dump contains SQL statements that can be imported into Aurora after uploading to S3.<br>AWS DMS can migrate the dump file from S3 into Aurora.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 915175,
          "date": "Mon 05 Jun 2023 09:34",
          "username": "antropaws",
          "content": "Migrating data from MySQL by using an Amazon S3 bucket<br><br>You can copy the full and incremental backup files from your source MySQL version 5.7 database to an Amazon S3 bucket, and then restore an Amazon Aurora MySQL DB cluster from those files.<br><br>This option can be considerably faster than migrating data using mysqldump, because using mysqldump replays all of the commands to recreate the schema and data from your source database in your new Aurora MySQL DB cluster.<br><br>By copying your source MySQL data files, Aurora MySQL can immediately use those files as the data for an Aurora MySQL DB cluster.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 901433,
          "date": "Thu 18 May 2023 20:03",
          "username": "omoakin",
          "content": "BE<br>Upload the RDS snapshot to Amazon S3. Then import the RDS snapshot into Aurora.<br>Upload the database dump to Amazon S3. Then use AWS Database Migration Service (AWS DMS) to import the database dump into Aurora",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 899701,
          "date": "Wed 17 May 2023 04:54",
          "username": "Efren",
          "content": "Id say B and C<br>You can create a dump of your data using the mysqldump utility, and then import that data into an existing Amazon Aurora MySQL DB cluster.<br><br>c>- Because Amazon Aurora MySQL is a MySQL-compatible database, you can use the mysqldump utility to copy data from your MySQL or MariaDB database to an existing Amazon Aurora MySQL DB cluster.<br><br>B.- You can copy the source files from your source MySQL version 5.5, 5.6, or 5.7 database to an Amazon S3 bucket, and then restore an Amazon Aurora MySQL DB cluster from those files.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 898301,
          "date": "Mon 15 May 2023 15:14",
          "username": "nosense",
          "content": "Rds required upload to s3<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>If too be honestly can't decide between be and bc...</li><li>using the mysqldump database dump provide valid solutions to restore into Aurora. Options A, B, and D using the RDS snapshot cannot directly restore into Aurora.</li><li>in the end, apparently the A and C.<br>a) because it creates a new DB<br>b) no sense to load in s3. can directly<br>c) yes, creates a new inst<br>d and e migration</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 898336,
          "date": "Mon 15 May 2023 15:43",
          "username": "nosense",
          "content": "If too be honestly can't decide between be and bc...<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>using the mysqldump database dump provide valid solutions to restore into Aurora. Options A, B, and D using the RDS snapshot cannot directly restore into Aurora.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 990019,
          "date": "Fri 25 Aug 2023 13:49",
          "username": "Guru4Cloud",
          "content": "using the mysqldump database dump provide valid solutions to restore into Aurora. Options A, B, and D using the RDS snapshot cannot directly restore into Aurora.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 899881,
          "date": "Wed 17 May 2023 10:41",
          "username": "nosense",
          "content": "in the end, apparently the A and C.<br>a) because it creates a new DB<br>b) no sense to load in s3. can directly<br>c) yes, creates a new inst<br>d and e migration",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#441",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a multi-tier web application on Amazon Linux Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The company observes that the Auto Scaling group launches more On-Demand Instances when the application's end users access high volumes of static web content. The company wants to optimize cost.<br><br>What should a solutions architect do to redesign the application MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#441",
          "answers": [
            {
              "choice": "<p>Update the Auto Scaling group to use Reserved Instances instead of On-Demand Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the Auto Scaling group to scale by launching Spot Instances instead of On-Demand Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon CloudFront distribution to host the static web contents from an Amazon S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function behind an Amazon API Gateway API to host the static website contents.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 441 discussion",
      "discusstion": [
        {
          "id": 1115889,
          "date": "Sun 07 Jul 2024 14:07",
          "username": "awsgeek75",
          "content": "C: Cost effective static content scalingCloudFront<br>A and B scale instances so not the best use of money for static content<br>D Probably most expensive way of service static content at scale as you'll be charged for Lambda execution also",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1115875,
          "date": "Sun 07 Jul 2024 13:47",
          "username": "mwwt2022",
          "content": "static content -> CloudFront",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 989985,
          "date": "Sun 25 Feb 2024 14:15",
          "username": "Guru4Cloud",
          "content": "implementing CloudFront to serve static content is the most cost-optimal architectural change for this use case.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 954987,
          "date": "Thu 18 Jan 2024 08:39",
          "username": "james2033",
          "content": "Keyword \\\"Amazon CloudFront\\\", \\\"high volumes of static web content\\\", choose C.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 922732,
          "date": "Thu 14 Dec 2023 06:55",
          "username": "TariqKipkemei",
          "content": "static web contentAmazon CloudFront",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914854,
          "date": "Mon 04 Dec 2023 20:58",
          "username": "alexandercamachop",
          "content": "Static Web ContentS3 Always.<br>CloudFrontCloser to the users locations since it will cache in the Edge nodes.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 901189,
          "date": "Sat 18 Nov 2023 15:13",
          "username": "cloudenthusiast",
          "content": "By leveraging Amazon CloudFront, you can cache and serve the static web content from edge locations worldwide, reducing the load on your EC2 instances. This can help lower the number of On-Demand Instances required to handle high volumes of static web content requests. Storing the static content in an Amazon S3 bucket and using CloudFront as a content delivery network (CDN) improves performance and reduces costs by reducing the load on your EC2 instances.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 899733,
          "date": "Fri 17 Nov 2023 07:29",
          "username": "Efren",
          "content": "Static content, cloudFront plus S3",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 899377,
          "date": "Thu 16 Nov 2023 19:58",
          "username": "nosense",
          "content": "c for me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#442",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores several petabytes of data across multiple AWS accounts. The company uses AWS Lake Formation to manage its data lake. The company's data science team wants to securely share selective data from its accounts with the company's engineering team for analytical purposes.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#442",
          "answers": [
            {
              "choice": "<p>Copy the required data to a common account. Create an IAM access role in that account. Grant access by specifying a permission policy that includes users from the engineering team accounts as trusted entities.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the Lake Formation permissions Grant command in each account where the data is stored to allow the required engineering team users to access the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Data Exchange to privately publish the required data to the required engineering team accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Lake Formation tag-based access control to authorize and grant cross-account permissions for the required data to the engineering team accounts.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 442 discussion",
      "discusstion": [
        {
          "id": 901192,
          "date": "Sat 18 Nov 2023 15:20",
          "username": "cloudenthusiast",
          "content": "By utilizing Lake Formation's tag-based access control, you can define tags and tag-based policies to grant selective access to the required data for the engineering team accounts. This approach allows you to control access at a granular level without the need to copy or move the data to a common account or manage permissions individually in each account. It provides a centralized and scalable solution for securely sharing data across accounts with minimal operational overhead.",
          "upvote_count": "18",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1222871,
          "date": "Sun 01 Dec 2024 22:36",
          "username": "NSA_Poker",
          "content": "(B) uses the CLI command that has many options: principal, TableName, ColumnNames, LFTag etc providing a way to manage granular access permissions for different users at the table and column level. That way you don't give full access to the all the data. The problem with (B) is to implement this in each account has a lot more operational overhead than (D).",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1115898,
          "date": "Sun 07 Jul 2024 14:14",
          "username": "awsgeek75",
          "content": "D: Selective datatagging<br>A and B gives full access to all the data<br>C is possible but with complex operational overhead as you have to publish your data to the Data Exchange. (this is based on my limited knowledge so happy to be corrected)",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 989982,
          "date": "Sun 25 Feb 2024 14:09",
          "username": "Guru4Cloud",
          "content": "D is the correct option with the least operational overhead.<br><br>Using Lake Formation tag-based access control allows granting cross-account permissions to access data in other accounts based on tags, without having to copy data or configure individual permissions in each account.<br><br>This provides a centralized, tag-based way to share selective data across accounts to authorized users with least operational overhead.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 904320,
          "date": "Wed 22 Nov 2023 22:01",
          "username": "luisgu",
          "content": "https://aws.amazon.com/blogs/big-data/securely-share-your-data-across-aws-accounts-using-aws-lake-formation/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#443",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to host a scalable web application on AWS. The application will be accessed by users from different geographic regions of the world. Application users will be able to download and upload unique data up to gigabytes in size. The development team wants a cost-effective solution to minimize upload and download latency and maximize performance.<br><br>What should a solutions architect do to accomplish this?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#443",
          "answers": [
            {
              "choice": "<p>Use Amazon S3 with Transfer Acceleration to host the application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon S3 with CacheControl headers to host the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EC2 with Auto Scaling and Amazon CloudFront to host the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EC2 with Auto Scaling and Amazon ElastiCache to host the application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 443 discussion",
      "discusstion": [
        {
          "id": 1110590,
          "date": "Sun 31 Dec 2023 14:34",
          "username": "pentium75",
          "content": "The question asks for \\\"a cost-effective solution [ONLY TO] to minimize upload and download latency and maximize performance\\\", not for the actual application. And the 'cost-effective solution to minimize upload and download latency and maximize performance' is S3 Transfer Acceleration. Obviously there is more required to host the app, but that is not asked for.",
          "upvote_count": "14",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1051129,
          "date": "Sun 22 Oct 2023 23:32",
          "username": "chris0975",
          "content": "The question is focused on large downloads and uploads. S3 Transfer Acceleration is what fits. CloudFront is for caching which cannot be used when the data is unique. They aren't as concerned with regular web traffic.<br><br>Amazon S3 Transfer Acceleration can speed up content transfers to and from Amazon S3 by as much as 50-500% for long-distance transfer of larger objects.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1303467,
          "date": "Sun 27 Oct 2024 04:36",
          "username": "Ben_88",
          "content": "S3 can't \\\"host an application\\\" , so even tho S3 Transfer acceleration would optimize the performances of the download/upload , still it doesn't host the app. the question is poorly written i guess<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I agree with your point !!</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1343052,
          "date": "Sun 19 Jan 2025 16:12",
          "username": "vincent2023",
          "content": "I agree with your point !!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1270023,
          "date": "Wed 21 Aug 2024 12:28",
          "username": "ChymKuBoy",
          "content": "A for sure",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1115902,
          "date": "Sun 07 Jan 2024 15:18",
          "username": "awsgeek75",
          "content": "Not C, D No requirements to scale the application itself so EC2 is not applicable.<br>B is for caching so not sure how/if that helps the upload speed for global users<br>A is correct as Transfer Accelerator is best for uploading and downloading unique items near the user's region/location",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1113325,
          "date": "Thu 04 Jan 2024 04:59",
          "username": "tosuccess",
          "content": "for datas greater tham 1 GB, s3 transfer acceleration is the best",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1100192,
          "date": "Tue 19 Dec 2023 02:47",
          "username": "Cyberkayu",
          "content": "Application users will be able to download and upload UNIQUE data up to gigabytes in size<br><br>Thus all caching related solution dont work.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1073764,
          "date": "Sat 18 Nov 2023 03:08",
          "username": "Goutham4981",
          "content": "Downloading data upto gigabytes in size - Cloudfront is a content delivery service that acts as an edge caching layer for images and other data. Not a service that minimizes upload and download latency.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1063176,
          "date": "Sun 05 Nov 2023 19:38",
          "username": "potomac",
          "content": "The question is focused on large downloads and uploads. S3 Transfer Acceleration is what fits. CloudFront is for caching which cannot be used when the data is unique. They aren't as concerned with regular web traffic.<br><br>C didn't mention S3. Where the data is stored?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A doesn't mention EC2 or EKS or ECS or Elastic Beanstalk or Lambda. Where does the \\\"scalable web application\\\" run?</li><li>hmm... could be a red herring?</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1110588,
          "date": "Sun 31 Dec 2023 14:31",
          "username": "pentium75",
          "content": "A doesn't mention EC2 or EKS or ECS or Elastic Beanstalk or Lambda. Where does the \\\"scalable web application\\\" run?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>hmm... could be a red herring?</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1316328,
          "date": "Fri 22 Nov 2024 14:55",
          "username": "JA2018",
          "content": "hmm... could be a red herring?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1060284,
          "date": "Thu 02 Nov 2023 06:33",
          "username": "beast2091",
          "content": "It is A.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1056388,
          "date": "Sat 28 Oct 2023 20:58",
          "username": "danielmakita",
          "content": "It is A as the Transfer Acceleration will minimize upload and download latency.<br>If you choose C, where would the files be stored? There is no mention of any S3. Will it be stored inside the EC2? That's why I didn't go for C",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1054452,
          "date": "Thu 26 Oct 2023 12:17",
          "username": "Sindokuhlep",
          "content": "Amazon S3 with Transfer Acceleration (option A) is designed for speeding up uploads to Amazon S3, and it's not used for hosting scalable web applications. It doesn't mention using EC2 instances for hosting the application.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1054303,
          "date": "Thu 26 Oct 2023 07:40",
          "username": "canonlycontainletters1",
          "content": "My answer is C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1048911,
          "date": "Fri 20 Oct 2023 17:07",
          "username": "thanhnv142",
          "content": "C because A is for upload data to S3, not for web app",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1040569,
          "date": "Wed 11 Oct 2023 13:25",
          "username": "DamyanG",
          "content": "The correct answer is C!!! It is not A, because<br>- Amazon S3 with Transfer Acceleration (option A) is designed for speeding up uploads to Amazon S3, and it's not used for hosting scalable web applications. It doesn't mention using EC2 instances for hosting the application.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1028411,
          "date": "Mon 09 Oct 2023 04:09",
          "username": "Victory007",
          "content": "Amazon CloudFront is a global content delivery network (CDN) that delivers web content to users with low latency and high transfer speeds. It does this by caching content at edge locations around the world, which are closer to the users than the origin server.<br>By using Amazon EC2 with Auto Scaling and Amazon CloudFront, the company can create a scalable and high-performance web application that is accessible to users from different geographic regions of the world.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1024894,
          "date": "Wed 04 Oct 2023 16:24",
          "username": "Ramdi1",
          "content": "I believe it would be A - my thinking maybe wrong but im just thinking specifically about the S3 put allows upto 5gb not sure about cloudfront. Second way of thinking is that cached content on edge locations but would it not have to go to source still to retrieve if another person wants to download that content in a different part of the world?",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#444",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has hired a solutions architect to design a reliable architecture for its application. The application consists of one Amazon RDS DB instance and two manually provisioned Amazon EC2 instances that run web servers. The EC2 instances are located in a single Availability Zone.<br><br>An employee recently deleted the DB instance, and the application was unavailable for 24 hours as a result. The company is concerned with the overall reliability of its environment.<br><br>What should the solutions architect do to maximize reliability of the application's infrastructure?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#444",
          "answers": [
            {
              "choice": "<p>Delete one EC2 instance and enable termination protection on the other EC2 instance. Update the DB instance to be Multi-AZ, and enable deletion protection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Update the DB instance to be Multi-AZ, and enable deletion protection. Place the EC2 instances behind an Application Load Balancer, and run them in an EC2 Auto Scaling group across multiple Availability Zones.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an additional DB instance along with an Amazon API Gateway and an AWS Lambda function. Configure the application to invoke the Lambda function through API Gateway. Have the Lambda function write the data to the two DB instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Place the EC2 instances in an EC2 Auto Scaling group that has multiple subnets located in multiple Availability Zones. Use Spot Instances instead of On-Demand Instances. Set up Amazon CloudWatch alarms to monitor the health of the instances Update the DB instance to be Multi-AZ, and enable deletion protection.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 444 discussion",
      "discusstion": [
        {
          "id": 1115906,
          "date": "Sun 07 Jul 2024 14:21",
          "username": "awsgeek75",
          "content": "Option E: Sack the employee who did this :)",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 899386,
          "date": "Thu 16 Nov 2023 20:03",
          "username": "nosense",
          "content": "B is correct. HA ensured by DB in Mutli-AZ and EC2 in AG",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1196845,
          "date": "Thu 17 Oct 2024 00:06",
          "username": "wizcloudifa",
          "content": "A: delete one instance, why?. Although takes care of reliability of DB instance however not EC2.<br>B. seems perfect as takes care of reliability of both EC2 as well as DB<br>C. DB instance's reliability is not taken care of<br>D. seems to be trying to address cost alongside reliability of EC2 and DB.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1115909,
          "date": "Sun 07 Jul 2024 14:26",
          "username": "awsgeek75",
          "content": "A: Deleting one EC2 instance makes no sense. Why would you do that?<br>C: API Gateway, Lambda etc are all nice but they don't solve the problem of DB instance deletion<br>D: EC2 subnet blah blah, what? The problem is reliability, not networking!<br><br>B is correct as it solves the DB deletion issue and increases reliability by Multi AZ scaling of EC2 instances",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 989464,
          "date": "Sat 24 Feb 2024 23:00",
          "username": "Guru4Cloud",
          "content": "The key points:<br> =C2=B0 RDS Multi-AZ and deletion protection provide high availability for the database.<br> =C2=B0 The load balancer and Auto Scaling group across AZs give high availability for EC2.<br> =C2=B0 Options A, C, D have limitations that would reduce reliability vs option B.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 922739,
          "date": "Thu 14 Dec 2023 07:20",
          "username": "TariqKipkemei",
          "content": "Update the DB instance to be Multi-AZ, and enable deletion protection. Place the EC2 instances behind an Application Load Balancer, and run them in an EC2 Auto Scaling group across multiple Availability Zones",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 915183,
          "date": "Tue 05 Dec 2023 10:41",
          "username": "antropaws",
          "content": "B for sure.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914857,
          "date": "Mon 04 Dec 2023 21:05",
          "username": "alexandercamachop",
          "content": "It is the only one with High Availability.<br>Amazon RDS with Multi AZ<br>EC2 with Auto Scaling Group in Multi Az",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 901482,
          "date": "Sat 18 Nov 2023 23:20",
          "username": "omoakin",
          "content": "same question from<br>https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-associate-saa-c02/<br>long time ago and still same option B",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#445",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is storing 700 terabytes of data on a large network-attached storage (NAS) system in its corporate data center. The company has a hybrid environment with a 10 Gbps AWS Direct Connect connection.<br><br>After an audit from a regulator, the company has 90 days to move the data to the cloud. The company needs to move the data efficiently and without disruption. The company still needs to be able to access and update the data during the transfer window.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#445",
          "answers": [
            {
              "choice": "<p>Create an AWS DataSync agent in the corporate data center. Create a data transfer task Start the transfer to an Amazon S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Back up the data to AWS Snowball Edge Storage Optimized devices. Ship the devices to an AWS data center. Mount a target Amazon S3 bucket on the on-premises file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use rsync to copy the data directly from local storage to a designated Amazon S3 bucket over the Direct Connect connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Back up the data on tapes. Ship the tapes to an AWS data center. Mount a target Amazon S3 bucket on the on-premises file system.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 445 discussion",
      "discusstion": [
        {
          "id": 921248,
          "date": "Mon 12 Jun 2023 10:25",
          "username": "wRhlH",
          "content": "For those who wonders why not B. Snowball Edge Storage Optimized device for data transfer is up to 100TB<br>https://docs.aws.amazon.com/snowball/latest/developer-guide/device-differences.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The question explicitly mentioned \\\"devices\\\", also Snowball Edge Storage Optimized is 80TB HDD. So it is possible, but the answer is A because we can transfer with DataSync in 6.5 days.</li><li>10GBs * 24*60*60 864,000 GB estimate around 864 TB a day, 2 days will transfer all data. But for snowball at least 4 days for delivery to the data center.</li><li>This account is wrong but I get your point. It is wrong cause 10Gb/s is not the same as 10GB/s (Gigabits vs Gigabytes). However, the correct count is 864Tb/8108TB per day. In one week you should've transferred all the data.</li><li>folks, you had to consider the typical TCP overheads for such over-the-wire data transfers.... it could be as high as 70% of the total available bandwidth due to a wide variety of factors</li><li>That's right, 1 GB8 Gb. Essentially we have a speed of 1.25GB/s.</li></ul>",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 1179121,
          "date": "Thu 21 Mar 2024 11:34",
          "username": "Maru86",
          "content": "The question explicitly mentioned \\\"devices\\\", also Snowball Edge Storage Optimized is 80TB HDD. So it is possible, but the answer is A because we can transfer with DataSync in 6.5 days.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 933364,
          "date": "Sun 25 Jun 2023 09:57",
          "username": "smartegnine",
          "content": "10GBs * 24*60*60 864,000 GB estimate around 864 TB a day, 2 days will transfer all data. But for snowball at least 4 days for delivery to the data center.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This account is wrong but I get your point. It is wrong cause 10Gb/s is not the same as 10GB/s (Gigabits vs Gigabytes). However, the correct count is 864Tb/8108TB per day. In one week you should've transferred all the data.</li><li>folks, you had to consider the typical TCP overheads for such over-the-wire data transfers.... it could be as high as 70% of the total available bandwidth due to a wide variety of factors</li><li>That's right, 1 GB8 Gb. Essentially we have a speed of 1.25GB/s.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 957142,
          "date": "Thu 20 Jul 2023 07:17",
          "username": "siGma182",
          "content": "This account is wrong but I get your point. It is wrong cause 10Gb/s is not the same as 10GB/s (Gigabits vs Gigabytes). However, the correct count is 864Tb/8108TB per day. In one week you should've transferred all the data.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>folks, you had to consider the typical TCP overheads for such over-the-wire data transfers.... it could be as high as 70% of the total available bandwidth due to a wide variety of factors</li><li>That's right, 1 GB8 Gb. Essentially we have a speed of 1.25GB/s.</li></ul>",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1316335,
          "date": "Fri 22 Nov 2024 15:01",
          "username": "JA2018",
          "content": "folks, you had to consider the typical TCP overheads for such over-the-wire data transfers.... it could be as high as 70% of the total available bandwidth due to a wide variety of factors",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1179112,
          "date": "Thu 21 Mar 2024 11:24",
          "username": "Maru86",
          "content": "That's right, 1 GB8 Gb. Essentially we have a speed of 1.25GB/s.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 962719,
          "date": "Tue 25 Jul 2023 14:41",
          "username": "hsinchang",
          "content": "Access during the transfer window -> DataSync",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1308565,
          "date": "Thu 07 Nov 2024 23:04",
          "username": "Danilus",
          "content": "A- Porque La compa=C3=B1=C3=ADa todav=C3=ADa necesita poder acceder y actualizar los datos durante la ventana de transferencia<br>B-Aunque esta podria ser una opcion porque dice de enviar los dispositivosal al centro de datos que serian mas o menos entre 9 y 10 dispositivos ya que el almacenamiento de storage optimized es de 80 TB el problema esta en que con Snowball Edge Storage Optimized no se puede acceder y actuializar a los datos durante la transferencia<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>From Google Translate:<br><br>A- Because The company still needs to be able to access and update the data during the transfer window<br><br>B-Although this could be an option because it says that sending the devices to the data center would be more or less between 9 and 10 devices since the storage optimized storage is 80 TB, the problem is that with Snowball Edge Storage Optimized it does not Data can be accessed and updated during transfer</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1316336,
          "date": "Fri 22 Nov 2024 15:03",
          "username": "JA2018",
          "content": "From Google Translate:<br><br>A- Because The company still needs to be able to access and update the data during the transfer window<br><br>B-Although this could be an option because it says that sending the devices to the data center would be more or less between 9 and 10 devices since the storage optimized storage is 80 TB, the problem is that with Snowball Edge Storage Optimized it does not Data can be accessed and updated during transfer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1308564,
          "date": "Thu 07 Nov 2024 23:03",
          "username": "Danilus",
          "content": "A- Porque La compa=C3=B1=C3=ADa todav=C3=ADa necesita poder acceder y actualizar los datos durante la ventana de transferencia<br>B-Aunque esta podria ser una opcion porque dice de enviar los dispositivosal al centro de datos que serian mas o menos entre 9 y 10 dispositivos ya que el almacenamiento de storage optimized es de 80 TB el problema esta en que con Snowball Edge Storage Optimized no se puede acceder y actuializar a los datos durante la transferencia",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1283030,
          "date": "Fri 13 Sep 2024 08:13",
          "username": "MatAlves",
          "content": "Finally, a company with good bandwidth.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1222899,
          "date": "Sat 01 Jun 2024 22:50",
          "username": "NSA_Poker",
          "content": "(B) is incorrect bc although Mountpoint for S3 is possible for on-premises NAS, this is not as efficient as AWS DataSync. Data updates made during the transfer window would have to be resolved later.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1184591,
          "date": "Thu 28 Mar 2024 07:19",
          "username": "Burrito69",
          "content": "I will put simple calculation for oyu guys to just store in your head to quickly answer:<br>for 10GBPS its 1.25GBPS becasue its bits to bytes.<br>for one minute its 75GBPS<br>for one hour its 4500 GBPS<br>for one day its 10.8 TB<br><br>so you can calculate easily if you just store these numbers in your head. lets say if question is 1GBPS DirectConnect that meand everything above should be divide by 8. cool<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>folks, you had to consider the typical TCP overheads for such over-the-wire data transfers.... it could be as high as 70% of the total available bandwidth due to a wide variety of factors<br><br>in a worst case scenario, we could be looking @ 3.24 TB/ day</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1316338,
          "date": "Fri 22 Nov 2024 15:05",
          "username": "JA2018",
          "content": "folks, you had to consider the typical TCP overheads for such over-the-wire data transfers.... it could be as high as 70% of the total available bandwidth due to a wide variety of factors<br><br>in a worst case scenario, we could be looking @ 3.24 TB/ day",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1115911,
          "date": "Sun 07 Jan 2024 15:31",
          "username": "awsgeek75",
          "content": "Critical requirement: \\\"The company needs to move the data efficiently and without disruption.\\\"<br>B: Causes disruption<br>C: I don't think that is possible without a gateway kind of thing<br>D: Tape backups? \\\" Mount a target Amazon S3 bucket on the on-premises file system\\\"? This requires some gateway which is not mentioned<br><br>A is the answer as DataSync allows transfer without disruption and with 10Gbps, it can be done in 90 days.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 989461,
          "date": "Thu 24 Aug 2023 21:55",
          "username": "Guru4Cloud",
          "content": "AWS DataSync can efficiently transfer large datasets from on-premises NAS to Amazon S3 over Direct Connect.<br><br>DataSync allows accessing and updating the data continuously during the transfer process.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 923666,
          "date": "Thu 15 Jun 2023 05:16",
          "username": "TariqKipkemei",
          "content": "AWS DataSync is a secure, online service that automates and accelerates moving data between on premises and AWS Storage services.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 901487,
          "date": "Thu 18 May 2023 22:30",
          "username": "omoakin",
          "content": "A<br>https://www.examtopics.com/discussions/amazon/view/46492-exam-aws-certified-solutions-architect-associate-saa-c02/#:~:textExam%20question%20from,Question%20%23%3A%20385",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901200,
          "date": "Thu 18 May 2023 14:33",
          "username": "cloudenthusiast",
          "content": "By leveraging AWS DataSync in combination with AWS Direct Connect, the company can efficiently and securely transfer its 700 terabytes of data to an Amazon S3 bucket without disruption. The solution allows continued access and updates to the data during the transfer window, ensuring business continuity throughout the migration process.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 899170,
          "date": "Tue 16 May 2023 14:18",
          "username": "nosense",
          "content": "A for me, bcs egde storage up to 100tb",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#446",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores data in PDF format in an Amazon S3 bucket. The company must follow a legal requirement to retain all new and existing data in Amazon S3 for 7 years.<br><br>Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#446",
          "answers": [
            {
              "choice": "<p>Turn on the S3 Versioning feature for the S3 bucket. Configure S3 Lifecycle to delete the data after 7 years. Configure multi-factor authentication (MFA) delete for all S3 objects.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Turn on S3 Object Lock with governance retention mode for the S3 bucket. Set the retention period to expire after 7 years. Recopy all existing objects to bring the existing data into compliance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Turn on S3 Object Lock with compliance retention mode for the S3 bucket. Set the retention period to expire after 7 years. Recopy all existing objects to bring the existing data into compliance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Turn on S3 Object Lock with compliance retention mode for the S3 bucket. Set the retention period to expire after 7 years. Use S3 Batch Operations to bring the existing data into compliance.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 446 discussion",
      "discusstion": [
        {
          "id": 1124540,
          "date": "Tue 16 Jan 2024 23:23",
          "username": "omarshaban",
          "content": "THIS WAS IN MY EXAM<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Did you pass?</li></ul>",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 1126281,
          "date": "Fri 19 Jan 2024 00:24",
          "username": "awsgeek75",
          "content": "Did you pass?",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1119554,
          "date": "Thu 11 Jan 2024 10:34",
          "username": "iapps369",
          "content": "D<br>as S3 batch operations reduce risk and manual copy/paste overhead.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1231405,
          "date": "Sun 16 Jun 2024 16:59",
          "username": "Lin878",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1115919,
          "date": "Sun 07 Jan 2024 15:41",
          "username": "awsgeek75",
          "content": "A: Versioning, not relevant<br>B: Governance, it won't enforce object lock<br>C: Recopy existing objects may work but lots of operational overhead (see link)<br>D: Compliance on existing objects with batch operations is least operational overhead<br><br>https://repost.aws/questions/QUGKrl8XRLTEeuIzUHq0Ikew/s3-object-lock-on-existing-s3-objects<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>With option C, you have to copy the object for it to be complaint and then delete the original as only the new copy will be compliant. So D is the only option</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1115921,
          "date": "Sun 07 Jan 2024 15:43",
          "username": "awsgeek75",
          "content": "With option C, you have to copy the object for it to be complaint and then delete the original as only the new copy will be compliant. So D is the only option",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1112424,
          "date": "Wed 03 Jan 2024 03:16",
          "username": "mr123dd",
          "content": "To enable Object Lock on an Amazon S3 bucket, you must first enable versioning on that bucket. other 3 option did not enable versioning first",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1095678,
          "date": "Wed 13 Dec 2023 18:11",
          "username": "fb4afde",
          "content": "Recopying offers more control but requires users to manage the process. S3 Batch Operations automates the process at scale but with less granular control - LEAST operational overhead",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1069871,
          "date": "Tue 14 Nov 2023 01:48",
          "username": "moonster",
          "content": "Its C because you only need to recopy all existing objects one time, so why use S3 batch operations if new datas going to be in compliance retention mode? I can see why its C although my initial gut answer was D.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>What if I don't have the original files anymore? Where should I copy them from?</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1110594,
          "date": "Sun 31 Dec 2023 14:38",
          "username": "pentium75",
          "content": "What if I don't have the original files anymore? Where should I copy them from?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1008415,
          "date": "Fri 15 Sep 2023 13:33",
          "username": "kwang312",
          "content": "You can only enable Object Lock for new buckets. If you want to turn on Object Lock for an existing bucket, contact AWS Support.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>You need a token from AWS Support, but you CAN enable Object Lock for an existing bucket.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1110597,
          "date": "Sun 31 Dec 2023 14:42",
          "username": "pentium75",
          "content": "You need a token from AWS Support, but you CAN enable Object Lock for an existing bucket.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 989361,
          "date": "Thu 24 Aug 2023 19:15",
          "username": "Guru4Cloud",
          "content": "Turn on S3 Object Lock with compliance retention mode for the S3 bucket. Set the retention period to expire after 7 years. Use S3 Batch Operations to bring the existing data into compliance.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 926147,
          "date": "Sat 17 Jun 2023 19:02",
          "username": "MrAWSAssociate",
          "content": "To replicate existing object/data in S3 Bucket to bring them to compliance, optionally we use \\\"S3 Batch Replication\\\", so option D is the most appropriate, especially if we have big data in S3.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 923670,
          "date": "Thu 15 Jun 2023 05:25",
          "username": "TariqKipkemei",
          "content": "For minimum ops D is best",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 915240,
          "date": "Mon 05 Jun 2023 10:47",
          "username": "DrWatson",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-retention-date.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 915189,
          "date": "Mon 05 Jun 2023 09:46",
          "username": "antropaws",
          "content": "Batch operations will add operational overhead.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>And gathering all the files for copying them again does not?</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1110596,
          "date": "Sun 31 Dec 2023 14:39",
          "username": "pentium75",
          "content": "And gathering all the files for copying them again does not?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 914205,
          "date": "Sun 04 Jun 2023 08:32",
          "username": "Abrar2022",
          "content": "Use Object Lock in Compliance mode. Then Use Batch operation.<br>WRONG>>manual work and not automated>>>Recopy all existing objects to bring the existing data into compliance.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Batch IS automated. You just need to create the batch which is a one-time operation.<br>\\\"Recopy all existing objects\\\" is not operational overhead?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1110601,
          "date": "Sun 31 Dec 2023 14:44",
          "username": "pentium75",
          "content": "Batch IS automated. You just need to create the batch which is a one-time operation.<br>\\\"Recopy all existing objects\\\" is not operational overhead?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901491,
          "date": "Thu 18 May 2023 22:46",
          "username": "omoakin",
          "content": "C<br>When an object is locked in compliance mode, its retention mode can't be changed, and its retention period can't be shortened. Compliance mode helps ensure that an object version can't be overwritten or deleted for the duration of the retention period.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>error i meant to type D<br>i wont do recopy</li><li>No, D for me because the requirement is LEAST operational overhead<br>So RECOPy .......... is the manual operation -&gt; C is wrong<br>D is correct</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 901493,
          "date": "Thu 18 May 2023 22:48",
          "username": "omoakin",
          "content": "error i meant to type D<br>i wont do recopy",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 907075,
          "date": "Fri 26 May 2023 07:26",
          "username": "lucdt4",
          "content": "No, D for me because the requirement is LEAST operational overhead<br>So RECOPy .......... is the manual operation -> C is wrong<br>D is correct",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 901204,
          "date": "Thu 18 May 2023 14:37",
          "username": "cloudenthusiast",
          "content": "Recopying vs. S3 Batch Operations: In Option C, the recommendation is to recopy all existing objects to ensure they have the appropriate retention settings. This can be done using simple S3 copy operations. On the other hand, Option D suggests using S3 Batch Operations, which is a more advanced feature and may require additional configuration and management. S3 Batch Operations can be beneficial if you have a massive number of objects and need to perform complex operations, but it might introduce more overhead for this specific use case.<br><br>Operational complexity: Option C has a straightforward process of recopying existing objects. It is a well-known operation in S3 and doesn't require additional setup or management. Option D introduces the need to set up and configure S3 Batch Operations, which can involve creating job definitions, specifying job parameters, and monitoring the progress of batch operations. This additional complexity may increase the operational overhead.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 899932,
          "date": "Wed 17 May 2023 11:36",
          "username": "Efren",
          "content": "You need AWS Batch to re-apply certain config to files that were already in S3, like encryption",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#447",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a stateless web application that runs on AWS Lambda functions that are invoked by Amazon API Gateway. The company wants to deploy the application across multiple AWS Regions to provide Regional failover capabilities.<br><br>What should a solutions architect do to route traffic to multiple Regions?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#447",
          "answers": [
            {
              "choice": "<p>Create Amazon Route 53 health checks for each Region. Use an active-active failover configuration.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon CloudFront distribution with an origin for each Region. Use CloudFront health checks to route traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a transit gateway. Attach the transit gateway to the API Gateway endpoint in each Region. Configure the transit gateway to route requests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Application Load Balancer in the primary Region. Set the target group to point to the API Gateway endpoint hostnames in each Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 447 discussion",
      "discusstion": [
        {
          "id": 923678,
          "date": "Thu 15 Jun 2023 05:38",
          "username": "TariqKipkemei",
          "content": "Global, Reduce latency, health checks, no failover Amazon CloudFront<br>Global ,Reduce latency, health checks, failover, Route trafficAmazon Route 53<br>option A has more weight.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Cloud front does have failover capabilities.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html#:~:textthe%20secondary%20origin.-,Note,Choose%20Create%20origin%20group.</li><li>nicley explained</li></ul>",
          "upvote_count": "30",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1209274,
          "date": "Fri 10 May 2024 10:24",
          "username": "ManikRoy",
          "content": "Cloud front does have failover capabilities.<br>https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html#:~:textthe%20secondary%20origin.-,Note,Choose%20Create%20origin%20group.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1045343,
          "date": "Tue 17 Oct 2023 01:21",
          "username": "Anmol_1010",
          "content": "nicley explained",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 904264,
          "date": "Mon 22 May 2023 19:39",
          "username": "examtopictempacc",
          "content": "A. I'm not an expert in this area, but I still want to express my opinion. After carefully reviewing the question and thinking about it for a long time, I actually don't know the reason. As I mentioned at the beginning, I'm not an expert in this field.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>All the explanation you need for this question and option A is in this article:<br>https://aws.amazon.com/blogs/compute/building-a-multi-region-serverless-application-with-amazon-api-gateway-and-aws-lambda/</li></ul>",
          "upvote_count": "18",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1126283,
          "date": "Fri 19 Jan 2024 00:29",
          "username": "awsgeek75",
          "content": "All the explanation you need for this question and option A is in this article:<br>https://aws.amazon.com/blogs/compute/building-a-multi-region-serverless-application-with-amazon-api-gateway-and-aws-lambda/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1283036,
          "date": "Fri 13 Sep 2024 08:22",
          "username": "MatAlves",
          "content": "Correct me if I'm wrong but CloudFront DOES NOT have health check capabilities out of the box. Route 53 and Global Accelerator do.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1272616,
          "date": "Mon 26 Aug 2024 12:16",
          "username": "ChymKuBoy",
          "content": "A for sure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1115930,
          "date": "Sun 07 Jan 2024 15:52",
          "username": "awsgeek75",
          "content": "B: Caching solution. Not ideal for failover although it will work. Would have been a correct answer if A wasn't an option<br>C: Transit gateway is for VPC connectivity not AWS API or Lambda<br>D: Even if it was possible, there is a primary region dependency of ALB<br>A: correct because R53 health checks can failover across regions<br><br>Good explanation here:<br>https://aws.amazon.com/blogs/compute/building-a-multi-region-serverless-application-with-amazon-api-gateway-and-aws-lambda/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The article also explains why you cannot use a CloudFront distribution for API Gateway, Lambda for failover</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1126282,
          "date": "Fri 19 Jan 2024 00:29",
          "username": "awsgeek75",
          "content": "The article also explains why you cannot use a CloudFront distribution for API Gateway, Lambda for failover",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1113336,
          "date": "Thu 04 Jan 2024 05:28",
          "username": "tosuccess",
          "content": "we can set primary and secondry regions in cloud front for failover.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1110604,
          "date": "Sun 31 Dec 2023 14:50",
          "username": "pentium75",
          "content": "Application is serverless, it doesn't matter where it runs, so can be active-active setup and run wherever the request comes in. Route 53 with health checks will route to a healthy region.<br><br>B, could work too, but CloudFront is for caching which does not seem to help with an API. The goal here is \\\"failover capabilities\\\", not caching/performance/latency etc.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1073776,
          "date": "Sat 18 Nov 2023 04:10",
          "username": "Goutham4981",
          "content": "In activ active failover config, route53 continuously monitors its endpoints and if one of them is unhealthy, it excludes the region/endpoint from its valid traffic route - Only Sensible option<br>Cloudfront is a content delivery network - not used to route traffic<br>Transit gateway for traffic routing - aws devs will hit us with a stick on hearing this option<br>You cant use a load balancer for cross region load balancing - invalid",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1063180,
          "date": "Sun 05 Nov 2023 19:47",
          "username": "potomac",
          "content": "Global ,Reduce latency, health checks, failover, Route trafficAmazon Route 53",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1042141,
          "date": "Fri 13 Oct 2023 02:25",
          "username": "youdelin",
          "content": "\\\"What the?\\\" yeah I know right",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 993179,
          "date": "Tue 29 Aug 2023 16:29",
          "username": "jrestrepob",
          "content": "\\\"Stateless applications provide one service or function and use content delivery network (CDN), web, or print servers to process these short-term requests.<br>https://docs.aws.amazon.com/architecture-diagrams/latest/multi-region-api-gateway-with-cloudfront/multi-region-api-gateway-with-cloudfront.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>its not static content, actually they deployed a API Gateway backed by lambda</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 995752,
          "date": "Fri 01 Sep 2023 08:19",
          "username": "deechean",
          "content": "its not static content, actually they deployed a API Gateway backed by lambda",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 926164,
          "date": "Sat 17 Jun 2023 19:23",
          "username": "MrAWSAssociate",
          "content": "A option does make sense.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 924557,
          "date": "Thu 15 Jun 2023 22:01",
          "username": "Sangsation",
          "content": "By creating an Amazon CloudFront distribution with origins in each AWS Region where the application is deployed, you can leverage CloudFront's global edge network to route traffic to the closest available Region. CloudFront will automatically route the traffic based on the client's location and the health of the origins using CloudFront health checks.<br><br>Option A (creating Amazon Route 53 health checks with an active-active failover configuration) is not suitable for this scenario as it is primarily used for failover between different endpoints within the same Region, rather than routing traffic to different Regions.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option A does not speak of Route 53 failover routing policies.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1110603,
          "date": "Sun 31 Dec 2023 14:48",
          "username": "pentium75",
          "content": "Option A does not speak of Route 53 failover routing policies.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 922733,
          "date": "Wed 14 Jun 2023 05:57",
          "username": "Axeashes",
          "content": "https://aws.amazon.com/blogs/compute/building-a-multi-region-serverless-application-with-amazon-api-gateway-and-aws-lambda/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>that is from 2017..i wonder if it is still relevant..</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 939162,
          "date": "Fri 30 Jun 2023 17:03",
          "username": "Gooniegoogoo",
          "content": "that is from 2017..i wonder if it is still relevant..",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 915253,
          "date": "Mon 05 Jun 2023 11:02",
          "username": "DrWatson",
          "content": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 915194,
          "date": "Mon 05 Jun 2023 09:52",
          "username": "antropaws",
          "content": "I understand that you can use Route 53 to provide regional failover.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 914870,
          "date": "Sun 04 Jun 2023 20:25",
          "username": "alexandercamachop",
          "content": "To route traffic to multiple AWS Regions and provide regional failover capabilities for a stateless web application running on AWS Lambda functions invoked by Amazon API Gateway, you can use Amazon Route 53 with an active-active failover configuration.<br><br>By creating Amazon Route 53 health checks for each Region and configuring an active-active failover configuration, Route 53 can monitor the health of the endpoints in each Region and route traffic to healthy endpoints. In the event of a failure in one Region, Route 53 automatically routes traffic to the healthy endpoints in other Regions.<br><br>This setup ensures high availability and failover capabilities for your web application across multiple AWS Regions.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#448",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has two VPCs named Management and Production. The Management VPC uses VPNs through a customer gateway to connect to a single device in the data center. The Production VPC uses a virtual private gateway with two attached AWS Direct Connect connections. The Management and Production VPCs both use a single VPC peering connection to allow communication between the applications.<br><br>What should a solutions architect do to mitigate any single point of failure in this architecture?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#448",
          "answers": [
            {
              "choice": "<p>Add a set of VPNs between the Management and Production VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add a second virtual private gateway and attach it to the Management VPC.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add a second set of VPNs to the Management VPC from a second customer gateway device.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add a second VPC peering connection between the Management VPC and the Production VPC.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 448 discussion",
      "discusstion": [
        {
          "id": 989284,
          "date": "Sat 24 Aug 2024 17:01",
          "username": "Guru4Cloud",
          "content": "C is the correct option to mitigate the single point of failure.<br><br>The Management VPC currently has a single VPN connection through one customer gateway device. This is a single point of failure.<br><br>Adding a second set of VPN connections from the Management VPC to a second customer gateway device provides redundancy and eliminates this single point of failure.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>As@Abrar2022 explains<br>(production) VPN 1--------------&gt; cgw 1<br>(management) VPN 2--------------&gt; cgw</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 989293,
          "date": "Sat 24 Aug 2024 17:12",
          "username": "Guru4Cloud",
          "content": "As@Abrar2022 explains<br>(production) VPN 1--------------> cgw 1<br>(management) VPN 2--------------> cgw",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 914214,
          "date": "Tue 04 Jun 2024 08:44",
          "username": "Abrar2022",
          "content": "(production)VPN 1--------------> cgw 1<br>(management) VPN 2--------------> cgw 2<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ANSWER IS C</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 914216,
          "date": "Tue 04 Jun 2024 08:45",
          "username": "Abrar2022",
          "content": "ANSWER IS C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1021651,
          "date": "Mon 30 Sep 2024 17:59",
          "username": "bsbs1234",
          "content": "C,<br><br>(production) --PrivateGateway-------->Direct Connect Gateway 1 ---> cgw 1 ---> DataCenter<br>(production) -- PrivateGateway ------> Direct Connect Gateway 2 --->cgw 2 -->DataCenter<br>(Management) -- > VPN ---- > (Direct Connect Gateway 1?) --- >cgw1 ---> dataCenter---> device in dataCenter",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901497,
          "date": "Sat 18 May 2024 23:02",
          "username": "omoakin",
          "content": "I agree to C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901211,
          "date": "Sat 18 May 2024 14:45",
          "username": "cloudenthusiast",
          "content": "option D is not a valid solution for mitigating single points of failure in the architecture. I apologize for the confusion caused by the incorrect information.<br><br>To mitigate single points of failure in the architecture, you can consider implementing option C: adding a second set of VPNs to the Management VPC from a second customer gateway device. This will introduce redundancy at the VPN connection level for the Management VPC, ensuring that if one customer gateway or VPN connection fails, the other connection can still provide connectivity to the data center.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 899968,
          "date": "Fri 17 May 2024 12:05",
          "username": "Efren",
          "content": "Redundant VPN connections: Instead of relying on a single device in the data center, the Management VPC should have redundant VPN connections established through multiple customer gateways. This will ensure high availability and fault tolerance in case one of the VPN connections or customer gateways fails.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 899886,
          "date": "Fri 17 May 2024 10:44",
          "username": "nosense",
          "content": "https://www.examtopics.com/discussions/amazon/view/53908-exam-aws-certified-solutions-architect-associate-saa-c02/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#449",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its application on an Oracle database. The company plans to quickly migrate to AWS because of limited resources for the database, backup administration, and data center maintenance. The application uses third-party database features that require privileged access.<br><br>Which solution will help the company migrate the database to AWS MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#449",
          "answers": [
            {
              "choice": "<p>Migrate the database to Amazon RDS for Oracle. Replace third-party features with cloud services.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to Amazon RDS Custom for Oracle. Customize the database settings to support third-party features.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to an Amazon EC2 Amazon Machine Image (AMI) for Oracle. Customize the database settings to support third-party features.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate the database to Amazon RDS for PostgreSQL by rewriting the application code to remove dependency on Oracle APEX.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 449 discussion",
      "discusstion": [
        {
          "id": 914220,
          "date": "Mon 04 Dec 2023 09:48",
          "username": "Abrar2022",
          "content": "RDS Custom since it's related to 3rd vendor<br>RDS Custom since it's related to 3rd vendor<br>RDS Custom since it's related to 3rd vendor",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1115976,
          "date": "Sun 07 Jul 2024 15:41",
          "username": "awsgeek75",
          "content": "Key constraints: Limited resources for DB admin and cost. 3rd party db features with privileged access.<br>A: Won't work due to 3rd party features<br>C: AMI with Oracle may work but again overhead of backed, maintenance etc<br>D: Too much overhead in rewrite<br>B: Actually supports Oracle 3rd party features<br>Caution: If this is only about APEX as suggested in option D, then A is also a possible answer: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.Options.APEX.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Action ignore the last line of my previous comment, A is not a valid option in any case as it suggest replacing 3rd party features with cloud services which is not possible without more details.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1115977,
          "date": "Sun 07 Jul 2024 15:43",
          "username": "awsgeek75",
          "content": "Action ignore the last line of my previous comment, A is not a valid option in any case as it suggest replacing 3rd party features with cloud services which is not possible without more details.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1110607,
          "date": "Sun 30 Jun 2024 13:54",
          "username": "pentium75",
          "content": "\\\"Amazon RDS Custom is a managed database service for applications that require customization of the underlying operating system and database environment. Benefits of RDS automation with the access needed for legacy, packaged, and custom applications.\\\"<br><br>That should allow the \\\"privileged access\\\".",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 989280,
          "date": "Sat 24 Feb 2024 17:54",
          "username": "Guru4Cloud",
          "content": "Migrate the database to Amazon RDS Custom for Oracle. Customize the database settings to support third-party features.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 923688,
          "date": "Fri 15 Dec 2023 06:56",
          "username": "TariqKipkemei",
          "content": "Custom database features Amazon RDS Custom for Oracle",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 915201,
          "date": "Tue 05 Dec 2023 10:59",
          "username": "antropaws",
          "content": "Most likely B.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 909753,
          "date": "Thu 30 Nov 2023 01:10",
          "username": "omoakin",
          "content": "CCCCCCCCCCCCCCCCCCCCC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 902646,
          "date": "Mon 20 Nov 2023 18:15",
          "username": "aqmdla2002",
          "content": "https://aws.amazon.com/about-aws/whats-new/2021/10/amazon-rds-custom-oracle/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 902271,
          "date": "Mon 20 Nov 2023 02:46",
          "username": "hiroohiroo",
          "content": "https://docs.aws.amazon.com/ja_jp/AmazonRDS/latest/UserGuide/Oracle.Resources.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Amazon RDS Custom for Oracle, which is not an actual service. !!!!</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 910558,
          "date": "Thu 30 Nov 2023 22:29",
          "username": "karbob",
          "content": "Amazon RDS Custom for Oracle, which is not an actual service. !!!!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901871,
          "date": "Sun 19 Nov 2023 14:27",
          "username": "nosense",
          "content": "Option C is also a valid solution, but it is not as cost-effective as option B.<br>Option C requires the company to manage its own database infrastructure, which can be expensive and time-consuming. Additionally, the company will need to purchase and maintain Oracle licenses.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 901829,
          "date": "Sun 19 Nov 2023 13:09",
          "username": "y0",
          "content": "RDS Custom enables the capability to access the underlying database and OS so as to configure additional settings to support 3rd party. This feature is applicable only for Oracle and Postgresql<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry Oracle and sql server (not posstgresql)</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901830,
          "date": "Sun 19 Nov 2023 13:10",
          "username": "y0",
          "content": "Sorry Oracle and sql server (not posstgresql)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901499,
          "date": "Sun 19 Nov 2023 00:08",
          "username": "omoakin",
          "content": "I will say C cos of this<br> \\\"application uses third-party \\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 901216,
          "date": "Sat 18 Nov 2023 15:54",
          "username": "cloudenthusiast",
          "content": "Should not it be since for Ec2, the company will have full control over the database and this is the reason that they are moving to AWS in the first place \\\"The company plans to quickly migrate to AWS because of limited resources for the database, backup administration, and data center maintenance?\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Amazon RDS Custom (B) is a managed database service for applications that require customization of the underlying operating system and database environment. Benefits of RDS automation with the access needed for legacy, packaged, and custom applications.\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1110606,
          "date": "Sun 30 Jun 2024 13:54",
          "username": "pentium75",
          "content": "\\\"Amazon RDS Custom (B) is a managed database service for applications that require customization of the underlying operating system and database environment. Benefits of RDS automation with the access needed for legacy, packaged, and custom applications.\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 899969,
          "date": "Fri 17 Nov 2023 13:07",
          "username": "Efren",
          "content": "RDS Custom when is something related to 3rd vendor, for me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 899402,
          "date": "Thu 16 Nov 2023 20:08",
          "username": "nosense",
          "content": "not sure, but b probably",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#450",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a three-tier web application that is in a single server. The company wants to migrate the application to the AWS Cloud. The company also wants the application to align with the AWS Well-Architected Framework and to be consistent with AWS recommended best practices for security, scalability, and resiliency.<br><br>Which combination of solutions will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: CEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#450",
          "answers": [
            {
              "choice": "<p>Create a VPC across two Availability Zones with the application's existing architecture. Host the application with existing architecture on an Amazon EC2 instance in a private subnet in each Availability Zone with EC2 Auto Scaling groups. Secure the EC2 instance with security groups and network access control lists (network ACLs).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up security groups and network access control lists (network ACLs) to control access to the database layer. Set up a single Amazon RDS database in a private subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a VPC across two Availability Zones. Refactor the application to host the web tier, application tier, and database tier. Host each tier on its own private subnet with Auto Scaling groups for the web tier and application tier.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use a single Amazon RDS database. Allow database access only from the application tier security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Elastic Load Balancers in front of the web tier. Control access by using security groups containing references to each layer's security groups.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an Amazon RDS database Multi-AZ cluster deployment in private subnets. Allow database access only from application tier security groups.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 450 discussion",
      "discusstion": [
        {
          "id": 1115983,
          "date": "Sun 07 Jul 2024 15:51",
          "username": "awsgeek75",
          "content": "The wording on this question makes things ambiguous for C. But, remember well-architected so:<br>A: Not ideal as it is suggesting using existing architecture but with autoscaling EC2. Doesn't leave room for improvement on scaling or reliability on each tier.<br>B: Single RDS, not well-architected<br>D: Again, single RDS<br>E,F are good options and C is only remaining good one.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C is badly worded IMHO because of this part \\\" Refactor the application to host the web tier, application tier, and database tier.\\\" The database tier tier just makes it confusing when you don't read E and F.</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 1115984,
          "date": "Sun 07 Jul 2024 15:52",
          "username": "awsgeek75",
          "content": "C is badly worded IMHO because of this part \\\" Refactor the application to host the web tier, application tier, and database tier.\\\" The database tier tier just makes it confusing when you don't read E and F.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 914222,
          "date": "Mon 04 Dec 2023 09:55",
          "username": "Abrar2022",
          "content": "C-scalable and resilient<br>E-high availability of the application<br>F-Multi-AZ configuration provides high availability",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 1184593,
          "date": "Sat 28 Sep 2024 06:40",
          "username": "Burrito69",
          "content": "remove singles and remove network ACLs",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1131276,
          "date": "Thu 25 Jul 2024 02:43",
          "username": "jjcode",
          "content": "i would flag this on the test and do it last.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 944844,
          "date": "Sat 06 Jan 2024 19:38",
          "username": "argl1995",
          "content": "option A cannot be the answer as Security group is at instance level whereas a NACL is at the subnet level. Having said that option C is the right one as the VPC cannot span across the regions and here it is mentioned two AZs for which I am guessing it is a default VPC which is created in each region with a subnet in each AZ.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>So, CEF is the right answer</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 944845,
          "date": "Sat 06 Jan 2024 19:38",
          "username": "argl1995",
          "content": "So, CEF is the right answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 939178,
          "date": "Sat 30 Dec 2023 18:25",
          "username": "Gooniegoogoo",
          "content": "How can you create a VPC across 2 AZ? i only see EF here..if they mean 2 separate VPC then that is different but a VPC cannot span two AZ..<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A VPC most definitely can span across 2 AZ. You may be thinking of subnets.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 990396,
          "date": "Sun 25 Feb 2024 23:45",
          "username": "lemur88",
          "content": "A VPC most definitely can span across 2 AZ. You may be thinking of subnets.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 926404,
          "date": "Mon 18 Dec 2023 06:31",
          "username": "marufxplorer",
          "content": "I also agree with CEF but chatGPTanswer is ACE. A and C is the similar <br>Another Logic F is not True because in the question not mentioned about DB<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ChatGPT is a language parser. It is not an AWS solution architect!</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1126287,
          "date": "Thu 18 Jul 2024 23:36",
          "username": "awsgeek75",
          "content": "ChatGPT is a language parser. It is not an AWS solution architect!",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 923692,
          "date": "Fri 15 Dec 2023 07:02",
          "username": "TariqKipkemei",
          "content": "CEF is best",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 915204,
          "date": "Tue 05 Dec 2023 11:02",
          "username": "antropaws",
          "content": "It's clearly CEF.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 909757,
          "date": "Thu 30 Nov 2023 01:19",
          "username": "omoakin",
          "content": "B- to control access to database<br>C-scalable and resilient<br>E-high availability of the application",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 907093,
          "date": "Sun 26 Nov 2023 08:49",
          "username": "lucdt4",
          "content": "CEF<br>A: application's existing architecture is wrong (single AZ)<br>B: single AZ<br>D: Single AZ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CEF"
        },
        {
          "id": 901221,
          "date": "Sat 18 Nov 2023 15:59",
          "username": "cloudenthusiast",
          "content": "C.<br>This solution follows the recommended architecture pattern of separating the web, application, and database tiers into different subnets. It provides better security, scalability, and fault tolerance.<br>E.By using Elastic Load Balancers (ELBs), you can distribute traffic to multiple instances of the web tier, increasing scalability and availability. Controlling access through security groups allows for fine-grained control and ensures only authorized traffic reaches each layer.<br>F.<br>Deploying an Amazon RDS database in a Multi-AZ configuration provides high availability and automatic failover. Placing the database in private subnets enhances security. Allowing database access only from the application tier security groups limits exposure and follows the principle of least privilege.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>good explanation</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1115961,
          "date": "Sun 07 Jul 2024 15:25",
          "username": "mwwt2022",
          "content": "good explanation",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 899197,
          "date": "Thu 16 Nov 2023 15:49",
          "username": "nosense",
          "content": "Only this valid for best practices and well architected",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: CEF"
        }
      ]
    },
    {
      "question_id": "#451",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its applications and databases to the AWS Cloud. The company will use Amazon Elastic Container Service (Amazon ECS), AWS Direct Connect, and Amazon RDS.<br><br>Which activities will be managed by the company's operational team? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BCF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#451",
          "answers": [
            {
              "choice": "<p>Management of the Amazon RDS infrastructure layer, operating system, and platforms<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Creation of an Amazon RDS DB instance and configuring the scheduled maintenance window<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configuration of additional software components on Amazon ECS for monitoring, patch management, log management, and host intrusion detection<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Installation of patches for all minor and major database versions for Amazon RDS<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Ensure the physical security of the Amazon RDS infrastructure in the data center<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Encryption of the data that moves in transit through Direct Connect<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 451 discussion",
      "discusstion": [
        {
          "id": 1110612,
          "date": "Sun 30 Jun 2024 13:59",
          "username": "pentium75",
          "content": "ADEAWS responsibility",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 1126539,
          "date": "Fri 19 Jul 2024 08:46",
          "username": "awsgeek75",
          "content": "Just to clarify on F. Direct Connect is an ISP and AWS offering, I consider it as a physical connection just like you get from your ISP at home. There is not security on it until you build security on the connection. AWS provides Direct Connect but it does not provide encryption level security on data movement through it by default. It's the customer's responsibility.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 989263,
          "date": "Sat 24 Feb 2024 17:28",
          "username": "Guru4Cloud",
          "content": "B: Creating an RDS instance and configuring the maintenance window is done by the customer.<br><br>C: Adding monitoring, logging, etc on ECS is managed by the customer.<br><br>F: Encrypting Direct Connect traffic is handled by the customer.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 957995,
          "date": "Sun 21 Jan 2024 04:59",
          "username": "james2033",
          "content": "In question has 3 keyword \\\"Amazon ECS\\\", \\\"AWS Direct Connect\\\", \\\"Amazon RDS\\\". With per Amazon services, choose 1 according answer. Has 6 items, need pick 3 items.<br><br>ECS --> choose C.<br><br>Direct Connect --> choose F.<br><br>RDS --> Excluse A (by keyword \\\"infrastructure layer\\\"), Choose B. Exclusive D (by keyword \\\"patches for all minor and major database versions for Amazon RDS\\\"). Exclusive E (by keyword \\\"Ensure the physical security of the Amazon RDS\\\"). Easy question.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 928682,
          "date": "Wed 20 Dec 2023 21:20",
          "username": "kapit",
          "content": "BC & F ( no automatic encryption with direct connect",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 923699,
          "date": "Fri 15 Dec 2023 07:14",
          "username": "TariqKipkemei",
          "content": "Amazon ECS is a fully managed service,the ops team only focus on building their applications, not the environment.<br>Only option B and F makes sense.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Plus C (we were asked for three). Configuration (!) of components for monitoring, log management etc.; those services exist from AWS but you need to configure them (which logs do you want to store for how long etc.).</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BF"
        },
        {
          "id": 1110611,
          "date": "Sun 30 Jun 2024 13:58",
          "username": "pentium75",
          "content": "Plus C (we were asked for three). Configuration (!) of components for monitoring, log management etc.; those services exist from AWS but you need to configure them (which logs do you want to store for how long etc.).",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 915205,
          "date": "Tue 05 Dec 2023 11:03",
          "username": "antropaws",
          "content": "100% BCF.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 907102,
          "date": "Sun 26 Nov 2023 09:09",
          "username": "lucdt4",
          "content": "BCF<br>B: Mentioned RDS<br>C: Mentioned ECS<br>F: Mentioned Direct connect",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 902267,
          "date": "Mon 20 Nov 2023 02:35",
          "username": "hiroohiroo",
          "content": "Yes BCF",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 901518,
          "date": "Sun 19 Nov 2023 01:02",
          "username": "omoakin",
          "content": "I agree BCF",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 899203,
          "date": "Thu 16 Nov 2023 15:56",
          "username": "nosense",
          "content": "Bcf for me",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BCF"
        }
      ]
    },
    {
      "question_id": "#452",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a Java-based job on an Amazon EC2 instance. The job runs every hour and takes 10 seconds to run. The job runs on a scheduled interval and consumes 1 GB of memory. The CPU utilization of the instance is low except for short surges during which the job uses the maximum CPU available. The company wants to optimize the costs to run the job.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#452",
          "answers": [
            {
              "choice": "<p>Use AWS App2Container (A2C) to containerize the job. Run the job as an Amazon Elastic Container Service (Amazon ECS) task on AWS Fargate with 0.5 virtual CPU (vCPU) and 1 GB of memory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Copy the code into an AWS Lambda function that has 1 GB of memory. Create an Amazon EventBridge scheduled rule to run the code each hour.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS App2Container (A2C) to containerize the job. Install the container in the existing Amazon Machine Image (AMI). Ensure that the schedule stops the container when the task finishes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the existing schedule to stop the EC2 instance at the completion of the job and restart the EC2 instance when the next job starts.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 452 discussion",
      "discusstion": [
        {
          "id": 1124541,
          "date": "Tue 16 Jan 2024 23:24",
          "username": "omarshaban",
          "content": "THIS WAS IN MY EXAM",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1126543,
          "date": "Fri 19 Jan 2024 09:52",
          "username": "awsgeek75",
          "content": "Never done it myself but apparently you can run Java in Lambda all the way to latest version<br>https://docs.aws.amazon.com/lambda/latest/dg/lambda-java.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1308568,
          "date": "Thu 07 Nov 2024 23:15",
          "username": "Danilus",
          "content": "key-The company wants to optimize the costs to run the job.<br>the answer is B because lambda provides the most cost-effective,easy to mangeand scalable solution.it minimizes the need to manage infrastructure because you only pay for the compute time used during job execution",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1161571,
          "date": "Wed 28 Feb 2024 12:40",
          "username": "noircesar25",
          "content": "can someone explain what makes A wrong, im aware that C hasnt covered all the requirements but A seems good with fargate serverless and autoscaling functionalities, plus AWS app2container is for .NET and JAVA<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Statement: A company runs a Java-based job on an Amazon EC2 instance<br>Requirement: The company wants to optimize the costs to run the job<br>Regarding option A: App2Container is more likely for migratiing legacy application to conatiner based application.<br>Which is not the main purpose of this use case.<br>We are asked to reduce cost on a application that is already running under EC2 instance.<br>So option B has the hight weight, cause lambda could perfectly do the job with the minimal cost</li><li>you only need to pay for the compute resources consumed as and when each Lambda function is actually running (for the running duration)</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1185491,
          "date": "Fri 29 Mar 2024 15:40",
          "username": "bujuman",
          "content": "Statement: A company runs a Java-based job on an Amazon EC2 instance<br>Requirement: The company wants to optimize the costs to run the job<br>Regarding option A: App2Container is more likely for migratiing legacy application to conatiner based application.<br>Which is not the main purpose of this use case.<br>We are asked to reduce cost on a application that is already running under EC2 instance.<br>So option B has the hight weight, cause lambda could perfectly do the job with the minimal cost<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>you only need to pay for the compute resources consumed as and when each Lambda function is actually running (for the running duration)</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1316346,
          "date": "Fri 22 Nov 2024 15:24",
          "username": "JA2018",
          "content": "you only need to pay for the compute resources consumed as and when each Lambda function is actually running (for the running duration)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1091188,
          "date": "Fri 08 Dec 2023 17:31",
          "username": "Murtadhaceit",
          "content": "This question is intended for Lambda. Just searched for Lambda with Event bridge. I",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1063185,
          "date": "Sun 05 Nov 2023 19:56",
          "username": "potomac",
          "content": "Lambda allows you to allocate memory for your functions in increments of 1 MB, ranging from a minimum of 128 MB to a maximum of 10,240 MB (10 GB).",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 989252,
          "date": "Thu 24 Aug 2023 16:16",
          "username": "Guru4Cloud",
          "content": "Remember - AWS Lambda function can go up to 10 GB of memory, instead of free tier only allow 512MB.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 958560,
          "date": "Fri 21 Jul 2023 15:38",
          "username": "james2033",
          "content": "\\\"AWS Batch jobs as EventBridge targets\\\" at https://docs.aws.amazon.com/batch/latest/userguide/batch-cwe-target.html<br><br>AWS Batch + Amazon EventBridge https://docs.aws.amazon.com/batch/latest/userguide/batch-cwe-target.html .<br><br>AWS Lambda just for a point of time per period. Choose B.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 923700,
          "date": "Thu 15 Jun 2023 06:19",
          "username": "TariqKipkemei",
          "content": "10 seconds to run, optimize the costs, consumes 1 GB of memoryAWS Lambda function.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914874,
          "date": "Sun 04 Jun 2023 20:36",
          "username": "alexandercamachop",
          "content": "AWS Lambda automatically scales resources to handle the workload, so you don't have to worry about managing the underlying infrastructure. It provisions the necessary compute resources based on the configured memory size (1 GB in this case) and executes the job in a serverless environment.<br><br>By using Amazon EventBridge, you can create a scheduled rule to trigger the Lambda function every hour, ensuring that the job runs on the desired interval.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 903676,
          "date": "Mon 22 May 2023 04:36",
          "username": "Yadav_Sanjay",
          "content": "B - Within 10 sec and 1 GB Memory (Lambda Memory 128MB to 10GB)<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/lambda/latest/operatorguide/computing-power.html</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 903677,
          "date": "Mon 22 May 2023 04:37",
          "username": "Yadav_Sanjay",
          "content": "https://docs.aws.amazon.com/lambda/latest/operatorguide/computing-power.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 900033,
          "date": "Wed 17 May 2023 13:18",
          "username": "Efren",
          "content": "Agreed, B Lambda",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#453",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to implement a backup strategy for Amazon EC2 data and multiple Amazon S3 buckets. Because of regulatory requirements, the company must retain backup files for a specific time period. The company must not alter the files for the duration of the retention period.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#453",
          "answers": [
            {
              "choice": "<p>Use AWS Backup to create a backup vault that has a vault lock in governance mode. Create the required backup plan.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Data Lifecycle Manager to create the required automated snapshot policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon S3 File Gateway to create the backup. Configure the appropriate S3 Lifecycle management.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Backup to create a backup vault that has a vault lock in compliance mode. Create the required backup plan.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 453 discussion",
      "discusstion": [
        {
          "id": 900035,
          "date": "Wed 17 May 2023 13:19",
          "username": "Efren",
          "content": "D, Governance is like the goverment, they can do things you cannot , like delete files or backups :D Compliance, nobody can!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Finally I understood!</li><li>Great analogy</li></ul>",
          "upvote_count": "39",
          "selected_answers": ""
        },
        {
          "id": 946902,
          "date": "Sun 09 Jul 2023 07:53",
          "username": "cmbt",
          "content": "Finally I understood!",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 933605,
          "date": "Sun 25 Jun 2023 15:02",
          "username": "joshnort",
          "content": "Great analogy",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 899211,
          "date": "Tue 16 May 2023 15:07",
          "username": "nosense",
          "content": "D bcs in governance we can delete backup",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1308571,
          "date": "Thu 07 Nov 2024 23:26",
          "username": "Danilus",
          "content": "key-The company must not alter the files for the duration of the retention period<br>the answer is D because backup with vault lock in compliance mode make sure that the fileswhen are locked they cannotbe deleted or modified for the specified retention periodit makes the files immutable<br>why is not A? because the governance mode... with this mode backups allows flexibility to alter or delete backups",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1119392,
          "date": "Thu 11 Jan 2024 06:57",
          "username": "f2e2419",
          "content": "D. Use AWS Backup to create a backup vault that has a vault lock in compliance mode. Create the required backup plan",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 989248,
          "date": "Thu 24 Aug 2023 16:09",
          "username": "Guru4Cloud",
          "content": "D. Use AWS Backup to create a backup vault that has a vault lock in compliance mode. Create the required backup plan",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 989246,
          "date": "Thu 24 Aug 2023 16:06",
          "username": "Guru4Cloud",
          "content": "Use AWS Backup to create a backup vault that has a vault lock in compliance mode. Create the required backup plan",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 967205,
          "date": "Sun 30 Jul 2023 16:24",
          "username": "ccat91",
          "content": "Compliance mode",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 924821,
          "date": "Fri 16 Jun 2023 05:18",
          "username": "TariqKipkemei",
          "content": "Must not alter the files for the duration of the retention periodCompliance Mode",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 915206,
          "date": "Mon 05 Jun 2023 10:08",
          "username": "antropaws",
          "content": "D for sure.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 907000,
          "date": "Fri 26 May 2023 04:36",
          "username": "dydzah",
          "content": "https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 901249,
          "date": "Thu 18 May 2023 15:36",
          "username": "cloudenthusiast",
          "content": "compliance mode",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#454",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has resources across multiple AWS Regions and accounts. A newly hired solutions architect discovers a previous employee did not provide details about the resources inventory. The solutions architect needs to build and map the relationship details of the various workloads across all accounts.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#454",
          "answers": [
            {
              "choice": "<p>Use AWS Systems Manager Inventory to generate a map view from the detailed view report.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Step Functions to collect workload details. Build architecture diagrams of the workloads manually.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Workload Discovery on AWS to generate architecture diagrams of the workloads.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS X-Ray to view the workload details. Build architecture diagrams with relationships.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 454 discussion",
      "discusstion": [
        {
          "id": 1308578,
          "date": "Thu 07 Nov 2024 23:37",
          "username": "Danilus",
          "content": "Key - Build and map the relationship details of the various workloads.<br>Key - MOST operationally efficient way.<br>The answer is C because Workload Discovery is a tool that allows you to find automatically the workloads on the cloud, giving you a visual representation of the infrastructure and the relationship between the resources through different accounts.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1191348,
          "date": "Mon 08 Apr 2024 06:18",
          "username": "zinabu",
          "content": "workload discoveryarchitecture diagram",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1123488,
          "date": "Mon 15 Jan 2024 16:31",
          "username": "osmk",
          "content": "https://docs.aws.amazon.com/solutions/latest/workload-discovery-on-aws/solution-overview.htmlWorkload Discovery on AWS is a visualization tool that automatically generates architecture diagrams of your workload on AWS. You can use this solution to build, customize, and share detailed workload visualizations based on live data from AWS",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1116157,
          "date": "Sun 07 Jan 2024 22:00",
          "username": "awsgeek75",
          "content": "A: Systems Manager Inventory -> Metadata<br>B: Not possible (correct me if I'm wrong)<br>D: X-Ray is for application debugging<br>C: Workload Discovery is purpose built tool for this type of usage<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Even if B is possible, it has \\\"manually\\\" in it which we won't do because we're lazy in this question</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1153247,
          "date": "Sun 18 Feb 2024 13:14",
          "username": "NayeraB",
          "content": "Even if B is possible, it has \\\"manually\\\" in it which we won't do because we're lazy in this question",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1063186,
          "date": "Sun 05 Nov 2023 19:58",
          "username": "potomac",
          "content": "Workload Discovery on AWS (formerly called AWS Perspective) is a tool to visualize AWS Cloud workloads. Use Workload Discovery on AWS to build, customize, and share detailed architecture diagrams of your workloads based on live data from AWS.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1059362,
          "date": "Wed 01 Nov 2023 06:03",
          "username": "TariqKipkemei",
          "content": "use Workload Discovery on AWS",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 989245,
          "date": "Thu 24 Aug 2023 16:05",
          "username": "Guru4Cloud",
          "content": "Workload Discovery is purpose-built to automatically generate visual mappings of architectures across accounts and Regions. This makes it the most operationally efficient way to meet the requirements.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 926210,
          "date": "Sat 17 Jun 2023 21:25",
          "username": "MrAWSAssociate",
          "content": "Option A: AWS SSM offers \\\"Software inventory\\\": Collect software catalog and configuration for your instances.<br>Option C:Workload Discovery on AWS: is a tool for maintaining an inventory of the AWS resources across your accounts and various Regions and mapping relationships between them, and displaying them in a web UI.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 915270,
          "date": "Mon 05 Jun 2023 11:27",
          "username": "DrWatson",
          "content": "https://aws.amazon.com/blogs/mt/visualizing-resources-with-workload-discovery-on-aws/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That is C</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1110621,
          "date": "Sun 31 Dec 2023 15:01",
          "username": "pentium75",
          "content": "That is C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 914260,
          "date": "Sun 04 Jun 2023 10:46",
          "username": "Abrar2022",
          "content": "AWS Workload Discovery- create diagram, map and visualise AWS resources across AWS accounts and Regions",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914258,
          "date": "Sun 04 Jun 2023 10:43",
          "username": "Abrar2022",
          "content": "Workload Discovery on AWS can map AWS resources across AWS accounts and Regions and visualize them in a UI provided on the website.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 902265,
          "date": "Sat 20 May 2023 01:32",
          "username": "hiroohiroo",
          "content": "https://aws.amazon.com/jp/builders-flash/202209/workload-discovery-on-aws/?awsf.filter-name*all",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 901523,
          "date": "Fri 19 May 2023 00:15",
          "username": "omoakin",
          "content": "Only C makes sense",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 901250,
          "date": "Thu 18 May 2023 15:39",
          "username": "cloudenthusiast",
          "content": "Workload Discovery on AWS is a service that helps visualize and understand the architecture of your workloads across multiple AWS accounts and Regions. It automatically discovers and maps the relationships between resources, providing an accurate representation of the architecture.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 900036,
          "date": "Wed 17 May 2023 13:21",
          "username": "Efren",
          "content": "Not sure here tbh<br><br>To efficiently build and map the relationship details of various workloads across multiple AWS Regions and accounts, you can use the AWS Systems Manager Inventory feature in combination with AWS Resource Groups. Here's a solution that can help you achieve this:<br><br>AWS Systems Manager Inventory:",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 899408,
          "date": "Tue 16 May 2023 19:14",
          "username": "nosense",
          "content": "only c mapping relationships",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#455",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations. The company wants to operate some of its AWS accounts with different budgets. The company wants to receive alerts and automatically prevent provisioning of additional resources on AWS accounts when the allocated budget threshold is met during a specific period.<br><br>Which combination of solutions will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BDF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#455",
          "answers": [
            {
              "choice": "<p>Use AWS Budgets to create a budget. Set the budget amount under the Cost and Usage Reports section of the required AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Budgets to create a budget. Set the budget amount under the Billing dashboards of the required AWS accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM user for AWS Budgets to run budget actions with the required permissions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM role for AWS Budgets to run budget actions with the required permissions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add an alert to notify the company when each account meets its budget threshold. Add a budget action that selects the IAM identity created with the appropriate config rule to prevent provisioning of additional resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add an alert to notify the company when each account meets its budget threshold. Add a budget action that selects the IAM identity created with the appropriate service control policy (SCP) to prevent provisioning of additional resources.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 455 discussion",
      "discusstion": [
        {
          "id": 909465,
          "date": "Mon 29 May 2023 15:53",
          "username": "vesen22",
          "content": "I don't see why adf has the most voted when almost everyone has chosen bdf, smh<br>https://acloudguru.com/videos/acg-fundamentals/how-to-set-up-an-aws-billing-and-budget-alert?utm_sourcegoogle&utm_mediumpaid-search&utm_campaigncloud-transformation&utm_termssi-global-acg-core-dsa&utm_contentfree-trial&gclidCj0KCQjwmtGjBhDhARIsAEqfDEcDfXdLul2NxgSMxKracIITZimWOtDBRpsJPpx8lS9T4NndKhbUqPIaAlzhEALw_wcB",
          "upvote_count": "14",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 1124542,
          "date": "Tue 16 Jan 2024 23:25",
          "username": "omarshaban",
          "content": "IN MY EXAM",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 1323321,
          "date": "Sun 08 Dec 2024 02:55",
          "username": "FlyingHawk",
          "content": "AWS budget is under the Budget and Planning section in Billing and Cost Management cosole<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/view-billing-dashboard.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1323323,
          "date": "Sun 08 Dec 2024 02:56",
          "username": "FlyingHawk",
          "content": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/view-billing-dashboard.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1059364,
          "date": "Wed 01 Nov 2023 06:16",
          "username": "TariqKipkemei",
          "content": "Its 11/Nov/2023. Options D&F are definitely required.<br>As for the budget, right from the aws console, the only place to set this up is:<br> AWS Billing>Cost Management>Budgets.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: DF"
        },
        {
          "id": 989238,
          "date": "Thu 24 Aug 2023 15:58",
          "username": "Guru4Cloud",
          "content": "How to create a budget:<br>Billing console > budget > create budget!",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 940031,
          "date": "Sat 01 Jul 2023 16:07",
          "username": "Chris22usa",
          "content": "ACF:<br>Option B is incorrect because the budget amount should be set under the Cost and Usage Reports section, not the Billing dashboards.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Create an AWS Budget: Go to the AWS Billing Dashboard\\\"<br><br>https://awslabs.github.io/scale-out-computing-on-aws/workshops/TKO-Scale-Out-Computing/modules/071-budgets/</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1110625,
          "date": "Sun 31 Dec 2023 15:05",
          "username": "pentium75",
          "content": "\\\"Create an AWS Budget: Go to the AWS Billing Dashboard\\\"<br><br>https://awslabs.github.io/scale-out-computing-on-aws/workshops/TKO-Scale-Out-Computing/modules/071-budgets/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 914263,
          "date": "Sun 04 Jun 2023 10:50",
          "username": "Abrar2022",
          "content": "How to create a budget:<br>Billing console > budget > create budget!",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 903264,
          "date": "Sun 21 May 2023 15:23",
          "username": "udo2020",
          "content": "It is BDF because there is actually a Billing Dashboard available.",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 902263,
          "date": "Sat 20 May 2023 01:29",
          "username": "hiroohiroo",
          "content": "https://docs.aws.amazon.com/ja_jp/awsaccountbilling/latest/aboutv2/view-billing-dashboard.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: BDF"
        },
        {
          "id": 901809,
          "date": "Fri 19 May 2023 11:28",
          "username": "y0",
          "content": "BDF - Budgets can be set from the billing dashboard in AWS console",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 901264,
          "date": "Thu 18 May 2023 15:55",
          "username": "cloudenthusiast",
          "content": "Currently, AWS does not have a specific feature called \\\"AWS Billing Dashboards.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://awslabs.github.io/scale-out-computing-on-aws/workshops/TKO-Scale-Out-Computing/modules/071-budgets/</li></ul>",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: ADF"
        },
        {
          "id": 905694,
          "date": "Wed 24 May 2023 11:17",
          "username": "[Removed]",
          "content": "https://awslabs.github.io/scale-out-computing-on-aws/workshops/TKO-Scale-Out-Computing/modules/071-budgets/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 900037,
          "date": "Wed 17 May 2023 13:23",
          "username": "Efren",
          "content": "if im not wrong, those are correct",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#456",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs applications on Amazon EC2 instances in one AWS Region. The company wants to back up the EC2 instances to a second Region. The company also wants to provision EC2 resources in the second Region and manage the EC2 instances centrally from one AWS account.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#456",
          "answers": [
            {
              "choice": "<p>Create a disaster recovery (DR) plan that has a similar number of EC2 instances in the second Region. Configure data replication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create point-in-time Amazon Elastic Block Store (Amazon EBS) snapshots of the EC2 instances. Copy the snapshots to the second Region periodically.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a backup plan by using AWS Backup. Configure cross-Region backup to the second Region for the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy a similar number of EC2 instances in the second Region. Use AWS DataSync to transfer the data from the source Region to the second Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 456 discussion",
      "discusstion": [
        {
          "id": 901268,
          "date": "Thu 18 May 2023 15:57",
          "username": "cloudenthusiast",
          "content": "Using AWS Backup, you can create backup plans that automate the backup process for your EC2 instances. By configuring cross-Region backup, you can ensure that backups are replicated to the second Region, providing a disaster recovery capability. This solution is cost-effective as it leverages AWS Backup's built-in features and eliminates the need for manual snapshot management or deploying and managing additional EC2 instances in the second Region.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 989208,
          "date": "Thu 24 Aug 2023 14:51",
          "username": "Guru4Cloud",
          "content": "C is the most cost-effective solution that meets all the requirements.<br><br>AWS Backup provides automated backups across Regions for EC2 instances. This handles the backup requirement.<br><br>AWS Backup is more cost-effective for cross-Region EC2 backups than using EBS snapshots manually or DataSync.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Well Datasync is to transfer data from on-prem to AWS rather than AWS R1 to R2, and it is use for a one-time migration rather than repetitive data migration activities like backups hence its out(on so many levels)</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1197557,
          "date": "Thu 18 Apr 2024 00:33",
          "username": "wizcloudifa",
          "content": "Well Datasync is to transfer data from on-prem to AWS rather than AWS R1 to R2, and it is use for a one-time migration rather than repetitive data migration activities like backups hence its out(on so many levels)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1307880,
          "date": "Wed 06 Nov 2024 14:30",
          "username": "elmyth",
          "content": "We have implemented solution similar to B, it's really small and simple script, so we don't have much manual work here, and it's really the most cost-effective.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1274218,
          "date": "Wed 28 Aug 2024 19:36",
          "username": "Certibanksman",
          "content": "Option B (EBS snapshots with cross-Region copy) is the most cost-effective solution for backing up EC2 instances to a second Region while allowing for centralized management and easy recovery when needed.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1268162,
          "date": "Sun 18 Aug 2024 18:42",
          "username": "Daminaij",
          "content": "The answer is c",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1072534,
          "date": "Thu 16 Nov 2023 16:27",
          "username": "bogobob",
          "content": "How does AWS Backup address that \\\"The company also wants to provision EC2 resources in the second Region\\\"?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>With AWS Backup you can 'back up the EC2 instances to a second Region' by implementing cross-Region backup &amp; 'provision EC2 resources in the second Region' by restoring the backup using the AWS Backup console.<br><br>https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-resource.html</li><li>How do A, B or D address that? They want to \\\"provision EC2 resources\\\", nobody says that this should be copies of the existing servers. And if it should be copies of the existing servers, wouldn't we need the same (not \\\"a similar\\\") number of servers? We have no idea how many applications on how many servers they have.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1222940,
          "date": "Sun 02 Jun 2024 01:19",
          "username": "NSA_Poker",
          "content": "With AWS Backup you can 'back up the EC2 instances to a second Region' by implementing cross-Region backup & 'provision EC2 resources in the second Region' by restoring the backup using the AWS Backup console.<br><br>https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-resource.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1110627,
          "date": "Sun 31 Dec 2023 15:09",
          "username": "pentium75",
          "content": "How do A, B or D address that? They want to \\\"provision EC2 resources\\\", nobody says that this should be copies of the existing servers. And if it should be copies of the existing servers, wouldn't we need the same (not \\\"a similar\\\") number of servers? We have no idea how many applications on how many servers they have.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 924827,
          "date": "Fri 16 Jun 2023 05:51",
          "username": "TariqKipkemei",
          "content": "AWS backup",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 910622,
          "date": "Wed 31 May 2023 00:43",
          "username": "omoakin",
          "content": "CCCCC<br>. Create a backup plan by using AWS Backup. Configure cross-Region backup to the second Region for the EC2 instances.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 909721,
          "date": "Mon 29 May 2023 23:03",
          "username": "Blingy",
          "content": "CCCCCCC",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 900039,
          "date": "Wed 17 May 2023 13:24",
          "username": "Efren",
          "content": "C, i would say same, always AWS Backup",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#457",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that uses AWS is building an application to transfer data to a product manufacturer. The company has its own identity provider (IdP). The company wants the IdP to authenticate application users while the users use the application to transfer data. The company must use Applicability Statement 2 (AS2) protocol.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#457",
          "answers": [
            {
              "choice": "<p>Use AWS DataSync to transfer the data. Create an AWS Lambda function for IdP authentication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon AppFlow flows to transfer the data. Create an Amazon Elastic Container Service (Amazon ECS) task for IdP authentication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Transfer Family to transfer the data. Create an AWS Lambda function for IdP authentication.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Storage Gateway to transfer the data. Create an Amazon Cognito identity pool for IdP authentication.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 457 discussion",
      "discusstion": [
        {
          "id": 924831,
          "date": "Fri 16 Jun 2023 06:03",
          "username": "TariqKipkemei",
          "content": "Option C stands out stronger because AWS Transfer Family securely scales your recurring business-to-business file transfers to AWS Storage services using SFTP, FTPS, FTP, and AS2 protocols.<br>And AWS Lambda can be used to authenticate users with the company's IdP.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Ans : C<br><br>To authenticate your users, you can use your existing identity provider with AWS Transfer Family. You integrate your identity provider using an AWS Lambda function, which authenticates and authorizes your users for access to Amazon S3 or Amazon Elastic File System (Amazon EFS).<br><br>https://docs.aws.amazon.com/transfer/latest/userguide/custom-identity-provider-users.html</li></ul>",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 945896,
          "date": "Fri 07 Jul 2023 19:37",
          "username": "baba365",
          "content": "Ans : C<br><br>To authenticate your users, you can use your existing identity provider with AWS Transfer Family. You integrate your identity provider using an AWS Lambda function, which authenticates and authorizes your users for access to Amazon S3 or Amazon Elastic File System (Amazon EFS).<br><br>https://docs.aws.amazon.com/transfer/latest/userguide/custom-identity-provider-users.html",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1308584,
          "date": "Thu 07 Nov 2024 23:49",
          "username": "Danilus",
          "content": "key-The company must use Applicability Statement 2 (AS2) protocol<br>The only service in AWS that accepts this protocol is AWS Transfer Family, which provides a managed solution for secure file transfers using AS2, along with essential features such as encryption, digital signatures, and message disposition notifications (MDN)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1191353,
          "date": "Mon 08 Apr 2024 06:29",
          "username": "zinabu",
          "content": "aws transfer family for data transfer and lamda function for idp authentication",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1116169,
          "date": "Sun 07 Jan 2024 22:12",
          "username": "awsgeek75",
          "content": "https://aws.amazon.com/about-aws/whats-new/2022/07/aws-transfer-family-support-applicability-statement-2-as2/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1063196,
          "date": "Sun 05 Nov 2023 20:09",
          "username": "potomac",
          "content": "To authenticate your users, you can use your existing identity provider with AWS Transfer Family. You integrate your identity provider using an AWS Lambda function, which authenticates and authorizes your users for access to Amazon S3 or Amazon Elastic File System (Amazon EFS).",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1063193,
          "date": "Sun 05 Nov 2023 20:08",
          "username": "potomac",
          "content": "Applicability Statement 2 (AS2) is a business-to-business (B2B) messaging protocol used to exchange Electronic Data Interchange (EDI) documents. With AWS Transfer Family's AS2 capabilities, you can securely exchange AS2 messages at scale while maintaining compliance and interoperability with your trading partners.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1049184,
          "date": "Sat 21 Oct 2023 01:41",
          "username": "thanhnv142",
          "content": "D is ok",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 962734,
          "date": "Tue 25 Jul 2023 15:02",
          "username": "hsinchang",
          "content": "its own IdP -> Lambda",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 907470,
          "date": "Fri 26 May 2023 17:24",
          "username": "dydzah",
          "content": "https://docs.aws.amazon.com/transfer/latest/userguide/custom-identity-provider-users.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 904578,
          "date": "Tue 23 May 2023 07:18",
          "username": "examtopictempacc",
          "content": "C is correct. AWS Transfer Family supports the AS2 protocol, which is required by the company=E2=80=8B. Also, AWS Lambda can be used to authenticate users with the company's IdP, which meets the company's requirement.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 902624,
          "date": "Sat 20 May 2023 16:21",
          "username": "EA100",
          "content": "Answer - D<br>AS2 is a widely used protocol for secure and reliable data transfer. In this scenario, the company wants to transfer data using the AS2 protocol and authenticate application users using their own identity provider (IdP). AWS Storage Gateway provides a hybrid cloud storage solution that enables data transfer between on-premises environments and AWS.<br><br>By using AWS Storage Gateway, you can set up a gateway that supports the AS2 protocol for data transfer. Additionally, you can configure authentication using an Amazon Cognito identity pool. Amazon Cognito provides a comprehensive authentication and user management service that integrates with various identity providers, including your own IdP.<br><br>Therefore, Option D is the correct solution as it leverages AWS Storage Gateway for AS2 data transfer and allows authentication using an Amazon Cognito identity pool integrated with the company's IdP.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>AWS Transfer Family also support AS2</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 995785,
          "date": "Fri 01 Sep 2023 09:12",
          "username": "deechean",
          "content": "AWS Transfer Family also support AS2",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 902262,
          "date": "Sat 20 May 2023 01:24",
          "username": "hiroohiroo",
          "content": "https://repost.aws/articles/ARo2ihKKThT2Cue5j6yVUgsQ/articles/ARo2ihKKThT2Cue5j6yVUgsQ/aws-transfer-family-announces-support-for-sending-as2-messages-over-https?",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 901546,
          "date": "Fri 19 May 2023 00:56",
          "username": "omoakin",
          "content": "C is correct<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This is a new Qtn n AS2 is newly supported by AWS Transfer family.....good timing to know ur stuffs.</li><li>Option D looks the better option because it is more secure, scalable, cost-effective, and easy to use than option C.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 901550,
          "date": "Fri 19 May 2023 01:07",
          "username": "omoakin",
          "content": "This is a new Qtn n AS2 is newly supported by AWS Transfer family.....good timing to know ur stuffs.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 902187,
          "date": "Fri 19 May 2023 20:57",
          "username": "nosense",
          "content": "Option D looks the better option because it is more secure, scalable, cost-effective, and easy to use than option C.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 901274,
          "date": "Thu 18 May 2023 16:05",
          "username": "cloudenthusiast",
          "content": "AWS Storage Gateway supports the AS2 protocol for transferring data. By using AWS Storage Gateway, the company can integrate its own IdP authentication by creating an Amazon Cognito identity pool. Amazon Cognito provides user authentication and authorization capabilities, allowing the company to authenticate application users using its own IdP.<br><br>AWS Transfer Family does not currently support the AS2 protocol. AS2 is a specific protocol used for secure and reliable data transfer, often used in business-to-business (B2B) scenarios. In this case, option C, which suggests using AWS Transfer Family, would not meet the requirement of using the AS2 protocol.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>AWS Transfer Family now supports the Applicability Statement 2 (AS2) protocol, complementing existing protocol support for SFTP, FTPS, and FTP</li><li>This is not a case for storage gateway which is more used for a hybrid like environment. Here, to transfer data, we can think or Datasync or Transfer family and considering AS2 protocol, transfer family looks good</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 901545,
          "date": "Fri 19 May 2023 00:53",
          "username": "omoakin",
          "content": "AWS Transfer Family now supports the Applicability Statement 2 (AS2) protocol, complementing existing protocol support for SFTP, FTPS, and FTP",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901812,
          "date": "Fri 19 May 2023 11:34",
          "username": "y0",
          "content": "This is not a case for storage gateway which is more used for a hybrid like environment. Here, to transfer data, we can think or Datasync or Transfer family and considering AS2 protocol, transfer family looks good",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 900042,
          "date": "Wed 17 May 2023 13:25",
          "username": "Efren",
          "content": "ChatGP<br><br>To meet the requirements of using an identity provider (IdP) for user authentication and the AS2 protocol for data transfer, you can implement the following solution:<br><br>AWS Transfer Family: Use AWS Transfer Family, specifically AWS Transfer for SFTP or FTPS, to handle the data transfer using the AS2 protocol. AWS Transfer for SFTP and FTPS provide fully managed, highly available SFTP and FTPS servers in the AWS Cloud.<br><br>Not sure about Lamdba tho<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Maybe yes<br><br>The Lambda authorizer authenticates the token with the third-party identity provider.</li><li>Also from ChatGPT<br>AWS Transfer Family supports multiple protocols, including AS2, and can be used for data transfer. By utilizing AWS Transfer Family, the company can integrate its own IdP authentication by creating an AWS Lambda function.<br><br>Both options D and C are valid solutions for the given requirements. The choice between them would depend on additional factors such as specific preferences, existing infrastructure, and overall architectural considerations.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 900043,
          "date": "Wed 17 May 2023 13:26",
          "username": "Efren",
          "content": "Maybe yes<br><br>The Lambda authorizer authenticates the token with the third-party identity provider.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Also from ChatGPT<br>AWS Transfer Family supports multiple protocols, including AS2, and can be used for data transfer. By utilizing AWS Transfer Family, the company can integrate its own IdP authentication by creating an AWS Lambda function.<br><br>Both options D and C are valid solutions for the given requirements. The choice between them would depend on additional factors such as specific preferences, existing infrastructure, and overall architectural considerations.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901270,
          "date": "Thu 18 May 2023 16:02",
          "username": "cloudenthusiast",
          "content": "Also from ChatGPT<br>AWS Transfer Family supports multiple protocols, including AS2, and can be used for data transfer. By utilizing AWS Transfer Family, the company can integrate its own IdP authentication by creating an AWS Lambda function.<br><br>Both options D and C are valid solutions for the given requirements. The choice between them would depend on additional factors such as specific preferences, existing infrastructure, and overall architectural considerations.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#458",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a RESTAPI in Amazon API Gateway for a cash payback service. The application requires 1 GB of memory and 2 GB of storage for its computation resources. The application will require that the data is in a relational format.<br><br>Which additional combination ofAWS services will meet these requirements with the LEAST administrative effort? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#458",
          "answers": [
            {
              "choice": "<p>Amazon EC2<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>AWS Lambda<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon RDS<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon DynamoDB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Elastic Kubernetes Services (Amazon EKS)<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 458 discussion",
      "discusstion": [
        {
          "id": 901280,
          "date": "Thu 18 May 2023 16:09",
          "username": "cloudenthusiast",
          "content": "\\\"The application will require that the data is in a relational format\\\" so DynamoDB is out. RDS is the choice. Lambda is severless.",
          "upvote_count": "15",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 1205668,
          "date": "Thu 02 May 2024 16:45",
          "username": "smurfing2k17",
          "content": "Why cant it be AC? We don't know the time of job runs right?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>requirement/ key not stated in stem</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1316352,
          "date": "Fri 22 Nov 2024 15:40",
          "username": "JA2018",
          "content": "requirement/ key not stated in stem",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 924832,
          "date": "Fri 16 Jun 2023 06:08",
          "username": "TariqKipkemei",
          "content": "AWS Lambda and Amazon RDS",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 913913,
          "date": "Sat 03 Jun 2023 22:29",
          "username": "handsonlabsaws",
          "content": "\\\"2 GB of storage for its COMPUTATION resources\\\" the maximum for Lambda is 512MB.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Lambda now supports upto 10GB of memory</li><li>I thought the same but seems like you can go all the way to 10gb. 512mb is the free tier<br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-ephemeral-storage</li><li>At first I was thinking the same. But the computation memery for the lambda function is 1gb not 2gb. Hence. if you go to basic settings when you create the lambda function you can sellect a in the memori settings the 1024 MB (1Gb) and that solve the problem.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 990522,
          "date": "Sat 26 Aug 2023 06:42",
          "username": "PLN6302",
          "content": "Lambda now supports upto 10GB of memory",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 966765,
          "date": "Sun 30 Jul 2023 02:56",
          "username": "Kp88",
          "content": "I thought the same but seems like you can go all the way to 10gb. 512mb is the free tier<br>https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-ephemeral-storage",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 921552,
          "date": "Mon 12 Jun 2023 17:27",
          "username": "r3mo",
          "content": "At first I was thinking the same. But the computation memery for the lambda function is 1gb not 2gb. Hence. if you go to basic settings when you create the lambda function you can sellect a in the memori settings the 1024 MB (1Gb) and that solve the problem.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 900045,
          "date": "Wed 17 May 2023 13:28",
          "username": "Efren",
          "content": "Relational Data RDS and computing for Lambda",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 899414,
          "date": "Tue 16 May 2023 19:16",
          "username": "nosense",
          "content": "bc for me",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#459",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations to run workloads within multiple AWS accounts. A tagging policy adds department tags to AWS resources when the company creates tags.<br><br>An accounting team needs to determine spending on Amazon EC2 consumption. The accounting team must determine which departments are responsible for the costs regardless ofAWS account. The accounting team has access to AWS Cost Explorer for all AWS accounts within the organization and needs to access all reports from Cost Explorer.<br><br>Which solution meets these requirements in the MOST operationally efficient way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#459",
          "answers": [
            {
              "choice": "<p>From the Organizations management account billing console, activate a user-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>From the Organizations management account billing console, activate an AWS-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>From the Organizations member account billing console, activate a user-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by the tag name, and filter by EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>From the Organizations member account billing console, activate an AWS-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 459 discussion",
      "discusstion": [
        {
          "id": 901289,
          "date": "Sat 18 Nov 2023 17:19",
          "username": "cloudenthusiast",
          "content": "By activating a user-defined cost allocation tag named \\\"department\\\" and creating a cost report in Cost Explorer that groups by the tag name and filters by EC2, the accounting team will be able to track and attribute costs to specific departments across all AWS accounts within the organization. This approach allows for consistent cost allocation and reporting regardless of the AWS account structure.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 904846,
          "date": "Thu 23 Nov 2023 14:32",
          "username": "luisgu",
          "content": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/custom-tags.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1116173,
          "date": "Sun 07 Jul 2024 21:17",
          "username": "awsgeek75",
          "content": "Management not user.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 989135,
          "date": "Sat 24 Feb 2024 14:37",
          "username": "Guru4Cloud",
          "content": "From the Organizations management account billing console, activate a user-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 924833,
          "date": "Sat 16 Dec 2023 07:12",
          "username": "TariqKipkemei",
          "content": "From the Organizations management account billing console, activate a user-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 902260,
          "date": "Mon 20 Nov 2023 02:19",
          "username": "hiroohiroo",
          "content": "https://docs.aws.amazon.com/ja_jp/awsaccountbilling/latest/aboutv2/activating-tags.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 899438,
          "date": "Thu 16 Nov 2023 20:33",
          "username": "nosense",
          "content": "a for me",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#460",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to securely exchange data between its software as a service (SaaS) application Salesforce account and Amazon S3. The company must encrypt the data at rest by using AWS Key Management Service (AWS KMS) customer managed keys (CMKs). The company must also encrypt the data in transit. The company has enabled API access for the Salesforce account.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#460",
          "answers": [
            {
              "choice": "<p>Create AWS Lambda functions to transfer the data securely from Salesforce to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Step Functions workflow. Define the task to transfer the data securely from Salesforce to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create Amazon AppFlow flows to transfer the data securely from Salesforce to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a custom connector for Salesforce to transfer the data securely from Salesforce to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 460 discussion",
      "discusstion": [
        {
          "id": 901292,
          "date": "Thu 18 May 2023 16:22",
          "username": "cloudenthusiast",
          "content": "Amazon AppFlow is a fully managed integration service that allows you to securely transfer data between different SaaS applications and AWS services. It provides built-in encryption options and supports encryption in transit using SSL/TLS protocols. With AppFlow, you can configure the data transfer flow from Salesforce to Amazon S3, ensuring data encryption at rest by utilizing AWS KMS CMKs.",
          "upvote_count": "15",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 989082,
          "date": "Thu 24 Aug 2023 12:28",
          "username": "Guru4Cloud",
          "content": "=C2=B0 Amazon AppFlow can securely transfer data between Salesforce and Amazon S3.<br>=C2=B0AppFlow supports encrypting data at rest in S3 using KMS CMKs.<br>=C2=B0AppFlow supports encrypting data in transit using HTTPS/TLS.<br>=C2=B0 AppFlow provides built-in support and templates for Salesforce and S3, requiring less custom configuration than solutions like Lambda, Step Functions, or custom connectors.<br>=C2=B0 So Amazon AppFlow is the easiest way to meet all the requirements of securely transferring data between Salesforce and S3 with encryption at rest and in transit.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1261107,
          "date": "Mon 05 Aug 2024 17:55",
          "username": "1e22522",
          "content": "i do like myself some appflow flow",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1191357,
          "date": "Mon 08 Apr 2024 06:35",
          "username": "zinabu",
          "content": "SAASaws appflow",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1117659,
          "date": "Tue 09 Jan 2024 17:15",
          "username": "cvoiceip",
          "content": "Ans : C<br>Salesforce --------> Amazon AppFlow -----> S3",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 962740,
          "date": "Tue 25 Jul 2023 15:07",
          "username": "hsinchang",
          "content": "securely transfer data between Software-as-a-Service (SaaS) applications and AWS -> AppFlow",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 924837,
          "date": "Fri 16 Jun 2023 06:14",
          "username": "TariqKipkemei",
          "content": "With Amazon AppFlow automate bi-directional data flows between SaaS applications and AWS services in just a few clicks",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 915453,
          "date": "Mon 05 Jun 2023 14:56",
          "username": "DrWatson",
          "content": "https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914276,
          "date": "Sun 04 Jun 2023 11:05",
          "username": "Abrar2022",
          "content": "All you need to know is that AWS AppFlow securely transfers data between different SaaS applications and AWS services",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 902259,
          "date": "Sat 20 May 2023 01:16",
          "username": "hiroohiroo",
          "content": "https://docs.aws.amazon.com/appflow/latest/userguide/salesforce.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 900048,
          "date": "Wed 17 May 2023 13:31",
          "username": "Efren",
          "content": "Saas with another service, AppFlow",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#461",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a mobile gaming app in a single AWS Region. The app runs on multiple Amazon EC2 instances in an Auto Scaling group. The company stores the app data in Amazon DynamoDB. The app communicates by using TCP traffic and UDP traffic between the users and the servers. The application will be used globally. The company wants to ensure the lowest possible latency for all users.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#461",
          "answers": [
            {
              "choice": "<p>Use AWS Global Accelerator to create an accelerator. Create an Application Load Balancer (ALB) behind an accelerator endpoint that uses Global Accelerator integration and listening on the TCP and UDP ports. Update the Auto Scaling group to register instances on the ALB.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Global Accelerator to create an accelerator. Create a Network Load Balancer (NLB) behind an accelerator endpoint that uses Global Accelerator integration and listening on the TCP and UDP ports. Update the Auto Scaling group to register instances on the NLB.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon CloudFront content delivery network (CDN) endpoint. Create a Network Load Balancer (NLB) behind the endpoint and listening on the TCP and UDP ports. Update the Auto Scaling group to register instances on the NLB. Update CloudFront to use the NLB as the origin.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon CloudFront content delivery network (CDN) endpoint. Create an Application Load Balancer (ALB) behind the endpoint and listening on the TCP and UDP ports. Update the Auto Scaling group to register instances on the ALB. Update CloudFront to use the ALB as the origin.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 461 discussion",
      "discusstion": [
        {
          "id": 1197110,
          "date": "Thu 17 Oct 2024 10:58",
          "username": "sandordini",
          "content": "Mobile gaming, UDP > AWS Global Accelarator + NLB",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1191360,
          "date": "Tue 08 Oct 2024 06:39",
          "username": "zinabu",
          "content": "TCP/UDP/IP based communication with server NLB<br>for global low latency communication if IP/udp/tCP basedaws global accelarator",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1099095,
          "date": "Mon 17 Jun 2024 17:00",
          "username": "Mikado211",
          "content": "UDPNLB<br>NLB can't be used with Cloudfront, so we have to play with AWS Global accelerator",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 989080,
          "date": "Sat 24 Feb 2024 13:25",
          "username": "Guru4Cloud",
          "content": "Use AWS Global Accelerator to create an accelerator. Create a Network Load Balancer (NLB) behind an accelerator endpoint that uses Global Accelerator integration and listening on the TCP and UDP ports. Update the Auto Scaling group to register instances on the NLB",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 928172,
          "date": "Wed 20 Dec 2023 08:24",
          "username": "TariqKipkemei",
          "content": "TCP and UDPglobal accelerator and Network Load Balancer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 915220,
          "date": "Tue 05 Dec 2023 11:31",
          "username": "antropaws",
          "content": "Clearly B.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 903581,
          "date": "Wed 22 Nov 2023 02:55",
          "username": "eddie5049",
          "content": "NLB + Accelerator",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 902258,
          "date": "Mon 20 Nov 2023 02:14",
          "username": "hiroohiroo",
          "content": "AWS Global Accelerator+NLB",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 900581,
          "date": "Sat 18 Nov 2023 03:08",
          "username": "Efren",
          "content": "UDP, Global Accelerator plus NLB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 899470,
          "date": "Thu 16 Nov 2023 21:01",
          "username": "nosense",
          "content": "AWS Global Accelerator is a better solution for the mobile gaming app than CloudFront",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#462",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that processes customer orders. The company hosts the application on an Amazon EC2 instance that saves the orders to an Amazon Aurora database. Occasionally when traffic is high the workload does not process orders fast enough.<br><br>What should a solutions architect do to write the orders reliably to the database as quickly as possible?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#462",
          "answers": [
            {
              "choice": "<p>Increase the instance size of the EC2 instance when traffic is high. Write orders to Amazon Simple Notification Service (Amazon SNS). Subscribe the database endpoint to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Write orders to an Amazon Simple Queue Service (Amazon SQS) queue. Use EC2 instances in an Auto Scaling group behind an Application Load Balancer to read from the SQS queue and process orders into the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Write orders to Amazon Simple Notification Service (Amazon SNS). Subscribe the database endpoint to the SNS topic. Use EC2 instances in an Auto Scaling group behind an Application Load Balancer to read from the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Write orders to an Amazon Simple Queue Service (Amazon SQS) queue when the EC2 instance reaches CPU threshold limits. Use scheduled scaling of EC2 instances in an Auto Scaling group behind an Application Load Balancer to read from the SQS queue and process orders into the database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 462 discussion",
      "discusstion": [
        {
          "id": 901295,
          "date": "Sat 18 Nov 2023 17:28",
          "username": "cloudenthusiast",
          "content": "By decoupling the write operation from the processing operation using SQS, you ensure that the orders are reliably stored in the queue, regardless of the processing capacity of the EC2 instances. This allows the processing to be performed at a scalable rate based on the available EC2 instances, improving the overall reliability and speed of order processing.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1124544,
          "date": "Tue 16 Jul 2024 22:26",
          "username": "omarshaban",
          "content": "IN MY EXAM",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 989079,
          "date": "Sat 24 Feb 2024 13:24",
          "username": "Guru4Cloud",
          "content": "Decoupling the order processing from the application using Amazon SQS and leveraging Auto Scaling to handle the processing of orders based on the workload in the SQS queue is indeed the most efficient and scalable approach. This architecture addresses both reliability and performance concerns during traffic spikes.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 928173,
          "date": "Wed 20 Dec 2023 08:27",
          "username": "TariqKipkemei",
          "content": "Write orders to an Amazon Simple Queue Service (Amazon SQS) queue. Use EC2 instances in an Auto Scaling group behind an Application Load Balancer to read from the SQS queue and process orders into the database.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 915222,
          "date": "Tue 05 Dec 2023 11:33",
          "username": "antropaws",
          "content": "100% B.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 910648,
          "date": "Thu 30 Nov 2023 02:25",
          "username": "omoakin",
          "content": "BBBBBBBBBB",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#463",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An IoT company is releasing a mattress that has sensors to collect data about a user's sleep. The sensors will send data to an Amazon S3 bucket. The sensors collect approximately 2 MB of data every night for each mattress. The company must process and summarize the data for each mattress. The results need to be available as soon as possible. Data processing will require 1 GB of memory and will finish within 30 seconds.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#463",
          "answers": [
            {
              "choice": "<p>Use AWS Glue with a Scala job<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EMR with an Apache Spark script<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda with a Python script<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Glue with a PySpark job<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 463 discussion",
      "discusstion": [
        {
          "id": 901297,
          "date": "Sat 18 Nov 2023 17:30",
          "username": "cloudenthusiast",
          "content": "AWS Lambda charges you based on the number of invocations and the execution time of your function. Since the data processing job is relatively small (2 MB of data), Lambda is a cost-effective choice. You only pay for the actual usage without the need to provision and maintain infrastructure.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>but the question states \\\"Data processing will require 1 GB of memory and will finish within 30 seconds.\\\" so it can't be C as Lambda support maximum 512M</li><li>Lambda can support upto 10 GB, But 512M is under free tier</li><li>C is valid.<br>Lambda quotas:<br>Memory - 128 MB to 10,240 MB, in 1-MB increments.<br><br>Note: Lambda allocates CPU power in proportion to the amount of memory configured. You can increase or decrease the memory and CPU power allocated to your function using the Memory (MB) setting. At 1,769 MB, a function has the equivalent of one vCPU.<br><br>Function timeout 900 seconds (15 minutes)<br><br>4 KB, for all environment variables associated with the function, in aggregate<br>https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 928020,
          "date": "Wed 20 Dec 2023 02:19",
          "username": "joechen2023",
          "content": "but the question states \\\"Data processing will require 1 GB of memory and will finish within 30 seconds.\\\" so it can't be C as Lambda support maximum 512M<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Lambda can support upto 10 GB, But 512M is under free tier</li><li>C is valid.<br>Lambda quotas:<br>Memory - 128 MB to 10,240 MB, in 1-MB increments.<br><br>Note: Lambda allocates CPU power in proportion to the amount of memory configured. You can increase or decrease the memory and CPU power allocated to your function using the Memory (MB) setting. At 1,769 MB, a function has the equivalent of one vCPU.<br><br>Function timeout 900 seconds (15 minutes)<br><br>4 KB, for all environment variables associated with the function, in aggregate<br>https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1146021,
          "date": "Sat 10 Aug 2024 09:50",
          "username": "BillaRanga",
          "content": "Lambda can support upto 10 GB, But 512M is under free tier",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 965822,
          "date": "Sun 28 Jan 2024 23:47",
          "username": "nilandd44gg",
          "content": "C is valid.<br>Lambda quotas:<br>Memory - 128 MB to 10,240 MB, in 1-MB increments.<br><br>Note: Lambda allocates CPU power in proportion to the amount of memory configured. You can increase or decrease the memory and CPU power allocated to your function using the Memory (MB) setting. At 1,769 MB, a function has the equivalent of one vCPU.<br><br>Function timeout 900 seconds (15 minutes)<br><br>4 KB, for all environment variables associated with the function, in aggregate<br>https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 988611,
          "date": "Fri 23 Feb 2024 21:49",
          "username": "Guru4Cloud",
          "content": "The data processing is lightweight, only requiring 1 GB memory and finishing in under 30 seconds. Lambda is designed for short, transient workloads like this.<br>Lambda scales automatically, invoking the function as needed when new data arrives. No servers to manage.<br>Lambda has a very low cost. You only pay for the compute time used to run the function, billed in 100ms increments. Much cheaper than provisioning EMR or Glue.<br>Processing can begin as soon as new data hits the S3 bucket by triggering the Lambda function. Provides low latency.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1061897,
          "date": "Sat 04 May 2024 04:38",
          "username": "Chiquitabandita",
          "content": "I understand C is a common answer \\\"throw Lambda\\\" seems to be a common theme for questions that need processing under 15 minutes for the test.but in reality, can the other solutions be viable options as well?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That's the point here, technically all the options are good and will work, but since we are on a small amount of data Lambda will be the cheapest one, usually Glue or EMR will be kept for a big amount of data.<br><br>Here is a topic where people did a comparison in comments : https://www.reddit.com/r/aws/comments/9umxv1/aws_glue_vs_lambda_costbenefit/</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1092617,
          "date": "Mon 10 Jun 2024 15:56",
          "username": "Mikado211",
          "content": "That's the point here, technically all the options are good and will work, but since we are on a small amount of data Lambda will be the cheapest one, usually Glue or EMR will be kept for a big amount of data.<br><br>Here is a topic where people did a comparison in comments : https://www.reddit.com/r/aws/comments/9umxv1/aws_glue_vs_lambda_costbenefit/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1060316,
          "date": "Thu 02 May 2024 06:36",
          "username": "TariqKipkemei",
          "content": "\\\"processing will require 1 GB of memory and will finish within 30 seconds\\\", perfect for AWS Lambda.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 915226,
          "date": "Tue 05 Dec 2023 11:35",
          "username": "antropaws",
          "content": "I reckon C, but I would consider other well founded options.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 899893,
          "date": "Fri 17 Nov 2023 11:56",
          "username": "nosense",
          "content": "c anyway the MOST cost-effectively",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#464",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an online shopping application that stores all orders in an Amazon RDS for PostgreSQL Single-AZ DB instance. Management wants to eliminate single points of failure and has asked a solutions architect to recommend an approach to minimize database downtime without requiring any changes to the application code.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#464",
          "answers": [
            {
              "choice": "<p>Convert the existing database instance to a Multi-AZ deployment by modifying the database instance and specifying the Multi-AZ option.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new RDS Multi-AZ deployment. Take a snapshot of the current RDS instance and restore the new Multi-AZ deployment with the snapshot.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a read-only replica of the PostgreSQL database in another Availability Zone. Use Amazon Route 53 weighted record sets to distribute requests across the databases.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Place the RDS for PostgreSQL database in an Amazon EC2 Auto Scaling group with a minimum group size of two. Use Amazon Route 53 weighted record sets to distribute requests across instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 464 discussion",
      "discusstion": [
        {
          "id": 988598,
          "date": "Fri 23 Feb 2024 21:41",
          "username": "Guru4Cloud",
          "content": "A. Convert the existing database instance to a Multi-AZ deployment by modifying the database instance and specifying the Multi-AZ option",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 929007,
          "date": "Thu 21 Dec 2023 06:23",
          "username": "TariqKipkemei",
          "content": "Eliminate single points of failureMulti-AZ deployment",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1126663,
          "date": "Fri 19 Jul 2024 12:36",
          "username": "awsgeek75",
          "content": "A is correct but reason need to be clarified:<br>https://aws.amazon.com/blogs/database/best-practices-for-converting-a-single-az-amazon-rds-instance-to-a-multi-az-instance/<br><br>The instance doesn't automatically convert to Multi-AZ immediately. By default it will convert at next maintenance window but you can convert it immediately. Compared to B this is much better. CD are too many changes overall so unsuitable.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 915237,
          "date": "Tue 05 Dec 2023 11:41",
          "username": "antropaws",
          "content": "A) https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html#Concepts.MultiAZ.Migrating",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 914289,
          "date": "Mon 04 Dec 2023 12:17",
          "username": "Abrar2022",
          "content": "\\\"minimize database downtime\\\" so why create a new DB just modify the existing one so no time is wasted.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 901300,
          "date": "Sat 18 Nov 2023 17:34",
          "username": "cloudenthusiast",
          "content": "Compared to other solutions that involve creating new instances, restoring snapshots, or setting up replication manually, converting to a Multi-AZ deployment is a simpler and more streamlined approach with lower overhead.<br><br>Overall, option A offers a cost-effective and efficient way to minimize database downtime without requiring significant changes or additional complexities.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 900583,
          "date": "Sat 18 Nov 2023 03:11",
          "username": "Efren",
          "content": "A for HA, but also read replica can convert itself to master if the master is down... so not sure if C?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Sorry, the Route 53 doesnt make sense to sent requests to RR , what if is a write?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 900584,
          "date": "Sat 18 Nov 2023 03:11",
          "username": "Efren",
          "content": "Sorry, the Route 53 doesnt make sense to sent requests to RR , what if is a write?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 899477,
          "date": "Thu 16 Nov 2023 21:10",
          "username": "nosense",
          "content": "i guess aa",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#465",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing an application to support customer demands. The company wants to deploy the application on multiple Amazon EC2 Nitro-based instances within the same Availability Zone. The company also wants to give the application the ability to write to multiple block storage volumes in multiple EC2 Nitro-based instances simultaneously to achieve higher application availability.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#465",
          "answers": [
            {
              "choice": "<p>Use General Purpose SSD (gp3) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Throughput Optimized HDD (st1) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Provisioned IOPS SSD (io2) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use General Purpose SSD (gp2) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 465 discussion",
      "discusstion": [
        {
          "id": 1063201,
          "date": "Sun 05 May 2024 19:22",
          "username": "potomac",
          "content": "Multi-Attach is supported exclusively on Provisioned IOPS SSD (io1 and io2) volumes.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1126666,
          "date": "Fri 19 Jul 2024 12:38",
          "username": "awsgeek75",
          "content": "hdd<gp2<gp3<io2",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1105847,
          "date": "Wed 26 Jun 2024 09:15",
          "username": "master9",
          "content": "AWS IO2 does support Multi-Attach. Multi-Attach allows you to share access to an EBS data volume between up to 16 Nitro-based EC2 instances within the same Availability Zone. Each attached instance has full read and write permission to the shared volume. This feature is intended to make it easier to achieve higher application availability for customers that want to deploy applications that manage storage consistency from multiple writers in shared storage infrastructure. However, please note that Multi-Attach on io2 is available in certain regions only.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 988593,
          "date": "Fri 23 Feb 2024 21:35",
          "username": "Guru4Cloud",
          "content": "C. Use Provisioned IOPS SSD (io2) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 929013,
          "date": "Thu 21 Dec 2023 06:31",
          "username": "TariqKipkemei",
          "content": "Multi-Attach is supported exclusively on Provisioned IOPS SSD (io1 and io2) volumes.<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html#:~:textMulti%2DAttach%20is%20supported%20exclusively%20on%20Provisioned%20IOPS%20SSD%20(io1%20and%20io2)%20volumes.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 923574,
          "date": "Fri 15 Dec 2023 00:18",
          "username": "Axeashes",
          "content": "Multi-Attach is supported exclusively on Provisioned IOPS SSD (io1 and io2) volumes.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 918319,
          "date": "Fri 08 Dec 2023 16:28",
          "username": "Uzi_m",
          "content": "The correct answer is A.<br>Currently, Multi Attach EBS feature is supported by gp3 volumes also.<br>Multi-Attach is supported for certain EBS volume types, including io1, io2, gp3, st1, and sc1 volumes.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No , Read this --&gt; https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html#considerations</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 966768,
          "date": "Tue 30 Jan 2024 04:12",
          "username": "Kp88",
          "content": "No , Read this --> https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html#considerations",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 915168,
          "date": "Tue 05 Dec 2023 10:24",
          "username": "AshishRocks",
          "content": "Answer should be D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html#considerations</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 966770,
          "date": "Tue 30 Jan 2024 04:12",
          "username": "Kp88",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html#considerations",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 915167,
          "date": "Tue 05 Dec 2023 10:23",
          "username": "AshishRocks",
          "content": "By ChatGPT - Create General Purpose SSD (gp2) volumes: Provision multiple gp2 volumes with the required capacity for your application.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html#considerations</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 966769,
          "date": "Tue 30 Jan 2024 04:12",
          "username": "Kp88",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html#considerations",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 915164,
          "date": "Tue 05 Dec 2023 10:22",
          "username": "AshishRocks",
          "content": "Multi-Attach does not support Provisioned IOPS SSD (io2) volumes. Multi-Attach is currently available only for General Purpose SSD (gp2), Throughput Optimized HDD (st1), and Cold HDD (sc1) EBS volumes.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 914292,
          "date": "Mon 04 Dec 2023 12:23",
          "username": "Abrar2022",
          "content": "Multi-Attach is supported exclusively on Provisioned IOPS SSD (io1 or io2) volumes.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 909595,
          "date": "Wed 29 Nov 2023 20:39",
          "username": "elmogy",
          "content": "only io1/io2 supports Multi-Attach<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Multi-Attach is supported for certain EBS volume types, including io1, io2, gp3, st1, and sc1 volumes.</li><li>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html#considerations</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 918318,
          "date": "Fri 08 Dec 2023 16:26",
          "username": "Uzi_m",
          "content": "Multi-Attach is supported for certain EBS volume types, including io1, io2, gp3, st1, and sc1 volumes.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html#considerations</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 966771,
          "date": "Tue 30 Jan 2024 04:17",
          "username": "Kp88",
          "content": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html#considerations",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 904607,
          "date": "Thu 23 Nov 2023 08:53",
          "username": "examtopictempacc",
          "content": "only io1/io2 supports Multi-Attach",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 904157,
          "date": "Wed 22 Nov 2023 18:03",
          "username": "VIad",
          "content": "Option D suggests using General Purpose SSD (gp2) EBS volumes with Amazon EBS Multi-Attach. While gp2 volumes support multi-attach, gp3 volumes offer a more cost-effective solution with enhanced performance characteristics.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I'm sorry :<br><br>Multi-Attach enabled volumes can be attached to up to 16 instances built on the Nitro System that are in the same Availability Zone. Multi-Attach is supported exclusively on Provisioned IOPS SSD (io1 or io2) volumes.</li><li>The answer is C:</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 904160,
          "date": "Wed 22 Nov 2023 18:06",
          "username": "VIad",
          "content": "I'm sorry :<br><br>Multi-Attach enabled volumes can be attached to up to 16 instances built on the Nitro System that are in the same Availability Zone. Multi-Attach is supported exclusively on Provisioned IOPS SSD (io1 or io2) volumes.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The answer is C:</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 904161,
          "date": "Wed 22 Nov 2023 18:07",
          "username": "VIad",
          "content": "The answer is C:",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 902885,
          "date": "Tue 21 Nov 2023 07:42",
          "username": "EA100",
          "content": "Answer - C<br>C. Use Provisioned IOPS SSD (io2) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach.<br><br>While both option C and option D can support Amazon EBS Multi-Attach, using Provisioned IOPS SSD (io2) EBS volumes provides higher performance and lower latency compared to General Purpose SSD (gp2) volumes. This makes io2 volumes better suited for demanding and mission-critical applications where performance is crucial.<br><br>If the goal is to achieve higher application availability and ensure optimal performance, using Provisioned IOPS SSD (io2) EBS volumes with Multi-Attach will provide the best results.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 902193,
          "date": "Sun 19 Nov 2023 22:05",
          "username": "nosense",
          "content": "c is right<br>Amazon EBS Multi-Attach enables you to attach a single Provisioned IOPS SSD (io1 or io2) volume to multiple instances that are in the same Availability Zone.<br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html<br>nothing about gp",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 901302,
          "date": "Sat 18 Nov 2023 17:40",
          "username": "cloudenthusiast",
          "content": "Given that the scenario does not mention any specific requirements for high-performance or specific IOPS needs, using General Purpose SSD (gp2) EBS volumes with Amazon EBS Multi-Attach (option D) is typically the more cost-effective and suitable choice. General Purpose SSD (gp2) volumes provide a good balance of performance and cost, making them well-suited for general-purpose workloads.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>the question has not mentioned anything about cost-effective solution.<br>only io1/io2 supports Multi-Attach<br><br>plus fyi, gp3 is the one gives a good balance of performance and cost. so gp2 is wrong in every way</li><li>I agree<br>General Purpose SSD (gp2) volumes are the most common volume type. They were designed to be a cost-effective storage option for a wide variety of workloads. Gp2 volumes cover system volumes, dev and test environments, and various low-latency apps.</li><li>gp2 - IOPS 16000<br>Nitro - IOPS 64000 - supported by io2. C is correct</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 909592,
          "date": "Wed 29 Nov 2023 20:39",
          "username": "elmogy",
          "content": "the question has not mentioned anything about cost-effective solution.<br>only io1/io2 supports Multi-Attach<br><br>plus fyi, gp3 is the one gives a good balance of performance and cost. so gp2 is wrong in every way",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901570,
          "date": "Sun 19 Nov 2023 03:07",
          "username": "omoakin",
          "content": "I agree<br>General Purpose SSD (gp2) volumes are the most common volume type. They were designed to be a cost-effective storage option for a wide variety of workloads. Gp2 volumes cover system volumes, dev and test environments, and various low-latency apps.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 901799,
          "date": "Sun 19 Nov 2023 12:10",
          "username": "y0",
          "content": "gp2 - IOPS 16000<br>Nitro - IOPS 64000 - supported by io2. C is correct",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#466",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company designed a stateless two-tier application that uses Amazon EC2 in a single Availability Zone and an Amazon RDS Multi-AZ DB instance. New company management wants to ensure the application is highly available.<br><br>What should a solutions architect do to meet this requirement?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#466",
          "answers": [
            {
              "choice": "<p>Configure the application to use Multi-AZ EC2 Auto Scaling and create an Application Load Balancer<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the application to take snapshots of the EC2 instances and send them to a different AWS Region<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure the application to use Amazon Route 53 latency-based routing to feed requests to the application<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Route 53 rules to handle incoming requests and create a Multi-AZ Application Load Balancer<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 466 discussion",
      "discusstion": [
        {
          "id": 899480,
          "date": "Thu 16 May 2024 20:15",
          "username": "nosense",
          "content": "it's A",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 901303,
          "date": "Sat 18 May 2024 16:42",
          "username": "cloudenthusiast",
          "content": "By combining Multi-AZ EC2 Auto Scaling and an Application Load Balancer, you achieve high availability for the EC2 instances hosting your stateless two-tier application.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 988587,
          "date": "Fri 23 Aug 2024 20:28",
          "username": "Guru4Cloud",
          "content": "A. Configure the application to use Multi-AZ EC2 Auto Scaling and create an Application Load Balancer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 929017,
          "date": "Fri 21 Jun 2024 05:36",
          "username": "TariqKipkemei",
          "content": "Highly availableMulti-AZ EC2 Auto Scaling and Application Load Balancer.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 915241,
          "date": "Wed 05 Jun 2024 10:48",
          "username": "antropaws",
          "content": "Most likely A.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#467",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses AWS Organizations. A member account has purchased a Compute Savings Plan. Because of changes in the workloads inside the member account, the account no longer receives the full benefit of the Compute Savings Plan commitment. The company uses less than 50% of its purchased compute power.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#467",
          "answers": [
            {
              "choice": "<p>Turn on discount sharing from the Billing Preferences section of the account console in the member account that purchased the Compute Savings Plan.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Turn on discount sharing from the Billing Preferences section of the account console in the company's Organizations management account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Migrate additional compute workloads from another AWS account to the account that has the Compute Savings Plan.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Sell the excess Savings Plan commitment in the Reserved Instance Marketplace.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 467 discussion",
      "discusstion": [
        {
          "id": 900202,
          "date": "Wed 17 May 2023 15:39",
          "username": "norris81",
          "content": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html<br><br>Sign in to the AWS Management Console and open the AWS Billing console at https://console.aws.amazon.com/billing/<br><br>.<br>Note<br><br>Ensure you're logged in to the management account of your AWS Organizations.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1018169,
          "date": "Tue 26 Sep 2023 22:29",
          "username": "baba365",
          "content": "So what exactly is the question?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>It's an English test on complete the sentence...</li><li>What to do</li></ul>",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 1126678,
          "date": "Fri 19 Jan 2024 13:51",
          "username": "awsgeek75",
          "content": "It's an English test on complete the sentence...",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1110682,
          "date": "Sun 31 Dec 2023 16:41",
          "username": "pentium75",
          "content": "What to do",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1299182,
          "date": "Thu 17 Oct 2024 13:30",
          "username": "jingen11",
          "content": "I dont think there is a way for us to sell excess Savings plan. Only Selling Reserved instances is possible in marketplace<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html#ri-turn-on-process</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1299184,
          "date": "Thu 17 Oct 2024 13:31",
          "username": "jingen11",
          "content": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html#ri-turn-on-process",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1156408,
          "date": "Thu 22 Feb 2024 15:01",
          "username": "Stranko",
          "content": "I'd go with D, due to \\\"The company uses less than 50% of its purchased compute power\\\". Like, why are you sharing it between other accounts of the company, if the company itself doesn't need it? If you provisioned too much you can sell the overprovisioned capacity on the market. I'd understand B if it was about the account using about 50% of the plan and other accounts running similar workloads, but no such thing is stated.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1153277,
          "date": "Sun 18 Feb 2024 13:59",
          "username": "NayeraB",
          "content": "Option E, Take it out of the salary of the guy who made the decision to purchase an entire compute plan without studying the company's needs.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1112567,
          "date": "Wed 03 Jan 2024 07:53",
          "username": "mr123dd",
          "content": "in the question, it does not clarify then number of accounts the company has, if they only has one account, I think it is D,",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111770,
          "date": "Tue 02 Jan 2024 11:09",
          "username": "Mujahid_1",
          "content": "what are you guys doing<br> this section is for discussion not for copy paste",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1110688,
          "date": "Sun 31 Dec 2023 16:44",
          "username": "pentium75",
          "content": "B, it's a generic Compute Savings Plan that can be used for compute workloads in the other accounts.<br><br>A doesn't work, discount sharing must be enabled for all accounts (at least for those that provide and share the discounts).<br><br>C is not possible, there's a reason why the workloads are in different accounts.<br><br>D would be a last resort if there wouldn't be any other workloads in the own organization, but here are.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1012481,
          "date": "Wed 20 Sep 2023 17:55",
          "username": "michalf84",
          "content": "I saw similar question in older exam one can sell on the market unused capacity",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 988582,
          "date": "Wed 23 Aug 2023 20:25",
          "username": "Guru4Cloud",
          "content": "B. Turn on discount sharing from the Billing Preferences section of the account console in the company's Organizations management account<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Bro, no need to copy paste the answer that is already written. Need an explanation, I see that you just copy pasting the potential answers without any explanation in each discussion.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 991614,
          "date": "Sun 27 Aug 2023 20:30",
          "username": "Lx016",
          "content": "Bro, no need to copy paste the answer that is already written. Need an explanation, I see that you just copy pasting the potential answers without any explanation in each discussion.",
          "upvote_count": "26",
          "selected_answers": ""
        },
        {
          "id": 931465,
          "date": "Fri 23 Jun 2023 12:25",
          "username": "live_reply_developers",
          "content": "\\\"For example, you might want to sell Reserved Instances after moving instances to a new AWS Region, changing to a new instance type, ending projects before the term expiration, when your business needs change, or if you have unneeded capacity.\\\"<br><br>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D would make sense if the company wouldn't have other accounts with workloads. Or if it would be EC2 Savings Plans that would not match the instance types in other accounts. But it's a generic Compute Savings Plan that surely can be used in another account. Thus B.</li><li>I am also confused between B and D as the last part of the question \\\"The company uses less than 50% of its purchased compute power.\\\" could imply that the whole company (not just this member account) only uses 50% of the computer power. If they said the member account only uses 50% then it would be clear cut B.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1110686,
          "date": "Sun 31 Dec 2023 16:42",
          "username": "pentium75",
          "content": "D would make sense if the company wouldn't have other accounts with workloads. Or if it would be EC2 Savings Plans that would not match the instance types in other accounts. But it's a generic Compute Savings Plan that surely can be used in another account. Thus B.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I am also confused between B and D as the last part of the question \\\"The company uses less than 50% of its purchased compute power.\\\" could imply that the whole company (not just this member account) only uses 50% of the computer power. If they said the member account only uses 50% then it would be clear cut B.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1126680,
          "date": "Fri 19 Jan 2024 13:54",
          "username": "awsgeek75",
          "content": "I am also confused between B and D as the last part of the question \\\"The company uses less than 50% of its purchased compute power.\\\" could imply that the whole company (not just this member account) only uses 50% of the computer power. If they said the member account only uses 50% then it would be clear cut B.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 929022,
          "date": "Wed 21 Jun 2023 05:53",
          "username": "TariqKipkemei",
          "content": "answer is B.<br><br>https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html#:~:textchoose%20Save.-,Turning%20on%20shared%20reserved%20instances%20and%20Savings%20Plans%20discounts,-You%20can%20use",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914459,
          "date": "Sun 04 Jun 2023 13:11",
          "username": "Felix_br",
          "content": "The company uses less than 50% of its purchased compute power.<br>For this reason i believe D is the best solution : https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 914298,
          "date": "Sun 04 Jun 2023 11:31",
          "username": "Abrar2022",
          "content": "The company Organization's management account can turn on/off shared reserved instances.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901307,
          "date": "Thu 18 May 2023 16:45",
          "username": "cloudenthusiast",
          "content": "To summarize, option C (Migrate additional compute workloads from another AWS account to the account that has the Compute Savings Plan) is a valid solution to address the underutilization of the Compute Savings Plan. However, it involves workload migration and may require careful planning and coordination. Consider the feasibility and impact of migrating workloads before implementing this solution.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 899751,
          "date": "Wed 17 May 2023 07:00",
          "username": "EA100",
          "content": "Answer - C<br>If a member account within AWS Organizations has purchased a Compute Savings Plan",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 899750,
          "date": "Wed 17 May 2023 06:59",
          "username": "EA100",
          "content": "Asnwer - C",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#468",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a microservices application that will provide a search catalog for customers. The company must use REST APIs to present the frontend of the application to users. The REST APIs must access the backend services that the company hosts in containers in private VPC subnets.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#468",
          "answers": [
            {
              "choice": "<p>Design a WebSocket API by using Amazon API Gateway. Host the application in Amazon Elastic Container Service (Amazon ECS) in a private subnet. Create a private VPC link for API Gateway to access Amazon ECS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Design a REST API by using Amazon API Gateway. Host the application in Amazon Elastic Container Service (Amazon ECS) in a private subnet. Create a private VPC link for API Gateway to access Amazon ECS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Design a WebSocket API by using Amazon API Gateway. Host the application in Amazon Elastic Container Service (Amazon ECS) in a private subnet. Create a security group for API Gateway to access Amazon ECS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Design a REST API by using Amazon API Gateway. Host the application in Amazon Elastic Container Service (Amazon ECS) in a private subnet. Create a security group for API Gateway to access Amazon ECS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 468 discussion",
      "discusstion": [
        {
          "id": 901377,
          "date": "Thu 18 May 2023 18:37",
          "username": "cloudenthusiast",
          "content": "REST API with Amazon API Gateway: REST APIs are the appropriate choice for providing the frontend of the microservices application. Amazon API Gateway allows you to design, deploy, and manage REST APIs at scale.<br><br>Amazon ECS in a Private Subnet: Hosting the application in Amazon ECS in a private subnet ensures that the containers are securely deployed within the VPC and not directly exposed to the public internet.<br><br>Private VPC Link: To enable the REST API in API Gateway to access the backend services hosted in Amazon ECS, you can create a private VPC link. This establishes a private network connection between the API Gateway and ECS containers, allowing secure communication without traversing the public internet.",
          "upvote_count": "14",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 946162,
          "date": "Sat 08 Jul 2023 06:28",
          "username": "MNotABot",
          "content": "Question itself says: \\\"The company must use REST APIs\\\", hence WebSocket APIs are not applicable and such options are eliminated straight away.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1283408,
          "date": "Sat 14 Sep 2024 01:37",
          "username": "MatAlves",
          "content": "\\\"VPC links enable you to create private integrations that connect your HTTP API routes to private resources in a VPC, such as Application Load Balancers or Amazon ECS container-based applications.\\\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1251160,
          "date": "Fri 19 Jul 2024 13:43",
          "username": "freedafeng",
          "content": "I think the connection should be from the application to the ECS in the private VPC, instead of from the API Gateway to the ECS in the private VPC. API Gateway only needs to connect to the application...",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1126685,
          "date": "Fri 19 Jan 2024 14:02",
          "username": "awsgeek75",
          "content": "AC are wrong as they are not REST API<br>D, you don't make SG for API Gateway to EC2, you have to make a VPC Link. More details at<br>https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vpc-links.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 988578,
          "date": "Wed 23 Aug 2023 20:21",
          "username": "Guru4Cloud",
          "content": "To allow the REST APIs to securely access the backend, a private VPC link should be created from API Gateway to the ECS containers. A private VPC link provides private connectivity between API Gateway and the VPC without using public IP addresses or requiring an internet gateway/NAT",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 929069,
          "date": "Wed 21 Jun 2023 07:02",
          "username": "Axeashes",
          "content": "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-private-integration.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 929027,
          "date": "Wed 21 Jun 2023 06:00",
          "username": "TariqKipkemei",
          "content": "A VPC link is a resource in Amazon API Gateway that allows for connecting API routes to private resources inside a VPC.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 928259,
          "date": "Tue 20 Jun 2023 10:04",
          "username": "samehpalass",
          "content": "B is the right choice",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 926450,
          "date": "Sun 18 Jun 2023 07:35",
          "username": "Yadav_Sanjay",
          "content": "Why Not D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A security group acts as a firewall for associated EC2 instances, controlling both inbound and outbound traffic at the instance level.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1063210,
          "date": "Sun 05 Nov 2023 20:32",
          "username": "potomac",
          "content": "A security group acts as a firewall for associated EC2 instances, controlling both inbound and outbound traffic at the instance level.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 899486,
          "date": "Tue 16 May 2023 20:25",
          "username": "nosense",
          "content": "b is right, bcs vpc link provided security connection",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#469",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company stores raw collected data in an Amazon S3 bucket. The data is used for several types of analytics on behalf of the company's customers. The type of analytics requested determines the access pattern on the S3 objects.<br><br>The company cannot predict or control the access pattern. The company wants to reduce its S3 costs.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#469",
          "answers": [
            {
              "choice": "<p>Use S3 replication to transition infrequently accessed objects to S3 Standard-Infrequent Access (S3 Standard-IA)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Lifecycle rules to transition objects from S3 Standard to Standard-Infrequent Access (S3 Standard-IA)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Lifecycle rules to transition objects from S3 Standard to S3 Intelligent-Tiering<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Inventory to identify and transition objects that have not been accessed from S3 Standard to S3 Intelligent-Tiering<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 469 discussion",
      "discusstion": [
        {
          "id": 899490,
          "date": "Thu 16 May 2024 20:30",
          "username": "nosense",
          "content": "S3 Inventory can't to move files to another class",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1091240,
          "date": "Sun 08 Dec 2024 19:00",
          "username": "Murtadhaceit",
          "content": "Unpredictable access patternIntelligent-Tiering.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 988568,
          "date": "Fri 23 Aug 2024 20:11",
          "username": "Guru4Cloud",
          "content": "C. Use S3 Lifecycle rules to transition objects from S3 Standard to S3 Intelligent-Tiering",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 929030,
          "date": "Fri 21 Jun 2024 06:04",
          "username": "TariqKipkemei",
          "content": "Cannot predict access patternS3 Intelligent-Tiering.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 900605,
          "date": "Sat 18 May 2024 02:23",
          "username": "Efren",
          "content": "Not known patterns, Intelligent Tier",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#470",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has applications hosted on Amazon EC2 instances with IPv6 addresses. The applications must initiate communications with other external applications using the internet. However the company's security policy states that any external service cannot initiate a connection to the EC2 instances.<br><br>What should a solutions architect recommend to resolve this issue?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#470",
          "answers": [
            {
              "choice": "<p>Create a NAT gateway and make it the destination of the subnet's route table<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an internet gateway and make it the destination of the subnet's route table<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a virtual private gateway and make it the destination of the subnet's route table<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an egress-only internet gateway and make it the destination of the subnet's route table<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 470 discussion",
      "discusstion": [
        {
          "id": 933472,
          "date": "Sun 25 Jun 2023 12:34",
          "username": "wRhlH",
          "content": "For exam,<br>egress-only internet gateway: IPv6<br>NAT gateway: IPv4<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Good stuff.<br><br>\\\"An egress-only internet gateway is for use with IPv6 traffic only. To enable outbound-only internet communication over IPv4, use a NAT gateway instead.\\\"<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html</li><li>This is very helpful, thanks.</li><li>thanks a lot</li></ul>",
          "upvote_count": "53",
          "selected_answers": ""
        },
        {
          "id": 1283409,
          "date": "Sat 14 Sep 2024 01:42",
          "username": "MatAlves",
          "content": "Good stuff.<br><br>\\\"An egress-only internet gateway is for use with IPv6 traffic only. To enable outbound-only internet communication over IPv4, use a NAT gateway instead.\\\"<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1094826,
          "date": "Tue 12 Dec 2023 19:32",
          "username": "b82faaf",
          "content": "This is very helpful, thanks.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1013583,
          "date": "Fri 22 Sep 2023 06:21",
          "username": "RDM10",
          "content": "thanks a lot",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 901381,
          "date": "Thu 18 May 2023 18:43",
          "username": "cloudenthusiast",
          "content": "An egress-only internet gateway (EIGW) is specifically designed for IPv6-only VPCs and provides outbound IPv6 internet access while blocking inbound IPv6 traffic. It satisfies the requirement of preventing external services from initiating connections to the EC2 instances while allowing the instances to initiate outbound communications.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Since the company's security policy explicitly states that external services cannot initiate connections to the EC2 instances, using a NAT gateway (option A) would not be suitable. A NAT gateway allows outbound connections from private subnets to the internet, but it does not restrict inbound connections from external sources.</li><li>\\\"A NAT gateway ... does not restrict inbound connections from external sources.\\\" Actually it does, but only for IPv4.</li><li>Enable outbound IPv6 traffic using an egress-only internet gateway<br>https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 901384,
          "date": "Thu 18 May 2023 18:44",
          "username": "cloudenthusiast",
          "content": "Since the company's security policy explicitly states that external services cannot initiate connections to the EC2 instances, using a NAT gateway (option A) would not be suitable. A NAT gateway allows outbound connections from private subnets to the internet, but it does not restrict inbound connections from external sources.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"A NAT gateway ... does not restrict inbound connections from external sources.\\\" Actually it does, but only for IPv4.</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1110706,
          "date": "Sun 31 Dec 2023 17:45",
          "username": "pentium75",
          "content": "\\\"A NAT gateway ... does not restrict inbound connections from external sources.\\\" Actually it does, but only for IPv4.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 915014,
          "date": "Mon 05 Jun 2023 04:09",
          "username": "[Removed]",
          "content": "Enable outbound IPv6 traffic using an egress-only internet gateway<br>https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1283410,
          "date": "Sat 14 Sep 2024 01:42",
          "username": "MatAlves",
          "content": "\\\"An egress-only internet gateway is for use with IPv6 traffic only. To enable outbound-only internet communication over IPv4, use a NAT gateway instead.\\\"<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 988560,
          "date": "Wed 23 Aug 2023 19:59",
          "username": "Guru4Cloud",
          "content": "D. Create an egress-only internet gateway and make it the destination of the subnet's route table",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 929034,
          "date": "Wed 21 Jun 2023 06:09",
          "username": "TariqKipkemei",
          "content": "Outbound traffic onlyCreate an egress-only internet gateway and make it the destination of the subnet's route table",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 898602,
          "date": "Mon 15 May 2023 20:09",
          "username": "radev",
          "content": "Egress-Only internet Gateway",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#471",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is creating an application that runs on containers in a VPC. The application stores and accesses data in an Amazon S3 bucket. During the development phase, the application will store and access 1 TB of data in Amazon S3 each day. The company wants to minimize costs and wants to prevent traffic from traversing the internet whenever possible.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#471",
          "answers": [
            {
              "choice": "<p>Enable S3 Intelligent-Tiering for the S3 bucket<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Enable S3 Transfer Acceleration for the S3 bucket<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a gateway VPC endpoint for Amazon S3. Associate this endpoint with all route tables in the VPC<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an interface endpoint for Amazon S3 in the VPC. Associate this endpoint with all route tables in the VPC<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 471 discussion",
      "discusstion": [
        {
          "id": 951185,
          "date": "Sun 14 Jan 2024 06:51",
          "username": "litos168",
          "content": "Amazon S3 supports both gateway endpoints and interface endpoints. With a gateway endpoint, you can access Amazon S3 from your VPC, without requiring an internet gateway or NAT device for your VPC, and with no additional cost. However, gateway endpoints do not allow access from on-premises networks, from peered VPCs in other AWS Regions, or through a transit gateway. For those scenarios, you must use an interface endpoint, which is available for an additional cost.",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 901387,
          "date": "Sat 18 Nov 2023 19:48",
          "username": "cloudenthusiast",
          "content": "Gateway VPC Endpoint: A gateway VPC endpoint enables private connectivity between a VPC and Amazon S3. It allows direct access to Amazon S3 without the need for internet gateways, NAT devices, VPN connections, or AWS Direct Connect.<br><br>Minimize Internet Traffic: By creating a gateway VPC endpoint for Amazon S3 and associating it with all route tables in the VPC, the traffic between the VPC and Amazon S3 will be kept within the AWS network. This helps in minimizing data transfer costs and prevents the need for traffic to traverse the internet.<br><br>Cost-Effective: With a gateway VPC endpoint, the data transfer between the application running in the VPC and the S3 bucket stays within the AWS network, reducing the need for data transfer across the internet. This can result in cost savings, especially when dealing with large amounts of data.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B (Enable S3 Transfer Acceleration for the S3 bucket) is a feature that uses the CloudFront global network to accelerate data transfers to and from Amazon S3. While it can improve data transfer speed, it still involves traffic traversing the internet and doesn't directly address the goal of minimizing costs and preventing internet traffic whenever possible.</li></ul>",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 901388,
          "date": "Sat 18 Nov 2023 19:50",
          "username": "cloudenthusiast",
          "content": "Option B (Enable S3 Transfer Acceleration for the S3 bucket) is a feature that uses the CloudFront global network to accelerate data transfers to and from Amazon S3. While it can improve data transfer speed, it still involves traffic traversing the internet and doesn't directly address the goal of minimizing costs and preventing internet traffic whenever possible.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1126687,
          "date": "Fri 19 Jul 2024 13:09",
          "username": "awsgeek75",
          "content": "https://aws.amazon.com/blogs/architecture/choosing-your-vpc-endpoint-strategy-for-amazon-s3/<br><br>A: Storage cost is not described as an issue here<br>B: Tx Accelerator is for external (global user)traffic acceleration<br>D: Interface endpoint is on-prem to S3<br>C: gateway VPC isspecifically for S3 to AWS resources<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Interface endpoints are not exclusively for on-prem to S3.<br><br>The only reason why option D is wrong is because \\\"Associate this endpoint with all route tables in the VPC\\\" makes no sense.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1168193,
          "date": "Sat 07 Sep 2024 16:56",
          "username": "dkw2342",
          "content": "Interface endpoints are not exclusively for on-prem to S3.<br><br>The only reason why option D is wrong is because \\\"Associate this endpoint with all route tables in the VPC\\\" makes no sense.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1021855,
          "date": "Sat 30 Mar 2024 23:05",
          "username": "bsbs1234",
          "content": "I think both C&D will works.<br>But D will have extra cost. So C is correct.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 988545,
          "date": "Fri 23 Feb 2024 20:55",
          "username": "Guru4Cloud",
          "content": "C. Create a gateway VPC endpoint for Amazon S3. Associate this endpoint with all route tables in the VPC",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 929036,
          "date": "Thu 21 Dec 2023 07:13",
          "username": "TariqKipkemei",
          "content": "Prevent traffic from traversing the internetGateway VPC endpoint for S3.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 905312,
          "date": "Fri 24 Nov 2023 01:59",
          "username": "Anmol_1010",
          "content": "Key word transversing to internet",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 900647,
          "date": "Sat 18 Nov 2023 04:13",
          "username": "Efren",
          "content": "Gateway endpoint for S3",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 899494,
          "date": "Thu 16 Nov 2023 21:37",
          "username": "nosense",
          "content": "vpc endpoint for s3",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#472",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a mobile chat application with a data store based in Amazon DynamoDB. Users would like new messages to be read with as little latency as possible. A solutions architect needs to design an optimal solution that requires minimal application changes.<br><br>Which method should the solutions architect select?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#472",
          "answers": [
            {
              "choice": "<p>Configure Amazon DynamoDB Accelerator (DAX) for the new messages table. Update the code to use the DAX endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Add DynamoDB read replicas to handle the increased read load. Update the application to point to the read endpoint for the read replicas.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Double the number of read capacity units for the new messages table in DynamoDB. Continue to use the existing DynamoDB endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add an Amazon ElastiCache for Redis cache to the application stack. Update the application to point to the Redis cache endpoint instead of DynamoDB.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 472 discussion",
      "discusstion": [
        {
          "id": 1110718,
          "date": "Sun 30 Jun 2024 17:19",
          "username": "pentium75",
          "content": "B and C do not reduce latency. D would reduce latency but require significant application changes.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D would not reduce latency, all the messages are new, they wont be stored in cache and they are unique messages(dynamic content) so Elasticache would be pointless here, its more preferable for static content/frequently accessed content.... A makes perfect sense</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1199342,
          "date": "Sun 20 Oct 2024 22:15",
          "username": "wizcloudifa",
          "content": "D would not reduce latency, all the messages are new, they wont be stored in cache and they are unique messages(dynamic content) so Elasticache would be pointless here, its more preferable for static content/frequently accessed content.... A makes perfect sense",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1100359,
          "date": "Wed 19 Jun 2024 06:14",
          "username": "Cyberkayu",
          "content": "0 code change @C<br><br>ABD. In memory cache, read replica, elasticache. Chat application and content is dynamic, cache will still pull data from prod database<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C has 0 codes changes but doesn't address the issue.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1110708,
          "date": "Sun 30 Jun 2024 16:48",
          "username": "pentium75",
          "content": "C has 0 codes changes but doesn't address the issue.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1056406,
          "date": "Sun 28 Apr 2024 21:46",
          "username": "danielmakita",
          "content": "Would go for A.<br>Minimal application changes ! No application changes",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1049192,
          "date": "Sun 21 Apr 2024 02:27",
          "username": "thanhnv142",
          "content": "\\\"requires minimal application changes\\\" - Do not choose A because it requires updates of codes.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C is correct<br>A, B and D all require code changes to the app.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1049193,
          "date": "Sun 21 Apr 2024 02:27",
          "username": "thanhnv142",
          "content": "C is correct<br>A, B and D all require code changes to the app.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 988540,
          "date": "Fri 23 Feb 2024 20:54",
          "username": "Guru4Cloud",
          "content": "A. Configure Amazon DynamoDB Accelerator (DAX) for the new messages table. Update the code to use the DAX endpoint.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 934663,
          "date": "Tue 26 Dec 2023 20:12",
          "username": "haoAWS",
          "content": "Read replica does improve the read speed,but it cannot improve the latency because there is always latency between replicas.So A works and B not work.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 931147,
          "date": "Sat 23 Dec 2023 04:03",
          "username": "mattcl",
          "content": "C , \\\"requires minimal application changes\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 929037,
          "date": "Thu 21 Dec 2023 07:16",
          "username": "TariqKipkemei",
          "content": "little latencyAmazon DynamoDB Accelerator (DAX) .",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 915552,
          "date": "Tue 05 Dec 2023 18:58",
          "username": "DrWatson",
          "content": "I go with A https://aws.amazon.com/blogs/mobile/building-a-full-stack-chat-application-with-aws-and-nextjs/ but I have some doubts about this https://aws.amazon.com/blogs/database/how-to-build-a-chat-application-with-amazon-elasticache-for-redis/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 901389,
          "date": "Sat 18 Nov 2023 19:51",
          "username": "cloudenthusiast",
          "content": "Amazon DynamoDB Accelerator (DAX): DAX is an in-memory cache for DynamoDB that provides low-latency access to frequently accessed data. By configuring DAX for the new messages table, read requests for the table will be served from the DAX cache, significantly reducing the latency.<br><br>Minimal Application Changes: With DAX, the application code can be updated to use the DAX endpoint instead of the standard DynamoDB endpoint. This change is relatively minimal and does not require extensive modifications to the application's data access logic.<br><br>Low Latency: DAX caches frequently accessed data in memory, allowing subsequent read requests for the same data to be served with minimal latency. This ensures that new messages can be read by users with minimal delay.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option B (Add DynamoDB read replicas) involves creating read replicas to handle the increased read load, but it may not directly address the requirement of minimizing latency for new message reads.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 901390,
          "date": "Sat 18 Nov 2023 19:52",
          "username": "cloudenthusiast",
          "content": "Option B (Add DynamoDB read replicas) involves creating read replicas to handle the increased read load, but it may not directly address the requirement of minimizing latency for new message reads.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 900653,
          "date": "Sat 18 Nov 2023 04:15",
          "username": "Efren",
          "content": "Tricky one, in doubt also with B, read replicas.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yes it's tricky but least code changes is the tie breaker. DAX has zero code changes.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1116919,
          "date": "Mon 08 Jul 2024 19:05",
          "username": "awsgeek75",
          "content": "Yes it's tricky but least code changes is the tie breaker. DAX has zero code changes.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 899496,
          "date": "Thu 16 Nov 2023 21:44",
          "username": "nosense",
          "content": "a is valid",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#473",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a website on Amazon EC2 instances behind an Application Load Balancer (ALB). The website serves static content. Website traffic is increasing, and the company is concerned about a potential increase in cost.</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#473",
          "answers": [
            {
              "choice": "<p>Create an Amazon CloudFront distribution to cache state files at edge locations<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create an Amazon ElastiCache cluster. Connect the ALB to the ElastiCache cluster to serve cached files<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS WAF web ACL and associate it with the ALB. Add a rule to the web ACL to cache static files<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a second ALB in an alternative AWS Region. Route user traffic to the closest Region to minimize data transfer costs<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 473 discussion",
      "discusstion": [
        {
          "id": 901392,
          "date": "Sat 18 Nov 2023 19:53",
          "username": "cloudenthusiast",
          "content": "Amazon CloudFront: CloudFront is a content delivery network (CDN) service that caches content at edge locations worldwide. By creating a CloudFront distribution, static content from the website can be cached at edge locations, reducing the load on the EC2 instances and improving the overall performance.<br><br>Caching Static Files: Since the website serves static content, caching these files at CloudFront edge locations can significantly reduce the number of requests forwarded to the EC2 instances. This helps to lower the overall cost by offloading traffic from the instances and reducing the data transfer costs.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1116922,
          "date": "Mon 08 Jul 2024 19:09",
          "username": "awsgeek75",
          "content": "The problem with this question is that no sane AWS architect will chose any of these options and go for S3 caching. But given the choices, A is the only one which will solve the problem within reasonable cost.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 988535,
          "date": "Fri 23 Feb 2024 20:50",
          "username": "Guru4Cloud",
          "content": "A. Create an Amazon CloudFront distribution to cache state files at edge locations",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 929038,
          "date": "Thu 21 Dec 2023 07:17",
          "username": "TariqKipkemei",
          "content": "Serves static content Amazon CloudFront distribution.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 899498,
          "date": "Thu 16 Nov 2023 21:46",
          "username": "nosense",
          "content": "a for me",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#474",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple VPCs across AWS Regions to support and run workloads that are isolated from workloads in other Regions. Because of a recent application launch requirement, the company's VPCs must communicate with all other VPCs across all Regions.<br><br>Which solution will meet these requirements with the LEAST amount of administrative effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#474",
          "answers": [
            {
              "choice": "<p>Use VPC peering to manage VPC communication in a single Region. Use VPC peering across Regions to manage VPC communications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Direct Connect gateways across all Regions to connect VPCs across regions and manage VPC communications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Transit Gateway to manage VPC communication in a single Region and Transit Gateway peering across Regions to manage VPC communications.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS PrivateLink across all Regions to connect VPCs across Regions and manage VPC communications<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 474 discussion",
      "discusstion": [
        {
          "id": 914530,
          "date": "Mon 04 Dec 2023 15:01",
          "username": "Felix_br",
          "content": "The correct answer is: C. Use AWS Transit Gateway to manage VPC communication in a single Region and Transit Gateway peering across Regions to manage VPC communications.<br><br>AWS Transit Gateway is a network hub that you can use to connect your VPCs and on-premises networks. It provides a single point of control for managing your network traffic, and it can help you to reduce the number of connections that you need to manage.<br><br>Transit Gateway peering allows you to connect two Transit Gateways in different Regions. This can help you to create a global network that spans multiple Regions.<br><br>To use Transit Gateway to manage VPC communication in a single Region, you would create a Transit Gateway in each Region. You would then attach your VPCs to the Transit Gateway.<br><br>To use Transit Gateway peering to manage VPC communication across Regions, you would create a Transit Gateway peering connection between the Transit Gateways in each Region.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>thank you for this comprehensive explanation</li></ul>",
          "upvote_count": "24",
          "selected_answers": ""
        },
        {
          "id": 930118,
          "date": "Fri 22 Dec 2023 06:38",
          "username": "TariqKipkemei",
          "content": "thank you for this comprehensive explanation",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 901393,
          "date": "Sat 18 Nov 2023 19:54",
          "username": "cloudenthusiast",
          "content": "AWS Transit Gateway: Transit Gateway is a highly scalable service that simplifies network connectivity between VPCs and on-premises networks. By using a Transit Gateway in a single Region, you can centralize VPC communication management and reduce administrative effort.<br><br>Transit Gateway Peering: Transit Gateway supports peering connections across AWS Regions, allowing you to establish connectivity between VPCs in different Regions without the need for complex VPC peering configurations. This simplifies the management of VPC communications across Regions.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1116925,
          "date": "Mon 08 Jul 2024 19:14",
          "username": "awsgeek75",
          "content": "C is like a managed solution for A. A can work but with a lot of overhead (CIDR blocks uniqueness requirement). B and D are not the right products",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1063215,
          "date": "Sun 05 May 2024 19:42",
          "username": "potomac",
          "content": "multiple regions + multiple VPCs --> Transit Gateway",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 930120,
          "date": "Fri 22 Dec 2023 06:45",
          "username": "TariqKipkemei",
          "content": "Definitely C.<br>Very well explained by@Felix_br",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 901594,
          "date": "Sun 19 Nov 2023 04:26",
          "username": "omoakin",
          "content": "Ccccccccccccccccccccc<br>if you have services in multiple Regions, a Transit Gateway will allow you to access those services with a simpler network configuration.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#475",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a containerized application that will use Amazon Elastic Container Service (Amazon ECS). The application needs to access a shared file system that is highly durable and can recover data to another AWS Region with a recovery point objective (RPO) of 8 hours. The file system needs to provide a mount target m each Availability Zone within a Region.<br><br>A solutions architect wants to use AWS Backup to manage the replication to another Region.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#475",
          "answers": [
            {
              "choice": "<p>Amazon FSx for Windows File Server with a Multi-AZ deployment<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon FSx for NetApp ONTAP with a Multi-AZ deployment<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Elastic File System (Amazon EFS) with the Standard storage class<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon FSx for OpenZFS<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 475 discussion",
      "discusstion": [
        {
          "id": 910003,
          "date": "Thu 30 Nov 2023 10:12",
          "username": "elmogy",
          "content": "https://aws.amazon.com/efs/faq/<br>Q: What is Amazon EFS Replication?<br>EFS Replication can replicate your file system data to another Region or within the same Region without requiring additional infrastructure or a custom process. Amazon EFS Replication automatically and transparently replicates your data to a second file system in a Region or AZ of your choice. You can use the Amazon EFS console, AWS CLI, and APIs to activate replication on an existing file system. EFS Replication is continual and provides a recovery point objective (RPO) and a recovery time objective (RTO) of minutes, helping you meet your compliance and business continuity goals.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1199348,
          "date": "Sun 20 Oct 2024 22:47",
          "username": "wizcloudifa",
          "content": "The key thing to notice here in the question is \\\"with a recovery point objective (RPO) of 8 hours\\\", as it is 8 hours of time it recovery can be easily managed by EFS, no need to go for costlier and not built for this use-case(share file system) options like NetApp ONTAP(proprietary data cluster), OpenZFS(not a built in filesystem in AWS) or FSx for windows(file system for windows compatible workloads)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1116932,
          "date": "Mon 08 Jul 2024 19:20",
          "username": "awsgeek75",
          "content": "A: ECS is not Windows File Server so won't work<br>B: ONTAP is proprietary data cluster completely unrelated to this question<br>D: OpenZFS needs a Linux kind of host for access. Not a built-in filesystem in AWS by default",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1110733,
          "date": "Sun 30 Jun 2024 17:31",
          "username": "pentium75",
          "content": "\\\"The file systemhttps://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-associate-saa-c03/view/48/# needs to provide a mount target in each (!) Availability Zone within a Region\\\", most regions have three AZs, but FSx Multi-AZ provides only nodes \\\"spread across two AZs\\\". While \\\"or Amazon EFS file systems that use Regional storage classes [such as Standard], you can create a mount target in each Availability Zone in an AWS Region.\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Huh, comment has been scrambled a bit. Anyway<br><br>FSx Multi-AZ: Mount targets in two AZs<br>EFS Standard: Can create mount target in each AZ</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1110735,
          "date": "Sun 30 Jun 2024 17:32",
          "username": "pentium75",
          "content": "Huh, comment has been scrambled a bit. Anyway<br><br>FSx Multi-AZ: Mount targets in two AZs<br>EFS Standard: Can create mount target in each AZ",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1073967,
          "date": "Sat 18 May 2024 12:05",
          "username": "Goutham4981",
          "content": "In the absence of this information, we can only make an assumption based on the provided requirements. The requirement for a shared file system that can recover data to another AWS Region with a recovery point objective (RPO) of 8 hours, and the need for a mount target in each Availability Zone within a Region, are all natively supported by Amazon EFS with the Standard storage class.<br><br>While Amazon FSx for NetApp ONTAP does provide shared file systems and supports both Windows and Linux, it does not natively support replication to another region through AWS Backup.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 988533,
          "date": "Fri 23 Feb 2024 20:45",
          "username": "Guru4Cloud",
          "content": "C. Amazon Elastic File System (Amazon EFS) with the Standard storage class",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 987842,
          "date": "Fri 23 Feb 2024 03:37",
          "username": "cd93",
          "content": "B or C, but since question didn't mention operating system type, I guess we should go with B because it is more versatile (EFS supports Linux only), although ECS containers do support windows instances...",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 930127,
          "date": "Fri 22 Dec 2023 06:54",
          "username": "TariqKipkemei",
          "content": "Both option B and C will support this requirement.<br><br>https://aws.amazon.com/efs/faq/#:~:textWhat%20is%20Amazon%20EFS%20Replication%3F<br><br>https://aws.amazon.com/fsx/netapp-ontap/faqs/#:~:textHow%20do%20I%20configure%20cross%2Dregion%20replication%20for%20the%20data%20in%20my%20file%20system%3F",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 910654,
          "date": "Thu 30 Nov 2023 02:56",
          "username": "omoakin",
          "content": "BBBBBBBBBBBBBBB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 905739,
          "date": "Fri 24 Nov 2023 13:00",
          "username": "[Removed]",
          "content": "Both B and C are feasible.<br>Amazon FSx for NetApp ONTAP is just way overpriced for a backup storage solution. The keyword to look out for is sub milli seconds latency<br>In real life env, Amazon Elastic File System (Amazon EFS) with the Standard storage class is good enough.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 905320,
          "date": "Fri 24 Nov 2023 02:14",
          "username": "Anmol_1010",
          "content": "Efs, can be mounted only in 1 region<br>So the answer is B",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 902559,
          "date": "Mon 20 Nov 2023 14:58",
          "username": "Rob1L",
          "content": "C: EFS",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 901791,
          "date": "Sun 19 Nov 2023 12:03",
          "username": "y0",
          "content": "Selected Answer: C<br><br>AWS Backup can manage replication of EFS to another region as mentioned below<br>https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 900428,
          "date": "Fri 17 Nov 2023 20:58",
          "username": "norris81",
          "content": "https://aws.amazon.com/efs/faq/<br><br>During a disaster or fault within an AZ affecting all copies of your data, you might experience loss of data that has not been replicated using Amazon EFS Replication. EFS Replication is designed to meet a recovery point objective (RPO) and recovery time objective (RTO) of minutes. You can use AWS Backup to store additional copies of your file system data and restore them to a new file system in an AZ or Region of your choice. Amazon EFS file system backup data created and managed by AWS Backup is replicated to three AZs and is designed for 99.999999999% (11 nines) durability.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Amazon EFS is a scalable and durable elastic file system that can be used with Amazon ECS. However, it does not support replication to another AWS Region.</li><li>To use EFS replication in a Region that is disabled by default, you must first opt in to the Region, so it does support.</li><li>it does support replication to another AWS Region<br>check the same link you are replying to:/<br>https://aws.amazon.com/efs/faq/<br>Q: What is Amazon EFS Replication?<br>EFS Replication can replicate your file system data to another Region or within the same Region without requiring additional infrastructure or a custom process. Amazon EFS Replication automatically and transparently replicates your data to a second file system in a Region or AZ of your choice. You can use the Amazon EFS console, AWS CLI, and APIs to activate replication on an existing file system. EFS Replication is continual and provides a recovery point objective (RPO) and a recovery time objective (RTO) of minutes, helping you meet your compliance and business continuity goals.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901253,
          "date": "Sat 18 Nov 2023 16:42",
          "username": "nosense",
          "content": "Amazon EFS is a scalable and durable elastic file system that can be used with Amazon ECS. However, it does not support replication to another AWS Region.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>To use EFS replication in a Region that is disabled by default, you must first opt in to the Region, so it does support.</li><li>it does support replication to another AWS Region<br>check the same link you are replying to:/<br>https://aws.amazon.com/efs/faq/<br>Q: What is Amazon EFS Replication?<br>EFS Replication can replicate your file system data to another Region or within the same Region without requiring additional infrastructure or a custom process. Amazon EFS Replication automatically and transparently replicates your data to a second file system in a Region or AZ of your choice. You can use the Amazon EFS console, AWS CLI, and APIs to activate replication on an existing file system. EFS Replication is continual and provides a recovery point objective (RPO) and a recovery time objective (RTO) of minutes, helping you meet your compliance and business continuity goals.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 901824,
          "date": "Sun 19 Nov 2023 12:58",
          "username": "fakrap",
          "content": "To use EFS replication in a Region that is disabled by default, you must first opt in to the Region, so it does support.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 910002,
          "date": "Thu 30 Nov 2023 10:12",
          "username": "elmogy",
          "content": "it does support replication to another AWS Region<br>check the same link you are replying to:/<br>https://aws.amazon.com/efs/faq/<br>Q: What is Amazon EFS Replication?<br>EFS Replication can replicate your file system data to another Region or within the same Region without requiring additional infrastructure or a custom process. Amazon EFS Replication automatically and transparently replicates your data to a second file system in a Region or AZ of your choice. You can use the Amazon EFS console, AWS CLI, and APIs to activate replication on an existing file system. EFS Replication is continual and provides a recovery point objective (RPO) and a recovery time objective (RTO) of minutes, helping you meet your compliance and business continuity goals.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 899503,
          "date": "Thu 16 Nov 2023 21:56",
          "username": "nosense",
          "content": "shared file system that is highly durable and can recover data<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why not EFS?</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 900667,
          "date": "Sat 18 Nov 2023 04:22",
          "username": "Efren",
          "content": "Why not EFS?",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#476",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is expecting rapid growth in the near future. A solutions architect needs to configure existing users and grant permissions to new users on AWS. The solutions architect has decided to create IAM groups. The solutions architect will add the new users to IAM groups based on department.<br><br>Which additional action is the MOST secure way to grant permissions to the new users?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#476",
          "answers": [
            {
              "choice": "<p>Apply service control policies (SCPs) to manage access permissions<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create IAM roles that have least privilege permission. Attach the roles to the IAM groups<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an IAM policy that grants least privilege permission. Attach the policy to the IAM groups<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create IAM roles. Associate the roles with a permissions boundary that defines the maximum permissions<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 476 discussion",
      "discusstion": [
        {
          "id": 902562,
          "date": "Sat 20 May 2023 14:01",
          "username": "Rob1L",
          "content": "Option B is incorrect because IAM roles are not directly attached to IAM groups.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>IAM Roles can be attached to IAM Groups:<br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/assign_role.html</li><li>Read your own link: You can assign an existing IAM role to an AWS Directory Service user or group. Not to IAM groups.</li></ul>",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 908541,
          "date": "Sun 28 May 2023 12:33",
          "username": "RoroJ",
          "content": "IAM Roles can be attached to IAM Groups:<br>https://docs.aws.amazon.com/directoryservice/latest/admin-guide/assign_role.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Read your own link: You can assign an existing IAM role to an AWS Directory Service user or group. Not to IAM groups.</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 915319,
          "date": "Mon 05 Jun 2023 12:14",
          "username": "antropaws",
          "content": "Read your own link: You can assign an existing IAM role to an AWS Directory Service user or group. Not to IAM groups.",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 900673,
          "date": "Thu 18 May 2023 03:25",
          "username": "Efren",
          "content": "Agreed with C<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_attach-policy.html<br><br>Attaching a policy to an IAM user group",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1283413,
          "date": "Sat 14 Sep 2024 02:04",
          "username": "MatAlves",
          "content": "\\\"Manage access in AWS by creating policies and attaching them to IAM identities (users, groups of users, or roles) or AWS resources.\\\"<br><br>\\\"An IAM role is an identity within your AWS account that has specific permissions. It's similar to an IAM user, but isn't associated with a specific person.\\\"<br><br>\\\"IAM roles do not have any permanent credentials associated with them and are instead assumed by IAM users, AWS services, or applications that need temporary security credentials to access AWS resources\\\"<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html<br><br>https://blog.awsfundamentals.com/aws-iam-roles-terms-concepts-and-examples</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1283414,
          "date": "Sat 14 Sep 2024 02:04",
          "username": "MatAlves",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html<br><br>https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html<br><br>https://blog.awsfundamentals.com/aws-iam-roles-terms-concepts-and-examples",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1191387,
          "date": "Mon 08 Apr 2024 07:16",
          "username": "zinabu",
          "content": "create rolefor resource like EC2 and lambda ....<br>create a Policy for groups or user access policy for the resources like S3 bucket",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1110743,
          "date": "Sun 31 Dec 2023 18:35",
          "username": "pentium75",
          "content": "Not A or D because this is not about restricting maximum permissions, it is is about securely granting permissions<br><br>Not B because IAM roles are not attached to IAM groups.<br><br>C because IAM policies are attached to IAM groups.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1063224,
          "date": "Sun 05 Nov 2023 20:53",
          "username": "potomac",
          "content": "A is wrong<br>SCPs are mainly used along with AWS Organizations organizational units (OUs). SCPs do not replace IAM Policies such that they do not provide actual permissions. To perform an action, you would still need to grant appropriate IAM Policy permissions.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 988526,
          "date": "Wed 23 Aug 2023 19:40",
          "username": "Guru4Cloud",
          "content": "Create an IAM policy that grants least privilege permission. Attach the policy to the IAM groups",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 930136,
          "date": "Thu 22 Jun 2023 06:10",
          "username": "TariqKipkemei",
          "content": "An IAM policy is an object in AWS that, when associated with an identity or resource, defines their permissions. Permissions in the policies determine whether a request is allowed or denied. You manage access in AWS by creating policies and attaching them to IAM identities (users, groups of users, or roles) or AWS resources.<br>So, option B will also work.<br>But Since I can only choose one, C would be it.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 927301,
          "date": "Mon 19 Jun 2023 10:26",
          "username": "MrAWSAssociate",
          "content": "You can attach up to 10 IAM policy for a 'user group'.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 915320,
          "date": "Mon 05 Jun 2023 12:15",
          "username": "antropaws",
          "content": "C is the correct one.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 899509,
          "date": "Tue 16 May 2023 21:01",
          "username": "nosense",
          "content": "should be b<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>it should be C</li><li>Option C is not as secure as option B because IAM policies are attached to individual users and cannot be used to manage permissions for groups of users.</li><li>IAM Roles manage who has access to your AWS resources, whereas IAM policies control their permissions. A Role with no Policy attached to it won't have to access any AWS resources. A Policy that is not attached to an IAM role is effectively unused.</li><li>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html</li><li>IAM roles are not attached to IAM groups.<br><br>IAM policies are attached to IAM roles, IAM groups or IAM users. IAM roles are used by services.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 900214,
          "date": "Wed 17 May 2023 15:50",
          "username": "imazsyed",
          "content": "it should be C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Option C is not as secure as option B because IAM policies are attached to individual users and cannot be used to manage permissions for groups of users.</li><li>IAM Roles manage who has access to your AWS resources, whereas IAM policies control their permissions. A Role with no Policy attached to it won't have to access any AWS resources. A Policy that is not attached to an IAM role is effectively unused.</li><li>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 901743,
          "date": "Fri 19 May 2023 09:59",
          "username": "nosense",
          "content": "Option C is not as secure as option B because IAM policies are attached to individual users and cannot be used to manage permissions for groups of users.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>IAM Roles manage who has access to your AWS resources, whereas IAM policies control their permissions. A Role with no Policy attached to it won't have to access any AWS resources. A Policy that is not attached to an IAM role is effectively unused.</li><li>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 902107,
          "date": "Fri 19 May 2023 18:22",
          "username": "omoakin",
          "content": "IAM Roles manage who has access to your AWS resources, whereas IAM policies control their permissions. A Role with no Policy attached to it won't have to access any AWS resources. A Policy that is not attached to an IAM role is effectively unused.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 997484,
          "date": "Sun 03 Sep 2023 11:12",
          "username": "Clouddon",
          "content": "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1110740,
          "date": "Sun 31 Dec 2023 18:34",
          "username": "pentium75",
          "content": "IAM roles are not attached to IAM groups.<br><br>IAM policies are attached to IAM roles, IAM groups or IAM users. IAM roles are used by services.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#477",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A group requires permissions to list an Amazon S3 bucket and delete objects from that bucket. An administrator has created the following IAM policy to provide access to the bucket and applied that policy to the group. The group is not able to delete objects in the bucket. The company follows least-privilege access rules.<br><br><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image6.png\"&gt;<br><br>Which statement should a solutions architect add to the policy to correct bucket access?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#477",
          "answers": [
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image7.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image8.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image9.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image10.png\"><br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 477 discussion",
      "discusstion": [
        {
          "id": 988525,
          "date": "Fri 23 Feb 2024 20:39",
          "username": "Guru4Cloud",
          "content": "option B action is S3:*. this means all actions. The company follows least-privilege access rules. Hence option D",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 899516,
          "date": "Thu 16 Nov 2023 22:04",
          "username": "nosense",
          "content": "d work<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Agreed</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 900678,
          "date": "Sat 18 Nov 2023 04:27",
          "username": "Efren",
          "content": "Agreed",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 930141,
          "date": "Fri 22 Dec 2023 07:19",
          "username": "TariqKipkemei",
          "content": "D is the answer",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 925035,
          "date": "Sat 16 Dec 2023 12:40",
          "username": "AncaZalog",
          "content": "what's the difference between B and D? on B the statements are just placed in another order<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>option B action is S3:*. this means all actions. The company follows least-privilege access rules. Hence option D</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 930142,
          "date": "Fri 22 Dec 2023 07:20",
          "username": "TariqKipkemei",
          "content": "option B action is S3:*. this means all actions. The company follows least-privilege access rules. Hence option D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 911859,
          "date": "Fri 01 Dec 2023 10:46",
          "username": "serepetru",
          "content": "What is the difference between C and D?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>the\\\"/\\\" at the end of the last line on D</li><li>so annoying when you oversee this\\\"/\\\"</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 922257,
          "date": "Wed 13 Dec 2023 16:29",
          "username": "Ta_Les",
          "content": "the\\\"/\\\" at the end of the last line on D<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>so annoying when you oversee this\\\"/\\\"</li></ul>",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1216302,
          "date": "Sat 23 Nov 2024 09:27",
          "username": "sheilawu",
          "content": "so annoying when you oversee this\\\"/\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 902563,
          "date": "Mon 20 Nov 2023 15:04",
          "username": "Rob1L",
          "content": "D for sure",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#478",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A law firm needs to share information with the public. The information includes hundreds of files that must be publicly readable. Modifications or deletions of the files by anyone before a designated future date are prohibited.<br><br>Which solution will meet these requirements in the MOST secure way?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#478",
          "answers": [
            {
              "choice": "<p>Upload all files to an Amazon S3 bucket that is configured for static website hosting. Grant read-only IAM permissions to any AWS principals that access the S3 bucket until the designated date.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new Amazon S3 bucket with S3 Versioning enabled. Use S3 Object Lock with a retention period in accordance with the designated date. Configure the S3 bucket for static website hosting. Set an S3 bucket policy to allow read-only access to the objects.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new Amazon S3 bucket with S3 Versioning enabled. Configure an event trigger to run an AWS Lambda function in case of object modification or deletion. Configure the Lambda function to replace the objects with the original versions from a private S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Upload all files to an Amazon S3 bucket that is configured for static website hosting. Select the folder that contains the files. Use S3 Object Lock with a retention period in accordance with the designated date. Grant read-only IAM permissions to any AWS principals that access the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 478 discussion",
      "discusstion": [
        {
          "id": 1231836,
          "date": "Mon 17 Jun 2024 10:54",
          "username": "Lin878",
          "content": "Object Lock works only in buckets that have S3 Versioning enabled.<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 901949,
          "date": "Fri 19 May 2023 15:05",
          "username": "nosense",
          "content": "Option A allows the files to be modified or deleted by anyone with read-only IAM permissions. Option C allows the files to be modified or deleted by anyone who can trigger the AWS Lambda function.<br>Option D allows the files to be modified or deleted by anyone with read-only IAM permissions to the S3 bucket<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>no it doesnt,did you not notice this part: \\\"S3 Object Lock with a retention period in accordance with the designated date\\\", this part avoids deletion/modification of files</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1199350,
          "date": "Sat 20 Apr 2024 23:15",
          "username": "wizcloudifa",
          "content": "no it doesnt,did you not notice this part: \\\"S3 Object Lock with a retention period in accordance with the designated date\\\", this part avoids deletion/modification of files",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1283416,
          "date": "Sat 14 Sep 2024 02:12",
          "username": "MatAlves",
          "content": "Versioning Enabled + Object LockB",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1063235,
          "date": "Sun 05 Nov 2023 21:08",
          "username": "potomac",
          "content": "S3 bucket policy",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1049197,
          "date": "Sat 21 Oct 2023 02:49",
          "username": "thanhnv142",
          "content": "B is correct.<br>A doesnot have S3 object lock, but deletion is prohibited, which implies object lock<br>C does not have S3 as static web, but have to share the s3 with the public<br>D mentions files - but S3 manages objects, not file",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1028275,
          "date": "Sun 08 Oct 2023 23:14",
          "username": "hydro143",
          "content": "D?<br>Its like B, but also with read-only access limitations for anyone with IAM permissions. Also versioning in B doesn't help with anything.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Enabling versioning is a pre-requisite for object lock.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1209314,
          "date": "Fri 10 May 2024 11:59",
          "username": "ManikRoy",
          "content": "Enabling versioning is a pre-requisite for object lock.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 988474,
          "date": "Wed 23 Aug 2023 18:31",
          "username": "Guru4Cloud",
          "content": "Create a new Amazon S3 bucket with S3 Versioning enabled. Use S3 Object Lock with a retention period in accordance with the designated date. Configure the S3 bucket for static website hosting. Set an S3 bucket policy to allow read-only access to the objects.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 930143,
          "date": "Thu 22 Jun 2023 06:22",
          "username": "TariqKipkemei",
          "content": "Create a new Amazon S3 bucket with S3 Versioning enabled. Use S3 Object Lock with a retention period in accordance with the designated date. Configure the S3 bucket for static website hosting. Set an S3 bucket policy to allow read-only access to the objects.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 915325,
          "date": "Mon 05 Jun 2023 12:20",
          "username": "antropaws",
          "content": "Clearly B.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 902216,
          "date": "Fri 19 May 2023 22:14",
          "username": "dydzah",
          "content": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#479",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is making a prototype of the infrastructure for its new website by manually provisioning the necessary infrastructure. This infrastructure includes an Auto Scaling group, an Application Load Balancer and an Amazon RDS database. After the configuration has been thoroughly validated, the company wants the capability to immediately deploy the infrastructure for development and production use in two Availability Zones in an automated fashion.<br><br>What should a solutions architect recommend to meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#479",
          "answers": [
            {
              "choice": "<p>Use AWS Systems Manager to replicate and provision the prototype infrastructure in two Availability Zones<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Define the infrastructure as a template by using the prototype infrastructure as a guide. Deploy the infrastructure with AWS CloudFormation.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Config to record the inventory of resources that are used in the prototype infrastructure. Use AWS Config to deploy the prototype infrastructure into two Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Elastic Beanstalk and configure it to use an automated reference to the prototype infrastructure to automatically deploy new environments in two Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 479 discussion",
      "discusstion": [
        {
          "id": 988471,
          "date": "Wed 23 Aug 2023 18:30",
          "username": "Guru4Cloud",
          "content": "Just Think Infrastructure as Code Cloud Formation",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 899520,
          "date": "Tue 16 May 2023 21:13",
          "username": "nosense",
          "content": "b obvious",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1283421,
          "date": "Sat 14 Sep 2024 02:24",
          "username": "MatAlves",
          "content": "The difference between CloudFormation and Beanstalk might be trick, but just for the exam think:<br><br>Cloudformation -> Infra as Code<br>Beanstalk -> deploy and manageapplications<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That's right. And I think you've voted for A by mistake. I think you wanna vote for B ;)</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1322268,
          "date": "Thu 05 Dec 2024 08:57",
          "username": "LeonSauveterre",
          "content": "That's right. And I think you've voted for A by mistake. I think you wanna vote for B ;)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1116986,
          "date": "Mon 08 Jan 2024 21:28",
          "username": "awsgeek75",
          "content": "A: Wrong product<br>C: Wrong product<br>D: EBS can only handle EC2 so RDS won't be replicated automatically<br>B: CloudFormationIaaC",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 985093,
          "date": "Sat 19 Aug 2023 11:45",
          "username": "capino",
          "content": "Just Think Infrastructure as Code Cloud Formation",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 932950,
          "date": "Sat 24 Jun 2023 23:34",
          "username": "haoAWS",
          "content": "Why D is not correct?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I guess it's because Beanstalk is PaaS (platform as a service) while CloudFormation is IaC (infrastructure as code). The question emphasis more on infrastructure</li><li>I guess \\\"TEMPLATE\\\" leads to CloudFormation</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 967998,
          "date": "Mon 31 Jul 2023 13:04",
          "username": "Kiki_Pass",
          "content": "I guess it's because Beanstalk is PaaS (platform as a service) while CloudFormation is IaC (infrastructure as code). The question emphasis more on infrastructure",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 933499,
          "date": "Sun 25 Jun 2023 13:04",
          "username": "wRhlH",
          "content": "I guess \\\"TEMPLATE\\\" leads to CloudFormation",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 930145,
          "date": "Thu 22 Jun 2023 06:25",
          "username": "TariqKipkemei",
          "content": "Infrastructure as codeAWS CloudFormation",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 915328,
          "date": "Mon 05 Jun 2023 12:22",
          "username": "antropaws",
          "content": "Clearly B.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 914570,
          "date": "Sun 04 Jun 2023 14:23",
          "username": "Felix_br",
          "content": "AWS CloudFormation is a service that allows you to define and provision infrastructure as code. This means that you can create a template that describes the resources you want to create, and then use CloudFormation to deploy those resources in an automated fashion.<br><br>In this case, the solutions architect should define the infrastructure as a template by using the prototype infrastructure as a guide. The template should include resources for an Auto Scaling group, an Application Load Balancer, and an Amazon RDS database. Once the template is created, the solutions architect can use CloudFormation to deploy the infrastructure in two Availability Zones.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 910696,
          "date": "Wed 31 May 2023 03:15",
          "username": "omoakin",
          "content": "B<br>Define the infrastructure as a template by using the prototype infrastructure as a guide. Deploy the infrastructure with AWS CloudFormation",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#480",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business application is hosted on Amazon EC2 and uses Amazon S3 for encrypted object storage. The chief information security officer has directed that no application traffic between the two services should traverse the public internet.<br><br>Which capability should the solutions architect use to meet the compliance requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#480",
          "answers": [
            {
              "choice": "<p>AWS Key Management Service (AWS KMS)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>VPC endpoint<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Private subnet<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Virtual private gateway<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 480 discussion",
      "discusstion": [
        {
          "id": 901400,
          "date": "Sat 18 May 2024 19:10",
          "username": "cloudenthusiast",
          "content": "A VPC endpoint enables you to privately access AWS services without requiring internet gateways, NAT gateways, VPN connections, or AWS Direct Connect connections. It allows you to connect your VPC directly to supported AWS services, such as Amazon S3, over a private connection within the AWS network.<br><br>By creating a VPC endpoint for Amazon S3, the traffic between your EC2 instances and S3 will stay within the AWS network and won't traverse the public internet. This provides a more secure and compliant solution, as the data transfer remains within the private network boundaries.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 930147,
          "date": "Sat 22 Jun 2024 06:27",
          "username": "TariqKipkemei",
          "content": "Prevent traffic from traversing the internetVPC endpoint for S3.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 915330,
          "date": "Wed 05 Jun 2024 12:22",
          "username": "antropaws",
          "content": "B until proven contrary.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 913917,
          "date": "Mon 03 Jun 2024 23:00",
          "username": "handsonlabsaws",
          "content": "B for sure",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 909785,
          "date": "Thu 30 May 2024 01:52",
          "username": "Blingy",
          "content": "BBBBBBBBB",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#481",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a three-tier web application in the AWS Cloud. A Multi-AZAmazon RDS for MySQL server forms the database layer Amazon ElastiCache forms the cache layer. The company wants a caching strategy that adds or updates data in the cache when a customer adds an item to the database. The data in the cache must always match the data in the database.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#481",
          "answers": [
            {
              "choice": "<p>Implement the lazy loading caching strategy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement the write-through caching strategy<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Implement the adding TTL caching strategy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Implement the AWS AppConfig caching strategy<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 481 discussion",
      "discusstion": [
        {
          "id": 901401,
          "date": "Sat 18 Nov 2023 20:12",
          "username": "cloudenthusiast",
          "content": "In the write-through caching strategy, when a customer adds or updates an item in the database, the application first writes the data to the database and then updates the cache with the same data. This ensures that the cache is always synchronized with the database, as every write operation triggers an update to the cache.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Lazy loading caching strategy (option A) typically involves populating the cache only when data is requested, and it does not guarantee that the data in the cache always matches the data in the database.<br><br>Adding TTL (Time-to-Live) caching strategy (option C) involves setting an expiration time for cached data. It is useful for scenarios where the data can be considered valid for a specific period, but it does not guarantee that the data in the cache is always in sync with the database.<br><br>AWS AppConfig caching strategy (option D) is a service that helps you deploy and manage application configurations. It is not specifically designed for caching data synchronization between a database and cache layer.</li><li>Great explanation , thanks</li></ul>",
          "upvote_count": "29",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 901402,
          "date": "Sat 18 Nov 2023 20:12",
          "username": "cloudenthusiast",
          "content": "Lazy loading caching strategy (option A) typically involves populating the cache only when data is requested, and it does not guarantee that the data in the cache always matches the data in the database.<br><br>Adding TTL (Time-to-Live) caching strategy (option C) involves setting an expiration time for cached data. It is useful for scenarios where the data can be considered valid for a specific period, but it does not guarantee that the data in the cache is always in sync with the database.<br><br>AWS AppConfig caching strategy (option D) is a service that helps you deploy and manage application configurations. It is not specifically designed for caching data synchronization between a database and cache layer.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Great explanation , thanks</li></ul>",
          "upvote_count": "36",
          "selected_answers": ""
        },
        {
          "id": 966785,
          "date": "Tue 30 Jan 2024 05:00",
          "username": "Kp88",
          "content": "Great explanation , thanks",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1191399,
          "date": "Tue 08 Oct 2024 07:34",
          "username": "zinabu",
          "content": "write-through cashing strategy",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1130973,
          "date": "Wed 24 Jul 2024 18:12",
          "username": "dikshya1233",
          "content": "In exam",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1126738,
          "date": "Fri 19 Jul 2024 14:24",
          "username": "awsgeek75",
          "content": "More helpful reading for why B is the answer:<br><br>https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Strategies.html#Strategies.WriteThrough",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 988459,
          "date": "Fri 23 Feb 2024 19:09",
          "username": "Guru4Cloud",
          "content": "B. Implement the write-through caching strategy",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 931184,
          "date": "Sat 23 Dec 2023 06:31",
          "username": "TariqKipkemei",
          "content": "The answer is definitely B.<br>I couldn't provide any more details than what has been shared by @cloudenthusiast.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 899525,
          "date": "Thu 16 Nov 2023 22:17",
          "username": "nosense",
          "content": "write-through caching strategy updates the cache at the same time as the database",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#482",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate 100 GB of historical data from an on-premises location to an Amazon S3 bucket. The company has a 100 megabits per second (Mbps) internet connection on premises. The company needs to encrypt the data in transit to the S3 bucket. The company will store new data directly in Amazon S3.Which solution will meet these requirements with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#482",
          "answers": [
            {
              "choice": "<p> A.Use the s3 sync command in the AWS CLI to move the data directly to an S3 bucket</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p> B.Use AWS DataSync to migrate the data from the on-premises location to an S3 bucket Most Voted </p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p> C.Use AWS Snowball to move the data to an S3 bucket</p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p> D.Set up an IPsec VPN from the on-premises location to AWS. Use the s3 cp command in the AWS CLI to move the data directly to an S3 bucket</p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 482 discussion",
      "discusstion": [
        {
          "id": 901403,
          "date": "Thu 18 May 2023 19:14",
          "username": "cloudenthusiast",
          "content": "<br> AWS DataSync is a fully managed data transfer service that simplifies and automates the process of moving data between on-premises storage and Amazon S3. It provides secure and efficient data transfer with built-in encryption, ensuring that the data is encrypted in transit. By using AWS DataSync, the company can easily migrate the 100 GB of historical data from their on-premises location to an S3 bucket. DataSync will handle the encryption of data in transit and ensure secure transfer.<br>",
          "upvote_count": "13",
          "selected_answers": "\n               Selected Answer: B\n              "
        },
        {
          "id": 901217,
          "date": "Thu 18 May 2023 14:55",
          "username": "luiscc",
          "content": "<br> Using DataSync, the company can easily migrate the 100 GB of historical data to an S3 bucket. DataSync will handle the encryption of data in transit, so the company does not need to set up a VPN or worry about managing encryption keys. Option A, using the s3 sync command in the AWS CLI to move the data directly to an S3 bucket, would require more operational overhead as the company would need to manage the encryption of data in transit themselves. Option D, setting up an IPsec VPN from the on-premises location to AWS, would also require more operational overhead and would be overkill for this scenario. Option C, using AWS Snowball, could work but would require more time and resources to order and set up the physical device.<br>",
          "upvote_count": "7",
          "selected_answers": "\n               Selected Answer: B\n              "
        },
        {
          "id": 1324258,
          "date": "Tue 10 Dec 2024 00:21",
          "username": "FlyingHawk",
          "content": "<br> For A, it is more straightforward approach, with 100Mbps12.5MBs, 100 GB100 * 1024 MB102,400 MB, 102400 / 12.58192s2.3 hours, so if the network is stable, it should be less operational overhead than B which requires the installation of agent and network configuration, so compared to S3 sync, DataSync requires more upfront configuration but provides more robust, automated transfer capabilities.In an AWS certification exam, they typically expect you to choose the solution that provides the most straightforward, efficient approach with the least operational overhead while meeting all specified requirements. For this scenario, they would likely expect you to choose A.<br><br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li><br> In the context of AWS exam, AWS may expect we choose B as AWS DataSync is a managed service designed specifically for data migration tasks, A is more ad-hoc approach suit for small data-set. 100 GB will take 2.22 hours, although it is acceptable.<br></li></ul>",
          "upvote_count": "1",
          "selected_answers": "\n               Selected Answer: A\n              "
        },
        {
          "id": 1324261,
          "date": "Tue 10 Dec 2024 00:42",
          "username": "FlyingHawk",
          "content": "<br> In the context of AWS exam, AWS may expect we choose B as AWS DataSync is a managed service designed specifically for data migration tasks, A is more ad-hoc approach suit for small data-set. 100 GB will take 2.22 hours, although it is acceptable.<br>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1322285,
          "date": "Thu 05 Dec 2024 09:59",
          "username": "LeonSauveterre",
          "content": "<br> Option A meets all the requirements with the LEAST operational overhead (while option B will introduce unnecessary complexity for a one-time transfer). The data will be encrypted in transit (via HTTPS), and a 100 Mbps connection is sufficient to transfer data of 100 GB. If the task involves periodic transfers or error recovery, DataSync (option B) could be considered as an alternative.<br>",
          "upvote_count": "2",
          "selected_answers": "\n               Selected Answer: A\n              "
        },
        {
          "id": 1261114,
          "date": "Mon 05 Aug 2024 18:26",
          "username": "1e22522",
          "content": "<br> Why would u u se the CLI<br>",
          "upvote_count": "2",
          "selected_answers": "\n               Selected Answer: B\n              "
        },
        {
          "id": 1188480,
          "date": "Wed 03 Apr 2024 07:36",
          "username": "bujuman",
          "content": "<br> Assertions: - needs to encrypt the data in transit to the S3 bucket. - The company will store new data directly in Amazon S3. Requirements: - with the LEAST operational overhead Even Though options A and B could do the job, option A requires VM maintenance because it is not a once-off migration (The company will store new data directly in Amazon S3) NB: According to me, we must stuck to the question and avoid to interpret<br><br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li><br> Erratum: Assertions: - needs to encrypt the data in transit to the S3 bucket. - The company will store new data directly in Amazon S3. Requirements: - with the LEAST operational overhead Even Though options A and B could do the job, option B requires VM maintenance because it is not a once-off migration (The company will store new data directly in Amazon S3) NB: According to me, we must stuck to the question and avoid to interpret<br></li></ul>",
          "upvote_count": "2",
          "selected_answers": "\n               Selected Answer: A\n              "
        },
        {
          "id": 1189085,
          "date": "Thu 04 Apr 2024 06:53",
          "username": "bujuman",
          "content": "<br> Erratum: Assertions: - needs to encrypt the data in transit to the S3 bucket. - The company will store new data directly in Amazon S3. Requirements: - with the LEAST operational overhead Even Though options A and B could do the job, option B requires VM maintenance because it is not a once-off migration (The company will store new data directly in Amazon S3) NB: According to me, we must stuck to the question and avoid to interpret<br>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1110768,
          "date": "Sun 31 Dec 2023 19:06",
          "username": "pentium75",
          "content": "<br> A - one single command, uses encryption automatically B - Must install, configure and eventually decommission DataSync C - Overkill D - No need for VPN<br><br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li><br> I agree, A is a million times simpler than B in terms of operational setup. AWS CLI is just one install on a server on client side and one command (literally) to sync the data.<br></li></ul>",
          "upvote_count": "4",
          "selected_answers": "\n               Selected Answer: A\n              "
        },
        {
          "id": 1126744,
          "date": "Fri 19 Jan 2024 15:27",
          "username": "awsgeek75",
          "content": "<br> I agree, A is a million times simpler than B in terms of operational setup. AWS CLI is just one install on a server on client side and one command (literally) to sync the data.<br>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1101843,
          "date": "Wed 20 Dec 2023 19:46",
          "username": "1rob",
          "content": "<br> By default, all data transmitted from the client computer running the AWS CLI and AWS service endpoints is encrypted by sending everything through a HTTPS/TLS connection. You don't need to do anything to enable the use of HTTPS/TLS. It is always enabled unless you explicitly disable it for an individual command by using the --no-verify-ssl command line option. This is simpler compared to datasync, which will cost operational overhead to configure.<br>",
          "upvote_count": "1",
          "selected_answers": "\n               Selected Answer: A\n              "
        },
        {
          "id": 1063239,
          "date": "Sun 05 Nov 2023 21:14",
          "username": "potomac",
          "content": "<br> storage data (including metadata) is encrypted in transit, but how it's encrypted throughout the transfer depends on your source and destination locations.<br>",
          "upvote_count": "2",
          "selected_answers": "\n               Selected Answer: B\n              "
        },
        {
          "id": 1049218,
          "date": "Sat 21 Oct 2023 03:59",
          "username": "thanhnv142",
          "content": "<br> B is correct to migrate A is incorrect because is it only used to upload minor files (about a few GB) to AWS. 100 GB is not appropriate.<br><br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li><br> There is no limitation on AWS CLI s3 sync command transfer size. Not that I can find in the docs. https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html Happy to be corrected!<br></li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1126747,
          "date": "Fri 19 Jan 2024 15:29",
          "username": "awsgeek75",
          "content": "<br> There is no limitation on AWS CLI s3 sync command transfer size. Not that I can find in the docs. https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html Happy to be corrected!<br>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 988458,
          "date": "Wed 23 Aug 2023 18:05",
          "username": "Guru4Cloud",
          "content": "<br> Use AWS DataSync to migrate the data from the on-premises location to an S3 bucket<br>",
          "upvote_count": "4",
          "selected_answers": "\n               Selected Answer: B\n              "
        },
        {
          "id": 952830,
          "date": "Sun 16 Jul 2023 02:56",
          "username": "HectorLeon2099",
          "content": "<br> B is a good option but as the volume is not large and the speed is not bad, A requires less operational overhead<br>",
          "upvote_count": "4",
          "selected_answers": "\n               Selected Answer: A\n              "
        },
        {
          "id": 945214,
          "date": "Fri 07 Jul 2023 05:17",
          "username": "VellaDevil",
          "content": "<br> Answer A and B both are correct and with least operational overhead. But since the question says from an \\\"On-premise Location\\\" hence I would go with DataSync.<br>",
          "upvote_count": "1",
          "selected_answers": "\n               Selected Answer: B\n              "
        },
        {
          "id": 931190,
          "date": "Fri 23 Jun 2023 05:43",
          "username": "TariqKipkemei",
          "content": "<br> AWS DataSync is a secure, online service that automates and accelerates moving data between on premises and AWS Storage services.<br>",
          "upvote_count": "2",
          "selected_answers": "\n               Selected Answer: B\n              "
        },
        {
          "id": 927475,
          "date": "Mon 19 Jun 2023 14:35",
          "username": "vrevkov",
          "content": "<br> Why not A? s3 is already encrypted in transit by TLS. We need to have the LEAST operational overhead and DataSync implies the installation of Agent whereas AWS CLI is easier to use.<br><br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li><br> I can think of two reasons. - S3 does have HTTP and HTTPS endpoints available. - DataSync offers data compression - considering the question mentions of internet bandwidth is mentioned.<br></li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 989430,
          "date": "Thu 24 Aug 2023 21:11",
          "username": "Smart",
          "content": "<br> I can think of two reasons. - S3 does have HTTP and HTTPS endpoints available. - DataSync offers data compression - considering the question mentions of internet bandwidth is mentioned.<br>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 923625,
          "date": "Thu 15 Jun 2023 02:42",
          "username": "Axeashes",
          "content": "<br> https://docs.aws.amazon.com/cli/latest/userguide/cli-services-s3-commands.html<br>",
          "upvote_count": "3",
          "selected_answers": "\n               Selected Answer: A\n              "
        },
        {
          "id": 899768,
          "date": "Wed 17 May 2023 07:45",
          "username": "EA100",
          "content": "<br> Answer - A Use the s3 sync command in the AWS CLI to move the data directly to an S3 bucket.<br>",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#483",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company containerized a Windows job that runs on .NET 6 Framework under a Windows container. The company wants to run this job in the AWS Cloud. The job runs every 10 minutes. The job's runtime varies between 1 minute and 3 minutes.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#483",
          "answers": [
            {
              "choice": "<p>Create an AWS Lambda function based on the container image of the job. Configure Amazon EventBridge to invoke the function every 10 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Batch to create a job that uses AWS Fargate resources. Configure the job scheduling to run every 10 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate to run the job. Create a scheduled task based on the container image of the job to run every 10 minutes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate to run the job. Create a standalone task based on the container image of the job. Use Windows task scheduler to run the job every10 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 483 discussion",
      "discusstion": [
        {
          "id": 1018204,
          "date": "Tue 26 Sep 2023 23:51",
          "username": "baba365",
          "content": "Lambda supports only Linux-based container images.<br><br>https://docs.aws.amazon.com/lambda/latest/dg/images-create.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Not really. Lambda supports .Net 6 directly: https://aws.amazon.com/blogs/compute/introducing-the-net-6-runtime-for-aws-lambda/</li></ul>",
          "upvote_count": "15",
          "selected_answers": ""
        },
        {
          "id": 1117001,
          "date": "Mon 08 Jan 2024 21:44",
          "username": "awsgeek75",
          "content": "Not really. Lambda supports .Net 6 directly: https://aws.amazon.com/blogs/compute/introducing-the-net-6-runtime-for-aws-lambda/",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 903515,
          "date": "Sun 21 May 2023 21:48",
          "username": "AmrFawzy93",
          "content": "By using Amazon ECS on AWS Fargate, you can run the job in a containerized environment while benefiting from the serverless nature of Fargate, where you only pay for the resources used during the job's execution. Creating a scheduled task based on the container image of the job ensures that it runs every 10 minutes, meeting the required schedule. This solution provides flexibility, scalability, and cost-effectiveness.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1343314,
          "date": "Mon 20 Jan 2025 04:50",
          "username": "zdi561",
          "content": "Lambdacanbe in.net container, and it is the cheaper than any other options.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1322290,
          "date": "Thu 05 Dec 2024 10:10",
          "username": "LeonSauveterre",
          "content": "For B: Even though AWS Batch is free, I think it's more suitable for large-scale or relatively complex workloads, not lightweight periodic jobs. So B is not cost-effective (The cost depends on the compute resources you provision to execute the jobs, and maybe \\\"cost-effective\\\" somewhat involves less operational overhead because you have spent your money)<br><br>If you require queueing for task prioritization or processing a backlog of tasks, or work on data processing over datasets where Batch excels, AWS Batch would be better!",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1259517,
          "date": "Thu 01 Aug 2024 20:24",
          "username": "muhammadahmer36",
          "content": "A A A A A A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1191409,
          "date": "Mon 08 Apr 2024 07:51",
          "username": "zinabu",
          "content": "selected answer : A<br>AWS Lambda now supports .NET 6 as both a managed runtime and a container base image",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1189547,
          "date": "Thu 04 Apr 2024 23:11",
          "username": "xBUGx",
          "content": "https://aws.amazon.com/about-aws/whats-new/2022/02/aws-lambda-adds-support-net6/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1117002,
          "date": "Mon 08 Jan 2024 21:46",
          "username": "awsgeek75",
          "content": "The question is weirdly phrased for .Net based containers. \\\"A company containerized a Windows job that runs on .NET 6 Framework under a Windows container.\\\" This could mean that the job requires .Net 6 Framework OR it could mean the job requires Windows and .Net Framework 6. If the job is just based on .Net 6 then Lambda can run it. I am just a bit cautious about language because other parameters fall under Lambda. Question may have been wrongly quoted here.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1110983,
          "date": "Mon 01 Jan 2024 07:39",
          "username": "pentium75",
          "content": "I guess this is an old question from before August 2023, when AWS Batch did not support Windows containers, while ECS already did since September 2021. Thus it would be C, though now B does also work. Since both Batch and ECS are free, we'd pay only for the Fargate resources (which are identical in both cases), now B and C would be correct.<br><br>A doesn't work because Lambda still does not support Windows containeres.<br>D doesn't make sense because the container would have to run 24/7",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1100701,
          "date": "Tue 19 Dec 2023 15:27",
          "username": "ftaws",
          "content": "I think that Batch with Fargate is more cheaper than ECS.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Both Batch and ECS are free.<br>https://aws.amazon.com/de/ecs/pricing/<br>https://aws.amazon.com/de/batch/pricing/</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1110982,
          "date": "Mon 01 Jan 2024 07:36",
          "username": "pentium75",
          "content": "Both Batch and ECS are free.<br>https://aws.amazon.com/de/ecs/pricing/<br>https://aws.amazon.com/de/batch/pricing/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1070905,
          "date": "Tue 14 Nov 2023 23:43",
          "username": "kt7",
          "content": "Batch supports fargate now",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1060583,
          "date": "Thu 02 Nov 2023 14:27",
          "username": "ccmc",
          "content": "aws batch supports fargate",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 996007,
          "date": "Fri 01 Sep 2023 13:39",
          "username": "deechean",
          "content": "C works. For A, the lambda support container image, but the container image much implement the Lambda Runtime API.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Absolutely agree with this one ... Lambda do not support Windows container, on the other hand ECS is adequate solution</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1007830,
          "date": "Thu 14 Sep 2023 19:24",
          "username": "markoniz",
          "content": "Absolutely agree with this one ... Lambda do not support Windows container, on the other hand ECS is adequate solution",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 994457,
          "date": "Wed 30 Aug 2023 22:55",
          "username": "Hades2231",
          "content": "As they support Batch on Fargate now (Aug 2023), the correct answer should be B?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>that's exactly my question too.<br>In one of the discussions, they same lambda is for jobs for 15 min. But for other question, they same batch is the best. I do not understand why we cant use batch?</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1013604,
          "date": "Fri 22 Sep 2023 07:03",
          "username": "RDM10",
          "content": "that's exactly my question too.<br>In one of the discussions, they same lambda is for jobs for 15 min. But for other question, they same batch is the best. I do not understand why we cant use batch?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 989435,
          "date": "Thu 24 Aug 2023 21:16",
          "username": "Smart",
          "content": "https://docs.aws.amazon.com/lambda/latest/dg/csharp-image.html#csharp-image-clients<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But it's clearly \\\"a Windows job\\\". Lambda does not support Windows containers. (.NET 6 could also run under Linux, but they'd need to modify the container in any case.)</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1110979,
          "date": "Mon 01 Jan 2024 07:29",
          "username": "pentium75",
          "content": "But it's clearly \\\"a Windows job\\\". Lambda does not support Windows containers. (.NET 6 could also run under Linux, but they'd need to modify the container in any case.)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 988457,
          "date": "Wed 23 Aug 2023 18:00",
          "username": "Guru4Cloud",
          "content": "C is the most cost-effective solution for running a short-lived Windows container job on a schedule.<br><br>Using Amazon ECS scheduled tasks on Fargate eliminates the need to provision EC2 resources. You pay only for the duration the task runs.<br><br>Scheduled tasks handle scheduling the jobs and scaling resources automatically. This is lower cost than managing your own scaling via Lambda or Batch.<br><br>ECS also supports Windows containers natively unlike Lambda (option A).<br><br>Option D still requires provisioning and paying for full time EC2 resources to run a task scheduler even when tasks are not running.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 987929,
          "date": "Wed 23 Aug 2023 06:45",
          "username": "cd93",
          "content": "August 2023, AWS Batch now support Windows container<br><br>https://docs.aws.amazon.com/batch/latest/userguide/fargate.html#when-to-use-fargate<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>https://aws.amazon.com/blogs/containers/running-windows-containers-with-amazon-ecs-on-aws-fargate/</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 992185,
          "date": "Mon 28 Aug 2023 14:52",
          "username": "cd93",
          "content": "https://aws.amazon.com/blogs/containers/running-windows-containers-with-amazon-ecs-on-aws-fargate/",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#484",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to move from many standalone AWS accounts to a consolidated, multi-account architecture. The company plans to create many new AWS accounts for different business units. The company needs to authenticate access to these AWS accounts by using a centralized corporate directory service.<br><br>Which combination of actions should a solutions architect recommend to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#484",
          "answers": [
            {
              "choice": "<p>Create a new organization in AWS Organizations with all features turned on. Create the new AWS accounts in the organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Set up an Amazon Cognito identity pool. Configure AWS IAM Identity Center (AWS Single Sign-On) to accept Amazon Cognito authentication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure a service control policy (SCP) to manage the AWS accounts. Add AWS IAM Identity Center (AWS Single Sign-On) to AWS Directory Service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a new organization in AWS Organizations. Configure the organization's authentication mechanism to use AWS Directory Service directly.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up AWS IAM Identity Center (AWS Single Sign-On) in the organization. Configure IAM Identity Center, and integrate it with the company's corporate directory service.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 484 discussion",
      "discusstion": [
        {
          "id": 901425,
          "date": "Sat 18 May 2024 19:49",
          "username": "cloudenthusiast",
          "content": "A. By creating a new organization in AWS Organizations, you can establish a consolidated multi-account architecture. This allows you to create and manage multiple AWS accounts for different business units under a single organization.<br><br>E. Setting up AWS IAM Identity Center (AWS Single Sign-On) within the organization enables you to integrate it with the company's corporate directory service. This integration allows for centralized authentication, where users can sign in using their corporate credentials and access the AWS accounts within the organization.<br><br>Together, these actions create a centralized, multi-account architecture that leverages AWS Organizations for account management and AWS IAM Identity Center (AWS Single Sign-On) for authentication and access control.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 988455,
          "date": "Fri 23 Aug 2024 17:52",
          "username": "Guru4Cloud",
          "content": "A) Using AWS Organizations allows centralized management of multiple AWS accounts in a single organization. New accounts can easily be created within the organization.<br><br>E) Integrating AWS IAM Identity Center (AWS SSO) with the company's corporate directory enables federated single sign-on. Users can log in once to access accounts and resources across AWS.<br><br>Together, Organizations and IAM Identity Center provide consolidated management and authentication for multiple accounts using existing corporate credentials.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 931746,
          "date": "Sun 23 Jun 2024 17:44",
          "username": "samehpalass",
          "content": "A:AWS Organization<br>E:Authentication because option C (SCP) for Authorization<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Ans: CD<br><br>=E2=80=98centralized corporate directory service' with new accounts in AWS Organizations</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 947405,
          "date": "Tue 09 Jul 2024 18:06",
          "username": "baba365",
          "content": "Ans: CD<br><br>=E2=80=98centralized corporate directory service' with new accounts in AWS Organizations",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 931200,
          "date": "Sun 23 Jun 2024 06:06",
          "username": "TariqKipkemei",
          "content": "Create a new organization in AWS Organizations with all features turned on. Create the new AWS accounts in the organization.<br>Set up AWS IAM Identity Center (AWS Single Sign-On) in the organization. Configure IAM Identity Center, and integrate it with the company's corporate directory service.<br><br>AWS IAM Identity Center (successor to AWS Single Sign-On) helps you securely create or connect your workforce identities and manage their access centrally across AWS accounts and applications.<br><br>https://aws.amazon.com/iam/identity-center/#:~:textAWS%20IAM%20Identity%20Center%20(successor%20to%20AWS%20Single%20Sign%2DOn)%20helps%20you%20securely%20create%20or%20connect%20your%20workforce%20identities%20and%20manage%20their%20access%20centrally%20across%20AWS%20accounts%20and%20applications.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 899538,
          "date": "Thu 16 May 2024 21:29",
          "username": "nosense",
          "content": "ae is right",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#485",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is looking for a solution that can store video archives in AWS from old news footage. The company needs to minimize costs and will rarely need to restore these files. When the files are needed, they must be available in a maximum of five minutes.<br><br>What is the MOST cost-effective solution?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#485",
          "answers": [
            {
              "choice": "<p>Store the video archives in Amazon S3 Glacier and use Expedited retrievals.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Store the video archives in Amazon S3 Glacier and use Standard retrievals.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the video archives in Amazon S3 Standard-Infrequent Access (S3 Standard-IA).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Store the video archives in Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 485 discussion",
      "discusstion": [
        {
          "id": 901428,
          "date": "Sat 18 Nov 2023 20:54",
          "username": "cloudenthusiast",
          "content": "By choosing Expedited retrievals in Amazon S3 Glacier, you can reduce the retrieval time to minutes, making it suitable for scenarios where quick access is required. Expedited retrievals come with a higher cost per retrieval compared to standard retrievals but provide faster access to your archived data.",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 899544,
          "date": "Thu 16 Nov 2023 22:32",
          "username": "nosense",
          "content": "glacier expedited retrieval times of typically 1-5 minutes.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Fully agree. Check here for evidences: https://aws.amazon.com/s3/storage-classes/glacier/#:~:textS3%20Glacier%20Flexible%20Retrieval%20provides,amounts%20of%20data%20typically%20in</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1056696,
          "date": "Mon 29 Apr 2024 08:57",
          "username": "wsdasdasdqwdaw",
          "content": "Fully agree. Check here for evidences: https://aws.amazon.com/s3/storage-classes/glacier/#:~:textS3%20Glacier%20Flexible%20Retrieval%20provides,amounts%20of%20data%20typically%20in",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1159997,
          "date": "Mon 26 Aug 2024 18:45",
          "username": "Ravan",
          "content": "The most cost-effective solution that also meets the requirement of having the files available within a maximum of five minutes when needed is:<br><br>A. Store the video archives in Amazon S3 Glacier and use Expedited retrievals.<br><br>Amazon S3 Glacier is designed for long-term storage of data archives, providing a highly durable and secure solution at a low cost. With Expedited retrievals, data can be retrieved within a few minutes, which meets the requirement of having the files available within five minutes when needed. This option provides the balance between cost-effectiveness and retrieval speed, making it the best choice for the company's needs.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1110988,
          "date": "Mon 01 Jul 2024 06:47",
          "username": "pentium75",
          "content": "Occasional cost for retrieval from Glacier is nothing compared to the huge storage cost savings compared to C. Still meets the five minute requirement.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1105922,
          "date": "Wed 26 Jun 2024 11:11",
          "username": "master9",
          "content": "The retrieval price will play an important role here. I selected the \\\"C\\\" option because in \\\"Glacier and use Expedited retrievals\\\" its around $0.004 per GB/month and for STD-IA $0.0125 per GB/month<br>https://www.cloudforecast.io/blog/aws-s3-pricing-and-optimization-guide/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But they \\\"will rarely need to restore their files\\\", thus the low cost for occasional expedited retrievals will be nothing compared to the huge storage cost savings.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1110985,
          "date": "Mon 01 Jul 2024 06:43",
          "username": "pentium75",
          "content": "But they \\\"will rarely need to restore their files\\\", thus the low cost for occasional expedited retrievals will be nothing compared to the huge storage cost savings.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1041687,
          "date": "Fri 12 Apr 2024 13:18",
          "username": "ngo01214",
          "content": "s3 expedited can only be applied on glacier flexible retrieval storage class and s3 intelligent tiering archive access tier. so the answer should be C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A mentions \\\"G3 Glacier\\\" which has been renamed to \\\"S3 Glacier Flexible Retrieval\\\" and meets the requirements.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1110987,
          "date": "Mon 01 Jul 2024 06:46",
          "username": "pentium75",
          "content": "A mentions \\\"G3 Glacier\\\" which has been renamed to \\\"S3 Glacier Flexible Retrieval\\\" and meets the requirements.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 989436,
          "date": "Sat 24 Feb 2024 22:20",
          "username": "Smart",
          "content": "I am going with option A, but it is a poorly written question. \\\"For all but the largest archives (more than 250 MB), data accessed by using Expedited retrievals is typically made available within 1=E2=80=935 minutes. \\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 988453,
          "date": "Fri 23 Feb 2024 18:44",
          "username": "Guru4Cloud",
          "content": "Answer - A<br>Fast availability: Although retrieval times for objects stored in Amazon S3 Glacier typically range from minutes to hours, you can use the Expedited retrievals option to expedite access to your archives. By using Expedited retrievals, the files can be made available in a maximum of five minutes when needed. However, Expedited retrievals do incur higher costs compared to standard retrievals.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 963243,
          "date": "Fri 26 Jan 2024 05:12",
          "username": "hsinchang",
          "content": "Expedited retrievals are designed for urgent requests and can provide access to data in as little as 1-5 minutes for most archive objects. Standard retrievals typically finish within 3-5 hours for objects stored in the S3 Glacier Flexible Retrieval storage class or S3 Intelligent-Tiering Archive Access tier. These retrievals typically finish within 12 hours for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive Access tier. So A.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 931201,
          "date": "Sat 23 Dec 2023 07:13",
          "username": "TariqKipkemei",
          "content": "Expedited retrievals allow you to quickly access your data that's stored in the S3 Glacier Flexible Retrieval storage class or the S3 Intelligent-Tiering Archive Access tier when occasional urgent requests for restoring archives are required. Data accessed by using Expedited retrievals is typically made available within 1=E2=80=935 minutes.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 927416,
          "date": "Tue 19 Dec 2023 14:32",
          "username": "MrAWSAssociate",
          "content": "A for sure!",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 909907,
          "date": "Thu 30 Nov 2023 08:23",
          "username": "Doyin8807",
          "content": "C because A is not the most cost effective",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 901223,
          "date": "Sat 18 Nov 2023 16:01",
          "username": "luiscc",
          "content": "Expedited retrieval typically takes 1-5 minutes to retrieve data, making it suitable for the company's requirement of having the files available in a maximum of five minutes.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 900904,
          "date": "Sat 18 Nov 2023 11:14",
          "username": "Efren",
          "content": "Glacier expedite",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 899770,
          "date": "Fri 17 Nov 2023 08:52",
          "username": "EA100",
          "content": "Answer - A<br>Fast availability: Although retrieval times for objects stored in Amazon S3 Glacier typically range from minutes to hours, you can use the Expedited retrievals option to expedite access to your archives. By using Expedited retrievals, the files can be made available in a maximum of five minutes when needed. However, Expedited retrievals do incur higher costs compared to standard retrievals.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#486",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a three-tier application on AWS. The presentation tier will serve a static website The logic tier is a containerized application. This application will store data in a relational database. The company wants to simplify deployment and to reduce operational costs.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#486",
          "answers": [
            {
              "choice": "<p>Use Amazon S3 to host static content. Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate for compute power. Use a managed Amazon RDS cluster for the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon CloudFront to host static content. Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 for compute power. Use a managed Amazon RDS cluster for the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon S3 to host static content. Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute power. Use a managed Amazon RDS cluster for the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon EC2 Reserved Instances to host static content. Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 for compute power. Use a managed Amazon RDS cluster for the database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 486 discussion",
      "discusstion": [
        {
          "id": 903902,
          "date": "Wed 22 Nov 2023 12:29",
          "username": "Yadav_Sanjay",
          "content": "ECS is slightly cheaper than EKS",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 901431,
          "date": "Sat 18 Nov 2023 20:57",
          "username": "cloudenthusiast",
          "content": "Amazon S3 is a highly scalable and cost-effective storage service that can be used to host static website content. It provides durability, high availability, and low latency access to the static files.<br><br>Amazon ECS with AWS Fargate eliminates the need to manage the underlying infrastructure. It allows you to run containerized applications without provisioning or managing EC2 instances. This reduces operational overhead and provides scalability.<br><br>By using a managed Amazon RDS cluster for the database, you can offload the management tasks such as backups, patching, and monitoring to AWS. This reduces the operational burden and ensures high availability and durability of the database.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1117009,
          "date": "Mon 08 Jul 2024 21:01",
          "username": "awsgeek75",
          "content": "B: CloudFrontExtra cost for something they don't want (CDN)<br>C: Kubernetes is more operationally complex than ECS containers on Fargate.<br>D: EC2 expensive<br>A: S3 is cheap for static content. ECS with Fargate is easiest implantation. Managed RDS is very low op overhead",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1052552,
          "date": "Wed 24 Apr 2024 07:30",
          "username": "wsdasdasdqwdaw",
          "content": "Why not B ?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Aaa I got it. With CF we are adding additional cost &gt; A.</li><li>A is better because ECS Fargate\\\"containerized application\\\"</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1052555,
          "date": "Wed 24 Apr 2024 07:35",
          "username": "wsdasdasdqwdaw",
          "content": "Aaa I got it. With CF we are adding additional cost > A.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>A is better because ECS Fargate\\\"containerized application\\\"</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1090255,
          "date": "Fri 07 Jun 2024 11:56",
          "username": "cyber_bedouin",
          "content": "A is better because ECS Fargate\\\"containerized application\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 988449,
          "date": "Fri 23 Feb 2024 18:42",
          "username": "Guru4Cloud",
          "content": "Use Amazon S3 to host static content. Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate for compute power. Use a managed Amazon RDS cluster for the database.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 949019,
          "date": "Thu 11 Jan 2024 17:15",
          "username": "jaydesai8",
          "content": "S3 hosting static contents<br>EcsLittle cheaper than EKS<br>RDSDatabase",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 934012,
          "date": "Tue 26 Dec 2023 06:45",
          "username": "TariqKipkemei",
          "content": "Use Amazon S3 to host static content. Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate for compute power. Use a managed Amazon RDS cluster for the database",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#487",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company seeks a storage solution for its application. The solution must be highly available and scalable. The solution also must function as a file system be mountable by multiple Linux instances in AWS and on premises through native protocols, and have no minimum size requirements. The company has set up a Site-to-Site VPN for access from its on-premises network to its VPC.<br><br>Which storage solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#487",
          "answers": [
            {
              "choice": "<p>Amazon FSx Multi-AZ deployments<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Elastic Block Store (Amazon EBS) Multi-Attach volumes<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Elastic File System (Amazon EFS) with multiple mount targets<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Amazon Elastic File System (Amazon EFS) with a single mount target and multiple access points<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 487 discussion",
      "discusstion": [
        {
          "id": 914682,
          "date": "Mon 04 Dec 2023 16:39",
          "username": "Felix_br",
          "content": "The other options are incorrect for the following reasons:<br><br>A. Amazon FSx Multi-AZ deployments Amazon FSx is a managed file system service that provides access to file systems that are hosted on Amazon EC2 instances. Amazon FSx does not support native protocols, such as NFS.<br>B. Amazon Elastic Block Store (Amazon EBS) Multi-Attach volumes Amazon EBS is a block storage service that provides durable, block-level storage volumes for use with Amazon EC2 instances. Amazon EBS Multi-Attach volumes can be attached to multiple EC2 instances at the same time, but they cannot be mounted by multiple Linux instances through native protocols, such as NFS.<br>D. Amazon Elastic File System (Amazon EFS) with a single mount target and multiple access points A single mount target can only be used to mount the file system on a single EC2 instance. Multiple access points are used to provide access to the file system from different VPCs.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"A single mount target can only be used to mount the file system on a single EC2 instance. Multiple access points are used to provide access to the file system from different VPCs.\\\"<br><br>This is clearly wrong. You can have exactly one EFS mount target per subnet (AZ), and of course this mount target can be used by many clients (EC2 instances, containers etc.) - see diagram here for example: https://docs.aws.amazon.com/efs/latest/ug/accessing-fs.html<br><br>In my opinion, C and D are equally valid answers.</li><li>D is not valid answer because \\\"the solution must be highly available\\\" then it must be multi-AZ: every AZ requires a mount target</li><li>Amazon FSx ONTAP supports clients mounting it with NFS. https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/attach-linux-client.html. Though A is not clear about which FSx product is used</li></ul>",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1170954,
          "date": "Wed 11 Sep 2024 11:10",
          "username": "dkw2342",
          "content": "\\\"A single mount target can only be used to mount the file system on a single EC2 instance. Multiple access points are used to provide access to the file system from different VPCs.\\\"<br><br>This is clearly wrong. You can have exactly one EFS mount target per subnet (AZ), and of course this mount target can be used by many clients (EC2 instances, containers etc.) - see diagram here for example: https://docs.aws.amazon.com/efs/latest/ug/accessing-fs.html<br><br>In my opinion, C and D are equally valid answers.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>D is not valid answer because \\\"the solution must be highly available\\\" then it must be multi-AZ: every AZ requires a mount target</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1331052,
          "date": "Tue 24 Dec 2024 08:50",
          "username": "Salilgen",
          "content": "D is not valid answer because \\\"the solution must be highly available\\\" then it must be multi-AZ: every AZ requires a mount target",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1054492,
          "date": "Fri 26 Apr 2024 13:17",
          "username": "unbendable",
          "content": "Amazon FSx ONTAP supports clients mounting it with NFS. https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/attach-linux-client.html. Though A is not clear about which FSx product is used",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 901434,
          "date": "Sat 18 Nov 2023 21:03",
          "username": "cloudenthusiast",
          "content": "Amazon EFS is a fully managed file system service that provides scalable, shared storage for Amazon EC2 instances. It supports the Network File System version 4 (NFSv4) protocol, which is a native protocol for Linux-based systems. EFS is designed to be highly available, durable, and scalable.",
          "upvote_count": "9",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1117012,
          "date": "Mon 08 Jul 2024 21:05",
          "username": "awsgeek75",
          "content": "A: FSx is a File Server, not a mountable file system<br>B: EBS can't be mounted on on-prem devices<br>D: Access points are not same as mount points<br>C: EFS support multi mount targets and on-prem devices: https://docs.aws.amazon.com/efs/latest/ug/mounting-fs-mount-helper-direct.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1045583,
          "date": "Wed 17 Apr 2024 07:40",
          "username": "iwannabeawsgod",
          "content": "EFS POSIX LINUX",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 988447,
          "date": "Fri 23 Feb 2024 18:40",
          "username": "Guru4Cloud",
          "content": "C. Amazon Elastic File System (Amazon EFS) with multiple mount targets",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 906225,
          "date": "Sat 25 Nov 2023 03:40",
          "username": "boubie44",
          "content": "i don't understand why not D?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>the requirement is mountable by multiple Linux<br>-&gt; C (multiple mount targets)</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 908081,
          "date": "Mon 27 Nov 2023 18:52",
          "username": "lucdt4",
          "content": "the requirement is mountable by multiple Linux<br>-> C (multiple mount targets)",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#488",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A 4-year-old media company is using the AWS Organizations all features feature set to organize its AWS accounts. According to the company's finance team, the billing information on the member accounts must not be accessible to anyone, including the root user of the member accounts.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#488",
          "answers": [
            {
              "choice": "<p>Add all finance team users to an IAM group. Attach an AWS managed policy named Billing to the group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Attach an identity-based policy to deny access to the billing information to all users, including the root user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create a service control policy (SCP) to deny access to the billing information. Attach the SCP to the root organizational unit (OU).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Convert from the Organizations all features feature set to the Organizations consolidated billing feature set.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 488 discussion",
      "discusstion": [
        {
          "id": 901436,
          "date": "Sat 18 Nov 2023 21:04",
          "username": "cloudenthusiast",
          "content": "Service Control Policies (SCP): SCPs are an integral part of AWS Organizations and allow you to set fine-grained permissions on the organizational units (OUs) within your AWS Organization. SCPs provide central control over the maximum permissions that can be granted to member accounts, including the root user.<br><br>Denying Access to Billing Information: By creating an SCP and attaching it to the root OU, you can explicitly deny access to billing information for all accounts within the organization. SCPs can be used to restrict access to various AWS services and actions, including billing-related services.<br><br>Granular Control: SCPs enable you to define specific permissions and restrictions at the organizational unit level. By denying access to billing information at the root OU, you can ensure that no member accounts, including root users, have access to the billing information.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 968018,
          "date": "Wed 31 Jan 2024 14:30",
          "username": "Kiki_Pass",
          "content": "but SCP do not apply to the management account (full admin power)?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>i can understand this information coming from the famous course in udemy. I tought same, but after some research i now think it is a wrong information.<br>\\\"SCPs affect all users and roles in attached accounts, including the root user. The only exceptions are those described in Tasks and entities not restricted by SCPs.\\\"<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html#:~:textSCPs%20affect%20all%20users%20and,affect%20any%20service%2Dlinked%20role.</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1208309,
          "date": "Fri 08 Nov 2024 12:56",
          "username": "TwinSpark",
          "content": "i can understand this information coming from the famous course in udemy. I tought same, but after some research i now think it is a wrong information.<br>\\\"SCPs affect all users and roles in attached accounts, including the root user. The only exceptions are those described in Tasks and entities not restricted by SCPs.\\\"<br>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html#:~:textSCPs%20affect%20all%20users%20and,affect%20any%20service%2Dlinked%20role.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1063249,
          "date": "Sun 05 May 2024 20:26",
          "username": "potomac",
          "content": "SCP is for authorization",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 988436,
          "date": "Fri 23 Feb 2024 18:26",
          "username": "Guru4Cloud",
          "content": "C. Create a service control policy (SCP) to deny access to the billing information. Attach the SCP to the root organizational unit (OU)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 939828,
          "date": "Mon 01 Jan 2024 13:19",
          "username": "PRASAD180",
          "content": "C Crt 100%",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 934026,
          "date": "Tue 26 Dec 2023 07:09",
          "username": "TariqKipkemei",
          "content": "Service control policyare a type of organization policy that you can use to manage permissions in your organization. SCPs offer central control over the maximum available permissions for all accounts in your organization. SCPs help you to ensure your accounts stay within your organization's access control guidelines. SCPs are available only in an organization that has all features enabled.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 914762,
          "date": "Mon 04 Dec 2023 18:01",
          "username": "Abrar2022",
          "content": "By denying access to billing information at the root OU, you can ensure that no member accounts, including root users, have access to the billing information.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 899950,
          "date": "Fri 17 Nov 2023 12:54",
          "username": "nosense",
          "content": "c for me",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#489",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company runs an application in the AWS Cloud that is integrated with an on-premises warehouse solution. The company uses Amazon Simple Notification Service (Amazon SNS) to send order messages to an on-premises HTTPS endpoint so the warehouse application can process the orders. The local data center team has detected that some of the order messages were not received.<br><br>A solutions architect needs to retain messages that are not delivered and analyze the messages for up to 14 days.<br><br>Which solution will meet these requirements with the LEAST development effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#489",
          "answers": [
            {
              "choice": "<p>Configure an Amazon SNS dead letter queue that has an Amazon Kinesis Data Stream target with a retention period of 14 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Add an Amazon Simple Queue Service (Amazon SQS) queue with a retention period of 14 days between the application and Amazon SNS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon SNS dead letter queue that has an Amazon Simple Queue Service (Amazon SQS) target with a retention period of 14 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon SNS dead letter queue that has an Amazon DynamoDB target with a TTL attribute set for a retention period of 14 days.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 489 discussion",
      "discusstion": [
        {
          "id": 1110995,
          "date": "Mon 01 Jul 2024 07:09",
          "username": "pentium75",
          "content": "\\\"Configuring an Amazon SNS dead-letter queue for a subscription ...<br>A dead-letter queue is an Amazon SQS queue that an Amazon SNS subscription can target for messages that can't be delivered to subscribers successfully\\\", this is exactly what C says. https://docs.aws.amazon.com/sns/latest/dg/sns-configure-dead-letter-queue.html<br><br>B, an SQS queue \\\"between the application and Amazon SNS\\\" would change the application logic. SQS cannot push messages to the \\\"on-premises https endpoint\\\", rather the destination would have to retrieve messages from the queue. Besides, option B would eventually deliver the messages that failed on the first attempt, which is NOT what is asked for. The goal is to retain undeliverable messages for analysis (NOT to deliver them), and this is typically achieved with a dead letter queue.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1117018,
          "date": "Mon 08 Jul 2024 21:13",
          "username": "awsgeek75",
          "content": "LEAST development effort!<br>A: Custom dead letter queue using Kinesis Data Stream (laughable solution!) so lots of coding<br>B: Change app logic to put SQS between SNS and the app. Also too much coding<br>D: Same as A, too much code change<br>C: SNS dead letter queue is by default a SQS que so no coding required",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1123825,
          "date": "Tue 16 Jul 2024 03:11",
          "username": "osmk",
          "content": "A dead-letter queue is an Amazon SQS queue that an Amazon SNS subscription can target for messages that can't be delivered to subscribers successfully.https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1098462,
          "date": "Sun 16 Jun 2024 19:36",
          "username": "Mikado211",
          "content": "Problem here SNS dead letter queue is a SQS queue, so technically speaking both B and C are right. But I suppose that they want us to speak about SNS dead letter queue, that nobody do... meh, frustrating.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Aaaah ok.<br><br>So with Byou place the SQS queue between the application and the SNS topic<br>with Cyou place the SQS queue as a DLQ for the SNS topic<br><br>Of course it's C !</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1098463,
          "date": "Sun 16 Jun 2024 19:42",
          "username": "Mikado211",
          "content": "Aaaah ok.<br><br>So with Byou place the SQS queue between the application and the SNS topic<br>with Cyou place the SQS queue as a DLQ for the SNS topic<br><br>Of course it's C !",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 1093948,
          "date": "Wed 12 Jun 2024 00:12",
          "username": "aws94",
          "content": "https://docs.aws.amazon.com/sns/latest/dg/sns-configure-dead-letter-queue.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1052499,
          "date": "Wed 24 Apr 2024 06:38",
          "username": "daniel1",
          "content": "GPT4 to the rescue:<br>The most appropriate solution would be to configure an Amazon SNS dead letter queue with an Amazon Simple Queue Service (Amazon SQS) target with a retention period of 14 days (Option C). This setup would ensure that any undelivered messages are retained in the SQS queue for up to 14 days for analysis, with minimal development effort required.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ChatGPT is not a reliable source.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1084847,
          "date": "Sat 01 Jun 2024 00:32",
          "username": "ealpuche",
          "content": "ChatGPT is not a reliable source.",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 1049771,
          "date": "Sun 21 Apr 2024 21:24",
          "username": "Wayne23Fang",
          "content": "I like (B) since it is put SQS before SNS so we could prepare for retention. (C) dead letter Queue is kind of \\\"rescue\\\" effort. Also (C) should mention reprocessingdead letter.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Reprocessing dead letters\\\" is not desired here. They want to \\\"retain messages that are not delivered and analyze the messages for up to 14 days\\\", which is what C does.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1110992,
          "date": "Mon 01 Jul 2024 07:02",
          "username": "pentium75",
          "content": "\\\"Reprocessing dead letters\\\" is not desired here. They want to \\\"retain messages that are not delivered and analyze the messages for up to 14 days\\\", which is what C does.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1049224,
          "date": "Sun 21 Apr 2024 04:20",
          "username": "thanhnv142",
          "content": "C is correct. It used a combination of SNS and SQS so it better than B.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1045584,
          "date": "Wed 17 Apr 2024 07:46",
          "username": "iwannabeawsgod",
          "content": "C is the answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1010917,
          "date": "Tue 19 Mar 2024 02:55",
          "username": "Devsin2000",
          "content": "B is correct Answer. SQS Retain messages in queues for up to 14 days<br>C is incorrect because there is nothing called Amazon SNS dead letter queue<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>C \\\"Configure an Amazon SNS dead letter queue\\\"<br>AWS \\\"Configuring an Amazon SNS dead-letter queue\\\"<br>https://docs.aws.amazon.com/sns/latest/dg/sns-configure-dead-letter-queue.html</li><li>https://docs.aws.amazon.com/sns/latest/dg/sns-configure-dead-letter-queue.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1110996,
          "date": "Mon 01 Jul 2024 07:10",
          "username": "pentium75",
          "content": "C \\\"Configure an Amazon SNS dead letter queue\\\"<br>AWS \\\"Configuring an Amazon SNS dead-letter queue\\\"<br>https://docs.aws.amazon.com/sns/latest/dg/sns-configure-dead-letter-queue.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1013639,
          "date": "Fri 22 Mar 2024 08:49",
          "username": "RDM10",
          "content": "https://docs.aws.amazon.com/sns/latest/dg/sns-configure-dead-letter-queue.html",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 990424,
          "date": "Mon 26 Feb 2024 01:28",
          "username": "lemur88",
          "content": "https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 988435,
          "date": "Fri 23 Feb 2024 18:24",
          "username": "Guru4Cloud",
          "content": "C. Configure an Amazon SNS dead letter queue that has an Amazon Simple Queue Service (Amazon SQS) target with a retention period of 14 days.<br> By using an Amazon SQS queue as the target for the dead letter queue, you ensure that the undelivered messages are reliably stored in a queue for up to 14 days. Amazon SQS allows you to specify a retention period for messages, which meets the retention requirement without additional development effort.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 983060,
          "date": "Sat 17 Feb 2024 00:55",
          "username": "mtmayer",
          "content": "Dead Letter is a SQS feature not SNS. <br>A dead-letter queue is an Amazon SQS queue that an Amazon SNS subscription can target for messages that can't be delivered to subscribers successfully. Messages that can't be delivered due to client errors or server errors are held in the dead-letter queue for further analysis or reprocessing. For more information, see Configuring an Amazon SNS dead-letter queue for a subscription and Amazon SNS message delivery retries.<br>https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"See Configuring an Amazon SNS (!) dead-letter queue\\\", exactly, thus C.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1110993,
          "date": "Mon 01 Jul 2024 07:04",
          "username": "pentium75",
          "content": "\\\"See Configuring an Amazon SNS (!) dead-letter queue\\\", exactly, thus C.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 973327,
          "date": "Mon 05 Feb 2024 22:31",
          "username": "xyb",
          "content": "In SNS, DLQs store the messages that failed to be delivered to subscribed endpoints. For more information, see Amazon SNS Dead-Letter Queues.<br><br>In SQS, DLQs store the messages that failed to be processed by your consumer application. This failure mode can happen when producers and consumers fail to interpret aspects of the protocol that they use to communicate. In that case, the consumer receives the message from the queue, but fails to process it, as the message doesn't have the structure or content that the consumer expects. The consumer can't delete the message from the queue either. After exhausting the receive count in the redrive policy, SQS can sideline the message to the DLQ. For more information, see Amazon SQS Dead-Letter Queues.<br><br>https://aws.amazon.com/blogs/compute/designing-durable-serverless-apps-with-dlqs-for-amazon-sns-amazon-sqs-aws-lambda/<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Configuring an Amazon SNS dead-letter queue for a subscription<br><br>A dead-letter queue is an Amazon SQS queue that an Amazon SNS subscription can target for messages that can't be delivered to subscribers successfully. \\\"</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1110994,
          "date": "Mon 01 Jul 2024 07:05",
          "username": "pentium75",
          "content": "\\\"Configuring an Amazon SNS dead-letter queue for a subscription<br><br>A dead-letter queue is an Amazon SQS queue that an Amazon SNS subscription can target for messages that can't be delivered to subscribers successfully. \\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 934029,
          "date": "Tue 26 Dec 2023 07:19",
          "username": "TariqKipkemei",
          "content": "C is best to handle this requirement. Although good to note that dead-letter queue is an SQS queue.<br><br>\\\"A dead-letter queue is an Amazon SQS queue that an Amazon SNS subscription can target for messages that can't be delivered to subscribers successfully. Messages that can't be delivered due to client errors or server errors are held in the dead-letter queue for further analysis or reprocessing.\\\"<br><br>https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html#:~:textA%20dead%2Dletter%20queue%20is%20an%20Amazon%20SQS%20queue",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 914726,
          "date": "Mon 04 Dec 2023 17:15",
          "username": "Felix_br",
          "content": "C - Amazon SNS dead letter queues are used to handle messages that are not delivered to their intended recipients. When a message is sent to an Amazon SNS topic, it is first delivered to the topic's subscribers. If a message is not delivered to any of the subscribers, it is sent to the topic's dead letter queue.<br><br>Amazon SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. Amazon SQS queues can be configured to have a retention period, which is the amount of time that messages will be kept in the queue before they are deleted.<br><br>To meet the requirements of the company, you can configure an Amazon SNS dead letter queue that has an Amazon SQS target with a retention period of 14 days. This will ensure that any messages that are not delivered to the on-premises warehouse application will be stored in the Amazon SQS queue for up to 14 days. The company can then analyze the messages in the Amazon SQS queue to determine why they were not delivered.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 904509,
          "date": "Thu 23 Nov 2023 05:56",
          "username": "Yadav_Sanjay",
          "content": "https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#490",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A gaming company uses Amazon DynamoDB to store user information such as geographic location, player data, and leaderboards. The company needs to configure continuous backups to an Amazon S3 bucket with a minimal amount of coding. The backups must not affect availability of the application and must not affect the read capacity units (RCUs) that are defined for the table.<br><br>Which solution meets these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#490",
          "answers": [
            {
              "choice": "<p>Use an Amazon EMR cluster. Create an Apache Hive job to back up the data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Export the data directly from DynamoDB to Amazon S3 with continuous backups. Turn on point-in-time recovery for the table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon DynamoDB Streams. Create an AWS Lambda function to consume the stream and export the data to an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Create an AWS Lambda function to export the data from the database tables to Amazon S3 on a regular basis. Turn on point-in-time recovery for the table.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 490 discussion",
      "discusstion": [
        {
          "id": 908728,
          "date": "Tue 28 Nov 2023 19:06",
          "username": "elmogy",
          "content": "Continuous backups is a native feature of DynamoDB, it works at any scale without having to manage servers or clusters and allows you to export data across AWS Regions and accounts to any point-in-time in the last 35 days at a per-second granularity. Plus, it doesn't affect the read capacity or the availability of your production tables.<br><br>https://aws.amazon.com/blogs/aws/new-export-amazon-dynamodb-table-data-to-data-lake-amazon-s3/",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1117024,
          "date": "Mon 08 Jul 2024 21:27",
          "username": "awsgeek75",
          "content": "A: Impacts RCU<br>C: Requires coding of Lambda to read from stream to S3<br>D: More coding in Lambda<br>B: AWS Managed solution with no coding",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1063255,
          "date": "Sun 05 May 2024 20:33",
          "username": "potomac",
          "content": "DynamoDB export to S3 is a fully managed solution for exporting DynamoDB data to an Amazon S3 bucket at scale.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1018222,
          "date": "Wed 27 Mar 2024 01:21",
          "username": "baba365",
          "content": "A DynamoDB stream is an ordered flow of information about changes to items in a DynamoDB table=E2=80=A6 for C.U.D events ( Create, Update, Delete) and its logs are retained for only 24hrs .",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 988425,
          "date": "Fri 23 Feb 2024 18:12",
          "username": "Guru4Cloud",
          "content": "Export the data directly from DynamoDB to Amazon S3 with continuous backups. Turn on point-in-time recovery for the table.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 974431,
          "date": "Wed 07 Feb 2024 08:58",
          "username": "ukivanlamlpi",
          "content": "continous backup, no impact to availability > DynamoDB stream<br>B. export is one off, noy continuous and demand on read capacity",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 963260,
          "date": "Fri 26 Jan 2024 05:30",
          "username": "hsinchang",
          "content": "minimal amount of coding rules out Lambda",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 939103,
          "date": "Sat 30 Dec 2023 16:12",
          "username": "Chris22usa",
          "content": "ChatGpt answer is C and it indicates continuous backup process uses DynamoDB stream actually<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>ChatGPT is usually wrong on these topics.</li><li>Wrong.<br>\\\"DynamoDB full exports are charged based on the size of the DynamoDB table (table data and local secondary indexes) at the point in time for which the export is done. DynamoDB incremental exports are charged based on the size of data processed from your continuous backups for the time period being exported.\\\"<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport.HowItWorks.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1110998,
          "date": "Mon 01 Jul 2024 07:12",
          "username": "pentium75",
          "content": "ChatGPT is usually wrong on these topics.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1103178,
          "date": "Sat 22 Jun 2024 06:03",
          "username": "Gajendr",
          "content": "Wrong.<br>\\\"DynamoDB full exports are charged based on the size of the DynamoDB table (table data and local secondary indexes) at the point in time for which the export is done. DynamoDB incremental exports are charged based on the size of data processed from your continuous backups for the time period being exported.\\\"<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport.HowItWorks.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 934034,
          "date": "Tue 26 Dec 2023 07:34",
          "username": "TariqKipkemei",
          "content": "Using DynamoDB table export, you can export data from an Amazon DynamoDB table from any time within your point-in-time recovery window to an Amazon S3 bucket. Exporting a table does not consume read capacity on the table, and has no impact on table performance and availability.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 908561,
          "date": "Tue 28 Nov 2023 14:03",
          "username": "norris81",
          "content": "https://repost.aws/knowledge-center/back-up-dynamodb-s3<br>https://aws.amazon.com/blogs/aws/new-amazon-dynamodb-continuous-backups-and-point-in-time-recovery-pitr/<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html<br><br>There is no edit",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 901442,
          "date": "Sat 18 Nov 2023 21:12",
          "username": "cloudenthusiast",
          "content": "Continuous Backups: DynamoDB provides a feature called continuous backups, which automatically backs up your table data. Enabling continuous backups ensures that your table data is continuously backed up without the need for additional coding or manual interventions.<br><br>Export to Amazon S3: With continuous backups enabled, DynamoDB can directly export the backups to an Amazon S3 bucket. This eliminates the need for custom coding to export the data.<br><br>Minimal Coding: Option B requires the least amount of coding effort as continuous backups and the export to Amazon S3 functionality are built-in features of DynamoDB.<br><br>No Impact on Availability and RCUs: Enabling continuous backups and exporting data to Amazon S3 does not affect the availability of your application or the read capacity units (RCUs) defined for the table. These operations happen in the background and do not impact the table's performance or consume additional RCUs.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 900918,
          "date": "Sat 18 Nov 2023 11:27",
          "username": "Efren",
          "content": "DynamoDB Export to S3 feature<br>Using this feature, you can export data from an Amazon DynamoDB table anytime within your point-in-time recovery window to an Amazon S3 bucket.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 900915,
          "date": "Sat 18 Nov 2023 11:25",
          "username": "Efren",
          "content": "B also for me",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 900457,
          "date": "Fri 17 Nov 2023 22:16",
          "username": "norris81",
          "content": "https://repost.aws/knowledge-center/back-up-dynamodb-s3<br>https://aws.amazon.com/blogs/aws/new-amazon-dynamodb-continuous-backups-and-point-in-time-recovery-pitr/<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>you could mention what is the best answer from you :)</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 900912,
          "date": "Sat 18 Nov 2023 11:25",
          "username": "Efren",
          "content": "you could mention what is the best answer from you :)",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#491",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing an asynchronous application to process credit card data validation requests for a bank. The application must be secure and be able to process each request at least once.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#491",
          "answers": [
            {
              "choice": "<p>Use AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) standard queues as the event source. Use AWS Key Management Service (SSE-KMS) for encryption. Add the kms:Decrypt permission for the Lambda execution role.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Lambda event source mapping. Use Amazon Simple Queue Service (Amazon SQS) FIFO queues as the event source. Use SQS managed encryption keys (SSE-SQS) for encryption. Add the encryption key invocation permission for the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) FIFO queues as the event source. Use AWS KMS keys (SSE-KMS). Add the kms:Decrypt permission for the Lambda execution role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use the AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) standard queues as the event source. Use AWS KMS keys (SSE-KMS) for encryption. Add the encryption key invocation permission for the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 491 discussion",
      "discusstion": [
        {
          "id": 908742,
          "date": "Sun 28 May 2023 18:37",
          "username": "elmogy",
          "content": "SQS FIFO is slightly more expensive than standard queue<br>https://calculator.aws/#/addService/SQS<br><br>I would still go with the standard because of the keyword \\\"at least once\\\" because FIFO process \\\"exactly once\\\". That leaves us with A and D, I believe that lambda function only needs to decrypt so I would choose A",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1111006,
          "date": "Mon 01 Jan 2024 08:24",
          "username": "pentium75",
          "content": "\\\"Process each request at least once\\\"Standard queue, rules out B and C which use more expensive FIFO queue<br><br>Permissions are added to Lambda execution roles, not Lambda functions, thus D is out.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1238953,
          "date": "Sat 29 Jun 2024 00:50",
          "username": "emakid",
          "content": "Use AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) standard queues as the event source. Use AWS Key Management Service (SSE-KMS) for encryption. Add the kms<br>permission for the Lambda execution role.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1160730,
          "date": "Tue 27 Feb 2024 15:49",
          "username": "JackyCCK",
          "content": "D is not FIFO either",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1072100,
          "date": "Thu 16 Nov 2023 04:00",
          "username": "EdenWang",
          "content": "With the SSE-SQS encryption type, you do not need to create, manage, or pay for SQS-managed encryption keys.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>And what the hell is \\\"encryption key invocation permission for the Lambda function\\\"?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111000,
          "date": "Mon 01 Jan 2024 08:18",
          "username": "pentium75",
          "content": "And what the hell is \\\"encryption key invocation permission for the Lambda function\\\"?",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1056711,
          "date": "Sun 29 Oct 2023 10:34",
          "username": "wsdasdasdqwdaw",
          "content": "Initially though it is B, but it is said that the messages should be processed at lest once, not the same order, and Standard SQS is \\\"almost\\\" FIFO, which changed my opinion and I would go with A as correct.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 997089,
          "date": "Sat 02 Sep 2023 21:15",
          "username": "BrijMohan08",
          "content": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 988421,
          "date": "Wed 23 Aug 2023 17:08",
          "username": "Guru4Cloud",
          "content": "Using SQS FIFO queues ensures each message is processed at least once in order. SSE-SQS provides encryption that is handled entirely by SQS without needing decrypt permissions.<br><br>Standard SQS queues (Options A and D) do not guarantee order.<br><br>Using KMS keys (Options C and D) requires providing the Lambda role with decrypt permissions, adding complexity.<br><br>SQS FIFO queues with SSE-SQS encryption provide orderly, secure, server-side message processing that Lambda can consume without needing to manage decryption. This is the most efficient and cost-effective approach.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Amazon SQS offers standard as the default queue type. Standard queues support a nearly unlimited number of API calls per second, per API action (SendMessage, ReceiveMessage, or DeleteMessage). Standard queues support at-least-once message delivery. However, occasionally (because of the highly distributed architecture that allows nearly unlimited throughput), more than one copy of a message might be delivered out of order. Standard queues provide best-effort ordering which ensures that messages are generally delivered in the same order as they're sent.Whereas, FIFO (First-In-First-Out) queues have all the capabilities of the standard queues, but are designed to enhance messaging between applications when the order of operations and events is critical, or where duplicates can't be tolerated. ( is correct)</li><li>But permissions are added to Lambda execution roles, not functions</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1010807,
          "date": "Mon 18 Sep 2023 20:16",
          "username": "Clouddon",
          "content": "Amazon SQS offers standard as the default queue type. Standard queues support a nearly unlimited number of API calls per second, per API action (SendMessage, ReceiveMessage, or DeleteMessage). Standard queues support at-least-once message delivery. However, occasionally (because of the highly distributed architecture that allows nearly unlimited throughput), more than one copy of a message might be delivered out of order. Standard queues provide best-effort ordering which ensures that messages are generally delivered in the same order as they're sent.Whereas, FIFO (First-In-First-Out) queues have all the capabilities of the standard queues, but are designed to enhance messaging between applications when the order of operations and events is critical, or where duplicates can't be tolerated. ( is correct)",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1111007,
          "date": "Mon 01 Jan 2024 08:24",
          "username": "pentium75",
          "content": "But permissions are added to Lambda execution roles, not functions",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 963268,
          "date": "Wed 26 Jul 2023 04:33",
          "username": "hsinchang",
          "content": "Least Privilege Policy leads to A over D.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 950314,
          "date": "Thu 13 Jul 2023 06:10",
          "username": "TariqKipkemei",
          "content": "Considering this is credit card validation process, there needs to be a strict 'process exactly once' policy offered by the SQS FIFO, and also SQS already supports server-side encryption with customer-provided encryption keys using the AWS Key Management Service (SSE-KMS) or using SQS-owned encryption keys (SSE-SQS). Both encryption options greatly reduce the operational burden and complexity involved in protecting data. Additionally, with the SSE-SQS encryption type, you do not need to create, manage, or pay for SQS-managed encryption keys.<br>Therefore option B stands out for me.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I retract my answer and change it to A, there is a requirement to process each request 'at least once'. Only standard queues can deliver messages at least once.<br>There is also a requirement for the most 'cost-effective' option. Standard queues are the cheaper option.<br><br>https://aws.amazon.com/sqs/pricing/#:~:textSQS%20requests%20priced%3F</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1065333,
          "date": "Wed 08 Nov 2023 06:37",
          "username": "TariqKipkemei",
          "content": "I retract my answer and change it to A, there is a requirement to process each request 'at least once'. Only standard queues can deliver messages at least once.<br>There is also a requirement for the most 'cost-effective' option. Standard queues are the cheaper option.<br><br>https://aws.amazon.com/sqs/pricing/#:~:textSQS%20requests%20priced%3F",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 946815,
          "date": "Sun 09 Jul 2023 03:07",
          "username": "darren_song",
          "content": "https://docs.aws.amazon.com/zh_tw/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-least-privilege-policy.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 914764,
          "date": "Sun 04 Jun 2023 17:08",
          "username": "Abrar2022",
          "content": "at least once and cost effective suggests SQS standard",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 914749,
          "date": "Sun 04 Jun 2023 16:41",
          "username": "Felix_br",
          "content": "Solution B is the most cost-effective solution to meet the requirements of the application.<br><br>Amazon Simple Queue Service (SQS) FIFO queues are a good choice for this application because they guarantee that messages are processed in the order in which they are received. This is important for credit card data validation because it ensures that fraudulent transactions are not processed before legitimate transactions.<br><br>SQS managed encryption keys (SSE-SQS) are a good choice for encrypting the messages in the SQS queue because they are free to use. AWS Key Management Service (KMS) keys (SSE-KMS) are also a good choice for encrypting the messages, but they do incur a cost.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"They guarantee that messages are processed in the order in which they are received. This is important\\\" but not asked for!</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111002,
          "date": "Mon 01 Jan 2024 08:20",
          "username": "pentium75",
          "content": "\\\"They guarantee that messages are processed in the order in which they are received. This is important\\\" but not asked for!",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 910731,
          "date": "Wed 31 May 2023 04:07",
          "username": "omoakin",
          "content": "AAAAAAAA",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 904521,
          "date": "Tue 23 May 2023 05:37",
          "username": "Yadav_Sanjay",
          "content": "should be A. Key word - at least once and cost effective suggests SQS standard",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 903157,
          "date": "Sun 21 May 2023 13:51",
          "username": "Efren",
          "content": "It has to be default, no FIFO. It doesnt say just one, it says at least once, so that is default queue that is cheaper than FIFO. Between the default options, nto sure to be honest<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>No, when it comes to \\\"credit card data validation,\\\" it should be FIFO. If you use the standard approach, there is a chance that people who come after will get processed before those who come first.</li><li>Question clearly says \\\"process each request at least once\\\" which is the description of a standard queue. Your opinion how these transactions should be processed does not matter if it contradicts the requirements given.<br><br>Besides, it is about \\\"credit card data validation\\\", NOT payments. Nothing happens if they check twice is your credit card is valid.</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 908123,
          "date": "Sat 27 May 2023 19:20",
          "username": "jayce5",
          "content": "No, when it comes to \\\"credit card data validation,\\\" it should be FIFO. If you use the standard approach, there is a chance that people who come after will get processed before those who come first.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Question clearly says \\\"process each request at least once\\\" which is the description of a standard queue. Your opinion how these transactions should be processed does not matter if it contradicts the requirements given.<br><br>Besides, it is about \\\"credit card data validation\\\", NOT payments. Nothing happens if they check twice is your credit card is valid.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1111004,
          "date": "Mon 01 Jan 2024 08:22",
          "username": "pentium75",
          "content": "Question clearly says \\\"process each request at least once\\\" which is the description of a standard queue. Your opinion how these transactions should be processed does not matter if it contradicts the requirements given.<br><br>Besides, it is about \\\"credit card data validation\\\", NOT payments. Nothing happens if they check twice is your credit card is valid.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 902897,
          "date": "Sun 21 May 2023 07:21",
          "username": "awwass",
          "content": "I guess A<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This solution uses standard queues in Amazon SQS, which are less expensive than FIFO queues. It also uses AWS Key Management Service (SSE-KMS) for encryption, which is a cost-effective way to encrypt data at rest and in transit. The kms:Decrypt permission is added to the Lambda execution role to allow it to decrypt messages from the queue</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 902900,
          "date": "Sun 21 May 2023 07:22",
          "username": "awwass",
          "content": "This solution uses standard queues in Amazon SQS, which are less expensive than FIFO queues. It also uses AWS Key Management Service (SSE-KMS) for encryption, which is a cost-effective way to encrypt data at rest and in transit. The kms:Decrypt permission is added to the Lambda execution role to allow it to decrypt messages from the queue",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#492",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple AWS accounts for development work. Some staff consistently use oversized Amazon EC2 instances, which causes the company to exceed the yearly budget for the development accounts. The company wants to centrally restrict the creation of AWS resources in these accounts.<br><br>Which solution will meet these requirements with the LEAST development effort?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#492",
          "answers": [
            {
              "choice": "<p>Develop AWS Systems Manager templates that use an approved EC2 creation process. Use the approved Systems Manager templates to provision EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use AWS Organizations to organize the accounts into organizational units (OUs). Define and attach a service control policy (SCP) to control the usage of EC2 instance types.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Configure an Amazon EventBridge rule that invokes an AWS Lambda function when an EC2 instance is created. Stop disallowed EC2 instance types.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up AWS Service Catalog products for the staff to create the allowed EC2 instance types. Ensure that staff can deploy EC2 instances only by using the Service Catalog products.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 492 discussion",
      "discusstion": [
        {
          "id": 914952,
          "date": "Tue 05 Dec 2023 02:12",
          "username": "alexandercamachop",
          "content": "Anytime you see Multiple AWS Accounts, and needs to consolidate is AWS Organization. Also anytime we need to restrict anything in an organization, it is SCP policies.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 901446,
          "date": "Sat 18 Nov 2023 21:16",
          "username": "cloudenthusiast",
          "content": "AWS Organizations: AWS Organizations is a service that helps you centrally manage multiple AWS accounts. It enables you to group accounts into organizational units (OUs) and apply policies across those accounts.<br><br>Service Control Policies (SCPs): SCPs in AWS Organizations allow you to define fine-grained permissions and restrictions at the account or OU level. By attaching an SCP to the development accounts, you can control the creation and usage of EC2 instance types.<br><br>Least Development Effort: Option B requires minimal development effort as it leverages the built-in features of AWS Organizations and SCPs. You can define the SCP to restrict the use of oversized EC2 instance types and apply it to the appropriate OUs or accounts.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1124545,
          "date": "Tue 16 Jul 2024 22:29",
          "username": "omarshaban",
          "content": "IN MY EXAM",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 1100469,
          "date": "Wed 19 Jun 2024 09:26",
          "username": "Cyberkayu",
          "content": "B. Multiple AWS account, consolidate under one AWS Organization, top down policy (SCP) to all member account to restrict EC2 Type.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 988417,
          "date": "Fri 23 Feb 2024 18:01",
          "username": "Guru4Cloud",
          "content": "Use AWS Organizations to organize the accounts into organizational units (OUs). Define and attach a service control policy (SCP) to control the usage of EC2 instance types.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 977451,
          "date": "Sat 10 Feb 2024 12:07",
          "username": "Ale1973",
          "content": "I have a question regarding this answer, what do they mean by \\\"development effort\\\"?:<br>If they mean the work it takes to implement the solution (using develop as implement), option B achieves the constraint with little administrative overhead (there is less to do to configure this option).<br>If by \\\"development effort\\\", they mean less effort for the development team, when development team try to deploy instances and gets errors because they are not allowed, this generates overhead. In this case the best option is D.<br>What did you think?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>\\\"Development effort\\\"Develop the solution that the question asks for. We don't care about the developers whose permissions we want to restrict.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1111020,
          "date": "Mon 01 Jul 2024 08:10",
          "username": "pentium75",
          "content": "\\\"Development effort\\\"Develop the solution that the question asks for. We don't care about the developers whose permissions we want to restrict.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 950317,
          "date": "Sat 13 Jan 2024 07:15",
          "username": "TariqKipkemei",
          "content": "Use AWS Organizations to organize the accounts into organizational units (OUs). Define and attach a service control policy (SCP) to control the usage of EC2 instance types",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 909801,
          "date": "Thu 30 Nov 2023 03:54",
          "username": "Blingy",
          "content": "BBBBBBBBB",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 908744,
          "date": "Tue 28 Nov 2023 19:41",
          "username": "elmogy",
          "content": "I would choose B<br>The other options would require some level of programming or custom resource creation:<br>A. Developing Systems Manager templates requires development effort<br>C. Configuring EventBridge rules and Lambda functions requires development effort<br>D. Creating Service Catalog products requires development effort to define the allowed EC2 configurations.<br><br>Option B - Using Organizations service control policies - requires no custom development. It involves:<br>Organizing accounts into OUs<br>Creating an SCP that defines allowed/disallowed EC2 instance types<br>Attaching the SCP to the appropriate OUs<br>This is a native AWS service with a simple UI for defining and managing policies. No coding or resource creation is needed.<br>So option B, using Organizations service control policies, will meet the requirements with the least development effort.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 900940,
          "date": "Sat 18 Nov 2023 11:38",
          "username": "Efren",
          "content": "B for me as well",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#493",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use artificial intelligence (AI) to determine the quality of its customer service calls. The company currently manages calls in four different languages, including English. The company will offer new languages in the future. The company does not have the resources to regularly maintain machine learning (ML) models.<br><br>The company needs to create written sentiment analysis reports from the customer service call recordings. The customer service call recording text must be translated into English.<br><br>Which combination of steps will meet these requirements? (Choose three.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: DEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#493",
          "answers": [
            {
              "choice": "<p>Use Amazon Comprehend to translate the audio recordings into English.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Lex to create the written sentiment analysis reports.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Polly to convert the audio recordings into text.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Transcribe to convert the audio recordings in any language into text.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Translate to translate text in any language to English.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon Comprehend to create the sentiment analysis reports.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 493 discussion",
      "discusstion": [
        {
          "id": 901456,
          "date": "Sat 18 Nov 2023 21:48",
          "username": "cloudenthusiast",
          "content": "Amazon Transcribe will convert the audio recordings into text, Amazon Translate will translate the text into English, and Amazon Comprehend will perform sentiment analysis on the translated text to generate sentiment analysis reports.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: DEF"
        },
        {
          "id": 1117032,
          "date": "Mon 08 Jul 2024 21:43",
          "username": "awsgeek75",
          "content": "A: Comprehend cannot translate<br>B: Lex is like a chatbot so not useful<br>C: Polly converts text to audio (polly the parrot!) so this is wrong<br>D: Can convert audio to text<br>E: Can translate<br>F: Can do sentiment analysis reports",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: DEF"
        },
        {
          "id": 1056713,
          "date": "Mon 29 Apr 2024 09:37",
          "username": "wsdasdasdqwdaw",
          "content": "It is: DEF",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 988408,
          "date": "Fri 23 Feb 2024 17:55",
          "username": "Guru4Cloud",
          "content": "D. Use Amazon Transcribe to convert the audio recordings in any language into text.<br>E. Use Amazon Translate to translate text in any language to English.<br>F. Use Amazon Comprehend to create the sentiment analysis reports.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: DEF"
        },
        {
          "id": 950326,
          "date": "Sat 13 Jan 2024 07:32",
          "username": "TariqKipkemei",
          "content": "Amazon Transcribe to convert speech to text. Amazon Translate to translate text to english. Amazon Comprehend to perform sentiment analysis on translated text.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: DEF"
        },
        {
          "id": 909827,
          "date": "Thu 30 Nov 2023 05:27",
          "username": "HareshPrajapati",
          "content": "afree with DEF",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 909802,
          "date": "Thu 30 Nov 2023 03:57",
          "username": "Blingy",
          "content": "I'd go with DEF too",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 908746,
          "date": "Tue 28 Nov 2023 19:43",
          "username": "elmogy",
          "content": "agree with DEF",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: DEF"
        },
        {
          "id": 900943,
          "date": "Sat 18 Nov 2023 11:40",
          "username": "Efren",
          "content": "agreed as well, weird<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>@efren - It is not weird - This need to know the services for it</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 988409,
          "date": "Fri 23 Feb 2024 17:56",
          "username": "Guru4Cloud",
          "content": "@efren - It is not weird - This need to know the services for it",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#494",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon EC2 instances to host its internal systems. As part of a deployment operation, an administrator tries to use the AWS CLI to terminate an EC2 instance. However, the administrator receives a 403 (Access Denied) error message.<br><br>The administrator is using an IAM role that has the following IAM policy attached:<br><br><img class=\"w-100\" src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image11.png\"&gt;<br><br>What is the cause of the unsuccessful request?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#494",
          "answers": [
            {
              "choice": "<p>The EC2 instance has a resource-based policy with a Deny statement.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The principal has not been specified in the policy statement.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The \"Action\" field does not grant the actions that are required to terminate the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>The request to terminate the EC2 instance does not originate from the CIDR blocks 192.0.2.0/24 or 203.0.113.0/24.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 494 discussion",
      "discusstion": [
        {
          "id": 950327,
          "date": "Thu 13 Jul 2023 06:35",
          "username": "TariqKipkemei",
          "content": "the command is coming from a source IP which is not in the allowed range.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1118956,
          "date": "Wed 10 Jan 2024 20:01",
          "username": "chasingsummer",
          "content": "I ran a Policy Simulator and indeed, D is right answer.<br><br>Here is the JSON policy:<br><br>{<br>\\\"Version\\\": \\\"2012-10-17\\\",<br>\\\"Statement\\\": [<br>{<br>\\\"Effect\\\": \\\"Allow\\\",<br>\\\"Action\\\": \\\"ec2:TerminateInstances\\\",<br>\\\"Resource\\\": \\\"*\\\"<br>},<br>{<br>\\\"Effect\\\": \\\"Deny\\\",<br>\\\"Action\\\": \\\"ec2:TerminateInstances\\\",<br>\\\"Condition\\\": {<br>\\\"NotIpAddress\\\": {<br>\\\"aws:SourceIp\\\" : [<br>\\\"192.0.2.0/24\\\",<br>\\\"203.0.113.0/24\\\"<br>]<br>}<br>},<br>\\\"Resource\\\": \\\"*\\\"<br>}<br>]<br>}",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1118944,
          "date": "Wed 10 Jan 2024 19:50",
          "username": "chasingsummer",
          "content": "The condition operator is \\\"NotIpAddress\\\" so I am not sure about D as right answer.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Deny when IP address is not in (NotIPAddress). AWS has a weird way of stating Deny and it almost sound like double negative meaning positive. But read this doc for more clarity:<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_deny-ip.html<br><br>It has the exact same example! Good luck!</li><li>This is exactly what I need, thanks!</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1126762,
          "date": "Fri 19 Jan 2024 16:02",
          "username": "awsgeek75",
          "content": "Deny when IP address is not in (NotIPAddress). AWS has a weird way of stating Deny and it almost sound like double negative meaning positive. But read this doc for more clarity:<br>https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_deny-ip.html<br><br>It has the exact same example! Good luck!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>This is exactly what I need, thanks!</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1322667,
          "date": "Fri 06 Dec 2024 09:30",
          "username": "LeonSauveterre",
          "content": "This is exactly what I need, thanks!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 1117037,
          "date": "Mon 08 Jan 2024 22:47",
          "username": "awsgeek75",
          "content": "If you want to read more about this, see how it works: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_aws_deny-ip.html<br>Same policy as in this question with almost same use case.<br>D is correct answer.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 908747,
          "date": "Sun 28 May 2023 18:46",
          "username": "elmogy",
          "content": "\\\" aws:SourceIP \\\" indicates the IP address that is trying to perform the action.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 901966,
          "date": "Fri 19 May 2023 15:29",
          "username": "nosense",
          "content": "d for sure",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#495",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is conducting an internal audit. The company wants to ensure that the data in an Amazon S3 bucket that is associated with the company's AWS Lake Formation data lake does not contain sensitive customer or employee data. The company wants to discover personally identifiable information (PII) or financial information, including passport numbers and credit card numbers.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#495",
          "answers": [
            {
              "choice": "<p>Configure AWS Audit Manager on the account. Select the Payment Card Industry Data Security Standards (PCI DSS) for auditing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon S3 Inventory on the S3 bucket Configure Amazon Athena to query the inventory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Configure Amazon Macie to run a data discovery job that uses managed identifiers for the required data types.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use Amazon S3 Select to run a report across the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 495 discussion",
      "discusstion": [
        {
          "id": 909803,
          "date": "Thu 30 Nov 2023 04:00",
          "username": "Blingy",
          "content": "MacieSensitive PII",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 908748,
          "date": "Tue 28 Nov 2023 19:48",
          "username": "elmogy",
          "content": "agree with C",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1117040,
          "date": "Mon 08 Jul 2024 21:49",
          "username": "awsgeek75",
          "content": "PII or sensitive dataMacie",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 988402,
          "date": "Fri 23 Feb 2024 17:40",
          "username": "Guru4Cloud",
          "content": "Configure Amazon Macie to run a data discovery job that uses managed identifiers for the required data types.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 950329,
          "date": "Sat 13 Jan 2024 07:42",
          "username": "TariqKipkemei",
          "content": "Amazon Macie is a data security service that uses machine learning (ML) and pattern matching to discover and help protect your sensitive data.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 901459,
          "date": "Sat 18 Nov 2023 21:52",
          "username": "cloudenthusiast",
          "content": "Amazon Macie is a service that helps discover, classify, and protect sensitive data stored in AWS. It uses machine learning algorithms and managed identifiers to detect various types of sensitive information, including personally identifiable information (PII) and financial information. By configuring Amazon Macie to run a data discovery job with the appropriate managed identifiers for the required data types (such as passport numbers and credit card numbers), the company can identify and classify any sensitive data present in the S3 bucket.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#496",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses on-premises servers to host its applications. The company is running out of storage capacity. The applications use both block storage and NFS storage. The company needs a high-performing solution that supports local caching without re-architecting its existing applications.<br><br>Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#496",
          "answers": [
            {
              "choice": "<p>Mount Amazon S3 as a file system to the on-premises servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an AWS Storage Gateway file gateway to replace NFS storage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy AWS Snowball Edge to provision NFS mounts to on-premises servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy an AWS Storage Gateway volume gateway to replace the block storage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Deploy Amazon Elastic File System (Amazon EFS) volumes and mount them to on-premises servers.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 496 discussion",
      "discusstion": [
        {
          "id": 901461,
          "date": "Sat 18 Nov 2023 21:54",
          "username": "cloudenthusiast",
          "content": "By combining the deployment of an AWS Storage Gateway file gateway and an AWS Storage Gateway volume gateway, the company can address both its block storage and NFS storage needs, while leveraging local caching capabilities for improved performance.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1117046,
          "date": "Mon 08 Jul 2024 21:58",
          "username": "awsgeek75",
          "content": "A: Not possible<br>C: Snowball edge is snowball with computing. It's not a NAS!<br>E: Technically yes but requires VPN or Direct Connect so re-architecture<br>B & D both use Storage Gateway which can be used as NFS and Block storage<br>https://aws.amazon.com/storagegateway/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1101438,
          "date": "Thu 20 Jun 2024 10:25",
          "username": "ftaws",
          "content": "Use the Storage Gateway -> It means that use S3 for storage ?",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1049381,
          "date": "Sun 21 Apr 2024 11:24",
          "username": "thanhnv142",
          "content": "DE<br>B is not correct be cause NFS is a file system while storage gw is a storage. To replace a file system, need another file system which is EFS.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That's what i thought. but I think B is work too.</li><li>if you focus on the wording of option B its \\\"Storage gateway File gateway\\\" not volume gateway hence it is perfect replacement for NFS files.</li></ul>",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 1076248,
          "date": "Tue 21 May 2024 11:50",
          "username": "Tekk97",
          "content": "That's what i thought. but I think B is work too.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1201993,
          "date": "Fri 25 Oct 2024 14:58",
          "username": "wizcloudifa",
          "content": "if you focus on the wording of option B its \\\"Storage gateway File gateway\\\" not volume gateway hence it is perfect replacement for NFS files.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 950331,
          "date": "Sat 13 Jan 2024 07:47",
          "username": "TariqKipkemei",
          "content": "Deploy an AWS Storage Gateway file gateway to replace NFS storage<br>Deploy an AWS Storage Gateway volume gateway to replace the block storage",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 908749,
          "date": "Tue 28 Nov 2023 19:52",
          "username": "elmogy",
          "content": "local caching is a key feature of AWS Storage Gateway solution<br>https://aws.amazon.com/storagegateway/features/<br>https://aws.amazon.com/blogs/storage/aws-storage-gateway-increases-cache-4x-and-enhances-bandwidth-throttling/#:~:textAWS%20Storage%20Gateway%20increases%20cache%204x%20and%20enhances,for%20Volume%20Gateway%20customers%20...%205%20Conclusion%20",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 900223,
          "date": "Fri 17 Nov 2023 16:56",
          "username": "Piccalo",
          "content": "B and D is the correct answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        }
      ]
    },
    {
      "question_id": "#497",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a service that reads and writes large amounts of data from an Amazon S3 bucket in the same AWS Region. The service is deployed on Amazon EC2 instances within the private subnet of a VPC. The service communicates with Amazon S3 over a NAT gateway in the public subnet. However, the company wants a solution that will reduce the data output costs.<br><br>Which solution will meet these requirements MOST cost-effectively?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#497",
          "answers": [
            {
              "choice": "<p>Provision a dedicated EC2 NAT instance in the public subnet. Configure the route table for the private subnet to use the elastic network interface of this instance as the destination for all S3 traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision a dedicated EC2 NAT instance in the private subnet. Configure the route table for the public subnet to use the elastic network interface of this instance as the destination for all S3 traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Provision a VPC gateway endpoint. Configure the route table for the private subnet to use the gateway endpoint as the route for all S3 traffic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Provision a second NAT gateway. Configure the route table for the private subnet to use this NAT gateway as the destination for all S3 traffic.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 497 discussion",
      "discusstion": [
        {
          "id": 901462,
          "date": "Sat 18 Nov 2023 21:55",
          "username": "cloudenthusiast",
          "content": "A VPC gateway endpoint allows you to privately access Amazon S3 from within your VPC without using a NAT gateway or NAT instance. By provisioning a VPC gateway endpoint for S3, the service in the private subnet can directly communicate with S3 without incurring data transfer costs for traffic going through a NAT gateway.",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 1117057,
          "date": "Mon 08 Jul 2024 22:12",
          "username": "awsgeek75",
          "content": "As a rule of thumb, EC2<->S3 in your workload should always try to use a VPC gateway unless there is an explicit restriction (account etc.) which disallows it.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 988346,
          "date": "Fri 23 Feb 2024 16:07",
          "username": "Guru4Cloud",
          "content": "Using a VPC endpoint for S3 allows the EC2 instances to access S3 directly over the Amazon network without traversing the internet. This significantly reduces data output charges.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 950333,
          "date": "Sat 13 Jan 2024 07:50",
          "username": "TariqKipkemei",
          "content": "use VPC gateway endpoint to route traffic internally and save on costs.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 908750,
          "date": "Tue 28 Nov 2023 19:54",
          "username": "elmogy",
          "content": "private subnet needs to communicate with S3 --> VPC endpoint right away",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#498",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon S3 to store high-resolution pictures in an S3 bucket. To minimize application changes, the company stores the pictures as the latest version of an S3 object. The company needs to retain only the two most recent versions of the pictures.<br><br>The company wants to reduce costs. The company has identified the S3 bucket as a large expense.<br><br>Which solution will reduce the S3 costs with the LEAST operational overhead?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#498",
          "answers": [
            {
              "choice": "<p>Use S3 Lifecycle to delete expired object versions and retain the two most recent versions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Use an AWS Lambda function to check for older versions and delete all but the two most recent versions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Use S3 Batch Operations to delete noncurrent object versions and retain only the two most recent versions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Deactivate versioning on the S3 bucket and retain the two most recent versions.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 498 discussion",
      "discusstion": [
        {
          "id": 901463,
          "date": "Sat 18 Nov 2023 21:57",
          "username": "cloudenthusiast",
          "content": "S3 Lifecycle policies allow you to define rules that automatically transition or expire objects based on their age or other criteria. By configuring an S3 Lifecycle policy to delete expired object versions and retain only the two most recent versions, you can effectively manage the storage costs while maintaining the desired retention policy. This solution is highly automated and requires minimal operational overhead as the lifecycle management is handled by S3 itself.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 945236,
          "date": "Sun 07 Jan 2024 06:43",
          "username": "VellaDevil",
          "content": "A --> \\\"you can also provide a maximum number of noncurrent versions to retain.\\\"<br>https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 1117061,
          "date": "Mon 08 Jul 2024 22:17",
          "username": "awsgeek75",
          "content": "B: Too much work with Lambda<br>C: Possible but requires lot of work<br>D: Oxymoron statement... i.e. how do you remove version and retain version at same time without additional overhead? Custom solution may be more work.<br>A: S3 Lifecycle is designed to retain object and version with set criteria",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 988345,
          "date": "Fri 23 Feb 2024 16:04",
          "username": "Guru4Cloud",
          "content": "Use S3 Lifecycle to delete expired object versions and retain the two most recent versions.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 950334,
          "date": "Sat 13 Jan 2024 07:52",
          "username": "TariqKipkemei",
          "content": "S3 Lifecycle to the rescue...whoooosh",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 915372,
          "date": "Tue 05 Dec 2023 14:04",
          "username": "antropaws",
          "content": "A is correct.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 904610,
          "date": "Thu 23 Nov 2023 09:01",
          "username": "Konb",
          "content": "Agree with LONGMEN",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#499",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to minimize the cost of its 1 Gbps AWS Direct Connect connection. The company's average connection utilization is less than 10%. A solutions architect must recommend a solution that will reduce the cost without compromising security.<br><br>Which solution will meet these requirements?</p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#499",
          "answers": [
            {
              "choice": "<p>Set up a new 1 Gbps Direct Connect connection. Share the connection with another AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Set up a new 200 Mbps Direct Connect connection in the AWS Management Console.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Contact an AWS Direct Connect Partner to order a 1 Gbps connection. Share the connection with another AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Contact an AWS Direct Connect Partner to order a 200 Mbps hosted connection for an existing AWS account.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 499 discussion",
      "discusstion": [
        {
          "id": 915059,
          "date": "Tue 05 Dec 2023 07:27",
          "username": "Abrar2022",
          "content": "Hosted Connection 50 Mbps, 100 Mbps, 200 Mbps,<br>Dedicated Connection 1 Gbps, 10 Gbps, and 100 Gbps",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 901369,
          "date": "Sat 18 Nov 2023 19:22",
          "username": "norris81",
          "content": "D<br><br>For Dedicated Connections, 1 Gbps, 10 Gbps, and 100 Gbps ports are available. For Hosted Connections, connection speeds of 50 Mbps, 100 Mbps, 200 Mbps, 300 Mbps, 400 Mbps, 500 Mbps, 1 Gbps, 2 Gbps, 5 Gbps and 10 Gbps may be ordered from approved AWS Direct Connect Partners. See AWS Direct Connect Partners for more information.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1160034,
          "date": "Mon 26 Aug 2024 19:52",
          "username": "Ravan",
          "content": "No, you cannot directly adjust the speed of an existing Direct Connect connection through the AWS Management Console.<br><br>To adjust the speed of an existing Direct Connect connection, you typically need to contact your Direct Connect service provider. They can assist you in modifying the speed of your connection based on your requirements. Depending on the provider, this process may involve submitting a request or contacting their support team to initiate the necessary changes. Keep in mind that adjusting the speed of your Direct Connect connection may also involve contractual and billing considerations.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1117067,
          "date": "Mon 08 Jul 2024 22:21",
          "username": "awsgeek75",
          "content": "A: Not secure as sharing with another account<br>B: I don't think this possible as you need ISP to setup Direct Connect<br>C: Less secure due to sharing<br>D: Direct connect partners can provide hosted solutions for existing accounts so correct answer<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>For B I'm wrong above, it's because you cannot order 200MB connection through management console.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 1117070,
          "date": "Mon 08 Jul 2024 22:23",
          "username": "awsgeek75",
          "content": "For B I'm wrong above, it's because you cannot order 200MB connection through management console.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 1111028,
          "date": "Mon 01 Jul 2024 08:17",
          "username": "pentium75",
          "content": "< 1 GbpsHosted (through partner)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 988343,
          "date": "Fri 23 Feb 2024 16:00",
          "username": "Guru4Cloud",
          "content": "If you already have an existing AWS Direct Connect connection configured at 1 Gbps, and you wish to reduce the connection bandwidth to 200 Mbps to minimize costs, you should indeed contact your AWS Direct Connect Partner and request to lower the connection speed to 200 Mbps.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>I meant D.. DDDDDDDDDD</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 988344,
          "date": "Fri 23 Feb 2024 16:00",
          "username": "Guru4Cloud",
          "content": "I meant D.. DDDDDDDDDD",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 910737,
          "date": "Thu 30 Nov 2023 05:22",
          "username": "omoakin",
          "content": "BBBBBBBBBBBBBB",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 908755,
          "date": "Tue 28 Nov 2023 20:03",
          "username": "elmogy",
          "content": "company need to setup a cheaper connection (200 M) but B is incorrect because you can only order port speeds of 1, 10, or 100 Gbps<br>for more flexibility you can go with hosted connection, You can order port speeds between 50 Mbps and 10 Gbps.<br><br>https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 901467,
          "date": "Sat 18 Nov 2023 22:02",
          "username": "cloudenthusiast",
          "content": "By opting for a lower capacity 200 Mbps connection instead of the 1 Gbps connection, the company can significantly reduce costs. This solution ensures a dedicated and secure connection while aligning with the company's low utilization, resulting in cost savings.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>But 200M cannot be ordered through Management Console, only partners.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 1111026,
          "date": "Mon 01 Jul 2024 08:17",
          "username": "pentium75",
          "content": "But 200M cannot be ordered through Management Console, only partners.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 899997,
          "date": "Fri 17 Nov 2023 13:30",
          "username": "nosense",
          "content": "A hosted connection is a lower-cost option that is offered by AWS Direct Connect Partners<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Also, there are not 200 MBps direct connection speed.</li><li>Hosted Connection 50 Mbps, 100 Mbps, 200 Mbps,<br>Dedicated Connection 1 Gbps, 10 Gbps, and 100 Gbps<br>B would require the company to purchase additional hardware or software</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 900952,
          "date": "Sat 18 Nov 2023 11:52",
          "username": "Efren",
          "content": "Also, there are not 200 MBps direct connection speed.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Hosted Connection 50 Mbps, 100 Mbps, 200 Mbps,<br>Dedicated Connection 1 Gbps, 10 Gbps, and 100 Gbps<br>B would require the company to purchase additional hardware or software</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 901762,
          "date": "Sun 19 Nov 2023 11:26",
          "username": "nosense",
          "content": "Hosted Connection 50 Mbps, 100 Mbps, 200 Mbps,<br>Dedicated Connection 1 Gbps, 10 Gbps, and 100 Gbps<br>B would require the company to purchase additional hardware or software",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#500",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple Windows file servers on premises. The company wants to migrate and consolidate its files into an Amazon FSx for Windows File Server file system. File permissions must be preserved to ensure that access rights do not change.<br><br>Which solutions will meet these requirements? (Choose two.)</p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#500",
          "answers": [
            {
              "choice": "<p>Deploy AWS DataSync agents on premises. Schedule DataSync tasks to transfer the data to the FSx for Windows File Server file system.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Copy the shares on each file server into Amazon S3 buckets by using the AWS CLI. Schedule AWS DataSync tasks to transfer the data to the FSx for Windows File Server file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Remove the drives from each file server. Ship the drives to AWS for import into Amazon S3. Schedule AWS DataSync tasks to transfer the data to the FSx for Windows File Server file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>Order an AWS Snowcone device. Connect the device to the on-premises network. Launch AWS DataSync agents on the device. Schedule DataSync tasks to transfer the data to the FSx for Windows File Server file system.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>Order an AWS Snowball Edge Storage Optimized device. Connect the device to the on-premises network. Copy data to the device by using the AWS CLI. Ship the device back to AWS for import into Amazon S3. Schedule AWS DataSync tasks to transfer the data to the FSx for Windows File Server file system.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1 question 500 discussion",
      "discusstion": [
        {
          "id": 1111030,
          "date": "Mon 01 Jul 2024 08:20",
          "username": "pentium75",
          "content": "B, C and E would copy the files to S3 first where permissions would be lost",
          "upvote_count": "10",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 901845,
          "date": "Sun 19 Nov 2023 13:56",
          "username": "cloudenthusiast",
          "content": "A This option involves deploying DataSync agents on your on-premises file servers and using DataSync to transfer the data directly to the FSx for Windows File Server. DataSync ensures that file permissions are preserved during the migration process.<br>D<br>This option involves using an AWS Snowcone device, a portable data transfer device. You would connect the Snowcone device to your on-premises network, launch DataSync agents on the device, and schedule DataSync tasks to transfer the data to FSx for Windows File Server. DataSync handles the migration process while preserving file permissions.",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 988337,
          "date": "Fri 23 Feb 2024 15:51",
          "username": "Guru4Cloud",
          "content": "Why not - BD?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>B copies the data to S3 first where file permissions would be lost.</li><li>=C2=B0 This option uses S3 as an intermediary, ensuring that file permissions are preserved during the initial data copy. DataSync can then transfer the data from S3 to FSx while maintaining the permissions.<br> =C2=B0 This option uses a Snowcone device with DataSync agents to replicate the on-premises permission structure directly to FSx. This approach is suitable for maintaining file permissions during migration.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 1111029,
          "date": "Mon 01 Jul 2024 08:19",
          "username": "pentium75",
          "content": "B copies the data to S3 first where file permissions would be lost.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 988339,
          "date": "Fri 23 Feb 2024 15:54",
          "username": "Guru4Cloud",
          "content": "=C2=B0 This option uses S3 as an intermediary, ensuring that file permissions are preserved during the initial data copy. DataSync can then transfer the data from S3 to FSx while maintaining the permissions.<br> =C2=B0 This option uses a Snowcone device with DataSync agents to replicate the on-premises permission structure directly to FSx. This approach is suitable for maintaining file permissions during migration.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 908759,
          "date": "Tue 28 Nov 2023 20:06",
          "username": "elmogy",
          "content": "the key is file permissions are preserved during the migration process. only datasync supports that<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Bro,all 5 answers mentioned Datasync.....</li><li>Yes but AD have only DataSync, whereas others have others have AWS CLI used.</li></ul>",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 980514,
          "date": "Wed 14 Feb 2024 09:24",
          "username": "coolkidsclubvip",
          "content": "Bro,all 5 answers mentioned Datasync.....<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Yes but AD have only DataSync, whereas others have others have AWS CLI used.</li></ul>",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 1014515,
          "date": "Sat 23 Mar 2024 00:13",
          "username": "Devsin2000",
          "content": "Yes but AD have only DataSync, whereas others have others have AWS CLI used.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 901764,
          "date": "Sun 19 Nov 2023 11:28",
          "username": "nosense",
          "content": "Option B would require copy the data to Amazon S3 before transferring it to Amazon FSx for Windows File Server<br>Option C would require the company to remove the drives from each file server and ship them to AWS<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Also, S3 doesn't retain permissions because it isn't a file system.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 981901,
          "date": "Thu 15 Feb 2024 20:58",
          "username": "barracouto",
          "content": "Also, S3 doesn't retain permissions because it isn't a file system.",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    }
  ]
}