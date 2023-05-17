var SAA_C03_Exam_401_500 = {
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#400",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A meteorological startup company has a custom web application to sell weather data to its users online. The company uses Amazon DynamoDB to store its data and wants to build a new service that sends an alert to the managers of four internal teams every time a new weather event is recorded. The company does not want this new service to affect the performance of the current application.<br><br>What should a solutions architect do to meet these requirements with the LEAST amount of operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#400",
          "answers": [
            {
              "choice": "<p>A. Use DynamoDB transactions to write new event data to the table. Configure the transactions to notify internal teams.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Have the current application publish a message to four Amazon Simple Notification Service (Amazon SNS) topics. Have each team subscribe to one topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Amazon DynamoDB Streams on the table. Use triggers to write to a single Amazon Simple Notification Service (Amazon SNS) topic to which the teams can subscribe.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a custom attribute to each record to flag new items. Write a cron job that scans the table every minute for items that are new and notifies an Amazon Simple Queue Service (Amazon SQS) queue to which the teams can subscribe.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850654,
          "date": "Sun 26 Mar 2023 03:45",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "The best solution to meet these requirements with the least amount of operational overhead is to enable Amazon DynamoDB Streams on the table and use triggers to write to a single Amazon Simple Notification Service (Amazon SNS) topic to which the teams can subscribe. This solution requires minimal configuration and infrastructure setup, and Amazon DynamoDB Streams provide a low-latency way to capture changes to the DynamoDB table. The triggers automatically capture the changes and publish them to the SNS topic, which notifies the internal teams.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer A is not a suitable solution because it requires additional configuration to notify the internal teams, and it could add operational overhead to the application.<br><br>Answer B is not the best solution because it requires changes to the current application, which may affect its performance, and it creates additional work for the teams to subscribe to multiple topics.<br><br>Answer D is not a good solution because it requires a cron job to scan the table every minute, which adds additional operational overhead to the system.<br><br>Therefore, the correct answer is C.  Enable Amazon DynamoDB Streams on the table. Use triggers to write to a single Amazon SNS topic to which the teams can subscribe.</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850655,
          "date": "Sun 26 Mar 2023 03:46",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Answer A is not a suitable solution because it requires additional configuration to notify the internal teams, and it could add operational overhead to the application.<br><br>Answer B is not the best solution because it requires changes to the current application, which may affect its performance, and it creates additional work for the teams to subscribe to multiple topics.<br><br>Answer D is not a good solution because it requires a cron job to scan the table every minute, which adds additional operational overhead to the system.<br><br>Therefore, the correct answer is C.  Enable Amazon DynamoDB Streams on the table. Use triggers to write to a single Amazon SNS topic to which the teams can subscribe.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 849314,
          "date": "Fri 24 Mar 2023 14:26",
          "username": "\t\t\t\tHemanthgowda1932\t\t\t",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 847244,
          "date": "Wed 22 Mar 2023 17:16",
          "username": "\t\t\t\tSantosh43\t\t\t",
          "content": "definitely C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 845254,
          "date": "Mon 20 Mar 2023 22:27",
          "username": "\t\t\t\tBezha\t\t\t",
          "content": "DynamoDB Streams",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 836394,
          "date": "Sat 11 Mar 2023 19:30",
          "username": "\t\t\t\tsitha\t\t\t",
          "content": "Answer : C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835189,
          "date": "Fri 10 Mar 2023 16:55",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "cccccccc",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#401",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use the AWS Cloud to make an existing application highly available and resilient. The current version of the application resides in the company's data center. The application recently experienced data loss after a database server crashed because of an unexpected power outage.<br><br>The company needs a solution that avoids any single points of failure. The solution must give the application the ability to scale to meet user demand.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon RDS DB instance in a Multi-AZ configuration.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group in a single Availability Zone. Deploy the database on an EC2 instance. Enable EC2 Auto Recovery.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon RDS DB instance with a read replica in a single Availability Zone. Promote the read replica to replace the primary DB instance if the primary DB instance fails.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Deploy the primary and secondary database servers on EC2 instances across multiple Availability Zones. Use Amazon Elastic Block Store (Amazon EBS) Multi-Attach to create shared storage between the instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850647,
          "date": "Sun 26 Mar 2023 03:38",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "The correct answer is A.  Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon RDS DB instance in a Multi-AZ configuration.<br><br>To make an existing application highly available and resilient while avoiding any single points of failure and giving the application the ability to scale to meet user demand, the best solution would be to deploy the application servers using Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones and use an Amazon RDS DB instance in a Multi-AZ configuration.<br><br>By using an Amazon RDS DB instance in a Multi-AZ configuration, the database is automatically replicated across multiple Availability Zones, ensuring that the database is highly available and can withstand the failure of a single Availability Zone. This provides fault tolerance and avoids any single points of failure.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 846892,
          "date": "Wed 22 Mar 2023 10:39",
          "username": "\t\t\t\tThief\t\t\t",
          "content": "Why not D?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer D, deploying the primary and secondary database servers on EC2 instances across multiple Availability Zones and using Amazon Elastic Block Store (Amazon EBS) Multi-Attach to create shared storage between the instances, may provide high availability for the database but may introduce additional complexity, and management overhead, and potential performance issues.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 850643,
          "date": "Sun 26 Mar 2023 03:34",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Answer D, deploying the primary and secondary database servers on EC2 instances across multiple Availability Zones and using Amazon Elastic Block Store (Amazon EBS) Multi-Attach to create shared storage between the instances, may provide high availability for the database but may introduce additional complexity, and management overhead, and potential performance issues.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 844532,
          "date": "Mon 20 Mar 2023 05:31",
          "username": "\t\t\t\tWherecanIstart\t\t\t",
          "content": "Highly available = Multi-AZ approach",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 841585,
          "date": "Fri 17 Mar 2023 05:48",
          "username": "\t\t\t\tnileshlg\t\t\t",
          "content": "Answers is A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 841177,
          "date": "Thu 16 Mar 2023 17:26",
          "username": "\t\t\t\tdcp\t\t\t",
          "content": "Option A is the correct solution. Deploying the application servers in an Auto Scaling group across multiple Availability Zones (AZs) ensures high availability and fault tolerance. An Auto Scaling group allows the application to scale horizontally to meet user demand. Using Amazon RDS DB instance in a Multi-AZ configuration ensures that the database is automatically replicated to a standby instance in a different AZ. This provides database redundancy and avoids any single point of failure.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 837972,
          "date": "Mon 13 Mar 2023 15:30",
          "username": "\t\t\t\tquentin17\t\t\t",
          "content": "Highly available",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 836005,
          "date": "Sat 11 Mar 2023 14:04",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "Yes , agree with A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 835381,
          "date": "Fri 10 Mar 2023 21:06",
          "username": "\t\t\t\tcegama543\t\t\t",
          "content": "agree with that",
          "upvote_count": "1",
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
      "question_text": "<p>A company needs to ingest and handle large amounts of streaming data that its application generates. The application runs on Amazon EC2 instances and sends data to Amazon Kinesis Data Streams, which is configured with default settings. Every other day, the application consumes the data and writes the data to an Amazon S3 bucket for business intelligence (BI) processing. The company observes that Amazon S3 is not receiving all the data that the application sends to Kinesis Data Streams.<br><br>What should a solutions architect do to resolve this issue?<br><br></p>",
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
              "choice": "<p>A. Update the Kinesis Data Streams default settings by modifying the data retention period.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the application to use the Kinesis Producer Library (KPL) to send the data to Kinesis Data Streams.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on S3 Versioning within the S3 bucket to preserve every version of every object that is ingested in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 835380,
          "date": "Fri 10 Mar 2023 21:04",
          "username": "\t\t\t\tcegama543\t\t\t",
          "content": "C.  Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams.<br><br>The best option is to update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams. Kinesis Data Streams scales horizontally by increasing or decreasing the number of shards, which controls the throughput capacity of the stream. By increasing the number of shards, the application will be able to send more data to Kinesis Data Streams, which can help ensure that S3 receives all the data.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>lets say you had infinity shards... if the retention period is 24 hours and you get the data every 48 hours, you will lose 24 hours of data no matter the amount of shards no?</li><li>Amazon Kinesis Data Streams supports changes to the data record retention period of your data stream. A Kinesis data stream is an ordered sequence of data records meant to be written to and read from in real time. Data records are therefore stored in shards in your stream temporarily. The time period from when a record is added to when it is no longer accessible is called the retention period. A Kinesis data stream stores records from 24 hours by default, up to 8760 hours (365 days).</li><li>Answer C:C.  Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams.<br><br>- Answer C updates the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams. By increasing the number of shards, the data is distributed across multiple shards, which allows for increased throughput and ensures that all data is ingested and processed by Kinesis Data Streams.<br>- Monitoring the Kinesis Data Streams and adjusting the number of shards as needed to handle changes in data throughput can ensure that the application can handle large amounts of streaming data.</li><li>@cegama543, my apologies. Moderator if you can disapprove of the post above? I made a mistake. It is supposed to be intended on the post that I submitted.<br><br>Thanks.</li></ul>",
          "upvote_count": "8",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 842791,
          "date": "Sat 18 Mar 2023 14:13",
          "username": "\t\t\t\tCapJackSparrow\t\t\t",
          "content": "lets say you had infinity shards... if the retention period is 24 hours and you get the data every 48 hours, you will lose 24 hours of data no matter the amount of shards no?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Amazon Kinesis Data Streams supports changes to the data record retention period of your data stream. A Kinesis data stream is an ordered sequence of data records meant to be written to and read from in real time. Data records are therefore stored in shards in your stream temporarily. The time period from when a record is added to when it is no longer accessible is called the retention period. A Kinesis data stream stores records from 24 hours by default, up to 8760 hours (365 days).</li></ul>",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 843922,
          "date": "Sun 19 Mar 2023 17:10",
          "username": "\t\t\t\tenzomv\t\t\t",
          "content": "Amazon Kinesis Data Streams supports changes to the data record retention period of your data stream. A Kinesis data stream is an ordered sequence of data records meant to be written to and read from in real time. Data records are therefore stored in shards in your stream temporarily. The time period from when a record is added to when it is no longer accessible is called the retention period. A Kinesis data stream stores records from 24 hours by default, up to 8760 hours (365 days).",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 850630,
          "date": "Sun 26 Mar 2023 03:12",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Answer C:C.  Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams.<br><br>- Answer C updates the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams. By increasing the number of shards, the data is distributed across multiple shards, which allows for increased throughput and ensures that all data is ingested and processed by Kinesis Data Streams.<br>- Monitoring the Kinesis Data Streams and adjusting the number of shards as needed to handle changes in data throughput can ensure that the application can handle large amounts of streaming data.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>@cegama543, my apologies. Moderator if you can disapprove of the post above? I made a mistake. It is supposed to be intended on the post that I submitted.<br><br>Thanks.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 850633,
          "date": "Sun 26 Mar 2023 03:18",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "@cegama543, my apologies. Moderator if you can disapprove of the post above? I made a mistake. It is supposed to be intended on the post that I submitted.<br><br>Thanks.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 844535,
          "date": "Mon 20 Mar 2023 05:37",
          "username": "\t\t\t\tWherecanIstart\t\t\t",
          "content": "\\\"A Kinesis data stream stores records from 24 hours by default, up to 8760 hours (365 days).\\\"<br>https://docs.aws.amazon.com/streams/latest/dev/kinesis-extended-retention.html<br><br>The question mentioned Kinesis data stream default settings and \\\"every other day\\\". After 24hrs, the data isn't in the Data stream if the default settings is not modified to store data more than 24hrs.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 891375,
          "date": "Sun 07 May 2023 14:38",
          "username": "\t\t\t\tsmd_\t\t\t",
          "content": "By default, a Kinesis data stream is created with one shard. If the data throughput to the stream is higher than the capacity of the single shard, the data stream may not be able to handle all the incoming data, and some data may be lost.<br><br>Therefore, to handle the high volume of data that the application sends to Kinesis Data Streams, the number of Kinesis shards should be increased to handle the required throughput",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 879414,
          "date": "Mon 24 Apr 2023 16:04",
          "username": "\t\t\t\tarjundevops\t\t\t",
          "content": "both Option A and Option C could be valid solutions to resolving the issue of data loss, depending on the root cause of the problem. It would be best to analyze the root cause of the data loss issue to determine which solution is most appropriate for this specific scenario.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 876153,
          "date": "Fri 21 Apr 2023 04:59",
          "username": "\t\t\t\tneosis91\t\t\t",
          "content": "CCCCCCCCC",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 859033,
          "date": "Sun 02 Apr 2023 18:16",
          "username": "\t\t\t\tkraken21\t\t\t",
          "content": "Also: https://www.examtopics.com/discussions/amazon/view/61067-exam-aws-certified-solutions-architect-associate-saa-c02/ for Option A. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 859030,
          "date": "Sun 02 Apr 2023 18:15",
          "username": "\t\t\t\tkraken21\t\t\t",
          "content": "It comes down to is it a compute issue or a storage issue. Since the keywords of \\\"Default\\\", \\\"every other day\\\" were used and the issue is some data is missing, I am voting for Option A. ",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 858509,
          "date": "Sun 02 Apr 2023 06:13",
          "username": "\t\t\t\tchannn\t\t\t",
          "content": "ChapGPT gives answer B or C.  also mention that Option A and option D are not directly related to the issue of data loss and may not help to resolve the problem.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850629,
          "date": "Sun 26 Mar 2023 03:11",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "A comparison of Answer A and Answer C:<br><br>Answer A:A.  Update the Kinesis Data Streams default settings by modifying the data retention period.<br><br>- Answer A modifies the data retention period of Kinesis Data Streams, which defines how long the data is retained in the stream. Increasing the retention period may ensure that all data is eventually ingested and processed by Kinesis Data Streams, but it does not address the immediate issue of data not being ingested by Kinesis Data Streams.<br>- Modifying the data retention period may also lead to increased storage costs if the data is retained for a longer period of time.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer C:C.  Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams.<br><br>- Answer C updates the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams. By increasing the number of shards, the data is distributed across multiple shards, which allows for increased throughput and ensures that all data is ingested and processed by Kinesis Data Streams.<br>- Monitoring the Kinesis Data Streams and adjusting the number of shards as needed to handle changes in data throughput can ensure that the application can handle large amounts of streaming data.</li><li>In comparison, while both options can help address the issue of data not being ingested by Kinesis Data Streams, Answer C is a more direct solution that addresses the underlying issue of insufficient capacity to handle the data throughput. Answer A may delay the issue of incomplete data ingestion by increasing the retention period, but it does not address the root cause of the problem.<br><br>In conclusion, Answer C is a more effective solution for handling large amounts of streaming data and ensuring that all data is ingested and processed by Kinesis Data Streams.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850631,
          "date": "Sun 26 Mar 2023 03:12",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Answer C:C.  Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams.<br><br>- Answer C updates the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams. By increasing the number of shards, the data is distributed across multiple shards, which allows for increased throughput and ensures that all data is ingested and processed by Kinesis Data Streams.<br>- Monitoring the Kinesis Data Streams and adjusting the number of shards as needed to handle changes in data throughput can ensure that the application can handle large amounts of streaming data.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>In comparison, while both options can help address the issue of data not being ingested by Kinesis Data Streams, Answer C is a more direct solution that addresses the underlying issue of insufficient capacity to handle the data throughput. Answer A may delay the issue of incomplete data ingestion by increasing the retention period, but it does not address the root cause of the problem.<br><br>In conclusion, Answer C is a more effective solution for handling large amounts of streaming data and ensuring that all data is ingested and processed by Kinesis Data Streams.</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 850632,
          "date": "Sun 26 Mar 2023 03:13",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "In comparison, while both options can help address the issue of data not being ingested by Kinesis Data Streams, Answer C is a more direct solution that addresses the underlying issue of insufficient capacity to handle the data throughput. Answer A may delay the issue of incomplete data ingestion by increasing the retention period, but it does not address the root cause of the problem.<br><br>In conclusion, Answer C is a more effective solution for handling large amounts of streaming data and ensuring that all data is ingested and processed by Kinesis Data Streams.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 845549,
          "date": "Tue 21 Mar 2023 06:24",
          "username": "\t\t\t\tGrace83\t\t\t",
          "content": "A is the correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 841583,
          "date": "Fri 17 Mar 2023 05:44",
          "username": "\t\t\t\tnileshlg\t\t\t",
          "content": "Correct answer is A.  Keywords to consider are,<br>1. Default Parameters<br>2. Every Other Day",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 841174,
          "date": "Thu 16 Mar 2023 17:22",
          "username": "\t\t\t\tdcp\t\t\t",
          "content": "C.  Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams.<br><br>The issue is that the Amazon S3 bucket is not receiving all the data sent to Kinesis Data Streams. This indicates that the bottleneck is most likely in the Kinesis Data Streams configuration.<br><br>To resolve this issue, a solutions architect should increase the number of Kinesis shards. Kinesis Data Streams partitions data into shards, and each shard can handle a specific amount of data throughput. By default, Kinesis Data Streams is configured with a single shard, which may not be enough to handle the application's data throughput.<br><br>Increasing the number of shards will distribute the data more evenly and improve the throughput, allowing all the data to be processed and sent to Amazon S3 for further analysis.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 840665,
          "date": "Thu 16 Mar 2023 09:00",
          "username": "\t\t\t\tkampatra\t\t\t",
          "content": "Need to increase default retention period",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 838154,
          "date": "Mon 13 Mar 2023 19:29",
          "username": "\t\t\t\tUnluckyDucky\t\t\t",
          "content": "By default, Kinesis Data Streams hold your data for 24 hours. Everything that is 24 hours and 1 second old gets deleted unless the retention policy is changed.<br><br>Key words: Every other day and default settings for that Kinesis streams.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 837191,
          "date": "Sun 12 Mar 2023 17:06",
          "username": "\t\t\t\tKarlos99\t\t\t",
          "content": "https://docs.aws.amazon.com/streams/latest/dev/developing-producers-with-kpl.html<br><br>Role of the KPL<br>The KPL is an easy-to-use, highly configurable library that helps you write to a Kinesis data stream. It acts as an intermediary between your producer application code and the Kinesis Data Streams API actions. The KPL performs the following primary tasks:<br>Writes to one or more Kinesis data streams with an automatic and configurable retry mechanism<br>Collects records and uses PutRecords to write multiple records to multiple shards per request<br>Aggregates user records to increase payload size and improve throughput",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 836001,
          "date": "Sat 11 Mar 2023 14:02",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "C is the correct answer. Agree with cegama543's explanation.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835199,
          "date": "Fri 10 Mar 2023 17:09",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "aaaaaaa<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>AAAAA what?</li></ul>",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 837561,
          "date": "Mon 13 Mar 2023 03:36",
          "username": "\t\t\t\tfkie4\t\t\t",
          "content": "AAAAA what?",
          "upvote_count": "1",
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
      "question_text": "<p>A developer has an application that uses an AWS Lambda function to upload files to Amazon S3 and needs the required permissions to perform the task. The developer already has an IAM user with valid IAM credentials required for Amazon S3.<br><br>What should a solutions architect do to grant the permissions?<br><br></p>",
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
              "choice": "<p>A. Add required IAM permissions in the resource policy of the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a signed request using the existing IAM credentials in the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new IAM user and use the existing IAM credentials in the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM execution role with the required permissions and attach the IAM role to the Lambda function.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850525,
          "date": "Sat 25 Mar 2023 23:35",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "To grant the necessary permissions to an AWS Lambda function to upload files to Amazon S3, a solutions architect should create an IAM execution role with the required permissions and attach the IAM role to the Lambda function. This approach follows the principle of least privilege and ensures that the Lambda function can only access the resources it needs to perform its specific task.<br><br>Therefore, the correct answer is D.  Create an IAM execution role with the required permissions and attach the IAM role to the Lambda function.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 846049,
          "date": "Tue 21 Mar 2023 15:15",
          "username": "\t\t\t\tBilalglg93350\t\t\t",
          "content": "D.  Créez un rôle d'exécution IAM avec les autorisations requises et attachez le rôle IAM à la fonction Lambda.<br><br>L'architecte de solutions doit créer un rôle d'exécution IAM ayant les autorisations nécessaires pour accéder à Amazon S3 et effectuer les opérations requises (par exemple, charger des fichiers). Ensuite, le rôle doit être associé à la fonction Lambda, de sorte que la fonction puisse assumer ce rôle et avoir les autorisations nécessaires pour interagir avec Amazon S3.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 841576,
          "date": "Fri 17 Mar 2023 05:35",
          "username": "\t\t\t\tnileshlg\t\t\t",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 840669,
          "date": "Thu 16 Mar 2023 09:03",
          "username": "\t\t\t\tkampatra\t\t\t",
          "content": "D - correct ans",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 836356,
          "date": "Sat 11 Mar 2023 19:01",
          "username": "\t\t\t\tsitha\t\t\t",
          "content": "Create Lambda execution role and attach existing S3 IAM role to the lambda function",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835834,
          "date": "Sat 11 Mar 2023 11:36",
          "username": "\t\t\t\tktulu2602\t\t\t",
          "content": "Definitely D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835638,
          "date": "Sat 11 Mar 2023 04:58",
          "username": "\t\t\t\tNithin1119\t\t\t",
          "content": "ddddddd",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835202,
          "date": "Fri 10 Mar 2023 17:11",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "dddddddd",
          "upvote_count": "1",
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
      "question_text": "<p>A company has deployed a serverless application that invokes an AWS Lambda function when new documents are uploaded to an Amazon S3 bucket. The application uses the Lambda function to process the documents. After a recent marketing campaign, the company noticed that the application did not process many of the documents.<br><br>What should a solutions architect do to improve the architecture of this application?<br><br></p>",
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
              "choice": "<p>A. Set the Lambda function's runtime timeout value to 15 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an S3 bucket replication policy. Stage the documents in the S3 bucket for later processing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy an additional Lambda function. Load balance the processing of the documents across the two Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Simple Queue Service (Amazon SQS) queue. Send the requests to the queue. Configure the queue as an event source for Lambda.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850645,
          "date": "Sun 26 Mar 2023 03:36",
          "username": "\t\t\t\tRusss99\t\t\t",
          "content": "D is the correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 850511,
          "date": "Sat 25 Mar 2023 23:07",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "To improve the architecture of this application, the best solution would be to use Amazon Simple Queue Service (Amazon SQS) to buffer the requests and decouple the S3 bucket from the Lambda function. This will ensure that the documents are not lost and can be processed at a later time if the Lambda function is not available.<br><br>This will ensure that the documents are not lost and can be processed at a later time if the Lambda function is not available. By using Amazon SQS, the architecture is decoupled and the Lambda function can process the documents in a scalable and fault-tolerant manner.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 846044,
          "date": "Tue 21 Mar 2023 15:11",
          "username": "\t\t\t\tBilalglg93350\t\t\t",
          "content": "D.  Créez une file d'attente Amazon Simple Queue Service (Amazon SQS). Envoyez les demandes à la file d'attente. Configurez la file d'attente en tant que source d'événement pour Lambda.<br><br>Cette solution permet de gérer efficacement les pics de charge et d'éviter la perte de documents en cas d'augmentation soudaine du trafic. Lorsque de nouveaux documents sont chargés dans le compartiment Amazon S3, les demandes sont envoyées à la file d'attente Amazon SQS, qui agit comme un tampon. La fonction Lambda est déclenchée en fonction des événements dans la file d'attente, ce qui permet un traitement équilibré et évite que l'application ne soit submergée par un grand nombre de documents simultanés.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>exactement. si je pouvais explique come cela en Francais aussi</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 850644,
          "date": "Sun 26 Mar 2023 03:35",
          "username": "\t\t\t\tRusss99\t\t\t",
          "content": "exactement. si je pouvais explique come cela en Francais aussi",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 844538,
          "date": "Mon 20 Mar 2023 05:40",
          "username": "\t\t\t\tWherecanIstart\t\t\t",
          "content": "D is the correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 840671,
          "date": "Thu 16 Mar 2023 09:05",
          "username": "\t\t\t\tkampatra\t\t\t",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 837533,
          "date": "Mon 13 Mar 2023 02:40",
          "username": "\t\t\t\tdcp\t\t\t",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835205,
          "date": "Fri 10 Mar 2023 17:12",
          "username": "\t\t\t\ttaehyeki\t\t\t",
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
      "question_text": "<p>A solutions architect is designing a two-tiered architecture that includes a public subnet and a database subnet. The web servers in the public subnet must be open to the internet on port 443. The Amazon RDS for MySQL DB instance in the database subnet must be accessible only to the web servers on port 3306.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
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
              "choice": "<p>A. Create a network ACL for the public subnet. Add a rule to deny outbound traffic to 0.0.0.0/0 on port 3306.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a security group for the DB instance. Add a rule to allow traffic from the public subnet CIDR block on port 3306.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a security group for the web servers in the public subnet. Add a rule to allow traffic from 0.0.0.0/0 on port 443.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a security group for the DB instance. Add a rule to allow traffic from the web servers' security group on port 3306.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create a security group for the DB instance. Add a rule to deny all traffic except traffic from the web servers' security group on port 3306.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 889182,
          "date": "Thu 04 May 2023 07:58",
          "username": "\t\t\t\tdatmd77\t\t\t",
          "content": "Remember guys that SG is not used for Deny action, just Allow",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 850473,
          "date": "Sat 25 Mar 2023 22:26",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "To meet the requirements of allowing access to the web servers in the public subnet on port 443 and the Amazon RDS for MySQL DB instance in the database subnet on port 3306, the best solution would be to create a security group for the web servers and another security group for the DB instance, and then define the appropriate inbound and outbound rules for each security group.<br><br>1. Create a security group for the web servers in the public subnet. Add a rule to allow traffic from 0.0.0.0/0 on port 443.<br>2. Create a security group for the DB instance. Add a rule to allow traffic from the web servers' security group on port 3306.<br><br>This will allow the web servers in the public subnet to receive traffic from the internet on port 443, and the Amazon RDS for MySQL DB instance in the database subnet to receive traffic only from the web servers on port 3306.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 840681,
          "date": "Thu 16 Mar 2023 09:18",
          "username": "\t\t\t\tkampatra\t\t\t",
          "content": "CD - Correct ans.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 839036,
          "date": "Tue 14 Mar 2023 17:28",
          "username": "\t\t\t\tEden\t\t\t",
          "content": "I choose CE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 837664,
          "date": "Mon 13 Mar 2023 06:48",
          "username": "\t\t\t\tlili_9\t\t\t",
          "content": "CE support @sitha",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 836323,
          "date": "Sat 11 Mar 2023 18:32",
          "username": "\t\t\t\tsitha\t\t\t",
          "content": "Answer: CE . The solution is to deny accessing DB from Internet and allow only access from webserver.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835968,
          "date": "Sat 11 Mar 2023 13:24",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "C & D are the right choices. correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 835715,
          "date": "Sat 11 Mar 2023 08:18",
          "username": "\t\t\t\tKS2020\t\t\t",
          "content": "why not CE?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>By default Security Group deny all trafic and we need to configure to enable.</li><li>Characteristics of security group rules<br><br>You can specify allow rules, but not deny rules.<br>https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html</li></ul>",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 840682,
          "date": "Thu 16 Mar 2023 09:18",
          "username": "\t\t\t\tkampatra\t\t\t",
          "content": "By default Security Group deny all trafic and we need to configure to enable.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 837528,
          "date": "Mon 13 Mar 2023 02:32",
          "username": "\t\t\t\tdcp\t\t\t",
          "content": "Characteristics of security group rules<br><br>You can specify allow rules, but not deny rules.<br>https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835214,
          "date": "Fri 10 Mar 2023 17:19",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "cdcdcdcdcdc",
          "upvote_count": "2",
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
      "question_text": "<p>A company is implementing a shared storage solution for a gaming application that is hosted in the AWS Cloud. The company needs the ability to use Lustre clients to access data. The solution must be fully managed.<br><br>Which solution meets these requirements?<br><br></p>",
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
              "choice": "<p>A. Create an AWS DataSync task that shares the data as a mountable file system. Mount the file system to the application server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 850464,
          "date": "Sat 25 Mar 2023 22:16",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "To meet the requirements of a shared storage solution for a gaming application that can be accessed using Lustre clients and is fully managed, the best solution would be to use Amazon FSx for Lustre.<br><br>Amazon FSx for Lustre is a fully managed file system that is optimized for compute-intensive workloads, such as high-performance computing, machine learning, and gaming. It provides a POSIX-compliant file system that can be accessed using Lustre clients and offers high performance, scalability, and data durability.<br><br>This solution provides a highly available, scalable, and fully managed shared storage solution that can be accessed using Lustre clients. Amazon FSx for Lustre is optimized for compute-intensive workloads and provides high performance and durability.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer A, creating an AWS DataSync task that shares the data as a mountable file system and mounting the file system to the application server, may not provide the required performance and scalability for a gaming application.<br><br>Answer B, creating an AWS Storage Gateway file gateway and connecting the application server to the file share, may not provide the required performance and scalability for a gaming application.<br><br>Answer C, creating an Amazon Elastic File System (Amazon EFS) file system and configuring it to support Lustre, may not provide the required performance and scalability for a gaming application and may require additional configuration and management overhead.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 850465,
          "date": "Sat 25 Mar 2023 22:18",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Answer A, creating an AWS DataSync task that shares the data as a mountable file system and mounting the file system to the application server, may not provide the required performance and scalability for a gaming application.<br><br>Answer B, creating an AWS Storage Gateway file gateway and connecting the application server to the file share, may not provide the required performance and scalability for a gaming application.<br><br>Answer C, creating an Amazon Elastic File System (Amazon EFS) file system and configuring it to support Lustre, may not provide the required performance and scalability for a gaming application and may require additional configuration and management overhead.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 840684,
          "date": "Thu 16 Mar 2023 09:21",
          "username": "\t\t\t\tkampatra\t\t\t",
          "content": "D - correct ans",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 836349,
          "date": "Sat 11 Mar 2023 18:57",
          "username": "\t\t\t\tkprakashbehera\t\t\t",
          "content": "FSx for Lustre<br>DDDDDD",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835962,
          "date": "Sat 11 Mar 2023 13:16",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "Amazon FSx for Lustre is the right answer<br>• Lustre is a type of parallel distributed file system, for large-scale computing, Machine Learning, High Performance Computing (HPC)<br>• Video Processing, Financial Modeling, Electronic Design Automatio",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835369,
          "date": "Fri 10 Mar 2023 20:57",
          "username": "\t\t\t\tcegama543\t\t\t",
          "content": "Option D is the best solution because Amazon FSx for Lustre is a fully managed, high-performance file system that is designed to support compute-intensive workloads, such as those required by gaming applications. FSx for Lustre provides sub-millisecond access to petabyte-scale file systems, and supports Lustre clients natively. This means that the gaming application can access the shared data directly from the FSx for Lustre file system without the need for additional configuration or setup.<br><br>Additionally, FSx for Lustre is a fully managed service, meaning that AWS takes care of all maintenance, updates, and patches for the file system, which reduces the operational overhead required by the company.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835217,
          "date": "Fri 10 Mar 2023 17:20",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "dddddddddddd",
          "upvote_count": "1",
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
      "question_text": "<p>A company runs an application that receives data from thousands of geographically dispersed remote devices that use UDP. The application processes the data immediately and sends a message back to the device if necessary. No data is stored.<br><br>The company needs a solution that minimizes latency for the data transmission from the devices. The solution also must provide rapid failover to another AWS Region.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Configure an Amazon Route 53 failover routing policy. Create a Network Load Balancer (NLB) in each of the two Regions. Configure the NLB to invoke an AWS Lambda function to process the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Global Accelerator. Create a Network Load Balancer (NLB) in each of the two Regions as an endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the NLProcess the data in Amazon ECS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Global Accelerator. Create an Application Load Balancer (ALB) in each of the two Regions as an endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the ALB.  Process the data in Amazon ECS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Amazon Route 53 failover routing policy. Create an Application Load Balancer (ALB) in each of the two Regions. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the ALB.  Process the data in Amazon ECS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 838183,
          "date": "Mon 13 Mar 2023 19:49",
          "username": "\t\t\t\tUnluckyDucky\t\t\t",
          "content": "Key words: geographically dispersed, UDP.<br><br>Geographically dispersed (related to UDP) - Global Accelerator - multiple entrances worldwide to the AWS network to provide better transfer rates.<br>UDP - NLB (Network Load Balancer).",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 859128,
          "date": "Sun 02 Apr 2023 19:06",
          "username": "\t\t\t\tkraken21\t\t\t",
          "content": "Global accelerator for multi region automatic failover. NLB for UDP.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 858716,
          "date": "Sun 02 Apr 2023 11:45",
          "username": "\t\t\t\tMaxMa\t\t\t",
          "content": "why not A?<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>NLBs do not support lambda target type. Tricky!!! https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 859129,
          "date": "Sun 02 Apr 2023 19:06",
          "username": "\t\t\t\tkraken21\t\t\t",
          "content": "NLBs do not support lambda target type. Tricky!!! https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 850461,
          "date": "Sat 25 Mar 2023 22:08",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "To meet the requirements of minimizing latency for data transmission from the devices and providing rapid failover to another AWS Region, the best solution would be to use AWS Global Accelerator in combination with a Network Load Balancer (NLB) and Amazon Elastic Container Service (Amazon ECS).<br><br>AWS Global Accelerator is a service that improves the availability and performance of applications by using static IP addresses (Anycast) to route traffic to optimal AWS endpoints. With Global Accelerator, you can direct traffic to multiple Regions and endpoints, and provide automatic failover to another AWS Region.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 835644,
          "date": "Sat 11 Mar 2023 05:07",
          "username": "\t\t\t\tRuhi02\t\t\t",
          "content": "Answer should be B. . there is typo mistake in B.  Correct Answer is :Use AWS Global Accelerator. Create a Network Load Balancer (NLB) in each of the two Regions as an endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the NLB.  Process the data in Amazon ECS.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 835219,
          "date": "Fri 10 Mar 2023 17:24",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "bbbbbbbb",
          "upvote_count": "1",
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
      "question_text": "<p>A solutions architect must migrate a Windows Internet Information Services (IIS) web application to AWS. The application currently relies on a file share hosted in the user's on-premises network-attached storage (NAS). The solutions architect has proposed migrating the IIS web servers to Amazon EC2 instances in multiple Availability Zones that are connected to the storage solution, and configuring an Elastic Load Balancer attached to the instances.<br><br>Which replacement to the on-premises file share is MOST resilient and durable?<br><br></p>",
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
              "choice": "<p>A. Migrate the file share to Amazon RDS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the file share to AWS Storage Gateway.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the file share to Amazon FSx for Windows File Server.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the file share to Amazon Elastic File System (Amazon EFS).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 858521,
          "date": "Sun 02 Apr 2023 06:51",
          "username": "\t\t\t\tchannn\t\t\t",
          "content": "A) RDS is a database service<br>B) Storage Gateway is a hybrid cloud storage service that connects on-premises applications to AWS storage services.<br>D) provides shared file storage for Linux-based workloads, but it does not natively support Windows-based workloads.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850454,
          "date": "Sat 25 Mar 2023 21:59",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "The most resilient and durable replacement for the on-premises file share in this scenario would be Amazon FSx for Windows File Server.<br><br>Amazon FSx is a fully managed Windows file system service that is built on Windows Server and provides native support for the SMB protocol. It is designed to be highly available and durable, with built-in backup and restore capabilities. It is also fully integrated with AWS security services, providing encryption at rest and in transit, and it can be configured to meet compliance standards.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Migrating the file share to Amazon RDS or AWS Storage Gateway is not appropriate as these services are designed for database workloads and block storage respectively, and do not provide native support for the SMB protocol.<br><br>Migrating the file share to Amazon EFS (Linux ONLY) could be an option, but Amazon FSx for Windows File Server would be more appropriate in this case because it is specifically designed for Windows file shares and provides better performance for Windows applications.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850455,
          "date": "Sat 25 Mar 2023 22:00",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Migrating the file share to Amazon RDS or AWS Storage Gateway is not appropriate as these services are designed for database workloads and block storage respectively, and do not provide native support for the SMB protocol.<br><br>Migrating the file share to Amazon EFS (Linux ONLY) could be an option, but Amazon FSx for Windows File Server would be more appropriate in this case because it is specifically designed for Windows file shares and provides better performance for Windows applications.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 845602,
          "date": "Tue 21 Mar 2023 07:58",
          "username": "\t\t\t\tGrace83\t\t\t",
          "content": "Obviously C is the correct answer - FSx for Windows - Windows",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 838186,
          "date": "Mon 13 Mar 2023 19:51",
          "username": "\t\t\t\tUnluckyDucky\t\t\t",
          "content": "FSx for Windows - Windows.<br>EFS - Linux.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 838018,
          "date": "Mon 13 Mar 2023 16:15",
          "username": "\t\t\t\telearningtakai\t\t\t",
          "content": "Amazon EFS is a scalable and fully-managed file storage service that is designed to provide high availability and durability. It can be accessed by multiple EC2 instances across multiple Availability Zones simultaneously. Additionally, it offers automatic and instantaneous data replication across different availability zones within a region, which makes it resilient to failures.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>EFS is a wrong choice because it can only work with Linux instances. That application has a Windows web server , so its OS is Windowsand EFS cannot connect to it</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 843300,
          "date": "Sun 19 Mar 2023 01:28",
          "username": "\t\t\t\tasoli\t\t\t",
          "content": "EFS is a wrong choice because it can only work with Linux instances. That application has a Windows web server , so its OS is Windowsand EFS cannot connect to it",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 837520,
          "date": "Mon 13 Mar 2023 02:22",
          "username": "\t\t\t\tdcp\t\t\t",
          "content": "Amazon FSx",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 836205,
          "date": "Sat 11 Mar 2023 16:22",
          "username": "\t\t\t\tsitha\t\t\t",
          "content": "Amazon FSx makes it easy and cost effective to launch, run, and scale feature-rich, high-performance file systems in the cloud.<br>Answer : C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835877,
          "date": "Sat 11 Mar 2023 12:14",
          "username": "\t\t\t\tKAUS2\t\t\t",
          "content": "FSx for Windows is a fully managed Windows file system share drive . Hence C is the correct answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835646,
          "date": "Sat 11 Mar 2023 05:10",
          "username": "\t\t\t\tRuhi02\t\t\t",
          "content": "FSx for Windows is ideal in this case. So answer is C. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835220,
          "date": "Fri 10 Mar 2023 17:25",
          "username": "\t\t\t\ttaehyeki\t\t\t",
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
      "question_text": "<p>A company is deploying a new application on Amazon EC2 instances. The application writes data to Amazon Elastic Block Store (Amazon EBS) volumes. The company needs to ensure that all data that is written to the EBS volumes is encrypted at rest.<br><br>Which solution will meet this requirement?<br><br></p>",
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
              "choice": "<p>A. Create an IAM role that specifies EBS encryption. Attach the role to the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create the EBS volumes as encrypted volumes. Attach the EBS volumes to the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an EC2 instance tag that has a key of Encrypt and a value of True. Tag all instances that require encryption at the EBS level.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Key Management Service (AWS KMS) key policy that enforces EBS encryption in the account. Ensure that the key policy is active.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 856582,
          "date": "Fri 31 Mar 2023 06:03",
          "username": "\t\t\t\telearningtakai\t\t\t",
          "content": "The other options either do not meet the requirement of encrypting data at rest (A and C) or do so in a more complex or less efficient manner (D).",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 850452,
          "date": "Sat 25 Mar 2023 21:52",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "The solution that will meet the requirement of ensuring that all data that is written to the EBS volumes is encrypted at rest is B.  Create the EBS volumes as encrypted volumes and attach the encrypted EBS volumes to the EC2 instances.<br><br>When you create an EBS volume, you can specify whether to encrypt the volume. If you choose to encrypt the volume, all data written to the volume is automatically encrypted at rest using AWS-managed keys. You can also use customer-managed keys (CMKs) stored in AWS KMS to encrypt and protect your EBS volumes. You can create encrypted EBS volumes and attach them to EC2 instances to ensure that all data written to the volumes is encrypted at rest.<br><br>Answer A is incorrect because attaching an IAM role to the EC2 instances does not automatically encrypt the EBS volumes.<br><br>Answer C is incorrect because adding an EC2 instance tag does not ensure that the EBS volumes are encrypted.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 846258,
          "date": "Tue 21 Mar 2023 19:52",
          "username": "\t\t\t\tBofi\t\t\t",
          "content": "Why not D, EBS encryption require the use of KMS key<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer D is incorrect because creating a KMS key policy that enforces EBS encryption does not automatically encrypt EBS volumes. You need to create encrypted EBS volumes and attach them to EC2 instances to ensure that all data written to the volumes are encrypted at rest.</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 850450,
          "date": "Sat 25 Mar 2023 21:50",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Answer D is incorrect because creating a KMS key policy that enforces EBS encryption does not automatically encrypt EBS volumes. You need to create encrypted EBS volumes and attach them to EC2 instances to ensure that all data written to the volumes are encrypted at rest.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 844545,
          "date": "Mon 20 Mar 2023 05:53",
          "username": "\t\t\t\tWherecanIstart\t\t\t",
          "content": "Create encrypted EBS volumes and attach encrypted EBS volumes to EC2 instances..",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 836038,
          "date": "Sat 11 Mar 2023 14:34",
          "username": "\t\t\t\tsitha\t\t\t",
          "content": "Use Amazon EBS encryption as an encryption solution for your EBS resources associated with your EC2 instances.Select KMS Keys either default or custom",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835647,
          "date": "Sat 11 Mar 2023 05:12",
          "username": "\t\t\t\tRuhi02\t\t\t",
          "content": "Answer B.  You can enable encryption for EBS volumes while creating them.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 835221,
          "date": "Fri 10 Mar 2023 17:26",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "bbbbbbbb",
          "upvote_count": "1",
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
      "question_text": "<p>A company has a web application with sporadic usage patterns. There is heavy usage at the beginning of each month, moderate usage at the start of each week, and unpredictable usage during the week. The application consists of a web server and a MySQL database server running inside the data center. The company would like to move the application to the AWS Cloud, and needs to select a cost-effective database platform that will not require database modifications.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Amazon DynamoDB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon RDS for MySQL<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. MySQL-compatible Amazon Aurora Serverless<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. MySQL deployed on Amazon EC2 in an Auto Scaling group<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 858528,
          "date": "Sun 02 Apr 2023 06:59",
          "username": "\t\t\t\tchannn\t\t\t",
          "content": "C: Aurora Serverless is a MySQL-compatible relational database engine that automatically scales compute and memory resources based on application usage. no upfront costs or commitments required. <br>A: DynamoDB is a NoSQL<br>B: Fixed cost on RDS class<br>D: More operation requires",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850449,
          "date": "Sat 25 Mar 2023 21:46",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Answer C, MySQL-compatible Amazon Aurora Serverless, would be the best solution to meet the company's requirements.<br><br>Aurora Serverless can be a cost-effective option for databases with sporadic or unpredictable usage patterns since it automatically scales up or down based on the current workload. Additionally, Aurora Serverless is compatible with MySQL, so it does not require any modifications to the application's database code.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850054,
          "date": "Sat 25 Mar 2023 12:04",
          "username": "\t\t\t\tklayytech\t\t\t",
          "content": "Amazon RDS for MySQL is a cost-effective database platform that will not require database modifications. It makes it easier to set up, operate, and scale MySQL deployments in the cloud. With Amazon RDS, you can deploy scalable MySQL servers in minutes with cost-efficient and resizable hardware capacity². <br><br>Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB is a good choice for applications that require low-latency data access¹.<br><br>MySQL-compatible Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora (MySQL-compatible edition), where the database will automatically start up, shut down, and scale capacity up or down based on your application's needs³.<br><br>So, Amazon RDS for MySQL is the best option for your requirements.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>sorry i will change to C , because<br><br>Amazon RDS for MySQL is a fully-managed relational database service that makes it easy to set up, operate, and scale MySQL deployments in the cloud. Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora (MySQL-compatible edition), where the database will automatically start up, shut down, and scale capacity up or down based on your application's needs. It is a simple, cost-effective option for infrequent, intermittent, or unpredictable workloads.</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 858292,
          "date": "Sat 01 Apr 2023 23:09",
          "username": "\t\t\t\tklayytech\t\t\t",
          "content": "sorry i will change to C , because<br><br>Amazon RDS for MySQL is a fully-managed relational database service that makes it easy to set up, operate, and scale MySQL deployments in the cloud. Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora (MySQL-compatible edition), where the database will automatically start up, shut down, and scale capacity up or down based on your application's needs. It is a simple, cost-effective option for infrequent, intermittent, or unpredictable workloads.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 841182,
          "date": "Thu 16 Mar 2023 17:30",
          "username": "\t\t\t\tboxu03\t\t\t",
          "content": "Amazon Aurora Serverless : a simple, cost-effective option for infrequent, intermittent, or unpredictable workloads",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 835223,
          "date": "Fri 10 Mar 2023 17:29",
          "username": "\t\t\t\ttaehyeki\t\t\t",
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
      "question_text": "<p>An image-hosting company stores its objects in Amazon S3 buckets. The company wants to avoid accidental exposure of the objects in the S3 buckets to the public. All S3 objects in the entire AWS account need to remain private.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Use Amazon GuardDuty to monitor S3 bucket policies. Create an automatic remediation action rule that uses an AWS Lambda function to remediate any change that makes the objects public.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Trusted Advisor to find publicly accessible S3 buckets. Configure email notifications in Trusted Advisor when a change is detected. Manually change the S3 bucket policy if it allows public access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Resource Access Manager to find publicly accessible S3 buckets. Use Amazon Simple Notification Service (Amazon SNS) to invoke an AWS Lambda function when a change is detected. Deploy a Lambda function that programmatically remediates the change.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the S3 Block Public Access feature on the account level. Use AWS Organizations to create a service control policy (SCP) that prevents IAM users from changing the setting. Apply the SCP to the account.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 835651,
          "date": "Sat 11 Mar 2023 05:23",
          "username": "\t\t\t\tRuhi02\t\t\t",
          "content": "Answer is D ladies and gentlemen. While guard duty helps to monitor s3 for potential threats its a reactive action. We should always be proactive and not reactive in our solutions so D, block public access to avoid any possibility of the info becoming publicly accessible",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 856917,
          "date": "Fri 31 Mar 2023 12:43",
          "username": "\t\t\t\telearningtakai\t\t\t",
          "content": "This is the most effective solution to meet the requirements.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 850447,
          "date": "Sat 25 Mar 2023 21:38",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Answer D is the correct solution that meets the requirements. The S3 Block Public Access feature allows you to restrict public access to S3 buckets and objects within the account. You can enable this feature at the account level to prevent any S3 bucket from being made public, regardless of the bucket policy settings. AWS Organizations can be used to apply a Service Control Policy (SCP) to the account to prevent IAM users from changing this setting, ensuring that all S3 objects remain private. This is a straightforward and effective solution that requires minimal operational overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 846262,
          "date": "Tue 21 Mar 2023 20:02",
          "username": "\t\t\t\tBofi\t\t\t",
          "content": "Option D provided real solution by using bucket policy to restrict public access. Other options were focus on detection which wasn't what was been asked",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 835224,
          "date": "Fri 10 Mar 2023 17:30",
          "username": "\t\t\t\ttaehyeki\t\t\t",
          "content": "ddddddddd",
          "upvote_count": "1",
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
      "question_text": "<p>An ecommerce company is experiencing an increase in user traffic. The company's store is deployed on Amazon EC2 instances as a two-tier web application consisting of a web tier and a separate database tier. As traffic increases, the company notices that the architecture is causing significant delays in sending timely marketing and order confirmation email to users. The company wants to reduce the time it spends resolving complex email delivery issues and minimize operational overhead.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Create a separate application tier using EC2 instances dedicated to email processing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the web instance to send email through Amazon Simple Email Service (Amazon SES).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the web instance to send email through Amazon Simple Notification Service (Amazon SNS).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a separate application tier using EC2 instances dedicated to email processing. Place the instances in an Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 856923,
          "date": "Fri 31 Mar 2023 12:46",
          "username": "\t\t\t\telearningtakai\t\t\t",
          "content": "Amazon SES is a cost-effective and scalable email service that enables businesses to send and receive email using their own email addresses and domains. Configuring the web instance to send email through Amazon SES is a simple and effective solution that can reduce the time spent resolving complex email delivery issues and minimize operational overhead.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 850439,
          "date": "Sat 25 Mar 2023 21:23",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "The best option for addressing the company's needs of minimizing operational overhead and reducing time spent resolving email delivery issues is to use Amazon Simple Email Service (Amazon SES).<br><br>Answer A of creating a separate application tier for email processing may add additional complexity to the architecture and require more operational overhead.<br><br>Answer C of using Amazon Simple Notification Service (Amazon SNS) is not an appropriate solution for sending marketing and order confirmation emails since Amazon SNS is a messaging service that is designed to send messages to subscribed endpoints or clients.<br><br>Answer D of creating a separate application tier using EC2 instances dedicated to email processing placed in an Auto Scaling group is a more complex solution than necessary and may result in additional operational overhead.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 840704,
          "date": "Thu 16 Mar 2023 09:46",
          "username": "\t\t\t\tnileshlg\t\t\t",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 835653,
          "date": "Sat 11 Mar 2023 05:25",
          "username": "\t\t\t\tRuhi02\t\t\t",
          "content": "Answer B. . SES is meant for sending high volume e-mail efficiently and securely.<br>SNS is meant as a channel publisher/subscriber service",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 835228,
          "date": "Fri 10 Mar 2023 17:32",
          "username": "\t\t\t\ttaehyeki\t\t\t",
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
      "question_text": "<p>A company has a business system that generates hundreds of reports each day. The business system saves the reports to a network share in CSV format. The company needs to store this data in the AWS Cloud in near-real time for analysis.<br><br>Which solution will meet these requirements with the LEAST administrative overhead?<br><br></p>",
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
              "choice": "<p>A. Use AWS DataSync to transfer the files to Amazon S3. Create a scheduled task that runs at the end of each day.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon S3 File Gateway. Update the business system to use a new network share from the S3 File Gateway.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS DataSync to transfer the files to Amazon S3. Create an application that uses the DataSync API in the automation workflow.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an AWS Transfer for SFTP endpoint. Create a script that checks for new files on the network share and uploads the new files by using SFTP.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 883832,
          "date": "Fri 28 Apr 2023 20:54",
          "username": "\t\t\t\tkruasan\t\t\t",
          "content": "The correct solution here is:<br>B.  Create an Amazon S3 File Gateway. Update the business system to use a new network share from the S3 File Gateway.<br><br>This option requires the least administrative overhead because:<br><br>- It presents a simple network file share interface that the business system can write to, just like a standard network share. This requires minimal changes to the business system.<br><br>- The S3 File Gateway automatically uploads all files written to the share to an S3 bucket in the background. This handles the transfer and upload to S3 without requiring any scheduled tasks, scripts or automation.<br><br>- All ongoing management like monitoring, scaling, patching etc. is handled by AWS for the S3 File Gateway.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>The other options would require more ongoing administrative effort:<br><br>A) AWS DataSync would require creating and managing scheduled tasks and monitoring them. <br><br>C) Using the DataSync API would require developing an application and then managing and monitoring it. <br><br>D) The SFTP option would require creating scripts, managing SFTP access and keys, and monitoring the file transfer process.<br><br>So overall, the S3 File Gateway requires the least amount of ongoing management and administration as it presents a simple file share interface but handles the upload to S3 in a fully managed fashion. The business system can continue writing to a network share as is, while the files are transparently uploaded to S3.<br><br>The S3 File Gateway is the most hands-off, low-maintenance solution in this scenario.</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 883833,
          "date": "Fri 28 Apr 2023 20:54",
          "username": "\t\t\t\tkruasan\t\t\t",
          "content": "The other options would require more ongoing administrative effort:<br><br>A) AWS DataSync would require creating and managing scheduled tasks and monitoring them. <br><br>C) Using the DataSync API would require developing an application and then managing and monitoring it. <br><br>D) The SFTP option would require creating scripts, managing SFTP access and keys, and monitoring the file transfer process.<br><br>So overall, the S3 File Gateway requires the least amount of ongoing management and administration as it presents a simple file share interface but handles the upload to S3 in a fully managed fashion. The business system can continue writing to a network share as is, while the files are transparently uploaded to S3.<br><br>The S3 File Gateway is the most hands-off, low-maintenance solution in this scenario.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 858534,
          "date": "Sun 02 Apr 2023 07:12",
          "username": "\t\t\t\tchannn\t\t\t",
          "content": "Key words: <br>1. near-real-time (A is out)<br>2. LEAST administrative (C n D is out)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 856931,
          "date": "Fri 31 Mar 2023 12:51",
          "username": "\t\t\t\telearningtakai\t\t\t",
          "content": "A - creating a scheduled task is not near-real time.<br>B - The S3 File Gateway caches frequently accessed data locally and automatically uploads it to Amazon S3, providing near-real-time access to the data.<br>C - creating an application that uses the DataSync API in the automation workflow may provide near-real-time data access, but it requires additional development effort.<br>D - it requires additional development effort.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 855192,
          "date": "Thu 30 Mar 2023 04:05",
          "username": "\t\t\t\tzooba72\t\t\t",
          "content": "It's B. DataSync has a scheduler and it runs on hour intervals, it cannot be used real-time",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 850431,
          "date": "Sat 25 Mar 2023 21:09",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "The correct answer is C.  Use AWS DataSync to transfer the files to Amazon S3. Create an application that uses the DataSync API in the automation workflow.<br><br>To store the CSV reports generated by the business system in the AWS Cloud in near-real time for analysis, the best solution with the least administrative overhead would be to use AWS DataSync to transfer the files to Amazon S3 and create an application that uses the DataSync API in the automation workflow.<br><br>AWS DataSync is a fully managed service that makes it easy to automate and accelerate data transfer between on-premises storage systems and AWS Cloud storage, such as Amazon S3. With DataSync, you can quickly and securely transfer large amounts of data to the AWS Cloud, and you can automate the transfer process using the DataSync API.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer A, using AWS DataSync to transfer the files to Amazon S3 and creating a scheduled task that runs at the end of each day, is not the best solution because it does not meet the requirement of storing the CSV reports in near-real time for analysis.<br><br>Answer B, creating an Amazon S3 File Gateway and updating the business system to use a new network share from the S3 File Gateway, is not the best solution because it requires additional configuration and management overhead.<br><br>Answer D, deploying an AWS Transfer for the SFTP endpoint and creating a script to check for new files on the network share and upload the new files using SFTP, is not the best solution because it requires additional scripting and management overhead</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850436,
          "date": "Sat 25 Mar 2023 21:14",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Answer A, using AWS DataSync to transfer the files to Amazon S3 and creating a scheduled task that runs at the end of each day, is not the best solution because it does not meet the requirement of storing the CSV reports in near-real time for analysis.<br><br>Answer B, creating an Amazon S3 File Gateway and updating the business system to use a new network share from the S3 File Gateway, is not the best solution because it requires additional configuration and management overhead.<br><br>Answer D, deploying an AWS Transfer for the SFTP endpoint and creating a script to check for new files on the network share and upload the new files using SFTP, is not the best solution because it requires additional scripting and management overhead",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 847317,
          "date": "Wed 22 Mar 2023 18:05",
          "username": "\t\t\t\tCOTIT\t\t\t",
          "content": "I think B is the better answer, \\\"LEAST administrative overhead\\\"<br>https://aws.amazon.com/storagegateway/file/?nc1=h_ls",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 847260,
          "date": "Wed 22 Mar 2023 17:26",
          "username": "\t\t\t\tandyto\t\t\t",
          "content": "B - S3 File Gateway.<br>C - this is wrong answer because data migration is scheduled (this is not continuous task), so condition \\\"near-real time\\\" is not fulfilled",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 845690,
          "date": "Tue 21 Mar 2023 10:03",
          "username": "\t\t\t\tThief\t\t\t",
          "content": "C is the best ans<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Why not A? There is no scheduled job?</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 850400,
          "date": "Sat 25 Mar 2023 20:25",
          "username": "\t\t\t\tlizzard812\t\t\t",
          "content": "Why not A? There is no scheduled job?",
          "upvote_count": "1",
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
      "question_text": "<p>A company is storing petabytes of data in Amazon S3 Standard. The data is stored in multiple S3 buckets and is accessed with varying frequency. The company does not know access patterns for all the data. The company needs to implement a solution for each S3 bucket to optimize the cost of S3 usage.<br><br>Which solution will meet these requirements with the MOST operational efficiency?<br><br></p>",
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
              "choice": "<p>A. Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Intelligent-Tiering.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the S3 storage class analysis tool to determine the correct tier for each object in the S3 bucket. Move each object to the identified storage tier.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Glacier Instant Retrieval.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 One Zone-Infrequent Access (S3 One Zone-IA).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 858538,
          "date": "Sun 02 Apr 2023 07:14",
          "username": "\t\t\t\tchannn\t\t\t",
          "content": "Key words: 'The company does not know access patterns for all the data', so A. ",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 850424,
          "date": "Sat 25 Mar 2023 20:59",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "The correct answer is A.  <br><br>Creating an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Intelligent-Tiering would be the most efficient solution to optimize the cost of S3 usage. S3 Intelligent-Tiering is a storage class that automatically moves objects between two access tiers (frequent and infrequent) based on changing access patterns. It is a cost-effective solution that does not require any manual intervention to move data to different storage classes, unlike the other options.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer B, Using the S3 storage class analysis tool to determine the correct tier for each object and manually moving objects to the identified storage tier would be time-consuming and require more operational overhead. <br><br>Answer C, Transitioning objects to S3 Glacier Instant Retrieval would be appropriate for data that is accessed less frequently and does not require immediate access. <br><br>Answer D, S3 One Zone-IA would be appropriate for data that can be recreated if lost and does not require the durability of S3 Standard or S3 Standard-IA. </li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 850425,
          "date": "Sat 25 Mar 2023 20:59",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Answer B, Using the S3 storage class analysis tool to determine the correct tier for each object and manually moving objects to the identified storage tier would be time-consuming and require more operational overhead. <br><br>Answer C, Transitioning objects to S3 Glacier Instant Retrieval would be appropriate for data that is accessed less frequently and does not require immediate access. <br><br>Answer D, S3 One Zone-IA would be appropriate for data that can be recreated if lost and does not require the durability of S3 Standard or S3 Standard-IA. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 847324,
          "date": "Wed 22 Mar 2023 18:10",
          "username": "\t\t\t\tCOTIT\t\t\t",
          "content": "For me is A.  Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Intelligent-Tiering.<br><br>Why?<br>\\\"S3 Intelligent-Tiering is the ideal storage class for data with unknown, changing, or unpredictable access patterns\\\"<br>https://aws.amazon.com/s3/storage-classes/intelligent-tiering/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 846268,
          "date": "Tue 21 Mar 2023 20:11",
          "username": "\t\t\t\tBofi\t\t\t",
          "content": "Once the data traffic is unpredictable, Intelligent-Tiering is the best option",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 845269,
          "date": "Mon 20 Mar 2023 22:44",
          "username": "\t\t\t\tNIL8891\t\t\t",
          "content": "Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Intelligent-Tiering.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 845112,
          "date": "Mon 20 Mar 2023 18:35",
          "username": "\t\t\t\tMaximus007\t\t\t",
          "content": "A: as exact pattern is not clear",
          "upvote_count": "1",
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
      "question_text": "<p>A rapidly growing global ecommerce company is hosting its web application on AWS. The web application includes static content and dynamic content. The website stores online transaction processing (OLTP) data in an Amazon RDS database The website's users are experiencing slow page loads.<br><br>Which combination of actions should a solutions architect take to resolve this issue? (Choose two.)<br><br></p>",
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
              "choice": "<p>A. Configure an Amazon Redshift cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an Amazon CloudFront distribution.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Host the dynamic web content in Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a read replica for the RDS DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Configure a Multi-AZ deployment for the RDS DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 854867,
          "date": "Wed 29 Mar 2023 21:23",
          "username": "\t\t\t\tSamDouk\t\t\t",
          "content": "B and D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 850422,
          "date": "Sat 25 Mar 2023 20:51",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "To resolve the issue of slow page loads for a rapidly growing e-commerce website hosted on AWS, a solutions architect can take the following two actions:<br><br>1. Set up an Amazon CloudFront distribution<br>2. Create a read replica for the RDS DB instance<br><br>Configuring an Amazon Redshift cluster is not relevant to this issue since Redshift is a data warehousing service and is typically used for the analytical processing of large amounts of data.<br><br>Hosting the dynamic web content in Amazon S3 may not necessarily improve performance since S3 is an object storage service, not a web application server. While S3 can be used to host static web content, it may not be suitable for hosting dynamic web content since S3 doesn't support server-side scripting or processing.<br><br>Configuring a Multi-AZ deployment for the RDS DB instance will improve high availability but may not necessarily improve performance.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 850076,
          "date": "Sat 25 Mar 2023 12:33",
          "username": "\t\t\t\tklayytech\t\t\t",
          "content": "The website's users are experiencing slow page loads.<br><br>To resolve this issue, a solutions architect should take the following two actions:<br><br>Create a read replica for the RDS DB instance. This will help to offload read traffic from the primary database instance and improve performance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 849778,
          "date": "Sat 25 Mar 2023 04:32",
          "username": "\t\t\t\tzooba72\t\t\t",
          "content": "Question asked about performance improvements, not HA. Cloudfront & Read Replica",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 849764,
          "date": "Sat 25 Mar 2023 03:54",
          "username": "\t\t\t\tthaotnt\t\t\t",
          "content": "slow page loads. >>> D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 848618,
          "date": "Thu 23 Mar 2023 20:46",
          "username": "\t\t\t\tandyto\t\t\t",
          "content": "Read Replica will speed up Reads on RDS DB. <br>E is wrong. It brings HA but doesn't contribute to speed which is impacted in this case. Multi-AZ is Active-Standby solution.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 847330,
          "date": "Wed 22 Mar 2023 18:19",
          "username": "\t\t\t\tCOTIT\t\t\t",
          "content": "I agree with B & E. B.  Set up an Amazon CloudFront distribution. (Amazon CloudFront is a content delivery network (CDN) service)E.  Configure a Multi-AZ deployment for the RDS DB instance. (Good idea for loadbalance the DB workflow)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 847284,
          "date": "Wed 22 Mar 2023 17:41",
          "username": "\t\t\t\tSantosh43\t\t\t",
          "content": "B and E ( as there is nothing mention about read transactions)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 847053,
          "date": "Wed 22 Mar 2023 13:34",
          "username": "\t\t\t\tAkademik6\t\t\t",
          "content": "Cloudfront and Read Replica. We don't need HA here.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 846294,
          "date": "Tue 21 Mar 2023 20:59",
          "username": "\t\t\t\tacts268\t\t\t",
          "content": "Cloud Front and Read Replica",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 846272,
          "date": "Tue 21 Mar 2023 20:19",
          "username": "\t\t\t\tBofi\t\t\t",
          "content": "Amazon CloudFront can handle both static and Dynamic contents hence there is not need for option C l.e hosting the static data on Amazon S3. RDS read replica will reduce the amount of reads on the RDS hence leading a better performance. Multi-AZ is for disaster Recovery , which means D is also out.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 845697,
          "date": "Tue 21 Mar 2023 10:11",
          "username": "\t\t\t\tThief\t\t\t",
          "content": "CloudFont with S3",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 845267,
          "date": "Mon 20 Mar 2023 22:43",
          "username": "\t\t\t\tNIL8891\t\t\t",
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
      "question_text": "<p>A company uses Amazon EC2 instances and AWS Lambda functions to run its application. The company has VPCs with public subnets and private subnets in its AWS account. The EC2 instances run in a private subnet in one of the VPCs. The Lambda functions need direct network access to the EC2 instances for the application to work.<br><br>The application will run for at least 1 year. The company expects the number of Lambda functions that the application uses to increase during that time. The company wants to maximize its savings on all application resources and to keep network latency between the services low.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Purchase an EC2 Instance Savings Plan Optimize the Lambda functions' duration and memory usage and the number of invocations. Connect the Lambda functions to the private subnet that contains the EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Purchase an EC2 Instance Savings Plan Optimize the Lambda functions' duration and memory usage, the number of invocations, and the amount of data that is transferred. Connect the Lambda functions to a public subnet in the same VPC where the EC2 instances run.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Purchase a Compute Savings Plan. Optimize the Lambda functions' duration and memory usage, the number of invocations, and the amount of data that is transferred. Connect the Lambda functions to the private subnet that contains the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Purchase a Compute Savings Plan. Optimize the Lambda functions' duration and memory usage, the number of invocations, and the amount of data that is transferred. Keep the Lambda functions in the Lambda service VPC. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 855243,
          "date": "Thu 30 Mar 2023 05:33",
          "username": "\t\t\t\telearningtakai\t\t\t",
          "content": "Connect Lambda to Private Subnet contains EC2",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850418,
          "date": "Sat 25 Mar 2023 20:44",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Answer C is the best solution that meets the company's requirements.<br><br>By purchasing a Compute Savings Plan, the company can save on the costs of running both EC2 instances and Lambda functions. The Lambda functions can be connected to the private subnet that contains the EC2 instances through a VPC endpoint for AWS services or a VPC peering connection. This provides direct network access to the EC2 instances while keeping the traffic within the private network, which helps to minimize network latency.<br><br>Optimizing the Lambda functions' duration, memory usage, number of invocations, and amount of data transferred can help to further minimize costs and improve performance. Additionally, using a private subnet helps to ensure that the EC2 instances are not directly accessible from the public internet, which is a security best practice.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Answer A is not the best solution because connecting the Lambda functions directly to the private subnet that contains the EC2 instances may not be scalable as the number of Lambda functions increases. Additionally, using an EC2 Instance Savings Plan may not provide savings on the costs of running Lambda functions.<br><br>Answer B is not the best solution because connecting the Lambda functions to a public subnet may not be as secure as connecting them to a private subnet. Also, keeping the EC2 instances in a private subnet helps to ensure that they are not directly accessible from the public internet.<br><br>Answer D is not the best solution because keeping the Lambda functions in the Lambda service VPC may not provide direct network access to the EC2 instances, which may impact the performance of the application.</li></ul>",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 850419,
          "date": "Sat 25 Mar 2023 20:44",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Answer A is not the best solution because connecting the Lambda functions directly to the private subnet that contains the EC2 instances may not be scalable as the number of Lambda functions increases. Additionally, using an EC2 Instance Savings Plan may not provide savings on the costs of running Lambda functions.<br><br>Answer B is not the best solution because connecting the Lambda functions to a public subnet may not be as secure as connecting them to a private subnet. Also, keeping the EC2 instances in a private subnet helps to ensure that they are not directly accessible from the public internet.<br><br>Answer D is not the best solution because keeping the Lambda functions in the Lambda service VPC may not provide direct network access to the EC2 instances, which may impact the performance of the application.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 849782,
          "date": "Sat 25 Mar 2023 04:43",
          "username": "\t\t\t\tzooba72\t\t\t",
          "content": "Compute savings plan covers both EC2 & Lambda",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 848359,
          "date": "Thu 23 Mar 2023 16:16",
          "username": "\t\t\t\tZox42\t\t\t",
          "content": "C.  I would go with C, because Compute savings plans cover Lambda as well.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 847287,
          "date": "Wed 22 Mar 2023 17:41",
          "username": "\t\t\t\tandyto\t\t\t",
          "content": "A.  I would go with A.  Saving and low network latency are required.<br>EC2 instance savings plans offer savings of up to 72%<br>Compute savings plans offer savings of up to 66%<br>Placing Lambda on the same private network with EC2 instances provides the lowest latency.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>EC2 Instance Savings Plans apply to EC2 usage only. Compute Savings Plans apply to usage across Amazon EC2, AWS Lambda, and AWS Fargate. (https://aws.amazon.com/savingsplans/faq/)Lambda functions need direct network access to the EC2 instances for the application to work and these EC2 instances are in the private subnet. So the correct answer is C. </li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 848567,
          "date": "Thu 23 Mar 2023 19:48",
          "username": "\t\t\t\tabitwrong\t\t\t",
          "content": "EC2 Instance Savings Plans apply to EC2 usage only. Compute Savings Plans apply to usage across Amazon EC2, AWS Lambda, and AWS Fargate. (https://aws.amazon.com/savingsplans/faq/)Lambda functions need direct network access to the EC2 instances for the application to work and these EC2 instances are in the private subnet. So the correct answer is C. ",
          "upvote_count": "1",
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
      "question_text": "<p>A solutions architect needs to allow team members to access Amazon S3 buckets in two different AWS accounts: a development account and a production account. The team currently has access to S3 buckets in the development account by using unique IAM users that are assigned to an IAM group that has appropriate permissions in the account.<br><br>The solutions architect has created an IAM role in the production account. The role has a policy that grants access to an S3 bucket in the production account.<br><br>Which solution will meet these requirements while complying with the principle of least privilege?<br><br></p>",
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
              "choice": "<p>A. Attach the Administrator Access policy to the development account users.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add the development account as a principal in the trust policy of the role in the production account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn off the S3 Block Public Access feature on the S3 bucket in the production account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a user in the production account with unique credentials for each team member.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 875830,
          "date": "Thu 20 Apr 2023 19:45",
          "username": "\t\t\t\tkels1\t\t\t",
          "content": "well, if you made it this far, it means you are persistent :) Good luck with your exam!<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thanks good luck for all</li></ul>",
          "upvote_count": "8",
          "selected_answers": ""
        },
        {
          "id": 892200,
          "date": "Mon 08 May 2023 15:22",
          "username": "\t\t\t\tSkyZeroZx\t\t\t",
          "content": "Thanks good luck for all",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 860568,
          "date": "Tue 04 Apr 2023 04:55",
          "username": "\t\t\t\tgpt_test\t\t\t",
          "content": "By adding the development account as a principal in the trust policy of the IAM role in the production account, you are allowing users from the development account to assume the role in the production account. This allows the team members to access the S3 bucket in the production account without granting them unnecessary privileges.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 855244,
          "date": "Thu 30 Mar 2023 05:40",
          "username": "\t\t\t\telearningtakai\t\t\t",
          "content": "About Trust policy – The trust policy defines which principals can assume the role, and under which conditions. A trust policy is a specific type of resource-based policy for IAM roles. <br><br>Answer A: overhead permission Admin to development. <br>Answer C: Block public access is a security best practice and seems not relevant to this scenario.<br>Answer D: difficult to manage and scale",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 850408,
          "date": "Sat 25 Mar 2023 20:35",
          "username": "\t\t\t\tBuruguduystunstugudunstuy\t\t\t",
          "content": "Answer A, attaching the Administrator Access policy to development account users, provides too many permissions and violates the principle of least privilege. This would give users more access than they need, which could lead to security issues if their credentials are compromised.<br><br>Answer C, turning off the S3 Block Public Access feature, is not a recommended solution as it is a security best practice to enable S3 Block Public Access to prevent accidental public access to S3 buckets.<br><br>Answer D, creating a user in the production account with unique credentials for each team member, is also not a recommended solution as it can be difficult to manage and scale for large teams. It is also less secure, as individual user credentials can be more easily compromised.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 850105,
          "date": "Sat 25 Mar 2023 13:11",
          "username": "\t\t\t\tklayytech\t\t\t",
          "content": "The solution that will meet these requirements while complying with the principle of least privilege is to add the development account as a principal in the trust policy of the role in the production account. This will allow team members to access Amazon S3 buckets in two different AWS accounts while complying with the principle of least privilege. <br><br>Option A is not recommended because it grants too much access to development account users. Option C is not relevant to this scenario. Option D is not recommended because it does not comply with the principle of least privilege.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 847065,
          "date": "Wed 22 Mar 2023 13:42",
          "username": "\t\t\t\tAkademik6\t\t\t",
          "content": "B is the correct answer",
          "upvote_count": "2",
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
      "question_text": "<p>A company uses AWS Organizations with all features enabled and runs multiple Amazon EC2 workloads in the ap-southeast-2 Region. The company has a service control policy (SCP) that prevents any resources from being created in any other Region. A security policy requires the company to encrypt all data at rest.<br><br>An audit discovers that employees have created Amazon Elastic Block Store (Amazon EBS) volumes for EC2 instances without encrypting the volumes. The company wants any new EC2 instances that any IAM user or root user launches in ap-southeast-2 to use encrypted EBS volumes. The company wants a solution that will have minimal effect on employees who create EBS volumes.<br><br>Which combination of steps will meet these requirements? (Choose two.)<br><br></p>",
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
              "choice": "<p>A. In the Amazon EC2 console, select the EBS encryption account attribute and define a default encryption key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM permission boundary. Attach the permission boundary to the root organizational unit (OU). Define the boundary to deny the ec2:CreateVolume action when the ec2:Encrypted condition equals false.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an SCP. Attach the SCP to the root organizational unit (OU). Define the SCP to deny the ec2:CreateVolume action whenthe ec2:Encrypted condition equals false.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Update the IAM policies for each account to deny the ec2:CreateVolume action when the ec2:Encrypted condition equals false.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. In the Organizations management account, specify the Default EBS volume encryption setting.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899136,
          "date": "Tue 16 May 2023 13:47",
          "username": "\t\t\t\tEfren\t\t\t",
          "content": "CE for me as well",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 898150,
          "date": "Mon 15 May 2023 11:08",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "SCP that denies the ec2:CreateVolume action when the ec2:Encrypted condition equals false. This will prevent users and service accounts in member accounts from creating unencrypted EBS volumes in the ap-southeast-2 Region.<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>agreed</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 899135,
          "date": "Tue 16 May 2023 13:46",
          "username": "\t\t\t\tEfren\t\t\t",
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
      "question_text": "<p>A company wants to use an Amazon RDS for PostgreSQL DB cluster to simplify time-consuming database administrative tasks for production database workloads. The company wants to ensure that its database is highly available and will provide automatic failover support in most scenarios in less than 40 seconds. The company wants to offload reads off of the primary instance and keep costs as low as possible.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#420",
          "answers": [
            {
              "choice": "<p>A. Use an Amazon RDS Multi-AZ DB instance deployment. Create one read replica and point the read workload to the read replica.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an Amazon RDS Multi-AZ DB duster deployment Create two read replicas and point the read workload to the read replicas.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an Amazon RDS Multi-AZ DB instance deployment. Point the read workload to the secondary instances in the Multi-AZ pair.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an Amazon RDS Multi-AZ DB cluster deployment Point the read workload to the reader endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 898203,
          "date": "Mon 15 May 2023 13:09",
          "username": "\t\t\t\tgreyrose\t\t\t",
          "content": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 898152,
          "date": "Mon 15 May 2023 11:19",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "RDS Multi-AZ DB instance deployment is a highly available and scalable database deployment option that provides automatic failover support in most scenarios in less than 40 seconds.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#421",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a highly available SFTP service. The SFTP service uses two Amazon EC2 Linux instances that run with elastic IP addresses to accept traffic from trusted IP sources on the internet. The SFTP service is backed by shared storage that is attached to the instances. User accounts are created and managed as Linux users in the SFTP servers.<br><br>The company wants a serverless option that provides high IOPS performance and highly configurable security. The company also wants to maintain control over user permissions.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#421",
          "answers": [
            {
              "choice": "<p>A. Create an encrypted Amazon Elastic Block Store (Amazon EBS) volume. Create an AWS Transfer Family SFTP service with a public endpoint that allows only trusted IP addresses. Attach the EBS volume to the SFTP service endpoint. Grant users access to the SFTP service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an encrypted Amazon Elastic File System (Amazon EFS) volume. Create an AWS Transfer Family SFTP service with elastic IP addresses and a VPC endpoint that has internet-facing access. Attach a security group to the endpoint that allows only trusted IP addresses. Attach the EFS volume to the SFTP service endpoint. Grant users access to the SFTP service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon S3 bucket with default encryption enabled. Create an AWS Transfer Family SFTP service with a public endpoint that allows only trusted IP addresses. Attach the S3 bucket to the SFTP service endpoint. Grant users access to the SFTP service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon S3 bucket with default encryption enabled. Create an AWS Transfer Family SFTP service with a VPC endpoint that has internal access in a private subnet. Attach a security group that allows only trusted IP addresses. Attach the S3 bucket to the SFTP service endpoint. Grant users access to the SFTP service.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899152,
          "date": "Tue 16 May 2023 13:57",
          "username": "\t\t\t\tEfren\t\t\t",
          "content": "D for me as well",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 898157,
          "date": "Mon 15 May 2023 11:28",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "high IOPS performance, highly configurable security",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#422",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a new machine learning (ML) model solution on AWS. The models are developed as independent microservices that fetch approximately 1 GB of model data from Amazon S3 at startup and load the data into memory. Users access the models through an asynchronous API. Users can send a request or a batch of requests and specify where the results should be sent.<br><br>The company provides models to hundreds of users. The usage patterns for the models are irregular. Some models could be unused for days or weeks. Other models could receive batches of thousands of requests at a time.<br><br>Which design should a solutions architect recommend to meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Direct the requests from the API to a Network Load Balancer (NLB). Deploy the models as AWS Lambda functions that are invoked by the NLB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Direct the requests from the API to an Application Load Balancer (ALB). Deploy the models as Amazon Elastic Container Service (Amazon ECS) services that read from an Amazon Simple Queue Service (Amazon SQS) queue. Use AWS App Mesh to scale the instances of the ECS cluster based on the SQS queue size.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Direct the requests from the API into an Amazon Simple Queue Service (Amazon SQS) queue. Deploy the models as AWS Lambda functions that are invoked by SQS events. Use AWS Auto Scaling to increase the number of vCPUs for the Lambda functions based on the SQS queue size.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Direct the requests from the API into an Amazon Simple Queue Service (Amazon SQS) queue. Deploy the models as Amazon Elastic Container Service (Amazon ECS) services that read from the queue. Enable AWS Auto Scaling on Amazon ECS for both the cluster and copies of the service based on the queue size.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 898230,
          "date": "Mon 15 May 2023 13:40",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "because it is scalable, reliable, and efficient.<br>C does not scale the models automatically",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#423",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect wants to use the following JSON text as an identity-based policy to grant specific permissions:<br><br><img src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image4.png\"><br><br>Which IAM principals can the solutions architect attach this policy to? (Choose two.)<br><br></p>",
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
              "choice": "<p>A. Role<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Group<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Organization<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon Elastic Container Service (Amazon ECS) resource<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Amazon EC2 resource<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 898235,
          "date": "Mon 15 May 2023 13:45",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "identity-based policy used for role and group",
          "upvote_count": "2",
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
      "question_text": "<p>A company is running a custom application on Amazon EC2 On-Demand Instances. The application has frontend nodes that need to run 24 hours a day, 7 days a week and backend nodes that need to run only for a short time based on workload. The number of backend nodes varies during the day.<br><br>The company needs to scale out and scale in more instances based on workload.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
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
              "choice": "<p>A. Use Reserved Instances for the frontend nodes. Use AWS Fargate for the backend nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Reserved Instances for the frontend nodes. Use Spot Instances for the backend nodes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Spot Instances for the frontend nodes. Use Reserved Instances for the backend nodes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Spot Instances for the frontend nodes. Use AWS Fargate for the backend nodes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 898781,
          "date": "Tue 16 May 2023 02:10",
          "username": "\t\t\t\tEfren\t\t\t",
          "content": "Agreed",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 898244,
          "date": "Mon 15 May 2023 13:58",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "Reserved+ spot .<br>Fargate for serverless",
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
      "question_text": "<p>A company uses high block storage capacity to runs its workloads on premises. The company's daily peak input and output transactions per second are not more than 15,000 IOPS. The company wants to migrate the workloads to Amazon EC2 and to provision disk performance independent of storage capacity.<br><br>Which Amazon Elastic Block Store (Amazon EBS) volume type will meet these requirements MOST cost-effectively?<br><br></p>",
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
              "choice": "<p>A. GP2 volume type<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. io2 volume type<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. GP3 volume type<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. io1 volume type<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 898782,
          "date": "Tue 16 May 2023 02:13",
          "username": "\t\t\t\tEfren\t\t\t",
          "content": "GPS3 allows 16000 IOPS",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 898243,
          "date": "Mon 15 May 2023 13:57",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "Gp3 $ 0.08 usd per gb<br>Gp2 $ 0.10 usd per gb",
          "upvote_count": "2",
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
      "question_text": "<p>A company needs to store data from its healthcare application. The application's data frequently changes. A new regulation requires audit access at all levels of the stored data.<br><br>The company hosts the application on an on-premises infrastructure that is running out of storage capacity. A solutions architect must securely migrate the existing data to AWS while satisfying the new regulation.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Use AWS DataSync to move the existing data to Amazon S3. Use AWS CloudTrail to log data events.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Snowcone to move the existing data to Amazon S3. Use AWS CloudTrail to log management events.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon S3 Transfer Acceleration to move the existing data to Amazon S3. Use AWS CloudTrail to log data events.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Storage Gateway to move the existing data to Amazon S3. Use AWS CloudTrail to log management events.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 898783,
          "date": "Tue 16 May 2023 02:14",
          "username": "\t\t\t\tEfren\t\t\t",
          "content": "One time synch, its Data Sync. Dont bother for greyrose answers, they are usually wrong",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 898246,
          "date": "Mon 15 May 2023 14:01",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "Easy transfer data to s3 + encrypted",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 898211,
          "date": "Mon 15 May 2023 13:18",
          "username": "\t\t\t\tgreyrose\t\t\t",
          "content": "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#427",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is implementing a complex Java application with a MySQL database. The Java application must be deployed on Apache Tomcat and must be highly available.<br><br>What should the solutions architect do to meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Deploy the application in AWS Lambda. Configure an Amazon API Gateway API to connect with the Lambda functions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy the application by using AWS Elastic Beanstalk. Configure a load-balanced environment and a rolling deployment policy.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database to Amazon ElastiCache. Configure the ElastiCache security group to allow access from the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Launch an Amazon EC2 instance. Install a MySQL server on the EC2 instance. Configure the application on the server. Create an AMI. Use the AMI to create a launch template with an Auto Scaling group.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 898251,
          "date": "Mon 15 May 2023 14:06",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "Easy deploy, management and scale",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 898213,
          "date": "Mon 15 May 2023 13:19",
          "username": "\t\t\t\tgreyrose\t\t\t",
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
      "question_text": "<p>A serverless application uses Amazon API Gateway, AWS Lambda, and Amazon DynamoDB.  The Lambda function needs permissions to read and write to the DynamoDB table.<br><br>Which solution will give the Lambda function access to the DynamoDB table MOST securely?<br><br></p>",
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
              "choice": "<p>A. Create an IAM user with programmatic access to the Lambda function. Attach a policy to the user that allows read and write access to the DynamoDB table. Store the access_key_id and secret_access_key parameters as part of the Lambda environment variables. Ensure that other AWS users do not have read and write access to the Lambda function configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an IAM role that includes Lambda as a trusted service. Attach a policy to the role that allows read and write access to the DynamoDB table. Update the configuration of the Lambda function to use the new role as the execution role.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM user with programmatic access to the Lambda function. Attach a policy to the user that allows read and write access to the DynamoDB table. Store the access_key_id and secret_access_key parameters in AWS Systems Manager Parameter Store as secure string parameters. Update the Lambda function code to retrieve the secure string parameters before connecting to the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role that includes DynamoDB as a trusted service. Attach a policy to the role that allows read and write access from the Lambda function. Update the code of the Lambda function to attach to the new role as an execution role.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 898259,
          "date": "Mon 15 May 2023 14:18",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "B is right<br>Role key word and trusted service lambda",
          "upvote_count": "2",
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
      "question_text": "<p>The following IAM policy is attached to an IAM group. This is the only policy applied to the group.<br><br><img src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image5.png\"><br><br>What are the effective IAM permissions of this policy for group members?<br><br></p>",
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
              "choice": "<p>A. Group members are permitted any Amazon EC2 action within the us-east-1 Region. Statements after the Allow permission are not applied.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Group members are denied any Amazon EC2 permissions in the us-east-1 Region unless they are logged in with multi-factor authentication (MFA).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Group members are allowed the ec2:StopInstances and ec2:TerminateInstances permissions for all Regions when logged in with multi-factor authentication (MFA). Group members are permitted any other Amazon EC2 action.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Group members are allowed the ec2:StopInstances and ec2:TerminateInstances permissions for the us-east-1 Region only when logged in with multi-factor authentication (MFA). Group members are permitted any other Amazon EC2 action within the us-east-1 Region.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 898263,
          "date": "Mon 15 May 2023 14:23",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "D is right",
          "upvote_count": "2",
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
      "question_text": "<p>A manufacturing company has machine sensors that upload .csv files to an Amazon S3 bucket. These .csv files must be converted into images and must be made available as soon as possible for the automatic generation of graphical reports.<br><br>The images become irrelevant after 1 month, but the .csv files must be kept to train machine learning (ML) models twice a year. The ML trainings and audits are planned weeks in advance.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)<br><br></p>",
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
              "choice": "<p>A. Launch an Amazon EC2 Spot Instance that downloads the .csv files every hour, generates the image files, and uploads the images to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Design an AWS Lambda function that converts the .csv files into images and stores the images in the S3 bucket. Invoke the Lambda function when a .csv file is uploaded.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3 Standard to S3 Glacier 1 day after they are uploaded. Expire the image files after 30 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 1 day after they are uploaded. Expire the image files after 30 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 1 day after they are uploaded. Keep the image files in Reduced Redundancy Storage (RRS).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 898271,
          "date": "Mon 15 May 2023 14:29",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "B severless and cost effective<br>C corrctl rule to store",
          "upvote_count": "1",
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
      "question_text": "<p>A company has developed a new video game as a web application. The application is in a three-tier architecture in a VPC with Amazon RDS for MySQL in the database layer. Several players will compete concurrently online. The game's developers want to display a top-10 scoreboard in near-real time and offer the ability to stop and restore the game while preserving the current scores.<br><br>What should a solutions architect do to meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Set up an Amazon ElastiCache for Memcached cluster to cache the scores for the web application to display.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an Amazon ElastiCache for Redis cluster to compute and cache the scores for the web application to display.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Place an Amazon CloudFront distribution in front of the web application to cache the scoreboard in a section of the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a read replica on Amazon RDS for MySQL to run queries to compute the scoreboard and serve the read traffic to the web application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899054,
          "date": "Tue 16 May 2023 12:20",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "B is right",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 898201,
          "date": "Mon 15 May 2023 13:08",
          "username": "\t\t\t\tEfren\t\t\t",
          "content": "More questions!!!",
          "upvote_count": "1",
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
      "question_text": "<p>An ecommerce company wants to use machine learning (ML) algorithms to build and train models. The company will use the models to visualize complex scenarios and to detect trends in customer data. The architecture team wants to integrate its ML models with a reporting platform to analyze the augmented data and use the data directly in its business intelligence dashboards.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
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
              "choice": "<p>A. Use AWS Glue to create an ML transform to build and train models. Use Amazon OpenSearch Service to visualize the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon SageMaker to build and train models. Use Amazon QuickSight to visualize the data.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use a pre-built ML Amazon Machine Image (AMI) from the AWS Marketplace to build and train models. Use Amazon OpenSearch Service to visualize the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon QuickSight to build and train models by using calculated fields. Use Amazon QuickSight to visualize the data.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899658,
          "date": "Wed 17 May 2023 04:35",
          "username": "\t\t\t\tEfren\t\t\t",
          "content": "ML== SageMaker",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 898278,
          "date": "Mon 15 May 2023 14:40",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "B sagemaker provide deploy ml models",
          "upvote_count": "1",
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
      "question_text": "<p>A company is running its production and nonproduction environment workloads in multiple AWS accounts. The accounts are in an organization in AWS Organizations. The company needs to design a solution that will prevent the modification of cost usage tags.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Create a custom AWS Config rule to prevent tag modification except by authorized principals.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a custom trail in AWS CloudTrail to prevent tag modification.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a service control policy (SCP) to prevent tag modification except by authorized principals.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create custom Amazon CloudWatch logs to prevent tag modification.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899058,
          "date": "Tue 16 May 2023 12:23",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "Denies tag: modify",
          "upvote_count": "1",
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
      "question_text": "<p>A company hosts its application in the AWS Cloud. The application runs on Amazon EC2 instances behind an Elastic Load Balancer in an Auto Scaling group and with an Amazon DynamoDB table. The company wants to ensure the application can be made available in anotherAWS Region with minimal downtime.<br><br>What should a solutions architect do to meet these requirements with the LEAST amount of downtime?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#434",
          "answers": [
            {
              "choice": "<p>A. Create an Auto Scaling group and a load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new disaster recovery Region's load balancer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS CloudFormation template to create EC2 instances, load balancers, and DynamoDB tables to be launched when needed Configure DNS failover to point to the new disaster recovery Region's load balancer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS CloudFormation template to create EC2 instances and a load balancer to be launched when needed. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new disaster recovery Region's load balancer.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Auto Scaling group and load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table. Create an Amazon CloudWatch alarm to trigger an AWS Lambda function that updates Amazon Route 53 pointing to the disaster recovery load balancer.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 898286,
          "date": "Mon 15 May 2023 14:55",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "D for me<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Misunderstanding. Only A valid</li><li>I would go for A.  If we have DNS failover, why to burden with lambda updating the DNS records?</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 899062,
          "date": "Tue 16 May 2023 12:25",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "Misunderstanding. Only A valid",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 899002,
          "date": "Tue 16 May 2023 10:40",
          "username": "\t\t\t\tEfren\t\t\t",
          "content": "I would go for A.  If we have DNS failover, why to burden with lambda updating the DNS records?",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#435",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to migrate a MySQL database from its on-premises data center to AWS within 2 weeks. The database is 20 TB in size. The company wants to complete the migration with minimal downtime.<br><br>Which solution will migrate the database MOST cost-effectively?<br><br></p>",
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
              "choice": "<p>A. Order an AWS Snowball Edge Storage Optimized device. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with replication of ongoing changes. Send the Snowball Edge device to AWS to finish the migration and continue the ongoing replication.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Order an AWS Snowmobile vehicle. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with ongoing changes. Send the Snowmobile vehicle back to AWS to finish the migration and continue the ongoing replication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Order an AWS Snowball Edge Compute Optimized with GPU device. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with ongoing changes. Send the Snowball device to AWS to finish the migration and continue the ongoing replication<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Order a 1 GB dedicated AWS Direct Connect connection to establish a connection with the data center. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with replication of ongoing changes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899118,
          "date": "Tue 16 May 2023 13:35",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "A) 300 first 10 days. 150 shipping<br>D) 750 for 2 weeks<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>Thanks, i was checking the speed more than price. Thanks for the clarification</li></ul>",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 899663,
          "date": "Wed 17 May 2023 04:39",
          "username": "\t\t\t\tEfren\t\t\t",
          "content": "Thanks, i was checking the speed more than price. Thanks for the clarification",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 899004,
          "date": "Tue 16 May 2023 10:42",
          "username": "\t\t\t\tEfren\t\t\t",
          "content": "20 TB 1G/S would take around 44 hours. I guess it takes less than snow devices to receive and send it back",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#436",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company moved its on-premises PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. The company successfully launched a new product. The workload on the database has increased. The company wants to accommodate the larger workload without adding infrastructure.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
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
              "choice": "<p>A. Buy reserved DB instances for the total workload. Make the Amazon RDS for PostgreSQL DB instance larger.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Make the Amazon RDS for PostgreSQL DB instance a Multi-AZ DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Buy reserved DB instances for the total workload. Add another Amazon RDS for PostgreSQL DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Make the Amazon RDS for PostgreSQL DB instance an on-demand DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899119,
          "date": "Tue 16 May 2023 13:36",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "A for me, because without adding additional infrastructure",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 898206,
          "date": "Mon 15 May 2023 13:14",
          "username": "\t\t\t\tth3k33n\t\t\t",
          "content": "Should be C<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>That would add more infraestructure. A would increase the size, keeping the number of instances, i think</li></ul>",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 899006,
          "date": "Tue 16 May 2023 10:44",
          "username": "\t\t\t\tEfren\t\t\t",
          "content": "That would add more infraestructure. A would increase the size, keeping the number of instances, i think",
          "upvote_count": "1",
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
      "question_text": "<p>A company operates an ecommerce website on Amazon EC2 instances behind an Application Load Balancer (ALB) in an Auto Scaling group. The site is experiencing performance issues related to a high request rate from illegitimate external systems with changing IP addresses. The security team is worried about potential DDoS attacks against the website. The company must block the illegitimate incoming requests in a way that has a minimal impact on legitimate users.<br><br>What should a solutions architect recommend?<br><br></p>",
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
              "choice": "<p>A. Deploy Amazon Inspector and associate it with the ALB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy AWS WAF, associate it with the ALB, and configure a rate-limiting rule.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy rules to the network ACLs associated with the ALB to block the incomingtraffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy Amazon GuardDuty and enable rate-limiting protection when configuring GuardDuty.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899130,
          "date": "Tue 16 May 2023 13:44",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "B obv for this",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 899007,
          "date": "Tue 16 May 2023 10:45",
          "username": "\t\t\t\tEfren\t\t\t",
          "content": "D, Guard Duty for me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#438",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to share accounting data with an external auditor. The data is stored in an Amazon RDS DB instance that resides in a private subnet. The auditor has its own AWS account and requires its own copy of the database.<br><br>What is the MOST secure way for the company to share the database with the auditor?<br><br></p>",
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
              "choice": "<p>A. Create a read replica of the database. Configure IAM standard database authentication to grant the auditor access.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Export the database contents to text files. Store the files in an Amazon S3 bucket. Create a new IAM user for the auditor. Grant the user access to the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Copy a snapshot of the database to an Amazon S3 bucket. Create an IAM user. Share the user's keys with the auditor to grant access to the object in the S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an encrypted snapshot of the database. Share the snapshot with the auditor. Allow access to the AWS Key Management Service (AWS KMS) encryption key.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899146,
          "date": "Tue 16 May 2023 13:51",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "D for me",
          "upvote_count": "2",
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
      "question_text": "<p>A solutions architect configured a VPC that has a small range of IP addresses. The number of Amazon EC2 instances that are in the VPC is increasing, and there is an insufficient number of IP addresses for future workloads.<br><br>Which solution resolves this issue with the LEAST operational overhead?<br><br></p>",
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
              "choice": "<p>A. Add an additional IPv4 CIDR block to increase the number of IP addresses and create additional subnets in the VPC.  Create new resources in the new subnets by using the new CIDR.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a second VPC with additional subnets. Use a peering connection to connect the second VPC with the first VPC Update the routes and create new resources in the subnets of the second VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Transit Gateway to add a transit gateway and connect a second VPC with the first VPUpdate the routes of the transit gateway and VPCs. Create new resources in the subnets of the second VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a second VPC.  Create a Site-to-Site VPN connection between the first VPC and the second VPC by using a VPN-hosted solution on Amazon EC2 and a virtual private gateway. Update the route between VPCs to the traffic through the VPN. Create new resources in the subnets of the second VPC. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899148,
          "date": "Tue 16 May 2023 13:52",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "A valid",
          "upvote_count": "1",
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
      "question_text": "<p>A company used an Amazon RDS for MySQL DB instance during application testing. Before terminating the DB instance at the end of the test cycle, a solutions architect created two backups. The solutions architect created the first backup by using the mysqldump utility to create a database dump. The solutions architect created the second backup by enabling the final DB snapshot option on RDS termination.<br><br>The company is now planning for a new test cycle and wants to create a new DB instance from the most recent backup. The company has chosen a MySQL-compatible edition ofAmazon Aurora to host the DB instance.<br><br>Which solutions will create the new DB instance? (Choose two.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#440",
          "answers": [
            {
              "choice": "<p>A. Import the RDS snapshot directly into Aurora.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Upload the RDS snapshot to Amazon S3. Then import the RDS snapshot into Aurora.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Upload the database dump to Amazon S3. Then import the database dump into Aurora.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Database Migration Service (AWS DMS) to import the RDS snapshot into Aurora.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Upload the database dump to Amazon S3. Then use AWS Database Migration Service (AWS DMS) to import the database dump into Aurora.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 898301,
          "date": "Mon 15 May 2023 15:14",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "Rds required upload to s3<br> <div> Replies:</div> <ul style='list-style-type: disclosure-closed;'><li>If too be honestly can't decide between be and bc...</li></ul>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 898336,
          "date": "Mon 15 May 2023 15:43",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "If too be honestly can't decide between be and bc...",
          "upvote_count": "1",
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
      "question_text": "<p>A company hosts a multi-tier web application on Amazon Linux Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The company observes that the Auto Scaling group launches more On-Demand Instances when the application's end users access high volumes of static web content. The company wants to optimize cost.<br><br>What should a solutions architect do to redesign the application MOST cost-effectively?<br><br></p>",
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
              "choice": "<p>A. Update the Auto Scaling group to use Reserved Instances instead of On-Demand Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the Auto Scaling group to scale by launching Spot Instances instead of On-Demand Instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudFront distribution to host the static web contents from an Amazon S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Lambda function behind an Amazon API Gateway API to host the static website contents.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899377,
          "date": "Tue 16 May 2023 18:58",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "c for me",
          "upvote_count": "1",
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
      "question_text": "<p>A company stores several petabytes of data across multiple AWS accounts. The company uses AWS Lake Formation to manage its data lake. The company's data science team wants to securely share selective data from its accounts with the company's engineering team for analytical purposes.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
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
              "choice": "<p>A. Copy the required data to a common account. Create an IAM access role in that account. Grant access by specifying a permission policy that includes users from the engineering team accounts as trusted entities.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the Lake Formation permissions Grant command in each account where the data is stored to allow the required engineering team users to access the data.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Data Exchange to privately publish the required data to the required engineering team accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Lake Formation tag-based access control to authorize and grant cross-account permissions for the required data to the engineering team accounts.<br></p>",
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
      "question_id": "#443",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to host a scalable web application on AWS. The application will be accessed by users from different geographic regions of the world. Application users will be able to download and upload unique data up to gigabytes in size. The development team wants a cost-effective solution to minimize upload and download latency and maximize performance.<br><br>What should a solutions architect do to accomplish this?<br><br></p>",
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
              "choice": "<p>A. Use Amazon S3 with Transfer Acceleration to host the application.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon S3 with CacheControl headers to host the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon EC2 with Auto Scaling and Amazon CloudFront to host the application.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon EC2 with Auto Scaling and Amazon ElastiCache to host the application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899383,
          "date": "Tue 16 May 2023 19:01",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "i WILL Go with A. ",
          "upvote_count": "2",
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
      "question_text": "<p>A company has hired a solutions architect to design a reliable architecture for its application. The application consists of one Amazon RDS DB instance and two manually provisioned Amazon EC2 instances that run web servers. The EC2 instances are located in a single Availability Zone.<br><br>An employee recently deleted the DB instance, and the application was unavailable for 24 hours as a result. The company is concerned with the overall reliability of its environment.<br><br>What should the solutions architect do to maximize reliability of the application's infrastructure?<br><br></p>",
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
              "choice": "<p>A. Delete one EC2 instance and enable termination protection on the other EC2 instance. Update the DB instance to be Multi-AZ, and enable deletion protection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Update the DB instance to be Multi-AZ, and enable deletion protection. Place the EC2 instances behind an Application Load Balancer, and run them in an EC2 Auto Scaling group across multiple Availability Zones.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an additional DB instance along with an Amazon API Gateway and an AWS Lambda function. Configure the application to invoke the Lambda function through API Gateway. Have the Lambda function write the data to the two DB instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Place the EC2 instances in an EC2 Auto Scaling group that has multiple subnets located in multiple Availability Zones. Use Spot Instances instead of On-Demand Instances. Set up Amazon CloudWatch alarms to monitor the health of the instances Update the DB instance to be Multi-AZ, and enable deletion protection.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899386,
          "date": "Tue 16 May 2023 19:03",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "B is correct. HA ensured by DB in Mutli-AZ and EC2 in AG",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#445",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is storing 700 terabytes of data on a large network-attached storage (NAS) system in its corporate data center. The company has a hybrid environment with a 10 Gbps AWS Direct Connect connection.<br><br>After an audit from a regulator, the company has 90 days to move the data to the cloud. The company needs to move the data efficiently and without disruption. The company still needs to be able to access and update the data during the transfer window.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Create an AWS DataSync agent in the corporate data center. Create a data transfer task Start the transfer to an Amazon S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Back up the data to AWS Snowball Edge Storage Optimized devices. Ship the devices to an AWS data center. Mount a target Amazon S3 bucket on the on-premises file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use rsync to copy the data directly from local storage to a designated Amazon S3 bucket over the Direct Connect connection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Back up the data on tapes. Ship the tapes to an AWS data center. Mount a target Amazon S3 bucket on the on-premises file system.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899170,
          "date": "Tue 16 May 2023 14:18",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "A for me, bcs egde storage up to 100tb",
          "upvote_count": "2",
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
      "question_text": "<p>A company stores data in PDF format in an Amazon S3 bucket. The company must follow a legal requirement to retain all new and existing data in Amazon S3 for 7 years.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#446",
          "answers": [
            {
              "choice": "<p>A. Turn on the S3 Versioning feature for the S3 bucket. Configure S3 Lifecycle to delete the data after 7 years. Configure multi-factor authentication (MFA) delete for all S3 objects.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on S3 Object Lock with governance retention mode for the S3 bucket. Set the retention period to expire after 7 years. Recopy all existing objects to bring the existing data into compliance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Turn on S3 Object Lock with compliance retention mode for the S3 bucket. Set the retention period to expire after 7 years. Recopy all existing objects to bring the existing data into compliance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Turn on S3 Object Lock with compliance retention mode for the S3 bucket. Set the retention period to expire after 7 years. Use S3 Batch Operations to bring the existing data into compliance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899176,
          "date": "Tue 16 May 2023 14:27",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "D for me, bcs no sense to recopy all data",
          "upvote_count": "1",
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
      "question_text": "<p>A company has a stateless web application that runs on AWS Lambda functions that are invoked by Amazon API Gateway. The company wants to deploy the application across multiple AWS Regions to provide Regional failover capabilities.<br><br>What should a solutions architect do to route traffic to multiple Regions?<br><br></p>",
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
              "choice": "<p>A. Create Amazon Route 53 health checks for each Region. Use an active-active failover configuration.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon CloudFront distribution with an origin for each Region. Use CloudFront health checks to route traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a transit gateway. Attach the transit gateway to the API Gateway endpoint in each Region. Configure the transit gateway to route requests.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Application Load Balancer in the primary Region. Set the target group to point to the API Gateway endpoint hostnames in each Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899178,
          "date": "Tue 16 May 2023 14:31",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "B, bcs a cant' provide regional failover",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#448",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has two VPCs named Management and Production. The Management VPC uses VPNs through a customer gateway to connect to a single device in the data center. The Production VPC uses a virtual private gateway with two attached AWS Direct Connect connections. The Management and Production VPCs both use a single VPC peering connection to allow communication between the applications.<br><br>What should a solutions architect do to mitigate any single point of failure in this architecture?<br><br></p>",
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
              "choice": "<p>A. Add a set of VPNs between the Management and Production VPCs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a second virtual private gateway and attach it to the Management VPC. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add a second set of VPNs to the Management VPC from a second customer gateway device.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a second VPC peering connection between the Management VPC and the Production VPC. <br></p>",
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
      "question_id": "#449",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs its application on an Oracle database. The company plans to quickly migrate to AWS because of limited resources for the database, backup administration, and data center maintenance. The application uses third-party database features that require privileged access.<br><br>Which solution will help the company migrate the database to AWS MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#449",
          "answers": [
            {
              "choice": "<p>A. Migrate the database to Amazon RDS for Oracle. Replace third-party features with cloud services.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the database to Amazon RDS Custom for Oracle. Customize the database settings to support third-party features.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate the database to an Amazon EC2 Amazon Machine Image (AMI) for Oracle. Customize the database settings to support third-party features.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Migrate the database to Amazon RDS for PostgreSQL by rewriting the application code to remove dependency on Oracle APEX.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899402,
          "date": "Tue 16 May 2023 19:08",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "not sure, but b probably",
          "upvote_count": "1",
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
      "question_text": "<p>A company has a three-tier web application that is in a single server. The company wants to migrate the application to the AWS Cloud. The company also wants the application to align with the AWS Well-Architected Framework and to be consistent with AWS recommended best practices for security, scalability, and resiliency.<br><br>Which combination of solutions will meet these requirements? (Choose three.)<br><br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#450",
          "answers": [
            {
              "choice": "<p>A. Create a VPC across two Availability Zones with the application's existing architecture. Host the application with existing architecture on an Amazon EC2 instance in a private subnet in each Availability Zone with EC2 Auto Scaling groups. Secure the EC2 instance with security groups and network access control lists (network ACLs).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up security groups and network access control lists (network ACLs) to control access to the database layer. Set up a single Amazon RDS database in a private subnet.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a VPC across two Availability Zones. Refactor the application to host the web tier, application tier, and database tier. Host each tier on its own private subnet with Auto Scaling groups for the web tier and application tier.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a single Amazon RDS database. Allow database access only from the application tier security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use Elastic Load Balancers in front of the web tier. Control access by using security groups containing references to each layer's security groups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use an Amazon RDS database Multi-AZ cluster deployment in private subnets. Allow database access only from application tier security groups.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899197,
          "date": "Tue 16 May 2023 14:49",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "Only this valid for best practices and well architected",
          "upvote_count": "1",
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
      "question_text": "<p>A company is migrating its applications and databases to the AWS Cloud. The company will use Amazon Elastic Container Service (Amazon ECS), AWS Direct Connect, and Amazon RDS.<br><br>Which activities will be managed by the company's operational team? (Choose three.)<br><br></p>",
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
              "choice": "<p>A. Management of the Amazon RDS infrastructure layer, operating system, and platforms<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Creation of an Amazon RDS DB instance and configuring the scheduled maintenance window<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configuration of additional software components on Amazon ECS for monitoring, patch management, log management, and host intrusion detection<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Installation of patches for all minor and major database versions for Amazon RDS<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Ensure the physical security of the Amazon RDS infrastructure in the data center<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Encryption of the data that moves in transit through Direct Connect<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899203,
          "date": "Tue 16 May 2023 14:56",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "Bcf for me",
          "upvote_count": "2",
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
      "question_text": "<p>A company runs a Java-based job on an Amazon EC2 instance. The job runs every hour and takes 10 seconds to run. The job runs on a scheduled interval and consumes 1 GB of memory. The CPU utilization of the instance is low except for short surges during which the job uses the maximum CPU available. The company wants to optimize the costs to run the job.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Use AWS App2Container (A2C) to containerize the job. Run the job as an Amazon Elastic Container Service (Amazon ECS) task on AWS Fargate with 0.5 virtual CPU (vCPU) and 1 GB of memory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Copy the code into an AWS Lambda function that has 1 GB of memory. Create an Amazon EventBridge scheduled rule to run the code each hour.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS App2Container (A2C) to containerize the job. Install the container in the existing Amazon Machine Image (AMI). Ensure that the schedule stops the container when the task finishes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the existing schedule to stop the EC2 instance at the completion of the job and restart the EC2 instance when the next job starts.<br></p>",
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
      "question_id": "#453",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to implement a backup strategy for Amazon EC2 data and multiple Amazon S3 buckets. Because of regulatory requirements, the company must retain backup files for a specific time period. The company must not alter the files for the duration of the retention period.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#453",
          "answers": [
            {
              "choice": "<p>A. Use AWS Backup to create a backup vault that has a vault lock in governance mode. Create the required backup plan.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Data Lifecycle Manager to create the required automated snapshot policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon S3 File Gateway to create the backup. Configure the appropriate S3 Lifecycle management.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Backup to create a backup vault that has a vault lock in compliance mode. Create the required backup plan.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899211,
          "date": "Tue 16 May 2023 15:07",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "D bcs in governance we can delete backup",
          "upvote_count": "1",
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
      "question_text": "<p>A company has resources across multiple AWS Regions and accounts. A newly hired solutions architect discovers a previous employee did not provide details about the resources inventory. The solutions architect needs to build and map the relationship details of the various workloads across all accounts.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#454",
          "answers": [
            {
              "choice": "<p>A. Use AWS Systems Manager Inventory to generate a map view from the detailed view report.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Step Functions to collect workload details. Build architecture diagrams of the workloads manually.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Workload Discovery on AWS to generate architecture diagrams of the workloads.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS X-Ray to view the workload details. Build architecture diagrams with relationships.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899408,
          "date": "Tue 16 May 2023 19:14",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "only c mapping relationships",
          "upvote_count": "1",
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
      "question_text": "<p>A company uses AWS Organizations. The company wants to operate some of its AWS accounts with different budgets. The company wants to receive alerts and automatically prevent provisioning of additional resources on AWS accounts when the allocated budget threshold is met during a specific period.<br><br>Which combination of solutions will meet these requirements? (Choose three.)<br><br></p>",
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
              "choice": "<p>A. Use AWS Budgets to create a budget. Set the budget amount under the Cost and Usage Reports section of the required AWS accounts.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Budgets to create a budget. Set the budget amount under the Billing dashboards of the required AWS accounts.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM user for AWS Budgets to run budget actions with the required permissions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an IAM role for AWS Budgets to run budget actions with the required permissions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Add an alert to notify the company when each account meets its budget threshold. Add a budget action that selects the IAM identity created with the appropriate config rule to prevent provisioning of additional resources.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Add an alert to notify the company when each account meets its budget threshold. Add a budget action that selects the IAM identity created with the appropriate service control policy (SCP) to prevent provisioning of additional resources.<br></p>",
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
      "question_id": "#456",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs applications on Amazon EC2 instances in one AWS Region. The company wants to back up the EC2 instances to a second Region. The company also wants to provision EC2 resources in the second Region and manage the EC2 instances centrally from one AWS account.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
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
              "choice": "<p>A. Create a disaster recovery (DR) plan that has a similar number of EC2 instances in the second Region. Configure data replication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create point-in-time Amazon Elastic Block Store (Amazon EBS) snapshots of the EC2 instances. Copy the snapshots to the second Region periodically.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a backup plan by using AWS Backup. Configure cross-Region backup to the second Region for the EC2 instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy a similar number of EC2 instances in the second Region. Use AWS DataSync to transfer the data from the source Region to the second Region.<br></p>",
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
      "question_id": "#457",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that uses AWS is building an application to transfer data to a product manufacturer. The company has its own identity provider (IdP). The company wants the IdP to authenticate application users while the users use the application to transfer data. The company must use Applicability Statement 2 (AS2) protocol.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Use AWS DataSync to transfer the data. Create an AWS Lambda function for IdP authentication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon AppFlow flows to transfer the data. Create an Amazon Elastic Container Service (Amazon ECS) task for IdP authentication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Transfer Family to transfer the data. Create an AWS Lambda function for IdP authentication.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Storage Gateway to transfer the data. Create an Amazon Cognito identity pool for IdP authentication.<br></p>",
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
      "question_id": "#458",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing a RESTAPI in Amazon API Gateway for a cash payback service. The application requires 1 GB of memory and 2 GB of storage for its computation resources. The application will require that the data is in a relational format.<br><br>Which additional combination ofAWS services will meet these requirements with the LEAST administrative effort? (Choose two.)<br><br></p>",
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
              "choice": "<p>A. Amazon EC2<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS Lambda<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon RDS<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon DynamoDB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Amazon Elastic Kubernetes Services (Amazon EKS)<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899414,
          "date": "Tue 16 May 2023 19:16",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "bc for me",
          "upvote_count": "1",
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
      "question_text": "<p>A company uses AWS Organizations to run workloads within multiple AWS accounts. A tagging policy adds department tags to AWS resources when the company creates tags.<br><br>An accounting team needs to determine spending on Amazon EC2 consumption. The accounting team must determine which departments are responsible for the costs regardless ofAWS account. The accounting team has access to AWS Cost Explorer for all AWS accounts within the organization and needs to access all reports from Cost Explorer.<br><br>Which solution meets these requirements in the MOST operationally efficient way?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#459",
          "answers": [
            {
              "choice": "<p>A. From the Organizations management account billing console, activate a user-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. From the Organizations management account billing console, activate an AWS-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. From the Organizations member account billing console, activate a user-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by the tag name, and filter by EC2.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. From the Organizations member account billing console, activate an AWS-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899438,
          "date": "Tue 16 May 2023 19:33",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "a for me",
          "upvote_count": "1",
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
      "question_text": "<p>A company wants to securely exchange data between its software as a service (SaaS) application Salesforce account and Amazon S3. The company must encrypt the data at rest by using AWS Key Management Service (AWS KMS) customer managed keys (CMKs). The company must also encrypt the data in transit. The company has enabled API access for the Salesforce account.<br><br></p>",
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
              "choice": "<p>A. Create AWS Lambda functions to transfer the data securely from Salesforce to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Step Functions workflow. Define the task to transfer the data securely from Salesforce to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create Amazon AppFlow flows to transfer the data securely from Salesforce to Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a custom connector for Salesforce to transfer the data securely from Salesforce to Amazon S3.<br></p>",
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
      "question_id": "#461",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a mobile gaming app in a single AWS Region. The app runs on multiple Amazon EC2 instances in an Auto Scaling group. The company stores the app data in Amazon DynamoDB.  The app communicates by using TCP traffic and UDP traffic between the users and the servers. The application will be used globally. The company wants to ensure the lowest possible latency for all users.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#461",
          "answers": [
            {
              "choice": "<p>A. Use AWS Global Accelerator to create an accelerator. Create an Application Load Balancer (ALB) behind an accelerator endpoint that uses Global Accelerator integration and listening on the TCP and UDP ports. Update the Auto Scaling group to register instances on the ALB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Global Accelerator to create an accelerator. Create a Network Load Balancer (NLB) behind an accelerator endpoint that uses Global Accelerator integration and listening on the TCP and UDP ports. Update the Auto Scaling group to register instances on the NLB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon CloudFront content delivery network (CDN) endpoint. Create a Network Load Balancer (NLB) behind the endpoint and listening on the TCP and UDP ports. Update the Auto Scaling group to register instances on the NLB.  Update CloudFront to use the NLB as the origin.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon CloudFront content delivery network (CDN) endpoint. Create an Application Load Balancer (ALB) behind the endpoint and listening on the TCP and UDP ports. Update the Auto Scaling group to register instances on the ALB.  Update CloudFront to use the ALB as the origin.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899470,
          "date": "Tue 16 May 2023 20:01",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "AWS Global Accelerator is a better solution for the mobile gaming app than CloudFront",
          "upvote_count": "1",
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
      "question_text": "<p>A company has an application that processes customer orders. The company hosts the application on an Amazon EC2 instance that saves the orders to an Amazon Aurora database. Occasionally when traffic is high the workload does not process orders fast enough.<br><br>What should a solutions architect do to write the orders reliably to the database as quickly as possible?<br><br></p>",
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
              "choice": "<p>A. Increase the instance size of the EC2 instance when traffic is high. Write orders to Amazon Simple Notification Service (Amazon SNS). Subscribe the database endpoint to the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Write orders to an Amazon Simple Queue Service (Amazon SQS) queue. Use EC2 instances in an Auto Scaling group behind an Application Load Balancer to read from the SQS queue and process orders into the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Write orders to Amazon Simple Notification Service (Amazon SNS). Subscribe the database endpoint to the SNS topic. Use EC2 instances in an Auto Scaling group behind an Application Load Balancer to read from the SNS topic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Write orders to an Amazon Simple Queue Service (Amazon SQS) queue when the EC2 instance reaches CPU threshold limits. Use scheduled scaling of EC2 instances in an Auto Scaling group behind an Application Load Balancer to read from the SQS queue and process orders into the database.<br></p>",
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
      "question_id": "#463",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An IoT company is releasing a mattress that has sensors to collect data about a user's sleep. The sensors will send data to an Amazon S3 bucket. The sensors collect approximately 2 MB of data every night for each mattress. The company must process and summarize the data for each mattress. The results need to be available as soon as possible. Data processing will require 1 GB of memory and will finish within 30 seconds.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
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
              "choice": "<p>A. Use AWS Glue with a Scala job<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon EMR with an Apache Spark script<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Lambda with a Python script<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Glue with a PySpark job<br></p>",
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
      "question_id": "#464",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an online shopping application that stores all orders in an Amazon RDS for PostgreSQL Single-AZ DB instance. Management wants to eliminate single points of failure and has asked a solutions architect to recommend an approach to minimize database downtime without requiring any changes to the application code.<br><br>Which solution meets these requirements?<br><br></p>",
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
              "choice": "<p>A. Convert the existing database instance to a Multi-AZ deployment by modifying the database instance and specifying the Multi-AZ option.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new RDS Multi-AZ deployment. Take a snapshot of the current RDS instance and restore the new Multi-AZ deployment with the snapshot.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a read-only replica of the PostgreSQL database in another Availability Zone. Use Amazon Route 53 weighted record sets to distribute requests across the databases.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Place the RDS for PostgreSQL database in an Amazon EC2 Auto Scaling group with a minimum group size of two. Use Amazon Route 53 weighted record sets to distribute requests across instances.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899477,
          "date": "Tue 16 May 2023 20:10",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "i guess aa",
          "upvote_count": "1",
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
      "question_text": "<p>A company is developing an application to support customer demands. The company wants to deploy the application on multiple Amazon EC2 Nitro-based instances within the same Availability Zone. The company also wants to give the application the ability to write to multiple block storage volumes in multiple EC2 Nitro-based instances simultaneously to achieve higher application availability.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Use General Purpose SSD (gp3) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Throughput Optimized HDD (st1) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Provisioned IOPS SSD (io2) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use General Purpose SSD (gp2) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach<br></p>",
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
      "question_id": "#466",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company designed a stateless two-tier application that uses Amazon EC2 in a single Availability Zone and an Amazon RDS Multi-AZ DB instance. New company management wants to ensure the application is highly available.<br><br>What should a solutions architect do to meet this requirement?<br><br></p>",
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
              "choice": "<p>A. Configure the application to use Multi-AZ EC2 Auto Scaling and create an Application Load Balancer<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the application to take snapshots of the EC2 instances and send them to a different AWS Region<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the application to use Amazon Route 53 latency-based routing to feed requests to the application<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon Route 53 rules to handle incoming requests and create a Multi-AZ Application Load Balancer<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899480,
          "date": "Tue 16 May 2023 20:15",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "it's A",
          "upvote_count": "1",
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
      "question_text": "<p>A company uses AWS Organizations. A member account has purchased a Compute Savings Plan. Because of changes in the workloads inside the member account, the account no longer receives the full benefit of the Compute Savings Plan commitment. The company uses less than 50% of its purchased compute power.<br><br></p>",
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
              "choice": "<p>A. Turn on discount sharing from the Billing Preferences section of the account console in the member account that purchased the Compute Savings Plan.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Turn on discount sharing from the Billing Preferences section of the account console in the company's Organizations management account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Migrate additional compute workloads from another AWS account to the account that has the Compute Savings Plan.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Sell the excess Savings Plan commitment in the Reserved Instance Marketplace.<br></p>",
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
      "question_id": "#468",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is developing a microservices application that will provide a search catalog for customers. The company must use REST APIs to present the frontend of the application to users. The REST APIs must access the backend services that the company hosts in containers in private VPC subnets.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Design a WebSocket API by using Amazon API Gateway. Host the application in Amazon Elastic Container Service (Amazon ECS) in a private subnet. Create a private VPC link for API Gateway to access Amazon ECS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Design a REST API by using Amazon API Gateway. Host the application in Amazon Elastic Container Service (Amazon ECS) in a private subnet. Create a private VPC link for API Gateway to access Amazon ECS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Design a WebSocket API by using Amazon API Gateway. Host the application in Amazon Elastic Container Service (Amazon ECS) in a private subnet. Create a security group for API Gateway to access Amazon ECS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Design a REST API by using Amazon API Gateway. Host the application in Amazon Elastic Container Service (Amazon ECS) in a private subnet. Create a security group for API Gateway to access Amazon ECS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899486,
          "date": "Tue 16 May 2023 20:25",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "b is right, bcs vpc link provided security connection",
          "upvote_count": "1",
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
      "question_text": "<p>A company stores raw collected data in an Amazon S3 bucket. The data is used for several types of analytics on behalf of the company's customers. The type of analytics requested determines the access pattern on the S3 objects.<br><br>The company cannot predict or control the access pattern. The company wants to reduce its S3 costs.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Use S3 replication to transition infrequently accessed objects to S3 Standard-Infrequent Access (S3 Standard-IA)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use S3 Lifecycle rules to transition objects from S3 Standard to Standard-Infrequent Access (S3 Standard-IA)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use S3 Lifecycle rules to transition objects from S3 Standard to S3 Intelligent-Tiering<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use S3 Inventory to identify and transition objects that have not been accessed from S3 Standard to S3 Intelligent-Tiering<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899490,
          "date": "Tue 16 May 2023 20:30",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "S3 Inventory can't to move files to another class",
          "upvote_count": "1",
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
      "question_text": "<p>A company has applications hosted on Amazon EC2 instances with IPv6 addresses. The applications must initiate communications with other external applications using the internet. However the company's security policy states that any external service cannot initiate a connection to the EC2 instances.<br><br>What should a solutions architect recommend to resolve this issue?<br><br></p>",
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
              "choice": "<p>A. Create a NAT gateway and make it the destination of the subnet's route table<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an internet gateway and make it the destination of the subnet's route table<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a virtual private gateway and make it the destination of the subnet's route table<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an egress-only internet gateway and make it the destination of the subnet's route table<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 898602,
          "date": "Mon 15 May 2023 20:09",
          "username": "\t\t\t\tradev\t\t\t",
          "content": "Egress-Only internet Gateway",
          "upvote_count": "2",
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
      "question_text": "<p>A company is creating an application that runs on containers in a VPC.  The application stores and accesses data in an Amazon S3 bucket. During the development phase, the application will store and access 1 TB of data in Amazon S3 each day. The company wants to minimize costs and wants to prevent traffic from traversing the internet whenever possible.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Enable S3 Intelligent-Tiering for the S3 bucket<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable S3 Transfer Acceleration for the S3 bucket<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a gateway VPC endpoint for Amazon S3. Associate this endpoint with all route tables in the VPC<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an interface endpoint for Amazon S3 in the VPC.  Associate this endpoint with all route tables in the VPC<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899494,
          "date": "Tue 16 May 2023 20:37",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "vpc endpoint for s3",
          "upvote_count": "1",
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
      "question_text": "<p>A company has a mobile chat application with a data store based in Amazon DynamoDB.  Users would like new messages to be read with as little latency as possible. A solutions architect needs to design an optimal solution that requires minimal application changes.<br><br>Which method should the solutions architect select?<br><br></p>",
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
              "choice": "<p>A. Configure Amazon DynamoDB Accelerator (DAX) for the new messages table. Update the code to use the DAX endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add DynamoDB read replicas to handle the increased read load. Update the application to point to the read endpoint for the read replicas.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Double the number of read capacity units for the new messages table in DynamoDB.  Continue to use the existing DynamoDB endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an Amazon ElastiCache for Redis cache to the application stack. Update the application to point to the Redis cache endpoint instead of DynamoDB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899496,
          "date": "Tue 16 May 2023 20:44",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "a is valid",
          "upvote_count": "1",
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
      "question_text": "<p>A company hosts a website on Amazon EC2 instances behind an Application Load Balancer (ALB). The website serves static content. Website traffic is increasing, and the company is concerned about a potential increase in cost.<br><br></p>",
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
              "choice": "<p>A. Create an Amazon CloudFront distribution to cache state files at edge locations<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon ElastiCache cluster. Connect the ALB to the ElastiCache cluster to serve cached files<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS WAF web ACL and associate it with the ALB.  Add a rule to the web ACL to cache static files<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a second ALB in an alternative AWS Region. Route user traffic to the closest Region to minimize data transfer costs<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899498,
          "date": "Tue 16 May 2023 20:46",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "a for me",
          "upvote_count": "1",
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
      "question_text": "<p>A company has multiple VPCs across AWS Regions to support and run workloads that are isolated from workloads in other Regions. Because of a recent application launch requirement, the company's VPCs must communicate with all other VPCs across all Regions.<br><br>Which solution will meet these requirements with the LEAST amount of administrative effort?<br><br></p>",
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
              "choice": "<p>A. Use VPC peering to manage VPC communication in a single Region. Use VPC peering across Regions to manage VPC communications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Direct Connect gateways across all Regions to connect VPCs across regions and manage VPC communications.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Transit Gateway to manage VPC communication in a single Region and Transit Gateway peering across Regions to manage VPC communications.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS PrivateLink across all Regions to connect VPCs across Regions and manage VPC communications<br></p>",
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
      "question_id": "#475",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is designing a containerized application that will use Amazon Elastic Container Service (Amazon ECS). The application needs to access a shared file system that is highly durable and can recover data to another AWS Region with a recovery point objective (RPO) of 8 hours. The file system needs to provide a mount target m each Availability Zone within a Region.<br><br>A solutions architect wants to use AWS Backup to manage the replication to another Region.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Amazon FSx for Windows File Server with a Multi-AZ deployment<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon FSx for NetApp ONTAP with a Multi-AZ deployment<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon Elastic File System (Amazon EFS) with the Standard storage class<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon FSx for OpenZFS<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899503,
          "date": "Tue 16 May 2023 20:56",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "shared file system that is highly durable and can recover data",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#476",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is expecting rapid growth in the near future. A solutions architect needs to configure existing users and grant permissions to new users on AWS. The solutions architect has decided to create IAM groups. The solutions architect will add the new users to IAM groups based on department.<br><br>Which additional action is the MOST secure way to grant permissions to the new users?<br><br></p>",
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
              "choice": "<p>A. Apply service control policies (SCPs) to manage access permissions<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create IAM roles that have least privilege permission. Attach the roles to the IAM groups<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an IAM policy that grants least privilege permission. Attach the policy to the IAM groups<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create IAM roles. Associate the roles with a permissions boundary that defines the maximum permissions<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899509,
          "date": "Tue 16 May 2023 21:01",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "should be b",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#477",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A group requires permissions to list an Amazon S3 bucket and delete objects from that bucket. An administrator has created the following IAM policy to provide access to the bucket and applied that policy to the group. The group is not able to delete objects in the bucket. The company follows least-privilege access rules.<br><br><img src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image6.png\"><br><br>Which statement should a solutions architect add to the policy to correct bucket access?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#477",
          "answers": [
            {
              "choice": "<p>A. <img src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image7.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. <img src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image8.png\"><br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. <img src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image9.png\"><br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. <img src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image10.png\"><br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899516,
          "date": "Tue 16 May 2023 21:04",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "d work",
          "upvote_count": "1",
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
      "question_text": "<p>A law firm needs to share information with the public. The information includes hundreds of files that must be publicly readable. Modifications or deletions of the files by anyone before a designated future date are prohibited.<br><br>Which solution will meet these requirements in the MOST secure way?<br><br></p>",
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
              "choice": "<p>A. Upload all files to an Amazon S3 bucket that is configured for static website hosting. Grant read-only IAM permissions to any AWS principals that access the S3 bucket until the designated date.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new Amazon S3 bucket with S3 Versioning enabled. Use S3 Object Lock with a retention period in accordance with the designated date. Configure the S3 bucket for static website hosting. Set an S3 bucket policy to allow read-only access to the objects.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a new Amazon S3 bucket with S3 Versioning enabled. Configure an event trigger to run an AWS Lambda function in case of object modification or deletion. Configure the Lambda function to replace the objects with the original versions from a private S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Upload all files to an Amazon S3 bucket that is configured for static website hosting. Select the folder that contains the files. Use S3 Object Lock with a retention period in accordance with the designated date. Grant read-only IAM permissions to any AWS principals that access the S3 bucket.<br></p>",
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
      "question_id": "#479",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is making a prototype of the infrastructure for its new website by manually provisioning the necessary infrastructure. This infrastructure includes an Auto Scaling group, an Application Load Balancer and an Amazon RDS database. After the configuration has been thoroughly validated, the company wants the capability to immediately deploy the infrastructure for development and production use in two Availability Zones in an automated fashion.<br><br>What should a solutions architect recommend to meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Use AWS Systems Manager to replicate and provision the prototype infrastructure in two Availability Zones<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Define the infrastructure as a template by using the prototype infrastructure as a guide. Deploy the infrastructure with AWS CloudFormation.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Config to record the inventory of resources that are used in the prototype infrastructure. Use AWS Config to deploy the prototype infrastructure into two Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Elastic Beanstalk and configure it to use an automated reference to the prototype infrastructure to automatically deploy new environments in two Availability Zones.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899520,
          "date": "Tue 16 May 2023 21:13",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "b obvious",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#480",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A business application is hosted on Amazon EC2 and uses Amazon S3 for encrypted object storage. The chief information security officer has directed that no application traffic between the two services should traverse the public internet.<br><br>Which capability should the solutions architect use to meet the compliance requirements?<br><br></p>",
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
              "choice": "<p>A. AWS Key Management Service (AWS KMS)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. VPC endpoint<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Private subnet<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Virtual private gateway<br></p>",
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
      "question_id": "#481",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts a three-tier web application in the AWS Cloud. A Multi-AZAmazon RDS for MySQL server forms the database layer Amazon ElastiCache forms the cache layer. The company wants a caching strategy that adds or updates data in the cache when a customer adds an item to the database. The data in the cache must always match the data in the database.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Implement the lazy loading caching strategy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Implement the write-through caching strategy<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Implement the adding TTL caching strategy<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Implement the AWS AppConfig caching strategy<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899525,
          "date": "Tue 16 May 2023 21:17",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "write-through caching strategy updates the cache at the same time as the database",
          "upvote_count": "1",
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
      "question_text": "<p>A company wants to migrate 100 GB of historical data from an on-premises location to an Amazon S3 bucket. The company has a 100 megabits per second (Mbps) internet connection on premises. The company needs to encrypt the data in transit to the S3 bucket. The company will store new data directly in Amazon S3.<br><br>Which solution will meet these requirements with the LEAST operational overhead?<br><br></p>",
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
              "choice": "<p>A. Use the s3 sync command in the AWS CLI to move the data directly to an S3 bucket<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS DataSync to migrate the data from the on-premises location to an S3 bucket<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Snowball to move the data to an S3 bucket<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an IPsec VPN from the on-premises location to AWS. Use the s3 cp command in the AWS CLI to move the data directly to an S3 bucket<br></p>",
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
      "question_id": "#483",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company containerized a Windows job that runs on .NET 6 Framework under a Windows container. The company wants to run this job in the AWS Cloud. The job runs every 10 minutes. The job's runtime varies between 1 minute and 3 minutes.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#483",
          "answers": [
            {
              "choice": "<p>A. Create an AWS Lambda function based on the container image of the job. Configure Amazon EventBridge to invoke the function every 10 minutes.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Batch to create a job that uses AWS Fargate resources. Configure the job scheduling to run every 10 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate to run the job. Create a scheduled task based on the container image of the job to run every 10 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate to run the job. Create a standalone task based on the container image of the job. Use Windows task scheduler to run the job every10 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899531,
          "date": "Tue 16 May 2023 21:27",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "b most cost effective",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#484",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to move from many standalone AWS accounts to a consolidated, multi-account architecture. The company plans to create many new AWS accounts for different business units. The company needs to authenticate access to these AWS accounts by using a centralized corporate directory service.<br><br>Which combination of actions should a solutions architect recommend to meet these requirements? (Choose two.)<br><br></p>",
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
              "choice": "<p>A. Create a new organization in AWS Organizations with all features turned on. Create the new AWS accounts in the organization.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up an Amazon Cognito identity pool. Configure AWS IAM Identity Center (AWS Single Sign-On) to accept Amazon Cognito authentication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure a service control policy (SCP) to manage the AWS accounts. Add AWS IAM Identity Center (AWS Single Sign-On) to AWS Directory Service.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new organization in AWS Organizations. Configure the organization's authentication mechanism to use AWS Directory Service directly.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Set up AWS IAM Identity Center (AWS Single Sign-On) in the organization. Configure IAM Identity Center, and integrate it with the company's corporate directory service.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899538,
          "date": "Tue 16 May 2023 21:29",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "ae is right",
          "upvote_count": "1",
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
      "question_text": "<p>A company is looking for a solution that can store video archives in AWS from old news footage. The company needs to minimize costs and will rarely need to restore these files. When the files are needed, they must be available in a maximum of five minutes.<br><br>What is the MOST cost-effective solution?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#485",
          "answers": [
            {
              "choice": "<p>A. Store the video archives in Amazon S3 Glacier and use Expedited retrievals.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Store the video archives in Amazon S3 Glacier and use Standard retrievals.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Store the video archives in Amazon S3 Standard-Infrequent Access (S3 Standard-IA).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Store the video archives in Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": [
        {
          "id": 899544,
          "date": "Tue 16 May 2023 21:32",
          "username": "\t\t\t\tnosense\t\t\t",
          "content": "glacier expedited retrieval times of typically 1-5 minutes.",
          "upvote_count": "1",
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
      "question_text": "<p>A company is building a three-tier application on AWS. The presentation tier will serve a static website The logic tier is a containerized application. This application will store data in a relational database. The company wants to simplify deployment and to reduce operational costs.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Use Amazon S3 to host static content. Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate for compute power. Use a managed Amazon RDS cluster for the database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon CloudFront to host static content. Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 for compute power. Use a managed Amazon RDS cluster for the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon S3 to host static content. Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute power. Use a managed Amazon RDS cluster for the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon EC2 Reserved Instances to host static content. Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 for compute power. Use a managed Amazon RDS cluster for the database.<br></p>",
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
      "question_id": "#487",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company seeks a storage solution for its application. The solution must be highly available and scalable. The solution also must function as a file system be mountable by multiple Linux instances in AWS and on premises through native protocols, and have no minimum size requirements. The company has set up a Site-to-Site VPN for access from its on-premises network to its VPC. <br><br>Which storage solution meets these requirements?<br><br></p>",
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
              "choice": "<p>A. Amazon FSx Multi-AZ deployments<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon Elastic Block Store (Amazon EBS) Multi-Attach volumes<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon Elastic File System (Amazon EFS) with multiple mount targets<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon Elastic File System (Amazon EFS) with a single mount target and multiple access points<br></p>",
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
      "question_id": "#488",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A 4-year-old media company is using the AWS Organizations all features feature set to organize its AWS accounts. According to the company's finance team, the billing information on the member accounts must not be accessible to anyone, including the root user of the member accounts.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Add all finance team users to an IAM group. Attach an AWS managed policy named Billing to the group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Attach an identity-based policy to deny access to the billing information to all users, including the root user.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a service control policy (SCP) to deny access to the billing information. Attach the SCP to the root organizational unit (OU).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Convert from the Organizations all features feature set to the Organizations consolidated billing feature set.<br></p>",
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
      "question_id": "#489",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company runs an application in the AWS Cloud that is integrated with an on-premises warehouse solution. The company uses Amazon Simple Notification Service (Amazon SNS) to send order messages to an on-premises HTTPS endpoint so the warehouse application can process the orders. The local data center team has detected that some of the order messages were not received.<br><br>A solutions architect needs to retain messages that are not delivered and analyze the messages for up to 14 days.<br><br>Which solution will meet these requirements with the LEAST development effort?<br><br></p>",
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
              "choice": "<p>A. Configure an Amazon SNS dead letter queue that has an Amazon Kinesis Data Stream target with a retention period of 14 days.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add an Amazon Simple Queue Service (Amazon SQS) queue with a retention period of 14 days between the application and Amazon SNS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an Amazon SNS dead letter queue that has an Amazon Simple Queue Service (Amazon SQS) target with a retention period of 14 days.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure an Amazon SNS dead letter queue that has an Amazon DynamoDB target with a TTL attribute set for a retention period of 14 days.<br></p>",
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
      "question_id": "#490",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A gaming company uses Amazon DynamoDB to store user information such as geographic location, player data, and leaderboards. The company needs to configure continuous backups to an Amazon S3 bucket with a minimal amount of coding. The backups must not affect availability of the application and must not affect the read capacity units (RCUs) that are defined for the table.<br><br>Which solution meets these requirements?<br><br></p>",
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
              "choice": "<p>A. Use an Amazon EMR cluster. Create an Apache Hive job to back up the data to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Export the data directly from DynamoDB to Amazon S3 with continuous backups. Turn on point-in-time recovery for the table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Amazon DynamoDB Streams. Create an AWS Lambda function to consume the stream and export the data to an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS Lambda function to export the data from the database tables to Amazon S3 on a regular basis. Turn on point-in-time recovery for the table.<br></p>",
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
      "question_id": "#491",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A solutions architect is designing an asynchronous application to process credit card data validation requests for a bank. The application must be secure and be able to process each request at least once.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
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
              "choice": "<p>A. Use AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) standard queues as the event source. Use AWS Key Management Service (SSE-KMS) for encryption. Add the kms:Decrypt permission for the Lambda execution role.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Lambda event source mapping. Use Amazon Simple Queue Service (Amazon SQS) FIFO queues as the event source. Use SQS managed encryption keys (SSE-SQS) for encryption. Add the encryption key invocation permission for the Lambda function.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) FIFO queues as the event source. Use AWS KMS keys (SSE-KMS). Add the kms:Decrypt permission for the Lambda execution role.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) standard queues as the event source. Use AWS KMS keys (SSE-KMS) for encryption. Add the encryption key invocation permission for the Lambda function.<br></p>",
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
      "question_id": "#492",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple AWS accounts for development work. Some staff consistently use oversized Amazon EC2 instances, which causes the company to exceed the yearly budget for the development accounts. The company wants to centrally restrict the creation of AWS resources in these accounts.<br><br>Which solution will meet these requirements with the LEAST development effort?<br><br></p>",
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
              "choice": "<p>A. Develop AWS Systems Manager templates that use an approved EC2 creation process. Use the approved Systems Manager templates to provision EC2 instances.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Organizations to organize the accounts into organizational units (OUs). Define and attach a service control policy (SCP) to control the usage of EC2 instance types.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure an Amazon EventBridge rule that invokes an AWS Lambda function when an EC2 instance is created. Stop disallowed EC2 instance types.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up AWS Service Catalog products for the staff to create the allowed EC2 instance types. Ensure that staff can deploy EC2 instances only by using the Service Catalog products.<br></p>",
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
      "question_id": "#493",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to use artificial intelligence (AI) to determine the quality of its customer service calls. The company currently manages calls in four different languages, including English. The company will offer new languages in the future. The company does not have the resources to regularly maintain machine learning (ML) models.<br><br>The company needs to create written sentiment analysis reports from the customer service call recordings. The customer service call recording text must be translated into English.<br><br>Which combination of steps will meet these requirements? (Choose three.)<br><br></p>",
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
              "choice": "<p>A. Use Amazon Comprehend to translate the audio recordings into English.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon Lex to create the written sentiment analysis reports.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon Polly to convert the audio recordings into text.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon Transcribe to convert the audio recordings in any language into text.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use Amazon Translate to translate text in any language to English.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use Amazon Comprehend to create the sentiment analysis reports.<br></p>",
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
      "question_id": "#494",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon EC2 instances to host its internal systems. As part of a deployment operation, an administrator tries to use the AWS CLI to terminate an EC2 instance. However, the administrator receives a 403 (Access Denied) error message.<br><br>The administrator is using an IAM role that has the following IAM policy attached:<br><br><img src=\"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image11.png\"><br><br>What is the cause of the unsuccessful request?<br><br></p>",
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
              "choice": "<p>A. The EC2 instance has a resource-based policy with a Deny statement.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The principal has not been specified in the policy statement.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The \"Action\" field does not grant the actions that are required to terminate the EC2 instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The request to terminate the EC2 instance does not originate from the CIDR blocks 192.0.2.0/24 or 203.0.113.0/24.<br></p>",
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
      "question_id": "#495",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is conducting an internal audit. The company wants to ensure that the data in an Amazon S3 bucket that is associated with the company's AWS Lake Formation data lake does not contain sensitive customer or employee data. The company wants to discover personally identifiable information (PII) or financial information, including passport numbers and credit card numbers.<br><br>Which solution will meet these requirements?<br><br></p>",
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
              "choice": "<p>A. Configure AWS Audit Manager on the account. Select the Payment Card Industry Data Security Standards (PCI DSS) for auditing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure Amazon S3 Inventory on the S3 bucket Configure Amazon Athena to query the inventory.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure Amazon Macie to run a data discovery job that uses managed identifiers for the required data types.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon S3 Select to run a report across the S3 bucket.<br></p>",
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
      "question_id": "#496",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses on-premises servers to host its applications. The company is running out of storage capacity. The applications use both block storage and NFS storage. The company needs a high-performing solution that supports local caching without re-architecting its existing applications.<br><br>Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)<br><br></p>",
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
              "choice": "<p>A. Mount Amazon S3 as a file system to the on-premises servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Deploy an AWS Storage Gateway file gateway to replace NFS storage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Deploy AWS Snowball Edge to provision NFS mounts to on-premises servers.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an AWS Storage Gateway volume gateway to replace the block storage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Deploy Amazon Elastic File System (Amazon EFS) volumes and mount them to on-premises servers.<br></p>",
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
      "question_id": "#497",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a service that reads and writes large amounts of data from an Amazon S3 bucket in the same AWS Region. The service is deployed on Amazon EC2 instances within the private subnet of a VPC.  The service communicates with Amazon S3 over a NAT gateway in the public subnet. However, the company wants a solution that will reduce the data output costs.<br><br>Which solution will meet these requirements MOST cost-effectively?<br><br></p>",
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
              "choice": "<p>A. Provision a dedicated EC2 NAT instance in the public subnet. Configure the route table for the private subnet to use the elastic network interface of this instance as the destination for all S3 traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Provision a dedicated EC2 NAT instance in the private subnet. Configure the route table for the public subnet to use the elastic network interface of this instance as the destination for all S3 traffic.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision a VPC gateway endpoint. Configure the route table for the private subnet to use the gateway endpoint as the route for all S3 traffic.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Provision a second NAT gateway. Configure the route table for the private subnet to use this NAT gateway as the destination for all S3 traffic.<br></p>",
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
      "question_id": "#498",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon S3 to store high-resolution pictures in an S3 bucket. To minimize application changes, the company stores the pictures as the latest version of an S3 object. The company needs to retain only the two most recent versions of the pictures.<br><br>The company wants to reduce costs. The company has identified the S3 bucket as a large expense.<br><br>Which solution will reduce the S3 costs with the LEAST operational overhead?<br><br></p>",
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
              "choice": "<p>A. Use S3 Lifecycle to delete expired object versions and retain the two most recent versions.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an AWS Lambda function to check for older versions and delete all but the two most recent versions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use S3 Batch Operations to delete noncurrent object versions and retain only the two most recent versions.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deactivate versioning on the S3 bucket and retain the two most recent versions.<br></p>",
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
      "question_id": "#499",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company needs to minimize the cost of its 1 Gbps AWS Direct Connect connection. The company's average connection utilization is less than 10%. A solutions architect must recommend a solution that will reduce the cost without compromising security.<br><br>Which solution will meet these requirements?<br><br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#499",
          "answers": [
            {
              "choice": "<p>A. Set up a new 1 Gbps Direct Connect connection. Share the connection with another AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up a new 200 Mbps Direct Connect connection in the AWS Management Console.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Contact an AWS Direct Connect Partner to order a 1 Gbps connection. Share the connection with another AWS account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Contact an AWS Direct Connect Partner to order a 200 Mbps hosted connection for an existing AWS account.<br></p>",
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
      "question_id": "#500",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has multiple Windows file servers on premises. The company wants to migrate and consolidate its files into an Amazon FSx for Windows File Server file system. File permissions must be preserved to ensure that access rights do not change.<br><br>Which solutions will meet these requirements? (Choose two.)<br><br></p>",
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
              "choice": "<p>A. Deploy AWS DataSync agents on premises. Schedule DataSync tasks to transfer the data to the FSx for Windows File Server file system.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Copy the shares on each file server into Amazon S3 buckets by using the AWS CLI. Schedule AWS DataSync tasks to transfer the data to the FSx for Windows File Server file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Remove the drives from each file server. Ship the drives to AWS for import into Amazon S3. Schedule AWS DataSync tasks to transfer the data to the FSx for Windows File Server file system.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Order an AWS Snowcone device. Connect the device to the on-premises network. Launch AWS DataSync agents on the device. Schedule DataSync tasks to transfer the data to the FSx for Windows File Server file system.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Order an AWS Snowball Edge Storage Optimized device. Connect the device to the on-premises network. Copy data to the device by using the AWS CLI. Ship the device back to AWS for import into Amazon S3. Schedule AWS DataSync tasks to transfer the data to the FSx for Windows File Server file system.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "",
      "discusstion": []
    }
  ]
}