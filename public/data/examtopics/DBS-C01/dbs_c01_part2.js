var DBS_C01_Part2 = 
{
  "msg": "Quiz Questions",
  "data": [
    {
      "question_id": "#101",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A database specialist deployed an Amazon RDS DB instance in Dev-VPC1 used by their development team. Dev-VPC1 has a peering connection with Dev-VPC2 that belongs to a different development team in the same department. The networking team confirmed that the routing between VPCs is correct; however, the database engineers in Dev-VPC2 are getting a timeout connections error when trying to connect to the database in Dev-VPC1.<br>What is likely causing the timeouts?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#101",
          "answers": [
            {
              "choice": "<p>A. The database is deployed in a VPC that is in a different Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The database is deployed in a VPC that is in a different Availability Zone.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The database is deployed with misconfigured security groups.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. The database is deployed with the wrong client connect timeout configuration.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 101 discussion",
      "discusstion": [
        {
          "id": 342306,
          "date": "Sat 02 Oct 2021 21:23",
          "username": "manan728",
          "content": "C it is.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 358998,
          "date": "Fri 08 Oct 2021 15:10",
          "username": "AesthetAesthet",
          "content": "C final answer\\\"A VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them using private IP addresses. Instances in either VPC can communicate with each other as if they are within the same network. You can create a VPC peering connection between your own VPCs, with a VPC in another AWS account, or with a VPC in a different AWS Region.\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC. Scenarios.html",
          "upvote_count": "65",
          "selected_answers": ""
        },
        {
          "id": 360631,
          "date": "Sat 23 Oct 2021 11:27",
          "username": "Aesthet",
          "content": "\\\"A VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them using private IP addresses. Instances in either VPC can communicate with each other as if they are within the same network. You can create a VPC peering connection between your own VPCs, with a VPC in another AWS account, or with a VPC in a different AWS Region.\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC. Scenarios.html",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 595019,
          "date": "Sat 30 Apr 2022 15:05",
          "username": "novice_expert",
          "content": "security group needs inbound rule",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 555722,
          "date": "Fri 25 Feb 2022 04:08",
          "username": "tugboat",
          "content": "Security groups need to be fixed",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 379432,
          "date": "Sat 30 Oct 2021 10:30",
          "username": "Suresh108",
          "content": "CCCCCC",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#102",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has a production environment running on Amazon RDS for SQL Server with an in-house web application as the front end. During the last application maintenance window, new functionality was added to the web application to enhance the reporting capabilities for management. Since the update, the application is slow to respond to some reporting queries.<br>How should the company identify the source of the problem?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#102",
          "answers": [
            {
              "choice": "<p>A. Install and configure Amazon CloudWatch Application Insights for Microsoft .NET and Microsoft SQL Server. Use a CloudWatch dashboard to identify the root cause.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable RDS Performance Insights and determine which query is creating the problem. Request changes to the query to address the problem.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS X-Ray deployed with Amazon RDS to track query system traces.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a support request and work with AWS Support to identify the source of the issue.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 102 discussion",
      "discusstion": [
        {
          "id": 497743,
          "date": "Thu 09 Dec 2021 14:10",
          "username": "2025flakyt",
          "content": "B is correct<br>Amazon RDS Performance Insights is a database performance tuning and monitoring feature that helps you quickly assess the load on your database, and determine when and where to take action. Performance Insights allows non-experts to detect performance problems with an easy-to-understand dashboard that visualizes database load.<br>https://aws.amazon.com/rds/performance-insights/",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 682793,
          "date": "Thu 29 Sep 2022 16:58",
          "username": "niteshdba",
          "content": "i think it should be A: as an Application, insight can provide more details to SQL server",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 624353,
          "date": "Wed 29 Jun 2022 03:07",
          "username": "sachin",
          "content": "I think this should be A. <br>The question no where states the slowness is due to query. it states response is slow to certain request for repoting.<br><br>CloudWatch Application Insights is For common problems in .NET and SQL application stacks, such as application latency, SQL Server failed backups, memory leaks, large HTTP requests, and canceled I/O operations, it provides additional insights that point to a possible root cause and steps for resolution. Built-in integration with AWS SSM OpsCenter allows you to resolve issues by running the relevant Systems Manager Automation document.<br>First we need to understand the reason of slow reponse. It could be application issue rather SQL issue where Performance Insight can be helpful",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595005,
          "date": "Sat 30 Apr 2022 14:46",
          "username": "novice_expert",
          "content": "additional features to improve management reporting capabilities >new queries needing Performance Insights to check",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 555718,
          "date": "Fri 25 Feb 2022 04:03",
          "username": "tugboat",
          "content": "New reportsnew queries needing Performance Insights to check",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 478238,
          "date": "Sun 14 Nov 2021 18:11",
          "username": "Sp230jove",
          "content": "A<br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-application-insights.html<br>\\\" For common problems in .NET and SQL application stacks, such as application latency, SQL Server failed backups, memory leaks, large HTTP requests, and canceled I/O operations, it provides additional insights that point to a possible root cause and steps for resolution\\\"Correct answer is B. . The issue is not about the infrastructure, it is about the additional features added during with the application maintenance.",
          "upvote_count": "32",
          "selected_answers": ""
        },
        {
          "id": 506407,
          "date": "Tue 21 Dec 2021 20:59",
          "username": "jove",
          "content": "Correct answer is B. . The issue is not about the infrastructure, it is about the additional features added during with the application maintenance.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 449019,
          "date": "Sun 07 Nov 2021 01:50",
          "username": "Scunningham99sachin",
          "content": "New functionality added to update reporting capabilities.Reports from application aregenerated via queries.These queries need to be investigated via answer which is > BReports are generated by SQL but no where it is mentioned that reporting sql is slow. It says response of reporting request it slow which could due to application issue as well",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 624355,
          "date": "Wed 29 Jun 2022 03:08",
          "username": "sachin",
          "content": "Reports are generated by SQL but no where it is mentioned that reporting sql is slow. It says response of reporting request it slow which could due to application issue as well",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 430722,
          "date": "Mon 01 Nov 2021 23:57",
          "username": "ChauPhan",
          "content": "B is the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 386527,
          "date": "Mon 18 Oct 2021 11:08",
          "username": "AMExtHo",
          "content": "sql server application issue. Does not say ueries. A is the answer.Problem started due new functionality was added to the web application to enhance the reporting capabilities for management. Since the update, the application is slow to respond to some reporting queriessoissue is with query performance not with application that points B as correct answer",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 403879,
          "date": "Tue 26 Oct 2021 00:19",
          "username": "ExtHo",
          "content": "Problem started due new functionality was added to the web application to enhance the reporting capabilities for management. Since the update, the application is slow to respond to some reporting queriessoissue is with query performance not with application that points B as correct answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 379436,
          "date": "Sun 10 Oct 2021 13:49",
          "username": "Suresh108",
          "content": "BBBBBBBBB",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 360605,
          "date": "Fri 24 Sep 2021 15:34",
          "username": "Aesthet",
          "content": "B final answer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 342401,
          "date": "Wed 22 Sep 2021 06:09",
          "username": "swarndeep",
          "content": "Option B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 328673,
          "date": "Sun 19 Sep 2021 22:57",
          "username": "shantest1",
          "content": "B.  Answer",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#103",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An electric utility company wants to store power plant sensor data in an Amazon DynamoDB table. The utility company has over 100 power plants and each power plant has over 200 sensors that send data every 2 seconds. The sensor data includes time with milliseconds precision, a value, and a fault attribute if the sensor is malfunctioning. Power plants are identified by a globally unique identifier. Sensors are identified by a unique identifier within each power plant. A database specialist needs to design the table to support an efficient method of finding all faulty sensors within a given power plant.<br>Which schema should the database specialist use when creating the DynamoDB table to achieve the fastest query time when looking for faulty sensors?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#103",
          "answers": [
            {
              "choice": "<p>A. Use the plant identifier as the partition key and the measurement time as the sort key. Create a global secondary index (GSI) with the plant identifier as the partition key and the fault attribute as the sort key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a composite of the plant identifier and sensor identifier as the partition key. Use the measurement time as the sort key. Create a local secondary index (LSI) on the fault attribute.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a composite of the plant identifier and sensor identifier as the partition key. Use the measurement time as the sort key. Create a global secondary index (GSI) with the plant identifier as the partition key and the fault attribute as the sort key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the plant identifier as the partition key and the sensor identifier as the sort key. Create a local secondary index (LSI) on the fault attribute.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 103 discussion",
      "discusstion": [
        {
          "id": 340468,
          "date": "Sun 26 Sep 2021 19:05",
          "username": "[Removed]awsjjjJiang_aws1",
          "content": "I am going with D.  As I understand it, you can have an item as a partition key and an item as a sort key to make a composite key. However, you cannot have two items as a partition key and a third item as sort key to make a composite key.you can combine more than one attribute to create a partition key .<br>https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/<br>\\\"Use composite attributes. Try to combine more than one attribute to form a unique key, if that meets your access pattern. For example, consider an orders table with customerid#productid#countrycode as the partition key and order_date as the sort key, where the symbol # is used to split different field.DynamoDB don't allow us do that way.we have to merge / combine into as 1 attribute<br>So B, C are wrong",
          "upvote_count": "1221",
          "selected_answers": ""
        },
        {
          "id": 696760,
          "date": "Mon 17 Oct 2022 05:07",
          "username": "awsjjjJiang_aws1",
          "content": "you can combine more than one attribute to create a partition key .<br>https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/<br>\\\"Use composite attributes. Try to combine more than one attribute to form a unique key, if that meets your access pattern. For example, consider an orders table with customerid#productid#countrycode as the partition key and order_date as the sort key, where the symbol # is used to split different field.DynamoDB don't allow us do that way.we have to merge / combine into as 1 attribute<br>So B, C are wrong",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 722388,
          "date": "Sun 20 Nov 2022 05:36",
          "username": "Jiang_aws1",
          "content": "DynamoDB don't allow us do that way.we have to merge / combine into as 1 attribute<br>So B, C are wrong",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 327727,
          "date": "Sat 25 Sep 2021 04:04",
          "username": "Jaypdvshantest1",
          "content": "C.  Putting the Fault attribute in a sparse index, based on https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-indexes-general-sparse-indexes.htmlAgreed C.  Answer",
          "upvote_count": "81",
          "selected_answers": ""
        },
        {
          "id": 331911,
          "date": "Sun 26 Sep 2021 05:07",
          "username": "shantest1",
          "content": "Agreed C.  Answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 752692,
          "date": "Wed 21 Dec 2022 20:34",
          "username": "lollyjlollyj",
          "content": "It seemed most logical but not I don't know smhAlso the LSI indicated does not include a partition key so C makes more sense.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 752759,
          "date": "Wed 21 Dec 2022 22:14",
          "username": "lollyj",
          "content": "Also the LSI indicated does not include a partition key so C makes more sense.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 711835,
          "date": "Sat 05 Nov 2022 15:58",
          "username": "yxyj",
          "content": "Answer is C. <br>To get the fastest queries with the lowest possible latency, project all the attributes that you expect those queries to return. In particular, if you query a local secondary index for attributes that are not projected, DynamoDB automatically fetches those attributes from the table, which requires reading the entire item from the table. This introduces latency and additional I/O operations that you can avoid.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 694211,
          "date": "Thu 13 Oct 2022 20:36",
          "username": "awsjjj",
          "content": "B seems correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 688223,
          "date": "Fri 07 Oct 2022 04:12",
          "username": "Jiang_aws1",
          "content": "Plant id , Sensor id : Compsite Key<br>Time : sort key<br>Fault : 2nd index",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 682794,
          "date": "Thu 29 Sep 2022 17:00",
          "username": "niteshdba",
          "content": "Its should be D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 658038,
          "date": "Sat 03 Sep 2022 05:50",
          "username": "SonamDhingra",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 605639,
          "date": "Sun 22 May 2022 19:12",
          "username": "RadhaghoshJiang_aws1",
          "content": "Whoever is saying any other option other than \\\"B\\\" did you read this line? \\\" 200 sensors that transmit data every two seconds\\\". Don't you think any other option (except B) will create a hot partition? And Composite of Plant ID and Sensor ID as Primary key doesn't mean two attribute separately. It mean clubbing this two attributes (may be String Join with \\\"_\\\")\\\"Time\\\" must be part of key or indexes otherwise just too many rows to search for<br>So \\\"B\\\" is the best",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 694082,
          "date": "Thu 13 Oct 2022 18:11",
          "username": "Jiang_aws1",
          "content": "\\\"Time\\\" must be part of key or indexes otherwise just too many rows to search for<br>So \\\"B\\\" is the best",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 605456,
          "date": "Sun 22 May 2022 14:21",
          "username": "awsguysJiang_aws1Jiang_aws1",
          "content": "D rightD is wrong : Missing \\\"Time\\\"\\\"over 200 sensors that send data every 2 seconds. The sensor data includes time with milliseconds precision\\\"Almost 20% Question - Text about \\\"Time\\\" then I can't miss it",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 694104,
          "date": "Thu 13 Oct 2022 18:28",
          "username": "Jiang_aws1Jiang_aws1",
          "content": "D is wrong : Missing \\\"Time\\\"\\\"over 200 sensors that send data every 2 seconds. The sensor data includes time with milliseconds precision\\\"Almost 20% Question - Text about \\\"Time\\\" then I can't miss it",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 694105,
          "date": "Thu 13 Oct 2022 18:29",
          "username": "Jiang_aws1",
          "content": "Almost 20% Question - Text about \\\"Time\\\" then I can't miss it",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595268,
          "date": "Sat 30 Apr 2022 22:29",
          "username": "novice_expert",
          "content": "B.  Create a composite of the plant identifier and sensor identifier as the partition key. Use the measurement time as the sort key. Create a local secondary index (LSI) on the fault attribute.<br><br>I know DynamoDB does not allow 3 columns in primary key (2 columns for partition key and 1 for sort) But what ifplant identifier and sensor identifier are concatenated like 'PID1-SID1' and used as partition key?",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 585163,
          "date": "Wed 13 Apr 2022 13:22",
          "username": "kretlollyj",
          "content": "you can't create a composite key which is a primary key -> B & C are wrong; a is obviously wrong; so D is okI don't agree.Composite keys can be created.<br><br>Composite primary key<br>A composite primary key is composed of two attributes, the partition key and the sort key. All items with the same partition key are stored together, sorted by sort key value. In a table with a composite primary key, it's possible for two items to have the same partition key value. However, two items cannot have both the same partition key value and the same sort key value.",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 752693,
          "date": "Wed 21 Dec 2022 20:35",
          "username": "lollyj",
          "content": "I don't agree.Composite keys can be created.<br><br>Composite primary key<br>A composite primary key is composed of two attributes, the partition key and the sort key. All items with the same partition key are stored together, sorted by sort key value. In a table with a composite primary key, it's possible for two items to have the same partition key value. However, two items cannot have both the same partition key value and the same sort key value.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 548400,
          "date": "Wed 16 Feb 2022 09:27",
          "username": "pcpcpc888",
          "content": "B&C can be ruled out at the first place; let consider how to query sensors' status at the quickest pace, from my perspective, using a measurement time as the sort key, the updated information would be sorted by the recording time, not by sensor's ID, hence provide more quicker response, because when searching for malfunctioning sensors, the most recent status is what we need. I prefer A. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 508267,
          "date": "Fri 24 Dec 2021 03:43",
          "username": "jove",
          "content": "How to design this DynamoDB table;<br>- Keep the number of items as small as possible.<br>- So, your primary key should be plant ID + sensor ID<br>- Choose plant ID as the partition key, so that the query will be faster<br>- Create a LSI on the fault attribute but add this attribute only for the items when faulttrue (sparse index)<br><br>The answer is D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 491783,
          "date": "Wed 01 Dec 2021 16:54",
          "username": "cynthiacy",
          "content": "B is correct.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 447688,
          "date": "Mon 01 Nov 2021 09:48",
          "username": "faramawijove",
          "content": "I'm going with B<br>-\tA dropped because =E2=80=9Chaving the plant identifier as the partition key and the fault attribute as the sort key=E2=80=9D will not let us know which sensor generated the fault attribute.<br>-\tC dropped for same reason like A, =E2=80=9CCreate a global secondary index (GSI) with the plant identifier as the partition key and the fault attribute as the sort key=E2=80=9D will not let us know which sensor generated the fault attribute.<br>-\tD dropped local secondary index on fault attribute will depend on only plant identifier as primary key, so same issue like A and C, this will not let us know which sensor generated the fault attribute.<br>-\tOnly Remaining answer is B, it generates partition key which is composed of two values (PlantID+SensorID) =E2=80=93 By the way this is not composite key -, and generate time as sort key. then Creating fault attribute as local secondary index which will depend on (PlantID+SensorID) as partition key will allow us to identify the faulty sensor- For option D the primary key is composed of PlantID (partition key) + SensorID (sort key)<br>- Why would you need measurement time as the sort key, you won't need to keep previous measurements, just keep the latest one for each PlantID + SensorID",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 508272,
          "date": "Fri 24 Dec 2021 03:46",
          "username": "jove",
          "content": "- For option D the primary key is composed of PlantID (partition key) + SensorID (sort key)<br>- Why would you need measurement time as the sort key, you won't need to keep previous measurements, just keep the latest one for each PlantID + SensorID",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 446128,
          "date": "Thu 21 Oct 2021 23:26",
          "username": "guru_jiSultanaodba2014",
          "content": "This Q appeared in my exam.<br>60% questions came in actual exam from this 145 set. Bunch of new Questions.Did you pass? I failed. If you passed which dumps did you read please mention.did you use samedumps ? What answers did you use - dump answers or answers mentioned in discussions ?",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 451116,
          "date": "Tue 02 Nov 2021 18:22",
          "username": "Sultanaodba2014",
          "content": "Did you pass? I failed. If you passed which dumps did you read please mention.did you use samedumps ? What answers did you use - dump answers or answers mentioned in discussions ?",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 508777,
          "date": "Fri 24 Dec 2021 20:24",
          "username": "odba2014",
          "content": "did you use samedumps ? What answers did you use - dump answers or answers mentioned in discussions ?",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#104",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is releasing a new mobile game featuring a team play mode. As a group of mobile device users play together, an item containing their statuses is updated in an Amazon DynamoDB table. Periodically, the other users' devices read the latest statuses of their teammates from the table using the BatchGetltemn operation.<br>Prior to launch, some testers submitted bug reports claiming that the status data they were seeing in the game was not up-to-date. The developers are unable to replicate this issue and have asked a database specialist for a recommendation.<br>Which recommendation would resolve this issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#104",
          "answers": [
            {
              "choice": "<p>A. Ensure the DynamoDB table is configured to be always consistent.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Ensure the BatchGetltem operation is called with the ConsistentRead parameter set to false.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable a stream on the DynamoDB table and subscribe each device to the stream to ensure all devices receive up-to-date status information.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Ensure the BatchGetltem operation is called with the ConsistentRead parameter set to true.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 104 discussion",
      "discusstion": [
        {
          "id": 328676,
          "date": "Mon 11 Oct 2021 00:34",
          "username": "shantest1",
          "content": "D.  answer",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 619921,
          "date": "Tue 21 Jun 2022 17:48",
          "username": "sachin",
          "content": "D is correct.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 618550,
          "date": "Sun 19 Jun 2022 08:26",
          "username": "ryuhei",
          "content": "Answer=EF=BC=9AD<br>https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 618538,
          "date": "Sun 19 Jun 2022 07:52",
          "username": "elf78shammous",
          "content": "C is the answer. Questions states that \\\"..periodically reads\\\" which mean re using the BatchGetItem with consistent read (D) is not going to solve the problem since data might be already stale on the next read. However, by using Streams each device will be notified immediately.Consistent means getting the latest data. You are talking about the \\\"eventual\\\" case. Streams is usually used to trigger actions based on events happening on the db. D is probably the answer.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 646247,
          "date": "Sat 13 Aug 2022 11:24",
          "username": "shammous",
          "content": "Consistent means getting the latest data. You are talking about the \\\"eventual\\\" case. Streams is usually used to trigger actions based on events happening on the db. D is probably the answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 609207,
          "date": "Mon 30 May 2022 15:00",
          "username": "dbarogerdbaroger",
          "content": "C is the most effective. Streams always will show the last update of the item, so, all users will read the same item status.<br>C would resolve the problem as well, but will double the read capacity unit and the cost will doubletoo<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.htmlI meant \\\"D\\\" would double the RCUs.",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 609209,
          "date": "Mon 30 May 2022 15:01",
          "username": "dbaroger",
          "content": "I meant \\\"D\\\" would double the RCUs.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594546,
          "date": "Fri 29 Apr 2022 17:20",
          "username": "novice_expert",
          "content": "game's status data was out of current means query got eventual consistent data",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 565839,
          "date": "Sat 12 Mar 2022 00:20",
          "username": "Dantas",
          "content": "By default, BatchGetItem performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set ConsistentRead to true for any or all tables.<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 554928,
          "date": "Wed 23 Feb 2022 23:41",
          "username": "kped21",
          "content": "D, BatchGetItemwith ConsistentRead",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 548636,
          "date": "Wed 16 Feb 2022 14:53",
          "username": "user0001",
          "content": "D<br>By default, BatchGetItem performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set ConsistentRead to true for any or all tables.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 502111,
          "date": "Wed 15 Dec 2021 13:16",
          "username": "mnzsql365",
          "content": "D<br>By default, BatchGetItem performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set ConsistentRead to true for any or all tables.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 379439,
          "date": "Fri 22 Oct 2021 05:29",
          "username": "Suresh108",
          "content": "DDDDDDDDD",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 364098,
          "date": "Mon 18 Oct 2021 20:48",
          "username": "gdtypk",
          "content": "https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/API_BatchGetItem_v20111205.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 360635,
          "date": "Sat 16 Oct 2021 11:38",
          "username": "Aesthet",
          "content": "D final answer",
          "upvote_count": "1",
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
      "question_text": "<p>A company is running an Amazon RDS for MySQL Multi-AZ DB instance for a business-critical workload. RDS encryption for the DB instance is disabled. A recent security audit concluded that all business-critical applications must encrypt data at rest. The company has asked its database specialist to formulate a plan to accomplish this for the DB instance.<br>Which process should the database specialist recommend?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#105",
          "answers": [
            {
              "choice": "<p>A. Create an encrypted snapshot of the unencrypted DB instance. Copy the encrypted snapshot to Amazon S3. Restore the DB instance from the encrypted snapshot using Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new RDS for MySQL DB instance with encryption enabled. Restore the unencrypted snapshot to this DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a snapshot of the unencrypted DB instance. Create an encrypted copy of the snapshot. Restore the DB instance from the encrypted snapshot.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Temporarily shut down the unencrypted DB instance. Enable AWS KMS encryption in the AWS Management Console using an AWS managed CMK. Restart the DB instance in an encrypted state.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 105 discussion",
      "discusstion": [
        {
          "id": 327736,
          "date": "Tue 12 Oct 2021 14:16",
          "username": "Jaypdv",
          "content": "C. <br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Limitations",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 594735,
          "date": "Sat 30 Apr 2022 01:55",
          "username": "novice_expert",
          "content": "snapshot<br>-> encrypted copy of the snapshot<br>-> Restore the DB instance from the encrypted snapshot.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 561258,
          "date": "Sat 05 Mar 2022 07:22",
          "username": "RotterDam",
          "content": "Its definitely C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 510236,
          "date": "Mon 27 Dec 2021 11:57",
          "username": "Shunpin",
          "content": "Ans: C<br>In AWS console, you have to \\\"migrate\\\" unencrypted snapshot to encrypted one then performing database restoration.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 488480,
          "date": "Sat 27 Nov 2021 21:05",
          "username": "jove",
          "content": "It is C",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 487404,
          "date": "Fri 26 Nov 2021 14:44",
          "username": "GMartinelli",
          "content": "Option C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 439706,
          "date": "Sat 06 Nov 2021 13:26",
          "username": "guru_ji",
          "content": "Answer: C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 379444,
          "date": "Tue 26 Oct 2021 16:08",
          "username": "Suresh108",
          "content": "CCCCCCCCC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 326666,
          "date": "Tue 21 Sep 2021 15:41",
          "username": "shantest1shantest1",
          "content": "C.  AnswerA and D is incorrect<br>B is for Aurora Database not for RDS Database.",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 326668,
          "date": "Fri 24 Sep 2021 21:34",
          "username": "shantest1",
          "content": "A and D is incorrect<br>B is for Aurora Database not for RDS Database.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#106",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating its on-premises database workloads to the AWS Cloud. A database specialist performing the move has chosen AWS DMS to migrate an<br>Oracle database with a large table to Amazon RDS. The database specialist notices that AWS DMS is taking significant time to migrate the data.<br>Which actions would improve the data migration speed? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#106",
          "answers": [
            {
              "choice": "<p>A. Create multiple AWS DMS tasks to migrate the large table.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the AWS DMS replication instance with Multi-AZ.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Increase the capacity of the AWS DMS replication server.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Establish an AWS Direct Connect connection between the on-premises data center and AWS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable an Amazon RDS Multi-AZ configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>F. Enable full large binary object (LOB) mode to migrate all LOB data for all large tables.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 106 discussion",
      "discusstion": [
        {
          "id": 327739,
          "date": "Fri 24 Sep 2021 21:46",
          "username": "JaypdvjohnconnorJustu",
          "content": "ACD.  Answer<br>Selecting A.  based on https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html#CHAP_BestPractices.LargeTablesC.  and D.  are the only options that have to do with increasing performance, the others are irrelevantit is going to take you days/weeks to establish a direct connection, if it is not from the start, it should not be an optionIt should be not an option, but these three (ACD) are the means which fasten the migration. Other options wouldn't do that.",
          "upvote_count": "1022",
          "selected_answers": ""
        },
        {
          "id": 480952,
          "date": "Thu 18 Nov 2021 19:45",
          "username": "johnconnorJustu",
          "content": "it is going to take you days/weeks to establish a direct connection, if it is not from the start, it should not be an optionIt should be not an option, but these three (ACD) are the means which fasten the migration. Other options wouldn't do that.",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 491684,
          "date": "Wed 01 Dec 2021 14:40",
          "username": "Justu",
          "content": "It should be not an option, but these three (ACD) are the means which fasten the migration. Other options wouldn't do that.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 705071,
          "date": "Thu 27 Oct 2022 01:57",
          "username": "rags1482",
          "content": "With Amazon RDS databases, it's a good idea to turn off backups and Multi-AZ until the cutover.<br><br>So B and E eliminated<br><br>F - Full LOB mode impacts performance<br><br>So ACD right answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 701615,
          "date": "Sat 22 Oct 2022 17:34",
          "username": "Satprave",
          "content": "F - Full LOB mode downgrade the performance<br>Full LOB mode migrates all LOB data in your tables, regardless of size. Full LOB mode provides the convenience of moving all LOB data in your tables, but the process can have a significant impact on performance.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 609912,
          "date": "Tue 31 May 2022 23:31",
          "username": "Dantas",
          "content": "\\\"To improve the performance when migrating a large table, break the migration into more than one task. To break the migration into multiple tasks using row filtering, use a key or a partition key\\\" (A)<br><br>A number of factors affect the performance of your AWS DMS migration:<br>- Resource availability on the source.<br>- The available network throughput. (D)<br>- The resource capacity of the replication server. (C)<br>- The ability of the target to ingest changes.<br>- The type and distribution of source data.<br>- The number of objects to be migrated.<br><br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html#CHAP_BestPractices.LargeTables",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 599820,
          "date": "Wed 11 May 2022 03:45",
          "username": "whoareyou",
          "content": "It takes much to deploy the direct connect, so D is not the correct answer.<br>I choose ACF",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: ACF"
        },
        {
          "id": 597940,
          "date": "Sat 07 May 2022 04:05",
          "username": "KaranGandhi30",
          "content": "B & E.  Multi AZ doesn't increase speed it will add more time.F.  LOB mode will ensure complete movement but not faster",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 594024,
          "date": "Thu 28 Apr 2022 21:52",
          "username": "novice_expert",
          "content": "https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html#CHAP_BestPractices.LargeTables",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 534946,
          "date": "Fri 28 Jan 2022 21:30",
          "username": "awsmonster",
          "content": "ACF<br><br>F:<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/dms-improve-speed-lob-data/<br>If you have LOBs that are larger than a few megabytes, then you can create a separate AWS DMS task with Full LOB mode. It's a best practice to create the separate task on a new replication instance to migrate these tables alone.Option A stated to create multiple DMS tasks.<br><br>Having an expensive Direct Connect will not resolve this issue",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 507380,
          "date": "Wed 22 Dec 2021 22:00",
          "username": "jove",
          "content": "Strange question. If you've already started the migration of a large table and observe that the DMS is slow it's too late for making such suggested changes. If you're planning to migrate a large table then go with A,C and D. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 487665,
          "date": "Fri 26 Nov 2021 22:50",
          "username": "lihze",
          "content": "Answer - ACD. <br>F is wrong because \\\"Full LOB mode =E2=80=93 In full LOB mode AWS DMS migrates all LOBs from source to target regardless of size. In this configuration, AWS DMS has no information about the maximum size of LOBs to expect. Thus, LOBs are migrated one at a time, piece by piece. Full LOB mode can be quite slow.\\\"<br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.LOBSupport.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 474603,
          "date": "Tue 09 Nov 2021 04:56",
          "username": "alwaysAstudent",
          "content": "Ans A,C,D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 449030,
          "date": "Sun 31 Oct 2021 21:48",
          "username": "Scunningham99",
          "content": "A C and D - F is wrong full lob mode is slower as it migrates lobs to full size",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 446130,
          "date": "Sat 23 Oct 2021 21:17",
          "username": "guru_ji",
          "content": "This Q appeared in my exam.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 439768,
          "date": "Mon 11 Oct 2021 08:19",
          "username": "guru_ji",
          "content": "Correct Answer: ACF<br><br>Full LOB mode =E2=80=93 migrates all LOB data, piecewise in chunks (you provide LOB chunk size)",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 430837,
          "date": "Fri 08 Oct 2021 08:27",
          "username": "pcpcpc888guru_ji",
          "content": "how can you establish a direct connect connection when you are in the process of migrating the data? you would need two weeks or more time to accomplish this. D should not be the right choice.I agree with you.",
          "upvote_count": "23",
          "selected_answers": ""
        },
        {
          "id": 439770,
          "date": "Fri 15 Oct 2021 00:46",
          "username": "guru_ji",
          "content": "I agree with you.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 379445,
          "date": "Fri 01 Oct 2021 16:35",
          "username": "Suresh108",
          "content": "ACD for me as well",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 360639,
          "date": "Tue 28 Sep 2021 02:19",
          "username": "Aesthet",
          "content": "ACD final answer",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#107",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating a mission-critical 2-TB Oracle database from on premises to Amazon Aurora. The cost for the database migration must be kept to a minimum, and both the on-premises Oracle database and the Aurora DB cluster must remain open for write traffic until the company is ready to completely cut over to Aurora.<br>Which combination of actions should a database specialist take to accomplish this migration as quickly as possible? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#107",
          "answers": [
            {
              "choice": "<p>A. Use the AWS Schema Conversion Tool (AWS SCT) to convert the source database schema. Then restore the converted schema to the target Aurora DB cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Oracle's Data Pump tool to export a copy of the source database schema and manually edit the schema in a text editor to make it compatible with Aurora.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an AWS DMS task to migrate data from the Oracle database to the Aurora DB cluster. Select the migration type to replicate ongoing changes to keep the source and target databases in sync until the company is ready to move all user traffic to the Aurora DB cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an AWS DMS task to migrate data from the Oracle database to the Aurora DB cluster. Once the initial load is complete, create an AWS Kinesis Data Firehose stream to perform change data capture (CDC) until the company is ready to move all user traffic to the Aurora DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Create an AWS Glue job and related resources to migrate data from the Oracle database to the Aurora DB cluster. Once the initial load is complete, create an AWS DMS task to perform change data capture (CDC) until the company is ready to move all user traffic to the Aurora DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 107 discussion",
      "discusstion": [
        {
          "id": 327744,
          "date": "Thu 07 Oct 2021 12:19",
          "username": "Jaypdv",
          "content": "AC.  Answer",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 379447,
          "date": "Wed 20 Oct 2021 06:14",
          "username": "Suresh108guru_ji",
          "content": "AC--- locked<br><br>A - OK<br>B- NOT OK Text editor<br>C - ok though it doesn't talk about full load<br>D- NOT ok firehose<br>E - not ok GlueI agree with you.",
          "upvote_count": "61",
          "selected_answers": ""
        },
        {
          "id": 439783,
          "date": "Wed 20 Oct 2021 23:04",
          "username": "guru_ji",
          "content": "I agree with you.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595226,
          "date": "Sat 30 Apr 2022 21:16",
          "username": "novice_expert",
          "content": "A.  Use the AWS Schema Conversion Tool (AWS SCT) to convert the source database schema. Then restore the converted schema to the target Aurora DB cluster.<br>x B.  editC.  Create an AWS DMS task to migrate data from the Oracle database to the Aurora DB cluster. Select the migration type to replicate ongoing changes to keep the source and target databases in sync until the company is ready to move all user traffic to the Aurora DB cluster.<br>x D.  kinesis firehose<br>x E.  Glue job",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 449033,
          "date": "Sat 30 Oct 2021 02:33",
          "username": "Scunningham99",
          "content": "a and c all day long",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 446131,
          "date": "Thu 28 Oct 2021 21:37",
          "username": "guru_ji",
          "content": "I got this Question in exam.<br>60% questions came in actual exam from this 145 set. Bunch of new Questions.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 360641,
          "date": "Mon 18 Oct 2021 16:37",
          "username": "Aesthet",
          "content": "AC final answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 344235,
          "date": "Sat 09 Oct 2021 01:37",
          "username": "agrawalachin",
          "content": "A C is the answer",
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
      "question_text": "<p>A company has a 20 TB production Amazon Aurora DB cluster. The company runs a large batch job overnight to load data into the Aurora DB cluster. To ensure the company's development team has the most up-to-date data for testing, a copy of the DB cluster must be available in the shortest possible time after the batch job completes.<br>How should this be accomplished?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#108",
          "answers": [
            {
              "choice": "<p>A. Use the AWS CLI to schedule a manual snapshot of the DB cluster. Restore the snapshot to a new DB cluster using the AWS CLI.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a dump file from the DB cluster. Load the dump file into a new DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Schedule a job to create a clone of the DB cluster at the end of the overnight batch process.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up a new daily AWS DMS task that will use cloning and change data capture (CDC) on the DB cluster to copy the data to a new DB cluster. Set up a time for the AWS DMS stream to stop when the new cluster is current.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 108 discussion",
      "discusstion": [
        {
          "id": 326675,
          "date": "Fri 08 Oct 2021 19:04",
          "username": "shantest1",
          "content": "C.  answer<br><br>Aurora can do cloning.",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 594112,
          "date": "Fri 29 Apr 2022 02:02",
          "username": "novice_expert",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html<br><br> Creating a clone is faster and more space-efficient than physically copying the data using other techniques, such as restoring a snapshot.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 587199,
          "date": "Sun 17 Apr 2022 13:47",
          "username": "megadba",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 523288,
          "date": "Fri 14 Jan 2022 03:45",
          "username": "Balaji_Cloud",
          "content": "C - because Clone should kick-off after batch completes",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 501340,
          "date": "Tue 14 Dec 2021 13:20",
          "username": "GMartinelli",
          "content": "Option C, Clone is easy and fast",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 379449,
          "date": "Mon 01 Nov 2021 09:34",
          "username": "Suresh108",
          "content": "CCCC - faster clones",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 360642,
          "date": "Sun 24 Oct 2021 07:46",
          "username": "Aesthet",
          "content": "C final answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 342307,
          "date": "Mon 18 Oct 2021 20:47",
          "username": "manan728",
          "content": "C is correct.",
          "upvote_count": "1",
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
      "question_text": "<p>A company has two separate AWS accounts: one for the business unit and another for corporate analytics. The company wants to replicate the business unit data stored in Amazon RDS for MySQL in us-east-1 to its corporate analytics Amazon Redshift environment in us-west-1. The company wants to use AWS DMS with<br>Amazon RDS as the source endpoint and Amazon Redshift as the target endpoint.<br>Which action will allow AVS DMS to perform the replication?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#109",
          "answers": [
            {
              "choice": "<p>A. Configure the AWS DMS replication instance in the same account and Region as Amazon Redshift.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure the AWS DMS replication instance in the same account as Amazon Redshift and in the same Region as Amazon RDS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the AWS DMS replication instance in its own account and in the same Region as Amazon Redshift.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the AWS DMS replication instance in the same account and Region as Amazon RDS.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 109 discussion",
      "discusstion": [
        {
          "id": 327750,
          "date": "Sun 03 Oct 2021 15:51",
          "username": "Jaypdv",
          "content": "Sorry I meant A.  https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Redshift.html",
          "upvote_count": "15",
          "selected_answers": ""
        },
        {
          "id": 747204,
          "date": "Fri 16 Dec 2022 14:11",
          "username": "khun",
          "content": "Ans A. <br><br>The Amazon Redshift cluster must be in the same AWS account and the same AWS Region as the replication instance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 595668,
          "date": "Sun 01 May 2022 18:58",
          "username": "novice_expert",
          "content": "A.  Configure the AWS DMS replication instance in the same account and Region as Target Database",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 534279,
          "date": "Fri 28 Jan 2022 03:21",
          "username": "peacegrace",
          "content": "A is the answer. Refer : https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Redshift.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 379451,
          "date": "Sun 07 Nov 2021 17:04",
          "username": "Suresh108",
          "content": "AAA - locked -",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 360643,
          "date": "Thu 28 Oct 2021 17:08",
          "username": "Aesthet",
          "content": "A final answer<br>\\\"The Amazon Redshift cluster must be in the same AWS account and same AWS Region as the replication instance.\\\"",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 342309,
          "date": "Fri 22 Oct 2021 19:04",
          "username": "manan728",
          "content": "A is right.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 331186,
          "date": "Wed 06 Oct 2021 09:23",
          "username": "shantest1",
          "content": "A.  Answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 327745,
          "date": "Thu 30 Sep 2021 12:06",
          "username": "Jaypdv",
          "content": "B.  Answer<br>Ref https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Redshift.html",
          "upvote_count": "2",
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
      "question_text": "<p>A database specialist is managing an application in the us-west-1 Region and wants to set up disaster recovery in the us-east-1 Region. The Amazon Aurora<br>MySQL DB cluster needs an RPO of 1 minute and an RTO of 2 minutes.<br>Which approach meets these requirements with no negative performance impact?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#110",
          "answers": [
            {
              "choice": "<p>A. Enable synchronous replication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable asynchronous binlog replication.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Aurora Global Database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Copy Aurora incremental snapshots to the us-east-1 Region.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 110 discussion",
      "discusstion": [
        {
          "id": 327746,
          "date": "Thu 21 Oct 2021 19:01",
          "username": "Jaypdv",
          "content": "C. <br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 595379,
          "date": "Sun 01 May 2022 03:12",
          "username": "novice_expert",
          "content": "C.  Create an Aurora Global Database.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html<br><br>Managed planned failover RPO0 sec, RTOminutes",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 539865,
          "date": "Thu 03 Feb 2022 18:41",
          "username": "AriraAWS",
          "content": "C is the right answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 360644,
          "date": "Tue 02 Nov 2021 13:30",
          "username": "Aesthet",
          "content": "C final answer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 326676,
          "date": "Tue 21 Sep 2021 04:09",
          "username": "shantest1shantest1Harirukhchan123",
          "content": "C.  I believeSync replication not available cross region If I am not wrong.So if we want to have it in the same region, synchronous replication would be a better solution?No. You can use multi-AZ read replica for single region DR.",
          "upvote_count": "2211",
          "selected_answers": ""
        },
        {
          "id": 326678,
          "date": "Fri 01 Oct 2021 15:36",
          "username": "shantest1Harirukhchan123",
          "content": "Sync replication not available cross region If I am not wrong.So if we want to have it in the same region, synchronous replication would be a better solution?No. You can use multi-AZ read replica for single region DR.",
          "upvote_count": "211",
          "selected_answers": ""
        },
        {
          "id": 543063,
          "date": "Tue 08 Feb 2022 14:31",
          "username": "Harirukhchan123",
          "content": "So if we want to have it in the same region, synchronous replication would be a better solution?No. You can use multi-AZ read replica for single region DR.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 603792,
          "date": "Thu 19 May 2022 12:27",
          "username": "khchan123",
          "content": "No. You can use multi-AZ read replica for single region DR.",
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
      "question_text": "<p>A gaming company is developing a new mobile game and decides to store the data for each user in Amazon DynamoDB.  To make the registration process as easy as possible, users can log in with their existing Facebook or Amazon accounts. The company expects more than 10,000 users.<br>How should a database specialist implement access control with the LEAST operational effort?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#111",
          "answers": [
            {
              "choice": "<p>A. Use web identity federation on the mobile app and AWS STS with an attached IAM role to get temporary credentials to access DynamoDB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use web identity federation on the mobile app and create individual IAM users with credentials to access DynamoDB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use a self-developed user management system on the mobile app that lets users access the data from DynamoDB through an API.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use a single IAM user on the mobile app to access DynamoDB. <br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 111 discussion",
      "discusstion": [
        {
          "id": 326680,
          "date": "Thu 23 Sep 2021 04:46",
          "username": "shantest1",
          "content": "A.  answer",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 747209,
          "date": "Fri 16 Dec 2022 14:16",
          "username": "khun",
          "content": "A, Web identity Fed > STS > IAM > tempo creds",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 618544,
          "date": "Sun 19 Jun 2022 08:11",
          "username": "elf78",
          "content": "IAM Role is always preferred method.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 594590,
          "date": "Fri 29 Apr 2022 18:29",
          "username": "novice_expert",
          "content": "Use web identity federation on the mobile app and AWS STS with an attached IAM role to get temporary credentials to access DynamoDB. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 555479,
          "date": "Thu 24 Feb 2022 19:28",
          "username": "tugboat",
          "content": "obvious",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 379454,
          "date": "Thu 04 Nov 2021 14:37",
          "username": "Suresh108",
          "content": "AAAAAAAAA",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 360645,
          "date": "Wed 03 Nov 2021 09:37",
          "username": "Aesthet",
          "content": "A final answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 344245,
          "date": "Mon 11 Oct 2021 19:52",
          "username": "agrawalachin",
          "content": "Answer is A - least operational",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#112",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large retail company recently migrated its three-tier ecommerce applications to AWS. The company's backend database is hosted on Amazon Aurora<br>PostgreSQL. During peak times, users complain about longer page load times. A database specialist reviewed Amazon RDS Performance Insights and found a spike in IO:XactSync wait events. The SQL attached to the wait events are all single INSERT statements.<br>How should this issue be resolved?<br></p>",
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
              "choice": "<p>A. Modify the application to commit transactions in batches<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a new Aurora Replica to the Aurora DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add an Amazon ElastiCache for Redis cluster and change the application to write through.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Change the Aurora DB cluster storage to Provisioned IOPS (PIOPS).<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 112 discussion",
      "discusstion": [
        {
          "id": 326682,
          "date": "Sun 26 Sep 2021 08:26",
          "username": "shantest1gelsm",
          "content": "A.  answerhttps://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Reference.html<br>\\\"This wait most often arises when there is a very high rate of commit activity on the system. You can sometimes alleviate this wait by modifying applications to commit transactions in batches. \\\"",
          "upvote_count": "134",
          "selected_answers": ""
        },
        {
          "id": 414408,
          "date": "Fri 05 Nov 2021 14:40",
          "username": "gelsm",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Reference.html<br>\\\"This wait most often arises when there is a very high rate of commit activity on the system. You can sometimes alleviate this wait by modifying applications to commit transactions in batches. \\\"",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 538933,
          "date": "Wed 02 Feb 2022 17:37",
          "username": "soyyodario",
          "content": "Answer is A. <br><br>Actions<br><br>We recommend different actions depending on the causes of your wait event.<br>1.-Monitor your resources<br>2.-Scale up the CPU<br>3.-Increase network bandwidth<br>4.-Reduce the number of commits<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/apg-waits.xactsync.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 696119,
          "date": "Sun 16 Oct 2022 11:02",
          "username": "RBSK",
          "content": "D - There is no option to setup PIOPS for Aurora. Only RDS has it",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 595008,
          "date": "Sat 30 Apr 2022 14:52",
          "username": "novice_expert",
          "content": "avoid high rate of commits by using batch commit",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 506409,
          "date": "Tue 21 Dec 2021 21:09",
          "username": "jove",
          "content": "To reduce the number of commits, combine statements into transaction blocks.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 491333,
          "date": "Wed 01 Dec 2021 07:46",
          "username": "Justu",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/apg-waits.xactsync.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 379455,
          "date": "Wed 13 Oct 2021 09:40",
          "username": "Suresh108",
          "content": "AAAAAA",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 360646,
          "date": "Sun 10 Oct 2021 21:43",
          "username": "Aesthet",
          "content": "A final answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 344246,
          "date": "Sun 03 Oct 2021 16:14",
          "username": "agrawalachin",
          "content": "Yes, A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 342311,
          "date": "Sat 02 Oct 2021 01:56",
          "username": "manan728",
          "content": "Yup A is right for this use case",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#113",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon DynamoDB as the data store for its ecommerce website. The website receives little to no traffic at night, and the majority of the traffic occurs during the day. The traffic growth during peak hours is gradual and predictable on a daily basis, but it can be orders of magnitude higher than during off- peak hours.<br>The company initially provisioned capacity based on its average volume during the day without accounting for the variability in traffic patterns. However, the website is experiencing a significant amount of throttling during peak hours. The company wants to reduce the amount of throttling while minimizing costs.<br>What should a database specialist do to meet these requirements?<br></p>",
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
              "choice": "<p>A. Use reserved capacity. Set it to the capacity levels required for peak daytime throughput.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use provisioned capacity. Set it to the capacity levels required for peak daytime throughput.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use provisioned capacity. Create an AWS Application Auto Scaling policy to update capacity based on consumption.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use on-demand capacity.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 113 discussion",
      "discusstion": [
        {
          "id": 725648,
          "date": "Thu 24 Nov 2022 09:04",
          "username": "Arun32",
          "content": "C for me too..<br><br>DynamoDB auto scaling uses a scaling policy in Application Auto Scaling. To configure auto scaling in DynamoDB, you set the minimum and maximum levels of read and write capacity in addition to the target utilization percentage. Auto scaling uses Amazon CloudWatch to monitor a table's read and write capacity metrics. To do so, it creates CloudWatch alarms that track consumed capacity.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 700369,
          "date": "Fri 21 Oct 2022 01:23",
          "username": "awsjjj",
          "content": "no traffic at night and orders of magnitude high traffic in off peak. I will go with D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 626528,
          "date": "Sun 03 Jul 2022 13:00",
          "username": "kush_sumit",
          "content": "C: As the pattern is predictable load with mangitude of spikes this could be handled by autoscaling. As per aws autoscaling is cost saving as compared to ondemand. If the pattern was unpredictable On-demand would be good",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 622874,
          "date": "Mon 27 Jun 2022 03:20",
          "username": "sachin",
          "content": "but it also says \\\"traffic increase during peak hours is steady and predictable\\\" and the firm also wants to reduce the throttling \\\"so it is either C or D<br>I think ..<br>C is more likely as traffic pattern is predictable",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 622871,
          "date": "Mon 27 Jun 2022 03:00",
          "username": "sachin",
          "content": "It states that there is lot of throttling though out the day and the firm wants to minimize the expenditure and cost. Provisioned is costlier and during night hours the traffic is almost nill.<br>So what ever small ( average of day ) capacity you areprovisioning will be wasted at night.<br>I believe on-demand in this case is better choice.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 608902,
          "date": "Sun 29 May 2022 21:23",
          "username": "Dantas",
          "content": "\\\"... traffic increase during peak hours is steady and predictable ...\\\"",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 594755,
          "date": "Sat 30 Apr 2022 02:48",
          "username": "novice_expert",
          "content": "- traffic increase during peak hours is steady and predictable> provisioned<br>- no uses in night. > on demand (but costly)<br><br>so provision some + auto scale with a target 70% utilization set<br><br>D will also work but costly",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 564835,
          "date": "Thu 10 Mar 2022 15:03",
          "username": "mike3g2000",
          "content": "I go with C. <br>\\\"To understand how DynamoDB auto scaling works, suppose that you have a table named ProductCatalog. The table is bulk-loaded with data infrequently, so it doesn't incur very much write activity. However, it does experience a high degree of read activity, which varies over time. By monitoring the Amazon CloudWatch metrics for ProductCatalog, you determine that the table requires 1,200 read capacity units (to avoid DynamoDB throttling read requests when activity is at its peak). You also determine that ProductCatalog requires 150 read capacity units at a minimum, when read traffic is at its lowest point.<br><br>Within the range of 150 to 1,200 read capacity units, you decide that a target utilization of 70 percent would be appropriate for the ProductCatalog table. Target utilization is the ratio of consumed capacity units to provisioned capacity units, expressed as a percentage. Application Auto Scaling uses its target tracking algorithm to ensure that the provisioned read capacity of ProductCatalog is adjusted as required so that utilization remains at or near 70 percent.\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 561549,
          "date": "Sat 05 Mar 2022 18:36",
          "username": "RotterDamwhn",
          "content": "Very tricky. Feels like (D)<br>Even ofyou enable Autoscaling - but you will still pay the same rate during off-peak hours. the provisioned capacity will never fall below the preconfigured one during night when theres no traffic. Plus the question WANTS to reduce expenditure - which means with OnDemand theresbarely any charge during off peak hours compared to fully charged if u use provisioned capacity using thebaseline configured RCU/WCUs.Remember for Provisioned with Auto-Scaling you are basically paying for throughput 24/7. Whereas for On-Demand Scaling you pay per request. This means for applications still in development or low traffic applications, it might be more economical to use On-Demand Scaling and not worry about provisioning throughput. However, at scale, this can quickly shift once you have a more consistent usage pattern.<br>https://dynobase.dev/dynamodb-on-demand-vs-provisioned-scaling/#:~:textRemember%20for%20Provisioned%20with%20Auto,not%20worry%20about%20provisioning%20throughput.",
          "upvote_count": "32",
          "selected_answers": ""
        },
        {
          "id": 582060,
          "date": "Thu 07 Apr 2022 00:27",
          "username": "whn",
          "content": "Remember for Provisioned with Auto-Scaling you are basically paying for throughput 24/7. Whereas for On-Demand Scaling you pay per request. This means for applications still in development or low traffic applications, it might be more economical to use On-Demand Scaling and not worry about provisioning throughput. However, at scale, this can quickly shift once you have a more consistent usage pattern.<br>https://dynobase.dev/dynamodb-on-demand-vs-provisioned-scaling/#:~:textRemember%20for%20Provisioned%20with%20Auto,not%20worry%20about%20provisioning%20throughput.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 557469,
          "date": "Sun 27 Feb 2022 18:33",
          "username": "user0001",
          "content": "C<br>Provisioned Mode<br>If you choose provisioned mode, you specify the number of reads and writes per second that you require for your application. You can use auto scaling to adjust your table's provisioned capacity automatically in response to traffic changes. This helps you govern your DynamoDB use to stay at or below a defined request rate in order to obtain cost predictability.<br><br>Provisioned mode is a good option if any of the following are true:<br><br>You have predictable application traffic.<br><br>You run applications whose traffic is consistent or ramps gradually.<br><br>You can forecast capacity requirements to control costs.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 555625,
          "date": "Thu 24 Feb 2022 23:45",
          "username": "tugboat",
          "content": "They know peak hours<br>AWS Application Auto Scaling policy is good for it.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 529150,
          "date": "Fri 21 Jan 2022 14:19",
          "username": "Shinytopology",
          "content": "C.  DynamoDB autoscaling saves costs comparing to on-demand (which costs a bit higher for the NoOps benefit.)<br>https://aws.amazon.com/blogs/database/amazon-dynamodb-auto-scaling-performance-and-cost-optimization-at-any-scale/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 519176,
          "date": "Fri 07 Jan 2022 20:23",
          "username": "wcx",
          "content": "\\\"traffic increase during peak hours is steady and predictable\\\"<br>C is the answer.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 506359,
          "date": "Tue 21 Dec 2021 19:42",
          "username": "jove",
          "content": "C seems to be the best option :<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 497665,
          "date": "Thu 09 Dec 2021 12:17",
          "username": "2025flakyt",
          "content": "C is the correct answer<br>On-demand mode is a good option if any of the following are true:<br>You create new tables with unknown workloads. You have unpredictable application traffic.<br>You prefer the ease of paying for only what you use.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.ProvisionedThroughput.Manual",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 449467,
          "date": "Thu 28 Oct 2021 23:37",
          "username": "Scunningham99",
          "content": "I would go with d",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 439810,
          "date": "Thu 28 Oct 2021 21:03",
          "username": "guru_ji",
          "content": "very close.. C or D",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#114",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses an Amazon RDS for PostgreSQL DB instance for its customer relationship management (CRM) system. New compliance requirements specify that the database must be encrypted at rest.<br>Which action will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#114",
          "answers": [
            {
              "choice": "<p>A. Create an encrypted copy of manual snapshot of the DB instance. Restore a new DB instance from the encrypted snapshot.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the DB instance and enable encryption.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Restore a DB instance from the most recent automated snapshot and enable encryption.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an encrypted read replica of the DB instance. Promote the read replica to a standalone instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 114 discussion",
      "discusstion": [
        {
          "id": 326705,
          "date": "Wed 29 Sep 2021 06:02",
          "username": "shantest1scottkerkertoppic26DantasDantas",
          "content": "A.  AnswerThis page has detailed steps for MySQL and Maria in terms of the encryption of an unencrypted RDS instance.<br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-encrypt-instance-mysql-mariadb/From the reference: You can only enable encryption for an Amazon RDS DB instance when you create it, not after the DB instance is created.<br><br>However, because you can encrypt a copy of an unencrypted snapshot, you can effectively add encryption to an unencrypted DB instance. That is, you can create a snapshot of your DB instance, and then create an encrypted copy of that snapshot. You can then restore a DB instance from the encrypted snapshot, and thus you have an encrypted copy of your original DB instance. For more information, see Copying a snapshot.Don't the words \\\"manual snapshot\\\" invalidate the answer \\\"A\\\"?A.  Answer -> Answering to my own question: No! I've just tried to restore unencrypted manual and automatic snapshots into an encrypted db instance and it isn't allowed. If you want to launch an encrypted rds instance, you need to create an encrypted copy of the unencrypted snapshot.",
          "upvote_count": "121511",
          "selected_answers": ""
        },
        {
          "id": 489497,
          "date": "Mon 29 Nov 2021 00:48",
          "username": "scottkerker",
          "content": "This page has detailed steps for MySQL and Maria in terms of the encryption of an unencrypted RDS instance.<br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-encrypt-instance-mysql-mariadb/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 476866,
          "date": "Fri 12 Nov 2021 11:37",
          "username": "toppic26DantasDantas",
          "content": "From the reference: You can only enable encryption for an Amazon RDS DB instance when you create it, not after the DB instance is created.<br><br>However, because you can encrypt a copy of an unencrypted snapshot, you can effectively add encryption to an unencrypted DB instance. That is, you can create a snapshot of your DB instance, and then create an encrypted copy of that snapshot. You can then restore a DB instance from the encrypted snapshot, and thus you have an encrypted copy of your original DB instance. For more information, see Copying a snapshot.Don't the words \\\"manual snapshot\\\" invalidate the answer \\\"A\\\"?A.  Answer -> Answering to my own question: No! I've just tried to restore unencrypted manual and automatic snapshots into an encrypted db instance and it isn't allowed. If you want to launch an encrypted rds instance, you need to create an encrypted copy of the unencrypted snapshot.",
          "upvote_count": "511",
          "selected_answers": ""
        },
        {
          "id": 514503,
          "date": "Sat 01 Jan 2022 13:31",
          "username": "DantasDantas",
          "content": "Don't the words \\\"manual snapshot\\\" invalidate the answer \\\"A\\\"?A.  Answer -> Answering to my own question: No! I've just tried to restore unencrypted manual and automatic snapshots into an encrypted db instance and it isn't allowed. If you want to launch an encrypted rds instance, you need to create an encrypted copy of the unencrypted snapshot.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 565718,
          "date": "Fri 11 Mar 2022 19:08",
          "username": "Dantas",
          "content": "A.  Answer -> Answering to my own question: No! I've just tried to restore unencrypted manual and automatic snapshots into an encrypted db instance and it isn't allowed. If you want to launch an encrypted rds instance, you need to create an encrypted copy of the unencrypted snapshot.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 625565,
          "date": "Fri 01 Jul 2022 06:03",
          "username": "megadba",
          "content": "D.  is correct.<br>Create Read Replica encrypted enable and promote standalone instance.<br>A.  The snapshot doesn't encrypred option.B.  Unencrypted instance is not enable encrypted.C.  Also automated snapshot is not enable encrypted.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 625245,
          "date": "Thu 30 Jun 2022 14:27",
          "username": "minhntm",
          "content": "A.  Answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 613598,
          "date": "Thu 09 Jun 2022 04:48",
          "username": "niau",
          "content": "You can only encrypt an Amazon RDS DB instance when you create it, not after the DB instance is created.<br><br>However, because you can encrypt a copy of an unencrypted snapshot, you can effectively add encryption to an unencrypted DB instance. That is, you can create a snapshot of your DB instance, and then create an encrypted copy of that snapshot. You can then restore a DB instance from the encrypted snapshot, and thus you have an encrypted copy of your original DB instance",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 600943,
          "date": "Fri 13 May 2022 05:28",
          "username": "praffuln",
          "content": "A is correct, from the page DMS used for ongoing replication.<br><br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/encrypt-an-existing-amazon-rds-for-postgresql-db-instance.html<br><br>AWS DMS =E2=80=93 You can use AWS Database Migration Service (AWS DMS) to replicate changes from the source DB to the target DB.  It is important to keep the source and target DB in sync to keep downtime to a minimum. For information about setting up AWS DMS and creating tasks, see the AWS DMS documentation.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594486,
          "date": "Fri 29 Apr 2022 15:22",
          "username": "novice_expert",
          "content": "Manual Snapshot -> Create an encrypted copy -> Restore a new DB instance from the encrypted snapshot.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 554944,
          "date": "Thu 24 Feb 2022 00:34",
          "username": "tugboat",
          "content": "correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 554943,
          "date": "Thu 24 Feb 2022 00:33",
          "username": "tugboat",
          "content": "Correct option",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 554910,
          "date": "Wed 23 Feb 2022 23:02",
          "username": "kped21",
          "content": "A - is wrong, something has changed recently.<br>I took a snapshot and tried to copy and encrypt it, it does not allows unencrypted to encrypted.<br>The best option is C, C works as is take any snapshot or manual snapshot and restore to new encrypted cluster.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 503799,
          "date": "Fri 17 Dec 2021 17:51",
          "username": "Sisun",
          "content": "A - correct<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/encrypt-an-existing-amazon-rds-for-postgresql-db-instance.html<br>You can enable encryption for an Amazon RDS DB instance when you create it, but not after it's created. However, you can add encryption to an unencrypted DB instance by creating a snapshot of your DB instance, and then creating an encrypted copy of that snapshot. You can then restore a DB instance from the encrypted snapshot to get an encrypted copy of your original DB instance. The pattern uses AWS Database Migration Service (AWS DMS) to migrate data and AWS Key Management Service (AWS KMS) for encryption.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 495498,
          "date": "Tue 07 Dec 2021 02:16",
          "username": "akiraklaus",
          "content": "All aswer is erro, is necessary utilization DMS<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/encrypt-an-existing-amazon-rds-for-postgresql-db-instance.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 433763,
          "date": "Sat 30 Oct 2021 15:10",
          "username": "ChauPhan",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 360654,
          "date": "Thu 21 Oct 2021 23:28",
          "username": "Aesthet",
          "content": "A final answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 344250,
          "date": "Sun 03 Oct 2021 14:34",
          "username": "agrawalachin",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#115",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A database specialist was alerted that a production Amazon RDS MariaDB instance with 100 GB of storage was out of space. In response, the database specialist modified the DB instance and added 50 GB of storage capacity. Three hours later, a new alert is generated due to a lack of free space on the same DB instance.<br>The database specialist decides to modify the instance immediately to increase its storage capacity by 20 GB. <br>What will happen when the modification is submitted?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#115",
          "answers": [
            {
              "choice": "<p>A. The request will fail because this storage capacity is too large.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The request will succeed only if the primary instance is in active status.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The request will succeed only if CPU utilization is less than 10%.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The request will fail as the most recent modification was too soon.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 115 discussion",
      "discusstion": [
        {
          "id": 327756,
          "date": "Tue 12 Oct 2021 12:23",
          "username": "Jaypdv",
          "content": "D.  answer. instance can't have any more storage modifications for six hours",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 708839,
          "date": "Tue 01 Nov 2022 05:36",
          "username": "Satprave",
          "content": "D - Storage shouldn't be extended immediately",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595027,
          "date": "Sat 30 Apr 2022 15:17",
          "username": "novice_expert",
          "content": "needs 6 hour gap",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 561562,
          "date": "Sat 05 Mar 2022 19:11",
          "username": "RotterDam",
          "content": "Answer is D - cannot modify storage until EITHER 6 hours have passed OR the \\\"storage-optimization\\\" status is complete (instance will show \\\"storage-optimization\\\" happens after previous storage capacity has increased -it CAN take more than 6 hours)<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 555727,
          "date": "Fri 25 Feb 2022 04:21",
          "username": "kped21",
          "content": "D<br>Storage optimization can take several hours. You can't make further storage modifications for either six (6) hours or until storage optimization has completed on the instance, whichever is longer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 492429,
          "date": "Thu 02 Dec 2021 13:01",
          "username": "GMartinelli",
          "content": "Option D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 449546,
          "date": "Sat 06 Nov 2021 04:37",
          "username": "Scunningham99",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html - either 6 hours or when the firstjob completes - I would go with D too",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 360661,
          "date": "Fri 29 Oct 2021 08:01",
          "username": "Aesthet",
          "content": "D<br>You can't make further storage modifications until six (6) hours after storage optimization has completed on the instance.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 344252,
          "date": "Tue 19 Oct 2021 13:15",
          "username": "agrawalachin",
          "content": "D is correct. 6 hours duration needs to pass",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 326747,
          "date": "Mon 20 Sep 2021 07:14",
          "username": "shantest1shantest1shantest1",
          "content": "D.  answer<br>I think it needs to pass 6 hours to increase another storage space increase.Ignore the answer, that is for auto scaling, has to pass 6 hours.Well, that condition applies both to manual as well as auto scaling, 6 hours has to pass. So I think it is D still",
          "upvote_count": "221",
          "selected_answers": ""
        },
        {
          "id": 326749,
          "date": "Sat 02 Oct 2021 14:43",
          "username": "shantest1shantest1",
          "content": "Ignore the answer, that is for auto scaling, has to pass 6 hours.Well, that condition applies both to manual as well as auto scaling, 6 hours has to pass. So I think it is D still",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 326752,
          "date": "Sat 02 Oct 2021 19:38",
          "username": "shantest1",
          "content": "Well, that condition applies both to manual as well as auto scaling, 6 hours has to pass. So I think it is D still",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#116",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company uses Amazon Aurora for secure financial transactions. The data must always be encrypted at rest and in transit to meet compliance requirements.<br>Which combination of actions should a database specialist take to meet these requirements? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#116",
          "answers": [
            {
              "choice": "<p>A. Create an Aurora Replica with encryption enabled using AWS Key Management Service (AWS KMS). Then promote the replica to master.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use SSL/TLS to secure the in-transit connection between the financial application and the Aurora DB cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the existing Aurora DB cluster and enable encryption using an AWS Key Management Service (AWS KMS) encryption key. Apply the changes immediately.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Take a snapshot of the Aurora DB cluster and encrypt the snapshot using an AWS Key Management Service (AWS KMS) encryption key. Restore the snapshot to a new DB cluster and update the financial application database endpoints.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS Key Management Service (AWS KMS) to secure the in-transit connection between the financial application and the Aurora DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 116 discussion",
      "discusstion": [
        {
          "id": 331190,
          "date": "Sat 02 Oct 2021 02:35",
          "username": "shantest1",
          "content": "B and D. ",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 554967,
          "date": "Thu 24 Feb 2022 01:13",
          "username": "tugboat",
          "content": "Per - https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Overview.Encryption.html<br><br>Not A as - You can't create an encrypted Aurora Replica from an unencrypted Aurora DB cluster. You can't create an unencrypted Aurora Replica from an encrypted Aurora DB cluster.<br>B is good for in-transit replication<br>Not C as - You can't convert an unencrypted DB cluster to an encrypted one.<br>D as - You can restore an unencrypted snapshot to an encrypted Aurora DB cluster. To do this, specify a KMS key when you restore from the unencrypted snapshot.<br>Not E as - KMS does not perform encryption for data in transit or in motion. If you want to encrypt data while in transit, then you would need to use a different method such as SSL.<br><br>So, B and D is correct.",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 601502,
          "date": "Sat 14 May 2022 11:00",
          "username": "lunt",
          "content": "B and D.  D is right. Take snapshot of cluster > and (keyword here) > enable encryption. You cannot take a snapshot and encrypt it at the same time, this where the 'and' comes into play, you can encrypt just a snapshot + you can encrypt the snapshot on restore.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 594538,
          "date": "Fri 29 Apr 2022 17:06",
          "username": "novice_expertnovice_expert",
          "content": "B.  SSL/TLS is good for in-transit replicationD.  as - You can restore an unencrypted snapshot to an encrypted Aurora DB clusterD.  as - You can NOT restore an unencrypted snapshot to an encrypted Aurora DB cluster",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 594540,
          "date": "Fri 29 Apr 2022 17:07",
          "username": "novice_expert",
          "content": "D.  as - You can NOT restore an unencrypted snapshot to an encrypted Aurora DB cluster",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 554925,
          "date": "Wed 23 Feb 2022 23:36",
          "username": "kped21",
          "content": "B,D<br>C: Wrong, you cannot modify an unencrypted to encrypted",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 522250,
          "date": "Wed 12 Jan 2022 16:15",
          "username": "awsmonster",
          "content": "A and B ..<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-replicas-adding.html<br><br>D is incorrect:<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html<br><br>For Amazon Aurora DB cluster snapshots, you can't encrypt an unencrypted DB cluster snapshot when you copy the snapshot.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 433767,
          "date": "Sun 31 Oct 2021 05:42",
          "username": "ChauPhan",
          "content": "B and D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 409077,
          "date": "Mon 25 Oct 2021 12:02",
          "username": "Hits_23",
          "content": "B and D are correct choice.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 327766,
          "date": "Mon 20 Sep 2021 10:16",
          "username": "Jaypdv",
          "content": "BDB.  is obvious. For D.  I thought it's possible to directly restore the unencrypted snapshot into an encrypted cluster so somehow one step looks unnecessary. But A, C and E are incorrect so I pick D.  by default",
          "upvote_count": "4",
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
      "question_text": "<p>A company is running a website on Amazon EC2 instances deployed in multiple Availability Zones (AZs). The site performs a high number of repetitive reads and writes each second on an Amazon RDS for MySQL Multi-AZ DB instance with General Purpose SSD (gp2) storage. After comprehensive testing and analysis, a database specialist discovers that there is high read latency and high CPU utilization on the DB instance.<br>Which approach should the database specialist take to resolve this issue without changing the application?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#117",
          "answers": [
            {
              "choice": "<p>A. Implement sharding to distribute the load to multiple RDS for MySQL databases.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the same RDS for MySQL instance class with Provisioned IOPS (PIOPS) storage.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Add an RDS for MySQL read replica.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the RDS for MySQL database class to a bigger size and implement Provisioned IOPS (PIOPS).<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 117 discussion",
      "discusstion": [
        {
          "id": 449558,
          "date": "Sat 30 Oct 2021 15:41",
          "username": "Scunningham99",
          "content": "I would go with D due to the high cpu utilisation;not C as this would require app to use read endpoint - therefore app change required",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 720973,
          "date": "Fri 18 Nov 2022 01:15",
          "username": "saikirankshatriya",
          "content": "B - doesnt incur downtime can change and improve performance but on the storage front<br>C - Needs to send high load queries to replicas<br>D - Chance of 60 second downtime due to change in instance class but performance improvement over CPU and storage.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 595346,
          "date": "Sun 01 May 2022 01:30",
          "username": "novice_expert",
          "content": "x C.  Add an RDS for MySQL read replica. (Would need program to use Read End Point, else it is good solution)D.  Modify the RDS for MySQL database class to a bigger size and implement Provisioned IOPS (PIOPS).(because of high CPU + no change in code)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 562165,
          "date": "Sun 06 Mar 2022 18:32",
          "username": "RotterDam",
          "content": "CPU Utilization is High - This means the Database is underprovisioned - this drives the overall strategy to remediate the Instance class.(D) is the only option",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 522215,
          "date": "Wed 12 Jan 2022 15:18",
          "username": "deepcloud",
          "content": "\\\"without requiring program to be changed\\\" - Adding read replica will need program to be changed to add replica endpoint. D should be the answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 449005,
          "date": "Tue 26 Oct 2021 02:24",
          "username": "Amy2009",
          "content": "B should be the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 443620,
          "date": "Tue 19 Oct 2021 03:03",
          "username": "patricpotter1992",
          "content": "Correct Answer Should be D because of \\\"Which approach should the database specialist to take to resolve this issue without changing the application?\\\" WITHOUT CHANGING THE APPLICATION. Option C would need add the read-endpoints to the application.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 433770,
          "date": "Thu 14 Oct 2021 10:47",
          "username": "ChauPhan",
          "content": "After comprehensive testing and analysis, a database specialist discovers that there is high read latency and high CPU utilization on the DB instance.<br>> C.  Add read replicas for read SQL.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 398377,
          "date": "Tue 12 Oct 2021 18:17",
          "username": "sbhujbalChauPhan",
          "content": "option c is out since \\\"The site performs a high number of repetitive reads and writes\\\". So mostly Option D is correctAfter comprehensive testing and analysis, a database specialist discovers that there is high read latency and high CPU utilization on the DB instance",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 433773,
          "date": "Mon 18 Oct 2021 12:40",
          "username": "ChauPhan",
          "content": "After comprehensive testing and analysis, a database specialist discovers that there is high read latency and high CPU utilization on the DB instance",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 376386,
          "date": "Sat 09 Oct 2021 10:07",
          "username": "AM",
          "content": "The only issue with C is that the application needs to be changed to point read traffic to read replica. This is not allowed as per the question. In that case the instance size increase will take care of the high CPU utilization. PIOPS will be bonus (As per the option D).I will go with option D. ",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 360689,
          "date": "Wed 06 Oct 2021 23:13",
          "username": "Aesthet",
          "content": "Both C and D will do the job.<br>\\\"to resolve this issue without changing the application\\\" - with C you have at least balance some or all reads across master and replica, add a connection string to read replica. So this makes D a correct answer (even though I prefer answer C over D if not that formulation).",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 344256,
          "date": "Tue 05 Oct 2021 18:30",
          "username": "agrawalachin",
          "content": "C.  The read latency and CPU util would reduce as read queries would be routed to Read replica",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 342317,
          "date": "Sat 02 Oct 2021 08:35",
          "username": "manan728manan728notcloudguru",
          "content": "It's debatable. BCD all look plausible options.Changing to C.  There's no indication that the IO is high.application needs to change if C, to read from replica",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 343260,
          "date": "Mon 04 Oct 2021 17:54",
          "username": "manan728notcloudguru",
          "content": "Changing to C.  There's no indication that the IO is high.application needs to change if C, to read from replica",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 388279,
          "date": "Sun 10 Oct 2021 08:10",
          "username": "notcloudguru",
          "content": "application needs to change if C, to read from replica",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 331192,
          "date": "Sat 25 Sep 2021 08:26",
          "username": "shantest1",
          "content": "C.  Read replica answer seems to be reasonable considering other options listed.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#118",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A banking company recently launched an Amazon RDS for MySQL DB instance as part of a proof-of-concept project. A database specialist has configured automated database snapshots. As a part of routine testing, the database specialist noticed one day that the automated database snapshot was not created.<br>Which of the following are possible reasons why the snapshot was not created? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#118",
          "answers": [
            {
              "choice": "<p>A. A copy of the RDS automated snapshot for this DB instance is in progress within the same AWS Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. A copy of the RDS automated snapshot for this DB instance is in progress in a different AWS Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. The RDS maintenance window is not configured.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The RDS DB instance is in the STORAGE_FULL state.<br></p>",
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
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 118 discussion",
      "discusstion": [
        {
          "id": 554959,
          "date": "Thu 24 Feb 2022 00:56",
          "username": "tugboat",
          "content": "Per - https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html<br><br>Your DB instance must be in the AVAILABLE state for automated backups to occur. Automated backups don't occur while your DB instance is in a state other than AVAILABLE, for example STORAGE_FULL.<br><br>Automated backups don't occur while a DB snapshot copy is running in the same AWS Region for the same DB instance.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 594536,
          "date": "Fri 29 Apr 2022 17:01",
          "username": "novice_expert",
          "content": "A.  Automated backups don't occur while a DB snapshot copy is running in the same AWS Region for the same DB instance.<br>D. DB instance must be in the AVAILABLE state",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 557279,
          "date": "Sun 27 Feb 2022 12:26",
          "username": "user0001",
          "content": "since the database is not down, that is mean storage_full is not the case",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 554923,
          "date": "Wed 23 Feb 2022 23:29",
          "username": "kped21",
          "content": "A,D<br>Automated backups follow these rules:<br><br>Your DB instance must be in the AVAILABLE state for automated backups to occur. Automated backups don't occur while your DB instance is in a state other than AVAILABLE, for example STORAGE_FULL.<br><br>Automated backups don't occur while a DB snapshot copy is running in the same AWS Region for the same DB instance.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 501479,
          "date": "Tue 14 Dec 2021 16:55",
          "username": "lmkjhigqysdfugshck",
          "content": "AD is the answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AD"
        },
        {
          "id": 380157,
          "date": "Sat 02 Oct 2021 05:42",
          "username": "Suresh108",
          "content": "AD is the answer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 360678,
          "date": "Fri 01 Oct 2021 04:55",
          "username": "Aesthet",
          "content": "AD final answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 342318,
          "date": "Thu 30 Sep 2021 14:29",
          "username": "manan728",
          "content": "=C3=80D is right.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 327776,
          "date": "Wed 22 Sep 2021 11:24",
          "username": "Jaypdv[Removed]gelsm",
          "content": "Answer is ADI concur https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.htmlI agree with the link above",
          "upvote_count": "441",
          "selected_answers": ""
        },
        {
          "id": 340559,
          "date": "Thu 23 Sep 2021 06:44",
          "username": "[Removed]gelsm",
          "content": "I concur https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.htmlI agree with the link above",
          "upvote_count": "41",
          "selected_answers": ""
        },
        {
          "id": 415095,
          "date": "Thu 07 Oct 2021 21:17",
          "username": "gelsm",
          "content": "I agree with the link above",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#119",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An online shopping company has a large inflow of shopping requests daily. As a result, there is a consistent load on the company's Amazon RDS database. A database specialist needs to ensure the database is up and running at all times. The database specialist wants an automatic notification system for issues that may cause database downtime or for configuration changes made to the database.<br>What should the database specialist do to achieve this? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#119",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon CloudWatch Events event to send a notification using Amazon SNS on every API call logged in AWS CloudTrail.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Subscribe to an RDS event subscription and configure it to use an Amazon SNS topic to send notifications.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon SES to send notifications based on configured Amazon CloudWatch Events events.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon CloudWatch alarms on various metrics, such as FreeStorageSpace for the RDS instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable email notifications for AWS Trusted Advisor.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 119 discussion",
      "discusstion": [
        {
          "id": 331193,
          "date": "Wed 06 Oct 2021 22:15",
          "username": "shantest1",
          "content": "B and D looks correct. With low storage instance will go out of service causing downtime.<br>Tricky at the same time easy question.",
          "upvote_count": "17",
          "selected_answers": ""
        },
        {
          "id": 327784,
          "date": "Sun 26 Sep 2021 08:44",
          "username": "Jaypdv",
          "content": "BD.  Answer",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 619966,
          "date": "Tue 21 Jun 2022 18:54",
          "username": "sachin",
          "content": "My take B and D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594613,
          "date": "Fri 29 Apr 2022 19:19",
          "username": "novice_expert",
          "content": "B.  Subscribe to an RDS event subscription and configure it to use an Amazon SNS topic to send notifications.<br>D.  Configure Amazon CloudWatch alarms on various metrics, such as FreeStorageSpace for the RDS instance.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 561159,
          "date": "Sat 05 Mar 2022 04:52",
          "username": "RotterDam",
          "content": "BD is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 555547,
          "date": "Thu 24 Feb 2022 21:55",
          "username": "tugboat",
          "content": "Valid options",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 394518,
          "date": "Tue 26 Oct 2021 20:47",
          "username": "DuetRichardjoveRotterDam",
          "content": "A, D is answer<br>A -> configuration changes (Cloud trail can be used to detect api calls associated with any db change)<br>D -> cause database downtime (CloudWatch metrics)A is sending notifications for every single API call logged in AWS CloudTrail. You don't want to do that :)No for two reasons<br>1) Getting Cloudtrail for every event<br>2) You wont be alerted to Alarms on things like Lowdatabase storage space etc",
          "upvote_count": "131",
          "selected_answers": ""
        },
        {
          "id": 486245,
          "date": "Wed 24 Nov 2021 21:47",
          "username": "jove",
          "content": "A is sending notifications for every single API call logged in AWS CloudTrail. You don't want to do that :)",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 561158,
          "date": "Sat 05 Mar 2022 04:51",
          "username": "RotterDam",
          "content": "No for two reasons<br>1) Getting Cloudtrail for every event<br>2) You wont be alerted to Alarms on things like Lowdatabase storage space etc",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 360680,
          "date": "Sat 16 Oct 2021 21:30",
          "username": "Aesthet",
          "content": "DB final answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 327755,
          "date": "Thu 23 Sep 2021 21:34",
          "username": "novak18agrawalachin",
          "content": "Shouldn't the answer be, A & B?<br><br>https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/WhatIsCloudWatchEvents.html<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.htmlA is incorrect. We don't need notification on every API call logged.",
          "upvote_count": "25",
          "selected_answers": ""
        },
        {
          "id": 344339,
          "date": "Tue 12 Oct 2021 20:00",
          "username": "agrawalachin",
          "content": "A is incorrect. We don't need notification on every API call logged.",
          "upvote_count": "5",
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
      "question_text": "<p>A large company has a variety of Amazon DB clusters. Each of these clusters has various configurations that adhere to various requirements. Depending on the team and use case, these configurations can be organized into broader categories.<br>A database administrator wants to make the process of storing and modifying these parameters more systematic. The database administrator also wants to ensure that changes to individual categories of configurations are automatically applied to all instances when required.<br>Which AWS service or feature will help automate and achieve this objective?<br></p>",
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
              "choice": "<p>C. AWS Config<br></p>",
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
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 120 discussion",
      "discusstion": [
        {
          "id": 360959,
          "date": "Thu 14 Oct 2021 15:42",
          "username": "Huy",
          "content": "In AWS, DB Configurations are stored in DB Parameter Group. So B",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 626702,
          "date": "Sun 03 Jul 2022 21:09",
          "username": "elf78",
          "content": "DB Parameter Group",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 625580,
          "date": "Fri 01 Jul 2022 07:20",
          "username": "sachindb2luwdbadb2luwdba",
          "content": "My take is on A. <br>Certain paramters are only applied to certain instances ,, so different Parameter Group for different dbs.<br>On top DBA want to make sure certain configuration are applied commanly to all instance .<br>This can only be done though parameter store which can be implemented using Cloud Formation template.<br><br>Parameter Store, a capability of AWS Systems Manager, provides secure, hierarchical storage for configuration data management and secrets management. You can store data such as passwords, database strings, Amazon Machine Image (AMI) IDs, and license codes as parameter values. You can store values as plain text or encrypted data. You can reference Systems Manager parameters in your scripts, commands, SSM documents, and configuration and automation workflows by using the unique name that you specified when you created the parameter.Parameter hierarchies will ensure that configuration is properly categorized into wider groups and users.<br>The following example uses three hierarchy levels in the name to identify the following:<br><br>/Environment/Type of computer/Application/Data<br><br>/Dev/DBServer/MySQL/db-string13So i believe Parameter store is correct.",
          "upvote_count": "112",
          "selected_answers": ""
        },
        {
          "id": 630288,
          "date": "Tue 12 Jul 2022 06:43",
          "username": "db2luwdbadb2luwdba",
          "content": "Parameter hierarchies will ensure that configuration is properly categorized into wider groups and users.<br>The following example uses three hierarchy levels in the name to identify the following:<br><br>/Environment/Type of computer/Application/Data<br><br>/Dev/DBServer/MySQL/db-string13So i believe Parameter store is correct.",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 630289,
          "date": "Tue 12 Jul 2022 06:45",
          "username": "db2luwdba",
          "content": "So i believe Parameter store is correct.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 609794,
          "date": "Tue 31 May 2022 17:41",
          "username": "Dantas",
          "content": "B, https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 595099,
          "date": "Sat 30 Apr 2022 17:01",
          "username": "novice_expert",
          "content": "Organizations create Standard Parameter Groups (for RDS) and Cluster/DB level Parameter Groups (for Aurora). These settings are applied uniformly across all instances implementing them.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 562570,
          "date": "Mon 07 Mar 2022 12:33",
          "username": "RotterDam",
          "content": "Got this question in my exam. (i cleared it). B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 561613,
          "date": "Sat 05 Mar 2022 21:03",
          "username": "RotterDam",
          "content": "Organizations create Standard Parameter Groups (for RDS) and Cluster/DB level Parameter Groups (forAurora).These settings are applied uniformly across all instances implementing them.<br><br>Also For people choosing System Manager Parameter Store - the SSM does not integrate with RDS.<br><br>You can use Parameter Store parameters with other Systems Manager capabilities and AWS services to retrieve secrets and configuration data from a central store. Parameters work with Systems Manager capabilities such as Run Command, Automation, and State Manager, capabilities of AWS Systems Manager. You can also reference parameters in a number of other AWS services, including the following:<br>Amazon Elastic Compute Cloud (Amazon EC2)<br>Amazon Elastic Container Service (Amazon ECS)<br>AWS Secrets Manager<br>AWS Lambda<br>AWS CloudFormation<br>AWS CodeBuild<br>AWS CodePipeline<br>AWS CodeDeploy",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 557633,
          "date": "Sun 27 Feb 2022 22:22",
          "username": "user0001",
          "content": "I vote for C since the requirement is to auto implement and validation.<br>B is good but it work at instance level and admin will need to manage them seperatly",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 538959,
          "date": "Wed 02 Feb 2022 17:47",
          "username": "thelad",
          "content": "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html<br>Who should use Parameter Store? - Any AWS customer who wants to have a centralized way to manage configuration data.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 507318,
          "date": "Wed 22 Dec 2021 20:17",
          "username": "joveRotterDam",
          "content": "\\\"... changes to are automatically implemented to all instances as necessary\\\"..Can you use AWS Systems Manager Parameter Store for that? I don't think so. So, the correct answer should be B (DB parameter group)Iagree- unless they are talking about CLOUDFORMATION and building Clusters and storing parameters centrally - thismight make sense...I feel its PG.",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 561606,
          "date": "Sat 05 Mar 2022 20:56",
          "username": "RotterDam",
          "content": "Iagree- unless they are talking about CLOUDFORMATION and building Clusters and storing parameters centrally - thismight make sense...I feel its PG.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 497941,
          "date": "Thu 09 Dec 2021 18:40",
          "username": "2025flakyt",
          "content": "B is the correct answer<br>Database parameters specify how the database is configured. For example, database parameters can specify the amount of resources, such as memory, to allocate to a database.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 496028,
          "date": "Tue 07 Dec 2021 14:08",
          "username": "GMartinelli",
          "content": "Option A",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 488236,
          "date": "Sat 27 Nov 2021 16:20",
          "username": "Sp230",
          "content": "A is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 449562,
          "date": "Sat 06 Nov 2021 07:49",
          "username": "Scunningham99",
          "content": "A DB parameter group acts as a container for engine configuration values that are applied to one or more DB instances. -- so ans is B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 446144,
          "date": "Sun 31 Oct 2021 03:38",
          "username": "guru_ji",
          "content": "I got this Question in exam.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 433787,
          "date": "Tue 26 Oct 2021 10:51",
          "username": "ChauPhanChauPhan",
          "content": "A database administrator wants to make the process of storing and modifying these parameters more systematic. The database administrator also wants to ensure that changes to individual categories of configurations are automatically applied to all instances when required.<br>I go with B, create DB parameter group for each cluster. When you assign this group to DB and reboot DB in maintenance window, the relevant config will be applied.I changed my mind. \\\"Depending on the team and use case, these configurations can be organized into broader categories\\\". DB group can't adapt with team and use case, it bases on only one cluster. I'll go with A",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 433791,
          "date": "Thu 28 Oct 2021 02:20",
          "username": "ChauPhan",
          "content": "I changed my mind. \\\"Depending on the team and use case, these configurations can be organized into broader categories\\\". DB group can't adapt with team and use case, it bases on only one cluster. I'll go with A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 430851,
          "date": "Sun 24 Oct 2021 05:50",
          "username": "pcpcpc888",
          "content": "When we think about A, how to apply Parameter Store's parameters to RDS' instances? through CloudFormation? and when talk about B, would the group apply \\\"automatically\\\"? I am not sure can we pick a group when we create a RDS, if yes, then B makes more sense.",
          "upvote_count": "1",
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
      "question_text": "<p>A company is developing a new web application. An AWS CloudFormation template was created as a part of the build process.<br>Recently, a change was made to an AWS::RDS::DBInstance resource in the template. The CharacterSetName property was changed to allow the application to process international text. A change set was generated using the new template, which indicated that the existing DB instance should be replaced during an upgrade.<br>What should a database specialist do to prevent data loss during the stack upgrade?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#121",
          "answers": [
            {
              "choice": "<p>A. Create a snapshot of the DB instance. Modify the template to add the DBSnapshotIdentifier property with the ID of the DB snapshot. Update the stack.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the stack policy using the aws cloudformation update-stack command and the set-stack-policy command, then make the DB resource protected.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a snapshot of the DB instance. Update the stack. Restore the database to a new instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deactivate any applications that are using the DB instance. Create a snapshot of the DB instance. Modify the template to add the DBSnapshotIdentifier property with the ID of the DB snapshot. Update the stack and reactivate the applications.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 121 discussion",
      "discusstion": [
        {
          "id": 331200,
          "date": "Sat 09 Oct 2021 08:23",
          "username": "shantest1",
          "content": "D.  appears to be correct based on the URL listed.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 595087,
          "date": "Sat 30 Apr 2022 16:49",
          "username": "novice_expert",
          "content": "Deactivate any applications that are using the DB instance.<br>-> Create a snapshot of the DB instance.<br>-> Modify the template to add the DBSnapshotIdentifier property with the ID of the DB snapshot.<br>-> Update the stack<br>-> and reactivate the applications.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 561602,
          "date": "Sat 05 Mar 2022 20:51",
          "username": "RotterDam",
          "content": "D seems to the right answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 416037,
          "date": "Sun 24 Oct 2021 02:55",
          "username": "TonyGe",
          "content": "D. <br>To preserve your data, perform the following procedure:<br>1.Deactivate any applications that are using the DB instance so that there's no activity on the DB instance.<br>2.Create a snapshot of the DB instance. For more information about creating DB snapshots<br>3.If you want to restore your instance using a DB snapshot, modify the updated template with your DB instance changes and add the DBSnapshotIdentifier property with the ID of the DB snapshot that you want to use<br>4.Update the stack.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 409177,
          "date": "Sun 17 Oct 2021 06:28",
          "username": "Hits_23",
          "content": "Correct answer is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 360710,
          "date": "Wed 13 Oct 2021 15:00",
          "username": "Aesthet",
          "content": "D final answer",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#122",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company recently acquired a new business. A database specialist must migrate an unencrypted 12 TB Amazon RDS for MySQL DB instance to a new AWS account. The database specialist needs to minimize the amount of time required to migrate the database.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#122",
          "answers": [
            {
              "choice": "<p>A. Create a snapshot of the source DB instance in the source account. Share the snapshot with the destination account. In the target account, create a DB instance from the snapshot.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Resource Access Manager to share the source DB instance with the destination account. Create a DB instance in the destination account using the shared resource.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a read replica of the DB instance. Give the destination account access to the read replica. In the destination account, create a snapshot of the shared read replica and provision a new RDS for MySQL DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use mysqldump to back up the source database. Create an RDS for MySQL DB instance in the destination account. Use the mysql command to restore the backup in the destination database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 122 discussion",
      "discusstion": [
        {
          "id": 356903,
          "date": "Wed 06 Oct 2021 09:01",
          "username": "Zhongkai",
          "content": "Sharing an unencrypted manual DB snapshot enables authorized AWS accounts to directly restore a DB instance from the snapshot instead of taking a copy of it and restoring from that.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ShareSnapshot.html<br>However Resource Access Manager could not share non-Aurora cluster.<br>https://docs.aws.amazon.com/ram/latest/userguide/shareable.html<br>Hence I will go with A. ",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 619933,
          "date": "Tue 21 Jun 2022 18:08",
          "username": "sachin",
          "content": "A is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594571,
          "date": "Fri 29 Apr 2022 17:55",
          "username": "novice_expert",
          "content": "create snapshot -> share with destination account -> copy -> create instance from snapshot",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 565977,
          "date": "Sat 12 Mar 2022 09:05",
          "username": "Dantas",
          "content": "A -> The database professional must keep the migration time to a minimum.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 561012,
          "date": "Fri 04 Mar 2022 21:01",
          "username": "RotterDam",
          "content": "A but the answer choice is insufficient. With just this you will see a downtime. You need binlog replication for minimal downtime (or DMS)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 557335,
          "date": "Sun 27 Feb 2022 14:04",
          "username": "user0001",
          "content": "answer a",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 510146,
          "date": "Mon 27 Dec 2021 09:46",
          "username": "Shunpin",
          "content": "Ans: A<br>Mysqldump is too slow. If mysqlpump, I might consider this.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 476895,
          "date": "Fri 12 Nov 2021 12:34",
          "username": "toppic26",
          "content": "12 TB dump meaningless and slow, then you need to share? Answer is A. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 433804,
          "date": "Mon 18 Oct 2021 07:47",
          "username": "ChauPhan",
          "content": "A and D both are both but I think A is faster than D.  mysqldump for 12T data is nearly impossible.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 360713,
          "date": "Sat 16 Oct 2021 15:55",
          "username": "Aesthet",
          "content": "A final answer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 354144,
          "date": "Tue 05 Oct 2021 03:15",
          "username": "AM",
          "content": "B looks good to me. Criteria is minimize migration time. 12TB snapshot will also take time.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 342323,
          "date": "Sat 25 Sep 2021 03:41",
          "username": "manan728",
          "content": "A is correct even though it is missing a crucial step of copying the snapshot in the target account. Simply sharing isn't sufficient.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 331201,
          "date": "Sun 19 Sep 2021 21:12",
          "username": "shantest1",
          "content": "A.  snapshot is faster than the backup.<br><br>A appears to be the answer.",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#123",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has applications running on Amazon EC2 instances in a private subnet with no internet connectivity. The company deployed a new application that uses Amazon DynamoDB, but the application cannot connect to the DynamoDB tables. A developer already checked that all permissions are set correctly.<br>What should a database specialist do to resolve this issue while minimizing access to external resources?<br></p>",
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
              "choice": "<p>A. Add a route to an internet gateway in the subnet's route table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a route to a NAT gateway in the subnet's route table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Assign a new security group to the EC2 instances with an outbound rule to ports 80 and 443.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a VPC endpoint for DynamoDB and add a route to the endpoint in the subnet's route table.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 123 discussion",
      "discusstion": [
        {
          "id": 595233,
          "date": "Sat 30 Apr 2022 21:31",
          "username": "novice_expert",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html<br>D.  Create a VPC endpoint for DynamoDB -> add this endpoint in the subnet's route table.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 562579,
          "date": "Mon 07 Mar 2022 12:47",
          "username": "RotterDam",
          "content": "Got this question in my exam. (i cleared it). D is correct",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 508137,
          "date": "Thu 23 Dec 2021 22:14",
          "username": "jove",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 433806,
          "date": "Sun 24 Oct 2021 08:11",
          "username": "ChauPhan",
          "content": "D.  Create a VPC endpoint for DynamoDB",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 360715,
          "date": "Thu 21 Oct 2021 04:06",
          "username": "Aesthet",
          "content": "D final answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 356923,
          "date": "Sun 17 Oct 2021 05:19",
          "username": "Aesthet",
          "content": "agree with D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 342324,
          "date": "Tue 12 Oct 2021 00:56",
          "username": "manan728",
          "content": "Yes D is right. You need a VPC endpoint in this case.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 327791,
          "date": "Thu 07 Oct 2021 12:07",
          "username": "Jaypdv",
          "content": "D.  Answer",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#124",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>The Amazon CloudWatch metric for FreeLocalStorage on an Amazon Aurora MySQL DB instance shows that the amount of local storage is below 10 MB.  A database engineer must increase the local storage available in the Aurora DB instance.<br>How should the database engineer meet this requirement?<br></p>",
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
              "choice": "<p>A. Modify the DB instance to use an instance class that provides more local SSD storage.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the Aurora DB cluster to enable automatic volume resizing.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Increase the local storage by upgrading the database engine version.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the DB instance and configure the required storage volume in the configuration section.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 124 discussion",
      "discusstion": [
        {
          "id": 327075,
          "date": "Tue 21 Sep 2021 09:39",
          "username": "shantest1shantest1",
          "content": "A.  answerLocal storage is the key here. Not the Database storage.",
          "upvote_count": "72",
          "selected_answers": ""
        },
        {
          "id": 331203,
          "date": "Wed 22 Sep 2021 16:41",
          "username": "shantest1",
          "content": "Local storage is the key here. Not the Database storage.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 609747,
          "date": "Tue 31 May 2022 15:35",
          "username": "Dantas",
          "content": "A, for local storage.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 595071,
          "date": "Sat 30 Apr 2022 16:17",
          "username": "novice_expert",
          "content": "change to instance class that provides more local SSD storage.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/aurora-mysql-local-storage/<br><br>Local storage for each Aurora instance in the cluster, based on the instance class. This storage type and size is bound to the instance class, and can be changed only by moving to a larger DB instance class.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 555738,
          "date": "Fri 25 Feb 2022 04:40",
          "username": "kped21",
          "content": "A<br>You can increase the amount of free storage space for an instance by choosing a larger DB instance class for your instance.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 496001,
          "date": "Tue 07 Dec 2021 13:51",
          "username": "GMartinelli",
          "content": "Option A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 360718,
          "date": "Thu 07 Oct 2021 21:52",
          "username": "Aesthet",
          "content": "A final answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 356910,
          "date": "Thu 30 Sep 2021 21:06",
          "username": "Zhongkaigelsm",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.AuroraMySQL.Monitoring.Metrics.html - A\\\"The amount of local storage available.<br><br>Unlike for other DB engines, for Aurora DB instances this metric reports the amount of storage available to each DB instance. This value depends on the DB instance class (for pricing information, see the Amazon RDS product page). You can increase the amount of free storage space for an instance by choosing a larger DB instance class for your instance.\\\"",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 414975,
          "date": "Wed 03 Nov 2021 13:12",
          "username": "gelsm",
          "content": "\\\"The amount of local storage available.<br><br>Unlike for other DB engines, for Aurora DB instances this metric reports the amount of storage available to each DB instance. This value depends on the DB instance class (for pricing information, see the Amazon RDS product page). You can increase the amount of free storage space for an instance by choosing a larger DB instance class for your instance.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 343405,
          "date": "Sun 26 Sep 2021 19:45",
          "username": "manan728",
          "content": "Also I could remember a question on tier-0 vs tier-1 priority on Aurora, basically asking how to reduce failover time: if both master and replica are tier-0 or both master and replica should be tier-1.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 342407,
          "date": "Thu 23 Sep 2021 18:35",
          "username": "swarndeep",
          "content": "Answer A",
          "upvote_count": "1",
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
      "question_text": "<p>A company has an ecommerce web application with an Amazon RDS for MySQL DB instance. The marketing team has noticed some unexpected updates to the product and pricing information on the website, which is impacting sales targets. The marketing team wants a database specialist to audit future database activity to help identify how and when the changes are being made.<br>What should the database specialist do to meet these requirements? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#125",
          "answers": [
            {
              "choice": "<p>A. Create an RDS event subscription to the audit event type.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable auditing of CONNECT and QUERY_DML events.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. SSH to the DB instance and review the database logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Publish the database logs to Amazon CloudWatch Logs.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable Enhanced Monitoring on the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 125 discussion",
      "discusstion": [
        {
          "id": 326755,
          "date": "Tue 28 Sep 2021 06:44",
          "username": "shantest1gelsm",
          "content": "B and Dhttps://aws.amazon.com/blogs/database/configuring-an-audit-log-to-capture-database-activities-for-amazon-rds-for-mysql-and-amazon-aurora-with-mysql-compatibility/",
          "upvote_count": "113",
          "selected_answers": ""
        },
        {
          "id": 415034,
          "date": "Mon 25 Oct 2021 23:43",
          "username": "gelsm",
          "content": "https://aws.amazon.com/blogs/database/configuring-an-audit-log-to-capture-database-activities-for-amazon-rds-for-mysql-and-amazon-aurora-with-mysql-compatibility/",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 603077,
          "date": "Wed 18 May 2022 01:28",
          "username": "praffuln",
          "content": "enabling server_audit_events to auditing of CONNECT AND QUERY_DML events.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 595036,
          "date": "Sat 30 Apr 2022 15:26",
          "username": "novice_expert",
          "content": "x A.  RDS event not helpful for DMLB.  Enable auditing of CONNECT and QUERY_DML events.<br>x C.  SSH not allowedD.  Publish the database logs to Amazon CloudWatch Logs.<br>x E.  Enhanced Monitoring for performance",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 561578,
          "date": "Sat 05 Mar 2022 19:42",
          "username": "RotterDam",
          "content": "B and D is correct. You ENABLE audit logging via MARIADB_AUDIT_PLUGIN. You then modify the rds instance > select theoption to export Audit Logs> this publishes it to Cloudwatch",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 492449,
          "date": "Thu 02 Dec 2021 13:21",
          "username": "GMartinelli",
          "content": "Option B, D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BD"
        },
        {
          "id": 360726,
          "date": "Thu 14 Oct 2021 15:51",
          "username": "Aesthet",
          "content": "BD final answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 344362,
          "date": "Mon 11 Oct 2021 17:50",
          "username": "agrawalachin",
          "content": "B & D are correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 342327,
          "date": "Sun 10 Oct 2021 14:16",
          "username": "manan728Justu",
          "content": "Why not A along with B?RDS Events are not for this, so right answer is B&D.  A is Incorrect:<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.overview.html",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 491403,
          "date": "Wed 01 Dec 2021 09:14",
          "username": "Justu",
          "content": "RDS Events are not for this, so right answer is B&D.  A is Incorrect:<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.overview.html",
          "upvote_count": "3",
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
      "question_text": "<p>A large gaming company is creating a centralized solution to store player session state for multiple online games. The workload required key-value storage with low latency and will be an equal mix of reads and writes. Data should be written into the AWS Region closest to the user across the games' geographically distributed user base. The architecture should minimize the amount of overhead required to manage the replication of data between Regions.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#126",
          "answers": [
            {
              "choice": "<p>A. Amazon RDS for MySQL with multi-Region read replicas<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon Aurora global database<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon RDS for Oracle with GoldenGate<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon DynamoDB global tables<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 126 discussion",
      "discusstion": [
        {
          "id": 329637,
          "date": "Thu 14 Oct 2021 11:34",
          "username": "shantest1",
          "content": "D.  Answer<br>Key Value pair - DynamoDB Global tables",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 639496,
          "date": "Sat 30 Jul 2022 08:03",
          "username": "sriexam",
          "content": "I see the answer is showing as A.  How is it justified for Key value Pair. Answer would be D.  Please provide reason for answers .. also that would be helpful",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 632373,
          "date": "Sat 16 Jul 2022 22:46",
          "username": "ejishammous",
          "content": "There is no Aurora global database, so the answer is DThere is",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 646240,
          "date": "Sat 13 Aug 2022 11:04",
          "username": "shammous",
          "content": "There is",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 613604,
          "date": "Thu 09 Jun 2022 05:00",
          "username": "niau",
          "content": "D.  DynamoDB for sure",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 594541,
          "date": "Fri 29 Apr 2022 17:11",
          "username": "novice_expert",
          "content": "Dynamo Global<br>https://aws.amazon.com/dynamodb/?nc1h_ls",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 554969,
          "date": "Thu 24 Feb 2022 01:15",
          "username": "tugboat",
          "content": "DynamoDB Global tables is obvious for Key Value pair",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 554926,
          "date": "Wed 23 Feb 2022 23:38",
          "username": "kped21",
          "content": "D, low latency and key-value",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 501482,
          "date": "Tue 14 Dec 2021 16:57",
          "username": "lmkjhigqysdfugshck",
          "content": "D.  Answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 495516,
          "date": "Tue 07 Dec 2021 02:41",
          "username": "akiraklaus",
          "content": "https://aws.amazon.com/dynamodb/?nc1h_ls<br>D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 476888,
          "date": "Fri 12 Nov 2021 12:17",
          "username": "toppic26",
          "content": "D.  Obviously not Mysql: Question: low-latency key-value storage. This is DynamoDB local writes.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 360727,
          "date": "Wed 03 Nov 2021 14:13",
          "username": "Aesthet",
          "content": "D final answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 343402,
          "date": "Mon 25 Oct 2021 22:38",
          "username": "manan728",
          "content": "Prepare on Aurora upgrades both minor and major versions. There were a few questions on the topic today at my actual test.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 327798,
          "date": "Wed 29 Sep 2021 15:43",
          "username": "JaypdvJiang_aws1",
          "content": "Answer is D. B.  could work, but the question specifically asks for a key-value store, hence DynamoDBB not work due to \\\"Aurora global database\\\" Replic DB is ready only",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 684983,
          "date": "Sun 02 Oct 2022 19:40",
          "username": "Jiang_aws1",
          "content": "B not work due to \\\"Aurora global database\\\" Replic DB is ready only",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 327769,
          "date": "Thu 23 Sep 2021 06:44",
          "username": "novak18",
          "content": "Since the question mentions key-value and also about gaming, I think the answer should be D in that case",
          "upvote_count": "1",
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
      "question_text": "<p>A company is running an on-premises application comprised of a web tier, an application tier, and a MySQL database tier. The database is used primarily during business hours with random activity peaks throughout the day. A database specialist needs to improve the availability and reduce the cost of the MySQL database tier as part of the company's migration to AWS.<br>Which MySQL database option would meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#127",
          "answers": [
            {
              "choice": "<p>A. Amazon RDS for MySQL with Multi-AZ<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon Aurora Serverless MySQL cluster<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon Aurora MySQL cluster<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon RDS for MySQL with read replica<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 127 discussion",
      "discusstion": [
        {
          "id": 326758,
          "date": "Tue 28 Sep 2021 18:26",
          "username": "shantest1guru_jiGMartinelliguru_jiuser0001",
          "content": "B.  Aurora Serverless<br><br>two requirements, reduce the cost and availability. Aurora Serverless is cheaper compared to Aurora clusterWhy not A ?<br><br> Amazon RDS for MySQL with Multi-AZThe question asks for minimal costs. Multi-AZ is super expensive, literaly double the price of single AZok.. B looks good.<br><br>***primarily during business hours with random activity peaks throughout the day***A only provide HA ad not cost effective",
          "upvote_count": "111212",
          "selected_answers": ""
        },
        {
          "id": 439903,
          "date": "Wed 20 Oct 2021 01:39",
          "username": "guru_jiGMartinelliguru_jiuser0001",
          "content": "Why not A ?<br><br> Amazon RDS for MySQL with Multi-AZThe question asks for minimal costs. Multi-AZ is super expensive, literaly double the price of single AZok.. B looks good.<br><br>***primarily during business hours with random activity peaks throughout the day***A only provide HA ad not cost effective",
          "upvote_count": "1212",
          "selected_answers": ""
        },
        {
          "id": 487383,
          "date": "Fri 26 Nov 2021 14:21",
          "username": "GMartinelli",
          "content": "The question asks for minimal costs. Multi-AZ is super expensive, literaly double the price of single AZ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 439906,
          "date": "Wed 20 Oct 2021 20:31",
          "username": "guru_ji",
          "content": "ok.. B looks good.<br><br>***primarily during business hours with random activity peaks throughout the day***",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 557420,
          "date": "Sun 27 Feb 2022 16:53",
          "username": "user0001",
          "content": "A only provide HA ad not cost effective",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 497282,
          "date": "Thu 09 Dec 2021 03:24",
          "username": "2025flakyt",
          "content": "B is correct<br>Amazon Aurora Serverless v1 is a simple, cost-effective option for infrequent, intermittent, or unpredictable workloads.<br>https://aws.amazon.com/rds/aurora/serverless/",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 675651,
          "date": "Thu 22 Sep 2022 03:32",
          "username": "Jiang_aws1",
          "content": "\\\"MySQL database tier as part of the company's migration to AWS\\\" so we need to keep \\\"tier\\\" for DB-host so we can't use Serverless . \\\"C\\\" is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 594723,
          "date": "Sat 30 Apr 2022 01:27",
          "username": "novice_expert",
          "content": "accessed during business hours, with occasional bursts of activity throughout the day<br>increase the availability and minimize the cost",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 555602,
          "date": "Thu 24 Feb 2022 23:13",
          "username": "tugboat",
          "content": "B for occasional queries and minimal cost",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 548556,
          "date": "Wed 16 Feb 2022 13:34",
          "username": "yahooos",
          "content": "B<br>Aurora Serverless MySQL cluster",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 470668,
          "date": "Wed 27 Oct 2021 14:51",
          "username": "Nots",
          "content": "Considering the use cases described below, it is assumed that there is little traffic in the case of production use.<br>Also, since V2 is currently in preview, it cannot be expected to be in production.<br>Considering these, the Aurora DB cluster is considered to be a candidate, although the cost is higher than that of serverless.<br>https://aws.amazon.com/rds/aurora/serverless/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 433831,
          "date": "Tue 05 Oct 2021 22:34",
          "username": "ChauPhan",
          "content": "B.  Aurora Serverless",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 360730,
          "date": "Sun 03 Oct 2021 00:11",
          "username": "Aesthet",
          "content": "B final answer",
          "upvote_count": "2",
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
      "question_text": "<p>A company wants to migrate its Microsoft SQL Server Enterprise Edition database instance from on-premises to AWS. A deep review is performed and the AWS<br>Schema Conversion Tool (AWS SCT) provides options for running this workload on Amazon RDS for SQL Server Enterprise Edition, Amazon RDS for SQL Server<br>Standard Edition, Amazon Aurora MySQL, and Amazon Aurora PostgreSQL. The company does not want to use its own SQL server license and does not want to change from Microsoft SQL Server.<br>What is the MOST cost-effective and operationally efficient solution?<br></p>",
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
              "choice": "<p>A. Run SQL Server Enterprise Edition on Amazon EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Run SQL Server Standard Edition on Amazon RDS.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Run SQL Server Enterprise Edition on Amazon RDS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Run Amazon Aurora MySQL leveraging SQL Server on Linux compatibility libraries.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 128 discussion",
      "discusstion": [
        {
          "id": 328513,
          "date": "Sat 09 Oct 2021 14:41",
          "username": "Jaypdvshantest1",
          "content": "B. <br>SCT assessment says that you can use MSSQL standard edition. Since they want to stay on SQL Server, that's the cheapest option and migrating is operationally easyre-read that part, Standard Edition looks suffice.B.  Answer.",
          "upvote_count": "112",
          "selected_answers": ""
        },
        {
          "id": 329644,
          "date": "Sun 17 Oct 2021 02:04",
          "username": "shantest1",
          "content": "re-read that part, Standard Edition looks suffice.B.  Answer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 595640,
          "date": "Sun 01 May 2022 17:17",
          "username": "novice_expert",
          "content": "B.  Run SQL Server Standard Edition on Amazon RDS.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 508868,
          "date": "Fri 24 Dec 2021 22:12",
          "username": "jove",
          "content": "OPERATIONALLY EFFECTIVESQL Server on RDS<br>MOST COST-EFFECTIVEStandard Edition",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 438005,
          "date": "Thu 04 Nov 2021 19:59",
          "username": "grekh001",
          "content": "This link seems to indicate that more information is required to determine if the Enterprise instance is a candidate for downgrading to Standard.<br>https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/determine-whether-your-microsoft-sql-server-database-can-be-downgraded-from-enterprise-to-standard-edition.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 398561,
          "date": "Sat 30 Oct 2021 14:13",
          "username": "sbhujbalExtHo",
          "content": "When Enterprise license is included in RDS price at FREE why to go to standard edition and loose all great features so Option C is correct.Try to calculate price Enterprise will cost you almost double for same specification<br>https://calculator.aws/#/createCalculator/RDSSQLServer",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 406134,
          "date": "Tue 02 Nov 2021 04:21",
          "username": "ExtHo",
          "content": "Try to calculate price Enterprise will cost you almost double for same specification<br>https://calculator.aws/#/createCalculator/RDSSQLServer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 360732,
          "date": "Sun 17 Oct 2021 15:00",
          "username": "Aesthet",
          "content": "B final answer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 356932,
          "date": "Sun 17 Oct 2021 09:21",
          "username": "Zhongkai",
          "content": "I will go with C as Standard Edition is not operationally efficient as Enterprise Edition. Check https://docs.microsoft.com/en-us/sql/sql-server/editions-and-components-of-sql-server-2017?viewsql-server-ver15",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 326760,
          "date": "Mon 04 Oct 2021 02:20",
          "username": "shantest1Suresh108",
          "content": "C.  Run SQL Server Enterprise Edition on AWS RDS<br><br>License is included with the RDS price<br>Need Enterprise to Enterprise edition matching.<br>On EC2 you will use your own license.if standard edition is sufficient for the DB why to go for Enterprise edition and pay more??<br>i think B is right",
          "upvote_count": "32",
          "selected_answers": ""
        },
        {
          "id": 380620,
          "date": "Mon 25 Oct 2021 01:39",
          "username": "Suresh108",
          "content": "if standard edition is sufficient for the DB why to go for Enterprise edition and pay more??<br>i think B is right",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#129",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's ecommerce website uses Amazon DynamoDB for purchase orders. Each order is made up of a Customer ID and an Order ID.  The DynamoDB table uses the Customer ID as the partition key and the Order ID as the sort key.<br>To meet a new requirement, the company also wants the ability to query the table by using a third attribute named Invoice ID.  Queries using the Invoice ID must be strongly consistent. A database specialist must provide this capability with optimal performance and minimal overhead.<br>What should the database administrator do to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#129",
          "answers": [
            {
              "choice": "<p>A. Add a global secondary index on Invoice ID to the existing table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a local secondary index on Invoice ID to the existing table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Recreate the table by using the latest snapshot while adding a local secondary index on Invoice ID. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the partition key and a FilterExpression parameter with a filter on Invoice ID for all queries.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 129 discussion",
      "discusstion": [
        {
          "id": 327080,
          "date": "Wed 06 Oct 2021 11:09",
          "username": "shantest1",
          "content": "C.  Answer",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 594797,
          "date": "Sat 30 Apr 2022 04:09",
          "username": "novice_expert",
          "content": "Queries that make use of the Invoice ID must be very consistent > recreate table, as Local secondary index can only be created while creating the Dynamodb table.<br><br>global secondary indexes are eventual consistent only",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 490599,
          "date": "Tue 30 Nov 2021 11:45",
          "username": "GMartinelli",
          "content": "Option C",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 490303,
          "date": "Tue 30 Nov 2021 01:53",
          "username": "jove",
          "content": "Answer is C ;<br>- It has to be a local secondary index<br>- Secondary indexes can only be created when the table is created.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 433846,
          "date": "Fri 29 Oct 2021 00:55",
          "username": "ChauPhanfaramawi",
          "content": "Why not A?. https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.htmlAccording to below link \\\"Strongly consistent reads are not supported on global secondary indexes\\\" https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 448007,
          "date": "Mon 01 Nov 2021 11:56",
          "username": "faramawi",
          "content": "According to below link \\\"Strongly consistent reads are not supported on global secondary indexes\\\" https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 409183,
          "date": "Sun 24 Oct 2021 10:59",
          "username": "Hits_23",
          "content": "C is correct, as Local secondary index can only be created while creating the Dynamodb table.and query needs to use third attribute on top of primary and sort key, so Local Secondary index has primary and sort key as well as the third attribute. Global secondary index can be created without primary and sort key",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 380622,
          "date": "Thu 21 Oct 2021 23:21",
          "username": "Suresh108",
          "content": "cccccc",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 361573,
          "date": "Fri 15 Oct 2021 04:26",
          "username": "Aesthet",
          "content": "C final answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 344729,
          "date": "Sun 10 Oct 2021 03:57",
          "username": "db_interest",
          "content": "C is correct. Local indexes provide strong consistency and cannot be created on existing tables.",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#130",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to migrate its on-premises MySQL databases to Amazon RDS for MySQL. To comply with the company's security policy, all databases must be encrypted at rest. RDS DB instance snapshots must also be shared across various accounts to provision testing and staging environments.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#130",
          "answers": [
            {
              "choice": "<p>A. Create an RDS for MySQL DB instance with an AWS Key Management Service (AWS KMS) customer managed CMK. Update the key policy to include the Amazon Resource Name (ARN) of the other AWS accounts as a principal, and then allow the kms:CreateGrant action.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an RDS for MySQL DB instance with an AWS managed CMK. Create a new key policy to include the Amazon Resource Name (ARN) of the other AWS accounts as a principal, and then allow the kms:CreateGrant action.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an RDS for MySQL DB instance with an AWS owned CMK. Create a new key policy to include the administrator user name of the other AWS accounts as a principal, and then allow the kms:CreateGrant action.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an RDS for MySQL DB instance with an AWS CloudHSM key. Update the key policy to include the Amazon Resource Name (ARN) of the other AWS accounts as a principal, and then allow the kms:CreateGrant action.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 130 discussion",
      "discusstion": [
        {
          "id": 356943,
          "date": "Thu 23 Sep 2021 17:03",
          "username": "Zhongkai",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ShareSnapshot.html - A",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 594727,
          "date": "Sat 30 Apr 2022 01:35",
          "username": "novice_expert",
          "content": "-Need customer managed CMK for sharing (B and C are out), C is also out for administrator user<br>- AWS CloudHSM key is alsoAWS generated (D is out)<br>- policy update to include ARN of other AWS accounts as principal<br>- CreateGrant action",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 567254,
          "date": "Mon 14 Mar 2022 00:41",
          "username": "Dantas",
          "content": "A!<br><br>You can't share a snapshot that has been encrypted using the default KMS key of the AWS account that shared the snapshot, therefore it must be encrypted with a customer managed key. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ShareSnapshot.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 562564,
          "date": "Mon 07 Mar 2022 12:24",
          "username": "RotterDam",
          "content": "Got this question in my exam. (i cleared it). A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 555686,
          "date": "Fri 25 Feb 2022 02:51",
          "username": "kped21",
          "content": "A: To allow another AWS account access to a KMS key, update the key policy for the KMS key. You update it with the Amazon Resource Name (ARN) of the AWS account that you are sharing to as Principal in the KMS key policy. Then you allow the kms:CreateGrant action.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 555603,
          "date": "Thu 24 Feb 2022 23:15",
          "username": "tugboat",
          "content": "KMS managed CMK",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 488472,
          "date": "Sat 27 Nov 2021 20:53",
          "username": "jove",
          "content": "CMK is needed for data share and you just need to update the key policy.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 433896,
          "date": "Sat 16 Oct 2021 13:04",
          "username": "ChauPhan",
          "content": "Agree with A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 361578,
          "date": "Sun 10 Oct 2021 19:00",
          "username": "Aesthet",
          "content": "A final answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 331915,
          "date": "Sun 19 Sep 2021 20:40",
          "username": "shantest1",
          "content": "A.  Answer<br>Key to the answer CMK - Customer managed Key - If I am not wrong",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#131",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company manages a web application that stores data in an Amazon DynamoDB table. The company is undergoing account consolidation efforts. A database engineer needs to migrate the DynamoDB table from the current AWS account to a new AWS account.<br>Which strategy meets these requirements with the LEAST amount of administrative work?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#131",
          "answers": [
            {
              "choice": "<p>A. Use AWS Glue to crawl the data in the DynamoDB table. Create a job using an available blueprint to export the data to Amazon S3. Import the data from the S3 file to a DynamoDB table in the new account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function to scan the items of the DynamoDB table in the current account and write to a file in Amazon S3. Create another Lambda function to read the S3 file and restore the items of a DynamoDB table in the new account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS Data Pipeline in the current account to export the data from the DynamoDB table to a file in Amazon S3. Use Data Pipeline to import the data from the S3 file to a DynamoDB table in the new account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure Amazon DynamoDB Streams for the DynamoDB table in the current account. Create an AWS Lambda function to read from the stream and write to a file in Amazon S3. Create another Lambda function to read the S3 file and restore the items to a DynamoDB table in the new account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 131 discussion",
      "discusstion": [
        {
          "id": 327773,
          "date": "Wed 22 Sep 2021 12:14",
          "username": "novak18DevoteamAnalytix",
          "content": "I think the answer is C<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/dynamodb-cross-account-migration/For me it is A because it seems to be easier with Glue than Data Pipeline (\\\"with the MINIMUM amount of administrative work\\\")<br>GLUE: https://aws.amazon.com/de/premiumsupport/knowledge-center/dynamodb-cross-account-migration/<br>DATA PIPELINE: https://aws.amazon.com/de/premiumsupport/knowledge-center/data-pipeline-account-access-dynamodb-s3/",
          "upvote_count": "81",
          "selected_answers": ""
        },
        {
          "id": 628382,
          "date": "Thu 07 Jul 2022 16:26",
          "username": "DevoteamAnalytix",
          "content": "For me it is A because it seems to be easier with Glue than Data Pipeline (\\\"with the MINIMUM amount of administrative work\\\")<br>GLUE: https://aws.amazon.com/de/premiumsupport/knowledge-center/dynamodb-cross-account-migration/<br>DATA PIPELINE: https://aws.amazon.com/de/premiumsupport/knowledge-center/data-pipeline-account-access-dynamodb-s3/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 752545,
          "date": "Wed 21 Dec 2022 17:00",
          "username": "jjyy80",
          "content": "DATAPIEPLINE is the correct one \\\"Note: The destination account can't access the DynamoDB data in S3 bucket. To work with the data, restore it to a DynamoDB table. Data Pipeline provides the easiest method to move the table with the least manual effort. However, there are fewer options for customization.\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595222,
          "date": "Sat 30 Apr 2022 21:08",
          "username": "novice_expert",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/dynamodb-cross-account-migration/<br><br>export dynamoDB to S3 in other account -> use Glue job (or data pipeline or EMR) to import data<br>C.  Use AWS Data Pipeline in the current account to export the data from the DynamoDB table to a file in Amazon S3. Use Data Pipeline to import the data from the S3 file to a DynamoDB table in the new account.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 482050,
          "date": "Fri 19 Nov 2021 20:49",
          "username": "johnconnor",
          "content": "Why not A? being glue serverless wouldn't it be easier to do this way?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 433904,
          "date": "Sat 30 Oct 2021 04:10",
          "username": "ChauPhan",
          "content": "Agree with C, LEAST amount of work.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 376318,
          "date": "Wed 27 Oct 2021 06:56",
          "username": "AM",
          "content": "I agree with C and also that the question is a bit ambigupus",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 361581,
          "date": "Sat 16 Oct 2021 18:09",
          "username": "Aesthet",
          "content": "C<br>https://aws.amazon.com/premiumsupport/knowledge-center/data-pipeline-account-access-dynamodb-s3/",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 342566,
          "date": "Tue 12 Oct 2021 11:47",
          "username": "manan728",
          "content": "A seems to be the answer.<br>https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-dynamo-db-cross-account.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 328520,
          "date": "Sun 10 Oct 2021 04:52",
          "username": "Jaypdv",
          "content": "I would go for C.  but I feel the question is ambiguous.",
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
      "question_text": "<p>A company uses the Amazon DynamoDB table contractDB in us-east-1 for its contract system with the following schema: orderID (primary key) timestamp (sort key) contract (map) createdBy (string) customerEmail (string)<br>After a problem in production, the operations team has asked a database specialist to provide an IAM policy to read items from the database to debug the application. In addition, the developer is not allowed to access the value of the customerEmail field to stay compliant.<br>Which IAM policy should the database specialist use to achieve these requirements?A. <br><img src=\"https://www.examtopics.com/assets/media/exam-media/04237/0008100001.png\" class=\"in-exam-image\">B. <br><img src=\"https://www.examtopics.com/assets/media/exam-media/04237/0008200001.png\" class=\"in-exam-image\">C. <br><img src=\"https://www.examtopics.com/assets/media/exam-media/04237/0008300001.png\" class=\"in-exam-image\">D. <br><img src=\"https://www.examtopics.com/assets/media/exam-media/04237/0008400001.png\" class=\"in-exam-image\"><br></p>",
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
          "answers": []
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 132 discussion",
      "discusstion": [
        {
          "id": 328522,
          "date": "Mon 04 Oct 2021 08:58",
          "username": "Jaypdv",
          "content": "A.  Answer",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 595657,
          "date": "Sun 01 May 2022 18:17",
          "username": "novice_expert",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html<br><br>You use the IAM Condition element to implement a fine-grained access control policy.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 390908,
          "date": "Wed 03 Nov 2021 21:55",
          "username": "learnazureportal",
          "content": "The correct answer is A.  you have access to all columns except CustomerEmail!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 361583,
          "date": "Sat 30 Oct 2021 07:27",
          "username": "Aesthet",
          "content": "A final answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 360977,
          "date": "Sun 17 Oct 2021 04:27",
          "username": "Huy",
          "content": "A. <br>C would be correct if using ForAnyValue instead of ForAllValues",
          "upvote_count": "2",
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
      "question_text": "<p>A company has an application that uses an Amazon DynamoDB table to store user data. Every morning, a single-threaded process calls the DynamoDB API Scan operation to scan the entire table and generate a critical start-of-day report for management. A successful marketing campaign recently doubled the number of items in the table, and now the process takes too long to run and the report is not generated in time.<br>A database specialist needs to improve the performance of the process. The database specialist notes that, when the process is running, 15% of the table's provisioned read capacity units (RCUs) are being used.<br>What should the database specialist do?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#133",
          "answers": [
            {
              "choice": "<p>A. Enable auto scaling for the DynamoDB table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use four threads and parallel DynamoDB API Scan operations.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Double the table's provisioned RCUs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set the Limit and Offset parameters before every call to the API.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 133 discussion",
      "discusstion": [
        {
          "id": 328527,
          "date": "Sat 16 Oct 2021 21:47",
          "username": "Jaypdv",
          "content": "B. <br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 630554,
          "date": "Tue 12 Jul 2022 15:27",
          "username": "db2luwdba",
          "content": "B make sense but this has to done programmatically by the application team to process read by multi threaded application calls",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594049,
          "date": "Thu 28 Apr 2022 22:54",
          "username": "novice_expert",
          "content": "15% means max 6 threads possible, 4 are good",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 433911,
          "date": "Fri 29 Oct 2021 18:07",
          "username": "ChauPhan",
          "content": "Every morning, a single-threaded process calls the DynamoDB API Scan operation to scan the entire table > B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 361584,
          "date": "Thu 21 Oct 2021 15:38",
          "username": "Aesthet",
          "content": "B final answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 327779,
          "date": "Fri 15 Oct 2021 08:43",
          "username": "novak18awsmonsterjove",
          "content": "https://aws.amazon.com/blogs/database/amazon-dynamodb-auto-scaling-performance-and-cost-optimization-at-any-scale/#:~:textTo%20configure%20auto%20scaling%20in,alarms%20that%20track%20consumed%20capacity.<br><br>Answer should be A?15% utilization of the allocated RCUs does not required to scale the Dynamo DB. No, it is B",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 521514,
          "date": "Tue 11 Jan 2022 13:01",
          "username": "awsmonster",
          "content": "15% utilization of the allocated RCUs does not required to scale the Dynamo DB. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 507404,
          "date": "Wed 22 Dec 2021 22:43",
          "username": "jove",
          "content": "No, it is B",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#134",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is building a software as a service application. As part of the new user sign-on workflow, a Python script invokes the CreateTable operation using the<br>Amazon DynamoDB API. After the call returns, the script attempts to call PutItem.<br>Occasionally, the PutItem request fails with a ResourceNotFoundException error, which causes the workflow to fail. The development team has confirmed that the same table name is used in the two API calls.<br>How should a database specialist fix this issue?<br></p>",
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
              "choice": "<p>A. Add an allow statement for the dynamodb:PutItem action in a policy attached to the role used by the application creating the table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set the StreamEnabled property of the StreamSpecification parameter to true, then call PutItem.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the application to call DescribeTable periodically until the TableStatus is ACTIVE, then call PutItem.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a ConditionExpression parameter in the PutItem request.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 134 discussion",
      "discusstion": [
        {
          "id": 327813,
          "date": "Tue 05 Oct 2021 19:00",
          "username": "Jaypdv",
          "content": "C.  Answer",
          "upvote_count": "10",
          "selected_answers": ""
        },
        {
          "id": 700135,
          "date": "Thu 20 Oct 2022 18:54",
          "username": "TL12345",
          "content": "Answer is C. <br><br>ResourceNotFoundException<br>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be ACTIVE. <br><br>https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 626418,
          "date": "Sun 03 Jul 2022 07:18",
          "username": "sachin",
          "content": "Condition Expression is used for PutItem DML conditions. you can specify a condition expression to determine which items should be modified. If the condition expression evaluates to true, the operation succeeds; otherwise, the operation fails.<br>To evalute if the update or new enrty should be made if the key attributes are same.<br>example : The PutItem operation overwrites an item with the same key (if it exists). If you want to avoid this, use a condition expression. This allows the write to proceed only if the item in question does not already have the same key.<br>C is correct.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595041,
          "date": "Sat 30 Apr 2022 15:34",
          "username": "novice_expert",
          "content": "TableStatus should be ACTIVE",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 450032,
          "date": "Mon 01 Nov 2021 15:45",
          "username": "Scunningham99",
          "content": "C https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 361585,
          "date": "Sun 24 Oct 2021 09:38",
          "username": "Aesthet",
          "content": "C final answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 332728,
          "date": "Sun 24 Oct 2021 02:07",
          "username": "Chhotu_DBA",
          "content": "C is the right one",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#135",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>To meet new data compliance requirements, a company needs to keep critical data durably stored and readily accessible for 7 years. Data that is more than 1 year old is considered archival data and must automatically be moved out of the Amazon Aurora MySQL DB cluster every week. On average, around 10 GB of new data is added to the database every month. A database specialist must choose the most operationally efficient solution to migrate the archival data to<br>Amazon S3.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#135",
          "answers": [
            {
              "choice": "<p>A. Create a custom script that exports archival data from the DB cluster to Amazon S3 using a SQL view, then deletes the archival data from the DB cluster. Launch an Amazon EC2 instance with a weekly cron job to execute the custom script.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an AWS Lambda function that exports archival data from the DB cluster to Amazon S3 using a SELECT INTO OUTFILE S3 statement, then deletes the archival data from the DB cluster. Schedule the Lambda function to run weekly using Amazon EventBridge (Amazon CloudWatch Events).<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure two AWS Lambda functions: one that exports archival data from the DB cluster to Amazon S3 using the mysqldump utility, and another that deletes the archival data from the DB cluster. Schedule both Lambda functions to run weekly using Amazon EventBridge (Amazon CloudWatch Events).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Database Migration Service (AWS DMS) to continually export the archival data from the DB cluster to Amazon S3. Configure an AWS Data Pipeline process to run weekly that executes a custom SQL script to delete the archival data from the DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 135 discussion",
      "discusstion": [
        {
          "id": 328531,
          "date": "Thu 07 Oct 2021 04:18",
          "username": "Jaypdv",
          "content": "Going for B.  since SELECT INTO OUTFILE S3 is available on Aurora.<br>Option C.  uses mysqldump who does not dump directly to S3",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 707515,
          "date": "Sun 30 Oct 2022 00:16",
          "username": "rags1482",
          "content": "If the amount of data to be selected is large (more than 25 GB), we recommend that you use multiple SELECT INTO OUTFILE S3 statements to save the data to Amazon S3<br><br>Answer: B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 626455,
          "date": "Sun 03 Jul 2022 09:08",
          "username": "sachin",
          "content": "B is correct approch.<br>C mysqldump can not dump into S3<br>https://aws.amazon.com/blogs/database/best-practices-for-exporting-and-importing-data-from-amazon-aurora-mysql-to-amazon-s3/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594140,
          "date": "Fri 29 Apr 2022 03:08",
          "username": "novice_expert",
          "content": "B because:<br>1. Lambda function max run time is 15 min<br>https://aws.amazon.com/about-aws/whats-new/2018/10/aws-lambda-supports-functions-that-can-run-up-to-15-minutes/<br>2. SELECT INTO OUTFILES3 is there, and 10GB data per week sounds reasonable to finish copying within 15 min<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.SaveIntoS3.html<br><br>AWS DMS can copy to S3 but option D says continuilly export, while we need weekly<br>https://aws.amazon.com/blogs/database/archiving-data-from-relational-databases-to-amazon-glacier-via-aws-dms/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 547830,
          "date": "Tue 15 Feb 2022 16:13",
          "username": "pcpcpc888",
          "content": "running a continually DMS job would NOT be operationally efficient, when talk about which, serverless options combined with Lambda and EventBridge would be a much better choice; considering the volume of the weekly archival, the duration would not hit Lambda timeout; however, it seems like more development would be needed for C, cause Select Into Outfile S3 directly integrates with S3. So B. ",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 519325,
          "date": "Sat 08 Jan 2022 06:26",
          "username": "Raj12131",
          "content": "Option A requires more effort and hence can be ruled out. Option B uses same lambda function for data migration and deletion thereafter. It doesn't work as lambda might timeout. Option C uses mysqldump which is ok but not as efficient as DMS. Option D is the correct solution in my view.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 510796,
          "date": "Tue 28 Dec 2021 05:50",
          "username": "Shunpin",
          "content": "For option D, I will consider how DMS export data export to S3 looks like and also how DMS handle \\\"delete\\\" CDC statements. With DMS option, you need additional tasks to filter data and not easy to maintain.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 509707,
          "date": "Sun 26 Dec 2021 17:42",
          "username": "SMAZ",
          "content": "I think its D<br>https://aws.amazon.com/blogs/database/archiving-data-from-relational-databases-to-amazon-glacier-via-aws-dms/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 508091,
          "date": "Thu 23 Dec 2021 19:36",
          "username": "joveVPup",
          "content": "Lambda functions have 15mins max execution time. If the extract and delete takes longer than 15 mins using a Lambda function won't work. This limitation might rule out option B and C. Option D will work but \\\"continually export the archival data\\\" is not a requirement.<br><br>Thoughts?Good catch on the 15 min limit for Lambda! But in the context of the question - \\\" Each month, around 10 GB of fresh data is uploaded to the database.\\\" -I would assume 2.5 GB weekly data volume - seems reasonable to assume that the export and delete will be done within 15 min. so B is still an option here",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 542096,
          "date": "Mon 07 Feb 2022 02:07",
          "username": "VPup",
          "content": "Good catch on the 15 min limit for Lambda! But in the context of the question - \\\" Each month, around 10 GB of fresh data is uploaded to the database.\\\" -I would assume 2.5 GB weekly data volume - seems reasonable to assume that the export and delete will be done within 15 min. so B is still an option here",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 361586,
          "date": "Wed 20 Oct 2021 03:43",
          "username": "Aesthet",
          "content": "B final answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 342574,
          "date": "Tue 12 Oct 2021 19:34",
          "username": "manan728",
          "content": "B is correct.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.SaveIntoS3.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 332735,
          "date": "Sun 10 Oct 2021 16:59",
          "username": "Chhotu_DBA",
          "content": "Option B correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 327782,
          "date": "Tue 21 Sep 2021 06:40",
          "username": "novak18faramawiJustujoveJiang_aws1",
          "content": "Answer should be D?<br><br>https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html<br><br>https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-object-sqlactivity.htmlI think it should be D too. I think it provides \\\"most operationally efficient solution to migrate the archival data to Amazon S3 \\\".<br>https://aws.amazon.com/blogs/database/archiving-data-from-relational-databases-to-amazon-glacier-via-aws-dms/<br>https://aws.amazon.com/blogs/database/replicate-data-from-amazon-aurora-to-amazon-s3-with-aws-database-migration-service/Can you use AWS Data Pipeline process Custom SQL Query to delete data from RDS?Yes you can but I'm not sure if using DMS is the right optionDMS is for DB migration tools & very $$$ so we just use time by time but let it run as job tools. so Lambda is right tools for this .",
          "upvote_count": "11111",
          "selected_answers": ""
        },
        {
          "id": 448106,
          "date": "Thu 28 Oct 2021 14:59",
          "username": "faramawiJustujoveJiang_aws1",
          "content": "I think it should be D too. I think it provides \\\"most operationally efficient solution to migrate the archival data to Amazon S3 \\\".<br>https://aws.amazon.com/blogs/database/archiving-data-from-relational-databases-to-amazon-glacier-via-aws-dms/<br>https://aws.amazon.com/blogs/database/replicate-data-from-amazon-aurora-to-amazon-s3-with-aws-database-migration-service/Can you use AWS Data Pipeline process Custom SQL Query to delete data from RDS?Yes you can but I'm not sure if using DMS is the right optionDMS is for DB migration tools & very $$$ so we just use time by time but let it run as job tools. so Lambda is right tools for this .",
          "upvote_count": "1111",
          "selected_answers": ""
        },
        {
          "id": 491841,
          "date": "Wed 01 Dec 2021 18:28",
          "username": "JustujoveJiang_aws1",
          "content": "Can you use AWS Data Pipeline process Custom SQL Query to delete data from RDS?Yes you can but I'm not sure if using DMS is the right optionDMS is for DB migration tools & very $$$ so we just use time by time but let it run as job tools. so Lambda is right tools for this .",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 508090,
          "date": "Thu 23 Dec 2021 19:31",
          "username": "joveJiang_aws1",
          "content": "Yes you can but I'm not sure if using DMS is the right optionDMS is for DB migration tools & very $$$ so we just use time by time but let it run as job tools. so Lambda is right tools for this .",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 688195,
          "date": "Fri 07 Oct 2022 03:15",
          "username": "Jiang_aws1",
          "content": "DMS is for DB migration tools & very $$$ so we just use time by time but let it run as job tools. so Lambda is right tools for this .",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#136",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company developed a new application that is deployed on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances use the security group named sg-application-servers. The company needs a database to store the data from the application and decides to use an Amazon RDS for MySQL DB instance. The DB instance is deployed in a private DB subnet.<br>What is the MOST restrictive configuration for the DB instance security group?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#136",
          "answers": [
            {
              "choice": "<p>A. Only allow incoming traffic from the sg-application-servers security group on port 3306.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Only allow incoming traffic from the sg-application-servers security group on port 443.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Only allow incoming traffic from the subnet of the application servers on port 3306.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Only allow incoming traffic from the subnet of the application servers on port 443.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 136 discussion",
      "discusstion": [
        {
          "id": 327092,
          "date": "Fri 24 Sep 2021 09:34",
          "username": "shantest1novice_expert",
          "content": "A.  Answer<br><br>Database port 3306 and better to allow only the specific subnet instead of the entire subnet.Do we allow traffic from security group<br>OR<br>from resources that are assigned to the same security group ?",
          "upvote_count": "131",
          "selected_answers": ""
        },
        {
          "id": 595626,
          "date": "Sun 01 May 2022 16:44",
          "username": "novice_expert",
          "content": "Do we allow traffic from security group<br>OR<br>from resources that are assigned to the same security group ?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 710833,
          "date": "Fri 04 Nov 2022 00:56",
          "username": "Bernardes",
          "content": "I'll go with C:<br>Security groups contains rules allowing or denying access to specified IP address and TCP Ports. Then they are associated with resources (such as ec2, rds, etc).<br>The question says that EC2 use the security group sg-application-servers. That is the sg-application-servers contains the rules that at this moment make the ec2 communication work. To allow the RDS instance talk with this ec2, is necessary to create a SG and specify the address of the ec2 instances in the ingress rules, referencing the port 3306. Or, allow thetraffic from the entire subnet at this same port.<br>I've read the security group doc again and dont see nothing about grouping aws resources to reference as some kind of \\\"security resource group\\\" as the A answer say.<br><br>https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595628,
          "date": "Sun 01 May 2022 16:46",
          "username": "novice_expert",
          "content": "A.  Only allow incoming traffic from the sg-application-servers security group on port 3306.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 522166,
          "date": "Wed 12 Jan 2022 14:04",
          "username": "awsmonster",
          "content": "Ans: A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 409230,
          "date": "Sat 06 Nov 2021 00:00",
          "username": "Hits_23",
          "content": "Answer A.  most restrictive approach is to allow only incoming connections from SG of EC2 instance on port 3306",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 380637,
          "date": "Mon 25 Oct 2021 13:10",
          "username": "Suresh108",
          "content": "AAAAAAAAAAAA",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 361587,
          "date": "Mon 04 Oct 2021 02:21",
          "username": "Aesthet",
          "content": "A final answer",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#137",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is moving its fraud detection application from on premises to the AWS Cloud and is using Amazon Neptune for data storage. The company has set up a 1 Gbps AWS Direct Connect connection to migrate 25 TB of fraud detection data from the on-premises data center to a Neptune DB instance. The company already has an Amazon S3 bucket and an S3 VPC endpoint, and 80% of the company's network bandwidth is available.<br>How should the company perform this data load?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#137",
          "answers": [
            {
              "choice": "<p>A. Use an AWS SDK with a multipart upload to transfer the data from on premises to the S3 bucket. Use the Copy command for Neptune to move the data in bulk from the S3 bucket to the Neptune DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use AWS Database Migration Service (AWS DMS) to transfer the data from on premises to the S3 bucket. Use the Loader command for Neptune to move the data in bulk from the S3 bucket to the Neptune DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS DataSync to transfer the data from on premises to the S3 bucket. Use the Loader command for Neptune to move the data in bulk from the S3 bucket to the Neptune DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the AWS CLI to transfer the data from on premises to the S3 bucket. Use the Copy command for Neptune to move the data in bulk from the S3 bucket to the Neptune DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 137 discussion",
      "discusstion": [
        {
          "id": 328533,
          "date": "Fri 15 Oct 2021 00:40",
          "username": "Jaypdv",
          "content": "Answer is C.  since DMS can only use databases (and S3) as sources, and the question does not specify that the on-prem data resides in a DB.  In which case, Datasync is a more likely choice.",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 344988,
          "date": "Wed 03 Nov 2021 18:00",
          "username": "manan728",
          "content": "This question was asked in my exam. I went with C. ",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 595650,
          "date": "Sun 01 May 2022 17:53",
          "username": "novice_expertawsjjj",
          "content": "DMS target can not be S3<br><br>AWS DataSync is a secure, online service that automates and accelerates moving data between on-premises and AWS storage services.<br>C.  Use AWS DataSync to transfer the data from on premises to the S3 bucket. Use the Loader command for Neptune to move the data in bulk from the S3 bucket to the Neptune DB instance.<br><br>aws DataSync is the way to transfer data from on-prem to S3, no source db is mentioned.<br>Only way to load data from S3 to AWS Neptune is using loader<br>https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load.htmlAnswer is C.  But DMS target can be S3. https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 694725,
          "date": "Fri 14 Oct 2022 14:08",
          "username": "awsjjj",
          "content": "Answer is C.  But DMS target can be S3. https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 562595,
          "date": "Mon 07 Mar 2022 13:08",
          "username": "RotterDam",
          "content": "Got this question in my exam. (i cleared it).C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 522185,
          "date": "Wed 12 Jan 2022 14:25",
          "username": "awsmonsterawsmonster",
          "content": "Answer should be B, use DMS.Data Sync does not read from databases (https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html).<br><br>\\\"AWS DataSync is an online data transfer service that simplifies, automates, and accelerates moving data between on-premises storage systems and AWS storage services, and also between AWS storage services.\\\"Sorry .. Answer is C. <br><br>My error, the questions says move fraud data, nothing is mentioned about database.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 522189,
          "date": "Wed 12 Jan 2022 14:26",
          "username": "awsmonster",
          "content": "Sorry .. Answer is C. <br><br>My error, the questions says move fraud data, nothing is mentioned about database.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 409233,
          "date": "Sat 06 Nov 2021 23:04",
          "username": "Hits_23",
          "content": "C is correct answer.<br>aws DataSync is the way to transfer data from on-prem to S3, no source db is mentioned.<br>Only way to load data from S3 to AWS Neptune is using loader<br>https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 361591,
          "date": "Thu 04 Nov 2021 18:02",
          "username": "Aesthet",
          "content": "C is the answer<br>If on-premise DB was mentioned I would choose B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 344832,
          "date": "Tue 02 Nov 2021 04:57",
          "username": "db_interest",
          "content": "C makes sense",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 342609,
          "date": "Tue 26 Oct 2021 04:46",
          "username": "manan728",
          "content": "Between B and C that are the only plausible options C seems more legit for the given scenario.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 326886,
          "date": "Mon 04 Oct 2021 07:10",
          "username": "novak18",
          "content": "Answer should be B I guess",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#138",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company migrated one of its business-critical database workloads to an Amazon Aurora Multi-AZ DB cluster. The company requires a very low RTO and needs to improve the application recovery time after database failovers.<br>Which approach meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#138",
          "answers": [
            {
              "choice": "<p>A. Set the max_connections parameter to 16,000 in the instance-level parameter group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the client connection timeout to 300 seconds.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon RDS Proxy database proxy and update client connections to point to the proxy endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable the query cache at the instance level.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 138 discussion",
      "discusstion": [
        {
          "id": 342618,
          "date": "Fri 29 Oct 2021 23:53",
          "username": "manan728",
          "content": "C looks to be the winner.<br>Amazon RDS Proxy allows applications to pool and share connections established with the database, improving database efficiency and application scalability. With RDS Proxy, failover times for Aurora and RDS databases are reduced by up to 66% and database credentials, authentication, and access can be managed through integration with AWS Secrets Manager and AWS Identity and Access Management (IAM).",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 327786,
          "date": "Wed 22 Sep 2021 12:22",
          "username": "novak18Jaypdv",
          "content": "Can the answer be C?<br><br>https://aws.amazon.com/rds/proxy/I'm sorry, you're correct. Answer is C. ",
          "upvote_count": "51",
          "selected_answers": ""
        },
        {
          "id": 328537,
          "date": "Tue 12 Oct 2021 07:43",
          "username": "Jaypdv",
          "content": "I'm sorry, you're correct. Answer is C. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 597946,
          "date": "Sat 07 May 2022 04:19",
          "username": "KaranGandhi30",
          "content": "When your primary instance is down ABD won't work.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 594110,
          "date": "Fri 29 Apr 2022 01:53",
          "username": "novice_expert",
          "content": "https://aws.amazon.com/rds/proxy/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 561709,
          "date": "Sun 06 Mar 2022 01:10",
          "username": "RotterDam",
          "content": "Definitely C.  Proxies maintain a pool of client connections that respond to failovers and actually IMPROVE failover times by 66% https://aws.amazon.com/rds/proxy/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 557684,
          "date": "Sun 27 Feb 2022 23:26",
          "username": "user0001",
          "content": "i vote for C,<br>the key is \\\"application recovery time after database failovers\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 433936,
          "date": "Thu 04 Nov 2021 14:49",
          "username": "ChauPhan",
          "content": "C is correct. A D is not relevant, B even makes failover time slower.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 361593,
          "date": "Wed 03 Nov 2021 11:27",
          "username": "Aesthet",
          "content": "C final answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 327814,
          "date": "Sun 10 Oct 2021 17:20",
          "username": "JaypdvJaypdv",
          "content": "B.  AnswerOops. Answer is C. ",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 328538,
          "date": "Fri 15 Oct 2021 12:01",
          "username": "Jaypdv",
          "content": "Oops. Answer is C. ",
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
      "question_text": "<p>A company is using an Amazon RDS for MySQL DB instance for its internal applications. A security audit shows that the DB instance is not encrypted at rest. The company's application team needs to encrypt the DB instance.<br>What should the team do to meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#139",
          "answers": [
            {
              "choice": "<p>A. Stop the DB instance and modify it to enable encryption. Apply this setting immediately without waiting for the next scheduled RDS maintenance window.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Stop the DB instance and create an encrypted snapshot. Restore the encrypted snapshot to a new encrypted DB instance. Delete the original DB instance, and update the applications to point to the new encrypted DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Stop the DB instance and create a snapshot. Copy the snapshot into another encrypted snapshot. Restore the encrypted snapshot to a new encrypted DB instance. Delete the original DB instance, and update the applications to point to the new encrypted DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an encrypted read replica of the DB instance. Promote the read replica to master. Delete the original DB instance, and update the applications to point to the new encrypted DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 139 discussion",
      "discusstion": [
        {
          "id": 328541,
          "date": "Sun 17 Oct 2021 05:57",
          "username": "Jaypdv",
          "content": "C.  Answer",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 327093,
          "date": "Wed 13 Oct 2021 16:15",
          "username": "shantest1",
          "content": "C.  Answer",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 707135,
          "date": "Sat 29 Oct 2022 12:50",
          "username": "sirfans",
          "content": "C is the right choice. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 595568,
          "date": "Sun 01 May 2022 13:27",
          "username": "novice_expert",
          "content": "C.  Stop the DB instance and create a snapshot. Copy the snapshot into another encrypted snapshot. Restore the encrypted snapshot to a new encrypted DB instance. Delete the original DB instance, and update the applications to point to the new encrypted DB instance.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 585071,
          "date": "Wed 13 Apr 2022 09:13",
          "username": "kret",
          "content": "C is the way. You can only enable encryption during copy operation of the snapshot.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 433938,
          "date": "Fri 05 Nov 2021 01:19",
          "username": "ChauPhan",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 361594,
          "date": "Fri 22 Oct 2021 06:37",
          "username": "Aesthet",
          "content": "C final answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 342622,
          "date": "Sun 17 Oct 2021 11:56",
          "username": "manan728manan728",
          "content": "Deleting the old database was kind of an unnecessary step added there.Eh, maybe required for compliance I suppose but C it is.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 342623,
          "date": "Tue 19 Oct 2021 12:24",
          "username": "manan728",
          "content": "Eh, maybe required for compliance I suppose but C it is.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 326878,
          "date": "Tue 05 Oct 2021 00:07",
          "username": "novak18",
          "content": "Answer should be C",
          "upvote_count": "2",
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
      "question_text": "<p>A database specialist must create nightly backups of an Amazon DynamoDB table in a mission-critical workload as part of a disaster recovery strategy.<br>Which backup methodology should the database specialist use to MINIMIZE management overhead?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#140",
          "answers": [
            {
              "choice": "<p>A. Install the AWS CLI on an Amazon EC2 instance. Write a CLI command that creates a backup of the DynamoDB table. Create a scheduled job or task that runs the command on a nightly basis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function that creates a backup of the DynamoDB table. Create an Amazon CloudWatch Events rule that runs the Lambda function on a nightly basis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a backup plan using AWS Backup, specify a backup frequency of every 24 hours, and give the plan a nightly backup window.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure DynamoDB backup and restore for an on-demand backup frequency of every 24 hours.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 140 discussion",
      "discusstion": [
        {
          "id": 646315,
          "date": "Sat 13 Aug 2022 14:06",
          "username": "shammous",
          "content": "The key word here is \\\"minimum overhead\\\". Using AWS Backup would insure that.<br>Ref: https://aws.amazon.com/blogs/database/set-up-scheduled-backups-for-amazon-dynamodb-using-aws-backup/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 623546,
          "date": "Tue 28 Jun 2022 01:49",
          "username": "Omijh",
          "content": "C is correct, If you go in the Dynamodb console and click scheduled backup it just takes you to aws backup to create a plan. Since it's nightly scheduled backups that's needed then aws back. If they wanted ondemand manual backup then Ondemand in Dynamodb",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 619940,
          "date": "Tue 21 Jun 2022 18:26",
          "username": "sachin",
          "content": "C is correct as it is using backup service. D option can only take manula backup.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594575,
          "date": "Fri 29 Apr 2022 18:02",
          "username": "novice_expertnovice_expert",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BackupRestore.htmlcorrection: Ans is C<br><br>use AWS backup service",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 594577,
          "date": "Fri 29 Apr 2022 18:03",
          "username": "novice_expert",
          "content": "correction: Ans is C<br><br>use AWS backup service",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 565981,
          "date": "Sat 12 Mar 2022 09:14",
          "username": "Dantas",
          "content": "C is better than D, as the latter introduces administration overhead: Amazon DynamoDB supports stand-alone on-demand backup and restores features. You can create table backups using the console, the AWS Command Line Interface (AWS CLI), or the DynamoDB API.<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/backuprestore_HowItWorks.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 557336,
          "date": "Sun 27 Feb 2022 14:06",
          "username": "user0001",
          "content": "Answer is C. <br>i'm not sure why they are providing the wrong answers for most of the questions",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 554986,
          "date": "Thu 24 Feb 2022 01:34",
          "username": "tugboat",
          "content": "agree with other comments",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 548671,
          "date": "Wed 16 Feb 2022 15:30",
          "username": "user0001",
          "content": "C<br>If you don't want to create scheduling scripts and cleanup jobs, you can use AWS Backup to create backup plans with schedules and retention policies for your DynamoDB tables. AWS Backup runs the backups and deletes them when they expire. For more information, see the AWS Backup Developer Guide.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 541570,
          "date": "Sun 06 Feb 2022 08:57",
          "username": "Hariru",
          "content": "Why not D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 540532,
          "date": "Fri 04 Feb 2022 17:54",
          "username": "soyyodario",
          "content": "Answer is C<br>To be compliance with disaster recovery it=C2=B4s necessary to use AWS Backup: (link bellow) To create backup copies across AWS accounts and Regions and for other advanced features, you should use AWS Backup.<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BackupRestore.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 529912,
          "date": "Sat 22 Jan 2022 15:36",
          "username": "peacegrace",
          "content": "C seems more approprite, as it has more control",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 502140,
          "date": "Wed 15 Dec 2021 13:53",
          "username": "mnzsql365",
          "content": "Ans is C more control",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 495528,
          "date": "Tue 07 Dec 2021 03:00",
          "username": "akiraklaus",
          "content": "C and D do the same thing, more D reduce overhead.<br>answer is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 491980,
          "date": "Wed 01 Dec 2021 23:34",
          "username": "shuraosipov",
          "content": "Answer is C. <br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/CreateBackup.html#:~:textIf%20you%20don%27t%20want%20to%20create%20scheduling%20scripts%20and%20cleanup%20jobs%2C%20you%20can%20use%20AWS%20Backup%20to%20create%20backup%20plans%20with%20schedules%20and%20retention%20policies%20for%20your%20DynamoDB%20tables.%20AWS%20Backup%20runs%20the%20backups%20and%20deletes%20them%20when%20they%20expire.%20For%20more%20information%2C%20see%20the%20AWS%20Backup%20Developer%20Guide.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 420463,
          "date": "Fri 22 Oct 2021 19:17",
          "username": "damaldon",
          "content": "Answer is C, as per the following link:<br>If you don't want to create scheduling scripts and cleanup jobs, you can use AWS Backup to create backup plans with schedules and retention policies for your DynamoDB tables. AWS Backup runs the backups and deletes them when they expire<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/backuprestore_HowItWorks.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 361595,
          "date": "Fri 22 Oct 2021 06:40",
          "username": "Aesthet",
          "content": "C final answer",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 344989,
          "date": "Tue 19 Oct 2021 12:48",
          "username": "manan728",
          "content": "A very similar question was there in my exam for which aws backup was the right choice, I believe. I went with C. ",
          "upvote_count": "3",
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
      "question_text": "<p>A company is using a Single-AZ Amazon RDS for MySQL DB instance for development. The DB instance is experiencing slow performance when queries run.<br>Amazon CloudWatch metrics indicate that the instance requires more I/O capacity.<br>Which actions can a database specialist perform to resolve this issue? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#141",
          "answers": [
            {
              "choice": "<p>A. Restart the application tool used to run queries.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Change to a database instance class with higher throughput.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Convert from Single-AZ to Multi-AZ.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the I/O parameter in Amazon RDS Enhanced Monitoring.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Convert from General Purpose to Provisioned IOPS (PIOPS).<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 141 discussion",
      "discusstion": [
        {
          "id": 754437,
          "date": "Fri 23 Dec 2022 19:55",
          "username": "lollyj",
          "content": "My choices...",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 709287,
          "date": "Tue 01 Nov 2022 17:47",
          "username": "rags1482",
          "content": "The I/O capacity of the instance is based on the instance storage type and size.<br><br>So Answer isB & E",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 658384,
          "date": "Sat 03 Sep 2022 13:27",
          "username": "Adi_M",
          "content": "D. Increase the I/O parameter in Amazon RDS Enhanced Monitoring.- not the right answer. Just enabling enhanced monitoring is not going to help the performance.<br><br>correct Answer: B & E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 655421,
          "date": "Wed 31 Aug 2022 21:31",
          "username": "yxyj",
          "content": "B & E<br><br>https://aws.amazon.com/blogs/database/best-storage-practices-for-running-production-workloads-on-hosted-databases-with-amazon-rds-or-amazon-ec2/",
          "upvote_count": "3",
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
      "question_text": "<p>A company has an AWS CloudFormation template written in JSON that is used to launch new Amazon RDS for MySQL DB instances. The security team has asked a database specialist to ensure that the master password is automatically rotated every 30 days for all new DB instances that are launched using the template.<br>What is the MOST operationally efficient solution to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#142",
          "answers": [
            {
              "choice": "<p>A. Save the password in an Amazon S3 object. Encrypt the S3 object with an AWS KMS key. Set the KMS key to be rotated every 30 days by setting the EnableKeyRotation property to true. Use a CloudFormation custom resource to read the S3 object to extract the password.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS Lambda function to rotate the secret. Modify the CloudFormation template to add an AWS::SecretsManager::RotationSchedule resource. Configure the RotationLambdaARN value and, for the RotationRules property, set the AutomaticallyAfterDays parameter to 30.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the CloudFormation template to use the AWS KMS key as the database password. Configure an Amazon EventBridge rule to invoke the KMS API to rotate the key every 30 days by setting the ScheduleExpression parameter to ***/30***.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Integrate the Amazon RDS for MySQL DB instances with AWS IAM and centrally manage the master database user password.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 142 discussion",
      "discusstion": [
        {
          "id": 327817,
          "date": "Mon 04 Oct 2021 08:29",
          "username": "Jaypdv",
          "content": "B.  Answer",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 748554,
          "date": "Sun 18 Dec 2022 03:32",
          "username": "khun",
          "content": "B is the answer. AWS secret supports rotation",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 608681,
          "date": "Sun 29 May 2022 09:55",
          "username": "Bobapo2",
          "content": "B.  Answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 594617,
          "date": "Fri 29 Apr 2022 19:28",
          "username": "novice_expert",
          "content": "Secrete Manager -> Lambda to rotate secret -> modify Cloud formation to add rotation schedule<br><br>https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 566586,
          "date": "Sun 13 Mar 2022 07:44",
          "username": "Dantas",
          "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 561009,
          "date": "Fri 04 Mar 2022 20:55",
          "username": "RotterDam",
          "content": "(B) is the correct answer. (Who is making the official chosen answers? Almost all ofthem are wrong - the community ones are the correct ones)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 555550,
          "date": "Thu 24 Feb 2022 21:56",
          "username": "tugboat",
          "content": "Lambda with Secrets Manager works perfectly",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 554999,
          "date": "Thu 24 Feb 2022 02:08",
          "username": "kped21",
          "content": "B - Lambda with secretsManager.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 361599,
          "date": "Sun 07 Nov 2021 00:33",
          "username": "Aesthet",
          "content": "B final answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 344990,
          "date": "Mon 11 Oct 2021 08:11",
          "username": "manan728",
          "content": "This question was asked in my exam. B is correct.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 326868,
          "date": "Wed 29 Sep 2021 06:43",
          "username": "novak18novak18",
          "content": "Shouldn't the answer be B?https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 327801,
          "date": "Thu 30 Sep 2021 13:18",
          "username": "novak18",
          "content": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#143",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A startup company is building a new application to allow users to visualize their on-premises and cloud networking components. The company expects billions of components to be stored and requires responses in milliseconds. The application should be able to identify:<br>-The networks and routes affected if a particular component fails.<br>-The networks that have redundant routes between them.<br>-The networks that do not have redundant routes between them.<br>-The fastest path between two networks.<br>Which database engine meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#143",
          "answers": [
            {
              "choice": "<p>A. Amazon Aurora MySQL<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon Neptune<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon ElastiCache for Redis<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon DynamoDB<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 143 discussion",
      "discusstion": [
        {
          "id": 326867,
          "date": "Mon 04 Oct 2021 15:06",
          "username": "novak18",
          "content": "Answer is B",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 595669,
          "date": "Sun 01 May 2022 19:00",
          "username": "novice_expert",
          "content": "B.  Amazon Neptune",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 380650,
          "date": "Thu 28 Oct 2021 23:28",
          "username": "Suresh108",
          "content": "BBBBBBBBBB<br><br>relationship based store is Nepture.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 361601,
          "date": "Wed 27 Oct 2021 16:53",
          "username": "Aesthet",
          "content": "B final answer",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 344991,
          "date": "Sun 17 Oct 2021 10:23",
          "username": "manan728",
          "content": "This question was asked in my exam. Looks like aws do not have many variety of questions on Neptune.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 327095,
          "date": "Tue 12 Oct 2021 16:57",
          "username": "shantest1",
          "content": "B.  answer",
          "upvote_count": "2",
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
      "question_text": "<p>An online retail company is planning a multi-day flash sale that must support processing of up to 5,000 orders per second. The number of orders and exact schedule for the sale will vary each day. During the sale, approximately 10,000 concurrent users will look at the deals before buying items. Outside of the sale, the traffic volume is very low. The acceptable performance for read/write queries should be under 25 ms. Order items are about 2 KB in size and have a unique identifier. The company requires the most cost-effective solution that will automatically scale and is highly available.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#144",
          "answers": [
            {
              "choice": "<p>A. Amazon DynamoDB with on-demand capacity mode<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon Aurora with one writer node and an Aurora Replica with the parallel query feature enabled<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon DynamoDB with provisioned capacity mode with 5,000 write capacity units (WCUs) and 10,000 read capacity units (RCUs)<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon Aurora with one writer node and two cross-Region Aurora Replicas<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 144 discussion",
      "discusstion": [
        {
          "id": 327823,
          "date": "Mon 27 Sep 2021 16:56",
          "username": "JaypdvJaypdvshantest1manan728",
          "content": "I'll go for A. <br>I think C.  is a trap; if you are writing 5000 items at 2KB/second then you need 10000 WCU and 5000 RCU (assuming eventually consistent reads). C.  has it in reverse.And C.  does not automatically scale as in the requirementA seems to be correct<br>I think so as well,c is in reverseFor 5000 RCU you are assuming strongly consistent reads. If it's an eventual consistent read you only need 2500 RCU",
          "upvote_count": "12312",
          "selected_answers": ""
        },
        {
          "id": 328549,
          "date": "Wed 13 Oct 2021 00:46",
          "username": "Jaypdvshantest1",
          "content": "And C.  does not automatically scale as in the requirementA seems to be correct<br>I think so as well,c is in reverse",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 329611,
          "date": "Wed 20 Oct 2021 17:47",
          "username": "shantest1",
          "content": "A seems to be correct<br>I think so as well,c is in reverse",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 342650,
          "date": "Thu 21 Oct 2021 19:08",
          "username": "manan728",
          "content": "For 5000 RCU you are assuming strongly consistent reads. If it's an eventual consistent read you only need 2500 RCU",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 696860,
          "date": "Mon 17 Oct 2022 06:43",
          "username": "awsjjjawsjjjawsjjj",
          "content": "1250 RCUs can read 10,000 KB.  A is correct2500 RCU for reads1250 RCUs can read 10,000 KB if its eventual consistent read. A is correct",
          "upvote_count": "111",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 698655,
          "date": "Wed 19 Oct 2022 06:11",
          "username": "awsjjj",
          "content": "2500 RCU for reads",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 696863,
          "date": "Mon 17 Oct 2022 06:43",
          "username": "awsjjj",
          "content": "1250 RCUs can read 10,000 KB if its eventual consistent read. A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 602858,
          "date": "Tue 17 May 2022 11:07",
          "username": "praffuln",
          "content": "I'll go for A.  C is not scalable & cost affective.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 594801,
          "date": "Sat 30 Apr 2022 04:15",
          "username": "novice_expert",
          "content": "25 milliseconds<br>Outside of the sale, the amount of traffic is really minimal<br>The business seeks the most cost-effective solution possible that is both highly accessible and scales automatically.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 506385,
          "date": "Tue 21 Dec 2021 20:18",
          "username": "jove",
          "content": "It is A",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 490603,
          "date": "Tue 30 Nov 2021 11:51",
          "username": "GMartinelli",
          "content": "Option A",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 434304,
          "date": "Sun 07 Nov 2021 06:12",
          "username": "ChauPhan",
          "content": "he number of orders and exact schedule for the sale will vary each day. During the sale, approximately 10,000 concurrent users will look at the deals before buying items. Outside of the sale, the traffic volume is very low<br>> Setting provisioning DynamoDB fix read 5000/write 10000 with will waste the resource when the traffic is low. It is not cost-effective.<br>I go with A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 361616,
          "date": "Sat 06 Nov 2021 22:03",
          "username": "Aesthet",
          "content": "A final answer",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 357005,
          "date": "Tue 26 Oct 2021 00:09",
          "username": "Zhongkai",
          "content": "c does not mention auto scaling. in addition, 10000 WCU are needed. I will go with A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 344852,
          "date": "Sat 23 Oct 2021 20:35",
          "username": "db_interestdb_interest",
          "content": "C seems correct<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.htmlCorrection. A is the answer",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 359635,
          "date": "Mon 01 Nov 2021 21:21",
          "username": "db_interest",
          "content": "Correction. A is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 326864,
          "date": "Thu 23 Sep 2021 05:17",
          "username": "novak18",
          "content": "Answer is C",
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
      "question_text": "<p>A ride-hailing application uses an Amazon RDS for MySQL DB instance as persistent storage for bookings. This application is very popular and the company expects a tenfold increase in the user base in next few months. The application experiences more traffic during the morning and evening hours.<br>This application has two parts:<br>-An in-house booking component that accepts online bookings that directly correspond to simultaneous requests from users.<br>-A third-party customer relationship management (CRM) component used by customer care representatives. The CRM uses queries to access booking data.<br>A database specialist needs to design a cost-effective database solution to handle this workload.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#145",
          "answers": [
            {
              "choice": "<p>A. Use Amazon ElastiCache for Redis to accept the bookings. Associate an AWS Lambda function to capture changes and push the booking data to the RDS for MySQL DB instance used by the CRM.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use Amazon DynamoDB to accept the bookings. Enable DynamoDB Streams and associate an AWS Lambda function to capture changes and push the booking data to an Amazon SQS queue. This triggers another Lambda function that pulls data from Amazon SQS and writes it to the RDS for MySQL DB instance used by the CRM.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Amazon ElastiCache for Redis to accept the bookings. Associate an AWS Lambda function to capture changes and push the booking data to an Amazon Redshift database used by the CRM.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon DynamoDB to accept the bookings. Enable DynamoDB Streams and associate an AWS Lambda function to capture changes and push the booking data to Amazon Athena, which is used by the CRM.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 145 discussion",
      "discusstion": [
        {
          "id": 361615,
          "date": "Tue 12 Oct 2021 21:33",
          "username": "AesthetlearnazureportalChauPhan",
          "content": "In A \\\"AWS Lambda function to capture changes\\\" capture changes to what? ElastiCache? The main use of ElastiCache is to cache frequently read data. Also \\\"the company expects a tenfold increase in the user base\\\" and \\\"correspond to simultaneous requests from users\\\" suggest DynamoDB imo. Since we already have MySQL RDS I prefer answer BActually, It is D.  based on the increasing the overall, we cannot go for B. Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL.<br>It is DB query service serverless for data stored on S3. It is itself not a DB storage",
          "upvote_count": "1114",
          "selected_answers": ""
        },
        {
          "id": 391671,
          "date": "Fri 15 Oct 2021 23:31",
          "username": "learnazureportalChauPhan",
          "content": "Actually, It is D.  based on the increasing the overall, we cannot go for B. Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL.<br>It is DB query service serverless for data stored on S3. It is itself not a DB storage",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 434321,
          "date": "Sun 24 Oct 2021 08:08",
          "username": "ChauPhan",
          "content": "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL.<br>It is DB query service serverless for data stored on S3. It is itself not a DB storage",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 344994,
          "date": "Sat 02 Oct 2021 05:57",
          "username": "manan728guru_jipalanikumar_nuser0001",
          "content": "This question wasn't asked but in summary a lot of questions exactly from this 145 set questions were asked. I passed with a score of 794. Bunch of new questions on Aurora upgrades and maintenance windows, MS SQL server and Oracle migrations. All the best =F0=9F=91=8DI gave exam today. Only 60% questions came in actual exam from this 145 set.Do you have the 145 questions.I could see only 112 question in the siteyou are trying to mention score to give gradability to your answer, you only get pass or fail but not the score",
          "upvote_count": "6211",
          "selected_answers": ""
        },
        {
          "id": 444717,
          "date": "Sat 30 Oct 2021 21:46",
          "username": "guru_jipalanikumar_n",
          "content": "I gave exam today. Only 60% questions came in actual exam from this 145 set.Do you have the 145 questions.I could see only 112 question in the site",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 477245,
          "date": "Sat 13 Nov 2021 03:14",
          "username": "palanikumar_n",
          "content": "Do you have the 145 questions.I could see only 112 question in the site",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 557399,
          "date": "Sun 27 Feb 2022 16:15",
          "username": "user0001",
          "content": "you are trying to mention score to give gradability to your answer, you only get pass or fail but not the score",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 754540,
          "date": "Fri 23 Dec 2022 21:57",
          "username": "lollyj",
          "content": "Chose this option because this architecture definitely needs a SQS component being that it's a ride hailing application.Only makes sense",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 594646,
          "date": "Fri 29 Apr 2022 20:41",
          "username": "novice_expert",
          "content": "no use of Elasticache + Redis ( A, C)<br>Athena is not DB (D)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 566820,
          "date": "Sun 13 Mar 2022 13:36",
          "username": "Dantas",
          "content": "- Redis is an in-memory data store, therefore not suitable for bookings persistence. A and C are incorrect.<br>- Athena is an interactive query service, not a database. D is incorrect.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 557398,
          "date": "Sun 27 Feb 2022 16:13",
          "username": "user0001",
          "content": "B is the answer , we need the data in mysql",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 555576,
          "date": "Thu 24 Feb 2022 22:25",
          "username": "tugboat",
          "content": "CRM needs data in MySQL",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 548780,
          "date": "Wed 16 Feb 2022 17:51",
          "username": "user0001",
          "content": "i go with B<br>you need to save data to MySQL<br>A is not persistence",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 493692,
          "date": "Sat 04 Dec 2021 13:22",
          "username": "scottkerker",
          "content": "ElastiCache, either MemcaheD or Redis, is used for data frequently read. And Amazon Athena is for querying data stored in Amazon S3. Considering all the features provided by the services, Option B is the best option.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 486349,
          "date": "Thu 25 Nov 2021 01:40",
          "username": "jove",
          "content": "Answer is B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 485872,
          "date": "Wed 24 Nov 2021 12:01",
          "username": "GMartinelli",
          "content": "It=C2=B4s B",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 466125,
          "date": "Wed 03 Nov 2021 16:40",
          "username": "Amy2009",
          "content": "should be A",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 455754,
          "date": "Tue 02 Nov 2021 11:45",
          "username": "VNKSEC",
          "content": "@guru_ji ? only 60% ?, hm... you can send me email",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 444716,
          "date": "Sat 30 Oct 2021 10:25",
          "username": "guru_ji",
          "content": "I gave exam today. Only 60% questions came in actual exam.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 440203,
          "date": "Thu 28 Oct 2021 16:32",
          "username": "guru_ji",
          "content": "Answer: B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 434319,
          "date": "Sat 23 Oct 2021 06:12",
          "username": "ChauPhanguru_jiandy909",
          "content": "Redis is usually used to cache to reduce the DB load, not store the data.<br>Between B and D, I choose B. <br>Please note that Athena is DB query service serverless, it is not DB store.<br>Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQLok. Agree.Agree.",
          "upvote_count": "211",
          "selected_answers": ""
        },
        {
          "id": 441107,
          "date": "Fri 29 Oct 2021 21:35",
          "username": "guru_ji",
          "content": "ok. Agree.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 479446,
          "date": "Tue 16 Nov 2021 15:53",
          "username": "andy909",
          "content": "Agree.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 430889,
          "date": "Fri 22 Oct 2021 22:36",
          "username": "pcpcpc888",
          "content": "Athena is not for data store.",
          "upvote_count": "1",
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
      "question_text": "<p>An online advertising website uses an Amazon DynamoDB table with on-demand capacity mode as its data store. The website also has a DynamoDB Accelerator<br>(DAX) cluster in the same VPC as its web application server. The application needs to perform infrequent writes and many strongly consistent reads from the data store by querying the DAX cluster.<br>During a performance audit, a systems administrator notices that the application can look up items by using the DAX cluster. However, the QueryCacheHits metric for the DAX cluster consistently shows 0 while the QueryCacheMisses metric continuously keeps growing in Amazon CloudWatch.<br>What is the MOST likely reason for this occurrence?<br></p>",
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
              "choice": "<p>A. A VPC endpoint was not added to access DynamoDB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Strongly consistent reads are always passed through DAX to DynamoDB. <br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. DynamoDB is scaling due to a burst in traffic, resulting in degraded performance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. A VPC endpoint was not added to access CloudWatch.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 146 discussion",
      "discusstion": [
        {
          "id": 754585,
          "date": "Fri 23 Dec 2022 23:47",
          "username": "lollyj",
          "content": "My thoughts - if strongly consistency reads are requested it will pass through DAX to the DB. ",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 594157,
          "date": "Fri 29 Apr 2022 03:27",
          "username": "novice_expert",
          "content": "strong consistency > bypass DAX",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 561719,
          "date": "Sun 06 Mar 2022 01:58",
          "username": "RotterDam",
          "content": "StronglyConsistent Readsareconsidered PASS THROUGH and will never update DAX<br>Interestingly - TransactionGetItemsis also a PASS THROUGH but TransactionWriteItems is not!!",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 556193,
          "date": "Fri 25 Feb 2022 20:02",
          "username": "kped21",
          "content": "B:<br>If the request specifies eventually consistent reads (the default behavior), it tries to read the item from DAX:<br><br>If DAX has the item available (a cache hit), DAX returns the item to the application without accessing DynamoDB. <br>If DAX does not have the item available (a cache miss), DAX passes the request through to DynamoDB.  When it receives the response from DynamoDB, DAX returns the results to the application. But it also writes the results to the cache on the primary node.If the request specifies strongly consistent reads, DAX passes the request through to DynamoDB.  The results from DynamoDB are not cached in DAX. Instead, they are simply returned to the application.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 467439,
          "date": "Thu 23 Sep 2021 19:52",
          "username": "grekh001",
          "content": "B is correct.<br><br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.html<br><br>\\\"If the request specifies strongly consistent reads, DAX passes the request through to DynamoDB.  The results from DynamoDB are not cached in DAX. Instead, they are simply returned to the application.\\\"",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#147",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial company recently launched a portfolio management solution. The backend of the application is powered by Amazon Aurora with MySQL compatibility.<br>The company requires an RTO of 5 minutes and an RPO of 5 minutes. A database specialist must configure an efficient disaster recovery solution with minimal replication lag.<br>Which approach should the database specialist take to meet these requirements?<br></p>",
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
              "choice": "<p>A. Configure AWS Database Migration Service (AWS DMS) and create a replica in a different AWS Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure an Amazon Aurora global database and add a different AWS Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure a binlog and create a replica in a different AWS Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure a cross-Region read replica.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 147 discussion",
      "discusstion": [
        {
          "id": 620203,
          "date": "Wed 22 Jun 2022 08:03",
          "username": "sachin",
          "content": "B Aurora Global Tables. ( As an alternative to cross-Region read replicas, you can scale read operations with minimal lag time by using an Aurora global database.)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594640,
          "date": "Fri 29 Apr 2022 20:22",
          "username": "novice_expert",
          "content": "5 min RTO 5 min RPO<br> Aurora GLOBAL RPO 1second and RTO 1 minute",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 566800,
          "date": "Sun 13 Mar 2022 13:13",
          "username": "Dantas",
          "content": "Amazon Aurora global databases span multiple AWS Regions, enabling low latency global reads and providing fast recovery from the rare outage that might affect an entire AWS Region.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html<br>https://www.amazonaws.cn/en/rds/aurora/faqs/",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 561175,
          "date": "Sat 05 Mar 2022 05:28",
          "username": "RotterDam",
          "content": "question is vague. what does \\\"The firm demands a response time of five minutes and a response time of five minutes. \\\" mean? I assume they mean RTO and RPO. If 5 minutes is the same for both then Aurora GLOBAL will suffice (RPO1second and RTO 1 minute)",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 555566,
          "date": "Thu 24 Feb 2022 22:13",
          "username": "tugboatBreeRawkus",
          "content": "Efficient is key - takes our global DBs<br>Read-replicas are efficient and low-latencyGlobal DB uses storage replication low replication latency, Answer is B",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 584666,
          "date": "Tue 12 Apr 2022 13:08",
          "username": "BreeRawkus",
          "content": "Global DB uses storage replication low replication latency, Answer is B",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 548756,
          "date": "Wed 16 Feb 2022 17:24",
          "username": "user0001",
          "content": "Answer B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 499835,
          "date": "Sun 12 Dec 2021 08:05",
          "username": "mnzsql365",
          "content": "B for me<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 497842,
          "date": "Thu 09 Dec 2021 16:34",
          "username": "nood",
          "content": "B for me<br>https://aws.amazon.com/blogs/database/how-to-choose-the-best-disaster-recovery-option-for-your-amazon-aurora-mysql-cluster/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 477840,
          "date": "Sat 13 Nov 2021 23:48",
          "username": "jove",
          "content": "If cost is not a concern, global database is a better option than read replica.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 467438,
          "date": "Tue 02 Nov 2021 20:45",
          "username": "grekh001johnconnor",
          "content": "I think the answer is B<br><br>https://aws.amazon.com/about-aws/whats-new/2019/11/aurora-supports-in-place-conversion-to-global-database/<br><br>https://aws.amazon.com/blogs/database/how-to-choose-the-best-disaster-recovery-option-for-your-amazon-aurora-mysql-cluster/<br><br>\\\"Aurora Global Database provides the lowest consistent RTO and RPO option while requiring the least management overhead.\\\"I think you are right, the other options would work but B seems to be the faster",
          "upvote_count": "43",
          "selected_answers": ""
        },
        {
          "id": 476449,
          "date": "Thu 11 Nov 2021 20:45",
          "username": "johnconnor",
          "content": "I think you are right, the other options would work but B seems to be the faster",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#148",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company hosts an internal file-sharing application running on Amazon EC2 instances in VPC_A.  This application is backed by an Amazon ElastiCache cluster, which is in VPC_B and peered with VPC_A.  The company migrates its application instances from VPC_A to VPC_B.  Logs indicate that the file-sharing application no longer can connect to the ElastiCache cluster.<br>What should a database specialist do to resolve this issue?<br></p>",
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
              "choice": "<p>A. Create a second security group on the EC2 instances. Add an outbound rule to allow traffic from the ElastiCache cluster security group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Delete the ElastiCache security group. Add an interface VPC endpoint to enable the EC2 instances to connect to the ElastiCache cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the ElastiCache security group by adding outbound rules that allow traffic to VPC_B's CIDR blocks from the ElastiCache cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the ElastiCache security group by adding an inbound rule that allows traffic from the EC2 instances' security group to the ElastiCache cluster.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 148 discussion",
      "discusstion": [
        {
          "id": 594686,
          "date": "Fri 29 Apr 2022 22:32",
          "username": "novice_expert",
          "content": "You can update security groups to reference peer VPC group<br>https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 561250,
          "date": "Sat 05 Mar 2022 06:53",
          "username": "RotterDam",
          "content": "Has to be D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 555601,
          "date": "Thu 24 Feb 2022 23:12",
          "username": "tugboat",
          "content": "peering is best option",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 535697,
          "date": "Sat 29 Jan 2022 21:08",
          "username": "Hariru",
          "content": "Why not B?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 497274,
          "date": "Thu 09 Dec 2021 02:48",
          "username": "2025flakyt",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 488469,
          "date": "Sat 27 Nov 2021 20:46",
          "username": "jove",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 476551,
          "date": "Fri 12 Nov 2021 00:04",
          "username": "leunamEGMartinelli2025flakytjohnconnor",
          "content": "Option D. I don=C2=B4t know if its possible.. Since SGs are attached to the VPC, can you use it to reference on another VPC?You can update security groups to reference peer VPC group<br>https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.htmlI think you are right",
          "upvote_count": "4112",
          "selected_answers": ""
        },
        {
          "id": 487371,
          "date": "Fri 26 Nov 2021 14:05",
          "username": "GMartinelli2025flakyt",
          "content": "I don=C2=B4t know if its possible.. Since SGs are attached to the VPC, can you use it to reference on another VPC?You can update security groups to reference peer VPC group<br>https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 497273,
          "date": "Thu 09 Dec 2021 02:45",
          "username": "2025flakyt",
          "content": "You can update security groups to reference peer VPC group<br>https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 477881,
          "date": "Sun 14 Nov 2021 02:28",
          "username": "johnconnor",
          "content": "I think you are right",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#149",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A database specialist must load 25 GB of data files from a company's on-premises storage to an Amazon Neptune database.<br>Which approach to load the data is FASTEST?<br></p>",
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
              "choice": "<p>A. Upload the data to Amazon S3 and use the Loader command to load the data from Amazon S3 into the Neptune database.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Write a utility to read the data from the on-premises storage and run INSERT statements in a loop to load the data into the Neptune database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use the AWS CLI to load the data directly from the on-premises storage into the Neptune database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS DataSync to load the data directly from the on-premises storage into the Neptune database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 149 discussion",
      "discusstion": [
        {
          "id": 482852,
          "date": "Sat 20 Nov 2021 22:50",
          "username": "johnconnor",
          "content": "they point to the right place but the answer is wrong, should be A:<br>1.Copy the data files to an Amazon Simple Storage Service (Amazon S3) bucket.<br>2. Create an IAM role with Read and List access to the bucket.<br>3. Create an Amazon S3 VPC endpoint.<br>4. Start the Neptune loader by sending a request via HTTP to the Neptune DB instance.<br>5. The Neptune DB instance assumes the IAM role to load the data from the bucket.",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 595382,
          "date": "Sun 01 May 2022 03:15",
          "username": "novice_expert",
          "content": "A.  Upload the data to Amazon S3 and use the Loader command to load the data from Amazon S3 into the Neptune database.<br><br>1.Copy the data files to an Amazon Simple Storage Service (Amazon S3) bucket.<br>2. Create an IAM role with Read and List access to the bucket.<br>3. Create an Amazon S3 VPC endpoint.<br>4. Start the Neptune loader by sending a request via HTTP to the Neptune DB instance.<br>5. The Neptune DB instance assumes the IAM role to load the data from the bucket.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 562589,
          "date": "Mon 07 Mar 2022 13:03",
          "username": "RotterDam",
          "content": "Got this question in my exam. (i cleared it). A is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 477631,
          "date": "Sat 13 Nov 2021 17:28",
          "username": "leunamE",
          "content": "Answer A. ",
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
      "question_text": "<p>A finance company needs to make sure that its MySQL database backups are available for the most recent 90 days. All of the MySQL databases are hosted on<br>Amazon RDS for MySQL DB instances. A database specialist must implement a solution that meets the backup retention requirement with the least possible development effort.<br>Which approach should the database specialist take?<br></p>",
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
              "choice": "<p>A. Use AWS Backup to build a backup plan for the required retention period. Assign the DB instances to the backup plan.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the DB instances to enable the automated backup option. Select the required backup retention period.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Automate a daily cron job on an Amazon EC2 instance to create MySQL dumps, transfer to Amazon S3, and implement an S3 Lifecycle policy to meet the retention requirement.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS Lambda to schedule a daily manual snapshot of the DB instances. Delete snapshots that exceed the retention requirement.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 150 discussion",
      "discusstion": [
        {
          "id": 632432,
          "date": "Sun 17 Jul 2022 04:25",
          "username": "Chirantan",
          "content": "max limit for automated backups is 35 days hene manual snapshot is solution<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupRetention",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 629432,
          "date": "Sun 10 Jul 2022 06:42",
          "username": "Chirantan",
          "content": "You can set the backup retention period when you create a DB instance. If you don't set the backup retention period, the default backup retention period is one day if you create the DB instance using the Amazon RDS API or the AWS CLI. The default backup retention period is seven days if you create the DB instance using the console.<br><br>After you create a DB instance, you can modify the backup retention period. You can set the backup retention period to between 0 and 35 days. Setting the backup retention period to 0 disables automated backups. Manual snapshot limits (100 per Region) do not apply to automated backups.<br>max limit for automated backups is 35 days hen e manual snapshot is solution<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupRetention",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 619501,
          "date": "Tue 21 Jun 2022 01:46",
          "username": "megadba",
          "content": "RDS autobackup's retention period is max 35days",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 594588,
          "date": "Fri 29 Apr 2022 18:21",
          "username": "novice_expert",
          "content": "AWS Backup service + retention period set",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 554988,
          "date": "Thu 24 Feb 2022 01:37",
          "username": "tugboat",
          "content": "Agree with other comments",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 510161,
          "date": "Mon 27 Dec 2021 09:54",
          "username": "Shunpin",
          "content": "Ans: A<br>Auto Backup is 35 Max. Creating Backup plan and Create on-demand backup are the solution.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 502154,
          "date": "Wed 15 Dec 2021 14:05",
          "username": "mnzsql365",
          "content": "A for me - AWS Backup Service solution",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 497816,
          "date": "Thu 09 Dec 2021 15:58",
          "username": "nood",
          "content": "A for me<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html\t\t\t\t\t=09<br>\t\t\t\t\t=09<br>B is wrong , because Automated backups with unsupported MySQL storage engines\t.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 490553,
          "date": "Tue 30 Nov 2021 10:43",
          "username": "Justu",
          "content": "Automatic backups are only for max 35 days",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 477433,
          "date": "Sat 13 Nov 2021 13:14",
          "username": "hemantr",
          "content": "A https://aws.amazon.com/getting-started/hands-on/amazon-rds-backup-restore-using-aws-backup/",
          "upvote_count": "2",
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
      "question_text": "<p>An online advertising company uses an Amazon DynamoDb table as its data store. The table has Amazon DynamoDB Streams enabled and has a global secondary index on one of the keys. The table is encrypted using an AWS Key Management Service (AWS KMS) customer managed key.<br>The company has decided to expand its operations globally and wants to replicate the database in a different AWS Region by using DynamoDB global tables.<br>Upon review, an administrator notices the following:<br>-No role with the dynamodb: CreateGlobalTable permission exists in the account.<br>-An empty table with the same name exists in the new Region where replication is desired.<br>-A global secondary index with the same partition key but a different sort key exists in the new Region where replication is desired.<br>Which configurations will block the creation of a global table or the creation of a replica in the new Region? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#151",
          "answers": [
            {
              "choice": "<p>A. A global secondary index with the same partition key but a different sort key exists in the new Region where replication is desired.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. An empty table with the same name exists in the Region where replication is desired.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. No role with the dynamodb:CreateGlobalTable permission exists in the account.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. DynamoDB Streams is enabled for the table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. The table is encrypted using a KMS customer managed key.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 151 discussion",
      "discusstion": [
        {
          "id": 562036,
          "date": "Sun 06 Mar 2022 14:32",
          "username": "RotterDam",
          "content": "BC is the correct Answer.<br>A is NOT an issue. I've tested this by creating a different table name in a destination region with TWO GSIs one with the exact same name and indexes and one with a different name and index than the original table. GSIs are table specific. The Key constraint is a table with the same name should NOT exist and permissions to access should be there",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 707521,
          "date": "Sun 30 Oct 2022 00:27",
          "username": "rags1482miles_chong",
          "content": "Anser AB<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables_reqs_bestpractices.html<br>Requirements for adding a new replica table<br>If you want to add a new replica table to a global table, each of the following conditions must be true:<br><br>The table must have the same partition key as all of the other replicas.<br><br>The table must have the same write capacity management settings specified.<br><br>The table must have the same name as all of the other replicas.<br><br>The table must have DynamoDB Streams enabled, with the stream containing both the new and the old images of the item.<br><br>None of the new or existing replica tables in the global table can contain any data.<br><br>If global secondary indexes are specified, the following conditions must also be met:<br><br>The global secondary indexes must have the same name.<br><br>The global secondary indexes must have the same partition key and sort key (if present).B is wrong as indicated \\\"None of the new or existing replica tables in the global table can contain any data.\\\" so \\\"An empty table with the same name exists in the new Region where replication is desired\\\" should be acceptable.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 731020,
          "date": "Wed 30 Nov 2022 03:23",
          "username": "miles_chong",
          "content": "B is wrong as indicated \\\"None of the new or existing replica tables in the global table can contain any data.\\\" so \\\"An empty table with the same name exists in the new Region where replication is desired\\\" should be acceptable.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 681053,
          "date": "Tue 27 Sep 2022 20:16",
          "username": "Jiang_aws1Jiang_aws1",
          "content": "A.  No issue : as long as same index_name don't exist & it will create new 2nd indexQuestion asked : \\\"creating a global table\\\"so \\\"A\\\"not related ( about indexes etc )",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 690658,
          "date": "Mon 10 Oct 2022 04:22",
          "username": "Jiang_aws1",
          "content": "Question asked : \\\"creating a global table\\\"so \\\"A\\\"not related ( about indexes etc )",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595653,
          "date": "Sun 01 May 2022 18:07",
          "username": "novice_expertkhchan123",
          "content": "A.  A global secondary index with the same partition key but a different sort key exists in the new Region where replication is desired.<br>If global secondary indexes are specified, then the following conditions must also be met:<br>The global secondary indexes must have the same name.<br>The global secondary indexes must have the same hash key and sort key (if present).<br>https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html<br><br>The table must have the same name as all of the other replicas. (means B is out)C.  No role with the dynamodb:CreateGlobalTable permission exists in the account.<br>To create and maintain global tables in DynamoDB, you must have the dynamodb:CreateGlobalTable permission to access each of the following:<br>The replica table that you want to add.<br>Each existing replica that's already part of the global table.<br>The global table itself.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/gt_IAM.htmlYes, A and C. ",
          "upvote_count": "41",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 604278,
          "date": "Fri 20 May 2022 09:39",
          "username": "khchan123",
          "content": "Yes, A and C. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 540582,
          "date": "Fri 04 Feb 2022 19:42",
          "username": "soyyodario",
          "content": "B and C<br>C: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/gt_IAM.html<br>To create and maintain global tables in DynamoDB, you must have the dynamodb:CreateGlobalTable permission to access.<br>B: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.tutorial.html<br>The console checks to ensure that a table with the same name doesn't exist in the selected Region. If a table with the same name does exist, you must delete the existing table before you can create a new replica table in that Region.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 511120,
          "date": "Tue 28 Dec 2021 14:14",
          "username": "Shunpin",
          "content": "1. No role with DynamoDB, but Account with CreateGlobalTable permiession, so no issues to create Global table.<br>2. Change Sort key when replicate a table -don't think so<br>3. Name exists in another region -Error pop-up.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AB"
        },
        {
          "id": 510787,
          "date": "Tue 28 Dec 2021 05:12",
          "username": "Dantehilary",
          "content": "BC!!!!!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 509353,
          "date": "Sun 26 Dec 2021 01:37",
          "username": "SMAZ",
          "content": "B,C<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.tutorial.html<br>From the Available replication Regions dropdown, choose US West (Oregon).<br><br>The console checks to ensure that a table with the same name doesn't exist in the selected Region. If a table with the same name does exist, you must delete the existing table before you can create a new replica table in that Region.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 480666,
          "date": "Thu 18 Nov 2021 12:56",
          "username": "Sp230johnconnor",
          "content": "Should be A and CYou are right",
          "upvote_count": "32",
          "selected_answers": ""
        },
        {
          "id": 483801,
          "date": "Mon 22 Nov 2021 02:48",
          "username": "johnconnor",
          "content": "You are right",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 477677,
          "date": "Sat 13 Nov 2021 19:09",
          "username": "leunamE",
          "content": "Options A and B. ",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#152",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A large automobile company is migrating the database of a critical financial application to Amazon DynamoDB.  The company's risk and compliance policy requires that every change in the database be recorded as a log entry for audits. The system is anticipating more than 500,000 log entries each minute. Log entries should be stored in batches of at least 100,000 records in each file in Apache Parquet format.<br>How should a database specialist implement these requirements with DynamoDB?<br></p>",
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
              "choice": "<p>A. Enable Amazon DynamoDB Streams on the table. Create an AWS Lambda function triggered by the stream. Write the log entries to an Amazon S3 object.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a backup plan in AWS Backup to back up the DynamoDB table once a day. Create an AWS Lambda function that restores the backup in another table and compares both tables for changes. Generate the log entries and write them to an Amazon S3 object.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable AWS CloudTrail logs on the table. Create an AWS Lambda function that reads the log files once an hour and filters DynamoDB API actions. Write the filtered log files to Amazon S3.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable Amazon DynamoDB Streams on the table. Create an AWS Lambda function triggered by the stream. Write the log entries to an Amazon Kinesis Data Firehose delivery stream with buffering and Amazon S3 as the destination.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 152 discussion",
      "discusstion": [
        {
          "id": 555579,
          "date": "Thu 24 Feb 2022 22:29",
          "username": "tugboat",
          "content": "https://aws.amazon.com/blogs/big-data/streaming-amazon-dynamodb-data-into-a-centralized-data-lake/<br>- Kinesis Data Firehose =E2=80=93 Kinesis Data Firehose helps to reliably load streaming data into data lakes, data stores, and analytics services. It can capture, transform, and deliver streaming data to Amazon S3 and other destinations. It's a fully managed service that automatically scales to match the throughput of your data and requires no ongoing administration. It can also batch, compress, transform, and encrypt your data streams before loading, which minimizes the amount of storage used and increases security.",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 748572,
          "date": "Sun 18 Dec 2022 04:00",
          "username": "khun",
          "content": "D make sense.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594649,
          "date": "Fri 29 Apr 2022 20:47",
          "username": "novice_expert",
          "content": "DynamoDB Streams -> Lambda function ->log entriesKinesis Data Firehose delivery stream with buffering -> S3",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 527032,
          "date": "Tue 18 Jan 2022 22:58",
          "username": "CloudGuru99user0001sachin",
          "content": "Should be A as per https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.htmlwith A you cant batch them as per the requirements ,with D you canYou can write lambda to start writing to new S3 object ( file ) after it has writter 10000 records to it. Option A is more reasonable .",
          "upvote_count": "121",
          "selected_answers": ""
        },
        {
          "id": 548784,
          "date": "Wed 16 Feb 2022 17:58",
          "username": "user0001sachin",
          "content": "with A you cant batch them as per the requirements ,with D you canYou can write lambda to start writing to new S3 object ( file ) after it has writter 10000 records to it. Option A is more reasonable .",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 629419,
          "date": "Sun 10 Jul 2022 05:14",
          "username": "sachin",
          "content": "You can write lambda to start writing to new S3 object ( file ) after it has writter 10000 records to it. Option A is more reasonable .",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 492183,
          "date": "Thu 02 Dec 2021 07:25",
          "username": "Dantehilary",
          "content": "DDDDDDDD",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 486351,
          "date": "Thu 25 Nov 2021 01:42",
          "username": "jove",
          "content": "Option D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 485878,
          "date": "Wed 24 Nov 2021 12:07",
          "username": "GMartinelli",
          "content": "Option D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 478143,
          "date": "Sun 14 Nov 2021 14:47",
          "username": "leunamE",
          "content": "Option D. ",
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
      "question_text": "<p>A company released a mobile game that quickly grew to 10 million daily active users in North America. The game's backend is hosted on AWS and makes extensive use of an Amazon DynamoDB table that is configured with a TTL attribute.<br>When an item is added or updated, its TTL is set to the current epoch time plus 600 seconds. The game logic relies on old data being purged so that it can calculate rewards points accurately. Occasionally, items are read from the table that are several hours past their TTL expiry.<br>How should a database specialist fix this issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#153",
          "answers": [
            {
              "choice": "<p>A. Use a client library that supports the TTL functionality for DynamoDB. <br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Include a query filter expression to ignore items with an expired TTL.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set the ConsistentRead parameter to true when querying the table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a local secondary index on the TTL attribute.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 153 discussion",
      "discusstion": [
        {
          "id": 478773,
          "date": "Mon 15 Nov 2021 16:27",
          "username": "toppic26",
          "content": "Answer is B https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/howitworks-ttl.html",
          "upvote_count": "7",
          "selected_answers": ""
        },
        {
          "id": 701603,
          "date": "Sat 22 Oct 2022 17:16",
          "username": "Satprave",
          "content": "B<br>Items that have expired, but haven't yet been deleted by TTL, still appear in reads, queries, and scans. If you do not want expired items in the result set, you must filter them out. To do this, use a filter expression that returns only items where the Time to Live expiration value is greater than the current time in epoch format. For more information, see Filter expressions for scan.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 594770,
          "date": "Sat 30 Apr 2022 03:17",
          "username": "novice_expert",
          "content": "TTL expires recs, but delete process may run later",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 555707,
          "date": "Fri 25 Feb 2022 03:45",
          "username": "tugboat",
          "content": "async deletes via tel",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 490579,
          "date": "Tue 30 Nov 2021 11:25",
          "username": "GMartinelli",
          "content": "option B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 490285,
          "date": "Tue 30 Nov 2021 01:17",
          "username": "jove",
          "content": "Answer is B",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#154",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A development team at an international gaming company is experimenting with Amazon DynamoDB to store in-game events for three mobile games. The most popular game hosts a maximum of 500,000 concurrent users, and the least popular game hosts a maximum of 10,000 concurrent users. The average size of an event is 20 KB, and the average user session produces one event each second. Each event is tagged with a time in milliseconds and a globally unique identifier.<br>The lead developer created a single DynamoDB table for the events with the following schema:<br>-Partition key: game name<br>-Sort key: event identifier<br>-Local secondary index: player identifier<br>-Event time<br>The tests were successful in a small-scale development environment. However, when deployed to production, new events stopped being added to the table and the logs show DynamoDB failures with the ItemCollectionSizeLimitExceededException error code.<br>Which design change should a database specialist recommend to the development team?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#154",
          "answers": [
            {
              "choice": "<p>A. Use the player identifier as the partition key. Use the event time as the sort key. Add a global secondary index with the game name as the partition key and the event time as the sort key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create two tables. Use the game name as the partition key in both tables. Use the event time as the sort key for the first table. Use the player identifier as the sort key for the second table.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Replace the sort key with a compound value consisting of the player identifier collated with the event time, separated by a dash. Add a local secondary index with the player identifier as the sort key.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create one table for each game. Use the player identifier as the partition key. Use the event time as the sort key.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 154 discussion",
      "discusstion": [
        {
          "id": 595404,
          "date": "Sun 01 May 2022 04:29",
          "username": "novice_expertStteve",
          "content": "ItemCollectionSizeLimitExceededException<br>Message: Collection size exceeded.<br>For a table with a local secondary index, a group of items with the same partition key value has exceeded the maximum size limit of 10 GB.  For more information on item collections, see Item Collections.<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html<br><br>Problem is too much data in partition cause issues with LocalSecondaryIndex.<br>one game_id had 500K users with 20K data per event10GB/event<br><br>Solution is separate table for game andpartition by player_id<br>Each table will have max 500000 partitions<br>each partition gets 3600 events per hour * 20KB/events72 MB. .. so it can store data for 10GB/72 MB13 hours data before ItemCollectionSizeLimitExceededException for option D design. For game I guess TTL would be set to avoid itAre you asking the developers to rewrite the application as changing from 1 table to 3 tables ?",
          "upvote_count": "52",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 660265,
          "date": "Mon 05 Sep 2022 16:29",
          "username": "Stteve",
          "content": "Are you asking the developers to rewrite the application as changing from 1 table to 3 tables ?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 755114,
          "date": "Sat 24 Dec 2022 21:01",
          "username": "lollyj",
          "content": "Chose D because the partition key is to have high cardinality.Option A and C are out of the question because it is inferring to modify the table which is not possible on the fly.Option B also didn't seem to feasible",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 733927,
          "date": "Fri 02 Dec 2022 17:57",
          "username": "Sab",
          "content": "B and C is out of question. Between A and D, problem with A is the global index with game name as the partition key. This will create hot partitions since one game has over 500000 concurrent users. So better to have 3 tables, with players are partition key.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 562590,
          "date": "Mon 07 Mar 2022 13:04",
          "username": "RotterDam",
          "content": "Got this question in my exam. (i cleared it). But this is one of those questions I dont know if I got it right...I chose (D)",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 562107,
          "date": "Sun 06 Mar 2022 16:56",
          "username": "RotterDamRotterDam",
          "content": "I feel itsA<br>LSI is the problem here with Low cardinality. But remember the question is asking about doing queries using game name. So you do need some form of index for that and GSI will solve it. This isnt being addressed in (D)Actually GSI will also have a problem with very low cardinalityas game name is a terrible choice for partition key. I will go with (D) - damn this is a tough one",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 562146,
          "date": "Sun 06 Mar 2022 17:53",
          "username": "RotterDam",
          "content": "Actually GSI will also have a problem with very low cardinalityas game name is a terrible choice for partition key. I will go with (D) - damn this is a tough one",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 540592,
          "date": "Fri 04 Feb 2022 20:06",
          "username": "soyyodarioRotterDamRBSKRBSK",
          "content": "I vote for D<br>An item collection is too large. This exception is only returned for tables that have one or more local secondary indexes.<br>https://docs.aws.amazon.com/sdk-for-ruby/v3/api/Aws/DynamoDB/Types/ItemCollectionSizeLimitExceededException.htmlIs the Global SecondaryIndex having a very low cardinality also an issue?No, 10GB limit does not apply to GSI.<br><br>The maximum size of any item collection for a table which has one or more local secondary indexes is 10 GB.  This does not apply to item collections in tables without local secondary indexes, and also does not apply to item collections in global secondary indexes. Only tables that have one or more local secondary indexes are affected.Hence \\\"A\\\" should be a right ans too. With A, we do not need to change the application like \\\"D\\\". Hence my vote will be to \\\"A\\\"",
          "upvote_count": "2111",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 562099,
          "date": "Sun 06 Mar 2022 16:36",
          "username": "RotterDamRBSKRBSK",
          "content": "Is the Global SecondaryIndex having a very low cardinality also an issue?No, 10GB limit does not apply to GSI.<br><br>The maximum size of any item collection for a table which has one or more local secondary indexes is 10 GB.  This does not apply to item collections in tables without local secondary indexes, and also does not apply to item collections in global secondary indexes. Only tables that have one or more local secondary indexes are affected.Hence \\\"A\\\" should be a right ans too. With A, we do not need to change the application like \\\"D\\\". Hence my vote will be to \\\"A\\\"",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 754159,
          "date": "Fri 23 Dec 2022 12:42",
          "username": "RBSKRBSK",
          "content": "No, 10GB limit does not apply to GSI.<br><br>The maximum size of any item collection for a table which has one or more local secondary indexes is 10 GB.  This does not apply to item collections in tables without local secondary indexes, and also does not apply to item collections in global secondary indexes. Only tables that have one or more local secondary indexes are affected.Hence \\\"A\\\" should be a right ans too. With A, we do not need to change the application like \\\"D\\\". Hence my vote will be to \\\"A\\\"",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 754162,
          "date": "Fri 23 Dec 2022 12:44",
          "username": "RBSK",
          "content": "Hence \\\"A\\\" should be a right ans too. With A, we do not need to change the application like \\\"D\\\". Hence my vote will be to \\\"A\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 522981,
          "date": "Thu 13 Jan 2022 18:41",
          "username": "szl0144",
          "content": "I think D is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 508788,
          "date": "Fri 24 Dec 2021 20:33",
          "username": "jove",
          "content": "I'd go with option D",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 489049,
          "date": "Sun 28 Nov 2021 11:12",
          "username": "AlexChihjove",
          "content": "I think A make sense to me as the document mention: \\\"The maximum size of any item collection is 10 GB.  This limit does not apply to tables without local secondary indexes; only tables that have one or more local secondary indexes are affected\\\", avoid to use local secondary index will be the better solution.Why not option D?",
          "upvote_count": "32",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 508772,
          "date": "Fri 24 Dec 2021 20:21",
          "username": "jove",
          "content": "Why not option D?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 483668,
          "date": "Sun 21 Nov 2021 22:11",
          "username": "johnconnor",
          "content": "C Makes sense to me",
          "upvote_count": "2",
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
      "question_text": "<p>An ecommerce company recently migrated one of its SQL Server databases to an Amazon RDS for SQL Server Enterprise Edition DB instance. The company expects a spike in read traffic due to an upcoming sale. A database specialist must create a read replica of the DB instance to serve the anticipated read traffic.<br>Which actions should the database specialist take before creating the read replica? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#155",
          "answers": [
            {
              "choice": "<p>A. Identify a potential downtime window and stop the application calls to the source DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Ensure that automatic backups are enabled for the source DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Ensure that the source DB instance is a Multi-AZ deployment with Always ON Availability Groups.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Ensure that the source DB instance is a Multi-AZ deployment with SQL Server Database Mirroring (DBM).<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Modify the read replica parameter group setting and set the value to 1.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 155 discussion",
      "discusstion": [
        {
          "id": 474599,
          "date": "Tue 09 Nov 2021 04:41",
          "username": "alwaysAstudent",
          "content": "Ans B,C<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.ReadReplicas.html",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 757660,
          "date": "Mon 26 Dec 2022 17:54",
          "username": "parle101",
          "content": "Ans B, C<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.ReadReplicas.html<br><br>Before a DB instance can serve as a source instance for replication, you must enable automatic backups on the source DB instance. To do so, you set the backup retention period to a value other than 0. The source DB instance must be a Multi-AZ deployment with Always On Availability Groups (AGs). Setting this type of deployment also enforces that automatic backups are enabled.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 755124,
          "date": "Sat 24 Dec 2022 21:24",
          "username": "lollyj",
          "content": "Makes the most sense to me",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 594011,
          "date": "Thu 28 Apr 2022 21:28",
          "username": "novice_expert",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.ReadReplicas.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 587180,
          "date": "Sun 17 Apr 2022 12:56",
          "username": "megadba",
          "content": "Before a DB instance can serve as a source instance for replication, you must enable automatic backups on the source DB instance. To do so, you set the backup retention period to a value other than 0. The source DB instance must be a Multi-AZ deployment with Always On Availability Groups (AGs). Setting this type of deployment also enforces that automatic backups are enabled.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BC"
        },
        {
          "id": 507371,
          "date": "Wed 22 Dec 2021 21:43",
          "username": "jove",
          "content": "B, C<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.ReadReplicas.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 504601,
          "date": "Sun 19 Dec 2021 04:05",
          "username": "mnzsql365",
          "content": "B & C<br>Before a DB instance can serve as a source instance for replication, you must enable automatic backups on the source DB instance. To do so, you set the backup retention period to a value other than 0. The source DB instance must be a Multi-AZ deployment with Always On Availability Groups (AGs). Setting this type of deployment also enforces that automatic backups are enabled.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#156",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running a two-tier ecommerce application in one AWS account. The application is backed by an Amazon RDS for MySQL Multi-AZ DB instance. A developer mistakenly deleted the DB instance in the production environment. The company restores the database, but this event results in hours of downtime and lost revenue.<br>Which combination of changes would minimize the risk of this mistake occurring in the future? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: ACD</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#156",
          "answers": [
            {
              "choice": "<p>A. Grant least privilege to groups, IAM users, and roles.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Allow all users to restore a database from a backup.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable deletion protection on existing production DB instances.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use an ACL policy to restrict users from DB instance deletion.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable AWS CloudTrail logging and Enhanced Monitoring.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 156 discussion",
      "discusstion": [
        {
          "id": 561249,
          "date": "Sat 05 Mar 2022 06:51",
          "username": "RotterDam",
          "content": "ACL is used ONLY WITH S3. AC are absolutely correct but the question seems flawed. Enhanced Monitoring WONT help with a developer from deleting the instance",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 733928,
          "date": "Fri 02 Dec 2022 18:03",
          "username": "Sab",
          "content": "ACL is not supported with RDS<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html<br><br>Access control lists (ACLs) in Amazon RDS<br>Supports access control lists (ACLs) - No",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594684,
          "date": "Fri 29 Apr 2022 22:27",
          "username": "novice_expert",
          "content": "Least Priv<br>Delete Protection<br>Access control",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 567145,
          "date": "Sun 13 Mar 2022 20:17",
          "username": "Dantas",
          "content": "There's no 3rd correct option.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 555597,
          "date": "Thu 24 Feb 2022 23:03",
          "username": "tugboat",
          "content": "AC<br>D with IAM not ACL",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: ACD"
        },
        {
          "id": 508350,
          "date": "Fri 24 Dec 2021 07:21",
          "username": "suhasraj",
          "content": "There are only 2 right answers here.. question or answer need to be corrected ..A nad C only are right",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 503338,
          "date": "Fri 17 Dec 2021 04:52",
          "username": "mnzsql365jove",
          "content": "A, C & D. <br>C - ACL is the IAM policy, preventing users<br> from deleting a specific DB instance.Do you mean there is a typo in option D? Should it be \\\"Use an IAM policy to ... \\\" ?",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 505732,
          "date": "Tue 21 Dec 2021 00:16",
          "username": "jove",
          "content": "Do you mean there is a typo in option D? Should it be \\\"Use an IAM policy to ... \\\" ?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 497271,
          "date": "Thu 09 Dec 2021 02:34",
          "username": "2025flakytjove",
          "content": "ACE is the correct answer.<br>You can't use ACL policy to restrict users. You can only use IAM policy to restrict usersHow can you use AWS CloudTrail logging and Enhanced Monitoring to restrict users from DB instance deletion?",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 505731,
          "date": "Tue 21 Dec 2021 00:14",
          "username": "jove",
          "content": "How can you use AWS CloudTrail logging and Enhanced Monitoring to restrict users from DB instance deletion?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 482229,
          "date": "Sat 20 Nov 2021 03:49",
          "username": "GaryYjovejove",
          "content": "The answer is ACDA & C is clear but how can you use an ACL policy to restrict users from DB instance deletion?The only use case for ACL I can think of is to block traffic from everywhere except the App server. I'm not sure if that make sense to restrict users from DB instance deletion. On the other hand enabling enhanced monitoring won't help either..",
          "upvote_count": "221",
          "selected_answers": ""
        },
        {
          "id": 488467,
          "date": "Sat 27 Nov 2021 20:45",
          "username": "jovejove",
          "content": "A & C is clear but how can you use an ACL policy to restrict users from DB instance deletion?The only use case for ACL I can think of is to block traffic from everywhere except the App server. I'm not sure if that make sense to restrict users from DB instance deletion. On the other hand enabling enhanced monitoring won't help either..",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 505730,
          "date": "Tue 21 Dec 2021 00:14",
          "username": "jove",
          "content": "The only use case for ACL I can think of is to block traffic from everywhere except the App server. I'm not sure if that make sense to restrict users from DB instance deletion. On the other hand enabling enhanced monitoring won't help either..",
          "upvote_count": "1",
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
      "question_text": "<p>A financial services company uses Amazon RDS for Oracle with Transparent Data Encryption (TDE). The company is required to encrypt its data at rest at all times. The key required to decrypt the data has to be highly available, and access to the key must be limited. As a regulatory requirement, the company must have the ability to rotate the encryption key on demand. The company must be able to make the key unusable if any potential security breaches are spotted. The company also needs to accomplish these tasks with minimum overhead.<br>What should the database administrator use to set up the encryption to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#157",
          "answers": [
            {
              "choice": "<p>A. AWS CloudHSM<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. AWS Key Management Service (AWS KMS) with an AWS managed key<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. AWS Key Management Service (AWS KMS) with server-side encryption<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. AWS Key Management Service (AWS KMS) CMK with customer-provided material<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 157 discussion",
      "discusstion": [
        {
          "id": 565849,
          "date": "Sat 12 Mar 2022 01:06",
          "username": "Dantas",
          "content": "Key rotation =E2=9C=93<br>Key deletion =E2=9C=93<br>Minimal overhead =E2=9C=93",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 755130,
          "date": "Sat 24 Dec 2022 21:40",
          "username": "lollyj",
          "content": "It was a toss between C and D however SSE provides less overhead and maintenance than D. I could be wrong.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 709404,
          "date": "Tue 01 Nov 2022 20:36",
          "username": "rags1482",
          "content": "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-mgmt<br><br>Customer managed keys are KMS keys in your AWS account that you create, own, and manage. You have full control over these KMS keys, including establishing and maintaining their key policies, IAM policies, and grants, enabling and disabling them, rotating their cryptographic material, adding tags, creating aliases that refer to the KMS keys, and scheduling the KMS keys for deletion.<br><br>Answer D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 646267,
          "date": "Sat 13 Aug 2022 11:58",
          "username": "shammous",
          "content": "For those mentioning HSM: \\\"You cannot use an Oracle instance in Amazon Relational Database Service (Amazon RDS) to integrate with AWS CloudHSM. You must install Oracle Database on an Amazon EC2 instance.\\\" Ref: https://docs.aws.amazon.com/cloudhsm/latest/userguide/oracle-tde.html<br>This eliminates answer A. <br>The key words that would make me choose answer D is \\\"Rotate encryption key on demand\\\". Only CMK allows to do that. AWS managed key are automatically rotated every 1 year and the organization can't change that.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 629429,
          "date": "Sun 10 Jul 2022 06:24",
          "username": "Chirantan",
          "content": "Could be A<br><br>Enable transparent data encryption (TDE) for Oracle databases<br>Copy Plain Link[] l : t - s[] t - s - l<br>Some versions of Oracle's database software offer a feature called Transparent Data Encryption (TDE). With TDE, the database software encrypts data before storing it on disk. The data in the database's table columns or tablespaces is encrypted with a table key or tablespace key. These keys are encrypted with the TDE master encryption key. You can store the TDE master encryption key in the HSMs in your AWS CloudHSM cluster, which provides additional security.<br>https://docs.aws.amazon.com/cloudhsm/latest/userguide/use-cases.html#transparent-data-encryption",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 619928,
          "date": "Tue 21 Jun 2022 17:54",
          "username": "sachin",
          "content": "Could be A because Cloud HSM is recently added to Oracle RDS<br>https://aws.amazon.com/blogs/security/aws-cloudhsm-is-now-integrated-with-amazon-rds-for-oracle-and-provides-enhanced-management-tools/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 619925,
          "date": "Tue 21 Jun 2022 17:51",
          "username": "sachin",
          "content": "Will go with D",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 594547,
          "date": "Fri 29 Apr 2022 17:23",
          "username": "novice_expert",
          "content": "KMS CMK",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 559435,
          "date": "Wed 02 Mar 2022 14:25",
          "username": "mike3g2000mike3g2000DevoteamAnalytix",
          "content": "This one A for me:<br>https://docs.aws.amazon.com/cloudhsm/latest/userguide/use-cases.htmlYou can't use cloudHSM with RDS, database has to be on ec2. D is the correct answer.Sure? https://aws.amazon.com/de/blogs/security/aws-cloudhsm-is-now-integrated-with-amazon-rds-for-oracle-and-provides-enhanced-management-tools/",
          "upvote_count": "122",
          "selected_answers": ""
        },
        {
          "id": 568330,
          "date": "Tue 15 Mar 2022 12:41",
          "username": "mike3g2000DevoteamAnalytix",
          "content": "You can't use cloudHSM with RDS, database has to be on ec2. D is the correct answer.Sure? https://aws.amazon.com/de/blogs/security/aws-cloudhsm-is-now-integrated-with-amazon-rds-for-oracle-and-provides-enhanced-management-tools/",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 616241,
          "date": "Tue 14 Jun 2022 15:03",
          "username": "DevoteamAnalytix",
          "content": "Sure? https://aws.amazon.com/de/blogs/security/aws-cloudhsm-is-now-integrated-with-amazon-rds-for-oracle-and-provides-enhanced-management-tools/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 554976,
          "date": "Thu 24 Feb 2022 01:22",
          "username": "tugboat",
          "content": "Per - https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html<br>You must manage different keys for each encryption method.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 554931,
          "date": "Wed 23 Feb 2022 23:43",
          "username": "kped21",
          "content": "D - CMK",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 478533,
          "date": "Mon 15 Nov 2021 09:13",
          "username": "toppic26",
          "content": "Look at rotation: Customer managed have on demand. Question asks for it https://docs.aws.amazon.com/whitepapers/latest/kms-best-practices/aws-managed-and-customer-managed-cmks.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 477330,
          "date": "Sat 13 Nov 2021 08:07",
          "username": "hemantr",
          "content": "D.  https://docs.aws.amazon.com/whitepapers/latest/kms-best-practices/aws-managed-and-customer-managed-cmks.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 475110,
          "date": "Tue 09 Nov 2021 23:52",
          "username": "leunamE",
          "content": "D.  AWS Key Management Service (AWS KMS) CMK with customer-provided material",
          "upvote_count": "4",
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
      "question_text": "<p>A company is setting up a new Amazon RDS for SQL Server DB instance. The company wants to enable SQL Server auditing on the database.<br>Which combination of steps should a database specialist take to meet this requirement? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#158",
          "answers": [
            {
              "choice": "<p>A. Create a service-linked role for Amazon RDS that grants permissions for Amazon RDS to store audit logs on Amazon S3.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Set up a parameter group to configure an IAM role and an Amazon S3 bucket for audit log storage. Associate the parameter group with the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Disable Multi-AZ on the DB instance, and then enable auditing. Enable Multi-AZ after auditing is enabled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Disable automated backup on the DB instance, and then enable auditing. Enable automated backup after auditing is enabled.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Set up an options group to configure an IAM role and an Amazon S3 bucket for audit log storage. Associate the options group with the DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 158 discussion",
      "discusstion": [
        {
          "id": 595024,
          "date": "Sat 30 Apr 2022 15:13",
          "username": "novice_expert",
          "content": "A.  service-linked role that grants permissions to RDS to store audit logs on S3.<br>x B.  parameter group (it is for db params, options is for features )<br>x C.  Disable<br>x D.  DisableE. options group to configure an IAM role and an S3 bucket for audit log storage. Associate the options group with the DB instance.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 562568,
          "date": "Mon 07 Mar 2022 12:29",
          "username": "RotterDam",
          "content": "Got this question in my exam. (i cleared it). AE is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 561561,
          "date": "Sat 05 Mar 2022 19:08",
          "username": "RotterDam",
          "content": "A&E are correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 497785,
          "date": "Thu 09 Dec 2021 15:18",
          "username": "2025flakyt",
          "content": "A & E is correct<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 496500,
          "date": "Wed 08 Dec 2021 04:13",
          "username": "Dantehilary",
          "content": "yeah A & E",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 490918,
          "date": "Tue 30 Nov 2021 19:50",
          "username": "grekh001",
          "content": "I think its A and E<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.SQLServer.Options.Audit.html",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#159",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A database specialist is creating an AWS CloudFormation stack. The database specialist wants to prevent accidental deletion of an Amazon RDS<br>ProductionDatabase resource in the stack.<br>Which solution will meet this requirement?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#159",
          "answers": [
            {
              "choice": "<p>A. Create a stack policy to prevent updates. Include \"Effect\" : \"ProductionDatabase\" and \"Resource\" : \"Deny\" in the policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS CloudFormation stack in XML format. Set xAttribute as false.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an RDS DB instance without the DeletionPolicy attribute. Disable termination protection.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a stack policy to prevent updates. Include \"Effect\" : \"Deny\" and \"Resource\" : \"ProductionDatabase\" in the policy.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 159 discussion",
      "discusstion": [
        {
          "id": 499816,
          "date": "Sun 12 Dec 2021 07:06",
          "username": "james90",
          "content": "The answer is D.  https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html<br>\\\"When you set a stack policy, all resources are protected by default. To allow updates on all resources, we add an Allow statement that allows all actions on all resources. Although the Allow statement specifies all resources, the explicit Deny statement overrides it for the resource with the ProductionDatabase logical ID.  This Deny statement prevents all update actions, such as replacement or deletion, on the ProductionDatabase resource.\\\"",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 595210,
          "date": "Sat 30 Apr 2022 20:33",
          "username": "novice_expert",
          "content": "stack policy<br>Effect: DENY<br>Resource: <ARN of the Production Database>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 562578,
          "date": "Mon 07 Mar 2022 12:46",
          "username": "RotterDam",
          "content": "Got this question in my exam. (i cleared it). D is correct",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 561730,
          "date": "Sun 06 Mar 2022 02:28",
          "username": "RotterDam",
          "content": "Can barely read the answers but the correct answer is (D)<br>Effect: DENY<br>Resource: <ARN of the Production Database>",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#160",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An ecommerce company migrates an on-premises MongoDB database to Amazon DocumentDB (with MongoDB compatibility). After the migration, a database specialist realizes that encryption at rest has not been turned on for the Amazon DocumentDB cluster.<br>What should the database specialist do to enable encryption at rest for the Amazon DocumentDB cluster?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#160",
          "answers": [
            {
              "choice": "<p>A. Take a snapshot of the Amazon DocumentDB cluster. Restore the unencrypted snapshot as a new cluster while specifying the encryption option, and provide an AWS Key Management Service (AWS KMS) key.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable encryption for the Amazon DocumentDB cluster on the AWS Management Console. Reboot the cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the Amazon DocumentDB cluster by using the modify-db-cluster command with the --storage-encrypted parameter set to true.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a new encrypted instance to the Amazon DocumentDB cluster, and then delete an unencrypted instance from the cluster. Repeat until all instances are encrypted.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 160 discussion",
      "discusstion": [
        {
          "id": 476935,
          "date": "Fri 12 Nov 2021 14:00",
          "username": "Notsjohnconnor",
          "content": "I'll go A. <br>\\\"Limitations for Amazon DocumentDB Encrypted Clusters<br>You can enable or disable encryption at rest for an Amazon DocumentDB cluster only at the time that it is created, not after the cluster has been created. However, you can create an encrypted copy of an unencrypted cluster by creating a snapshot of the unencrypted cluster, and then restoring the unencrypted snapshot as a new cluster while specifying the encryption at rest option. \\\"<br>https://docs.aws.amazon.com/documentdb/latest/developerguide/encryption-at-rest.htmlyou are absolutely right, about 80% of the answers on this exam are wrong, if it wasn't for the comment sections it would be useless.",
          "upvote_count": "133",
          "selected_answers": ""
        },
        {
          "id": 478001,
          "date": "Sun 14 Nov 2021 09:14",
          "username": "johnconnor",
          "content": "you are absolutely right, about 80% of the answers on this exam are wrong, if it wasn't for the comment sections it would be useless.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 755210,
          "date": "Sat 24 Dec 2022 23:36",
          "username": "lollyj",
          "content": "went with this choice",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 594739,
          "date": "Sat 30 Apr 2022 02:10",
          "username": "novice_expert",
          "content": "for DocumentDB only<br>snapshot of the unencrypted cluster<br>-> restoring the unencrypted snapshot as a new cluster while specifying the encryption at rest option.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 555608,
          "date": "Thu 24 Feb 2022 23:25",
          "username": "tugboat",
          "content": "correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 488487,
          "date": "Sat 27 Nov 2021 21:15",
          "username": "jove",
          "content": "\\\"... you can create an encrypted copy of an unencrypted cluster by creating a snapshot of the unencrypted cluster, and then restoring the unencrypted snapshot as a new cluster while specifying the encryption at rest option\\\"",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 487412,
          "date": "Fri 26 Nov 2021 14:51",
          "username": "GMartinelli",
          "content": "Option A",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#161",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company that analyzes the stock market has two offices: one in the us-east-1 Region and another in the eu-west-2 Region. The company wants to implement an AWS database solution that can provide fast and accurate updates.<br>The office in eu-west-2 has dashboards with complex analytical queries to display the data. The company will use these dashboards to make buying decisions, so the dashboards must have access to the application data in less than 1 second.<br>Which solution meets these requirements and provides the MOST up-to-date dashboard?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#161",
          "answers": [
            {
              "choice": "<p>A. Deploy an Amazon RDS DB instance in us-east-1 with a read replica instance in eu-west-2. Create an Amazon ElastiCache cluster in eu-west-2 to cache data from the read replica to generate the dashboards.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use an Amazon DynamoDB global table in us-east-1 with replication into eu-west-2. Use multi-active replication to ensure that updates are quickly propagated to eu-west-2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an Amazon Aurora global database. Deploy the primary DB cluster in us-east-1. Deploy the secondary DB cluster in eu-west-2. Configure the dashboard application to read from the secondary cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Deploy an Amazon RDS for MySQL DB instance in us-east-1 with a read replica instance in eu-west-2. Configure the dashboard application to read from the read replica.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 161 discussion",
      "discusstion": [
        {
          "id": 497956,
          "date": "Thu 09 Dec 2021 19:21",
          "username": "2025flakyt",
          "content": "C is correct<br>Amazon Aurora global databases span multiple AWS Regions, enabling low latency global reads and providing fast recovery from the rare outage that might affect an entire AWS Region. An Aurora global database has a primary DB cluster in one Region, and up to five secondary DB clusters in different Regions.<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html",
          "upvote_count": "6",
          "selected_answers": ""
        },
        {
          "id": 755235,
          "date": "Sat 24 Dec 2022 23:54",
          "username": "lollyj",
          "content": "logical choice",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 748591,
          "date": "Sun 18 Dec 2022 04:58",
          "username": "khun",
          "content": "Aurora global DB it is. Letter C. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595127,
          "date": "Sat 30 Apr 2022 17:34",
          "username": "novice_expert",
          "content": "advanced analytical queries > RDS<br>< 1 sec > Aurora Global<br><br> Use an Amazon Aurora global database. Deploy the primary DB cluster in us-east-1. Deploy the secondary DB cluster in eu-west-2. Configure the dashboard application to read from the secondary cluster.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 529520,
          "date": "Sat 22 Jan 2022 02:43",
          "username": "ShinytopologyShinytopologyrlnd2000",
          "content": "Answer is C. <br>Amazon Aurora Global Database is designed for globally distributed applications, allowing a single Amazon Aurora database to span multiple AWS regions.<br>Global Database uses storage-based replication with typical latency of less than 1 second, using dedicated infrastructure that leaves your database fully available to serve application workloads.<br>https://aws.amazon.com/rds/aurora/global-database/A is wrong. Read Replica can only be deployed in the same region. ElasticCache only cache data for app, but not ensure replication speed between primary node and replica.B.  Multi-active replication data in all Regions is eventually consistent. This means replica data in other region may not be up to date.<br>C is correct. Use an Amazon Aurora global database for replication cross region under 1 second.D.  Same as AGreat explanation, I asked myself why not B and you are right, \\\"eventually consistent\\\" Thanks. Now is clear.",
          "upvote_count": "131",
          "selected_answers": ""
        },
        {
          "id": 529525,
          "date": "Sat 22 Jan 2022 02:59",
          "username": "Shinytopologyrlnd2000",
          "content": "A is wrong. Read Replica can only be deployed in the same region. ElasticCache only cache data for app, but not ensure replication speed between primary node and replica.B.  Multi-active replication data in all Regions is eventually consistent. This means replica data in other region may not be up to date.<br>C is correct. Use an Amazon Aurora global database for replication cross region under 1 second.D.  Same as AGreat explanation, I asked myself why not B and you are right, \\\"eventually consistent\\\" Thanks. Now is clear.",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 608776,
          "date": "Sun 29 May 2022 15:56",
          "username": "rlnd2000",
          "content": "Great explanation, I asked myself why not B and you are right, \\\"eventually consistent\\\" Thanks. Now is clear.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 507351,
          "date": "Wed 22 Dec 2021 21:04",
          "username": "jove",
          "content": "Aurora global db is the right option",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 488249,
          "date": "Sat 27 Nov 2021 16:42",
          "username": "Sp230",
          "content": "C - i will go with aurora global database as replication needs to be less than a second",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 480352,
          "date": "Thu 18 Nov 2021 02:02",
          "username": "johnconnorgrekh001",
          "content": "Does anyone have some insight on why this choice? I am not totally sold on it\\\"advanced analytical queries\\\" rules out DynamoDB. To decide between Aurora Global Database and RDS with Read Replcia in another Region see this FAQ<br><br>https://aws.amazon.com/rds/aurora/faqs/#High_Availability_and_Replication<br>\\\"Physical replication, called Amazon Aurora Global Database, uses dedicated infrastructure that leaves your databases entirely available to serve your application, and can replicate up to five secondary regions with typical latency of under a second.\\\"<br><br>RDS cross-Region replication lag can be several seconds to several minutes depending on workload on the source.<br>https://aws.amazon.com/blogs/database/best-practices-for-amazon-rds-for-postgresql-cross-region-read-replicas/",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 500777,
          "date": "Mon 13 Dec 2021 18:30",
          "username": "grekh001",
          "content": "\\\"advanced analytical queries\\\" rules out DynamoDB. To decide between Aurora Global Database and RDS with Read Replcia in another Region see this FAQ<br><br>https://aws.amazon.com/rds/aurora/faqs/#High_Availability_and_Replication<br>\\\"Physical replication, called Amazon Aurora Global Database, uses dedicated infrastructure that leaves your databases entirely available to serve your application, and can replicate up to five secondary regions with typical latency of under a second.\\\"<br><br>RDS cross-Region replication lag can be several seconds to several minutes depending on workload on the source.<br>https://aws.amazon.com/blogs/database/best-practices-for-amazon-rds-for-postgresql-cross-region-read-replicas/",
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
      "question_text": "<p>A company is running its customer feedback application on Amazon Aurora MySQL. The company runs a report every day to extract customer feedback, and a team reads the feedback to determine if the customer comments are positive or negative. It sometimes takes days before the company can contact unhappy customers and take corrective measures. The company wants to use machine learning to automate this workflow.<br>Which solution meets this requirement with the LEAST amount of effort?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#162",
          "answers": [
            {
              "choice": "<p>A. Export the Aurora MySQL database to Amazon S3 by using AWS Database Migration Service (AWS DMS). Use Amazon Comprehend to run sentiment analysis on the exported files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Export the Aurora MySQL database to Amazon S3 by using AWS Database Migration Service (AWS DMS). Use Amazon SageMaker to run sentiment analysis on the exported files.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set up Aurora native integration with Amazon Comprehend. Use SQL functions to extract sentiment analysis.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up Aurora native integration with Amazon SageMaker. Use SQL functions to extract sentiment analysis.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 162 discussion",
      "discusstion": [
        {
          "id": 646226,
          "date": "Sat 13 Aug 2022 10:33",
          "username": "shammous",
          "content": "\\\"When you run an ML query, Aurora calls Amazon SageMaker for a wide variety of ML algorithms or Amazon Comprehend for sentiment analysis\\\".<br>Ref: https://aws.amazon.com/getting-started/hands-on/sentiment-analysis-amazon-aurora-ml-integration/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 594532,
          "date": "Fri 29 Apr 2022 16:57",
          "username": "novice_expert",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-ml.html<br><br>Aurora machine learning uses a highly optimized integration between the Aurora database and the AWS machine learning (ML) services SageMaker and Amazon Comprehend.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 554956,
          "date": "Thu 24 Feb 2022 00:51",
          "username": "tugboat",
          "content": "Comprehend is a simple ML solution and takes the least effort",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 502062,
          "date": "Wed 15 Dec 2021 11:52",
          "username": "mnzsql365",
          "content": "C for me",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 497804,
          "date": "Thu 09 Dec 2021 15:35",
          "username": "nood",
          "content": "C for me<br>For details about using Aurora and Amazon Comprehend together, see Using Amazon Comprehend for sentiment detection.<br>Aurora machine learning uses a highly optimized integration between the Aurora database and the AWS machine learning (ML) services SageMaker and Amazon Comprehend.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 480238,
          "date": "Wed 17 Nov 2021 20:42",
          "username": "jelongpark",
          "content": "Ans C.  All answers are available. The Minimum amount of effort is the key.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 477680,
          "date": "Sat 13 Nov 2021 19:14",
          "username": "[Removed]",
          "content": "Answer A.  Comprehend is a simple ML solution and takes the least effort",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 477320,
          "date": "Sat 13 Nov 2021 07:29",
          "username": "hemantr",
          "content": "Ans C https://www.stackovercloud.com/2019/11/27/new-for-amazon-aurora-use-machine-learning-directly-from-your-databases/",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#163",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A bank plans to use an Amazon RDS for MySQL DB instance. The database should support read-intensive traffic with very few repeated queries.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#163",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon ElastiCache cluster. Use a write-through strategy to populate the cache.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon ElastiCache cluster. Use a lazy loading strategy to populate the cache.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Change the DB instance to Multi-AZ with a standby instance in another AWS Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a read replica of the DB instance. Use the read replica to distribute the read traffic.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 163 discussion",
      "discusstion": [
        {
          "id": 537221,
          "date": "Mon 31 Jan 2022 17:05",
          "username": "sj143",
          "content": "few repeated Queries. in this case elastic cache will have to reach to the database to get the information which defeats the purpose of Elasticache",
          "upvote_count": "7",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 748593,
          "date": "Sun 18 Dec 2022 05:04",
          "username": "khun",
          "content": "D.  keyword \\\"few repeated Queries\\\" caching wont help.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595349,
          "date": "Sun 01 May 2022 01:36",
          "username": "novice_expert",
          "content": "D.  Create a read replica of the DB instance. Use the read replica to distribute the read traffic.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 585157,
          "date": "Wed 13 Apr 2022 13:03",
          "username": "kret",
          "content": "very bad wording used in this question ; because of \\\"with extremely few repeated queries\\\" which basically means \\\"with a lot of different queries\\\" Elasticache won't help",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 562185,
          "date": "Sun 06 Mar 2022 19:00",
          "username": "RotterDam",
          "content": "Sorry I takeit back completely. Im an idiot. \\\"Very few repeated readqueries\\\" as in most queries areunique. Elasticache wont help here. I will change my option to (D)",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 562174,
          "date": "Sun 06 Mar 2022 18:44",
          "username": "RotterDam",
          "content": "Correct Answer is (B) Another question right here in ExamTopics<br><br>For its application database tier, a corporation uses Amazon RDS MySQL instances, and for its web tier, Apache Tomcat servers. Repeated read requests make up the majority of database queries from web apps.<br>Which AWS service would benefit from the addition of an in-memory store for repeated read queries?<br>A.  Amazon RDS Multi-AZB.  Amazon SQSC.  Amazon ElastiCache <<< (Official Answer)D.  Amazon RDS read replica",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 562172,
          "date": "Sun 06 Mar 2022 18:40",
          "username": "RotterDam",
          "content": "what doesthis even mean? \\\"...with extremely few repeated queries.\\\" -> English grammar is aborrant in these questions and they'reartificially creating phrases they think makese sense!!<br><br>But if theyare TRYING to ask prevent the repeated queriesfrom hitting the database- then Elasticache with lazy loading will do the trick the firstquery will take a hit to the database but the repeated queries will be returned from the cache<br><br>Feels like (B)",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 533220,
          "date": "Wed 26 Jan 2022 21:02",
          "username": "awsmonsteroopsy",
          "content": "B<br><br>Elasticache is the best solution to \\\"handle high-volume read requests with extremely few repeated queries.\\\" <br><br>Note that it is extremely few repeated queries. As per this link, https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Strategies.html, the lazy loading strategy fits this requirementgo D<br>keywork\\\"use query\\\"",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 546576,
          "date": "Sun 13 Feb 2022 17:35",
          "username": "oopsy",
          "content": "go D<br>keywork\\\"use query\\\"",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 509289,
          "date": "Sat 25 Dec 2021 22:40",
          "username": "SMAZ",
          "content": "'with extremely few repeated queries.' I believe its D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 508316,
          "date": "Fri 24 Dec 2021 05:55",
          "username": "jovejove",
          "content": "Is it D?Yes, the answer is D .. extremely few repeated queries ->read replica",
          "upvote_count": "21",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 509936,
          "date": "Mon 27 Dec 2021 02:26",
          "username": "jove",
          "content": "Yes, the answer is D .. extremely few repeated queries ->read replica",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#164",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A database specialist has a fleet of Amazon RDS DB instances that use the default DB parameter group. The database specialist needs to associate a custom parameter group with some of the DB instances.<br>After the database specialist makes this change, when will the instances be assigned to this new parameter group?<br></p>",
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
              "choice": "<p>A. Instantaneously after the change is made to the parameter group<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. In the next scheduled maintenance window of the DB instances<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. After the DB instances are manually rebooted<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Within 24 hours after the change is made to the parameter group<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 164 discussion",
      "discusstion": [
        {
          "id": 594623,
          "date": "Fri 29 Apr 2022 19:39",
          "username": "novice_expert",
          "content": "When you associate a new DB parameter group with a DB instance, the modified static and dynamic parameters are applied only after the DB instance is rebooted. However, if you modify dynamic parameters in the newly associated DB parameter group, these changes are applied immediately without a reboot.",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 555553,
          "date": "Thu 24 Feb 2022 21:59",
          "username": "tugboat",
          "content": "Manual reboot is necessary",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 548714,
          "date": "Wed 16 Feb 2022 16:21",
          "username": "user0001",
          "content": "C<br>When you associate a new DB parameter group with a DB instance, the modified static and dynamic parameters are applied only after the DB instance is rebooted. However, if you modify dynamic parameters in the newly associated DB parameter group, these changes are applied immediately without a reboot. For more information about changing the DB parameter group, see Modifying an Amazon RDS DB instance.<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 477822,
          "date": "Sat 13 Nov 2021 23:10",
          "username": "jove",
          "content": "C for sure",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 475834,
          "date": "Wed 10 Nov 2021 23:28",
          "username": "leunamE",
          "content": "Option C.  When you associate a new DB parameter group with a DB instance, the modified static and dynamic parameters are applied only after the DB instance is rebooted.",
          "upvote_count": "2",
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
      "question_text": "<p>A company is planning on migrating a 500-GB database from Oracle to Amazon Aurora PostgreSQL using the AWS Schema Conversion Tool (AWS SCT) and<br>AWS DMS. The database does not have any stored procedures to migrate but has some tables that are large or partitioned. The application is critical for business so a migration with minimal downtime is preferred.<br>Which combination of steps should a database specialist take to accelerate the migration process? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: DE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#165",
          "answers": [
            {
              "choice": "<p>A. Use the AWS SCT data extraction agent to migrate the schema from Oracle to Aurora PostgreSQL.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. For the large tables, change the setting for the maximum number of tables to load in parallel and perform a full load using AWS DMS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. For the large tables, create a table settings rule with a parallel load option in AWS DMS, then perform a full load using DMS.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use AWS DMS to set up change data capture (CDC) for continuous replication until the cutover date.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>E. Use AWS SCT to convert the schema from Oracle to Aurora PostgreSQL.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Use AWS DMS to convert the schema from Oracle to Aurora PostgreSQL and for continuous replication.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 165 discussion",
      "discusstion": [
        {
          "id": 594736,
          "date": "Sat 30 Apr 2022 02:05",
          "username": "novice_expert",
          "content": "C, D, E ( does not allow to select 3 options)<br>E.  use SCT to convert schema<br>-> C.  Create a table setting rule with parallel load option, load using DMS<br>-> D.  Continue DMS till cutover date",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 755255,
          "date": "Sun 25 Dec 2022 00:12",
          "username": "lollyj",
          "content": "CDE are the answers",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CD"
        },
        {
          "id": 749761,
          "date": "Mon 19 Dec 2022 12:28",
          "username": "jjyy80",
          "content": "DE is the correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 730730,
          "date": "Tue 29 Nov 2022 19:33",
          "username": "examineme",
          "content": "CDE correct answer",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: CE"
        },
        {
          "id": 561261,
          "date": "Sat 05 Mar 2022 07:28",
          "username": "RotterDam",
          "content": "D and E are obviously correct. <br>Between B and C-> C is correct- the aws recommendation is to load Large tables via partitioning. That means creating filters to load data in parallel. The rest of the smaller tables can use the MaxFullLoadSubTasks settings toa higher value (default is 8)<br><br>An example is if you have a schema that contains 90 tables, 1 of which is 100GB while rest are small tables Create multiple tasks that break up the 100GB based on primary keyCreate another task to load the smaller tables with \\\"MaxFullLoadSubtasks\\\" settings to 20",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 555607,
          "date": "Thu 24 Feb 2022 23:24",
          "username": "tugboat",
          "content": "CDE are valid options",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: DE"
        },
        {
          "id": 528384,
          "date": "Thu 20 Jan 2022 12:53",
          "username": "awsmonster",
          "content": "I vote for CDE",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 510248,
          "date": "Mon 27 Dec 2021 12:09",
          "username": "Shunpin",
          "content": "I prefer CDE<br>For option C, https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.SelectionTransformation.Tablesettings.html#CHAP_Tasks.CustomizingTasks.TableMapping.SelectionTransformation.Tablesettings.ParallelLoad",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 488483,
          "date": "Sat 27 Nov 2021 21:10",
          "username": "jove",
          "content": "CDE correct options",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 478982,
          "date": "Mon 15 Nov 2021 21:34",
          "username": "PietraOra",
          "content": "I Think CDE",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 478132,
          "date": "Sun 14 Nov 2021 14:12",
          "username": "hemantrtoppic26jove",
          "content": "ACD :-https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/migrate-data-from-an-on-premises-oracle-database-to-aurora-postgresql.htmlA: wrong: AWS SCT is not data extraction tool. CDE. Yes, CDE are the correct options.",
          "upvote_count": "131",
          "selected_answers": ""
        },
        {
          "id": 478721,
          "date": "Mon 15 Nov 2021 15:28",
          "username": "toppic26jove",
          "content": "A: wrong: AWS SCT is not data extraction tool. CDE. Yes, CDE are the correct options.",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 488484,
          "date": "Sat 27 Nov 2021 21:11",
          "username": "jove",
          "content": "Yes, CDE are the correct options.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#166",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating an IBM Informix database to a Multi-AZ deployment of Amazon RDS for SQL Server with Always On Availability Groups (AGs). SQL<br>Server Agent jobs on the Always On AG listener run at 5-minute intervals to synchronize data between the Informix database and the SQL Server database. Users experience hours of stale data after a successful failover to the secondary node with minimal latency.<br>What should a database specialist do to ensure that users see recent data after a failover?<br></p>",
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
              "choice": "<p>A. Set TTL to less than 30 seconds for cached DNS values on the Always On AG listener.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Break up large transactions into multiple smaller transactions that complete in less than 5 minutes.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Set the databases on the secondary node to read-only mode.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create the SQL Server Agent jobs on the secondary node from a script when the secondary node takes over after a failure.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 166 discussion",
      "discusstion": [
        {
          "id": 497654,
          "date": "Thu 09 Dec 2021 12:06",
          "username": "2025flakyt",
          "content": "A is the correct answer<br>The question is how to refresh stale data",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 748604,
          "date": "Sun 18 Dec 2022 05:21",
          "username": "khun",
          "content": "A.  correctD.  is obsolete. Amazon RDS for SQL Server now supports SQL Server Agent job replication<br>Posted On: Apr 7, 2022<br><br>Amazon RDS for SQL Server now supports SQL Server Agent job replication. With this new feature, SQL Server Agent jobs created, modified, or deleted on the primary instance will be automatically synchronized to the secondary instance in a Multi-AZ configuration.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 738461,
          "date": "Thu 08 Dec 2022 00:13",
          "username": "Sab",
          "content": "A<br>SQL Agent jobs can be replicated by turning on SQL Server Agent job replication<br><br>EXECUTE msdb.dbo.rds_set_system_database_sync_objects @object_types'SQLAgentJob';<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.SQLServer.CommonDBATasks.Agent.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 709432,
          "date": "Tue 01 Nov 2022 21:51",
          "username": "rags1482",
          "content": "Question prepared before the Job replication feature it seems, so now Answer D is no longer valid, and it should be A. <br><br>https://aws.amazon.com/about-aws/whats-new/2022/04/amazon-rds-sql-server-sql-agent-job-replication/",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 626521,
          "date": "Sun 03 Jul 2022 12:52",
          "username": "kush_sumit",
          "content": "C is wrong due to<br><br>You can't configure the secondary DB instance to accept database read activity.<br>Link: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerMultiAZ.html<br>Section:<br>Microsoft SQL Server Multi-AZ deployment limitations, notes, and recommendations",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 626520,
          "date": "Sun 03 Jul 2022 12:51",
          "username": "kush_sumit",
          "content": "D is correct answer<br><br>C is wrong due to<br>You can't configure the secondary DB instance to accept database read activity.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerMultiAZ.html<br>Microsoft SQL Server Multi-AZ deployment limitations, notes, and recommendations:",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 622865,
          "date": "Mon 27 Jun 2022 02:41",
          "username": "sachin",
          "content": "D is the answer as JOB replication needs to be enabled explicitly.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 622702,
          "date": "Sun 26 Jun 2022 19:27",
          "username": "elf78",
          "content": "It's about refreshing stale data. @Jusfunda's comment has the correct link",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 609487,
          "date": "Tue 31 May 2022 01:55",
          "username": "Jusfunda",
          "content": "Answer is A according to this link.<br><br>https://docs.aws.amazon.com/prescriptive-guidance/latest/sql-server-ec2-best-practices/configure-availability-groups.html#:~:textSet%20HostRecordTTL%20to%2060%20or%20less%20when%20using%20Always%20On%20availability%20groups",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 594751,
          "date": "Sat 30 Apr 2022 02:40",
          "username": "novice_expert",
          "content": "If you have SQL Server Agent jobs, recreate them on the secondary.<br> Create the jobs first in the original primary, then fail over, and create the same jobs in the new primary.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 510347,
          "date": "Mon 27 Dec 2021 14:46",
          "username": "Shunpin",
          "content": "As grek mentioned URL.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 506341,
          "date": "Tue 21 Dec 2021 19:19",
          "username": "joveuser0001",
          "content": "I think the correct answer is D. . The SQL Server Agent jobs are used to synchronize data between the Informix and SQL Server databases and without those being created on secondary node the data won't be synchronized.answer is D<br>A is Wrong because it is more than 30 seconds , AG does not replicate agent on databases",
          "upvote_count": "31",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 557463,
          "date": "Sun 27 Feb 2022 18:23",
          "username": "user0001",
          "content": "answer is D<br>A is Wrong because it is more than 30 seconds , AG does not replicate agent on databases",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 492583,
          "date": "Thu 02 Dec 2021 15:25",
          "username": "grekh001sachin",
          "content": "I think D<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerMultiAZ.html<br><br>If you have SQL Server Agent jobs, recreate them on the secondary. You do so because these jobs are stored in the msdb database, and you can't replicate this database by using Database Mirroring (DBM) or Always On Availability Groups (AGs). Create the jobs first in the original primary, then fail over, and create the same jobs in the new primary.This is mentioned in the URL you have shared above that JOB are replicated<br><br>In Multi-AZ deployments, SQL Server Agent jobs are replicated from the primary host to the secondary host when the job replication feature is turned on. For more information, see Turning on SQL Server Agent job replication.",
          "upvote_count": "32",
          "selected_answers": ""
        },
        {
          "id": 622864,
          "date": "Mon 27 Jun 2022 02:35",
          "username": "sachin",
          "content": "This is mentioned in the URL you have shared above that JOB are replicated<br><br>In Multi-AZ deployments, SQL Server Agent jobs are replicated from the primary host to the secondary host when the job replication feature is turned on. For more information, see Turning on SQL Server Agent job replication.",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#167",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A database specialist needs to configure an Amazon RDS for MySQL DB instance to close non-interactive connections that are inactive after 900 seconds.<br>What should the database specialist do to accomplish this task?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#167",
          "answers": [
            {
              "choice": "<p>A. Create a custom DB parameter group and set the wait_timeout parameter value to 900. Associate the DB instance with the custom parameter group.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Connect to the MySQL database and run the SET SESSION wait_timeout900 command.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Edit the my.cnf file and set the wait_timeout parameter value to 900. Restart the DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Modify the default DB parameter group and set the wait_timeout parameter value to 900.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 167 discussion",
      "discusstion": [
        {
          "id": 595396,
          "date": "Sun 01 May 2022 03:52",
          "username": "novice_expert",
          "content": "A.  Create a custom DB parameter group and set the wait_timeout parameter value to 900. Associate the DB instance with the custom parameter group.<br><br>wait_timeout: The number of seconds the server waits for activity on a non-interactive TCP/IP or UNIX File connection before closing it.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 539868,
          "date": "Thu 03 Feb 2022 18:48",
          "username": "AriraAWS",
          "content": "A is the right answer, done that many times....",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 510995,
          "date": "Tue 28 Dec 2021 11:21",
          "username": "Shunpin",
          "content": "Managed RDS needs parameter grou.<br>wait_timeout: The number of seconds the server waits for activity on a non-interactive TCP/IP or UNIX File connection before closing it.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 509130,
          "date": "Sat 25 Dec 2021 14:26",
          "username": "odba2014",
          "content": "A is answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 499673,
          "date": "Sat 11 Dec 2021 22:26",
          "username": "MBO80grekh001",
          "content": "For me, answer is A<br>https://aws.amazon.com/fr/blogs/database/best-practices-for-configuring-parameters-for-amazon-rds-for-mysql-part-3-parameters-related-to-security-operational-manageability-and-connectivity-timeout/Yes, the correct answer is A<br>From part one of that blog series:<br>\\\"You can set parameters globally using a parameter group. Alternatively, you can set them for a particular session using the SET command.\\\"<br>https://aws.amazon.com/blogs/database/best-practices-for-configuring-parameters-for-amazon-rds-for-mysql-part-1-parameters-related-to-performance/<br>You can't edit files directly on the RDS servers, must use SET command or Parameter Group",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 502422,
          "date": "Wed 15 Dec 2021 19:50",
          "username": "grekh001",
          "content": "Yes, the correct answer is A<br>From part one of that blog series:<br>\\\"You can set parameters globally using a parameter group. Alternatively, you can set them for a particular session using the SET command.\\\"<br>https://aws.amazon.com/blogs/database/best-practices-for-configuring-parameters-for-amazon-rds-for-mysql-part-1-parameters-related-to-performance/<br>You can't edit files directly on the RDS servers, must use SET command or Parameter Group",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 492368,
          "date": "Thu 02 Dec 2021 11:24",
          "username": "cynthiacyjove",
          "content": "C.  the answer is wrong, but the link is right!This is an Amazon managed service, you cannot edit my.cnf file yourself.The correct answer is A",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 508721,
          "date": "Fri 24 Dec 2021 19:25",
          "username": "jove",
          "content": "This is an Amazon managed service, you cannot edit my.cnf file yourself.The correct answer is A",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 488364,
          "date": "Sat 27 Nov 2021 18:52",
          "username": "Sp230",
          "content": "Answer should be B",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 483535,
          "date": "Sun 21 Nov 2021 18:58",
          "username": "johnconnor",
          "content": "Actually, I think all the answers could be wrong because you are not supposed to edit the .cnf file in RDS, but you could set the parameter globally with SET GLOBAL wait_timeoutxxxx; there should be an option for that",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 483529,
          "date": "Sun 21 Nov 2021 18:52",
          "username": "johnconnor",
          "content": "It should be C!",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 483528,
          "date": "Sun 21 Nov 2021 18:51",
          "username": "johnconnor",
          "content": "Answer is wrong, we should open the my.cnf file in /etc/mysql and then restart the server withservice mysql restart",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#168",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is running its production databases in a 3 TB Amazon Aurora MySQL DB cluster. The DB cluster is deployed to the us-east-1 Region. For disaster recovery (DR) purposes, the company's database specialist needs to make the DB cluster rapidly available in another AWS Region to cover the production load with an RTO of less than 2 hours.<br>What is the MOST operationally efficient solution to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#168",
          "answers": [
            {
              "choice": "<p>A. Implement an AWS Lambda function to take a snapshot of the production DB cluster every 2 hours, and copy that snapshot to an Amazon S3 bucket in the DR Region. Restore the snapshot to an appropriately sized DB cluster in the DR Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Add a cross-Region read replica in the DR Region with the same instance type as the current primary instance. If the read replica in the DR Region needs to be used for production, promote the read replica to become a standalone DB cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a smaller DB cluster in the DR Region. Configure an AWS Database Migration Service (AWS DMS) task with change data capture (CDC) enabled to replicate data from the current production DB cluster to the DB cluster in the DR Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Aurora global database that spans two Regions. Use AWS Database Migration Service (AWS DMS) to migrate the existing database to the new global database.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 168 discussion",
      "discusstion": [
        {
          "id": 595566,
          "date": "Sun 01 May 2022 13:24",
          "username": "novice_expert",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Replication.CrossRegion.html<br><br>RTO is 2 hours. With 3 TB database, cross-region replica<br><br>Global Database was good but DMS ?",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 522313,
          "date": "Wed 12 Jan 2022 17:44",
          "username": "deepcloud",
          "content": "Would have chosen Global Database, but DMS is not needed there. So D is wrong.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 511029,
          "date": "Tue 28 Dec 2021 12:19",
          "username": "Shunpin",
          "content": "RTO is 2 hours. With 3 TB database, cross-region replica is a better option",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 508802,
          "date": "Fri 24 Dec 2021 20:47",
          "username": "jove",
          "content": "Answer is B",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#169",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises SQL Server database. The users access the database using Active Directory authentication. The company successfully migrated its database to Amazon RDS for SQL Server. However, the company is concerned about user authentication in the AWS Cloud environment.<br>Which solution should a database specialist provide for the user to authenticate?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#169",
          "answers": [
            {
              "choice": "<p>A. Deploy Active Directory Federation Services (AD FS) on premises and configure it with an on-premises Active Directory. Set up delegation between the on- premises AD FS and AWS Security Token Service (AWS STS) to map user identities to a role using theAmazonRDSDirectoryServiceAccess managed IAM policy.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Establish a forest trust between the on-premises Active Directory and AWS Directory Service for Microsoft Active Directory. Use AWS SSO to configure an Active Directory user delegated to access the databases in RDS for SQL Server.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Active Directory Connector to redirect directory requests to the company's on-premises Active Directory without caching any information in the cloud. Use the RDS master user credentials to connect to the DB instance and configure SQL Server logins and users from the Active Directory users and groups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Establish a forest trust between the on-premises Active Directory and AWS Directory Service for Microsoft Active Directory. Ensure RDS for SQL Server is using mixed mode authentication. Use the RDS master user credentials to connect to the DB instance and configure SQL Server logins and users from the Active Directory users and groups.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 169 discussion",
      "discusstion": [
        {
          "id": 476892,
          "date": "Fri 12 Nov 2021 12:29",
          "username": "toppic26palanikumar_njohnconnorgrekh001",
          "content": "Answer is not D.  Mixed mode is for both AD and Sql users. Question doesnt require that. Answer is Bdid you take the examrecently . how many question came from the dumpI think you are right, I vote for B\\\"Amazon RDS uses mixed mode for Windows Authentication\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html<br>The correct answer is D",
          "upvote_count": "5124",
          "selected_answers": ""
        },
        {
          "id": 477239,
          "date": "Sat 13 Nov 2021 02:42",
          "username": "palanikumar_n",
          "content": "did you take the examrecently . how many question came from the dump",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 483877,
          "date": "Mon 22 Nov 2021 06:31",
          "username": "johnconnorgrekh001",
          "content": "I think you are right, I vote for B\\\"Amazon RDS uses mixed mode for Windows Authentication\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html<br>The correct answer is D",
          "upvote_count": "24",
          "selected_answers": ""
        },
        {
          "id": 497710,
          "date": "Thu 09 Dec 2021 13:24",
          "username": "grekh001",
          "content": "\\\"Amazon RDS uses mixed mode for Windows Authentication\\\"<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html<br>The correct answer is D",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 755292,
          "date": "Sun 25 Dec 2022 00:40",
          "username": "lollyj",
          "content": "B is my answer.I don't understand why others select D. I will continue reading reasons why",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 694997,
          "date": "Fri 14 Oct 2022 22:03",
          "username": "awsjjjawsjjj",
          "content": "Answer is D.  you have to login to the instance to map the aws directory with sql server loginshttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html<br>Use the Amazon RDS master user credentials to connect to the SQL Server DB instance as you do any other DB instance. Because the DB instance is joined to the AWS Managed Microsoft AD domain, you can provision SQL Server logins and users from the Active Directory users and groups in their domain. (These are known as SQL Server \\\"Windows\\\" logins.) Database permissions are managed through standard SQL Server permissions granted and revoked to these Windows logins.",
          "upvote_count": "34",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 694998,
          "date": "Fri 14 Oct 2022 22:05",
          "username": "awsjjj",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html<br>Use the Amazon RDS master user credentials to connect to the SQL Server DB instance as you do any other DB instance. Because the DB instance is joined to the AWS Managed Microsoft AD domain, you can provision SQL Server logins and users from the Active Directory users and groups in their domain. (These are known as SQL Server \\\"Windows\\\" logins.) Database permissions are managed through standard SQL Server permissions granted and revoked to these Windows logins.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 623543,
          "date": "Tue 28 Jun 2022 01:41",
          "username": "Omijh",
          "content": "The link reference clearly shows after the forest trust you can either connect with sso or access link. The option D has multiple problem 1. connect using master creds [not required & unwanted] 2. Mixed mode will allow both the AD and the regular connection which the client didn't want in the first place.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 619930,
          "date": "Tue 21 Jun 2022 18:04",
          "username": "sachin",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 602056,
          "date": "Sun 15 May 2022 13:46",
          "username": "rlnd2000",
          "content": "D > You need to use sql authentication with master user credential for configuringSQL Server logins and users from the Active Directory users and groups, so for me mixed modeauthentication is a MUST, I go with D. <br><br>from: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html<br>...<br>6. Use the Amazon RDS master user credentials to connect to the SQL Server DB instance as you do any other DB instance. Because the DB instance is joined to the AWS Managed Microsoft AD domain, you can provision SQL Server logins and users from the Active Directory users and groups in their domain. (These are known as SQL Server \\\"Windows\\\" logins.) Database permissions are managed through standard SQL Server permissions granted and revoked to these Windows logins.<br>...",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 594558,
          "date": "Fri 29 Apr 2022 17:38",
          "username": "novice_expert",
          "content": "D uses master user access",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 583064,
          "date": "Sat 09 Apr 2022 00:04",
          "username": "Rama_aws",
          "content": "The correct answer is D",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 561011,
          "date": "Fri 04 Mar 2022 20:57",
          "username": "RotterDam",
          "content": "D is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 554979,
          "date": "Thu 24 Feb 2022 01:27",
          "username": "tugboat",
          "content": "Per - https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html<br>Amazon RDS uses mixed mode for Windows Authentication. This approach means that the master user (the name and password used to create your SQL Server DB instance) uses SQL Authentication. Because the master user account is a privileged credential, you should restrict access to this account.<br><br>To get Windows Authentication using an on-premises or self-hosted Microsoft Active Directory, create a forest trust.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 497806,
          "date": "Thu 09 Dec 2021 15:46",
          "username": "nood",
          "content": "D for me<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 492703,
          "date": "Thu 02 Dec 2021 18:20",
          "username": "Justu",
          "content": "Nope, Right answer is D:<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html<br>Read it and understand.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 475112,
          "date": "Tue 09 Nov 2021 23:56",
          "username": "leunamE",
          "content": "Answer is D.  https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html",
          "upvote_count": "3",
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
      "question_text": "<p>A company uses an Amazon Redshift cluster to run its analytical workloads. Corporate policy requires that the company's data be encrypted at rest with customer managed keys. The company's disaster recovery plan requires that backups of the cluster be copied into another AWS Region on a regular basis.<br>How should a database specialist automate the process of backing up the cluster data in compliance with these policies?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#170",
          "answers": [
            {
              "choice": "<p>A. Copy the AWS Key Management Service (AWS KMS) customer managed key from the source Region to the destination Region. Set up an AWS Glue job in the source Region to copy the latest snapshot of the Amazon Redshift cluster from the source Region to the destination Region. Use a time-based schedule in AWS Glue to run the job on a daily basis.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a new AWS Key Management Service (AWS KMS) customer managed key in the destination Region. Create a snapshot copy grant in the destination Region specifying the new key. In the source Region, configure cross-Region snapshots for the Amazon Redshift cluster specifying the destination Region, the snapshot copy grant, and retention periods for the snapshot.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Copy the AWS Key Management Service (AWS KMS) customer-managed key from the source Region to the destination Region. Create Amazon S3 buckets in each Region using the keys from their respective Regions. Use Amazon EventBridge (Amazon CloudWatch Events) to schedule an AWS Lambda function in the source Region to copy the latest snapshot to the S3 bucket in that Region. Configure S3 Cross-Region Replication to copy the snapshots to the destination Region, specifying the source and destination KMS key IDs in the replication configuration.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use the same customer-supplied key materials to create a CMK with the same private key in the destination Region. Configure cross-Region snapshots in the source Region targeting the destination Region. Specify the corresponding CMK in the destination Region to encrypt the snapshot.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 170 discussion",
      "discusstion": [
        {
          "id": 478767,
          "date": "Mon 15 Nov 2021 16:18",
          "username": "toppic26",
          "content": "Answer is B: https://docs.aws.amazon.com/redshift/latest/mgmt/managing-snapshots-console.html#xregioncopy-kms-encrypted-snapshot",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 594761,
          "date": "Sat 30 Apr 2022 03:01",
          "username": "novice_expert",
          "content": "new KMS CMK in the destination Region<br>-> snapshot copy grant in the destination Region specifying the new key<br>->In the source Region, configure cross-Region snapshots for the Amazon Redshift cluster specifying<br>- the destination Region,<br>- the snapshot copy grant,<br>- and retention periods for the snapshot.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 585203,
          "date": "Wed 13 Apr 2022 15:14",
          "username": "amitkhurana",
          "content": "B is the right answer",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 528401,
          "date": "Thu 20 Jan 2022 13:48",
          "username": "awsmonster",
          "content": "Option B. ",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 476933,
          "date": "Fri 12 Nov 2021 13:55",
          "username": "leunamE",
          "content": "Option B. ",
          "upvote_count": "3",
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
      "question_text": "<p>A database specialist is launching a test graph database using Amazon Neptune for the first time. The database specialist needs to insert millions of rows of test observations from a .csv file that is stored in Amazon S3. The database specialist has been using a series of API calls to upload the data to the Neptune DB instance.<br>Which combination of steps would allow the database specialist to upload the data faster? (Choose three.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BEF</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#171",
          "answers": [
            {
              "choice": "<p>A. Ensure Amazon Cognito returns the proper AWS STS tokens to authenticate the Neptune DB instance to the S3 bucket hosting the CSV file.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Ensure the vertices and edges are specified in different .csv files with proper header column formatting.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use AWS DMS to move data from Amazon S3 to the Neptune Loader.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Curl the S3 URI while inside the Neptune DB instance and then run the addVertex or addEdge commands.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Ensure an IAM role for the Neptune DB instance is configured with the appropriate permissions to allow access to the file in the S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>F. Create an S3 VPC endpoint and issue an HTTP POST to the database's loader endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 171 discussion",
      "discusstion": [
        {
          "id": 680253,
          "date": "Tue 27 Sep 2022 01:45",
          "username": "Jiang_aws1",
          "content": "https://docs.aws.amazon.com/neptune/latest/userguide/dms-neptune.html<br>AWS Database Migration Service (AWS DMS) can load data into Neptune from supported source databases quickly and securely.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BCF"
        },
        {
          "id": 594589,
          "date": "Fri 29 Apr 2022 18:27",
          "username": "novice_expert",
          "content": "B.  specification in separate csvE.  access from Neptune to S3F.  S3 vpc endpoint to run Loader command",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 566191,
          "date": "Sat 12 Mar 2022 15:02",
          "username": "Dantas",
          "content": "Amazon Neptune provides a Loader command for loading data from external files directly into a Neptune DB instance. You can use this command instead of executing a large number of INSERT statements, addV and addE steps, or other API calls.<br><br>https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 561143,
          "date": "Sat 05 Mar 2022 03:54",
          "username": "RotterDam",
          "content": "The question is saying the professional has already uploaded the data. What was needed to complete the upload?<br><br>Que: \\\"The database professional uploaded the data to the Neptune DB instance through a series of API calls. Which sequence of actions enables the database professional to upload the data most quickly?\\\"<br>Ans: Setup S3 VPC endpoint. Setup the IAM roles with GET and LIST permissions to S3. Make sure thecontents of CSV are accurate. These are (B) (E) (F)!!",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 559224,
          "date": "Wed 02 Mar 2022 07:59",
          "username": "harshagc180",
          "content": "Correct order of steps",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 555476,
          "date": "Thu 24 Feb 2022 19:26",
          "username": "tugboat",
          "content": "Correct order of steps",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BEF"
        },
        {
          "id": 554948,
          "date": "Thu 24 Feb 2022 00:37",
          "username": "kped21",
          "content": "B,E,F: Correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 523411,
          "date": "Fri 14 Jan 2022 08:38",
          "username": "awsmonsterawsmonster",
          "content": "BEF,<br><br>Disagree with C:<br>curl is issued from CLI to load the data from S3 to Neptune, not \\\"log in\\\" to to the database and run those commands:<br><br>curl -X POST https://your-neptune-endpoint:port/loader \\<br> -H 'Content-Type: application/json' \\<br> -d '<br> {<br> \\\"source\\\" : \\\"s3://bucket-name/object-key-name\\\",<br> \\\"format\\\" : \\\"opencypher\\\",<br> \\\"userProvidedEdgeIds\\\": \\\"TRUE\\\",<br> \\\"iamRoleArn\\\" : \\\"arn:aws:iam::account-id:role/role-name\\\",<br> \\\"region\\\" : \\\"region\\\",<br> \\\"failOnError\\\" : \\\"FALSE\\\",<br> \\\"parallelism\\\" : \\\"MEDIUM\\\",<br> }'Sorry, I meant disagree with D",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 523412,
          "date": "Fri 14 Jan 2022 08:39",
          "username": "awsmonster",
          "content": "Sorry, I meant disagree with D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 499779,
          "date": "Sun 12 Dec 2021 05:35",
          "username": "mnzsql365",
          "content": "I think BEF<br>https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-optimize.html",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 497823,
          "date": "Thu 09 Dec 2021 16:07",
          "username": "nood",
          "content": "DEF for me<br>https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 496994,
          "date": "Wed 08 Dec 2021 18:23",
          "username": "2025flakytgrekh001",
          "content": "BEF is the correct answer. Look out for the \\\"got you\\\"<br>Amazon Neptune provides a Loader command for loading data from external files directly into a Neptune DB instance. You can use this command instead of executing a large number of INSERT statements, addV and addE steps, or other API calls.<br>This makes D incorrectAgree with BEF<br>\\\"To load Apache TinkerPop Gremlin data using the CSV format, you must specify the vertices and the edges in separate files.\\\"<br>https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html",
          "upvote_count": "41",
          "selected_answers": ""
        },
        {
          "id": 497751,
          "date": "Thu 09 Dec 2021 14:31",
          "username": "grekh001",
          "content": "Agree with BEF<br>\\\"To load Apache TinkerPop Gremlin data using the CSV format, you must specify the vertices and the edges in separate files.\\\"<br>https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 490558,
          "date": "Tue 30 Nov 2021 10:52",
          "username": "Justu",
          "content": "CEF is the correct one!",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 486640,
          "date": "Thu 25 Nov 2021 13:41",
          "username": "Sp230",
          "content": "BcdLoader does not need separate a addvertex addedge",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 475816,
          "date": "Wed 10 Nov 2021 22:33",
          "username": "leunamEjohnconnorjove",
          "content": "DEF<br>From https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load.html<br>1. Copy the data files to an Amazon Simple Storage Service (Amazon S3) bucket.<br>2. Create an IAM role with Read and List access to the bucket.<br>3. Create an Amazon S3 VPC endpoint.<br>4. Start the Neptune loader by sending a request via HTTP to the Neptune DB instance.<br>5. The Neptune DB instance assumes the IAM role to load the data from the bucket.that makes sense but BCF also seem necessary for quick upload, I imagine the full question is missingI'm not a Neptune expert but option C, moving data to the Neptune \\\"Loader\\\" doesn't make sense. Neptune Loader is just an API which helps to load data to a NeptuneDB, right?",
          "upvote_count": "422",
          "selected_answers": ""
        },
        {
          "id": 483884,
          "date": "Mon 22 Nov 2021 06:47",
          "username": "johnconnorjove",
          "content": "that makes sense but BCF also seem necessary for quick upload, I imagine the full question is missingI'm not a Neptune expert but option C, moving data to the Neptune \\\"Loader\\\" doesn't make sense. Neptune Loader is just an API which helps to load data to a NeptuneDB, right?",
          "upvote_count": "22",
          "selected_answers": ""
        },
        {
          "id": 486222,
          "date": "Wed 24 Nov 2021 21:03",
          "username": "jove",
          "content": "I'm not a Neptune expert but option C, moving data to the Neptune \\\"Loader\\\" doesn't make sense. Neptune Loader is just an API which helps to load data to a NeptuneDB, right?",
          "upvote_count": "2",
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
      "question_text": "<p>A company is using Amazon DynamoDB global tables for an online gaming application. The game has players around the world. As the game has become more popular, the volume of requests to DynamoDB has increased significantly. Recently, players have reported that the game state is inconsistent between players in different countries. A database specialist observes that the ReplicationLatency metric for some of the replica tables is too high.<br>Which approach will alleviate the problem?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#172",
          "answers": [
            {
              "choice": "<p>A. Configure all replica tables to use DynamoDB auto scaling.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure a DynamoDB Accelerator (DAX) cluster on each of the replicas.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure the primary table to use DynamoDB auto scaling and the replica tables to use manually provisioned capacity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Configure the table-level write throughput limit service quota to a higher value.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 172 discussion",
      "discusstion": [
        {
          "id": 594622,
          "date": "Fri 29 Apr 2022 19:34",
          "username": "novice_expert",
          "content": "It is important that the replica tables and secondary indexes in your global table have identical write capacity settings to ensure proper replication of data.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 555551,
          "date": "Thu 24 Feb 2022 21:58",
          "username": "tugboat",
          "content": "autoscaling with fix it",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 497831,
          "date": "Thu 09 Dec 2021 16:14",
          "username": "nood",
          "content": "A for me<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_reqs_bestpractices.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 475830,
          "date": "Wed 10 Nov 2021 23:20",
          "username": "leunamE",
          "content": "Option A.  https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_reqs_bestpractices.html",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 475829,
          "date": "Wed 10 Nov 2021 23:20",
          "username": "leunamE",
          "content": "Option A.  https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_reqs_bestpractices.html",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#173",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company runs a MySQL database for its ecommerce application on a single Amazon RDS DB instance. Application purchases are automatically saved to the database, which causes intensive writes. Company employees frequently generate purchase reports. The company needs to improve database performance and reduce downtime due to patching for upgrades.<br>Which approach will meet these requirements with the LEAST amount of operational overhead?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#173",
          "answers": [
            {
              "choice": "<p>A. Enable a Multi-AZ deployment of the RDS for MySQL DB instance, and enable Memcached in the MySQL option group.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable a Multi-AZ deployment of the RDS for MySQL DB instance, and set up replication to a MySQL DB instance running on Amazon EC2.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable a Multi-AZ deployment of the RDS for MySQL DB instance, and add a read replica.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a read replica and promote it to an Amazon Aurora MySQL DB cluster master. Then enable Amazon Aurora Serverless.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 173 discussion",
      "discusstion": [
        {
          "id": 594671,
          "date": "Fri 29 Apr 2022 21:41",
          "username": "novice_expert",
          "content": "Enable a Multi-AZ deployment of the RDS for MySQL DB instance, and add a read replica.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 565483,
          "date": "Fri 11 Mar 2022 13:38",
          "username": "ak9830",
          "content": "Answer is C. <br>Per - https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.MySQL.html<br><br>Using a read replica to reduce downtime when upgrading a MySQL database. If your MySQL DB instance is currently in use with a production application, you can use the following procedure to upgrade the database version for your DB instance. This procedure can reduce the amount of downtime for your application.<br><br>By using a read replica, you can perform most of the maintenance steps ahead of time and minimize the necessary changes during the actual outage. With this technique, you can test and prepare the new DB instance without making any changes to your existing DB instance.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 561230,
          "date": "Sat 05 Mar 2022 06:15",
          "username": "RotterDam",
          "content": "C is the correctanswer. The question mentions LEAST operational overhead and the employees frequently create purchase reports (Readheavy). Moving queries to RR will open up thePrimary to take on additional loads wrt writes.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 486358,
          "date": "Thu 25 Nov 2021 02:05",
          "username": "jove",
          "content": "Answer : C",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 485895,
          "date": "Wed 24 Nov 2021 12:33",
          "username": "GMartinelliHariru",
          "content": "The best option here is C.  But I would choose Aurora Multi-Master if it was an optionit has a high volume writes, since when can you write on a read replica?",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 555835,
          "date": "Fri 25 Feb 2022 08:46",
          "username": "Hariru",
          "content": "it has a high volume writes, since when can you write on a read replica?",
          "upvote_count": "1",
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
      "question_text": "<p>An ecommerce company is migrating its core application database to Amazon Aurora MySQL. The company is currently performing online transaction processing<br>(OLTP) stress testing with concurrent database sessions. During the first round of tests, a database specialist noticed slow performance for some specific write operations.<br>Reviewing Amazon CloudWatch metrics for the Aurora DB cluster showed 90% CPU utilization.<br>Which steps should the database specialist take to MOST effectively identify the root cause of high CPU utilization and slow performance? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: AC</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#174",
          "answers": [
            {
              "choice": "<p>A. Enable Enhanced Monitoring at less than 30 seconds of granularity to review the operating system metrics before the next round of tests.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Review the VolumeBytesUsed metric in CloudWatch to see if there is a spike in write I/O.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Review Amazon RDS Performance Insights to identify the top SQL statements and wait events.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Review Amazon RDS API calls in AWS CloudTrail to identify long-running queries.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Enable Advance Auditing to log QUERY events in Amazon CloudWatch before the next round of tests.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 174 discussion",
      "discusstion": [
        {
          "id": 480227,
          "date": "Wed 17 Nov 2021 20:08",
          "username": "jelongpark",
          "content": "A,C i smy pick.<br>B: VolumeBytesUsed metric is for total used storage size, not for CPU",
          "upvote_count": "14",
          "selected_answers": ""
        },
        {
          "id": 707318,
          "date": "Sat 29 Oct 2022 18:15",
          "username": "rags1482",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/rds-instance-high-cpu/<br><br>A, C is the answer",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695384,
          "date": "Sat 15 Oct 2022 14:31",
          "username": "awsjjj",
          "content": "E is for auditing including query events. For performance I go with A and C",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 675867,
          "date": "Thu 22 Sep 2022 10:03",
          "username": "venimus_vidimus_vicimus",
          "content": "Guys.. why are you all Posting RDS Docs Links? This Question is about Aurora which is why I go with A and E",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: AE"
        },
        {
          "id": 675866,
          "date": "Thu 22 Sep 2022 10:02",
          "username": "venimus_vidimus_vicimus",
          "content": "Guys.. why are you all Posting RDS Docs Links? This Question is about Aurora which is why I go with A and E",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 646214,
          "date": "Sat 13 Aug 2022 10:12",
          "username": "shammousJiang_aws1",
          "content": "A,C are related to performance. B is related to storage. D is related to security (API calls tracking) and E (Advanced Auditing) does not exist.Using Advanced Auditing with an Amazon Aurora MySQL DB cluster<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Auditing.html",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 686518,
          "date": "Wed 05 Oct 2022 04:02",
          "username": "Jiang_aws1",
          "content": "Using Advanced Auditing with an Amazon Aurora MySQL DB cluster<br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Auditing.html",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594500,
          "date": "Fri 29 Apr 2022 15:46",
          "username": "novice_expert",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/rds-instance-high-cpu/<br>A.  Enhanced Monitoring checks OS<br>xB. VolumeBytesUsed is the amount of storage usedC. Performance Insights",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 554950,
          "date": "Thu 24 Feb 2022 00:42",
          "username": "tugboat",
          "content": "Per - https://aws.amazon.com/premiumsupport/knowledge-center/rds-mysql-slow-query/<br><br>To analyze the workload contributing to resource consumption, use Performance Insights. Performance Insights will provide a graphic analysis of all your queries and any waits that are contributing to increased resource consumption.<br><br>You can also use Enhanced Monitoring to retrieve the list of operating systems involved in your workload and the underlying system metrics. By default, the monitoring interval for Enhanced Monitoring is 60 seconds. It's a best practice to set this to 1-5 second intervals for more granular data points.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: AC"
        },
        {
          "id": 554915,
          "date": "Wed 23 Feb 2022 23:13",
          "username": "kped21",
          "content": "A,C : PI and Enhanced Monitoring",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 499615,
          "date": "Sat 11 Dec 2021 20:00",
          "username": "123xjuanperez",
          "content": "A,C is the solution",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 497795,
          "date": "Thu 09 Dec 2021 15:29",
          "username": "nood",
          "content": "A,C for me<br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-instance-high-cpu/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 497691,
          "date": "Thu 09 Dec 2021 13:01",
          "username": "grekh001",
          "content": "A and C is correct.<br><br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-mysql-slow-query/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 490218,
          "date": "Mon 29 Nov 2021 21:13",
          "username": "IshtarSQL",
          "content": "C,D is my choice<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/logging-using-cloudtrail.html<br>:\\\"enableCloudwatchLogsExports\\\": [<br>\\\"audit\\\",<br>\\\"error\\\",<br>\\\"general\\\",<br>\\\"slowquery\\\"",
          "upvote_count": "1",
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
      "question_text": "<p>An online advertising company is implementing an application that displays advertisements to its users. The application uses an Amazon DynamoDB table as a data store. The application also uses a DynamoDB Accelerator (DAX) cluster to cache its reads. Most of the reads are from the GetItem query and the<br>BatchGetItem query. Consistency of reads is not a requirement for this application.<br>Upon deployment, the application cache is not performing as expected. Specific strongly consistent queries that run against the DAX cluster are taking many milliseconds to respond instead of microseconds.<br>How can the company improve the cache behavior to increase application performance?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#175",
          "answers": [
            {
              "choice": "<p>A. Increase the size of the DAX cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Configure DAX to be an item cache with no query cache<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use eventually consistent reads instead of strongly consistent reads.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create a new DAX cluster with a higher TTL for the item cache.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 175 discussion",
      "discusstion": [
        {
          "id": 594740,
          "date": "Sat 30 Apr 2022 02:12",
          "username": "novice_expert",
          "content": "extremely consistent > bypass DAX",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 555610,
          "date": "Thu 24 Feb 2022 23:27",
          "username": "tugboat",
          "content": "Eventually consistent reads are good",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 528393,
          "date": "Thu 20 Jan 2022 13:21",
          "username": "awsmonster",
          "content": "I vote for C",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 488488,
          "date": "Sat 27 Nov 2021 21:16",
          "username": "jove",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 487489,
          "date": "Fri 26 Nov 2021 16:44",
          "username": "Sp230",
          "content": "Option C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 476565,
          "date": "Fri 12 Nov 2021 00:51",
          "username": "leunamEleunamEjohnconnor",
          "content": "Option B.  If you specify zero as the query cache TTL setting, the query response will not be cached.I was wrong. The correct answer is C.  Consistent queries are sent directly to dynamodb so the response time is longer.I am not sure about that one \\\"Strongly consistent reads may have higher latency than eventually consistent reads\\\", hence eventually consistent reads have lower latency, we are trying to lower the latency, C may be right",
          "upvote_count": "121",
          "selected_answers": ""
        },
        {
          "id": 478277,
          "date": "Sun 14 Nov 2021 19:30",
          "username": "leunamE",
          "content": "I was wrong. The correct answer is C.  Consistent queries are sent directly to dynamodb so the response time is longer.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 478005,
          "date": "Sun 14 Nov 2021 09:20",
          "username": "johnconnor",
          "content": "I am not sure about that one \\\"Strongly consistent reads may have higher latency than eventually consistent reads\\\", hence eventually consistent reads have lower latency, we are trying to lower the latency, C may be right",
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
      "question_text": "<p>A company is running its critical production workload on a 500 GB Amazon Aurora MySQL DB cluster. A database engineer must move the workload to a new<br>Amazon Aurora Serverless MySQL DB cluster without data loss.<br>Which solution will accomplish the move with the LEAST downtime and the LEAST application impact?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#176",
          "answers": [
            {
              "choice": "<p>A. Modify the existing DB cluster and update the Aurora configuration to \"Serverless.\"<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a snapshot of the existing DB cluster and restore it to a new Aurora Serverless DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Aurora Serverless replica from the existing DB cluster and promote it to primary when the replica lag is minimal.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Replicate the data between the existing DB cluster and a new Aurora Serverless DB cluster by using AWS Database Migration Service (AWS DMS) with change data capture (CDC) enabled.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 176 discussion",
      "discusstion": [
        {
          "id": 758069,
          "date": "Tue 27 Dec 2022 02:58",
          "username": "parle101",
          "content": "Answer is B<br>https://aws.amazon.com/premiumsupport/knowledge-center/aurora-migrate-provisioned-serverless/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 754827,
          "date": "Sat 24 Dec 2022 12:21",
          "username": "RBSK",
          "content": "I am really confused here. Pls refer to https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-replicas-adding.html-Which clearly says that \\\"Aurora Replicas connect to the same storage volume as the primary DB instance, but support read operations only\\\". Which means there is no lag at all given Read replicas connect the same storage. Hence i will go for \\\"C\\\" which is the simplest from operations perspective",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 692419,
          "date": "Tue 11 Oct 2022 23:22",
          "username": "Jiang_aws1",
          "content": "C vs D : looks take same amount of to do finial data sync & C is much simple than D<br>C: Just auto sync by Aurora Replica<br>D: Sync data by CDC",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 608768,
          "date": "Sun 29 May 2022 15:36",
          "username": "rlnd2000",
          "content": "Both C and D provides near Zero down time but the option C says \\\"...when the replica lag is minimal\\\" for me this is unacceptable for a \\\"business's mission-critical production workload\\\", B is out, impossible without downtime. I will go with D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595408,
          "date": "Sun 01 May 2022 04:35",
          "username": "novice_expert",
          "content": "D.  Replicate the data between the existing DB cluster and a new Aurora Serverless DB cluster by using AWS Database Migration Service (AWS DMS) with change data capture (CDC) enabled.<br><br>for DMS: Aurora Serverless can not be source but can be target",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 585077,
          "date": "Wed 13 Apr 2022 09:17",
          "username": "kret",
          "content": "because of the limited downtime requirement I'll go with DMS and D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 562110,
          "date": "Sun 06 Mar 2022 17:01",
          "username": "RotterDam",
          "content": "B looks tempting but it will result in downtime. D wont have any downtime",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 533263,
          "date": "Wed 26 Jan 2022 21:39",
          "username": "awsmonsterawsmonsterawsmonster",
          "content": "Option BYou can't use AWS Database Migration Service and Change Data Capture (CDC) with Aurora Serverless DB clusters. Only provisioned Aurora DB clusters support CDC with AWS DMS as a source.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitationsSorry, D is correct. The doc state it does not support as Source, but the Aurora Serverless in this question is target.",
          "upvote_count": "113",
          "selected_answers": ""
        },
        {
          "id": 533267,
          "date": "Wed 26 Jan 2022 21:43",
          "username": "awsmonsterawsmonster",
          "content": "You can't use AWS Database Migration Service and Change Data Capture (CDC) with Aurora Serverless DB clusters. Only provisioned Aurora DB clusters support CDC with AWS DMS as a source.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitationsSorry, D is correct. The doc state it does not support as Source, but the Aurora Serverless in this question is target.",
          "upvote_count": "13",
          "selected_answers": ""
        },
        {
          "id": 533268,
          "date": "Wed 26 Jan 2022 21:45",
          "username": "awsmonster",
          "content": "Sorry, D is correct. The doc state it does not support as Source, but the Aurora Serverless in this question is target.",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 511021,
          "date": "Tue 28 Dec 2021 12:12",
          "username": "Shunpin",
          "content": "The requirement to Minimum Downtime and from Provisioned to Serverless. The best choice is DMS.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 508793,
          "date": "Fri 24 Dec 2021 20:41",
          "username": "jove",
          "content": "Option D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 496267,
          "date": "Tue 07 Dec 2021 20:03",
          "username": "[Removed]RotterDamRotterDam",
          "content": "B.  https://aws.amazon.com/rds/aurora/faqs/<br>Amazon Aurora is drop-in compatible with existing MySQL open-source databases and adds support for new releases regularly. This means you can easily migrate MySQL databases to and from Aurora using standard import/export tools or snapshots. It also means that most of the code, applications, drivers, and tools you already use with MySQL databases today can be used with Aurora with little or no change.yes but snapshot restore has downtimeSinceyou would need to stop the writes on the sourcefor this to work > Take snapshot and restore. then repoint the app - depending on the size of the database this could be substantial. With DMS its zero and the question is asking about LEAST DOWNTIMEandLEAST APPLICATION IMPACT",
          "upvote_count": "212",
          "selected_answers": ""
        },
        {
          "id": 562109,
          "date": "Sun 06 Mar 2022 17:00",
          "username": "RotterDam",
          "content": "yes but snapshot restore has downtime",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 562112,
          "date": "Sun 06 Mar 2022 17:08",
          "username": "RotterDam",
          "content": "Sinceyou would need to stop the writes on the sourcefor this to work > Take snapshot and restore. then repoint the app - depending on the size of the database this could be substantial. With DMS its zero and the question is asking about LEAST DOWNTIMEandLEAST APPLICATION IMPACT",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 492379,
          "date": "Thu 02 Dec 2021 12:10",
          "username": "cynthiacy",
          "content": "D. <br>https://medium.com/@souri29/how-to-migrate-from-amazon-rds-aurora-or-mysql-to-amazon-aurora-serverless-55f9a4a74078",
          "upvote_count": "4",
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
      "question_text": "<p>A company is building a web application on AWS. The application requires the database to support read and write operations in multiple AWS Regions simultaneously. The database also needs to propagate data changes between Regions as the changes occur. The application must be highly available and must provide latency of single-digit milliseconds.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#177",
          "answers": [
            {
              "choice": "<p>A. Amazon DynamoDB global tables<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon DynamoDB streams with AWS Lambda to replicate the data<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. An Amazon ElastiCache for Redis cluster with cluster mode enabled and multiple shards<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. An Amazon Aurora global database<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 177 discussion",
      "discusstion": [
        {
          "id": 521985,
          "date": "Wed 12 Jan 2022 09:11",
          "username": "awsmonster",
          "content": "A: DynamoDB Global tables<br><br>Aurora Global Databases provides a writer and a reader endpoints in the primary region but only a reader endpoints in other region. Although strongly consistent, it does not fulfill the requirements that \\\"there are plenty of read / write activities\\\" in all regions.",
          "upvote_count": "5",
          "selected_answers": ""
        },
        {
          "id": 595347,
          "date": "Sun 01 May 2022 01:33",
          "username": "novice_expert",
          "content": "A.  Amazon DynamoDB global tables",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 585158,
          "date": "Wed 13 Apr 2022 13:06",
          "username": "kret",
          "content": "we need to write in several regions -> Aurora Global is single master, so DynamoDB Global is an answer",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 502299,
          "date": "Wed 15 Dec 2021 16:48",
          "username": "grekh001jove",
          "content": "The questions states that the database needs to \\\"support concurrent read and write activities in several AWS Regions.\\\"Aurora Global databases only allow writes to the single master in a single region.DynamoDB Global tables allow read and write to all instances in all regions.<br>Answer is AI agree,the answer is A",
          "upvote_count": "31",
          "selected_answers": ""
        },
        {
          "id": 508300,
          "date": "Fri 24 Dec 2021 05:06",
          "username": "jove",
          "content": "I agree,the answer is A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 498711,
          "date": "Fri 10 Dec 2021 15:44",
          "username": "2025flakyt2025flakytRadhaghosh",
          "content": "D is the answerThe question states that - Additionally, the database must communicate data changes across Regions as they occur.<br>DynamoDB is eventual consistency<br>Aurora is immediate consistencyDid you read this line? \\\"the database supports concurrent read and write activities in several AWS Regions\\\". Does Aurora Global Database support this feature?",
          "upvote_count": "121",
          "selected_answers": ""
        },
        {
          "id": 498712,
          "date": "Fri 10 Dec 2021 15:46",
          "username": "2025flakytRadhaghosh",
          "content": "The question states that - Additionally, the database must communicate data changes across Regions as they occur.<br>DynamoDB is eventual consistency<br>Aurora is immediate consistencyDid you read this line? \\\"the database supports concurrent read and write activities in several AWS Regions\\\". Does Aurora Global Database support this feature?",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 605660,
          "date": "Sun 22 May 2022 19:50",
          "username": "Radhaghosh",
          "content": "Did you read this line? \\\"the database supports concurrent read and write activities in several AWS Regions\\\". Does Aurora Global Database support this feature?",
          "upvote_count": "1",
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
      "question_text": "<p>A company is using Amazon Neptune as the graph database for one of its products. The company's data science team accidentally created large amounts of temporary information during an ETL process. The Neptune DB cluster automatically increased the storage space to accommodate the new data, but the data science team deleted the unused information.<br>What should a database specialist do to avoid unnecessary charges for the unused cluster volume space?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#178",
          "answers": [
            {
              "choice": "<p>A. Take a snapshot of the cluster volume. Restore the snapshot in another cluster with a smaller volume size.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the AWS CLI to turn on automatic resizing of the cluster volume.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Export the cluster data into a new Neptune DB cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add a Neptune read replica to the cluster. Promote this replica as a new primary DB instance. Reset the storage space of the cluster.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 178 discussion",
      "discusstion": [
        {
          "id": 476542,
          "date": "Thu 11 Nov 2021 23:43",
          "username": "leunamEjohnconnoruser0001",
          "content": "Option C.  The only way to shrink the storage space used by your DB cluster when you have a large amount of unused allocated space is to export all the data in your graph and then reload it into a new DB cluster.<br>Creating and restoring a snapshot does not reduce the amount of storage allocated for your DB cluster, because a snapshot retains the original image of the cluster's underlying storage.you are actually right, taking from AWS documentation \\\"The only way to shrink the storage space used by your DB cluster when you have a large amount of unused allocated space is to export all the data in your graph and then reload it into a new DB cluster. See Neptune's data export service and utility for an easy way to export data from a DB cluster, and Neptune's bulk loader for an easy way to import data back into Neptune.\\\"Neptune storage allocation<br>Even though a Neptune cluster volume can grow to 64 TiB, you are only charged for the space actually allocated. The total space allocated is determined by the storage high water mark, which is the maximum amount allocated to the cluster volume at any time during its existence.<br><br>This means that even if user data is removed from a cluster volume, such as by a drop query like g.V().drop(), the total allocated space remains the same. Neptune does automatically optimize the unused allocated space for reuse in the future.",
          "upvote_count": "931",
          "selected_answers": ""
        },
        {
          "id": 477715,
          "date": "Sat 13 Nov 2021 21:01",
          "username": "johnconnor",
          "content": "you are actually right, taking from AWS documentation \\\"The only way to shrink the storage space used by your DB cluster when you have a large amount of unused allocated space is to export all the data in your graph and then reload it into a new DB cluster. See Neptune's data export service and utility for an easy way to export data from a DB cluster, and Neptune's bulk loader for an easy way to import data back into Neptune.\\\"",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 557408,
          "date": "Sun 27 Feb 2022 16:34",
          "username": "user0001",
          "content": "Neptune storage allocation<br>Even though a Neptune cluster volume can grow to 64 TiB, you are only charged for the space actually allocated. The total space allocated is determined by the storage high water mark, which is the maximum amount allocated to the cluster volume at any time during its existence.<br><br>This means that even if user data is removed from a cluster volume, such as by a drop query like g.V().drop(), the total allocated space remains the same. Neptune does automatically optimize the unused allocated space for reuse in the future.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594672,
          "date": "Fri 29 Apr 2022 21:49",
          "username": "novice_expert",
          "content": "https://docs.aws.amazon.com/neptune/latest/userguide/feature-overview-storage.html#feature-overview-storage-best-practices<br><br>The only way to shrink the storage space used by your DB cluster when you have a large amount of unused allocated space is to export all the data in your graph and then reload it into a new DB cluster.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 566951,
          "date": "Sun 13 Mar 2022 16:29",
          "username": "Dantas",
          "content": "C<br><br>\\\"The only way to shrink the storage space used by your DB cluster when you have a large amount of unused allocated space is to export all the data in your graph and then reload it into a new DB cluster. \\\"<br><br>\\\"Creating and restoring a snapshot does not reduce the amount of storage allocated for your DB cluster, because a snapshot retains the original image of the cluster's underlying storage.\\\"<br><br>https://docs.aws.amazon.com/neptune/latest/userguide/feature-overview-storage.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 561242,
          "date": "Sat 05 Mar 2022 06:29",
          "username": "RotterDam",
          "content": "Answer is C.  Its very easy to get tricked into \\\"Restoring from a snapshot\\\" but remember - restoring from a snapshot WONT change the storage capacity (in console RDS Snapshot > Restore >under Allocate Capacity its greyed out).",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 505718,
          "date": "Mon 20 Dec 2021 23:55",
          "username": "jove",
          "content": "Option C",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 503328,
          "date": "Fri 17 Dec 2021 04:13",
          "username": "mnzsql365",
          "content": "Ans is C<br>The only way to shrink the storage space used by your DB cluster when you have a large amount of unused allocated space is to export all the data in your graph and then reload it into a new DB cluster.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 485898,
          "date": "Wed 24 Nov 2021 12:36",
          "username": "GMartinelli",
          "content": "Option C.  As for every provisioned storage in AWS, you cant reduce the capacity choosen, you need to create a new one and transfer the data.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#179",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A database specialist is responsible for designing a highly available solution for online transaction processing (OLTP) using Amazon RDS for MySQL production databases. Disaster recovery requirements include a cross-Region deployment along with an RPO of 5 minutes and RTO of 30 minutes.<br>What should the database specialist do to align to the high availability and disaster recovery requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#179",
          "answers": [
            {
              "choice": "<p>A. Use a Multi-AZ deployment in each Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use read replica deployments in all Availability Zones of the secondary Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use Multi-AZ and read replica deployments within a Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Multi-AZ and deploy a read replica in a secondary Region.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 179 discussion",
      "discusstion": [
        {
          "id": 595389,
          "date": "Sun 01 May 2022 03:36",
          "username": "novice_expert",
          "content": "D.  Use Multi-AZ and deploy a read replica in a secondary Region.<br><br>High availabilityMulti AZ<br>Disaster recoveryRead replica in a secondary region (or standby instance)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 585087,
          "date": "Wed 13 Apr 2022 09:32",
          "username": "kret",
          "content": "HA -> Multi AZ, cross region DR -> read replica in a secondary region",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 543070,
          "date": "Tue 08 Feb 2022 14:37",
          "username": "Hariru",
          "content": "I guess there must be a 6 hours limit somehow",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 509322,
          "date": "Sat 25 Dec 2021 23:52",
          "username": "SMAZ",
          "content": "Answer is D",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 508715,
          "date": "Fri 24 Dec 2021 19:13",
          "username": "jove",
          "content": "High availabilityMulti AZ<br>Disaster recoveryRead replica in a secondary region",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 490228,
          "date": "Mon 29 Nov 2021 21:58",
          "username": "IshtarSQLgrekh001",
          "content": "Answer: A Multi-AZ is for High Availability, Read Replicas are for Scalability, which the<br> question does not mention. A is the only choice that does not include a<br> needing a Read Replica.The question asks for High Availability AND Disaster Recovery.So you need both Multi-AZ for the High Availabilty and a Read Replica for the DR.<br>Answer is D",
          "upvote_count": "23",
          "selected_answers": ""
        },
        {
          "id": 502413,
          "date": "Wed 15 Dec 2021 19:34",
          "username": "grekh001",
          "content": "The question asks for High Availability AND Disaster Recovery.So you need both Multi-AZ for the High Availabilty and a Read Replica for the DR.<br>Answer is D",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 483517,
          "date": "Sun 21 Nov 2021 18:43",
          "username": "johnconnor",
          "content": "Shouldn't it be D?",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#180",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A media company wants to use zero-downtime patching (ZDP) for its Amazon Aurora MySQL database. Multiple processing applications are using SSL certificates to connect to database endpoints and the read replicas.<br>Which factor will have the LEAST impact on the success of ZDP?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#180",
          "answers": [
            {
              "choice": "<p>A. Binary logging is enabled, or binary log replication is in progress.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Current SSL connections are open to the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Temporary tables or table locks are in use.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The value of the lower_case_table_names server parameter was set to 0 when the tables were created.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 180 discussion",
      "discusstion": [
        {
          "id": 562160,
          "date": "Sun 06 Mar 2022 18:22",
          "username": "RotterDamnovice_expert",
          "content": "ZeroDowntime patching wont work if any of the following is true:<br>- Binary Logging is Enabled<br>- Long Running queries/transactions are in progress<br>- Temporary Tables are in use<br>- Table Locks are in use<br>- SSL connections are Open<br><br>By Elimination The answer is (D) - which actually makes sense since it makes no difference to patching.Binary Logging is now gracefully handled",
          "upvote_count": "71",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 595297,
          "date": "Sat 30 Apr 2022 23:13",
          "username": "novice_expert",
          "content": "Binary Logging is now gracefully handled",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 495376,
          "date": "Mon 06 Dec 2021 20:43",
          "username": "grekh001khchan123",
          "content": "I think its A<br><br>In Aurora MySQL 2.10 and higher, Aurora can perform a zero-downtime patch when binary log replication is enabled. Aurora MySQL automatically drops the connection to the binlog target during a ZDP operation. Aurora MySQL automatically reconnects to the binlog target and resumes replication after the restart finishes.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.Patching.htmlThe question is asking MINIMUM influence. So it's not A.  The answer is D. ",
          "upvote_count": "72",
          "selected_answers": ""
        },
        {
          "id": 603755,
          "date": "Thu 19 May 2022 11:37",
          "username": "khchan123",
          "content": "The question is asking MINIMUM influence. So it's not A.  The answer is D. ",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 605489,
          "date": "Sun 22 May 2022 14:37",
          "username": "awsguys",
          "content": "if question likes :<br>Which element will have tnothing on ZDP's success.so we can easliy asnswer .",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 605482,
          "date": "Sun 22 May 2022 14:33",
          "username": "awsguys",
          "content": "MINIMUM influenceos key to answer question",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 595296,
          "date": "Sat 30 Apr 2022 23:12",
          "username": "novice_expert",
          "content": "A.  Binary logging is enabled, or binary log replication is in progress. (used to block before MySQL 2.10, no longer affects ZDP )<br>x B.  Current SSL connections are open to the database. (affects ZDP)C.  Temporary tables or table locks are in use.(affects ZDP)D.  The value of the lower_case_table_names server parameter was set to 0 when the tables were created. (unrelated to ZDP)",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 508295,
          "date": "Fri 24 Dec 2021 04:51",
          "username": "joveoopsy",
          "content": "I think D has no influence on ZDP's success and B and C has major influence, so, A should have the minimum influence.. Thoughts?lower_case_table_namesneed to reboot instance",
          "upvote_count": "23",
          "selected_answers": ""
        },
        {
          "id": 546572,
          "date": "Sun 13 Feb 2022 17:28",
          "username": "oopsy",
          "content": "lower_case_table_namesneed to reboot instance",
          "upvote_count": "3",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#181",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A financial services company has an application deployed on AWS that uses an Amazon Aurora PostgreSQL DB cluster. A recent audit showed that no log files contained database administrator activity. A database specialist needs to recommend a solution to provide database access and activity logs. The solution should use the least amount of effort and have a minimal impact on performance.<br>Which solution should the database specialist recommend?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#181",
          "answers": [
            {
              "choice": "<p>A. Enable Aurora Database Activity Streams on the database in synchronous mode. Connect the Amazon Kinesis data stream to Kinesis Data Firehose. Set the Kinesis Data Firehose destination to an Amazon S3 bucket.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an AWS CloudTrail trail in the Region where the database runs. Associate the database activity logs with the trail.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Aurora Database Activity Streams on the database in asynchronous mode. Connect the Amazon Kinesis data stream to Kinesis Data Firehose. Set the Firehose destination to an Amazon S3 bucket.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Allow connections to the DB cluster through a bastion host only. Restrict database access to the bastion host and application servers. Push the bastion host logs to Amazon CloudWatch Logs using the CloudWatch Logs agent.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 181 discussion",
      "discusstion": [
        {
          "id": 612594,
          "date": "Tue 07 Jun 2022 07:39",
          "username": "justfmm",
          "content": "If the question states that we are able to have negligible effect on performance, should we use sync mode instead as it prioritize accuracy over performance ?<br><br>Asynchronous mode favors database performance over the accuracy of the activity stream.<br><br>The synchronous mode favors the accuracy of the activity stream over database performance.<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.Overview.html#DBActivityStreams.Overview.sync-mode<br><br>I believe the answer should be sync mode.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594731,
          "date": "Sat 30 Apr 2022 01:40",
          "username": "novice_expert",
          "content": "- asynchronous mode because our solution should have negligible effect on performance",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 555604,
          "date": "Thu 24 Feb 2022 23:17",
          "username": "tugboat",
          "content": "Async for performance",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 488474,
          "date": "Sat 27 Nov 2021 20:55",
          "username": "jove",
          "content": "Answer : C .. Here are the details : https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.Overview.html",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 478258,
          "date": "Sun 14 Nov 2021 18:51",
          "username": "leunamE",
          "content": "Option C asynchronous mode because our solution should have negligible effect on performance",
          "upvote_count": "2",
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
      "question_text": "<p>A company uses a single-node Amazon RDS for MySQL DB instance for its production database. The DB instance runs in an AWS Region in the United States.<br>A week before a big sales event, a new maintenance update is available for the DB instance. The maintenance update is marked as required. The company wants to minimize downtime for the DB instance and asks a database specialist to make the DB instance highly available until the sales event ends.<br>Which solution will meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#182",
          "answers": [
            {
              "choice": "<p>A. Defer the maintenance update until the sales event is over.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a read replica with the latest update. Initiate a failover before the sales event.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create a read replica with the latest update. Transfer all read-only traffic to the read replica during the sales event.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Convert the DB instance into a Multi-AZ deployment. Apply the maintenance update.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 182 discussion",
      "discusstion": [
        {
          "id": 755974,
          "date": "Sun 25 Dec 2022 20:57",
          "username": "lollyj",
          "content": "Multi-AZ doesn't stop the outage.B is better however the solution doesn't explain all of the necessary steps e.g. create read replica and making it primary by failing over.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 711151,
          "date": "Fri 04 Nov 2022 13:55",
          "username": "hogtrough",
          "content": "Only one answer provides high availability here.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 695412,
          "date": "Sat 15 Oct 2022 15:19",
          "username": "awsjjj",
          "content": "Key word in the question is\\\"to make the DB instance highly available until the sales event ends.\\\" hence answer is D",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 668693,
          "date": "Wed 14 Sep 2022 09:04",
          "username": "SonamDhingra",
          "content": "D is correct because that is the only option that makes the DB highly available.<br><br>The requirement is \\\"The company wants to minimize downtime for the DB instance and asks a database specialist to make the DB instance highly available until the sales event ends\\\"<br><br>The read replica needs manual effort to be promoted to primary. Hence B is wrong.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 628578,
          "date": "Fri 08 Jul 2022 04:04",
          "username": "sachindb2luwdbadb2luwdba",
          "content": "B is the correct answer<br><br>How to minimize downtime using read replicas<br>Typically in a self-managed or on-premises environment, a DBA minimizes downtime on an upgrade by using a rolling upgrade using read replicas. Amazon RDS doesn't fully automate one-click rolling upgrades. However, you can still perform a rolling upgrade by creating a read replica, upgrading the replica, promoting the replica, and then routing traffic to the promoted replica.<br><br>One other caveat about upgrade downtime is how Multi-AZ fits into the picture. One common fallacy is that Multi-AZ configurations prevents downtime during an upgrade. We do recommend that you use Multi-AZ for high availability, because it can prevent extended downtime due to hardware failure or a network outage. However, in the case of a MySQL or MariaDB engine upgrade, Multi-AZ doesn't eliminate downtime. The slow shutdown and the physical changes made on the active server by the mysql_upgrade program require this downtime.https://aws.amazon.com/blogs/database/best-practices-for-upgrading-amazon-rds-for-mysql-and-amazon-rds-for-mariadb/B is correct<br>https://aws.amazon.com/blogs/database/best-practices-for-upgrading-amazon-rds-for-mysql-and-amazon-rds-for-mariadb/",
          "upvote_count": "311",
          "selected_answers": ""
        },
        {
          "id": 632263,
          "date": "Sat 16 Jul 2022 18:24",
          "username": "db2luwdbadb2luwdba",
          "content": "https://aws.amazon.com/blogs/database/best-practices-for-upgrading-amazon-rds-for-mysql-and-amazon-rds-for-mariadb/B is correct<br>https://aws.amazon.com/blogs/database/best-practices-for-upgrading-amazon-rds-for-mysql-and-amazon-rds-for-mariadb/",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 632264,
          "date": "Sat 16 Jul 2022 18:25",
          "username": "db2luwdba",
          "content": "B is correct<br>https://aws.amazon.com/blogs/database/best-practices-for-upgrading-amazon-rds-for-mysql-and-amazon-rds-for-mariadb/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 622682,
          "date": "Sun 26 Jun 2022 18:45",
          "username": "elf78",
          "content": "Reading through all of the comments and the link for /rds-required-maintenance page, it's obvious that multi az is the solution to \\\"MINIMIZE\\\" the down time.",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 602568,
          "date": "Mon 16 May 2022 14:09",
          "username": "praffuln",
          "content": "A should be answer. As multi-az mode will update to both db engines.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 594734,
          "date": "Sat 30 Apr 2022 01:51",
          "username": "novice_expert",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/rds-required-maintenance/<br><br>multi AZ outage will be the time for failover (60 sec)",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 584149,
          "date": "Mon 11 Apr 2022 12:35",
          "username": "Sashe",
          "content": "I'll go with B<br>Using a read replica to reduce downtime when upgrading a MySQL database<br>section - Using a read replica to reduce downtime when upgrading a MySQL database",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 561255,
          "date": "Sat 05 Mar 2022 07:13",
          "username": "RotterDam",
          "content": "It has to be D since this wording in the question is key \\\"the maintenance update has been designated as necessary. \\\"",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 557433,
          "date": "Sun 27 Feb 2022 17:18",
          "username": "user0001",
          "content": "question is missing more info<br>A is good as you keep an environment that you know is working<br>with D , you can't guaranty problem with the patch and need time to test it",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 548907,
          "date": "Wed 16 Feb 2022 21:21",
          "username": "user0001RotterDam",
          "content": "i go with A,<br>the update not not urgent so they can waitthe update IS mandatory. Its right there in the question: \\\"the maintenance update has been designated as necessary.\\\"- That necessitates converting the DB to Multi-AZ and since deferment is not possible due to the maint updates mandatory nature",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 561256,
          "date": "Sat 05 Mar 2022 07:14",
          "username": "RotterDam",
          "content": "the update IS mandatory. Its right there in the question: \\\"the maintenance update has been designated as necessary.\\\"- That necessitates converting the DB to Multi-AZ and since deferment is not possible due to the maint updates mandatory nature",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 534582,
          "date": "Fri 28 Jan 2022 10:53",
          "username": "awsmonster",
          "content": "D. <br><br>With B, the database endpoint needs to be updated in the applications. That requires testing to ensure that the connectivity works.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 510231,
          "date": "Mon 27 Dec 2021 11:52",
          "username": "Shunpin",
          "content": "I prefer B<br>1. This is \\\"database\\\" required maintenance.<br>2. Major DB engine you need both primary and read replica downtime<br>3. Miner DB engine upgrade you can upgrade read replica first.<br>https://aws.amazon.com/blogs/database/best-practices-for-upgrading-amazon-rds-for-mysql-and-amazon-rds-for-mariadb/",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 503357,
          "date": "Fri 17 Dec 2021 05:32",
          "username": "mnzsql365",
          "content": "Ans isD",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 488479,
          "date": "Sat 27 Nov 2021 21:04",
          "username": "jove",
          "content": "This explains : https://aws.amazon.com/premiumsupport/knowledge-center/rds-required-maintenance/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 487479,
          "date": "Fri 26 Nov 2021 16:28",
          "username": "Sp230",
          "content": "I think A. <br>https://aws.amazon.com/premiumsupport/knowledge-center/rds-mysql-downtime-impact/<br> \\\"the DB engine version upgrade happens to both the primary and standby hosts at the same time. Therefore, a DB engine version upgrade doesn't benefit from a Multi-AZ deployment\\\"",
          "upvote_count": "4",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#183",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is migrating a database in an Amazon RDS for SQL Server DB instance from one AWS Region to another. The company wants to minimize database downtime during the migration.<br>Which strategy should the company choose for this cross-Region migration?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#183",
          "answers": [
            {
              "choice": "<p>A. Back up the source database using native backup to an Amazon S3 bucket in the same Region. Then restore the backup in the target Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Back up the source database using native backup to an Amazon S3 bucket in the same Region. Use Amazon S3 Cross-Region Replication to copy the backup to an S3 bucket in the target Region. Then restore the backup in the target Region.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Configure AWS Database Migration Service (AWS DMS) to replicate data between the source and the target databases. Once the replication is in sync, terminate the DMS task.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Add an RDS for SQL Server cross-Region read replica in the target Region. Once the replication is in sync, promote the read replica to master.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 183 discussion",
      "discusstion": [
        {
          "id": 477831,
          "date": "Sat 13 Nov 2021 23:27",
          "username": "jove",
          "content": "Minimum downtime > AWS DMS : Option C",
          "upvote_count": "9",
          "selected_answers": ""
        },
        {
          "id": 733875,
          "date": "Fri 02 Dec 2022 16:29",
          "username": "Sab",
          "content": "Amazon RDS for SQL Server now support Cross Region Read Replica that can be promoted to standalone instance.<br>So Answer D is the best fit .",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 758772,
          "date": "Tue 27 Dec 2022 17:19",
          "username": "tucobbad",
          "content": "Now Read Replica for RDS SQL Server is supported. Now what? Go with C or D? BTW, does AWS update their exams with new features?",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 723889,
          "date": "Mon 21 Nov 2022 21:35",
          "username": "Sab",
          "content": "Amazon RDS for SQL Server now support Cross Region Read Replica that can be promoted to standalone instance.<br>So Answer D is the best fit .",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 660225,
          "date": "Mon 05 Sep 2022 15:49",
          "username": "Adi_MJeanGat",
          "content": "Cross-Region disaster recovery of Amazon RDS for SQL Server - is possible https://aws.amazon.com/blogs/database/cross-region-disaster-recovery-of-amazon-rds-for-sql-server/. Why not D?From link, \\\"SQL Server MS Replication is one such feature that, as of this writing, isn't yet available in Amazon RDS for SQL Server. However, you can to use AWS Database Migration Service (AWS DMS) to do continuous replication\\\"",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 677398,
          "date": "Fri 23 Sep 2022 21:18",
          "username": "JeanGat",
          "content": "From link, \\\"SQL Server MS Replication is one such feature that, as of this writing, isn't yet available in Amazon RDS for SQL Server. However, you can to use AWS Database Migration Service (AWS DMS) to do continuous replication\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 620078,
          "date": "Wed 22 Jun 2022 03:05",
          "username": "sachin",
          "content": "C will provide minimum down time",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 594633,
          "date": "Fri 29 Apr 2022 20:03",
          "username": "novice_expert",
          "content": "A.  slowB.  slowC.  source-> AWS DMS -> target region database -> sync -> terminate DMSD.  cross-Region read replica not supported",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 566613,
          "date": "Sun 13 Mar 2022 09:02",
          "username": "Dantas",
          "content": "Option C. <br><br>The following aren't supported on Amazon RDS for SQL Server:<br>- Creating a read replica in a different AWS Region (a cross-Region read replica)<br>- Backup retention of read replicas<br>- Point-in-time recovery from read replicas<br>- Manual snapshots of read replicas<br>- Multi-AZ read replicas<br>- Creating read replicas of read replicas<br>- Synchronization of user logins to read replicas<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.ReadReplicas.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 555559,
          "date": "Thu 24 Feb 2022 22:06",
          "username": "tugboat",
          "content": "A and B will be slow<br>D is not possible yet",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 548455,
          "date": "Wed 16 Feb 2022 10:39",
          "username": "yahooos",
          "content": "C<br>Minimum downtime > AWS DMS",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 499815,
          "date": "Sun 12 Dec 2021 06:59",
          "username": "mnzsql365RotterDam",
          "content": "A - for me, the question is about transferring database from one region to another. Native backup restore is supported for RDS SQL Server using S3.you missedthe \\\"minimum downtime\\\"",
          "upvote_count": "12",
          "selected_answers": ""
        },
        {
          "id": 561168,
          "date": "Sat 05 Mar 2022 05:15",
          "username": "RotterDam",
          "content": "you missedthe \\\"minimum downtime\\\"",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 497836,
          "date": "Thu 09 Dec 2021 16:25",
          "username": "nood",
          "content": "C for me<br>https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.XRgn.html<br>With Amazon RDS, you can create a MariaDB, MySQL, Oracle, or PostgreSQL read replica in a different AWS Region from the source DB instance. Creating a cross-Region read replica isn't supported for SQL Server on Amazon RDS.",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 493644,
          "date": "Sat 04 Dec 2021 11:26",
          "username": "scottkerkereji",
          "content": "Option B seems correct from https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.Procedural.Importing.html, yet there is a requirement that throughout the transfer that the downtime needs to be minimal, therefore, AWS DMS would be the choice to fulfill the requirement. For detail, one can refer to this blog post, https://aws.amazon.com/blogs/database/replicate-and-transform-data-in-amazon-aurora-postgresql-across-multiple-regions-using-aws-dms/, and notice that AWS DMS supports abundant sources and targets.maybe you mean C",
          "upvote_count": "21",
          "selected_answers": ""
        },
        {
          "id": 634949,
          "date": "Fri 22 Jul 2022 04:20",
          "username": "eji",
          "content": "maybe you mean C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 476304,
          "date": "Thu 11 Nov 2021 15:49",
          "username": "Tonytt",
          "content": "should be C",
          "upvote_count": "4",
          "selected_answers": ""
        },
        {
          "id": 476238,
          "date": "Thu 11 Nov 2021 14:42",
          "username": "JoeEswar",
          "content": "A,B - No minimal downtime<br>D- Cross Region replica not supported for RDS SQL Server<br>Ans : C",
          "upvote_count": "6",
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
      "question_text": "<p>A financial company is hosting its web application on AWS. The application's database is hosted on Amazon RDS for MySQL with automated backups enabled.<br>The application has caused a logical corruption of the database, which is causing the application to become unresponsive. The specific time of the corruption has been identified, and it was within the backup retention period.<br>How should a database specialist recover the database to the most recent point before corruption?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#184",
          "answers": [
            {
              "choice": "<p>A. Use the point-in-time restore capability to restore the DB instance to the specified time. No changes to the application connection string are required.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use the point-in-time restore capability to restore the DB instance to the specified time. Change the application connection string to the new, restored DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Restore using the latest automated backup. Change the application connection string to the new, restored DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Restore using the appropriate automated backup. No changes to the application connection string are required.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 184 discussion",
      "discusstion": [
        {
          "id": 478260,
          "date": "Sun 14 Nov 2021 19:00",
          "username": "johnconnor",
          "content": "It has to be B \\\"Please note: When you perform a restore operation to a point in time or from a DB Snapshot, a new DB Instance is created with a new endpoint (the old DB Instance can be deleted if so desired). This is done to enable you to create multiple DB Instances from a specific DB Snapshot or point in time.\\\"",
          "upvote_count": "15",
          "selected_answers": ""
        },
        {
          "id": 594749,
          "date": "Sat 30 Apr 2022 02:36",
          "username": "novice_expert",
          "content": "restore operation to a point in time or from a DB Snapshot, a new DB Instance is created",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 562566,
          "date": "Mon 07 Mar 2022 12:25",
          "username": "RotterDam",
          "content": "Got this question in my exam. (i cleared it). B is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 555619,
          "date": "Thu 24 Feb 2022 23:36",
          "username": "tugboat",
          "content": "Point app to restored instance",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 522824,
          "date": "Thu 13 Jan 2022 13:31",
          "username": "szl0144",
          "content": "I vote C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 509324,
          "date": "Sat 25 Dec 2021 23:54",
          "username": "jove",
          "content": "PIT restore requires a new instance to be created. Hence, the answer is B",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 490737,
          "date": "Tue 30 Nov 2021 15:01",
          "username": "Justu",
          "content": "B is the correct one",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 476918,
          "date": "Fri 12 Nov 2021 13:21",
          "username": "leunamE",
          "content": "Option B. ",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#185",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A database specialist is designing an application to answer one-time queries. The application will query complex customer data and provide reports to end users.<br>These reports can include many fields. The database specialist wants to give users the ability to query the database by using any of the provided fields.<br>The database's traffic volume will be high but variable during peak times. However, the database will not have much traffic at other times during the day.<br>Which solution will meet these requirements MOST cost-effectively?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#185",
          "answers": [
            {
              "choice": "<p>A. Amazon DynamoDB with provisioned capacity mode and auto scaling<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon DynamoDB with on-demand capacity mode<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon Aurora with auto scaling enabled<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon Aurora in a serverless mode<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 185 discussion",
      "discusstion": [
        {
          "id": 491388,
          "date": "Wed 01 Dec 2021 08:52",
          "username": "Justulollyj",
          "content": "Hard question. As \\\"database specialist want to enable users to query the database using any of the fields offered\\\" I think DynamoDB is out of the question.<br>So it leave C and D.  As max load is not known in the peak hours, (variables), then then D is the only option. In C, with autoscaling, you would need to define min and max ACUs for the autoscaling.DynamoDB out of question?I thought it would qualigy because GSIs are predetermined and flexible.I'm confused....",
          "upvote_count": "111",
          "selected_answers": ""
        },
        {
          "id": 756097,
          "date": "Mon 26 Dec 2022 01:12",
          "username": "lollyj",
          "content": "DynamoDB out of question?I thought it would qualigy because GSIs are predetermined and flexible.I'm confused....",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 609431,
          "date": "Mon 30 May 2022 21:21",
          "username": "Dantas",
          "content": "Large amounts of client data would require large amounts of RCUs.<br>Query the database using any of the fields offered ins't a good match for key/value storage.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 595032,
          "date": "Sat 30 Apr 2022 15:22",
          "username": "novice_expert",
          "content": "RDS for query on any fieldC.  auto scaling can be option if we know more about loadD.  Aurora Serverless for current info",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 561574,
          "date": "Sat 05 Mar 2022 19:34",
          "username": "RotterDam",
          "content": "Guys - I see this constant confusion about when to use On Demand vs Provisioned w/ Autoscaling. There's aHUGE HUGE difference in cost when it comes to On Demand especially for large applications (typically AWS asks aboutlarge applications). It can beSEVEN times higher. Autoscaling can adjust to almost negligible capacity during off peak hoursto large capacity during peak . Usually the winner here is autoscaling with Provisioned!!<br><br>While on-demand delivers the best fit for scalability, the cost is approximately seven times higher than provisioned capacity. In addition, provisioned capacity offers the option to purchase reserved capacity, which can save between 40% and 80% compared to non-reserved provisioned capacity. This means on-demand could cost between 15 times and 20 times more than reserved provisioned capacity for some configurations. For small applications, the flexibility of on-demand may be worth the extra cost, but for large applications, it can mean spending hundreds or thousands of dollars more per month",
          "upvote_count": "3",
          "selected_answers": ""
        },
        {
          "id": 492441,
          "date": "Thu 02 Dec 2021 13:16",
          "username": "GMartinelli",
          "content": "Option D",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 491361,
          "date": "Wed 01 Dec 2021 08:02",
          "username": "cynthiacy",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html#limits-items",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 491355,
          "date": "Wed 01 Dec 2021 07:59",
          "username": "cynthiacy",
          "content": "I voted for D as well.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 478583,
          "date": "Mon 15 Nov 2021 10:45",
          "username": "leunamE",
          "content": "Option D. ",
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
      "question_text": "<p>A financial services company runs an on-premises MySQL database for a critical application. The company is dissatisfied with its current database disaster recovery (DR) solution. The application experiences a significant amount of downtime whenever the database fails over to its DR facility. The application also experiences slower response times when reports are processed on the same database. To minimize the downtime in DR situations, the company has decided to migrate the database to AWS. The company requires a solution that is highly available and the most cost-effective.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#186",
          "answers": [
            {
              "choice": "<p>A. Create an Amazon RDS for MySQL Multi-AZ DB instance and configure a read replica in a different Availability Zone. Configure the application to reference the replica instance endpoint and report queries to reference the primary DB instance endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create an Amazon RDS for MySQL Multi-AZ DB instance and configure a read replica in a different Availability Zone. Configure the application to reference the primary DB instance endpoint and report queries to reference the replica instance endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Create an Amazon Aurora DB cluster and configure an Aurora Replica in a different Availability Zone. Configure the application to reference the cluster endpoint and report queries to reference the reader endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Create an Amazon Aurora DB cluster and configure an Aurora Replica in a different Availability Zone. Configure the application to reference the primary DB instance endpoint and report queries to reference the replica instance endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 186 discussion",
      "discusstion": [
        {
          "id": 756105,
          "date": "Mon 26 Dec 2022 01:30",
          "username": "lollyj",
          "content": "Aurora is 20% more expensive.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 750515,
          "date": "Tue 20 Dec 2022 06:12",
          "username": "SouvikC94",
          "content": "Keyword: significant amount of downtime,<br><br>Failover<br><br>In RDS, Failover to read replica is done manually, which could lead to data loss. You can use Multi-AZ (Standby instance) feature for automatic failover, and to prevent downtime and data loss.<br><br>In Aurora, Failover to read replica is done automatically to prevent data loss. Failover time is faster on Aurora.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 748623,
          "date": "Sun 18 Dec 2022 06:43",
          "username": "khun",
          "content": "It's B.  looking for cost-effective approach.<br>Aurora instances will cost you ~20% more than RDS MySQL. If you create Aurora read replicas then the cost of your Aurora cluster will double. Aurora is only available on certain RDS instance sizes.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 735457,
          "date": "Sun 04 Dec 2022 22:12",
          "username": "vkruger",
          "content": "The company requires a solution that is highly available and the most cost-effective.<br>Keyword is \\\"highly available\\\"<br>My answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 660249,
          "date": "Mon 05 Sep 2022 16:06",
          "username": "Adi_M",
          "content": "reader endpoint - is the keyword",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 658325,
          "date": "Sat 03 Sep 2022 12:19",
          "username": "SonamDhingraSonamDhingra",
          "content": "B is correctChanging to C as B will need 3 instances whereas is aurora can do the same with 2 instances.",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 668698,
          "date": "Wed 14 Sep 2022 09:11",
          "username": "SonamDhingra",
          "content": "Changing to C as B will need 3 instances whereas is aurora can do the same with 2 instances.",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 657658,
          "date": "Fri 02 Sep 2022 19:29",
          "username": "mbar94",
          "content": "Seems that it's C.  https://aws.amazon.com/about-aws/whats-new/2016/09/reader-end-point-for-amazon-aurora/",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#187",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company with 500,000 employees needs to supply its employee list to an application used by human resources. Every 30 minutes, the data is exported using the LDAP service to load into a new Amazon DynamoDB table. The data model has a base table with Employee ID for the partition key and a global secondary index with Organization ID as the partition key.<br>While importing the data, a database specialist receives ProvisionedThroughputExceededException errors. After increasing the provisioned write capacity units<br>(WCUs) to 50,000, the specialist receives the same errors. Amazon CloudWatch metrics show a consumption of 1,500 WCUs.<br>What should the database specialist do to address the issue?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#187",
          "answers": [
            {
              "choice": "<p>A. Change the data model to avoid hot partitions in the global secondary index.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Enable auto scaling for the table to automatically increase write capacity during bulk imports.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the table to use on-demand capacity instead of provisioned capacity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the number of retries on the bulk loading application.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 187 discussion",
      "discusstion": [
        {
          "id": 679024,
          "date": "Sun 25 Sep 2022 19:11",
          "username": "cloudsunriser",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 668699,
          "date": "Wed 14 Sep 2022 09:12",
          "username": "SonamDhingra",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 657659,
          "date": "Fri 02 Sep 2022 19:33",
          "username": "mbar94",
          "content": "Answer A - hot partition. https://aws.amazon.com/premiumsupport/knowledge-center/dynamodb-table-throttled/",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#188",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an application that uses an Amazon DynamoDB table as its data store. During normal business days, the throughput requirements from the application are uniform and consist of 5 standard write calls per second to the DynamoDB table. Each write call has 2 KB of data.<br>For 1 hour each day, the company runs an additional automated job on the DynamoDB table that makes 20 write requests per second. No other application writes to the DynamoDB table. The DynamoDB table does not have to meet any additional capacity requirements.<br>How should a database specialist configure the DynamoDB table's capacity to meet these requirements MOST cost-effectively?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#188",
          "answers": [
            {
              "choice": "<p>A. Use DynamoDB provisioned capacity with 5 WCUs and auto scaling.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Use DynamoDB provisioned capacity with 5 WCUs and a write-through cache that DynamoDB Accelerator (DAX) provides.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use DynamoDB provisioned capacity with 10 WCUs and auto scaling.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use DynamoDB provisioned capacity with 10 WCUs and no auto scaling.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 188 discussion",
      "discusstion": [
        {
          "id": 758368,
          "date": "Tue 27 Dec 2022 11:26",
          "username": "parle101",
          "content": "C is the answer based on this doc.<br><br>If the batch occurs at scheduled times, you can schedule an increase to your auto- scaling capacity before it runs<br>https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/CostOptimization_TableCapacityMode.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 658329,
          "date": "Sat 03 Sep 2022 12:21",
          "username": "SonamDhingra",
          "content": "C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 658016,
          "date": "Sat 03 Sep 2022 05:08",
          "username": "mbar94",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html<br><br>It's C.  5x2KB10 WCU + auto scaling needed as well for peak time.",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: C"
        }
      ]
    },
    {
      "question_id": "#189",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company wants to build a new invoicing service for its cloud-native application on AWS. The company has a small development team and wants to focus on service feature development and minimize operations and maintenance as much as possible. The company expects the service to handle billions of requests and millions of new records every day. The service feature requirements, including data access patterns are well-defined. The service has an availability target of<br>99.99% with a milliseconds latency requirement. The database for the service will be the system of record for invoicing data.<br>Which database solution meets these requirements at the LOWEST cost?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#189",
          "answers": [
            {
              "choice": "<p>A. Amazon Neptune<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Amazon Aurora PostgreSQL Serverless<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Amazon RDS for PostgreSQL<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Amazon DynamoDB<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 189 discussion",
      "discusstion": [
        {
          "id": 679026,
          "date": "Sun 25 Sep 2022 19:13",
          "username": "cloudsunriser",
          "content": "Known patterns, minimum maintenance, miliseconds latency",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 665922,
          "date": "Sun 11 Sep 2022 09:44",
          "username": "VMHarry",
          "content": "invoice system requires ACID ?",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 658333,
          "date": "Sat 03 Sep 2022 12:23",
          "username": "SonamDhingra",
          "content": "D is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 658031,
          "date": "Sat 03 Sep 2022 05:37",
          "username": "mbar94",
          "content": "Known patterns, minimum maintenance, miliseconds latency - vote for DynamoDB. ",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#190",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>Application developers have reported that an application is running slower as more users are added. The application database is running on an Amazon Aurora<br>DB cluster with an Aurora Replica. The application is written to take advantage of read scaling through reader endpoints. A database specialist looks at the performance metrics of the database and determines that, as new users were added to the database, the primary instance CPU utilization steadily increased while the Aurora Replica CPU utilization remained steady.<br>How can the database specialist improve database performance while ensuring minimal downtime?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#190",
          "answers": [
            {
              "choice": "<p>A. Modify the Aurora DB cluster to add more replicas until the overall load stabilizes. Then, reduce the number of replicas once the application meets service level objectives.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Modify the primary instance to a larger instance size that offers more CPU capacity.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify a replica to a larger instance size that has more CPU capacity. Then, promote the modified replica.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Restore the Aurora DB cluster to one that has an instance size with more CPU capacity. Then, swap the names of the old and new DB clusters.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 190 discussion",
      "discusstion": [
        {
          "id": 756133,
          "date": "Mon 26 Dec 2022 03:14",
          "username": "lollyj",
          "content": "The question reports that the CPU issue is on the primary instance and not on the RR.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 725994,
          "date": "Thu 24 Nov 2022 16:16",
          "username": "Jiang_aws1",
          "content": "C is wrong , You can't \\\"Modify\\\" to a large instance,You have to drop exist one then re-create a newer replica . so D is better than C",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 695454,
          "date": "Sat 15 Oct 2022 16:13",
          "username": "awsjjj",
          "content": "D is incorrect due to the possible higher RTO and RPO(higher Downtime). C is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 683790,
          "date": "Fri 30 Sep 2022 20:10",
          "username": "JeanGatJeanGat",
          "content": "C. There is minimal downtime with C, but NO downtime with D. The only issue is that D potentially up to date with the latest transactions (i.e. you used a backup).The only issue is that D potentially NOT up to date with the latest transactions (i.e. you used a backup).",
          "upvote_count": "11",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 683793,
          "date": "Fri 30 Sep 2022 20:11",
          "username": "JeanGat",
          "content": "The only issue is that D potentially NOT up to date with the latest transactions (i.e. you used a backup).",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 658336,
          "date": "Sat 03 Sep 2022 12:24",
          "username": "SonamDhingra",
          "content": "D is correct",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 658034,
          "date": "Sat 03 Sep 2022 05:41",
          "username": "mbar94SonamDhingraawsjjjJeanGat",
          "content": "Minimal downtime - operations first on replica and then promotion - Answer C. Promotion of theread replica will cause downtime, there will be no downtime with option D. D will result in data loss. C is correctTrue, but as soon as you \\\"restore\\\" something, that is old data.How can you flip to old data (i.e. your backup) while the system is still up and running?Aren't you potentially losing transactions?",
          "upvote_count": "3112",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 668700,
          "date": "Wed 14 Sep 2022 09:15",
          "username": "SonamDhingraawsjjjJeanGat",
          "content": "Promotion of theread replica will cause downtime, there will be no downtime with option D. D will result in data loss. C is correctTrue, but as soon as you \\\"restore\\\" something, that is old data.How can you flip to old data (i.e. your backup) while the system is still up and running?Aren't you potentially losing transactions?",
          "upvote_count": "112",
          "selected_answers": ""
        },
        {
          "id": 695456,
          "date": "Sat 15 Oct 2022 16:15",
          "username": "awsjjj",
          "content": "D will result in data loss. C is correct",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 683788,
          "date": "Fri 30 Sep 2022 20:06",
          "username": "JeanGat",
          "content": "True, but as soon as you \\\"restore\\\" something, that is old data.How can you flip to old data (i.e. your backup) while the system is still up and running?Aren't you potentially losing transactions?",
          "upvote_count": "2",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#191",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company's development team needs to have production data restored in a staging AWS account. The production database is running on an Amazon RDS for<br>PostgreSQL Multi-AZ DB instance, which has AWS KMS encryption enabled using the default KMS key. A database specialist planned to share the most recent automated snapshot with the staging account, but discovered that the option to share snapshots is disabled in the AWS Management Console.<br>What should the database specialist do to resolve this?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#191",
          "answers": [
            {
              "choice": "<p>A. Disable automated backups in the DB instance. Share both the automated snapshot and the default KMS key with the staging account. Restore the snapshot in the staging account and enable automated backups.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Copy the automated snapshot specifying a custom KMS encryption key. Share both the copied snapshot and the custom KMS encryption key with the staging account. Restore the snapshot to the staging account within the same Region.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Modify the DB instance to use a custom KMS encryption key. Share both the automated snapshot and the custom KMS encryption key with the staging account. Restore the snapshot in the staging account.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Copy the automated snapshot while keeping the default KMS key. Share both the snapshot and the default KMS key with the staging account. Restore the snapshot in the staging account.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 191 discussion",
      "discusstion": [
        {
          "id": 658129,
          "date": "Sat 03 Sep 2022 08:31",
          "username": "mbar94",
          "content": "Agree with B - https://aws.amazon.com/premiumsupport/knowledge-center/rds-snapshots-share-account/",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 679030,
          "date": "Sun 25 Sep 2022 19:19",
          "username": "cloudsunriser",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 658337,
          "date": "Sat 03 Sep 2022 12:28",
          "username": "SonamDhingra",
          "content": "B is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#192",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A software-as-a-service (SaaS) company is using an Amazon Aurora Serverless DB cluster for its production MySQL database. The DB cluster has general logs and slow query logs enabled. A database engineer must use the most operationally efficient solution with minimal resource utilization to retain the logs and facilitate interactive search and analysis.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#192",
          "answers": [
            {
              "choice": "<p>A. Use an AWS Lambda function to ship database logs to an Amazon S3 bucket. Use Amazon Athena and Amazon QuickSight to search and analyze the logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Download the logs from the DB cluster and store them in Amazon S3 by using manual scripts. Use Amazon Athena and Amazon QuickSight to search and analyze the logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Use an AWS Lambda function to ship database logs to an Amazon S3 bucket. Use Amazon Elasticsearch Service (Amazon ES) and Kibana to search and analyze the logs.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Use Amazon CloudWatch Logs Insights to search and analyze the logs when the logs are automatically uploaded by the DB cluster.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 192 discussion",
      "discusstion": [
        {
          "id": 679755,
          "date": "Mon 26 Sep 2022 14:50",
          "username": "cloudsunriser",
          "content": "https://aws.amazon.com/premiumsupport/knowledge-center/aurora-serverless-logs-enable-view/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 658338,
          "date": "Sat 03 Sep 2022 12:29",
          "username": "SonamDhingra",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 658130,
          "date": "Sat 03 Sep 2022 08:34",
          "username": "mbar94",
          "content": "Minimal resource utilization - I'd go with D - https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#193",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A retail company uses Amazon Redshift Spectrum to run complex analytical queries on objects that are stored in an Amazon S3 bucket. The objects are joined with multiple dimension tables that are stored in an Amazon Redshift database. The company uses the database to create monthly and quarterly aggregated reports. Users who attempt to run queries are reporting the following error message: error: Spectrum Scan Error: Access throttled<br>Which solution will resolve this error?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#193",
          "answers": [
            {
              "choice": "<p>A. Check file sizes of fact tables in Amazon S3, and look for large files. Break up large files into smaller files of equal size between 100 MB and 1 GB<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Reduce the number of queries that users can run in parallel.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Check file sizes of fact tables in Amazon S3, and look for small files. Merge the small files into larger files of at least 64 MB in size.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Review and optimize queries that submit a large aggregation step to Redshift Spectrum.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 193 discussion",
      "discusstion": [
        {
          "id": 658131,
          "date": "Sat 03 Sep 2022 08:37",
          "username": "mbar94",
          "content": "C for sure according to the link - https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-troubleshooting.html",
          "upvote_count": "6",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 706647,
          "date": "Fri 28 Oct 2022 19:05",
          "username": "TL12345",
          "content": "C. <br>https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-troubleshooting.html#spectrum-troubleshooting-access-throttled",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 683796,
          "date": "Fri 30 Sep 2022 20:17",
          "username": "JeanGat",
          "content": "C. Both S3 and AWS KMS can throttle..the fix is always the same...larger/less files.<br>https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-troubleshooting.html",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 679757,
          "date": "Mon 26 Sep 2022 14:53",
          "username": "cloudsunriser",
          "content": "https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-troubleshooting.html#spectrum-troubleshooting-access-throttled",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 661269,
          "date": "Tue 06 Sep 2022 15:28",
          "username": "Adi_M",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 658344,
          "date": "Sat 03 Sep 2022 12:30",
          "username": "SonamDhingraSonamDhingra",
          "content": "A is correct<br>https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-troubleshooting.htmlSorry, the documentation points to C. ",
          "upvote_count": "12",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 668704,
          "date": "Wed 14 Sep 2022 09:22",
          "username": "SonamDhingra",
          "content": "Sorry, the documentation points to C. ",
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
      "question_text": "<p>A company's applications store data in Amazon Aurora MySQL DB clusters. The company has separate AWS accounts for its production, test, and development environments. To test new functionality in the test environment, the company's development team requires a copy of the production database four times a day.<br>Which solution meets this requirement with the MOST operational efficiency?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: D</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#194",
          "answers": [
            {
              "choice": "<p>A. Take a manual snapshot in the production account. Share the snapshot with the test account. Restore the database from the snapshot.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Take a manual snapshot in the production account. Export the snapshot to Amazon S3. Copy the snapshot to an S3 bucket in the test account. Restore the database from the snapshot.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Share the Aurora DB cluster with the test account. Create a snapshot of the production database in the test account. Restore the database from the snapshot.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Share the Aurora DB cluster with the test account. Create a clone of the production database in the test account.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 194 discussion",
      "discusstion": [
        {
          "id": 679773,
          "date": "Mon 26 Sep 2022 15:09",
          "username": "cloudsunriser",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html#Aurora.Managing.Clone.Cross-Account",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 658346,
          "date": "Sat 03 Sep 2022 12:31",
          "username": "SonamDhingra",
          "content": "D is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        },
        {
          "id": 658168,
          "date": "Sat 03 Sep 2022 09:23",
          "username": "mbar94",
          "content": "It's D.  https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html<br><br>https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html#Aurora.Managing.Clone.Cross-Account",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: D"
        }
      ]
    },
    {
      "question_id": "#195",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>An application reads and writes data to an Amazon RDS for MySQL DB instance. A new reporting dashboard needs read-only access to the database. When the application and reports are both under heavy load, the database experiences performance degradation. A database specialist needs to improve the database performance.<br>What should the database specialist do to meet these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: A</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#195",
          "answers": [
            {
              "choice": "<p>A. Create a read replica of the DB instance. Configure the reports to connect to the replication instance endpoint.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a read replica of the DB instance. Configure the application and reports to connect to the cluster endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Enable Multi-AZ deployment. Configure the reports to connect to the standby replica.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable Multi-AZ deployment. Configure the application and reports to connect to the cluster endpoint.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 195 discussion",
      "discusstion": [
        {
          "id": 699563,
          "date": "Thu 20 Oct 2022 07:08",
          "username": "RBSKSatprave",
          "content": "Why not C - With Multi-AZ DB cluster we should be able to achieve this??It's a Standby Replica, not a Read replica, So it should be A",
          "upvote_count": "11",
          "selected_answers": ""
        },
        {
          "id": 715345,
          "date": "Thu 10 Nov 2022 16:18",
          "username": "Satprave",
          "content": "It's a Standby Replica, not a Read replica, So it should be A",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 679775,
          "date": "Mon 26 Sep 2022 15:11",
          "username": "cloudsunriser",
          "content": "A is correct",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 658348,
          "date": "Sat 03 Sep 2022 12:32",
          "username": "SonamDhingra",
          "content": "A is correct",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: A"
        },
        {
          "id": 658179,
          "date": "Sat 03 Sep 2022 09:28",
          "username": "mbar94",
          "content": "Take off only reports from the primary to read replica. It's A.  https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html",
          "upvote_count": "4",
          "selected_answers": "Selected Answer: A"
        }
      ]
    },
    {
      "question_id": "#196",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is loading sensitive data into an Amazon Aurora MySQL database. To meet compliance requirements, the company needs to enable audit logging on the Aurora MySQL DB cluster to audit database activity. This logging will include events such as connections, disconnections, queries, and tables queried. The company also needs to publish the DB logs to Amazon CloudWatch to perform real-time data analysis.<br>Which solution meets these requirements?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#196",
          "answers": [
            {
              "choice": "<p>A. Modify the default option group parameters to enable Advanced Auditing. Restart the database for the changes to take effect.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Create a custom DB cluster parameter group. Modify the parameters for Advanced Auditing. Modify the cluster to associate the new custom DB parameter group with the Aurora MySQL DB cluster.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Take a snapshot of the database. Create a new DB instance, and enable custom auditing and logging to CloudWatch. Deactivate the DB instance that has no logging.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Enable AWS CloudTrail for the DB instance. Create a filter that provides only connections, disconnections, queries, and tables queried.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 196 discussion",
      "discusstion": [
        {
          "id": 658215,
          "date": "Sat 03 Sep 2022 10:05",
          "username": "mbar94",
          "content": "Vote for B.  https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Auditing.html",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 679776,
          "date": "Mon 26 Sep 2022 15:14",
          "username": "cloudsunriser",
          "content": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Auditing.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 658349,
          "date": "Sat 03 Sep 2022 12:34",
          "username": "SonamDhingra",
          "content": "B is correct, custom parameter group",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#197",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has an on-premises production Microsoft SQL Server with 250 GB of data in one database. A database specialist needs to migrate this on-premises<br>SQL Server to Amazon RDS for SQL Server. The nightly native SQL Server backup file is approximately 120 GB in size. The application can be down for an extended period of time to complete the migration. Connectivity between the on-premises environment and AWS can be initiated from on-premises only.<br>How can the database be migrated from on-premises to Amazon RDS with the LEAST amount of effort?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#197",
          "answers": [
            {
              "choice": "<p>A. Back up the SQL Server database using a native SQL Server backup. Upload the backup files to Amazon S3. Download the backup files on an Amazon EC2 instance and restore them from the EC2 instance into the new production RDS instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Back up the SQL Server database using a native SQL Server backup. Upload the backup files to Amazon S3. Restore the backup files from the S3 bucket into the new production RDS instance.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Provision and configure AWS DMS. Set up replication between the on-premises SQL Server environment to replicate the database to the new production RDS instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Back up the SQL Server database using AWS Backup. Once the backup is complete, restore the completed backup to an Amazon EC2 instance and move it to the new production RDS instance.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 197 discussion",
      "discusstion": [
        {
          "id": 668709,
          "date": "Wed 14 Sep 2022 09:26",
          "username": "SonamDhingra",
          "content": "B is correct since DMS requires connectivity from AWS to on-premise, which is not allowed.",
          "upvote_count": "2",
          "selected_answers": ""
        },
        {
          "id": 658664,
          "date": "Sat 03 Sep 2022 18:55",
          "username": "mbar94",
          "content": "Connectivity only possibile from on-premise, so it's B over C - https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.Procedural.Importing.html",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#198",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A database specialist needs to delete user data and sensor data 1 year after it was loaded in an Amazon DynamoDB table. TTL is enabled on one of the attributes. The database specialist monitors TTL rates on the Amazon CloudWatch metrics for the table and observes that items are not being deleted as expected.<br>What is the MOST likely reason that the items are not being deleted?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: B</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#198",
          "answers": [
            {
              "choice": "<p>A. The TTL attribute's value is set as a Number data type.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. The TTL attribute's value is set as a Binary data type.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. The TTL attribute's value is a timestamp in the Unix epoch time format in seconds.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. The TTL attribute's value is set with an expiration of 1 year.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 198 discussion",
      "discusstion": [
        {
          "id": 750859,
          "date": "Tue 20 Dec 2022 13:30",
          "username": "brucejxx",
          "content": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-before-you-start.html<br>The TTL attribute's value must be a top-level Number data type.<br>The TTL attribute's value must be a timestamp in Unix epoch time format in seconds.<br>The TTL attribute value must be a datetimestamp with an expiration of no more than five years in the past.<br><br>Therefore only B is not a valid condition.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 679786,
          "date": "Mon 26 Sep 2022 15:28",
          "username": "cloudsunriser",
          "content": "only B is wrong. A, C and D are correct conditions for TTL to work.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 661651,
          "date": "Tue 06 Sep 2022 23:03",
          "username": "Adi_M",
          "content": "A, C AND D are correct values for the deletion to work. So, only possibility for the deletion not to work is B.  So, the correct answer is B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 658666,
          "date": "Sat 03 Sep 2022 18:57",
          "username": "mbar94",
          "content": "Seems that ther is wrong attribute type i.e. Binarny. https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html#time-to-live-ttl-before-you-start-formatting",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    },
    {
      "question_id": "#199",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company has deployed an application that uses an Amazon RDS for MySQL DB cluster. The DB cluster uses three read replicas. The primary DB instance is an<br>8XL-sized instance, and the read replicas are each XL-sized instances.<br>Users report that database queries are returning stale data. The replication lag indicates that the replicas are 5 minutes behind the primary DB instance. Status queries on the replicas show that the SQL_THREAD is 10 binlogs behind the IO_THREAD and that the IO_THREAD is 1 binlog behind the primary.<br>Which changes will reduce the lag? (Choose two.)<br></p>",
      "mark": 1,
      "is_partially_correct": true,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: BE</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#199",
          "answers": [
            {
              "choice": "<p>A. Deploy two additional read replicas matching the existing replica DB instance size.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Migrate the primary DB instance to an Amazon Aurora MySQL DB cluster and add three Aurora Replicas.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>C. Move the read replicas to the same Availability Zone as the primary DB instance.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>D. Increase the instance size of the primary DB instance within the same instance class.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>E. Increase the instance size of the read replicas to the same size and class as the primary DB instance.<br></p>",
              "correct": true,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 199 discussion",
      "discusstion": [
        {
          "id": 658678,
          "date": "Sat 03 Sep 2022 19:13",
          "username": "mbar94",
          "content": "Read replicas should be of the same size and class as primary DB.  https://aws.amazon.com/premiumsupport/knowledge-center/rds-mysql-high-replica-lag/<br><br>Aurora seems to be better in handling the lags - https://www.quora.com/What-is-the-difference-between-a-RDS-read-replica-and-an-Amazon-Aurora-Read-replica",
          "upvote_count": "5",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 679793,
          "date": "Mon 26 Sep 2022 15:35",
          "username": "cloudsunriser",
          "content": "BE seems to be answer.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: BE"
        },
        {
          "id": 679792,
          "date": "Mon 26 Sep 2022 15:35",
          "username": "cloudsunriser",
          "content": "BE seems to be answer.",
          "upvote_count": "1",
          "selected_answers": ""
        }
      ]
    },
    {
      "question_id": "#200",
      "topic_id": 1,
      "course_id": 1,
      "case_study_id": null,
      "lab_id": 0,
      "question_text": "<p>A company is using Amazon Aurora MySQL as the database for its retail application on AWS. The company receives a notification of a pending database upgrade and wants to ensure upgrades do not occur before or during the most critical time of year. Company leadership is concerned that an Amazon RDS maintenance window will cause an outage during data ingestion.<br>Which step can be taken to ensure that the application is not interrupted?<br></p>",
      "mark": 1,
      "is_partially_correct": false,
      "question_type": "1",
      "difficulty_level": "0",
      "general_feedback": "<p>Correct Answer: C</p>",
      "is_active": true,
      "answer_list": [
        {
          "question_answer_id": 1,
          "question_id": "#200",
          "answers": [
            {
              "choice": "<p>A. Disable weekly maintenance on the DB cluster.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>B. Clone the DB cluster and migrate it to a new copy of the database.<br></p>",
              "correct": false,
              "feedback": ""
            },
            {
              "choice": "<p>C. Choose to defer the upgrade and then find an appropriate down time for patching.<br></p>",
              "correct": true,
              "feedback": ""
            },
            {
              "choice": "<p>D. Set up an Aurora Replica and promote it to primary at the time of patching.<br></p>",
              "correct": false,
              "feedback": ""
            }
          ]
        }
      ],
      "topic_name": "Exam AWS Certified Database - Specialty topic 1 question 200 discussion",
      "discusstion": [
        {
          "id": 756147,
          "date": "Mon 26 Dec 2022 03:47",
          "username": "lollyj",
          "content": "We are able to defer to a later date",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 748766,
          "date": "Sun 18 Dec 2022 12:06",
          "username": "khun",
          "content": "The ans is C.  Defer.<br>Main ask is:<br><br>Which step can be taken to ensure that the application is not interrupted?<br><br>Cloning have downtime.<br>However, for the Aurora MySQL major version upgrade procedure with minimum database downtime, you can use database clone and in-place upgrade process (using Aurora MySQL 1.22.3 or higher version). The following diagram illustrates this updated architecture.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 738654,
          "date": "Thu 08 Dec 2022 06:41",
          "username": "shuo82",
          "content": "Based on doc, B is correct.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 717336,
          "date": "Sun 13 Nov 2022 14:43",
          "username": "kwch791",
          "content": "Change to C, clone will cause outage",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 717334,
          "date": "Sun 13 Nov 2022 14:42",
          "username": "kwch791",
          "content": "Agree with B",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: B"
        },
        {
          "id": 708064,
          "date": "Sun 30 Oct 2022 23:16",
          "username": "rags1482",
          "content": "Answer is B baksed on mbar94 link",
          "upvote_count": "1",
          "selected_answers": ""
        },
        {
          "id": 679913,
          "date": "Mon 26 Sep 2022 17:50",
          "username": "cloudsunriser",
          "content": "Defer upgrade if solution. Clone will be overkill for this use case.",
          "upvote_count": "3",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 676440,
          "date": "Thu 22 Sep 2022 19:52",
          "username": "venimus_vidimus_vicimus",
          "content": "I also think it's c",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 666529,
          "date": "Mon 12 Sep 2022 03:29",
          "username": "hcltechaws",
          "content": "I'll go with C . Clone is for test not a solution for outage.",
          "upvote_count": "1",
          "selected_answers": "Selected Answer: C"
        },
        {
          "id": 658698,
          "date": "Sat 03 Sep 2022 19:31",
          "username": "mbar94",
          "content": "Agree with B - https://aws.amazon.com/blogs/database/performing-major-version-upgrades-for-amazon-aurora-mysql-with-minimum-downtime/",
          "upvote_count": "2",
          "selected_answers": "Selected Answer: B"
        }
      ]
    }
  ]
}